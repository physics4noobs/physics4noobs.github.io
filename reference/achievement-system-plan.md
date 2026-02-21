# Achievement System — Implementation Plan

## What's Already Done

### Files Created
- `css/achievements.css` — Side panel, toggle button, achievement items, progress bar, toast notifications, completion badge, responsive mobile overlay. Fully complete.
- `js/achievements.js` — Shared engine. Injects panel DOM, polls every 2s, syncs with Firestore, shows toasts. Uses `window.SIM_ACHIEVEMENTS` array. Fully complete.
- `js/achievements-kinematics.js` — 3 achievements for projectile motion (max range angle, complementary pair, trajectory collector). **Will be replaced** by the declarative config file.

### Files Modified
- `simulations/kinematics.html` — Added CSS link, achievement script includes, explicit `AchievementEngine.check()` call after projectile lands. Default angle changed to 30 degrees.
- `progress.html` — Added achievements CSS, `SIM_ACHIEVEMENT_COUNTS` map, achievement progress bars on sim cards, total discoveries in summary stats.

### Files Partially Created (need cleanup)
Individual achievement files were created for batch 1 and batch 2 sims by agents. These should be **deleted** and replaced by the single declarative config.

Delete these if they exist:
```
js/achievements-pendulum.js
js/achievements-calorimetry.js
js/achievements-ac-circuits.js
js/achievements-rotational-motion.js
js/achievements-vector-addition.js
js/achievements-beats.js
js/achievements-ray-optics.js
js/achievements-work-power-energy.js
js/achievements-vector-components.js
js/achievements-collisions.js
js/achievements-hookes-law.js
js/achievements-pulley-wire-constraint.js
js/achievements-thermodynamics.js
js/achievements-atwood-machine.js
js/achievements-work-done.js
js/achievements-newtons-laws.js
js/achievements-manometer.js
js/achievements-center-of-mass.js
js/achievements-magnus-effect.js
js/achievements-rolling-vs-rotation.js
js/achievements-current-electricity.js
js/achievements-hydrostatic-paradox.js
js/achievements-em-waves.js
js/achievements-waves.js
```
Also delete `js/achievements-kinematics.js` once the config file replaces it.

---

## Refactored Architecture

### Goal
Replace 48+ individual `achievements-{simId}.js` files with **one declarative config** file. The engine interprets check rules as data, not code.

### File Structure (final)
```
css/achievements.css          — already done, no changes needed
js/achievements-config.js     — NEW: single config for all sims
js/achievements.js            — UPDATE: add declarative check interpreter
```

Each simulation HTML gets two script tags:
```html
<link rel="stylesheet" href="../css/achievements.css">
<script defer src="../js/achievements-config.js"></script>
<script defer src="../js/achievements.js"></script>
```

No per-sim achievement files. No per-sim hooks needed (engine polls every 2s).

---

## Declarative Check Types

The engine supports these check types in the `check` field:

### 1. `slider` — Check a DOM slider's current value
```js
{ type: 'slider', id: 'angleSlider', op: 'eq', value: 45 }
```
Operators: `eq`, `lt`, `gt`, `lte`, `gte`

### 2. `global` — Check a global variable's value
```js
{ type: 'global', name: 'isRunning', op: 'eq', value: true }
```
Also supports nested paths:
```js
{ type: 'global', name: 'S.mode', op: 'eq', value: 'standing' }
```

### 3. `multi` — Combine multiple checks (AND/OR)
```js
{ type: 'multi', logic: 'and', checks: [
  { type: 'slider', id: 'voltageSlider', op: 'eq', value: 6 },
  { type: 'slider', id: 'resistanceSlider', op: 'eq', value: 3 }
]}
```

### 4. `custom` — Fallback for complex logic (inline function string or named function)
```js
{ type: 'custom', fn: function() {
  if (typeof launches === 'undefined') return false;
  var angles = {};
  for (var i = 0; i < launches.length; i++) {
    if (!launches[i].done) continue;
    var a = launches[i].angle;
    if (a === 45) continue;
    if (angles[90 - a]) return true;
    angles[a] = true;
  }
  return false;
}}
```

### 5. `global-array` — Check conditions on a global array
```js
{ type: 'global-array', name: 'launches', filter: { done: true }, count: { op: 'gte', value: 5 } }
```
Or find a specific item:
```js
{ type: 'global-array', name: 'launches', find: { done: true, angle: 45 } }
```

---

## Changes to achievements.js

Replace the current `runCheck()` which calls `a.check()` functions with a declarative interpreter:

