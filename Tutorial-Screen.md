# Tutorial Screen — Implementation Guide

A reusable first-visit tutorial overlay for Physics for Noobs simulations. Shows labeled hints with curved arrows pointing to key UI controls, dismissed on click, and remembered via `localStorage` so it only appears once.

---

## Overview

| Feature | Detail |
|---|---|
| Trigger | Auto-shows on first visit; re-shown via **? Help** button |
| Dismiss | Click anywhere on overlay OR the "Got it" button |
| Persistence | `localStorage` key prevents re-showing after first dismiss |
| Mobile | Hidden entirely on screens <= 900px |
| Arrows | SVG curved arrows (cubic bezier) connecting labels to targets |
| Positioning | Dynamic JS using `getBoundingClientRect()` with collision detection |

---

## Prerequisites

Your simulation page must follow this structure:

1. A wrapper div with `id="simArea"` that contains the canvas, side-data panel, and controls-bar
2. `#simArea` must have `position: relative` so the overlay positions correctly
3. Each target control element (button, slider, panel) must have a unique `id`

---

## Step-by-Step Integration

### 1. Add `position: relative` to `#simArea`

Find your existing `#simArea` CSS rule and add `position: relative`:

```css
#simArea { background: var(--bg-primary); position: relative; }
```

### 2. Add the CSS

Paste this inside your `<style>` block. All styles are self-contained and won't conflict with your simulation styles.

```css
/* === Tutorial Overlay === */
.sim-tutorial {
  position: absolute;
  inset: 0;
  z-index: 50;
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(0.5px);
  -webkit-backdrop-filter: blur(0.5px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: opacity 0.4s ease;
  cursor: pointer;
  border-radius: var(--radius-md);
}

.tut-hint {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #fff;
  font-size: 0.88rem;
  pointer-events: none;
}

.tut-arrows-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.tut-label {
  font-family: var(--font-body);
  background: rgba(255,255,255,0.92);
  color: #1a1a2e;
  padding: 6px 14px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.82rem;
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(0,0,0,0.18);
}

.tut-dismiss {
  position: absolute;
  bottom: 38%;
  left: 50%;
  transform: translateX(-50%);
  padding: 12px 32px;
  font-family: var(--font-body);
  font-size: 0.95rem;
  font-weight: 700;
  color: #1a1a2e;
  background: #fff;
  border: none;
  border-radius: var(--radius-sm);
  cursor: pointer;
  pointer-events: auto;
  box-shadow: 0 4px 16px rgba(124,58,237,0.3);
  transition: background 0.2s, transform 0.2s;
}

.tut-dismiss:hover {
  background: #e8e0f8;
  transform: translateX(-50%) scale(1.04);
}

@media (max-width: 900px) {
  .sim-tutorial { display: none !important; }
  #helpBtn { display: none; }
}
```

**Customisation notes:**
- `background: rgba(255,255,255,0.08)` — controls the tint of the overlay. Increase the alpha for more visible frosting.
- `backdrop-filter: blur(0.5px)` — controls the blur strength. Use `1px`-`2px` for more frosted look, `0.5px` for subtle.
- `bottom: 38%` on `.tut-dismiss` — adjust this to move the "Got it" button up or down within the overlay.
- The `900px` breakpoint in the media query hides the tutorial on mobile/tablet. Adjust as needed.

### 3. Add the Help Button

In your `.sim-header`, add the help button next to your existing Reset / Full Screen buttons:

```html
<div style="display:flex;gap:8px;">
  <button class="sim-btn" id="resetBtn">Reset</button>
  <button class="sim-btn" id="fullscreenBtn">Full Screen</button>
  <button class="sim-btn" id="helpBtn">? Help</button>
</div>
```

### 4. Add the Tutorial Overlay HTML

Place this **inside** `#simArea`, just before its closing `</div>`. Each `.tut-hint` is one label. The `id` on each hint is used by the JS to position it.

```html
<!-- Tutorial Overlay -->
<div class="sim-tutorial" id="simTutorial" style="display:none;">
  <svg class="tut-arrows-svg" id="tutArrowsSvg"></svg>

  <div class="tut-hint" id="tutHint1">
    <div class="tut-label">Your label text for control 1</div>
  </div>
  <div class="tut-hint" id="tutHint2">
    <div class="tut-label">Your label text for control 2</div>
  </div>
  <div class="tut-hint" id="tutHint3">
    <div class="tut-label">Your label text for control 3</div>
  </div>
  <!-- Add more hints as needed -->

  <button class="tut-dismiss">Got it, let's start!</button>
</div>
```

**For the boat-river simulation, the hints are:**

