# Moving Charges & Magnetism

## Overview
This module covers the Magnetic Effect of Current, which deals with the interaction between moving charges, current-carrying conductors, and magnetic fields. Topics range from fundamental concepts of magnetic field generation through Biot-Savart Law and Ampere's Circuital Law, to the behavior of charged particles in magnetic fields and applications in devices like galvanometers. The module provides comprehensive understanding of magnetic forces, magnetic dipoles, and magnetic materials.

---

## 1. Biot-Savart Law

### Concepts
- Biot-Savart Law gives the magnetic induction due to an infinitesimal current element of length dl carrying current i
- The magnetic induction is a vector quantity that depends on the current element, distance, and angle
- The constant μ₀ is the permeability of free space (4π × 10⁻⁷ TmA⁻¹)
- For media other than air/vacuum, the relative permeability μᵣ of the medium is used
- The magnetic field lines around a straight wire are concentric circles, determined by the right-hand rule

### Formulas
- `dB = (μ₀/4π) × (i(dl × r)/r³)` - General Biot-Savart Law
- `dB = (μ₀μᵣ/4π) × (i(dl × r)/r³)` - For media other than air/vacuum

### Important Notes
- The direction is determined by the right-hand rule: curl fingers in direction of current, thumb points in field direction for a straight wire
- The vector r goes from the current element to the point where the field is calculated
- The magnetic field is perpendicular to both the current direction and the position vector

### Worked Example
**Q:** Derive an expression for the magnetic field at a distance R from an infinitely long wire carrying current I at point P lying at distance R from the wire.

**A:**
- Consider an infinitesimal current element dx at distance x from point O
- The angle between dx and position vector r is (π - θ)
- Using Biot-Savart Law: dB = (μ₀Idx sin(π−θ))/(4πr²)
- After integration from -∞ to +∞: B = (μ₀I)/(2πR)

---

## 2. Magnetic Field due to Straight Conductor (Infinite Length)

### Concepts
- The magnetic field due to a long straight wire carrying current is inversely proportional to the distance from the wire
- The field forms concentric circles around the wire
- All points equidistant from the wire have the same magnetic field magnitude

### Formulas
- `B = (μ₀i)/(2πr)` - Magnetic field at distance r from infinite straight wire

### Important Notes
- The magnetic field is strongest near the wire and decreases with distance
- The direction is tangent to circles centered on the wire
- Right-hand rule determines the circular direction

### Worked Example
**Q:** Two long straight horizontal parallel wires carry equal currents in the same direction, separated by distance 2a. What is the field at the midpoint between them?

**A:**
- Field from each wire: B = (μ₀i)/(2π·a)
- Both fields point in the same direction at the midpoint (perpendicular to the plane containing the wires)
- Net field: B_net = 2 × (μ₀i)/(2πa) = (μ₀i)/(πa)

---

## 3. Magnetic Field due to Finite Straight Conductor

### Concepts
- For a wire of finite length, the magnetic field depends on the angles subtended by the wire endpoints at the point where field is calculated
- The angles α and β are measured from the perpendicular distance point to the wire endpoints

### Formulas
- `B = (μ₀i)/(2πr) × ((cos α + cos β)/2)` - Magnetic field due to finite wire
  where α, β are angles between wire and lines joining endpoints to the point

### Important Notes
- As the wire becomes very long, the angles approach 0° and 180°, giving B = (μ₀i)/(2πr)
- The perpendicular distance r is measured from the observation point to the wire

### Worked Example
**Q:** Find the magnetic field due to a finite straight wire PQ of length l at a distance r from the wire.

**A:**
- For finite wire: B = (μ₀i)/(2πr) × (cos α + cos β)/2
- α and β are the angles from the perpendicular at the observation point to the endpoints
- For specific geometries, integrate using the angles

---

## 4. Magnetic Field due to Circular Current Loop

### Concepts
- A circular loop carrying current creates a magnetic field both at its center and along its axis
- The field is strongest at the center and decreases along the axis
- For N turns, the field is multiplied by N

