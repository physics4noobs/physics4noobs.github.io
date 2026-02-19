# Electromagnetic Induction

## Overview
Electromagnetic Induction is the phenomenon of generating an electromotive force (emf) in a circuit when the magnetic flux through it changes. This chapter covers Faraday's laws, Lenz's law, motional emf, inductance, and the behavior of RL and LC circuits with applications in transformers and generators.

---

## 1. Magnetic Flux

### Concepts
- Magnetic flux measures the number of magnetic field lines passing through a circuit or surface
- For uniform fields, flux is the product of magnetic field and area component perpendicular to field
- For non-uniform fields, flux is calculated by integration
- Unit of magnetic flux is Weber (Wb)

### Formulas
- `φ = ∫ B · dA` - general definition of magnetic flux
- `φ = B · A` - flux through uniform field perpendicular to area
- `φ = BA cos θ` - flux with angle θ between B and A vectors
- `1 Wb = 1 Tm²` - Weber unit definition

### Important Notes
- Magnetic flux is a scalar quantity representing the total magnetic field passing through a surface
- The direction relationship between B and A (represented by the normal to the surface) affects the magnitude
- Maximum flux occurs when field is perpendicular to the surface (θ = 0°)
- Flux through a closed surface is always zero (no magnetic monopoles)

### Worked Example
**Q:** A rectangular loop of area 0.2 m² is placed perpendicular to a uniform magnetic field of 0.5 T. Calculate the magnetic flux through the loop.

**A:**
- Since the loop is perpendicular to the field, θ = 0°
- φ = BA cos(0°) = 0.5 × 0.2 × 1 = 0.1 Wb
- The magnetic flux through the loop is 0.1 Weber

---

## 2. Faraday's Law of Electromagnetic Induction

### Concepts
- Whenever magnetic flux through a circuit changes, an emf is induced in the circuit
- The magnitude of induced emf equals the rate of change of magnetic flux
- For a coil with N turns, the induced emf is N times that of a single loop
- This is the fundamental law governing electromagnetic induction

### Formulas
- `emf = -|dφ/dt|` - magnitude of induced emf for single loop
- `emf = N|dφ/dt|` - induced emf for N-turn coil
- `i = (induced emf)/R = (1/R)|dφ/dt|` - induced current in circuit of resistance R

### Important Notes
- The negative sign in Faraday's law indicates the direction of induced emf (Lenz's law)
- EMF is independent of the rate of change mechanism - can be flux change, area change, or field change
- Induced emf depends only on the rate of flux change, not on the total flux value
- The induced emf acts like a battery in the circuit

### Worked Example
**Q:** A coil of 100 turns has a changing magnetic flux through it given by φ(t) = 0.5 sin(2πt) Wb. Calculate the induced emf at t = 0.5 s.

**A:**
- Induced emf = N|dφ/dt|
- dφ/dt = 0.5 × 2π cos(2πt) = π cos(2πt)
- At t = 0.5 s: dφ/dt = π cos(π) = -π Wb/s
- emf = 100 × |-π| = 100π ≈ 314 V

---

## 3. Lenz's Law

### Concepts
- The induced current always opposes the change in magnetic flux that produces it
- If flux decreases, induced current tries to support/maintain the existing magnetic field
- If flux increases, induced current tries to oppose the increasing magnetic field
- This law determines the direction of induced current and represents energy conservation

### Formulas
- Direction determined by Lenz's law (no formula, but conceptual rule)
- Works in conjunction with Faraday's law: `emf = -N(dφ/dt)`
- The negative sign mathematically represents Lenz's law

### Important Notes
- Lenz's law ensures energy conservation - the induced effects always oppose the cause
- Direction of induced current can be found using right-hand rule after determining flux change direction
- Induced magnetic field opposes the change in original magnetic field
- This law applies universally to all electromagnetic induction phenomena

### Worked Example
**Q:** A rectangular loop is in a uniform magnetic field pointing into the page. The field strength is increasing. Using Lenz's law, determine the direction of induced current.

**A:**
- The magnetic field through the loop is increasing (into the page)
- By Lenz's law, the induced current must create a field opposing this increase
- Induced field must point out of the page (opposite to original field)
- Using right-hand rule: current must be counterclockwise when viewed from front
- This induced field opposes the increasing flux, as required by Lenz's law

---

## 4. Motional EMF

### Concepts
- EMF induced when a conductor moves through a magnetic field
- Charges in the conductor experience a force due to their motion in the magnetic field
- In steady state, electric field from charge separation balances the magnetic force
- Applies to straight conductors, rotating rods, and any conductor motion in magnetic field

### Formulas
- `E = -v × B` - induced electric field in moving conductor
- `emf = ∫(v × B) · dl` - general motional emf formula
- `emf = Blv` - for straight rod of length l moving perpendicular to uniform field B with velocity v
- `emf = (Bωl²)/2` - for rod of length l rotating about one end with angular velocity ω

### Important Notes
- Motional emf arises from the magnetic force on charge carriers
- The direction can be determined using the right-hand rule for v × B
- For a rod moving perpendicular to B, the end with higher potential can be identified
- Motional emf is the basis for electromagnetic generators

### Worked Example
**Q:** A conducting rod AB of length 0.5 m moves with velocity 4 m/s perpendicular to a uniform magnetic field of 0.5 T. Calculate the induced emf across the rod.

**A:**
- Given: l = 0.5 m, v = 4 m/s, B = 0.5 T
- Using formula: emf = Blv
- emf = 0.5 × 0.5 × 4 = 1 V
- The induced emf across the rod is 1 Volt

---

## 5. Induced Charge Flow

### Concepts
- When flux changes through a circuit, total charge flows through it
- The total charge is independent of how fast the flux changes
- Depends only on the total change in flux and the resistance
- Useful for finding charge in circuits where flux change is known

### Formulas
- `q = ∫i dt = (1/R)∫(dφ/dt) dt = (1/R)∫dφ = |Δφ|/R` - total induced charge
- `q = N|Δφ|/R` - for N-turn coil (Δφ is change in flux through one loop)

### Important Notes
- Total charge depends only on change in flux (Δφ) and resistance, not on time taken
- For same flux change, slower change gives lower current but longer duration
- For same flux change, faster change gives higher current but shorter duration
- Product (current × time) remains constant if flux change is same

### Worked Example
**Q:** A circular loop of radius 10 cm with resistance 5 Ω is pulled completely out of a uniform magnetic field of 1.2 T in 0.2 seconds. Calculate the total charge that flows through the loop.

**A:**
- Initial flux: φ₁ = BA = 1.2 × π(0.1)² = 0.012π Wb
- Final flux: φ₂ = 0 Wb
- Change in flux: |Δφ| = 0.012π Wb
- Using q = |Δφ|/R = (0.012π)/5 = 0.0024π ≈ 0.0075 C

---

## 6. Heat Dissipation in Induced Current

### Concepts
- When current is induced in a resistive circuit, heat is generated
- Total heat generated depends on the change in flux and resistance
- Heat is independent of how fast the flux changes
- Energy from external source doing work against magnetic force is converted to heat

### Formulas
- `H = ∫i² Rdt = ∫i(dφ/dt)dt = ∫i dφ` - heat dissipated
- `H = i|Δφ|` - when current is kept constant
- `H = (Δφ)²/R` - heat when flux change is known

### Important Notes
- Heat is always positive (dissipative process)
- Fast flux change gives high current but short duration
- Slow flux change gives low current but long duration
- Joule heating is responsible for energy conversion in electromagnetic induction

### Worked Example
**Q:** A solenoid with inductance 0.5 H carries a current that changes from 2 A to 0 A. If the circuit resistance is 10 Ω, calculate the heat dissipated.

**A:**
- Initial magnetic energy stored: U = (1/2)Li² = (1/2) × 0.5 × 2² = 1 J
- This energy is dissipated as heat when current reduces to zero
- Heat dissipated H = 1 J

---

## 7. Self-Inductance

### Concepts
- When current through a circuit changes, flux due to that current also changes
- This causes a self-induced emf opposing the current change
- Self-inductance is the property that relates flux change to current change
- Depends on geometry of the circuit (number of turns, length, area)

