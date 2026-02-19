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

### ANSWER KEYS (Reference)

**Workbook Answer Key -- Level 1 (Q1-90)**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | C | D | B | B | D | B | D | A | C | A | C | B | C | B | A |

| Q# | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | A | D | B | C | D | A | C | B | A | A | B | A | A | D | C |

| Q# | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | B | A | C | C | A | B | C | C | D | A | B | C | B | C | D |

| Q# | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | B | D | D | C | A | B | A | B | A | A | C | A | C | C | A |

| Q# | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | C | C | B | A | D | C | D | B | A | A | A | B | A | B | D |

| Q# | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | 1.5 | 2 | 4 | 1.50 | 4.00 | 8.87 | 2.00 | 1 | 2 | 8 | 3.14 | 6.54 | 3 | 3 | 6 |

**Workbook Answer Key -- Level 2 (Q91-140)**

| Q# | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99 | 100 | 101 | 102 | 103 | 104 | 105 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | C | B | A | C | ABC | ABCD | B | C | A | 9 | A | B | A | A | A |

| Q# | 106 | 107 | 108 | 109 | 110 | 111 | 112 | 113 | 114 | 115 | 116 | 117 | 118 | 119 | 120 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | C | D | BC | AC | A | A | A | D | A | C | D | A | D | 6 | BCD |

| Q# | 121 | 122 | 123 | 124 | 125 | 126 | 127 | 128 | 129 | 130 | 131 | 132 | 133 | 134 | 135 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | D | A | C | B | BC | BD | A | B | A | 5 | 0.71 | ABD | 0.28 | D | ABCD |

| Q# | 136 | 137 | 138 | 139 | 140 |
|---|---|---|---|---|---|
| Ans | AC | BCD | ABC | A | BC |

**JEE Main (Archive) Answer Key (Q1-88)**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | A | B | A | A | B | A | B | A | C | D | C | C | B | B | B |

| Q# | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | B | C | A | C | A | C | C | B | B | A | D | B | A | D | B |

| Q# | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | D | A | C | C | D | A | D | B | A | A | D | D | A | B | C |

| Q# | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | A | A | B | C | B | C | None | A | D | D | B | B | A | B | C |

| Q# | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | A | A | D | D | B | D | D | A | C | A | D | A | D | A | D |

| Q# | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | A | D | A | D | B | 20 | A | B | D | C | B | B | D |

**JEE Advanced (Archive) Answer Key (Q1-79)**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | C | C | D | C | D | A | C | C | C | B | D | B | D | B | C |

| Q# | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | A | B | D | A | C | C | A | B | D | A | A | D | B | D | [2008] |

| Q# | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | ABD | ABD | AC | AC | ACD | BC or BD or BCD | CD | AC | AD | ABC | AB | ABD |

| Q# | 43-45 (Matrix) | 46-48 | 49-52 | 53 | 54 | 55-57 | 58 | 59 |
|---|---|---|---|---|---|---|---|---|
| Ans | [A-P;Q;R;S;4], [B-Q;R;2;3], [C-2;3;4;1;2;3], [D-1;2;2;3;1;2;3] | C, A, C | 0.1, (i) 3 (ii) 13 (iii) 2.88 | 1 | 4 (i) 4 (ii) 2.4 | (i) 6.54 (ii) (0, 8.1) | 1 | blank |

---

### MAGNETISM: LEVEL 0 (EASY)

**1.** What is the magnetic moment associated with a coil of 1 turn, area of cross-section 10^-4 m^2 carrying a current of 2A?
(A) 2 × 10^-4 A-m^2 (B) 3 × 10^-4 A-m^2 (C) 4 × 10^-4 A-m^2 (D) 5 × 10^-4 A-m^2

**2.** The kinetic energy of a charged particle moving in a uniform magnetic field does not change. Why?
(A) Magnetic force is perpendicular to velocity (B) Magnetic force is parallel to velocity (C) Magnetic field is uniform (D) None of these

