# Modern Physics

## Overview
Modern Physics encompasses the quantum nature of matter and energy at the atomic and subatomic scales, including the photoelectric effect, matter waves, atomic models, X-rays, nuclear physics, and radioactivity. This chapter introduces Einstein's quantum theory, Bohr's atomic model, and the fundamental forces that govern nuclear behavior and decay processes.

---

## 1. Cathode Rays and the e/m Ratio

### Concepts
- Cathode rays are beams of negatively charged particles (electrons) discovered by Sir William Crookes
- J.J. Thomson determined the e/m ratio (charge-to-mass ratio) of electrons
- Thomson's experiment used both electric and magnetic fields perpendicular to the electron beam
- The electron is a fundamental particle common to all atoms

### Formulas
- `e/m = E²/(2VB²)` - e/m ratio determination
- `v = E/B` - velocity of electrons when E and B fields balance
- `e/m = 1.758 × 10¹¹ C/kg` - standard value for electron

### Important Notes
- Electrons are deflected by electric and magnetic fields
- Cathode rays carry mechanical energy and produce heat and fluorescence
- The specific charge (e/m) is identical for all gases tested

### Worked Example
**Q:** In Thomson's e/m experiment, E = 3 × 10⁵ V/m and B = 2 × 10⁻³ T. Find e/m.

**A:**
- When undeflected: `eE = evB`, so `v = E/B = (3 × 10⁵)/(2 × 10⁻³) = 1.5 × 10⁸ m/s`
- `e/m = E²/(2VB²)` - requires potential V for full calculation

---

## 2. Millikan Oil Drop Experiment

### Concepts
- Determines the magnitude of charge on an electron
- Oil drops suspended between parallel plates experiencing gravity and electric field
- Terminal velocity achieved when Stokes force equals net force
- Charge is quantized in units of electron charge (e = 1.6 × 10⁻¹⁹ C)

### Formulas
- `F = mg` - gravitational force on oil drop
- `B = (4/3)πr³ρg` - buoyant force
- `6πηrv_t = mg - B` - motion under gravity and viscosity (without buoyant force)
- `6πηrv_t = qE - 4/3πr³(d-ρ)g` - motion under electric field
- `q = (mg/E)(v_e + v_g)` - charge on drop from terminal velocities
- `e = 1.602 × 10⁻¹⁹ Coulombs` - elementary charge

### Important Notes
- Charge acquired is always an integral multiple of e
- Oil drops reach terminal velocity quickly in both gravity and electric field
- Bouyant force of air is important for accurate calculations

### Worked Example
**Q:** An oil drop with terminal velocities v_g = 2 × 10⁻⁴ m/s (downward) and v_e = 3 × 10⁻⁴ m/s (upward) experiences E = 10⁴ V/m. Find the charge.

**A:**
- From q = (mg/E)(v_e + v_g), ratios of terminal velocities give charge values
- Result is typically a small multiple of elementary charge

---

## 3. Photoelectric Effect

### Concepts
- Emission of electrons from metallic surfaces when illuminated by monochromatic light
- Discovered by Hertz and Lenard around 1880
- Intensity affects number of photoelectrons but not their maximum kinetic energy
- Frequency determines whether photoelectric emission occurs
- A threshold frequency (v₀) exists below which no emission occurs

### Formulas
- `hv = W₀ + KE_max` - Einstein's Photoelectric Equation
- `v_c = (h/e)v - (h/e)v₀` - Stopping potential relation
- `KE_max = (1/2)mv²_max` - Maximum kinetic energy of photoelectrons
- `v₀ = W₀/h` - Threshold frequency
- `λ_max = hc/W₀` - Maximum wavelength for photoelectric effect
- `E_photon = hv = (12400/λ(in Å)) eV` - Energy per photon
- `i = (P/hc/λ) × η × e` - Photoelectric current
- `F = Power/c` - Radiation force on surface
- `P_rad = I/c` - Radiation pressure (perfectly absorbing)
- `P_rad = 2I/c` - Radiation pressure (100% reflecting)

### Important Notes
- Photoelectric current is directly proportional to light intensity
- Stopping potential is independent of light intensity for same frequency
- Threshold frequency is metal-dependent; higher for less photosensitive metals
- Photon emission is instantaneous (< 10⁻⁹ seconds)
- KE_max is independent of light intensity

### Worked Example
**Q:** Light of 400 nm wavelength falls on a metal with work function 2.5 eV. Find the stopping potential.

**A:**
- `E_photon = 12400/400 = 31 eV`
- `KE_max = E_photon - W₀ = 31 - 2.5 = 28.5 eV`
- `V_c = KE_max/e = 28.5 V`

---

## 4. Matter Waves and de Broglie Wavelength

### Concepts
- Matter particles have wave properties, similar to photons
- de Broglie proposed wavelength for any moving particle
- Wavelength inversely proportional to momentum
- Applies to electrons, protons, and all massive particles

### Formulas
- `λ_particle = h/mv = h/p = h/√(2mKE)` - de Broglie wavelength
- `λ_e = 12.27/√V Å` - de Broglie wavelength for electron accelerated through V volts
- `λ_p = 0.286/√V Å` - de Broglie wavelength for proton accelerated through V volts
- `λ_c = h/(m_c c)` - Compton wavelength

### Important Notes
- Wavelength becomes significant for small particles (electrons, neutrons)
- For macroscopic objects, wavelength is negligibly small
- Matter waves explain electron orbitals in Bohr model (standing waves)
- Relativistic effects become important for high-energy electrons

### Worked Example
**Q:** Find the de Broglie wavelength of an electron accelerated through 100 V.

**A:**
- `λ = 12.27/√100 = 12.27/10 = 1.227 Å`

---

## 5. Bohr's Atomic Model

### Concepts
- First successful model of hydrogen atom using quantum theory
- Electrons orbit nucleus in discrete circular orbits with quantized angular momentum
- Only certain electron transitions emit/absorb radiation (photons)
- Model explains spectral lines of hydrogen and hydrogen-like ions
- Angular momentum quantization: `L = nℏ` where n = 1, 2, 3, ...