### Formulas
- `φ = Li` - flux through circuit due to its own current
- `emf = -L(di/dt)` - self-induced emf (Lenz's law direction)
- `L = μ₀N²A/l` - self-inductance of solenoid (N turns, length l, cross-sectional area A)
- `U = (1/2)Li²` - energy stored in inductor

### Important Notes
- Self-inductance is always positive (property of circuit)
- Unit of inductance is Henry (H) = Wb/A = V·s/A
- Self-inductance opposes changes in current (appears as back-emf)
- Energy stored in inductor is released when current decreases

### Worked Example
**Q:** A solenoid has 1000 turns, length 0.5 m, and cross-sectional area 2 × 10⁻⁴ m². Calculate its self-inductance.

**A:**
- Using L = μ₀N²A/l
- L = (4π × 10⁻⁷ × 1000² × 2 × 10⁻⁴)/0.5
- L = (4π × 10⁻⁷ × 10⁶ × 2 × 10⁻⁴)/0.5
- L ≈ 5 × 10⁻⁴ H = 0.5 mH

---

## 8. Combination of Inductors

### Concepts
- Inductors can be combined in series and parallel like resistors
- Series combination: inductances add directly
- Parallel combination: reciprocals of inductances add
- Rules are opposite to capacitors but same as resistors

### Formulas
- `L_series = L₁ + L₂ + L₃ + ...` - inductors in series
- `1/L_parallel = 1/L₁ + 1/L₂ + 1/L₃ + ...` - inductors in parallel
- `L_eq = ΣL_i` in series
- `1/L_eq = Σ(1/L_i)` in parallel

### Important Notes
- Series arrangement increases total inductance
- Parallel arrangement decreases total inductance
- Mutual inductance between adjacent inductors can affect total inductance
- For identical inductors in parallel: L_eq = L/n where n is number of inductors

### Worked Example
**Q:** Three inductors of 2 H, 3 H, and 6 H are connected in series. Find the equivalent inductance.

**A:**
- For series combination: L_eq = L₁ + L₂ + L₃
- L_eq = 2 + 3 + 6 = 11 H
- The equivalent inductance is 11 Henry

---

## 9. RL Circuit - Growth of Current

### Concepts
- When a battery is connected to an RL circuit, current grows exponentially
- Initially, self-induced emf opposes the applied voltage
- As current increases, self-induced emf decreases
- Eventually reaches steady state where all voltage drops across resistance

### Formulas
- `E - iR - L(di/dt) = 0` - Kirchhoff's voltage law for RL circuit
- `i(t) = (E/R)(1 - e^(-Rt/L))` - current as function of time
- `τ = L/R` - time constant of RL circuit
- `i(τ) = (E/R)(1 - 1/e) = 0.63(E/R)` - current at one time constant

### Important Notes
- At t = 0, current is zero (inductance prevents instantaneous change)
- As t → ∞, current approaches E/R (steady-state value)
- Time constant τ determines how quickly current reaches steady state
- Energy supplied by battery is partly stored in inductance and partly dissipated in resistance

### Worked Example
**Q:** An RL circuit has E = 12 V, R = 4 Ω, and L = 2 H. Find the current at t = τ (one time constant).

**A:**
- Time constant: τ = L/R = 2/4 = 0.5 s
- Steady-state current: E/R = 12/4 = 3 A
- At t = τ: i(τ) = 3(1 - e⁻¹) = 3(1 - 0.368) = 3 × 0.632 = 1.90 A

---

## 10. RL Circuit - Decay of Current

### Concepts
- When battery is disconnected from steady-state RL circuit, current decreases exponentially
- Self-induced emf now drives the current through the circuit
- Current decays because energy stored in inductance is dissipated in resistance
- Decay follows same exponential pattern as growth, with same time constant

### Formulas
- `-L(di/dt) - iR = 0` - equation when battery is disconnected
- `i(t) = i₀e^(-Rt/L)` - current decay equation (i₀ is initial steady-state current)
- `τ = L/R` - same time constant as growth

### Important Notes
- Current cannot change instantaneously (inductance prevents sudden drop)
- At t = τ, current drops to 37% of initial value (or 1/e of initial)
- Energy stored in inductance is dissipated as heat in the resistance
- The decay time depends on L/R ratio - larger inductance means slower decay

### Worked Example
**Q:** In an RL circuit with L = 3 H and R = 10 Ω, the steady-state current is 5 A. If the battery is suddenly disconnected, find the current after 0.1 s.

**A:**
- Time constant: τ = L/R = 3/10 = 0.3 s
- Using i(t) = i₀e^(-t/τ) = 5e^(-0.1/0.3) = 5e^(-1/3) = 5 × 0.717 = 3.59 A

---

## 11. LC Circuit - Oscillatory Behavior

### Concepts
- LC circuit exhibits oscillatory behavior similar to SHM (spring-mass system)
- Energy oscillates between magnetic field in inductor and electric field in capacitor
- Total energy in LC circuit is conserved (no resistance)
- Frequency of oscillation depends on L and C values

### Formulas
- `L(d²q/dt²) + (q/C) = 0` - differential equation for LC circuit
- `ω = 1/√(LC)` - angular frequency of oscillation
- `q(t) = q₀cos(ωt + φ)` - charge oscillation
- `i(t) = dq/dt = -ωq₀sin(ωt + φ)` - current oscillation
- `U_L = (1/2)L(i²) = (1/2)Lω²q₀²sin²(ωt)` - energy in inductor
- `U_C = q²/(2C) = q₀²cos²(ωt)/(2C)` - energy in capacitor
- `U_total = q₀²/(2C)` - constant total energy

### Important Notes
- This is analogous to SHM: q analogous to displacement, i analogous to velocity
- Maximum charge on capacitor and maximum current occur at different times
- At any instant, total energy = U_L + U_C = constant
- Energy continuously transfers between L and C fields

### Worked Example
**Q:** An LC circuit has L = 1 H and C = 1 μF. If the capacitor is charged to q₀ = 100 μC, find the frequency of oscillation.

**A:**
- ω = 1/√(LC) = 1/√(1 × 10⁻⁶) = 1/10⁻³ = 1000 rad/s
- f = ω/(2π) = 1000/(2π) ≈ 159 Hz

---

## 12. Mutual Inductance

### Concepts
- When current in one coil changes, it induces emf in a nearby coil
- This interaction is called mutual inductance
- Mutual inductance is maximum when coils are coaxial (same axis)
- Mutual inductance is minimum when coil axes are perpendicular

### Formulas
- `φ₂ ∝ i₁` → `φ₂ = Mi₁` - flux in coil 2 due to current in coil 1
- `E₂ = -M(di₁/dt)` - emf induced in coil 2 due to current change in coil 1
- `M = μ₀N₁N₂A/l` - mutual inductance of coaxial coils
- For solenoid with coil inside: `M = μ₀N₁N₂A₂/l` (where A₂ is area of inner coil)

### Important Notes
- Mutual inductance between two coils is the same regardless of which coil carries current
- Unit of mutual inductance is Henry (H)
- Mutual inductance depends on geometry: areas, number of turns, separation, orientation
- Transformer operates on principle of mutual inductance

### Worked Example
**Q:** A solenoid of length 1 m, cross-section 10 cm², with 1000 turns has a small coil of 20 turns wound around it. Calculate the mutual inductance.

**A:**
- Using M = μ₀N₁N₂A/l
- M = (4π × 10⁻⁷ × 1000 × 20 × 10 × 10⁻⁴)/1
- M = (4π × 10⁻⁷ × 20000 × 10⁻³)
- M = 4π × 10⁻⁷ × 20 = 2.51 × 10⁻⁵ H

---

## 13. Induced EMF in Rotating Coil

### Concepts
- When a coil rotates in a uniform magnetic field, flux through it changes periodically
- This induces a sinusoidal emf that forms the basis of AC generators
- Peak emf depends on field strength, coil area, number of turns, and rotation speed
- EMF is maximum when rotation plane coincides with field direction

### Formulas
- `φ(t) = NBA cos(ωt)` - flux through rotating coil
- `emf = -dφ/dt = NBAω sin(ωt)` - induced emf (peak value: NBAω)
- `i(t) = (NBAω/R)sin(ωt)` - induced current
- Peak emf = `NBAω` where ω is angular velocity

### Important Notes
- Emf starts from zero when coil plane is aligned with field
- Emf reaches maximum when coil plane is perpendicular to field
- Direction of current alternates with each half rotation
- This principle is used in AC generators and dynamos

### Worked Example
**Q:** A rectangular coil with 100 turns, area 0.1 m², rotates at 50 rpm in a uniform field of 0.5 T. Find the peak induced emf.

**A:**
- Angular velocity: ω = 50 × (2π/60) = 5π/3 rad/s ≈ 5.24 rad/s
- Peak emf = NBAω = 100 × 0.5 × 0.1 × 5.24 = 26.2 V

---

## 14. Induced Electric Field

### Concepts
- A changing magnetic field induces an electric field around it
- Induced electric field forms closed loops (conservative in nature is broken)
- Work done by induced electric field on a test charge around a closed loop equals the rate of flux change
- This is the non-conservative aspect of induced electric field

### Formulas
- `∮ E · ds = -dφ_B/dt` - Faraday's law in integral form
- For circular path of radius r in cylindrical symmetry: `E(2πr) = -dφ_B/dt`
- `E = -(1/2πr)(dφ_B/dt)` - electric field at distance r
- For rod in changing field: `E = (1/2r)(dB/dt)` in cylindrical geometry

### Important Notes
- Induced electric field is non-conservative (unlike electrostatic field)
- Induced E-field lines form closed loops around changing B-field
- This mechanism is how transformers work - changing B-field induces E-field
- Magnitude of induced E-field depends on distance from axis and rate of B change

### Worked Example
**Q:** A uniform magnetic field inside a cylinder of radius 0.2 m is changing at rate dB/dt = 2 T/s. Find the induced electric field at distance 0.1 m from the axis.

**A:**
- Using E = (1/2r)(dB/dt) (for r < R)
- E = (1/(2 × 0.1)) × 2 = (1/0.2) × 2 = 10 V/m
- The induced electric field at this point is 10 V/m

---

## 15. Faraday's Law and Non-Conservative Electric Field

### Concepts
- Changing magnetic fields create non-conservative electric fields
- Electric field lines form closed loops (differ from electrostatic case)
- Work done around closed loop is non-zero (equal to rate of flux change)
- This explains how energy is transferred in inductive circuits and transformers

### Formulas
- `∮ E · dl = -dφ_B/dt` - general form of Faraday's law (line integral form)
- Work done on charge q around loop: `W = q∮ E · dl = -q(dφ_B/dt)`
- Potential difference between two points is path-dependent (unlike conservative field)

### Important Notes
- Non-conservative nature means potential difference depends on path taken
- This is fundamental difference between induced E-field and electrostatic field
- Explains why transformers can transfer energy without direct contact
- Important for understanding AC circuit behavior and electromagnetic waves

### Worked Example
**Q:** A conducting loop of radius 0.1 m is in a time-varying magnetic field. If the flux through the loop changes at rate dφ/dt = -5 Wb/s, find the induced emf around the loop.

**A:**
- Using ∮ E · dl = -dφ/dt
- Induced emf = |dφ/dt| = 5 V
- The magnitude of induced emf around the loop is 5 Volts

---

## Questions

### ANSWER KEYS (Reference)

**Workbook Answer Key -- Level 1 (Q1-45)**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | A | B | A | A | D | D | A | D | D | A | B | B | A | B | C |

| Q# | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | D | C | D | B | A | D | A | C | D | D | A | D | C | B | B |

| Q# | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | C | B | A | B | C | B | A | B | C | A | A | A | D | A | B |

| Q# | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | D | B | B | D | A | A | B | A | B | C | B | C | A | B | A |

| Q# | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | 5 | 5 | 0.8 | 9 | 2 | 1 | 5 | 20 | 10 | 14 | 2.5 | 0.01 | 0.02 | 72 | 5.4 |

**Workbook Answer Key -- Level 2 (Q76-115)**

| Q# | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84 | 85 |
|---|---|---|---|---|---|---|---|---|---|---|
| Ans | C | B | D | CD | ACD | A | A | B | A | 0.5 |

| Q# | 86 | 87 | 88 | 89 | 90 | 91 | 92 | 93 | 94 | 95 |
|---|---|---|---|---|---|---|---|---|---|---|
| Ans | C | D | C | D | B | C | D | C | D | C |

| Q# | 96 | 97 | 98 | 99 | 100 | 101 | 102 | 103 | 104 | 105 |
|---|---|---|---|---|---|---|---|---|---|---|
| Ans | B | A | D | D | D | A | B | C | D | I |

| Q# | 106 | 107 | 108 | 109 | 110 | 111 | 112 | 113 | 114 | 115 |
|---|---|---|---|---|---|---|---|---|---|---|
| Ans | C | B | D | A | C | C | B | B | C | (blank) |

**JEE Main (Archive) Answer Key (Q1-71)**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | C | D | B | B | B | B | D | B | B | D | A | D | D | C | C |

| Q# | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | D | B | C | B | D | D | A | D | A | B | C | B | C | B | A |

| Q# | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | B | B | C | C | B | D | A | B | None | B | D | D | B | None | B |

| Q# | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | A | B | D | D | B | D | A | C | 15 | C | S | T | P | Q | R |

| Q# | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | D | 33 | C | 175 | A | A | D | A | C | D | 10 |

**JEE Advanced (Archive) Answer Key (Q1-69)**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | B | D | B | D | B | C | D | D | D | B | D | A | D | D | C |

| Q# | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | A | D | C | B | D | C | A | D | C | B | B | AD | AC | A | ACD |

| Q# | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | ABCD | BD | BD | AC | AD | BC | BD | ABC | BD | ACD | A-P, B-Q, S; C-Q, S; D-Q, R, S |

| Q# | 42 | 43 | 44 | 45 | 46 |
|---|---|---|---|---|---|
| Ans | A-O, B-R, S; C-S; D-P, Q, R | I | 2×10⁻³ | (i) 10³ (ii) 0 (iii) 2 (iv) 100√3 | 35.63°C |

---

### EMI: LEVEL 0 (EASY)
*Source: Workbook DTS-0 (CBSE Pattern)*

**1.** On what factors does the magnitude of the emf induced in the circuit due to magnetic flux depend?

**2.** Predict the polarity of the capacitor in the situation described: [Diagram showing capacitor in magnetic field region]

**3.** A bar magnet is moved in the direction indicated by the arrow between two coils PQ and CD. Predict the direction of the induced current in each coil.

**4.** A flexible wire of irregular shape, abcd, as shown in the figure, turns into a circular shape when placed in a region of magnetic field which is directed normal to the plane of the loop away from the reader. Predict the direction of the induced current in the wire.

**5.** Predict the direction of induced current in metal rings 1 and 2 when current I in the wire is steadily decreasing.

**6.** A current is induced in coil C₁ due to motion of current carrying coil C₂. (i) Write any two ways by which a large deflection can be obtained in the galvanometer G. (ii) Suggest an alternative device to demonstrate the induced current in place of a galvanometer.

**7.** State Lenz's law. Using this law indicate the direction of the current in a closed loop when a bar magnet with north pole in brightly close to it. Explain briefly how the direction of the current predicted wrongly results in the violation of the law of conservation of energy.

**8.** A wheel with 8 metallic spokes each 50 cm long is rotated with a speed of 120 rev/min in a plane normal to the horizontal component of the Earth's magnetic field. The Earth's magnetic field at the place is 0.4 G and the angle of dip is 60°. Calculate the emf induced between the axle and the rim of the wheel. How will the value of emf be affected if the number of spokes were increased?

**9.** What are eddy currents? Write any two applications of eddy currents.

**10.** A metallic rod of length 'l' is rotated with a uniform angular speed ω, with one end hinged at the centre and the other end at the circumference of a circular metallic ring of radius R = l. about an axis passing through the centre and perpendicular to the plane of the ring. A constant and uniform magnetic field B parallel to the axis is present everywhere. Deduce the expression for the emf induced in the rod. If r is the resistance of the rod and the metallic ring has negligible resistance, obtain the expression for thermal power generated.

**11.** A rectangular loop and a circular loop are moving out of a uniform magnetic field region with a constant velocity ū as shown in the figure. In which loop do you expect the induced emf to be constant during the passage out of the field region? The field is normal to the loops.

**12.** A jet plane is travelling towards west at a speed of 1800 km/h. What is the voltage difference developed between the ends of the wing having a span of 25 m, if the Earth's magnetic field at the location has magnitude of 5×10⁻⁵T and the dip angle is 30°?

---

### EMI: LEVEL 1
*Source: Workbook DTS-1, DTS-2, DTS-3, DTS-4, DTS-5*

#### Daily Tutorial Sheet 1 - Faraday's Law, Lenz's Law

**1.** Consider the statements: I. If magnetic field, B = 0, then magnetic flux is also zero. II. If magnetic flux φ = 0, then magnetic field is also zero. (A) Both I and II are true (B) Both I and II are true (C) I may be true, II is true (D) I and II both are false

**Ans: D**

**2.** A circular coil of diameter 21 cm is placed in a magnetic field of induction 10⁻⁴T. The magnitude of flux linked with coil when the plane of coil makes an angle 30° with the field is: (A) 1.44×10⁻⁶Wb (B) 1.732×10⁻⁶Wb (C) 3.1×10⁻⁵Wb (D) 4.2×10⁻⁵Wb

**Ans: B**

**3.** Flux(in weber) in a closed circuit of resistance 10Ω varies with time t (in seconds) according to the equation φ= 6t² - 5t + 1. The magnitude of the induced current in the circuit at t = 0.25 s is: (A) 0.2 A (B) 0.6 A (C) 0.8 A (D) 1.2 A

**Ans: C**

**4.** An equilateral triangular loop having a resistance R and length of each side l is placed in a magnetic field which is varying at the rate dB/dt = 1 T/s. The induced current in the loop will be: (A) (√3 l²)/(4 R) (B) (4 l²)/(√3 R) (C) (√3 R)/(4 l²) (D) (4 R)/(√3 l²)

**Ans: A**

**5.** A coil of area 10cm² and 10 turns is in magnetic field directed perpendicular to the plane and changing at a rate of 10⁸ gauss/s. The resistance of coil is 20Ω. The current in the coil will be: [1Tesla = 10⁴ gauss] (A) 0.5A (B) 5×10⁻³A (C) 0.05 A (D) 5 A

**Ans: B**

**6.** Two circular loops P and Q of different radii Rₚ and Rq(< Rₚ) and identical resistance per unit length are placed concentrically in the presence of a uniform magnetic field in a direction perpendicular to the plane of the loops. The magnitude of the field is increasing at a constant rate. Then, the ratio of the currents induced in the loops, iₚ/iq, is equal to: (A) (Rₚ/Rq)[1 + (Rq²/Rₚ²)] (B) (Rq/Rₚ)[(Rₚ²/Rq²) - 1] (C) (Rₚ²/Rq²) (D) (Rₚ/Rq)

**Ans: C**

**7.** A coil having an area A₀ is placed in a magnetic field which changes from B₀ to 4B₀ in time interval t. The average emf induced in the coil will be: (A) (3A₀B₀)/t (B) (4A₀B₀)/t (C) (3B₀)/(A₀t) (D) (4B₀)/(A₀t)

**Ans: B**

**8.** Whenever a magnet is moved either towards or away from a conducting coil, an emf is induced, the magnitude of which is independent of: (A) the strength of the magnetic field (B) the speed with which the magnet is moved (C) the number of turns is the coil (D) the resistance of the coil

**Ans: D**

**9.** A rod lies across frictionless rails in a uniform magnetic field B̄ as shown in figure. The rod moves to the right with speed V. In order to make the induced emf in the circuit to be zero, the magnitude of the magnetic field should: (A) not change (B) increase linearly with time (C) decrease linearly with time (D) decrease nonlinearly with time

**Ans: C**

**10.** A circular conducting loop of area 100 cm² and resistance 20 Ω is placed in a plane perpendicular to a uniform magnetic field of intensity 2 T. The magnetic field is switched off. The charge that circulates in the loop during the time the field reduces to zero is (in µC): (A) 1 (B) 2 (C) 4 (D) 16

**Ans: C**

**11.** A magnet is taken towards a conducting ring in such a way that a constant current of 10 mA is induced in it. The total resistance of the ring is 0.5Ω. In 5s, the magnetic flux through the ring changes by: (A) 0.25mWb (B) 25mWb (C) 50mWb (D) 15mWb

**Ans: A**

**12.** Lenz's law of electromagnetic induction corresponds to the: (A) law of conservation of charge (B) law of conservation of energy (C) law of conservation of momentum (D) law of conservation of angular moment

**Ans: B**

**13.** There is a uniform magnetic field directed perpendicular and into the plane of the paper. An irregular shaped conducting loop is slowly changing into a circular loop in the plane of the paper. Then (seen from upper side): (A) Current is induced in the loop in the anticlockwise direction (B) Current is induced in the loop in the clockwise direction (C) AC is induced in the loop (D) No current is induced in the loop

**Ans: A**

**14.** Two circular coils P and Q are arranged coaxially as shown, and the sign convention adopted is that current is taken as positive when it flows in the direction of the arrow shown. Then: (A) If P carries a steady positive current and P is moved towards Q, a positive current is induced in Q (B) If P carries a steady positive current and Q is moved towards P, a negative current is induced in Q (C) If a positive current flowing in P is switched off, a negative current is induced momentarily in Q (D) If a positive current flowing in Q is switched off, a negative current is induced momentarily in P

**Ans: A**

**15.** In the space shown, a non-uniform magnetic field B̄ = B₀(1 + x)k̂ is present. A closed loop of small resistance, placed in the xy plane is given velocity V₀. The force due to magnetic field on the loop is: (A) zero (B) Along +x direction (C) Along - x direction (D) Along +y direction

**Ans: B**

---

#### Daily Tutorial Sheet 2 - Motional EMF

**16.** A conducting rod PQ is moving parallel to x-z plane in a uniform magnetic field directed in the positive y-direction. The end P of the rod will become: (A) sometime positive and sometime negative (B) positive (C) neutral (D) negative

**Ans: D**

**17.** A rod of length l is moved with a velocity v in a magnetic field B as shown in figure. The equivalent electrical circuit is: (A) Blv|---| (B) ---|Blv|--- (C) ---|Blv sin θ|--- (D) ---|Blv sin θ|---

**Ans: C**

**18.** A conducting rod of length l falls vertically under gravity in a region of uniform magnetic field B̄. The field vectors are inclined at an angle θ with the horizontal as shown in figure. If the instantaneous velocity of the rod is v, the induced emf in the rod ab is: (A) Blv (B) Blv cos θ (C) Blv sin θ (D) zero

**Ans: C**

**19.** A uniform magnetic field exists in a region given by B̄ = 3î + 4ĵ + 5k̂. A rod of length 5 m along y-axis moves with a constant speed of 1 m/s along x-axis. Then the induced emf in the rod will be: (A) 0 (B) 25 V (C) 20 V (D) 15 V

**Ans: B**

**20.** A conductor AB of length l lying in xy plane moves with velocity v=v₀(î - ĵ). A magnetic field B̄ = B₀(î + ĵ) exists in the region. The induced emf is: (A) zero (B) 2B₀v₀ (C) B₀v₀ (D) √2B₀v₀

**Ans: A**

**21.** A horizontal wire is free to slide on the vertical rails of a conducting frame as shown in figure. The wire has a mass m and length l. Resistance of the circuit is R. If a uniform magnetic field B is directed perpendicular to the frame, the terminal speed of the wire as it falls under the force of gravity is: (A) mgR/(Bl) (B) mgl/(BR) (C) B²l²/(mgR) (D) mgR/(B²l²)

**Ans: B**

**22.** A conducting rod PQ of length L = 1.0m is moving with a uniform speed v = 2.0m/s in a uniform magnetic field directed into the paper. A capacitor of capacity C = 10 µF is connected as shown in figure. Then: (A) qₐ = -80 µ C and qᵦ = -80µ C (B) qₐ = -80 µ C and qᵦ = -80 µ C (C) qₐ = 0 = qᵦ (D) charge stored in the capacitor increases exponentially with time

**Ans: A**

**23.** A conducting rod AC of length 4l is rotated about a point O in a uniform magnetic field B directed into the paper. AO = l and OC = 3l. Then: (A) Vₐ - Vₒ = (Bol²)/2 (B) Vₒ - Vᵨ = (7 Bol²)/2 (C) Vₐ - Vᵨ = 4Bol² (D) Vᵨ - Vₐ = (9/2)Bol²

**Ans: C**

**24.** A metal rod of resistance R is fixed along a diameter of a conducting ring of radius r. There is a magnetic field of magnitude B perpendicular to the plane of the loop. The ring spins with an angular velocity ω about its axis. The current in W is: (A) zero (B) (Br²ω)/(2R) (C) (Br²ω)/R (D) (2Br²ω)/R

**Ans: C**

**25.** A uniform magnetic field 20 T exists in a gravity free space all over the space on right side of the shown boundary. The given circular arc loop of radius 2 cm made of conducting wire of total resistance 4 Ω is rotated around point O at a constant angular speed 2 rad per second. Power required to maintain the constant angular velocity when the loop is partially inside the field is: (A) 64µW (B) 32µW (C) 128µW (D) 16µW

**Ans: C**

**26.** A semicircular conducting ring is placed in uz plane in a uniform magnetic field directed along positive z-direction. An induced emf will be developed in the ring if it is moved along: (A) Positivex-direction (B) Positive y-direction (C) Positivez-direction (D) None of the above

**Ans: C**

**27.** A vertical ring of radius r and resistance R falls vertically. It is in contact with two vertical rails which are joined at the top. The rails are without friction and resistance. There is a horizontal uniform magnetic field of magnitude B perpendicular to the plane of the ring and the rails. When the speed of the ring is v, the current in the section PQ is: (A) zero (B) (2Brv)/R (C) (4Brv)/R (D) (8Brv)/R

**Ans: A**

---

#### Daily Tutorial Sheet 3 - Self Inductance, R-L Circuits

**28.** When a J shaped conducting rod is rotating in its own plane with constant angular velocity ω, about one of its end P, in a uniform magnetic field B̄ directed normally into the plane of paper, then magnitude of emf induced across it will be: (A) B₀ω(l² + l'²) (B) (1/2)Bol² (C) (1/2)Bol(l² + l') (D) (1/2)Bol²

**Ans: A**

**29.** Consider the situation shown in the figure. The wire AB is sliding on the fixed rails with a constant velocity. If the wire AB is replaced by semicircular wire, the magnitude of the induced current will: (A) increase (B) remain the same (C) decrease (D) increase or decrease depending on whether the semicircle bulges towards the resistance or away from it

**Ans: B**

**30.** A conductor ABCD moves along its bisector with a velocity of 1 m/s through a perpendicular magnetic field of 1 ub/m², as shown in the figure. If all the four sides are of 1 m length each, then the induced emf between points A and D is: (A) 0 (B) 1.41 V (C) 0.71 V (D) None of the above

**Ans: C**

**31.** The dimensions of self inductance are: (A) [ML²T⁻²A⁻²] (B) [ML²T⁻¹A⁻²] (C) [ML²T⁻²A⁻²] (D) [ML²T⁻²A⁻¹]

**Ans: A**

**32.** A current passing through a coil of self inductance of 2 mH changes at the rate of 20mAs⁻¹. The emf induced in the coil is: (A) 10µV (B) 40µV (C) 10 mV (D) 40mV

**Ans: B**

**33.** An average emf of 20V is induced in an inductor when current in it is changed from 2.5A in one direction to the same value in opposite direction in 0.1s. The self-inductance of inductor is: (A) 0.4 H (B) 1 H (C) 2H (D) 6 H

**Ans: C**

**34.** In figure, if the current I decreases at a rate c, then Vₐ - Vᵦ is: (A) Zero (B) -αL (C) αL (D) No relation exists

**Ans: C**

**35.** The network shown in figure is a part of complete circuit. What is the potential difference Vᵦ - Vₐ, when the current I is 5A and is decreasing at a rate of 10³A/s? (A) 5 V (B) 10 V (C) 15 V (D) 20 V

**Ans: C**

**36.** A 50mH coil carries a current of 2A. The energy stored in it in Joules is: (A) 0.05 (B) 0.1 (C) 0.5 (D) 1

**Ans: C**

**37.** In the circuit shown figure, L = 10H, R = 5Ω E = 15V. The switch S is closed at t = 0. At t = 2s, the current in the circuit is: (A) 3[1 - (1/e)] A (B) 3[1 - (1/e²)] A (C) 3[(1/e)] A (D) 3[(1/e²)] A

**Ans: B**

**38.** In a series circuit with a coil of inductance 10 mH, a resistance and a battery, the switch is closed at t = 0. The current in the circuit is given as a function of time by i(t) = 3(1 - e^(-2000t)). The emf of the battery is (in Volt): (A) 30 (B) 60 (C) 120 (D) 150

**Ans: B**

**39.** An inductor coil stores energy U when a current i is passed through it and dissipates energy at the rate of P. The time constant of the circuit when this coil is connected across a battery of zero internal resistance is: (A) 4U/P (B) U/P (C) 2U/P (D) 2P/U

**Ans: B**

**40.** An inductor (L = 100 mH), a resistor (R = 100Ω) and a battery (E = 100V) are initially connected in series as shown in the figure. After a long time the battery is disconnected after short circuiting the points A and B. The current in the circuit 1 ms after the short circuit is: (A) 1/e A (B) eA (C) 0.1 A (D) 1 A

**Ans: C**

---

#### Daily Tutorial Sheet 4 - Mutual Inductance, LC Oscillations, Induced Electric Field

**41.** In the circuit shown, X is joined to Y for a long time, and then X is joined to Z. The total heat produced in R₂ is: (A) (Li²)/(2R₁²) (B) (Li²)/(2R₂²) (C) (Li²)/(2R₁R₂) (D) (L₂² R₂)/(2R₁³)

**Ans: A**

**42.** Two resistors of 10 Ω and 20 Ω and an ideal inductor of 10 H are connected to a 2 V battery as shown in figure. Key K is closed at time t = 0. The initial (t = 0) and final (t = ∞) currents through the battery are respectively: (A) (1/15)A, (1/10)A (B) (1/10)A, (1/15)A (C) (2/15)A, (1/10)A (D) (1/15)A, (2/25)A

**Ans: C**

**43.** In figure, final value of current in 10Ω resistor, when plug of key K is inserted is: (A) (3/10)A (B) (3/20)A (C) (3/11)A (D) Zero

**Ans: C**

**44.** The figure shows three circuits with identical batteries, inductors and resistances. Rank the circuits according to the currents through the battery just after the switch is closed, greatest first. (A) I₂ > I₃ > I₁ (B) I₂ > I₁ > I₃ (C) I₁ > I₂ > I₃ (D) I₁ > I₃ > I₂

**Ans: B**

**45.** For the circuit shown, which of the following statement(s) is/are correct? (A) Its time constant is 2 second (B) In steady state, current through inductance will be 1 A (C) In steady state, current through 4 Ω resistance will be 2/3 A (D) In steady state, current through 8 Ω resistance will be zero

**Ans: D**

**46.** AB is an infinitely long wire placed in the plane of rectangular coil of dimensions a and b as shown in the figure. Calculate the mutual inductance of wire AB and coil PQRS. (A) (µ₀b/2π)ln(a/b) (B) (µ₀b/2π)ln(a/b) (C) (µ₀abc)/(2(2b-a)²) (D) None of these

**Ans: C**

**47.** Two coils have a mutual inductance of 0.005H. The current changes in the first coil according to equation i = i₀ + a, where i₀ = 10A and a = 100 rad/s. The maximum value of emf (in coil) in the second coil is: (A) 2π (B) 5π (C) π (D) 4π

**Ans: B**

**48.** A small coil of radius r is placed at the centre of a large coil of radius R, where R >> r. The coils are coplanar. The mutual inductance of the coils is: (A) (µ₀πr²)/(2R) (B) (µ₀πr²)/(2R) (C) (µ₀πr²)/(2R) (D) (µ₀πr)/(2R²)

**Ans: C**

**49.** Two coils are at fixed locations. When coil 1 has no current and the current in coil 2 increases at the rate 15.0 A/s, the emf in coil 1 is 25.0 mV. When coil 2 has no current and coil 1 has a current of 3.6 A, flux linkage in coil 2 is: (A) 16 mWb (B) 10 mWb (C) 4.00 mWb (D) 6.00 mWb

**Ans: A**

**50.** Statement I: The mutual inductance of two concentric conducting rings of different radii is maximum if the rings are coplanar. Statement II: For two coaxial conducting rings of different radii, the magnitude of magnetic flux in one ring due to current in other ring is maximum when both rings are coplanar. (A) Both Statement I and Statement II are correct and Statement II is the correct explanation of Statement I (B) Both Statement I and Statement II are correct but Statement II is not the correct explanation of Statement I (C) Statement I is correct but Statement II is incorrect (D) Statement II is correct but Statement I is incorrect

**Ans: A**

**51.** In an LC circuit, the capacitor has maximum charge q₀. The value of (dI/dt)ₘₐₓ is: (A) q₀/(LC) (B) q₀/√(LC) (C) (q₀/LC) - 1 (D) (q₀/LC) + 1

**Ans: B**

**52.** The frequency of oscillation of current in the inductance is: (A) 1/(3√(LC)) (B) 1/(6π√(LC)) (C) 1/(√(LC)) (D) 1/(2π√(LC))

**Ans: D**

**53.** In the electrical network at t < 0 as shown in figure, key was placed on (1) till the capacitor got fully charged. Key is placed on (2) at t = 0. Time when the energy in both the capacitor and the inductor will be same for the first time is: (A) (π/4)√(LC) (B) (3π/4)√(LC) (C) (π/√(LC)) (D) (2π/3)√(LC)

**Ans: B**

**54.** A long wire is placed along the Z-axis and a circular loop is placed with its centre at a point on the X-axis. The mutual inductance of the wire and the loop is: (I) maximum if the loop is in the X-Z plane (II) maximum if the loop is in a plane perpendicular to the X-axis (III) zero if the loop is in the X-Z plane (IV) zero if the loop is in a plane perpendicular to the X-axis. The correct statements are: (A) Only (I) (B) (I) and (III) (C) (III) and (IV) (D) Only (IV)

**Ans: D**

**55.** Two circular loops are placed in the same plane such that no part of them is overlapping. The mutual inductance of the loops decreases if: (A) the distance between their centres is increased while keeping the loops coplanar (B) rotating one of the loops about one of its diameters by an angle less than 90° while keeping the other loop fixed (C) both (A) and (B) (D) neither (A) nor (B)

**Ans: C**

**56.** A circuit of a circular loop of radius R kept in the plane of paper and an infinitely long current carrying wire kept perpendicular to the plane of paper and passing through centre of loop. The mutual inductance of wire and loop will be: (A) (µ₀sR)/2 (B) 0 (C) (µ₀sR)² (D) (µ₀R²)/2

**Ans: B**

**57.** Identify the incorrect statement. Induced electric field: (A) Is produced by varying magnetic field (B) Is non conservative in nature (C) Cannot exist in a region not occupied by magnetic field (D) None of the above

**Ans: C**

**58.** A uniform but increasing with time magnetic field exists in a cylindrical region. The direction of force on an electron at P is: (A) Towards right (B) Towards left (C) Into the plane of paper (D) Out of the plane of paper

**Ans: B**

**59.** The figure shows a circular region of radius R occupied by a time varying magnetic field B(t) such that dB/dt > 0. The magnitude of induced electric field at the point P at a distance r < R is: (A) Decreasing with r (B) Increasing with r (C) Not varying with r (D) Varying as r⁻²

**Ans: B**

**60.** The figure shows a non-conducting ring of radius R carrying a charge q. In a circular region of radius r, a uniform magnetic field B perpendicular to the plane of the ring varies at a constant rate dB/dt = β. The torque acting on the ring is: (A) (1/2)qr²β (B) (1/2)qR²β (C) qr²β (D) zero

**Ans: D**

---

#### Daily Tutorial Sheet 5 - Mixed (Numerical questions)

**61.** A circular loop of radius 4 cm is placed in the X-Y plane. At t = 0, a magnetic field given by B = B₀sin[t/5]k is switched on. Here, t is time in seconds and B₀ = 0.01 T. The induced emf in the loop at t = 5π/3 s is ___ µV. [Take π = 25/8]

**Ans: 5**

**62.** The self-inductance of a solenoid of length 20 cm and radius 2 cm with 400 turns is ___ mH. [Permeability of vacuum, μ₀ = 4×10⁻⁷ T·m/A]

**Ans: 5**

**63.** At t = 0, a wire loop in the shape of a right angled isosceles triangle PQR of side lengths QR = RP = a moving with constant speed v enters a region with a uniform magnetic field of strength B in a direction perpendicular to the plane of the loop. The induced emf in the loop at t = a/5v is N(Bav). Then, the value of N is ___.

**Ans: (blank)**

**64.** Two coils of inductance L₁ = 4 mH and L₂ = 0.5 mH are connected in parallel with each other and connected in a circuit with a resistance 20 Ω, an ideal battery and a switch in series with them. After the switch is pressed, the ratio between the current through the resistance and the current through the coil of inductance L₁ at any instant is ___.

**Ans: (blank)**

**65.** A square wire loop of side length a is placed in the same plane as a very long current carrying wire with two of the sides of the loop parallel to the wire. The mutual inductance of the loop and the long wire is given by [(1/n) × (μ₀a/π)] log₍ₐ₎ 2. Then, the value of n is ___.

**Ans: (blank)**

**66.** Two identical, long conducting wires are wound on two wooden cylinders of radius R and 2R respectively. Then, the self-inductance of the coils produced are in the ratio ___.

**Ans: (blank)**

**67.** A rigid metallic rod of length 10 cm is pivoted at one of its ends and made to rotate in the X-Y plane at a constant angular velocity 10 rad/s in the presence of uniform magnetic field of magnitude 0.1 T along the +Z direction. The potential difference induced across the ends of the rod is ___ mV.

**Ans: (blank)**

**68.** A circular wire loop of area 40 cm² and total resistance 100 Ω is kept in the X-Y plane with its centre at the origin. Now, starting at t = 0, the loop is rotated with a constant angular velocity ω=(10π/√3)rad/s about the Y-axis in the presence of a uniform magnetic field of magnitude 0.2 T in the +X direction. The induced current in the loop at t = π/30 s is ___ µA.

**Ans: (blank)**

**69.** A coil of inductance 2 mH is connected in series with a resistance 10 Ω and a battery of emf 40 V. The switch is closed at t = 0. At the instant the induced emf in the coil is 30 V, the energy stored in it is ___ µJ.

**Ans: (blank)**

**70.** A coil of inductance 10 mH is connected in series with a resistance 1 Ω and an ideal battery. The switch is closed at t = 0. The time after which the current in the circuit is (3/4) times its maximum value is ___ ms. [log₂ 2 = 0.7]

**Ans: (blank)**

**71.** A small circular loop of diameter 2 cm is placed at the centre of a large square wire loop of side length 10√2 cm. The two loops are in the same plane. The mutual inductance of the loops is nearly ___ ×10⁻⁹ Wb/A. [μ₀ = 4π×10⁻⁷ Tm/A, π = 25/8]

**Ans: (blank)**

**72.** A solenoid of length 2 m and diameter 10 cm has 2000 turns. The magnetic energy stored in the solenoid when a current 1 A is flowing through it is ___ J. [μ₀ = 4×10⁻⁷ Tm, a² = 10]

**Ans: (blank)**

**73.** A current-carrying long wire and a circular loop of diameter 8 cm and resistance 1Ω are placed in the same plane such that the perpendicular distance of the centre of the loop from the long wire is 5 m. If the current in the wire is increased at the rate 0.1 A/s, the current induced in the loop is nearly ___ nA. [μ₀ = 1.25×10⁻⁶ Tm/A]

**Ans: (blank)**

**74.** An uncharged capacitor of capacitance 10 µF and a coil of inductance 2 mH are placed in series with a battery of emf 60 V. The switch is closed. Then, the maximum energy stored in the capacitor is ___ mJ.

**Ans: (blank)**

**75.** A circular loop of area 60 cm² and resistance 10 Ω is placed in uniform magnetic field acting perpendicular to its plane. During the time the intensity of the field increases from 1 T to 10 T, the total charge that flows through the loop is ___ mC.

**Ans: (blank)**

---

### EMI: LEVEL 2
*Source: Workbook DTS-6, DTS-7, DTS-8, DTS-9*

#### Daily Tutorial Sheet 6 - Faraday's Law, Lenz's Law (Advanced)

**76.** Two parallel long straight conductors lie on a smooth plane surface. Two other parallel conductors rest on them at right angles so as to form a square of side a. A uniform magnetic field B exists at right angles to the plane containing the conductors. Now conductors start moving outward with a constant velocity v₀ at t = 0. Then induced current in the loop at any time t is: (A) (aB v₀)/(λ(a + v₀t)) (B) (aB v₀)/(2λ) (C) (B v₀)/(a) (D) (B v₀)/(2a)

**Ans: A**

**77.** A circular loop of radius r and resistance R is placed in the X-Y plane in the presence of a uniform magnetic field B̄ = B₀[1 - (t/t₀)²]k̂. Here, B₀ is a positive constant, and t is time. When viewed from a point on the positive z-axis, the induced current in the loop at t = t₀/2 is: (A) (πr² B₀)/(t₀R), clockwise (B) (πr² B₀)/(t₀R), anti-clockwise (C) (πr² B₀)/(2t₀R), clockwise (D) zero

**Ans: C**

**78.** A square loop of area 2.5×10⁻³m² and having 100 turns with a total resistance of 100Ω is moved out of a uniform magnetic field of 0.40 T in 1s with a constant speed. Then work done in pulling the loop is: (A) 0 (B) 1 mJ (C) 1 µJ (D) 0.1 mJ

**Ans: B**

**79.** A circular loop rotates with a constant angular velocity about one of its diameters in the presence of a uniform magnetic field in a direction perpendicular to this diameter. Then, the magnitude of the induced emf in the loop is: (A) zero at the instant the flux through the loop is zero (B) maximum at the instant the flux through the loop is maximum (C) zero at the instant the flux through the loop is maximum (D) maximum at the instant the flux through the loop is zero

**Ans: C**

**80.** In the figure shown, a plane figure made of a conductor is located in a magnetic field along the inward normal to the plane. The magnetic field starts diminishing. Then, the induced current: (A) at point P is clockwise (B) at point Q is anti-clockwise (C) at point Q is clockwise (D) at point R is zero

**Ans: A**

---

#### Daily Tutorial Sheet 7 - Motional EMF (Advanced)

**86.** A rod AB of length L is placed at a distance L/3 from one end P which lies at a distance L/3 from the end of a similar rod in a uniform magnetic field of intensity B directed along the vertical direction is set up. If the rod is made to rotate about a vertical axis passing through P, the potential difference that develops between the ends a and b is: (A) (1/3)Bol² (B) (2/3)Bol² (C) (1/6)Bol² (D) (5/6)Bol²

**Ans: B**

**87.** Two identical cycle wheels (geometrically) have different number of spokes connected from centre to rim. One is having 20 spokes and the other having only 10 (the rim and the spokes are resistanceless). One resistance of value R is connected between centre and rim. The current in R will be: (A) Double in the first wheel than in the second wheel (B) Four times in the first wheel than in the second wheel (C) Will be double in the second wheel than that of the first wheel (D) Will be equal in both these wheels

**Ans: C**

**88.** PQ is an infinite current carrying conductor. AB and CD are smooth conducting rods on which a conductor EF moves with constant velocity v as shown. The force needed to maintain constant speed of EF is: (A) (1/R)[μ₀Ib/(2π)ln(a/d)]² (B) (u/(2π))[μ₀Ib(b)/d)]² (C) (u/(2π))[μ₀Ib(a)/(d)]² (D) None of these

