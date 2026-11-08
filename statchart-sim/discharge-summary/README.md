# Mock Patient Discharge Summary Generator (EMS Simulation)

A self-contained web tool that lets EMS instructors quickly generate and print
standardized **mock patient discharge summaries** for high-fidelity, pre-hospital
simulated scenarios. The generated summary is intended to be placed with the
patient simulator so paramedic students can practice reviewing realistic
After Visit Summary paperwork.

The entire application is a **single HTML file** — no server, no database, no
build step, and no internet connection required once loaded. It runs in any
modern browser and prints (or saves to PDF) directly from the page.

> ⚠️ **Training use only.** Everything this tool produces is fictional and for
> simulation/education. It is **not** a real medical record and must never be
> used for actual patient care or documentation. See the disclaimer below.

---

## Features

- **Single-file, offline-capable.** Open `discharge-generator.html` in a browser
  or host it on a web server — no dependencies to install.
- **Live preview.** The printable After Visit Summary builds in real time as the
  form is filled in.
- **Linked clinic → diagnosis selection.** Choosing a clinic filters the diagnosis
  list to that specialty; the **Emergency Room** option unlocks all diagnoses.
- **Auto-generated clinical content.** Each diagnosis supplies a reason for visit,
  discharge instructions, new orders, important notes, and realistic vital-sign
  ranges across three abnormality profiles (Within Normal Limits / Mildly Abnormal
  / Significantly Abnormal). Vitals can be re-rolled or edited by hand.
- **Medication engine.**
  - *Target/anchor medications* (1–5) chosen by the instructor.
  - *Medication error level* (None / Subtle / Chaos) optionally introduces realistic
    dose errors for students to catch. Errors are flagged on screen for the
    instructor's answer key but hidden on the printed copy.
  - *Background medication noise* adds random distractor medications to increase
    the difficulty of the medication reconciliation.
- **Print / Save as PDF** straight from the browser, formatted to match the
  standard After Visit Summary layout.

---

## Customizing

Everything lives in the one HTML file and is straightforward to edit:

- **Logo** — stored once near the top of the `<script>` block as
  `const LOGO_SRC="data:image/svg+xml;base64,...";`. Replace that string with your own
  base64-encoded image (SVG or PNG) to change the badge everywhere.
- **Medications** — the `MED_DB` object lists each medication with its dose, route,
  and frequency. Add, remove, or edit entries here.
- **Diagnoses & clinics** — the `DIAG_DATA` object holds the clinical content and
  vital-sign ranges for each diagnosis, and `CLINIC_DIAGNOSES` maps clinics to their
  diagnoses. Edit these to adjust scenarios.

---

## Medical & content disclaimer

This software generates **fictional** discharge documentation for the sole purpose
of EMS education and simulation. It is **not** medical advice, **not** a clinical
decision-support tool, and **not** a real medical record.

- Doses, vital-sign ranges, and clinical text are plausible defaults created for
  training scenarios and should be **reviewed against your own program's standards
  and local protocols** before classroom use.
- Some scenarios reference sensitive topics (e.g., behavioral health crises and
  substance withdrawal). These are written for clinical training and should be
  reviewed and used with appropriate care and current local crisis resources.

The authors and contributors assume no liability for any use of this tool outside
of its intended simulation/educational context.

---

## License

The **source code** in this repository is licensed under the
**GNU General Public License v3.0** — see the [`LICENSE`](../../LICENSE) file for the full text.

The StatChart-Sim logo is part of this project and may be used with it. If you run a copy for your own program, you're welcome to swap in your own branding.

---

## Acknowledgments

Built by EMS educators for the wider EMS education community. Ideas, bug reports and contributions are welcome through GitHub issues and pull requests.