```js
function evaluateCheck(rule) {
  switch (rule.type) {
    case 'slider':
      var el = document.getElementById(rule.id);
      if (!el) return false;
      return compare(parseFloat(el.value), rule.op, rule.value);

    case 'global':
      var val = resolveGlobal(rule.name); // handles "S.mode" dot paths
      if (val === undefined) return false;
      return compare(val, rule.op, rule.value);

    case 'multi':
      var method = rule.logic === 'or' ? 'some' : 'every';
      return rule.checks[method](function(c) { return evaluateCheck(c); });

    case 'global-array':
      var arr = window[rule.name];
      if (!arr || !arr.length) return false;
      if (rule.find) {
        return arr.some(function(item) {
          for (var k in rule.find) {
            if (item[k] !== rule.find[k]) return false;
          }
          return true;
        });
      }
      if (rule.count) {
        var filtered = rule.filter
          ? arr.filter(function(item) {
              for (var k in rule.filter) { if (item[k] !== rule.filter[k]) return false; }
              return true;
            })
          : arr;
        return compare(filtered.length, rule.count.op, rule.count.value);
      }
      return false;

    case 'custom':
      return typeof rule.fn === 'function' ? rule.fn() : false;
  }
  return false;
}

function compare(a, op, b) {
  switch (op) {
    case 'eq':  return a == b;
    case 'lt':  return a < b;
    case 'gt':  return a > b;
    case 'lte': return a <= b;
    case 'gte': return a >= b;
  }
  return false;
}

function resolveGlobal(path) {
  var parts = path.split('.');
  var obj = window;
  for (var i = 0; i < parts.length; i++) {
    if (obj === undefined || obj === null) return undefined;
    obj = obj[parts[i]];
  }
  return obj;
}
```

Also update how achievements are loaded. Instead of reading `window.SIM_ACHIEVEMENTS` directly, the engine reads from the config:

```js
var simId = window.location.pathname.split('/').pop().replace('.html', '');
var config = window.SIM_ACHIEVEMENTS_CONFIG;
if (!config || !config[simId]) return;
var achievements = config[simId];
```

---

## Config: achievements-config.js

### Structure
```js
window.SIM_ACHIEVEMENTS_CONFIG = {
  simId: [
    { id: 'unique_id', title: 'Display Title', description: 'How to unlock', icon: 'emoji', check: { ... } },
    // ... 3 per sim
  ],
  // ... all 49 sims
};
```

### All 49 Simulations — Achievement Definitions

Each sim gets exactly 3 achievements. Below are the definitions with the verified global variable names and slider element IDs from reading each simulation's source code.

---

#### kinematics
Globals: `launches` (array, items have `.done`, `.angle`, `.hmax`, `.vx`, `.vy`)

| ID | Title | Check |
|----|-------|-------|
| `max_range_angle` | Maximum Range | `global-array` find: `{done: true, angle: 45}` in `launches` |
| `complementary_angles` | Complementary Pair | `custom` fn (two done launches with angles summing to 90) |
| `trajectory_collector` | Trajectory Collector | `global-array` count done items >= 5 in `launches` |

#### pendulum
Globals: `state` object (`.measuredPeriod`, `.running`). Sliders: `dampingSlider`, `gravitySlider`, `lengthSlider`, `angleSlider`

| ID | Title | Check |
|----|-------|-------|
| `two_second_swing` | Two-Second Swing | `custom` fn (state.measuredPeriod between 1.9 and 2.1 while state.running) |
| `zero_damping` | Perpetual Motion | `slider` dampingSlider eq 0 |
| `moon_gravity` | Moon Gravity | `slider` gravitySlider lt 3 |

#### calorimetry
Globals: `state` object (`.mixed`, `.m1`, `.m2`, `.tEq`). Sliders: `m1Slider`, `m2Slider`, `t1Slider`, `t2Slider`

| ID | Title | Check |
|----|-------|-------|
| `first_mix` | First Mixture | `global` state.mixed eq true |
| `equal_masses` | Equal Masses | `multi` AND: state.mixed eq true, slider m1Slider value eq slider m2Slider value |
| `extreme_temp` | Temperature Extremes | `slider` t1Slider eq 100 |

#### ac-circuits
Sliders: element IDs are `frequency`, `amplitude`, `phase`

| ID | Title | Check |
|----|-------|-------|
| `phase_90` | Quarter Phase | `slider` phase eq 90 |
| `phase_180` | Half Phase | `slider` phase eq 180 |
| `max_amplitude` | Full Power | `slider` amplitude eq 100 |

#### rotational-motion
Globals: `omega`, `braking`. Slider: element ID `torque` (max 50)

| ID | Title | Check |
|----|-------|-------|
| `high_spin` | Speed Demon | `global` omega gt 20 |
| `full_stop` | Full Brake | `multi` AND: global braking eq true, global omega lt 0.1 (use custom for abs) |
| `max_torque` | Maximum Torque | `slider` torque eq 50 |

