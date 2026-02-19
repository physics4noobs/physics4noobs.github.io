# Electrostatics & Capacitance

## Overview
Electrostatics deals with the study of electric charges at rest and their interactions through electric fields and potentials. This module covers fundamental concepts including Coulomb's Law, electric field theory, Gauss's Law, electric potential, and capacitance. The charge can be produced through friction, electrostatic induction, or conduction. Conductors allow electricity to pass while insulators do not. The theory includes field concepts, potential differences, and the behavior of capacitors in series and parallel configurations.

---

## 1. Coulomb's Law and the Electric Field

### Concepts
- Electric charges can be produced through friction (electrons transfer between bodies), electrostatic induction (charges redistribute in conductors), and conduction (direct contact between charged bodies)
- Conservation of charge: electric charge is neither created nor destroyed, only transferred
- Conductors allow electricity to pass through due to free electrons; insulators do not
- Electrostatic interaction is the force between charged bodies
- Electric field is defined as a region of influence around charged bodies where they exert force on other charges

### Formulas
- `F = (1/4πε₀) × (|q₁q₂|/r²)` - Coulomb's Law, where `1/(4πε₀) = 9 × 10⁹ N⋅m²/C²`
- `ε₀` - permittivity of free space
- `k` - dielectric constant (k = 1 for air/vacuum)
- `F = k₁ × (|q₁q₂|/r²)` - Force in a dielectric medium
- `E = |q|/(4πε₀r²)` - Electric field created by a point charge
- `E = q/(4πε₀r²) r̂` - Vector form of electric field (direction away from positive charge, towards negative charge)
- `F = qE` - Force on a charge in an electric field

### Important Notes
- For point charges, the force is proportional to the product of charges and inversely proportional to the square of distance
- Gravitational and electrical interactions are similar but differ in that there is only one type of gravitational charge (mass), while there are two types of electric charges (+ve and -ve)
- Electric field intensity E is a vector quantity measuring field strength and direction
- Direction of field intensity is away from positive charges and towards negative charges

### Worked Example
**Q:** Two point charges q and -q are separated by distance 2ℓ. Find the dipole moment.
**A:**
- Dipole moment p = qd, where d is the separation between charges
- p = q(2ℓ) = 2qℓ
- Direction: from -q to +q (along the dipole axis)

---

## 2. Electric Field Lines and Properties

### Concepts
- Electric lines of force are imaginary lines representing the electric field direction
- Tangent to field lines gives direction of field intensity at any point
- Lines originate from positive charges and end on negative charges
- Lines never intersect each other
- Lines are always normal to conductor surfaces
- Closer spacing indicates higher field intensity; wider spacing indicates lower intensity
- Field is zero at null points (between equal charges of same sign)

### Formulas
- Electric field due to a group of point charges: `E = E₁ + E₂ + E₃ + ...` (vector sum)
- Units: `N/C` (Newton per Coulomb) or `V/m`

### Important Notes
- Field lines visualize field properties: continuous curves starting from +q and ending on -q
- Equal charges: field is zero at the midpoint between them (null point)
- Opposite charges: field lines go from positive to negative charge

### Worked Example
**Q:** Sketch electric field lines for two equal +q charges and two opposite charges (+q and -q).
**A:**
- For two equal +q charges: lines emanate outward from each charge; there is a null point midway between them
- For +q and -q charges: lines start from +q and terminate on -q, with uniform field between them

---

## 3. Charged Particle Motion in Electric Field

### Concepts
- A charged particle in an electric field experiences a constant force and hence constant acceleration
- If initial velocity is parallel or zero, motion is along the field direction
- If initial velocity is at an angle to the field, the trajectory is parabolic
- Motion equations follow kinematics with acceleration a = qE/m

### Formulas
- `a = qE/m` - Acceleration of charged particle in uniform field
- `F = qE` - Force on charge in field
- For motion perpendicular to field: `a = qE/m j`
- Velocity components: `Vₓ = u`, `Vᵧ = (qE/m)t`
- Position: `x = ut`, `y = (1/2)(qE/m)t²`
- Equation of trajectory: `y = (1/2)(qE/m)(x/u)²` - Parabolic path

### Important Notes
- If initial velocity is zero or parallel to field, particle moves in straight line with constant acceleration
- If initial velocity is perpendicular to field, particle follows parabolic trajectory (similar to projectile motion)
- Acceleration is constant throughout the motion in uniform field

### Worked Example
**Q:** An electron with kinetic energy 2 keV enters at right angles to a uniform electric field of 1.2 × 10⁵ N/C. If the field region length is 1.5 cm, find the deflection.
**A:**
- Initial KE: (1/2)mu² = 2000 eV
- u = √(4000e/m)
- Acceleration: a = eE/m
- Time in field: t = length/u = 1.5 cm / u
- Deflection: y = (1/2)at² = (eE/2m)(t²)
- y = 3.375 × 10⁻⁴ m = 0.3375 mm

---

## 4. Electric Dipole

### Concepts
- An electric dipole consists of two equal and opposite charges separated by a fixed distance
- Dipole moment is a vector quantity directed from -q to +q
- Electric field of a dipole varies with position and angle
- Dipole in external field experiences torque and potential energy
- Field at axial points is twice the equatorial field for short dipoles

### Formulas
- `p = 2qℓ` - Dipole moment (vector from -q to +q)
- **Axial field (on dipole axis at distance r):**
  - `Eₐ = 2p/(4πε₀r³)` - Short dipole approximation
- **Equatorial field (perpendicular to axis):**
  - `Eₑ = -p/(4πε₀r³)`
- **General formula (at angle θ to dipole axis):**
  - `E = (p/4πε₀r³)√(1 + 3cos²θ)`
- **Torque on dipole in uniform field:**
  - `τ = pE sin θ` or `τ = p × E`
- **Potential energy of dipole:**
  - `U(θ) = -pE cos θ = -p · E`

### Important Notes
- Dipole field is stronger along the axial direction than equatorial direction
- At axis: E is along dipole moment direction (for axial field from +q)
- At equator: E is opposite to dipole moment direction
- When θ = 0°: dipole is in stable equilibrium (aligned with field)
- When θ = 180°: dipole is in unstable equilibrium (opposite to field)
- Potential energy depends on angle between dipole moment and field

### Worked Example
**Q:** A dipole with moment p = 6.2 × 10⁻³⁰ C⋅m is in an external field of 1 × 10⁵ N/C. Find maximum torque and work to rotate it from θ = 0° to θ = 90°.
**A:**
- Maximum torque: τ = pE sin 90° = 6.2 × 10⁻³⁰ × 10⁵ = 6.2 × 10⁻²⁵ N⋅m
- Work = ΔU = U(90°) - U(0°) = (-pE cos 90°) - (-pE cos 0°) = 0 - (-pE) = pE = 6.2 × 10⁻²⁵ J

---

## 5. Continuous Charge Distributions

### Concepts
- For continuous charge distributions, divide charge into infinitesimal elements
- Each element dq is treated as a point charge
- Total field is the integral (vector sum) of all field contributions
- Charge distribution can be linear (λ), surface (σ), or volumetric (ρ)
- Symmetry simplifies calculations significantly

### Formulas
- `dE = (1/4πε₀) × (dq/r²)` - Field from infinitesimal element
- `E = ∫dE` - Total field (vector integral)
- **Linear charge density:** `dq = λ dx` (C/m)
- **Surface charge density:** `dq = σ dA` (C/m²)
- **Volume charge density:** `dq = ρ dV` (C/m³)
- **For infinite line charge:** `E = λ/(2πε₀r)` - perpendicular to line
- **For infinite sheet charge:** `E = σ/(2ε₀)` - perpendicular to sheet
- **For charged ring on axis at distance x:** `E = (Qx)/(4πε₀(x² + R²)^(3/2))` - along axis

### Important Notes
- Use Cartesian components and integration when symmetry is not straightforward
- For line charges, the perpendicular bisector passes through zero field point
- For sheet charges, field is uniform and independent of distance
- Symmetry argument is crucial: components perpendicular to symmetry axis cancel

### Worked Example
**Q:** A uniform line charge λ (C/m) exists along the x-axis from -a to +a. Find the field at a perpendicular distance r on the perpendicular bisector.
**A:**
- By symmetry, x-component cancels
- Using `dE = (λ dx)/(4πε₀(r² + x²))`
- Only y-component remains: `E = λ/(2πε₀r) × a/√(r² + a²)`
- Final result: `E = λa/(2πε₀(r² + a²)^(1/2))`

---

## 6. Electric Flux and Gauss's Law

### Concepts
- Electric flux measures the number of field lines passing through a surface
- Flux depends on field strength, area, and angle between field and surface normal
- Gauss's Law relates flux through a closed surface to enclosed charge
- For closed surfaces, outward flux is positive, inward flux is negative
- Gauss's Law is most useful for spherical, cylindrical, and planar symmetries

### Formulas
- **Flux through flat surface:** `φ = E·A = EA cos θ`
- **Flux through curved surface:** `φ = ∫E·dA` (surface integral)
- **Gauss's Law:** `∮E·dA = q/ε₀` (for closed surface)
- **For continuous charge distribution:** `∮E·dA = (1/ε₀)∫ρ dV`
- **Infinite sheet charge:** `E = σ/(2ε₀)`
- **Infinite line charge:** `E = λ/(2πε₀r)`
- **Uniformly charged sphere (r > R):** `E = Q/(4πε₀r²)`
- **Uniformly charged sphere (r < R):** `E = (ρr)/(3ε₀)` or `E = Qr/(4πε₀R³)`

### Important Notes
- Flux is a scalar quantity and can be positive or negative
- A Gaussian surface is an imaginary closed surface chosen for convenience
- Gauss's Law applies even when charge is not uniformly distributed
- For conductors: all charge resides on the surface; field inside is zero
- Symmetry determines the choice of Gaussian surface shape

### Worked Example
**Q:** Find the electric field inside and outside a uniformly charged sphere of radius R carrying total charge Q with charge density ρ.
**A:**
- **For r > R:** Using Gauss's Law with spherical surface: `φ = E(4πr²) = Q/ε₀`, so `E = Q/(4πε₀r²)`
- **For r < R:** Enclosed charge: `q = ρ(4/3)πr³ = Q(r/R)³`, so `E(4πr²) = Q(r/R)³/ε₀`, giving `E = Qr/(4πε₀R³)`

---

## 7. Electric Potential

### Concepts
- Electric potential is the work done per unit charge in bringing a test charge from infinity to a point
- Potential is a scalar quantity (unlike field which is a vector)
- Potential difference between two points is independent of path (conservative field)
- Relation between field and potential: field is the negative gradient of potential
- Equipotential surfaces are perpendicular to field lines; no work is done moving along equipotential

### Formulas
- `V = W/q` - Potential as work per unit charge
- `V(r) = (1/4πε₀) × (q/r)` - Potential due to point charge
- `Vₐ - Vᵦ = -∫ᴮₐ E·dr` - Potential difference (path-independent)
- `E = -dV/dr` - Relation between field and potential (one-dimensional)
- **For point charge:** `Vₐ = kq/r` where k = 9 × 10⁹ N⋅m²/C²
- **For group of charges:** `V = V₁ + V₂ + V₃ + ...` (scalar sum)
- **For continuous distribution:** `V = ∫(dq)/(4πε₀r)`
- **Uniform field:** `Vₐ - Vᵦ = E·AB` (E·displacement)

### Important Notes
- Potential at infinity is taken as reference (V(∞) = 0)
- Sign of potential depends on sign of charge: positive for +q, negative for -q
- Equipotential surfaces for point charge are concentric spheres
- Equipotential surfaces for uniform field are planes perpendicular to field
- No work is done in moving a charge along an equipotential surface

### Worked Example
**Q:** Two point charges q and 2q are at distance 6a. Find the locus of points where potential is zero.
**A:**
- Total potential: `V = q/(4πε₀x²+y²) + 2q/(4πε₀((x-6a)²+y²)) = 0`
- Simplifying: `1/√(x²+y²) = -2/√((x-6a)²+y²)`
- Squaring and solving: `(x-6a)² = 4x²+4y²`
- Result: `x² - (6a)x = 4x² + 4y²` → `(x-6a)² = 4(x²+y²)` gives locus `x = (x-6a)² = 4x²+4y²`

---

## 8. Electric Potential Energy and Energy Storage

### Concepts
- Potential energy in electric field is stored similar to gravitational potential energy
- Work done against electric field is stored as potential energy
- Energy can be stored in the form of kinetic energy (when charge is released)
- For a system of charges, total energy is the sum of all pairwise interactions
- Energy density in electric field is proportional to E²

### Formulas
- **Energy of two point charges:** `U = (1/4πε₀) × (q₁q₂/r)`
- **Energy of system of charges:** `U = (1/2)∑∑(qᵢqⱼ)/(4πε₀rᵢⱼ)` (i≠j)
- **Work done by external agent:** `W = q(Vᴮ - Vₐ)`
- **Energy conservation:** `Total KE at A = Total KE at B` (when potential energy decreases)
- **Energy density:** `u = (1/2)ε₀kE²` per unit volume
- **Total energy in field:** `U = ∫(1/2)ε₀kE² dV`

### Important Notes
- When a charge is released in an electric field, it loses potential energy and gains kinetic energy
- Work done on a charge is independent of path (conservative force)
- Total mechanical energy (KE + PE) is conserved in electric fields
- For uniform charge distribution in sphere: energy = (3Q²)/(20πε₀R)

### Worked Example
**Q:** A ball of mass 10⁻³ kg and charge 10⁻⁴ C is released from rest at 10 cm from a fixed charge of 1 × 10⁻⁴ C. Find the velocity at 20 cm distance.
**A:**
- Initial: V₁ = 600 V (at 10 cm), Final: V₂ = 0 V (at 20 cm)
- Using energy conservation: `qV₁ + 0 = (1/2)mv² + qV₂`
- `10⁻⁴ × 600 = (1/2) × 10⁻³ × v²`
- v = 10.95 m/s ≈ 11 m/s

---

## 9. Conductors in Electric Field

### Concepts
- Electric field inside a conductor is always zero (charges redistribute to cancel field)
- All excess charge resides on the surface of a conductor
- The surface of a conductor is an equipotential surface
- Electric field lines are perpendicular to conductor surface
- Charge density is highest at regions of highest curvature (sharp points)

### Formulas
- **Field outside conductor:** `E = σ/ε₀` (perpendicular to surface)
- **Potential inside conductor:** V = constant (equipotential)
- **Field inside conductor:** E = 0

