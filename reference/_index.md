# Axomiya Engineer - Physics Reference Index

## Source Material
VMC Physics Class 11 & 12 JEE (Modules + Workbooks + Solutions)
675 PDFs, 838 MB total

## Chapter Status

### Session 1 (Completed)
| Chapter | File | Status | Content |
|---|---|---|---|
| Short Notes Overview | `_short-notes.md` | Done | All-chapter formula sheet (6 pages) |
| Kinematics | `kinematics.md` | Done | Theory (1D, 2D, projectile, circular) + 450+ questions |
| Newton's Laws | `newtons-laws.md` | Done | Theory (forces, friction, circular dynamics, pulleys, pseudo forces) + 276+ questions |
| Work, Power, Energy | `work-power-energy.md` | Done | Theory (work, energy, collisions, momentum, COM) + 290+ questions |

### Session 2 (Completed)
| Chapter | File | Status | Content |
|---|---|---|---|
| Gravitation | `gravitation.md` | Done | Theory (10 concepts) + 200+ questions + JEE archives with keys |
| Rotational Motion | `rotational-motion.md` | Done | Theory (33 concepts) + 200+ questions (L0-L3, Misc, JEE Main/Advanced archives with keys) |
| Mechanical Properties | `mechanical-properties.md` | Done | Theory (10 concepts) + 150+ questions (L0-L3, Misc, JEE Main/Advanced archives with keys) |
| Fluid Mechanics | `fluid-mechanics.md` | Done | Theory (19 concepts) + 170+ questions (L0-L3, Misc, JEE Main/Advanced archives with keys) |

### Session 3 (Completed)
| Chapter | File | Status | Content |
|---|---|---|---|
| Thermodynamics | `thermodynamics.md` | Done | Theory (KTG, gas laws, thermodynamic processes, Carnot) + 200+ questions (L0-L3, Misc, JEE Main/Advanced archives with keys) |
| Simple Harmonic Motion | `shm.md` | Done | Theory (12 concepts) + 200+ questions (L0-L3, Misc, JEE Main/Advanced archives with keys) |
| Waves | `waves.md` | Done | Theory (wave motion, superposition, standing waves, beats, Doppler) + 200+ questions (L0-L3, Misc, JEE Main/Advanced archives with keys) |

