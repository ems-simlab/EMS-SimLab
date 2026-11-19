/* =====================================================================
   EMS Sim Lab: "Pull from scenario" for the StatChart-Sim generators.

   Reads the scenario currently open in the Scenario Builder (saved in this
   browser under "emssim.scenario.draft") and fills the matching fields on
   a generator page: scenario name, patient name, date of birth, gender,
   allergies, target medications and weight. Fields the scenario leaves
   blank keep whatever the generator already has.

   Used by statchart-sim/discharge-summary, MARS and Legal. Each page adds:
     <script src="../../assets/scenario-link.js"></script>
     <button ... onclick="pullFromScenario()">Pull from scenario</button>
   ===================================================================== */
(function () {
  const KEY = 'emssim.scenario.draft';

  function readScenario() {
    try { return JSON.parse(localStorage.getItem(KEY)); } catch (e) { return null; }
  }

  // Set a field and fire the event its own handlers listen for.
  function setField(id, value) {
    const el = document.getElementById(id);
    if (!el || value == null || value === '') return false;
    el.value = value;
    el.dispatchEvent(new Event('input', { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
    return true;
  }

  function setChecked(cb, on) {
    if (cb.checked === on) return;
    cb.disabled = false;
    cb.checked = on;
    cb.dispatchEvent(new Event('change', { bubbles: true }));
  }

  const lower = s => (s || '').toLowerCase();
  // Whole-word match, so "Pollen" doesn't match inside "Pollenex"
  const has = (text, term) => new RegExp('(^|[^a-z])' + term.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '([^a-z]|$)').test(lower(text));
  // "Shellfish (prior hives); Penicillin" -> ["Shellfish", "Penicillin"]
  const terms = text => (text || '').replace(/\([^)]*\)/g, '').split(/[,;\n]| and /i)
    .map(t => t.trim().replace(/\.$/, '')).filter(Boolean);

  function normSex(v) {
    const x = lower(v).trim();
    if (/^(f|female|woman)$/.test(x)) return 'Female';
    if (/^(m|male|man)$/.test(x)) return 'Male';
    return v || '';
  }

  function toPounds(w) {
    const m = (w || '').match(/([\d.]+)\s*(kg|kgs|kilograms?|lb|lbs|pounds?)?/i);
    if (!m) return '';
    const n = parseFloat(m[1]), unit = lower(m[2] || '');
    if (!unit) return '';            // no unit given: don't guess
    return unit.startsWith('k') ? String(Math.round(n * 2.20462)) : String(Math.round(n));
  }

  function notice(html) {
    let box = document.getElementById('scenarioLinkNotice');
    if (!box) {
      box = document.createElement('div');
      box.id = 'scenarioLinkNotice';
      box.setAttribute('role', 'status');
      box.style.cssText = 'position:fixed;right:20px;bottom:20px;z-index:9999;max-width:420px;' +
        'background:#16212e;color:#e6edf3;border:1px solid #2a3b4f;border-left:4px solid #f4a259;' +
        'border-radius:10px;padding:14px 40px 14px 16px;font:14px/1.45 Barlow,system-ui,sans-serif;' +
        'box-shadow:0 10px 30px rgba(0,0,0,.4)';
      document.body.appendChild(box);
    }
    box.innerHTML = html + '<button aria-label="Close" style="position:absolute;top:8px;right:10px;background:none;border:0;color:#8ea1b5;font-size:18px;cursor:pointer">×</button>';
    box.querySelector('button').onclick = () => box.remove();
  }
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  window.pullFromScenario = function () {
    const sc = readScenario();
    if (!sc || !(sc.ptName || sc.ptDob || sc.title)) {
      notice('<strong>No scenario found.</strong><br>Open the <a href="../../tools/scenario-builder.html" style="color:#4ea8de">Scenario Builder</a> in this browser, fill in the patient, then come back and try again.');
      return;
    }
    const filled = [], missed = [];

    if (setField('scenarioName', sc.title)) filled.push('scenario name');
    if (setField('patientName', sc.ptName)) filled.push('patient name');
    if (sc.ptDob) {
      setField('dob', sc.ptDob);
      if (typeof window.calcAge === 'function') window.calcAge();
      filled.push('date of birth');
    } else {
      missed.push('No date of birth in the scenario: add one there so every form shows the same age.');
    }
    const sex = normSex(sc.ptSex), g = document.getElementById('gender');
    if (sex && g) {
      if ([...g.options].some(o => (o.value || o.text) === sex)) { setField('gender', sex); filled.push('gender'); }
      else missed.push(`Gender “${esc(sc.ptSex)}” isn't an option on this form.`);
    }

    // Allergies: tick the matching options, untick the rest
    const allergyBoxes = [...document.querySelectorAll('#allergyGroup input[type=checkbox]')];
    if (allergyBoxes.length && (sc.allergies || '').trim()) {
      const none = /\b(nkda|none|no known)\b/i.test(sc.allergies);
      allergyBoxes.forEach(cb => setChecked(cb, !none && has(sc.allergies, cb.value)));
      filled.push('allergies');
      if (!none) {
        const options = allergyBoxes.map(cb => cb.value);
        const extra = terms(sc.allergies).filter(t => !options.some(o => has(t, o)));
        if (extra.length) missed.push(`Allergies not on this form: ${extra.map(esc).join(', ')}.`);
      }
    }

    // Medications: tick matching names as target meds (the form allows up to 5).
    // Exact name first ("Lisinopril"); otherwise match the drug name alone,
    // so "Metoprolol 25 mg" finds "Metoprolol Succinate".
    const medBoxes = [...document.querySelectorAll('#medGrid input[type=checkbox]')];
    if (medBoxes.length && (sc.meds || '').trim()) {
      const names = medBoxes.map(cb => cb.value), picked = [], approx = [], extra = [];
      terms(sc.meds).forEach(t => {
        let hit = names.find(n => has(t, n));
        if (!hit) {
          const first = lower(t.split(/\s+/)[0]);
          hit = names.find(n => lower(n.split(/\s+/)[0]) === first);
          if (hit) approx.push(`${esc(t.split(/\s+/)[0])} → ${esc(hit)}`);
        }
        if (hit) { if (!picked.includes(hit)) picked.push(hit); } else extra.push(t);
      });
      medBoxes.forEach(cb => setChecked(cb, false));
      medBoxes.filter(cb => picked.slice(0, 5).includes(cb.value)).forEach(cb => setChecked(cb, true));
      if (typeof window.onMedChange === 'function') window.onMedChange();
      if (picked.length) filled.push(`medications (${Math.min(picked.length, 5)})`);
      if (approx.length) missed.push(`Matched by drug name: ${approx.join(', ')}. Check the form is right.`);
      if (picked.length > 5) missed.push(`Only the first 5 medications were selected (the form's limit).`);
      if (extra.length) missed.push(`Medications not in this form's list: ${extra.map(esc).join(', ')}.`);
    }

    if (document.getElementById('weight') && sc.ptWeight) {
      const lb = toPounds(sc.ptWeight);
      if (lb) { setField('weight', lb); filled.push('weight'); }
      else missed.push(`Weight “${esc(sc.ptWeight)}” has no unit, so it wasn't copied (use kg or lb in the scenario).`);
    }

    notice(
      `<strong>Pulled from “${esc(sc.title || 'Untitled scenario')}”</strong><br>` +
      (filled.length ? `Filled: ${filled.join(', ')}.` : 'Nothing matched this form.') +
      (missed.length ? `<ul style="margin:8px 0 0;padding-left:18px;color:#f4c38a">${missed.map(m => `<li>${m}</li>`).join('')}</ul>` : '') +
      '<div style="margin-top:8px;color:#8ea1b5;font-size:12.5px">Everything else on this form is unchanged.' +
      (document.querySelector('.discharge-doc, .mars-doc, .legal-doc') ? '' : ' Click <strong style="color:#e6edf3">Generate</strong> to see the document.') + '</div>'
    );
  };
})();