### Formulas
- `B_center = (μ₀iN)/(2r)` - Field at center of loop with N turns and radius r
- `B_axis = (μ₀ir²N)/(2(x² + r²)^(3/2))` - Field at distance x along axis
- At center (x=0): `B = (μ₀iN)/(2r)`

### Important Notes
- The field is maximum at the center of the loop
- The field direction is perpendicular to the loop plane, determined by right-hand rule
- The field decreases as x³ for large distances along the axis

### Worked Example
**Q:** A circular loop of radius R carries current I. Find the magnetic field along the axis at distance x from the center.

**A:**
- Using Biot-Savart Law integration over the loop
- Field components perpendicular to axis cancel by symmetry
- B_axis = (μ₀IR²)/(2(x² + R²)^(3/2))
- At x = 0: B = (μ₀I)/(2R)

---

## 5. Magnetic Field at Center of Current Arc

### Concepts
- A curved wire segment subtending an angle α at the center produces a magnetic field proportional to the angle
- The field is the angular fraction of what a complete circular loop would produce

### Formulas
- `B = (μ₀i)/(2πr) × (α/π) = (μ₀iα)/(4πr²)` - Field at center of arc of radius r subtending angle α

### Important Notes
- The field depends linearly on the angle subtended
- For a complete circle (α = 2π): B = (μ₀i)/(2r)

### Worked Example
**Q:** A wire arc of length l bent in a shape of arc of radius r produces field at center. Find the expression.

**A:**
- The angle subtended: α = l/r
- B = (μ₀i)/(2πr) × (l/r)/π = (μ₀il)/(4πr²)
- Or using: B = (μ₀iα)/(4πr²) where α = l/r

---

## 6. Magnetic Field inside Long Solenoid

### Concepts
- A solenoid is a coil of wire wound on a cylindrical form, creating a nearly uniform field inside
- The field inside is approximately uniform and parallel to the axis
- The field outside is nearly zero
- N is total number of turns, l is length, n = N/l is turns per unit length

### Formulas
- `B = (μ₀iN)/l = μ₀in` - Magnetic field inside solenoid
  where n is number of turns per unit length

### Important Notes
- The field is independent of the radius of the solenoid (depends only on turns per unit length)
- The field is uniform throughout the interior
- Near the ends, the field is weaker than at the center
- The field outside is negligible

### Worked Example
**Q:** Derive the magnetic field inside a long solenoid of length l, radius r with N turns carrying current I.

**A:**
- Using Biot-Savart Law for circular loops with spacing dl = l/N
- Consider solenoid as many circular loops with spacing dl
- Integrate field contributions from all loops
- At any internal point far from ends: B = μ₀IN/l = μ₀In

---

## 7. Magnetic Field in Toroid

### Concepts
- A toroid is a solenoid bent into a ring, creating a circular magnetic field
- The field exists only inside the toroid and varies with radius
- The field is in the tangential direction (circular paths)

### Formulas
- Field configuration similar to straight solenoid but in circular geometry

### Important Notes
- The field is zero outside the toroid
- The field lines are circles centered at the toroid axis

---

## 8. Ampere's Circuital Law

### Concepts
- Ampere's Law relates the circulation of magnetic field around a closed loop to the current passing through the loop
- The line integral of B around a closed path equals μ₀ times the current enclosed
- This law is useful for calculating fields with high symmetry (cylindrical, planar, etc.)

### Formulas
- `∮ B·dl = μ₀I_enclosed` - Ampere's Circuital Law

### Important Notes
- Choose an Amperian loop that has symmetry matching the field configuration
- The direction of the loop is related to current direction by right-hand rule
- Applicable for symmetric current distributions

### Worked Example
**Q:** Use Ampere's Law to find the magnetic field at distance r from a long straight wire carrying current I.

**A:**
- Choose circular Amperian loop of radius r centered on the wire
- By symmetry, B is constant on the loop and tangent to it
- ∮ B·dl = B(2πr) = μ₀I
- Solving: B = μ₀I/(2πr)

---

## 9. Magnetic Force on Moving Charged Particle (Lorentz Force)

