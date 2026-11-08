# Life-Sustaining Treatment & Legal Forms Generator

A specialized template module within **StatChart-Sim** designed to generate highly realistic, state-specific **legal directives and life-limiting order forms**—including **DNR**, **POLST**, and **MOLST** documentation.

In emergency medicine, legal paperwork dictates the entire course of resuscitative care. This module allows instructors to drop crisp, believable legal documents into a scenario to see if students can accurately interpret a patient's advanced directives under pressure.

> ⚠️ **Training use only.** Everything this tool produces is fictional and for simulation/education. It is **not** a legally binding document and must never be used for actual patient care or legal documentation.

---

## 🎯 Simulation Objectives

This module targets critical non-clinical decision-making, ethical dilemmas, and protocol compliance:

* **Vigilance & Validation:** Instructors can toggle hidden discrepancies—such as an unsigned form, an expired date, a mismatched patient name, or unchecked elective boxes—to see if students blindly accept the paperwork or thoroughly verify its legal validity.
* **Complex Directives:** Generates realistic checking combinations for POLST/MOLST sheets, such as "Do Not Resuscitate" paired with "Full Interventions (Intubation/IV)" to challenge students on nuanced scopes of treatment.
* **High-Fidelity Visuals:** Formatted to mimic official state registry layouts, complete with realistic signature blocks, witness fields, and surrogate decision-maker sections.

---

## ⚙️ Customizing

* **State-Specific Text:** The legal boilerplate text and specific checkboxes can be adjusted inside the HTML script block to closely match the exact wording of your local state's specific DNR or POLST layout.
* **Signature Toggles:** Easily adjust the boolean flags in the generator interface to instantly simulate "Valid/Executed" or "Defective/Incomplete" legal props.
