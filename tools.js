/* =====================================================================
   EMS SIM LAB — TOOL LIST
   This is the only file you edit to add, remove or reorder tools on the
   home page. You never need to touch index.html for that.

   To add a tool:
     1. Put its page in the tools/ folder (start from tools/_template.html).
     2. Copy one of the entries below, paste it where you want the card,
        and change the details.

   Fields:
     title     Card heading
     icon      An emoji
     category  Which section it appears in: a key from CATEGORIES
               (statchart, instructor, sim, ref)
     status    'live' = clickable card, 'soon' = greyed-out "Coming soon"
     href      Path to the page (only needed when status is 'live')
     desc      One or two sentences shown on the card

   SECTIONS: each key in CATEGORIES is a section panel on the home page,
   shown in the order listed. A section shows every tool whose category
   matches its key; sections with no tools are hidden. Section fields:
     label    Section heading            accent   Color (hex) for the panel
     desc     One-line description       feature  Optional banner for a
                                                  sub-site (see statchart)
   To add a section, copy one of the CATEGORIES entries and give it a new
   key, then set that key as the category of the tools that belong in it.

   Watch the punctuation: each entry is wrapped in { }, text goes in
   'single quotes', and entries are separated by commas.
   ===================================================================== */

const CATEGORIES = {
  statchart: {
    label: 'Patient Paperwork', accent: '#f4a259',
    desc: 'Simulated documents for students to find on scene: discharge summaries, medication records and end-of-life orders.',
    feature: { title: 'StatChart-Sim', logo: 'statchart-sim/assets/logo.svg', href: 'statchart-sim/index.html',
               text: 'Paperwork for patients who don\'t exist. Each generator can pull the patient\'s details from your scenario, so every document matches.' }
  },
  instructor: {
    label: 'Instructor Docs', accent: '#4ea8de',
    desc: 'Plan and evaluate: build scenarios, align them to your program\'s framework, and print evaluation sheets.'
  },
  sim: {
    label: 'Sim Running', accent: '#4cc38a',
    desc: 'Tools to use while a scenario is running.'
  },
  ref: {
    label: 'Reference', accent: '#b39ddb',
    desc: 'Quick references for before and after the run.'
  }
};

const TOOLS = [
  { title: 'Discharge Summaries', icon: '🏥', category: 'statchart', status: 'live', href: 'statchart-sim/discharge-summary/index.html',
    desc: 'Hospital discharge paperwork and clinic follow-up summaries, with a recent stay, baseline history and home-care instructions.' },
  { title: 'Medication Administration Records', icon: '💊', category: 'statchart', status: 'live', href: 'statchart-sim/MARS/index.html',
    desc: 'A week of scheduled doses and a PRN log, with adjustable compliance and on-screen-only dosing errors for reconciliation practice.' },
  { title: 'DNR, POLST & MOLST Orders', icon: '⚖️', category: 'statchart', status: 'live', href: 'statchart-sim/Legal/index.html',
    desc: 'State-specific legal directives and life-sustaining treatment orders for advance-directive scenarios.' },
  { title: 'Scenario Builder', icon: '📋', category: 'instructor', status: 'live', href: 'tools/scenario-builder.html',
    desc: 'Write a full sim scenario — dispatch, patient, vitals by stage, critical actions, debrief — and print it as an instructor packet.' },
  { title: 'Framework Scenario Builder', icon: '📋', category: 'instructor', status: 'live', href: 'tools/framework-scenario-builder.html',
    desc: 'Write a scenario by hand aligned to the program phase, Clinical Judgment Framework steps and GRS dimensions, and print a packet with a GRS rating sheet and CJF debrief prompts.' },
  { title: 'Skills Evaluation Sheet', icon: '✅', category: 'instructor', status: 'live', href: 'tools/skills-sheet.html',
    desc: 'Build a point-based skills check-off sheet with critical-fail criteria, then print copies for evaluators.' },
  { title: 'D20 Skill Roller', icon: '🎲', category: 'sim', status: 'live', href: 'tools/d20-roller.html',
    desc: 'Let the dice decide skill attempts (IV starts, airways, decompression) with conditions and attempt limits, or roll a scene event from an editable table. Every roll is logged for the debrief.' },
  { title: 'Vitals Monitor', icon: '📈', category: 'sim', status: 'soon',
    desc: 'Full-screen mock monitor the instructor can drive live from a phone or laptop.' },
  { title: 'Scenario Timer', icon: '⏱️', category: 'sim', status: 'soon',
    desc: 'Run-clock with a timestamped intervention log for debriefing.' },
  { title: 'Debrief Guide', icon: '💬', category: 'ref', status: 'soon',
    desc: 'Structured debrief prompts (plus/delta, advocacy-inquiry) for after each run.' }
];