### Formulas
- `r_n = (n²ℏ²)/(4π²Kme²Z) = 0.53(n²/Z) Å` - Radius of nth Bohr orbit
- `V_n = (2πKZe²)/(nℏ) = 2.18 × 10⁶ Z/n m/s` - Velocity in nth orbit
- `E_n = -(2π²Kme⁴Z²)/(n²ℏ²) = -13.6(Z²/n²) eV/atom` - Total energy in nth orbit
- `ΔE = E_n₂ - E_n₁ = 13.6Z²(1/n₁² - 1/n₂²) eV` - Energy difference between levels
- `hv = ΔE` - Energy of emitted/absorbed photon
- `1/λ = RZ²(1/n₁² - 1/n₂²) cm⁻¹` - Rydberg formula (R = 109,677 cm⁻¹)
- `B.E. = 13.6Z²/n² eV` - Binding energy in nth orbit
- `I.E. = 13.6Z² eV` - Ionization energy

### Important Notes
- Works accurately only for one-electron species (H, He⁺, Li²⁺, etc.)
- Spectral series: Lyman (n₁=1), Balmer (n₁=2), Paschen (n₁=3), Brackett (n₁=4), Pfund (n₁=5)
- Angular momentum: `L = nℏ = n(h/2π)`
- For multi-electron atoms, nuclear charge is modified by screening (effective Z)

### Worked Example
**Q:** Find the wavelength of photon emitted when electron transitions from n=3 to n=2 in hydrogen.

**A:**
- `ΔE = 13.6(1/4 - 1/9) = 13.6(5/36) = 1.89 eV`
- `λ = 12400/1.89 = 6563 Å` (Balmer-β line, red light)

---

## 6. Atomic Line Spectrum and Energy Levels

### Concepts
- Discrete spectral lines result from electron transitions between quantized energy levels
- Each series corresponds to transitions ending at specific lower level
- Spectral line wavelength depends only on initial and final states
- Series limit corresponds to transition from n=∞ to lower level

### Formulas
- `ν = RZ²(1/n₁² - 1/n₂²)` - Frequency of emitted radiation
- `λ_series_limit = 1/(RZ²/n₁²)` - Maximum wavelength in series
- Number of spectral lines from n₂ to n₁: `N = n₂(n₂-1)/2` - total transitions
- Number of lines from n₂ to specific n₁: `N = (n₂-n₁)(n₂+n₁)/2`

### Important Notes
- Lyman series: UV region (n₁=1)
- Balmer series: Visible region (n₁=2)
- Paschen series: Infrared region (n₁=3)
- Series limit approaches maximum frequency/minimum wavelength for each series

### Worked Example
**Q:** Find the wavelength of the first line (n=2 to n=1) in Lyman series.

**A:**
- `1/λ = RZ²(1/1² - 1/2²) = 109677 × 1 × (3/4) = 82258 cm⁻¹`
- `λ = 121.6 nm` (Lyman-α, UV region)

---

## 7. X-Rays

### Concepts
- Electromagnetic radiation of very short wavelength (0.1 Å to 100 Å)
- Produced by striking high-speed electrons on metal target (Coolidge tube)
- Only 1-10% of electron kinetic energy converted to X-rays; rest becomes heat
- Two types: Hard X-rays (high penetration) and Soft X-rays (low penetration)
- Characteristic and continuous (Bremsstrahlung) spectra

### Formulas
- `λ_min = hc/(eV) = 12400/V(in volts) Å` - Minimum wavelength (cutoff)
- `hv_max = eV` - Maximum energy of continuous X-ray
- `2d sin θ = nλ` - Bragg's Law for X-ray diffraction
- `ν = RZ²(1/n₁² - 1/n₂²)` - Characteristic X-ray frequency
- Effective nuclear charge: `Z_eff = Z - 1` for K-shell X-rays
- `√ν = a(Z-b)` - Moseley's Law (K_α series: b = 1, a = √(3Rc/4) = 4.98×10⁷ √Hz)

### Important Notes
- X-rays show properties of both waves and particles
- Hard X-rays: 0.1 Å to 1 Å (high penetration, high energy)
- Soft X-rays: 1 Å to 100 Å (low penetration, low energy)
- Characteristic X-rays have discrete wavelengths specific to target material
- Continuous X-rays form spectrum with sharp cutoff at minimum wavelength

### Worked Example
**Q:** An X-ray tube operates at 10 kV. Find the minimum wavelength of X-rays produced.

**A:**
- `λ_min = 12400/10000 = 1.24 Å`

---

## 8. Nucleus and Nuclear Properties

### Concepts
- Nucleus contains protons (positive charge) and neutrons (neutral)
- Nuclear size much smaller than atomic size (radius ~ 10⁻¹⁵ m)
- Almost entire atomic mass concentrated in nucleus
- Nucleus characterized by: atomic number Z (protons), mass number A (protons+neutrons)
- Isotopes: same Z, different A; Isobars: same A, different Z; Isotones: same N

### Formulas
- `R = R₀A^(1/3)` where R₀ = 1.2 × 10⁻¹⁵ m - Nuclear radius
- Nuclear density ≈ 2.3 × 10¹⁷ kg/m³ (nearly constant for all nuclei)
- `μ = 1 amu = 1.66 × 10⁻²⁷ kg ≈ 931.5 MeV/c²`
- Rest mass energy: `E = mc² = 0.0005 × 931.5 MeV = 0.51 MeV` (electron)
- Atomic mass unit: `1 amu = 1/12 mass of ¹²C atom`

### Important Notes
- Nucleus represented as: `Z/A X` or `Z^A X` or `A/Z X`
- All nuclei have similar nuclear density
- Radius proportional to A^(1/3), so volume proportional to A
- Nuclear binding energy holds nucleus together against electrostatic repulsion

### Worked Example
**Q:** Find the nuclear radius of oxygen-16 (A=16, R₀=1.2 × 10⁻¹⁵ m).

**A:**
- `R = 1.2 × 10⁻¹⁵ × 16^(1/3) = 1.2 × 10⁻¹⁵ × 2.52 ≈ 3.02 × 10⁻¹⁵ m`

---

## 9. Mass Defect and Binding Energy