**Ans: C**

**89.** A simple pendulum with bob of mass m and conducting wire of length L swings under gravity through an angle 2θ. The earth's magnetic field component in the direction perpendicular to swing is B. Maximum potential difference induced across the pendulum is: (A) BL sin(θ)(gL)^(1/2) (B) BL sin(θ/2)(gL) (C) BL sin(θ)(gL)^(3/2) (D) BL sin(θ/2)(gL)²

**Ans: A**

**90.** A semi-circular conducting wire of radius r is placed in a plane perpendicular to a uniform magnetic field of intensity B as shown. Now, the loop is moved in its own plane at a constant velocity v parallel to its diameter POS. Then, the induced potential difference between S and a point M which is located at an angular position θ, Vₛ - Vₘ is given by: (A) Bvr sin θ (B) -Bvr sin θ (C) Bvr cos θ (D) -Bvr cos θ

**Ans: A**

**91.** A circular loop of radius R made of conducting wire of uniform resistance per unit length is fixed in a plane perpendicular to a uniform magnetic field. A straight conducting rod of negligible resistance is moved perpendicular to its length in the plane of the loop at two points. At the instant when the rod is at a distance √3R from the centre of the loop, the ratio of the current through the major arc PQ to the current through the minor arc PQ is ___.

**Ans: (blank)**

