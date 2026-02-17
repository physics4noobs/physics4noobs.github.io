# Work, Power, Energy and Momentum - Comprehensive Reference

## 1. Work Done by Forces

### Work by Constant Force
When a constant force acts on an object over a displacement, the work done is:

`W = Fs cos θ = F⃗ · s⃗`

Where:
- F = magnitude of force (N)
- s = magnitude of displacement (m)
- θ = angle between force and displacement
- W = work done (J)

**Key Points:**
- Work is positive when force and displacement are in the same direction (θ < 90°)
- Work is negative when they are in opposite directions (θ > 90°)
- Work is zero when perpendicular (θ = 90°)
- Work is a scalar quantity

### Work by Variable Force
When force varies with position:

`W = ∫F(x)dx` (from x₁ to x₂)

Or in vector form: `W = ∫F⃗ · ds⃗`

### Graphical Interpretation
The area under an F-x (Force vs displacement) graph represents the work done by the force.

**[SVG-REF] F vs x Graph:**
- X-axis: Displacement (m)
- Y-axis: Force (N)
- The area enclosed under the curve = Work done
- For constant force, this is a rectangle
- For variable force, use integration to find area under the curve

---

## 2. Energy Types

### Kinetic Energy (KE)
The energy possessed by an object due to its motion:

`KE = (1/2)mv²`

Where:
- m = mass (kg)
- v = velocity (m/s)
- KE = kinetic energy (J)

**Properties:**
- Always positive (v² is always positive)
- Depends on reference frame
- Zero at rest

### Gravitational Potential Energy (PE)
Energy due to position in a gravitational field:

`PE = mgh`

Where:
- m = mass (kg)
- g = acceleration due to gravity (9.8 m/s²)
- h = height above reference level (m)
- PE = potential energy (J)

**Key Points:**
- Reference level (h = 0) is arbitrary
- Positive above reference, negative below
- Change in PE is independent of path (conservative force)

### Elastic Potential Energy
Energy stored in a spring or elastic material:

`PE_elastic = (1/2)kx²`

Where:
- k = spring constant (N/m)
- x = extension/compression from natural length (m)
- PE_elastic = elastic potential energy (J)

### Conservative vs Non-Conservative Forces

**Conservative Forces:**
- Work done is path-independent
- Work depends only on initial and final positions
- Examples: gravity, elastic force, electrostatic force
- Have associated potential energy
- Mechanical energy is conserved

**Non-Conservative Forces:**
- Work done depends on the path taken
- Examples: friction, air resistance, applied force
- No potential energy function exists
- Mechanical energy is not conserved
- Energy is converted to heat, sound, etc.

### Relationship Between Force and Potential Energy
For conservative forces:

`F(x) = -dU/dx`

In 3D: `F⃗ = -∇U = -(∂U/∂x î + ∂U/∂y ĵ + ∂U/∂z k̂)`

This relationship allows us to find force from potential energy and vice versa.

---

## 3. Work-Energy Theorem

### Statement
The net work done on an object equals the change in its kinetic energy:

`W_net = ΔKE = KE_final - KE_initial`

`W_net = (1/2)m(v_f² - v_i²)`

### Applications on Inclines with Friction

**Scenario:** A block moves up/down an incline with friction present.

**Forces acting:**
- Weight component along incline: mg sin θ (downward)
- Friction force: f = μN = μmg cos θ (opposing motion)
- Applied force: F (if any)

**Using Work-Energy Theorem:**
- Identify all forces doing work
- Calculate work done by each force
- Sum to get net work
- Equate to change in kinetic energy

**Example on incline (block moving up):**
- W_applied + W_gravity + W_friction = ΔKE
- F·s - mgs sin θ - μmgs cos θ = (1/2)m(v_f² - v_i²)

---

## 4. Conservation of Energy

### For Conservative Forces Only
When only conservative forces act:

`KE + PE = constant`

`KE_i + PE_i = KE_f + PE_f`

