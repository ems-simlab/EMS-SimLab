/* EMS Sim Lab — shared helpers for every page */
(function () {

  const LOGO = '<svg viewBox="0 0 32 32" aria-hidden="true"><rect x="1" y="1" width="30" height="30" rx="7" fill="#e5383b"/><polyline points="4,17 10,17 13,9 17,24 20,13 22,17 28,17" fill="none" stroke="#fff" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round"/></svg>';

  // Build the shared EMS Sim Lab top bar.
  // root = relative path back to the site root ("", "../" or "../../").
  // active = "home" | "statchart" to highlight a nav link.
  window.renderTopbar = function (root, active) {
    const home = root + 'index.html';
    const bar = document.createElement('header');
    bar.className = 'topbar';
    bar.innerHTML =
      '<a class="brand" href="' + home + '">' + LOGO + '<span>EMS <b>Sim</b> Lab</span></a>' +
      '<nav>' +
      '<a href="' + home + '#tools"' + (active === 'home' ? ' class="active"' : '') + '>Tools</a>' +
      '<a href="' + root + 'statchart-sim/index.html"' + (active === 'statchart' ? ' class="active"' : '') + '>StatChart-Sim</a>' +
      '<a href="' + home + '#about">About</a>' +
      '<a href="https://github.com/ems-simlab/EMS-SimLab">GitHub</a>' +
      '</nav>';
    document.body.prepend(bar);
  };

  // Small toast message instead of alert()
  window.toast = function (msg) {
    let t = document.querySelector('.toast');
    if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); }
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(t._h);
    t._h = setTimeout(() => t.classList.remove('show'), 2400);
  };

  window.escapeHtml = function (s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  };

  window.copyText = async function (text, okMsg) {
    try { await navigator.clipboard.writeText(text); toast(okMsg || 'Copied'); }
    catch (e) { toast('Copy was blocked by the browser'); }
  };

  // Print the document. Works when self-hosted; some embedded viewers block it.
  window.printDoc = function () {
    try { window.print(); }
    catch (e) { toast('Printing is blocked here — use Copy HTML, or open the self-hosted site'); }
  };

  // Wrap a generated document in a standalone printable HTML page
  window.standaloneHtml = function (title, innerHtml) {
    const css = Array.from(document.styleSheets).map(ss => {
      try { return Array.from(ss.cssRules).map(r => r.cssText).join('\n'); } catch (e) { return ''; }
    }).join('\n');
    return '<!DOCTYPE html><html><head><meta charset="utf-8"><title>' + escapeHtml(title) +
      '</title><style>' + css + ' body{background:#fff} .paper{min-height:0}</style></head><body><div class="paper">' +
      innerHtml + '</div></body></html>';
  };

  // localStorage that never throws
  window.store = {
    get(k) { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; } },
    del(k) { try { localStorage.removeItem(k); } catch (e) {} }
  };

  // Read a JSON file chosen in an <input type=file>
  window.readJsonFile = function (input, cb) {
    const f = input.files && input.files[0];
    if (!f) return;
    const r = new FileReader();
    r.onload = () => { try { cb(JSON.parse(r.result)); } catch (e) { toast('That file is not valid JSON'); } };
    r.readAsText(f);
    input.value = '';
  };
})();
