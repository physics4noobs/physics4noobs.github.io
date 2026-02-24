# Test Extraction Master Plan

## Scope

**Source:** VMC Physics Class 11 JEE (Modules+Workbooks+Solutions)
**Target:** Physics for Noobs website — gamified tests + CBSE/JEE subjective sections

### Chapters with Full Test Material (12 chapters)

| # | Chapter | Reg. DTS | L3 DTS | Level 0 | JEE Main | JEE Adv | Est. Total Qs |
|---|---------|----------|--------|---------|----------|---------|---------------|
| 1 | Vectors | 11 | 3 | No | Yes | Yes | ~250 |
| 2 | Kinematics | 11 | 4 | Yes | Yes (19) | Yes (14) | ~310 |
| 3 | Motion in 2D | 11 | 4 | Yes | Yes | Yes | ~310 |
| 4 | Newton's Laws (Dynamics) | 11 | 4 | Yes | Yes | Yes | ~310 |
| 5 | Energy & Momentum | 11 | 4 | Yes | Yes | Yes | ~310 |
| 6 | Gravitation | 8 | 3 | Yes | Yes | Yes | ~220 |
| 7 | Rotational Motion | 11 | 4 | Yes | Yes | Yes | ~310 |
| 8 | SHM | 9 | 4 | Yes | Yes | Yes | ~270 |
| 9 | Wave Motion | 9 | 4 | Yes | Yes | Yes | ~270 |
| 10 | Heat / Properties of Matter | 11 | 4 | Yes | Yes | Yes | ~310 |
| 11 | KTG / Thermodynamics | 9 | 4 | Yes | Yes | Yes | ~270 |
| 12 | Liquids | 11 | 4 | Yes | Yes | Yes | ~310 |
| | **TOTAL** | | | | | | **~3,450+** |

**Excluded:** Basic Math Tools, Unit & Dimensions (no DTS material)

### Question Count Breakdown Per Chapter (typical)

- DTS 1-5 (Level 1): 75 MCQs (15 per sheet)
- DTS 6-9/10 (Level 2): 40-50 MCQs (includes multi-correct, NAT)
- DTS 11/NAT: ~15 numerical answer type
- Level 3 (DTS 12-15): ~60 advanced MCQs
- Level 0 / CBSE: ~25-27 subjective questions
- JEE Main Archive: ~15-20 MCQs
- JEE Advanced Archive: ~10-15 mixed type
- Miscellaneous QB: ~20-30 questions

---

## The 5 Phases

### PHASE 1: Text-Only MCQs (No Diagrams)
**Goal:** Extract all MCQ questions that are purely text-based, have 4 options (A/B/C/D), and have answer keys readily available. Sort by level, create 30-min gamified tests.

**Source PDFs:** DTS 1-5 (Level 1), DTS 6-10 (Level 2), some Level 3
**Answer Keys:** Workbook Answer Key PDF (already available for every chapter)

**Process per chapter:**
1. Read each DTS PDF page by page
2. Identify questions that are text-only (no figure/graph dependency)
3. Transcribe question + 4 options + correct answer from answer key
4. Tag each question: `chapter`, `dts_source`, `question_number`, `level`, `topic_covered`, `has_diagram: false`

**Test Format (Gamified):**
- 10 MCQs per test, 30 minutes
- Sorted by level:
  - **Level 1 tests** (from DTS 1-5): ~3-5 tests per chapter
  - **Level 2 tests** (from DTS 6-10): ~2-3 tests per chapter
  - **Level 3 tests** (from DTS 12-15): ~2-3 tests per chapter (only text-only Qs)
- Scoring: +4 correct, -1 wrong, 0 unanswered (JEE-style)
- Integrated with achievement system and ranking

**Estimated text-only MCQs:** ~60-70% of Level 1, ~50% of Level 2, ~30% of Level 3
**Per chapter:** ~50-70 text-only MCQs = 5-7 tests
**Total across 12 chapters:** ~60-80 tests

**Website integration:**
- New test listing section: "Sprint Tests" or "Practice Arena"
- Each test card shows: Chapter, Level, Question count, Time limit
- Score saved to Firebase
- Achievements: per-level completion, speed bonuses, streak tracking

---

