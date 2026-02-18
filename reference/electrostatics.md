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

(Questions to be added)