### Session 4 (Completed)
| Chapter | File | Status | Content |
|---|---|---|---|
| Electrostatics | `electrostatics.md` | Done | Theory (24 concepts: Coulomb, Gauss, potential, capacitance) + 165+ Electrostatics questions + 115+ Capacitor questions + JEE archives with keys |
| Current Electricity | `current-electricity.md` | Done | Theory (13 concepts: Ohm's law, Kirchhoff, Wheatstone, potentiometer) + 200+ questions (L0-L2, Misc, JEE Main/Advanced archives with keys) |
| Magnetism | `magnetism.md` | Done | Theory (30 concepts: Biot-Savart, Ampere, Lorentz, galvanometer, materials) + 200+ questions (L0-L2, Misc, JEE Main/Advanced archives with keys) |

### Session 5 (Completed)
| Chapter | File | Status | Content |
|---|---|---|---|
| EMI | `emi.md` | Done | Theory (15 concepts: Faraday, Lenz, motional EMF, inductance, RL/LC circuits) + 270+ questions (L0-L2, Misc, JEE Main/Advanced archives with keys) |
| AC Circuits | `ac-circuits.md` | Done | Theory (15 concepts: RMS, reactance, LCR series/parallel, resonance, power, transformers) + 150+ questions (L0-L2, Misc, JEE Main/Advanced archives with keys) |
| Ray Optics | `ray-optics.md` | Done | Theory (18 concepts: mirrors, refraction, TIR, prism, lenses, aberration, instruments) + 200+ questions (L0-L2, JEE Main/Advanced archives with keys) |
| Wave Optics | `wave-optics.md` | Done | Theory (15 concepts: YDSE, interference, diffraction, polarization, Brewster, Malus) + 170+ questions (L0-L2, JEE Main/Advanced archives with keys) |

### Session 6 (Pending)
| Chapter | File | Status |
|---|---|---|
| EM Waves | `em-waves.md` | Pending |
| Modern Physics | `modern-physics.md` | Pending |
| Supplementary (Vectors, Units, Math) | `_supplementary.md` | Pending |

## PDF Folder → Chapter Mapping

### Class 11
| PDF Folder | Chapter File |
|---|---|
| Kinematics/ + Motion in 2D/ | `kinematics.md` |
| Newton laws of motion/ | `newtons-laws.md` |
| Energy and Momentum/ | `work-power-energy.md` |
| Gravitation/ | `gravitation.md` |
| Rotational Motion/ | `rotational-motion.md` |
| Heat (Calorimetry), Properties of Matter/ | `mechanical-properties.md` + `thermodynamics.md` |
| Kinetic Theory of Gases (Thermodynamics)/ | `thermodynamics.md` |
| Liquids/ | `fluid-mechanics.md` |
| Simple Harmonic Motion/ | `shm.md` |
| Wave Motion/ | `waves.md` |
| Vectors/ + Unit and Dimensions/ + Basic Math Tools/ | `_supplementary.md` |

### Class 12
| PDF Folder | Chapter File |
|---|---|
| Electrostatics/ + Capacitors/ | `electrostatics.md` |
| DC Circuits/ | `current-electricity.md` |
| Magnetic Effect of Current/ | `magnetism.md` |
| Electromagnetic Induction/ | `emi.md` |
| AC Circuits/ | `ac-circuits.md` |
| Ray Optics/ | `ray-optics.md` |
| Wave Optics/ | `wave-optics.md` |
| Modern Physics/ | `modern-physics.md` |
| Only JEE Mains Topics/ | `em-waves.md` + extras |
| Experiment & Errors/ | `_supplementary.md` |

## File Format
Each chapter file contains:
- Overview
- Numbered concept sections with formulas, diagrams ([SVG-REF]), and worked examples
- Questions organized by difficulty (Level 0-4)
- JEE Main and Advanced archive questions with answer keys

## What Was Skipped
- Solution PDFs (~200 files) - Answer keys provide correct answers; solutions read only if needed later

## Agent Strategy for Remaining Sessions (4-6)

### Pipeline (3 steps per session)
1. **Step 1: Reference .md files** — Read VMC Physics PDFs → create `reference/{chapter}.md`
2. **Step 2: Website HTML pages** — Use reference .md → expand `chapters/{chapter}.html`
3. **Step 3: Flashcard decks** — Create `cards/{chapter}.json` + register in `js/flashcards.js`

### Model Selection
- **Step 1 (Reference .md from PDFs):** Use **haiku model** — cost-effective for bulk PDF reading
- **Step 2 (HTML page expansion):** Use **opus model** — higher quality writing for student-facing content
- **Step 3 (Flashcard creation):** Use **opus model** — needs accurate KaTeX formatting and good MCQ quality
- **Skip**: Solution PDFs (never read these)

### 100-Image Limit (CRITICAL — Sessions 3 & 4 failed multiple times)
Claude has a hard limit of **100 images/documents per conversation**. Each PDF page counts as 1 image. This means:
- A single agent can read at most ~100 pages of PDFs total across its entire lifetime
- Module PDFs are typically 30-50 pages, Workbooks 40-60 pages, Answer Keys 5-10 pages — combined they ALWAYS exceed 100
- **NEVER give a single agent both theory PDFs AND question PDFs** — it WILL fail

### Mandatory Agent Split for Step 1 (Reference .md)
**Agent A (Theory-only):** Reads ONLY Module PDF(s) → writes theory sections to .md file
- Read in chunks of 8 pages max (pages: "1-8", "9-16", etc.)
- For chapters with 2 Module PDFs (e.g., Electrostatics + Capacitors), read both but stay under 100 total pages
- Writes overview + all numbered concept sections + "Questions to be added" placeholder

**Agent B (Questions-only):** Reads Workbook + Answer Key + Miscellaneous PDFs → appends questions to .md file
- Read Answer Key first (small, ~5-10 pages)
- Read Workbook in chunks of 8 pages
- Read Miscellaneous/JEE archive PDF in chunks of 8 pages
- NEVER read DTS Level 3 PDFs in the same agent — use a separate Agent C if needed

**Agent C (Level 3 + JEE Advanced, if needed):** Reads DTS Level 3 PDFs + remaining JEE archives
- Only needed if Agent B runs out of image budget

### Anti-Context-Overflow Rules (Session 2 failed once due to overflow)
1. **One section per agent** — each haiku agent writes only ONE section then exits (never multiple)
2. **Never pass full file content** into agent prompts — only line numbers and anchor strings for Edit
3. **Sequential batches** — don't launch next batch until previous completes (no stacking context)
4. **Pre-write content in the prompt** — agents just append via Edit, no large-scale reading/generating
5. **Read PDFs in chunks of 8 pages max** — never more than 8 pages per Read call
6. **Separate reader agents from writer agents** — reader extracts questions, writer appends them
7. **Always use `model: "haiku"`** on Task tool calls — never use default (Opus) for PDF reading

---

## Step 1: Reference .md Format

### Batch Structure (7 batches per session, 3 files in parallel per batch)
1. **Answer Keys** — tables with 15 Q per row for each level + JEE archives
2. **Level 0 (Easy)** — CBSE pattern: VSA, SA-I, SA-II, LA (~20-27 questions)
3. **Level 1** — 3 DTS subsections, 15 MCQs each = 45 questions, `####` headings, Q1-45
4. **Level 2** — DTS NAT (Q46-60) + harder MCQ sections (Q61-75/90), multi-correct with `**\*N.**`
5. **Level 3 (Hard)** — ~12-18 subjective problems, continuous numbering from Level 2
6. **Miscellaneous + JEE Main Archive** — Misc Q1-10 (reset numbering), JEE Main ~35-43 Q with `[Year]` + `**Ans: X**` + answer key table
7. **JEE Advanced Archive** — organized by type (Single correct, Multi-correct, Assertion-Reason, Match Matrix, NAT, Fill-in-blanks, True/False) + answer key table

### Reference .md Format Rules (from gravitation.md template)
- `**N.**` numbering, `**\*N.**` for multi-correct
- Options inline: `(A) ... (B) ... (C) ... (D) ...`
- `---` between major sections
- `*Source: DTS-X (topic)*` italic under level headings
- Answer key tables: 15 per row, `| Q# | 1 | 2 | ... | 15 |`
- JEE archives: `**Ans: X**` after each question

---

## Step 2: Website HTML Page Format

Each chapter HTML page lives at `chapters/{chapter}.html`. The page must match the format used by Session 2-3 chapters (e.g., rotational-motion.html, thermodynamics.html).

### HTML Structure (inside `<div class="chapter-detail">`)
```
ch-hero
  ├── h1 (chapter title)
  ├── span.ch-meta (e.g. "Chapter 01 — Grade XII — Electrostatics")
  └── div.ch-nav (anchor links to each theory section)

theory-section#id-1
  ├── h2 (numbered section title: "1. Topic Name")
  ├── p (explanatory paragraphs)
  ├── h3 (subsection headings)
  ├── div.formula-box (key formulas with HTML entities)
  ├── ul > li (bulleted lists)
  └── div.example-box (optional, embedded solved examples)

theory-section#id-2
  ...

theory-section#key-formulas
  └── div.formula-box (comprehensive formula summary)

div.ch-links
  ├── a.primary-link (Launch Simulation →)
  ├── a (Practice Test)
  ├── a (← Prev: Chapter Name)
  └── a (Next: Chapter Name →)
```

### Required Elements
1. **`<div class="ch-nav">`** inside `ch-hero` — contains `<a href="#section-id">Short Label</a>` for every theory section
2. **`id` attribute** on every `<div class="theory-section" id="section-id">` — matches the ch-nav anchors
3. **Example labels** use format: `<div class="ex-label">Example N &mdash; Short Description</div>`
4. **3-4 solved examples** embedded in relevant theory sections using:
   ```html
   <div class="example-box">
     <div class="ex-label">Example 1 &mdash; Description</div>
     <p>Problem statement</p>
     <div class="solution">
       <p><strong>Solution:</strong><br>Step-by-step solution</p>
     </div>
   </div>
   ```
5. **10+ theory sections** covering all concepts from the reference .md file
6. **Key Formulas Summary** section at the end with all major formulas in one formula-box

### HTML Entity Rules
- `&minus;` for −, `&times;` for ×, `&radic;` for √, `&sup2;` for ²
- `&gamma;` for γ, `&Delta;` for Δ, `&alpha;` for α, `&omega;` for ω, `&phi;` for φ, `&lambda;` for λ, `&pi;` for π, `&rho;` for ρ, `&mu;` for μ, `&epsilon;` for ε, `&sigma;` for σ, `&theta;` for θ
- `&rsquo;` for ', `&mdash;` for —, `&nbsp;` for non-breaking space, `&bull;` for •
- `<sub>` / `<sup>` for subscripts/superscripts
- `<strong>` for bold, `<em>` for italic
- Formula boxes use `<br>` for line breaks, `&nbsp;&nbsp;|&nbsp;&nbsp;` to separate formulas on same line
- `&#8321;` for ₁, `&#8322;` for ₂, `&#8323;` for ₃, `&#8320;` for ₀

### Head / Nav / Footer
Keep the EXACT same boilerplate (lines 1-81 and the footer/script at the bottom) from any existing chapter page. Only modify content between `<!-- Main Content -->` and `<!-- Footer -->`. The nav already has the standardized navbar with: Home | About Me | Chapters (active) | Simulations | Tests | Flashcards.

### Grade XII Chapter Cards (already in chapters.html)
The `chapters.html` page already has Grade XII card entries for all 9 chapters. No changes needed there.

---

## Step 3: Flashcard Deck Format

Each flashcard deck lives at `cards/{chapter}.json`. After creating the JSON, register the chapter in `js/flashcards.js` by adding to the `chapters` object.

### JSON Structure
```json
[
  {
    "id": "{prefix}-f-01",
    "type": "formula",
    "front": "Formula name or prompt",
    "back": "KaTeX formula: \\frac{a}{b}, \\sqrt{x}",
    "tags": ["{chapter-tag}", "topic-tag"]
  },
  {
    "id": "{prefix}-c-01",
    "type": "concept",
    "front": "Conceptual question?",
    "back": "**Heading:**\n\nExplanation with bullet points",
    "tags": ["{chapter-tag}", "topic-tag"]
  },
  {
    "id": "{prefix}-mcq-01",
    "type": "mcq",
    "front": "MCQ question text?",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "answer": "B",
    "back": "**Answer: B - Option text**\n\nDetailed solution",
    "tags": ["{chapter-tag}", "topic-tag"]
  }
]
```

### Card Counts & ID Prefixes
- ~35 cards per chapter: **15 formula + 10 concept + 10 MCQ**
- ID prefixes by chapter:

| Chapter | Prefix | Tags |
|---|---|---|
| Electrostatics | `es` | `["electrostatics", "..."]` |
| Current Electricity | `ce` | `["current-electricity", "..."]` |
| Magnetism | `mag` | `["magnetism", "..."]` |
| EMI | `emi` | `["emi", "..."]` |
| AC Circuits | `ac` | `["ac-circuits", "..."]` |
| Ray Optics | `ro` | `["ray-optics", "..."]` |
| Wave Optics | `wo` | `["wave-optics", "..."]` |
| EM Waves | `emw` | `["em-waves", "..."]` |
| Modern Physics | `mp` | `["modern-physics", "..."]` |

### KaTeX Formatting Rules (used in card `back` fields)
- `\\frac{a}{b}` for fractions, `\\sqrt{x}` for square roots
- `\\text{ units}` for text inside math
- `\\times` for multiplication, `\\approx` for ≈
- Greek: `\\gamma`, `\\eta`, `\\sigma`, `\\Delta`, `\\pi`, `\\omega`, `\\rho`, `\\mu`, `\\lambda`, `\\epsilon`, `\\phi`, `\\theta`
- Subscripts: `v_{rms}`, `T_{1}`, `k_{eff}`
- `\\left(` and `\\right)` for auto-sized parentheses
- `\n` for newlines in back text
- `**bold**` for emphasis in concept/MCQ explanations

### Registration in js/flashcards.js
Add entries to the `chapters` object (line ~43):
```javascript
var chapters = {
  // ... existing entries ...
  electrostatics: 'Electrostatics',
  'current-electricity': 'Current Electricity',
  magnetism: 'Magnetism',
  // etc.
};
```
The key must match the JSON filename (without `.json`). The chip UI is auto-generated from this object.