### Concepts
- Mass of nucleus is less than sum of constituent nucleon masses
- Mass defect converted to binding energy (holds nucleus together)
- Binding energy per nucleon indicates nuclear stability
- Maximum stability at iron-56 (BE/A ≈ 8.8 MeV)
- Light nuclei gain stability through fusion; heavy nuclei through fission

### Formulas
- `Δm = [Zm_p + (A-Z)m_n] - m(nucleus)` - Mass defect
- `B.E. = Δm × c² = Δm × 931.5 MeV` - Binding energy
- `B.E./A` - Binding energy per nucleon (measure of stability)
- `E = (1 amu) = (1×1.66×10⁻²⁷)×(3×10⁸)²/1.6×10⁻¹⁹ = 931.5 MeV`

### Important Notes
- BE increases as nucleus becomes heavier (up to Fe-56)
- BE/A maximum at A ≈ 56, making Fe-56 most stable nucleus
- Light nuclei (A<50) typically have lower BE/A
- Heavy nuclei (A>200) typically have lower BE/A
- For light nuclei, average BE/A ≈ 7-8 MeV; for heavy, ≈ 7.4 MeV

### Worked Example
**Q:** Calculate binding energy of O-16 (8 protons, 8 neutrons). Given: m_p = 1.00727u, m_n = 1.00866u, m(O-16) = 15.99493u.

**A:**
- Expected mass = 8(1.00727) + 8(1.00866) = 16.1274u
- Δm = 16.1274 - 15.99493 = 0.1325u
- B.E. = 0.1325 × 931.5 = 123.4 MeV
- B.E./A = 123.4/16 = 7.7 MeV

---

## 10. Nuclear Forces and Reactions

### Concepts
- Nuclear forces hold nucleus together against electrostatic repulsion
- Short-range forces (exist only within ~10⁻¹⁵ m)
- Much stronger than electromagnetic forces
- Independent of charge (charge-independent)
- Always attractive in nature

### Formulas
- `Q = (m_initial - m_final) × c² = Δm × 931.5 MeV` - Q-value of reaction
- Q > 0: Exothermic (energy released, spontaneous)
- Q < 0: Endothermic (energy required, non-spontaneous)
- `K.E._threshold = |Q|(m_a + m_x + m_y + m_Y)/(2m_x)` - Threshold kinetic energy
- `m_μ = (m_e × m_nucleus)/(m_e + m_nucleus)` - Reduced mass (for accurate calculations)

### Important Notes
- Nuclear force decreases rapidly beyond 10⁻¹⁵ m
- Order of magnitude: Nuclear force > EM force > Gravitational force
- Saturation property: binding doesn't increase for adding more nucleons far away
- Nucleon-nucleon interaction independent of whether pairing is p-p, n-n, or p-n

### Worked Example
**Q:** Find Q-value for reaction: p + ¹⁵N → ¹²C + ⁴He

**A:**
- Sum of initial masses = 1.00727 + 15.00 = 16.00727u
- Sum of final masses = 12.00 + 4.00 = 16.00u (approximately)
- Δm = 16.00727 - 16.00 = 0.00727u
- Q = 0.00727 × 931.5 ≈ 6.8 MeV

---

## 11. Radioactivity and Nuclear Decay

### Concepts
- Spontaneous emission of particles/radiation from unstable nuclei
- Random, spontaneous process following first-order kinetics
- Independent of physical/chemical conditions
- Decay rate proportional to number of undecayed nuclei
- Half-life: time for half of original nuclei to decay

### Formulas
- `dN/dt = -λN` - Radioactive decay rate equation
- `N_t = N₀ e^(-λt)` - Number of nuclei after time t
- `λ = ln(2)/t_(1/2) = 0.693/t_(1/2)` - Relationship between λ and half-life
- `R(t) = λN_t = λN₀e^(-λt)` - Activity at time t (decays per second)
- `t_(1/2) = 0.693/λ` - Half-life formula
- Mean life: `τ = 1/λ = 1.44 × t_(1/2)`
- Activity units: 1 Bq (1 decay/s), 1 Ci = 3.7 × 10¹⁰ Bq

### Types of Decay

#### Alpha Decay (α-decay)
- `A/Z X → (A-4)/(Z-2) Y + 4/2 He` - General form
- Example: `238/92 U → 234/90 Th + 4/2 He`
- Q-value: `Q = (m_parent - m_daughter - m_α) × 931.5 MeV`

#### Beta Decay (β⁻-decay)
- `A/Z X → A/(Z+1) Y + e⁻ + ν̄` - Electron emission
- Neutron → Proton + e⁻ + antineutrino
- Q-value: `Q = (m_parent - m_daughter) × 931.5 MeV` (atomic masses)

#### Beta-Plus Decay (β⁺-decay)
- `A/Z X → A/(Z-1) Y + e⁺ + ν` - Positron emission
- Proton → Neutron + e⁺ + neutrino
- Q > 2m_e c² for energetically favorable

#### Gamma Decay (γ-decay)
- High-energy photons emitted from excited nucleus
- No change in A or Z; nucleus de-excites to lower state
- Maximum penetrating power; minimum ionizing power

#### Electron Capture
- `e⁻ + A/Z X → A/(Z-1) Y + ν` - Orbital electron captured
- Q-value: `Q = (m_parent - m_daughter) × 931.5 MeV`

### Important Notes
- Activity decreases exponentially with half-life
- Probability of disintegration is random for each nucleus
- Mean life τ = 1.44 × t_(1/2)
- For simultaneous α and β decay: `λ_total = λ_α + λ_β`
- Neutrinos carry away variable energy in β-decay

### Worked Example
**Q:** A sample has initial activity 1000 Bq and half-life 10 days. Find activity after 30 days.

**A:**
- Number of half-lives = 30/10 = 3
- R = 1000 × (1/2)³ = 1000/8 = 125 Bq

---

## 12. Nuclear Stability

### Concepts
- Nuclei with even numbers of protons and neutrons are most stable
- Neutron-to-proton ratio (n/p) determines stability
- For light nuclei (Z < 20), n/p ≈ 1 (equal protons and neutrons)
- For heavy nuclei, n/p > 1 (more neutrons needed for stability)
- Stability belt: nuclei lie within belt-shaped region on n-p plot