### Concepts
- A moving charged particle experiences a force when in a magnetic field
- The force is perpendicular to both velocity and magnetic field
- The force is zero if velocity is parallel to the field
- The force magnitude depends on the charge, velocity, field, and angle between velocity and field

### Formulas
- `F = q(v × B)` - General Lorentz force
- `F = qvB sin θ` - Magnitude form, where θ is angle between v and B
- Direction: Right-hand rule for positive charge; opposite for negative charge

### Important Notes
- The magnetic force does no work (always perpendicular to motion)
- The speed of the particle remains constant (kinetic energy unchanged)
- Only the direction of motion changes

### Worked Example
**Q:** An electron moving at 10⁷ m/s is 5 cm from a long straight wire carrying 50 A. Find the force if velocity is (i) towards wire, (ii) parallel to wire, (iii) perpendicular to both.

**A:**
- Magnetic field at 5 cm: B = (μ₀I)/(2πr) = 2 × 10⁻⁴ T
- (i) v towards wire: F = 0 (velocity parallel to field)
- (ii) v parallel to wire: F = 3.2 × 10⁻¹⁵ N (perpendicular to wire)
- (iii) v perpendicular: F = 3.2 × 10⁻¹⁵ N (depends on direction)

---

## 10. Motion of Charged Particle in Magnetic Field - Straight Line Motion

### Concepts
- When a charged particle's velocity is parallel to magnetic field, force is zero
- The particle moves in a straight line with constant velocity
- This is Case 1 of particle motion in uniform magnetic field

### Formulas
- `F = q(v × B) = 0` when v ∥ B

### Important Notes
- No acceleration, constant velocity motion
- The particle continues undeflected

---

## 11. Motion of Charged Particle in Magnetic Field - Circular Motion

### Concepts
- When velocity is perpendicular to magnetic field, the particle moves in a circular path
- The magnetic force provides the centripetal force
- The radius of circular motion depends on momentum and magnetic field strength
- The time period is independent of velocity (cyclotron principle)

### Formulas
- `qvB = mv²/r` - Force balance for circular motion
- `r = mv/(qB)` - Radius of circular path
- `T = 2πm/(qB)` - Period of revolution (independent of velocity)
- `f = qB/(2πm)` - Cyclotron frequency

### Important Notes
- The period is independent of speed and radius - all particles with same q/m ratio have same period
- The plane of circular motion is perpendicular to magnetic field
- Kinetic energy is conserved

### Worked Example
**Q:** A charged particle of mass m and charge q is projected perpendicular to a uniform magnetic field B. Find the radius and period.

**A:**
- Centripetal force = Magnetic force: mv²/r = qvB
- Radius: r = mv/(qB)
- Period: T = 2πr/v = 2πm/(qB)
- Frequency: f = qB/(2πm)

---

## 12. Motion of Charged Particle in Magnetic Field - Helical Motion

### Concepts
- When velocity has components both parallel and perpendicular to the field, the particle follows a helical path
- The parallel component causes motion along the field direction
- The perpendicular component causes circular motion
- The combination results in a helix

### Formulas
- `v_∥ = v cos θ` - Velocity parallel to field
- `v_⊥ = v sin θ` - Velocity perpendicular to field
- `r = m(v sin θ)/(qB)` - Radius of helix
- `T = 2πm/(qB)` - Period of one revolution
- `P = v_∥ × T = v cos θ × (2πm)/(qB)` - Pitch of helix

### Important Notes
- The axis of helix is parallel to magnetic field
- The radius depends on perpendicular velocity component
- The pitch is the displacement parallel to field during one revolution
- The particle makes circular loops while also moving along the field direction

### Worked Example
**Q:** An electron moves at velocity v at angle θ to a uniform magnetic field B. Describe and analyze its motion.

**A:**
- Parallel component v_∥ = v cos θ moves particle along field
- Perpendicular component v_⊥ = v sin θ causes circular motion
- Radius of circular motion: r = (m v sin θ)/(qB)
- Period of revolution: T = 2πm/(qB)
- Pitch: P = v cos θ × T = (2πm v cos θ)/(qB)

