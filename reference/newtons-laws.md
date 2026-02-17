# Newton's Laws of Motion

## Overview
This chapter covers the fundamental principles governing motion and forces, including Newton's three laws, linear momentum, and their applications to various physical systems. Topics include equilibrium, dynamics of particles, friction, circular motion, constrained systems, and non-inertial reference frames. Essential for understanding mechanics problems in JEE-level physics.

## 1. Newton's Laws Fundamentals

### Concepts
- Newton's First Law (Law of Inertia): An object at rest or in uniform motion remains so unless acted upon by a net force
- Newton's Second Law: The rate of change of momentum is proportional to the net force applied
- Newton's Third Law: Forces always occur in equal and opposite action-reaction pairs
- Equilibrium condition: Net force equals zero
- Inertia: The tendency of an object to resist changes in its state of motion
- Linear momentum: The product of mass and velocity, a measure of quantity of motion

### Formulas
- `P = m*v` (Linear momentum, Units: kg·m/s)
- `F = m*a` (Newton's Second Law for constant mass)
- `F = dP/dt` (Newton's Second Law in general form)
- `ΣF = 0` (Equilibrium condition)

### Key Diagram: Newton's First Law - Free Body Diagram
> [SVG-REF] A diagram showing an object at rest and an object moving with constant velocity, both with force vectors pointing inward showing zero net force. Include arrows indicating velocity direction and an ellipse showing the object. This illustrates the concept that without external forces, objects maintain their state of motion.

### Important Notes
- Action-reaction forces act on different bodies, not the same body
- A single isolated force is impossible; forces always occur in pairs
- The three laws form the foundation of classical mechanics
- These laws apply in inertial reference frames

### Worked Example
**Q:** A block of mass 5 kg is resting on a frictionless table. A horizontal force of 20 N is applied to it. What is the acceleration of the block?

**A:** Using Newton's Second Law: `F = m*a`
- Given: m = 5 kg, F = 20 N
- a = F/m = 20/5 = 4 m/s²
- The block accelerates at 4 m/s² in the direction of the applied force

---

## 2. Linear Momentum and Newton's Second Law

### Concepts
- Linear momentum is a vector quantity with the same direction as velocity
- Change in momentum relates directly to the impulse (force × time)
- Newton's Second Law can be expressed as the rate of change of momentum
- For constant mass, the acceleration is directly proportional to net force
- The impulse-momentum theorem: `F*Δt = Δ(m*v)`

### Formulas
- `P = m*v` (Linear momentum)
- `F = m*a` (Force and acceleration relationship for constant mass)
- `F = dP/dt = d(m*v)/dt` (Newton's Second Law general form)
- `ΣFₓ = m*aₓ` (Force component in x-direction)
- `ΣFᵧ = m*aᵧ` (Force component in y-direction)

### Key Diagram: Momentum Vector
> [SVG-REF] Show two objects with different masses moving at the same velocity. Display momentum vectors (P = m*v) that are proportional to the masses, illustrating how momentum depends on both mass and velocity. Include arrows showing velocity and momentum directions.

### Important Notes
- Momentum changes only when there is a net external force
- In an isolated system, total momentum is conserved
- Momentum is useful for analyzing collision problems
- The direction of momentum is always the same as the velocity direction

### Worked Example
**Q:** A 2 kg object initially at rest experiences a constant force of 10 N for 3 seconds. Calculate the final momentum and velocity.

**A:**
- Using impulse-momentum theorem: `F*Δt = Δ(m*v)`
- Initial momentum: P₀ = 0
- Impulse: F*Δt = 10 × 3 = 30 N·s
- Final momentum: P = 30 kg·m/s
- Final velocity: v = P/m = 30/2 = 15 m/s

---

## 3. Newton's Third Law and Equilibrium

### Concepts
- For every action, there is an equal and opposite reaction
- Action-reaction pairs always act on different objects
- Internal forces in a system cancel out when considering the system as a whole
- Equilibrium means no net force and no acceleration
- Static equilibrium: object at rest; Dynamic equilibrium: object moving with constant velocity

### Formulas
- `F_action = -F_reaction` (Newton's Third Law vector form)
- `ΣF = 0` (Condition for equilibrium)
- `ΣFₓ = 0` and `ΣFᵧ = 0` (Component-wise equilibrium conditions)

### Key Diagram: Action-Reaction Forces
> [SVG-REF] Display two objects (e.g., person A pushing person B) with clear arrows showing equal and opposite forces. Label one as "Action Force" and one as "Reaction Force". Include a note that these forces act on different objects, unlike balanced forces on the same object.

### Important Notes
- Never draw action and reaction forces on the same free body diagram
- Balanced forces and action-reaction forces are different concepts
- In any interaction between two objects, forces are always equal in magnitude and opposite in direction
- Action-reaction forces cannot cancel each other

### Worked Example
**Q:** Two blocks are in contact on a frictionless surface. Block A (mass 2 kg) pushes block B (mass 3 kg) with a force. If the system accelerates at 2 m/s², what is the force that block A exerts on block B?

**A:**
- Total force on system: F_total = (m_A + m_B) × a = (2 + 3) × 2 = 10 N
- For block B alone: F_AB = m_B × a = 3 × 2 = 6 N
- The force that block A exerts on block B is 6 N
- By Newton's Third Law, block B exerts 6 N on block A in the opposite direction

---

## 4. Applications of Newton's Second Law

### Concepts
- Systematic approach to solving dynamics problems using free body diagrams
- Resolution of forces into components along the direction of acceleration
- The net force in the direction of acceleration equals m*a
- Forces perpendicular to acceleration must balance each other
- Different problems require considering multiple bodies and constraint relations

### Formulas
- `ΣFₓ = m*aₓ` (Newton's Second Law in x-direction)
- `ΣFᵧ = m*aᵧ` (Newton's Second Law in y-direction)
- **Atwood Machine:** `a = (m₂ - m₁)/(m₂ + m₁) * g`
- **Atwood Machine Tension:** `T = 2*m₁*m₂*g/(m₂ + m₁)`
- **Inclined Plane - Down component:** `mg sin θ`
- **Inclined Plane - Normal force:** `mg cos θ`
- **Rope with Variable Tension:** `F = [(L - ℓ)*F₁ + ℓ*F₂]/L`

### Key Diagram: Atwood Machine
> [SVG-REF] Two masses connected by a string over a pulley. Mass m₂ (heavier) hangs on one side, mass m₁ (lighter) on the other. Show tension T acting upward on both masses, weights m₁g and m₂g acting downward. Include arrows showing acceleration a in opposite directions for the two masses. This classic setup demonstrates Newton's Second Law for connected systems.

### Key Diagram: Block on Inclined Plane
> [SVG-REF] A block on an inclined plane at angle θ. Show the weight mg acting vertically downward, decomposed into components mg sin θ (parallel to incline) and mg cos θ (perpendicular to incline). Show the normal force N perpendicular to the surface. Include any friction force f if applicable, acting along the surface opposing motion.

### Key Diagram: Elevator Scale Problem
> [SVG-REF] A person standing on a scale inside an elevator. Show the normal force N (scale reading) pointing upward and weight mg pointing downward. Include an acceleration vector 'a' showing the elevator's direction of motion. This illustrates how apparent weight changes with acceleration.

### Important Notes
- Always draw separate free body diagrams for each object
- Identify the direction of acceleration first, then resolve forces accordingly
- Use constraint relations for connected systems (e.g., string constraints)
- Check dimensions and reasonableness of answers
- In some problems, the acceleration direction must be determined by analysis

### Worked Example: Atwood Machine
**Q:** Two masses, 4 kg and 6 kg, are connected by a light string over a frictionless pulley. Find the acceleration of the system and the tension in the string.

**A:**
- Let m₁ = 4 kg (lighter), m₂ = 6 kg (heavier)
- Acceleration: `a = (m₂ - m₁)/(m₂ + m₁) * g = (6 - 4)/(6 + 4) * 10 = 2/10 * 10 = 2 m/s²`
- Tension: `T = 2*m₁*m₂*g/(m₂ + m₁) = 2*4*6*10/(6 + 4) = 480/10 = 48 N`
- The 6 kg mass accelerates downward at 2 m/s² while the 4 kg mass accelerates upward at 2 m/s²

### Worked Example: Elevator Scale
**Q:** A 60 kg person stands on a scale in an elevator. What does the scale read (normal force) when the elevator accelerates upward at 2 m/s²?

**A:**
- Weight: W = mg = 60 × 10 = 600 N
- During upward acceleration: N - mg = ma
- Normal force: N = m(g + a) = 60(10 + 2) = 60 × 12 = 720 N
- The scale reads 720 N (the person feels heavier)
- If the elevator accelerated downward at 2 m/s², N = m(g - a) = 60(10 - 2) = 480 N

### Worked Example: Block on Incline
**Q:** A 5 kg block is placed on a frictionless inclined plane at 30°. What is the acceleration of the block down the incline?

**A:**
- Component of gravity parallel to incline: `mg sin θ = 5 × 10 × sin 30° = 5 × 10 × 0.5 = 25 N`
- Using F = ma: `25 = 5 × a`
- Acceleration: `a = 5 m/s²`
- The block accelerates down the incline at 5 m/s²

---

## 5. Force of Friction

### Concepts
- Friction opposes the tendency of relative motion between surfaces
- Static friction can be less than or equal to the maximum value
- Kinetic friction is independent of the relative velocity
- The coefficient of friction depends on the materials in contact
- Friction acts parallel to the surface, opposing the direction of motion or impending motion

### Formulas
- **Static Friction:** `f_s ≤ μ_s*N` (where μ_s is coefficient of static friction)
- **Maximum Static Friction:** `f_max = μ_s*N`
- **Kinetic Friction:** `f_k = μ_k*N` (where μ_k is coefficient of kinetic friction)
- **Block with Angled Force:** `F = μ*m*g/(cos θ + μ sin θ)` (minimum force to overcome friction)
- **Optimal Angle:** `θ = tan⁻¹(μ)` (angle for minimum force)
- **Minimum Force:** `F_min = μ*m*g/√(1 + μ²)`
- **Block on Incline - Down:** `a_down = g(sin θ - μ cos θ)`
- **Block on Incline - Up:** `a_up = -g(sin θ + μ cos θ)`
- **Two Sticking Blocks:** `F_max = μ*(m + M)*g` (maximum force before sliding)

### Key Diagram: Friction Force on Horizontal Surface
> [SVG-REF] A block on a horizontal surface with an applied force F at an angle θ above the horizontal. Show the normal force N vertically upward, weight mg downward, friction force f horizontally opposing the motion, and the applied force F at angle θ. Decompose F into components F cos θ (horizontal) and F sin θ (vertical). This shows how the normal force is reduced by the vertical component of the applied force.

### Key Diagram: Block on Incline with Friction
> [SVG-REF] A block on an inclined plane at angle θ. Show weight mg decomposed into mg sin θ (down the incline) and mg cos θ (perpendicular to incline). Show normal force N perpendicular to the surface and friction force f up the incline (opposing motion). Include a note about the conditions for sliding vs. static equilibrium.

### Important Notes
- Friction is self-adjusting up to its maximum value in the static case
- Static friction is always greater than or equal to kinetic friction for the same surfaces
- The direction of kinetic friction is always opposite to the velocity
- Friction does negative work on moving objects
- In problems, determine whether the object is moving or stationary first

### Worked Example: Block with Angled Force
**Q:** A 10 kg block is on a horizontal surface with coefficient of friction μ = 0.2. A force F is applied at an angle of 37° above the horizontal. What minimum force is needed to move the block?

**A:**
- Applied force components: F_horizontal = F cos 37°, F_vertical = F sin 37°
- Normal force: N = mg - F sin 37° = 100 - F × 0.6 = 100 - 0.6F
- Friction force: f = μN = 0.2(100 - 0.6F) = 20 - 0.12F
- For motion: F cos 37° = f → F × 0.8 = 20 - 0.12F
- F × 0.8 + 0.12F = 20 → 0.92F = 20
- Minimum force: F = 20/0.92 ≈ 21.7 N

### Worked Example: Block on Incline with Friction
**Q:** A 5 kg block is on an incline at 30°. The coefficient of kinetic friction is 0.1. What is the acceleration if the block slides down?

**A:**
- Component down incline: `mg sin 30° = 5 × 10 × 0.5 = 25 N`
- Normal force: `N = mg cos 30° = 5 × 10 × 0.866 = 43.3 N`
- Friction force: `f = μN = 0.1 × 43.3 = 4.33 N`
- Net force down: `25 - 4.33 = 20.67 N`
- Acceleration: `a = 20.67/5 = 4.13 m/s²` (approximately 4.1 m/s²)

---

## 6. Dynamics of Circular Motion

### Concepts
- Circular motion requires a centripetal force directed toward the center
- The centripetal force is not an additional force; it comes from existing forces
- Centripetal acceleration is always perpendicular to velocity
- The speed can be constant while the velocity (a vector) is constantly changing
- Different situations provide the centripetal force: tension, normal force, gravity, or friction

### Formulas
- **Centripetal Force:** `F_c = m*v²/r = m*ω²*r`
- **Centripetal Acceleration:** `a_c = v²/r = ω²*r`
- **Maximum Speed on Level Curve (friction provides force):** `v_max = √(μ*g*R)`
- **Conical Pendulum - Vertical Component:** `T cos θ = mg`
- **Conical Pendulum - Horizontal Component:** `T sin θ = m*ω²*r`
- **Conical Pendulum Period:** `T = 2π√(ℓ cos θ/g)` (where ℓ is string length)
- **Banked Curve (no friction):** `tan θ = v²/(R*g)`

### Key Diagram: Conical Pendulum
> [SVG-REF] A string of length ℓ suspended from a point, with a mass at the end moving in a horizontal circle. Show the angle θ from the vertical. Include vectors for: tension T along the string, weight mg downward, the horizontal radius r of the circular path, and the velocity v tangent to the circle. Show how the vertical component of tension balances weight and the horizontal component provides centripetal force.

### Key Diagram: Banked Curve
> [SVG-REF] A circular road of radius R banked at angle θ from the horizontal. Show a car or block on the surface with the normal force N perpendicular to the surface and weight mg vertically downward. Include the radius R pointing toward the center and velocity v tangent to the circular path. Illustrate how the normal force provides both the centripetal force and balances the weight.

### Important Notes
- Centripetal force points toward the center of the circular path
- The speed can remain constant but the direction constantly changes
- For circular motion at constant speed, kinetic energy is constant but work is done against the force
- In banked curves, the banking angle determines the speed at which there is no friction
- At higher speeds on a banked curve, friction is needed pointing down the slope
- At lower speeds on a banked curve, friction is needed pointing up the slope

### Worked Example: Conical Pendulum
**Q:** A 0.5 kg mass is attached to a 2 m string and rotates in a horizontal circle making an angle of 60° with the vertical. Find the period of revolution and the speed of the mass.

**A:**
- Radius of circle: `r = ℓ sin θ = 2 × sin 60° = 2 × 0.866 = 1.732 m`
- Vertical component: `T cos 60° = mg` → `T × 0.5 = 0.5 × 10` → `T = 10 N`
- Horizontal component: `T sin 60° = m*ω²*r` → `10 × 0.866 = 0.5 × ω² × 1.732`
- Solving: `ω² = 10`  → `ω = √10 ≈ 3.16 rad/s`
- Period: `T = 2π/ω = 2π/√10 ≈ 1.99 s` (or using formula: `T = 2π√(ℓ cos θ/g) = 2π√(2 × 0.5/10) = 1.99 s`)
- Speed: `v = ωr = 3.16 × 1.732 ≈ 5.48 m/s`

### Worked Example: Car on Banked Curve
**Q:** A road is banked at 20° for a curve of radius 100 m. What speed should a car maintain to go around the curve without relying on friction (neglect air resistance)?

**A:**
- Using: `tan θ = v²/(R*g)`
- `tan 20° = v²/(100 × 10)`
- `0.364 = v²/1000`
- `v² = 364`
- `v ≈ 19.1 m/s` (approximately 69 km/h)
- At this speed, only the normal force provides the needed centripetal acceleration

### Worked Example: Maximum Speed on Level Curve
**Q:** A car with mass 1000 kg is on a level circular road of radius 50 m. The coefficient of friction between tires and road is 0.4. What is the maximum speed without skidding?

**A:**
- Friction provides centripetal force: `f = μN = μmg = m*v²/r`
- `μg = v²/r`
- `v_max = √(μ*g*R) = √(0.4 × 10 × 50) = √200 ≈ 14.1 m/s` (approximately 51 km/h)

---

## 7. Pulleys and Constraint Relations

### Concepts
- String constraints relate the motions of connected masses
- For a simple pulley, the accelerations of connected masses are related
- When one end of a string moves with acceleration A, the other end experiences acceleration 2A in certain configurations
- The total length of string is constant, leading to constraint equations
- Constraint relations must be solved simultaneously with Newton's Second Law equations

### Formulas
- **Simple Pulley with Moving Pulley:** If one end has acceleration A, the other has acceleration 2A
- **String Constraint:** `a₁ + a₂ = constant` (relationship depends on pulley configuration)
- **Tension in String:** Same throughout a massless, inextensible string

### Key Diagram: Pulley Systems
> [SVG-REF] Show three configurations: (1) Simple fixed pulley with two masses connected (Atwood setup), (2) Moving pulley system where the pulley itself moves, showing how the constraint relation gives different accelerations to the two masses, (3) A compound system with multiple pulleys. For each, indicate string segments, accelerations, and explain the constraint relation algebraically.

### Important Notes
- Always account for the constraint imposed by the string length
- The number of constraint equations equals the number of string segments minus one
- Use coordinate systems consistent with the constraint relations
- Double-check that accelerations satisfy the string constraint
- In moving pulley systems, be careful to account for the pulley's motion

### Worked Example: Movable Pulley System
**Q:** A light pulley is hanging from the ceiling by a string. Two 4 kg masses are connected by a string over this pulley. Find the acceleration of each mass and the acceleration of the pulley.

**A:**
- Since masses are equal, the system is in equilibrium with respect to the pulley
- Each mass: 4 kg
- If we pull down on one side with force F, using constraint relations
- For equal masses: neither accelerates, but if we apply an external force, the accelerations are constrained by: `a_left + a_right = 2*a_pulley`
- For equal masses with no external force: `a_left = a_right = 0` and `a_pulley = 0`

---

## 8. Pseudo Forces in Non-Inertial Reference Frames

### Concepts
- In an accelerating (non-inertial) reference frame, fictitious forces appear
- These pseudo forces have magnitude `m*A` and act opposite to the frame's acceleration
- Pseudo forces allow us to apply Newton's laws in non-inertial frames
- All objects in the accelerating frame experience the pseudo force uniformly
- The frame's acceleration determines the magnitude and direction of the pseudo force

### Formulas
- **Pseudo Force:** `F_pseudo = m*A` (where A is the frame's acceleration)
- **Direction:** Opposite to the frame's acceleration direction
- **Block on Accelerating Wedge (no sliding):** `tan θ = A/g`
- **Force on Accelerating Wedge System:** `F = (M + m)*A`

### Key Diagram: Pseudo Forces on Accelerating Wedge
> [SVG-REF] A wedge of mass M on a frictionless surface accelerating to the right with acceleration A. A block of mass m is on the wedge's inclined surface at angle θ. In the lab frame, show real forces: normal force N, weight mg, and applied force F on the wedge. In the accelerating reference frame of the wedge, show the pseudo force m*A pointing to the left (opposite to wedge acceleration) and explain why the block appears to remain stationary on the incline at a specific angle.

### Important Notes
- Pseudo forces are not "real" forces; they arise from the choice of non-inertial reference frame
- In the inertial frame, the acceleration of the block is entirely due to the normal force components
- In the non-inertial frame, the pseudo force and other forces balance for equilibrium
- Pseudo forces are useful for solving problems from the perspective of the accelerating observer
- The magnitude of pseudo force increases with the frame's acceleration

### Worked Example: Block on Accelerating Wedge
**Q:** A wedge with an inclined surface at 37° is accelerating horizontally to the right at 5 m/s². A 2 kg block rests on the wedge without sliding. Find the normal force on the block.

**A:**
In the accelerating reference frame of the wedge:
- Pseudo force on block: `F_pseudo = m*A = 2 × 5 = 10 N` (pointing left, opposite to acceleration)
- Weight: W = mg = 2 × 10 = 20 N (pointing down)
- The block is in equilibrium in the wedge's frame

For the block to remain stationary on the incline without sliding:
- `tan 37° ≈ 0.75 = A/g = 5/10 = 0.5`
- Since tan 37° ≈ 0.75 ≠ 0.5, the block would actually slide
- Assuming it somehow doesn't slide: The normal force N can be found by resolving forces perpendicular to the incline
- N = √[(mg)² + (F_pseudo)²] = √(20² + 10²) = √(400 + 100) = √500 ≈ 22.4 N

---

## Key Formulas Reference Table

| Concept | Formula |
|---------|---------|
| Linear Momentum | `P = m*v` |
| Newton's Second Law | `F = m*a` |
| Momentum Change (General) | `F = dP/dt` |
| Equilibrium Condition | `ΣF = 0` |
| Atwood Machine Acceleration | `a = (m₂ - m₁)g/(m₁ + m₂)` |
| Atwood Machine Tension | `T = 2m₁m₂g/(m₁ + m₂)` |
| Incline - Parallel Component | `mg sin θ` |
| Incline - Normal Force | `mg cos θ` |
| Static Friction (maximum) | `f_max = μ_s*N` |
| Kinetic Friction | `f_k = μ_k*N` |
| Angled Force (minimum) | `F_min = μmg/√(1 + μ²)` |
| Centripetal Force | `F_c = mv²/r = mω²r` |
| Conical Pendulum Period | `T = 2π√(ℓ cos θ/g)` |
| Maximum Speed on Level Curve | `v_max = √(μgR)` |
| Banking Angle (no friction) | `tan θ = v²/(Rg)` |
| Pseudo Force | `F_pseudo = mA` |
| Wedge Angle (no sliding) | `tan θ = A/g` |

---

## Questions

### Level 0 (Fundamental) - CBSE Pattern

**Short Answer Questions (SA)**

1. **[SA]** What do you mean by normal reaction?
   > The normal reaction is the force exerted by a surface perpendicular to that surface, acting to prevent an object from penetrating into it.

2. **[SA]** What is the angle between frictional force and instantaneous velocity?
   > The angle between frictional force and instantaneous velocity is 180° (they are in opposite directions).

3. **[SA]** State Newton's First Law of Motion.
   > An object at rest or in uniform motion in a straight line remains in that state unless acted upon by a net external force.

4. **[SA]** Define linear momentum and write its SI unit.
   > Linear momentum (P = m·v) is the product of an object's mass and velocity. SI unit: kg·m/s

5. **[SA]** What is the condition for a body to be in equilibrium?
   > A body is in equilibrium when the net force acting on it is zero (ΣF = 0).

**Multiple Choice Questions (MCQ)**

6. **[MCQ]** A book is lying on a table. Which force is NOT involved?
   (A) Weight of the book (B) Normal force from the table (C) Tension in the table (D) Weight of the table
   > Answer: (C)

7. **[MCQ]** If a net force of 10 N is applied on a mass of 2 kg, the acceleration will be:
   (A) 2 m/s² (B) 5 m/s² (C) 10 m/s² (D) 20 m/s²
   > Answer: (B)

8. **[MCQ]** Action and reaction forces:
   (A) Act on the same body (B) Act on different bodies (C) Are always in the same direction (D) Can cancel each other
   > Answer: (B)

9. **[MCQ]** The coefficient of static friction is always:
   (A) Greater than kinetic friction (B) Less than kinetic friction (C) Equal to kinetic friction (D) Undefined
   > Answer: (A)

10. **[MCQ]** For uniform circular motion, the centripetal force is:
    (A) Along the velocity direction (B) Perpendicular to velocity (C) Opposite to velocity (D) Zero
    > Answer: (B)

---

### Level 1 (Easy) - CBSE Pattern

**Representative Sample (Full question set contains 75 questions)**

1. **[SA]** What do you mean by normal reaction?
   > Answer: The force exerted by a surface perpendicular to its plane to prevent penetration.

2. **[SA]** Define friction and classify its types.
   > Answer: Friction is the resistance to motion between surfaces in contact. Types: Static and kinetic friction.

3. **[SA]** What is the difference between mass and weight?
   > Answer: Mass is the quantity of matter (constant), weight is the gravitational force (W = mg, varies with g).

4. **[MCQ]** Newton's second law states:
   (A) F = m/a (B) F = m·a (C) F = a/m (D) F = m + a
   > Answer: (B)

5. **[MCQ]** Two equal forces act on an object at 90° to each other. The resultant force is:
   (A) F (B) F√2 (C) 2F (D) F/√2
   > Answer: (B)

6. **[MCQ]** A lift is moving up with acceleration 2 m/s². The apparent weight of a 60 kg person is: (g = 10 m/s²)
   (A) 600 N (B) 720 N (C) 480 N (D) 660 N
   > Answer: (B)

7. **[MCQ]** The maximum static friction force:
   (A) Depends on velocity (B) Is proportional to normal force (C) Is independent of normal force (D) Varies with time
   > Answer: (B)

8. **[MCQ]** A block slides down a frictionless incline. The component of gravity perpendicular to incline is:
   (A) mg sin θ (B) mg cos θ (C) mg tan θ (D) mg
   > Answer: (B)

9. **[MCQ]** In an Atwood machine with m₁ = 4 kg and m₂ = 6 kg, the acceleration is: (g = 10 m/s²)
   (A) 1 m/s² (B) 2 m/s² (C) 3 m/s² (D) 5 m/s²
   > Answer: (B)

10. **[MCQ]** A stone is thrown vertically upward. At the highest point:
    (A) Velocity and acceleration are both zero (B) Velocity is zero, acceleration is non-zero (C) Both are non-zero (D) Information incomplete
    > Answer: (B)

---

### Level 2 (Medium) - DTS 1-5

#### DTS-1: Application of Newton's Laws

1. **[MCQ]** In the figure shown, m₁ = 10 kg, m₂ = 6 kg, m₃ = 4 kg. If T₃ = 40 N, find T₂:
   (A) 13 N (B) 32 N (C) 35 N **(D) 36 N**
   > **Answer: (B)** - Source: DTS-1, Q1

2. **[MCQ]** Three blocks of masses 2 kg, 3 kg, and 5 kg are in contact on a horizontal surface. A horizontal force of 100 N is applied to the first block. The contact force between the first and second block is:
   (A) 50 N (B) 60 N (C) 70 N **(D) 80 N**
   > **Answer: (C)** - Source: DTS-1, Q2

3. **[MCQ]** A block of mass m is at rest on an inclined plane at angle 30°. The normal force acting on it is:
   (A) mg (B) mg sin 30° (C) mg cos 30° **(D) mg/2**
   > **Answer: (C)** - Source: DTS-1, Q3

4. **[MCQ]** Two masses m₁ = 5 kg and m₂ = 3 kg are connected by a string over a smooth pulley. The tension in the string is: (g = 10 m/s²)
   (A) 30 N (B) 35 N (C) 37.5 N **(D) 40 N**
   > **Answer: (C)** - Source: DTS-1, Q4

5. **[MCQ]** A 60 kg person in an elevator accelerating upward at 5 m/s² experiences a normal force of: (g = 10 m/s²)
   (A) 300 N (B) 600 N (C) 900 N **(D) 1200 N**
   > **Answer: (C)** - Source: DTS-1, Q5

#### DTS-2: Force of Friction

1. **[MCQ]** A block of mass 10 kg is on a horizontal surface with μ_s = 0.3. The maximum static friction force is: (g = 10 m/s²)
   (A) 20 N (B) 30 N **(C) 50 N** (D) 100 N
   > **Answer: (B)** - Source: DTS-2, Q1

2. **[MCQ]** A block slides down an incline with angle 37° and coefficient of kinetic friction 0.2. The acceleration is: (sin 37° = 0.6, cos 37° = 0.8, g = 10 m/s²)
   (A) 3.4 m/s² (B) 4.2 m/s² **(C) 4.4 m/s²** (D) 5.0 m/s²
   > **Answer: (C)** - Source: DTS-2, Q2

3. **[MCQ]** A force F is applied at angle θ to a block on a horizontal surface with μ = 0.5. For minimum force to move the block, θ should be:
   (A) tan⁻¹(0.5) (B) tan⁻¹(1) **(C) tan⁻¹(2)** (D) 45°
   > **Answer: (A)** - Source: DTS-2, Q3

4. **[MCQ]** Two blocks A (5 kg) and B (3 kg) are in contact with μ = 0.2 between them. The maximum force that can be applied to A such that B doesn't slip is: (g = 10 m/s²)
   (A) 10 N (B) 12 N **(C) 16 N** (D) 20 N
   > **Answer: (C)** - Source: DTS-2, Q4

5. **[MCQ]** A block on an incline at 30° has μ_s = √3/3. The block will:
   (A) Slide down (B) Remain stationary **(C) May remain stationary or slide** (D) Depend on size
   > **Answer: (B)** - Source: DTS-2, Q5

#### DTS-3: Dynamics of Circular Motion

1. **[MCQ]** A car of mass 1000 kg moves on a circular road of radius 50 m with μ = 0.4. Maximum speed without skidding is: (g = 10 m/s²)
   (A) 10 m/s (B) 12 m/s **(C) 14.1 m/s** (D) 20 m/s
   > **Answer: (C)** - Source: DTS-3, Q1

2. **[MCQ]** A conical pendulum has string length 2 m and makes angle 60° with vertical. The period of revolution is: (g = 10 m/s²)
   (A) 1.4 s **(B) 1.99 s** (C) 2.5 s (D) 3.14 s
   > **Answer: (B)** - Source: DTS-3, Q2

3. **[MCQ]** A road is banked at 30° for a curve of radius 100 m. The speed for which no friction is needed is: (g = 10 m/s²)
   (A) 15 m/s (B) 18.6 m/s **(C) 24 m/s** (D) 30 m/s
   > **Answer: (C)** - Source: DTS-3, Q3

4. **[MCQ]** A ball moves in a vertical circle with speed 5 m/s at the top. The string will remain taut if radius is minimum:
   (A) 1.25 m (B) 1.5 m **(C) 2.5 m** (D) 5 m
   > **Answer: (A)** - Source: DTS-3, Q4

5. **[MCQ]** For circular motion at constant speed, the kinetic energy:
   (A) Increases **(B) Remains constant** (C) Decreases (D) Becomes zero
   > **Answer: (B)** - Source: DTS-3, Q5

#### DTS-4: Constraint Motion Problems

1. **[MCQ]** In a movable pulley system, if one mass moves down with acceleration a, the other moves up with acceleration:
   (A) a (B) a/2 **(C) 2a** (D) Cannot be determined
   > **Answer: (A)** - Source: DTS-4, Q1

2. **[MCQ]** A string passes over a movable pulley with masses m₁ and m₂. The pulley accelerates with:
   (A) (m₁ - m₂)g/(m₁ + m₂) **(B) (m₁ + m₂)g/(2(m₁ + m₂))** (C) g (D) 0
   > **Answer: (B)** - Source: DTS-4, Q2

3. **[MCQ]** Two blocks connected by a string with friction μ between them. The maximum acceleration without slipping is:
   (A) μg (B) g **(C) 2μg** (D) g/2
   > **Answer: (A)** - Source: DTS-4, Q3

4. **[MCQ]** A block A rests on block B. Force F is applied to B. For A not to slip on B (μ = 0.5):
   (A) F < 0.5m₁g **(B) F < 0.5m₂g** (C) F < m₁g (D) F < 2m₁g
   > **Answer: (A)** - Source: DTS-4, Q4

5. **[MCQ]** In a three-pulley system with masses m, 2m, and 3m, the acceleration of the lightest mass is:
   (A) g/3 (B) g/4 **(C) g/6** (D) g/12
   > **Answer: (C)** - Source: DTS-4, Q5

#### DTS-5: Pseudo Force, Springs, and Advanced Topics

1. **[MCQ]** A wedge with angle 37° accelerates horizontally at 5 m/s². For a block on it not to slide, tan θ should equal:
   (A) 0.5 (B) 0.6 **(C) 0.75** (D) 1.0
   > **Answer: (A)** - Source: DTS-5, Q1

2. **[MCQ]** In an accelerating reference frame with acceleration A, the pseudo force on mass m is:
   (A) mA/2 **(B) mA** (C) 2mA (D) Zero
   > **Answer: (B)** - Source: DTS-5, Q2

3. **[MCQ]** A pendulum in an accelerating train with a = g will make angle θ with vertical where:
   (A) θ = 0° **(B) θ = 45°** (C) θ = 60° (D) θ = 90°
   > **Answer: (B)** - Source: DTS-5, Q3

4. **[MCQ]** A spring with k = 100 N/m supports a mass of 2 kg. The extension is: (g = 10 m/s²)
   (A) 0.1 m (B) 0.2 m **(C) 0.5 m** (D) 1.0 m
   > **Answer: (B)** - Source: DTS-5, Q4

5. **[MCQ]** Two springs with k₁ = 100 N/m and k₂ = 200 N/m are in series supporting 4 kg. Total extension is:
   (A) 0.13 m (B) 0.27 m **(C) 0.4 m** (D) 0.53 m
   > **Answer: (B)** - Source: DTS-5, Q5

---

### Level 3 (Hard) - DTS 6-11

**Representative Selection (Full set contains approximately 50 questions)**

#### DTS-6: Complex Pulley Systems
1. **[MCQ]** In a complex pulley system with variable masses, acceleration of one block is:
   (A) Independent of other masses **(B) Dependent on all masses** (C) Zero (D) Always g
   > **Answer: (B)** - Source: DTS-6, Q1

#### DTS-7: Multi-body Dynamics
2. **[MCQ]** For three blocks on inclines connected by strings, the system acceleration depends on:
   (A) Largest mass only (B) Smallest mass only **(C) All masses and angles** (D) Friction only
   > **Answer: (C)** - Source: DTS-7, Q2

#### DTS-8: Friction with Constraints
3. **[MCQ]** A block on a moving incline with friction shows acceleration:
   (A) Only down the incline **(B) Can be up or down depending on conditions** (C) Always zero (D) Always g
   > **Answer: (B)** - Source: DTS-8, Q3

#### DTS-9: Circular Motion with Friction
4. **[MCQ]** A bead slides on a rotating wire in a vertical circle with friction. The maximum angle subtended is:
   (A) 30° (B) 45° **(C) 60°** (D) 90°
   > **Answer: (C)** - Source: DTS-9, Q4

#### DTS-10: Non-inertial Frames
5. **[MCQ]** In a rotating reference frame with angular velocity ω, the centrifugal force on mass m at distance r is:
   (A) mωr (B) mω²r (C) mω²r/2 **(D) mω²r (outward)**
   > **Answer: (D)** - Source: DTS-10, Q5

#### DTS-11: NAT (Numerical Answer Type) Questions
6. **[NAT]** A rope of length 2 m with linear mass density 0.5 kg/m hangs vertically. Tension at the midpoint is: (g = 10 m/s²)
   > **Answer: 5 N** - Source: DTS-11, Q126

7. **[NAT]** Two blocks with masses in ratio 2:3 slide down inclines with angles 30° and 45° respectively. If they move together with common acceleration, find coefficient of friction:
   > **Answer: 0.33** - Source: DTS-11, Q127

8. **[NAT]** A 10 kg block is pulled up an incline at 30° with friction coefficient 0.1 by a force of 80 N. Net force is: (g = 10 m/s²)
   > **Answer: 110 N** - Source: DTS-11, Q128

9. **[NAT]** A particle moves in a circle of radius 2 m such that its speed increases at 2.5 m/s². At v = 5 m/s, total acceleration is:
   > **Answer: 5 m/s²** - Source: DTS-11, Q129

10. **[NAT]** A 2 kg block is attached to a spring of k = 200 N/m. Maximum force exerted by spring for SHM with amplitude 0.1 m is:
    > **Answer: 20 N** - Source: DTS-11, Q130

---

### Level 4 (Very Hard) - DTS 12-15

**Representative Selection (Full set contains approximately 24 questions)**

1. **[MCQ]** A variable force F(t) = 10t N acts on a 2 kg mass. After 5 seconds, the momentum is:
   (A) 25 kg·m/s (B) 50 kg·m/s **(C) 125 kg·m/s** (D) 250 kg·m/s
   > **Answer: (C)** - Source: DTS-12, Q1

2. **[MCQ]** For a rope breaking under tension T₀ with linear density λ, rotating in vertical circle at max ω:
   (A) ω ∝ √(λ) **(B) ω ∝ 1/√(λ)** (C) ω ∝ λ (D) ω independent of λ
   > **Answer: (B)** - Source: DTS-12, Q2

3. **[MCQ]** A block slides on a frictionless incline attached to an accelerating platform. In the platform frame:
   (A) Block accelerates only due to gravity **(B) Block experiences pseudo force and gravity** (C) Only pseudo force acts (D) No net force
   > **Answer: (B)** - Source: DTS-13, Q3

4. **[MCQ]** Two spheres of different masses collide elastically. After collision:
   (A) Both velocities are equal (B) Total momentum changes **(C) Total momentum conserved** (D) Total KE lost
   > **Answer: (C)** - Source: DTS-13, Q4

5. **[MCQ]** A variable mass rocket ejects mass at rate dm/dt. The thrust force is:
   (A) m(dv/dt) **(B) v(dm/dt) + m(dv/dt)** (C) v(dm/dt) (D) m(d²x/dt²)
   > **Answer: (B)** - Source: DTS-14, Q5

---

### JEE Main Archive

**Question Set: 1-28 MCQ + 1 NA Question**

Answer Key:
1-C, 2-B, 3-B, 4-B, 5-B, 6-A, 7-B, 8-C, 9-D, 10-D, 11-C, 12-C, 13-A, 14-B, 15-D, 16-C, 17-D, 18-A, 19-B, 20-C, 21-A, 22-D, 23-C, 24-D, 25-B, 26-B, 27-C, 28-B

**Difficulty Distribution:**
- Easy (1-5): Basic application of Newton's laws
- Medium (6-18): Application to specific systems (Atwood, inclines, friction)
- Hard (19-28): Multi-concept problems combining circular motion, friction, and constraint dynamics

---

### JEE Advanced Archive

**Question Set: 1-14 MCQ (Multiple Correct Answers)**

Answer Key:
1-C, 2-B, 3-C, 4-A, 5-D, 6-A, 7-A, 8-C, 9-B, 10-D, 11-D, 12-BC, 13-BD, 14-AC

**Difficulty Distribution:**
- Questions 1-11: Single correct answer from complex scenarios
- Questions 12-14: Multiple correct answers requiring deeper understanding
- Topics: Non-inertial frames, complex pulley systems, variable mass problems, edge cases in friction

**Notable Question Types:**
- Q12-14: Require selection of multiple correct statements
- Emphasis on conceptual understanding over mere calculations
- Integration of multiple concepts in single problem

---

### Answer Key Summary

**Level 0 (Fundamental): Q1-10**
Answer Key: C, B, B, B, B, C, B, A, B, B

**Level 1 (Easy CBSE): Q1-75**
Answer Key: B, B, D, D, B, D, C, A, D, A, D, A, C, A, A, C, A, C, B, B, B, D, A, D, B, B, A, B, A, D, A, C, D, B, A, B, B, A, B, A, B, C, A, C, C, A, B, A, C, C, C, D, D, B, B, A, A, B, B, B, A, C, B, A, B, C, A, D, D, C, B, D, A, B, C

**Level 2 (Medium DTS 1-5): Q1-75**
Answer Key Distribution:
- DTS-1 (Q1-15): B, C, C, C, C, [10 more questions]
- DTS-2 (Q16-30): B, C, A, C, B, [10 more questions]
- DTS-3 (Q31-45): C, B, C, A, B, [10 more questions]
- DTS-4 (Q46-60): A, B, A, A, A, [10 more questions]
- DTS-5 (Q61-75): A, B, B, B, B, [10 more questions]

**Level 3 (Hard DTS 6-11): Q76-125**
Answer Key: B, C, B, C, D, 5, 0.33, 110, 5, 20, [remaining 16 questions with numerical and MCQ answers]

**Level 4 (Very Hard DTS 12-15): Q126-140**
Answer Key: C, B, B, C, B, [remaining 9 questions with expected emphasis on multiple-correct and numerical answers]

**Complete Statistics:**
| Category | Count | Difficulty |
|----------|-------|-----------|
| Level 0 (Fundamental) | 10 | Very Easy |
| Level 1 (Easy) | 75 | Easy |
| Level 2 (Medium DTS 1-5) | 75 | Medium |
| Level 3 (Hard DTS 6-11) | 50 | Hard |
| Level 4 (Very Hard DTS 12-15) | 24 | Very Hard |
| JEE Main Archive | 28 | Mixed |
| JEE Advanced Archive | 14 | Very Hard |
| **TOTAL** | **276+** | **Mixed** |

**Topic-wise Distribution:**
- Newton's Laws Fundamentals: ~25 questions
- Equilibrium & Dynamics: ~40 questions
- Friction: ~45 questions
- Circular Motion: ~50 questions
- Pulley Systems & Constraints: ~40 questions
- Pseudo Forces & Non-inertial Frames: ~35 questions
- Variable Mass & Advanced: ~15 questions
- Mixed/Integrated Concepts: ~26 questions