| Hint ID | Label text | Target element |
|---|---|---|
| `tutLaunch` | Click Launch to fire the boat | `#launchBtn` |
| `tutAngle` | Adjust the boat angle (theta) | `#boatAngle` |
| `tutBoatSpeed` | Set boat speed | `#boatSpeed` |
| `tutRiverSpeed` | Set river current speed | `#riverSpeed` |
| `tutData` | Live data updates here | `.side-data` |

When adapting to a new simulation, change the hint IDs, label text, and target elements to match your controls.

### 5. Add the JavaScript

Paste this in your `<script>` block, **after** your simulation logic but **before** the init calls (`resizeCanvas()`, etc.).

There are 4 parts: show/dismiss functions, arrow drawing, hint positioning, and event wiring.

#### Part A — Show & Dismiss

```js
// === TUTORIAL OVERLAY ===
function showTutorial() {
  var el = document.getElementById('simTutorial');
  el.style.display = '';
  el.offsetHeight; // force reflow for transition
  el.style.opacity = '1';
  positionTutorialHints();
}

window.addEventListener('resize', function() {
  if (document.getElementById('simTutorial').style.display !== 'none') {
    positionTutorialHints();
  }
});

function dismissTutorial() {
  var el = document.getElementById('simTutorial');
  el.style.opacity = '0';
  setTimeout(function() { el.style.display = 'none'; }, 400);
  localStorage.setItem('tut-YOUR-SIM-NAME', '1');
}
```

**Change `'tut-YOUR-SIM-NAME'`** to a unique key for each simulation, e.g.:
- `'tut-boat-river'`
- `'tut-projectile'`
- `'tut-pendulum'`

This ensures each simulation's tutorial is tracked independently.

#### Part B — Curved Arrow Drawing

This function draws a single curved SVG arrow from point (x1,y1) to point (x2,y2). You do NOT need to modify this — it's generic and reusable as-is.

```js
function drawCurvedArrow(svg, x1, y1, x2, y2) {
  var ns = 'http://www.w3.org/2000/svg';
  var dx = x2 - x1;
  var dy = y2 - y1;
  // Control points for the cubic bezier curve
  var cx1 = x1 + dx * 0.2;
  var cy1 = y1 + dy * 0.6;
  var cx2 = x1 + dx * 0.8;
  var cy2 = y1 + dy * 0.4;

  // Curved path
  var path = document.createElementNS(ns, 'path');
  path.setAttribute('d',
    'M' + x1 + ',' + y1 +
    ' C' + cx1 + ',' + cy1 +
    ' ' + cx2 + ',' + cy2 +
    ' ' + x2 + ',' + y2
  );
  path.setAttribute('fill', 'none');
  path.setAttribute('stroke', 'rgba(255,255,255,0.85)');
  path.setAttribute('stroke-width', '2');
  path.setAttribute('stroke-linecap', 'round');
  svg.appendChild(path);

  // Arrowhead triangle at the end point
  var angle = Math.atan2(y2 - cy2, x2 - cx2);
  var headLen = 10;
  var a1x = x2 - headLen * Math.cos(angle - 0.4);
  var a1y = y2 - headLen * Math.sin(angle - 0.4);
  var a2x = x2 - headLen * Math.cos(angle + 0.4);
  var a2y = y2 - headLen * Math.sin(angle + 0.4);
  var arrow = document.createElementNS(ns, 'polygon');
  arrow.setAttribute('points',
    x2 + ',' + y2 + ' ' +
    a1x + ',' + a1y + ' ' +
    a2x + ',' + a2y
  );
  arrow.setAttribute('fill', 'rgba(255,255,255,0.85)');
  svg.appendChild(arrow);
}
```

**How the curve works:**
- Uses a cubic bezier with two control points offset from the straight line
- `cx1, cy1` pulls the curve toward the start, `cx2, cy2` pulls toward the end
- The `0.2/0.6/0.8/0.4` multipliers create an S-shaped curve
- The arrowhead is a small triangle rotated to match the curve's direction at the endpoint

#### Part C — Positioning Logic

This is the part you **must customise** for each simulation. It defines which hint points to which element and how.

