# Kinematics

## Overview
Kinematics describes motion without considering forces. It covers 1D motion, graphs, projectile motion, and circular motion. This reference provides essential formulas, concepts, and worked examples for JEE Physics preparation.

## 1. Position, Displacement, and Distance

### Concepts
- **Position vector**: `r = xi + yj` - describes the location of a point in space relative to an origin
- **Displacement**: `s = r_f - r_i` - vector from initial to final position (direction matters)
- **Distance**: total path length traveled (scalar, always positive)
- **Key relationship**: Distance >= |Displacement| always

### Key Diagram: Distance vs Displacement
A particle moves along a curved path from point A to point C to point B.
- The **distance** is the total length of the path: A→C→B (curved path)
- The **displacement** is the straight-line vector from A to B
- The number line shows positions with point A on the left, point C in the middle, and point B on the right
- A curved path is drawn above showing the actual trajectory
- A straight arrow below shows the displacement vector from A to B
- Labels indicate: "Distance = total path length (scalar)" and "Displacement = net change (vector)"

---

## 2. Velocity and Speed

### Concepts
- **Average velocity**: `V_av = Δx/Δt` - total displacement divided by total time
- **Average speed**: total distance / time - always positive
- **Instantaneous velocity**: `v = dx/dt` - slope of the x-t graph at any instant
- **Speed**: `|velocity|` - magnitude of velocity (always positive)

### Important Notes
- Velocity is a vector; speed is a scalar
- For motion in one direction, speed equals magnitude of velocity
- Average speed >= Average velocity

---

## 3. Acceleration

### Concepts
- **Average acceleration**: `a_av = Δv/Δt` - change in velocity divided by time
- **Instantaneous acceleration**: `a = dv/dt = d²x/dt²` - second derivative of position
- **Speed increase**: When acceleration is in the same direction as velocity
- **Speed decrease (retardation)**: When acceleration is opposite to velocity direction