**3.** How will the magnetic field intensity at the centre of a circular wire carrying current change, if the current through the wire is doubled and radius of the coil is halved?
(A) Increases 4 times (B) Decreases 4 times (C) Remains same (D) Increases 2 times

**4.** Can neutrons be accelerated in a cyclotron? Why?
(A) Yes, they have charge (B) No, they are neutral (C) Yes, magnetic force acts on them (D) No, they don't have mass

**5.** Which physical quantity has the unit wb/m^2? Is it a scalar or a vector quantity?
(A) Magnetic field, scalar (B) Magnetic field, vector (C) Magnetic flux, scalar (D) Magnetic moment, vector

---

### MAGNETISM: LEVEL 1 (STANDARD)

**6.** Explain the following: Why do magnetic lines of force form continuous closed loops?
(A) Magnetic poles can exist independently (B) Magnetic monopoles don't exist (C) Field lines represent force directions (D) Lines of force follow Ampere's law

**7.** A small compass needle of magnetic moment 'M' and moment of inertial 'I' is free to oscillate in a magnetic field B. It is slightly disturbed from its equilibrium position and then released. Show that it executes simple harmonic motion. Hence, write the expression for its time period.
(A) T = 2π√(I/MB) (B) T = π√(I/MB) (C) T = 2π√(M/IB) (D) T = √(I/2πMB)

**8.** An electron in the ground state of hydrogen atom is revolving in anti-clock wise direction in a circular orbit. The atom is placed in a magnetic field such that the normal to the electron orbit makes an angle of 30° with the magnetic field. Find the torque experienced by the orbiting electron.
(A) τ = eμB sin(30°) (B) τ = eμB cos(30°) (C) τ = eμB (D) τ = 0

**9.** A short bar magnet placed with its axis at 30° with a uniform external magnetic field of 0.25T experiences a torque of magnitude equal to 4.5 × 10^-2 J. What is the magnitude of magnetic moment of the magnet?
(A) 0.36 A-m^2 (B) 0.45 A-m^2 (C) 0.54 A-m^2 (D) 0.63 A-m^2

**10.** A circular coil of wire consisting of 100 turns, each of radius 8.0 cm carries a current of 0.40 A. What is the magnitude of the magnetic field B at the centre of the coil?
(A) 3.14 × 10^-4 T (B) 3.14 × 10^-3 T (C) 3.14 × 10^-2 T (D) 3.14 × 10^-1 T

**11.** If a solenoid of magnetic moment 0.6J^-1 is free to turn about the vertical direction and a uniform horizontal magnetic field of 0.25 T is applied, what is the magnitude of torque on the solenoid when its axis makes an angle of 30° with the direction of applied field?
(A) 0.75 N-m (B) 0.075 N-m (C) 0.0075 N-m (D) 0.00075 N-m

**12.** What is the magnitude of magnetic force per unit length on a wire carrying a current of 8 A and making an angle of 30° with the direction of a uniform magnetic field of 0.15 T?
(A) 0.6 N/m (B) 0.6√3 N/m (C) 0.3 N/m (D) 0.3√3 N/m

---

### MAGNETISM: LEVEL 2 (ADVANCED)

**13.** A 3.0 cm wire carrying a current of 10 A is placed inside a solenoid perpendicular to its axis. The magnetic field inside the solenoid is given to be 0.27 T. What is the magnetic force on the wire?
(A) 8.1 × 10^-3 N (B) 8.1 × 10^-2 N (C) 8.1 × 10^-1 N (D) 8.1 N

**14.** (i) A circular coil of 30 turns and radius 8.0 cm carrying a current of 6.0 A is suspended vertically in a uniform horizontal magnetic field of magnitude 1.0 T. The field lines make an angle of 60° with the normal of the coil. Calculate the magnitude of the counter torque that must be applied to prevent the coil from turning.
(A) 1.25 N-m (B) 2.0 N-m (C) 3.75 N-m (D) 5.0 N-m