### Important Notes
- Charges in a conductor rearrange instantly to make internal field zero
- Surface charge density σ is not uniform; higher at sharper points
- Conducting surfaces are always equipotential
- A Gaussian surface inside the conductor encloses no charge
- Lightning rods use this principle: place pointed ends at sharp points to discharge

### Worked Example
**Q:** An isolated metal shell has uniform surface charge density -σ on its inner surface of radius a and uniform charge density σ on its outer surface of radius b. What can you deduce about the field inside the hollow region?
**A:**
- Using Gauss's Law through a surface in the hollow region: field must be zero
- This is because the net enclosed charge by any Gaussian surface in the hollow is zero
- Therefore, E = 0 in the hollow region

---

## 10. Basic Capacitor Concepts

### Concepts
- A capacitor is an arrangement of two conductors with equal and opposite charges separated by an insulator
- Capacitance is defined as the ratio of charge to potential difference: C = Q/V
- The same magnitude of charge exists on both plates
- Potential difference is proportional to charge
- Capacitors store energy in the electric field between plates

### Formulas
- `C = Q/V` - Definition of capacitance
- `U = (1/2)CV²` or `U = (1/2)Q²/C` or `U = (1/2)QV` - Energy stored
- Unit: Farad (F), where 1 μF = 10⁻⁶ F
- `1 μF = 10⁻⁶ F` - Common conversion
- **Parallel Plate Capacitor:** `C = ε₀kA/d` where k is dielectric constant, A is plate area, d is separation

### Important Notes
- Net charge on capacitor as a whole is zero
- "Charge on capacitor" refers to magnitude of charge on each plate (one positive, one negative)
- Capacitance depends on geometry and dielectric constant, not on voltage or charge
- For vacuum between plates, k = 1

### Worked Example
**Q:** A parallel plate capacitor has plates 5 mm apart with area 2 m². What is the capacitance?
**A:**
- Using `C = ε₀A/d`
- `C = (8.85 × 10⁻¹² × 2)/(5 × 10⁻³)`
- `C = 3.54 × 10⁻⁹ F = 3.54 nF`

---

## 11. Parallel Plate Capacitor

### Concepts
- Most common type of capacitor with two parallel conducting plates
- Electric field between plates is uniform (for closely spaced plates)
- Field is perpendicular to the plates
- The field is created by surface charge density on plates
- Field outside plates is negligible (cancelled)

### Formulas
- `E = σ/(kε₀)` - Electric field between plates (σ is surface charge density)
- `V = Ed = (σ/kε₀)d = Q/(kε₀A)d` - Potential difference
- `C = kε₀A/d` - Capacitance for parallel plate capacitor
- `V = E·d` (for uniform field, using E·dr)
- Relation: `V = Q/C`, so `C = Q/V = kε₀A/d`

### Important Notes
- Field magnitude depends on surface charge density σ = Q/A
- Dielectric constant k reduces the field by factor k compared to vacuum
- Capacitance is independent of voltage and charge; depends only on geometry
- Inserting dielectric increases capacitance by factor k

### Worked Example
**Q:** A parallel plate capacitor with plates 5 mm apart and 2 m² area is connected to 10,000 V. Find: (a) capacitance, (b) charge, (c) field, (d) energy stored.
**A:**
- (a) `C = ε₀A/d = (8.85 × 10⁻¹² × 2)/(5 × 10⁻³) = 3.54 μF`
- (b) `Q = CV = 3.54 × 10⁻⁶ × 10,000 = 35.4 μC`
- (c) `E = V/d = 10,000/(5 × 10⁻³) = 2 × 10⁶ V/m`
- (d) `U = (1/2)CV² = (1/2) × 3.54 × 10⁻⁶ × (10,000)² = 177 J`

---

## 12. Isolated Sphere as a Capacitor

### Concepts
- A conducting sphere can act as a capacitor with earth as the second plate
- Sphere at potential V and infinite earth at zero potential
- Capacitance depends only on sphere radius
- Larger sphere has larger capacitance

### Formulas
- `V = Q/(4πε₀R)` - Potential of isolated sphere
- `C = Q/V = 4πε₀R` - Capacitance of isolated sphere
- Capacitance increases linearly with radius R
- For earth as reference (V_earth = 0)

### Important Notes
- Capacitance of isolated sphere is proportional to its radius
- For a sphere of radius 1 meter: C ≈ 111 pF
- Two concentric spheres (spherical capacitor): `C = 4πε₀ab/(b-a)` where a, b are radii

### Worked Example
**Q:** Find the capacitance of a conducting sphere of radius R = 10 cm.
**A:**
- `C = 4πε₀R = 4π × 8.85 × 10⁻¹² × 0.1`
- `C = 1.11 × 10⁻¹¹ F = 11.1 pF`

---

## 13. Cylindrical Capacitor

### Concepts
- Two coaxial cylinders form a cylindrical capacitor
- Field exists only in the region between cylinders
- Field is radial and depends on distance from axis
- Useful for high voltage applications

### Formulas
- `C = (2πkε₀ℓ)/(log(b/a))` - Cylindrical capacitor
- Where ℓ is length, a and b are inner and outer radii (b > a)
- `C = (2πkε₀ℓ)/(ln(b/a))`

### Important Notes
- Capacitance is proportional to length and logarithmically depends on radius ratio
- Field increases as radius decreases (stronger near inner cylinder)
- Suitable for coaxial cables where constant capacitance per unit length is needed

---

## 14. Spherical Capacitor

### Concepts
- Two concentric spheres form a spherical capacitor
- Inner sphere at positive potential, outer sphere grounded
- Field is radial and depends on distance from center
- Same symmetry as isolated sphere

### Formulas
- `V = 0 - Q/(4πε₀a) - Q/(4πε₀b) = Q/(4πε₀) × (1/a - 1/b)` - Potential difference
- `C = (4πε₀ab)/(b-a)` - Spherical capacitor (without dielectric)
- `C = (4πkε₀ab)/(b-a)` - With dielectric constant k between spheres
- For b → ∞: `C = 4πε₀a` (isolated sphere)

### Important Notes
- Capacitance increases as inner and outer radii get closer
- Similar to parallel plate when b - a is small compared to a

### Worked Example
**Q:** Find the potential difference between two concentric spheres of radii a = 4 cm and b = 10 cm when charged to Q = 1 × 10⁻⁸ C.
**A:**
- `V = Q/(4πε₀) × (1/a - 1/b) = (9 × 10⁹) × 10⁻⁸ × (1/0.04 - 1/0.10)`
- `V = 90 × (25 - 10) = 90 × 15 = 1350 V`

---

## 15. Capacitors in Series and Parallel

### Concepts
- **Series connection:** Charge is same on all capacitors, voltage is distributed
- **Parallel connection:** Voltage is same across all capacitors, charge is distributed
- Equivalent capacitance is calculated using specific formulas
- Series reduces total capacitance; parallel increases it

### Formulas
- **Series:** `1/C = 1/C₁ + 1/C₂` or `C = (C₁C₂)/(C₁+C₂)` for two capacitors
- **Series (general):** `1/C = 1/C₁ + 1/C₂ + 1/C₃ + ...`
- **Parallel:** `C = C₁ + C₂` or `C = C₁ + C₂ + C₃ + ...`
- **Series voltage:** `V₁ = (C₂/(C₁+C₂))V` and `V₂ = (C₁/(C₁+C₂))V`
- **Parallel charge:** `Q₁ = (C₁/(C₁+C₂))Q` and `Q₂ = (C₂/(C₁+C₂))Q`
- **Series charge:** Same Q on all: `Q = C₁V₁ = C₂V₂`

### Important Notes
- Smaller capacitor in series gets larger voltage
- Charge is same on all capacitors in series
- Voltage is same across all capacitors in parallel
- Equivalent capacitance of series is always less than smallest capacitor
- Equivalent capacitance of parallel is always greater than largest capacitor

### Worked Example
**Q:** Two capacitors C₁ = 6 μF and C₂ = 3 μF are connected in series across 18 V battery. Find: (a) equivalent capacitance, (b) voltage across each, (c) charge on each.
**A:**
- (a) `C = (6 × 3)/(6 + 3) = 18/9 = 2 μF`
- (b) `V₁ = (C₂/(C₁+C₂)) × 18 = (3/9) × 18 = 6 V`, `V₂ = (6/9) × 18 = 12 V`
- (c) `Q = CV = 2 × 18 = 36 μC` (same on both)

---

## 16. Dielectric in Capacitors

### Concepts
- Dielectric material between capacitor plates increases capacitance
- Dielectric constant k is the ratio of capacitance with dielectric to capacitance without
- Dielectric reduces the electric field between plates
- Polarization of dielectric molecules creates opposing field

### Formulas
- `C = kC₀ = k(ε₀A/d)` - Capacitance with dielectric
- `E = E₀/k` - Field reduced by dielectric constant
- `V = V₀/k` - Voltage reduced if battery disconnected
- `Q = kQ₀` - Charge increases if battery connected
- `C/C₀ = k` - Dielectric constant definition

### Important Notes
- Dielectric constant k > 1 for all materials
- Typical values: air (≈1), glass (≈6), water (≈80)
- If battery is connected during insertion: voltage stays constant, charge and C increase
- If battery is disconnected: charge stays constant, voltage and E decrease
- Energy density in dielectric: u = (1/2)ε₀kE²

### Worked Example
**Q:** A parallel plate capacitor with plates 0.5 mm apart and area 4 m² is charged to 100 V. A dielectric slab of thickness 0.5 mm (k = 3) is inserted. Find capacitance before and after (if disconnected).
**A:**
- Before: `C₀ = ε₀A/d = 8.85 × 10⁻¹² × 4 / (0.5 × 10⁻³) = 70.8 pF`
- After (with dielectric filling gap): `C = kC₀ = 3 × 70.8 = 212.4 pF`
- After (partially filled, 0.5 mm total): `C = ε₀A/(d-t+t/k) = 70.8/(0.5+0.5/3) × (in appropriate units)`

---

## 17. Charging and Discharging of Capacitors

### Concepts
- Charging: capacitor connected to battery through resistor
- Charge grows exponentially toward final value Q = CE
- Time constant τ = RC determines charging rate
- Discharging: charged capacitor connected across resistor
- Charge decreases exponentially toward zero

### Formulas
- **Charging:** `q(t) = CE(1 - e^(-t/RC))`
- **Voltage during charging:** `V(t) = E(1 - e^(-t/RC))`
- **Current during charging:** `i(t) = (E/R)e^(-t/RC)`
- **Discharging:** `q(t) = q₀e^(-t/RC)`
- **Time constant:** `τ = RC` (time for charge to reach 63% of final value)
- **After time τ:** Charge reaches (1 - 1/e) ≈ 63% of steady state

### Important Notes
- Initially during charging: capacitor acts like short circuit (V_C = 0)
- Finally during charging: capacitor acts like open circuit (i = 0)
- RC time constant determines how fast charging/discharging occurs
- Larger R means slower process; larger C means more charge to transfer

### Worked Example
**Q:** A 1 μF capacitor is charged through 3 × 10⁶ Ω resistor from 4 V source. Find charge and current at t = 1 second.
**A:**
- Time constant: `τ = RC = 3 × 10⁶ × 10⁻⁶ = 3 s`
- Charge at t = 1s: `q = CE(1 - e^(-1/3)) = 1 × 10⁻⁶ × 4 × (1 - e^(-1/3)) = 9.6 × 10⁻⁷ C`
- Current at t = 1s: `i = (E/R)e^(-1/3) = (4/(3×10⁶)) × e^(-1/3) = 9.6 × 10⁻⁷ A`

---

## 18. Energy Considerations in Charging

### Concepts
- Energy supplied by battery is divided into: energy stored in capacitor and heat in resistor
- Not all energy from battery is stored; some is dissipated as heat
- The ratio depends on the resistance and capacitance
- During steady state, no current flows and no more energy is supplied

### Formulas
- **Energy supplied by battery:** `Ei` per second (Power = E × i)
- **Energy stored in capacitor:** `U = (1/2)CV²` or `U = (1/2)Q²/C`
- **Heat dissipated in resistor:** `P = i²R`
- **Rate of energy storage:** `dU/dt = iVc = iq/C`
- Total energy supplied = Energy stored + Heat dissipated

### Important Notes
- When charging: total battery energy = 2 × (energy stored in capacitor) + heat
- Half the battery energy is wasted as heat in resistance (for RC charging)
- Energy storage is efficient only if resistance is minimized

---

## 19. Capacitor with Multiple Dielectric Slabs

### Concepts
- When multiple dielectric slabs are placed in series inside a capacitor
- Electric fields in different slabs are different
- Total voltage is sum of voltages across each slab
- Capacitance calculation requires treating as series combination

### Formulas
- **Series dielectrics:** `1/C = 1/C₁ + 1/C₂` where `C₁ = k₁ε₀A/d₁`, `C₂ = k₂ε₀A/d₂`
- **General form:** `C = ε₀A/(Σ(dᵢ/kᵢ))`
- **Fields in dielectrics:** `E₁ = V/(d₁+d₂) × (k₂/k₁)` and `E₂ = V/(d₁+d₂) × (k₁/k₂)` for equal field case
- **Note:** Field is inversely proportional to dielectric constant: `k₁E₁ = k₂E₂`

### Important Notes
- Dielectric with higher k has lower field and lower voltage drop
- Capacitance location (position) does not affect the equivalent capacitance
- Total capacitance for series is always less than smallest individual capacitance

---

## 20. Capacitor with Dielectric Slab Partially Inserted

### Concepts
- Partially filled capacitor can be treated as two capacitors in parallel
- One filled with dielectric, one with vacuum/air
- Two regions have same voltage, different charges

### Formulas
- **Parallel combination:** `C = C₁ + C₂`
- `C₁ = kε₀A₁/d` (dielectric region, area A₁)
- `C₂ = ε₀A₂/d` (air region, area A₂)
- Where A₁ + A₂ = Total area A

### Important Notes
- Equivalent capacitance is the sum of two capacitors in parallel
- Moving slab with battery connected: voltage constant, charge increases
- Moving slab with battery disconnected: charge constant, voltage decreases

---

## 21. Energy Density in Dielectric

### Concepts
- Energy is distributed throughout the volume of the capacitor
- Energy density is proportional to E²
- Dielectric increases energy storage per unit volume

