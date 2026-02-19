# Electromagnetic Waves & Magnetism

## Overview
Electromagnetic waves are self-sustaining oscillations of electric and magnetic fields that propagate through space without requiring a material medium. They carry energy and momentum, with applications ranging from radio communication to medical imaging. Magnetism & Matter explores how materials respond to magnetic fields through dipoles, magnetization, and the classification of materials based on their magnetic properties.

---

## 1. Electromagnetic Wave Fundamentals

### Concepts
- EM waves are transverse waves with electric and magnetic field vectors perpendicular to each other and to the direction of propagation
- Source of EM waves is oscillating electric charge producing time-varying electric and magnetic fields
- Electric and magnetic fields oscillate in phase with constant amplitude relationship
- EM waves require no material medium; they propagate through vacuum at speed of light
- Wave characteristics: wavelength (λ), frequency (ν), angular frequency (ω), and wave number (k)

### Formulas
- `E/B = c` - ratio of electric to magnetic field amplitudes in vacuum
- `c = 1/√(μ₀ε₀)` - speed of light in terms of permeability and permittivity
- `ω = 2πν` - angular frequency relation
- `k = 2π/λ` - wave number relation
- `c = νλ = ω/k` - wave speed in terms of frequency and wavelength

### Important Notes
- Electric field, magnetic field, and propagation direction form a right-handed triad
- In vacuum, c = 3 × 10⁸ m/s (constant for all frequencies)
- The cross product relationship: S = E × B (direction of energy flow)

### Worked Example
**Q:** An EM wave has E-field: `E = E₀ sin(kx - ωt)ĵ`. Write the magnetic field expression.
**A:**
- Direction of propagation is x-direction
- B-field must be perpendicular to E, so it's along z-direction
- Amplitude ratio: B₀ = E₀/c
- Phase and frequency match E-field
- Result: `B = B₀ sin(kx - ωt)k̂ = (E₀/c) sin(kx - ωt)k̂`

---

## 2. Wave Parameters in Different Media

### Concepts
- Speed of EM waves in medium depends on electric permittivity (ε) and magnetic permeability (μ)
- Refractive index relates vacuum speed to medium speed
- Medium properties determine how waves propagate and interact with material
- Different media have different ε and μ values affecting wave propagation

### Formulas
- `c_M = 1/√(εμ)` - speed in medium with permittivity ε and permeability μ
- `n_M = c/c_M = √(εᵣμᵣ)` - refractive index (εᵣ and μᵣ are relative values)
- `c_M = c/√(εᵣμᵣ)` - speed in medium in terms of relative properties
- `λ_M = λ₀/n_M` - wavelength in medium
- `ν_M = ν` - frequency remains constant across media

### Important Notes
- Refractive index typically > 1 for materials (slows down waves)
- Permittivity and permeability are material-specific properties
- For non-magnetic materials, μᵣ ≈ 1, so n ≈ √εᵣ

### Worked Example
**Q:** An EM wave has wavelength 0.67 m in vacuum. It enters a medium with refractive index 1.5. Find the wavelength in the medium.
**A:**
- Wavelength in vacuum: λ₀ = 0.67 m
- Refractive index: n = 1.5
- Wavelength in medium: λ_M = λ₀/n = 0.67/1.5 = 0.447 m

---

## 3. Energy Density and Intensity of EM Waves

### Concepts
- EM waves carry both electric and magnetic energy density
- In vacuum, electric and magnetic energy contributions are equal
- Energy density varies sinusoidally with position and time
- Intensity is the average power per unit area perpendicular to propagation
- Poynting vector describes energy flow direction and magnitude

### Formulas
- `U = U_E + U_B = (1/2)ε₀E² + (1/2μ₀)B²` - total energy density
- `U_avg = (1/4)ε₀E₀² = (1/4μ₀)B₀²` - average energy density
- `I = (1/2)ε₀cE₀²` - intensity in vacuum
- `I = (1/2μ₀c)B₀²` - alternative intensity formula
- `I = (E₀B₀)/(2μ₀)` - intensity from field amplitudes

### Important Notes
- Electric and magnetic energy contributions are equal in magnitude (U_E = U_B)
- Average intensity is 1/2 of peak intensity
- Intensity depends on square of field amplitude
- In vacuum: E₀/B₀ = c

### Worked Example
**Q:** Peak electric field of EM wave is 100 V/m. Find average intensity (ε₀ = 8.85 × 10⁻¹² F/m, c = 3 × 10⁸ m/s).
**A:**
- E₀ = 100 V/m
- I_avg = (1/2)ε₀cE₀² = (1/2) × 8.85 × 10⁻¹² × 3 × 10⁸ × (100)²
- I_avg ≈ 13.3 W/m²

---

## 4. Electromagnetic Spectrum and Applications

### Concepts
- Electromagnetic spectrum classified by frequency/wavelength ranges
- Each region (radio, microwave, IR, visible, UV, X-ray, gamma) has distinct production and detection methods
- Frequency increases and wavelength decreases across spectrum
- Applications vary: communication, heating, imaging, medical, etc.
- All EM waves travel at same speed in vacuum but interact differently with matter

### Formulas
- Frequency and wavelength relationships: `f = c/λ` where c = 3 × 10⁸ m/s
- Energy of photon: `E = hf = hc/λ` (h = 6.63 × 10⁻³⁴ J·s)

### Important Notes
- Radio waves: 3 × 10³ to 3 × 10¹¹ Hz (used in communication)
- Microwaves: 10¹⁰ to 10¹² Hz (cooking, radar)
- Infrared: 10¹² to 4 × 10¹⁴ Hz (heat, thermal imaging)
- Visible: 4 × 10¹⁴ to 8 × 10¹⁴ Hz (400-700 nm)
- Ultraviolet: 8 × 10¹⁴ to 10¹⁷ Hz (sterilization, detection)
- X-rays: 10¹⁷ to 10¹⁹ Hz (medical imaging)
- Gamma rays: > 10¹⁹ Hz (nuclear origin)

### Worked Example
**Q:** Calculate wavelength of 50 MHz radio wave.
**A:**
- f = 50 × 10⁶ Hz
- λ = c/f = (3 × 10⁸)/(50 × 10⁶) = 6 m

---

## 5. Displacement Current and Maxwell's Equations

### Concepts
- Displacement current: current due to changing electric field (not conduction current)
- Conduction current: actual flow of charges through conductors
- Total current in capacitor plates includes both conduction and displacement
- Maxwell's equations unify electric and magnetic phenomena
- Time-varying electric field generates magnetic field even without physical current

### Formulas
- `i_d = ε₀(dΦ_E/dt)` - displacement current
- `dΦ_E/dt = A(dE/dt)` - rate of change of electric flux
- `∮E·dA = Q/ε₀` - Gauss's law
- `∮B·dA = 0` - Gauss's law for magnetism
- `∮E·dl = -dΦ_B/dt` - Faraday's law
- `∮B·dl = μ₀i_c + μ₀ε₀(dΦ_E/dt)` - Ampère-Maxwell law

### Important Notes
- Displacement current has same dimensions as conduction current
- Maxwell's generalization shows changing E-field produces B-field
- Inside capacitor: i_c = 0 but i_d ≠ 0
- Outside capacitor: i_c ≠ 0 but i_d = 0

### Worked Example
**Q:** Between parallel plate capacitor plates, electric field increases from 0 to 10⁶ V/m in 1 μs. Area = 1 m². Find displacement current (ε₀ = 8.85 × 10⁻¹² F/m).
**A:**
- dE/dt = 10⁶/(10⁻⁶) = 10¹² V/(m·s)
- i_d = ε₀A(dE/dt) = 8.85 × 10⁻¹² × 1 × 10¹² = 8.85 A

---

## 6. Magnetic Field Lines and Gauss's Law for Magnetism

### Concepts
- Magnetic field lines form closed loops (no magnetic monopoles)
- Field line density represents field strength
- Magnetic field lines never cross or intersect
- Direction given by north pole seeking behavior
- Net magnetic flux through any closed surface is zero

