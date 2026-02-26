/* ============================================
   PHYSICS FOR NOOBS - Achievement Config
   Declarative achievement definitions for active
   simulations (3 per sim). No achievement should
   trigger simply by opening a simulation.
   Must load BEFORE achievements.js
   ============================================ */
window.SIM_ACHIEVEMENTS_CONFIG = {

  /* ── Kinematics (Projectile Motion) ── */
  kinematics: [
    {
      id: 'max_range_angle', title: 'Maximum Range',
      description: 'Launch a projectile at 45\u00B0 to achieve the maximum possible range',
      icon: '\uD83C\uDFAF',
      check: { type: 'global-array', name: 'launches', find: { done: true, angle: 45 } }
    },
    {
      id: 'complementary_angles', title: 'Same Range, Different Angles',
      description: 'Launch two projectiles at complementary angles (e.g. 30\u00B0 & 60\u00B0) and observe the same range',
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
      description: 'Fill the sky with 5 different completed trajectories',
      icon: '\uD83D\uDCDA',
      check: { type: 'global-array', name: 'launches', filter: { done: true }, count: { op: 'gte', value: 5 } }
    }
  ],

  /* ── Vector Addition ── */
  'vector-addition': [
    {
      id: 'cancel_out', title: 'Perfect Cancellation',
      description: 'Make two vectors cancel each other out (resultant = 0)',
      icon: '\u274C',
      check: { type: 'custom', fn: function() {
        var mA = document.getElementById('magA');
        var aA = document.getElementById('angleA');
        var mB = document.getElementById('magB');
        var aB = document.getElementById('angleB');
        if (!mA || !aA || !mB || !aB) return false;
        var magEqual = mA.value === mB.value;
        var angleDiff = Math.abs(parseFloat(aA.value) - parseFloat(aB.value)) % 360;
        return magEqual && angleDiff === 180 && parseFloat(mA.value) > 0;
      }}
    },
    {
      id: 'derivation', title: 'Proof Explorer',
      description: 'Watch the parallelogram law derivation animation',
      icon: '\uD83C\uDFAC',
      check: { type: 'global', name: '_achDerivationPlayed', op: 'eq', value: true }
    },
    {
      id: 'right_angle_resultant', title: 'Perpendicular Vectors',
      description: 'Set the angle between the two vectors to exactly 90\u00B0',
      icon: '\uD83D\uDCD0',
      check: { type: 'custom', fn: function() {
        var aA = document.getElementById('angleA');
        var aB = document.getElementById('angleB');
        if (!aA || !aB) return false;
        var diff = Math.abs(parseFloat(aA.value) - parseFloat(aB.value)) % 360;
        return diff === 90 || diff === 270;
      }}
    }
  ],

  /* ── Boat River ── */
  'boat-river': [
    {
      id: 'min_drift', title: 'Zero Drift',
      description: 'Cross the river with zero drift by angling upstream',
      icon: '\uD83C\uDFAF',
      check: { type: 'custom', fn: function() {
        if (typeof landedBoat === 'undefined' || !landedBoat) return false;
        var ba = document.getElementById('boatAngle');
        if (!ba || parseFloat(ba.value) >= 0) return false;
        var drift = Math.abs(landedBoat.x - startX);
        return drift < 10;
      }}
    },
    {
      id: 'min_time', title: 'Fastest Crossing',
      description: 'Cross the river in minimum time by setting angle to 0\u00B0',
      icon: '\u23F1\uFE0F',
      check: { type: 'custom', fn: function() {
        if (typeof landedBoat === 'undefined' || !landedBoat) return false;
        var ba = document.getElementById('boatAngle');
        return ba && parseFloat(ba.value) === 0;
      }}
    },
    {
      id: 'mad_sailor', title: 'Mad Sailor',
      description: 'Discover the angle where the boat can never reach the other bank',
      icon: '\uD83E\uDD2A',
      check: { type: 'custom', fn: function() {
        var ba = document.getElementById('boatAngle');
        return ba && parseFloat(ba.value) === -90;
      }}
    }
  ],

  /* ── Graphical Analysis of Motion ── */
  'graphical-analysis': [
    {
      id: 'shape_explorer', title: 'Shape Explorer',
      description: 'Explore 8 or more different graph shapes across all graphs',
      icon: '\uD83D\uDD0D',
      check: { type: 'global', name: '_achSeenCount', op: 'gte', value: 8 }
    },
    {
      id: 'graph_switcher', title: 'Graph Switcher',
      description: 'Switch the active graph view to v-t or a-t',
      icon: '\uD83D\uDD00',
      check: { type: 'global', name: '_achGraphSwitched', op: 'eq', value: true }
    },
    {
      id: 'parabola_fan', title: 'Parabola Fan',
      description: 'Select a parabolic graph shape after exploring at least 3 others',
      icon: '\u2312',
      check: { type: 'custom', fn: function() {
        return typeof _achSeenCount !== 'undefined' && _achSeenCount >= 3 &&
               typeof _achCurrentShape !== 'undefined' &&
               _achCurrentShape.indexOf('parabola') !== -1;
      }}
    }
  ],

  /* ── Gravitation (Universal Gravitation) ── */
  gravitation: [
    {
      id: 'close', title: 'Close Encounter',
      description: 'Bring the masses very close together to see force spike dramatically',
      icon: '\uD83E\uDD1D',
      check: { type: 'global', name: '_achCloseEncounter', op: 'eq', value: true }
    },
    {
      id: 'max_force', title: 'Strong Pull',
      description: 'Maximize both masses and bring them close for maximum gravitational force',
      icon: '\uD83D\uDCAA',
      check: { type: 'global', name: '_achStrongPull', op: 'eq', value: true }
    },
    {
      id: 'binary', title: 'Binary System',
      description: 'Set both masses to equal values and observe the symmetric force',
      icon: '\u2696\uFE0F',
      check: { type: 'global', name: '_achBinarySystem', op: 'eq', value: true }
    }
  ],

  /* ── Gravity Variation ── */
  'gravity-variation': [
    {
      id: 'center', title: "Earth's Core",
      description: 'Travel to the center of the Earth where gravity drops to zero (r/R = 0)',
      icon: '\uD83D\uDD25',
      check: { type: 'slider', id: 'position', op: 'eq', value: 0 }
    },
    {
      id: 'orbit', title: 'High Orbit',
      description: 'Go to maximum distance from Earth (r/R = 3) and observe weak gravity',
      icon: '\uD83D\uDE80',
      check: { type: 'slider', id: 'position', op: 'eq', value: 3 }
    },
    {
      id: 'half_gravity', title: 'Half Gravity',
      description: 'Find the altitude where gravity is exactly half of the surface value',
      icon: '\uD83E\uDE90',
      check: { type: 'custom', fn: function() {
        var el = document.getElementById('position');
        if (!el) return false;
        var r = parseFloat(el.value);
        // g = g_0 at surface (r/R=1); at r/R ~ 1.41 (sqrt 2), g = g_0/2
        return r > 1 && Math.abs(r - 1.414) < 0.05;
      }}
    }
  ],

  /* ── Gravitational Equilibrium ── */
  'gravity-equilibrium': [
    {
      id: 'unequal_mass_eq', title: 'Shifted Gravity',
      description: 'Find the equilibrium point with unequal planet masses',
      icon: '\uD83E\uDE90',
      check: { type: 'global', name: '_achUnequalMassEq', op: 'eq', value: true }
    },
    {
      id: 'extreme_mass_eq', title: 'David vs Goliath',
      description: 'Find equilibrium with one planet at max mass and the other at minimum',
      icon: '\u2696\uFE0F',
      check: { type: 'global', name: '_achExtremeMassEq', op: 'eq', value: true }
    },
    {
      id: 'gravity_field_explorer', title: 'Field Observer',
      description: 'Toggle the gravitational field display to visualize the field',
      icon: '\uD83D\uDD2D',
      check: { type: 'global', name: '_achGravFieldShown', op: 'eq', value: true }
    }
  ],

  /* ── Electrostatics (Charge Sandbox) ── */
  electrostatics: [
    {
      id: 'dipole', title: 'Electric Dipole',
      description: 'Place one positive and one negative charge to create a dipole field',
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
      description: 'Place 3 or more charges to create a complex electric field pattern',
      icon: '\uD83C\uDF1F',
      check: { type: 'custom', fn: function() {
        return typeof charges !== 'undefined' && charges.length >= 3;
      }}
    },
    {
      id: 'quadrupole', title: 'Quadrupole',
      description: 'Place 4 charges in an alternating +/- pattern',
      icon: '\u26A1',
      check: { type: 'custom', fn: function() {
        if (typeof charges === 'undefined' || charges.length < 4) return false;
        var pos = 0, neg = 0;
        for (var i = 0; i < charges.length; i++) {
          if (charges[i].q > 0) pos++;
          if (charges[i].q < 0) neg++;
        }
        return pos >= 2 && neg >= 2;
      }}
    }
  ],

  /* ── Coulomb's Law ── */
  'coulombs-law': [
    {
      id: 'inverse_square', title: 'Inverse Square',
      description: 'Double the distance and observe the force drops to \u00BC',
      icon: '\uD83D\uDCCF',
      check: { type: 'global', name: '_achInverseSquare', op: 'eq', value: true }
    },
    {
      id: 'medium_matters', title: 'Medium Matters',
      description: 'Change the medium to water and see force dramatically decrease',
      icon: '\uD83D\uDCA7',
      check: { type: 'global', name: '_achMediumMatters', op: 'eq', value: true }
    },
    {
      id: 'max_repulsion', title: 'Maximum Repulsion',
      description: 'Set both charges to +5\u00B5C and bring them very close',
      icon: '\u26A1',
      check: { type: 'global', name: '_achMaxRepulsion', op: 'eq', value: true }
    }
  ],

  /* ── Electrostatic Potential ── */
  'electrostatic-potential': [
    {
      id: 'zero_potential', title: 'Vanishing Potential',
      description: 'Move the test point far enough that potential approaches zero',
      icon: '\uD83C\uDFAF',
      check: { type: 'global', name: '_achPotentialZero', op: 'eq', value: true }
    },
    {
      id: 'high_potential', title: 'High Voltage',
      description: 'Maximize charge and bring test point very close for extreme potential',
      icon: '\u26A1',
      check: { type: 'global', name: '_achHighPotential', op: 'eq', value: true }
    },
    {
      id: 'medium_effect', title: 'Dielectric Effect',
      description: 'Change the medium and observe how potential changes in different materials',
      icon: '\uD83D\uDCA7',
      check: { type: 'global', name: '_achMediumEffect', op: 'eq', value: true }
    }
  ],

  /* ── Electric Dipole ── */
  'electric-dipole': [
    {
      id: 'axial', title: 'Axial Explorer',
      description: 'Place the test point on the axial line of the dipole',
      icon: '\u27A1\uFE0F',
      check: { type: 'global', name: '_achAxialPoint', op: 'eq', value: true }
    },
    {
      id: 'equatorial', title: 'Equatorial Discovery',
      description: 'Place the test point on the equatorial line where potential is zero',
      icon: '\u2B06\uFE0F',
      check: { type: 'global', name: '_achEquatorialPoint', op: 'eq', value: true }
    },
    {
      id: 'toggle', title: 'Dual Perspective',
      description: 'Toggle between electric field and potential views',
      icon: '\uD83D\uDD04',
      check: { type: 'global', name: '_achFieldToggle', op: 'eq', value: true }
    }
  ],

  /* ── Equilibrium Position Finder ── */
  equilibrium: [
    {
      id: 'unequal_line_eq', title: 'Shifted Balance',
      description: 'Find equilibrium with unequal charge magnitudes in the line setup',
      icon: '\u2696\uFE0F',
      check: { type: 'global', name: '_achLineUnequalEq', op: 'eq', value: true }
    },
    {
      id: 'all_presets', title: 'Arrangement Explorer',
      description: 'Try all three charge arrangements (line, triangle, square)',
      icon: '\uD83D\uDD0D',
      check: { type: 'custom', fn: function() {
        if (typeof preset === 'undefined') return false;
        if (!window._achPresetSeen) window._achPresetSeen = {};
        window._achPresetSeen[preset] = true;
        return window._achPresetSeen.triangle && window._achPresetSeen.line && window._achPresetSeen.square;
      }}
    },
    {
      id: 'triangle_eq', title: 'Triangle Equilibrium',
      description: 'Find the equilibrium position in the triangle charge setup',
      icon: '\uD83D\uDD2C',
      check: { type: 'global', name: '_achTriangleEq', op: 'eq', value: true }
    }
  ],

  /* ── Electric Flux ── */
  'electric-flux': [
    {
      id: 'max_flux', title: 'Maximum Flux',
      description: 'Orient the surface to achieve maximum electric flux through it',
      icon: '\uD83C\uDF0A',
      check: { type: 'global', name: '_achMaxFlux', op: 'eq', value: true }
    },
    {
      id: 'zero_flux', title: 'Total Block',
      description: 'Rotate the surface so zero field lines pass through',
      icon: '\uD83D\uDEAB',
      check: { type: 'global', name: '_achZeroFlux', op: 'eq', value: true }
    },
    {
      id: 'half_flux', title: 'Half Measure',
      description: 'Get the flux to exactly half of its maximum value',
      icon: '\u2696\uFE0F',
      check: { type: 'global', name: '_achHalfFlux', op: 'eq', value: true }
    }
  ],

  /* ── Gauss's Law ── */
  'gauss-law': [
    {
      id: 'gauss_center', title: 'Perfect Symmetry',
      description: 'Place charge at cube center and observe equal flux through every face',
      icon: '\uD83C\uDFAF',
      check: { type: 'global', name: '_achGaussCenter', op: 'eq', value: true }
    },
    {
      id: 'gauss_corner', title: 'Shared Charge',
      description: 'Discover what happens when the charge sits at a corner of the cube',
      icon: '\uD83D\uDCD0',
      check: { type: 'global', name: '_achGaussCorner', op: 'eq', value: true }
    },
    {
      id: 'gauss_edge', title: 'Edge Case',
      description: 'Find the flux when the charge is placed on an edge',
      icon: '\uD83D\uDD00',
      check: { type: 'global', name: '_achGaussEdge', op: 'eq', value: true }
    }
  ],

  /* ── Ray Optics ── */
  'ray-optics': [
    {
      id: 'double_size', title: 'Double Magnification',
      description: 'Position the object to create an image at least 2\u00D7 the original size',
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
      description: 'Experiment with both convex and concave lenses',
      icon: '\uD83E\uDDD0',
      check: { type: 'custom', fn: function() {
        if (typeof isConvex === 'undefined') return false;
        if (!window._achLensSeen) window._achLensSeen = {};
        window._achLensSeen[isConvex ? 'convex' : 'concave'] = true;
        return window._achLensSeen.convex && window._achLensSeen.concave;
      }}
    },
    {
      id: 'at_focus', title: 'Image at Infinity',
      description: 'Place the object exactly at the focal point of a convex lens',
      icon: '\u267E\uFE0F',
      check: { type: 'custom', fn: function() {
        var u = document.getElementById('objDist');
        var f = document.getElementById('focal');
        if (!u || !f) return false;
        if (typeof isConvex === 'undefined' || !isConvex) return false;
        return Math.abs(parseFloat(u.value) - parseFloat(f.value)) < 2;
      }}
    }
  ],

  /* ── Wave Optics (Double Slit) ── */
  'wave-optics': [
    {
      id: 'violet_light', title: 'Violet Light',
      description: 'Set wavelength below 420 nm to see tight violet fringes',
      icon: '\uD83D\uDFE3',
      check: { type: 'slider', id: 'waveLen', op: 'lt', value: 420 }
    },
    {
      id: 'narrow_fringes', title: 'Narrow Fringes',
      description: 'Maximize slit separation to create the narrowest fringe pattern',
      icon: '\uD83D\uDD2C',
      check: { type: 'custom', fn: function() {
        var el = document.getElementById('slitSep');
        if (!el) return false;
        return parseFloat(el.value) >= parseFloat(el.max);
      }}
    },
    {
      id: 'wide_fringes', title: 'Wide Fringes',
      description: 'Minimize slit separation to create the widest fringe pattern',
      icon: '\uD83C\uDF1F',
      check: { type: 'custom', fn: function() {
        var el = document.getElementById('slitSep');
        if (!el) return false;
        return parseFloat(el.value) <= parseFloat(el.min) && parseFloat(el.min) > 0;
      }}
    }
  ],

  /* ── Mirror Angle (Mirrors and Images) ── */
  'mirror-angle': [
    {
      id: 'kaleidoscope', title: 'Kaleidoscope',
      description: 'Set mirror angle to 60\u00B0 to create 5 images',
      icon: '\uD83D\uDD2E',
      check: { type: 'global', name: '_achKaleidoscope', op: 'eq', value: true }
    },
    {
      id: 'infinite_reflections', title: 'Infinite Reflections',
      description: 'Set mirror angle to minimum for maximum possible images',
      icon: '\u267E\uFE0F',
      check: { type: 'global', name: '_achInfiniteReflections', op: 'eq', value: true }
    },
    {
      id: 'symmetric_explorer', title: 'Symmetry Matters',
      description: 'Compare symmetric vs asymmetric placement when n is odd',
      icon: '\u2696\uFE0F',
      check: { type: 'global', name: '_achSymmetryExplored', op: 'eq', value: true }
    }
  ],

  /* ── Curved Mirror (Ray Diagrams) ── */
  'curved-mirror': [
    {
      id: 'all_cases', title: 'Ray Diagram Scholar',
      description: 'Visit all 5 image formation cases for a concave mirror',
      icon: '\uD83C\uDF93',
      check: { type: 'global', name: '_achAllCases', op: 'eq', value: true }
    },
    {
      id: 'virtual_discovery', title: 'Behind the Mirror',
      description: 'Discover how to form a virtual image with a concave mirror',
      icon: '\uD83D\uDC7B',
      check: { type: 'global', name: '_achVirtualDiscovery', op: 'eq', value: true }
    },
    {
      id: 'mirror_master', title: 'Mirror Master',
      description: 'Explore both concave and convex mirrors thoroughly',
      icon: '\uD83E\uDE9E',
      check: { type: 'global', name: '_achMirrorMaster', op: 'eq', value: true }
    }
  ],

  /* ── Modern Physics (Photoelectric Effect) ── */
  'modern-physics': [
    {
      id: 'threshold_freq', title: 'Threshold Frequency',
      description: 'Find the exact threshold frequency where emission just begins',
      icon: '\uD83D\uDD0D',
      check: { type: 'custom', fn: function() {
        if (typeof metals === 'undefined' || typeof metalIdx === 'undefined') return false;
        var metal = metals[metalIdx];
        if (!metal) return false;
        var threshold = metal.workFunction / 4.136;
        return typeof freq !== 'undefined' && Math.abs(freq - threshold) < 0.5;
      }}
    },
    {
      id: 'stopping_potential', title: 'Stopping Potential',
      description: 'Apply enough negative voltage to completely stop electron emission',
      icon: '\uD83D\uDED1',
      check: { type: 'custom', fn: function() {
        var v = document.getElementById('voltageSlider');
        return v && parseFloat(v.value) < -20 &&
               typeof electrons !== 'undefined' && electrons.length === 0;
      }}
    },
    {
      id: 'max_ke', title: 'Maximum Kinetic Energy',
      description: 'Set frequency to maximum and observe highest electron kinetic energy',
      icon: '\u26A1',
      check: { type: 'custom', fn: function() {
        var fSlider = document.getElementById('freqSlider');
        if (!fSlider) return false;
        return parseFloat(fSlider.value) >= parseFloat(fSlider.max) &&
               typeof electrons !== 'undefined' && electrons.length > 0;
      }}
    }
  ]
};