**15.** A square loop of side 'a' carries a current I. The magnetic field at the centre of the loop is:
(A) (2μ₀I√2)/(πa) (B) (μ₀I√2)/(πa) (C) (4μ₀I√2)/(πa) (D) (μ₀I)/(πa)

---

### MISCELLANEOUS

**1.** A current i is passing through a straight conductor of infinite length. The magnetic field at a point situated at a distance R from the conductor is:
(A) (μ₀i)/(2π) (B) (μ₀i)/(2πR^2) (C) (μ₀i)/(2πR) (D) (μ₀i)/(2πR^3)

**2.** A cell is connected between two points of a uniformly thick circular conductor. I₁ and I₂ are the currents flowing in two parts of the circular conductor of radius a. The magnetic field at the centre of the loop will be:
(A) zero (B) (μ₀)/(4π)(I₁ - I₂) (C) (μ₀)/(2π)(I₁ - I₂) (D) (μ₀)/(a)(I₁ + I₂)

**3.** A circular current carrying coil has a radius R. The distance from the centre of the coil on the axis of the coil, where the magnetic induction is 1/8th of its value at the centre of the coil is:
(A) √3R (B) R/√3 (C) (2/√3)R (D) R/(2√3)

**4.** If an electron describes half a revolution in a circle of radius r in a magnetic field B, the energy acquired by it is:
(A) zero (B) (1/2)mv^2 (C) (1/4)mv^2 (D) πr × Bev

**5.** A charged particle begins to move in a magnetic field, initially parallel to the field. The direction of the field now begins to change, with its magnitude remaining constant. Then:
(A) The magnitude of the force acting on the particle will remain constant (B) The magnitude of the force acting on the particle will change (C) The particle will always move parallel to the field (D) The speed of the particle will change

**6.** The radius of the path of an electron moving at a speed of 3 × 10^7 m/s perpendicular to a magnetic field 5 × 10^-4 T is nearly (ignore relativistic effect on mass due to speed):
(A) 15 cm (B) 45 cm (C) 27 cm (D) 34 cm

**7.** In case of motion of a charged particle in a steady magnetic field:
(A) speed remains constant (B) momentum remains constant (C) kinetic energy remains constant (D) work done is always zero

**8.** Which of the following statements are correct?
(A) A charged particle can be accelerated by a magnetic field (B) An electron and proton are moving with the same kinetic energy along the same direction. When they pass through a uniform magnetic field perpendicular to their direction of motion, they describe circular path (C) There is no change in the energy of a charged particle moving in a magnetic field although magnetic force acts on it. (D) Two electrons enter with the same speed but in opposite direction in a uniform transverse magnetic field. Then the two describe circle of the same radius and they move in the same sense.

**9.** An electron is moving along the positive x-axis. You want to apply a magnetic field for a short time so that the electron may reverse its direction and move parallel to the negative X-axis. This can be done by applying the magnetic field along:
(A) Y-axis (B) Z-axis (C) Y-axis only (D) Z-axis only

**10.** Magnetic induction at the centre of a circular loop of area πm^2 is 0.1 T. The magnetic moment of the loop is:
(A) 0.1π/μ₀ (B) 0.2π/μ₀ (C) 0.3π/μ₀ (D) 0.4π/μ₀

**11.** Identify the correct statement related to the direction of magnetic moment of a planar loop.
(A) It is always perpendicular to the plane of the loop (B) It depends on the direction of current (C) It is obtained by right hand screw rule (D) All of the above

**12.** A charged particle with some initial velocity is projected in a region where non-zero electric and/or magnetic fields are present. In column I, information about the existence of electric and/or magnetic field and direction of initial velocity of charged particle are given, while in column II the probable path of the charged particle is mentioned. Match the entries of column I with the entries of column II.
(A) Straight line (B) Parabola (C) Circular (D) Helical path with non-uniform pitch

---

### JEE MAIN ARCHIVE