#### vector-addition
Sliders: `magA`, `angleA`, `magB`, `angleB`

| ID | Title | Check |
|----|-------|-------|
| `cancel_out` | Cancellation | `custom` fn (same magnitude, angles 180 apart) |
| `right_angle` | Right Angle | `custom` fn (angle diff = 90) |
| `parallel` | Same Direction | `custom` fn (angleA === angleB) |

#### beats
Globals: `f1`, `f2` (top-level let variables — may need slider fallback). Slider IDs: check HTML (likely `f1` and `f2` or `freq1` and `freq2`)

| ID | Title | Check |
|----|-------|-------|
| `unison` | Perfect Unison | `custom` fn (f1 === f2) |
| `one_beat` | One Beat Per Second | `custom` fn (Math.abs(f1 - f2) === 1) |
| `max_beats` | Rapid Beats | `custom` fn (Math.abs(f1 - f2) >= 10) |

#### ray-optics
Globals: `isConvex`. Sliders: `objDist`, `focal`

| ID | Title | Check |
|----|-------|-------|
| `virtual_image` | Virtual Image | `custom` fn (compute v from lens formula, check v < 0) |
| `double_size` | Double Size | `custom` fn (compute magnification, check |m| >= 2) |
| `lens_toggle` | Lens Explorer | `custom` fn (track both convex/concave seen via window flag) |

#### work-power-energy
Globals: `running`, `ballV`. Slider: `height` (max 200)

| ID | Title | Check |
|----|-------|-------|
| `first_drop` | Free Fall | `global` running eq true |
| `max_height` | Maximum Potential | `slider` height eq 200 |
| `fast_impact` | Terminal Velocity | `global` ballV gt 50 |

#### vector-components
Sliders: `magnitude`, `angle`

| ID | Title | Check |
|----|-------|-------|
| `unit_vector` | Unit Vector | `slider` magnitude eq 1 |
| `diagonal` | Perfect Diagonal | `slider` angle eq 45 |
| `axis_aligned` | Along the Axis | `multi` OR: slider angle eq 0, slider angle eq 90 |

#### collisions
Globals: `isElastic`, `animationPhase`, `m1`, `m2`, `v2_initial`

| ID | Title | Check |
|----|-------|-------|
| `elastic` | Elastic Collision | `multi` AND: global isElastic eq true, global animationPhase eq 'after' |
| `equal_mass` | Newton's Cradle | `multi` AND: global m1 eq global m2, global animationPhase eq 'after' |
| `head_on` | Head On | `global` v2_initial lt 0 |

#### hookes-law
Sliders: `springK` (max 100), `mass` (max 5)

| ID | Title | Check |
|----|-------|-------|
| `max_stretch` | Maximum Extension | `slider` mass eq 5 |
| `stiff_spring` | Stiff Spring | `slider` springK eq 100 |
| `soft_spring` | Soft Spring | `slider` springK eq 10 |

#### pulley-wire-constraint
Globals: `mass1`, `mass2`, `isRunning`, `velocity`. Sliders: `mass1`, `mass2`

| ID | Title | Check |
|----|-------|-------|
| `balanced` | Perfect Balance | `custom` fn (slider mass1 === slider mass2) |
| `max_diff` | Maximum Acceleration | `custom` fn (one slider at max, other at min) |
| `first_run` | First Constraint | `global` isRunning eq true |

#### thermodynamics
Globals: `process` (string), `stateHistory` (array). Track used processes via window flag.

| ID | Title | Check |
|----|-------|-------|
| `isothermal` | Isothermal Process | `global` process eq 'isothermal' |
| `adiabatic` | Adiabatic Explorer | `global` process eq 'adiabatic' |
| `full_cycle` | Complete Cycle | `custom` fn (track 3+ different process types used via window flag) |

#### atwood-machine
Globals: `m1`, `m2`, `pulleyMass`, `isRunning`. Slider: `pulleyMass` (max 5)

| ID | Title | Check |
|----|-------|-------|
| `balanced` | Perfect Balance | `custom` fn (m1 === m2) |
| `heavy_pulley` | Massive Pulley | `slider` pulleyMass eq 5 |
| `first_run` | Atwood in Motion | `global` isRunning eq true |

#### work-done
Globals: `angle`, `force`, `frictionCoeff`. Slider: `forceSlider` (max 50)

| ID | Title | Check |
|----|-------|-------|
| `zero_work` | Zero Work | `global` angle eq 90 |
| `max_force` | Brute Force | `slider` forceSlider eq 50 |
| `friction_explorer` | Friction Explorer | `global` frictionCoeff gt 0.3 |