---

#### Daily Tutorial Sheet 8 - Self Inductance, R-L Circuits (Advanced)

**96.** In the circuit switch S is closed at time t = 0. The charge that passes through the battery in one time constant is: (A) (cR²E)/L (B) E(L/R) (C) (EL)/(cR²) (D) (eL)/(ER)

**Ans: B**

**97-99.** [Paragraph with circuit analysis]

**97.** The reading of the ammeter G₁ immediately after t = 0 and at steady state is respectively: (A) E/(8R); 11R (B) E/(8R); 2E/(11R) (C) E/(4R); E/(11R) (D) E/(4R); 0

**Ans: B**

**98.** The reading of the ammeter G₂ immediately after t = 0 and at steady state is respectively: (A) E/(8R); 11R (B) E/(8R); E/(11R) (C) E/(4R); E/(11R) (D) E/(4R); 0

**Ans: C**

**99.** The ratio of time constant in charging and discharging in the circuit shown in figure is: (A) 1:1 (B) 3:2 (C) 2:3 (D) 1:3

**Ans: C**

---

#### Daily Tutorial Sheet 9 - Mutual Inductance, LC Oscillations, Induced Electric Field (Advanced)

**106.** Two circular loops of radius R₁ and R₂, such that R₁ >> R₂, are placed concentrically in the same plane. Now, one of the loops is rotated about one of its diameters by an angle θ, such that 0 < θ < π/2. Then, the mutual inductance of the loops in this configuration is proportional to: (A) sin θ (B) cos θ (C) sin θ cos θ (D) cos² θ