---

## 13. Magnetic Force on Current-Carrying Conductor

### Concepts
- A current-carrying conductor in a magnetic field experiences a force
- The force is given by the vector product of current element and magnetic field
- The force depends on the length of conductor, current magnitude, field strength, and angle between conductor and field

### Formulas
- `dF = I(dl × B)` - Force on infinitesimal current element
- `F = I(l × B)` - Force on straight conductor of length l in uniform field
- `F = BIl sin θ` - Magnitude, where θ is angle between conductor and field

### Important Notes
- Maximum force when conductor is perpendicular to field (θ = 90°)
- Zero force when conductor is parallel to field (θ = 0°)
- Direction determined by right-hand rule

### Worked Example
**Q:** A straight wire of length l carrying current I is placed in a uniform magnetic field B perpendicular to it. Find the force.

**A:**
- Force on wire: F = I(l × B)
- Since l ⊥ B: F = BIl
- Direction: Perpendicular to both current and field (right-hand rule)

---

## 14. Force Between Parallel Current-Carrying Conductors

### Concepts
- Two parallel wires carrying current exert forces on each other
- The force is attractive if currents are in the same direction
- The force is repulsive if currents are in opposite directions
- The force per unit length depends on the currents and separation

### Formulas
- `F/l = (μ₀i₁i₂)/(2πr)` - Force per unit length between parallel wires
  where r is separation distance
- Force is attractive for same direction currents
- Force is repulsive for opposite direction currents

### Important Notes
- Each wire creates a field that exerts force on the other wire
- The force is perpendicular to both wires
- This principle is used in defining the Ampere unit

### Worked Example
**Q:** Two parallel horizontal wires separated by distance r carry currents i₁ and i₂ in the same direction. Find the force per unit length.

**A:**
- Wire 1 creates field at wire 2: B₁ = (μ₀i₁)/(2πr)
- Force on wire 2 per unit length: F/l = i₂B₁ = (μ₀i₁i₂)/(2πr)
- Direction: Attractive (towards wire 1)
- If currents opposite: Force is repulsive

---

## 15. Magnetic Dipole Moment

### Concepts
- A closed current loop or rotating charged disc acts as a magnetic dipole
- The dipole moment is defined as the product of current and loop area
- The direction is perpendicular to the loop plane (right-hand rule)
- Magnetic dipoles have North and South poles, similar to bar magnets

### Formulas
- `m = iA` - Magnetic dipole moment for N turns
- `m = iAN` - Dipole moment for N-turn loop
- For rotating disc: `m = (QωR²)/4` - Dipole moment of rotating charged disc
  where Q is total charge, ω is angular velocity, R is radius

### Important Notes
- Magnetic dipole moment is a vector quantity
- The magnitude is independent of the shape of the loop
- The direction follows right-hand rule

### Worked Example
**Q:** A thin dielectric disc of radius R has charge Q uniformly distributed over its surface. It rotates with angular velocity ω about its axis. Find the magnetic field at the center.

**A:**
- Divide disc into ring elements at radius x with width dx
- Each ring rotates with frequency ω/2π
- Current element: dI = (ωdq)/(2π) where dq = (Q/πR²) × 2πx dx
- Magnetic moment: dm = (ωdq)/2π × πx² = (Qωx dx)/(2πR²) × πx²
- Total moment: m = (QωR²)/4
- Field at center: B = (μ₀m)/(2πR³) or B = (μ₀Qω)/(2πR)

---

## 16. Torque on Current Loop in Uniform Magnetic Field

### Concepts
- A magnetic dipole (current loop) placed in a uniform magnetic field experiences a torque
- The torque tends to align the dipole moment with the field direction
- The torque depends on current, area, field strength, and angle between dipole moment and field

### Formulas
- `τ = m × B` - Torque vector
- `τ = mB sin θ` - Magnitude, where θ is angle between m and B
- `τ = iAB sin θ` for single loop, or `τ = iANB sin θ` for N turns