### Important Notes
- Acceleration can exist even when velocity is zero (e.g., at the top of a projectile's trajectory)
- Acceleration changes the velocity vector, which includes both magnitude and direction changes

---

## 4. Equations of Uniformly Accelerated Motion

### Formulas
The fundamental equations for motion with constant acceleration (u = initial velocity, v = final velocity, a = acceleration, s = displacement, t = time):

- `v = u + at`
- `s = ut + (1/2)at²`
- `v² = u² + 2as`
- `s = (1/2)(u + v)t`
- **Displacement in nth second**: `s_n = u + (a/2)(2n - 1)`

### Key Diagram: UAM Graphs
Three graphs shown side by side for uniformly accelerated motion:

**Graph 1: Position vs Time (x-t)**
- Parabolic curve starting at origin
- Concave up if a > 0, concave down if a < 0
- Slope increases (or decreases) linearly with time

**Graph 2: Velocity vs Time (v-t)**
- Straight line with slope equal to acceleration
- Shaded area under the line represents displacement
- Starts at point (0, u) and has slope a

**Graph 3: Acceleration vs Time (a-t)**
- Horizontal line at height a
- Area under the line represents change in velocity
- Shows constant acceleration over time

### Important Notes
- **Sign convention**: Choose positive direction consistently throughout the problem
- **Vertical motion**: `a = -g = -9.8 m/s²` when taking up as positive
- These equations are valid only when acceleration is constant

### Worked Example
**Q:** A ball is thrown upward and reaches a maximum height of 20m. Find the initial velocity and time to reach the top. (Take g = 10 m/s²)

**A:** At the top of the trajectory, v = 0. Using `v² = u² + 2as`:
- `0 = u² + 2(-10)(20)`
- `u² = 400`
- `u = 20 m/s`

Time to reach top: Using `v = u + at`:
- `0 = 20 + (-10)t`
- `t = 2 seconds`

---

## 5. Graphs in Kinematics

### Concepts
- **Slope of x-t graph** = velocity at that instant
- **Slope of v-t graph** = acceleration at that instant
- **Area under v-t graph** = displacement during that time interval
- **Area under a-t graph** = change in velocity during that time interval

### Important Notes
- **Uniform velocity**: x-t graph is a straight line, v-t graph is horizontal (a = 0)
- **Uniform acceleration**: x-t graph is parabolic, v-t graph is straight line with constant slope
- **Non-uniform acceleration**: x-t and v-t graphs are curves
- Negative area under v-t graph indicates displacement in negative direction

### Analysis Technique
- For x-t graphs: steeper slope = higher velocity
- For v-t graphs: steeper slope = higher acceleration
- For v-t graphs: horizontal line = zero acceleration (constant velocity)

---

## 6. Non-Uniform Acceleration

### Formulas
Acceleration that varies with time, position, or velocity:

**When a = f(t) (acceleration as function of time)**
- `∫dv = ∫a(t)dt` → integrate to find v(t)
- `∫dx = ∫v(t)dt` → integrate to find x(t)

**When a = f(x) (acceleration as function of position)**
- `∫v dv = ∫a(x)dx` (derived using a = v dv/dx)
- Also can be written as: `v dv = a(x) dx`

**When a = f(v) (acceleration as function of velocity)**
- `∫dv/a(v) = ∫dt` → separate variables and integrate
- Gives t as function of v, which can be inverted if needed

### Worked Example
**Q:** Acceleration varies with time as `a(t) = 2t - 2`. Initial conditions: `x(0) = 0, v(0) = 0`. Find v(t), x(t), and displacement from t = 2s to t = 4s.

**A:**
- Integrate acceleration: `v(t) = ∫(2t - 2)dt = t² - 2t + C`
- Using v(0) = 0: C = 0, so `v(t) = t² - 2t`
- Integrate velocity: `x(t) = ∫(t² - 2t)dt = t³/3 - t² + C'`
- Using x(0) = 0: C' = 0, so `x(t) = t³/3 - t²`
- Displacement from t = 2 to t = 4: `Δx = x(4) - x(2)`
  - `x(4) = 64/3 - 16 = 16/3`
  - `x(2) = 8/3 - 4 = -4/3`
  - `Δx = 16/3 - (-4/3) = 20/3 m ≈ 6.67 m`

---

## 7. Projectile Motion

### Concepts
- **Independence of motions**: Horizontal and vertical motions are independent
- **Horizontal motion**: Constant velocity `ux` (no horizontal acceleration)
- **Vertical motion**: Uniformly accelerated with `ay = -g`
- **Trajectory**: Parabolic path in the absence of air resistance

### Formulas
For a projectile launched with initial velocity u at angle θ above horizontal from ground level:

- **Time of flight**: `T = 2u sinθ / g` (time to return to same level)
- **Range**: `R = u² sin2θ / g` (horizontal distance covered)
- **Maximum height**: `H = u² sin²θ / (2g)` (height above launch point)
- **Trajectory equation**: `y = x tanθ - gx²/(2u²cos²θ)` (y as function of x)
- **Alternative trajectory form**: `y = x tanθ(1 - x/R)`
- **Maximum range condition**: θ = 45° gives `R_max = u²/g`
- **Complementary angles**: Same range for θ and (90° - θ)

### Key Diagram: Projectile Motion
A parabolic trajectory shown from launch point O to landing point B:

- Initial velocity vector u shown at launch point O, decomposed into:
  - Horizontal component: `u cosθ` (pointing right)
  - Vertical component: `u sinθ` (pointing up)
- The parabolic arc shows the path of the projectile
- Maximum height H is marked at point A (midpoint of trajectory)
- Horizontal distance R is marked along the x-axis from O to B
- Range R labeled along the bottom
- Height H labeled vertically at the peak
- Velocity vectors shown at three points:
  - At O: vector at angle θ
  - At A: vector purely horizontal (vertical component = 0)
  - At B: vector at angle θ below horizontal
- Horizontal component of velocity remains constant throughout
- Vertical component changes due to gravity

### Worked Example
**Q:** A stone is thrown from a building 14.7m high with initial velocity 19.6 m/s at 30° to the horizontal. Find the time taken to hit the ground and the horizontal distance from the building.

**A:**
- Horizontal component: `ux = 19.6 cos30° = 19.6 × (√3/2) = 9.8√3 m/s`
- Vertical component: `uy = 19.6 sin30° = 19.6 × 0.5 = 9.8 m/s`

Using vertical motion equation `s = uyt - (1/2)gt²`:
- `-14.7 = 9.8t - (1/2)(9.8)t²`
- `-14.7 = 9.8t - 4.9t²`
- `4.9t² - 9.8t - 14.7 = 0`
- `t² - 2t - 3 = 0`
- `(t - 3)(t + 1) = 0`
- `t = 3 seconds` (taking positive value)

Horizontal distance: `x = ux × t = 9.8√3 × 3 = 29.4√3 ≈ 50.9 m`

---

## 8. Projectile on Inclined Plane

### Concepts
- Projectile launched from or landing on an inclined plane at angle β
- Acceleration components along and perpendicular to the incline
- Special case of projectile motion in non-standard coordinate system

### Formulas
For projectile launched at angle α to the horizontal from an inclined plane (angle β):

- **Acceleration along incline**: `ax = -g sinβ`
- **Acceleration perpendicular to incline**: `ay = -g cosβ`
- **Time of flight**: `T = 2u sin(α - β) / (g cosβ)`
- **Range on incline**: `R = 2u² sin(α - β) cosα / (g cos²β)`
- **Angle for maximum range**: `α = π/4 + β/2` or `α = 45° + β/2`
- **Maximum range value**: `R_max = u² / (g(1 + sinβ))`

### Important Notes
- When β = 0 (horizontal plane), these reduce to standard projectile motion formulas
- The angle α is measured from the horizontal, not from the incline
- For maximum range, the projectile is launched at 45° above the incline surface

---

## 9. Horizontal Projectile

### Concepts
- Projectile launched horizontally (initial vertical velocity = 0)
- Initial height h above ground
- Common in experimental situations (ball rolling off table)

### Formulas
- **Time to reach ground**: `t = √(2h/g)` (purely vertical motion)
- **Horizontal distance**: `x = u × √(2h/g)` where u is initial horizontal velocity
- **Final velocity**: `v = √(u² + 2gh)` (magnitude, using Pythagoras)
- **Angle below horizontal at impact**: `tanθ = √(2gh)/u`

### Quick Derivation
- Vertical: `h = (1/2)gt²` → `t = √(2h/g)`
- Horizontal: `x = ut` (constant velocity)
- Final vertical velocity: `vy = gt = g√(2h/g) = √(2gh)`
- Final horizontal velocity: `vx = u`
- Resultant: `v = √(vx² + vy²) = √(u² + 2gh)`

---

## 10. Circular Motion

### Concepts
- Motion in a circle at constant distance from center
- Velocity always tangent to the circle
- Acceleration always directed toward the center (centripetal)
- Angular quantities describe rotational parameters

### Formulas
- **Angular velocity**: `ω = dθ/dt = v/r` (radians per second)
- **Period**: `T = 2π/ω = 2πr/v` (time for one complete revolution)
- **Frequency**: `f = 1/T = ω/(2π)` (revolutions per second)
- **Linear velocity**: `v = rω` (speed along the circular path)
- **Centripetal acceleration**: `ac = v²/r = ω²r` (magnitude, directed toward center)

### Position and Velocity in Circular Motion
For particle moving in circle of radius r with angular velocity ω:

- **Position vector**: `r(t) = r cos(ωt) i + r sin(ωt) j`
- **Velocity vector**: `v(t) = -rω sin(ωt) i + rω cos(ωt) j`
- **Magnitude of velocity**: `|v(t)| = rω` (constant in uniform circular motion)
- **Acceleration vector**: `a(t) = -rω² cos(ωt) i - rω² sin(ωt) j = -ω²r(t)` (centripetal)

### Key Diagram: Circular Motion
A circle shown with center O and radius r:

- Particle at point P on the circumference
- Radius vector from O to P labeled with r
- Velocity vector shown tangent to circle at P, perpendicular to radius, with magnitude v = rω
- Centripetal acceleration vector shown pointing from P toward center O, labeled ac = v²/r = ω²r
- Angular velocity ω shown as a curved arrow indicating direction of rotation (counterclockwise or clockwise)
- Angle θ shown from a reference axis to the radius OP
- Labels show: velocity perpendicular to radius, acceleration toward center, both change direction as particle moves

### Important Notes
- **Uniform circular motion**: Speed is constant, but velocity direction changes continuously
- **Uniform circular motion implications**:
  - `v² = u² + 2as` cannot be used directly
  - Acceleration is purely centripetal
  - Acceleration is perpendicular to velocity (no tangential component)

---

## 11. Non-Uniform Circular Motion

### Concepts
- Particle moves in circle but speed is not constant
- Both radial and tangential components of acceleration present
- Both speed and direction of velocity change

### Formulas
- **Radial acceleration (centripetal)**: `ar = v²/r` (toward center, depends on instantaneous speed)
- **Tangential acceleration**: `at = dv/dt` (along tangent, changes the speed)
- **Net acceleration**: `a = √(ar² + at²)` (vector sum of components)
- **Angle between net acceleration and radius**: `tanα = at/ar`

### Vector Relations
- Radial acceleration: `ar = ac = v²/r` (perpendicular to velocity)
- Tangential acceleration: `at = dv/dt` (parallel to velocity)
- These two components are perpendicular to each other
- Total acceleration: `a⃗ = ar r̂ + at t̂` (in radial and tangential directions)

### Key Diagram: Non-Uniform Circular Motion
A circle shown with particle at point P:

- Radius from center O to particle P
- Velocity vector shown tangent to circle at P
- Three acceleration vectors emanating from P:
  - **ar**: Arrow pointing from P toward center O (radial, magnitude = v²/r)
  - **at**: Arrow pointing along tangent direction at P (tangential, magnitude = dv/dt)
  - **a**: Arrow showing resultant acceleration as diagonal
- Right angle symbol shown between ar and at
- Angle α shown between the net acceleration vector a and the radius OP
- Labels indicate: "ar toward center", "at along tangent", "a = √(ar² + at²)"
- If speed increasing: at points in direction of motion; if speed decreasing: at opposite to motion

### Important Notes
- **Speed increasing**: `at` points in direction of velocity (acceleration and velocity same direction)
- **Speed decreasing**: `at` points opposite to velocity (retardation)
- **Centripetal acceleration**: Always present in circular motion, always toward center
- **Tangential acceleration**: Present only when speed is changing
- **At maximum or minimum speed**: `at = 0`, only centripetal acceleration exists

---

## 12. Relative Motion

### Concepts
- Motion observed from different reference frames
- Relative velocity relates velocities in different frames
- Vector addition/subtraction of velocities
- Applications: rain problems, crossing rivers, rotating systems

### Formulas
- **Relative velocity**: `v_AB = v_A - v_B` (velocity of A with respect to B)
- **Property**: `v_AB = -v_BA` (relative velocities are opposite)
- **Three-body relation**: `v_AC = v_AB + v_BC`
- **For perpendicular velocities**: `|v_AB| = √(v_A² + v_B²)`

### Rain-Man Problems
When a man moves with velocity vₘ and rain falls with velocity vᵣ:
- Relative velocity of rain w.r.t. man: `v_rel = v_rain - v_man`
- Direction of rain relative to man: determined by vector subtraction
- Man must hold umbrella in direction of relative velocity

### River Crossing Problems
**Minimum time crossing**: Direct the velocity perpendicular to current
- Velocity perpendicular to river: v
- Current velocity: vc
- Time to cross width d: `t_min = d/v`
- Drift downstream: `x = vc × t_min = vc × d/v`

**Minimum drift crossing**: Velocity directed at angle to cancel current
- Resultant velocity should be perpendicular to current
- Relative speed across river: `√(v² - vc²)`
- No downstream drift achieved when velocity magnitude > current
- Time taken: `t = d/√(v² - vc²)`

### Worked Example
**Q:** Three particles are initially at the vertices of an equilateral triangle with side length a. Each particle moves toward the next adjacent particle (in order) with constant speed v. When do they meet at the center?

**A:** Due to symmetry, the three particles always form an equilateral triangle that shrinks and rotates.

Component of velocity of each particle:
- Component toward center (radial): By geometry, each particle moves toward the next at speed v
- The velocity of particle 1 toward particle 2 has a component toward the center

At any instant, the separation between adjacent particles: Since each particle moves toward the next at speed v, and the angle between the line joining them and the radial direction toward center is 60°/2 = 30°...

Actually, reconsidering: Each particle moves toward the next with speed v. The velocity of approach (rate at which distance decreases) between two adjacent particles:
- Velocity of particle 1 toward particle 2: v
- Velocity of particle 2 away from particle 1: component depends on its motion toward particle 3
- Relative velocity of approach: v + v cos(120°) = v - v/2 = v/2...

More directly: The line joining adjacent particles rotates and shrinks. The rate of decrease of side length = v cos(60°) + v cos(60°) = 2v × (1/2) = v

Wait, let me reconsider more carefully:
- Particle 1 moves toward particle 2 at speed v
- Particle 2 moves toward particle 3 at speed v
- Angle at vertex of equilateral triangle = 60°
- Component of particle 1's velocity along line P1P2: v
- Component of particle 2's velocity opposite to line P1P2: v cos(60°) = v/2
- Rate of approach = v + v/2 = 3v/2

Time to meet: `t = (a/2) / (3v/4)` ... Actually for initial side length a:
`t = a / (3v/2) = 2a / (3v)`

---

## Important Formulas Summary

### 1D Motion with Constant Acceleration
- `v = u + at`
- `s = ut + (1/2)at²`
- `v² = u² + 2as`

### Projectile Motion
- Time of flight: `T = 2u sinθ / g`
- Range: `R = u² sin2θ / g`
- Maximum height: `H = u² sin²θ / (2g)`

### Circular Motion
- `v = rω`
- `T = 2πr/v = 2π/ω`
- `ac = v²/r = ω²r`

### Relative Motion
- `v_AB = v_A - v_B`

---

## Questions

### ANSWER KEYS (Reference)

**Kinematics Workbook Level 1 Answer Key:**
| Q# | 1-15 | 16-30 | 31-45 | 46-60 | 61-75 |
|---|---|---|---|---|---|
| Ans | A B B B A C D C A B D B A A B | B A A A B B B B B D D B C C A | D D D C A A A B A D B C A D A | D A C B A B D A B D B D C C D | B B D C A D B C C A A D B B B |

**Kinematics Level 2 (DTS 6-11) Answer Key:**
| Q# | 76-90 | 91-103 | 104-115 | 116-125 |
|---|---|---|---|---|
| Ans | A A D B B BD BCD C C 1 B D C A ABC | AC B A 8 5 A D C A C AD A B A | B 5 C A B A C D D ABCD ABCD AB AC ABCD ABCD | C C 1 A C BD C A 2 3 |

**Kinematics JEE Main Archive Answer Key:**
| Q# | 1-19 |
|---|---|
| Ans | C D A C A A D D B B C A B C B A B B A |

**Kinematics JEE Advanced Archive Answer Key:**
| Q# | 1-14 |
|---|---|
| Ans | C B A A B A A B ABC AC 2 2R πR d/v True |

**Motion in 2D Level 1 Answer Key:**
| Q# | 1-15 | 16-30 | 31-45 | 46-60 | 61-75 |
|---|---|---|---|---|---|
| Ans | B C D B D B B D D B A C B C B | C D A B A A D A B C A A B B A | C B A A B B A A A B A B D B D | C B A A B B A A A B A B C A D |

**Motion in 2D Level 2 Answer Key:**
| Q# | 76-116 | 117-125 |
|---|---|---|
| Ans | D B B D ABD ACD A D A 6 C D B D B | AC A-r; B-t; C-p; D-q A B ABC ABD A-p, r; B-q, s; C-p, r; D-p, q, r, s BD 9 |

---

### KINEMATICS: LEVEL 0 (EASY)

**1. [MCQ]** A particle travels half the distance with speed v₀. The remaining part of the distance was covered with speed v₁ for half the time, and speed v₂ for the other half of time. Find the average speed of the particle.
   (A) Average of harmonic and arithmetic mean
   (B) Harmonic mean of three speeds
   (C) Complex expression depending on v₁ and v₂
   (D) None of these
   **Answer: C**
   > Source: Kinematics Level 0, Q6

**2. [MCQ]** A man starts from home at 8 am, walks at 2 m/s for 3 km to his office. He stays until 4 pm, then returns by bus at 10 m/s. What is the time taken to reach his office?
   (A) 1500 s or 25 min
   (B) 300 s or 5 min
   (C) 1800 s or 30 min
   (D) 2100 s or 35 min
   **Answer: A**
   > Source: Kinematics Level 0, Q7

**3. [MCQ]** A particle is moving along x-axis with position x = 6 + bt² where a = 6 m and b = 3.5 m/s². Find the velocity at t = 3s.
   (A) 0 m/s
   (B) 10.5 m/s
   (C) 21 m/s
   (D) 35 m/s
   **Answer: C**
   > Source: Kinematics Level 0, Q8

**4. [MCQ]** A ball is thrown upwards with velocity 29.4 m/s. What are the velocity and acceleration at the highest point? (g = 9.8 m/s²)
   (A) v = 0 m/s, a = 0 m/s²
   (B) v = 10 m/s, a = 9.8 m/s²
   (C) v = 0 m/s, a = 9.8 m/s² (downward)
   (D) v = 9.8 m/s, a = 0 m/s²
   **Answer: C**
   > Source: Kinematics Level 0, Q10

**5. [MCQ]** Two balls thrown vertically upward with the same initial velocity reach heights h₁ and h₂. What is the ratio h₁/h₂?
   (A) Depends on mass
   (B) 1
   (C) 1/2
   (D) 2
   **Answer: B**
   > Source: Kinematics Level 0, Q19

---

### KINEMATICS: LEVEL 1 - MEDIUM (DTS 1-5)

**6. [MCQ]** In a diagram, a particle moves from point A to B with constant speed 1 m/s. Each arrow is 1 m. The displacement of the particle is:
   (A) 2 m
   (B) 3 m
   (C) 4 m
   (D) None of these
   **Answer: A**
   > Source: DTS-1, Q1

**7. [MCQ]** A particle had speed 18 m/s, and 2.5 s later its speed was 30 m/s in the opposite direction. The average acceleration is:
   (A) 19.2 m/s² in initial direction
   (B) 19.2 m/s² opposite to initial direction
   (C) 4.8 m/s² in initial direction
   (D) 4.8 m/s² opposite to initial direction
   **Answer: B**
   > Source: DTS-1, Q3

**8. [MCQ]** A person moves with velocity v₁ for time t, then v₂ for the next equal time. The average velocity is:
   (A) (v₁ + v₂)/2
   (B) √(v₁v₂)
   (C) 2/(1/v₁ + 1/v₂)
   (D) 1/v = 1/v₁ + 1/v₂
   **Answer: A**
   > Source: DTS-1, Q5

**9. [MCQ]** A car covers 2/5 of distance with v₁ and 3/5 with v₂. The average speed is:
   (A) (v₁ + v₂)/2
   (B) √(v₁v₂)
   (C) 2v₁v₂/(v₁ + v₂)
   (D) 5v₁v₂/(3v₁ + 2v₂)
   **Answer: D**
   > Source: DTS-1, Q7

**10. [MCQ]** A 210 m train moves due North at 25 m/s. A bird flies due South at 5 m/s. Time taken by bird to cross the train:
   (A) 6 s
   (B) 7 s
   (C) 9 s
   (D) 10 s
   **Answer: A**
   > Source: DTS-1, Q10

**11. [MCQ]** A car at rest accelerates uniformly to 144 km/h in 20 s. Distance covered:
   (A) 20 m
   (B) 400 m
   (C) 1440 m
   (D) 2880 m
   **Answer: B**
   > Source: DTS-2, Q16

**12. [MCQ]** A particle travels 24 m in first 4 seconds and 64 m in next 4 seconds with uniform acceleration. Initial velocity:
   (A) 1 m/s
   (B) 10 m/s
   (C) 5 m/s
   (D) 2 m/s
   **Answer: B**
   > Source: DTS-2, Q17

**13. [MCQ]** A body starts from rest with uniform acceleration. Ratio of distance in 4th second to 3rd second:
   (A) 7/5
   (B) 5/7
   (C) 7/3
   (D) 3/7
   **Answer: A**
   > Source: DTS-2, Q19

**14. [MCQ]** Stone thrown upward reaches max height 20 m. Initial velocity and time to top (g = 10 m/s²):
   (A) u = 20 m/s, t = 2 s
   (B) u = 10 m/s, t = 1 s
   (C) u = 30 m/s, t = 3 s
   (D) u = 14.7 m/s, t = 1.5 s
   **Answer: A**
   > Source: Kinematics worked example, Section 4

**15. [MCQ]** A ball is dropped from 10 m, rebounds to 2.5 m. Contact time 0.01 s. Average acceleration during contact (g = 9.8 m/s²):
   (A) 2100 m/s² downward
   (B) 2100 m/s² upward
   (C) 1400 m/s² upward
   (D) 700 m/s² downward
   **Answer: B**
   > Source: DTS-2, Q21

**16. [MCQ]** Position-time graph shows two particles at 30° and 60° angles. Velocity ratio VA:VB:
   (A) 1:2
   (B) 1:√3
   (C) √3:1
   (D) 1:3
   **Answer: C**
   > Source: DTS-3, Q31

**17. [MCQ]** A ball thrown vertically upward and returns. Which v-t graph is correct (upward positive):
   (A) V-shaped graph
   (B) Triangular downward
   (C) Linear perpendicular at t=0
   (D) Linear with negative slope
   **Answer: D**
   > Source: DTS-3, Q33

**18. [MCQ]** Velocity of particle: v = (180 - 16x)^(1/2) m/s. Acceleration:
   (A) Zero
   (B) 8 m/s²
   (C) -8 m/s²
   (D) 4 m/s²
   **Answer: C**
   > Source: DTS-4, Q48

**19. [MCQ]** Particle position: x = 32t - (8t³)/3. Acceleration when at rest:
   (A) -16 m/s²
   (B) -32 m/s²
   (C) 32 m/s²
   (D) 16 m/s²
   **Answer: B**
   > Source: DTS-4, Q49

**20. [MCQ]** Body with initial velocity v₀ = 10 m/s experiences retardation 0.2v². Velocity after 2s:
   (A) +2 m/s
   (B) +4 m/s
   (C) -2 m/s
   (D) +6 m/s
   **Answer: A**
   > Source: DTS-4, Q53

---

### KINEMATICS: LEVEL 2 - HARD (DTS 6-11)

**21. [MCQ]** Average velocity of particle with constant acceleration a, initial velocity u in first t second:
   (A) u + (1/2)at
   (B) u + at
   (C) (u + at)/2
   (D) u/2
   **Answer: A**
   > Source: DTS-6, Q76

**22. [MCQ]** Body traverses 1/3 distance at 4 m/s, remaining: 1 m/s for half time, 3 m/s for other half. Mean velocity:
   (A) 2.4 m/s
   (B) 4 m/s
   (C) 1.9 m/s
   (D) 3 m/s
   **Answer: A**
   > Source: DTS-6, Q77

**23. [MCQ]** Three persons A, B, C move with speeds 5, unknown, 10 m/s (same direction). Initial separation A-B and B-C both d. When B catches C, separation A-C becomes 3d. Speed of B:
   (A) 7.5 m/s
   (B) 15 m/s
   (C) 20 m/s
   (D) 5 m/s
   **Answer: A**
   > Source: DTS-6, Q79

**24. [MCQ]** Police jeep chases motorbike. Bike crosses turning at 72 km/h, jeep at 90 km/h, 10 s later. Distance to catch up (in km):
   (A) 2 km
   (B) 3 km
   (C) 5 km
   (D) 7.5 km
   **Answer: C**
   > Source: DTS-6, Q85

**25. [MCQ]** Three particles start from origin with velocities v₁ (x-axis), v₂ (y-axis), v₃ (x=y line). For collinearity:
   (A) √(2v₁v₂)/(v₁ + v₂)
   (B) v₁v₂/(v₁ + v₂)
   (C) √(3v₁v₂)/(v₁ + v₂)
   (D) Zero
   **Answer: A**
   > Source: DTS-6, Q80

---

### MOTION IN 2D: LEVEL 1 (DTS 1-5)

**26. [MCQ]** Particle starts at origin with v = (2i - 4j) m/s and a = (3i - 5j) m/s². Distance from origin after 2 s:
   (A) 10 m
   (B) 20.6 m
   (C) 9.8 m
   (D) 11.7 m
   **Answer: B**
   > Source: Motion in 2D DTS-1, Q1

**27. [MCQ]** Projectile with time of flight 10 s and max height 100 m. Range (g = 10 m/s²):
   (A) 200 m
   (B) 125 m
   (C) 100 m
   (D) Data incorrect
   **Answer: A**
   > Source: Motion in 2D DTS-1, Q3

**28. [MCQ]** Ball thrown for range R = 5T² where T is time of flight. Angle of projection (g = 10 m/s²):
   (A) 30°
   (B) 45°
   (C) 60°
   (D) 90°
   **Answer: A**
   > Source: Motion in 2D DTS-1, Q4

**29. [MCQ]** Projectile at angle 30° has range R₁ and height h₁. At 30° to vertical: range R₂, height h₂. Relation between R₁ and R₂:
   (A) R₁ = R₂/2
   (B) R₁ = R₂
   (C) R₁ = 2R₂
   (D) R₁ = 4R₂
   **Answer: C**
   > Source: Motion in 2D DTS-1, Q6

**30. [MCQ]** At highest point of trajectory, velocity and acceleration directions are:
   (A) Parallel
   (B) Anti-parallel
   (C) At 45°
   (D) Perpendicular
   **Answer: D**
   > Source: Motion in 2D DTS-1, Q8

**31. [MCQ]** Projectile fired at angles 20°, 35°, 60°, 75°. Maximum range at angle:
   (A) 20°
   (B) 35°
   (C) 60°
   (D) 75°
   **Answer: B**
   > Source: Motion in 2D DTS-1, Q10

**32. [MCQ]** Particle projected with speed u makes 45° with horizontal at t=2s, 0° at t=3s. Speed of projection:
   (A) Angle = tan⁻¹(3)
   (B) Angle = tan⁻¹(1/3)
   (C) Speed = 30√2 m/s
   (D) Speed = 30 m/s
   **Answer: D**
   > Source: Motion in 2D DTS-1, Q11

**33. [MCQ]** Body projected with velocity v = (3i + 4j) m/s. Maximum height (g = 10 m/s²):
   (A) 0.8 m
   (B) 8 m
   (C) 80 m
   (D) 800 m
   **Answer: A**
   > Source: Motion in 2D DTS-2, Q20

**34. [MCQ]** Time of flight for v = (3i + 4j) m/s projectile (g = 10 m/s²):
   (A) 0.8 s
   (B) 1.0 s
   (C) 0.4 s
   (D) 2.0 s
   **Answer: C** (corrected from source)
   > Source: Motion in 2D DTS-2, Q21

**35. [MCQ]** Horizontal and vertical displacements: x = 6t m, y = 8t - 5t² m. Range:
   (A) 9.6 m
   (B) 10.6 m
   (C) 19.2 m
   (D) 38.4 m
   **Answer: C**
   > Source: Motion in 2D DTS-2, Q27

**36. [MCQ]** Projectile equation y = √3 x - (gx²)/2. Angle of projection:
   (A) π/6
   (B) π/3
   (C) π/2
   (D) Zero
   **Answer: B**
   > Source: Motion in 2D DTS-2, Q28

---

### MOTION IN 2D: LEVEL 0 (EASY)

**37. [MCQ]** Stone tied to string whirls in circle. When string breaks, stone flies tangentially because:
   (A) Centripetal force ceases
   (B) Inertia of motion
   (C) Gravity acts downward
   (D) Air resistance
   **Answer: B**
   > Source: Motion in 2D Level 0, Q1

**38. [MCQ]** Initial velocity of projectile doubled, keeping angle same. New range is:
   (A) Same
   (B) Doubled
   (C) Quadrupled
   (D) Halved
   **Answer: C**
   > Source: Motion in 2D Level 0, Q2

**39. [MCQ]** Nature of trajectory for uniformly accelerated motion in plane:
   (A) Circular
   (B) Elliptical
   (C) Parabolic
   (D) Linear
   **Answer: C**
   > Source: Motion in 2D Level 0, Q3

**40. [MCQ]** Two cars on concentric circles at same angular speed. Linear speed comparison:
   (A) Inner faster (v = ωr)
   (B) Outer faster (v = ωr)
   (C) Same
   (D) Cannot compare
   **Answer: B**
   > Source: Motion in 2D Level 0, Q4

---

### CIRCULAR MOTION QUESTIONS

**41. [MCQ]** Particle in uniform circular motion. Which remains constant:
   (A) Speed
   (B) Velocity
   (C) Acceleration
   (D) All of above
   **Answer: A**
   > Source: Kinematics Section 10

**42. [MCQ]** Non-uniform circular motion. Speed increasing. Tangential acceleration direction:
   (A) Toward center
   (B) Along velocity
   (C) Radially outward
   (D) Opposite to velocity
   **Answer: B**
   > Source: Kinematics Section 11

**43. [MCQ]** Angular velocity ω = dθ/dt. Linear velocity relation:
   (A) v = ω/r
   (B) v = ωr
   (C) v = r/ω
   (D) v = ω + r
   **Answer: B**
   > Source: Kinematics Section 10

**44. [MCQ]** Centripetal acceleration for circular motion:
   (A) v²/r pointing outward
   (B) v²/r pointing toward center
   (C) rω pointing outward
   (D) Cannot determine
   **Answer: B**
   > Source: Kinematics Section 10

---

### RELATIVE MOTION QUESTIONS

**45. [MCQ]** Three particles meet at triangle center. Each moves toward next at speed v. For equilateral triangle with side a, time to meet:
   (A) a/v
   (B) 2a/(3v)
   (C) 3a/v
   (D) a/(2v)
   **Answer: B**
   > Source: Kinematics Section 12 worked example

**46. [MCQ]** Relative velocity definition:
   (A) v_AB = v_A + v_B
   (B) v_AB = v_A - v_B
   (C) v_AB = |v_A||v_B|
   (D) v_AB = v_B - v_A
   **Answer: B**
   > Source: Kinematics Section 12

**47. [MCQ]** Rain-man problem. Rain velocity v_r, man velocity v_m. Relative velocity:
   (A) v_r + v_m
   (B) v_r - v_m
   (C) √(v_r² + v_m²)
   (D) v_r/v_m
   **Answer: B**
   > Source: Kinematics Section 12

**48. [MCQ]** River crossing at minimum time. Velocity v, current v_c. Drift:
   (A) v × t
   (B) v_c × t
   (C) v_c × d/v
   (D) Zero
   **Answer: C**
   > Source: Kinematics Section 12

---

### NON-UNIFORM ACCELERATION QUESTIONS

**49. [MCQ]** Acceleration increases linearly with time: a = bt. Initial velocity v₀. Distance in time t:
   (A) v₀t + (1/6)bt³
   (B) v₀t + (1/3)bt³
   (C) v₀t + (1/2)bt²
   (D) v₀t + (2/3)bt³
   **Answer: B**
   > Source: DTS-4, Q50

**50. [MCQ]** Velocity-displacement: v = 5√(1 + s). Initial conditions:
   (A) Starts from rest
   (B) Initial velocity 5 m/s, constant acceleration 12.5 m/s²
   (C) Uniform velocity
   (D) Acceleration increases linearly
   **Answer: B**
   > Source: DTS-4, Q51

---

### JEE MAIN ARCHIVE ANSWERS
For reference: C D A C A A D D B B C A B C B A B B A (Questions 1-19)

### JEE ADVANCED ARCHIVE ANSWERS
For reference: C B A A B A A B ABC AC 2 2R πR d/v True (Questions 1-14)