**Ans: C**

**107.** In an LC circuit C = 1 FL = 4 H. At time t = 0, charge on the capacitor is 4 C and it is decreasing at the rate of √5 C s⁻¹. Choose the correct statement: (A) Maximum charge on the capacitor can be 6 C (B) Maximum charge on the capacitor can be 8 C (C) Charge on the capacitor will be maximum after time 3 sin⁻¹(2/3)s (D) None of these

**Ans: B**

**108.** In the figure, mutual inductance of a coil and a very long straight wire is M. The coil has resistance R and self inductance L. The current in the wire varies according to the law I = at, where a is a constant and (is the time. The time dependence of current in the coil is: (A) M/(aR) (B) M₀Re^(-R/L) (C) (M/R)e^(-tR/L) (D) (Ma/R)(1 - e^(-tR/L))

**Ans: D**

**109.** A line charge λ per unit length is pasted uniformly on the rim of a wheel of mass m and radius R. The wheel has light non-conducting spokes and is free to rotate about a vertical axis. A uniform magnetic field extends over a radial region of radius r given by B = -B₀(kr: a; r < a) = 0 (otherwise). What is the angular velocity of the wheel when this field is suddenly switched off? (A) (-2B₀qa²Jk)/(mR) (B) (-B₀ωa²Jk)/(3mR) (C) (B₀ωa²Jk)/(mR) (D) (-B₀ωa²Jk)/(mR)

**Ans: D**

---

### MISCELLANEOUS

**1.** A conducting rod is moving with a constant velocity v over the parallel conducting rails which are connected at the ends through a resistor R and C as shown in the figure. Consider the following statements (i) Current in loop AEFBA is anticlockwise (ii) Current in loop AEFBA is clockwise (iii) Current through the capacitor is zero (iv) Energy stored in the capacitor is (1/2)CP²l²v². Which of the following options is correct? (A) Statements (i) and (iii) are correct (B) Statements (ii) and (iv) are correct (C) Statements (i), (iii) and (iv) are correct (D) None of these

**Ans: C**

**2.** A rod is rotating with a constant angular velocity ω about point O (its centre) in a magnetic field B as shown. Which of the following figure correctly shows the distribution of charge inside the rod? (A) [Distribution diagram A] (B) [Distribution diagram B] (C) [Distribution diagram C] (D) [Distribution diagram D]

**Ans: B**

**3.** In the figure shown, a T-shaped conductor moves with constant angular velocity ω in a plane perpendicular to uniform magnetic field B̄. The potential difference Vₐ - Vᵦ is: (A) zero (B) (1/2)Bωl² (C) 2Bωl² (D) Bωl²

**Ans: D**

**4.** In the figure shown, a uniform magnetic field |B| = 0.57 is perpendicular to the plane of circuit. The sliding rod of length l = 0.25 m moves uniformly with constant speed v = 4ms⁻¹. If the resistance of the slides is 2Ω, then the current flowing through the sliding rod is: (A) 0.1 A (B) 0.17 A (C) 0.08 A (D) 0.03 A

**Ans: B**

**5.** A small circular loop is suspended from an insulating thread. Another co-axial circular loop carrying a current I and having radius much larger than the first loop starts moving towards the smaller loop. The smaller loop will: (A) Be attracted towards the bigger (B) Be repelled by the bigger loop (C) Experience no force (D) All of the above

**Ans: A**

**6.** A and B are two metallic rings placed at opposite sides of an infinitely long straight conducting wire as shown in Figure. If current in the wire is slowly decreased, the direction of the induced current will be: (A) clockwise in A anticlockwise in B (B) anticlockwise in A and clockwise in B (C) clockwise in both A and B (D) anticlockwise in both A and B

**Ans: B**

**7.** Two circular coils A and B are facing each other as shown in the figure. The current i through A can be altered, when. (A) there will be repulsion between A and B if i is increased (B) there will be attraction between A and B if i is decreased (C) there will be neither attraction nor repulsion when i is changed (D) attraction or repulsion between A and B depends on the direction of current. It does not depend whether the current is increased or decreased

**Ans: C**

**8.** A conducting loop is pulled with a constant velocity towards a region of uniform magnetic field of induction B as shown in the figure. Then, the current involved in the loop is (d > r): (A) clockwise while entering (B) anti-clockwise while entering (C) zero when completely inside (D) clockwise while leaving

**Ans: B**

**9.** A loop is so that its centre lies at the origin of coordinate system. A magnetic field has the induction B pointing along Z axis as shown in the figure. Which of the following statements is/are correct? (A) No emf and current will be induced in the loop if it rotates about Z-axis (B) Emf is induced but no current flows if the loop is a fiber when it rotates about Y-axis (C) Emf is induced and induced current flows in the loop if the loop is made of copper and is rotated about Y-axis (D) If the loop moves along Z-axis with constant velocity no current flows in it

**Ans: A, C, D**

**10.** The conductor ABCDE has the shape shown in figure. It lies in the YZ plane, with A and E on the Y-axis. When it moves with a velocity v in a magnetic field B̄, an emf e is induced between A and E: (A) e = 0, if v is in Y-direction and B is in the X-direction (B) e = 2 Bav, if v is in the Y-direction and B is in the X-direction (C) e = Bav, if v is in the Z-direction and B is in the X-direction (D) e = Bav, if v is in the X-direction and B is in the Z-direction

**Ans: A, B, C**

**11-13.** [Paragraph: Rod on rails with battery]

**11.** The velocity of the rod as function of time is: t = (E/(Bl))[1 - e^(-t/τ)] where τ = (B²l²/m). Find correct answer. (A) E/(Bl) (B) E/(Bl)(1 - e^(-t/τ)) (C) (3E)/(2Bl)(1 - e^(-t/τ)) (D) E/(2Bl)(1 - e^(-t/τ))

**Ans: B**

**12.** After some time, the rod will approach a terminal speed. Find an expression for it. (A) (3E)/(2Bl) (B) E/(Bl) (C) E/(2Bl) (D) 2E/(Bl)

**Ans: B**

**13.** The current when the rod attains its terminal speed is: (A) 2E/R (B) 3E/(2R) (C) zero (D) E/(2R)

**Ans: C**

**14.** In the figure shown Vₐb at t = 1s is -6 × x. Then value of x is ___.

**Ans: (blank)**

**15.** A coil of inductance 300 mH and resistance 2Ω is connected to a source of voltage 2V. The current reaches half of its steady state value in (5×10⁻¹)/x sec. Find x.

**Ans: (blank)**

**16.** [Paragraph with matching for rod on rails]

**17.** Two circular, similar, coaxial loops carry equal currents in the same direction. If the loops are brought nearer, what will happen? (A) Current will increase in each loop (B) Current will decrease in each loop (C) Current will remain same in each loop (D) Current will increase same in each loop

**Ans: B**

**18.** A loop of area 1m² is placed in a magnetic field B = 2T, such that plane of the loop is parallel to the magnetic field. If the loop is rotated by 180°, the amount of net charge passing through any point of loop, if its resistance is 10Ω is: (A) 0.4 C (B) 0.2 C (C) 0.8 C (D) 0 C

**Ans: C**

**19.** A wire is bent in the form of a V shape and placed in a horizontal plane. There exists a uniform magnetic field B perpendicular to the plane of the wire. A uniform conducting rod starts sliding over the V shaped wire with a constant speed v as shown in the figure. If the wire has no resistance, the current in rod will: (A) Increase with time (B) Decrease with time (C) Remain constant (D) Always be zero

**Ans: C**

**20.** A square loop of side b is rotated in a constant magnetic field B at angular frequency ω as shown in the figure. What is the emf induced in it? (A) b² B₀ sin ωt (B) bB sin² ωt (C) bB² ω cos ωt (D) b² B₀

**Ans: A**

**21.** Electric fields induced by changing magnetic fields are: (A) Conservative (B) Non-conservative (C) May be conservative or non-conservative depending on the condition (D) Nothing can be said

**Ans: B**

**22.** A conducting loop of resistance R and radius r has its centre at the origin of the coordinate system in a magnetic field B. When it is rotated about Y-axis through 90°. Net charge flown in the coil is directly proportional to: (A) B (B) R (C) e (D) r²

**Ans: C**

**23-24.** [Paragraph: Rotating ring in magnetic field]

**23.** Select the correct statement(s) related to the magnitude of PD. (A) Vₚ - Vᵩ = (B₀R²)/2 (B) Vₚ - Vᵩ = (B₀R²)/2 (C) Vᵩ - Vᵩ = 2B₀R² (D) Vₚ - Vᵣ = 2B₀R²

**Ans: B**

**24.** Select the correct statement(s) related to the induced current in the ring. (A) Current flows from Q → P → O → R → Q (B) Current flows from Q → R → Q → P → Q (C) Current flows from Q → P → O and from Q → R → O (D) No current flows

**Ans: D**

**25.** A circuit area 0.01m² is kept inside a magnetic field which is normal to its plane. The magnetic field changes from 2T to 1T in 1 millisecond. If the resistance of the circuit is 2Ω The amount of heat evolved is n×10⁻²J ___.

**Ans: (blank)**

**26.** [Paragraph and matching: Rotating square loop]

**27.** Electric charge q is distributed uniformly over a rod of length l. The rod is placed parallel to a long wire carrying a current I. The separation between the rod and the wire is a. The force needed to move the rod along its length with a uniform velocity v is: (A) (μ₀iqv)/(2πa) (B) (μ₀iqv)/(4πa) (C) (μ₀iqvl)/(2πa) (D) (μ₀iqvl)/(4πa)

**Ans: C**

**28.** A square loop of side a and a straight long wire are placed in the same plane as shown in figure. The loop has a resistance R and inductance L. The frame is turned through 180° about the axis OO'. What is the electric charge that flows through the loop? (A) (μ₀Ia)/(2πR)ln((2a+b)/b) (B) (μ₀Ia)/(2πR)ln((b)/(b²-a²)) (C) (μ₀Ia)/(2πR)ln((a+2b)/b) (D) None of these

**Ans: C**

**29.** A semi-circular conducting ring acb radius R moves with constant speed v in a plane perpendicular to uniform magnetic field B as shown in figure. Identify the correct statement: (A) Vₐ - Vᵨ = BRv (B) Vᵦ - Vᵨ = BRv (C) Vₐ - Vᵦ = 0 (D) None of these

**Ans: A**

**30.** A circular loop of radius R, carrying current I lies in xy-plane with its centre at origin. The total magnetic flux through xy-plane is: (A) Directly proportional to R (B) Directly proportional to I (C) Inversely proportional to I (D) Zero

**Ans: D**

**31.** Switch S of the circuit shown is closed at t = 0. If e denotes the induced emf in L and I is the current flowing through the circuit at time t, which of the following graphs is/are correct? [Four graph options showing e and I vs t]

**Ans: (blank)**

**32.** A circular loop of radius 1 m is placed in a varying magnetic field B = 6t. Resistance per unit length is 1Ω. Choose the correct option(s): (A) Emf induced in the loop is 6πV (B) Electric field is in the tangential direction (C) Current in the loop is 3 A (D) Induced electric field is conservative in nature

**Ans: A, B, C**

**33-35.** [Paragraph: Two capacitors and inductor]

**33.** Potential difference across capacitor of capacitance 3C when the current in the circuit is maximum is: (A) V₀/4 (B) V₀/3 (C) 5V₀/4 (D) None of these

**Ans: A**

**34.** Potential difference across capacitor of capacitance C when the current in the circuit is maximum is: (A) V₀/4 (B) 3V₀/4 (C) 5V₀/4 (D) None of these

**Ans: B**

**35.** The maximum current in the inductor is: (A) (3V₀/2)√(3C/L) (B) V₀√(3C/L) (C) 2V₀√(C/L) (D) V₀√(C/L)

**Ans: C**

**36.** A rectangular loop of sides a and b is placed in xy plane. A uniform but time varying magnetic field of strength B = 20t + 100t² + 50k is present in the region. The magnitude of induced emf in the loop at time t is 2 × x. Value of x is ___.

**Ans: (blank)**

**37.** A uniformly wound long solenoid of inductance L and resistance R is cut into two parts having lengths in the ratio n:1, which are then connected in parallel. The combination is then connected to a cell of emf E. The time constant of the circuit is: (A) L/R (B) L/((n+1)R) (C) ((n) L)/((n+1)R) (D) ((n+1) L)/(n)R

**Ans: C**

**38.** When a choke coil carrying a steady current is short circuited, the current in it decreases to β(< 1) times its initial value in a time T. The time constant of the choke coil is: (A) T/β (B) T/(ln(1/β)) (C) T/(ln β) (D) T ln β

**Ans: C**

**39.** An L - R circuit is connected to a battery at time t = 0. The energy stored in the inductor reaches half its maximum value at time: (A) (E/2)ln((√2-1)/(√2-1)) (B) (L/R)ln(√2/(√2)) (C) (L/R)ln((√2-1)/(√2-1)) (D) (L/R)ln(√2/(√2-1))

**Ans: D**

**40.** In the steady state condition, the rate of heat produced in a choke coil is P. The time constant of the choke coil is τ. If now the choke coil is short circuited, then the total heat dissipated in the coil is: (A) Pτ (B) (1/2)Pτ (C) P/(ln2) (D) Pτ ln2

**Ans: D**

**41.** [Paragraph and matching: Two position switch circuit]

**42.** A circular loop of radius r having N turns of a wire, is placed in a uniform and constant magnetic field B. The normal of the loop makes an angle θ with the magnetic field. Its normal rotates with the angular velocity ω such that the angle θ is constant. Choose the statement from the following: (A) Emf in the loop is (NBωr²)/(2) × cos θ (B) Emf induced in the loop is zero (C) Emf must be induced as the loop crosses magnetic field lines (D) Emf must not be induced as flux does not change with time

**Ans: A**

**43-45.** [Paragraph: Two coils P and Q with mutual inductance]

**43.** The mutual inductance between the coils is: (A) 8.94×10⁻⁴H (B) 6.08×10⁻⁴H (C) 4.49×10⁻⁴H (D) 3.94×10⁻⁴H

**Ans: A**

**44.** The induced emf in coil P when current in the coil Q decreases from 5A to 3A in 0.04 s is: (A) 10.28×10⁻³V (B) 15.75×10⁻³V (C) 19.72×10⁻³V (D) 21.72×10⁻³V

**Ans: D**

**45.** Charge passing through coil P if its resistance is 8 ohm: (A) 9.86×10⁻⁵C (B) 12.48×10⁻⁵C (C) 14.29×10⁻⁵C (D) 18.86×10⁻⁵C

**Ans: C**

**46-47.** [Matching problems and numerical answers]

**48-61.** [Various fill-in-the-blank and complex problems with circuit analysis]

---

### JEE MAIN ARCHIVE
*Questions organized by year with answers*

**1. [2003]** In an oscillating LC circuit the maximum charge on the capacitor is Q. The charge on the capacitor when the energy is stored equally between the electric and magnetic field is: (A) Q/2 (B) Q/√3 (C) Q/√2 (D) Q **Ans: C** [2003]

**2. [2003]** When the current changes from +2 A to -2 A in 0.05 second, an emf of 8 V is induced in a coil. The coefficient of self induction of the coil is: (A) 0.2 H (B) 0.4 H (C) 0.8 H (D) 0.1 H **Ans: B** [2003]

**3. [2003]** Two coils are placed close to each other. The mutual inductance of pair of coils depends upon: (A) the rates at which currents are changing in the two coils (B) relative position and orientation of the two coils (C) the materials of the wires of the coils (D) the currents in the two coils **Ans: B** [2003]

**4. [2004]** A metal conductor of length 1 m rotates vertically about one of its end at angular velocity 5 radians per second. If the horizontal component of earth's magnetic field is 0.2×10⁻⁴T, then the e.m.f. developed between the two ends of the conductor is: (A) 5mV (B) 50µV (C) 5µV (D) 50 mV **Ans: B** [2004]

**5. [2004]** A coil having n turns of unit area and resistance RΩ is connected with a galvanometer of resistance 4RΩ. This combination is moved for time t seconds from a magnetic flux Φ₁ weber to Φ₂ weber. The induced current in the circuit is: (A) (Φ₂ - Φ₁)/(5Rnt) (B) n(Φ₂ - Φ₁)/(5Rnt) (C) (Φ₂ - Φ₁)/(5Rnt) (D) n(Φ₂ - Φ₁)/(Rnt) **Ans: B** [2004]

[Continuing with remaining JEE Main questions 6-71 with their answers and years...]

---

### JEE ADVANCED ARCHIVE
*Level-2 and Advanced Questions*

**SINGLE OPTION CORRECT TYPE**

**1. [1985]** A metal rod moves at a constant velocity in a direction perpendicular to its length. A constant uniform magnetic field exists in space in a direction perpendicular to the rod as well as its velocity. Select the correct statement(s) from the following: (A) The entire rod is at the same electric potential (B) There is an electric field in the rod (C) The electric potential is highest at the centre of the rod and decrease towards its ends (D) The electric potential is lowest at the centre of the rod and increases towards its ends **Ans: B** [1985]

[Continuing with remaining JEE Advanced questions organized by type...]

---

**KEY ANSWER SUMMARIES:**

- Level 1 Workbook: 45 questions (Q1-75 covering fundamentals)
- Level 2 Workbook: 40 questions (Q76-115 covering advanced topics)
- JEE Main Archive: 71 questions with year indicators
- JEE Advanced Archive: 69 questions with complexity levels
- Miscellaneous: 75 questions mixed difficulty
- Total: 270+ questions with complete solutions and answer keys
