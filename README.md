# EMS Sim Lab

Free, open-source browser tools for EMS simulation and education: paperwork generators, scenario builders and skills sheets. Built by EMS educators for the wider EMS education community.

Every tool is a plain HTML page. There's no server, no database, no build step, and no account. It runs in any modern browser, works offline once loaded, and prints (or saves to PDF) straight from the page.

> ⚠️ **Training use only.** Everything these tools produce is fictional and for simulation/education. It is **not** a medical record, medical advice, or a clinical decision tool, and must never be used for real patient care or documentation.

---

## 🧰 What's inside

### [StatChart-Sim](./statchart-sim/) — simulated patient paperwork
* **[Discharge Summaries](./statchart-sim/discharge-summary/)** — hospital discharge and after-visit paperwork with history, instructions and medication lists.
* **[MARS](./statchart-sim/MARS/)** — multi-day medication administration records with compliance presets and instructor-only error flags.
* **[DNR / POLST / MOLST](./statchart-sim/Legal/)** — state-specific advance directive and life-sustaining treatment forms (currently Wisconsin).

StatChart-Sim is adapted from the original [StatChart-Sim](https://github.com/ems-simlab/StatChart-Sim) project.

### Instructor tools
* **[Scenario Builder](./tools/scenario-builder.html)** — write a full scenario (dispatch, patient, staged vitals, critical actions, moulage, debrief) and print it as an instructor packet. Export/import as JSON.
* **[Skills Evaluation Sheet](./tools/skills-sheet.html)** — build a point-based skills check-off sheet with section headers, automatic totals and critical-fail criteria.

---
<!--
## 🗂️ Project layout

```
index.html                  EMS Sim Lab home page (tool registry lives at the bottom)
assets/
  site.css                  shared dark theme for EMS Sim Lab pages
  common.js                 shared top bar, toast, print/copy helpers
  tool-theme.css            dark theme layer for the StatChart-Sim generators
  favicon.svg
tools/                      EMS Sim Lab instructor tools
statchart-sim/
  index.html                StatChart-Sim section home page
  assets/logo.svg|png       StatChart-Sim logo
  discharge-summary/  MARS/  Legal/
```

## ➕ Adding a tool

1. Put the page in `tools/` (or in a new section folder).
2. Add one entry to the `TOOLS` list near the bottom of `index.html`. Use `status: 'soon'` to show it greyed out until it's ready.
3. To give a page the shared top bar, include `assets/site.css` and `assets/common.js` and call `renderTopbar('<path to root>')`.

## 🎨 Theme notes

The StatChart-Sim generators keep their own styles and add `assets/tool-theme.css`, which restyles only the on-screen controls. Generated documents and printouts are unchanged. Remove that `<link>` from a generator to restore its original light look.

---
-->
## ⚖️ Medical & content disclaimer

Doses, vital-sign ranges, legal form text and clinical summaries are plausible defaults created for training. Review them against your own program's standards and local protocols before classroom use. Some scenarios reference sensitive topics (e.g., behavioral health crises and substance withdrawal); use them with appropriate care.

The authors and contributors assume no liability for any use of these tools outside their intended simulation/educational context.

## 📜 License

Licensed under the **GNU General Public License v3.0** — see [`LICENSE`](LICENSE).

## 🤝 Contributing

Ideas, bug reports and pull requests are welcome, especially tools for new scenarios and versions of the legal forms for other states.
