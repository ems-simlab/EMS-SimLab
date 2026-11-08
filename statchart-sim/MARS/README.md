# Medication Administration Record (MARS) Generator

A specialized template module within **StatChart-Sim** that allows EMS instructors to quickly generate and print high-fidelity, multi-page **Mock Medication Administration Records (MARS)** for complex pre-hospital simulated scenarios.

The generated MARS sheets are designed to be placed with the patient simulator or inside a residential scene prop stack, allowing paramedic students to practice navigating extensive medication histories and polypharmacy challenges.

> ⚠️ **Training use only.** Everything this tool produces is fictional and for simulation/education. It is **not** a real medical record and must never be used for actual patient care or documentation.

---

## 🎯 Simulation Objectives

This module is specifically engineered to test a student's cognitive load and clinical vigilance during scene size-ups and medication reconciliation:

* **Polypharmacy Navigation:** Forces students to sort through complex lists of scheduled daily medications, PRN logs, and recent administration histories to find clues about the patient's acute condition.
* **The Error Engine (None / Subtle / Chaos):** Instructors can intentionally introduce critical medication errors into the chart—such as incorrect dosages, missing signatures, or contraindicated duplicate therapies. 
* **Instructor Answer Key:** Discrepancies and injected errors are highlighted on the instructor's screen for easy grading but remain completely hidden on the printed student copy.

---

## ⚙️ Customizing

Like the core system, the MARS engine relies on editable objects within the single-file architecture:
* **`MED_DB`:** Modify this central dictionary to add local protocol medications, alter baseline dosages, or change common administration frequencies (e.g., BID, TID, PRN).
* **Error Triggers:** Tweak the generation logic to control exactly how "subtle" or "chaotic" the injected medication discrepancies should be for your specific scenario.