### Important Notes
- Torque is maximum when dipole is perpendicular to field
- Torque is zero when dipole is parallel or antiparallel to field
- The torque tries to align the dipole with the field

### Worked Example
**Q:** A rectangular loop of area A carrying current I is placed in a uniform magnetic field B with its plane making angle θ with the field. Find the torque.

**A:**
- Magnetic moment: m = iA
- Torque: τ = m × B = iAB sin θ
- If plane parallel to field (θ = 90°): τ = iAB (maximum)
- If plane perpendicular to field (θ = 0°): τ = 0

---

## 17. Potential Energy of Magnetic Dipole

### Concepts
- A magnetic dipole in a uniform field possesses potential energy
- Potential energy is minimum when dipole is aligned with field
- Potential energy is maximum when dipole is anti-aligned with field
- The potential energy difference determines the torque

### Formulas
- `U = -mB cos θ = -m·B` - Potential energy of magnetic dipole
- Minimum at θ = 0° (aligned): `U_min = -mB`
- Maximum at θ = 180° (anti-aligned): `U_max = +mB`

### Important Notes
- The dipole tends to minimize potential energy
- The field does work on the dipole when it rotates towards alignment
- Stable equilibrium at θ = 0° (dipole aligned with field)
- Unstable equilibrium at θ = 180° (dipole anti-aligned)

### Worked Example
**Q:** A magnetic dipole of moment m is placed in a uniform field B. Find the potential energy at different angles.

**A:**
- U = -mB cos θ
- At θ = 0°: U = -mB (minimum, stable)
- At θ = 90°: U = 0
- At θ = 180°: U = +mB (maximum, unstable)
- Work to rotate from 0° to 180°: W = 2mB

---

## 18. Magnetic Field due to Solenoid - Detailed Analysis

### Concepts
- A solenoid can be analyzed as a series of circular loops in series
- The field contribution from each loop is integrated over the length
- The field is approximately uniform inside and zero outside
- For finite solenoids, the field varies along the axis

### Formulas
- At general point on axis at distance x from center: `B = (μ₀IN)/2l × [cos α - cos β]`
  where α, β are angles from point to solenoid ends
- At mid-point: `B ≈ μ₀IN/l` for long solenoid
- At end: `B = (μ₀IN)/(2l)` (half the interior value)

### Important Notes
- The field is strongest at the center and weaker near the ends
- For very long solenoids, end effects are negligible
- The field is approximately uniform in the interior

---

## 19. Magnetic Field due to Toroid

### Concepts
- A toroid is formed by bending a solenoid into a circle
- The field exists only inside the toroid in circular paths
- The field magnitude varies inversely with radius

### Formulas
- At radius r from toroid axis: `B = (μ₀IN)/(2πr)` inside toroid
- B = 0 outside toroid

### Important Notes
- The field lines are concentric circles
- The field is zero at the geometric center and outside the toroid
- Using Ampere's Law with circular path

---

## 20. Moving Coil Galvanometer

### Concepts
- A galvanometer measures electric current using the deflection of a current-carrying coil in a magnetic field
- The coil rotates when current flows, moving a pointer on a scale
- The deflection is proportional to current (in ideal case)
- Uses magnetic torque on the current loop and restoring torque from springs

### Formulas
- Magnetic torque: `τ_m = NABI sin θ ≈ NABI` (for small angles)
- Restoring torque: `τ_r = Cθ` where C is spring constant
- At equilibrium: `NABI = Cθ`
- Deflection: `θ = (NABI)/C` - proportional to current I

### Important Notes
- The deflection angle is proportional to current
- The device converts magnetic energy to mechanical motion
- Used in analog ammeters and voltmeters with appropriate scaling

### Worked Example
**Q:** Describe how a galvanometer works and derive the relation between deflection and current.

**A:**
- A rectangular coil of N turns and area A is suspended in a uniform radial magnetic field B
- Current I through coil experiences torque: τ_m = NABI
- Spring provides restoring torque: τ_r = Cθ
- At equilibrium: NABI = Cθ
- Deflection: θ = NABI/C, proportional to current

---

## 21. Magnetic Materials - Diamagnetic Substances