### Formulas
- `∮B·ds = 0` - Gauss's law for magnetism (zero net flux)
- Magnetic field on axis of solenoid: `B = μ₀nI` (n = turns per unit length)
- Bar magnet far field: `B = (μ₀/4π)(2m/r³)` (on axis)
- Bar magnet equatorial field: `B = (μ₀/4π)(m/r³)` (on equatorial line)

### Important Notes
- No isolated magnetic poles exist (unlike electric monopoles)
- Field lines enter at south pole, exit at north pole
- Isolated magnetic poles cannot be created
- Magnetic flux is always conserved in closed systems

### Worked Example
**Q:** Bar magnet has pole strength 5 A·m. Find magnetic field at 10 cm on axis.
**A:**
- m = 5 A·m, r = 0.1 m
- B = (μ₀/4π)(2m/r³) = (10⁻⁷) × 2 × 5 / (0.001)
- B = 10 × 10⁻³ T = 0.01 T

---

## 7. Magnetic Moment and Bar Magnet Properties

### Concepts
- Magnetic moment is product of pole strength and magnetic length
- All magnetic phenomena arise from magnetic dipoles at atomic/molecular level
- Bar magnet behavior equivalent to solenoid at large distances
- Magnetic moment determines torque in external field
- Magnetic length is about 0.84 times geometric length

### Formulas
- `M = m × 2l` - magnetic moment (m = pole strength, 2l = magnetic length)
- `m = M/(2l)` - pole strength from magnetic moment
- Relationship: `Magnetic length/Geometric length ≈ 0.84`
- `B = (μ₀/4π)(2M/r³)` - field on axis of bar magnet (far field)
- `B = (μ₀/4π)(M/r³)` - field on equatorial line (far field)

### Important Notes
- SI unit of magnetic moment: A·m²
- Bar magnet produces same external field as equivalent solenoid
- Magnetic moment is a vector quantity (direction: S to N pole)
- Far field depends on total moment, not individual pole strength

### Worked Example
**Q:** Bar magnet of magnetic length 4 cm has pole strength 10 A. Find magnetic moment.
**A:**
- m = 10 A, 2l = 0.04 m
- M = m × 2l = 10 × 0.04 = 0.4 A·m²

---

## 8. Magnetic Dipole in Uniform Field

### Concepts
- Magnetic dipole experiences torque in non-uniform field
- Torque tends to align dipole with field
- Magnetic potential energy depends on angle between moment and field
- Equilibrium positions: parallel (stable) and antiparallel (unstable)
- Dipole oscillates about equilibrium with simple harmonic motion

### Formulas
- `τ = m × B = mB sin θ` - torque on magnetic dipole (θ = angle from field)
- `U = -m·B = -mB cos θ` - potential energy
- `ω = √(mB/I)` - angular frequency of oscillation (I = moment of inertia)
- `T = 2π√(I/(mB))` - period of oscillation
- `d²θ/dt² = -(mB/I)θ` - equation for small oscillations (SHM)

### Important Notes
- Minimum potential energy (U = -mB) when dipole aligned with field
- Maximum potential energy (U = +mB) when antiparallel
- Restoring torque acts for small angles: τ = -(mB sin θ) ≈ -(mB)θ
- Period increases with moment of inertia, decreases with stronger field

### Worked Example
**Q:** Magnetic dipole (m = 0.5 A·m²) in uniform field B = 0.4 T oscillates with period 2 s. Find moment of inertia.
**A:**
- T = 2π√(I/(mB))
- 2 = 2π√(I/(0.5 × 0.4))
- 2 = 2π√(I/0.2)
- 1/π = √(I/0.2)
- I = 0.2/π² ≈ 0.02 kg·m²

---

## 9. Earth's Magnetic Field and Elements

### Concepts
- Earth's magnetic field arises from molten iron convection in outer core (dynamo effect)
- Magnetic north pole located near geographic south pole
- Field components: vertical (Z) and horizontal (H)
- Declination: angle between geographic and magnetic meridians
- Inclination (dip): angle between field and horizontal plane

### Formulas
- `B = √(H² + Z²)` - total magnetic field magnitude
- `tan δ = Z/H` - angle of dip (inclination)
- `tan θ = declination angle` - deviation from geographic north
- At poles: angle of dip = 90°; at equator: angle of dip = 0°
- Declination varies with location (ranges from 0° to 30°+)

### Important Notes
- Magnetic field strength ≈ 10⁻⁵ T (varies by location)
- Magnetic north: located near geographic south (confusing nomenclature!)
- Magnetic equator: line where dip angle = 0°
- Magnetic meridian: vertical plane through magnetic poles
- Geographic meridian: vertical plane through geographic poles

### Worked Example
**Q:** At a location, horizontal component H = 0.35 G and angle of dip δ = 22°. Find total field.
**A:**
- tan δ = Z/H
- Z = H tan δ = 0.35 × tan 22° = 0.35 × 0.404 = 0.141 G
- B = √(H² + Z²) = √(0.35² + 0.141²) = √(0.1225 + 0.0199) = √0.1424 = 0.377 G

---

## 10. Magnetization and Magnetic Intensity

### Concepts
- Magnetization (M): net magnetic moment per unit volume of material
- Magnetic intensity (H): represents external field source
- Magnetic induction (B): total field including material response
- Three quantities interrelated: B = μ₀(H + M)
- Susceptibility measures how easily material magnetizes

### Formulas
- `M = m_net/V` - magnetization (A/m)
- `H = B/μ₀ - M` - magnetic intensity relation
- `B = μ₀(H + M)` - magnetic induction
- `χ = M/H` - magnetic susceptibility (dimensionless)
- `μ = μ₀(1 + χ)` - relative permeability
- `B = μH = μ₀μᵣH` - induction in terms of permeability

### Important Notes
- Magnetization is induced by external field (except permanent magnets)
- In vacuum: M = 0, so B = μ₀H
- Material response (M) is proportional to external field (H) for linear materials
- Susceptibility sign indicates type: negative (diamagnetism), small positive (paramagnetism), large positive (ferromagnetism)

### Worked Example
**Q:** Material with magnetic intensity H = 1000 A/m develops magnetization M = 500.6 A/m. Find susceptibility and relative permeability.
**A:**
- χ = M/H = 500.6/1000 = 0.5006 ≈ 500
- μᵣ = 1 + χ = 1 + 500 = 501

---

## 11. Classification of Magnetic Materials

### Concepts
- Materials classified by magnetic response: diamagnetism, paramagnetism, ferromagnetism
- Diamagnetism: repelled by magnetic field, χ < 0
- Paramagnetism: weakly attracted, χ small and positive
- Ferromagnetism: strongly attracted, χ large and positive, retains magnetism
- Atomic structure and electron configuration determine magnetic properties

### Formulas
- Diamagnetism: χ ≈ 0 to -1 (small negative values)
- Paramagnetism: 0 < χ < 1 (positive but < 1)
- Ferromagnetism: χ >> 1 (large positive)
- Curie's law (paramagnetism): `χ = C/T` (C = Curie constant, T = temperature in K)
- Curie temperature (ferromagnetism): transition temperature above which material becomes paramagnetic

### Important Notes
- Diamagnetic: field lines pushed out (examples: Bi, Cu, H₂O)
- Paramagnetic: field lines concentrated inside (examples: Al, Mn, O₂)
- Ferromagnetic: strong concentration, domains present (examples: Fe, Ni, Co)
- Superconductors: perfect diamagnetism (χ = -1, μᵣ = 0)

### Worked Example
**Q:** Paramagnetic material has χ = 0.002 at 300 K. Estimate χ at 150 K using Curie's law.
**A:**
- Curie's law: χ = C/T
- At 300 K: 0.002 = C/300, so C = 0.6
- At 150 K: χ = 0.6/150 = 0.004

---

## 12. Hysteresis and Ferromagnetic Properties

### Concepts
- Hysteresis: lag in magnetization behind applied field changes
- B-H loop shows energy dissipation in ferromagnetic materials
- Remanence: magnetization remaining after field removed
- Coercivity: reverse field needed to reduce magnetization to zero
- Domain structure explains ferromagnetic behavior