#### newtons-laws
Globals: DOM references `forceSlider`, `massSlider`, `fricSlider`

| ID | Title | Check |
|----|-------|-------|
| `no_motion` | Static Equilibrium | `custom` fn (friction force > applied force) |
| `max_accel` | Maximum Acceleration | `custom` fn (force at max, mass at min) |
| `friction_balance` | Balanced Forces | `custom` fn (force ≈ friction force within tolerance) |

#### manometer
Globals: `gasPressure`, `fluidDensity`

| ID | Title | Check |
|----|-------|-------|
| `atmospheric` | Atmospheric | `global` gasPressure eq 1.0 |
| `mercury` | Mercury Manometer | `global` fluidDensity eq 13600 |
| `high_pressure` | High Pressure | `global` gasPressure gte 2.0 |

#### center-of-mass
Globals: `numMasses`, `placingMode`, `masses` (array with `.m`)

| ID | Title | Check |
|----|-------|-------|
| `first_calc` | First Calculation | `multi` AND: global numMasses gte 2, global placingMode eq false |
| `five_masses` | Complex System | `global` numMasses eq 5 |
| `equal_masses` | Symmetric System | `custom` fn (all masses[].m equal) |

#### magnus-effect
Globals: `isLaunched`, `spin`. Slider: `spin` (max 50)

| ID | Title | Check |
|----|-------|-------|
| `first_spin` | First Spin | `multi` AND: global isLaunched eq true, global spin gt 0 |
| `no_spin` | No Spin | `multi` AND: global isLaunched eq true, global spin eq 0 |
| `max_curve` | Maximum Curve | `slider` spin eq 50 |

#### rolling-vs-rotation
Globals: `isRunning`, `omega`, `radius`. Sliders: `omega` (max 10), `radius` (max 60)

| ID | Title | Check |
|----|-------|-------|
| `first_roll` | Rolling Motion | `global` isRunning eq true |
| `fast_spin` | Fast Spinner | `slider` omega eq 10 |
| `big_wheel` | Big Wheel | `slider` radius eq 60 |

#### current-electricity
Globals: DOM refs `voltageSlider`, `resistanceSlider`

| ID | Title | Check |
|----|-------|-------|
| `ohms_law` | Ohm's Law | `custom` fn (V=6, R=3, so I=2A) |
| `max_current` | Maximum Current | `custom` fn (max V, min R) |
| `high_resistance` | High Resistance | `custom` fn (R at max 100) |

#### hydrostatic-paradox
Globals: `fluidHeight`, `fluidDensity`. Sliders: `heightSlider` (max 200), `densitySlider` (max 13600)

| ID | Title | Check |
|----|-------|-------|
| `max_depth` | Deep Water | `slider` heightSlider eq 200 |
| `mercury` | Heavy Fluid | `slider` densitySlider eq 13600 |
| `the_paradox` | The Paradox | `slider` heightSlider gt 100 |

#### em-waves
Globals: DOM refs `wlSlider`, `ampSlider`. Wavelength: 30-150, Amplitude: 20-100

| ID | Title | Check |
|----|-------|-------|
| `long_wave` | Long Wavelength | `custom` fn (wlSlider.value == 150) |
| `strong_field` | Strong Field | `custom` fn (ampSlider.value == 100) |
| `short_wave` | Short Wavelength | `custom` fn (wlSlider.value == 30) |

#### waves
Globals: `S` (object with `.mode`, `.wave2On`), `sl` (slider refs, `sl.w1`)

| ID | Title | Check |
|----|-------|-------|
| `standing_wave` | Standing Wave | `global` S.mode eq 'standing' |
| `superposition` | Superposition | `global` S.wave2On eq true |
| `high_freq` | High Frequency | `custom` fn (sl.w1.value == 12) |

#### shm-waves
Globals: `S` (object with `.osc2On`, `.running`). Sliders: check HTML for IDs

| ID | Title | Check |
|----|-------|-------|
| `resonance` | Resonance | `custom` fn (osc2 on, both omegas equal) |
| `anti_phase` | Anti-Phase | `custom` fn (phase diff = pi) |
| `dual_osc` | Dual Oscillators | `global` S.osc2On eq true |

#### continuity-equation
Sliders: check HTML for area1, area2, flowRate IDs

| ID | Title | Check |
|----|-------|-------|
| `narrow` | Speed Up | `custom` fn (area2 at min) |
| `wide` | Slow Down | `custom` fn (area2 at max) |
| `max_flow` | Maximum Flow | `custom` fn (flow at max) |

#### conservation-momentum
Globals: `released`, `animating`, `m1`, `m2`

