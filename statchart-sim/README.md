# __**StatChart-Sim&trade;**__

*Part of [EMS Sim Lab](../). Adapted from the original [StatChart-Sim](https://github.com/ems-simlab/StatChart-Sim) project.*

A set of self-contained web tools that lets EMS instructors quickly generate and print standardized, high-fidelity **clinical paperwork** for pre-hospital simulated scenarios. 

Instead of just abstract verbal briefings, **StatChart-Sim** allows you to populate training environments with the realistic, messy, and data-dense paper trails that paramedic students must navigate, review, and interpret in the field.

Each application is a **single HTML file** — no server, no database, no build step, and no internet connection required once loaded. It runs in any modern browser and prints (or saves to PDF) directly from the page.

> ⚠️ **Training use only.** Everything this tool produces is fictional and for simulation/education. It is **not** a real medical record system and must never be used for actual patient care or official documentation. See the disclaimer below.

---

## 🛠️ Simulated Patient Paperwork

The generator dynamically compiles data into several critical pre-hospital training documents:

* **[Discharge Summaries & After Visit Papers](./discharge-summary/):** Comprehensive hospital discharge paperwork detailing recent stays, specialized clinic follow-ups, and baseline patient histories.
* **[MARS Sheets (Medication Administration Record)](./MARS/):** Multi-page medication logs detailing scheduled doses, PRN medications, and administration histories—perfect for complex polypharmacy and reconciliation scenarios.
* **[Life-Sustaining Treatment & Legal Forms](./Legal/):** State-specific, highly realistic legal directives including:
  * **DNR** (Do Not Resuscitate) orders
  * **POLST** (Physician Orders for Life-Sustaining Treatment)
  * **MOLST** (Medical Orders for Life-Sustaining Treatment)

---

## ⚖️ Medical & Content Disclaimer

This software generates **fictional** medical documentation for the sole purpose of EMS education and simulation. It is **not** medical advice, **not** a clinical decision-support tool, and **not** a real medical record.

* Doses, vital-sign ranges, legal form text, and clinical summaries are plausible defaults created for training scenarios. They should be **reviewed against your own program's standards and local protocols** before classroom use.
* Some scenarios reference sensitive topics (e.g., behavioral health crises and substance withdrawal). These are written for professional clinical training and should be reviewed and used with appropriate care and alignment with current local crisis resources.

The authors and contributors assume no liability for any use of this tool outside of its intended simulation/educational context.

---

## 📜 License

The **source code** in this repository is licensed under the **GNU General Public License v3.0** — see the [`LICENSE`](../LICENSE) file for the full text.

The StatChart-Sim logo is part of this project and may be used with it. If you run a copy for your own program, you're welcome to swap in your own branding.

---

## 🤝 Acknowledgments

Built by EMS educators for the wider EMS education community. Ideas, bug reports and contributions are welcome through GitHub issues and pull requests.