### Formulas
- **Energy per unit volume:** `u = (1/2)ε₀kE²` (J/m³)
- **Total energy:** `U = ∫(1/2)ε₀kE² dV`
- **For uniform field:** `U = (1/2)ε₀kE² × (Volume)` = `(1/2)ε₀kE² × Ad`

### Important Notes
- Energy density is higher where field is stronger
- Dielectric constant k increases energy density
- In parallel plate capacitor with uniform field E: total energy = (1/2)ε₀kE²Ad

---

## 22. Force on Capacitor Plates

### Concepts
- Capacitor plates attract each other due to opposite charges
- Force is proportional to voltage and capacitance
- Work must be done to separate the plates
- Force calculation uses energy method

### Formulas
- **Force between plates:** `F = (Q²)/(2ε₀A)` or `F = (ε₀AV²)/(2d²)`
- **If battery connected:** Force = (ε₀AE²)/2 (work done to separate plates increases stored energy)
- **If battery disconnected:** Force = (Q²)/(2ε₀A) (work done decreases stored energy)

---

## 23. Practical Considerations

### Concepts
- Breakdown voltage: maximum voltage before dielectric breaks down (ionization)
- Leakage current: small current through dielectric
- Temperature effects on capacitance and dielectric constant
- Frequency effects on capacitance (relevant in AC circuits)

### Formulas
- `E_max = k × E₀` where E₀ is breakdown field strength in vacuum
- Breakdown field for air: ≈ 3 × 10⁶ V/m
- Capacitance change with temperature: `C = C₀(1 + αΔT)` where α is temperature coefficient

### Important Notes
- Dielectric breakdown is irreversible and destroys the capacitor
- Always ensure operating voltage < breakdown voltage
- Real capacitors have small leakage currents
- Capacitors can be connected in series with voltage dividers to share voltage safely

---

## 24. Types of Capacitors and Applications

### Concepts
- Different materials used for different applications
- Selection based on capacitance needed, voltage rating, size constraints
- Common types: ceramic, electrolytic, film, mica capacitors
- Each type has advantages and disadvantages

### Formulas
- Relative permittivity (dielectric constant) for common materials:
  - Vacuum: k = 1
  - Air: k ≈ 1.00054
  - Paper: k ≈ 3.7
  - Glass: k ≈ 6
  - Ceramic: k ≈ 100-10,000
  - Water: k ≈ 80

### Important Notes
- Electrolytic capacitors have high capacitance but are polarized
- Film capacitors are stable and reliable
- Ceramic capacitors are small and cheap
- Mica capacitors have low losses and high stability

---

## Questions

### ANSWER KEYS (Reference)

**Workbook Answer Key -- Level 1 (Q1-45)**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | D | A | B | A | D | B | C | B | B | B | A | B | B | B | C |

| Q# | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | C | A | A | C | A | B | C | B | A | B | A | C | D | C | D |

| Q# | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | D | A | B | D | C | C | C | A | A | D | A | B | B | C | A |

**Workbook Answer Key -- Level 2 (Q106-165)**

| Q# | 106 | 107 | 108 | 109 | 110 | 111 | 112 | 113 | 114 | 115 | 116 | 117 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | C | B | D | B | A | A | B | ABC | ABD | A-S; B-Q; C-R; D-P | C | B |

| Q# | 118 | 119 | 120 | 121 | 122 | 123 | 124 | 125 | 126 | 127 | 128 | 129 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | D | A | D | C | B | C | BC | 3 | AB | B | A-RS, B-R, C-P, D-PQ | B |

| Q# | 130 | 131 | 132 | 133 | 134 | 135 | 136 | 137 | 138 | 139 | 140 | 141 | 142 | 143 | 144 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | ACD | ACD | C | B | B | 0 | A | A | B | A | AC | BC | C | A | B |

| Q# | 145 | 146 | 147 | 148 | 149 | 150 | 151 | 152 | 153 | 154 | 155 | 156 | 157 | 158 | 159 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | 4 | A | A | B | AD | BC | B | D | C | B | B | C | A | B | D |

| Q# | 160 | 161 | 162 | 163 | 164 | 165 |
|---|---|---|---|---|---|---|
| Ans | C | D | C | AD | D | A-Q; B-P; C-T; D-R |

**JEE Main (Archive) Answer Key (Q1-85)**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | D | A | D | B | A | C | D | D | B | D | A | B | C | A | C |

| Q# | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | D | D | B | A | B | C | D | A | C | B | A | C | D | C | D |

| Q# | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | D | B | C | A | C | A | B | B | B | A | B | B | B | C | A |

| Q# | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | C | B | B | C | C | A | B | D | D | D | B | B | C | B | A |

| Q# | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | C | C | B | B | B | C | D | A | D | -48 | D | D | C | D | C |

| Q# | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84 | 85 |
|---|---|---|---|---|---|---|---|---|---|---|
| Ans | C | B | D | C | A | A | D | D | D | B |

**JEE Advanced (Archive) Answer Key**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | C | D | A | B | D | B | A | B | C | B | C | C | D | C | A |

| Q# | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | D | B | C | C | A | A | B | D | A | C | A | C | D | C | C |

| Q# | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | C | D | D | BC | AC | CD | AC | CD | ABCD | AD | ABCD | CD | ABC | ACD | BD |

| Q# | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | CD | AD | AB | BCD | CD | A | B | C | A | A-T; B-R; C-P-S; D-Q | A | 0.63 | 3 | 1 |

| Q# | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | (i-4)(ii-2)(iii-8) | (i-3)(ii-1) | 2 | 6 | 8 | (i-4)(ii-3) | 2 | 2 | 3 | 6 | 6 | 2 | 9 | 180°, 16 | π/2(ML)^1/2/(2μδ) |

| Q# | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84 | 85 | 86 | 87 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | F | F | T | F | T | T | BC | 3.14 | 6.4 | 2 | BC | [5] |

---

### ELECTROSTATICS: LEVEL 0 (EASY)
*Source: CBSE Pattern*

**1.** Why electrostatic field is normal to the surface at every point of a charged isolated conductor?

**2.** What does q₁ + q₂ = 0 signify in electrostatics?

**3.** Name two basic properties of electric charge.

**4.** Which physical quantity has unit NC⁻¹? Is it a vector or scalar quantity?

**5.** A Point charge q is placed at the origin. How does the electric field due to the charge vary with the distance r from the origin?

---

### ELECTROSTATICS: LEVEL 1
*Source: DTS-1 to DTS-7 (Workbook)*

#### DTS-1: Coulomb's Law and Electric Field Due to Point Charge

**1.** If a body is charged by rubbing it, its weight:
(A) Remains precisely constant (B) Increases slightly (C) Decreases slightly (D) May increase slightly or may decrease slightly

**2.** Mark the correct option. The total charge of the universe is constant:
(A) The total charge of the universe is constant (B) The total positive charge of the universe is constant (C) The total negative charge of the universe is constant (D) The total number of charged particles in the universe is constant

**3.** The unit of permittivity of free space, ε₀, is:
(A) Coulomb/Newton-metre (B) Coulomb²/Newton-metre² (C) Newton-metre²/coulomb² (D) Coulomb²/(Newton-metre)²

**4.** Three charges each of +q are placed at the vertices of an equilateral triangle. The charge needed at the centre of the triangle for the charges to be in equilibrium is:
(A) -q/√3 (B) -√3q (C) √3q (D) q/√3

**5.** Three point charges are placed at the corners of an equilateral triangle. Assume that only electrostatic forces are acting. Choose correct statement:
(A) The system will be in equilibrium if the charges have the same magnitude but not all have the same sign (B) The system will be in equilibrium if the charges have different magnitudes and not all have the same sign (C) The system will be in equilibrium if the charges rotate about the centre of the triangle (D) The system can never be in equilibrium

**6.** Mid way between two fixed equal and similar charges, we placed a third equal and similar charge. Which of the following statements is correct, concerned to the equilibrium along the line joining the charges?
(A) The third charge experienced a net force inclined to the line joining the charges (B) The third charge is in stable equilibrium (C) The third charge is in unstable equilibrium (D) The third charge experiences a net force perpendicular to the line joining the charges

**7.** Two small spherical balls, each carrying charge q = 10μC are suspended by two insulated threads of equal length 1 m each, from a point fixed in the ceiling. It is found that at equilibrium, threads are separated by an angle 60° between them as shown in figure, the tension in the thread is:
(A) 0.18 N (B) 18 N (C) 1.8 N (D) None of the above

**8.** Two point charges +4q and +q are placed 30cm apart. At what point on the line joining them is the electric field zero?
(A) 15 cm from charge q (B) 20 cm from charge 4q (C) 7.5 cm from charge q (D) 5cm from charge q

**9.** Charges 2q and -q are placed at (a, 0) and (-a, 0) as shown in the figure. The coordinates of the point at which electric field intensity is zero will be (x, 0) where:
(A) -a < x < a (B) x < -a (C) x > -a (D) 0 < x < a

**10.** The ratio of electrostatic forces between two small spheres with same charges when they are in air to when they are in a medium of dielectric constant K is:
(A) 1 : K (B) K : 1 (C) 1 : K² (D) K² : 1

**11.** The electric field at the centroid of an equilateral triangle carrying an equal charge q at each of the vertices is (Here k = 1/(4πε₀)):
(A) zero (B) √2kq/r² (C) kq/(√3r²) (D) 3kq/r²

**12.** Four charges q, 2q, 3q and 4q are placed at corner A, B, C and D of a square as shown in Figure. The field at centre P of the square has the direction along:
(A) AB (B) CB (C) AC (D) DB

**13.** Five point charges (+q each) are placed at the five vertices of a regular hexagon of side 2a. What is the magnitude of the net electric field at the centre of the hexagon?
(A) 1/(4πε₀a²) q (B) q/(16πε₀a²) (C) √2q/(4πε₀a²) (D) 5q/(16πε₀a²)

**14.** Identify the correct statement about the charges q₁ and q₂:
(A) q₁ and q₂ both are positive (B) q₁ and q₂ both are negative (C) q₁ is positive q₂ is negative (D) q₂ is positive and q₁ is negative

**15.** Figure shows some of the electric field lines corresponding to an electric field. The figure suggests that:
(A) E_A > E_B > E_C (B) E_A = E_B = E_C (C) E_A = E_C > E_B (D) E_A = E_C < E_B

---

#### DTS-2: Electric Field Due to Continuous Charge Distribution and Gauss's Law

**16.** A continuous line of charge of length 3d lies along the x-axis, extending from x + d to x + 4d. The line carries a uniform linear charge density λ. In terms of d.x and any necessary physical constants, find the magnitude of the electric field at the origin:
(A) λ/(5πε₀d) (B) λ/(4πε₀d) (C) 3λ/(16πε₀d) (D) 3λ/(8πε₀d)

**17.** A particle of charge -q and mass m moves in a circle of radius r around an infinitely long line charge of linear charge density +λ. Then time period will be given as:
(A) T = 2πr√(m/(2Kλq)) (B) T² = 4π²m/(2Kλq) (C) T = 1/(2πr)√(2Kλq/m) (D) T = 1/(2πr)√(m/(2Kλq))

**18.** A system consists of a thin charged wire ring of radius r and a very long uniformly charged wire oriented along the axis of the ring, with one of its ends coinciding with the centre of the ring. The total charge on the ring is q and the linear charge density on the straight wire is λ. The interaction force between the ring and the wire is:
(A) λq/(4πε₀r) (B) λq/(2√2πε₀r) (C) 2√2λq/(πε₀r) (D) 4λq/(πε₀r)

**19.** A ring of radius R has charge -Q distributed uniformly over it. A charge q should be placed at the center of the ring such that the electric field becomes zero at a point on the axis of the ring at a distance R from the centre of the ring. The value of q is:
(A) Q (B) Q/2 (C) Q/(2√2) (D) 2√2Q

**20.** Two thin infinite parallel sheets have uniform surface charge densities of +σ and -σ. Electric field in the space between the two sheets is:
(A) σ/ε₀ (B) σ/(2ε₀) (C) 2σ/ε₀ (D) Zero

**21.** A large thin uniformly charged sheet is placed in an external electric field. The electric field on two sides of the sheet is shown in the figure. The surface charge density on the sheet is:
(A) 2ε₀ (B) 4ε₀ (C) 10ε₀ (D) Zero

**22.** A spherical shell of radius R has a uniformly distributed charge +q units. The electric field due to the shell at point:
(A) inside is zero and varies as r⁻¹ outside it (B) inside is non zero constant and varies as r⁻² outside it (C) inside is zero and varies as r⁻² outside it (D) inside is constant and varies as r⁻¹ outside it

**23.** Using Thomson's model of the atom, consider an atom consisting of two electrons, each of charge -e, embedded in a sphere of charge +2e and radius R. In equilibrium, each electron is at distance d from the centre of the atom. What is equilibrium separation between electrons?
(A) R (B) R/2 (C) R/3 (D) R/4

**24.** A positive charge q is placed in a spherical cavity made in a positively charged sphere with uniform volume charge density. The centres of sphere and cavity are displaced by a small distance l. Force on charge q is:
(A) in the direction parallel to vector l (B) in radial direction with respect to centre of cavity (C) in a direction which depends on the magnitude of charge density in sphere (D) direction cannot be determined

**25.** If the linear charge density of a long solid cylinder of radius 1cm is 4μCm⁻¹, then electric field intensity at point 3.6 cm from axis is:
(A) 4 × 10⁵ NC⁻¹ (B) 2 × 10⁶ NC⁻¹ (C) 8 × 10⁷ NC⁻¹ (D) 12 × 10⁷ NC⁻¹

**26.** If the electric field is given by (5i + 4j + 9k), the electric flux through a surface of area 20 unit lying in the Y-Z plane will be:
(A) 100 unit (B) 80 unit (C) 180 unit (D) 200 unit

**27.** A charge q is placed at centre of the open end of a cylindrical vessel. The flux of the electric field through the surface of the vessel is:
(A) q/ε₀ (B) q/(2ε₀) (C) q/(2ε₀) (D) 2q/ε₀

**28.** At the centre of a cubical box, +Q charge is placed. The value of total flux that is coming out of a wall is:
(A) Q/ε₀ (B) Q/(3ε₀) (C) Q/(4ε₀) (D) Q/(6ε₀)

**29.** In figure, +Q charge is located at one of the edges of the cube as shown in figure. Then electric flux through cube due to +Q charge is given as:
(A) +Q/ε₀ (B) +Q/(2ε₀) (C) +Q/(4ε₀) (D) +Q/(8ε₀)