### Concepts
- Diamagnetic materials are weakly repelled by magnetic fields
- They have no permanent magnetic dipole moment
- When placed in a magnetic field, they develop induced dipole moments opposing the field
- Examples: Copper, bismuth, water, air

### Formulas
- Magnetic susceptibility: χ < 0 (negative)
- Very small magnitude: χ ≈ -10⁻⁵ to -10⁻⁶

### Important Notes
- All materials have some diamagnetic character
- Diamagnetic effect is usually masked if material is also paramagnetic or ferromagnetic
- Diamagnetic materials are repelled from regions of strong field

---

## 22. Magnetic Materials - Paramagnetic Substances

### Concepts
- Paramagnetic materials have permanent magnetic dipole moments
- In absence of field, dipoles are randomly oriented
- In magnetic field, dipoles align partially with field (statistically)
- Weakly attracted by magnetic fields
- Examples: Aluminum, manganese, oxygen

### Formulas
- Magnetic susceptibility: χ > 0 (positive)
- Magnitude: χ ≈ 10⁻⁴ to 10⁻³
- Magnetization is temperature-dependent (Curie's Law)

### Important Notes
- Attraction to field is much stronger than diamagnetic repulsion
- Paramagnetic effect decreases with temperature
- Dipoles tend to align with field but thermal motion opposes this

---

## 23. Magnetic Materials - Ferromagnetic Substances

### Concepts
- Ferromagnetic materials have strong permanent magnetic dipole moments
- Magnetic domains align strongly with external field
- Retain magnetization even after field is removed
- Strongly attracted to magnetic fields
- Examples: Iron, cobalt, nickel

### Formulas
- Magnetic susceptibility: χ >> 1 (very large)
- Values: χ ≈ 10² to 10⁵

### Important Notes
- Show hysteresis - magnetization depends on field history
- Saturation occurs at high fields (all domains aligned)
- Curie temperature above which ferromagnetic behavior is lost
- Used in permanent magnets and electromagnets

---

## 24. Earth's Magnetism

### Concepts
- Earth has a magnetic field similar to that of a magnetic dipole
- The magnetic poles don't coincide exactly with geographic poles
- Magnetic field lines emerge from South Magnetic Pole and enter North Magnetic Pole
- The field varies with location and time

### Formulas
- Magnetic field strength at Earth's surface: B ≈ 25-65 μT (varies by location)
- Inclination angle: varies from 0° at equator to 90° at poles

### Important Notes
- The field protects Earth from solar wind
- Used for navigation with compasses
- The field is generated by motion of molten iron in Earth's core
- Field strength and direction vary with geographic location and time

---

## 25. Magnetic Field due to Conducting Strip

### Concepts
- A conducting strip of width b carrying current I produces a magnetic field
- Can be treated as collection of parallel infinite wires
- Field is symmetric about the strip
- Used in practical applications with finite conductors

### Formulas
- At perpendicular distance r: `B = (μ₀I)/(πb) tan⁻¹(b/(2r))`
- For very large r: `B ≈ (μ₀I)/(2πr)` (approaches infinite wire result)

### Important Notes
- Field depends on the width of the strip
- Integration of contributions from infinitesimal wires composing the strip
- Field configuration is symmetric

---

## 26. Magnetic Field in Complex Current Configurations

### Concepts
- Complex shaped current paths can be analyzed by superposition
- Different geometrical elements (straight, circular, arc) contribute their individual fields
- The net field is vector sum of all contributions
- Symmetry can simplify calculations

### Formulas
- B_total = B_straight + B_circular + B_arc + ... (vector addition)

### Important Notes
- Each element must be analyzed separately using appropriate formula
- Vector addition must account for direction of each field component
- Symmetry can eliminate certain components

### Worked Example
**Q:** A current loop has a square portion of side a connected to straight portions at the ends. Find the field at specific points like the center or along the axis.

**A:**
- Divide the configuration into segments
- For square part: analyze four straight wires
- Straight portions: use infinite/finite wire formulas
- Add vector components of all contributions
- Field at center depends on relative positions and magnitudes

---

## 27. Charged Particle Motion in Combined Electric and Magnetic Fields

### Concepts
- When both electric and magnetic fields are present, particle experiences both electric and magnetic forces
- Electric field accelerates the particle; magnetic field deflects it
- The relative magnitudes determine the trajectory
- At certain velocities, electric and magnetic forces balance (velocity selector)

### Formulas
- Total force: `F = q(E + v × B)`
- For velocity selector: `qE = qvB ⇒ v = E/B`

### Important Notes
- At specific velocity, electric and magnetic forces balance
- This principle is used in mass spectrometers
- The particle can move undeflected at this special velocity

### Worked Example
**Q:** A particle with charge q, mass m, and velocity v enters a region with uniform electric field E and magnetic field B perpendicular to each other and to velocity. Analyze the motion.

**A:**
- Electric force: F_E = qE (in direction of E)
- Magnetic force: F_B = qvB (perpendicular to both v and B)
- If E and B oriented such that forces are opposite:
  At v = E/B, forces balance and particle moves straight
- For v < E/B: particle curves toward E
- For v > E/B: particle curves away from E

---

## 28. Magnetic Field due to Rotating Charged Disc

### Concepts
- A uniformly charged disc rotating about its axis produces a magnetic field
- Can be analyzed as collection of circular current loops
- The magnetic moment depends on charge, angular velocity, and radius
- Useful model for understanding magnetic moments at atomic level

### Formulas
- Magnetic moment: `m = (QωR²)/4`
- Magnetic field at center: `B = (μ₀Qω)/(2πR)`

### Important Notes
- The disc rotation creates effective currents
- Field at center is perpendicular to disc plane
- Field direction determined by direction of rotation
- Magnetic moment proportional to angular velocity

---

## 29. Motion of Particle from One Region to Another

### Concepts
- When a charged particle enters a magnetic field region from field-free space, its path bends
- The particle follows circular arc while in the field
- The radius depends on momentum and field strength
- The angle of deflection depends on path length in the field and radius of curvature

### Formulas
- Radius of circular path: `r = mv/(qB)`
- For particle entering perpendicularly: `sin α = d/r` where d is width of field region
- Deflection angle: `α = sin⁻¹(d/r)` for small d; `α = π/2` for d = r

### Important Notes
- The particle exits the field at angle α to its entry direction
- The radius of path is constant in uniform field
- Geometric analysis determines the exit point and direction

### Worked Example
**Q:** A charged particle enters a magnetic field region of width d perpendicularly. Find the deflection angle.

**A:**
- Particle follows circular arc of radius r = mv/(qB)
- While traversing width d, it subtends angle α at center
- From geometry: sin α = d/r
- Deflection angle = α = sin⁻¹(d/r)
- For d << r: α ≈ d/r
- For d = r: α = π/6 = 30°

---

## 30. Ratio of Magnetic Moment to Angular Momentum

### Concepts
- For rotating charged object, magnetic moment and angular momentum are related
- The ratio depends on the charge-to-mass ratio and distribution of charge
- For electron: ratio involves electron charge and mass
- Important in atomic physics and quantum mechanics

### Formulas
- For uniformly charged rotating sphere: `M/L = Q/(2M)` where Q is charge, M is mass
- For electron orbiting: specific ratio related to electron properties

### Important Notes
- The ratio is fundamental and appears in many atomic phenomena
- Gyromagnetic ratio: `γ = q/(2m)`
- Important for understanding atomic and nuclear magnetism

### Worked Example
**Q:** A charge q uniformly distributed over a sphere of mass m rotates about its axis. Find the ratio of magnetic moment to angular momentum.

**A:**
- Magnetic moment: m = (qωr²)/4 (from rotating disc analysis)
- Angular momentum: L = (2/5)Mr² × ω (for rotating sphere)
- Ratio: M/L = (qωr²/4) / ((2/5)Mr²ω) = q/(8M/5) = 5q/(8M)
- For electrons: Specific value related to charge and mass

---

## Questions

(Questions to be added)