`(1/2)mv_i² + U_i = (1/2)mv_f² + U_f`

**Mechanical Energy:** E = KE + PE = constant

### With Non-Conservative Forces Present
When non-conservative forces (like friction) are present:

`W_nc = ΔKE + ΔPE`

`W_nc = (KE_f - KE_i) + (PE_f - PE_i)`

Or equivalently:

`E_initial + W_nc = E_final`

Where W_nc is the work done by non-conservative forces.

**Energy Balance:**
- Initial mechanical energy + Work by non-conservative forces = Final mechanical energy
- The "lost" mechanical energy is converted to other forms (heat, sound, deformation)

---

## 5. Power

### Definition
Power is the rate of doing work or the rate of energy transfer:

`P = W/t` (average power)

`P = dW/dt` (instantaneous power)

### Relationship with Force and Velocity
When a force acts on a moving object:

`P = F⃗ · v⃗ = Fv cos θ`

Where:
- F = force magnitude (N)
- v = velocity magnitude (m/s)
- θ = angle between force and velocity
- P = power (W)

**Key Points:**
- Power is maximum when force and velocity are parallel (θ = 0°)
- Power is zero when perpendicular (θ = 90°)
- Power is negative when opposing motion (θ = 180°)

### Units
- **SI unit:** Watt (W) = Joule/second (J/s) = kg·m²/s³
- **Imperial unit:** Horsepower (HP)
  - `1 HP = 746 W`
  - `1 kW = 1000 W`
  - `1 MW = 10⁶ W`

**Energy conversions:**
- `E = Pt` (energy = power × time)
- `1 kWh = 3.6 × 10⁶ J` (kilowatt-hour)

---

## 6. Motion in Vertical Circle

### Setup
A particle moves in a complete vertical circle of radius r, attached by a string or rod. The tension in the string provides the centripetal force along with gravity.

### Critical Speeds

**Minimum speed at the top (to complete circle):**

`v_top = √(gr)`

**Minimum speed at the bottom (to complete full circle):**

`v_bottom = √(5gr)`

### Tension Analysis

**At the bottom of the circle:**

`T_bottom = mg + mv_bottom²/r`

Where the centripetal acceleration points upward and tension must support weight plus provide centripetal force.

**At the top of the circle:**

`T_top = mv_top²/r - mg`

Where both tension and weight point downward (toward center) and provide centripetal force.

**At side of circle (θ from vertical):**

`T = mg cos θ + mv²/r`

### Conditions for Motion

**Case 1: Complete circle (v ≥ √(5gr) at bottom)**
- Particle completes the entire circular path
- Tension remains positive throughout
- String always remains taut

**Case 2: Oscillatory motion (v < √(2gr) at bottom)**
- Particle doesn't have enough speed to reach the top
- Oscillates back and forth like a pendulum
- Turns around before reaching horizontal level

**Case 3: Leaves circle (√(2gl) < v < √(5gl) at bottom)**
- Particle leaves the circular path before completing it
- String becomes slack when tension = 0
- Follows a parabolic path after leaving

### [SVG-REF] Vertical Circle Diagram:
- Circle with center marked
- Particle positions: at top, bottom, and side (90°)
- Arrows showing:
  - Velocity (tangential, at each position)
  - Weight (mg, downward)
  - Tension (toward center)
  - Centripetal acceleration (toward center)
- Labels showing critical angles and force directions

---

## 7. Collisions and Momentum

### Conservation of Momentum
In any collision (elastic or inelastic), momentum is always conserved if external forces are negligible:

`m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂`

Where:
- m₁, m₂ = masses of objects 1 and 2
- u₁, u₂ = velocities before collision
- v₁, v₂ = velocities after collision

### Coefficient of Restitution
Measures the elasticity of a collision:

`e = (v₂ - v₁)/(u₁ - u₂)` = (relative velocity of separation)/(relative velocity of approach)

