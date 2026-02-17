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

### Session 3 (Pending)
| Chapter | File | Status |
|---|---|---|
| Thermodynamics | `thermodynamics.md` | Pending |
| Simple Harmonic Motion | `shm.md` | Pending |
| Waves | `waves.md` | Pending |

### Session 4 (Pending)
| Chapter | File | Status |
|---|---|---|
| Electrostatics | `electrostatics.md` | Pending |
| Current Electricity | `current-electricity.md` | Pending |
| Magnetism | `magnetism.md` | Pending |

### Session 5 (Pending)
| Chapter | File | Status |
|---|---|---|
| EMI | `emi.md` | Pending |
| AC Circuits | `ac-circuits.md` | Pending |
| Ray Optics | `ray-optics.md` | Pending |
| Wave Optics | `wave-optics.md` | Pending |

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

## Agent Strategy for Remaining Sessions (3-6)

### Priority: Speed + Low Cost
- Use **haiku model** for ALL reading and writing agents
- **Read**: Theory PDFs, Question PDFs, Answer Key PDFs
- **Skip**: Solution PDFs (never read these)

### Anti-Context-Overflow Rules (Session 2 failed once due to overflow)
1. **One section per agent** — each haiku agent writes only ONE section then exits (never multiple)
2. **Never pass full file content** into agent prompts — only line numbers and anchor strings for Edit
3. **Sequential batches** — don't launch next batch until previous completes (no stacking context)
4. **Pre-write content in the prompt** — agents just append via Edit, no large-scale reading/generating
5. **Read PDFs in chunks** with offset/limit, never whole files at once
6. **Separate reader agents from writer agents** — reader extracts questions, writer appends them

### Batch Structure (7 batches per session, 3 files in parallel per batch)
1. **Answer Keys** — tables with 15 Q per row for each level + JEE archives
2. **Level 0 (Easy)** — CBSE pattern: VSA, SA-I, SA-II, LA (~20-27 questions)
3. **Level 1** — 3 DTS subsections, 15 MCQs each = 45 questions, `####` headings, Q1-45
4. **Level 2** — DTS NAT (Q46-60) + harder MCQ sections (Q61-75/90), multi-correct with `**\*N.**`
5. **Level 3 (Hard)** — ~12-18 subjective problems, continuous numbering from Level 2
6. **Miscellaneous + JEE Main Archive** — Misc Q1-10 (reset numbering), JEE Main ~35-43 Q with `[Year]` + `**Ans: X**` + answer key table
7. **JEE Advanced Archive** — organized by type (Single correct, Multi-correct, Assertion-Reason, Match Matrix, NAT, Fill-in-blanks, True/False) + answer key table

### Format Rules (from gravitation.md template)
- `**N.**` numbering, `**\*N.**` for multi-correct
- Options inline: `(A) ... (B) ... (C) ... (D) ...`
- `---` between major sections
- `*Source: DTS-X (topic)*` italic under level headings
- Answer key tables: 15 per row, `| Q# | 1 | 2 | ... | 15 |`
- JEE archives: `**Ans: X**` after each question