```js
function positionTutorialHints() {
  var area = document.getElementById('simArea');
  var areaRect = area.getBoundingClientRect();
  var svg = document.getElementById('tutArrowsSvg');
  svg.innerHTML = ''; // clear previous arrows

  // === CUSTOMISE THIS ARRAY ===
  // Each entry maps a hint div ID to the target DOM element.
  // Set type to 'bottom' for controls below the canvas,
  // or 'side' for panels to the right/left of the canvas.
  var targets = [
    { hint: 'tutHint1', el: document.getElementById('yourButton'),  type: 'bottom' },
    { hint: 'tutHint2', el: document.getElementById('yourSlider1'), type: 'bottom' },
    { hint: 'tutHint3', el: document.getElementById('yourSlider2'), type: 'bottom' },
    { hint: 'tutHint4', el: document.querySelector('.side-data'),   type: 'side'   }
  ];

  var placed = []; // collision tracking

  for (var i = 0; i < targets.length; i++) {
    var t = targets[i];
    var hintEl = document.getElementById(t.hint);
    var elRect = t.el.getBoundingClientRect();
    var cx = elRect.left + elRect.width / 2 - areaRect.left;
    var cy = elRect.top - areaRect.top;

    if (t.type === 'side') {
      // --- SIDE PANEL HINT ---
      // Position label to the left of the panel, arrow points right
      var midY = elRect.top + elRect.height / 2 - areaRect.top;
      hintEl.style.top = midY + 'px';
      hintEl.style.right = (areaRect.right - elRect.left + 8) + 'px';
      hintEl.style.left = '';
      hintEl.style.transform = '';

      // Arrow: label right edge -> panel left edge
      var hRect = hintEl.getBoundingClientRect();
      var arrowStartX = hRect.right - areaRect.left + 4;
      var arrowStartY = hRect.top + hRect.height / 2 - areaRect.top;
      var arrowEndX = elRect.left - areaRect.left - 2;
      var arrowEndY = midY;
      drawCurvedArrow(svg, arrowStartX, arrowStartY, arrowEndX, arrowEndY);
      continue;
    }

    // --- BOTTOM CONTROL HINT ---
    // Position label above the target, centered horizontally
    hintEl.style.left = cx + 'px';
    hintEl.style.transform = 'translateX(-50%)';
    hintEl.style.top = '0px'; // temporary, for measuring

    // Measure the hint pill dimensions
    var hintRect = hintEl.getBoundingClientRect();
    var hintW = hintRect.width;
    var hintH = hintRect.height;

    var desiredTop = cy - 50;
    var hintLeft = cx - hintW / 2;
    var hintRight = hintLeft + hintW;

    // Collision detection: if this hint overlaps a previously placed one,
    // nudge it upward so they stack cleanly
    var finalTop = desiredTop;
    for (var j = 0; j < placed.length; j++) {
      var p = placed[j];
      if (hintRight > p.left && hintLeft < p.right) {
        if (finalTop + hintH > p.top && finalTop < p.bottom) {
          finalTop = p.top - hintH - 8;
        }
      }
    }

    hintEl.style.top = finalTop + 'px';
    placed.push({
      left: hintLeft,
      right: hintRight,
      top: finalTop,
      bottom: finalTop + hintH
    });

    // Arrow: label bottom center -> target top center
    var arrowStartX = cx;
    var arrowStartY = finalTop + hintH + 2;
    var arrowEndX = cx;
    var arrowEndY = cy + 2;
    drawCurvedArrow(svg, arrowStartX, arrowStartY, arrowEndX, arrowEndY);
  }
}
```

**How collision detection works:**
- Each placed hint's bounding box (left, right, top, bottom) is stored in the `placed` array
- Before placing the next hint, it checks if there's horizontal overlap with any existing hint
- If overlapping, the new hint is moved above the collider with an 8px gap
- This prevents labels from stacking on top of each other when controls are close together

#### Part D — Event Wiring

```js
// Auto-show on first visit
if (!localStorage.getItem('tut-YOUR-SIM-NAME')) {
  showTutorial();
}

// Dismiss on click anywhere on overlay
document.getElementById('simTutorial').addEventListener('click', dismissTutorial);

// Help button re-shows overlay (bypasses localStorage check)
document.getElementById('helpBtn').addEventListener('click', showTutorial);
```

---

## Adapting to a New Simulation — Checklist

1. **CSS**: Copy the entire tutorial CSS block into your `<style>`. No changes needed.
2. **`#simArea`**: Add `position: relative` to your `#simArea` rule.
3. **Help button**: Add `<button class="sim-btn" id="helpBtn">? Help</button>` to your header.
4. **HTML overlay**: Add the `<div class="sim-tutorial">` block inside `#simArea` at the end. Add one `<div class="tut-hint">` per control you want to annotate.
5. **JS — drawCurvedArrow**: Copy as-is, no changes.
6. **JS — positionTutorialHints**: Update the `targets` array:
   - Change `hint` to match your hint div IDs
   - Change `el` to select your actual control elements
   - Set `type` to `'bottom'` (for controls below canvas) or `'side'` (for side panels)
7. **JS — localStorage key**: Change `'tut-YOUR-SIM-NAME'` to a unique key, e.g. `'tut-projectile'`
8. **Spacing**: If your controls-bar elements are too close together, increase the `gap` in `.controls-bar` to give hint labels room. The boat-river sim uses `gap: clamp(16px, 3.5vw, 40px)`.