### Formulas
- Area of B-H loop = energy dissipated per unit volume per cycle
- Retentivity: remaining magnetic induction (B_r)
- Coercivity: reverse field at zero magnetization (H_c)
- Hard ferromagnets: high retentivity and coercivity
- Soft ferromagnets: low retentivity and coercivity

### Important Notes
- Wider B-H loop indicates greater energy loss
- Hard magnets used for permanent magnets (alnico, samarium cobalt)
- Soft iron used for electromagnets (low hysteresis loss)
- Domain alignment contributes to magnetization behavior
- Heating above Curie temperature destroys ferromagnetism

### Worked Example
**Q:** Ferromagnetic core magnetized by field H = 500 A/m gives B = 1.2 T. Upon field removal, B_r = 0.5 T remains. Find relative permeability and energy dissipated (assuming linear approximation to coercivity H_c = -200 A/m).
**A:**
- Initial relative permeability: μᵣ = B/(μ₀H) = 1.2/(4π × 10⁻⁷ × 500) ≈ 1909
- Remanence = 0.5 T
- Energy loss approximately proportional to loop area

---

## 13. Solenoid as Magnetic Dipole

### Concepts
- Long solenoid with n turns per unit length creates uniform internal field
- Far field of solenoid resembles bar magnet
- Magnetic moment of solenoid: M = nIAl (n = turns per length, I = current, A = area, l = length)
- Solenoid and bar magnet produce equivalent external fields at large distances
- Internal field uniform, external field same as magnetic dipole

### Formulas
- `B_internal = μ₀nI` - field inside long solenoid
- `M = nIA × l = n(Al)I` - magnetic moment of solenoid
- `B_axis = (μ₀/4π)(2M/r³)` - axial field far from solenoid
- `B_equator = (μ₀/4π)(M/r³)` - equatorial field far from solenoid
- Magnetic field at point P: `dB = (μ₀nIa²dx)/(2((r-x)² + a²)^(3/2))`

### Important Notes
- Internal field independent of solenoid length or radius
- Solenoid-magnet equivalence holds for external field only
- Total turns: N = n × (length)
- Magnetic moment increases with more turns, larger current, or larger area

### Worked Example
**Q:** Solenoid has 2000 turns, cross-sectional area 1.6 × 10⁻⁴ m², carries 4 A current. Find magnetic moment.
**A:**
- Total turns N = 2000
- Area A = 1.6 × 10⁻⁴ m²
- Current I = 4 A
- M = NIA = 2000 × 4 × 1.6 × 10⁻⁴ = 1.28 J/T

---

## 14. Interaction Between Magnetic Fields

### Concepts
- Multiple magnetic dipoles interact with combined field
- Superposition principle applies: total field is vector sum
- Field from one dipole affects torque on another
- Magnetic interactions follow inverse cube law at large distances
- Equilibrium and oscillatory behaviors depend on relative field orientations

### Formulas
- Total field: `B_total = B_dipole1 + B_dipole2 + ...`
- Field on axis from dipole: `B = (μ₀/4π)(2M/r³)`
- Field on equator from dipole: `B = (μ₀/4π)(M/r³)`
- Torque from net field: `τ = M × B_net`
- Interaction energy: `U = -M·B_ext`

### Important Notes
- Fields add vectorially (must consider direction and magnitude)
- Two parallel dipoles: one axis creates field at other dipole location
- Angle between dipoles affects interaction strength
- Can achieve equilibrium positions where net torque is zero

### Worked Example
**Q:** Two identical magnetic dipoles (m = 1.2 × 10⁻² J/T each) placed 2 m apart along their axis. Find field at one due to other and resulting torque if placed in earth's field (B_E = 0.16 G).
**A:**
- Distance r = 2 m, moments aligned
- B₁₂ = (μ₀/4π)(2M/r³) = 10⁻⁷ × (2 × 0.012)/8 = 3 × 10⁻¹⁰ T
- This field causes torque on second dipole: τ = M × B = 1.2 × 10⁻² × 3 × 10⁻¹⁰

---

## 15. Permanent and Electromagnets

### Concepts
- Permanent magnets retain magnetism after magnetizing field removed
- Electromagnets rely on current-carrying coils for magnetic field
- Material selection critical for performance (hard vs soft ferromagnets)
- Permanent magnets: high retentivity, high coercivity
- Electromagnets: low retentivity, low coercivity for easy on/off

### Formulas
- Electromagnet field inside: `B = μ₀nI` (proportional to current)
- Permanent magnet: field depends on previous magnetization history
- Field strength decay of permanent magnet: related to environmental factors
- Selection criteria based on hysteresis curve parameters

### Important Notes
- Permanent magnets (alnico, iron, lodestone) maintain properties long-term
- Electromagnets (soft iron cores) provide controllable, switchable fields
- Hard magnets: small hysteresis loss, retain magnetism
- Soft magnets: easy magnetization/demagnetization for transformers
- Temperature affects all magnetic materials (Curie temperature limit)

### Worked Example
**Q:** Compare electromagnet (soft iron, H_c = 50 A/m) and permanent magnet (alnico, H_c = 50,000 A/m) for retaining magnetism.
**A:**
- Electromagnet: requires applied field to maintain magnetism; loses magnetism quickly when current stops
- Permanent magnet: retains magnetism without applied field due to high coercivity
- For applications needing sustained field without power: permanent magnet
- For controllable on/off field: electromagnet preferred

---

## Questions

### ANSWER KEYS (Reference)

**EM WAVES**
| Q# | Level-1 | JEE Main |
|----|---------|----------|
| 1 | C | C |
| 2 | A | B |
| 3 | B | C |
| 4 | A | B |
| 5 | D | A |
| 6 | C | D |
| 7 | B | A |
| 8 | B | A |
| 9 | A | A |
| 10 | B | B |
| 11 | D | B |
| 12 | B | D |
| 13 | C | B |
| 14 | B | C |
| 15 | A | C |

**EM WAVES (continued)**
| Q# | JEE Main |
|----|----------|
| 16 | A |
| 17 | D |
| 18 | B |
| 19 | A |
| 20 | C |
| 21 | C |
| 22 | B |
| 23 | C |
| 24 | A |
| 25 | D |
| 26 | D |
| 27 | D |
| 28 | A |
| 29 | D |
| 30 | B |
| 31 | A |
| 32 | A |
| 33 | B |
| 34 | A |
| 35 | D |
| 36 | B |
| 37 | C |
| 38 | C |
| 39 | B |
| 40 | A |
| 41 | C |

**MAGNETISM & MATTER**
| Q# | Level-1 | JEE Main |
|----|---------|----------|
| 1 | B | B |
| 2 | A | A |
| 3 | C | D |
| 4 | C | A |
| 5 | D | B |
| 6 | C | B |
| 7 | B | A |
| 8 | A | C |
| 9 | B | C |
| 10 | D | C |
| 11 | B | D |
| 12 | A | D |
| 13 | B | B |
| 14 | C | D |
| 15 | D | C |

**MAGNETISM & MATTER (continued)**
| Q# | JEE Main |
|----|----------|
| 16 | A |
| 17 | B |
| 18 | D |
| 19 | A |
| 20 | None |
| 21 | C |
| 22 | A |
| 23 | D |
| 24 | D |
| 25 | A |
| 26 | D |
| 27 | A |
| 28 | C |
| 29 | B |
| 30 | A |

---

### EM WAVES: Questions

**Level-1**

**1.** The magnetic field of an EM wave is given by: B = 60 sin(π × 10⁸x + 3 × 10¹¹t) k (all quantities are in SI units). The wavelength of the wave is:
(A) 2 km (B) 2 m (C) 2 mm (D) 2 μm

**2.** The transverse nature of electromagnetic waves is evident from:
(A) polarization (B) interference (C) reflection (D) diffraction

**3.** The relative permittivity and relative permeability of a medium are ϵᵣ and μᵣ respectively. The refractive index of the medium is:
(A) 1/√(μᵣϵᵣ) (B) √(μᵣϵᵣ) (C) √(ϵᵣ/μᵣ) (D) μᵣϵᵣ