### Formulas
- n/p ratio for stable nuclei varies with Z
- For light nuclei: n/p ≈ 1
- For heavy nuclei: n/p ≈ 1.5 (e.g., U-238: 92p, 146n → 146/92 = 1.59)

### Important Notes
- Maximum of 160 stable nuclei (even-even)
- 56 stable nuclei with even-odd composition
- 52 stable nuclei with odd-even composition
- Only 4 stable nuclei with odd-odd (H-2, He-3, Li-6, B-10)
- Nuclei above stability belt decay by β⁻ emission (increase n/p)
- Nuclei below stability belt decay by β⁺ emission or electron capture (decrease n/p)
- Nuclei with Z > 82 are radioactive (no stable nuclei beyond Bismuth)

### Worked Example
**Q:** Is U-235 stable? It has Z=92 protons.

**A:**
- N = A - Z = 235 - 92 = 143
- n/p = 143/92 = 1.55
- For Z=92, stability requires n/p ≈ 1.58, so U-235 is slightly neutron-deficient
- U-235 undergoes α-decay and is radioactive

---

## 13. Nuclear Fission

### Concepts
- Heavy nucleus breaks into two comparable fragments with release of energy
- Typically occurs when slow neutrons strike fissionable material (U-235)
- Chain reaction possible if neutrons produced trigger more fissions
- Critical size: minimum mass needed for self-sustaining chain reaction
- Controlled fission in nuclear reactors; uncontrolled in nuclear bombs

### Formulas
- Energy released per fission: ~200 MeV (mainly kinetic energy of fragments)
- `Q = Δm × 931.5 MeV` where Δm is mass difference before and after
- Critical size: diameter depends on neutron absorption cross-section
- Average neutrons per fission (ν) depends on reactor design

### Types of Fission
- **Spontaneous fission:** Rare, occurs for very heavy nuclei
- **Induced fission:** Neutrons trigger fission of U-235, Pu-239, etc.
- **Chain reaction:** If ν > 1 and size exceeds critical size, reaction propagates
- **Controlled chain reaction:** Neutron-absorbing control rods regulate reaction rate

### Important Notes
- Requires bringing nuclei closer than ~10⁻¹⁴ m to overcome Coulomb barrier
- Temperature in reactor core must be very high
- Fast neutrons moderated (slowed) by heavy water or graphite for thermal fission
- Fusion more energetically favorable for light nuclei but requires extreme conditions

### Worked Example
**Q:** In U-235 fission producing Ba-141 and Kr-92, find energy released.

**A:**
- Before: 235 u → After: 141 + 92 = 233 u
- Δm ≈ 0.21 u (typical for this fission)
- Energy = 0.21 × 931.5 ≈ 195 MeV

---

## 14. Nuclear Fusion

### Concepts
- Light nuclei combine into heavier nucleus with release of energy
- Fusion of deuterium (²H) and tritium (³H) studied for power generation
- Requires extremely high temperature (10⁷ K) to overcome Coulomb barrier
- Plasma state (ionized gas) forms at high temperatures
- Source of energy in stars and sun

### Formulas
- Typical fusion reaction: `¹H + ¹H → ²He + energy`
- D-T fusion: `²H + ³H → ⁴He + n + 17.6 MeV`
- D-D fusion: `²H + ²H → ³He + n + 3.27 MeV`
- Lawson criterion: `n × τ > 5 × 10¹⁴ s/cm³` for successful fusion (n = ion density, τ = confinement time)

### Important Notes
- Fusion releases more energy per nucleon than fission for light nuclei
- Coulomb repulsion makes fusion very difficult (requires high kinetic energy)
- Temperature required: ~100-300 million Kelvin
- Plasma must be confined by magnetic fields (tokamak) or inertial confinement (laser)
- D-T reaction favored for reactors (large cross-section, high energy release)

### Worked Example
**Q:** Find energy released in deuterium fusion: ²H + ²H → ³He + n

**A:**
- Q = (2 × 2.014 - 3.016 - 1.009) × 931.5 ≈ 3.27 MeV

---

## 15. Nuclear Reactions and Q-Value Analysis

### Concepts
- Q-value determines if reaction is spontaneous (exothermic/endothermic)
- Threshold energy required for endothermic reactions
- Momentum and energy conservation apply in all reactions
- Bombarding particle must carry minimum energy for non-spontaneous reactions

### Formulas
- `Q = (m_initial - m_final) × 931.5 MeV`
- For reaction: `a + X → Y + b`
- `Q_value = (m_a + m_X - m_Y - m_b) × c²`
- If Q > 0: Exothermic (spontaneous)
- If Q < 0: Endothermic (requires minimum energy)
- `K.E._threshold = |Q|(m_a + m_X + m_Y + m_b)/(2m_X)` - For stationary target X

### Important Notes
- Atomic mass difference accounts for binding energy difference
- Threshold energy depends on mass of bombarding and target particles
- Heavier target particles reduce threshold energy requirement
- Reactions with Q > 0 can occur with arbitrarily slow bombardment
- Reactions with Q < 0 require kinetic energy ≥ threshold

### Worked Example
**Q:** Find threshold kinetic energy for p + ¹⁴N → ¹⁴C + p reaction if Q = -0.63 MeV

**A:**
- `K.E._threshold = 0.63 × (1 + 14 + 14 + 1)/(2 × 14) = 0.63 × 30/28 ≈ 0.675 MeV`

---

## 16. Electron Configurations and Spectral Emission

### Concepts
- Electrons transition between discrete energy levels
- Emission spectrum results from electron transitions to lower levels
- Frequency/wavelength of emitted photon depends on energy difference
- Higher initial level → more possible transitions and more spectral lines
- Number of spectral lines: `N = n(n-1)/2` for transitions from level n to ground state

### Formulas
- Energy difference: `ΔE = 13.6Z²(1/n₁² - 1/n₂²) eV`
- Wavelength of emission: `λ = hc/ΔE = 12400/ΔE(in eV) Å`
- Number of transitions from n_i to n_f: `N = (n_i - n_f)(n_i + n_f)/2`
- Total spectral lines from level n: `N = n(n-1)/2`