### PHASE 2: Diagram/Graph-Based MCQs
**Goal:** Extract MCQs that require diagrams or graphs. These need the diagram to be recreated as SVG/image or described clearly.

**Source PDFs:** Same DTS sheets, but the questions skipped in Phase 1
**Answer Keys:** Same Workbook Answer Key PDFs

**Process per chapter:**
1. Go back through each DTS PDF
2. For each diagram-dependent question:
   - Transcribe the question text
   - Describe or recreate the diagram (SVG for graphs, text description for simple figures)
   - Options + correct answer
3. Tag: `has_diagram: true`, `diagram_type: graph|figure|circuit|vector`

**Diagram handling options (pick per question):**
- **Simple vector/arrow diagrams:** Describe in text (e.g., "A particle moves from A→B→C where AB=3m east, BC=4m north")
- **Graphs (v-t, x-t, a-t):** Recreate as inline SVG or use a simple canvas drawing
- **Complex figures:** Create a small PNG/SVG image file

**Test Format:** Same as Phase 1 (10 MCQs, 30 min, gamified)
**Per chapter:** ~20-40 diagram questions = 2-4 additional tests
**Total across 12 chapters:** ~30-48 tests

---

### PHASE 3: CBSE Subjective Questions
**Goal:** Extract Level 0 / CBSE Pattern questions. These are subjective (VSA, SA-I, SA-II, LA). Not gamified — student sees question, attempts on paper, then reveals the answer/solution.

**Source PDFs:** Level 0 / CBSE Pattern PDF (1 per chapter, ~25-27 questions each)
**Solutions:** Solution Level 0 PDFs

**CBSE Format (as seen in material):**
- VSA: Very Short Answer (1 mark) — ~5 questions
- SA-I: Short Answer Type I (2 marks) — ~5 questions
- SA-II: Short Answer Type II (3 marks) — ~5 questions
- LA: Long Answer (5 marks) — ~3-4 questions
- Total: ~18-20 questions, 70 marks, 3 hours (original)

**Website Format:**
- Separate section: "CBSE Practice Papers"
- NOT gamified — no scoring, no timer, no achievements
- Each question shown as a card
- "Show Solution" button reveals the worked solution
- Student self-evaluates
- No Firebase integration needed for scoring

**Per chapter:** 1 CBSE paper (~20 questions)
**Total across 11 chapters** (Vectors has no Level 0): 11 papers

---

### PHASE 4: Difficult Subjective JEE Questions
**Goal:** Extract subjective solved examples, miscellaneous exercise questions, and module INE questions. These are advanced problem-solving questions.

**Source PDFs:**
- Subjective Solved Examples (available for ~8 chapters)
- Miscellaneous Exercise / Question Bank (available for all 12 chapters)
- Module INE Solutions (available for ~9 chapters)

**Website Format:**
- Separate section: "JEE Problem Bank" or "Advanced Problems"
- NOT gamified
- Each question shown with "Show Hint" and "Show Full Solution" toggles
- Organized by chapter and subtopic

**Per chapter:** ~15-30 questions
**Total across 12 chapters:** ~200-350 questions

---

### PHASE 5: JEE Archives (Verbatim)
**Goal:** Exact JEE Main and JEE Advanced past questions, presented as-is with original formatting.

**Source PDFs:**
- JEE Main Archive (12 chapters, ~15-20 questions each)
- JEE Advanced Archive (12 chapters, ~10-15 questions each)
- Solutions for both

**Website Format:**
- Section: "JEE Archives"
- Two sub-sections: JEE Main | JEE Advanced
- Organized by chapter
- Each question verbatim with:
  - Year tag (if visible in PDF)
  - Question type tag (Single correct / Multi-correct / Integer / Match)
  - Full solution on reveal
- Gamified for MCQ-type questions (Single correct from JEE Main)
- Non-gamified for multi-correct, integer, match-the-column

**Per chapter:** ~25-35 archive questions
**Total across 12 chapters:** ~300-400 questions

---

## Execution Strategy: Batching by Cost

### Why Batch?

Each question extraction requires:
1. **Reading the PDF** — ~500-1000 tokens per page (image-heavy PDFs)
2. **Transcribing** — ~200-400 tokens per question (question + options + answer)
3. **Generating HTML** — ~300-500 tokens per question