**4.** The refractive index and dielectric constant of a medium are 1.5 and 1.8 respectively. The relative permeability of the medium is:
(A) 3 (B) 2.7 (C) 1.67 (D) 1.25

**5.** The electric field of an electromagnetic wave is given by: E = E₀ sin(ωt - kz) î. The magnetic field of the same wave is:
(A) B = E₀(k/ω) sin(ωt - kz) î (B) B = E₀(k/ω) sin(ωt - kz) ĵ (C) B = E₀(ω/k) sin(ωt - kz) î (D) B = E₀(ω/k) sin(ωt - kz) ĵ

**6.** An electromagnetic wave is travelling towards the +X direction. At a particular point, the magnetic field of the wave points in the -Y direction. Then, at the same point, the electric field of the wave points in:
(A) the +X direction (B) the -X direction (C) the +Z direction (D) the -Z direction

**7.** An electromagnetic wave is generated due to oscillation of a charged particle with a frequency 10⁹ Hz. The wavelength of this electromagnetic wave in vacuum is:
(A) 3 m (B) 30 cm (C) 3 cm (D) 3 mm

**8.** The rms value of the intensity of the magnetic field of an EM wave propagating in a medium of relative electric permittivity 1.44 and relative magnetic permeability 1 is 1 μT. The intensity of the EM wave (in W / m²) is:
(Permeability of vacuum, μ₀ = 4π × 10⁻⁷ N / A²)
(A) 250/π (B) 625/π (C) 2500/π (D) 5000/π

**9.** The intensity I of an EM wave propagating in vacuum is given in terms of the rms value of the electric field and the rms value of the magnetic field as:
(A) I = √(ϵ₀/μ₀) E²ᵣₘₛ (B) I = √(μ₀/ϵ₀) B²ᵣₘₛ (C) Both (A) and (B) (D) Neither (A) nor (B)

**10.** A plane electromagnetic wave, Eₘ = 100 cos(6 × 10⁸t + 4 × 10⁻ y) / m Propagates in a medium of refractive index:
(A) 1.5 (B) 2.0 (C) 2.4 (D) 4.0

**11.** An electromagnetic wave is propagating along the +Z direction. Then, the respective directions along which the electric field and magnetic field of this wave oscillate CANNOT be along the unit vectors:
(A) (-î) and (-ĵ) (B) (-î - ĵ)/√2 and (î - ĵ)/√2 (C) (-ĵ) and î (D) (-î + ĵ)/√2 and (î + ĵ)/√2

**12.** The electric field part of an electromagnetic wave in a medium is represented by Eᵧ = 0, Eⱼ = 2.5(N/C) cos[2π × 10⁶ rad/s t - π × 10⁻² rad/m x]; Eₓ = 0. The wave is:
(A) Moving along X-direction with frequency 10⁶ Hz and wave length 100 m (B) Moving along X-direction with frequency 10⁶ Hz and wavelength 200 m (C) Moving along - X-direction with frequency 10⁶ Hz and wavelength 200 m (D) Moving along Y-direction with frequency 2π × 10⁶ and wavelength 200 m

**13.** An electromagnetic wave passes from vacuum into a non-magnetic medium of relative permittivity ϵᵣ = 4. Which of these options is correct?
(A) wavelength is doubled and the frequency remains unchanged (B) wavelength is doubled and frequency becomes half (C) wavelength is halved and frequency remains unchanged (D) wavelength and frequency both remains unchanged

**14.** A radiation of energy E falls normally on a perfectly reflecting surface. The momentum transferred to the surface is:
(A) E/c (B) 2E/c (C) Ec (D) E/c²

**15.** Which of the following radiations has the least wavelength?
(A) γ-rays (B) Ultraviolet (C) Microwaves (D) X rays

---

**JEE Main (Archive)**

**1.** An electromagnetic wave of frequency ν = 3.0 MHz passes from vacuum into a dielectric medium with permittivity ε = 4.0. Then
(A) wavelength is doubled and the frequency remains unchanged (B) wavelength is doubled and frequency becomes half (C) wavelength is halved and frequency remains unchanged (D) wavelength and frequency both remain unchanged

**2.** The rms value of the electric field of the light coming from the Sun is 720 N/C. The average total energy density of the electromagnetic wave is:
(A) 3.3 × 10⁻³ J/m³ (B) 4.58 × 10⁻⁶ J/m³ (C) 6.37 × 10⁻⁹ J/m³ (D) 81.35 × 10⁻¹² J/m³

**3.** This question has Statement-1 and Statement-2. Of the four choice given after the statements, choose the one that best describes the two statements.
Statement-1: Out of the radio waves and microwaves, the radio waves undergo more diffraction.
Statement-2: Radio waves have greater frequency compared to microwaves.
(A) Statement 1 is true, Statement 2 is true, Statement 2 is the correct explanation of Statement-1 (B) Statement 1 is false, Statements 2 is true (C) Statement 1 is true, Statement 2 is false (D) Statement 1 is true, Statement 2 is true, Statement 2 is not the correct explanation of Statement-1

**4.** Which of the following modulated signal has best noise-tolerance?
(A) long-wave (B) short wave (C) medium-wave (D) amplitude-modulated

**5.** A plane electromagnetic wave in a non magnetic dielectric medium is given by Ē = Ē₀(4 × 10⁻⁷ x - 50t) with distance being in meter and time in seconds. The dielectric constant of the medium is:
(A) 2.4 (B) 5.8 (C) 8.2 (D) 4.8

**6.** Select the correct statement from the following:
(A) Electromagnetic waves cannot travel in vacuum (B) Electromagnetic waves are longitudinal waves (C) Electromagnetic waves are produced by charges moving with uniform velocity (D) Electromagnetic waves carry both energy and momentum as they propagate through space

**7.** The magnetic field in a travelling electromagnetic wave has a peak value of 20 nT. The peak value of electric field strength is:
(A) 6 V/m (B) 9 V/m (C) 12 V/m (D) 3 V/m

**8.** A red LED emits light of 0.1 watt uniformly around it. The amplitude of the electric field of the light at a distance of 1 m from the diode is:
(A) 2.45 V/m (B) 5.48 V/m (C) 7.75 V/m (D) 1.73 V/m

**9.** During the propagation of electromagnetic waves in a medium:
(A) Electric energy density is equal to the magnetic energy density (B) Both electric and magnetic energy densities are zero (C) Electric energy density is double of the magnetic energy density (D) Electric energy density is half of the magnetic energy density

**10.** Match the List-I (Phenomenon associated with electromagnetic radiation) with List-II (part of electromagnetic spectrum) and select the correct code from the choices given below the lists:
List-I: I. Doublet of sodium II. Wavelength corresponding to temperature associated with the isotropic radiation filling all space III. Wavelength emitted by atomic hydrogen in interstellar space IV. Wavelength of radiation arising from two close levels in energy of hydrogen spectra
List-II: A. Visible radiation B. Microwave C. Short radio wave D. X-rays
(A) (I) - (A), (II) - (B), (III) - (C), (IV) - (C) (B) (I) - (A), (II) - (B), (III) - (B), (IV) - (C) (C) (I) - (B), (II) - (A), (III) - (D), (IV) - (A) (D) (I) - (D), (II) - (C), (III) - (A), (IV) - (B)

**11.** An electromagnetic wave of frequency 1 × 10¹⁴ hertz is propagating along z-axis. The amplitude of electric field is 4 V/m. If ε₀ = 8.8 × 10⁻¹² C² / N m², then average energy density of electric field will be:
(A) 35.2 × 10⁻¹³ J/m³ (B) 35.2 × 10⁻¹² J/m³ (C) 35.2 × 10⁻¹¹ J/m³ (D) 35.2 × 10⁻¹⁰ J/m³