| ID | Title | Check |
|----|-------|-------|
| `first_release` | Spring Release | `global` released eq true |
| `equal_split` | Equal Split | `custom` fn (m1 === m2 and released) |
| `david_goliath` | David vs Goliath | `custom` fn (mass ratio > 5) |

#### emi
Globals: `running`. Sliders: check HTML for speed and turns IDs

| ID | Title | Check |
|----|-------|-------|
| `first_induction` | Faraday's Discovery | `global` running eq true |
| `max_turns` | Maximum Flux | `custom` fn (turns slider at max) |
| `fast_motion` | Speed Demon | `custom` fn (speed slider at max) |

#### static-kinetic-friction
Globals: `appliedForce`, `mass`, `muStatic`, `muKinetic`, `isMoving`

| ID | Title | Check |
|----|-------|-------|
| `overcome` | Breaking Free | `global` isMoving eq true |
| `max_grip` | Maximum Grip | `global` muStatic gte 0.8 |
| `smooth_slide` | Smooth Slide | `multi` AND: global isMoving eq true, global muKinetic lte 0.1 |

#### boat-river
Globals: `boat` object (`.x`, `.y`). Check for boat reaching other bank.

| ID | Title | Check |
|----|-------|-------|
| `cross` | River Crossed | `custom` fn (boat.y <= riverTop threshold) |
| `min_time` | Minimum Time | `custom` fn (detect min-time button used or angle = 90) |
| `min_drift` | Zero Drift | `custom` fn (detect min-drift button used) |

#### gravity-variation
Slider: check HTML for position slider ID (r/R ratio, 0-3)

| ID | Title | Check |
|----|-------|-------|
| `surface` | At the Surface | `custom` fn (ratio == 1.0) |
| `center` | Earth's Core | `custom` fn (ratio == 0) |
| `orbit` | High Orbit | `custom` fn (ratio == 3.0) |

#### gravitation
Sliders: check HTML for mass1, mass2, distance IDs

| ID | Title | Check |
|----|-------|-------|
| `close` | Close Encounter | `custom` fn (distance at min) |
| `binary` | Binary System | `custom` fn (m1 == m2) |
| `max_force` | Strong Pull | `custom` fn (max masses + min distance) |

#### poissons-ratio
Globals: check HTML for material selection mechanism

| ID | Title | Check |
|----|-------|-------|
| `rubber` | Rubber Band | `custom` fn (poisson ratio == 0.5) |
| `cork` | Cork - Zero Ratio | `custom` fn (poisson ratio == 0) |
| `auxetic` | Auxetic Material | `custom` fn (poisson ratio < 0) |

#### fluid-dynamics
Globals: `running`. Sliders: check HTML for flow, narrow width IDs

| ID | Title | Check |
|----|-------|-------|
| `first_flow` | Flow Started | `global` running eq true |
| `venturi` | Venturi Effect | `custom` fn (narrow width at min) |
| `max_flow` | Full Flow | `custom` fn (flow slider at max) |

#### doppler-effect
Globals: `isMoving`, `sourceSpeedPercent`. Sliders: check HTML for speed, freq IDs

| ID | Title | Check |
|----|-------|-------|
| `first_motion` | Sound in Motion | `global` isMoving eq true |
| `near_mach` | Approaching Mach | `global` sourceSpeedPercent gt 70 |
| `high_pitch` | High Pitch | `custom` fn (freq slider at max) |

#### wave-optics
Sliders: check HTML for wavelength, slit separation, screen distance IDs

| ID | Title | Check |
|----|-------|-------|
| `red_light` | Red Light | `custom` fn (wavelength > 620) |
| `violet_light` | Violet Light | `custom` fn (wavelength < 420) |
| `wide_fringes` | Wide Fringes | `custom` fn (slit separation at min) |

#### goat-vs-boat
Globals: `isWalking`, `walkProgress`. Sliders: `personMass`, `boatMass`

| ID | Title | Check |
|----|-------|-------|
| `walk_complete` | Walk Complete | `custom` fn (walkProgress >= 1) |
| `heavy_person` | Heavy Walker | `custom` fn (personMass at max) |
| `light_boat` | Light Boat | `custom` fn (boatMass at min) |

#### venturimeter
Sliders: check HTML for velocity, diameter1, diameter2 IDs

| ID | Title | Check |
|----|-------|-------|
| `narrow_tube` | Narrow Tube | `custom` fn (diameter2 at min) |
| `fast_flow` | Fast Flow | `custom` fn (velocity at max) |
| `wide_ratio` | Wide Ratio | `custom` fn (d1/d2 ratio > 3) |

#### rain-man
Sliders: check HTML for rainSpeed, manSpeed IDs