**Range:** 0 ≤ e ≤ 1

### Types of Collisions

**Perfectly Elastic Collision (e = 1):**
- Kinetic energy is conserved: KE_before = KE_after
- `(1/2)m₁u₁² + (1/2)m₂u₂² = (1/2)m₁v₁² + (1/2)m₂v₂²`
- Momentum is conserved
- For equal masses with one at rest: velocities interchange

**Perfectly Inelastic Collision (e = 0):**
- Objects stick together after collision
- `m₁u₁ + m₂u₂ = (m₁ + m₂)v_common`
- Maximum loss in kinetic energy
- `v_common = (m₁u₁ + m₂u₂)/(m₁ + m₂)`

**Partially Elastic Collision (0 < e < 1):**
- Between perfectly elastic and perfectly inelastic
- Both momentum and coefficient of restitution equations apply

### Special Case: Oblique Elastic Collision of Equal Masses
When two objects of equal mass collide elastically at oblique angles:
- The final velocities are perpendicular to each other
- **90° separation:** If one is initially at rest, they separate at 90° to each other

### Energy Loss in Inelastic Collisions
For any collision with coefficient of restitution e:

`ΔKE = (1/2)(m₁m₂/(m₁+m₂))(1-e²)(u₁-u₂)²`

Where:
- ΔKE = kinetic energy lost (converted to heat, sound, deformation)
- Negative value indicates loss of kinetic energy
- For perfectly inelastic (e=0): `ΔKE = (1/2)(m₁m₂/(m₁+m₂))(u₁-u₂)²`

---

## 8. Impulse

### Definition
Impulse is the change in momentum, calculated as the integral of force over time:

`I⃗ = Δp⃗ = m(v⃗_f - v⃗_i)`

`I = ∫F dt` (impulse from variable force)

Where:
- I = impulse (N·s or kg·m/s)
- Δp = change in momentum
- F = force applied
- t = time interval

### Average Force
For a constant force over time interval Δt:

`F_avg = Δp/Δt = m(v_f - v_i)/Δt`

**Key Points:**
- Impulse-momentum theorem: `F_avg · Δt = m(v_f - v_i)`
- Impulse is a vector quantity
- Large force for short time = small force for long time (same impulse)
- Useful in collision problems where contact time is very small

---

## 9. Centre of Mass

### Position of Centre of Mass
For a system of particles:

`x_cm = Σ(m_i·x_i)/Σm_i = Σ(m_i·x_i)/M_total`

Similarly for y and z coordinates:
`y_cm = Σ(m_i·y_i)/M_total`
`z_cm = Σ(m_i·z_i)/M_total`

**Vector form:** `r⃗_cm = Σ(m_i·r⃗_i)/M_total`

### Velocity of Centre of Mass
Differentiating position with respect to time:

`V⃗_cm = Σ(m_i·v⃗_i)/M_total`

Or: `v_cm = Δr_cm/Δt`

**Momentum relationship:** `M_total · V⃗_cm = Σ(m_i·v⃗_i) = Total momentum`

### Acceleration of Centre of Mass
Differentiating velocity with respect to time:

`a⃗_cm = F⃗_ext/M_total`

Where F_ext is the total external force on the system.

**Key insight:** The centre of mass accelerates as if all the mass were concentrated there and all external forces acted at that point.

### Conservation of Momentum
If external force is zero (F_ext = 0):

`a_cm = 0` ⟹ `V_cm = constant`

The centre of mass moves with constant velocity (or remains at rest).

**Application:** In isolated systems (no external forces), the centre of mass velocity never changes, regardless of internal interactions.

---

## Worked Examples

### Example 1: Block Lifted with Acceleration

**Problem:** A 5 kg block is lifted vertically upward by a rope with acceleration 2 m/s². Find the tension in the rope and work done by tension in lifting the block by 4 m.

**Solution:**

Step 1: Free body diagram
- Weight downward: W = mg = 5 × 10 = 50 N
- Tension upward: T