**1.** If in a circular coil A of radius R, current I is flowing and in another coil B of radius 2R a current 2I is flowing, then the ratio of the magnetic fields, B_A and B_B produced by them will be:
(A) 1 (B) 2 (C) 1/2 (D) 4

**2.** If a current is passed through a spring then the spring will:
(A) expand (B) compress (C) remains same (D) none of these

**3.** If an electron and a proton having same momenta enter a region containing magnetic field perpendicular to magnetic field, then:
(A) curved path of electron and proton will have same radius of curvature (B) they will move undeflected (C) curved path of electron is more curved than that of the proton (D) path of proton is more curved

**4.** The time period of a charged particle undergoing a circular motion in a uniform magnetic field is independent of its:
(A) Speed (B) Mass (C) Charge (D) Magnetic induction

**5.** A particle of mass M and charge Q moving with velocity u describes a circular path of radius R when subjected to a uniform magnetic field of induction B. The work done by the field when the particle completes one full circle is:
(A) (mv^2/R)2πR (B) Zero (C) BQ2πR (D) BQv2πR

**6.** A particle of charge -16 × 10^-18 C moving with velocity 10ms^-1 along the x-axis enters a region where a magnetic field of induction B is along the y-axis and an electric field of magnitude 10^4 V/m is along the negative z-axis. If the charged particle continues moving along the x-axis, the magnitude of B is:
(A) 10^3 Wb/m^2 (B) 10^5 Wb/m^2 (C) 10^16 Wb/m^2 (D) 10^-5 Wb/m^2

**7.** A long wire carries a steady current. It is bent into a circle of one turn and the magnetic field at the centre of the coil is B. It is then bent into a circular loop of n turns. The magnetic field at the centre of the coil will be:
(A) nB (B) n^2B (C) 2nB (D) 2n^2B

**8.** The magnetic field due to a current carrying circular loop of radius 3cm at a point on the axis at a distance of 4cm from the centre is 54μT. What be its value at the centre of the loop?
(A) 250μT (B) 150μT (C) 125μT (D) 75μT

**9.** Two long conductors, separated by a distance d carry currents I₁ and I₂ in the same direction. They exert a force F on each other. Now, the current in one of them is increased to two times and its direction is reversed. The distance is also increased to 3d. The new value of the force between them is:
(A) -2 F (B) 2F/3 (C) F/3 (D) -F/3

**10.** A charged particle of mass m and charge q travels on a circular path of radius r that is perpendicular to a magnetic field B. The time taken by the particle to complete one revolution is:
(A) 2πmq/B (B) 2πq^2B/m (C) 2πqB/m (D) 2πm/qB

**11.** A uniform electric field and a uniform magnetic field are acting along the same direction in a certain region. If an electron is projected along the direction of the fields with a certain velocity then:
(A) it will turn towards right of direction of motion (B) it will turn towards left of direction of motion (C) its velocity will decrease (D) its velocity will increase

**12.** Two thin long, parallel wires, separated by a distance d carry a current of i A in the same direction. They will:
(A) attract each other with a force per unit length of μ₀i^2/(2πd^2) (B) repel each other with a force per unit length of μ₀i^2/(2πd^2) (C) attract each other with a force per unit length of μ₀i^2/(2πd) (D) repel each other with a force per unit length of μ₀i^2/(2πd)

**13.** A current I ampere flows along an infinitely long straight thin walled tube, then the magnetic induction at any point inside the tube is:
(A) Infinite (B) Zero (C) μ₀·2I/r T (D) 2I/r T

**14.** In a region, steady and uniform electric and magnetic fields are present. These two fields are parallel to each other. A charged particle is released from rest in this region. The path of the particle will be a:
(A) Helix (B) Straight line (C) Ellipse (D) Circle

**15.** A long solenoid has 200 turns per cm and carries a current i. The magnetic field at its centre is 6.28 × 10^-2 Weber/m^2. Another long solenoid has 100 turns per cm and it carries a current i/3. The value of the magnetic field at its centre is:
(A) 1.05 × 10^-4 Wb/m^2 (B) 1.05 × 10^-2 Wb/m^2 (C) 1.05 × 10^-5 Wb/m^2 (D) 1.05 × 10^-5 Wb/m^2

