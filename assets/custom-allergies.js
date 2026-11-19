/* =====================================================================
   EMS Sim Lab: custom allergies for the StatChart-Sim generators.

   Adds a "+ Add allergy" button to the allergy options (#allergyGroup).
   Custom allergies behave like the built-in ones: tick to include them on
   the document. They're saved in this browser and shared between the
   Discharge Summary and MARS generators. Each has an × to remove it.

   Also exposes window.addCustomAllergy(name), which "Pull from scenario"
   (assets/scenario-link.js) uses for allergies not on the form.

   Used by: statchart-sim/discharge-summary and statchart-sim/MARS
     <script src="../../assets/custom-allergies.js"></script>
   ===================================================================== */
(function () {
  const KEY = 'emssim.customAllergies';

  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; } }
  function save(list) { try { localStorage.setItem(KEY, JSON.stringify(list)); } catch (e) {} }

  // Each generator has its own refresh function; call whichever exists.
  function refresh() {
    if (typeof window.updatePreview === 'function') window.updatePreview();
    else if (typeof window.liveRender === 'function') window.liveRender();
  }

  const clean = s => String(s || '').replace(/\s+/g, ' ').trim().slice(0, 40);
  const same = (a, b) => a.toLowerCase() === b.toLowerCase();

  let group, addBtn;

  function makePill(name, checked) {
    const pill = document.createElement('label');
    pill.className = 'check-pill custom-allergy';
    pill.title = 'Custom allergy (saved in this browser)';
    const cb = document.createElement('input');
    cb.type = 'checkbox'; cb.value = name; cb.checked = !!checked;
    cb.addEventListener('change', refresh);
    const x = document.createElement('button');
    x.type = 'button'; x.className = 'pill-x'; x.textContent = '×';
    x.setAttribute('aria-label', 'Remove ' + name + ' from the list');
    x.addEventListener('click', e => {
      e.preventDefault(); e.stopPropagation();   // don't toggle the checkbox
      const wasChecked = cb.checked;
      pill.remove();
      save(load().filter(n => !same(n, name)));
      if (wasChecked) refresh();
    });
    pill.append(cb, document.createTextNode(name), x);
    return pill;
  }

  // Add (or tick, if it already exists) an allergy. Returns 'added', 'exists' or ''.
  window.addCustomAllergy = function (raw, opts) {
    const name = clean(raw);
    if (!name || !group) return '';
    const checked = !opts || opts.checked !== false;
    const existing = [...group.querySelectorAll('input[type=checkbox]')].find(cb => same(cb.value, name));
    if (existing) {
      if (checked && !existing.checked) { existing.checked = true; refresh(); }
      return 'exists';
    }
    group.insertBefore(makePill(name, checked), addBtn);
    const list = load();
    if (!list.some(n => same(n, name))) { list.push(name); save(list); }
    if (checked) refresh();
    return 'added';
  };

  function openForm() {
    addBtn.hidden = true;
    const form = document.createElement('span');
    form.className = 'allergy-add-form';
    form.innerHTML =
      '<input type="text" maxlength="40" placeholder="e.g. Shellfish" aria-label="New allergy">' +
      '<button type="button" class="check-pill allergy-add-ok">Add</button>' +
      '<button type="button" class="check-pill allergy-add-cancel" aria-label="Cancel">Cancel</button>';
    group.insertBefore(form, addBtn);
    const input = form.querySelector('input');
    const close = () => { form.remove(); addBtn.hidden = false; addBtn.focus(); };
    const submit = () => {
      const r = window.addCustomAllergy(input.value);
      if (!r) { input.focus(); return; }
      close();
    };
    form.querySelector('.allergy-add-ok').onclick = submit;
    form.querySelector('.allergy-add-cancel').onclick = close;
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') { e.preventDefault(); submit(); }
      if (e.key === 'Escape') { e.preventDefault(); close(); }
    });
    input.focus();
  }

  function addStyles() {
    const css = document.createElement('style');
    css.textContent = `
      #allergyGroup .allergy-add { border-style: dashed; font: inherit; font-size: .77rem; }
      #allergyGroup .pill-x { background: none; border: 0; color: inherit; font-size: 1rem; line-height: 1;
        margin: 0 -4px 0 6px; padding: 0 2px; cursor: pointer; opacity: .7; }
      #allergyGroup .pill-x:hover { opacity: 1; }
      #allergyGroup .allergy-add-form { display: inline-flex; gap: 6px; align-items: center; }
      #allergyGroup .allergy-add-form input { width: 150px; padding: 4px 9px; font-size: .8rem; border-radius: 20px; }
      #allergyGroup .allergy-add-form .check-pill { font: inherit; font-size: .77rem; }
      #allergyGroup [hidden] { display: none !important; }`;
    document.head.appendChild(css);
  }

  function init() {
    group = document.getElementById('allergyGroup');
    if (!group) return;
    addStyles();
    addBtn = document.createElement('button');
    addBtn.type = 'button';
    addBtn.className = 'check-pill allergy-add';
    addBtn.textContent = '+ Add allergy';
    addBtn.addEventListener('click', openForm);
    group.appendChild(addBtn);
    const builtIn = [...group.querySelectorAll('input[type=checkbox]')].map(cb => cb.value);
    load().filter(n => !builtIn.some(b => same(b, n)))
          .forEach(n => group.insertBefore(makePill(n, false), addBtn));
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