**30.** An infinite, uniformly charged sheet with surface charge density σ cuts through a spherical Gaussian surface of radius R at a distance x from its center, as shown in the figure. The electric flux Φ through the Gaussian surface is:
(A) πR²σ/ε₀ (B) 2π(R² - x²)σ/ε₀ (C) π(R - x)²σ/ε₀ (D) π(R² - x²)σ/ε₀

---

#### DTS-3: Electric Potential

**31.** Potential and field strength at a certain distance from a point charge are 600 V and 200NC⁻¹. Distance of the point from the charge is:
(A) 2 m (B) 4 m (C) 8 m (D) 3 m

**32.** Find the potential at the centre of a square of side √2 m which carries at its four corners, charges q₁ = 3 × 10⁻⁶C, q₂ = -3 × 10⁻⁶C, q₃ = -4 × 10⁻⁶C, q₄ = 7 × 10⁻⁶C:
(A) 2.7 × 10⁴V (B) 1.5 × 10⁴V (C) 3 × 10⁵V (D) 5 × 10⁵V

**33.** The charges 2q, -q and -q are located at the vertices of an equilateral triangle; At the centre of triangle:
(A) The field is zero but potential is non zero (B) The field is non zero but potential is zero (C) Both field and potential are zero (D) both field and potential are non zero

**34.** A half ring of radius R has a charge λ per unit length. Potential at the centre of half ring is:
(A) kλ/R (B) kλ/πR (C) kπλ/R (D) kπλ

**35.** Two concentric spheres of radii R and r have similar charges with equal surface densities (σ). What is the electric potential at their common centre?
(A) σ/ε₀ (B) σ(R - r)/ε₀ (C) σ(R + r)/ε₀ (D) None of these

**36.** A solid sphere of radius R is charged uniformly. The electrostatic potential V is plotted as a function of distance r from the centre of the sphere. Which of the following best represents the resulting curve?
(A) [Graph showing curved potential inside and decreasing outside] (B) [Graph showing flat inside with curved outside] (C) [Graph showing curved inside and decreasing outside] (D) [Graph showing steep decrease]

**37.** A solid sphere of radius R is charged uniformly through out its volume. At what distance from its surface is the electric potential 1/4 of the potential at the centre?
(A) 8R/3 (B) R/3 (C) 5R/3 (D) 2R/3

**38.** Charge Q is uniformly distributed throughout the volume of a solid hemisphere of radius R metres. Then the potential at centre O of hemisphere in volts is:
(A) 1/(4πε₀) × 3Q/(2R) (B) 1/(4πε₀) × 3Q/(4R) (C) 1/(4πε₀) × Q/(4R) (D) 1/(4πε₀) × Q/(8R)

**39.** An electric field is expressed as E = 2i + 3j. Find the potential difference (V_A - V_B) between two points A and B whose position vectors are given by r⃗_A = i + 2j and r⃗_B = 2i + j + 3k:
(A) -1V (B) 1V (C) 2V (D) 3V

**40.** A graph of the x-component of the electric field as a function of x in region of space is shown in figure. The y-and z-components of the electric field are zero in this region. If the electric potential is 10 V at the origin, then the potential at x = 2.0 m is:
(A) 10 V (B) 40 V (C) -10 V (D) 30 V

**41.** In a certain region of space, the electric field is zero. From this, we can conclude that the electric potential in this region is:
(A) Constant (B) Zero (C) Positive (D) Negative

**42.** Figure shows three points A, B and C in a region of uniform electric field E⃗. The line AB is perpendicular and BC is parallel to the field lines. Then which of the following holds good?
(A) V_A = V_B = V_C (B) V_A = V_B > V_C (C) V_A > V_B > V_C (D) V_A > V_B = V_C

**43.** An infinite sheet of charge has surface charge density σ. The separation between two equipotential surfaces, whose potential differ by V is:
(A) σV/(2ε₀) (B) 2ε₀V/σ (C) ε₀V/σ (D) 2σε₀

**44.** The potential of the electric field produced by point charge at any point (x, y, z) is given by V = 3x² + 5. where x, y are in metres and V is in volts. The intensity of the electric field at (-2, 1, 0) is:
(A) +17Vm⁻¹ (B) -17Vm⁻¹ (C) +12 Vm⁻¹ (D) -12Vm⁻¹

**45.** The variation of potential with distance r from a fixed point is shown in figure. The electric field at r = 5m is:
(A) 3 volt/m (B) -3 volt/m (C) 1/3 volt/m (D) 1/3 volt/m

---

#### DTS-4: Electrostatic Potential Energy

**46.** A particle of mass m and charge q is placed at rest in a uniform electric field E and then released. The kinetic energy attained by the particle after moving a distance y is:
(A) qEy² (B) qE²y (C) qEy (D) q²Ey

**47.** A proton, a deuteron and an alpha particle are accelerated through potential difference of V, 2V and 4V respectively. Their velocity will bear a ratio:
(A) 1 : 1 : 1 (B) 1 : √2 : 1 (C) √2 : 1 : 1 (D) 1 : 1 : √2

**48.** A particle of mass 2 g and charge 1 μC is held at a distance 1 metre from a fixed charge of 1 mC. If the particle is released, then speed of the particle when it is at a distance of 10 metres from the fixed charge is:
(A) 100ms⁻¹ (B) 90ms⁻¹ (C) 60ms⁻¹ (D) 45ms⁻¹

**49.** A bullet of mass m and charge q is fired towards a solid uniformly charged sphere of radius R and total charge +q. If it strikes the surface of the sphere with speed u, find the minimum speed u so that it can penetrate through the sphere. (Neglect all resistance forces or friction acting on bullet except electrostatic forces):
(A) q/(√2πε₀mR) (B) q/(4πε₀mR) (C) q/(√8πε₀mR) (D) √3q/(4πε₀mR)

**50.** Two identical particles of mass m carry a charge Q each. Initially one is at rest on a smooth horizontal plane and the other is projected along the plane directly towards first particle from a large distance with speed u. The closest distance of approach will be:
(A) 1/(4πε₀) × Q²/(4mu²) (B) 1/(4πε₀) × 4Q²/(mu²) (C) 1/(4πε₀) × 2Q²/(mu²) (D) 1/(4πε₀) × 3Q²/(mu²)

**51.** If a positive charge is shifted from a low-potential region to a high potential region, the electric potential energy:
(A) Increases (B) Decreases (C) Remains the same (D) May increases or decreases

**52.** Four equal charges Q are placed at the four corners of a square of side a. The work done in removing a charge -Q from the centre of the square to infinity is:
(A) Zero (B) √2Q²/(4πε₀a) (C) √2Q²/(πε₀a) (D) Q²/(2πε₀a)

**53.** Four point charges +q, +q, -q and -q are placed respectively at the corners A, B, C and D of a square of side a. If F is the mid-point of side CD, the work done in carrying an electron of charge -e from O (the centre of the square) to F fill be:
(A) qe/(πε₀a)(1 - 1/√5) (B) qe/(πε₀a)(1 + 1/√5) (C) qe/(πε₀a) (D) Zero

**54.** Charge +q and -q are placed at points A and B respectively which are a distance 2l apart. C is the mid-point between A and B. The work done in moving a charge +Q along the semicircle CRD is:
(A) qQ/(4πε₀L) (B) qQ/(2πε₀L) (C) qQ/(6πε₀L) (D) πQ²/(6πε₀L)

**55.** Between two infinitely long wires having linear charge densities λ and -λ, there are two points A and B as shown in the figure. The amount of work done by the electric field in moving a point charge q₀ from A to B is equal to:
(A) λq₀/(2πε₀) ln 2 (B) 2λq₀/(πε₀) ln 2 (C) 2λq₀/(πε₀) ln 2 (D) λq₀/(πε₀) ln 2

**56.** Identify the wrong statement:
(A) The electrical potential energy of a system of two protons shall increase if the separation between the two is decreased. (B) The electrical potential energy of a proton - electron system will increase if the separation between the two is decreased. (C) The electrical potential energy of a proton - electron system will increase if the separation between the two is increased. (D) The electrical potential energy of system of two electrons shall increase if the separation between the two is decreased.

**57.** Three charges Q₀, -q and -q are placed at the vertices of an isosceles right angle triangle as in the figure. The net electrostatic potential energy is zero if Q₀ is equal to:
(A) q/4 (B) q/(2√2) (C) √2q (D) +q

**58.** Charges 5μC and 10μC are placed 1 m apart. Work done to bring these charges at a distance 0.5 m from each other is:
(A) 9 × 10⁴ J (B) 18 × 10⁴ J (C) 45 × 10⁻² J (D) 9 × 10⁻¹ J

**59.** Two identical charges are placed at the two corners of an equilateral triangle. The potential energy of the system is U. The work done in bringing an identical charge from infinity to the third vertex is:
(A) U (B) 2 U (C) 3 U (D) 4 U

**60.** Four similar point charges q are located at the vertices of a tetrahedron with an edge a, the energy of the interaction of charges is:
(A) 6q²/(4πε₀a) (B) 4q²/(4πε₀a) (C) 3q²/(4πε₀a) (D) q²/(4πε₀a)

---

#### DTS-5: Electric Dipole

**61.** The electric field intensity E, due to an electric dipole of dipole moment p, at a point on the equatorial line is:
(A) parallel to the axis of the dipole and opposite to the direction of dipole moment (B) perpendicular to the axis of the dipole and is directed away from it (C) parallel to the dipole moment (D) perpendicular to the axis of the dipole and is directed towards it

**62.** A and B are two points on the axis and the perpendicular bisector respectively of an electric dipole. A and B are far away from the dipole. If E_A and E_B are:
(A) E_A = E_B (B) E_A = 2E_B (C) E_A = -2E_B (D) E_B = 1/2|E_A|, and E_B is perpendicular to E_A

**63.** Electric field on the axis of a small electric dipole at a distance r is E₁ and electric field at a distance of 2r on perpendicular bisector is E₂. Then:
(A) E₂ = E₁/8 (B) E₂ = E₁/16 (C) E₂ = E₁/4 (D) E₂ = E₁/16

**64.** A small electric dipole is placed at origin with its dipole moment directed along positive X-axis: The direction of electric field at point (2, 2√2, 0) is:
(A) Along Z-axis (B) Along Y-axis (C) Along negative Y-axis (D) Along negative Z-axis

**65.** A point negative charge -Q is placed at a distance r from a small dipole with dipole moment p in the xy plane as shown in figure. The x-component of force acting on the charge -Q is:
(A) pkQ cos θi/r (B) pkQ cos θi/r (C) -2pkQ cos θi/r³ (D) -2pkQ cos θi/r³

**66.** Two charges +q and -q are kept apart. Then at any point on the right bisector of line joining the two charges:
(A) the electric field strength is zero (B) the electric potential is zero (C) both electric potential and electric field strength are zero (D) both electric potential and electric field strength are non-zero

**67.** The value of electric potential at any point due to any electric dipole is:
(A) k(p × r)/r² (B) k(p × r)/r³ (C) k(p · (r - l))/r³ (D) k(p · r)/r³

**68.** Two electric dipoles, A, B with respective dipole moments p_A = -4qa⃗i and p_B = -2qa⃗i are placed on the x-axis with a separation R, as shown in the figure. The distance from A at which both of them have the same potential is:
(A) R/(√2 - 1) (B) R/(√2 + 1) (C) √2R/(√2 - 1) (D) √2R/(√2 + 1)

**69.** 4 charges are placed each at a distance 'a' from origin. The dipole moment of configuration is:
(A) 2qa⃗i (B) 3qa⃗i (C) 2qa⃗(i + j) (D) None

**70.** Torque acting on an electric dipole in a uniform electric field is maximum if the angle between p⃗ and E⃗ is:
(A) 180° (B) 0° (C) 90° (D) 45°

**71.** An electric dipole of length 1 cm is placed with the axis making an angle of 30° to an electric field of strength 10⁴ NC⁻¹. If it experiences a torque of 10√2Nm, the potential energy of the dipole is:
(A) 0.245 J (B) 2.45 × 10⁻⁴ J (C) 0.0245 J (D) 24.5 J

**72.** An electric dipole situated in an electric field of uniform intensity E, has dipole moment p and moment of inertia I. If the dipole is displaced slightly from the equilibrium position, then angular frequency of its oscillations is:
(A) (pE/I)^1/2 (B) (pE/I)^3/2 (C) (I/pE)^1/2 (D) (p/IE)^1/2

**73.** Statement 1: A small electric dipole is moved translationally from higher potential to lower potential in uniform electric field. Work done by electric field is positive. Statement 2: When a positive charge moves from higher potential to lower potential, work done by electric field is positive:
(A) Statement-1 is true, Statement-2 is true and Statement-2 is a correct explanation for Statement-1. (B) Statement-1 is true, Statement-2 is true and Statement-2 is NOT a correct explanation for Statement-1. (C) Statement-1 is true, Statement-2 is false. (D) Statement-1 is false, Statement-2 is true.

**74.** A wheel having mass m has charges +q and -q on diametrically opposite points. It remains in equilibrium on a rough inclined plane in the presence of uniform vertical electric field E:
(A) mg/q (B) mg/(2q) (C) mg tan θ/(2q) (D) None

**75.** For the situation shown in the figure below, find the force experienced by the dipole:
(A) pQ/(2πε₀r³) (B) pQ/(2πε₀r³) (C) 3pQ/(2πε₀r³) (D) None of these

---

#### DTS-6: Conductors

**76.** A solid conducting sphere of radius r is given some charge. Then:
(A) The charge is uniformly distributed over its surface. if there is an external electric field. (B) Distribution of charge over its surface will be non uniform if no external electric field exists in space (C) Electric field strength inside the sphere will be equal to zero only when no external electric field exists (D) Potential at every point of the sphere must be same in all cases

**77.** An isolated conducting sphere whose radius R = 1 m has a charge q = 1/9μC. The energy density at the surface of the sphere is:
(A) ε₀/2 J / m³ (B) ε₀ J / m³ (C) 2ε₀ J / m³ (D) ε₀/3 J / m³

**78.** A point charge Q is placed outside a hollow spherical conductor of radius R, at a distance r(r > R) from its centre C. The field at C due to the induced charges on the conductor is:
(A) zero (B) kQ/r² (C) kQ/(r - R)², directed towards Q (D) kQ/r², directed away from Q