Step 2: Apply Newton's second law
`T - mg = ma`
`T = m(g + a) = 5(10 + 2) = 60 N`

Step 3: Work done by tension
`W_T = T × s = 60 × 4 = 240 J`

Work done by gravity:
`W_g = -mgh = -5 × 10 × 4 = -200 J`

Net work:
`W_net = 240 - 200 = 40 J`

Using work-energy theorem:
`W_net = ΔKE = (1/2)m(v_f² - 0²)`
`40 = (1/2) × 5 × v_f²`
`v_f = 4 m/s`

---

### Example 2: Block on Incline with Friction

**Problem:** A 10 kg block slides up an incline (30°) with initial velocity 10 m/s. Coefficient of friction μ = 0.1. Find the distance traveled up the incline.

**Solution:**

Step 1: Identify forces
- Weight component along incline: mg sin 30° = 10 × 10 × 0.5 = 50 N (down)
- Normal force: N = mg cos 30° = 10 × 10 × (√3/2) = 50√3 N
- Friction force: f = μN = 0.1 × 50√3 = 5√3 N (down)

Step 2: Apply work-energy theorem
`W_gravity + W_friction = ΔKE`
`-mgs sin 30° - μmgs cos 30° = 0 - (1/2)mu²`
`-50s - 5√3s = -(1/2) × 10 × 100`
`-50s - 8.66s = -500`
`-58.66s = -500`
`s = 8.53 m`

---

### Example 3: Bullet Penetrating Planks

**Problem:** A 20 g bullet moving at 400 m/s penetrates through a wooden plank of mass 2 kg (initially at rest). After passing through, the bullet's velocity is 100 m/s. Find the velocity of the plank and kinetic energies before and after.

**Solution:**

Step 1: Conservation of momentum
`m_b × u_b + m_p × u_p = m_b × v_b + m_p × v_p`
`0.02 × 400 + 2 × 0 = 0.02 × 100 + 2 × v_p`
`8 = 2 + 2v_p`
`v_p = 3 m/s`

Step 2: Kinetic energies
Before:
`KE_before = (1/2) × 0.02 × 400² = 1600 J`

After:
`KE_after = (1/2) × 0.02 × 100² + (1/2) × 2 × 3²`
`= 100 + 9 = 109 J`

Energy lost:
`ΔKE = 1600 - 109 = 1491 J` (converted to heat, sound, deformation)

---

### Example 4: Block Colliding with Spring

**Problem:** A 2 kg block moving at 6 m/s on a frictionless surface collides with a spring (k = 100 N/m). Find the maximum compression of the spring.

**Solution:**

At maximum compression, the block momentarily stops (v = 0).

Using energy conservation:
`(1/2)mv² = (1/2)kx²`
`(1/2) × 2 × 36 = (1/2) × 100 × x²`
`36 = 50x²`
`x = √(36/50) = 0.85 m`

The spring compresses by 0.85 m.

---

### Example 5: Ball Bouncing - Coefficient of Restitution

**Problem:** A ball is dropped from height h₁ = 5 m and bounces to height h₂ = 3.2 m. Find the coefficient of restitution.

**Solution:**

For a ball bouncing on the ground:
Velocity just before impact: `u = √(2gh₁) = √(2×10×5) = 10 m/s` (downward)
Velocity just after impact: `v = √(2gh₂) = √(2×10×3.2) = 8 m/s` (upward)

Coefficient of restitution:
`e = |velocity of separation|/|velocity of approach|`
`e = 8/10 = 0.8`

Alternatively: `e = √(h₂/h₁) = √(3.2/5) = 0.8`

---

### Example 6: Elastic Collision - Velocity Interchange

**Problem:** A 4 kg object moving at 8 m/s collides elastically with a 4 kg object at rest. Find final velocities.

**Solution:**

For equal masses with elastic collision:
- The moving object comes to rest
- The stationary object moves with the initial velocity of the first object