**12.** An EM wave from air enters a medium. The electric fields are: E₁ = E₀₁ x cos[2πν(z/c - t)] in air and E₂ = E₁₀₂ x cos[(2z - ct)] in medium, where the wave number k and frequency ν refer to their values in air. The medium is non-magnetic. If εₙ and εₘ refer to relative permittivity's of air and medium respectively, which of the following options is correct?
(A) εₙ/εₘ = 1/2 (B) εₙ/εₘ = 4 (C) εₙ/εₘ = 2 (D) εₙ/εₘ = 1/4

**13.** The energy associated with electric field is (Uₑ) and with magnetic field is (Uₕ) for an electromagnetic wave in free space. Then:
(A) Uₑ > Uₕ (B) Uₑ = Uₕ (C) Uₑ = Uₕ/2 (D) Uₑ < Uₕ

**14.** A plane electromagnetic wave of frequency 50 MHz travels in free space along the positive x-direction. At a particular point in space and time, Ē = 6.3 J V / m. The corresponding magnetic field B̄, at that point will be:
(A) 6.3 × 10⁻⁸ kT (B) 18.9 × 10⁻⁸ kT (C) 2.1 × 10⁻⁸ kT (D) 18.9 × 10⁸ kT

**15.** The electric field of plane polarized electromagnetic wave in free space at time t = 0 is given by an expression Ē(x,y) = 10 j cos[(6x + 8z)]. The magnetic field B̄(x,z,t) is given by: (c is the velocity of light)
(A) (1/c)(6k̂ + 8î) cos[(6x - 8z - 10ct)] (B) (1/c)(6k̂ + 8î) cos[(6x + 8z - 10ct)] (C) (1/c)(6k̂ - 8î) cos[(6x + 8z - 10ct)] (D) (1/c)(6k̂ - 8î) cos[(6x + 8z + 10ct)]

**16.** If the magnetic field of a plane electromagnetic wave is given by (The speed of light = 3 × 10⁸ m / s) B = 100 × 10⁻⁶ sin[2π × 2 × 10¹⁵(t - x/c)] Then the maximum electric field associated with it is:
(A) 3 × 10⁴ N / C (B) 6 × 10⁴ N / C (C) 4.5 × 10⁴ N / C (D) 4 × 10⁴ N / C

**17.** A 27mW laser beam has a cross-sectional area of 10mm². The magnitude of the maximum electric field in this electromagnetic wave is given by:
(Given permittivity of space ε₀ = 9 × 10⁻¹² SI unit, Speed of light c = 3 × 10⁸ m / s)
(A) 1kV / m (B) 0.7 kV / m (C) 2 kV / m (D) 1.4 kV / m

**18.** An electromagnetic wave of intensity 50Wm⁻² enters in a medium of refractive index 'n' without any loss. The ratio of the magnitudes of electric fields, and the ratio of the magnitudes of magnetic fields of the wave before and after entering into the medium are respectively, given by:
(A) (√n, √n) (B) (√n, 1/√n) (C) (1/√n, 1/√n) (D) (1/√n, √n)

**19.** The mean intensity of radiation on the surface of the Sun is about 10⁸W/m². The rms value of the corresponding magnetic field is:
(A) 10⁻⁴ T (B) 10⁻² T (C) 10² T (D) 1 T

**20.** A light wave is incident normally on a glass slab of refractive index 1.5. If 4% of light gets reflected and the amplitude of the electric field of the incident light is 30 V/m, then the amplitude of the electric field for the wave propagating in the glass medium will be:
(A) 10 V/m (B) 30 V/m (C) 24 V/m (D) 6 V/m

**21.** A plane electromagnetic wave travels in free space along the x-direction. The electric field component of the wave at a particular point of space and time is E = 6Vm⁻¹ along y-direction. Its corresponding magnetic field component, B̄ would be:
(A) 6 × 10⁻⁸ T along x-direction (B) 2 × 10⁻⁸ T along y-direction (C) 2 × 10⁻⁸ T along z-direction (D) 6 × 10⁻⁸ T along z-direction

**22.** The magnetic field of an electromagnetic wave is given by: B̄ = 1.6 × 10⁻⁶ cos[2 × 10⁷ z + 6 × 10¹⁵t](2î + ĵ) W b/m²
The associated electric field will be:
(A) Ē = 4.8 × 10² cos[2 × 10⁷ z + 6 × 10¹⁵t](î - 2ĵ) V/m (B) Ē = 4.8 × 10² cos[2 × 10⁷ z + 6 × 10¹⁵t](-î + 2ĵ) V/m (C) Ē = 4.8 × 10² cos[2 × 10⁷ z - 6 × 10¹⁵t](-2ĵ - î) V/m (D) Ē = 4.8 × 10² cos[2 × 10⁷ z - 6 × 10¹⁵t](2î + ĵ) V/m

**23.** The magnetic field of a plane electromagnetic wave is given by: B̄ = B₀{î cos(kz - ωt) + B₁ j cos(kz + ωt)} where B₀ = 3 × 10⁻⁶ T and B₁ = 2 × 10⁻⁶ T. The rms value of the force experienced by a stationary charge Q = 10⁻³ C at z = 0 is closed to:
(A) 0.1 N (B) 3 × 10⁻² N (C) 0.6 N (D) 0.9 N

**24.** The electric field of a plane electromagnetic wave is given by Ē = E₀ cos(kz) cos(ωt). The corresponding magnetic field B̄ is then given by:
(A) B̄ = (E₀/c) j sin(kz) sin(ωt) (B) B̄ = (E₀/c) k sin(kz) cos(ωt) (C) B̄ = (E₀/c) j sin(kz) cos(ωt) (D) B̄ = (E₀/c) j cos(kz) sin(ωt)

**25.** A plane electromagnetic wave having a frequency ν = 23.9 GHz propagates along the positive z-direction in free space. The peak value of the electric field is 60 V/m. Which among the following is the acceptable magnetic field component in the electromagnetic wave?
(A) B̄ = 60 sin(0.5 × 10³ x + 1.5 × 10¹¹ t)k (B) B̄ = 2 × 10⁷ sin(0.5 × 10³ z + 1.5 × 10¹¹ t)î (C) B̄ = 2 × 10⁻⁷ sin(1.5 × 10² x + 0.5 × 10¹¹ t)ĵ (D) B̄ = 2 × 10⁻⁷ sin(0.5 × 10³ z - 1.5 × 10¹¹ t)î

**26.** An electromagnetic wave is represented by the electric field Ē = E₀ n̂ sin[ωt + (6ŷ - 8ẑ)]. Taking unit vectors in x, y and z directions to be î, ĵ, k̂, the direction of propagation ŝ, is:
(A) ŝ = (3î - 4ĵ)/5 (B) ŝ = (4ĵ - 3k̂)/5 (C) ŝ = (-4k̂ + 3ĵ)/5 (D) ŝ = (-3ĵ + 4k̂)/5

**27.** If the magnetic field in a plane electromagnetic wave is given by B̄ = 3 × 10⁻⁸ sin(1.6 × 10³ x + 48 × 10¹⁶ t)T, then what will be expression for electric field?
(A) Ē = (3 × 10⁻⁸ sin(1.6 × 10³ x + 48 × 10¹⁶)μV / m) (B) Ē = (3 × 10⁻⁸ sin(1.6 × 10³ x + 48 × 10¹⁶)ĵV / m) (C) Ē = (60 sin(1.6 × 10³ x + 48 × 10¹⁶)kV / m) (D) Ē = (9 sin(1.6 × 10³ x + 48 × 10¹⁶)μkV / m)

**28.** A plane electromagnetic wave of frequency 25 GHz is propagating in vacuum along the z-direction. At a particular point in space and time, the magnetic field is given by B̄ = 5 × 10⁻⁸ jT. The corresponding electric field Ē is (speed of light c = 3 × 10⁸ ms⁻¹)
(A) 15iV / m (B) -15iV / m (C) 1.66 × 10⁻¹⁶iV / m (D) -1.66 × 10⁻¹⁶ iV / m