**79.** A solid conducting sphere of radius r is having a charge of Q and point charge q is at a distance d from the centre of the solid sphere. The electric potential at the centre of the solid sphere is:
(A) 1/(4πε₀)[Q - q/r - q/d] (B) 1/(4πε₀)[Q/r - (Q - q)/d] (C) -1/(4πε₀)[Q - q/r] (D) Zero

**80.** A conductor having a cavity is given a positive charge. Then field strength E_A, E_B and E_C at point A (within cavity), at B (within conductor but outside cavity) and C (near conductor and outside) respectively will be:
(A) E_A = 0, E_B = 0, E_C ≠ 0 (B) E_A ≠ 0, E_B = 0, E_C ≠ 0 (C) E_A ≠ 0, E_B ≠ 0, E_C ≠ 0 (D) None of the above

**81.** A solid spherical conductor of radius R has a spherical cavity of radius a(a < R) at its centre. A charge +Q is kept at the centre. The charge at the inner surface, outer surface and at a position r(a < r < R) are respectively:
(A) +Q, -Q, 0 (B) -Q, +Q, 0 (C) 0, -Q, 0 (D) +Q, 0, 0

**82.** Charge Q, 2Q and -Q are given to three concentric conducting spherical shells A, B and C respectively as shown in figure. The ratio of charges on the inner and outer surfaces of shell C will be:
(A) -3/4 (B) -3/4 (C) 3/2 (D) -3/2

**83.** If the electric potential of the inner metal sphere is 10 volt and that of the outer shell is 5 volt, then the potential at the centre will be:
(A) 10 volt (B) 5 volt (C) 15 volt (D) 0

**84.** A thin, metallic spherical shell contains a charge Q on it. A point charge q is placed at the centre of the shell and another charge q₁ is placed outside it as shown in figure. All the three charges are positive. The force on the charge at the centre is:
(A) Towards left (B) Towards right (C) Upward (D) Zero

**85.** Consider the situation of the previous problem. The force on the central charge due to the shell is:
(A) Towards left (B) Towards right (C) Upward (D) Zero

**86.** A charge Q is uniformly distributed over a large plastic plate. The electric field at a point P close to the centre of the plate is 10 Vm⁻¹. If the plastic plate is replaced by a copper plate of the same geometrical dimensions and carrying the same charge Q, the electric field at the point P will become:
(A) Zero (B) 5 V m⁻¹ (C) 10 V m⁻¹ (D) 20 V m⁻¹

**87.** A spherical conductor A of radius r is placed concentrically inside a conducting shell B of radius R(R > r). A charge Q is given to A, and then A is joined to B by a metal wire. The charge flowing from A and B will be:
(A) Q(R/(R + r)) (B) R(Q/(R + r)) (C) Q (D) zero

**88.** N identical drops of mercury are charged simultaneously to 10 V. When combined to form one large drop, the potential is found to be 40 V. The value of N is:
(A) 4 (B) 6 (C) 8 (D) 10

**89.** Two identical metal balls with charges 2Q and -Q are separated by large distance, and exert a force F on each other. They are joined by a conducting wire, which is then removed. The force between them will now be:
(A) F (B) F/2 (C) F/4 (D) F/8

**90.** A and B are two concentric spheres. If A is given a charge Q while B is earthed as shown in figure:
(A) The charge density of A and B are the same (B) The field inside and outside A is zero (C) The field between A and B is not zero (D) The field inside and outside B is zero

---

#### DTS-7: Mixed (Numerical Questions)

**91.** There is an uniform electric field E in X-direction. If work done in moving a charge 0.2C through a distance 2 m along a line making an angle of 60° with X-axis is 4.0 joule, find the value of E (in V / m):
**Answer: 20 V/m**

**92.** The electric potential V is given as a function of distance x (metre) by V = (5x² + 10x – 9) volt. Find magnitude of electric field in V / m at x = 4:
**Answer: 50 V/m**

**93.** Four charge particles of charges -q, -q, -q and 3q are placed at the vertices of a square of side a as shown. The magnitude of dipole moment of the arrangement is 2^n/2 qa where n is:
**Answer: n = 1**

**94.** Two spheres A and B of radius 4cm and 6cm are given charges of 80μC and 40μC respectively. If they are connected by a fine wire, the amount of charge flowing from one to the other is____ (in μC):
**Answer: 20 μC**

**95.** The electric potential V (in volt) varies with x (in metre) according to the relation V = 15 + 4x². The force experienced by a negative charge of 2 C located at x = 5 m is n N. Find n:
**Answer: 80 N**

**96.** Four charges +2q, -2q, -3q and +3q are kept in the corners of a square of side a. The total field at the centre O is k(|rq|/a²) find n. (k = 1/(4πε₀), take √2 = 1.414):
**Answer: n = 2.828**

**97.** In the figure shown, conducting shells A and B have total charges Q and 2Q respectively. Value of V_A - V_B is kQ/(nR), Find n. (k = 1/(4πε₀)):
**Answer: n = 3**

**98.** A charge -q is placed at the axis of a charged ring of radius r at a distance of 2√2 r as shown in figure. If ring is fixed and carrying a charge Q, the kinetic energy of charge -q when it is released and reaches the centre of ring will be qQ/(πmε₀r). Find n:
**Answer: n = 2**

**99.** An electric field given by E = 4i - (20q² + 2)j pierces a Gaussian cube of side 1m placed at origin such that its three sides represents x, y and z axes. The net charge enclosed within the cube is x × 10⁻¹⁰C, where x is ____ (take ε₀ = 8.85 × 10⁻¹² N⁻¹m⁻²c²):
**Answer: x = 1**

**100.** A ball of mass 2 kg having charge 1μC is dropped from the top of a high tower. If an electric field exists in horizontal direction away from tower which varies as E = (5 - 2x) × 10⁶ V / m (where x is horizontal distance from tower), find the maximum horizontal distance (in m) ball can go from the tower:
**Answer: 2.5 m**

**101.** Two concentric spherical shell of radius R and 2R having initial charges Q and 2Q respectively as shown. On closing the switch S charge flow from outer sphere to earth is nQ. Find n:
**Answer: n = 2**

**102.** The magnitude of electric field intensity at point B(0, 0, 0) due to a dipole of dipole moment, P = μ₀(i + √3j) kept at origin is √n × kμ₀/r³, find n. (assume that the point B is at large distance from the dipole, k = 1/(4πε₀)):
**Answer: n = 4**

**103.** A spherical shell of radius R_i = 10 cm with a uniform charge q = 6 μC has a point charge q_c = 3μC at its center. Find the work performed by electric forces (in joules) during the shell expansion from radius R_i to radius R_z = 20 cm. Take 1/(4πε₀) = 9 × 10⁹ Nm²/C²:
**Answer: 0.81 J**

**104.** A cavity of radius r is made inside a solid sphere. The volume charge density of the remaining sphere is p. An electron (charge e, mass m) is released inside the cavity from point P as shown in figure. The centre of sphere and centre of cavity are separated by a distance a. The time after which the electron again touches the sphere is √(πrε₀m)/(eρa), find n:
**Answer: n = 1**

**105.** In the given figure two semicircular wires are connected which are in x - y and x - z plane respectively. And +2q₀ charge is distributed uniformly over it. The magnitude of electric field intensity at the origin is q₀/(2^n/2π²ε₀q₀R²), find n:
**Answer: n = 1**

---

### ELECTROSTATICS: LEVEL 2
*Source: DTS-8 to DTS-13 (Workbook)*

**106.** Three equal charges q are placed at the corners of an equilateral triangle of side a. A charge Q is placed such that its distance from each charge is r. The force experienced by Q will be:
(A) qQ/(4πε₀r²) (B) qQ/[4πε₀(r + a)²] (C) QN(9r² - 3a²)/(4πε₀r⁴) (D) qQ/(2πε₀(r² + a²))

**107.** An infinite number of charges, each of charge 1μC, are placed on the x-axis with co-ordinates x = 1, 2, 4, 8, ... if a charge of 1 C is kept at the origin, then what is the net force acting on 1 C charge?
(A) 9000 N (B) 12000 N (C) 24000 N (D) 36000 N

**108.** Four point charges q, -q, 2q and q are placed in order at the corners A, B, C and D of a square. If the field at the mid-point of CD is zero then the value of q/Q is:
(A) 1 (B) 5/√2 (C) 2√2/5 (D) 5√5/2

**109.** Select the correct statement: (Only force on the particle is due to electric field)
(A) A charged particle always moves along the electric line of force (B) A charged particle may move along the line of force (C) A charge particle never moves along the line of force (D) A charged particle moves along the line of force only if released from rest

**110.** Two point like charges Q₁ and Q₂ are positioned at points 1 and 2. The field intensity to the right of the charge Q₂ on the line that passes through the two charges varies according to a law that is represented schematically in the figure. The field intensity is assumed to be positive if its direction coincides with the positive direction on the x-axis. The distance between the charges is ℓ:
(A) +, - (B) +, + (C) +, + (D) -, -

**111.** Find the ratio of the absolute values of the charges |Q₁/Q₂|:
(A) ((a + ℓ)/a)² (B) (ℓ/a)² (C) (a/(a + ℓ))² (D) (a/ℓ)²

**112.** Find the value of b where the field intensity is maximum:
(A) ℓ/(|Q₁/Q₂|^1/3 + 1) (B) ℓ/(|Q₁/Q₂|^1/3 - 1) (C) ℓ/(|Q₂/Q₁|^1/3 + 1) (D) ℓ/(|Q₂/Q₁|^1/3 - 1)

**113.** A particle of mass 2 kg and charge 1 mC is projected vertically with a velocity 10 ms⁻¹. There is a uniform horizontal electric field of 10⁴ N/C. Then:
(A) the horizontal range of the particle is 10 m (B) the time of flight of the particle is 2 s (C) the maximum height reached is 5 m (D) the horizontal range of the particle is 5 m

**114.** Two point charges each of magnitude Q are placed at coordinates (0, y) and (0, -y). A point charge q of the same polarity can move along X - axis. Then:
(A) The force on q is maximum at x = ± y / √2 (B) The charge q is in equilibrium at the origin (C) The charge q performs an oscillatory motion about the origin (D) For any position of q other then origin the force is directed away from origin

**115.** Five identical charges are kept at five vertices of a regular hexagon. Match the following two columns at centre of the hexagon. If in the given situation electric field at centre is E, then:
(A) If charge at B is removed, then electric field will become (D) 2E
(B) If charge at C is removed, then electric field will become (Q) E
(C) If charge at D is removed then electric field will become (R) Zero
(D) If charges at B and C both are removed, then electric field will become (S) √3E

---

**116.** Three semi-infinite rods uniformly charged out of which one is negatively charged and other two are positively charged are located at points A, B and C on circle of radius R as shown in figure. The net electric field at centre O is:
(A) 2Kα/R along OC (B) Kα/R, perpendicular to plane of paper and inward direction (C) √5Kα/R at an angle tan⁻¹(1/2) with OC (D) √2Kα/R at an angle 45° with OC

**117.** A charged particle having some mass is resting in equilibrium at a height H above the centre of a uniformly charged non-conducting horizontal ring of radius R. The force of gravity acts downwards. The equilibrium of the particle will be stable:
(A) For all values of H (B) Only if H > R/√2 (C) Only if H < R/√2 (D) Only if H = R/√2

**118.** A thin glass rod is bent into a semicircular shape of radius R. A charge +Q is uniformly distributed along the upper half and a charge -Q is uniformly distributed along the lower half as shown in the figure. The electric field at the centre P is:
(A) Q/(4πε₀R²) (B) Q/(2πε₀R²) (C) Q/((4ε₀)R²) (D) Q/(π²ε₀R²)

**119.** A large insulating thick sheet of thickness 2d carries a uniform charge per unit volume ρ. A particle of mass m, carrying a charge of sign opposite to that of the sheet is released from the surface of the sheet. The sheet does not offer any mechanical resistance to the motion of the particle. Find the oscillation frequency of the particle inside the sheet:
(A) 1/(2π)√(qρ/(mε₀)) (B) 1/(2π)√(2qρ/(mε₀)) (C) 1/(4π)√(qρ/(mε₀)) (D) 1/(4π)√(2qρ/(mε₀))

**120.** A ring of radius R having a linear charge density λ moves towards a solid imaginary sphere of radius R/2, so that the centre of ring pass through the centre of sphere. The axis of the ring is perpendicular to the line joining the centres of the ring and the sphere. The maximum flux through the sphere in this process is:
(A) λR/ε₀ (B) λR/(2ε₀) (C) λπR/(4ε₀) (D) λπRK/(3ε₀)

---

[Continuing to next section...]

**126.** An electric charge 10⁻⁸C is placed at the point (4m, 7m, 2m). At the point (1m, 3m, 2m), the electric:
(A) field will be 18 V (B) field has no Z component (C) field will be along Z axis (D) potential will be 1.8 V

**127.** Two charges -2q and q are at positions (-3a, 0) and (+3a, 0) in a two-dimensional frame of reference. The locus of points where potential is zero is a circle of radius:
(A) a (B) 4a (C) 3a (D) 7a

**128.** Two spherical shells are as shown in figure. Suppose r is the distance of a point from their common centre. Then:
(A) Electric field for r < R₁ is constant due to q₁ and variable due to q₁ (P) is constant due to q₁ and variable due to q₁
(B) Electric potential for r < R₁ is zero due to q₂ and variable due to q₁ (Q) is zero due to q₂ and variable due to q₁
(C) Electric potential for R₁ < r < R₂ (R) is constant
(D) Electric field for R₁ < r < R₂ (S) is zero

**129.** A solid sphere having uniform charge density ρ and radius R is shown in figure. A spherical cavity of radius R/2 is hollowed out:
What is potential of O? (Assuming potential at infinity to be zero)
(A) 11R²ρ/(24ε₀) (B) 5R²ρ/(12ε₀) (C) 7ρR²/(12ε₀) (D) 3R²ρ/(2ε₀)

**130.** At distance 5cm and 10cm outwards from the surface of a uniformly charged solid sphere, the potentials are 100V and 75V respectively. Then:
(A) potential at its surface is 150V (B) the charge on the sphere is (5/3) × 10⁻¹⁰C (C) the electric field on the surface is 1500 V/m (D) the electric potential at its centre is 225 V

**131.** S₁ and S₂ are two equipotential surfaces on which the potentials are not equal. Choose correct options:
(A) S₁ and S₂ cannot intersect (B) S₁ and S₂ cannot both be plane surfaces (C) In the region between S₁ and S₂, the field is maximum where they are closest to each other (D) A line of force from S₁ and S₂ must be perpendicular to both

---