---

## Verification Checklist

- [ ] First visit: overlay appears with labels and curved arrows pointing to correct controls
- [ ] Clicking anywhere on the overlay dismisses it with a fade-out
- [ ] Clicking the "Got it, let's start!" button also dismisses
- [ ] Refreshing the page: overlay does NOT re-appear (localStorage)
- [ ] Clearing localStorage and refreshing: overlay appears again
- [ ] Help button in header re-shows the overlay anytime
- [ ] Arrows connect labels to the correct elements at different window sizes
- [ ] Labels don't overlap each other (collision detection nudges them apart)
- [ ] Works in both dark and light themes
- [ ] Tutorial is hidden on mobile (screens <= 900px)

---

## File Reference

Working implementation: `simulations/boat-river.html`
- CSS: lines ~429-504
- HTML overlay: lines ~556-575
- Help button: line ~514
- JS tutorial logic: lines ~1484-1615

---
---

# Simulation Page Design System — Full Reference

This section documents the complete design system used across Physics for Noobs simulation pages. Use this as a blueprint when building any new simulation from scratch.

---

## Page Structure Overview

Every simulation page is a single self-contained HTML file inside `/simulations/`. It includes:

1. **Head** — fonts, global CSS, theme script, Firebase scripts, achievement scripts
2. **Navbar** — shared across the site (copy from any existing sim)
3. **Splash screen** — shared animated intro (copy from any existing sim)
4. **Simulation wrapper** — all simulation-specific content
5. **Inline `<style>`** — all simulation CSS lives here (not in external files)
6. **Inline `<script>`** — all simulation JS lives here (not in external files)
7. **Footer script** — `<script src="../js/main.js"></script>` at the very end

---

## Head Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Simulation Title | Physics for Noobs</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Delius&family=Nova+Square&family=Orbitron:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&family=Andika:wght@400;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../css/style.css">
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🔬</text></svg>">
  <script src="../js/theme.js"></script>
  <script defer src="https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js"></script>
  <script defer src="https://www.gstatic.com/firebasejs/10.12.0/firebase-auth-compat.js"></script>
  <script defer src="https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore-compat.js"></script>
  <script defer src="../js/firebase-config.js"></script>
  <script defer src="../js/auth.js"></script>
  <script defer src="../js/sim-tracker.js"></script>
  <link rel="stylesheet" href="../css/achievements.css">
  <script defer src="../js/achievements-config.js"></script>
  <script defer src="../js/achievements.js"></script>
</head>
```

**Important:** Always include `theme.js` as a non-deferred script (loads synchronously to prevent flash). All Firebase/auth/achievement scripts use `defer`.

---

## Font System

The site uses these Google Fonts, referenced via CSS custom properties defined in `css/style.css`:

| CSS Variable | Font | Usage |
|---|---|---|
| `var(--font-display)` | Orbitron | Headings, section titles, `.sim-header h1` |
| `var(--font-body)` | Inter / Andika | Body text, labels, buttons, data values |
| `var(--font-mono)` | JetBrains Mono | Number inputs, code-style values |
| `var(--font-accent)` | Dancing Script | Decorative (rarely used in sims) |

**Canvas text** uses `'Andika, sans-serif'` directly (e.g. `ctx.font = '11px Andika, sans-serif'`).

---

## Colour System — CSS Custom Properties

All colours come from CSS variables defined in `css/style.css`. They automatically switch between dark and light themes. Never hardcode colours in the HTML/CSS — always use these variables:

| Variable | Dark Theme | Light Theme | Usage |
|---|---|---|---|
| `--bg-primary` | Very dark blue-black | Light grey-white | Page background, `#simArea` |
| `--bg-secondary` | Slightly lighter dark | Slightly darker light | Canvas wrap, input backgrounds |
| `--bg-card` | Dark card surface | White card surface | Side panel, controls bar, equations, Q&A |
| `--bg-glass-hover` | Subtle glass hover | Subtle glass hover | Hover states |
| `--text-primary` | White / near-white | Dark grey / near-black | Main text, data values, headings |
| `--text-secondary` | Light grey | Medium grey | Subheadings, section titles |
| `--text-muted` | Dim grey | Medium-light grey | Labels, descriptions |
| `--border-subtle` | Very faint border | Very faint border | All borders, separators |
| `--color-primary` | `#7c3aed` (purple) | `#7c3aed` (purple) | Accent colour (same both themes) |
| `--radius-sm` | Small radius | Small radius | Buttons, inputs, small pills |
| `--radius-md` | Medium radius | Medium radius | Cards, panels, sections |
| `--transition-fast` | Fast transition | Fast transition | Hover/state transitions |