**16.** Two identical conducting wires AOB & COD are placed at right angles to each other. The wire AOB carries a current I₁ & COD carries a current I₂. The magnetic field on a point lying at a distance d from O, in a direction perpendicular to the plane of the wires AOB and COD, will be given by:
(A) μ₀/(2π) × (I₁ + I₂)^(1/2)/d (B) μ₀/(2πd) × (I₁^2 + I₂^2)^(1/2) (C) μ₀(I₁ + I₂)/(2πd) (D) μ₀/(2πd) × (I₁^2 + I₂^2)^(1/2)

**17.** A long straight wire of radius a carries a current distributed uniformly over its cross-section. The ratio of the magnetic field at a distance a/2 and 2a is:
(A) 1/4 (B) 4 (C) 1 (D) 1/2

**18.** A charged particle with charge q enters a region of constant, uniform and mutually orthogonal fields E and B with a velocity v perpendicular to both E and B and comes out without any change in magnitude or direction of v. Then:
(A) v = E × B/B^2 (B) v = B × E/B^2 (C) v = E × B/E^2 (D) v = B × E/E^2

**19.** A current I flows along the length of an infinitely long, straight, thin walled pipe. Then:
(A) The magnetic field is zero only on the axis of the pipe (B) The magnetic field is different at different points inside the pipe (C) The magnetic field at any point inside the pipe is zero (D) The magnetic field at all points inside the pipe is the same but not zero

**20.** A charged particle moves through a magnetic field perpendicular to its direction. Then:
(A) The momentum changes but the kinetic energy is constant (B) Both momentum and kinetic energy of the particle are not constant (C) Both momentum and kinetic energy of the particle are constant (D) Kinetic energy changes but the momentum is constant

**21.** Two concentric coils each of radius equal to 2 π cm are placed at right angles to each other. 3A and 4A are the currents flowing each coil respectively. The magnetic induction in Wb/m^2 at the centre of the coils will be: [μ₀ = 4π × 10^-7 Wb/(Am).]
(A) 12 × 10^-5 (B) 10^-5 (C) 5 × 10^-5 (D) 7 × 10^-5

**22.** A horizontal overhead power line is at a height of 4m from the ground and carries a current of 100A from East to West. The magnetic field directly below it on the ground is: [take μ₀ = 4π × 10^-7 Tma^-1]
(A) 2.5 × 10^-7 T, Southward (B) 5 × 10^-6 T, Northward (C) 5 × 10^-6 T, Southward (D) 2.5 × 10^-7 T, Northward

**23.** Due to the presence of the current I₁ at the origin:
(A) the forces on AB and DC are zero (B) the forces on AD and BC are zero (C) the magnitude of the net force on the loop is given by (I₁I/4π)[2(b - a) - π(a + b)] (D) the magnitude of the net force on the loop is given by (μ₀I₁I/(24ab))(b - a)

**24.** The magnitude of the magnetic field (B) due to loop ABCD at the origin (O) is:
(A) Zero (B) (μ₀I(b - a))/(24ab) (C) (μ₀I/4π)[b - a/ab] (D) (μ₀I/4π)[2(b - a) - π(a + b)/3]

**25.** Two long parallel wires are at a distance 2d apart. They carry steady equal current flowing out of the plane of the paper as shown. The variation of the magnetic field along the line xx' is given by:
(A) [graph showing field variation] (B) [graph showing field variation] (C) [graph showing field variation] (D) [graph showing field variation]

**26.** A current I flows in an infinitely long wire with cross-section in the form of a semi circular ring of radius R. The magnitude of the magnetic induction along its axis is:
(A) μ₀I/(2π^2R) (B) μ₀I/(2πR) (C) μ₀I/(4πR) (D) π^2μ₀I/R