**132.** Some equipotential plane parallel surfaces are shown in the figure. The planes are inclined to x-axis by 45° and distance from one plane to another plane along x-axis is 20cm. The electric field is:
(A) 177 V/m at 135° with x-axis (B) 125 V/m at 45° with x-axis (C) 177 V/m at 45° with x-axis (D) 125 V/m at 135° with x-axis

**133.** In a certain region of space, the potential is given by: V = k[2x² - y² + z²]. The electric field at the point (1, 1, 1) has magnitude:
(A) k√5 (B) 2k√6 (C) 2k√5 (D) 4k√5

**134.** A, B, C, D, P and Q are points in a uniform electric field. The potentials at these points are V(A) = 2 volt, V(B) = 8 volt, V(D) = 5 volt. The electric field at P is:
(A) 10Vm⁻¹ along PQ (B) 15√2Vm⁻¹ along PA (C) 5Vm⁻¹ along PC (D) 5Vm⁻¹ along PA

**135.** An electric field is given by E = (μi + xj)NC⁻¹. Find the work done (in J) by the electric field in moving a 1 C charge form r_A = (2i + 2j)m to r_B = (4i + 4j)m:
**Answer: [blank]**

---

**136.** Two particles X and Y, of equal masses and with unequal positive charges, are free to move and are initially far away from each other. With Y at rest, X begins to move towards it with an initial velocity u. After a long time, finally:
(A) X will stop, Y will move with velocity u/2 each (B) X and Y will both move with velocities u/2 each (C) X will stop, Y will move with velocity <u (D) Both will move with velocities < u/2

**137.** The diagram shows a small bead of mass m carrying charge q. The bead can freely move on the smooth fixed ring placed on a horizontal plane. In the same plane a charge +Q is also been fixed as shown. The potential at point P due to +Q is V. The velocity with which the bead should be projected from point P so that it can complete a circle should be greater than:
(A) √(6qV/m) (B) √(qV/m) (C) √(3qV/m) (D) None of these

**138.** The diagram shows three infinitely long uniform line charges placed on the X, Y and Z axis. The work done in moving a unit positive charge from (1, 1, 1) to (1, 1, 0), is equal to:
(A) (λ ln 2)/(2πε₀) (B) (λ ln 2)/(πε₀) (C) (3λ ln 2)/(2πε₀) (D) None

**139.** A unit positive point charge of mass m is projected inside the tunnel as shown. The tunnel has been made inside a uniformly charged non-conducting sphere. The minimum velocity with which the point charge should be projected such that it can reach the opposite end of the tunnel is equal to:
(A) [qR²/(4mε₀)]^1/2 (B) [qR²/(24mε₀)]^1/2 (C) [qR²/(6mε₀)]^1/2 (D) zero because the initial and final points are at same potential

**140.** Potential at a point A is 3 volt and at a point B is 7 volt, an electron is moving towards A from B. Then:
(A) It must have some K.E. at B to reach A (B) It need not have any K.E. at B to reach A (C) to reach A, it must have more than or equal to 4eV K.E. at B (D) when it will reach A, it will have K.E. more than or at least equal to 4eV if it was released from rest at B

**141.** Three point charges Q, 4Q and 16Q are placed on a straight line 9 cm long. Charges are placed in such a way that the system has minimum potential energy. Then:
(A) 4Q and 16Q must be at the ends and Q at a distance of 3 cm from the 16Q (B) 4Q and 16Q must be at the ends and Q at a distance of 6 cm from the 16Q (C) Electric field at the position of Q is zero (D) Electric field at the position of Q is 4/(14ε₀)

---

**142.** Three identical spheres each of radius a and made up of a perfectly non-conducting material with εᵣ = 1. A charge Q is uniformly spread over the surface of one sphere and a charge -Q is uniformly spread over the surface of other sphere. The spheres are now placed such that they are just touching each other. For this system, answer the following questions:
The total electrostatic potential energy stored in the system at the time of releasing is:
(A) KQ²/(2a) (B) 5KQ²/(2a) (C) 5KQ²/(2a) (D) 15KQ²/(2a)

**143.** The rate at which the electrostatic potential energy of the system is decreasing, just after the release will be:
(A) Zero (B) KQ²/(2a) (C) 3KQ²/(2a) (D) Dependent on the mass of each sphere

**144.** Suppose that some time after the release, the distance between the spheres becomes 5a and the speed of each sphere becomes 2 cm. Then, at this instant, the rate of change of potential energy of the system will be:
(A) Zero (B) 3√5KQ²/(25a²) (C) -KQ²/(3a²) (D) -KQ²/(2a²√3)

**145.** A cone made of insulating material has a total charge Q = 3mC spread uniformly over its sloping surface. The energy in joules required to take a charge q = 5μC from infinity to apex A of cone is 3^5 J. The value of x is:
**Answer: [blank]** (Given, half cone angle θ = 37°, R = 2m)

---

### MISCELLANEOUS QUESTIONS

**1.** Charge -q₂ of mass m revolves around a stationary charge q₁ in a circular orbit of radius r. The orbital time period of q₂ will be:
(A) [4πmr²/(kq₁q₂)]^1/2 (B) [kq₁q₂/(4π²mr²)]^1/2 (C) [4π²mr²/(kq₁q₂)]^1/2 (D) [4π²mr²/(kq₁q₂)]^1/2

**2.** A neutral pendulum oscillates in an uniform electric field as shown in figure. If a positive charge is given to the pendulum then its time period:
(A) will increase (B) will decrease (C) will remain constant (D) will first increase then decrease

**3.** Two fixed charges +4Q and -Q are located at A and B, the distance AB being 3 m. Choose the correct statements:
(A) The point P where the resultant field due to both is zero is on AB, outside AB (B) The point P where the resultant field due to both is zero is on AB, inside AB (C) If a positive charge is placed at P and displaced slightly along AB, it will execute oscillations (D) If a negative charge is placed at P and displaced slightly along AB, it will execute oscillations

**4.** A particle of mass m and charge -q is thrown in a region where uniform gravitational field and electric field are present. The path of particle:
(A) may be a straight line (B) may be a circle (C) may be a parabola (D) may be a hyperbola

**5.** If we use permittivity, resistance R, gravitational constant G and voltage V as fundamental physical quantities, then:
(A) [angular displacement] = ρR°G°V° (B) [Velocity] = ε⁻¹R⁻¹G°V° (C) [dipole moment] = ε¹R⁰G¹V¹ (D) [force] = ε¹R°G¹V²

**6.** In the figure shown two identical small charged balls having mass m and charge 'q' are suspended with the help of two light inextensible silk strings each of length ℓ. At equilibrium the angular separation between the strings is 'θ':
(A) If θ is very small then charge 'q' is proportional to θ³/² (B) Tension T in string is proportional to l (Q) ℓ (C) If system is taken in a satellite. Then tension T is proportional to π (R) π (D) Angular separation between the charges(at equilibrium) in the satellite is (S) ℓ⁻²

**7.** Statement 1: An independent negative charge moves from point A to point B. Then potential at A should be less than potential at B:
Statement 2: While moving from A to B kinetic energy of electron will increase:
(A) Statement-1 is True, Statement-2 is True and Statement-2 is a correct explanation for Statement-1 (B) Statement-1 is True, Statement-2 is True and Statement-2 is NOT a correct explanation for Statement-1 (C) Statement-1 is True, Statement-2 is False (D) Statement-1 is False, Statement-2 is True

---

**8-10. [Paragraph-based questions about charge distribution on circular region]**

**8.** Suppose that you are given six identical point charges and you have arranged them in a circular region of area A such that the potential energy of the system is minimum. Then the distance between the two adjacent charges would be:
(A) √(A/(2π)) (B) √(A/π) (C) (1/2)√(A/π) (D) √A

**9.** If 15 charges are to be arranged on a circular region such that the potential energy of the system is minimum then they should be arranged as:
(A) [Diagram showing all on circumference] (B) [Diagram showing many inside] (C) [Diagram showing some inside] (D) [Diagram showing one at center]

**10.** Suppose that you are given six identical point charges. You are free to place them anywhere on a circular region of radius r. If each charge is q, the minimum possible value of potential energy of the arrangement will be:
(A) Zero (B) Kq²/r (C) 3Kq²/r(2 + 1/2 + 1/√3) (D) 6Kq²/r(2 + 1/2 + 1/√3)

**11.** The bobb of simple pendulum is hanging vertically down from a fixed identical bobb by means of a string of length l. If both bobbs are charged with a charge q each, time period of the pendulum is (ignore the radii of the bobbs):
(A) 2π√(ℓ/(g + q²/(Pℓm))) (B) 2π√(ℓ/(g - q²/(Pℓm))) (C) 2π√(ℓ/g) (D) 2π√(ℓ/(g - q²/ℓ))

**12.** Charge +2q, +q and +q are placed at the corners, A, B and C of an equilateral triangle ABC. If E is the electric field at the circumcentre O of the triangle, due to the charge +q, then the magnitude and direction of the resultant electric field at O is:
(A) E along AO (B) 2E along AO (C) E along BO (D) E along CO

**13.** An electric dipole moment p = (2.0i + 3.0j) Cm is placed in a uniform electric field E = (3.0i + 2.0k) × 10⁻¹ × NC⁻¹:
(A) The torque that E exerts on p is (0.6i - 0.4j - 0.9k) Nm (B) The potential energy of the dipole is -0.6 J (C) The potential energy of the dipole is 0.6 J (D) If the dipole is rotated in the electric field, the maximum potential energy of the dipole is 1.3 J

**14.** Three point charges q are placed at the corners of an equilateral triangle of side L as shown in the figure:
(A) The potential at the centroid of the triangle is zero (B) The electric field at the centroid of the triangle is zero (C) The dipole moment of the system is √2qL (D) The dipole moment of the system is √3qL

**15.** Statement 1: In the electric field E = (4i + 4j) J/C, electric potential at A (4m, 0) is more than the electric potential at B (0, 4m):
Statement 2: Electric lines of forces always travel from higher potential to lower potential:
(A) Statement-1 is True, Statement-2 is True and Statement-2 is a correct explanation for Statement-1 (B) Statement-1 is True, Statement-2 is True and Statement-2 is NOT a correct explanation for Statement-1 (C) Statement-1 is True, Statement-2 is False (D) Statement-1 is False, Statement-2 is True

---

**16-18. [Paragraph: Electric field E = E₀(xi + uj + zk)]**

**16.** Electric potential at a general point (x, y, z) will be:
(A) -E₀(x² + y² + z²) (B) 10 - E₀(x² + y² + z²) (C) -E₀/2(x² + y² + z²) (D) 10 - E₀/2(x² + y² + z²)

**17.** Choose the incorrect option:
(A) there will be only one point with V = 10 volts (B) at no point potential can be 15 volts (C) potential will decrease if we move away from origin in any direction (D) any point charge if released from origin will move along a straight line equally inclined to x, y, z axes

**18.** If a negative charge situated at 10m from origin is moved to a position 20m from origin, the potential energy of the system will:
(A) increase (B) decrease (C) remain constant (D) may increase or decrease depending upon the path along which the particle is taken

---

**19. [Matching: Charge configurations and properties]**

**19.** In the following diagrams, all the charges have equal magnitude:
(A) Equilateral triangle (P) The potential is zero at the centre
(B) Square (Q) The electric field is zero at the centre
(C) Square (R) The electric field at a point on the axis passing through the centre perpendicular to the plane of the figure is along the axis
(D) Rectangle (S) The potential energy of the system is negative
(T) The potential energy of the system is negative

**20.** MATCH THE FOLLOWING:
(A) Internal electrostatic only (P) Mechanical energy
(B) Internal friction only (Q) Momentum
(C) External gravitational only (R) Kinetic energy
(D) By some external agent (S) None of the above

**21.** The electric field at a point due to an electric dipole, on an axis inclined at an angle (θ < 90°) to the dipole axis, is perpendicular to the dipole axis, if the angle θ is tan⁻¹(√x), then x is:
**Answer: [blank]**

**22.** If the ratio of electric field on the axis and at equator of an electric dipole is x : 1, then x is:
**Answer: [blank]**

**23.** In a uniform electric field, equipotential surfaces must:
(A) be plane surface (B) be normal to the direction of the field (C) be spaced such that surfaces having equal differences in potential are separated by equal distances (D) have decreasing potentials in the direction of the field

---

**24-26. [Paragraph: Two touching spheres with opposite charges]**

**24.** An electric field line entering the sphere B at its top point will be inclined to x axis an angle:
(A) 0° (B) 45° (C) tan⁻¹(√5 - 1)/2) (D) 90°

**25.** Choose the incorrect statement:
(A) all the electric field lines leaving sphere A will ultimately terminate on sphere B (B) all the electric field lines will leave the surface of sphere A perpendicularly (C) the spheres will attract each other (D) all possible equipotential surfaces will cut the electric field lines perpendicularly

**26.** Equipotential lines inside sphere B will be:
(A) circles centered at centre of B (B) circular arcs centered at centre of A (C) circular arcs centered at point of contact of A and B (D) some general curves that need not necessarily be circular arcs

**27. [Matching: Charge distributions and field properties]**

**27.** MATCH THE FOLLOWING:
(A) Two identical dipoles placed on x-axis at same distance from origin O (P) Electric potential at all points on z-axis is zero
(B) Two Uniformly charged hemisphericai shells; charge density and -σ (Q) Electric field at origin is directed along negative z-axis
(C) Two semicircular rings having equal and opposite linear charge density (R) Electric field at origin is zero
(D) A sphere having uniform, positive volume charge density, centered at origin (S) electric field at any point with z < 0 is directed along negative z-axis

**28.** Two infinite sheets of uniform charge density + and - are parallel to each other as shown in the figure. Electric field at the:
(A) points to the left of to the right of the sheets is zero (B) midpoint between the sheets is zero (C) midpoint of the sheets is σ/ε₀ and is directed towards right (D) midpoint of the sheet is 2σ/ε₀ and is directed towards right

**29.** A uniform electric field pointing in the positive x-direction exists in a region. Let A be the origin and B be the point on x-axis at x = +1 cm and C be the point on the y-axis at y = +1 cm. Then the potential at the points A, B and C satisfy:
(A) V_A > V_B (B) V_A < V_C (C) V_A < V_B (D) V_A > V_C

---

**30. [Matching: Conducting sphere in field]**