| ID | Title | Check |
|----|-------|-------|
| `standing_still` | Standing Still | `custom` fn (manSpeed == 0) |
| `outrun_rain` | Outrun the Rain | `custom` fn (manSpeed > rainSpeed) |
| `fast_run` | Fast Runner | `custom` fn (manSpeed at max) |

#### angular-momentum
Globals: `isRunning`, `currentOmega`. Sliders: `radius`, `omega`

| ID | Title | Check |
|----|-------|-------|
| `conservation` | Conservation | `custom` fn (change radius while running, omega auto-adjusts) |
| `tight_spin` | Tight Spin | `custom` fn (radius at min while running) |
| `first_spin` | First Spin | `global` isRunning eq true |

#### pascals-law
Sliders: check HTML for force1, area1, area2 IDs

| ID | Title | Check |
|----|-------|-------|
| `force_multiply` | Force Multiplier | `custom` fn (A2/A1 ratio >= 5) |
| `equal_areas` | Equal Areas | `custom` fn (A1 == A2) |
| `max_force` | Maximum Pressure | `custom` fn (force at max) |

#### inclined-plane-race
Globals: `isRunning`, `angle`. Slider: `angle` (15-60)

| ID | Title | Check |
|----|-------|-------|
| `first_race` | First Race | `global` isRunning eq true |
| `steep_slope` | Steep Slope | `slider` angle eq 60 |
| `gentle_slope` | Gentle Slope | `slider` angle eq 15 |

#### wire-ring-constraint
Globals: `isRunning`, `gravityEnabled`. Sliders: `radius`, `initialAngle`

| ID | Title | Check |
|----|-------|-------|
| `first_bead` | Bead in Motion | `global` isRunning eq true |
| `gravity_on` | Gravity Mode | `global` gravityEnabled eq true |
| `full_circle` | Full Circle | `slider` initialAngle eq 360 |

#### projectile-angles
Globals: `projectiles` (array). Slider: `velocity`

| ID | Title | Check |
|----|-------|-------|
| `first_launch` | Launch All | `custom` fn (projectiles.length > 0) |
| `max_velocity` | Maximum Power | `custom` fn (velocity slider at max 80) |
| `compare_angles` | Angle Comparison | `custom` fn (all projectiles landed) |

#### magnetism
Globals: `particle`, `trail`. Sliders: check HTML for velocity, charge, bfield IDs

| ID | Title | Check |
|----|-------|-------|
| `first_particle` | Lorentz Force | `custom` fn (trail.length > 0) |
| `tight_spiral` | Tight Spiral | `custom` fn (high B-field, low velocity) |
| `wide_orbit` | Wide Orbit | `custom` fn (low B-field or high velocity) |

#### electrostatics
Globals: `charges` (array of {x, y, q})

| ID | Title | Check |
|----|-------|-------|
| `first_charge` | First Charge | `custom` fn (charges.length >= 1) |
| `dipole` | Electric Dipole | `custom` fn (one positive, one negative charge) |
| `three_charges` | Complex Field | `custom` fn (charges.length >= 3) |

#### modulus-elasticity
Globals: `selectedMaterial`, `animating`, `animationProgress`, `showAll`

| ID | Title | Check |
|----|-------|-------|
| `first_test` | Material Test | `custom` fn (animationProgress >= 1 or animating) |
| `compare_all` | Compare All | `global` showAll eq true |
| `rubber_test` | Rubber Test | `global` selectedMaterial eq 'rubber' |

#### modern-physics
Globals: `freq`, `intensity`, `voltage`, `metalIdx`, `electrons` (array). Sliders: `freqSlider`, `intensitySlider`, `voltageSlider`

| ID | Title | Check |
|----|-------|-------|
| `photoelectric` | Photoelectric Effect | `custom` fn (electrons.length > 0, meaning emission happening) |
| `threshold_freq` | Threshold Frequency | `custom` fn (freq just above threshold for current metal) |
| `stopping_potential` | Stopping Potential | `custom` fn (voltage negative enough to stop electrons) |

---

## HTML Modifications Needed

For each of the 49 simulation HTML files, add these 3 lines:

### After `<link rel="stylesheet" href="../css/style.css">`:
```html
<link rel="stylesheet" href="../css/achievements.css">
```

### Before `</head>`, after the last `<script defer>`:
```html
<script defer src="../js/achievements-config.js"></script>
<script defer src="../js/achievements.js"></script>
```

### Already done:
- `simulations/kinematics.html` — already has includes (update to use config instead of individual file)