Step 1: Conservation of momentum
`m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂`
`4 × 8 + 4 × 0 = 4v₁ + 4v₂`
`8 = v₁ + v₂` ... (1)

Step 2: Coefficient of restitution (e = 1 for elastic)
`e = (v₂ - v₁)/(u₁ - u₂)`
`1 = (v₂ - v₁)/(8 - 0)`
`v₂ - v₁ = 8` ... (2)

From (1) and (2):
`v₁ = 0 m/s`
`v₂ = 8 m/s`

The velocities interchange: the first object stops, the second moves at the original velocity.

---

### Example 7: Ballistic Pendulum

**Problem:** A bullet of mass 10 g moving at 400 m/s embeds itself in a wooden block of mass 4 kg suspended as a pendulum. Find the maximum height reached by the block.

**Solution:**

Step 1: Find velocity of block+bullet immediately after collision
Using conservation of momentum (perfectly inelastic):
`m_b × u_b + m_B × u_B = (m_b + m_B) × v`
`0.01 × 400 + 4 × 0 = (0.01 + 4) × v`
`4 = 4.01v`
`v = 0.997 m/s ≈ 1 m/s`

Step 2: Find maximum height using energy conservation
`(1/2)(m_b + m_B)v² = (m_b + m_B)gh`
`(1/2)v² = gh`
`h = v²/(2g) = 1²/(2×10) = 0.05 m = 5 cm`

---

### Example 8: Explosion into Fragments

**Problem:** A 10 kg object at rest explodes into two fragments: one of 4 kg moving at 15 m/s to the right. Find the velocity of the other fragment.

**Solution:**

Using conservation of momentum (external force = 0):
`Initial momentum = 0` (at rest)
`Final momentum = m₁v₁ + m₂v₂`

`0 = 4 × 15 + (10 - 4) × v₂`
`0 = 60 + 6v₂`
`v₂ = -10 m/s`

The second fragment (6 kg) moves at 10 m/s to the left (opposite direction).

**Energy released:**
`ΔKE = (1/2) × 4 × 15² + (1/2) × 6 × 10² - 0`
`= 450 + 300 = 750 J`

This is the chemical or potential energy that was converted to kinetic energy.

---

### Example 9: Ball in Vertical Circle - Tension Analysis

**Problem:** A 0.5 kg ball attached to a 1 m string moves in a vertical circle. Find the tension at the top and bottom if the speed at the bottom is 5 m/s.

**Solution:**

Given:
- m = 0.5 kg
- r = 1 m
- v_bottom = 5 m/s
- g = 10 m/s²

Step 1: Check if complete circle is possible
Minimum speed at bottom: `v_min = √(5gr) = √(5×10×1) = √50 = 7.07 m/s`

Since 5 m/s < 7.07 m/s, the ball cannot complete the full circle and will leave the path.

Let's find where it leaves the circle by finding when tension = 0.

Step 2: Using energy conservation from bottom to angle θ
`(1/2)mv_bottom² = (1/2)mv² + mgr(1 - cos θ)`
`(1/2) × 0.5 × 25 = (1/2) × 0.5 × v² + 0.5 × 10 × 1 × (1 - cos θ)`
`6.25 = 0.25v² + 5(1 - cos θ)`

When T = 0:
`mg cos θ = mv²/r`
`10 cos θ = v²`

Substituting back:
`6.25 = 0.25 × 10 cos θ + 5(1 - cos θ)`
`6.25 = 2.5 cos θ + 5 - 5 cos θ`
`1.25 = -2.5 cos θ`
`cos θ = -0.5`
`θ = 120°`

At the bottom:
`T_bottom = mg + mv_bottom²/r = 0.5 × 10 + (0.5 × 25)/1 = 5 + 12.5 = 17.5 N`

The ball leaves the circle at θ = 120° from the bottom.

---

### Example 10: Block Released on Circular Track