### Important Notes
- More spectral lines observed when higher excited states are populated
- Frequency relationship: `ν₂ > ν₁` as initial level increases for same final state
- Maximum energy photon corresponds to largest energy jump
- For hydrogen-like atoms, multiply by Z²

### Worked Example
**Q:** Find the number of spectral lines when electrons transition from n=5 to ground state.

**A:**
- Total transitions = 5(4)/2 = 10 different spectral lines

---

## 17. Compton Effect

### Concepts
- Scattering of photons by electrons (elastic collision)
- Scattered photon has lower energy (longer wavelength) than incident photon
- Energy/momentum conservation applies
- Shows particle nature of light (photon-electron interaction)
- Wavelength shift depends only on scattering angle, not incident wavelength

### Formulas
- `Δλ = λ' - λ = (h/m_e c)(1 - cos θ)` - Compton shift formula
- `λ_c = h/(m_e c) = 2.43 × 10⁻¹² m = 0.0243 Å` - Compton wavelength of electron
- Scattered photon energy: `E' = E/(1 + (E/m_e c²)(1 - cos θ))`
- Recoil electron kinetic energy: `KE_e = E - E' = hc/λ' - hc/λ`

### Important Notes
- Effect increases for higher incident photon energies
- Backscatter (θ = 180°) gives maximum wavelength shift
- Forward scattering (θ = 0°) gives zero shift
- Maximum energy transferred to electron when photon backscattered
- Compton effect confirms photon has momentum

### Worked Example
**Q:** X-ray photon (λ = 0.71 Å) scattered at 45°. Find wavelength shift.

**A:**
- `Δλ = (2.43 × 10⁻¹²)(1 - cos 45°) = 2.43 × 10⁻¹² × 0.293 = 7.13 × 10⁻¹³ m = 0.00713 Å`

---

## 18. Pair Production and Annihilation

### Concepts
- High-energy photon converts to electron-positron pair near nucleus
- Positron is antiparticle of electron (same mass, opposite charge)
- Requires photon energy > 2m_e c² = 1.02 MeV
- Pair annihilation: electron and positron combine to produce gamma rays
- Demonstrates mass-energy equivalence

### Formulas
- Threshold photon energy: `E_photon ≥ 2m_e c² = 1.02 MeV` (near nucleus)
- `m_e c² = 0.511 MeV` - Rest mass energy of electron
- `E_photon = 1.02 MeV + KE_total` - For pair production with kinetic energy
- Annihilation: `e⁻ + e⁺ → 2γ` produces two 0.511 MeV photons (back-to-back)

### Important Notes
- Pair production only near nucleus due to momentum conservation
- Cannot occur in free space (would violate momentum conservation)
- Pair production creates matter from pure energy
- Annihilation converts matter to pure energy (photons)
- Process demonstrates complete mass-energy conversion

### Worked Example
**Q:** Electron and positron at rest annihilate. Find energy of produced gamma rays.

**A:**
- Total rest mass energy = m_e c² + m_e c² = 0.511 + 0.511 = 1.022 MeV
- Each gamma ray carries 0.511 MeV (by symmetry and momentum conservation)

---

## Questions

### ANSWER KEYS (Reference)

**LEVEL - 1 (Questions 1-90)**
| Q | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|----|----|----|----|----|----|
| Ans | A | A | A | B | B | B | B | A | C | D | A | D | A | A | B |
| Q | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
| Ans | A | B | D | D | C | A | A | B | A | C | D | A | D | A | A |
| Q | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 |
| Ans | A | B | C | C | C | C | A | D | A | A | A | A | C | A | D |
| Q | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 |
| Ans | C | A | B | C | D | C | C | A | A | B | C | C | B | C | C |
| Q | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 |
| Ans | A | D | C | C | A | C | D | D | A | B | A | B | A | B | B |
| Q | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 |
| Ans | 0.86 | 0.25 | 5.31 | 2.2 | 4.96 | 1 | 41 | 13.33 | 70.50 | 12.00 | 340 | 13 | 208.33 | 83 | 10 |

**LEVEL - 2 (Questions 91-140)**
| Q | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99 | 100 | 101 | 102 | 103 |
|---|----|----|----|----|----|----|----|----|----|----|----|----|-----|
| Ans | BD | AD | 1.88 | D | D | A-Q; B-P; C-R | 3 | C | B | D | BC | 1 | B |
| Q | 104 | 105 | 106 | 107 | 108 | 109 | 110 | 111 | 112 | 113 | 114 | 115 | 116 |
| Ans | A | D | B | B | ABCD | B | A | BC | AD | B | A | D | B |
| Q | 117 | 118 | 119 | 120 | 121 | 122 | 123 | 124 | 125 | 126 | 127 | 128 | 129 |
| Ans | D | D | A | D | AC | A-S; B-R; C-Q; D-P | 4 | B | C | D | 4 | 3 | C |
| Q | 130 | 131 | 132 | 133 | 134 | 135 | 136 | 137 | 138 | 139 | 140 |
| Ans | A-P; B-Q; C-P; D-S | | | | | | | | | |

**JEE MAIN ARCHIVE (Questions 1-134)**
| Q | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|----|----|----|----|----|----|
| Ans | B | A | C | D | C | C | D | C | B | D | D | B | D | A | D |
| Q | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
| Ans | C | A | A | C | A | B | A | D | C | B | A | D | C | C | D |
| Q | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 |
| Ans | A | C | C | C | D | C | C | B | C | A | A | A | A | D | A |
| Q | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 |
| Ans | B | B | C | D | D | C | A | B | C | D | D | C | A | C | B |
| Q | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 |
| Ans | C | A | B | C | D | B | D | None | B | B | C | D | C | C | C |
| Q | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 |
| Ans | None | C | D | A | A | C | C | A | A | A | C | B | D | C | C |
| Q | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99 | 100 | 101 | 102 | 103 | 104 | 105 |
| Ans | D | A | B | A | C | D | C | D | B | C | A | 486 | A | B | A |
| Q | 106 | 107 | 108 | 109 | 110 | 111 | 112 | 113 | 114 | 115 | 116 | 117 | 118 | 119 | 120 |
| Ans | B | A | 11 | C | B | A | B | A | 9 | D | D | D | D | C | D |
| Q | 121 | 122 | 123 | 124 | 125 | 126 | 127 | 128 | 129 | 130 | 131 | 132 | 133 | 134 |
| Ans | A | 10553.14A | D | A | A | A | 51 | 50.5 | C | 2 | D | D | A | B |

