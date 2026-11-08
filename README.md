# EMS Sim Lab

**Live site: [www.emssimlab.org](https://www.emssimlab.org)**

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

### Sim running
* **[D20 Skill Roller](./tools/d20-roller.html)** — let the dice decide skill attempts (IV starts, airways, decompression) with conditions and attempt limits, or roll scene events from an editable table. Every roll is logged for the debrief.

---
<!--
## 🗂️ Project layout

```
index.html                  EMS Sim Lab home page
tools.js                    the tool list shown on the home page (edit this to add tools)
assets/
  site.css                  shared dark theme for EMS Sim Lab pages
  common.js                 shared top bar, toast, print/copy helpers
  tool-theme.css            dark theme layer for the StatChart-Sim generators
  favicon.svg
tools/                      EMS Sim Lab tools (_template.html = starter for new ones)
statchart-sim/
  index.html                StatChart-Sim section home page
  assets/logo.svg|png       StatChart-Sim logo
  discharge-summary/  MARS/  Legal/
```

## ➕ Adding a tool

You never need to edit `index.html` to add a tool.

1. **Create the page.** Copy `tools/_template.html`, rename it (e.g. `tools/vitals-monitor.html`) and build the tool inside it. The template already includes the shared top bar, styles and helpers.
2. **List it.** Open `tools.js` in the site's root folder, copy an existing entry, and change the title, icon, category, link and description. Use `status: 'soon'` to show a greyed-out "Coming soon" card until it's ready.
3. **Commit both files.** That's it: the home page reads `tools.js` and builds the cards.

If the tool list ever disappears from the home page, there's a typo in `tools.js` (usually a missing comma or quote). The page shows a warning when that happens.

**Updating an existing tool** only touches that tool's own file.

**Editing directly on GitHub:** open the file on github.com, click the pencil icon, make the change and commit. To add a new file, open the `tools` folder and use **Add file → Upload files**.

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