**29.** A plane electromagnetic wave is propagating along the direction (î + ĵ)/√2, with its polarization along the direction k̂. The correct form of the magnetic field of the wave would be (there B₀ is an appropriate constant):
(A) B₀(î + ĵ)/√2 cos(ωt - k(î + ĵ)/√2) (B) B₀ k cos(ωt - k(î + ĵ)/√2) (C) B₀(î - ĵ)/√2 cos(ωt + k(î + ĵ)/√2) (D) B₀(î - ĵ)/√2 cos(ωt - k(î + ĵ)/√2)

**30.** The electric field of a plane electromagnetic wave is given by Ē = E₀((î + ĵ)/√2) cos(kx + ωt). At t = 0, a positively charged particle is at the point (x,y,z) = (0,0, π/k). If its instantaneous velocity at (t = 0) is v₀ ĉ, the force acting on it due to the wave is:
(A) zero (B) antiparallel to (î + ĵ)/√2 (C) parallel to k̂ (D) parallel to (î + ĵ)/√2

**31.** The electric fields of two plane electromagnetic plane waves in vacuum are given by Ē₁ = E₀j cos(ωt - Kx) and Ē₂ = E₀k cos(ωt - ky). At t = 0, a particle of charge q is at origin with a velocity ū = 0.8cĵ (c is the speed of light in vacuum). The instantaneous force experienced by the particle is:
(A) E₀q(-0.8î - ĵ + 0.4k) (B) E₀q(0.8î + ĵ + 0.2k) (C) E₀q(-0.8î + ĵ + k) (D) E₀q(0.4î - 3ĵ + 0.8k)

**32.** In a plane electromagnetic wave, the directions of electric field and magnetic field are represented by k̂ and 2î - 2ĵ, respectively. What is the unit vector along direction of propagation of the wave?
(A) (1/√5)(2î + ĵ) (B) (1/√2)(ĵ + k̂) (C) (1/√2)(î + ĵ) (D) (1/√6)(î + 2ĵ)

**33.** The magnetic field of a plane electromagnetic wave is B̄ = 3 × 10⁻⁸ sin(200 n(y + ct))T. Where c = 3 × 10⁸ ms⁻¹ is the speed of light. The corresponding electric field is:
(A) Ē = -9 sin(200 π(y + ct))k̂ V/m (B) Ē = 3 × 10⁻⁸ sin(200 π(y + ct))k̂ V/m (C) Ē = -10⁻⁸ sin(200 π(y + ct))k̂ V/m (D) Ē = 9 sin(200 π(y + ct))k̂ V/m

**34.** The electric field of a plane electromagnetic wave propagating along the x direction in vacuum is Ē = E₀ j cos(ωt - kx). The magnetic field B̄, at the moment t = 0 is:
(A) B̄ = E₀√(μ₀ ε₀) cos(kx)ĵ (B) B̄ = (E₀)/(√(μ₀ ε₀)) cos(kx)k̂ (C) B̄ = E₀√(μ₀ ε₀) cos(kx)k̂ (D) B̄ = (E₀)/(√(μ₀ ε₀)) cos(kx)ĵ

**35.** Choose the correct option relating wavelengths of different parts of electromagnetic wave spectrum:
(A) λ_visible < λ_x-ray > λ_radio waves > λ_micro waves (B) λ_radio waves > λ_microwaves > λ_visible > λ_x rays (C) λ_visible < λ_micro waves < λ_radio waves < λ_x rays (D) λ_x-rays < λ_micro waves < λ_radio waves < λ_visible

**36.** The electric field of a plane electromagnetic wave is given by Ē = E₀(x̂ + ĵ) sin(kz - ωt). Its magnetic field will be given by:
(A) (E₀/c)(x̂ - ĵ) sin(kz - ωt) (B) (E₀/c)(-x̂ + ĵ) sin(kz - ωt) (C) (E₀/c)(x̂ - ĵ) cos(kz - ωt) (D) (E₀/c)(x̂ + ĵ) sin(kz - ωt)

**37.** An electron is constrained to move along the y-axis with a speed of 0.1 c (c is the speed of light) in the presence of electromagnetic wave, whose electric field is Ē = 30 ĵ sin(1.5 × 10¹⁵ t - 5 × 10⁻² x) V / m. The maximum magnetic force experienced by the electron will be:
(given c = 3 × 10⁸ ms⁻¹ and electron charge = 1.6 × 10⁻¹⁹ C)
(A) 4.8 × 10⁻¹⁹ N (B) 2.4 × 10⁻¹⁸ N (C) 3.2 × 10⁻¹⁸ N (D) 1.6 × 10⁻¹⁹ N

**38.** The correct match between the entries in column I and column II are:
Column I - Radiation: (a) Microwave (b) Gamma rays (c) A.M. radio waves (d) X-rays
Column II - Wavelength: (i) 100 m (ii) 10⁻¹¹ m (iii) 10⁻¹⁰ m (iv) 10⁻³ m
(A) (a)-(iii), (b)-(ii), (c)-(iv), (d)-(iv) (B) (a)-(iii), (b)-(i), (c)-(iv), (d)-(iii) (C) (a)-(iv), (b)-(ii), (c)-(i), (d)-(iii) (D) (a)-(ii), (b)-(iii), (c)-(iv), (d)-(ii)

**39.** Suppose that intensity of a laser is (315/π) W / m². The rms electric field, in units of V/m associated with this source is close to the nearest integer is _______.
(ε₀ = 8.86 × 10⁻¹² C²Nm⁻²; c = 3 × 10⁸ ms⁻¹)

**40.** For a plane electromagnetic wave, the magnetic field at a point x and time t is B̄(x,t) = |1.2 × 10⁻⁷ sin(0.5 × 10³ x + 1.5 × 10¹¹ t)| k̂ T. The instantaneous electric field Ē corresponding to B̄ is : (speed of light c = 3 × 10⁸ ms⁻¹)
(A) Ē(x, t) = 36 sin[0.5 × 10³ x + 1.5 × 10¹¹ t]k̂ V/m (B) Ē(x, t) = -36 sin[0.5 × 10³ x + 1.5 × 10¹¹ t]ĵ V/m (C) Ē(x, t) = 36 sin[1 × 10³ x + 1.5 × 10¹¹ t]î V/m (D) Ē(x, t) = 36 sin[1 × 10³ x + 0.5 × 10¹¹ t]ĵ V/m

**41.** A plane electromagnetic wave, has frequency of 2.0 × 10¹⁰ Hz and its energy density is 1.02 × 10⁻⁸ J / m³ in vacuum. The amplitude of the magnetic field of the wave is close to (1/(4π ε₀) = 9 × 10⁹ Nm²/C² and speed of light = 3 × 10⁸ ms⁻¹):
(A) 160 nT (B) 150 nT (C) 190 nT (D) 180 nT

---

### MAGNETISM & MATTER: Questions

**Level-1**

**1.** The variation of intensity of magnetisation (I), with respect to the magnetizing field (H), in diamagnetic substance, is described by the graph:
(A) OD (B) OC (C) OB (D) OA

**2.** A bar magnet of magnetic moment M is pivoted at its centre and placed in a uniform magnetic field of strength B. Now, the bar magnet is rotated so that its moment vector makes an angle θ with the direction of the field. In its subsequent motion, the maximum kinetic energy of the magnet is:
(A) MB(1 - cos θ) (B) MB cos θ (C) MB(2 - cos θ) (D) MB(1 + cos θ)

**3.** The magnetic field due to a magnetic dipole at a point on the axis of the dipole varies with the distance from the dipole, r, as:
(A) 1/r (B) 1/r² (C) 1/r³ (D) 1/r⁴

**4.** The radius of the earth is 6.4 × 10⁶ m and its dipole moment is 8 × 10²² A m². The magnetic field intensity on the surface of the earth, close to the equator is of the order of:
(A) 10⁻³ T (B) 10⁻⁴ T (C) 10⁻⁵ T (D) 10⁻⁶ T

**5.** A vibration magnetometer consists of two identical bar magnets placed one over the other such that they are mutually perpendicular and bisect each other, and pivoted at their point of intersection. The magnetometer is placed in a uniform magnetic field and it oscillates with a time period T₁. If one of the magnets is now removed, the time period of the magnetometer with only one magnet is T₂. Then, T₂/T₁ is equal to:
(A) √2 (B) 1/√2 (C) 2^(1/4) (D) 1/2^(1/4)