**JEE ADVANCED ARCHIVE (Questions 1-45)**
| Q | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|----|----|----|----|----|----|
| Ans | C | B | B | A | C | D | C | C | D | B | B | C | B | B | A |
| Q | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
| Ans | C | B | D | B | D | C | B | A | C | B | C | D | C | A | D |
| Q | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 |
| Ans | C | D | A | C | A | B | D | B | C | B | A | A | B | B | A |

---

### MODERN PHYSICS: LEVEL 0 (EASY)

**1.** Draw graphs showing variation of photoelectric current with applied voltage for two incident radiations of equal frequency and different intensities. Mark the graph for the radiation of higher intensity.

**2.** Show graphically, the variation of the de Broglie wavelength (λ) with the potential (V) through which an electron is accelerated from rest.

**3.** Figure shows a plot of `1/√V` vs the de Broglie wavelength 'λ' in the case of two particles having same charge 'q' but different masses m₁ and m₂ which line (A to B) represents a particle of large mass?

**4.** Why is the classical (Rutherford) model for an atom of electron orbiting around the nucleus not able to explain the atomic structure?

**5.** A nucleus undergoes β⁻ decay. How does its (i) mass number (ii) atomic number change?

---

### MODERN PHYSICS: LEVEL 1

**6.** (i) Monochromatic light of frequency 6.0 × 10¹⁴ Hz is produced by a laser. The power emitted is 2.0 × 10⁻³ W. Estimate the number of photons emitted per second on an average by the source.
(A) 3.3 × 10¹⁵ (B) 3.3 × 10¹⁶ (C) 3.3 × 10¹⁷ (D) 3.3 × 10¹⁸

**7.** Write three basic properties of photons which are used to obtain Einstein's photoelectric equation. Use this equation to drawn a plot of maximum kinetic energy of the electrons emitted versus the frequency of incident radiation.

**8.** The two lines marked 'A' and 'B' in the given figure, show a plot of de Broglie wavelength λ versus `1/√V`, where V is the accelerating potential, for nuclei ²H and ³H. (i) What does the slope of the lines represent? (ii) Identify which lines correspond to these nuclei.

**9.** Find out the wavelength of the electron orbiting in the ground state of hydrogen atom.

**10.** A 12.75 eV electron beam is used to excite a gaseous hydrogen atom at room temperature. Determine the wavelengths and the corresponding series of the lines emitted.

**11.** If both the number of protons and neutrons in a nuclear reaction is conserved, in what way is mass converted into energy (or vice versa)? explain given one example.

**12.** Calculate the energy in fusion reaction: ²H + ²H → ³He + n where B.E. of ²H = 2.23 MeV and of ³He = 7.73 MeV.

---

### MODERN PHYSICS: LEVEL 2

**91.** When a monochromatic point source of light is at a distance of 0.2 m from a photoelectric cell, the cut-off voltage and saturation current are respectively 0.6 V and 18.0 mA. If the same source is placed 0.6 m away from the photoelectric cell, then:
(A) the stopping potential will be 0.2 volt (B) the stopping potential will be 0.6 volt
(C) the saturation current will be 6.0 mA (D) the saturation current will be 2.0 mA

**92.** Work function of a metal X equals ionisation energy of Li²⁺ ion in second excited state. Work function of another metal Y equals ionisation energy of He⁺ ion with electron in n = 4. Now a photon of energy x falls on both the metals such that maximum kinetic energy of photoelectron emitted from metal X is half that of photoelectron emitted from metal Y. which of the following is (are) correct?
(A) x = -0.875E (B) x = -1.75E (C) As x increases, difference in maximum kinetic energy of photo electrons increase (D) As x increases, difference in maximum kinetic energy of photo electrons remains constant

**93.** In a photoelectric experiment, when light of wavelength 330 nm is incident on a metal plate, a potential difference V₀ must be applied across the vacuum tube to reduce the photoelectric current to zero. If the wavelength of the light is changed to 220 nm, the potential difference that must be applied to keep the photoelectric current zero is 2V₀. The value of V₀ (in Volts) is (hc = 1240 eV·nm): ___

**96.** In photoelectric effect match the following table.
| Column 1 | Column 2 |
|----------|----------|
| (A) If frequency of incident light is increased | (P) Stopping potential may increase |
| (B) If intensity of incident light is increased | (Q) Stopping potential must increase |
| (C) If work function of metal is increased | (R) Photoelectric effect may stop |
| | (S) None |

**97.** An α particle and a proton are accelerated from rest by a potential difference of 100 V. After this, their de Broglie wavelength are λₐ and λₚ respectively. The ratio `λₚ/λₐ` to the nearest integer, is: ___

**98.** Let K₁ be the maximum kinetic energy of photoelectrons emitted by light of wavelength λ₁ and K₂ corresponding to wavelength λ₂. If λ₁ = 2λ₂ then: [Photoelectrons are emitted by same metal]
(A) 2K₁ = K₂ (B) K₁ = 2K₂ (C) K₁ ≤ K₂/2 (D) K₁ > 2K₂

**99.** An electron and a photon have same wavelength. If p is the momentum of electron and E is the energy of photon. The magnitude of p/E in SI unit is:
(A) 3.0 × 10⁻⁸ (B) 3.33 × 10⁻⁹ (C) 9.1 × 10⁻³¹ (D) 6.64 × 10⁻³⁴

**100.** Two electrons are moving with the same speed v. One electron enters a region of uniform electric field while the other enters a region of uniform magnetic field, then after sometimes if the de Broglie wavelengths of the two are λ₁ and λ₂, then:
(A) λ₁ = λ₂ (B) λ₁ > λ₂ (C) λ₁ < λ₂ (D) λ₁ > λ₂ or λ₁ < λ₂