**Problem:** A block is released from rest at height h on the inside of a circular track of radius r. Find the minimum height h such that the block completes the loop.

**Solution:**

For the block to complete the loop, it must have minimum speed at the top:
`v_top = √(gr)`

Using energy conservation from release point to top:
`mgh = (1/2)mv_top² + mg(2r)`
`gh = (1/2)g(r) + 2gr`
`h = r/2 + 2r = 2.5r`

**Result:** The block must be released from minimum height h = 2.5r to just complete the loop.

---

### Example 11: Man on Floating Log

**Problem:** A 60 kg man stands at one end of a 40 kg log floating on frictionless water. The log is 5 m long. If the man walks to the other end, how far does the log move?

**Solution:**

Since there are no external horizontal forces, the centre of mass of the system doesn't move.

Initially, let's place the origin at the initial position of the CM.

Initial CM position:
`x_cm = (60 × 2.5 + 40 × 0)/(60 + 40) = 150/100 = 1.5 m` (from the log's initial center)

After the man moves 5 m relative to the log, the CM position must remain the same:
`x_cm = (60 × (2.5 + 5 - d) + 40 × d)/(100) = 1.5`

Where d is the distance the log moves.

`60(7.5 - d) + 40d = 150`
`450 - 60d + 40d = 150`
`-20d = -300`
`d = 1.5 m`

The log moves 1.5 m in the direction opposite to the man's motion.

---

---

## Questions

### Level 1 (Easy) - CBSE Pattern

1. **[VSA]** A person is holding a suitcase and moving on a horizontal platform. Is he doing any work?
   **Answer:** No (force perpendicular to displacement)

2. **[VSA]** When is work said to be done?
   **Answer:** When force acts and body moves in direction of force

3. **[SA]** If KE increases by 300%, percentage increase in momentum?
   **Answer:** 100% (KE→4x, v→2x, p→2x)

4. **[SA]** A rocket explodes in mid air. Effect on (i) total momentum (ii) total KE?
   **Answer:** (i) Conserved (ii) KE increases (chemical→kinetic)

5. **[LA]** State and prove Work-Energy theorem.
   **Answer:** W_net = ΔKE = ½m(v_f² - v_i²)

---

### Level 2 (Medium) - DTS 1-5

#### DTS-1: Work and Energy

1. **[MCQ]** Particle moves 5m in +x under F = 4i + 2j - 4k. Work done:
   (A) 20 J  (B) 10 J  (C) -20 J  (D) 30 J
   **Answer: A** (W = F·s = 4×5 = 20J)
   > Source: DTS-1 Q1

2. **[MCQ]** Ball released from top of tower. Ratio of work by gravity in 1st, 2nd, 3rd second:
   (A) 1:2:3  (B) 1:4:16  (C) 1:3:5  (D) 1:9:25
   **Answer: C**
   > Source: DTS-1 Q3

3. **[MCQ]** If two objects with different masses have same KE, their momenta are:
   (A) ∝ mass  (B) ∝ mass²  (C) ∝ √mass  (D) ∝ 1/mass
   **Answer: C** (p = √(2mKE))
   > Source: DTS-1 Q6

4. **[MCQ]** Running man has half KE of boy of half his mass. Man speeds up by 1 m/s, same KE as boy. Boy's original speed:
   (A) 2  (B) 9.6  (C) 4.8  (D) 7.2 m/s
   **Answer: B**
   > Source: DTS-1 Q8

5. **[MCQ]** KE increases uniformly with time t. Net force must be:
   (A) constant  (B) ∝ t  (C) ∝ 1/t²  (D) ∝ 1/√t
   **Answer: B**
   > Source: DTS-1 Q10

#### DTS-2: Energy Conservation, Power

1. **[MCQ]** Block must have minimum speed to slide up rise of height h:
   (A) ½√(4gh)  (B) √(gh)/2  (C) √(2gh)  (D) 2√(2gh)
   **Answer: C**
   > Source: DTS-2 Q16

2. **[MCQ]** Object on end of cord, held horizontal, released. Tension at lowest point:
   (A) mg/2  (B) mg  (C) 2mg  (D) 3mg
   **Answer: D** (T = mg + mv²/r = mg + 2mg = 3mg)
   > Source: DTS-2 Q22

3. **[MCQ]** Heavy particle hangs from string, tension values mw and nw at highest and lowest:
   (A) m+n=6  (B) m/n=2  (C) m-n=-6  (D) n-m=-6
   **Answer: C**
   > Source: DTS-2 Q24

4. **[MCQ]** Two springs A,B (kA=2kB), stretched by equal force. Energy in B if A stores E:
   (A) E/2  (B) 2E  (C) E  (D) E/4
   **Answer: B** (E = F²/2k, smaller k → more energy)
   > Source: DTS-2 Q25

5. **[MCQ]** Speed v by car of mass m over distance x with constant power P:
   (A) v=3xp/m  (B) v=(3xp/m)^½  (C) v=(3xp/m)^⅓  (D) v=(3xp/m)²
   **Answer: C**
   > Source: DTS-2 Q28

#### DTS-3: Momentum and Impulse

1. **[MCQ]** Particle mass 15kg, vi = i-2j, vf = 6i+4j+5k after 0.1s. Average force:
   (A) 15[5i+6j+5k]  (B) 15[5i+6j-5k]  (C) 150[5i-6j+5k]  (D) 150[5i+6j+5k]
   **Answer: D**
   > Source: DTS-3 Q31

2. **[MCQ]** Cart A(2kg) and B(3kg) with spring bumpers collide. At minimum separation:
   (A) B at rest  (B) A at rest  (C) same KE  (D) KE minimum
   **Answer: D**
   > Source: DTS-3 Q33

3. **[MCQ]** Golf ball mass m, hit to speed v, contact time T. Average force:
   (A) mvT  (B) mv/T  (C) ½mv²T  (D) mv²/2T
   **Answer: B**
   > Source: DTS-3 Q36

#### DTS-4: Collisions

1. **[MCQ]** 2kg at 10m/s and 3kg at -5m/s elastic collision. Final velocities:
   (A) -10, +0.5  (B) -8, +7  (C) -9, +6  (D) -5, +10
   **Answer: B**
   > Source: DTS-4 Q46

2. **[MCQ]** M>>m elastic collision, m at rest. Speed of m after:
   (A) um/M  (B) uM/m  (C) u/2  (D) 2u
   **Answer: D**
   > Source: DTS-4 Q47

3. **[MCQ]** Equal mass elastic oblique collision (one at rest). Angle between final velocities:
   90° always
   > Source: DTS-4

4. **[MCQ]** Ball falls from h₀, after n bounces rises to hₙ. e given by:
   (A) eⁿ=√(hₙ/h₀)  (B) eⁿ=√(h₀/hₙ)  (C) ne=√(hₙ/h₀)  (D) √(ne)=√(hₙ/h₀)
   **Answer: A**
   > Source: DTS-4 Q58

#### DTS-5: Centre of Mass

1. **[MCQ]** Circular plate d + square plate d touching. CM is:
   (A) in circle  (B) in square  (C) at contact  (D) outside
   **Answer: B** (square has more mass)
   > Source: DTS-5 Q64

2. **[MCQ]** Two men (40kg, 20kg) on boat (100kg, 20m). Both reach middle. Boat displacement:
   (A) 5/4 right  (B) 5/4 left  (C) 5/8 right  (D) 5/8 left
   **Answer: C**
   > Source: DTS-5 Q69

3. **[MCQ]** Ball in closed box on smooth surface. CM velocity:
   (A) box constant  (B) box+ball constant  (C) ball constant  (D) ball relative to box constant
   **Answer: B**
   > Source: DTS-5 Q72

---

### Level 3 (Hard) - DTS 6-11

#### DTS-6: Numerical Answer Type

1. **[NAT]** 8kg block: 0 to 4m/s in 40s. Instantaneous power at t=8s = P×10⁻² W. P = ?
   **Answer: 64**

2. **[NAT]** 2kg elastic collision with body at rest. Velocity reduced to ¼. Mass struck = M×10⁻¹ kg. M = ?
   **Answer: 12**

3. **[NAT]** Equal mass elastic oblique collision. Angle between directions = x°. x = ?
   **Answer: 90**

#### DTS-7-8: Advanced Energy Problems

1. **[MCQ]** Chain length l, mass m. ¼ hanging. Work to pull back:
   (A) mgl/4  (B) mgl/8  (C) mgl/16  (D) mgl/32
   **Answer: D** (mgl/32)

2. **[MCQ]** Particle F = F₀e⁻ᵏˣ from rest at x=0. Maximum KE:
   (A) F₀/k  (B) F₀/eᵏ  (C) kF₀  (D) keᶠ⁰
   **Answer: A**

3. **[MCQ]** Constant power P. Distance when v goes from v₁ to v₂:
   (A) 3P(v₂²-v₁²)/m  (B) m(v₂²-v₁²)/3P  (C) m(v₂³-v₁³)/3P  (D) m(v₂²-v₁²)/3P
   **Answer: C**

---

### Level 4 (Very Hard) - DTS 12-15

Selected problems from DTS 12-15 involving complex multi-body dynamics, constrained motion, spring-coupled systems, and advanced collision scenarios.

(22 problems total covering:
- Multi-stage collisions
- Variable mass systems
- Non-uniform circular motion
- Energy dissipation in constrained systems
- Coupled oscillations)

---

### JEE Main Archive

53 questions from 2002-2019. Topics: Work-energy theorem, collisions, power, conservation laws, circular motion, elastic and inelastic collisions.

(Selected key questions with solutions available on request)

---

### JEE Advanced Archive

46+ questions from 1980-2018. Includes single/multiple correct, comprehension, matching, and numerical types covering:
- Advanced collision mechanics
- Constraint-based motion
- Energy dissipation mechanisms
- Center of mass motion in complex systems
- Non-conservative force analysis

(Full question bank with detailed solutions available on request)

---

### Miscellaneous Question Bank

57 additional questions covering mixed topics and difficulty levels:
- Quick conceptual checks
- Practical application problems
- Mixed physics topics integrating work-energy with other concepts
- Real-world scenarios and limitations of ideal physics

---

### Complete Answer Key Summary

**DTS-1 to DTS-5:** Individual question answers provided above

**DTS-6 NAT Answers:** 64, 12, 90, 2, 3, 1, 2

**DTS-7-8 and Beyond:** Detailed solutions available in respective source materials

**Total Question Count:** 290+ comprehensive problems covering CBSE, JEE Main, and JEE Advanced levels

---

### Quick Reference: Key Formula Review for Problem-Solving

**Work-Energy Relations:**
- W_net = ΔKE = ½m(v_f² - v_i²)
- W = F·s cos θ
- P = dW/dt = F·v

**Conservation Laws:**
- Momentum: m₁v₁ + m₂v₂ = constant (always)
- Energy: KE + PE = constant (conservative forces only)

**Collision Analysis:**
- e = (v₂ - v₁)/(u₁ - u₂) for any collision
- For elastic: e = 1, KE conserved
- For inelastic: 0 < e < 1
- For perfectly inelastic: e = 0, objects stick

**Centre of Mass:**
- x_cm = Σ(m_i·x_i)/M_total
- v_cm = Σ(m_i·v_i)/M_total
- a_cm = F_ext/M_total

**Special Cases:**
- Vertical circle minimum speed: v_bottom = √(5gr), v_top = √(gr)
- Elastic collision equal masses: velocities interchange
- Spring compression: (1/2)kx² = (1/2)mv²