**Estimated tokens per chapter (Phase 1 only):**
- Reading ~10 DTS pages: ~8,000 tokens input
- Transcribing ~60 text-only MCQs: ~25,000 tokens output
- Total per chapter: ~33,000 tokens

**Phase 1 total (12 chapters):** ~400,000 tokens
**Phase 2 total (12 chapters):** ~350,000 tokens (diagrams need more description)
**Phase 3 total (11 chapters):** ~150,000 tokens
**Phase 4 total (12 chapters):** ~200,000 tokens
**Phase 5 total (12 chapters):** ~250,000 tokens

### Recommended Batch Breakdown

#### BATCH 1 — Kinematics + Motion in 2D (Phase 1 only)
**Why first:** Already partially done in kinematics.md. Two related chapters. Tests the pipeline.

- Read all DTS 1-5 PDFs for both chapters (10 PDFs)
- Extract text-only MCQs
- Cross-check against existing answer keys
- Generate test HTML files
- **Output:** ~10-14 sprint tests
- **Effort:** 1 session

#### BATCH 2 — Kinematics + Motion in 2D (Phase 2)
- Go back through same DTS PDFs
- Extract diagram-dependent questions
- Create SVG/descriptions for diagrams
- **Output:** ~4-8 additional tests
- **Effort:** 1 session (diagrams take longer)

#### BATCH 3 — Newton's Laws + Energy & Momentum (Phase 1)
- Two core mechanics chapters
- Extract text-only MCQs from DTS 1-10
- **Output:** ~10-14 sprint tests
- **Effort:** 1 session

#### BATCH 4 — Gravitation + Rotational Motion (Phase 1)
- **Output:** ~8-12 sprint tests
- **Effort:** 1 session

#### BATCH 5 — SHM + Wave Motion (Phase 1)
- **Output:** ~8-12 sprint tests
- **Effort:** 1 session

#### BATCH 6 — Heat/Properties + Thermodynamics + Liquids (Phase 1)
- Three chapters grouped (thermal + fluid)
- **Output:** ~12-18 sprint tests
- **Effort:** 1 session

#### BATCH 7 — Vectors (Phase 1)
- Standalone (different structure, no Level 0)
- **Output:** ~5-7 sprint tests
- **Effort:** 1 session

#### BATCH 8 — All chapters Phase 2 (Diagram MCQs)
- Revisit all 12 chapters for diagram questions
- This is the longest batch — can split into 2-3 sub-sessions
- **Output:** ~30-48 additional tests
- **Effort:** 2-3 sessions

#### BATCH 9 — All chapters Phase 3 (CBSE Papers)
- 11 Level 0 PDFs
- Subjective format, simpler to transcribe
- **Output:** 11 CBSE practice papers
- **Effort:** 1-2 sessions

#### BATCH 10 — All chapters Phase 4 (Subjective JEE)
- Solved examples + miscellaneous exercises
- **Output:** ~200-350 problems organized by chapter
- **Effort:** 2-3 sessions

#### BATCH 11 — All chapters Phase 5 (JEE Archives)
- 24 PDFs (12 Main + 12 Advanced)
- Verbatim transcription with solutions
- **Output:** JEE Archive section
- **Effort:** 2-3 sessions

---

## Cost-Saving Strategies

### 1. Use the Answer Key PDFs as the primary source
Every chapter has a `Workbook Answer Key.pdf`. Start here:
- It confirms the correct answer for every question
- Cross-reference while reading DTS sheets to avoid transcription errors
- If a question's answer doesn't match between your transcription and the key, flag it for review