### List of 48 HTML files to modify:
```
simulations/pendulum.html
simulations/calorimetry.html
simulations/ac-circuits.html
simulations/rotational-motion.html
simulations/vector-addition.html
simulations/beats.html
simulations/ray-optics.html
simulations/work-power-energy.html
simulations/vector-components.html
simulations/collisions.html
simulations/hookes-law.html
simulations/pulley-wire-constraint.html
simulations/thermodynamics.html
simulations/atwood-machine.html
simulations/work-done.html
simulations/newtons-laws.html
simulations/manometer.html
simulations/center-of-mass.html
simulations/magnus-effect.html
simulations/rolling-vs-rotation.html
simulations/current-electricity.html
simulations/hydrostatic-paradox.html
simulations/em-waves.html
simulations/waves.html
simulations/shm-waves.html
simulations/continuity-equation.html
simulations/conservation-momentum.html
simulations/emi.html
simulations/static-kinetic-friction.html
simulations/boat-river.html
simulations/gravity-variation.html
simulations/gravitation.html
simulations/poissons-ratio.html
simulations/fluid-dynamics.html
simulations/doppler-effect.html
simulations/wave-optics.html
simulations/goat-vs-boat.html
simulations/venturimeter.html
simulations/rain-man.html
simulations/angular-momentum.html
simulations/pascals-law.html
simulations/inclined-plane-race.html
simulations/wire-ring-constraint.html
simulations/projectile-angles.html
simulations/magnetism.html
simulations/electrostatics.html
simulations/modulus-elasticity.html
simulations/modern-physics.html
```

---

## Update progress.html

Replace the `SIM_ACHIEVEMENT_COUNTS` map with all 49 sims:

```js
var SIM_ACHIEVEMENT_COUNTS = {
  kinematics: 3, pendulum: 3, calorimetry: 3, 'ac-circuits': 3,
  'rotational-motion': 3, 'vector-addition': 3, beats: 3, 'ray-optics': 3,
  'work-power-energy': 3, 'vector-components': 3, collisions: 3,
  'hookes-law': 3, 'pulley-wire-constraint': 3, thermodynamics: 3,
  'atwood-machine': 3, 'work-done': 3, 'newtons-laws': 3, manometer: 3,
  'center-of-mass': 3, 'magnus-effect': 3, 'rolling-vs-rotation': 3,
  'current-electricity': 3, 'hydrostatic-paradox': 3, 'em-waves': 3,
  waves: 3, 'shm-waves': 3, 'continuity-equation': 3,
  'conservation-momentum': 3, emi: 3, 'static-kinetic-friction': 3,
  'boat-river': 3, 'gravity-variation': 3, gravitation: 3,
  'poissons-ratio': 3, 'fluid-dynamics': 3, 'doppler-effect': 3,
  'wave-optics': 3, 'goat-vs-boat': 3, venturimeter: 3, 'rain-man': 3,
  'angular-momentum': 3, 'pascals-law': 3, 'inclined-plane-race': 3,
  'wire-ring-constraint': 3, 'projectile-angles': 3, magnetism: 3,
  electrostatics: 3, 'modulus-elasticity': 3, 'modern-physics': 3
};
```

---

## Update kinematics.html

Replace individual file reference with config file:

```html
<!-- Remove this -->
<script defer src="../js/achievements-kinematics.js"></script>

<!-- Replace with -->
<script defer src="../js/achievements-config.js"></script>
```

Keep `<script defer src="../js/achievements.js"></script>` as is.

The explicit `AchievementEngine.check()` call after projectile landing can stay for immediate feedback, but is optional since polling covers it.

---

## Firestore Schema (unchanged)

```
users/{uid}/simulations/{simId}
├── name, visitCount, totalTimeSpent, lastVisited  (existing)
└── achievements                                    (map field)
    ├── max_range_angle: { unlocked: true, unlockedAt: Timestamp }
    ├── complementary_angles: { ... }
    └── ...
```

---

## Implementation Order for Next Session

1. Delete all individual `js/achievements-*.js` files (listed above)
2. Create `js/achievements-config.js` with all 49 sim entries
   - For each sim marked as `custom`, read the HTML first to verify exact globals
   - Write the check functions
3. Update `js/achievements.js` — add declarative check interpreter (`evaluateCheck`, `compare`, `resolveGlobal`)
4. Update `simulations/kinematics.html` — swap individual file for config file
5. Modify all 48 other HTML files — add CSS link + 2 script tags
6. Update `progress.html` — expand `SIM_ACHIEVEMENT_COUNTS`
7. Test kinematics achievements work with new declarative engine
8. Spot-test 3-4 other sims

---

## Important Notes