### The Accent Colour: Purple `#7c3aed` / `rgba(124, 58, 237, ...)`

This purple is the **primary brand colour** used everywhere:
- Button hover borders: `rgba(124, 58, 237, 0.3)`
- Button hover background: `rgba(124, 58, 237, 0.08)`
- Primary button background: `rgba(124, 58, 237, 0.15)` / hover `0.25`
- Slider thumbs: `var(--color-primary)`
- Slider thumb glow: `rgba(124, 58, 237, 0.3)`
- Number input focus border: `var(--color-primary)`
- Tutorial dismiss button shadow: `rgba(124, 58, 237, 0.3)`

---

## Colour System — Canvas Drawing

Canvas elements use a separate theme-aware colour object (`tc`) that is recalculated whenever the theme changes. This pattern is used in every simulation:

```js
var tc = {};
function updateThemeColors() {
  var isLight = document.documentElement.getAttribute('data-theme') === 'light';
  tc = {
    bg:       isLight ? '#e8eaf0' : '#080818',        // Canvas background edge
    bgCenter: isLight ? '#f0f2f8' : '#0a0a24',        // Canvas background center (radial gradient)
    grid:     isLight ? 'rgba(0,120,200,0.06)' : 'rgba(0,212,255,0.04)',  // Grid dots
    text:     isLight ? '#333' : '#fff',               // Canvas text
    // ... add simulation-specific colours here
  };
}
updateThemeColors();

// Auto-update when theme toggles
new MutationObserver(function() { updateThemeColors(); draw(); })
  .observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
```

### Canvas Background Pattern

Every simulation uses this exact background pattern:

```js
function drawBackground() {
  // 1. Radial gradient fill (dark center, darker edges)
  var grad = ctx.createRadialGradient(canvasW/2, canvasH/2, 0, canvasW/2, canvasH/2, canvasW * 0.7);
  grad.addColorStop(0, tc.bgCenter);
  grad.addColorStop(1, tc.bg);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, canvasW, canvasH);

  // 2. Subtle grid dots (40px spacing)
  ctx.fillStyle = tc.grid;
  for (var x = 0; x < canvasW; x += 40) {
    for (var y = 0; y < canvasH; y += 40) {
      ctx.beginPath();
      ctx.arc(x, y, 1, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // 3. Simulation-specific elements drawn on top...
}
```

### Canvas Vector Arrow Colours

Velocity/force vectors on the canvas follow this colour scheme:

| Colour | Hex / RGBA | Usage |
|---|---|---|
| Cyan | `#00d4ff` | River/environment velocity, external forces |
| Green | `#00ffaa` | Object's own velocity (boat relative to water, etc.) |
| Purple | `#7c3aed` | Net/resultant velocity |
| Yellow | `#fbbf24` | Angle arcs and angle labels |
| Pink/Red | `#ff2d75` / `rgba(255,45,117,...)` | Drift markers, measurement lines, pulsing indicators |
| White (faint) | `rgba(255,255,255,0.2-0.4)` | Trails, dashed paths, reference lines |

Vectors are drawn with a subtle glow using `ctx.shadowBlur = 6` and `ctx.shadowColor` matching the arrow colour.

---

## Layout Architecture

### HTML Skeleton

```
.sim-wrapper                    ← max-width container, centered
  #simArea                      ← position: relative (for tutorial overlay)
    .sim-header                 ← title + buttons row
      h1                        ← simulation title
      div                       ← button group (Reset, Full Screen, ? Help)
    .sim-main-row               ← canvas + side panel, horizontal flex
      .canvas-wrap              ← flex: 1, holds the <canvas>
        canvas#simCanvas
      .side-data                ← 220px fixed width data panel
        h3 "Data"
        .data-grid
          .data-row * N         ← label + value pairs
    .controls-bar               ← sliders and launch button
      button.sim-btn.primary    ← Launch / Start / Play button
      .control-group * N        ← label + range + number input + unit
    .sim-tutorial               ← tutorial overlay (see tutorial section above)
  .equations-section            ← key equations (outside #simArea)
  .qa-section                   ← Q&A accordion (outside #simArea)
```

### Key Layout Rules