**101.** A sphere of radius R is exposed to a parallel beam of radiation of intensity I as shown in the figure. Choose the correct option(s) of the following:
(A) If the surface of the sphere is completely reflecting, radiation force on the sphere is `2IπR²/c`
(B) If the surface of the sphere is completely absorbing, radiation force on the sphere is `IπR²/c`
(C) If surface of the sphere is completely reflecting, radiation force on the sphere is `IπR²/c`
(D) If surface of the sphere is partially reflecting with reflection coefficient 0.3 and absorption coefficient 0.7, the radiation force in the sphere is `1.7IπR²/c`

**102.** A parallel beam of monochromatic light of wavelength 663 nm is incident on a totally reflecting plane mirror. The angle of incidence is 60° and the number of photons striking the mirror per second is 1.0 × 10¹⁹. The force exerted by light beam on the mirror is x × 10⁻⁸ N then value of x is: ___

**103.** The ratio between total acceleration of the electron in singly ionized helium atom and hydrogen atom (both in ground state) is:
(A) 1 (B) 8 (C) 4 (D) 16

**104.** The shortest wavelength of the Bracket series of a hydrogen like atom (atomic number = Z) is the same as the shortest wavelength of the Balmer series of hydrogen atom. The value of Z is:
(A) 2 (B) 3 (C) 4 (D) 6

**105.** According to Bohr's theory of hydrogen atom, the product of the binding energy of the electron in the nth orbit and its radius in the nth orbit:
(A) is proportional to n² (B) in inversely proportional to n³
(C) has a constant value of 10.2eV · Å (D) has a constant value of 7.2eV · Å

---

### MISCELLANEOUS

**1.** If a surface has a work function 4.0 eV, what is the maximum velocity of electrons liberated from the surface when it is irradiated with ultraviolet radiation of wavelength 0.2 μm?
(A) 4.4 × 10⁵ m/s (B) 8.8 × 10⁵ m/s (C) 8.8 × 10⁶ m/s (D) 4.4 × 10⁷ m/s

**2.** The ratio of de-Broglie wavelength of molecules of hydrogen and helium which are at temperatures 27°C and 127°C respectively will be:
(A) √(7/15) (B) √(8/15) (C) √(3/8) (D) √(3/4)

**3.** In a photoelectric setup, a point source of light of power 3.2 × 10⁻³ W emits monoenergetic photons of energy 5.0 eV. The source is located at a distance of 0.8 m from the centre of a stationary metallic sphere of work function 3.0 eV and of radius 8.0 × 10⁻³ m. The efficiency of photoelectron emission is 1 for every 10⁶ incident photons. Calculate the number of photoelectrons emitted per second.
(A) 10³ (B) 10⁴ (C) 5 × 10⁴ (D) 10⁵

**4.** It is observed that photoelectron emission stops at a certain time t after the light source is switched on. It is due to the retarding potential developed in the metallic sphere due to left over positive charges. The stopping potential (V) can be represented as:
(A) 2(KEₘₐₓ/e) (B) (KEₘₐₓ/e) (C) (KEₘₐₓ/3e) (D) (KEₘₐₓ/2e)

**5.** Evaluate time t (in minutes): ___

**6.** Assuming that 50 percent of this intensity is reflected and 50% is absorbed, determine the radiation pressure on this horizontal surface (in pascals).
(A) 8.2 × 10⁻⁶ (B) 5 × 10⁻⁶ (C) 3 × 10⁻⁵ (D) 6 × 10⁻⁵

**7.** Find the ratio of this pressure to atmospheric pressure P₀ (about 1 × 10⁵ Pa) at sea level.
(A) 5 × 10⁻¹¹ (B) 4 × 10⁻⁸ (C) 6 × 10⁻¹² (D) 8 × 10⁻¹¹

**8.** The electron in a hydrogen atom makes a transition n₁ → n₂, where n₁ and n₂ are the principal quantum numbers of two states. Assume the Bohr model to be valid. If the time period of the electron in the initial state is eight times that in the final state then the possible values of n₁ and n₂ are:
(A) n₁ = 4, n₂ = 2 (B) n₁ = 8, n₂ = 2 (C) n₁ = 8, n₂ = 1 (D) n₁ = 6, n₂ = 3

**9.** A proton with kinetic energy K describes a circle of radius r in a uniform magnetic field. An α-particle with kinetic energy K moving in the same magnetic field will describe a circle of radius:
(A) r/2 (B) r (C) 2r (D) 4r

**10.** Match the column I with column II.
| Column I | Column II |
|----------|-----------|
| (A) Mass of products formed is less than the original mass of the system in | (p) α decay |
| (B) Binding energy per nucleon increases in | (q) β decay |
| (C) Mass number is conserved in | (r) Nuclear fission |
| (D) Charge number is conserved in | (q) Nuclear fusion |

**11.** A proton of mass m and charge +e is moving in a circular orbit in a magnetic field with energy 1 MeV. What should be the energy of α-particle (mass = 4m and charge = +2e), so that it can revolve in the path of same radius:
(A) 1 MeV (B) 4 MeV (C) 2 MeV (D) 0.5 MeV

**12.** In a hypothetical system, a particle of mass m and charge -3q is moving around a very heavy particle charge q. Assume that Bohr's model is applicable to this system, then velocity of mass m is first orbit is:
(A) 3q²/(2ε₀h) (B) 3q²/(4ε₀h) (C) 3q/(2πε₀h) (D) 3q/(4πε₀h)

---

### JEE MAIN ARCHIVE (2003-2020)

**[2003] 1.** Two identical photo-cathodes receive light of frequencies f₁ and f₂. If the velocities of the photoelectrons (of mass m) coming out are, respectively, v₁ and v₂, then:
(A) v₁ - v₂ = `[2h(f₁ - f₂)/m]^(1/2)` (B) v₁² - v₂² = `2h(f₁ - f₂)/m`
(C) v₁ + v₂ = `[2h(f₁ + f₂)/m]^(1/2)` (D) v₁² - v₂² = `2h(f₁ + f₂)/m`

