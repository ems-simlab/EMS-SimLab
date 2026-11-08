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
     category  One of the keys in CATEGORIES (statchart, instructor, sim, ref)
     status    'live' = clickable card, 'soon' = greyed-out "Coming soon"
     href      Path to the page (only needed when status is 'live')
     desc      One or two sentences shown on the card

   Watch the punctuation: each entry is wrapped in { }, text goes in
   'single quotes', and entries are separated by commas.
   ===================================================================== */

const CATEGORIES = {
  statchart:  { label: 'StatChart-Sim',   tag: 'doc' },
  instructor: { label: 'Instructor Docs', tag: 'doc' },
  sim:        { label: 'Sim Running',     tag: 'sim' },
  ref:        { label: 'Reference',       tag: 'ref' }
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