- `.sim-main-row` uses `gap: 1px` with `background: var(--border-subtle)` to create a 1px border between canvas and side panel (the gap IS the border)
- `.sim-main-row` has `border-radius` on top corners only; `.controls-bar` has `border-radius` on bottom corners only — together they form one rounded card
- `.controls-bar` has `border-top: none` to seamlessly connect with `.sim-main-row`
- `.equations-section` and `.qa-section` are **outside** `#simArea` (they don't go fullscreen)
- On mobile (<=900px), `.sim-main-row` switches to `flex-direction: column`

---

## Component CSS Reference

### `.sim-wrapper`
```css
.sim-wrapper {
  max-width: 1400px;
  margin: 0 auto;
  padding: 80px 24px 40px;  /* 80px top for navbar clearance */
}
```

### `.sim-header`
```css
.sim-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.sim-header h1 {
  font-family: var(--font-display);
  font-size: clamp(1.4rem, 2vw, 1.8rem);
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: 0.5px;
}
```

### `.sim-btn` (all buttons)
```css
.sim-btn {
  padding: 8px 20px;
  font-size: 0.85rem;
  font-weight: 600;
  font-family: var(--font-body);
  color: var(--text-secondary);
  background: var(--bg-secondary);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: var(--transition-fast);
}

.sim-btn:hover {
  color: var(--text-primary);
  border-color: rgba(124, 58, 237, 0.3);
  background: rgba(124, 58, 237, 0.08);
}

/* Primary variant (Launch button) */
.sim-btn.primary {
  background: rgba(124, 58, 237, 0.15);
  color: var(--text-primary);
  border-color: rgba(124, 58, 237, 0.3);
}

.sim-btn.primary:hover {
  background: rgba(124, 58, 237, 0.25);
}
```

### `.sim-main-row` + `.canvas-wrap` + `.side-data`
```css
.sim-main-row {
  display: flex;
  gap: 1px;
  background: var(--border-subtle);   /* the gap colour IS the border */
  border-radius: var(--radius-md) var(--radius-md) 0 0;
  overflow: hidden;
}

.canvas-wrap {
  flex: 1;
  overflow: hidden;
  background: var(--bg-secondary);
}

.canvas-wrap canvas {
  display: block;
  width: 100%;
}

.side-data {
  width: 220px;
  min-width: 200px;
  background: var(--bg-card);
  padding: 16px;
  display: flex;
  flex-direction: column;
}
```

### `.side-data` — Data Panel
```css
.side-data h3 {
  font-family: var(--font-display);
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 12px;
}

.data-grid {
  display: flex;
  flex-direction: column;
}

.data-row {
  display: flex;
  justify-content: space-between;
  padding: 6px 0;
  border-bottom: 1px solid var(--border-subtle);
}
.data-row:last-child { border-bottom: none; }

.data-label {
  font-family: var(--font-body);
  font-size: clamp(0.82rem, 0.95vw, 0.95rem);
  color: var(--text-muted);
}

.data-value {
  font-family: var(--font-body);
  font-size: clamp(0.85rem, 1vw, 1rem);
  color: var(--text-primary);
  font-weight: 600;
}
```

Data values default to `&mdash;` (em dash) before the simulation runs, then update to actual numbers with units.

### `.controls-bar` + `.control-group`
```css
.controls-bar {
  display: flex;
  align-items: center;
  gap: clamp(16px, 3.5vw, 40px);
  padding: 18px 24px;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-top: none;
  border-radius: 0 0 var(--radius-md) var(--radius-md);
  flex-wrap: wrap;
}

.control-group {
  display: flex;
  align-items: center;
  gap: 10px;
}

.control-group label {
  font-family: var(--font-body);
  font-size: clamp(0.85rem, 1vw, 1.05rem);
  color: var(--text-muted);
  white-space: nowrap;
}
```

### Range Slider Styling
```css
.control-group input[type="range"] {
  width: clamp(80px, 8vw, 140px);
  -webkit-appearance: none;
  background: var(--border-subtle);
  height: 4px;
  border-radius: 2px;
  outline: none;
}

.control-group input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 16px; height: 16px;
  background: var(--color-primary);
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 0 6px rgba(124, 58, 237, 0.3);
}

.control-group input[type="range"]::-moz-range-thumb {
  width: 16px; height: 16px;
  background: var(--color-primary);
  border-radius: 50%;
  cursor: pointer;
  border: none;
}
```

### Number Input Styling
```css
.control-group input[type="number"] {
  width: 58px;
  padding: 4px 6px;
  font-family: var(--font-mono);
  font-size: 0.88rem;
  color: var(--text-primary);
  background: var(--bg-secondary);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-sm);
  text-align: center;
  -moz-appearance: textfield;
  outline: none;
  transition: border-color 0.2s;
}

.control-group input[type="number"]:focus {
  border-color: var(--color-primary);
}

/* Hide spin buttons */
.control-group input[type="number"]::-webkit-inner-spin-button,
.control-group input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
```

### Control Group HTML Pattern

Each slider control follows this exact pattern — a range input and a number input kept in sync:

```html
<div class="control-group">
  <label>v<sub>boat</sub></label>
  <input type="range" id="boatSpeed" min="1" max="10" value="5" step="0.5">
  <input type="number" id="boatSpeedInput" min="1" max="10" value="5" step="0.5">
  <label>m/s</label>
</div>
```

The JS to sync them:

```js
function syncBoatSpeed(val) {
  val = Math.max(1, Math.min(10, parseFloat(val) || 1));
  val = Math.round(val * 2) / 2; // snap to 0.5 steps
  boatSpeedSlider.value = val;
  boatSpeedInput.value = val;
  resetSim();
}

boatSpeedSlider.oninput = function() { syncBoatSpeed(this.value); };
boatSpeedInput.onchange = function() { syncBoatSpeed(this.value); };
```

### `.equations-section`
```css
.equations-section {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 20px 24px;
  margin-top: 16px;
}

.equations-section h3 {
  font-family: var(--font-display);
  font-size: clamp(0.8rem, 1vw, 1rem);
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 14px;
}

.equations-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 32px;
}

.equation-item {
  font-family: var(--font-body);
  font-size: clamp(1rem, 1.2vw, 1.2rem);
  color: var(--text-primary);
  padding: 8px 16px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-sm);
  white-space: nowrap;
}

.equation-item .eq-label {
  color: var(--text-muted);
  font-size: clamp(0.8rem, 0.9vw, 0.9rem);
  display: block;
  margin-bottom: 2px;
}
```

HTML pattern:
```html
<div class="equations-section">
  <h3>Key Equations</h3>
  <div class="equations-grid">
    <div class="equation-item">
      <span class="eq-label">Crossing Time</span>
      t = d / (v<sub>b</sub> cos&theta;)
    </div>
    <!-- more equation items -->
  </div>
</div>
```

### `.qa-section` — Q&A Accordion
```css
.qa-section { margin-top: 32px; }

.qa-section h2 {
  font-family: var(--font-display);
  font-size: clamp(0.9rem, 1.1vw, 1.1rem);
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 16px;
}

.qa-item {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  margin-bottom: 8px;
  overflow: hidden;
  transition: var(--transition-fast);
}

.qa-item:hover { border-color: rgba(124, 58, 237, 0.2); }

.qa-q {
  padding: 16px 24px;
  font-family: var(--font-body);
  font-size: clamp(0.95rem, 1.1vw, 1.15rem);
  color: var(--text-primary);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: var(--transition-fast);
}

.qa-q:hover { background: var(--bg-glass-hover); }

.qa-q::after {
  content: '+';
  font-size: 1.4rem;
  color: var(--color-primary);
  transition: transform 0.2s;
  font-weight: 300;
}

.qa-item.open .qa-q::after { content: '\2212'; }

.qa-a {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.qa-item.open .qa-a { max-height: 500px; }

.qa-a-inner {
  padding: 0 24px 18px;
  font-family: var(--font-body);
  font-size: clamp(0.92rem, 1vw, 1.08rem);
  color: var(--text-secondary);
  line-height: 1.75;
}
```

HTML pattern:
```html
<div class="qa-section">
  <h2>Test Your Understanding</h2>

  <div class="qa-item">
    <div class="qa-q" onclick="this.parentElement.classList.toggle('open')">Question text here?</div>
    <div class="qa-a"><div class="qa-a-inner">
      Answer text here with <strong>bold</strong> for key terms.
      <br><button class="qa-copy" onclick="copyQA(this)">&#128203; Copy</button>
    </div></div>
  </div>
  <!-- more qa-items -->
</div>
```

### Q&A Copy Button
```css
.qa-copy {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin-top: 10px;
  padding: 5px 12px;
  font-family: var(--font-body);
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--text-muted);
  background: var(--bg-secondary);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 0.2s;
}

.qa-copy:hover {
  color: var(--text-primary);
  border-color: rgba(124, 58, 237, 0.3);
  background: rgba(124, 58, 237, 0.08);
}

.qa-copy.copied {
  color: #4ade80;
  border-color: rgba(74, 222, 128, 0.3);
  background: rgba(74, 222, 128, 0.08);
}
```

JS for the copy button:
```js
function copyQA(btn) {
  var item = btn.closest('.qa-item');
  var q = item.querySelector('.qa-q').textContent.trim();
  var a = item.querySelector('.qa-a-inner').textContent.replace('Copy', '').trim();
  var text = 'Q: ' + q + '\n\nA: ' + a;
  navigator.clipboard.writeText(text).then(function() {
    btn.classList.add('copied');
    btn.innerHTML = '&#10003; Copied';
    setTimeout(function() {
      btn.classList.remove('copied');
      btn.innerHTML = '&#128203; Copy';
    }, 2000);
  });
}
```

---

## Canvas Sizing Pattern

Every simulation uses this same responsive canvas sizing approach:

```js
let canvasW, canvasH;

function resizeCanvas() {
  const wrap = canvas.parentElement;
  const isFS = !!document.fullscreenElement;
  const w = wrap.clientWidth;
  const h = isFS ? wrap.clientHeight : Math.max(350, window.innerHeight - 300);
  const dpr = window.devicePixelRatio || 1;

  canvas.width = w * dpr;
  canvas.height = h * dpr;
  canvas.style.width = w + 'px';
  canvas.style.height = h + 'px';
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  canvasW = w;
  canvasH = h;

  // Recalculate simulation-specific layout variables here...

  draw();
}

window.addEventListener('resize', resizeCanvas);
```

Key points:
- Uses `devicePixelRatio` for crisp rendering on retina displays
- Minimum canvas height of 350px
- Normal height = `window.innerHeight - 300` (leaves room for controls + navbar)
- Fullscreen uses full `wrap.clientHeight`

---

## Fullscreen Support

```js
document.getElementById('fullscreenBtn').addEventListener('click', function() {
  var el = document.getElementById('simArea');
  if (!document.fullscreenElement) {
    (el.requestFullscreen || el.webkitRequestFullscreen || el.msRequestFullscreen).call(el);
  } else {
    (document.exitFullscreen || document.webkitExitFullscreen || document.msExitFullscreen).call(document);
  }
});

document.addEventListener('fullscreenchange', function() {
  setTimeout(resizeCanvas, 100);
  setTimeout(resizeCanvas, 300);  // double-resize for layout settling
});
```

Fullscreen CSS (always include):
```css
#simArea:fullscreen,
#simArea:-webkit-full-screen {
  background: var(--bg-primary);
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}

#simArea:fullscreen .sim-main-row,
#simArea:-webkit-full-screen .sim-main-row {
  flex: 1; min-height: 0;
}

#simArea:fullscreen .canvas-wrap,
#simArea:-webkit-full-screen .canvas-wrap {
  flex: 1; min-height: 0;
}
```

---

## Background Animation Loop

Simulations that have continuous animation (e.g. flowing water, swinging pendulum at rest) use a separate background loop that runs even when the main simulation is idle:

```js
let bgAnimId = null;
let waveTime = 0;

function bgLoop() {
  waveTime += 0.03;
  if (!animating) {
    draw();  // redraw with updated waveTime for ambient animation
  }
  bgAnimId = requestAnimationFrame(bgLoop);
}

// Start on init
bgLoop();
```

---

## Achievement Integration

After the simulation completes a significant action (e.g. boat lands on the far bank), check achievements:

```js
if (window.AchievementEngine) AchievementEngine.check();
```

This is called once at the end of the animation, not every frame.

---

## Responsive Breakpoints

```css
@media (max-width: 900px) {
  .sim-main-row { flex-direction: column; }
  .side-data { width: 100%; min-width: unset; }
}

@media (max-width: 768px) {
  .sim-wrapper { padding: 70px 12px 24px; }
  .sim-header { flex-direction: column; gap: 12px; align-items: flex-start; }
  .controls-bar { gap: 12px; padding: 12px; }
}
```

---

## Global Overrides

Every simulation page hides the site-wide background decorations:

```css
.bg-grid, #particles-canvas { display: none !important; }
```

---

## Clamp Pattern

All font sizes use CSS `clamp()` for fluid responsive sizing. The pattern is:

```
clamp(minimum, preferred-vw, maximum)
```

Examples from the codebase:
- Page title: `clamp(1.4rem, 2vw, 1.8rem)`
- Body text / labels: `clamp(0.85rem, 1vw, 1.05rem)`
- Data labels: `clamp(0.82rem, 0.95vw, 0.95rem)`
- Data values: `clamp(0.85rem, 1vw, 1rem)`
- Equations: `clamp(1rem, 1.2vw, 1.2rem)`
- Q&A questions: `clamp(0.95rem, 1.1vw, 1.15rem)`

---

## Summary — New Simulation Checklist

When building a brand new simulation:

1. Copy the head template (fonts, CSS, scripts)
2. Copy the navbar and splash screen from an existing sim
3. Add `<style>` with `.bg-grid` override, then all component CSS from this document
4. Build the HTML skeleton: `.sim-wrapper` > `#simArea` > `.sim-header` + `.sim-main-row` + `.controls-bar`
5. Add `.equations-section` and `.qa-section` outside `#simArea`
6. Add `<script>` with theme colour system, canvas sizing, drawing, animation, controls sync, fullscreen, tutorial overlay
7. End with `<script src="../js/main.js"></script>`
8. Use CSS variables for all colours — never hardcode
9. Use `clamp()` for all font sizes
10. Test both dark and light themes
11. Test fullscreen mode
12. Test mobile layout (<=768px)