**[2003] 2.** In the nuclear fusion reaction ²H + ²H → ³He + n, given that the repulsive potential energy between the two nuclei is -7.7 × 10⁻¹⁴ J. The temperature at which the gases must be heated to initiate the reaction is nearly [Boltzmann's constant k is 1.38 × 10⁻²³ J/K]:
(A) 10⁹ K (B) 10⁷ K (C) 10⁵ K (D) 10³ K

**[2004] 4.** According to Einstein's photoelectric equation, the plot of the kinetic energy of the emitted photoelectrons from a metal versus the frequency of the incident radiation gives a straight line whose slope:
(A) Depends on the nature of the metal used (B) Depends on the intensity of the radiation
(C) depends both on the intensity of the radiation and the metal used (D) Is the same for all metals and independent of the intensity of the radiation

**[2005] 8.** A photocell is illuminated by a small bright source placed 1 m away. When the same source of light is placed 1/2 m away, the number of electrons emitted by the photocathode would:
(A) Increase by a factor of 2 (B) decrease by a factor of 2
(C) Increase by a factor of 4 (D) decrease by a factor of 4

**[2005] 9.** If the kinetic energy of a free electron doubles, its de Broglie wavelength changes by the factor:
(A) √2 (B) 1/√2 (C) 2 (D) 1/2

**[2006] 12.** The threshold frequency for a metallic surface corresponds to an energy of 6.2 eV and the stopping potential for a radiation incident on this surface is 5V. The incident radiation lies in:
(A) X-ray region (B) ultra-violet region (C) Infra-red region (D) visible region

**[2007] 13.** If the binding energies per nucleon in ²H and ³He nuclei are 5.60 MeV and 7.06 MeV, respectively, then in the reaction P + ²H → 2 ³He, the energy of proton must be:
(A) 1.46 MeV (B) 39.2 MeV (C) 28.24 MeV (D) 17.22 MeV

**[2010] 27.** This question has statement 1 and statement 2. Of the four choices given after the statements, choose the one that best describes the two statements.
Statement 1: When ultraviolet light is incident on a photocell, its stopping potential is V₀ and the maximum kinetic energy of the photoelectrons is Kₘₐₓ. When the ultraviolet light is replaced by X-rays, Both V₀ and Kₘₐₓ increase.
Statement 2: The maximum kinetic energy and the stopping potential of photoelectrons emitted from a surface are linearly dependent on the frequency of incident light.
(A) Statement 1 is true but statement 2 is false (B) Statement 1 is true, statement 2 is true; statement 2 is the correct explanation of statement 1
(C) Statement 1 is true, statement 2 is true; statement 2 is not the correct explanation of statement 1 (D) Statement 1 is false but statement 2 is true

**[2011] 28.** Energy required for the electron excitation in Li²⁺ from the first to the third Bohr orbit is:
(A) 12.1 eV (B) 36.3 eV (C) 108.8 eV (D) 122.4 eV

**[2012] 30.** Hydrogen atom is excited from ground state to another state with principal quantum number equal to 4. Then the number of spectral lines in the emission spectra will be:
(A) 2 (B) 3 (C) 5 (D) 6

---

### JEE ADVANCED ARCHIVE (1981-2020)

**[1981] 1.** An alpha particle of energy 5 MeV is scattered through 180° by a fixed uranium nucleus. The distance of closest approach is of the order of:
(A) 1 Å (B) 10⁻¹⁰ cm (C) 10⁻¹² cm (D) 10⁻¹⁵ cm

**[1982] 2.** The half-life of radioactive radon is 3.8 days. The time at the end of which 1/20ᵗʰ of the radon sample will remain undecayed is: (Given log₁₀ 2 = 0.4343)
(A) 3.8 days (B) 16.5 days (C) 33 days (D) 76 days

**[1985] 5.** The equation ⁴₂H + ⁴₂H → ³₂He + 2e⁻ + 26 MeV represents:
(A) β-decay (B) γ-decay (C) fusion (D) fission

**[1987] 8.** During a negative beta decay:
(A) An atomic electron is emitted (B) An electron which is already present within the nucleus is ejected
(C) A neutron in the nucleus decays emitting an electron (D) A part of binding energy of the nucleus is converted into an electron

**[1998] 19.** X-rays are produced in an X-ray tube operating at a given accelerating voltage. The wavelength of the continuous X-rays has values from:
(A) 0 and ∞ (B) λₘᵢₙ to ∞; where λₘᵢₙ > 0
(C) 0 to λₘₐₓ; where λₘₐₓ < ∞ (D) λₘᵢₙ to λₘₐₓ; where 0 < λₘᵢₙ < ∞

**[2000] 28.** Imagine an atom made up of a proton and a hypothetical particle of double the mass of the electron but having the same charge as the electron. Apply the Bohr atom model and consider all possible transitions of this hypothetical particle to the first excited level. The longest wavelength photon that will be emitted has wavelength λ (Given h in terms of the Rydberg constant R for the hydrogen atom) equal to:
(A) 9/(5R) (B) 18/(5R) (C) 18/(5R) (D) 4/R

**[2008] 44.** Statement-I: If the accelerating potential in an X-ray tube is increased, the wavelength of the characteristic X-ray does not change.
Statement-II: When an electron beam strikes the target in an X-ray tube, part of the kinetic energy is converted into X-ray energy.
(A) If both Statement-I and Statement-II are true, Statement-II is the correct explanation of the Statement-I
(B) If both Statement-I and Statement-II are true, Statement-II is not the correct explanation of the Statement-I
(C) If Statement-I is true but Statement-II is false
(D) If Statement-I is false but Statement-II is true

**[2019] 66.** A radionuclide with disintegration constant λ is produced in a reactor at a constant rate α(= 2λ) nuclei per second. At t = 0, there are no nuclei present in the reactor. During time t < ∞ there are no nuclei present in the reactor. During time t < ∞ if the ratio of the sum of stable ₂₀Ca and ₁₈Ar nuclei to the radioactive ₁₉K nuclei is 99, the value of t will be:
(A) 2.3 (B) 1.15 (C) 4.6 (D) 9.2