**6.** A magnet of length 14cm and magnetic moment M is broken into two parts of lengths 6cm and 8cm. They are put at right angle to each other with opposite poles together. The magnetic moment of the combination is:
(A) M (B) 7M/5 (C) 5M/7 (D) M/2

**7.** Let us assume that the earth's magnetic North pole coincides perfectly with the geographical South pole and vice versa. Then a point on the surface of the earth, the vertical component (i.e. the component perpendicular to the surface) of the earth's magnetic field is:
(A) upwards in the Northern hemisphere and downwards in the Southern hemisphere (B) downwards in the Northern hemisphere and upwards in the Southern hemisphere (C) upwards in both hemispheres (D) downwards in both hemispheres

**8.** Permanent magnets are usually made of materials with:
(A) High retentivity and high coercivity (B) High retentivity and low coercivity (C) Low retentivity and high coercivity (D) Low retentivity and low coercivity

**9.** A magnetic intensity of 2 × 10³ A / m is applied to a paramagnetic substance of magnetic susceptibility 10⁻⁵. The magnetization (in A/m) produced in the material is:
(A) 0.01 (B) 0.02 (C) 10⁸ (D) 2 × 10⁸

**10.** Suppose at a point on the surface of the earth, the true geographic North is known. At this point, the Northward, Eastward and vertical components of the earth's magnetic field are measured to be B_N, B_E and B_V. Then, the angle of inclination (also called the angle of dip) and the angle of declination, θ_I and θ_D, at this point are given by:
(A) θ_I = cos⁻¹(B_V/√(B²_N + B²_E)), θ_D = sin⁻¹(B_E/B_N) (B) θ_I = sin⁻¹(B_V/√(B²_N + B²_E)), θ_D = cos⁻¹(B_E/B_N) (C) θ_I = tan⁻¹(B_V/√(B²_N + B²_E + B²_V)), θ_D = tan⁻¹(B_E/(B²_N + B²_E)) (D) θ_I = tan⁻¹(B_V/√(B²_N + B²_E)), θ_D = tan⁻¹(B_E/B_N)

**11.** The magnetic susceptibility of three materials A, B and C at 300 K is 2.3 × 10⁻⁵, -9.8 × 10⁻⁶ and 60 respectively. Then, the magnetic behavior of these materials should be respectively classified as:
(A) Diamagnetic, Paramagnetic, Ferromagnetic (B) Paramagnetic, Diamagnetic, Ferromagnetic (C) Paramagnetic, Ferromagnetic, Diamagnetic (D) Ferromagnetic, Paramagnetic, Diamagnetic

**12.** A solenoid with a core of a material of relative permeability 80 carries a current 0.2 A. The number of turns per unit length of the solenoid is 500. The magnetisation M (in A/m) and the magnitude of magnetic field B (in mT) inside the core is:
(Permeability of vacuum, μ₀ = 4π × 10⁻⁷ N / A²)
(A) 7900, 16π/3 (B) 8000, 16π/3 (C) 7900, 79π/15 (D) 8000, 79π/15

**13.** When a paramagnetic material is placed in a magnetic field B₀, the magnetisation M produced in the material is given by Curie's law as: M = C (B₀/T). Here, C is a material-specific constant, called the Curie constant, and T is temperature. This law is valid for:
(A) Low values of B₀ and low values of T (B) Low values of B₀ and high values of T (C) High values of B₀ and low values of T (D) High values of B₀ and high values of T

**14.** At a point near the surface of the earth, the horizontal component of the earth's magnetic field is 0.4 Gauss. If the angle of declination at this point is 1/10 rad West, the East-West component of the earth's magnetic field at this point is:
(A) 0.398 Gauss, towards West (B) 0.398 Gauss, towards East (C) 0.04 Gauss, towards West (D) 0.04 Gauss, towards East

**15.** A rectangular coil ABCD which is rotated at a constant angular velocity about a horizontal axis is as shown in the figure given ahead. The axis of rotation of the coil as well as the magnetic field B are horizontal. Maximum current will flow in the circuit when the plane of the coil is:
(A) Inclined at 30° to the magnetic field (B) Perpendicular to the magnetic field (C) Inclined at 45° to the magnetic field (D) parallel to the magnetic field

---

**JEE Main (Archive)**

**1.** A thin rectangular magnet suspended freely has a period of oscillation equal to T. Now it is broken into two equal halves (each having half the original length) and one piece is made to oscillate freely in the same field. If its period of oscillation is T', the ratio T'/T is:
(A) 1/(2√2) (B) 1/2 (C) 2 (D) 1/4

**2.** Curie temperature is the temperature above which:
(A) A ferromagnetic material become paramagnetic (B) a paramagnetic material become diamagnetic (C) a ferromagnetic material becomes diamagnetic (D) a paramagnetic material becomes ferromagnetic

**3.** The magnetic lines of force inside a bar magnet:
(A) are from north-pole to south-pole of the magnet (B) do not exist (C) depend upon the area of cross-section of the bar magnet (D) are from south-pole to north-pole of the magnet

**4.** The magnetic needle lying parallel to a magnetic field requires W units of work to turn it through 60°. The torque needed to maintain the needle in this position will be:
(A) √3W (B) W (C) (√3/2)W (D) 2W

**5.** The materials suitable for making electromagnets should have:
(A) high retentively and high coercivity (B) low retentivity and low coercivity (C) high retentively and low coercivity (D) low retentivity and high coercivity

**6.** The length of a magnet is large compared to its width and breadth. The time period of its oscillation in a vibration magnetometer is 2 s. The magnet is cut along its length into three equal parts are then placed on each other with their like poles together. The time period of this combination will be:
(A) 2s (B) (2/3)s (C) (2√3)s (D) (2/√3)s

**7.** A magnetic needle is kept in a non-uniform magnetic field. It experiences:
(A) a force and a torque (B) a force but not a torque (C) a torque but not a force (D) neither a force nor a torque

**8.** Needles N₁, N₂ and N₃ are made of a ferromagnetic, a paramagnetic and a diamagnetic substance respectively. A magnet when brought close to them will:
(A) attract all three of them (B) attract N₁ and N₂ strongly but repel N₃ (C) attract N₁ strongly, N₂ weakly and repel N₃ weakly (D) attract N₁ strongly, but repel N₂ and N₃ weakly

**9.** Relative permittivity and permeability of a material are ϵ_r and μ_r, respectively. Which of the following values of these quantities are allowed for a diamagnetic material?
(A) ϵ_r = 1.5, μ_r = 1.5 (B) ϵ_r = 0.5, μ_r = 1.5 (C) ϵ_r = 1.5, μ_r = 0.5 (D) ϵ_r = 0.5, μ_r = 0.5

