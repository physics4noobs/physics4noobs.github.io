/* ============================================
   AXOMIYA ENGINEER - Achievement Config
   Declarative achievement definitions for all
   49 simulations (3 per sim = 147 total).
   Must load BEFORE achievements.js
   ============================================ */
window.SIM_ACHIEVEMENTS_CONFIG = {

  /* ── Kinematics ── */
  kinematics: [
    {
      id: 'max_range_angle', title: 'Maximum Range',
      description: 'Launch a projectile at exactly 45\u00B0',
      icon: '\uD83C\uDFAF',
      check: { type: 'global-array', name: 'launches', find: { done: true, angle: 45 } }
    },
    {
      id: 'complementary_angles', title: 'Complementary Pair',
      description: 'Launch at two angles that sum to 90\u00B0 (e.g. 30\u00B0 + 60\u00B0)',
      icon: '\uD83E\uDD1D',
      check: { type: 'custom', fn: function() {
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
    },
    {
      id: 'trajectory_collector', title: 'Trajectory Collector',
      description: 'Launch 5 or more projectiles',
      icon: '\uD83D\uDCDA',
      check: { type: 'global-array', name: 'launches', filter: { done: true }, count: { op: 'gte', value: 5 } }
    }
  ],

  /* ── Pendulum ── */
  pendulum: [
    {
      id: 'two_second_swing', title: 'Two-Second Swing',
      description: 'Achieve a measured period between 1.9s and 2.1s',
      icon: '\u23F1\uFE0F',
      check: { type: 'custom', fn: function() {
        if (typeof state === 'undefined' || !state.running) return false;
        return state.measuredPeriod >= 1.9 && state.measuredPeriod <= 2.1;
      }}
    },
    {
      id: 'zero_damping', title: 'Perpetual Motion',
      description: 'Set damping to zero',
      icon: '\u267E\uFE0F',
      check: { type: 'slider', id: 'dampingSlider', op: 'eq', value: 0 }
    },
    {
      id: 'moon_gravity', title: 'Moon Gravity',
      description: 'Set gravity below 3 m/s\u00B2',
      icon: '\uD83C\uDF19',
      check: { type: 'slider', id: 'gravitySlider', op: 'lt', value: 3 }
    }
  ],

  /* ── Calorimetry ── */
  calorimetry: [
    {
      id: 'first_mix', title: 'First Mixture',
      description: 'Mix two substances together',
      icon: '\uD83E\uDDEA',
      check: { type: 'global', name: 'state.mixed', op: 'eq', value: true }
    },
    {
      id: 'equal_masses', title: 'Equal Masses',
      description: 'Mix with equal masses on both sides',
      icon: '\u2696\uFE0F',
      check: { type: 'custom', fn: function() {
        if (typeof state === 'undefined' || !state.mixed) return false;
        var el1 = document.getElementById('m1Slider');
        var el2 = document.getElementById('m2Slider');
        return el1 && el2 && el1.value === el2.value;
      }}
    },
    {
      id: 'extreme_temp', title: 'Temperature Extremes',
      description: 'Set hot substance to 100\u00B0C',
      icon: '\uD83C\uDF21\uFE0F',
      check: { type: 'slider', id: 't1Slider', op: 'eq', value: 100 }
    }
  ],

  /* ── AC Circuits ── */
  'ac-circuits': [
    {
      id: 'phase_90', title: 'Quarter Phase',
      description: 'Set phase to 90\u00B0',
      icon: '\uD83D\uDD04',
      check: { type: 'slider', id: 'phase', op: 'eq', value: 90 }
    },
    {
      id: 'phase_180', title: 'Half Phase',
      description: 'Set phase to 180\u00B0',
      icon: '\uD83C\uDF00',
      check: { type: 'slider', id: 'phase', op: 'eq', value: 180 }
    },
    {
      id: 'max_amplitude', title: 'Full Power',
      description: 'Set amplitude to maximum',
      icon: '\u26A1',
      check: { type: 'slider', id: 'amplitude', op: 'eq', value: 100 }
    }
  ],

  /* ── Rotational Motion ── */
  'rotational-motion': [
    {
      id: 'high_spin', title: 'Speed Demon',
      description: 'Reach angular velocity above 20 rad/s',
      icon: '\uD83C\uDF00',
      check: { type: 'global', name: 'omega', op: 'gt', value: 20 }
    },
    {
      id: 'full_stop', title: 'Full Brake',
      description: 'Brake the wheel to a complete stop',
      icon: '\uD83D\uDED1',
      check: { type: 'custom', fn: function() {
        return typeof braking !== 'undefined' && braking === true && Math.abs(omega) < 0.1;
      }}
    },
    {
      id: 'max_torque', title: 'Maximum Torque',
      description: 'Set torque to maximum (50)',
      icon: '\uD83D\uDD27',
      check: { type: 'slider', id: 'torque', op: 'eq', value: 50 }
    }
  ],

  /* ── Vector Addition ── */
  'vector-addition': [
    {
      id: 'cancel_out', title: 'Cancellation',
      description: 'Make two vectors cancel each other out',
      icon: '\u274C',
      check: { type: 'custom', fn: function() {
        var mA = document.getElementById('magA');
        var aA = document.getElementById('angleA');
        var mB = document.getElementById('magB');
        var aB = document.getElementById('angleB');
        if (!mA || !aA || !mB || !aB) return false;
        return mA.value === mB.value && Math.abs(parseFloat(aA.value) - parseFloat(aB.value)) % 360 === 180;
      }}
    },
    {
      id: 'derivation', title: 'Proof Explorer',
      description: 'Watch the parallelogram law derivation animation',
      icon: '\uD83C\uDFAC',
      check: { type: 'global', name: '_achDerivationPlayed', op: 'eq', value: true }
    },
    {
      id: 'parallel', title: 'Same Direction',
      description: 'Align both vectors in the same direction',
      icon: '\u2B06\uFE0F',
      check: { type: 'custom', fn: function() {
        var aA = document.getElementById('angleA');
        var aB = document.getElementById('angleB');
        return aA && aB && aA.value === aB.value;
      }}
    }
  ],

  /* ── Beats ── */
  beats: [
    {
      id: 'unison', title: 'Perfect Unison',
      description: 'Set both frequencies equal',
      icon: '\uD83C\uDFB5',
      check: { type: 'custom', fn: function() {
        var e1 = document.getElementById('f1Slider');
        var e2 = document.getElementById('f2Slider');
        return e1 && e2 && e1.value === e2.value;
      }}
    },
    {
      id: 'one_beat', title: 'One Beat Per Second',
      description: 'Create exactly 1 beat per second',
      icon: '\uD83E\uDE97',
      check: { type: 'custom', fn: function() {
        var e1 = document.getElementById('f1Slider');
        var e2 = document.getElementById('f2Slider');
        return e1 && e2 && Math.abs(parseFloat(e1.value) - parseFloat(e2.value)) === 1;
      }}
    },
    {
      id: 'max_beats', title: 'Rapid Beats',
      description: 'Create 10 or more beats per second',
      icon: '\uD83E\uDD41',
      check: { type: 'custom', fn: function() {
        var e1 = document.getElementById('f1Slider');
        var e2 = document.getElementById('f2Slider');
        return e1 && e2 && Math.abs(parseFloat(e1.value) - parseFloat(e2.value)) >= 10;
      }}
    }
  ],

  /* ── Ray Optics ── */
  'ray-optics': [
    {
      id: 'virtual_image', title: 'Virtual Image',
      description: 'Create a virtual image (object inside focal length)',
      icon: '\uD83D\uDD0D',
      check: { type: 'custom', fn: function() {
        var u = document.getElementById('objDist');
        var f = document.getElementById('focal');
        if (!u || !f) return false;
        var uv = parseFloat(u.value), fv = parseFloat(f.value);
        if (typeof isConvex !== 'undefined' && isConvex) {
          return uv < fv;
        }
        return true; // concave always virtual for real object
      }}
    },
    {
      id: 'double_size', title: 'Double Size',
      description: 'Create an image at least 2\u00D7 magnification',
      icon: '\uD83D\uDD2C',
      check: { type: 'custom', fn: function() {
        var u = document.getElementById('objDist');
        var f = document.getElementById('focal');
        if (!u || !f) return false;
        var uv = parseFloat(u.value), fv = parseFloat(f.value);
        var sign = (typeof isConvex !== 'undefined' && isConvex) ? 1 : -1;
        var v = (uv * sign * fv) / (uv - sign * fv);
        return Math.abs(v / uv) >= 2;
      }}
    },
    {
      id: 'lens_toggle', title: 'Lens Explorer',
      description: 'Try both convex and concave lenses',
      icon: '\uD83E\uDDD0',
      check: { type: 'custom', fn: function() {
        if (typeof isConvex === 'undefined') return false;
        if (!window._achLensSeen) window._achLensSeen = {};
        window._achLensSeen[isConvex ? 'convex' : 'concave'] = true;
        return window._achLensSeen.convex && window._achLensSeen.concave;
      }}
    }
  ],

  /* ── Work Power Energy ── */
  'work-power-energy': [
    {
      id: 'first_drop', title: 'Free Fall',
      description: 'Start the simulation',
      icon: '\uD83C\uDFB3',
      check: { type: 'global', name: 'running', op: 'eq', value: true }
    },
    {
      id: 'max_height', title: 'Maximum Potential',
      description: 'Set height to maximum (200)',
      icon: '\u26F0\uFE0F',
      check: { type: 'slider', id: 'height', op: 'eq', value: 200 }
    },
    {
      id: 'fast_impact', title: 'Terminal Velocity',
      description: 'Achieve speed above 50 m/s',
      icon: '\uD83D\uDE80',
      check: { type: 'global', name: 'ballV', op: 'gt', value: 50 }
    }
  ],

  /* ── Collisions ── */
  collisions: [
    {
      id: 'elastic', title: 'Elastic Collision',
      description: 'Observe an elastic collision',
      icon: '\uD83C\uDFB1',
      check: { type: 'custom', fn: function() {
        return typeof isElastic !== 'undefined' && isElastic === true &&
               typeof animationPhase !== 'undefined' && animationPhase === 'after';
      }}
    },
    {
      id: 'equal_mass', title: "Newton's Cradle",
      description: 'Collide two equal-mass objects',
      icon: '\u2696\uFE0F',
      check: { type: 'custom', fn: function() {
        var s1 = document.getElementById('m1Slider');
        var s2 = document.getElementById('m2Slider');
        return s1 && s2 && s1.value === s2.value &&
               typeof animationPhase !== 'undefined' && animationPhase === 'after';
      }}
    },
    {
      id: 'head_on', title: 'Head On',
      description: 'Set second object moving toward the first',
      icon: '\uD83D\uDCA5',
      check: { type: 'custom', fn: function() {
        var s = document.getElementById('v2Slider');
        return s && parseFloat(s.value) < 0;
      }}
    }
  ],

  /* ── Hooke's Law ── */
  'hookes-law': [
    {
      id: 'max_stretch', title: 'Maximum Extension',
      description: 'Set mass to maximum (5 kg)',
      icon: '\uD83C\uDFCB\uFE0F',
      check: { type: 'slider', id: 'mass', op: 'eq', value: 5 }
    },
    {
      id: 'stiff_spring', title: 'Stiff Spring',
      description: 'Set spring constant to maximum (100)',
      icon: '\uD83E\uDEA8',
      check: { type: 'slider', id: 'springK', op: 'eq', value: 100 }
    },
    {
      id: 'soft_spring', title: 'Soft Spring',
      description: 'Set spring constant to minimum (10)',
      icon: '\uD83E\uDD4F',
      check: { type: 'slider', id: 'springK', op: 'eq', value: 10 }
    }
  ],

  /* ── Pulley Wire Constraint ── */
  'pulley-wire-constraint': [
    {
      id: 'balanced', title: 'Perfect Balance',
      description: 'Set both masses equal',
      icon: '\u2696\uFE0F',
      check: { type: 'custom', fn: function() {
        var s1 = document.getElementById('mass1');
        var s2 = document.getElementById('mass2');
        return s1 && s2 && s1.value === s2.value;
      }}
    },
    {
      id: 'max_diff', title: 'Maximum Acceleration',
      description: 'Maximize the mass difference',
      icon: '\uD83D\uDE80',
      check: { type: 'custom', fn: function() {
        var s1 = document.getElementById('mass1');
        var s2 = document.getElementById('mass2');
        if (!s1 || !s2) return false;
        return (parseFloat(s1.value) === 20 && parseFloat(s2.value) === 1) ||
               (parseFloat(s2.value) === 20 && parseFloat(s1.value) === 1);
      }}
    },
    {
      id: 'first_run', title: 'First Constraint',
      description: 'Start the simulation',
      icon: '\u25B6\uFE0F',
      check: { type: 'global', name: 'isRunning', op: 'eq', value: true }
    }
  ],

  /* ── Thermodynamics ── */
  thermodynamics: [
    {
      id: 'isothermal', title: 'Isothermal Process',
      description: 'Select the isothermal process',
      icon: '\uD83C\uDF21\uFE0F',
      check: { type: 'global', name: 'process', op: 'eq', value: 'isothermal' }
    },
    {
      id: 'adiabatic', title: 'Adiabatic Explorer',
      description: 'Select the adiabatic process',
      icon: '\uD83D\uDD25',
      check: { type: 'global', name: 'process', op: 'eq', value: 'adiabatic' }
    },
    {
      id: 'full_cycle', title: 'Complete Cycle',
      description: 'Try 3 different thermodynamic processes',
      icon: '\uD83D\uDD04',
      check: { type: 'custom', fn: function() {
        if (typeof process === 'undefined') return false;
        if (!window._achProcessSeen) window._achProcessSeen = {};
        window._achProcessSeen[process] = true;
        var count = 0;
        for (var k in window._achProcessSeen) count++;
        return count >= 3;
      }}
    }
  ],

  /* ── Atwood Machine ── */
  'atwood-machine': [
    {
      id: 'balanced', title: 'Perfect Balance',
      description: 'Set both masses equal',
      icon: '\u2696\uFE0F',
      check: { type: 'custom', fn: function() {
        var s1 = document.getElementById('m1');
        var s2 = document.getElementById('m2');
        return s1 && s2 && s1.value === s2.value;
      }}
    },
    {
      id: 'heavy_pulley', title: 'Massive Pulley',
      description: 'Set pulley mass to maximum (5 kg)',
      icon: '\u2699\uFE0F',
      check: { type: 'slider', id: 'pulleyMass', op: 'eq', value: 5 }
    },
    {
      id: 'first_run', title: 'Atwood in Motion',
      description: 'Start the simulation',
      icon: '\u25B6\uFE0F',
      check: { type: 'global', name: 'isRunning', op: 'eq', value: true }
    }
  ],

  /* ── Work Done ── */
  'work-done': [
    {
      id: 'zero_work', title: 'Zero Work',
      description: 'Set force angle to 90\u00B0',
      icon: '\uD83D\uDEAB',
      check: { type: 'slider', id: 'angleSlider', op: 'eq', value: 90 }
    },
    {
      id: 'max_force', title: 'Brute Force',
      description: 'Set force to maximum (50 N)',
      icon: '\uD83D\uDCAA',
      check: { type: 'slider', id: 'forceSlider', op: 'eq', value: 50 }
    },
    {
      id: 'friction_explorer', title: 'Friction Explorer',
      description: 'Set friction coefficient above 0.3',
      icon: '\uD83E\uDDF1',
      check: { type: 'slider', id: 'frictionSlider', op: 'gt', value: 0.3 }
    }
  ],

  /* ── Newton's Laws ── */
  'newtons-laws': [
    {
      id: 'no_motion', title: 'Static Equilibrium',
      description: 'Set friction high enough to prevent motion',
      icon: '\uD83E\uDDF1',
      check: { type: 'custom', fn: function() {
        var f = document.getElementById('force');
        var m = document.getElementById('mass');
        var mu = document.getElementById('friction');
        if (!f || !m || !mu) return false;
        var friction = parseFloat(mu.value) / 100 * parseFloat(m.value) * 9.8;
        return parseFloat(f.value) > 0 && friction >= parseFloat(f.value);
      }}
    },
    {
      id: 'max_accel', title: 'Maximum Acceleration',
      description: 'Max force, min mass, zero friction',
      icon: '\uD83D\uDE80',
      check: { type: 'custom', fn: function() {
        var f = document.getElementById('force');
        var m = document.getElementById('mass');
        var mu = document.getElementById('friction');
        if (!f || !m || !mu) return false;
        return parseFloat(f.value) === 100 && parseFloat(m.value) === 1 && parseFloat(mu.value) === 0;
      }}
    },
    {
      id: 'friction_balance', title: 'Balanced Forces',
      description: 'Balance applied force with friction',
      icon: '\u2696\uFE0F',
      check: { type: 'custom', fn: function() {
        var f = document.getElementById('force');
        var m = document.getElementById('mass');
        var mu = document.getElementById('friction');
        if (!f || !m || !mu) return false;
        var applied = parseFloat(f.value);
        var friction = parseFloat(mu.value) / 100 * parseFloat(m.value) * 9.8;
        return applied > 0 && Math.abs(applied - friction) < 1;
      }}
    }
  ],

  /* ── Manometer ── */
  manometer: [
    {
      id: 'atmospheric', title: 'Atmospheric',
      description: 'Set gas pressure to 1.0 atm',
      icon: '\uD83C\uDF0D',
      check: { type: 'global', name: 'gasPressure', op: 'eq', value: 1.0 }
    },
    {
      id: 'mercury', title: 'Mercury Manometer',
      description: 'Use mercury as the manometer fluid',
      icon: '\u2623\uFE0F',
      check: { type: 'global', name: 'fluidDensity', op: 'eq', value: 13600 }
    },
    {
      id: 'high_pressure', title: 'High Pressure',
      description: 'Set gas pressure to 2.0 atm or above',
      icon: '\uD83D\uDCA8',
      check: { type: 'global', name: 'gasPressure', op: 'gte', value: 2.0 }
    }
  ],

  /* ── Center of Mass ── */
  'center-of-mass': [
    {
      id: 'first_calc', title: 'First Calculation',
      description: 'Place at least 2 masses and compute',
      icon: '\uD83D\uDCCD',
      check: { type: 'multi', logic: 'and', checks: [
        { type: 'global', name: 'numMasses', op: 'gte', value: 2 },
        { type: 'global', name: 'placingMode', op: 'eq', value: false }
      ]}
    },
    {
      id: 'five_masses', title: 'Complex System',
      description: 'Use all 5 masses',
      icon: '\uD83E\uDDE9',
      check: { type: 'global', name: 'numMasses', op: 'eq', value: 5 }
    },
    {
      id: 'equal_masses', title: 'Symmetric System',
      description: 'Set all masses to the same value',
      icon: '\u2696\uFE0F',
      check: { type: 'custom', fn: function() {
        if (typeof masses === 'undefined' || !masses.length) return false;
        var first = masses[0].m;
        for (var i = 1; i < masses.length; i++) {
          if (masses[i].m !== first) return false;
        }
        return masses.length >= 2;
      }}
    }
  ],

  /* ── Magnus Effect ── */
  'magnus-effect': [
    {
      id: 'first_spin', title: 'First Spin',
      description: 'Launch the ball with spin',
      icon: '\u26BE',
      check: { type: 'multi', logic: 'and', checks: [
        { type: 'global', name: 'isLaunched', op: 'eq', value: true },
        { type: 'slider', id: 'spin', op: 'gt', value: 0 }
      ]}
    },
    {
      id: 'no_spin', title: 'No Spin',
      description: 'Launch the ball with zero spin',
      icon: '\uD83C\uDFBE',
      check: { type: 'multi', logic: 'and', checks: [
        { type: 'global', name: 'isLaunched', op: 'eq', value: true },
        { type: 'slider', id: 'spin', op: 'eq', value: 0 }
      ]}
    },
    {
      id: 'max_curve', title: 'Maximum Curve',
      description: 'Set spin to maximum (50)',
      icon: '\uD83C\uDF00',
      check: { type: 'slider', id: 'spin', op: 'eq', value: 50 }
    }
  ],

  /* ── Rolling vs Rotation ── */
  'rolling-vs-rotation': [
    {
      id: 'first_roll', title: 'Rolling Motion',
      description: 'Start the simulation',
      icon: '\u25B6\uFE0F',
      check: { type: 'global', name: 'isRunning', op: 'eq', value: true }
    },
    {
      id: 'fast_spin', title: 'Fast Spinner',
      description: 'Set angular velocity to maximum (10)',
      icon: '\uD83C\uDF00',
      check: { type: 'slider', id: 'omega', op: 'eq', value: 10 }
    },
    {
      id: 'big_wheel', title: 'Big Wheel',
      description: 'Set radius to maximum (60)',
      icon: '\u2B55',
      check: { type: 'slider', id: 'radius', op: 'eq', value: 60 }
    }
  ],

  /* ── Current Electricity ── */
  'current-electricity': [
    {
      id: 'ohms_law', title: "Ohm's Law",
      description: 'Set V=6, R=3 to get I=2A',
      icon: '\u26A1',
      check: { type: 'multi', logic: 'and', checks: [
        { type: 'slider', id: 'voltage', op: 'eq', value: 6 },
        { type: 'slider', id: 'resistance', op: 'eq', value: 3 }
      ]}
    },
    {
      id: 'max_current', title: 'Maximum Current',
      description: 'Maximize voltage, minimize resistance',
      icon: '\uD83D\uDD0B',
      check: { type: 'multi', logic: 'and', checks: [
        { type: 'slider', id: 'voltage', op: 'eq', value: 12 },
        { type: 'slider', id: 'resistance', op: 'eq', value: 1 }
      ]}
    },
    {
      id: 'high_resistance', title: 'High Resistance',
      description: 'Set resistance to maximum (100\u03A9)',
      icon: '\uD83D\uDEE1\uFE0F',
      check: { type: 'slider', id: 'resistance', op: 'eq', value: 100 }
    }
  ],

  /* ── Hydrostatic Paradox ── */
  'hydrostatic-paradox': [
    {
      id: 'max_depth', title: 'Deep Water',
      description: 'Set fluid height to maximum (200)',
      icon: '\uD83C\uDF0A',
      check: { type: 'slider', id: 'heightSlider', op: 'eq', value: 200 }
    },
    {
      id: 'mercury', title: 'Heavy Fluid',
      description: 'Use mercury (density 13600 kg/m\u00B3)',
      icon: '\u2623\uFE0F',
      check: { type: 'slider', id: 'densitySlider', op: 'eq', value: 13600 }
    },
    {
      id: 'the_paradox', title: 'The Paradox',
      description: 'Set fluid height above 100',
      icon: '\u2753',
      check: { type: 'slider', id: 'heightSlider', op: 'gt', value: 100 }
    }
  ],

  /* ── EM Waves ── */
  'em-waves': [
    {
      id: 'long_wave', title: 'Long Wavelength',
      description: 'Set wavelength to maximum (150)',
      icon: '\uD83C\uDF0A',
      check: { type: 'slider', id: 'wavelength', op: 'eq', value: 150 }
    },
    {
      id: 'strong_field', title: 'Strong Field',
      description: 'Set amplitude to maximum (100)',
      icon: '\uD83D\uDCAA',
      check: { type: 'slider', id: 'amplitude', op: 'eq', value: 100 }
    },
    {
      id: 'short_wave', title: 'Short Wavelength',
      description: 'Set wavelength to minimum (30)',
      icon: '\uD83D\uDD2C',
      check: { type: 'slider', id: 'wavelength', op: 'eq', value: 30 }
    }
  ],

  /* ── Waves ── */
  waves: [
    {
      id: 'standing_wave', title: 'Standing Wave',
      description: 'Create a standing wave pattern',
      icon: '\uD83C\uDF0A',
      check: { type: 'global', name: 'S.mode', op: 'eq', value: 'standing' }
    },
    {
      id: 'superposition', title: 'Superposition',
      description: 'Enable the second wave',
      icon: '\uD83C\uDF00',
      check: { type: 'global', name: 'S.wave2On', op: 'eq', value: true }
    },
    {
      id: 'high_freq', title: 'High Frequency',
      description: 'Set wave frequency to maximum (12)',
      icon: '\u26A1',
      check: { type: 'slider', id: 'w1', op: 'eq', value: 12 }
    }
  ],

  /* ── SHM Waves ── */
  'shm-waves': [
    {
      id: 'resonance', title: 'Resonance',
      description: 'Match both oscillator frequencies',
      icon: '\uD83C\uDFB6',
      check: { type: 'custom', fn: function() {
        if (typeof S === 'undefined' || !S.osc2On) return false;
        var w1 = document.getElementById('w1');
        var w2 = document.getElementById('w2');
        return w1 && w2 && w1.value === w2.value;
      }}
    },
    {
      id: 'anti_phase', title: 'Anti-Phase',
      description: 'Set phase difference to \u03C0',
      icon: '\u21C4',
      check: { type: 'custom', fn: function() {
        if (typeof S === 'undefined' || !S.osc2On) return false;
        var p1 = document.getElementById('p1');
        var p2 = document.getElementById('p2');
        if (!p1 || !p2) return false;
        var diff = Math.abs(parseFloat(p1.value) - parseFloat(p2.value));
        return diff === 2; // phase is in units of pi/2, so 2 = pi
      }}
    },
    {
      id: 'dual_osc', title: 'Dual Oscillators',
      description: 'Enable the second oscillator',
      icon: '\uD83D\uDD14',
      check: { type: 'global', name: 'S.osc2On', op: 'eq', value: true }
    }
  ],

  /* ── Continuity Equation ── */
  'continuity-equation': [
    {
      id: 'narrow', title: 'Speed Up',
      description: 'Set narrow area to minimum (20)',
      icon: '\u23E9',
      check: { type: 'slider', id: 'area2', op: 'eq', value: 20 }
    },
    {
      id: 'wide', title: 'Slow Down',
      description: 'Set narrow area to maximum (80)',
      icon: '\u23EA',
      check: { type: 'slider', id: 'area2', op: 'eq', value: 80 }
    },
    {
      id: 'max_flow', title: 'Maximum Flow',
      description: 'Set flow rate to maximum (100)',
      icon: '\uD83D\uDCA7',
      check: { type: 'slider', id: 'flowRate', op: 'eq', value: 100 }
    }
  ],

  /* ── Conservation of Momentum ── */
  'conservation-momentum': [
    {
      id: 'first_release', title: 'Spring Release',
      description: 'Release the spring between the carts',
      icon: '\uD83E\uDE83',
      check: { type: 'global', name: 'released', op: 'eq', value: true }
    },
    {
      id: 'equal_split', title: 'Equal Split',
      description: 'Release with equal masses',
      icon: '\u2696\uFE0F',
      check: { type: 'custom', fn: function() {
        if (typeof released === 'undefined' || !released) return false;
        var s1 = document.getElementById('m1Slider');
        var s2 = document.getElementById('m2Slider');
        return s1 && s2 && s1.value === s2.value;
      }}
    },
    {
      id: 'david_goliath', title: 'David vs Goliath',
      description: 'Use a mass ratio greater than 5:1',
      icon: '\uD83E\uDD4A',
      check: { type: 'custom', fn: function() {
        if (typeof released === 'undefined' || !released) return false;
        var s1 = document.getElementById('m1Slider');
        var s2 = document.getElementById('m2Slider');
        if (!s1 || !s2) return false;
        var v1 = parseFloat(s1.value), v2 = parseFloat(s2.value);
        return v1 / v2 > 5 || v2 / v1 > 5;
      }}
    }
  ],

  /* ── EMI (Faraday's Law) ── */
  emi: [
    {
      id: 'first_induction', title: "Faraday's Discovery",
      description: 'Start the electromagnetic induction',
      icon: '\u26A1',
      check: { type: 'global', name: 'running', op: 'eq', value: true }
    },
    {
      id: 'max_turns', title: 'Maximum Flux',
      description: 'Set coil turns to maximum (50)',
      icon: '\uD83E\uDDF2',
      check: { type: 'slider', id: 'turns', op: 'eq', value: 50 }
    },
    {
      id: 'fast_motion', title: 'Speed Demon',
      description: 'Set magnet speed to maximum (10)',
      icon: '\uD83D\uDE80',
      check: { type: 'slider', id: 'speed', op: 'eq', value: 10 }
    }
  ],

  /* ── Static & Kinetic Friction ── */
  'static-kinetic-friction': [
    {
      id: 'overcome', title: 'Breaking Free',
      description: 'Overcome static friction and start moving',
      icon: '\uD83C\uDFC3',
      check: { type: 'global', name: 'isMoving', op: 'eq', value: true }
    },
    {
      id: 'max_grip', title: 'Maximum Grip',
      description: 'Set static friction coefficient to 0.8',
      icon: '\uD83E\uDDF1',
      check: { type: 'slider', id: 'muStatic', op: 'gte', value: 0.8 }
    },
    {
      id: 'smooth_slide', title: 'Smooth Slide',
      description: 'Move with very low kinetic friction',
      icon: '\uD83E\uDDCA',
      check: { type: 'custom', fn: function() {
        return typeof isMoving !== 'undefined' && isMoving === true &&
               document.getElementById('muKinetic') &&
               parseFloat(document.getElementById('muKinetic').value) <= 0.1;
      }}
    }
  ],

  /* ── Boat River ── */
  'boat-river': [
    {
      id: 'mad_sailor', title: 'Mad Sailor',
      description: 'Set angle to -90° — the boat can never cross!',
      icon: '\uD83E\uDD2A',
      check: { type: 'slider', id: 'boatAngle', op: 'eq', value: -90 }
    },
    {
      id: 'min_time', title: 'Minimum Time',
      description: 'Point the boat straight across (angle = 0)',
      icon: '\u23F1\uFE0F',
      check: { type: 'slider', id: 'boatAngle', op: 'eq', value: 0 }
    },
    {
      id: 'min_drift', title: 'Zero Drift',
      description: 'Angle the boat upstream to cancel drift',
      icon: '\uD83C\uDFAF',
      check: { type: 'custom', fn: function() {
        if (typeof boat === 'undefined' || !boat) return false;
        var ba = document.getElementById('boatAngle');
        return ba && parseFloat(ba.value) < 0 && boat.y <= 50;
      }}
    }
  ],

  /* ── Gravity Variation ── */
  'gravity-variation': [
    {
      id: 'surface', title: 'At the Surface',
      description: 'Set position to Earth\'s surface (r/R = 1)',
      icon: '\uD83C\uDF0D',
      check: { type: 'custom', fn: function() {
        var el = document.getElementById('position');
        return el && parseFloat(el.value) == 1.0;
      }}
    },
    {
      id: 'center', title: "Earth's Core",
      description: 'Go to the center of the Earth (r/R = 0)',
      icon: '\uD83D\uDD25',
      check: { type: 'slider', id: 'position', op: 'eq', value: 0 }
    },
    {
      id: 'orbit', title: 'High Orbit',
      description: 'Go to maximum distance (r/R = 3)',
      icon: '\uD83D\uDE80',
      check: { type: 'slider', id: 'position', op: 'eq', value: 3 }
    }
  ],

  /* ── Gravitation ── */
  gravitation: [
    {
      id: 'close', title: 'Close Encounter',
      description: 'Set distance to minimum (50)',
      icon: '\uD83E\uDD1D',
      check: { type: 'slider', id: 'distance', op: 'eq', value: 50 }
    },
    {
      id: 'binary', title: 'Binary System',
      description: 'Set both masses equal',
      icon: '\u2696\uFE0F',
      check: { type: 'custom', fn: function() {
        var s1 = document.getElementById('mass1');
        var s2 = document.getElementById('mass2');
        return s1 && s2 && s1.value === s2.value;
      }}
    },
    {
      id: 'max_force', title: 'Strong Pull',
      description: 'Max masses + min distance',
      icon: '\uD83D\uDCAA',
      check: { type: 'custom', fn: function() {
        var m1 = document.getElementById('mass1');
        var m2 = document.getElementById('mass2');
        var d = document.getElementById('distance');
        return m1 && m2 && d &&
               parseFloat(m1.value) === 100 && parseFloat(m2.value) === 100 &&
               parseFloat(d.value) === 50;
      }}
    }
  ],

  /* ── Poisson's Ratio ── */
  'poissons-ratio': [
    {
      id: 'rubber', title: 'Rubber Band',
      description: 'Select rubber (Poisson ratio = 0.5)',
      icon: '\uD83E\uDE77',
      check: { type: 'global', name: 'poissonsRatio', op: 'eq', value: 0.5 }
    },
    {
      id: 'cork', title: 'Cork - Zero Ratio',
      description: 'Select cork (Poisson ratio = 0)',
      icon: '\uD83E\uDEDA',
      check: { type: 'global', name: 'poissonsRatio', op: 'eq', value: 0 }
    },
    {
      id: 'auxetic', title: 'Auxetic Material',
      description: 'Select auxetic material (negative Poisson ratio)',
      icon: '\uD83E\uDDE0',
      check: { type: 'global', name: 'poissonsRatio', op: 'lt', value: 0 }
    }
  ],

  /* ── Fluid Dynamics ── */
  'fluid-dynamics': [
    {
      id: 'first_flow', title: 'Flow Started',
      description: 'Start the fluid simulation',
      icon: '\uD83D\uDCA7',
      check: { type: 'global', name: 'running', op: 'eq', value: true }
    },
    {
      id: 'venturi', title: 'Venturi Effect',
      description: 'Set narrow pipe to minimum (20)',
      icon: '\uD83C\uDF2A\uFE0F',
      check: { type: 'slider', id: 'pipeNarrow', op: 'eq', value: 20 }
    },
    {
      id: 'max_flow', title: 'Full Flow',
      description: 'Set flow rate to maximum (10)',
      icon: '\uD83C\uDF0A',
      check: { type: 'slider', id: 'flowRate', op: 'eq', value: 10 }
    }
  ],

  /* ── Doppler Effect ── */
  'doppler-effect': [
    {
      id: 'first_motion', title: 'Sound in Motion',
      description: 'Start the moving source',
      icon: '\uD83D\uDD0A',
      check: { type: 'global', name: 'isMoving', op: 'eq', value: true }
    },
    {
      id: 'near_mach', title: 'Approaching Mach',
      description: 'Set speed above 70% of sound speed',
      icon: '\u2708\uFE0F',
      check: { type: 'slider', id: 'speedSlider', op: 'gt', value: 70 }
    },
    {
      id: 'high_pitch', title: 'High Pitch',
      description: 'Set frequency to maximum (10)',
      icon: '\uD83C\uDFB5',
      check: { type: 'slider', id: 'freqSlider', op: 'eq', value: 10 }
    }
  ],

  /* ── Wave Optics ── */
  'wave-optics': [
    {
      id: 'red_light', title: 'Red Light',
      description: 'Set wavelength above 620 nm',
      icon: '\uD83D\uDD34',
      check: { type: 'slider', id: 'waveLen', op: 'gt', value: 620 }
    },
    {
      id: 'violet_light', title: 'Violet Light',
      description: 'Set wavelength below 420 nm',
      icon: '\uD83D\uDFE3',
      check: { type: 'slider', id: 'waveLen', op: 'lt', value: 420 }
    },
    {
      id: 'wide_fringes', title: 'Wide Fringes',
      description: 'Set slit separation to minimum (10)',
      icon: '\uD83C\uDF1F',
      check: { type: 'slider', id: 'slitSep', op: 'eq', value: 10 }
    }
  ],

  /* ── Goat vs Boat (Man on a Boat) ── */
  'goat-vs-boat': [
    {
      id: 'walk_complete', title: 'Walk Complete',
      description: 'Complete the walk across the boat',
      icon: '\uD83D\uDEB6',
      check: { type: 'global', name: 'walkProgress', op: 'gte', value: 1 }
    },
    {
      id: 'heavy_person', title: 'Heavy Walker',
      description: 'Set person mass to maximum (100 kg)',
      icon: '\uD83C\uDFCB\uFE0F',
      check: { type: 'slider', id: 'personMass', op: 'eq', value: 100 }
    },
    {
      id: 'light_boat', title: 'Light Boat',
      description: 'Set boat mass to minimum (50 kg)',
      icon: '\u26F5',
      check: { type: 'slider', id: 'boatMass', op: 'eq', value: 50 }
    }
  ],

  /* ── Venturimeter ── */
  venturimeter: [
    {
      id: 'narrow_tube', title: 'Narrow Tube',
      description: 'Set diameter 2 to minimum (20)',
      icon: '\uD83D\uDD2C',
      check: { type: 'slider', id: 'diameter2', op: 'eq', value: 20 }
    },
    {
      id: 'fast_flow', title: 'Fast Flow',
      description: 'Set velocity to maximum (10)',
      icon: '\uD83D\uDE80',
      check: { type: 'slider', id: 'velocity', op: 'eq', value: 10 }
    },
    {
      id: 'wide_ratio', title: 'Wide Ratio',
      description: 'Achieve diameter ratio above 3:1',
      icon: '\uD83D\uDCCA',
      check: { type: 'custom', fn: function() {
        var d1 = document.getElementById('diameter1');
        var d2 = document.getElementById('diameter2');
        return d1 && d2 && parseFloat(d1.value) / parseFloat(d2.value) > 3;
      }}
    }
  ],

  /* ── Angular Momentum ── */
  'angular-momentum': [
    {
      id: 'conservation', title: 'Conservation',
      description: 'Change radius while spinning to see omega adjust',
      icon: '\uD83D\uDD04',
      check: { type: 'custom', fn: function() {
        if (typeof isRunning === 'undefined' || !isRunning) return false;
        if (!window._achInitOmega) {
          window._achInitOmega = currentOmega;
          window._achInitRadius = currentRadius;
          return false;
        }
        return typeof currentRadius !== 'undefined' &&
               currentRadius !== window._achInitRadius &&
               typeof currentOmega !== 'undefined' &&
               currentOmega !== window._achInitOmega;
      }}
    },
    {
      id: 'tight_spin', title: 'Tight Spin',
      description: 'Set radius to minimum (20) while running',
      icon: '\uD83C\uDF00',
      check: { type: 'multi', logic: 'and', checks: [
        { type: 'global', name: 'isRunning', op: 'eq', value: true },
        { type: 'slider', id: 'radius', op: 'eq', value: 20 }
      ]}
    },
    {
      id: 'first_spin', title: 'First Spin',
      description: 'Start the angular momentum simulation',
      icon: '\u25B6\uFE0F',
      check: { type: 'global', name: 'isRunning', op: 'eq', value: true }
    }
  ],

  /* ── Pascal's Law ── */
  'pascals-law': [
    {
      id: 'force_multiply', title: 'Force Multiplier',
      description: 'Achieve area ratio A2/A1 of 5 or more',
      icon: '\uD83D\uDCAA',
      check: { type: 'custom', fn: function() {
        var a1 = document.getElementById('area1');
        var a2 = document.getElementById('area2');
        return a1 && a2 && parseFloat(a2.value) / parseFloat(a1.value) >= 5;
      }}
    },
    {
      id: 'equal_areas', title: 'Equal Areas',
      description: 'Set both piston areas equal',
      icon: '\u2696\uFE0F',
      check: { type: 'custom', fn: function() {
        var a1 = document.getElementById('area1');
        var a2 = document.getElementById('area2');
        return a1 && a2 && a1.value === a2.value;
      }}
    },
    {
      id: 'max_force', title: 'Maximum Pressure',
      description: 'Set force to maximum (200 N)',
      icon: '\uD83D\uDCA8',
      check: { type: 'slider', id: 'force1', op: 'eq', value: 200 }
    }
  ],

  /* ── Inclined Plane Race ── */
  'inclined-plane-race': [
    {
      id: 'first_race', title: 'First Race',
      description: 'Start the race',
      icon: '\uD83C\uDFC1',
      check: { type: 'global', name: 'isRunning', op: 'eq', value: true }
    },
    {
      id: 'steep_slope', title: 'Steep Slope',
      description: 'Set angle to maximum (60\u00B0)',
      icon: '\u26F0\uFE0F',
      check: { type: 'slider', id: 'angle', op: 'eq', value: 60 }
    },
    {
      id: 'gentle_slope', title: 'Gentle Slope',
      description: 'Set angle to minimum (15\u00B0)',
      icon: '\uD83C\uDFDE\uFE0F',
      check: { type: 'slider', id: 'angle', op: 'eq', value: 15 }
    }
  ],

  /* ── Wire Ring Constraint (Bead on a Wire) ── */
  'wire-ring-constraint': [
    {
      id: 'first_bead', title: 'Bead in Motion',
      description: 'Start the bead simulation',
      icon: '\u25B6\uFE0F',
      check: { type: 'global', name: 'isRunning', op: 'eq', value: true }
    },
    {
      id: 'gravity_on', title: 'Gravity Mode',
      description: 'Enable gravity',
      icon: '\uD83C\uDF0D',
      check: { type: 'global', name: 'gravityEnabled', op: 'eq', value: true }
    },
    {
      id: 'full_circle', title: 'Full Circle',
      description: 'Set initial angle to 360\u00B0',
      icon: '\u2B55',
      check: { type: 'slider', id: 'initialAngle', op: 'eq', value: 360 }
    }
  ],

  /* ── Magnetism (Lorentz Force) ── */
  magnetism: [
    {
      id: 'first_particle', title: 'Lorentz Force',
      description: 'Launch a charged particle',
      icon: '\uD83E\uDDF2',
      check: { type: 'custom', fn: function() {
        return typeof trail !== 'undefined' && trail.length > 0;
      }}
    },
    {
      id: 'tight_spiral', title: 'Tight Spiral',
      description: 'High B-field + low velocity',
      icon: '\uD83C\uDF00',
      check: { type: 'custom', fn: function() {
        var b = document.getElementById('bfield');
        var v = document.getElementById('velocity');
        return b && v && parseFloat(b.value) >= 15 && parseFloat(v.value) <= 3;
      }}
    },
    {
      id: 'wide_orbit', title: 'Wide Orbit',
      description: 'Low B-field + high velocity',
      icon: '\u2B55',
      check: { type: 'custom', fn: function() {
        var b = document.getElementById('bfield');
        var v = document.getElementById('velocity');
        return b && v && parseFloat(b.value) <= 3 && parseFloat(v.value) >= 15;
      }}
    }
  ],

  /* ── Electrostatics ── */
  electrostatics: [
    {
      id: 'first_charge', title: 'First Charge',
      description: 'Place at least one charge',
      icon: '\u26A1',
      check: { type: 'custom', fn: function() {
        return typeof charges !== 'undefined' && charges.length >= 1;
      }}
    },
    {
      id: 'dipole', title: 'Electric Dipole',
      description: 'Place one positive and one negative charge',
      icon: '\uD83E\uDDF2',
      check: { type: 'custom', fn: function() {
        if (typeof charges === 'undefined' || charges.length < 2) return false;
        var hasPos = false, hasNeg = false;
        for (var i = 0; i < charges.length; i++) {
          if (charges[i].q > 0) hasPos = true;
          if (charges[i].q < 0) hasNeg = true;
        }
        return hasPos && hasNeg;
      }}
    },
    {
      id: 'three_charges', title: 'Complex Field',
      description: 'Place 3 or more charges',
      icon: '\uD83C\uDF1F',
      check: { type: 'custom', fn: function() {
        return typeof charges !== 'undefined' && charges.length >= 3;
      }}
    }
  ],

  /* ── Modulus of Elasticity ── */
  'modulus-elasticity': [
    {
      id: 'first_test', title: 'Material Test',
      description: 'Run a stress-strain test',
      icon: '\uD83E\uDDEA',
      check: { type: 'custom', fn: function() {
        return (typeof animationProgress !== 'undefined' && animationProgress >= 1) ||
               (typeof animating !== 'undefined' && animating);
      }}
    },
    {
      id: 'compare_all', title: 'Compare All',
      description: 'Enable the compare-all view',
      icon: '\uD83D\uDCCA',
      check: { type: 'global', name: 'showAll', op: 'eq', value: true }
    },
    {
      id: 'rubber_test', title: 'Rubber Test',
      description: 'Test the rubber material',
      icon: '\uD83E\uDE77',
      check: { type: 'global', name: 'selectedMaterial', op: 'eq', value: 'rubber' }
    }
  ],

  /* ── Graphical Analysis of Motion ── */
  'graphical-analysis': [
    {
      id: 'shape_explorer', title: 'Shape Explorer',
      description: 'Try 8 or more different graph shapes across all graphs',
      icon: '\uD83D\uDD0D',
      check: { type: 'global', name: '_achSeenCount', op: 'gte', value: 8 }
    },
    {
      id: 'parabola_fan', title: 'Parabola Fan',
      description: 'Select a parabolic graph shape',
      icon: '\u2312',
      check: { type: 'custom', fn: function() {
        return typeof _achCurrentShape !== 'undefined' &&
               _achCurrentShape.indexOf('parabola') !== -1;
      }}
    },
    {
      id: 'graph_switcher', title: 'Graph Switcher',
      description: 'Switch the active graph to v-t or a-t',
      icon: '\uD83D\uDD00',
      check: { type: 'global', name: '_achGraphSwitched', op: 'eq', value: true }
    }
  ],

  /* ── Modern Physics (Photoelectric Effect) ── */
  'modern-physics': [
    {
      id: 'photoelectric', title: 'Photoelectric Effect',
      description: 'Cause electron emission',
      icon: '\u26A1',
      check: { type: 'custom', fn: function() {
        return typeof electrons !== 'undefined' && electrons.length > 0;
      }}
    },
    {
      id: 'threshold_freq', title: 'Threshold Frequency',
      description: 'Find the threshold frequency for emission',
      icon: '\uD83D\uDD0D',
      check: { type: 'custom', fn: function() {
        if (typeof metals === 'undefined' || typeof metalIdx === 'undefined') return false;
        var metal = metals[metalIdx];
        if (!metal) return false;
        var threshold = metal.workFunction / 4.136; // eV to x10^14 Hz
        return typeof freq !== 'undefined' && Math.abs(freq - threshold) < 0.5;
      }}
    },
    {
      id: 'stopping_potential', title: 'Stopping Potential',
      description: 'Apply negative voltage to stop electrons',
      icon: '\uD83D\uDED1',
      check: { type: 'custom', fn: function() {
        var v = document.getElementById('voltageSlider');
        return v && parseFloat(v.value) < -20 &&
               typeof electrons !== 'undefined' && electrons.length === 0;
      }}
    }
  ]
};