### 2. Batch by reading pattern, not by generation
- Read ALL DTS PDFs for a chapter first (they're only 1-2 pages each)
- Then generate all test HTML in one go
- This avoids re-reading PDFs multiple times

### 3. Text-only first (Phase 1) because it's cheapest
- No diagram recreation cost
- Pure text transcription is fast and cheap
- Gets you 60-70% of all MCQs immediately

### 4. Use the solution PDFs only when needed
- Don't read solution PDFs during Phase 1 (just need answer key letter)
- Read solution PDFs only for Phase 3-5 where worked solutions are needed
- This halves the PDF reading cost for Phase 1

### 5. Templatize the HTML
- The test HTML structure is identical across all tests
- Generate a JSON array of questions first, then programmatically fill the template
- This prevents copy-paste errors and makes batch generation reliable

### 6. Validate with answer keys
- After generating each test file, programmatically check that every `data-answer` matches the Workbook Answer Key
- This is a zero-cost validation step that catches errors

---

## Error Prevention Checklist

For every batch:

- [ ] Read the Workbook Answer Key PDF FIRST for that chapter
- [ ] Record the full answer key in a structured format (Q# → Answer)
- [ ] Read each DTS PDF page by page
- [ ] For each question, note: `text-only` or `needs-diagram`
- [ ] Transcribe text-only questions with exact option text
- [ ] Cross-check every transcribed answer against the answer key
- [ ] Generate test HTML using the standard template
- [ ] Verify `data-answer` attributes match answer key
- [ ] **Verify NO `&sup2;`, `&sup3;`, `&frac` entities** — must use `<sup>`/`<sub>` tags only
- [ ] Test the HTML file in browser (timer works, scoring works, solutions show)
- [ ] Add to tests.html listing page

---

## Website Architecture Changes Needed

### New Test Categories (update tests.html)

```
Tests
├── Sprint Tests (Phase 1 + 2) — Gamified, 30 min, 10 MCQs
│   ├── Level 1 (Easy-Medium)
│   ├── Level 2 (Hard)
│   └── Level 3 (Advanced)
├── CBSE Practice Papers (Phase 3) — Not gamified, subjective
├── JEE Problem Bank (Phase 4) — Not gamified, subjective
└── JEE Archives (Phase 5) — Partially gamified
    ├── JEE Main
    └── JEE Advanced
```

### New Features to Build

1. **30-min timer** (change from current 90-min default)
2. **+4/-1 scoring** (change from current simple correct count)
3. **Firebase score persistence** for sprint tests
4. **Test achievements** integration with existing achievement system
5. **Level progression** — unlock Level 2 after passing Level 1
6. **"Show Solution" toggle** for CBSE and JEE subjective sections
7. **Question type indicators** — Single MCQ / Multi-correct / Integer / Subjective

### File Naming Convention

```
tests/kinematics-l1-sprint-1.html    (Phase 1, Level 1, Sprint test 1)
tests/kinematics-l1-sprint-2.html    (Phase 1, Level 1, Sprint test 2)
tests/kinematics-l2-sprint-1.html    (Phase 1, Level 2, Sprint test 1)
tests/kinematics-l3-sprint-1.html    (Phase 1, Level 3, Sprint test 1)
tests/kinematics-diagram-1.html      (Phase 2)
tests/kinematics-cbse.html           (Phase 3)
tests/kinematics-jee-problems.html   (Phase 4)
tests/kinematics-jee-main.html       (Phase 5)
tests/kinematics-jee-advanced.html   (Phase 5)
```

---

## Summary Timeline

| Batch | Chapters | Phase | Est. Tests | Priority |
|-------|----------|-------|-----------|----------|
| 1 | Kinematics + Motion 2D | Phase 1 | 10-14 | START HERE |
| 2 | Kinematics + Motion 2D | Phase 2 | 4-8 | After Batch 1 |
| 3 | Newton's Laws + Energy | Phase 1 | 10-14 | High |
| 4 | Gravitation + Rotation | Phase 1 | 8-12 | High |
| 5 | SHM + Waves | Phase 1 | 8-12 | Medium |
| 6 | Heat + Thermo + Liquids | Phase 1 | 12-18 | Medium |
| 7 | Vectors | Phase 1 | 5-7 | Medium |
| 8 | All chapters | Phase 2 | 30-48 | After all Phase 1 |
| 9 | All chapters | Phase 3 | 11 papers | Lower |
| 10 | All chapters | Phase 4 | ~300 problems | Lower |
| 11 | All chapters | Phase 5 | ~350 problems | Lower |
| | **TOTAL** | | **~100-130 tests + ~650 problems** | |

---

## Execution Log

### Batch 1 — Kinematics (Phase 1) ✓ COMPLETED

**Date:** 2026-02-24
**Tests generated:** 8 sprint tests (6 L1 + 2 L2)
**Questions extracted:** 61 L1 text-only + 24 L2 single-correct text-only = 85 total

**Files created:**
- `tests/kinematics-l1-sprint-1.html` — DTS-1, Kinematic Quantities (Q3-15)
- `tests/kinematics-l1-sprint-2.html` — DTS-2, UAM & Gravity (Q16-25)
- `tests/kinematics-l1-sprint-3.html` — DTS-2/3, UAM & Graphs (Q26-30, Q31,37,43-45)
- `tests/kinematics-l1-sprint-4.html` — DTS-4, Non-Uniform Acceleration (Q46-55)
- `tests/kinematics-l1-sprint-5.html` — DTS-4/5, Variable Acceleration (Q56-58, Q61-67)
- `tests/kinematics-l1-sprint-6.html` — DTS-5/1, Relative Motion & Mixed (Q68-75, Q12-13)
- `tests/kinematics-l2-sprint-1.html` — DTS-6/7, L2 Single-Correct (Q76-80,83,84,86-89)
- `tests/kinematics-l2-sprint-2.html` — DTS-7/8/9/10, L2 Single-Correct (Q92,93,99,100,106-110,116)

**Skipped for Phase 2 (diagram/multi-correct/NAT):**
- Diagram-dependent: Q1,2,14 (DTS-1), Q32-36,38-42 (DTS-3), Q59,60 (DTS-4)
- Multi-correct: Q81,82,90,91,101,111,112,113,114,121
- NAT: Q85,94,95,105,115,118,124,125
- Assertion-Reason: Q96-98, Q103-104
- Paragraph-linked: Q119-120, Q122-123

**Key metrics:**
- PDF pages read: ~20 (10 DTS sheets × 2 pages avg)
- Time for all agents: ~15 min total (parallel generation)

---

## Efficiency Notes & Lessons Learned

### What Worked Well

1. **Parallel agent generation** — Launching 5-8 agents simultaneously to write HTML files cut generation time from ~1hr sequential to ~15min. Each agent independently reads the template and writes one test file.

2. **Read ALL DTS PDFs first, then classify** — Reading all 10 DTS sheets in one pass and building a complete question classification table before generating any HTML prevented backtracking and re-reading.

3. **Answer key as primary source** — Reading the Workbook Answer Key PDF first and recording structured answer data (Q# → Answer) made cross-referencing fast and reliable.

4. **Template-based generation** — Using the existing `kinematics.html` as an exact template ensured consistent HTML structure, CSS, JS, Firebase integration, and PWA compatibility across all sprint tests.

5. **Strict Phase 1 filter** — Only extracting single-correct, text-only MCQs in Phase 1 kept the process simple and fast. Multi-correct, NAT, diagram questions were cleanly deferred.

### What to Improve

1. **Agent timeout risk** — One agent (L2 Sprint 2) hit timeout limits. For future batches, ensure each agent prompt is concise and includes only the questions for that specific test, not the full classification table.

2. **Prompt size matters** — Agents that received shorter, more focused prompts (just their 10 questions + template path) completed faster than those with extra context. Keep agent prompts lean.

3. **CRITICAL: Never use `&sup2;`, `&sup3;`, `&frac12;` etc. HTML entities for superscripts/subscripts** — These render as inline Unicode characters (², ³, ½) that depend on font support and do NOT get visually raised/lowered in many fonts. Always use proper `<sup>` and `<sub>` tags instead:
   - `m/s<sup>2</sup>` NOT `m/s&sup2;`
   - `t<sup>3</sup>` NOT `t&sup3;`
   - `<sup>1</sup>/<sub>2</sub>` NOT `&frac12;`
   - `<sup>1</sup>/<sub>6</sub>` NOT `&frac16;`
   - Other HTML entities that ARE fine to use: `&theta;`, `&alpha;`, `&pi;`, `&radic;`, `&minus;`, `&deg;`, `&times;`, `&rarr;` (these are symbol replacements, not layout)
   - **Fractions must use bracket notation**: `(1/2)g` not `<sup>1</sup>/<sub>2</sub>g` — the tiny raised/lowered numerals are unreadable at small font sizes. Always write fractions as `(1/2)`, `(1/3)`, `(3/4)` etc.
   - **Add this as an explicit rule in every agent prompt** to prevent re-occurrence.

4. **Batch DTS reading by level** — For future chapters, read DTS 1-5 together (Level 1) and DTS 6-10 together (Level 2) rather than sequentially. This groups similar difficulty questions.

5. **Use sonnet model for agents** — Sonnet handles HTML generation well and is more cost-effective than opus for template-filling tasks. Continue using sonnet for all sprint test generation agents.

6. **Pre-build question JSON** — For maximum efficiency, build a JSON array of all questions first (number, text, options A-D, answer, source DTS, topic), then feed subsets to each agent. This prevents transcription drift between agents.

7. **Verify files after generation** — Always glob for created files and spot-check the first few lines (title, timer value, question count) before marking a batch complete.

8. **CRITICAL: `.q-opt` must NOT use `display: flex`** — The option divs (`.q-opt`) must NOT be flex containers. When `display: flex` is set on an element, every `<sub>` and `<sup>` tag inside becomes a separate flex item with `gap` spacing between them, causing `a<sub>1</sub>a<sub>2</sub>` to render as `a  1  a  2` with huge gaps. Additionally, `vertical-align: sub/super` is completely ignored in flex context. The fix: `.q-opt` should use default `display: block` so all inline elements (`<sub>`, `<sup>`) render naturally. The `.opt-letter` span gets `display: inline-block; margin-right: 6px;` for spacing instead of flex `gap`.

### Recommended Workflow for Remaining Chapters

```
1. Read Workbook Answer Key PDF → Record full answer key
2. Read all DTS PDFs (1-10) in parallel where possible
3. Classify every question: text-only vs diagram, single vs multi, MCQ vs NAT
4. Build question list for each sprint test (10 Qs per test)
5. Launch parallel sonnet agents (one per test file)
   - MUST include in each agent prompt: "Use <sup>/<sub> tags for all
     superscripts/subscripts. NEVER use &sup2; &sup3; &frac12; etc."
6. Verify all files created + spot-check content
7. Run grep to confirm zero &sup2;/&sup3;/&frac entities in generated files
8. Log results in this file
```

---

### Batch 1 — Motion in 2D (Phase 1) ✓ COMPLETED

**Date:** 2026-02-24
**Tests generated:** 8 sprint tests (6 L1 + 2 L2)
**Questions extracted:** 60 L1 text-only + 20 L2 single-correct text-only = 80 total

**Files created:**
- `tests/motion2d-l1-sprint-1.html` — DTS-1 Q1-10, General 2D Motion & Projectile
- `tests/motion2d-l1-sprint-2.html` — DTS-1 Q11-15 + DTS-2 Q16-20, Projectile Formulas
- `tests/motion2d-l1-sprint-3.html` — DTS-2 Q21-28,30 + DTS-3 Q31, Projectile Advanced
- `tests/motion2d-l1-sprint-4.html` — DTS-3 Q32-35,37-40 + DTS-4 Q49,50, Height Projectile & Circular Intro
- `tests/motion2d-l1-sprint-5.html` — DTS-4 Q51-60, Circular Motion
- `tests/motion2d-l1-sprint-6.html` — DTS-5 Q61-68,70,74, Mixed Topics
- `tests/motion2d-l2-sprint-1.html` — DTS-6 Q76-79,82-84 + DTS-7 Q86-88, L2 Projectile
- `tests/motion2d-l2-sprint-2.html` — DTS-7 Q89-91 + DTS-8 Q96,97 + DTS-9 Q109,112 + DTS-10 Q116,119,120, L2 Mixed

**Skipped for Phase 2 (diagram/multi-correct/NAT/match):**
- Diagram: Q29,36,41-48,69,71-73,75,92-94,98-104,106-108,110-111,121
- Multi-correct: Q80,81,113,117,121,122,124
- NAT: Q85,105,115,125
- Match: Q95,114,118,123

---

## Batch 1 Summary

**Total for Batch 1 (Kinematics + Motion in 2D):**
- 16 sprint tests generated (12 L1 + 4 L2)
- 165 text-only single-correct MCQs extracted
- Batch 1 COMPLETE ✓