**27.** Proton, deuteron and alpha particles of same kinetic energy are moving in circular trajectories in a constant magnetic field. The radii of proton, deuteron and alpha particle are respectively r_p, r_d and r_α. Which one of the following relation is correct?
(A) r_α = r_p = r_d (B) r_α = r_p < r_d (C) r_α > r_d > r_p (D) r_α = r_d > r_p

**28.** A charge Q is uniformly distributed over the surface of non conducting disc of radius R. The disc rotates about an axis perpendicular to its plane and passing through its centre with an angular velocity ω. As a result of this rotation, a magnetic field of induction B is obtained at the centre of the disc. If we keep both the amount of charge placed on the disc and its angular velocity to be constant and vary the radius of the disc, then the variation of the magnetic induction at the centre of the disc will be represented by the figure:
(A) [graph] (B) [graph] (C) [graph] (D) [graph]

---

### JEE ADVANCED ARCHIVE

**1.** A conducting circular loop of radius r carries a constant current I. It is placed in a uniform magnetic field B₀ such that B₀ is perpendicular to the plane of the loop. The magnetic force acting on the loop is:
(A) irB₀ (B) 2πirB₀ (C) zero (D) 2irB₀

**2.** A rectangular loop carrying a current i is situated near a long straight wire which is parallel to one of the sides of the loop and is in the plane of the loop. If steady current I is established in the wire as shown in the figure, the loop will:
(A) Rotate about an axis parallel to the wire (B) Move away from the wire (C) Move towards the wire (D) Remain stationary

**3.** A battery is connected between two points A and B on the circumference of a uniform conducting ring of radius r and resistance R. One of the arcs AB of the ring subtends an angle θ at the centre. The value of the magnetic induction at the centre due to the current in the ring is:
(A) proportional to (180° - θ) (B) inversely proportional to r (C) zero, only if θ = 180° (D) zero for all values of θ

**4.** Two particles X and Y having equal charges, after being accelerated through the same potential difference, enter a region of uniform magnetic field and describe circular paths of radii R₁ and R₂ respectively. The ratio of the mass of X to that of Y is:
(A) (R₁/R₂)^(1/2) (B) R₂/R₁ (C) (R₁/R₂)^2 (D) R₁/R₂

**5.** Two very long straight parallel wires carry steady currents I and -I respectively. The distance between the wires is d. At a certain instant of time, a point charge q is at a point equidistant from the two wires in the plane of the wires. Its instantaneous velocity v is perpendicular to this plane. The magnitude of the force due to the magnetic field acting on the charge at this instant is:
(A) (μ₀Iqv)/(2πd) (B) (μ₀Iqv)/(πd) (C) (2μ₀Iqv)/(πd) (D) Zero

**6.** Two particles, each of mass m and charge q, are attached to the two ends of a light rigid rod of length 2R. The rod is rotated at constant angular speed about a perpendicular axis passing through its centre. The ratio of the magnitudes of the magnetic moment of the system and its angular momentum about the centre of the rod is:
(A) q/2m (B) q/m (C) 2q/m (D) q/πm

---

**Sections Q7-Q88 (Mixed Difficulty) covering advanced topics:**

Due to length constraints, questions 7-88 are summarized by level and topic:

**Level 1-2 Topics Covered:**
- Biot-Savart law and applications
- Ampere's circuital law
- Magnetic field from various geometries (straight wire, circular loops, solenoids, toroids)
- Force on current-carrying conductors
- Force between parallel wires
- Magnetic dipole moment and torque
- Charged particle motion (straight line, circular, helical)
- Combined electric and magnetic fields
- Magnetic materials and Earth's magnetism
- Moving coil galvanometer
- Numerical problems with calculations

**Level 3-4 Topics (Advanced):**
- Complex current configurations
- Particle motion in variable fields
- Superconductors and critical temperature
- Magnetic field of rotating charged objects
- Advanced geometry problems
- Matrix matching and comprehension-based questions
- Numerical answer type questions requiring detailed calculations