**30.** The figure shows a fixed conducting earthed sphere. A point charge +q is projected towards the conducting sphere from very large distance shown in figure. (Neglect gravity). As the point charge progresses towards sphere:
(A) Charge on sphere will be (P) Negative
(B) Electric field at 'O' due to charge on sphere (Q) Increases
(C) acceleration of point charge 'q' (R) Decreases
(D) current I (shown in figure) in the wire connecting the sphere with earth (S) Positive

---

**31-32. [Paragraph: Conducting sphere with inner and outer charges]**

**31.** Charge is distributed on the surfaces as:
(A) -Q on the inner surface, -q on outer surface (B) -Q on the inner surface, -q + Q on the outer surface (C) +Q on the inner surface, -q - Q on the outer surface (D) The charge -q is spread uniformly between the inner and outer surface

**32.** Assume that the electrostatic potential is zero at an infinite distance from the spherical shell. The electrostatic potential at a distance R(a < R < b) from the centre of the shell is:
(A) 0 (B) KQ/a (C) K(Q - q)/R (D) K(Q - q)/b (where K = 1/(4πε₀))

---

**33.** A conducting isolated sphere of radius r charged with Q units is connected by a conducting wire with a small uncharged sphere of radius r' kept at large distance. The charge on smaller sphere will now be:
(A) Q(r'/(r + r')) (B) Q(r'/(r + r')) (C) Q/(r'/(r + r')) (D) Qr'/(r + r')

**34.** Mark the correct options:
(A) Gauss's law is valid only for uniform charge distributions (B) Gauss's law is valid only for charges placed in vacuum (C) The electric field calculated by Gauss's law is the field due to all the charges (D) The electric field through a closed surface due to all the charges is equal to the flux due to the charges enclosed by the surface

**35.** Two conducting spheres of radii 3 cm and 1 cm are separated by a distance of 10 cm in free space. If the spheres are charged to same potential of 10 V each, the force of repulsion between them is:
(A) 1/y × 10⁻⁹N (ignore induction). Find y:
**Answer: [blank]**

---

**36.** The figure shows electric field E at a distance r in any direction from the origin O. The electric field E is due to:
(A) a charged hollow metallic sphere of radius OP with centre at O (B) a charged solid metallic sphere of radius OP with centre at O (C) a uniformly charged non-conducting sphere of radius OP with centre at O (D) a uniformly charged non-conducting hollow sphere of radius OP with centre at O

**37. [Matching: Conductors and field/potential properties]**

**37.** MATCH THE FOLLOWING:
(A) Electrically neutral thick conducting spherical shell, with point charge at its center (P) Electric field everywhere inside the cavity due to charges induced on the inner surface of conductor is zero
(B) Electrically neutral thin conducting spherical shell, with point charge to the right of its center (Q) Electric field everywhere inside the cavity due to charges induced on the outer surface of conductor is zero
(C) Electrically neutral thick conducting spherical shell, with point charge to the right of centre. Shell is earthed (R) Electric potential at the center of the cavity due to charges induced on inner & outer surface of conductor is zero
(D) Four identical charges are placed at the points (1, 0, 0), (0, 1, 0), (-1, 0) and (0, -1, 0) (S) Electric potential everywhere inside the cavity due to charges induced on the inner and outer surface of conductor is zero
(T) Very difficult to find out

**38.** Four identical charges are placed at the points (1, 0, 0), (0, 1, 0), (-1, 0) and (0, -1, 0):
(A) The potential at the origin is zero (B) The field at the origin is zero (C) The potential at all points on the z-axis, other than the origin, is zero (D) The field at all points on the z-axis, other than the origin acts along the z-axis

**39.** A proton and a deuteron are initially at rest and are accelerated through the same potential difference. Which of the following is true concerning the final properties of the two particles?
(A) They have different speeds (B) They have same momentum (C) They have same kinetic energy (D) none of these

**40.** Particle A having positive charge is moving directly head-on towards initially stationary positively charged particle B. At the instant when A and B are closest together:
(A) the momenta of A and B must be equal (B) the velocities of A and B must be equal (C) B would have gained less kinetic energy than A would have lost (D) B would have gained the same momentum as A would have lost

---

**41.** The electric potential inside an isolated conducting sphere having some charge on the surface:
(A) increases from centre to surface (B) decreases from centre to surface (C) remains constant from centre to surface (D) is zero at every point inside

**42.** A hollow conducting sphere is placed in an electric field produced by a point charge placed at P as shown in figure. Let V_A, V_B, V_C be the potentials at points A, B and C respectively. Then:
(A) V_C < V_B (B) V_B > V_C (C) V_A > V_B (D) V_A = V_C

---

**43-45. [Paragraph: Electric field E = E₀(x²i + y²j)]**

**43.** The electric field line passing through the point (2, 1) will have the equation as:
(A) x = y (B) 1/x + 1/y = 1/2 (C) 1/x + 1/y - 1/2 (D) x = -y

**44.** The equation of an equipotential line passing through point (1, 1) and lying in (x, y) plane will be:
(A) x² + y² = 1 (B) x³ + y³ = 2 (C) xy = 1 (D) x³ - y³ = 4

**45.** If a dipole P = P₀(i + j) is placed in this field at a point (x, y) then the net electric force on the dipole will be:
(A) Zero (B) P₀E₀(2x̂i + 2ŷj) (C) 2P₀E₀(x̂i + ŷj) (D) Infinite

---

**46. [Matching: Conducting cavity scenarios]**

**46.** Figure shows an uncharged conducting body having a spherical cavity. Charge Q is placed at the centre of the cavity:
(A) 1 (inside cavity near surface) (P) E_x = 0
(B) 2 (near but outside conductor surface) (Q) E_y = 0
(C) 3 (inside bulk of conductor) (R) E_x ≠ 0
(D) 4 (near but outside conductor surface) (S) E_y ≠ 0

---

**47.** An isolated, hollow closed conductor of irregular shape is given some charge. Which of the following statements are correct?
(A) The entire charge will appear on its outer surface (B) All points on the conductor will have the same potential (C) All points on its surface will have the same charge density (D) All points near its surface and outside it will have the same electric intensity

**48.** Two large thin conducting plates with small gap in between are placed in a uniform electric field E (perpendicular to the plates). Area of each plate is A and charges +Q and -Q are given to these plates as shown in the figure. If points R, S and T are three points in space, then the:
(A) field at point R is E (B) field at point S is E (C) field at point T is E + (Q/ε₀A) (D) field at point S is E + (Q/ε₀A)

**49.** Charge is distributed uniformly in space. The net flux passing through the surface of an imaginary cube of side a in the space is φ. If the net flux passing through the surface of an imaginary sphere of radius a in the space is ____. Then z is:
**Answer: [blank]**

**50.** Units of electric flux are:
(A) N - m²/Coul (B) N/Coul² - m² (C) Volt - m (D) Volt - m³

**51.** Select the INCORRECT statement:
(A) Charge is a scalar quantity (B) Electric field is a vector quantity (C) Dipole moment is vector quality (D) Electric potential is a vector quantity

**52.** Two point charges +q and -q are held fixed at (-a, 0) and (a, 0) respectively. Then:
(A) The electric field E at all points on the x-axis has the same direction (B) E at all points on the y-axis is along i (C) Positive work is done in bringing a test charge from infinity to the origin (D) All of the above

**53.** One thousand spherical water droplets, each of radius r and each carrying a charge q, coalesce to form a single spherical drop. If v is the electrical potential of each droplet and V that of the bigger, then V/v = 10ⁿ. Find n:
**Answer: [blank]**

---

**54-57. [Paragraph: Four metallic plates with charges]**

**54.** The charge appearing on the right side of plate 3 is:
(A) zero (B) +Q/4 (C) -3Q/4 (D) Q/2

**55.** The charge appearing on the right side of plate 4 is:
(A) zero (B) -Q/4 (C) -3Q/4 (D) +Q/2

**56.** The potential difference between plates 1 and 2 is:
(A) 3Qd/(2ε₀A) (B) Qd/(ε₀A) (C) 3Qd/(4ε₀A) (D) 3Qd/(ε₀A)

**57.** A point charge Q is kept at point A. The flux through the inclined surface of cone is ____ . Now another charge -Q is also placed at point B. If net flux through the inclined surface is nQ/(5ε₀). Find n:
**Answer: [blank]**

---

**58.** A point charge +q is placed on the axis of a closed cylinder of radius R and height 25R/12 as shown. If electric flux coming out of the curved surface of cylinder is xq/(10ε₀), then calculate x:
**Answer: [blank]**

**59.** The ratio of momentum of an electron and proton which are accelerated from rest by a potential difference 50 V is:
(A) m_e/m_p (B) √(m_e/m_p) (C) m_p/m_e (D) √(m_p/m_e)

**60.** Two identical positive charges are placed at x = -a and x = a. The correct variation of potential V along the x-axis is given by:
(A) [Graph showing V peaks at ±a] (B) [Graph showing V dips in middle] (C) [Graph showing V with inflection] (D) [Graph showing V with dips]

---

**61.** The electric potential V (in volt) varies with x (in meter) according to the relation V = 5 + 4x². The force experienced by a negative charge of 2 × 10⁻⁶C located at x = 0.5 m is:
(A) 2 × 10⁻⁶N (B) 4 × 10⁻⁶N (C) 6 × 10⁻⁶N (D) 8 × 10⁻⁶N

**62.** A uniform electric field having magnitude E is existing in xy plane. Find the potential difference between origin O and A(d, d, 0):
(A) Ed(cos θ + sin θ) (B) -Ed(sin θ - cos θ) (C) √2 Ed (D) None of these

**63.** Which of the following is true for the figure showing electric lines of force? (E is potential)
(A) E_A > E_B (B) E_B > E_A (C) V_A > V_B (D) V_B > V_A

**64.** Electric flux through a surface of area 100m² lying in the xy plane is (in Vm) if E = i + √2j + √3k:
(A) 100 (B) 141.4 (C) 173.2 (D) 200

**65.** An uncharged sphere of metal placed inside a charged parallel plate capacitor. The lines of force look like:
(A) [Diagram] (B) [Diagram] (C) [Diagram] (D) [Diagram]

---

**66-68. [Paragraph: Conductor in field with cavity]**

**66.** Assume q₂ to be positive. Then, if q₂ is moved towards the conductor, the electrons will flow through battery:
(A) from ground to conductor (B) from conductor to ground (C) first from ground to conductor and then from conductor to ground (D) first from conductor to ground and then from ground to conductor

**67.** If q₁ is moved closer to the boundary of cavity (without touching it) then the charge flowing from ground to conductor will be:
(A) positive (B) negative (C) zero (D) may be negative or may be positive depending on the atomic number of the conductor

**68.** The electrostatic pressure at the surface of the cavity is tending to:
(A) expand the cavity (B) shrink the cavity (C) neither expand nor shrink the cavity (D) maintain the shape of the cavity because of electrical inertia

**69.** A hollow metal sphere of radius 10 cm is charged such that the potential on its surface becomes 80V. The potential at the centre of the sphere is 10x V. Then x is:
**Answer: [blank]**

**70.** A charge Q is placed at the mouth of a conical flask. The flux of the electric field through the flask is:
(A) zero (B) Q/ε₀ (C) Q/(2ε₀) (D) < Q/(2ε₀)

---

## CAPACITORS: Questions

### CAPACITORS ANSWER KEYS (Reference)

**Answer Key -- Level 0 (CBSE Pattern)**

**Workbook Answer Key -- Level 1 (Q1-75)**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | B | C | B | C | D | C | C | B | A | C | C | A | B | D | B |

| Q# | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | D | D | C | A | D | C | C | B | A | C | A | B | C | C | C |

| Q# | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | D | C | C | C | B | B | C | A | C | C | B | A | D | B | B |

| Q# | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | C | A | C | C | B | D | B | D | D | A | B | C | D | D | B |

| Q# | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | 48 | 7.5 | 0.33 | 5 | 15 | 2.33 | 5 | 2 | 20 | 4 | 6 | 1 | 10 | 25 | 1 |

**Workbook Answer Key -- Level 2 (Q76-115)**

| Q# | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | C | C | BD | ABC | B | C | A | C | 40 | 500 | D | B | C | A | D |

| Q# | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99 | 100 | 101 | 102 | 103 | 104 | 105 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | A | C | ABC | BC | (A-R); (B-P); (C-S); (D-Q) | B | A | C | B | AB | BCD | C | - | - | - |

**JEE Main (Archive) Answer Key (Q1-50)**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | A | B | D | A | D | D | D | C | C | D | B | B | A | C | C |

| Q# | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | C | B | A | None | C | C | C | C | A | A | A | C | A | A | D |

| Q# | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | A | B | A | B | D | C | A | A | D | 6 | C | 4 | B | 8.00 | A |

| Q# | 46 | 47 | 48 | 49 | 50 |
|---|---|---|---|---|---|
| Ans | B | A | C | A | A |

**JEE Advanced (Archive) Answer Key (Selected)**

| Q# | 1-10 | 11-20 | 21-30 | 31-40 | 41-50 |
|---|---|---|---|---|---|
| Coverage | Single/Multi Choice | Complex Scenarios | Advanced Concepts | Numerical | Problem Solving |

---

### CAPACITORS: LEVEL 0 (EASY)
*Source: CBSE Pattern*

**1.** There are two metallic spheres; one is bigger than the other. Which has greater capacitance?

**2.** Where does the energy of a charged capacitor reside?

**3.** Two spheres of copper of the same radii, one hollow and the other solid, are charged to the same potential. Which sphere possesses more charge?

**4.** The capacitance of a charged capacitor is C and the energy stored in it is U. What is the value of charge on the capacitor?

**5.** Is there any material, which when inserted between the plates of a capacitor reduces its capacitance?

**6.** Two identical parallel plate (air) capacitors C₁ and C₂ have capacitances C each. The space between their plates is now filled with dielectrics as shown. If the two capacitors still have equal capacitance, obtain the relation between dielectric constants K₁ and K₂.

**7.** You are given an air filled parallel plate capacitor C₁. The space between its plates is now filled with slabs of dielectric constants K₁ and K₂. Find the capacitances of the capacitor C₂.

**8.** A very thin plate of metal is placed exactly in the middle of the two plates of a parallel plate capacitor. What will be the effect on the capacitance of the system?

**9.** What happens to the energy stored in a capacitor, if after disconnecting the battery, the plates of a charged capacitor are moved farther?

**10.** A parallel plate capacitor with air between the plates has a capacitance of 8 pF. What will be the capacitance if the distance between the plates is reduced by half and the space between them is filled with a substance of dielectric constant 6?