**10.** Two short bar magnets of length 1 cm each have magnetic moments 1.20 Am² and 1.00 Am² respectively. They are placed on a horizontal table parallel to each other with their N poles pointing towards the South. They have a common magnetic equator and are separated by a distance of 20.0 cm. The value of the resultant horizontal magnetic induction at the mid-point O of the line joining their centers is close to (Horizontal component of earth's magnetic induction is 3.6 × 10⁻⁵ Wb / m²):
(A) 5.80 × 10⁻⁵ Wb / m² (B) 3.6 × 10⁻⁵ Wb / m² (C) 2.56 × 10⁻⁴ Wb / m² (D) 3.50 × 10⁻⁴ Wb / m²

**11.** The earth's magnetic field lines resemble that of a dipole at the centre of the earth. If the magnetic moment of this dipole is close to 8 × 10²² Am², the value of earth's magnetic field near the equator is close to (radius of the earth = 6.4 × 10⁶ m)
(A) 0.6 Gauss (B) 1.2 Gauss (C) 1.8 Gauss (D) 0.32 Gauss

**12.** The coercivity of a small magnet where the ferromagnet gets demagnetized is 3 × 10³ A m⁻¹. The current required to be passed in a solenoid of length 10 cm and number of turns 100, so that the magnet gets demagnetized when inside the solenoid, is :
(A) 6 A (B) 30 mA (C) 60 mA (D) 3 A

**13.** An example of a perfect diamagnet is a superconductor. This implies that when a superconductor is put in a magnetic field of intensity B, the magnetic field B_s inside the superconductor will be such that :
(A) B_s = B (B) B_s = 0 (C) B_s = B (D) B_s < B but B_s ≠ 0

**14.** The identical bars A, B and C are made of different magnetic materials. When kept in a uniform magnetic field, the field lines around them look as follows:
Make the correspondence of these bars with their material being diamagnet (D), ferromagnetic (F) and paramagnetic (P):
(A) A ↔ F, B ↔ P, C ↔ D (B) A ↔ P, B ↔ F, C ↔ D (C) A ↔ D, B ↔ P, C ↔ F (D) A ↔ F, B ↔ D, C ↔ P

**15.** The magnetic field of earth at the equator is approximately 4 × 10⁻⁵ T. The radius of earth is 6.4 × 10⁶ m. Then the dipole moment of the earth will be nearly of the order of
(A) 10²³ A m² (B) 10²⁰ A m² (C) 10¹⁶ A m² (D) 10¹⁰ A m²

**16.** A short bar magnet is placed in the magnetic meridian of the earth with north pole pointing north. Neutral points are found at a distance of 30 cm from the magnet on the East - West line, drawn through the middle point of the magnet. The magnetic moment of the magnet in A m² is close to:
(Given μ₀/4π = 10⁻⁷ in SI units and B_H = Horizontal component of earth's magnetic field = 3.6 × 10⁻⁵ Tesla.)
(A) 9.7 (B) 4.9 (C) 19.4 (D) 14.6

**17.** A 25 cm long solenoid has radius 2 cm and 500 total number of turns. It carries a current of 15 A. If it is equivalent to a magnet of the same size and magnetization M (magnetic moment/volume), then |M| is:
(A) 3π A m⁻¹ (B) 30000 A m⁻¹ (C) 300 A m⁻¹ (D) 30000π A m⁻¹

**18.** Hysteresis loops for two magnetic materials A and B are given below:
These materials are used to make magnets for electric generators, transformer core and electromagnet core. Then it is proper to use:
(A) A for electric generators and transformers (B) A for electromagnets and B for electric generators (C) A for transformers and B for electric generators (D) B for electromagnets and transformers

**19.** The B-H curve for a ferromagnet is shown in the figure. The ferromagnet is placed inside a long solenoid with 1000 turns/cm. The current that should be passed in the solenoid to demagnetize the ferromagnet completely is:
(A) 1 mA (B) 20μA (C) 2 mA (D) 40μA

**20.** A magnet of total magnetic moment 10⁻²i A - m² is placed in time varying magnetic field. B cos ωt î where B = 1 Tesla and ω = 0.125 rad/s. The work done for reversing the direction of the magnetic moment at t = 1 second, is:
(A) 0.01 J (B) 0.007 J (C) 0.028 J (D) 0.014 J

**21.** A bar magnet is demagnetized by inserting it inside a solenoid of length 0.2 m, 100 turns, and carrying a current of 5.2 A. The coercivity of the bar magnet is:
(A) 520 A/m (B) 285 A/m (C) 2600 A/m (D) 1200 A/m

**22.** At some location on earth the horizontal component of earth's magnetic field is 18 × 10⁻⁶ T. At this location magnetic needle of length 0.12m and pole strength 1.8 Am is suspended from its mid-point using a thread. It makes 45° angle with horizontal in equilibrium. To keep this needle horizontal, the vertical force that should be applied at one of its ends is:
(A) 6.5 × 10⁻⁵ N (B) 1.3 × 10⁻⁵ N (C) 1.8 × 10⁻⁵ N (D) 3.6 × 10⁻⁵ N

**23.** A paramagnetic substance in the form of a cube with sides 1 cm has a magnetic dipole moment of 20 × 10⁻⁶ J / T when a magnetic intensity of 60 × 10³ A / m is applied. Its magnetic susceptibility is:
(A) 3.3 × 10⁻² (B) 2.3 × 10⁻² (C) 4.3 × 10⁻² (D) 3.3 × 10⁻⁴

**24.** A paramagnetic material has 10²⁸ atoms/m³. Its magnetic susceptibility at temperature 350 K is 2.8 × 10⁻⁴. Its susceptibility at 300 K is:
(A) 3.726 × 10⁻⁴ (B) 2.672 × 10⁻⁴ (C) 3.672 × 10⁻⁴ (D) 3.267 × 10⁻⁴

**25.** A hoop and a solid cylinder of same mass and radius are made of a permanent magnetic material with their magnetic moment parallel to their respective axes. But the magnetic moment of hoop is twice of solid cylinder. They are placed in a uniform magnetic field in such a manner that their magnetic moments make a small angle with the field. If the oscillation periods of hoop and cylinder are T_h and T_c respectively, then:
(A) T_h = T_c (B) T_h = 1.5T_c (C) T_h = 2T_c (D) T_h = 0.5T_c

**26.** Two magnetic dipoles X and Y are placed at a separation d, with their axes perpendicular to each other. The dipole moment of Y is twice that of X. A particle of charge q is passing through their midpoint P, at angle θ = 45° with the horizontal line, as shown in figure. What would be the magnitude of force on the particle at that instant? (d is much larger than the dimensions of the dipole)
(A) (μ₀/4π)(M/(d/2)³)qρ (B) (μ₀/4π)(2M/(d/2)³)qρ (C) √2(μ₀/4π)(M/(d/2)³)qρ (D) 0

**27.** A magnetic compass needle oscillates 30 times per minute at a place where the dip is 45°, and 40 times per minute where the dip is 30°. If B₁ and B₂ are respectively the total magnetic field due to the earth at the two places, then the ratio B₁ / B₂ is best given by:
(A) 0.7 (B) 2.2 (C) 3.6 (D) 1.8

**28.** The figure gives experimentally measured B vs. H variation in a ferromagnetic material. The retentivity, co-ercivity and saturation, respectively, of the material are:
(A) 1.5 T, 50 A/m and 1.0 T (B) 150 A/m, 1.0 T and 1.5 T (C) 1.0 T, 50 A/m and 1.5 T (D) 1.5 T, 50 A/m and 1.0 T

**29.** Magnetic materials used for making permanent magnets (P) and magnets in a transformer (T) have different properties of the following, which property best matches for the type of magnet required?
(A) T: Large retentivity, large coercivity (B) P: Large retentivity, large coercivity (C) T: Large retentivity, small coercivity (D) P: Small retentivity, large coercivity

**30.** A perfectly diamagnetic sphere has a small spherical cavity at its centre, which is filled with a paramagnetic substance. The whole system is placed in a uniform magnetic field B̄. Then the field inside the paramagnetic substance is:
(A) zero (B) B̄ (C) much large than |B̄| but opposite to B̄ (D) much large than |B̄| and parallel to B̄

**31.** A small bar magnet placed with its axis at 30° with an external field of 0.06 T experiences a torque of 0.018 Nm. The minimum work required to rotate it from its stable to unstable equilibrium position is:
(A) 7.2 × 10⁻² J (B) 6.4 × 10⁻² J (C) 9.2 × 10⁻³ J (D) 11.7 × 10⁻³ J

**32.** A paramagnetic sample shows a net magnetisation of 6 A/m when it is placed in an external magnetic field of 0.4 T at a temperature of 4K. When the sample is placed in an external magnetic field of 0.3 T at a temperature of 24 K, then the magnetisation will be:
(A) 4(A/m) (B) 2.25(A/m) (C) 0.75(A/m) (D) 1(A/m)

**33.** An iron rod of volume 10⁻³ m³ and relative permeability 1000 is placed as core in a solenoid with 10 turns/cm. If a current of 0.5 A is passed through the solenoid, then the magnetic moment of the rod will be:
(A) 0.5 × 10⁵ Am² (B) 500 × 10⁵ Am² (C) 50 × 10⁵ Am² (D) 5 × 10⁵ Am²