- Many `custom` check functions need the exact slider element IDs and global variable names. These MUST be verified by reading each sim's HTML source before writing the config. The tables above are best-effort from agent analysis but some may have wrong IDs.
- `let` variables (like `f1`, `f2` in beats) are NOT accessible via `window.f1` — they need to be read via slider element IDs or the engine needs a different approach.
- Some globals are inside objects (like `S.mode`, `state.mixed`) — the `resolveGlobal` function handles dot-path resolution.
- The polling interval of 2s is a good default. For sims with event-based completion, explicit `AchievementEngine.check()` calls can be added for instant feedback.

---

## Toast Redesign — Center-Screen Pop

The current toast slides in from the top-right corner. Replace it with a centered fullscreen overlay pop that feels like a real achievement unlock.

### Visual Design
- **Backdrop**: semi-transparent dark overlay covering the full screen (fades in)
- **Card**: centered box (~320px wide) with achievement icon (large, ~3rem), title, and description
- **Animation**: scale from 0.5 + fade in (pop effect), hold for ~2.5s, then scale down + fade out
- **Glow ring**: animated radial pulse behind the icon
- **Auto-dismiss**: disappears after 3s, or on click anywhere

### CSS Changes (in `css/achievements.css`)

Replace the existing `.ach-toast` styles with:

```css
/* === Achievement Pop (center screen) === */
.ach-pop-overlay {
  position: fixed;
  inset: 0;
  z-index: 1200;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.ach-pop-overlay.show {
  opacity: 1;
  pointer-events: auto;
}

.ach-pop-card {
  background: var(--bg-card);
  border: 1px solid rgba(124, 58, 237, 0.4);
  border-radius: var(--radius-md);
  padding: 32px 40px;
  text-align: center;
  max-width: 320px;
  width: 90%;
  transform: scale(0.5);
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow:
    0 0 40px rgba(124, 58, 237, 0.2),
    0 20px 60px rgba(0, 0, 0, 0.3);
}

.ach-pop-overlay.show .ach-pop-card {
  transform: scale(1);
}

.ach-pop-glow {
  width: 80px;
  height: 80px;
  margin: 0 auto 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(124, 58, 237, 0.1);
  animation: ach-pulse 1.5s ease-in-out infinite;
}

@keyframes ach-pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(124, 58, 237, 0.3); }
  50% { box-shadow: 0 0 0 16px rgba(124, 58, 237, 0); }
}

.ach-pop-icon {
  font-size: 2.5rem;
  line-height: 1;
}

.ach-pop-label {
  font-family: var(--font-display);
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 6px;
}

.ach-pop-title {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 6px;
}

.ach-pop-desc {
  font-family: var(--font-body);
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.5;
}

@media (max-width: 600px) {
  .ach-pop-card {
    padding: 24px 20px;
    max-width: 280px;
  }
}
```

Delete the old `.ach-toast`, `.ach-toast.show`, `.ach-toast-icon`, `.ach-toast-text`, `.ach-toast-label`, `.ach-toast-title` styles entirely.

### JS Changes (in `js/achievements.js`)

Replace the toast DOM injection:

```js
// OLD — delete this
var toast = document.createElement('div');
toast.className = 'ach-toast';
toast.innerHTML = '...';
document.body.appendChild(toast);

// NEW — replace with
var popOverlay = document.createElement('div');
popOverlay.className = 'ach-pop-overlay';
popOverlay.innerHTML =
  '<div class="ach-pop-card">' +
    '<div class="ach-pop-glow"><span class="ach-pop-icon"></span></div>' +
    '<div class="ach-pop-label">Discovery!</div>' +
    '<div class="ach-pop-title"></div>' +
    '<div class="ach-pop-desc"></div>' +
  '</div>';
document.body.appendChild(popOverlay);

// Dismiss on click
popOverlay.addEventListener('click', function() {
  popOverlay.classList.remove('show');
});
```

Replace the `showToast` / `processToastQueue` functions:

```js
function showToast(achievement) {
  toastQueue.push(achievement);
  processToastQueue();
}

function processToastQueue() {
  if (toastBusy || toastQueue.length === 0) return;
  toastBusy = true;
  var a = toastQueue.shift();

  popOverlay.querySelector('.ach-pop-icon').textContent = a.icon;
  popOverlay.querySelector('.ach-pop-title').textContent = a.title;
  popOverlay.querySelector('.ach-pop-desc').textContent = a.description;
  popOverlay.classList.add('show');

  setTimeout(function() {
    popOverlay.classList.remove('show');
    setTimeout(function() {
      toastBusy = false;
      processToastQueue();
    }, 400);
  }, 3000);
}
```

### Summary of Changes
| File | Action |
|------|--------|
| `css/achievements.css` | Delete `.ach-toast*` styles, add `.ach-pop-*` styles |
| `js/achievements.js` | Replace toast DOM with pop overlay DOM, update show/dismiss logic |

No HTML changes needed — the DOM is injected by the engine.