---

### CAPACITORS: LEVEL 1
*Source: Workbook Levels 1-2*

**1.** The plate area of a parallel plate capacitor is 10 cm² and its capacitance is 2 pF. The separation between the plates of the capacitor is close to (in mm):
(A) 2.2 (B) 4.4 (C) 8.8 (D) 17.6

**2.** Capacitance of a spherical capacitor of radius 9 m is:
(A) 10⁻³μF (B) 9 × 10⁻⁶μF (C) 10⁻⁵μF (D) 10⁻¹¹μF

**3.** A spherical capacitor consists of two concentric spherical shells of radius R and 2R. Find the capacitance of the system.
(A) 4πε₀R (B) 8πε₀R (C) 8πε₀/R (D) 8πε₀R²

**4.** The capacitance of a cylindrical capacitor consisting of two co-axial cylinders of radii a and b and having length l is:
(A) 4πε₀ab/(b-a) (B) 2πε₀l(ln(b/a)) (C) 2πε₀l/(b-a) (D) 2πε₀ab/(b-a)

**5.** A capacitor consists of two conductors having equal and opposite charges placed closed to each other. The capacitance is independent of:
(A) Shape and size of conductors (B) Separation between the conductors (C) Medium in the region between the two conductors (D) Charge on the conductors

**6.** A parallel plate capacitor of capacitance 3μF has a total charge of +15μC on one plate and -15μC on the other plate. The separation between the plates is 1 mm. The electric field between the plates has magnitude:
(A) 50 N/C (B) 100 N/C (C) 5000 N/C (D) 10000 N/C

**7.** A parallel plate capacitor of plate area A has a total surface charge density of +σ on one plate and -σ on the other. The force on one plate due to the other plate is:
(A) σ²A²/(2ε₀) (B) σ²A²/ε₀ (C) σ²A/(2ε₀) (D) σ²A/ε₀

**8.** The plates of a parallel plate capacitor have an area of 90cm² each and are separated by 2 mm. The capacitor is charged by connecting it to a 400 V supply. Then the energy density of the energy stored (in J/m³) is:
(A) 0.113 (B) 0.177 (C) 0.152 (D) None of these

**9.** A parallel plate capacitor of capacity C₀ is charged to a potential V₀. The energy stored when the battery is disconnected and the plate separation is doubled is E₁. When the charging battery is kept connected and the separation is doubled is E₂. Then E₁/E₂ is:
(A) 4/1 (B) 3/2 (C) 2 (D) ½

**10.** Three capacitors of capacitances 1μF, 2μF and 4μF are connected first in series, and then in parallel. The ratio of their equivalent capacitances will be:
(A) 2 : 49 (B) 49 : 2 (C) 4 : 49 (D) 49 : 4

**11.** The charge deposited on 4μF capacitor in the given circuit is:
(A) 6 × 10⁻⁶C (B) 12 × 10⁻⁶C (C) 24 × 10⁻⁶C (D) 36 × 10⁻⁶C

**12.** The equivalent capacitance between points A and B for the combination of capacitor shown is:
(A) 6.0μF (B) 4.0μF (C) 2.0μF (D) 3.0μF

**13.** In the diagram shown, the net capacitance between the points A and B is (in μF):
(A) 2/3 (B) 4/3 (C) 3 (D) 10/3

**14.** Two uncharged capacitors of capacitance C₁ and C₂ are connected in series and charged with a battery of emf V. At steady state the potential difference across the capacitor of capacitance C₁ is:
(A) V/2 (B) (C₂/(C₁² + C₂²))V (C) (C₁/(C₁ + C₂))V (D) (C₂/(C₁ + C₂))V

**15.** Four condensers each of capacity 4μF are connected as shown. VP - VQ = 15 volts. The energy stored in the system is: (1 erg = 10⁻⁷ J)
(A) 2400 ergs (B) 1800 ergs (C) 3600 ergs (D) 5400 ergs

---

### CAPACITORS: LEVEL 2
*Source: Advanced Workbook*

**76.** In case of cylindrical capacitor shown, choose the correct graph between the electric field and radial distance 'r' from the axis. Assume positive charge on inner plate.

**77.** A capacitor is connected to a battery. The force of attraction between the plates when the separation between them is halved:
(A) remains the same (B) becomes eight times (C) becomes four times (D) becomes two times

**\*78.** The distance between the plates of an isolated parallel plate condenser is 4mm and potential difference is 60 volts. If the distance is increased to 12mm, then:
(A) The charge on condenser will reduce to one third (B) The potential difference will become 180 volts (C) The potential difference will remain unchanged (D) The force of attraction will remain unchanged

**79.** In a parallel plate capacitor with unequal charges, capacitance is 'C', and the distance between the plates is 'd'. Choose the correct statements:
(A) A point charge at point 'P' will experience electric force (B) The potential difference will be 3Q/(2εC) (C) The energy stored is 9Q²/(8C) (D) The force on one plate is Q²/(2ε₀d²)

**80.** A photographic flash unit consists of a xenon-filled tube giving a flash of average power 2000 W for 0.04s. The flash is due to discharge of a fully charged 40μF capacitor. The voltage it is charged to is:
(A) 1500V (B) 2000V (C) 2500V (D) 3000V

**81.** A capacitor of capacitance 5μF is charged to 100 V and then disconnected. The minimum work needed to pull the plates apart such that the distance doubles is (in μJ):
(A) 5 (B) 10 (C) 25 (D) 50

**82.** What is the potential difference between points A and B in the circuit shown?
(A) 2V (B) 4 V (C) 3 V (D) 12 V

---

### CAPACITORS: JEE MAIN ARCHIVE
*Source: JEE Main Previous Years (2002-2020)*

**1.** Capacitance (in F) of a spherical conductor having radius 1 m is:
(A) 1.1 × 10⁻¹⁰ (B) 10⁻⁶ (C) 9 × 10⁻⁹ (D) 10⁻³ [2002]

**2.** A sheet of aluminium foil of negligible thickness is introduced between the plates of a capacitor. The capacitance of the capacitor:
(A) decreases (B) remains unchanged (C) becomes infinite (D) increases [2003]

**3.** The minimum work done in placing a charge of 8 × 10⁻¹⁸C on a condenser of capacity 100 μF is: [2003]
(A) 16 × 10³²J (B) 3.1 × 10⁻²⁰J (C) 4 × 10⁻¹¹J (D) 32 × 10⁻³²J

**4.** A parallel plate capacitor is made by stacking n equally spaced plates connected alternately. If the capacitance between any two adjacent plates is C, then the resultant capacitance is: [2005]
(A) (n - 1)C (B) (n + 1)C (C) C (D) nC

**5.** A fully charged capacitor has a capacitance C. It is discharged through a small coil of resistance wire embedded in a thermally insulated block of specific heat capacity s and mass m. If the temperature of the block is raised by ΔT, the potential difference V across the capacitance is: [2005]
(A) √(2msΔT/C) (B) (msΔT/C) (C) (msCT) (D) √(2msCΔT/C)

**6.** A parallel plate condenser with a dielectric of dielectric constant K between the plates has a capacity C and is charged to a potential V volts. The dielectric slab is slowly removed and then reinserted. The net work done by the system in this process is: [2007]
(A) (1/2)(K - 1)CV² (B) CV²(K - 1)/K (C) (K - 1)CV² (D) Zero

**7.** A battery is used to charge a parallel plate capacitor till the potential difference becomes equal to the electromotive force of the battery. The ratio of the energy stored in the capacitor and the work done by the battery will be: [2007]
(A) 1 (B) 2 (C) 1/4 (D) 1/2

**8.** A parallel plate capacitor with air between the plates has a capacitance of 9pF. The space between the plates is now filled with two dielectrics. One has dielectric constant K = 3 and thickness d/3 while the other has Kₑ = 6 and thickness 2d/3. The new capacitance is: [2008]
(A) 1.8 pF (B) 45 pF (C) 40.5 pF (D) 20.25 pF

**9.** Let C be the capacitance of a capacitor discharging through a resistor R. Suppose t₁ is the time taken for the energy to reduce to half its initial value and t₂ is the time taken for the charge to reduce to one-fourth. Then t₁/t₂ is: [2010]
(A) 1 (B) 1/2 (C) 1/4 (D) 2

**10.** Combination of two identical capacitors, a resistor R and a DC voltage source of 6V is used in an experiment on R-C circuit. For a parallel combination, the time in which the voltage of the fully charged combination reduces to half its original voltage is 10s. For series combination, the time needed for reducing the voltage by half is: [2011]
(A) 20 s (B) 10 s (C) 5 s (D) 2.5 s

---

### CAPACITORS: JEE ADVANCED ARCHIVE
*Source: JEE Advanced Previous Years (1990-2019)*

**\*1.** Seven capacitors each of capacitance 2μF are to be connected in a configuration to obtain an effective capacitance of 10/11 μF. Which of the following combinations will achieve the desired result? [1990]

**2.** A parallel plate capacitor of capacitance C is connected to a battery and charged to potential difference V. Another capacitor of capacitance 2C is similarly charged to potential difference 2V. The batteries are then disconnected and the capacitors are connected in parallel such that the positive terminal of one is connected to the negative terminal of the other. The final energy of the configuration is: [1998]
(A) zero (B) (3/2)CV² (C) (25/6)CV² (D) (9/2)CV²

**3.** The magnitude of electric field E in the annular region of a charged cylindrical capacitor: [1996]
(A) is same near the outer cylinder as near the inner cylinder (B) is higher near the outer cylinder than near the inner cylinder (C) varies as 1/r, where r is the distance from the axis (D) varies as 1/r², where r is the distance from the axis

**4.** A parallel combination of 0.1 MΩ resistor and a 10 μF capacitor is connected across a 1.5 V source of negligible resistance. The time required for the capacitor to get charged to 0.75 V is approximately: (in second) [1997]
(A) Infinite (B) log₆ 2 (C) log₁₀ 2 (D) zero

**\*5.** For the circuit shown, which of the following statements is true? [1999]
(A) with S₁ closed V₁ = 15V, V₂ = 20V (B) with S₃ closed, V₁ = V₂ = 25V (C) with S₁ and S₂ closed, V₁ = V₂ = 0 (D) with S₁ and S₂ closed, V₁ = 30V, V₂ = 20V

**6.** Two identical metal plates are given positive charges Q₁ and Q₂(< Q₁). If they are brought close together to form a parallel plate capacitor with capacitance C, the potential difference between them is: [1999]
(A) (Q₁ + Q₂)/2C (B) (Q₁ + Q₂)/C (C) (Q₁ - Q₂)/C (D) (Q₁ - Q₂)/2C

**7.** A parallel plate capacitor of area A, plate separation d and capacitance C is filled with three different dielectric materials. If a single dielectric material is to be used to have the same capacitance C, then its dielectric constant K is given by: [2000]
(A) (1/K) = (1/K₁) + (1/K₂) + (1/(2K₃)) (B) (1/K) = (1/(K₁ + K₂)) + (1/(2K₃)) (C) (1/K) = (K₁K₂/(K₁ + K₂)) + 2K₃ (D) K = (K₁K₂)/(K₁ + K₂) + 2K₃

**8.** The capacitor A has a charge q on it whereas B is uncharged. The charge appearing on the capacitor B a long time after the switch is closed is: [2001]
(A) zero (B) q/2 (C) q (D) 2q

**11.** Two identical capacitors with the same capacitance C. One charged to potential V₁ and the other to V₂. Likely charged plates are then connected. The decrease in energy of the combined system is: [2002]
(A) (1/4)C(V₁² + V₂²) (B) (1/4)C(V₁ + V₂)² (C) (1/4)C(V₁ - V₂)² (D) (1/3)C(V₁ + V₂)²

**12.** A 4μF capacitor and a resistance of 2.5 MΩ are in series with 12 V battery. Find the time after which the potential difference across the capacitor is 3 times the potential difference across the resistor. [Given, ln (2) = 0.693]: [2005]
(A) 13.86s (B) 6.93s (C) 7s (D) 14s

---

### CAPACITORS: MISCELLANEOUS EXERCISES
*Source: Miscellaneous Question Bank (Levels 1-3)*

**1.** Five identical plates each of area A are joined as shown. The distance between the plates is d. The plates are connected to a potential difference of V volts. The charge on plates 2 and 4 will be:
(A) ε₀AV/d, 2ε₀AV/d (B) ε₀AV/d, -2ε₀AV/d (C) -ε₀AV/d, -2ε₀AV/d (D) -ε₀AV/d, ε₀AV/d

**2.** The effective capacitance of two capacitors of capacitance C₁ and C₂(C₂ > C₁) connected in parallel is 25/6 times the effective capacitance when they are connected in series. The ratio C₂/C₁ is:
(A) 3/2 (B) 4/3 (C) 5/3 (D) 25/6

**3.** In the figure below, what is the potential difference between point A and B and between B and C in steady state:
(A) V_AB = V_BC = 100V (B) V_AB = 75V, V_BC = 25V (C) V_AB = 25V, V_BC = 75V (D) V_AB = V_BC = 50V

**4.** A parallel plate capacitor of capacitance C is connected to a battery and charged to potential difference V. Another capacitor of capacitance 2C is charged to potential difference 2V. The batteries are disconnected and the capacitors are connected in parallel with positive terminal of one connected to the negative terminal of the other. The final energy is:
(A) zero (B) 25CV²/6 (C) 3CV²/2 (D) 9CV²/2

**5.** A parallel plate capacitor is made by stacking 10 identical metallic plates equally spaced with the same dielectric between the plates. The alternate plates are connected. If the capacitor formed by two neighbouring plates has a capacitance C, the total capacitance is:
(A) C/10 (B) C/9 (C) 9C (D) 10C

---

### CAPACITORS: REFERENCE FORMULAS

**Capacitance Definitions:**
- C = Q/V
- Parallel Plate: C = ε₀KA/d
- Spherical: C = 4πε₀r₁r₂/(r₁-r₂)
- Cylindrical: C = 2πε₀l/ln(b/a)

**Energy:**
- U = (1/2)QV = (1/2)CV² = Q²/(2C)
- Energy Density: u = (1/2)ε₀E² = (1/2)ε₀K E²

**Combinations:**
- Series: 1/Ceq = Σ(1/Cᵢ)
- Parallel: Ceq = ΣCᵢ

**RC Circuits:**
- τ = RC (time constant)
- Charging: q(t) = Q(1 - e^(-t/τ))
- Discharging: q(t) = Q e^(-t/τ)
