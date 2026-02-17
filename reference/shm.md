# Simple Harmonic Motion

## Overview
Simple Harmonic Motion (SHM) is a fundamental chapter for JEE Main and Advanced, covering oscillatory and periodic motion, the differential equation of SHM, energy analysis, force analysis in various systems (pendulums, springs, floating bodies), angular oscillations, and superposition of SHMs. It bridges mechanics with wave phenomena and is essential for understanding oscillations in mechanical, electrical, and coupled systems. Mastery of displacement-velocity-acceleration relations, energy methods, and time period calculations for various physical systems is critical for competitive exams.

## 1. Oscillatory and Periodic Motion
### Concepts
- A body is said to possess oscillatory motion if it moves back and forth repeatedly about a mean position (e.g., swinging pendulum, vibratory motion of a mass attached to a spring)
- A motion which repeats itself after equal intervals of time is called a periodic motion (e.g., circular motion, oscillation of a pendulum)
- Every oscillatory motion is a periodic motion, but not every periodic motion is oscillatory (a body moving in a circle is periodic but not oscillatory)

### Formulas
- Time period T: the smallest time interval after which the motion repeats
- Frequency: `nu = 1/T` (in Hz or cycles per second)

### Key Diagram: Oscillatory vs Periodic Motion
- A mass on a spring oscillating back and forth about a mean position (oscillatory and periodic). A particle moving uniformly in a circle (periodic but not oscillatory). [SVG-REF]

### Important Notes
- The mean position (equilibrium position) is the position where the net force on the body is zero
- Oscillatory motion always involves a restoring force directed toward the mean position
- For JEE, the most important type of oscillatory motion is Simple Harmonic Motion

---

## 2. SHM Definition and Differential Equation
### Concepts
- A system executes SHM if the magnitude of the restoring force is directly proportional to the displacement from the mean position and the force is always directed toward the mean position
- Examples: simple pendulum (small angle), vibrating tuning fork, loaded spring
- Consider a particle of mass m executing SHM along the x-axis with mean position at origin: displacement from mean position = x(t)

### Formulas
- Restoring force: `F = -kx` where k is the force constant (spring constant)
- Newton's second law: `ma = -kx`
- Differential equation of SHM: `d^2x/dt^2 = -(k/m) * x`
- General solution: `x(t) = A sin(omega*t + phi_0)` where `omega = sqrt(k/m)`
- Alternative form: `x(t) = A cos(omega*t + phi_0)`
- The equation `d^2x/dt^2 = -omega^2 * x` is the standard differential equation of SHM

### Key Diagram: Particle Executing SHM on x-axis
- A particle oscillating between -A and +A on the x-axis, with mean position at origin O. Force arrows pointing toward O from both sides. [SVG-REF]

### Important Notes
- The key condition for SHM is that the restoring force (or acceleration) must be proportional to displacement and directed opposite to it
- Any equation of the form `d^2y/dt^2 = -omega^2 * y` represents SHM regardless of the variable y
- If displacement is given as `y = a cos(omega*t) + b sin(omega*t)`, the motion is SHM with amplitude `A = sqrt(a^2 + b^2)` and `tan(phi_0) = a/b`

### Worked Example
**Q:** If the displacement of a moving particle at any time is given by `y = a cos(omega*t) + b sin(omega*t)`, show that the motion is SHM. If a = 3, b = 4, omega = 2, find the time period, amplitude, maximum velocity, and maximum acceleration.

**A:**
Step 1: `y = a cos(omega*t) + b sin(omega*t)` can be written as `y = sqrt(a^2 + b^2) sin(omega*t + phi_0)` where `tan(phi_0) = a/b`
Step 2: This is of the form `y = A sin(omega*t + phi_0)`, hence SHM
Step 3: Amplitude `A = sqrt(3^2 + 4^2) = sqrt(25) = 5 m`
Step 4: Time period `T = 2*pi/omega = 2*pi/2 = pi sec`
Step 5: Maximum velocity `v_max = omega*A = 2 x 5 = 10 m/s`
Step 6: Maximum acceleration `a_max = omega^2 * A = 4 x 5 = 20 m/s^2`

---

## 3. Amplitude, Time Period, Frequency, and Phase
### Concepts
- **Amplitude (A):** The magnitude of the maximum displacement on either side of the mean position. From `x(t) = A sin(omega*t + phi_0)`, since max value of sin is 1, we get `-A <= x <= A`
- **Time Period (T):** The time taken to complete one full cycle. The function `x(t)` repeats after an interval of `2*pi/omega`
- **Frequency (nu):** The number of oscillations completed in one second, measured in Hertz (Hz)
- **Angular Frequency (omega):** Equal to `2*pi` times the frequency
- **Phase:** The state of the particle (position and direction of motion) at any instant, measured as the argument of the sine function: `phase = omega*t + phi_0`
- **Initial Phase (phi_0):** The phase constant at t = 0, determined by initial conditions

### Formulas
- Time period: `T = 2*pi/omega = 2*pi * sqrt(m/k)`
- Frequency: `nu = omega/(2*pi) = (1/(2*pi)) * sqrt(k/m)`
- Angular frequency: `omega = 2*pi*nu = 2*pi/T = sqrt(k/m)`
- Initial conditions at t = 0: `x(0) = A sin(phi_0)` and `v(0) = A*omega*cos(phi_0)`

### Key Diagram: Phase and Initial Conditions
- Phasor diagram showing the phase angle (omega*t + phi_0) on a unit circle, with projections giving displacement and velocity. [SVG-REF]

### Important Notes
- If phi_0 = pi/2, then x(0) = A and v(0) = 0: particle starts from the right extreme position
- If phi_0 = 0, then x(0) = 0 and v(0) = A*omega (positive): particle starts from mean position moving in +x direction
- If particle starts at t = 0 from mean position: `x(t) = A sin(omega*t)` (positive initial velocity) or `x(t) = -A sin(omega*t)` (negative initial velocity)
- If particle starts at t = 0 from right extreme: `x(t) = A cos(omega*t)`
- If particle starts at t = 0 from left extreme: `x(t) = -A cos(omega*t)`
- The time period and frequency are independent of amplitude in SHM (isochronous property)

---

## 4. Velocity and Acceleration in SHM
### Concepts
- The velocity of a particle in SHM is obtained by differentiating the displacement equation
- The acceleration is obtained by differentiating the velocity (or double-differentiating displacement)
- Velocity is maximum at mean position and zero at extremes
- Acceleration is zero at mean position and maximum at extremes
- Velocity and displacement are 90 degrees out of phase; acceleration and displacement are 180 degrees out of phase

### Formulas
- Velocity as function of time: `v(t) = A*omega*cos(omega*t + phi_0)`
- Velocity as function of position: `v(x) = +/- omega * sqrt(A^2 - x^2)`
- Maximum velocity (at mean position): `|v|_max = omega*A`
- Minimum velocity (at extremes): `v = 0`
- Acceleration as function of time: `a(t) = -omega^2 * A * sin(omega*t + phi_0)`
- Acceleration as function of position: `a(x) = -omega^2 * x`
- Maximum acceleration (at extremes): `|a|_max = omega^2 * A`
- Minimum acceleration (at mean position): `a = 0`

### Key Diagram: Velocity and Acceleration vs Displacement
- Graph showing v vs x as an ellipse: `v = +/- omega * sqrt(A^2 - x^2)`. Graph showing a vs x as a straight line through origin with negative slope: `a = -omega^2 * x`. [SVG-REF]

### Important Notes
- The +/- sign in `v(x) = +/- omega * sqrt(A^2 - x^2)` indicates that at any position the particle passes with equal and opposite velocities (once going right, once going left)
- The velocity-displacement relation can be rewritten as an ellipse: `v^2/(omega*A)^2 + x^2/A^2 = 1`
- Force on the particle at any position: `F(x) = -m*omega^2 * x = -kx`
- Force is maximum at extreme positions: `|F|_max = m*omega^2 * A`
- There is no force on the particle at mean position (mean position is a position of stable equilibrium)

### Worked Example
**Q:** A 50 gm mass vibrates in SHM at the end of a spring. The amplitude is 12 cm and the time period is 1.70 s. Find: (a) frequency, (b) spring constant, (c) maximum speed, (d) maximum acceleration, (e) speed when displacement is 6 cm.

**A:**
(a) `nu = 1/T = 1/1.7 = 0.588 Hz`
(b) `T = 2*pi*sqrt(m/k_s)` => `k_s = 4*pi^2 * m / T^2 = 4*pi^2 * 0.05 / (1.7)^2 = 0.68 N/m`
(c) `v_max = omega*A = (2*pi/T)*A = (2*pi/1.7)*0.12 = 0.44 m/s`
(d) `a_max = omega^2 * A = (4*pi^2/T^2)*A = (4*pi^2/(1.7)^2)*0.12 = 1.63 m/s^2`
(e) `v(x) = omega*sqrt(A^2 - x^2) = (2*pi/1.7)*sqrt(0.12^2 - 0.06^2) = 0.38 m/s`

---

## 5. Energy in SHM (KE, PE, TE)
### Concepts
- A particle in SHM has kinetic energy due to its velocity and potential energy due to its displacement from mean position
- KE varies periodically, is maximum at mean position and zero at extremes
- PE varies periodically, is minimum at mean position and maximum at extremes
- Total mechanical energy remains constant (conserved) at all positions and all times, provided no energy dissipation occurs
- Both KE and PE oscillate with frequency 2*omega (i.e., twice the frequency of SHM)

### Formulas
- Kinetic energy: `K = (1/2)*m*v^2 = (1/2)*m*omega^2*(A^2 - x^2)`
- `K_max = (1/2)*m*omega^2*A^2 = (1/2)*k*A^2` (at mean position, x = 0)
- `K_min = 0` (at extremes, x = +/-A)
- Potential energy (taking PE = 0 at mean position): `U(x) = (1/2)*k*x^2`
- In general: `U(x) = U(0) + (1/2)*k*x^2`
- `U_max = (1/2)*k*A^2` (at extremes)
- `U_min = 0` (at mean position, if reference PE = 0 there)
- Total energy: `TE = K + U = (1/2)*k*A^2 + U(0)`
- If U(0) = 0: `TE = (1/2)*k*A^2 = (1/2)*m*omega^2*A^2` (constant)

### Key Diagram: Energy vs Displacement in SHM
- Graph with x on horizontal axis from -A to +A. KE curve is an inverted parabola (max at x = 0). PE curve is an upward parabola (max at x = +/-A). TE is a horizontal straight line. KE and PE intersect at `x = +/- A/sqrt(2)`. [SVG-REF]

### Important Notes
- At `x = +/- A/sqrt(2)`, the KE equals the PE, and each equals half the total energy
- The ratio KE:PE at `x = A/2` is 3:1; at `x = A*sqrt(3)/2` is 1:3
- KE as a function of time: `K = (1/2)*m*omega^2*A^2*cos^2(omega*t + phi_0)`. This oscillates with angular frequency `2*omega`, hence frequency of KE oscillation is `2f` (twice the SHM frequency)
- When energy is half kinetic and half potential: `KE = U => (1/2)*k*A^2 = 2*(1/2)*k*x^2 => x = +/- A/sqrt(2)`
- Total energy is proportional to the square of the amplitude: `TE proportional to A^2`

### Worked Example
**Q:** A particle of mass 0.2 kg undergoes SHM according to `x(t) = 3 sin(pi*t + pi/4)`. Find: (a) time period, (b) initial conditions, (c) total energy if PE at mean position is zero.

**A:**
(a) Comparing with `x = A sin(omega*t + phi_0)`: A = 3 m, omega = pi rad/s, phi_0 = pi/4. `T = 2*pi/omega = 2*pi/pi = 2 sec`
(b) `x(0) = 3 sin(pi/4) = 3/(sqrt(2)) = 1.5*sqrt(2) m`. `v(0) = 3*pi*cos(pi/4) = 3*pi/sqrt(2) m/s`
(c) `TE = (1/2)*m*omega^2*A^2 = (1/2)*(0.2)*(pi)^2*(3)^2 = 0.9*pi^2 J`

---

## 6. Analysis of Forces in SHM
### Concepts
- To identify SHM in a given physical system, follow these steps:
  1. Displace the particle from the mean (equilibrium) position by a distance x along the line of SHM
  2. Analyse the forces on the particle and show that: (a) the net force is proportional to x, and (b) the force is directed toward the mean position (restoring nature)
  3. Find the proportionality constant k from the expression for the magnitude of force: `F = kx`
  4. Find the time period using `T = 2*pi*sqrt(m/k)`
- This method applies to all SHM systems: springs, pendulums, floating bodies, liquid columns, etc.

### Formulas
- General SHM condition: `F_net = -kx` (restoring, proportional to displacement)
- Time period: `T = 2*pi*sqrt(m/k)` where k is the effective force constant
- Angular frequency: `omega = sqrt(k/m)`

### Key Diagram: Force Analysis Method
- A general system displaced by x from equilibrium. Arrow showing restoring force F directed back toward equilibrium, with magnitude proportional to x. [SVG-REF]

### Important Notes
- The mean position is always the position of stable equilibrium (net force = 0, and any small displacement results in a restoring force)
- For vertical spring systems, the equilibrium elongation d cancels out in the force analysis, and the time period is the same as for a horizontal spring: `T = 2*pi*sqrt(m/k_s)`
- For a block on a piston executing vertical SHM: the block separates from the piston when the normal reaction becomes zero, i.e., when `omega^2*A >= g`
- For a book on an oscillating platform: to maintain contact, `N_min >= 0`, which requires `omega^2*A <= g`

### Worked Example
**Q:** A horizontal platform executes SHM in a vertical line with time period pi sec and amplitude 0.5 m. A book of mass 2 kg is placed on the platform. Find the greatest and least values of the force exerted by the book on the platform.

**A:**
Step 1: `omega = 2*pi/T = 2*pi/pi = 2 rad/s`, A = 0.5 m, m = 2 kg
Step 2: At bottom extreme, N is maximum: `N_max = mg + m*omega^2*A = 2*9.8 + 2*4*0.5 = 19.6 + 4 = 23.6 N`
Step 3: At top extreme, N is minimum: `N_min = mg - m*omega^2*A = 19.6 - 4 = 15.6 N`
Step 4: Contact is maintained since N_min > 0

---

## 7. Simple Pendulum
### Concepts
- A simple pendulum is an idealised body consisting of a point mass (bob) suspended by a light, inextensible string from a fixed support
- When pulled to one side and released, the bob oscillates about its equilibrium (lowest) position
- The forces on the bob are: weight mg (vertically downward) and tension T (along the string toward the support)
- The component `mg cos(theta)` balances the tension; the component `mg sin(theta)` is the tangential restoring force
- For small angular displacement (theta << 1): `sin(theta) ~ theta` (in radians), so the restoring force becomes proportional to displacement, giving SHM

### Formulas
- Restoring force: `F = mg sin(theta) ~ mg*theta = mg*(x/l)` for small theta, where x = arc length and l = string length
- Force constant: `k = mg/l`
- Time period: `T = 2*pi*sqrt(l/g)`
- Frequency: `nu = (1/(2*pi))*sqrt(g/l)`
- Angular frequency: `omega = sqrt(g/l)`
- Maximum tension in string (at lowest point): `T_max = mg(1 + theta_m^2)` where theta_m is the angular amplitude (small angle)

### Key Diagram: Simple Pendulum
- A bob of mass m attached to a string of length l, making angle theta with the vertical. Forces shown: weight mg resolved into mg*cos(theta) (along string) and mg*sin(theta) (tangential, restoring). Tension T along the string toward the support. [SVG-REF]

### Important Notes
- The time period of a simple pendulum is independent of the mass of the bob and the amplitude (for small angles) -- this is the property of isochronism
- The time period depends only on the length l and the acceleration due to gravity g
- For a pendulum in a lift accelerating upward with acceleration a: `T = 2*pi*sqrt(l/(g+a))`
- For a pendulum in a lift accelerating downward: `T = 2*pi*sqrt(l/(g-a))`
- In free fall (g_eff = 0): the pendulum does not oscillate (T -> infinity)
- A particle sliding inside a smooth hemispherical bowl of radius R executes SHM with `omega = sqrt(g/R)` for small displacements (equivalent to a simple pendulum of length R)

### Worked Example
**Q:** A simple pendulum 4 m long swings with an amplitude of 0.2 m. What is its acceleration at the ends of its path? (g = 10 m/s^2)

**A:**
Step 1: At the extreme, the tangential acceleration is `a = g*sin(theta)`
Step 2: For small theta: `sin(theta) ~ tan(theta) = 0.2/4 = 0.05`
Step 3: `a = 10 * 0.05 = 0.5 m/s^2`

---

## 8. Spring-Mass Systems
### Concepts

#### (a) Horizontal Spring
- A block of mass m on a smooth horizontal surface is connected to a spring of force constant k_s, with the other end fixed
- When the spring is in its natural (undeformed) length, the block is in equilibrium
- If displaced by distance x, the spring exerts a restoring force `F = k_s * x` toward the mean position
- The block executes SHM with the spring's natural length position as the mean position

#### (b) Vertical Spring
- A spring is suspended vertically and carries a block of mass m at its free end
- At equilibrium, the spring elongates by d such that `k_s * d = mg`
- If displaced by x from equilibrium, the net restoring force is: `F = k_s*(d+x) - mg = k_s*x` (since k_s*d = mg)
- The block executes SHM about the equilibrium position (NOT the natural length position)
- The time period is the same as for the horizontal case

### Formulas
- Horizontal spring: `T = 2*pi*sqrt(m/k_s)`, mean position at natural length
- Vertical spring: `T = 2*pi*sqrt(m/k_s)`, mean position at equilibrium (spring elongated by d = mg/k_s)
- Equilibrium elongation: `d = mg/k_s`
- In both cases: `omega = sqrt(k_s/m)`

### Key Diagram: Horizontal and Vertical Spring-Mass Systems
- Horizontal: block on surface connected to wall-fixed spring, shown at equilibrium and displaced by x. Vertical: spring hanging from support with block, shown undeformed, at equilibrium (elongation d), and displaced further by x. [SVG-REF]

### Important Notes
- For a vertical spring, gravity only determines the equilibrium position but does NOT affect the time period
- The time period formula `T = 2*pi*sqrt(m/k_s)` is the same for both horizontal and vertical springs
- If the spring has mass M_s (not massless), the effective mass becomes `m + M_s/3` for a spring with uniform mass distribution
- The force constant of a spring is inversely proportional to its natural length: `k * l = constant`. If a spring of constant k and length l is cut into parts, each part has a higher force constant

### Worked Example
**Q:** A spring of force constant k is cut into two parts whose lengths are in the ratio 1:2. The two parts are now connected in parallel and a block of mass m is suspended at the end. Find the period of oscillation.

**A:**
Step 1: Let l be the original length. Lengths are l/3 and 2l/3
Step 2: Force constant is inversely proportional to length: `k*l = k_1*(l/3) = k_2*(2l/3)`
Step 3: `k_1 = 3k` and `k_2 = 3k/2`
Step 4: Parallel combination: `k_eff = k_1 + k_2 = 3k + 3k/2 = 9k/2`
Step 5: Time period = `2*pi*sqrt(m/k_eff) = 2*pi*sqrt(2m/(9k))`

---

## 9. Combinations of Springs (Series, Parallel)
### Concepts

#### Springs in Series
- When two springs of force constants K_1 and K_2 are connected end-to-end (in series), they are equivalent to a single spring of force constant K
- In series, both springs experience the same force, but the total extension is the sum of individual extensions

#### Springs in Parallel
- When two springs of force constants K_1 and K_2 are connected side-by-side (in parallel), the effective force constant is the sum
- In parallel, both springs have the same extension, but the total restoring force is the sum of individual forces
- Two springs attached to a block from opposite sides (e.g., on an inclined plane) also act as parallel combination

### Formulas
- Series combination: `1/K = 1/K_1 + 1/K_2` => `K = K_1*K_2/(K_1 + K_2)`
- Parallel combination: `K = K_1 + K_2`
- For n springs in series: `1/K = 1/K_1 + 1/K_2 + ... + 1/K_n`
- For n springs in parallel: `K = K_1 + K_2 + ... + K_n`
- Time period with equivalent spring: `T = 2*pi*sqrt(m/K_eff)`

### Key Diagram: Series and Parallel Spring Combinations
- Series: two springs K_1 and K_2 connected end-to-end vertically, equivalent to single spring K = K_1*K_2/(K_1+K_2). Parallel: two springs K_1 and K_2 side-by-side, equivalent to single spring K = K_1 + K_2. [SVG-REF]

### Important Notes
- In series combination, the weaker spring (smaller k) dominates and the effective constant is less than the smallest individual constant
- In parallel combination, the effective constant is greater than the largest individual constant
- If T_1 and T_2 are time periods with springs separately, then for parallel combination: `1/T^2 = 1/T_1^2 + 1/T_2^2`
- If a spring of constant k is cut into n equal parts, each part has constant nk. If those n parts are connected in parallel, the effective constant is n^2*k
- For two springs attached from opposite sides of a mass on a smooth incline, the effective constant is `k_eff = k_1 + k_2` (parallel), and the incline angle does not affect the time period

### Worked Example
**Q:** Let T_1 and T_2 be the time periods of two springs A and B when a mass m is suspended from them separately. Now both springs are connected in parallel and the same mass m is suspended. Find the time period T.

**A:**
Step 1: `T_1 = 2*pi*sqrt(m/k_1)` and `T_2 = 2*pi*sqrt(m/k_2)`
Step 2: In parallel: `k = k_1 + k_2`
Step 3: `T = 2*pi*sqrt(m/k) = 2*pi*sqrt(m/(k_1 + k_2))`
Step 4: From T_1 and T_2: `k_1 = 4*pi^2*m/T_1^2` and `k_2 = 4*pi^2*m/T_2^2`
Step 5: `1/T^2 = (k_1 + k_2)/(4*pi^2*m) = 1/T_1^2 + 1/T_2^2`

---

## 10. Physical Pendulum and Torsional Pendulum
### Concepts

#### Physical (Compound) Pendulum
- A rigid body suspended from a fixed point O, free to oscillate in a vertical plane about a horizontal axis through O
- Let C be the centre of gravity and d be the distance from O to C
- When displaced by small angle theta, the weight creates a restoring torque about O
- The restoring torque is: `tau = -mg*d*sin(theta) ~ -mg*d*theta` (for small theta)
- Comparing with angular SHM condition `tau = -C*theta`, we get `C = mgd`

#### Torsional Pendulum
- A rigid body (e.g., a disc) suspended by a wire attached to its centre
- When the body is rotated in the horizontal plane, the twisted wire exerts a restoring torque proportional to the angular displacement
- Restoring torque: `tau = -C*theta` where C is the torsional constant of the wire
- This is angular SHM

### Formulas
- **Physical pendulum:** `T = 2*pi*sqrt(I/(mgd))` where I = moment of inertia about the axis through O, d = distance from pivot to centre of gravity
- Using parallel axis theorem: `I = I_cm + m*d^2`
- **Torsional pendulum:** `T = 2*pi*sqrt(I/C)` where I = moment of inertia about the axis of the wire, C = torsional constant

### Key Diagram: Physical Pendulum
- An irregular rigid body suspended from point O. Centre of gravity C is at distance d below O. Body displaced by angle theta, showing restoring torque tau = mgd*sin(theta) about O. [SVG-REF]

### Important Notes
- For a physical pendulum, the time period depends on the distribution of mass (through I) and the distance d of the centre of gravity from the pivot
- A simple pendulum is a special case of a physical pendulum where all mass is concentrated at a point (I = m*l^2, d = l), giving `T = 2*pi*sqrt(l/g)`
- For a uniform rod of length l suspended from one end: `I = ml^2/3`, `d = l/2`, so `T = 2*pi*sqrt(2l/(3g))`
- For a meter stick pivoted at the 75 cm mark: d = 25 cm from centre, `I = ml^2/12 + md^2`, and `T = 2*pi*sqrt((l^2 + 12d^2)/(12gd))`

#### Comparison of Linear and Angular SHM

| Linear SHM | Angular SHM |
|---|---|
| F = -kx | tau = -C*theta |
| T = 2*pi*sqrt(m/k) | T = 2*pi*sqrt(I/C) |
| x(t) = A sin(omega*t + phi_0) | theta(t) = theta_max sin(omega*t + phi_0) |
| v(t) = A*omega*cos(omega*t + phi_0) | Omega(t) = theta_max*omega*cos(omega*t + phi_0) |
| v(x) = +/- omega*sqrt(A^2 - x^2) | Omega(theta) = +/- omega*sqrt(theta_max^2 - theta^2) |
| a(x) = -omega^2*x | alpha(theta) = -omega^2*theta |

- Note: Angular velocity at any instant is Omega (capital), while omega is the angular frequency of the SHM

### Worked Example
**Q:** What is the period of the pendulum formed by pivoting a meter stick so that it is free to rotate about a horizontal axis passing through the 75 cm mark?

**A:**
Step 1: l = 100 cm = 1 m, d = distance from pivot to centre of gravity = |75 - 50| = 25 cm = 0.25 m
Step 2: Moment of inertia about pivot: `I = ml^2/12 + md^2` (parallel axis theorem)
Step 3: `T = 2*pi*sqrt(I/(mgd)) = 2*pi*sqrt((l^2 + 12d^2)/(12gd))`
Step 4: `T = 2*pi*sqrt((1 + 12*(0.25)^2)/(12*9.8*0.25)) = 2*pi*sqrt((1 + 0.75)/29.4) = 2*pi*sqrt(1.75/29.4) = 1.53 s`

---

## 11. Superposition of SHMs
### Concepts
- When two or more SHMs act on a particle simultaneously, the resultant displacement is the vector sum of individual displacements
- Two SHMs in the same direction (along the same line): the resultant is also an SHM if both have the same frequency
- Two perpendicular SHMs: the trajectory can be a straight line, circle, or ellipse depending on the amplitudes and phase difference

### Formulas
- Two SHMs in the same direction with same frequency: `x_1 = A sin(omega*t)` and `x_2 = A cos(omega*t)`
  - Resultant: `x = x_1 + x_2 = A*sqrt(2) sin(omega*t + pi/4)`
  - Resultant amplitude = `A*sqrt(2)`, same time period, initial phase = pi/4
- General case: `x_1 = A_1 sin(omega*t + phi_1)` and `x_2 = A_2 sin(omega*t + phi_2)`
  - Resultant amplitude: `A_R = sqrt(A_1^2 + A_2^2 + 2*A_1*A_2*cos(phi_2 - phi_1))`
- Two perpendicular SHMs: `x = A sin(omega*t)` and `y = A cos(omega*t)`
  - Eliminating t: `x^2 + y^2 = A^2` (circular motion with radius A and angular velocity omega)

### Key Diagram: Superposition of Two SHMs
- Two SHMs along the same line combining to give a resultant SHM with larger amplitude. Two perpendicular SHMs of equal amplitude and 90-degree phase difference producing circular motion. [SVG-REF]

### Important Notes
- Superposition of two SHMs of slightly different frequencies produces beats: `x = a cos(2.1t) cos(50t)` represents a modulated oscillation. The constituent frequencies are omega_1 = 52.1 rad/s and omega_2 = 47.9 rad/s; the beat frequency = |omega_1 - omega_2|/(2*pi)
- If two SHMs have the same amplitude and same frequency but a phase difference of pi, they cancel (destructive superposition)
- If phase difference = 0, they add up (constructive superposition): resultant amplitude = A_1 + A_2
- For two perpendicular SHMs with different frequencies, the trajectory is a Lissajous figure

---

## 12. Damped and Forced Oscillations
### Concepts

#### Damped Oscillations
- In real systems, oscillations gradually die out due to frictional or resistive forces (air resistance, viscosity, etc.)
- The amplitude of oscillation decreases with time
- If the damping force is proportional to velocity: `F_damping = -b*v`, the motion is called damped harmonic motion
- The displacement decays exponentially: `x(t) = A_0 * e^(-b*t/(2m)) * sin(omega_d*t + phi_0)` where omega_d is the damped angular frequency

#### Forced Oscillations and Resonance
- When an external periodic force is applied to an oscillating system, the oscillations are called forced oscillations
- The system eventually oscillates at the frequency of the driving force (not its natural frequency)
- Resonance occurs when the driving frequency equals the natural frequency of the system -- the amplitude of oscillation becomes maximum
- At resonance, maximum energy transfer occurs from the driving force to the system

### Formulas
- Damped angular frequency: `omega_d = sqrt(omega_0^2 - (b/(2m))^2)` where omega_0 = natural frequency
- For resonance condition: `omega_driving = omega_0 = sqrt(k/m)`
- Quality factor: `Q = omega_0/(2*b/m)` (higher Q means sharper resonance and less damping)

### Key Diagram: Damped Oscillation and Resonance Curve
- Damped oscillation: displacement vs time graph showing sinusoidal oscillation with exponentially decaying envelope. Resonance curve: amplitude vs driving frequency graph showing a peak at omega = omega_0, sharper for lower damping. [SVG-REF]

### Important Notes
- If damping is very large (`b/(2m) > omega_0`), the system is overdamped and returns to equilibrium without oscillating
- If `b/(2m) = omega_0`, the system is critically damped (fastest return to equilibrium without oscillation)
- If `b/(2m) < omega_0`, the system is underdamped and oscillates with decreasing amplitude
- Examples of resonance: soldiers breaking step on a bridge (to avoid resonance), tuning a radio (matching circuit frequency to broadcast frequency), Tacoma Narrows Bridge collapse
- In JEE, damped and forced oscillations are mostly conceptual; focus on understanding resonance condition and energy considerations

---

## Additional Important Systems for JEE

### Liquid Oscillating in a U-Tube
- A liquid column of total length 2l in a U-tube (uniform cross-section A) displaced by distance x from equilibrium
- Restoring force: `F = (2x)*rho*g*A = (2*A*rho*g)*x`
- Force constant: `k = 2*A*rho*g`
- Time period: `T = 2*pi*sqrt(l/g)` (equivalent to a simple pendulum of length l)

### Cylinder Floating in a Liquid
- A cylinder of mass m, density d, length L, and cross-section A floating in a liquid of density rho with immersed length l at equilibrium
- At equilibrium: `L*d = l*rho` (flotation condition)
- If displaced by x downward, the net restoring force is: `F = A*rho*g*x`
- Force constant: `k = A*rho*g`
- Time period: `T = 2*pi*sqrt(m/(A*rho*g)) = 2*pi*sqrt(l/g)` (depends only on the immersed length)

### Rolling Body on Spring
- A solid cylinder of mass m attached to a spring (constant k) rolling without slipping on a horizontal surface
- Both translational and rotational KE must be considered
- For a solid cylinder (`I_cm = mR^2/2`): `T = 2*pi*sqrt(3m/(2k))`

---

<!-- QUESTIONS SECTION BELOW -->

---

## ANSWER KEYS

### Level 1 Answer Key

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|----|---|---|---|---|---|---|---|---|---|----|----|----|----|----|----|
| Ans | C | A | B | A | A | C | A | A | A | A | A | B | A | D | A |
| Q# | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
| Ans | D | B | B | C | C | D | A | D | B | B | C | B | A | A | B |
| Q# | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 |
| Ans | D | C | B | C | A | B | A | A | C | A | B | C | C | D | C |
| Q# | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 |
| Ans | B | A | B | A | B | B | B | B | B | A | B | D | C | A | A |
| Q# | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 |
| Ans | 8 | 0.4 | 1 | 5 | 4 | 0.15 | 1 | 4 | 0.1 | 8 | 1 | 2 | 4 | 6 | 4 |

### Level 2 Answer Key

| Q# | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|-----|
| Ans | D | A | C | A | B | D | BC | ABCD | ABD | A-R; B-P; C-Q; D-S | A | B | C |
| Q# | 89 | 90 | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99 | 100 | 101 | 102 | 103 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|-----|-----|-----|
| Ans | B | A | B | ABC | B | A | C | C | B | 2 | B | B | B | A | D |
| Q# | 104 | 105 | 106 | 107 | 108 | 109 | 110 | 111 | 112 | 113 | 114 | 115 |
|----|------|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
| Ans | A-P; B-Q; C-P; D-S | 2 | B | A | C | B | D | AD | B | B | C | 5 |

### JEE Main (Archive) Answer Key

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|----|---|---|---|---|---|---|---|---|---|----|----|----|----|----|----|
| Ans | B | C | B | C | D | C | A | C | C | D | C | B | A | D | A |
| Q# | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
| Ans | B | A | A | A | B | C | D | D | C | B | D | B | B | A | D |
| Q# | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 |
| Ans | B | B | B | B | D | C | B | B | A | B | A | B | C | D | C |
| Q# | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 |
|----|----|----|----|----|----|----|----|----|----|----|-----|
| Ans | B | A | D | B | D | D | C | None | None | None | D |

### JEE Advanced (Archive) Answer Key

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|----|---|---|---|---|---|---|---|---|---|----|----|----|----|----|----|
| Ans | D | D | B | A | D | A | A | A | C | A | B | D | C | B | A |
| Q# | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
| Ans | BC | AC | BD | AD | AD | BD | ABD | A | D | D | C | C | B | D | D |
| Q# | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 |
|----|----|----|----|----|----|----|----|----|-----|
| Ans | C | B | A-P; B-Q, R; C-P; D-Q, R | A-P, S; B-Q, S; C-S; D-Q | 1.6 | 2 | 2 | 4 | 2.09 |
| Q# | 40 | 41 | 42 | 43 | 44 | 45 | 46 |
|----|----|----|----|----|----|----|-----|
| Ans | (1/2pi)sqrt(gamma(p0A^2+MgA)/(V0M)) | sqrt(k/m2), m1g/k | 1:1 | (i) tan^-1(1/5), (ii) 2.5sqrt(R) | 0.06 | omega=sqrt(3g(d2-d1)/(2Ld1)) | g/omega^2 |

---

### SHM: LEVEL 0 (EASY)
*Source: DTS-0 (CBSE Pattern)*

**VSA: Very Short Answer Type (1 mark)**

**1.** Can a motion be periodic but not oscillatory? Give example.

**2.** What is simple harmonic motion?

**3.** What is the **(i)** distance moved **(ii)** displacement of a particle executing SHM in one complete vibration?

**4.** What is the phase relationship between displacement, velocity and acceleration in SHM?

**5.** The position of a particle executing SHM is given by x = A sin(omega*t). Write the expression for the velocity of the particle.

**SA-I: Short Answer Type I (2 marks)**

**6.** State whether the following examples represent periodic motion?
- **(i)** A freely suspended bar magnet displaced from its N-S direction and released.
- **(ii)** An arrow released from a bow.

**7.** Which of the following examples represent (nearly) simple harmonic motion and which represent periodic but not simple harmonic motion?
- **(i)** The rotation of earth about its axis.
- **(ii)** Motion of an oscillating mercury column in a U-tube.

**8.** A spring balance extends 20 cm if a 50 kg block is suspended from it. A body suspended from this balance, when displaced and released, oscillates with a period of 0.6 s. What is the weight of the body?

**9.** The piston in the cylinder head of a locomotive has a stroke (twice the amplitude) of 1.0 m. If the piston moves with simple harmonic motion with an angular frequency of 200 rad/min, what is its maximum speed?

**10.** The soldiers marching on a suspended bridge are advised to go out of steps. Why?

**11.** Two exactly identical pendulums are executing SHMs with amplitudes a and na respectively. Calculate the ratio of their energies of oscillation.

**12.** Find the displacement of a simple harmonic oscillator at which its potential energy is half of the maximum energy of the oscillator.

**SA-II: Short Answer Type II (3 marks)**

**13.** A particle is in linear simple harmonic motion between two points, A and B, 10 cm apart. Take the direction from A to B as the positive direction and give the signs of velocity, acceleration and force on the particle when it is
- **(i)** at the end A. **(ii)** at the end B.
- **(iii)** at the mid-point of AB going towards A. **(iv)** at 2 cm away from B going towards A.
- **(v)** at 3 cm away from A going towards B. **(vi)** at 4 cm away from B going towards A.

**14.** The motion of a particle executing simple harmonic motion is described by the displacement function, x(t) = A cos(omega*t + phi). If the initial (t = 0) position of the particle is 1 cm and its initial velocity is omega cm/s, what are its amplitude and initial phase angle? The angular frequency of the particle is pi s^-1. If instead of the cosine function, we choose the sine function to describe the SHM: x = B sin(omega*t + alpha), what are the amplitude and initial phase of the particle with the above initial conditions?

**15.** A spring having with a spring constant 1200 N/m is mounted on a horizontal table as shown. A mass of 3 kg is attached to the free end of the spring. The mass is then pulled sideways to a distance of 2.0 cm and released. Determine
- **(i)** the frequency of oscillations.
- **(ii)** maximum acceleration of the mass.
- **(iii)** the maximum speed of the mass.

**16.** Figures correspond to two circular motions. The radius of the circle, the period of revolution, the initial position, and the sense of revolution (i.e. clockwise or anti-clockwise) are indicated on each figure. (i) T = 2s, radius = 3 cm, clockwise. (ii) T = 4s, radius = 2 m, anticlockwise. Obtain the corresponding simple harmonic motions of the x-projection of the radius vector of the revolving particle P, in each case.

**17.** The acceleration due to gravity on the surface of moon is 1.7 m/s^2. What is the time period of a simple pendulum on the surface of moon if its time period on the surface of earth is 3.5 s? (g on the surface of earth is 9.8 m/s^2)

**18.** Cylindrical piece of cork of density rho, of base area A and height h floats in a liquid. The cork is depressed slightly and then released. Show that the cork oscillates up and down simple harmonically with a period T = 2*pi*sqrt(h*rho/(rho_l*g)) where rho is the density of cork and rho_l is the density of the liquid. (Ignore damping due to viscosity of the liquid.)

**19.** A body describes simple harmonic motion with amplitude of 5 cm and a period of 0.2 s. Find the acceleration and velocity of the body when the displacement is **(i)** 5 cm **(ii)** 3 cm **(iii)** 0 cm

**20.** Show that for a particle in linear SHM, the average kinetic energy over a period of oscillation equals the average potential energy over the same period.

**21.** Explain damped harmonic oscillation and the equation of such oscillations.

**22.** A simple pendulum of length l and having a bob of mass M is suspended in a car. The car is moving on a circular track of radius R with a uniform speed v. If the pendulum makes small oscillations in a radial direction about its equilibrium position, what will be its time period?

**23.** A mass attached to a spring is free to oscillate, with angular velocity omega, in a horizontal plane without friction or damping. It is pulled to a distance x_0 and pushed towards the centre with a velocity v_0 at time t = 0. Determine the amplitude of the resulting oscillations in terms of the parameters omega, x_0 and v_0.

**24.** A circular disc of mass 10 kg is suspended by a wire attached to its centre. The wire is twisted by rotating the disc and released. The period of torsional oscillations is found to be 1.5 s. The radius of the disc is 15 cm. Determine the torsional spring constant of the wire. (Torsional spring constant alpha is defined by the relations J = -alpha*theta, where J is the restoring couple and theta the angle of twist.)

**LA: Long Answer Type (5 marks)**

**25.** Which of the following functions of time represent (a) simple harmonic, (b) periodic but not simple harmonic, and (c) non periodic motion (omega is any positive constant):
- **(i)** sin(omega*t) - cos(omega*t) **(ii)** sin^3(omega*t)
- **(iii)** 3cos(pi/4 - 2*omega*t) **(iv)** cos(omega*t) + cos(3*omega*t) + cos(5*omega*t)
- **(v)** exp(-omega^2*t^2) **(vi)** 1 + omega*t + omega^2*t^2

**26.** **(i)** One end of a U-tube containing mercury is connected to a suction pump and the other end to atmosphere. A small pressure difference is maintained between the two columns. Show that, when the suction pump is removed, the column of mercury in the U-tube executes simple harmonic motion. Find the time period of oscillation if length of mercury column in the tube is 2l.

**(ii)** An air chamber of volume V has a neck area of cross section a into which a ball of mass m just fits and can move up and down without any friction. Show that when the ball is pressed down a little and released, it executes SHM. Obtain an expression for the time period of oscillations assuming pressure-volume variations of air to be isothermal.

**27.** You are riding in an automobile of mass 3000 kg. Assuming that you are examining the oscillation characteristics of its suspension system, the suspension sags 15 cm when the entire automobile is placed on it. Also, the amplitude of oscillation decreases by 50% during one complete oscillation. Estimate the values of **(i)** the spring constant k and **(ii)** the damping constant b. For the spring and shock absorber system of one wheel, assuming that each wheel supports 750 kg.

---

### SHM: LEVEL 1
*Source: DTS-1 (Kinematics of SHM, Energy in SHM), DTS-2 (Superposition of SHM, Spring-block systems), DTS-3 (Angular SHM, SHM in different systems)*

#### DTS-1: Kinematics of SHM, Energy in SHM

**1.** Which of the following relationships between the acceleration a and the displacement x of a particle involve simple harmonic motion?
(A) a = 0.7x (B) a = -200x^2 (C) a = -10x (D) a = 100x^3

**2.** Two particles execute simple harmonic motion of the same amplitude and frequency along close parallel lines. They pass each other moving in opposite directions each time their displacement is half their amplitude. What is their phase difference?
(A) 2pi/3 (B) pi/3 (C) 4pi/3 (D) 3pi/4

**3.** A mass m = 100 gm is attached at the end of a light spring oscillates on a frictionless horizontal table with an amplitude equal to 0.16 meter and time period equal to 2 sec. Initially the mass is released from rest at t = 0 and displacement x = -0.16 meter. The expression for the displacement of mass at any time t is:
(A) x = 0.16 cos(pi*t) (B) x = -0.16 cos(pi*t) (C) x = 0.16 sin(pi*t + pi) (D) x = -0.16 sin(pi*t + pi)

**4.** The displacement of an object attached to a spring and executing simple harmonic motion is given by x = 2 x 10^-2 cos(pi*t) m. The time at which the maximum speed first occurs is:
(A) 0.5 s (B) 0.75 s (C) 0.125 s (D) 0.25 s

**5.** A particle executing S.H.M. has a maximum speed of 30 cm/s and a maximum acceleration of 60 cm/s^2. The period of oscillation is:
(A) pi s (B) pi/2 s (C) 2pi s (D) pi/2 s

**6.** A particle executes SHM on a straight line path. The amplitude of oscillation is 2 cm. When the displacement of the particle from the mean position is 1 cm, the numerical value of magnitude of acceleration is equal to the numerical value of magnitude of velocity. The frequency of SHM (in Hz) is:
(A) 1/pi (B) sqrt(2)/pi (C) sqrt(3)/(2pi) (D) 1/(2pi*sqrt(3))

**7.** A simple harmonic oscillation has an amplitude A and time period T. The time required to travel directly from x = A to x = A/2 is:
(A) T/6 (B) T/4 (C) T/3 (D) T/12

**8.** Displacement-time equation of a particle executing SHM is x = A sin(omega*t + pi/6). Time taken by the particle to go directly from x = -A/2 to x = +A/2 is:
(A) pi/(3*omega) (B) pi/(2*omega) (C) 2pi/omega (D) pi/omega

**9.** A particle of mass 0.1 kg executes SHM under a force F = (-10x) Newton. Speed of particle at mean position is 6 m/s. Then amplitude of oscillations is:
(A) 0.6 m (B) 0.2 m (C) 0.4 m (D) 0.1 m

**10.** The kinetic energy of a particle executing S.H.M. is 16 J when it is in its mean position. If the amplitude of oscillations is 25 cm and the mass of the particle is 5.12 kg. The time period of its oscillation is:
(A) pi/5 sec (B) 2pi sec (C) 20pi sec (D) 5pi sec

**11.** An object of mass 0.2 kg executes simple harmonic oscillations along the x-axis with a frequency 25/pi Hz. At the position x = 0.04 m, the object has kinetic energy 0.5 J and potential energy 0.4 J. The amplitude of oscillation is (potential energy is zero at mean position):
(A) 6 cm (B) 4 cm (C) 8 cm (D) 2 cm

**12.** Consider the graph shown for the position of a ball attached to a spring as it oscillates in simple harmonic motion. Which of the following is correct? (i) The speed of ball is greatest at 2s (ii) The speed of ball is greatest at 4s (iii) The acceleration of ball is greatest at 2s (iv) The acceleration of ball is greatest at 6s
(A) i, iii (B) ii, iii, iv (C) i, iii, iv (D) ii, iv

**13.** A particle performing simple harmonic motion, (i) has parabolic velocity-displacement graph. (ii) has sinusoidal velocity-time graph. (iii) has elliptical velocity-acceleration graph. Choose the correct statements.
(A) (ii) and (iii) (B) (i), (ii) and (iii) (C) (i) and (ii) (D) (i) and (iii)

**14.** Maximum speed of a particle in simple harmonic motion is v_max. Then average speed of a particle in SHM is equal to:
(A) v_max/2 (B) v_max/pi (C) pi*v_max/2 (D) 2*v_max/pi

**15.** A particle is executing SHM of amplitude A and angular frequency omega. The average acceleration of particle for half the time period is: (Starting from mean position)
(A) 2A*omega^2/pi (B) A*omega^2/pi (C) 3A*omega^2/(2pi) (D) A*omega^2/2

#### DTS-2: Superposition of SHM, Spring-block systems

**16.** The displacement of a particle varies with time according to the relation y = a sin(omega*t) + b cos(omega*t):
(A) The motion is oscillatory but not S.H.M. (B) The motion is S.H.M. with amplitude a + b (C) The motion is S.H.M. with amplitude a^2 + b^2 (D) The motion is S.H.M. with amplitude sqrt(a^2 + b^2)

**17.** Two simple harmonic motions y1 = A sin(omega*t), y2 = A cos(omega*t) are superimposed on a particle of mass m. The total mechanical energy of the particle is:
(A) (1/2)m*omega^2*A^2 (B) m*omega^2*A^2 (C) (1/4)m*omega^2*A^2 (D) zero

**18.** A particle is subjected to two simple harmonic motions in the same direction having equal amplitudes and equal frequency. If the resulting amplitude is equal to the amplitude of individual motions, the phase difference between them is:
(A) pi/3 (B) 2pi/3 (C) pi/6 (D) pi/2

**19.** A particle is acted simultaneously by mutually perpendicular simple harmonic motions x = a cos(omega*t) and y = a sin(omega*t). The trajectory of motion of the particle will be:
(A) an ellipse (B) a parabola (C) a circle (D) a straight line

**20.** A mass m attached to a spring of spring constant k is stretched by a distance x_0 from its equilibrium position and released with no initial velocity, on a smooth horizontal surface. The maximum speed attained by mass in its subsequent motion and the time at which this speed would be attained are respectively:
(A) sqrt(k/m)*x_0 and pi*sqrt(m/k) (B) sqrt(k/m)*x_0/2 and (pi/2)*sqrt(m/k) (C) sqrt(k/m)*x_0 and (pi/2)*sqrt(m/k) (D) sqrt(k/m)*x_0/2 and pi*sqrt(m/k)

**21.** Frequency of a particle executing SHM is 10 Hz. The particle is suspended from a vertical spring. At the highest point of its oscillation the spring is unstretched. Maximum speed of the particle is: (g = 10 m/s^2)
(A) 2pi m/s (B) pi m/s (C) 1/pi m/s (D) 1/(2pi) m/s

**22.** Two masses M and m are suspended together by a massless spring of force constant k. When the masses are in equilibrium, M is removed without disturbing the system. The amplitude of oscillation is:
(A) Mg/k (B) mg/k (C) (M+m)g/k (D) (M-m)g/k

**23.** Three masses of 500 g, 300 g and 100 g are suspended at the end of a spring as shown and are in equilibrium. When the 500 g mass is removed suddenly, the system oscillates with a period of 2 seconds. When the 300 g mass is also removed, it will oscillate with a time period:
(A) 2 s (B) 1.25 s (C) 1.5 s (D) 1 s

**24.** A mass is suspended separately by two springs of spring constant k1 and k2 in successive order. The time periods of oscillations in the two cases are T1 and T2 respectively. If the same mass be suspended by connecting the two springs in parallel (as shown in figure) then the time period of oscillations is T. The correct relation is:
(A) T^2 = T1^2 + T2^2 (B) T^(-2) = T1^(-2) + T2^(-2) (C) T^(-1) = T1^(-1) + T2^(-1) (D) T = T1 + T2

**25.** When a mass m is connected individually to two springs S1 and S2, the oscillation frequencies are v1 and v2. If the same mass is attached to the two springs as shown in figure, the oscillation frequency would be:
(A) v1 + v2 (B) sqrt(v1^2 + v2^2) (C) (1/v1 + 1/v2)^(-1) (D) sqrt(v1^2 - v2^2)

**26.** A mass m is attached to four springs of spring constants 2k, 2k, k, k as shown in figure. The mass is capable of oscillating on a frictionless horizontal floor. If it is displaced slightly and released the frequency of resulting SHM would be:
(A) (1/(2pi))*sqrt(11k/(2m)) (B) (1/(2pi))*sqrt(2k/(3m)) (C) (1/(2pi))*sqrt(3k/m) (D) (1/(2pi))*sqrt(4k/m)

**27.** A spring of force constant k is cut into two pieces such that one piece is double the length of the other. Then the long piece will have a force constant of:
(A) (2/3)k (B) (3/2)k (C) 3k (D) 6k

**28.** A spring of spring constant k is cut into n equal parts, out of which r parts are placed in parallel and connected with mass M as shown in figure. The time period of oscillatory motion of mass M is:
(A) T = 2pi*sqrt(M/(nrK)) (B) T = 2pi*sqrt(nrM/K) (C) T = 2pi*sqrt(rM/(nK)) (D) T = 2pi*sqrt(nM/(rK))

**29.** In the figure shown, the block of mass m is left from rest when the spring is relaxed. The inclined plane is smooth. The time period and amplitude of the block will be:
(A) 2pi*sqrt(m/k), mg*sin(theta)/k (B) 2pi*sqrt(m*sin(theta)/k), 2mg*sin(theta)/k (C) 2pi*sqrt(m/k), mg*cos(theta)/k (D) None of these

**30.** Find the time period of oscillation of block of mass m. Spring, and pulley are ideal. Spring constant is k.
(A) 2pi*sqrt(m/k) (B) pi*sqrt(m/k) (C) 4pi*sqrt(m/k) (D) 2pi*sqrt(m/(2k))

#### DTS-3: Angular SHM, SHM in different systems

**31.** A pendulum has a time period T for small oscillations. There is an obstacle which is placed directly below the pivot, such that only the lowest one-fourth of the pendulum string can follow the pendulum bob, when it swings to the left of its resting position. The pendulum is released from a certain point A. The time taken to return to A is:
(A) T (B) T/2 (C) 3T/2 (D) 3T/4

**32.** The time period of a simple pendulum of length L as measured in an elevator descending with acceleration g/3 is:
(A) 2pi*sqrt(3L/g) (B) pi*sqrt(3L/g) (C) 2pi*sqrt(3L/(2g)) (D) 2pi*sqrt(2L/(3g))

**33.** A pendulum suspended from the ceiling of a train has a period T, when the train is at rest. When the train is accelerating with a uniform acceleration a, the period of oscillation will:
(A) increase (B) decrease (C) remain unaffected (D) become infinite

**34.** A simple pendulum has time period T = 2s in air. If whole arrangement is placed in nonviscous liquid whose density is 1/2 times the density of bob, the time period will be:
(A) 2/sqrt(2) s (B) 4 s (C) 2*sqrt(2) s (D) 4*sqrt(4) s

**35.** The bob of a simple pendulum is displaced from its equilibrium position O to a position Q which is at height h above O and the bob is then released. Assuming the mass of the bob to be m and time period of oscillations to be 2.0 sec, the tension in the string when the bob passes through O is:
(A) m(g + 2h*pi^2) (B) m(g + sqrt(pi^2*g*h)) (C) m(g + (pi^2/2)*g*h) (D) m(g + (pi^2/3)*g*h)

**36.** A cylindrical piece of wood of density sigma and of length l is floating at rest in a non-viscous liquid of density rho. It is slightly depressed and released so as to perform simple harmonic vibrations. The period T of the vibrations will be:
(A) T = 2pi*sqrt(l/g) (B) T = 2pi*sqrt(sigma*l/(rho*g)) (C) T = 2pi*sqrt(l/(2g)) (D) T = 2pi*sqrt(l/(sigma*g))

**37.** An ice-cube of edge 10 cm floating in water. Time period of small vertical oscillations of the cube is: (Specific gravity of ice is 0.9)
(A) 0.6 s (B) 1.6 s (C) 2.4 s (D) 3.6 s

**38.** A small ball of density rho_0 is released from rest from the surface of a liquid whose density varies with depth h as rho = (rho_0/2)(alpha + beta*h). Mass of the ball is m. Select the most appropriate one option.
(A) The particle will execute SHM (B) Motion of particle is periodic but not SHM (C) Both (A) and (B) are correct (D) Both (A) and (B) are wrong

**39.** A point mass m is suspended at the end of massless wire of length L and cross-sectional area A. If Y is the Young's modulus of elasticity of the material of wire. The frequency of S.H.M. along the vertical line is:
(A) (1/(2pi))*sqrt(A/(mLY)) (B) (1/(2pi))*sqrt(YA^2/(mL^3)) (C) (1/(2pi))*sqrt(YA/(mL)) (D) (1/(2pi))*sqrt(YL/m)

**40.** A cylindrical piston of mass M slides smoothly inside a long cylinder closed at one end, enclosing a certain mass of gas. The cylinder is kept with its axis horizontal. If the piston is disturbed from its equilibrium position, it oscillates simple harmonically. Pressure inside the gas in equilibrium is P. Consider the piston to be diathermic so that process is isothermal. The period of oscillation will be:
(A) T = 2pi*sqrt(Mh/(PA)) (B) T = 2pi*sqrt(MA/(Ph)) (C) T = 2pi*sqrt(M/(PAh)) (D) T = 2pi*sqrt(MPhA)

**41.** Assume that a narrow tunnel is dug between two diametrically opposite points of the earth. Treat the earth as a solid sphere of uniform density. If a particle of mass m is released in this tunnel, find the time period of its motion. (M is the mass of earth, R its radius and G is universal gravitational constant.)
(A) 2pi*sqrt(R^3/(Gm)) (B) 2pi*sqrt(R^3/(GM)) (C) 2pi*sqrt(m/g) (D) 2pi*sqrt(R/(mg))

**42.** Time period of a simple pendulum of length L is T1 and time period of a uniform rod of the same length L pivoted about end and oscillating in a vertical plane is T2. Amplitude of oscillations in both the cases is small. Then T1/T2 is:
(A) sqrt(4/3) (B) 1 (C) sqrt(3/2) (D) sqrt(1/3)

**43.** Find time period of uniform disc of mass m and radius r suspended through point r/2 away from centre, oscillating in a plane parallel to its plane.
(A) 2pi*sqrt(2r/(3g)) (B) 4pi*sqrt(r/(2g)) (C) 2pi*sqrt(3r/(2g)) (D) None of these

**44.** A solid cylinder of mass m attached to a horizontal massless spring can roll without slipping along a horizontal surface. Find time period of oscillation.
(A) 2pi*sqrt(M/(2k)) (B) pi*sqrt(3M/(2k)) (C) pi*sqrt(2M/(3k)) (D) 2pi*sqrt(3M/(2k))

**45.** A uniform rod of mass m and length l is suspended through a light wire of length l and torsional constant k as shown in figure. Find the time period if the system makes angular oscillations in the horizontal plane about the centre of the rod.
(A) 2pi*sqrt(l/g) (B) 2pi*sqrt(13l/(12g)) (C) 2pi*sqrt(ml^2/(12k)) (D) 2pi*sqrt(ml^2/k)

#### DTS-4: Miscellaneous, Damped Oscillation

**46.** Which of the following is not simple harmonic function?
(A) y = a sin(2*omega*t) + b cos^2(omega*t) (B) y = a sin(omega*t) + b cos(2*omega*t) (C) y = 1 - 2sin^2(omega*t) (D) y = sqrt(a^2 + b^2) sin(omega*t) cos(omega*t)

**47.** A bead of mass m slides down a frictionless thin fixed wire held on the vertical plane and then performs small oscillations at the lowest point O of the wire. The wire takes the shape of a parabola near O and potential energy is given by U(x) = cx^2, where c is a constant. The period of the small oscillations will be:
(A) T = 2pi*sqrt(m/(2c)) (B) T = pi*sqrt(m/c) (C) T = 2pi*sqrt(2m/c) (D) T = 2pi*sqrt(m/c)

**48.** Figure shows the circular motion of a particle P. The radius of the circle, the period, sense of revolution and the initial position are indicated on the figure. The position of the x-projection of the particle P is:
(A) x(t) = B cos(2pi*t/30) (B) x(t) = B sin(pi*t/15) (C) x(t) = B sin(pi*t/15 + pi/2) (D) x(t) = B cos(pi*t/15 + pi/2)

**49.** A particle is moving in a circle of radius R = 1 m with constant speed v = 4 m/s. The ratio of displacement to acceleration of the foot of the perpendicular drawn from the particle on the diameter of the circle is:
(A) 1/16 (second)^2 (B) 1/2 (second)^2 (C) 2 (second)^2 (D) 16 (second)^2

**50.** A horizontal platform with a small block of mass 1 kg kept on it performs vertical SHM of amplitude 1 cm. The block does not lose contact with the platform anywhere. The minimum possible time period of the platform is: (Take pi = sqrt(g))
(A) 0.1 s (B) 0.2 s (C) 0.3 s (D) 0.4 s

**51.** A block is kept on a rough horizontal plank. The coefficient of friction between the block and the plank is 1/2. The plank is undergoing SHM of angular frequency 10 rad/s in horizontal direction. The maximum amplitude of plank in which the block does not slip over the plank is: (g = 10 m/s^2)
(A) 4 cm (B) 5 cm (C) 10 cm (D) 16 cm

**52.** A rod is hinged at some point away from its center and is made to oscillate like a compound pendulum. It oscillates with an angular frequency omega. If the rod is now rotated so that its center of mass is vertically above the point of suspension and released from this position after giving a slight push. What is its angular velocity when it reaches the lowermost position:
(A) omega (B) 2*omega (C) omega/2 (D) 4*omega

**53.** A block of mass m compresses a spring of stiffness k through a distance l/2 as shown in the figure. If the block is not fixed to the spring, all collisions are elastic and surface is smooth, the period of motion of the block is:
(A) 2pi*sqrt(m/k) (B) (pi+4)*sqrt(m/k) (C) (1+pi)*sqrt(m/k) (D) None of these

**Paragraph for Questions 54-56:** One end of an ideal spring is fixed to a wall at origin O and the axis of spring is parallel to the x-axis. A block of mass m = 1 kg is attached to free end of the spring and it is performing SHM. Equation of position of the block in coordinate system shown in figure is x = 10 + 3sin(10t), where t is in second and x in cm. Another block of mass M = 3 kg, moving towards the origin with velocity 30 cm/s collides with the block performing SHM at t = 0 and gets stuck to it. (Taking rightward as positive direction).

**54.** Angular frequency of oscillation after collision is:
(A) 20 rad/s (B) 5 rad/s (C) 100 rad/s (D) 50 rad/s

**55.** New amplitude of oscillation is:
(A) 3 cm (B) 20 cm (C) 10 cm (D) 100 cm

**56.** New equation for position of the combined body is:
(A) (10 + 3sin 5t) cm (B) (10 - 3sin 5t) cm (C) (10 + 3cos 10t) cm (D) (10 - 3cos 10t) cm

**57.** Amplitude of a swing decreases to 0.5 times its original magnitude in 4s due to damping by air friction. Its amplitude becomes how many times of the original magnitude in another 8s?
(A) 0.25 (B) 0.5 (C) 2 (D) 0.125

**58.** The amplitude of a simple pendulum, oscillating in air with a small spherical bob, decreases from 10 cm to 8 cm in 40 s. Assuming that Stokes law is valid, and ratio of the coefficient of viscosity of air to that of carbon dioxide is 1.3, the time in which amplitude of this pendulum will reduce from 10 cm to 5 cm in carbon dioxide will be close to (ln 5 = 1.601; ln 2 = 0.693).
(A) 231 s (B) 208 s (C) 161 s (D) 142 s

**59.** A pendulum with time period of 1s is losing energy due to damping. At certain time its energy is 45 J. If after completing 15 oscillations, its energy has become 15 J, its damping constant (in s^-1) is:
(A) (1/30) ln 3 (B) (1/15) ln 3 (C) 2 (D) 1/2

**60.** The angular frequency of the damped oscillator is given by omega = sqrt(k/m - r^2/(4m^2)), where k is the spring constant, m is the mass of the oscillator and r is the damping constant. If the ratio r^2/(mk) is 8%, the change in the time period compared to the undamped oscillator is approximately as follows:
(A) increases by 1% (B) increases by 8% (C) decreased by 1% (D) decreases by 8%

#### DTS-5: Mixed (Numerical Answer Type)

**N.61.** A particle of mass 0.10 kg has its velocity varying according to the relation v = -4pi*sin(pi*t + pi/4) m/sec. What is the maximum kinetic energy (in joules)? (Take pi^2 = 10)

**N.62.** A plank with a bar on it executes a S.H.M of amplitude A = 10 cm. What should be the coefficient of friction which prevents the sliding of the bar for time period 1.0 sec? (Take pi^2 = 10)

**N.63.** A tiny mass performs S.H.M along a straight line with a time period of T = 0.60 sec and amplitude A = 10.0 cm. Calculate the mean velocity (in m/sec) in the time to displace by A/2.

**N.64.** A mass m attached to a spring A has a frequency of 3 Hz and a spring B has a frequency of 4 Hz. When both springs are connected as shown in the figure, find the frequency (in Hz) of oscillation.

**N.65.** A cubical block of mass M vibrates horizontally, with amplitude of 4.0 cm and a frequency of 2.0 Hz. A small block of mass m is placed on the bigger block. In order that the smaller block does not slide on the bigger block, the minimum value of the coefficient of static friction between the two blocks is (0.16)x. Find value of x. (Take pi^2 = 10 and g = 10 m/s^2)

**N.66.** A mass M = 5 kg hangs in equilibrium from a spring of constant K = 2 N/cm. Another mass of 3 kg is placed over M. Find the new amplitude of oscillation afterwards (in m). (Take g = 10 m/s^2)

**N.67.** The acceleration and velocity maximum of simple harmonically oscillating system are 8 m/sec^2 and 8 m/sec, respectively. What is the angular frequency? (in rad/sec)

**N.68.** A body of mass 36 g moves with S.H.M of amplitude A = 13 cm and time period T = 12 sec. At time t = 0, the displacement x is +13 cm. Calculate the shortest time of passage from x = +6.5 cm to x = -6.5 cm? (in sec)

**N.69.** The tension along a string at its mean position is 1% more than its weight. Find the angular amplitude of the pendulum (in radian).

**N.70.** The amplitude of a lightly damped oscillator decreases by 4.0% during each cycle. What percentage of mechanical energy of the oscillator is lost in each cycle?

**N.71.** An infinite number of springs of constants 2, 4, 8, 16, 32,.... N/m are connected in series. What is the equivalent spring constant?

**N.72.** A particle is placed at the lowest point of a smooth parabola having the equation x^2 = 5y (x, y are in metre). After a slight displacement, the particle is constrained to move along the parabola. Find the angular frequency of oscillations (in rad/sec).

**N.73.** Relationship between velocity and displacement of particle is 4v^2 = 25 - x^2. Then time period of oscillation is n*pi s. Find n.

**N.74.** A force F = 4x + 8 (in N) is acting on a block where x is the position of the block in metres. The energy of oscillation is 32 J. The block oscillates between two points, out of which the value of position of one point (in metres) is an integer from 0 to 9. Find it.

**N.75.** Force acting on a particle is F = -8x in S.H.M. The amplitude of oscillation is 2 (in m) and mass of the particle is 0.5 kg. The total mechanical energy of the particle is 20 J. Find the potential energy of the particle in mean position (in J).

---

### SHM: LEVEL 2
*Source: DTS-6 (Kinematics of SHM, Energy in SHM), DTS-7 (Spring-block systems, Superposition), DTS-8 (Angular SHM, SHM in different systems), DTS-9 (Mixed problems)*

#### DTS-6: Kinematics of SHM, Energy in SHM

**76.** A particle starts SHM at time t = 0. Its amplitude is A and angular frequency is omega. At time t = 0 its kinetic energy is E/4. Assuming potential energy to be zero at mean position, the displacement-time equation of the particle can be written as (E = total mechanical energy of oscillation):
(A) x = A sin(omega*t + pi/6) (B) x = A sin(omega*t + 5pi/6) (C) x = A sin(omega*t + 7pi/6) (D) x = A sin(omega*t + 4pi/6)

**77.** A particle is performing SHM about mean position O as shown in the figure. Its amplitude is 5 m and time period of oscillation is 4 s. The minimum time taken by the particle to move from point A to B is nearly: (A is at 3 m, B is at 4 m from O)
(A) 0.18 s (B) 0.20 s (C) 0.15 s (D) 0.24 s

**78.** A body is executing S.H.M. When its displacement from the mean position is 4 cm and 5 cm, the corresponding velocity of the body is 10 cm/sec and 8 cm/sec respectively. The time period of the body is:
(A) 2pi sec (B) pi/2 sec (C) pi sec (D) 3pi/2 sec

**79.** A 4 kg particle is moving along the x-axis under the action of the force F = -(pi^2/16)*x N. At t = 2 sec, the particle passes through the origin and at t = 10 sec its speed is 4*sqrt(2) m/s. The amplitude of the motion is:
(A) 32*sqrt(2)/pi m (B) 16/pi m (C) 4/pi m (D) 16*sqrt(2)/pi m

**80.** Two particles P and Q describe S.H.M. of same amplitude a, same frequency f along the same straight line. The maximum distance between the two particles is a*sqrt(2). The initial phase difference between the particles is:
(A) Zero (B) pi/2 (C) pi/6 (D) pi/3

**81.** A particle is moving along the x-axis under the influence of a force given by F = -5x + 15. At t = 0, the particle is located at x = 6 and is having zero velocity. It takes 0.5 seconds to reach the origin for the first time. The equation of motion of the particle can be represented by:
(A) x = 3 + 3 cos(pi*t) (B) x = 3 cos(pi*t) (C) x = 3 + 3 sin(pi*t) (D) x = 3 + 3 cos(2pi*t)

**\*82.** Two particles are performing SHM with equal frequency are in same phase. It means that:
(A) the two particles must have same distance from the mean position simultaneously (B) two particles may have same distance from the mean position simultaneously (C) the two particles must have maximum speed simultaneously (D) the two particles may have maximum speed simultaneously

**\*83.** Acceleration-time graph of a particle executing SHM is as shown in figure. Select the correct alternative(s):
(A) Displacement of particle at 1 is negative (B) Velocity of particle at 2 is positive (C) Potential energy of particle at 3 is maximum (D) Speed of particle at 4 is decreasing

**\*84.** A body is performing S.H.M. Then its:
(A) average total energy over a cycle is equal to its maximum kinetic energy (B) average kinetic energy over a cycle is equal to half of its maximum kinetic energy (C) mean velocity over a cycle is equal to 2/pi times of its maximum velocity (D) root mean square velocity over a cycle is 1/sqrt(2) times of its maximum velocity

**85.** Potential energy of a particle at mean position is 4 J and at extreme position is 20 J. Given that amplitude of oscillation is A. Match the following two columns.
Column I: (A) Potential energy at x = A/2 (B) Kinetic energy at x = A/4 (C) Kinetic energy at x = 0 (D) Kinetic energy at x = A/2
Column II: (P) 15 J (Q) 16 J (R) 8 J (S) 12 J

#### DTS-7: Superposition of SHM, Spring-block systems

**86.** A particle moves in x-y plane according to the equation r = (A sin(omega*t) + B cos(omega*t))(i-hat + j-hat):
(A) SHM and along a straight line (B) SHM and along an elliptical path (C) SHM and along a circular path (D) Not SHM, but periodic

**87.** A particle executes simple harmonic motion of period T and amplitude l along a rod AB of length 2l. The rod AB itself executes simple harmonic motion of the same period and amplitude in a direction perpendicular to its length. Initially, both the particle and the rod are in their mean positions. The path traced out by the particle will be:
(A) a circle of radius l (B) a straight line inclined at pi/4 to the rod (C) an ellipse (D) parabolic

**88.** A constant force produces maximum velocity V on the block connected to the spring of force constant K as shown in the fig. When the force constant of spring becomes 4K, the maximum velocity of the block is:
(A) V/4 (B) 2V (C) V/2 (D) V

**89.** m1 & m2 are connected with a light inextensible string with m1 lying on smooth table and m2 hanging as shown in figure. m1 is also connected to a light spring which is initially unstretched and the system is released from rest.
(A) system performs SHM with angular frequency given by sqrt(k(m1+m2)/(m1*m2)) (B) system performs SHM with angular frequency given by sqrt(k/(m1+m2)) (C) tension in string will be 0 when the system is released (D) maximum displacement of m1 will be m2*g/k

**90.** Figure shows three systems in which a block of mass m can execute S.H.M. What is ratio of frequency of oscillation?
(A) 2 : 1 : 4 (B) 1 : 2 : 4 (C) 4 : 2 : 1 (D) 3 : 2 : 1

**91.** A particle of mass m is attached to three identical springs A, B and C each of force constant k as shown in figure. If the particle of mass m is pushed slightly against the spring A and released then the time period of oscillations is:
(A) 2pi*sqrt(2m/k) (B) 2pi*sqrt(m/(2k)) (C) 2pi*sqrt(m/k) (D) 2pi*sqrt(m/(3k))

**\*92.** The system shown in figure rests on a smooth surface. The spring (k = 800 N/m) is compressed by 6 cm and then released from rest. (3 kg and 6 kg blocks)
(A) The system performs SHM with time period pi/10 s (B) The block of mass 3 kg performs SHM with amplitude 4 cm (C) The block of mass 6 kg will have maximum momentum of 2.40 kg m/s (D) The time periods of two blocks are in the ratio 1 : sqrt(2)

**Paragraph for Questions 93-95:** A block of mass m is connected to a spring of spring constant k and is at rest in equilibrium as shown. Now, the block is displaced by h below its equilibrium position and imparted a speed v_0 towards down as shown in the figure. As a result of the jerk, the block executes simple harmonic motion. (Taking upward direction as positive).

**93.** The amplitude of oscillation (A) is:
(A) h (B) sqrt(mv_0^2/k + h^2) (C) sqrt(m/k)*(v_0 + h) (D) None of these

**94.** The equation for the simple harmonic motion is:
(A) y = -A sin[sqrt(k/m)*t + sin^-1(h/A)] (B) y = -A cos[sqrt(k/m)*t + sin^-1(h/A)] (C) y = A sin[sqrt(k/m)*t + cos^-1(h/A) + pi/2] (D) y = A sin[sqrt(k/m)*t + cos^-1(h/A) + pi/4]

**95.** Find the time taken by the block to cross the mean position for the first time.
(A) [2pi - cos^-1(h/A)] / sqrt(k/m) (B) [pi/2 - cos^-1(h/A)] / sqrt(k/m) (C) [pi - sin^-1(h/A)] / sqrt(k/m) (D) [pi - sin^-1(h/A)] / (2*sqrt(k/m))

#### DTS-8: Angular SHM, SHM in different systems

**96.** A simple pendulum of length l and a mass m of the bob is suspended in a car that is travelling with a constant speed v around a circle of radius R. If the pendulum undergoes small oscillations about its equilibrium position, the frequency of its oscillation will be:
(A) (1/(2pi))*sqrt(g/l) (B) (1/(2pi))*sqrt(g/R) (C) (1/(2pi))*sqrt((g^2 + v^4/R^2)^(1/2) / l) (D) (1/(2pi))*sqrt(v^2/(Rl))

**97.** If the length of a simple pendulum is equal to the radius of the earth, its time period will be:
(A) 2pi*sqrt(R/g) (B) 2pi*sqrt(R/(2g)) (C) 2pi*sqrt(2R/g) (D) infinite

**N.98.** A uniform disc of mass m and radius R = 80/(23pi^2) m is pivoted smoothly at P. If a uniform disc of mass m and radius R is welded at the lowest point of the disc, find the period of SHM of the system (disc + ring). (in seconds)

**99.** A U-tube of uniform cross-section holds 1 kg of pure mercury and 0.2 kg of water in equilibrium. The diameter of cross-section is 1.2 cm. Relative density of mercury is 13.6. If the system in equilibrium is slightly disturbed, the period of oscillation of the liquid column in the tube will be (take g = 10 m/s^2):
(A) 1.0 s (B) 1.54 s (C) 1.50 s (D) 2.0 s

**100.** A disc of mass M = 4 kg, radius R = 1 m is attached with two blocks A and B of masses 1 kg and 2 kg respectively on rim and is resting on a horizontal surface as shown in the figure. Find angular frequency of small oscillation of arrangement:
(A) 2.2 sec^-1 (B) 1.42 sec^-1 (C) 1.62 sec^-1 (D) 1.82 sec^-1

**Paragraph for Questions 101-103:** Consider the situation in which one end of a massless spring of spring constant k is connected to a cylinder of mass m and the other to a rigid support. When cylinder is given a gentle push in horizontal direction it starts oscillating on the rough horizontal surface. During the oscillation cylinder rolls without slipping. When calculated, motion of cylinder is found to be S.H.M. with time period T = 2pi*sqrt(3m/(2k)) and equation of SHM is x = A sin(omega*t).

**101.** At a distance x1 from the equilibrium position, kinetic energy of the oscillating system becomes equal to potential energy then, x1 is equal to:
(A) A/2 (B) A/sqrt(2) (C) sqrt(6/7)*A (D) sqrt(3/5)*A

**102.** The equation which correctly shows the variation in friction as a function of time is:
(A) (kA/3) sin(omega*t) (B) A sin(omega*t) (C) (3/2)kA cos(omega*t) (D) A cos(omega*t)

**103.** The minimum value of coefficient of friction such that the cylinder does not slip on the surface is:
(A) mg/k (B) kA/mg (C) (3kA)/(2mg) (D) kA/(3mg)

**104.** In the Column I, a system is described in each option and corresponding time period is given in the column II. Suitably match them.
Column I: (A) A simple pendulum of length l oscillating with small amplitude in a lift moving down with retardation g/2. (B) A block attached to an end of a vertical spring, whose other end is fixed to the ceiling of a lift, stretches the spring by length l in equilibrium. Its time period when lift moves up with an acceleration g/2 is. (C) The time period of small oscillation of a uniform rod of length l smoothly hinged at one end. The rod oscillates in vertical plane. (D) A cubical block of edge l and specific density rho/2 is in equilibrium with some volume inside water filled in a large fixed container. Neglect viscous forces and surface tension. The time period of small oscillations of the block in vertical direction is.
Column II: (P) T = 2pi*sqrt(2l/(3g)) (Q) T = 2pi*sqrt(l/g) (R) T = 2pi*sqrt(2l/g) (S) T = 2pi*sqrt(l/(2g))

**N.105.** A uniform disc of mass m and radius R is pivoted smoothly at its centre of mass. A light spring of stiffness k is attached with the disc tangentially as shown in the figure. Find the angular frequency in rad/s of torsional oscillations of the disc. (Take m = 5 kg and K = 10 N/m)

#### DTS-9: Miscellaneous

**106.** The angular frequency of a spring block system is omega_0. This system is suspended from the ceiling of an elevator moving downwards with a constant speed v_0. The block is at rest relative to the elevator. Lift is suddenly stopped. Assuming the downward as a positive direction, choose the wrong statement:
(A) The amplitude of the block is v_0/omega_0 (B) The initial phase of the block is pi/2 (C) The equation of motion for the block is (v_0/omega_0)*sin(omega_0*t) (D) The maximum speed of the block is v_0

**107.** Vertical displacement of a plank with a body of mass 'm' on it is varying according to law y = sin(omega*t) + sqrt(3)*cos(omega*t). The minimum value of omega for which the mass just breaks off the plank and the moment it occurs first after t = 0 are given by: (y is positive vertically upwards)
(A) sqrt(g/2), (sqrt(2)/6)*sqrt(pi/g) (B) sqrt(g/2), (2/3)*sqrt(pi/g) (C) sqrt(g/2), (pi/2)*sqrt(2/g) (D) sqrt(2g), (2pi)/(3g)

**108.** The coefficient of friction between block of mass m and 2m is mu = 2tan(theta). There is no friction between block of mass 2m and inclined plane. The maximum amplitude of two block system for which there is no relative motion between both the blocks is:
(A) g*sin(theta)*sqrt(k/m) (B) mg*sin(theta)/k (C) 3mg*sin(theta)/k (D) None of these

**109.** A load of mass m falls from a height h on to the scale pan hung from a spring as shown in the figure. If the spring constant is k and mass of scale pan is zero and the mass m does not bounce relative to the pan, then the amplitude of vibration is:
(A) mg/k (B) (mg/k)*sqrt(1 + 2hk/(mg)) (C) mg/k + (mg/k)*sqrt(1 + 2hk/(mg)) (D) (mg/k)*sqrt(1 + 2hk/(mg)) - mg/k

**110.** The resultant amplitude due to superposition of three simple harmonic motions x1 = 3sin(omega*t), x2 = 5sin(omega*t + 37 degrees) and x3 = -15cos(omega*t) is:
(A) 18 (B) 10 (C) 12 (D) None of these

**\*111.** A coin is placed on a horizontal platform, which undergoes horizontal simple harmonic motion about a mean position O. The coin does not slip on the platform. The force of friction acting on the coin is F.
(A) F is always directed towards O (B) F is directed towards O when the coin is moving away from O, and away from O when the coin moves towards O (C) F = 0 when the coin and platform come to rest momentarily at the extreme position of the harmonic motion (D) F is maximum when the coin and platform come to rest momentarily at the extreme position of the harmonic motion

**Paragraph for Questions 112-114:** Two identical blocks A and B, each of mass m = 3 kg, are connected with the help of an ideal spring (k = 2000 N/m) and placed on a smooth horizontal surface as shown in the figure. Another identical block C moving with velocity v_0 = 0.6 m/s collides with A and sticks to it, as a result, the motion of system takes place in some way.

**112.** After the collision of C and A, the combined body and block B would:
(A) Oscillate about centre of mass of system and centre of mass is at rest (B) Oscillate about centre of mass of system and centre of mass is moving (C) Oscillate but about different locations other than the centre of mass (D) Not oscillate

**113.** Oscillation energy of the system, i.e., part of the energy which is oscillating (changing) between potential and kinetic forms, is:
(A) 0.27 J (B) 0.09 J (C) 0.18 J (D) 0.45 J

**114.** The maximum compression of the spring is:
(A) 3*sqrt(30) mm (B) 3*sqrt(20) mm (C) 3*sqrt(10) mm (D) 3*sqrt(50) mm

**N.115.** In the figure shown a plate of mass 60 g is at rest and in equilibrium. A particle of mass m = 30 g is released from height 4.5mg/k from the plate. The particle sticks to the plate. Neglecting the duration of collision, find the time from the collision of the particle and plate to the moment when the spring has maximum compression. Spring has force constant 1 N/m. If time is pi/x then find the value of x.

---

### SHM: LEVEL 3 (SUBJECTIVE)
*Source: DTS-10, DTS-11, DTS-12, DTS-13*

#### DTS-10

**116.** The variation of velocity of a particle executing SHM with time is shown in figure (v_max = 5 m/s, T = 4 s approx).
- **(i)** Find the amplitude, maximum velocity and maximum acceleration of the particle.
- **(ii)** When a phase change of pi/6 takes place from the initial moment, find the displacement of the particle from mean position, its velocity and acceleration.

**117.** A particle moves along the x axis according to the law x = a cos(omega*t). Find the distance that the particle covers during the time interval from t = 0 to t.

**118.** The velocity of a particle moving along a straight line changes sinusoidally with time as shown in the given graph (v_max = 4 m/s, half period = 2 s). Find the average speed over time interval t = 0 to t = 2(2n - 1) seconds, n being any positive integer.

**119.** Two particles move parallel to x-axis about the origin with the same amplitude and frequency. At a certain instant they are found at distance A/3 from the origin on opposite sides but their velocities are found to be in the same direction. What is the phase difference between the two?

**120.** Two particles are in SHM along same line. Time period of each is T and amplitude is A. After how much time will they collide if at time t = 0,
- **(i)** First particle is at x1 = +A/2 and moving towards positive x-axis and second particle is at x2 = -A/sqrt(2) and moving towards negative x-axis.
- **(ii)** Rest information are same as mentioned in part (i) except that first particle is also moving towards negative x-axis.

**121.** A particle performs harmonic oscillations along the x axis according to the law x = a cos(omega*t). Assuming the probability P of the particle to fall within an interval from -a to +a to be equal to unity, find how the probability density dP/dx depends on x. Here dP denotes the probability of the particle falling within an interval from x to x + dx.

#### DTS-11

**122.** A point participates simultaneously in two harmonic oscillations of the same direction: x1 = a cos(omega*t) and x2 = a cos(2*omega*t). Find the maximum velocity of the point.

**123.** A particle is subjected to two simple harmonic motions, one along the x-axis and the other on a line making an angle of 45 degrees with the x-axis. The two motions are given by x = x_0 sin(omega*t) and s = s_0 sin(omega*t). Find the amplitude of the resultant motion.

**124.** A mass m is undergoing SHM in the vertical direction about the mean position y_0 with amplitude A and angular frequency omega. At a distance y* from the mean position, the mass detaches from the spring. Assume that the spring contracts and does not obstruct the motion of m. Find the distance y* (measured from the mean position) such that the height h attained by the block is maximum. (A*omega^2 > g)

**125.** In each case, the spring is ideal, the pulleys are massless and the strings are light and inextensible. Find the frequency of oscillation of the block about the equilibrium position.
- **(i)** Single spring k, single pulley, block m hanging.
- **(ii)** Two springs k1 and k2, block m hanging via pulley.
- **(iii)** Two springs k1 and k2, block m on table connected via pulley.
- **(iv)** Two springs k1 and k2 attached at points A and B, block m hanging.

**126.** Four weightless rods of length l each are connected by hinged joints and form a rhombus. A hinge A is fixed, and a load is suspended to a hinge C. Hinges D and B are connected by a weightless spring of length 1.5l in the undeformed state. In equilibrium, the rods form angles alpha_0 = 30 degrees with the vertical. Determine the period T of small oscillations of the load.

**127.** A mock-up of a CO2 molecule consists of three balls interconnected by identical light springs and placed along a straight line in the state of equilibrium. Such a system can freely perform oscillations of two types, as shown by the arrows in figure. Knowing the masses of the atoms, find the ratio of frequencies of these oscillations.

#### DTS-12

**128.** Two non-viscous, incompressible and immiscible liquids of densities rho and 1.5*rho are poured into the two limbs of a circular tube of radius R and small cross section kept fixed in a vertical plane as shown in the figure. Each liquid occupies one fourth the circumference of the tube.
- **(i)** Find the angle theta that the radius to the interface makes with the vertical in equilibrium position.
- **(ii)** If the whole liquid column is given a small displacement from its equilibrium position, show that the resulting oscillations are simple harmonic. Find the time period of these oscillations.

**129.** In a cylinder filled up with ideal gas and closed from both ends there is a piston of mass m and cross-sectional area S. In equilibrium the piston divides the cylinder into two equal parts, each with volume V_0. The gas pressure is p_0 and the adiabatic index of the gas is gamma. The piston was slightly displaced from the equilibrium position and released. Find its oscillation frequency, assuming the processes in the gas to be adiabatic and the friction negligible.

**130.** Consider the earth as a uniform sphere of mass M and radius R. Imagine a straight smooth tunnel made through the earth which connects any two points on its surface. Show that the motion of a particle of mass m along this tunnel under the action of gravitation would be simple harmonic. Hence, determine the time that a particle would take to go from one end to the other through the tunnel. Consider two cases:
- **(i)** The length of tunnel is 2R
- **(ii)** The length of tunnel is R

**131.** A solid sphere (radius = R) rolls without slipping in a cylindrical trough (radius = 5R). Find the time period of small oscillations.

**132.** The pulley shown in figure has a moment of inertia I about its axis and mass m. Find the time period of vertical oscillation of its centre of mass. The spring has spring constant k and the string does not slip over the pulley.

**133.** A uniform rod of mass m = 1.5 kg suspended by two identical threads l = 90 cm in length was turned through a small angle about the vertical axis passing through its middle point C. The threads deviated in the process through an angle alpha = 5.0 degrees. Then the rod was released to start performing small oscillations. Find
- **(i)** the oscillation period.
- **(ii)** the rod's oscillation energy.

#### DTS-13

**134.** Figure shows a solid uniform cylinder of radius R and mass M, which is free to rotate about a fixed horizontal axis O which passes through centre of the cylinder. One end of an ideal spring of force constant k is fixed and the other end is hinged to the cylinder at A. Distance OA is equal to R/2. An inextensible thread is wrapped round the cylinder and passes over a smooth, small pulley. A block of equal mass M and having cross sectional area A is suspended from free end of the thread. The block is partially immersed in a non-viscous liquid of density rho. If in equilibrium, spring is horizontal and line OA is vertical, calculate frequency of small oscillations of the system.

**135.** A mass M is in static equilibrium on a massless vertical spring as shown in the figure. A ball of mass m dropped from certain height sticks to the mass M after colliding with it. The oscillations they perform reach to height 'a' above the original level of scales & depth 'b' below it.
- **(i)** Find the force constant of the spring.
- **(ii)** Find the oscillation frequency.
- **(iii)** What is the height above the initial level from which the mass m was dropped?

**136.** The friction coefficient between the two blocks shown in figure is mu and the horizontal plane is smooth.
- **(i)** If the system is slightly displaced and released, find the time period.
- **(ii)** Find the magnitude of the frictional force between the blocks when the displacement from the mean position is x.
- **(iii)** What can be the maximum amplitude if the upper block does not slip relative to the lower block?

**137.** Two identical blocks P and Q have mass m each. They are attached to two identical springs (of spring constant k) initially unstretched. Now the left spring (attached with P) is compressed by A/2 and the right spring (attached with Q) is compressed by A. Both the blocks are released simultaneously.
- **(i)** Find the speed of block P just before P and Q are about to collide for the first time.
- **(ii)** Find the speed of block Q just before P and Q are about to collide for the first time.
- **(iii)** After what time when they were released from rest, shall the blocks collide for the first time.
- **(iv)** Find the time period of oscillation of block P and the distance that it travels in one oscillation.

**138.** A particle of mass m can move along the x-axis in a force field created by stationary sources. Potential energy U of the system varies with position coordinate x of the particle in accordance with the equation U = kx/(x^2 + x_0^2). Find positions of stable equilibrium of the particle and period of small oscillations of the particle about this position.

**139.** A ball of mass m suspended by a weightless spring can perform vertical oscillations with damping coefficient beta. The natural oscillation frequency is equal to omega_0. Due to the external vertical force varying as F = F_0 cos(omega*t), the ball performs steady-state harmonic oscillations. Find:
- **(i)** the mean power <P>, developed by the force F, averaged over one oscillation period.
- **(ii)** the frequency omega of the force F at which <P> is maximum; what is <P>_max equal to?

---

### SHM: MISCELLANEOUS QUESTION BANK

**1.** A particle undergoes SHM with a time period of 2 seconds. In how much time will it travel from its mean position to a displacement equal to half of its amplitude?
(A) 1/2 s (B) 1/3 s (C) 1/4 s (D) 1/6 s

**2.** The equation of motion of a particle is x = A cos(alpha*t^2). The motion is:
(A) periodic but not oscillatory (B) periodic and oscillatory (C) oscillatory but not periodic (D) neither periodic nor oscillatory

**3.** A particle moves such that its acceleration is given by: a = -beta(x - 2). Here beta is a positive constant and x the position from origin. Time period of oscillations is:
(A) 2pi*sqrt(beta) (B) 2pi*sqrt(1/beta) (C) 2pi*sqrt(beta + 2) (D) 2pi*sqrt(1/(beta + 2))

**4.** The displacement-time (x-t) graph of a particle executing simple harmonic motion is shown in figure. The correct variation of net force F acting on the particle as a function of time is: [graph-based]
(A) sine curve starting negative (B) cosine curve (C) sine curve starting positive (D) negative cosine curve

**5.** Two bodies having masses m1 and m2 are joined at upper and lower end of light vertical rod pivoted at P, at a distance a and b from the pivot respectively. If the rod is tilted through a small angle and released, the angular frequency of oscillations of the system will be:
(A) sqrt((m2a - m1b)g / (m2a^2 + m1b^2)) (B) sqrt((m2a - m1b)g / (m2b^2 + m1a^2)) (C) sqrt((m2b - m1a)g / (m2a^2 + m1b^2)) (D) sqrt((m2b - m1a)g / (m2b^2 + m1a^2))

**6.** The spring as shown in figure is kept in a stretched position with extension x when the system is released. Assuming the horizontal surface to be frictionless, the frequency of oscillation is:
(A) (1/(2pi))*sqrt(k(M+m)/(Mm)) (B) (1/(2pi))*sqrt(mM/(k(M+m))) (C) (1/(2pi))*sqrt(kM/(m+M)) (D) (1/(2pi))*sqrt(kM/(M+m))

**7.** A particle performs S.H.M. on x-axis with amplitude A and time period T. The time taken by the particle to travel a distance A/5 starting from rest is:
(A) T/20 (B) (T/(2pi))*cos^-1(4/5) (C) (T/(2pi))*cos^-1(1/5) (D) (T/(2pi))*sin^-1(1/5)

**8.** The displacement-time graph of a particle executing SHM is shown in figure. Which of the following statements is/are true?
(A) The velocity is maximum at t = T/2 (B) The acceleration is maximum at t = T (C) The force is zero at t = 3T/4 (D) The kinetic energy equals the total oscillation energy at t = T/2

**\*9.** A body having mass m is suspended separately from two light springs of force constants k1 and k2 and their period of vertical oscillations are T1 and T2 respectively. It is then suspended from the same two springs which are first connected in series and then in parallel. The respective periods of vertical oscillations are T_s and T_p. Then:
(A) sqrt(T_s) = sqrt(T1) + sqrt(T2) (B) T_s^2 = T1^2 + T2^2 (C) 1/T_p^2 = 1/T1^2 + 1/T2^2 (D) T_p < T1 < T2 < T_s (if k1 > k2)

**\*10.** A simple pendulum with a bob of mass m is suspended from the roof of a car moving with horizontal acceleration a:
(A) The string makes an angle of tan^-1(a/g) with the vertical (B) The string makes an angle of sin^-1(a/g) with the vertical (C) The tension in the string is m*sqrt(a^2 + g^2) (D) The tension in the string is m*sqrt(g^2 - a^2)

**\*11.** Which of the following examples represent (nearly) simple harmonic motion and which represent periodic but not simple harmonic motion?
(A) the rotation of earth about its axis (B) motion of an oscillating mercury column in a U-tube (C) motion of a ball inside a smooth curved bowl, when released from a point slightly above the lower most point (D) general vibrations of a polyatomic molecule about its equilibrium position

**Paragraph for Questions 12-14:** The differential equation of a particle undergoing SHM is given by a(d^2x/dt^2) + bx = 0. The particle starts from the extreme position.

**12.** The time period of oscillation is given by:
(A) 2pi/sqrt(b) (B) 2pi*sqrt(b) (C) 2pi*sqrt(b/a) (D) 2pi*sqrt(a/b)

**13.** The ratio of the maximum acceleration to the maximum velocity of the particle is:
(A) b/a (B) a/b (C) sqrt(a/b) (D) sqrt(b/a)

**14.** The equation of motion may be given by:
(A) x = +/-A sin(sqrt(b/a)*t) (B) x = +/-A cos(sqrt(b/a)*t) (C) x = +/-A sin(sqrt(b/a)*t - theta) where theta = pi/2 (D) None of the above

**N.15.** A cubical block of mass M vibrates horizontally, with amplitude of 4.0 cm and a frequency of 2.0 Hz. A small block of mass m is placed on the bigger block. In order that the smaller block does not slide on the bigger block, the minimum value of the coefficient of static friction between the two blocks is (0.16)x. Find value of x. (Take pi^2 = 10 and g = 10 m/s^2)

**16.** A particle of mass 1 kg executes SHM about mean position x = 0 with angular frequency 1 rad/s and total energy 2 J. At t = 0, the potential energy of the particle is zero. Match the columns. (Options in column I can match to multiple options in column II)
Column I: (A) Speed of particle is sqrt(2) m/s at (B) Kinetic energy of the particle is 1 J at (C) At t = pi/6 sec, particle is at (D) Kinetic energy is 1.5 J at
Column II: (P) x = +1 m (Q) x = -1 m (R) x = +sqrt(2) m (S) x = -sqrt(2) m

**17.** If two SHMs are represented by equations y1 = 10[sin(3pi*t + pi/4)] and y2 = 5[sin(3pi*t) + sqrt(3)cos(3pi*t)], find the ratio of their amplitudes.
(A) 1:2 (B) 1:1 (C) 1:3 (D) 2:1

**18.** The velocity v of a particle of mass m moving along a straight line changes with time t as d^2v/dt^2 = -Kv where K is a positive constant. Which of the following statements is correct?
(A) The particle does not perform SHM (B) The particle performs SHM with time period 2pi*sqrt(m/K) (C) The particle performs SHM with frequency sqrt(K)/(2pi) (D) The particle performs SHM with time period 2pi/K

**19.** A particle is performing SHM along a straight line. Its amplitude is A and time period T. The minimum time interval between two instants, when magnitude of its acceleration becomes 2pi^2*A/T^2 is:
(A) T/6 (B) T/12 (C) T/3 (D) None of these

**20.** In order that the resultant path on superimposing two mutually perpendicular SHMs be a circle, the conditions are that:
(A) The amplitudes on both the SHM should be equal and they should have a phase difference of pi/2 (B) The amplitudes should be in the ratio 1:2 and the phase difference should be zero (C) The amplitudes should be in the ratio 1:2 and the phase difference be pi/2 (D) The amplitudes should be equal and the phase difference should be zero

**\*21.** For a particle, an acceleration-displacement graph is plotted. It shows a straight line passing through the points (8, 4), (4, 20) and (x, a). Then:
(A) The particle motion is simple harmonic as acceleration is directed opposite to displacement and is directly proportional to displacement (B) Particle's motion is not harmonic but periodic (C) Period of harmonic motion is pi second (D) None of these

**\*22.** A particle starts from a point P at a distance of A/2 from the mean position O and travels towards left as shown in the figure. If the time period of SHM, executed about O is T and amplitude A then the equation of the motion of particle is:
(A) x = A sin(2pi*t/T + pi/6) (B) x = A sin(2pi*t/T + 5pi/6) (C) x = A cos(2pi*t/T + pi/6) (D) x = A cos(2pi*t/T + pi/3)

**Paragraph for Questions 23-24:** A spring having a spring constant k is fixed to a vertical wall as shown in figure. A block of mass m moves with velocity v towards the spring from a parallel wall opposite to this wall. The mass hits the free end of the spring compressing it and is decelerated by the spring force and comes to rest and then turns back till the spring acquires its natural length and contact with the spring is broken. In this process, it regains its angular speed in the opposite direction and makes a perfect elastic collision on the opposite left wall and starts moving with same speed as before towards right. The above processes are repeated and there are periodic oscillations.

**23.** What is the maximum compression produced in the spring?
(A) v*sqrt(m/k) (B) sqrt(m/k) (C) v*sqrt(mk) (D) v*sqrt(k/m)

**24.** What is the time period of oscillations?
(A) pi*sqrt(m/k) (B) pi*sqrt(m/k) + L/v (C) pi*sqrt(m/k) + 2L/v (D) pi*sqrt(m/k) + L/v

**25.** In a spring-block system; match the following:
Column I: (A) If only mass of the block is doubled (B) If only amplitude of oscillation is doubled (C) If only force constant is doubled (D) If only angular frequency is doubled
Column II: (P) Energy of oscillation becomes 4 times (Q) Speed of particle becomes 2 times (R) Time period becomes sqrt(2) times (S) Potential energy becomes 2 times

**26.** Mass of a particle is 2 kg. Its displacement-time equation in SHM is x = 2sin(4pi*t) (SI Units). Match the following two columns for 1 second time interval.
Column I: (A) Speed becomes 20 m/s (B) Velocity becomes +10 m/s (C) Kinetic energy becomes 400 J (D) Acceleration becomes -100 m/s^2
Column II: (P) Two times (Q) Four times (R) One time (S) Eight times

**27.** Find time period of oscillation for arrangement shown in figure. (Two springs k each in series, then connected via pulley to mass m on rough surface that rolls)
(A) 2pi*sqrt(m/(2k)) (B) 2pi*sqrt(2m/k) (C) pi*sqrt(m/k) (D) pi*sqrt(m/(2k))

**28.** The amplitude of a lightly damped oscillator decreases by 4.0% during each cycle. What percentage of mechanical energy of the oscillator is lost in each cycle?
(A) 4.0% (B) 6.0% (C) 8.0% (D) 16%

**29.** A system is shown in the figure. The time period for small oscillations of the two blocks will be:
(A) 2pi*sqrt(3m/k) (B) 2pi*sqrt(3m/(2k)) (C) 2pi*sqrt(3m/(4k)) (D) 2pi*sqrt(3m/(8k))

**\*30.** A spring has natural length 40 cm and spring constant 500 N/m. A block of mass 1 kg is attached at one end of the spring and other end of the spring is attached to a ceiling. The block is released from the position, where the spring has length 45 cm:
(A) the block will perform SHM of amplitude 5 cm (B) the block will have maximum velocity 30*sqrt(5) cm/s (C) the block will have maximum acceleration 15 m/s^2 (D) the minimum elastic potential energy of the spring will be zero

**\*31.** A particle is executing SHM with amplitude A. At displacement x = -A/4, magnitude force acting on the particle is F, potential energy of the particle is U, speed of particle is v and kinetic energy of the particle is K. Assuming potential energy to be zero at mean position. At displacement x = A/2:
(A) Magnitude of force acting on the particle will be 2F (B) Potential energy of particle will be 4U (C) Speed of particle will be sqrt(4/5)*v (D) Kinetic energy of particle will be 0.8K

**Paragraph for Questions 32-34:** A block of mass m is suspended from one end of a light spring. The origin O is considered at distance equal to natural length of the spring from the ceiling and vertical downward direction as positive y-axis. When the system is in equilibrium, a bullet of mass m/3 moving in vertical upward direction with velocity v_0 strikes the block and embeds into it. As a result, the block (with bullet embedded into it) moves up and starts oscillating.

**32.** Mark out the correct statement(s).
(A) The block-bullet system performs SHM about y = mg/k. (B) The block-bullet system performs oscillatory motion but not SHM about y = mg/k. (C) The block-bullet system performs SHM about y = 4mg/(3k) (D) The block-bullet system performs oscillatory motion but not SHM about y = 4mg/(3k)

**33.** The amplitude of oscillation would be:
(A) sqrt((4mg/(3k))^2 + mv_0^2/(12k)) (B) sqrt(mv_0^2/(12k) + (mg/(3k))^2) (C) sqrt(mv_0^2/(6k) + (mg/k)^2) (D) sqrt(mv_0^2/(6k) + (4mg/(3k))^2)

**34.** The time taken by the block-bullet to move from y = mg/k (initial equilibrium position) to y = 0 (natural length of spring) is (A represents the amplitude of motion):
(A) sqrt(4m/(3k)) * [cos^-1(mg/(3kA)) - cos^-1(4mg/(3kA))] (B) sqrt(3k/(4m)) * [cos^-1(mg/(3kA)) - cos^-1(4mg/(3kA))] (C) sqrt(4m/(3k)) * [sin^-1(4mg/(3kA)) - sin^-1(mg/(3kA))] (D) None of the above

**35.** A simple harmonic oscillator consists of a block attached to a spring with k = 200 N/m. The block slides on a frictionless horizontal surface, with equilibrium point x = 0. A graph of the block's velocity v as a function of time t is shown (v_max = 2pi, period = 0.2 s). Correctly match the required information in Column I with the values given in Column II (use pi^2 = 10):
Column I: (A) The block's mass in kg (B) The block's displacement at t = 0 in metres (C) The block's acceleration at t = 0.10 s in m/s^2 (D) The block's maximum kinetic energy in joules
Column II: (P) -0.20 (Q) -200 (R) 0.20 (S) 4.0

**N.36.** A uniform disc of mass m and radius R = 80/(23pi^2) m is pivoted smoothly at P. If a uniform disc of mass m and radius is welded at the lowest point of the disc, find the period of SHM of the system (disc + ring). (in seconds)

**37.** A particle is executing SHM according to the equation x = A cos(omega*t). Average speed of the particle during the interval 0 <= t <= pi/(6*omega):
(A) sqrt(3)*A*omega/2 (B) sqrt(3)*A*omega/4 (C) 3A*omega/pi (D) 3A*omega*(2 - sqrt(3))/pi

**38.** The oscillations represented by curve 1 in the graph are expressed by equation x = A sin(omega*t). The equation for the oscillations represented by curve 2 is expressed as:
(A) x = 2A sin(omega*t - pi/2) (B) x = 2A sin(omega*t + pi/2) (C) x = -2A sin(omega*t - pi/2) (D) x = A sin(omega*t - pi/2)

**39.** Two simple pendulums of lengths 1m and 4m are both given small displacements in the same direction at the same instant. They will again be in phase after the shorter pendulum has completed:
(A) 1/3 oscillation (B) 2 oscillation (C) 4/3 oscillation (D) 3/4 oscillation

**40.** A harmonic oscillator vibrates with amplitude of 4 cm and performs 150 oscillations in one minute. If the initial phase is 45 degrees and it starts moving away from the origin, the equation of motion is:
(A) 0.04 sin(5pi*t + pi/4) (B) 0.04 sin(5pi*t - pi/4) (C) 0.04 sin(4pi*t + pi/4) (D) 0.04 sin(4pi*t - pi/4)

**41.** A uniform thin bar l units long is suspended about a horizontal axis at a distance h from its centre of gravity. The length of the equivalent simple pendulum is:
(A) l + l^2/(12h) (B) h + l^2/(12h) (C) l + h^2/(12l) (D) h + h^2/(12l)

**42.** Two simple harmonic motions are given by y1 = a sin[(pi/2)t + phi] and y2 = b sin[(2pi/3)t + phi]. The phase difference between these after 1 s is:
(A) zero (B) pi/2 (C) pi/4 (D) pi/6

**\*43.** A simple pendulum of length 1m with a bob of mass m swings with an angular amplitude 30 degrees. Then: (g = 9.8 m/s^2)
(A) Time period of pendulum is 2s (B) Tension in the string is greater than mg cos 15 degrees at angular displacement 15 degrees (C) Rate of change of speed at angular displacement 15 degrees is g sin 15 degrees (D) Tension in the string is mg cos 15 at angular displacement 15 degrees

**\*44.** The displacement time graph of a particle executing S.H.M. is shown in figure. Which is the following statement is/are true?
(A) The force is zero at t = 3T/4 (B) The magnitude of acceleration is maximum at t = T (C) The speed is maximum at t = T/4 (D) The P.E. is equal to K.E. of oscillation at t = T/2

**Paragraph for Questions 45-46:** A block of mass m is connected to a spring of spring constant k as shown in figure. The block is found at its equilibrium position at t = 1s and it has a velocity of +0.25 m/s at t = 2s. The time period of oscillation is 6 s.

**45.** The amplitude of oscillation is:
(A) 3/(2pi) m (B) 3 m (C) 1/pi m (D) 1.5 m

**46.** Determine the velocity of particle at t = 5 s.
(A) -0.4 m/s (B) 0.5 m/s (C) -0.25 m/s (D) None of these

**47.** For a particle undergoing SHM, the velocity is plotted against displacement. The curve will be:
(A) a straight line (B) a parabola (C) a circle (D) an ellipse

**48.** A particle executes SHM with amplitude of oscillation A and time period T. Then the magnitude of average acceleration for the period of time in which it moves from mean position by a distance A/2 is:
(A) 3pi*A/T^2 (B) 12pi*A/T^2 (C) 12pi*A(2 - sqrt(3))/T^2 (D) None of these

**49.** Relationship between velocity and displacement of particle is 4v^2 = 25 - x^2. Then time period of oscillation is:
(A) pi s (B) 2pi s (C) 3pi s (D) 4pi s

**50.** A flat plate P of mass M executes S.H.M. on a horizontal plane by sliding over a frictionless surface with a frequency v. A block B of mass m rests on the plate as shown in figure. Coefficient of friction between the surfaces of B and P is mu_s. If the block B is not to slip on the plate, then the maximum amplitude of oscillation that the plate-block system can have is:
(A) mu*g/(4pi*v^2) (B) mu^2*g/(pi^2*v^2) (C) mu^2*g/(4pi^2*v^2) (D) mu*g/(4pi^2*v^2)

**51.** A block A of mass m is placed on a smooth horizontal platform P and between two elastic massless springs S1 and S2, fixed horizontally to two fixed vertical walls. The elastic constants of the springs are equal to k and the equilibrium distance between the two springs, both in relaxed states, is d. The block is given a velocity v initially towards one of the springs and it then oscillates between the springs. If the time period T of oscillations and the minimum separation d_m of the springs will be:
(A) T = 2(d/v + pi*sqrt(m/k)), d_m = d (B) T = 2(d/v + 2pi*sqrt(m/k)), d_m = d - v*sqrt(m/k) (C) T = 2(d/v + 2pi*sqrt(m/k)), d_m = d - 2v*sqrt(m/k) (D) T = 2pi*sqrt(m/k), d_m = d

**52.** A student says that he had applied a force F = -k*sqrt(x) on a particle and the particle performs simple harmonic motion. He refuses to tell whether k is a constant or not. Assume that he has worked only with positive x and no other force acted on the particle, then:
(A) As x increase, k increases (B) As x increases, k decreases (C) As x increases, k remains constant (D) The motion cannot be simple harmonic

**53.** A block of mass M is suspended from a massless spring. If an additional mass m is kept on the block, the spring stretches further by a distance x. The combined mass will oscillate with a period:
(A) 2pi*sqrt((M+m)x/(mg)) (B) 2pi*sqrt(mx/(2(M+m)g)) (C) 2pi*sqrt((M+m)/(mgx)) (D) (pi/2)*sqrt(mx/((M+m)g))

**\*54.** Displacement vs. time curve for a particle executing S.H.M. is shown in figure. The phase of the oscillator is same at:
(A) t = 0 s and t = 2 s (B) t = 2 s and t = 6 s (C) t = 1 s and t = 7 s (D) t = 1 s and t = 5 s

**\*55.** Which of the following statements is/are true for a simple harmonic oscillator?
(A) Force acting is directly proportional to displacement from the mean position and opposite to it. (B) Motion is periodic (C) Acceleration of the oscillator is constant (D) The velocity is periodic

**\*56.** A particle is in linear simple harmonic motion between two points A and B, 10 cm apart. Take the direction from A to B as the +ve direction and choose the correct statements. AO = OB = 5 cm, BC = 8 cm.
(A) The sign of velocity, acceleration and force on the particle when it is 3 cm away from A going towards B are positive (B) The sign of velocity of the particle at C going towards O is negative (C) The sign of velocity, acceleration and force on the particle when it is 4 cm away from B going towards A are negative (D) The sign of acceleration and force on the particle when it is at point B is negative

---

### SHM: JEE MAIN ARCHIVE

**1.** [2002] If a spring has time period T and is cut into n equal parts, then the time period of each part will be:
(A) T*sqrt(n) (B) T/sqrt(n) (C) nT (D) T
**Ans: B**

**2.** [2002] In a simple harmonic oscillator, at the mean position,
(A) kinetic energy is minimum and potential energy is maximum (B) both kinetic and potential energies are maximum (C) kinetic energy is maximum and potential energy is minimum (D) both kinetic and potential energies are minimum
**Ans: C**

**3.** [2002] A child swinging on a swing in sitting position stands up, then the time period of the swing will:
(A) increase (B) decrease (C) remain the same (D) increase if the child is long and decrease if the child is short
**Ans: B**

**4.** [2003] A mass M is suspended from a spring of negligible mass. The spring is pulled a little and then released so that the mass executes simple harmonic motion of time period T. If the mass is increased by m, the time period becomes 5T/3. Then the ratio of m/M is:
(A) 3/5 (B) 25/9 (C) 16/9 (D) 5/3
**Ans: C**

**5.** [2003] The length of a simple pendulum executing SHM is increased by 21%. The percentage increase in the time period of the pendulum is:
(A) 11% (B) 21% (C) 42% (D) 10%
**Ans: D**

**6.** [2003] The displacement of a particle varies according to the relation X = 4(cos(pi*t) + sin(pi*t)). The amplitude of the particle is:
(A) -4 (B) 4 (C) 4*sqrt(2) (D) 8
**Ans: C**

**7.** [2003] A body executes SHM. The potential energy (PE), the kinetic energy (KE), and the total energy (TE) are measured as a function of displacement X. Which of the following statements is true?
(A) KE is maximum when X = 0 (B) TE is zero when X = 0 (C) KE is maximum when X is maximum (D) PE is maximum when X = 0
**Ans: A**

**8.** [2003] Two particles A and B of equal masses are suspended from two massless springs of spring constants k1 and k2, respectively. If the maximum velocities during oscillations are equal, the ratio of the amplitudes of A and B is:
(A) sqrt(k1/k2) (B) k1/k2 (C) sqrt(k2/k1) (D) k2/k1
**Ans: C**

**9.** [2004] The bob of a simple pendulum executes SHM in water with a period t, while the period of oscillation of the bob is t_0 in air. Neglecting the frictional force of water and given that the density of the bob is (4/3) x 1000 kg/m^3. What relationship between t and t_0 is true?
(A) t = t_0 (B) t = 4t_0 (C) t = 2t_0 (D) t = t_0/2
**Ans: C**

**10.** [2004] A particle at the end of a spring executes SHM with a period t1. While the corresponding period for another spring is t2. If the period of oscillation with the two springs in series is T, then:
(A) T = t1 + t2 (B) T^(-2) = t1^(-2) + t2^(-2) (C) T^(-1) = t1^(-1) + t2^(-1) (D) T^2 = t1^2 + t2^2
**Ans: D**

**11.** [2004] The total energy of a particle executing SHM is (where X is the displacement from the mean position):
(A) proportional to X (B) proportional to X^(1/2) (C) independent of X (D) proportional to X^2
**Ans: C**

**12.** [2004] A particle of mass m is attached to a spring (of spring constant k) and has a natural angular frequency omega_0. An external force F(t) proportional to cos(omega*t) (omega != omega_0) is applied to the oscillator. The time displacement of the oscillator will be proportional to:
(A) m/(omega_0^2 - omega^2) (B) 1/(m(omega_0^2 - omega^2)) (C) 1/(m(omega_0^2 + omega^2)) (D) m/(omega_0^2 + omega^2)
**Ans: B**

**13.** [2004] In forced oscillation of a particle, the amplitude is maximum for a frequency omega_1 of the force, while the energy is maximum for a frequency omega_2 of the force, then:
(A) omega_1 = omega_2 (B) omega_1 > omega_2 (C) omega_1 < omega_2, when damping is small and omega_1 > omega_2 when damping is large (D) omega_1 < omega_2
**Ans: A**

**14.** [2005] The function sin^2(omega*t) represents:
(A) a periodic motion, but not SHM with a period 2pi/omega (B) a periodic motion, but not SHM with a period pi/omega (C) an SHM with a period 2pi/omega (D) an SHM with a period pi/omega
**Ans: D**

**15.** [2005] Two SHMs are represented by the equations y1 = 0.1sin[100pi*t + (pi/3)] and y2 = 0.1cos(pi*t). The phase difference of the velocity of particle 1 with respect to the velocity of particle 2 at t = 0 is:
(A) -pi/6 (B) pi/3 (C) -pi/3 (D) pi/6
**Ans: A**

**16.** [2005] If an SHM is represented by d^2x/dt^2 + alpha*x = 0, its time period is:
(A) 2pi/alpha (B) 2pi/sqrt(alpha) (C) 2pi*alpha (D) 2pi*sqrt(alpha)
**Ans: B**

**17.** [2005] The bob of simple pendulum is a spherical hollow ball filled with water. A plugged hole near the bottom of the oscillating bob gets suddenly unplugged. During observation, till water is coming out, the time period of oscillation would:
(A) first increase and then decrease to the original value (B) first decrease and then increase to the original value (C) remain unchanged (D) increase towards a saturation value
**Ans: A**

**18.** [2006] The maximum velocity of a particle executing SHM with an amplitude 7 mm is 4.4 m/s. The period of oscillation is:
(A) 0.01 s (B) 10 s (C) 0.1 s (D) 100 s
**Ans: A**

**19.** [2006] Starting from origin at t = 0, a body oscillates simple harmonically with a period of 2 s. After what time will its kinetic energy be 75% of the total energy?
(A) 1/6 s (B) 1/4 s (C) 1/3 s (D) 1/12 s
**Ans: A**

**20.** [2006] A coin is placed on a horizontal platform which undergoes vertical SHM of angular frequency omega. The amplitude of oscillation is gradually increased. The coin will leave contact with platform for the first time:
(A) at the mean position of platform (B) for an amplitude g/omega^2 (C) for an amplitude g^2/omega^2 (D) at the lowest position of the platform
**Ans: B**

**21.** [2007] Two springs of force constants K1 and K2 are connected to a mass m as shown. The frequency of oscillation of the mass is f. If both K1 and K2 are made four times their original values, the frequency of oscillation becomes:
(A) f/4 (B) 4f (C) 2f (D) f/2
**Ans: C**

**22.** [2007] A particle of mass m executes SHM with amplitude a and frequency v. The average kinetic energy during its motion from the position of equilibrium to the end is:
(A) (1/4)m*a^2*v^2 (B) 4pi^2*m*a^2*v^2 (C) 2pi^2*m*a^2*v^2 (D) pi^2*m*a^2*v^2
**Ans: D**

**23.** [2007] The displacement of an object attached to a spring and executing SHM is given by x = 2 x 10^(-2) cos(pi*t). The time at which the maximum speed first occurs is:
(A) 0.75 s (B) 0.125 s (C) 0.25 s (D) 0.5 s
**Ans: D**

**24.** [2007] A point mass oscillates along the x-axis according to the law x = x_0 cos(omega*t - pi/4). If the acceleration of the particle is written as a = A cos(omega*t + delta), then:
(A) A = x_0*omega^2, delta = pi/4 (B) A = x_0*omega^2, delta = -pi/4 (C) A = x_0*omega^2, delta = 3pi/4 (D) A = x_0, delta = -pi/4
**Ans: C**

**25.** [2009] If x, v and a denote the displacement, velocity, and acceleration of a particle executing SHM of time period T, then which of the following does not change with time?
(A) a^2*T + 4pi^2*v^2 (B) aT/x (C) aT + 2pi*v (D) aT/v
**Ans: B**

**26.** [2011] A mass M, attached to a horizontal spring, executes SHM with amplitude A1. When the mass M passes through its mean position then a smaller mass m is placed over it and both of them move together with amplitude A2. The ratio of (A1/A2) is:
(A) M/(M+m) (B) (M+m)/M (C) (M/(M+m))^(1/2) (D) ((M+m)/M)^(1/2)
**Ans: D**

**27.** [2011] Two particles are executing simple harmonic motion of the same amplitude A and frequency omega along the x-axis. Their mean position is separated by distance X_0 (X_0 > A). If the maximum separation between them is (X_0 + A), the phase difference between their motion is:
(A) pi/2 (B) pi/3 (C) pi/4 (D) pi/6
**Ans: B**

**28.** [2011] A wooden cube (density of wood d) of side l floats in a liquid of density rho with its upper and lower surfaces horizontal. If the cube is pushed slightly down and released, it performs simple harmonic motion period, T. Then, T is equal to:
(A) 2pi*sqrt(l*rho/((rho-d)*g)) (B) 2pi*sqrt(l*rho/(rho*g)) (C) 2pi*sqrt(l*rho/(d*g)) (D) 2pi*sqrt(l*d/((rho-d)*g))
**Ans: B**

**29.** [2011] If a spring of stiffness k is cut into two parts A and B of length l_A : l_B = 2 : 3, then the stiffness of spring A is given by:
(A) 5k/2 (B) 3k/5 (C) 2k/5 (D) k
**Ans: A**

**30.** [2012] If a simple pendulum has significant amplitude (upto a factor of 1/e of original) only in the period between t = 0s to t = tau s, then tau may be called the average life of the pendulum. When the spherical bob of the pendulum suffers a retardation (due to viscous drag) proportional to its velocity with b as the constant of proportionality, the average life time of the pendulum (assuming damping is small) in seconds is:
(A) 0.693/b (B) b (C) 1/b (D) 2/b
**Ans: D**

**31.** [2013] An ideal gas enclosed in a vertical cylindrical container supports a freely moving piston of mass M. The piston and cylinder have equal cross sectional area A. When the piston is in equilibrium, the volume of the gas is V_0 and its pressure is P_0. The piston is slightly displaced from the equilibrium position and released. Assuming that the system is completely isolated from its surrounding, the piston executes a simple harmonic motion with frequency:
(A) (1/(2pi))*sqrt(V_0*M*P_0/(A^2*gamma)) (B) (1/(2pi))*sqrt(A^2*gamma*P_0/(M*V_0)) (C) (1/(2pi))*sqrt(M*V_0/(A*gamma*P_0)) (D) (1/(2pi))*sqrt(A*gamma*P_0/(V_0*M))
**Ans: B**

**32.** [2013] The amplitude of a damped oscillator decreases to 0.9 times its original magnitude in 5s. In another 10 s it will decrease to alpha times its original magnitude, where alpha equals:
(A) 0.81 (B) 0.729 (C) 0.6 (D) 0.7
**Ans: B**

**33.** [2014] A particle moves with simple harmonic motion in a straight line. In first tau s, after starting from rest it travels a distance a, and in next tau s it travels 2a, in same direction, then:
(A) amplitude of motion is 4a (B) time period of oscillations is 6*tau (C) time period of oscillations is 6*tau (D) time period of oscillations is 8*tau
**Ans: B**

**34.** [2015] For a simple pendulum, a graph is plotted between its kinetic energy (KE) and potential energy (PE) against its displacement d. Which one of the following represents these correctly?
(A) Graph A (B) Graph B (C) Graph C (D) Graph D
**Ans: B**

**35.** [2016] A particle performs simple harmonic motion with amplitude A. Its speed is tripled at the instant that it is at a distance 2A/3 from equilibrium position. The new amplitude of the motion is:
(A) (A/3)*sqrt(41) (B) 3A (C) A*sqrt(3) (D) 7A/3
**Ans: A**

**36.** [2017] A particle is executing simple harmonic motion with a time period T. At time t = 0, it is at its position of equilibrium. The kinetic energy-time graph of the particle will look like:
(A) starts at max, period T (B) starts at zero, period T/2 (C) starts at zero, period T (D) starts at max, period T/2
**Ans: A**

**37.** [2018] A silver atom in a solid oscillates in simple harmonic motion in some direction with a frequency of 10^12 per second. What is the force constant of the bonds connecting one atom with the other? (Take, molecular weight of silver = 108 and Avogadro number = 6.02 x 10^23 g/mol)
(A) 6.4 N/m (B) 7.1 N/m (C) 2.2 N/m (D) 5.5 N/m
**Ans: B**

**38.** [2019] The position co-ordinates of a particle moving in a 3-D coordinate system is given by x = a cos(omega*t), y = a sin(omega*t) and z = a*omega*t. The speed of the particle is:
(A) 2a*omega (B) sqrt(2)*a*omega (C) a*omega (D) sqrt(3)*a*omega
**Ans: B**

**39.** [2019] A particle is executing simple harmonic motion (SHM) of amplitude A, along the x-axis, about x = 0. When its potential Energy (PE) equals kinetic energy (KE), the position of the particle will be:
(A) A/sqrt(2) (B) A/(2*sqrt(2)) (C) A (D) A/2
**Ans: A**

**40.** [2019] A rod of mass M and length 2L is suspended at its middle by a wire. It exhibits torsional oscillations; If two masses each of m are attached at distance L/2 from its centre on both sides, it reduces the oscillation frequency by 20%. The value of ratio m/M is close to:
(A) 0.57 (B) 0.37 (C) 0.77 (D) 0.17
**Ans: B**

**41.** [2019] A block of mass m, lying on a smooth horizontal surface, is attached to a spring (of negligible mass) of spring constant k. The other end of the spring is fixed, as shown in the figure. The block is initially at rest in its equilibrium position. If now the block is pulled with a constant force F, the maximum speed of the block is:
(A) F/sqrt(mk) (B) pi*F/sqrt(mk) (C) F/(pi*sqrt(mk)) (D) 2F/sqrt(mk)
**Ans: A**

**42.** [2019] A particle executes simple harmonic motion with an amplitude of 5 cm. When the particle is at 4 cm from the mean position, the magnitude of its velocity in SI units is equal to that of its acceleration. Then its periodic time in seconds is:
(A) (7/3)*pi (B) 8pi/3 (C) 3/8*pi (D) 4pi/3
**Ans: B**

**43.** [2019] The mass and the diameter of a planet are three times the respective values for the Earth. The period of oscillation of a simple pendulum on the Earth is 2s. The period of oscillation of the same pendulum on the planet would be:
(A) 2/sqrt(3) s (B) 3/2 s (C) 2*sqrt(3) s (D) sqrt(3)/2 s
**Ans: C**

**44.** [2019] A pendulum is executing simple harmonic motion and its maximum kinetic energy is K1. If the length of the pendulum is doubled and it performs simple harmonic motion with the same amplitude as in the first case, its maximum kinetic energy is K2. Then:
(A) K2 = 2K1 (B) K2 = K1 (C) K2 = K1/4 (D) K2 = K1/2
**Ans: D**

**45.** [2019] A simple harmonic motion is represented by: y = 5(sin(3pi*t) + sqrt(3)cos(3pi*t)) cm. The amplitude and time period of the motion are:
(A) 10 cm, 3/2 s (B) 5 cm, 3/2 s (C) 10 cm, 2/3 s (D) 5 cm, 2/3 s
**Ans: C**

**46.** [2019] A simple pendulum, made of a string of length l and a bob of mass m, is released from a small angle theta_0. It strikes a block of mass M, kept on a horizontal surface at its lowest point of oscillations, elastically. It bounces back and goes up to an angle theta_1. Then M is given by:
(A) (m/2)*(theta_0 + theta_1)/(theta_0 - theta_1) (B) m*(theta_0 - theta_1)/(theta_0 + theta_1) (C) m*(theta_0 + theta_1)/(theta_0 - theta_1) (D) (m/2)*(theta_0 - theta_1)/(theta_0 + theta_1)
**Ans: B**

**47.** [2019] Two light identical springs of spring constant k are attached horizontally at the two ends of a uniform horizontal rod AB of length l and mass m. The rod is pivoted at its centre O and can rotate freely in horizontal plane. The other ends of the two springs are fixed to rigid supports as shown in figure. The rod is gently pushed through a small angle and released. The frequency of resulting oscillation is:
(A) (1/(2pi))*sqrt(6k/m) (B) (1/(2pi))*sqrt(3k/m) (C) (1/(2pi))*sqrt(2k/m) (D) (1/(2pi))*sqrt(k/m)
**Ans: A**

**48.** [2019] A damped harmonic oscillator has a frequency of 5 oscillations per second. The amplitude drops to half its value for every 10 oscillations. The time it will take to drop to 1/1000 of the original amplitude is close to:
(A) 100 s (B) 10 s (C) 50 s (D) 20 s
**Ans: D**

**49.** [2019] A simple pendulum oscillating in air has period T. The bob of the pendulum is completely immersed in a non-viscous liquid. The density of the liquid is 1/16th of the material of the bob. If the bob is inside liquid all the time, its period of oscillation in this liquid is:
(A) 2T*sqrt(1/10) (B) 4T*sqrt(1/15) (C) 4T*sqrt(1/14) (D) 2T*sqrt(1/14)
**Ans: B**

**50.** [2019] A massless spring (k = 800 N/m), attached with a mass (500 g) is completely immersed in 1 kg of water. The spring is stretched by 2 cm and released so that it starts vibrating. What would be the order of magnitude of the change in the temperature of water when the vibrations stop completely? (Assume that the water container and spring receive negligible heat and specific heat of mass = 400 J/kg K, specific heat of water = 4184 J/kg K)
(A) 10^(-1) K (B) 10^(-4) K (C) 10^(-3) K (D) 10^(-5) K
**Ans: D**

**51.** [2019] The displacement of a damped harmonic oscillator is given by x(t) = e^(-0.1t) cos(10pi*t + phi). Here t is in seconds. The time taken for its amplitude of vibration to drop to half of its initial value is close to:
(A) 27 s (B) 4 s (C) 13 s (D) 7 s
**Ans: D**

**52.** [2019] A spring whose unstretched length is l has a force constant k. The spring is cut into two pieces of unstretched lengths l1 and l2 where, l1 = nl2 and n is an integer. The ratio k1/k2 of the corresponding force constants, k1 and k2 will be:
(A) 1/n^2 (B) n^2 (C) 1/n (D) n
**Ans: C**

**53.** [2019] A cylindrical plastic bottle of negligible mass is filled with 310 ml of water and left floating in a pond with still water. If pressed downward slightly and released, it starts performing simple harmonic motion at angular frequency omega. If the radius of the bottle is 2.5 cm then omega is close to: (density of water = 10^3 kg/m^3)
(A) 3.75 rad/s (B) 1.25 rad/s (C) 2.50 rad/s (D) 5.00 rad/s
**Ans: None**

**54.** [2019] A body of mass 1 kg falls freely from a height of 100 m, on a platform of mass 3 kg which is mounted on a spring having spring constant k = 1.25 x 10^6 N/m. The body sticks to the platform and the spring's maximum compression is found to be x. Given that g = 10 m/s^2, the value of x will be close to:
(A) 40 cm (B) 8 cm (C) 4 cm (D) 80 cm
**Ans: None**

**55.** [2019] A particle undergoing simple harmonic motion has time dependent displacement given by x(t) = A sin(pi*t/90). The ratio of kinetic to potential energy of this particle at t = 210s will be:
(A) 1/9 (B) 2 (C) 1 (D) 3
**Ans: None**

**56.** [2019] Two masses m and m/2 are connected at the two ends of a massless rigid rod of length l. The rod is suspended by a thin wire of torsional constant k at the centre of mass of the rod-mass system (see figure). Because of torsional constant k, the restoring torque is tau = k*theta for angular displacement theta. If the rod is rotated by theta_0 and released, the tension in it when it passes through its mean position will be:
(A) 3k*theta_0^2/l (B) k*theta_0^2/(2l) (C) 2k*theta_0^2/l (D) k*theta_0^2/l
**Ans: D**

---

### SHM: JEE ADVANCED ARCHIVE

#### Single Option Correct Type

**1.** [1988] Two bodies M and N, of equal masses, are suspended from two separate massless springs of spring constants k1 and k2, respectively. If the two bodies oscillate vertically such that their maximum velocities are equal, the ratio of the amplitude of vibration of M to that of N is:
(A) k1/k2 (B) sqrt(k1/k2) (C) k2/k1 (D) sqrt(k2/k1)
**Ans: D**

**2.** [1992] A highly rigid cubical block A of small mass M and side L is fixed rigidly on to another cubical block B of the same dimensions and of low modulus of rigidity eta such that the lower face of B is rigidly held on a horizontal surface. A small force is applied perpendicular to the side faces of A. After the force is withdrawn, block A executes small oscillations the time period of which is given by:
(A) 2pi*sqrt(M*eta*L) (B) 2pi*sqrt(M - eta) (C) 2pi*sqrt((M-L)/eta) (D) 2pi*sqrt(M/(eta*L))
**Ans: D**

**3.** [1993] One end of a long metallic wire of length L is tied to the ceiling. The other end is tied to massless spring of spring constant K. A mass m hangs freely from the free end of the spring. The area of cross-section and the Young's modulus of the wire are A and Y, respectively. If the mass is slightly pulled down and released, it will oscillate with a time period T equal to:
(A) 2pi*sqrt(m/K) (B) 2pi*sqrt(m(YA + KL)/(YAK)) (C) 2pi*sqrt(mYA/(KL)) (D) 2pi*sqrt(mL/(YA))
**Ans: B**

**4.** [1998] A particle of mass m is executing oscillations about the origin on x-axis. Its potential energy is V(x) = k|x|^3 where k is a positive constant. If the amplitude of oscillation is a, then its time period T is:
(A) proportional to 1/sqrt(a) (B) independent of a (C) proportional to sqrt(a) (D) proportional to a^(3/2)
**Ans: A**

**5.** [1999] A particle free to move along the x-axis has potential energy given by U(x) = k[1 - e^(-x^2)] for -infinity <= x <= +infinity, where k is positive constant of appropriate dimensions. Then:
(A) at points away from the origin, the particle is in unstable equilibrium (B) for any finite non-zero value of x, there is a force directed away from the origin (C) if its total mechanical energy is k/2, it has its minimum kinetic energy at the origin (D) for small displacements from x = 0, the motion is simple harmonic
**Ans: D**

**6.** [2000] The period of oscillation of a simple pendulum of length L suspended from the roof of a vehicle which moves without friction down an inclined plane of inclination alpha, is given by:
(A) 2pi*sqrt(L/(g*cos(alpha))) (B) 2pi*sqrt(L/(g*sin(alpha))) (C) 2pi*sqrt(L/g) (D) 2pi*sqrt(L/(g*tan(alpha)))
**Ans: A**

**7.** [2001] A particle executes simple harmonic motion between x = -A and x = +A. The time taken for it to go from 0 to A/2 is T1 and to go from A/2 to A is T2. Then:
(A) T1 < T2 (B) T1 > T2 (C) T1 = T2 (D) T1 = 2T2
**Ans: A**

**8.** [2003] For a particle executing SHM, the displacement x is given by x = A cos(omega*t). Identify the graph which represents the variation of potential (PE) as a function of t and displacement x.
(A) I, III (B) II, IV (C) II, III (D) I, IV
**Ans: C**

**9.** [2004] A block P of mass m is placed on a smooth horizontal surface. A block Q of same mass is placed over the block P and the coefficient of static friction between them is mu. A spring of spring constant K is attached to block Q. The blocks are displaced together to a distance A and released. The upper block oscillates without slipping over the lower block. The maximum frictional force between the block is:
(A) zero (B) kA (C) (1/2)kA (D) mu*mg
**Ans: C**

**10.** [2004] A sphere of radius R is half submerged in liquid of density rho. If the sphere is slightly pushed down and released, find the frequency of oscillation:
(A) (1/(2pi))*sqrt(3g/(2R)) (B) (1/pi)*sqrt(3g/(2R)) (C) (1/(2pi))*sqrt(3g/R) (D) (1/(4pi))*sqrt(3g/R)
**Ans: A**

**11.** [2005] A simple pendulum has time period T1. The point of suspension is now moved upward according to the relation y = Kt^2 (K = 1 m/s^2), where y is the vertical displacement. The time period now becomes T2. The ratio T1^2/T2^2 is (g = 10 m/s^2):
(A) 5/6 (B) 6/5 (C) 1 (D) 4/5
**Ans: B**

**12.** [2009] The x-t graph of a particle undergoing simple harmonic motion is shown below. The acceleration of the particle at t = 4/3 s is:
(A) (sqrt(3)/32)*pi^2 cm/s^2 (B) (-pi^2/32) cm/s^2 (C) (pi^2/32) cm/s^2 (D) (-sqrt(3)/32)*pi^2 cm/s^2
**Ans: D**

**13.** [2009] A uniform rod of length L and mass M is pivoted at the centre. Its two ends are attached to two springs of equal spring constants k. The springs are fixed to rigid supports as shown in the figure, and rod is free to oscillate in the horizontal plane. The rod is gently pushed through a small angle theta in one direction and released. The frequency of oscillation is:
(A) (1/(2pi))*sqrt(2k/M) (B) (1/(2pi))*sqrt(k/M) (C) (1/(2pi))*sqrt(6k/M) (D) (1/(2pi))*sqrt(24k/M)
**Ans: C**

**14.** [2011] A point mass is subjected to two simultaneous sinusoidal displacements in x-direction, x1(t) = A sin(omega*t) and x2(t) = A sin(omega*t + 2pi/3). Adding a third sinusoidal displacement x3(t) = B sin(omega*t + phi) brings the mass to a complete rest. The values of B and phi are:
(A) sqrt(2)*A, 3pi/4 (B) A, 4pi/3 (C) sqrt(3)*A, 5pi/6 (D) A, pi/3
**Ans: B**

**15.** [2012] A small block is connected to one end of a massless spring of un-stretched length 4.9 m. The other end of the spring is fixed. The system lies on a horizontal frictionless surface. The spring is stretched by 0.2 m and released from rest at t = 0. It then executes simple harmonic motion with angular frequency omega = pi/3 rad/s. Simultaneously at t = 0, a small pebble is projected with speed v from point P at a horizontal distance of 10 m from O. If the pebble hits the block at t = 1 s, the value of v is (Take g = 10 m/s^2):
(A) sqrt(50) m/s (B) sqrt(51) m/s (C) sqrt(52) m/s (D) sqrt(53) m/s
**Ans: A**

#### Multiple Options Correct Type

**\*16.** [1989] A linear harmonic oscillator of force constant 2 x 10^6 N/m and amplitude 0.01 m has a total mechanical energy of 160 J. Its:
(A) maximum potential energy is 100 J (B) maximum kinetic energy is 100 J (C) maximum potential energy is 160 J (D) minimum potential energy is zero
**Ans: BC**

**\*17.** [1999] Three simple harmonic motions in the same direction having the same amplitude a and same period are superposed. If each differs in phase from the next by 45 degrees, then:
(A) the resultant amplitude is (1 + sqrt(2))a (B) the phase of the resultant motion relative to the first is 90 degrees (C) the energy associated with the resulting motion is (3 + 2*sqrt(2)) times the energy associated with any single motion (D) the resulting motion is not simple harmonic
**Ans: AC**

**\*18.** [2006] Function x = A sin^2(omega*t) + B cos^2(omega*t) + C sin(omega*t) cos(omega*t) represents SHM:
(A) For any value of A, B and C (except C = 0) (B) If A = -B, C = 2B, amplitude = |B*sqrt(2)| (C) If A = B; C = 0 (D) If A = B; C = 2B, amplitude = |B|
**Ans: BD**

**\*19.** [2011] A metal rod of length L and mass m is pivoted at one end. A thin disk of mass M and radius R (< L) is attached at its centre to the free end of the rod. Consider two ways the disc is attached: (case A) - The disc is not free to rotate about its centre and (case B) - the disc is free to rotate about its centre. The rod-disc system after being released from the same displaced position. Which of the following statement(s) is(are) true?
(A) Restoring torque in case A = Restoring torque in case B (B) Restoring torque in case A < Restoring torque in case B (C) Angular frequency for case A > Angular frequency for case B (D) Angular frequency for case A < Angular frequency for case B
**Ans: AD**

**\*20.** [2013] A particle of mass m is attached to one end of a massless spring of force constant k, lying on a frictionless horizontal plane. The other end of the spring is fixed. The particle starts moving horizontally from its equilibrium position at time t = 0 with an initial velocity u_0. When the speed of the particle is 0.5u_0. It collides elastically with a rigid wall. After this collision:
(A) the speed of the particle when it returns to its equilibrium position is u_0 (B) the time at which the particle passes through the equilibrium position for the first time is t = pi*sqrt(m/k) (C) the time at which the maximum compression of the spring occurs is t = (4pi/3)*sqrt(m/k) (D) the time at which the particle passes through the equilibrium position for the second time is t = (5pi/3)*sqrt(m/k)
**Ans: ABD**

**\*21.** [2015] Two independent harmonic oscillators of equal mass are oscillating about the origin with angular frequencies omega_1 and omega_2 and have total energies E1 and E2, respectively. The variations of their momenta p with positions x are shown in the figures. If a/b = n^2 and a/R = n, then the correct equation(s) is(are):
(A) E1*omega_1 = E2*omega_2 (B) omega_2/omega_1 = n^2 (C) omega_1*omega_2 = n^2 (D) E1/omega_1 = E2/omega_2
**Ans: BD**

**\*22.** [2016] A block with mass M is connected by a massless spring with stiffness constant k to a rigid wall and moves without friction on a horizontal surface. The block oscillates with small amplitude A about an equilibrium position x_0. Consider two cases: (i) when the block is at x_0 and (ii) when the block is at x = x_0 + A. In both the cases, a particle with mass m (< M) is softly placed on the block after which they stick to each other. Which of the following statement(s) is (are) true about the motion after the mass m is placed on the mass M?
(A) The amplitude of oscillation in the first case changes by a factor of sqrt(M/(m+M)), whereas in the second case it remains unchanged (B) The final time period of oscillation in both the cases is same (C) The total energy decreases in both the cases (D) The instantaneous speed at x_0 of the combined masses decreases in both the cases
**Ans: ABD**

**\*23.** [2019] A block of mass 2M is attached to a massless spring with spring-constant k. This block is connected to two other blocks of masses M and 2M using two massless pulleys and strings. The accelerations of the blocks are a1, a2 and a3 as shown in the figure. The system is released from rest with the spring in its unstretched state. The maximum extension of the spring is x_0. Which of the following option(s) is(are) correct? [g is the acceleration due to gravity. Neglect friction]
(A) a2 - a1 = a1 - a3 (B) At an extension of x_0/4 of the spring, the magnitude of acceleration of the block connected to the spring is 3g/10 (C) x_0 = 4Mg/k (D) When spring achieves an extension of x_0/2 for the first time, the speed of the block connected to the spring is 3g*sqrt(M/(5k))
**Ans: A**

#### Linked Comprehension Type

**Paragraph for Questions 24-26:** [2008] A uniform thin cylindrical disc of mass M and radius R is attached to two identical massless springs of spring constant k which are fixed to the wall as shown in the figure. The springs are attached to the axle of the disk symmetrically on either side at a distance d from its centre. The axle is massless and both the springs and the axle are in horizontal plane. The unstretched length of each spring is L. The disc is initially at its equilibrium position with its centre of mass (CM) at a distance L from the wall. The disc rolls without slipping with velocity V_0 = V_0*i-hat. The coefficient of friction is mu.

**24.** The net external force acting on the disc when its centre of mass is at displacement x with respect to its equilibrium position is:
(A) -kx (B) -2kx (C) -2kx/3 (D) -4kx/3
**Ans: D**

**25.** The centre of mass of the disc undergoes simple harmonic motion with angular frequency omega equal to:
(A) sqrt(k/M) (B) sqrt(2k/M) (C) sqrt(2k/(3M)) (D) sqrt(4k/(3M))
**Ans: D**

**26.** The maximum value of V_0 for which the disc will roll without slipping is:
(A) mu*g*sqrt(M/k) (B) mu*g*sqrt(M/(2k)) (C) mu*g*sqrt(3M/k) (D) mu*g*sqrt(5M/k)
**Ans: C**

**Paragraph for Questions 27-29:** [2010] When a particle of mass m moves on the x-axis in a potential of the form V(x) = kx^2 it performs simple harmonic motion. The corresponding time period is proportional to sqrt(m/k), as can be seen easily using dimensional analysis. However, the motion of a particle can be periodic even when its potential energy increases on both sides of x = 0 in a way different from kx^2 and its total energy is such that the particle does not escape to infinity. Consider a particle of mass m moving on the x-axis. Its potential energy is V(x) = alpha*x^4 (alpha > 0) for |x| near the origin and becomes a constant equal to V_0 for |x| >= X_0.

**27.** If the total energy of the particle is E, it will perform periodic motion only if:
(A) E < 0 (B) E > 0 (C) V_0 > E > 0 (D) E > V_0
**Ans: C**

**28.** For periodic motion of small amplitude A, the time period T of this particle is proportional to:
(A) A*sqrt(m/alpha) (B) (1/A)*sqrt(m/alpha) (C) A*sqrt(alpha/m) (D) A*sqrt(2*alpha/m)
**Ans: B**

**29.** The acceleration of this particle for |x| > X_0 is:
(A) proportional to V_0 (B) proportional to V_0/(m*X_0) (C) proportional to sqrt(V_0/(m*X_0)) (D) zero
**Ans: D**

**Paragraph for Questions 30-32:** [2011] Phase space diagrams are useful tools in analyzing all kinds of dynamical problems. They are especially useful in studying the changes in motion as initial position and momentum are changed. Here we consider some simple dynamical systems in one dimension. For such systems, phase space is a plane in which position is plotted along horizontal axis and momentum is plotted along vertical axis.

**30.** The phase space diagram for a ball thrown vertically up from ground is:
(A) Clockwise loop (B) Counter-clockwise open curve (C) Clockwise open curve with cusp at top (D) Counter-clockwise loop
**Ans: D**

**31.** The phase space diagram for simple harmonic motion is a circle centred at the origin. In the figure, the two circles represent the same oscillator but for different initial conditions, and E1 and E2 are the total mechanical energies respectively. Then:
(A) E1 = sqrt(2)*E2 (B) E1 = 2E2 (C) E1 = 4E2 (D) E1 = 16E2
**Ans: C**

**32.** Consider the spring-mass system, with the mass submerged in water, as shown in the figure. The phase space diagram for one cycle of this system is:
(A) Clockwise spiral inward (B) Counter-clockwise spiral inward (C) Clockwise spiral (D) Counter-clockwise spiral
**Ans: B**

#### Match Matrix Type

**33.** [2007] Column-I describes some situations in which a small object moves. Column-II describes some characteristics of these motions. Match situations in Column-I with the characteristics in Column-II.
Column I: (A) The object moves on the x-axis under a conservative force in such a way that its speed and position satisfy v = c1*sqrt(c2 - x^2), where c1 and c2 are positive constants. (B) The object moves on the x-axis in such a way that its velocity and its displacement from the origin satisfy v = -kx, where k is positive constant. (C) The object is attached to one end of a massless spring of a given spring constant. The other end of the spring is attached to the ceiling of an elevator. Initially everything is at rest. The elevator starts going upwards with a constant acceleration a. The motion of the object is observed from the elevator during the period it maintains this acceleration. (D) The object is projected from the earth's surface vertically upwards with a speed 2*sqrt(GM_e/R_e), M_e is the mass of the earth and R_e is the radius of the earth. Neglect forces from objects other than the earth.
Column II: (P) The object executes a simple harmonic motion. (Q) The object does not change its direction of motion. (R) The kinetic energy of the object keeps on decreasing. (S) The object can change its direction only once.
**Ans: A-P; B-Q, R; C-P; D-Q, R**

**34.** [2008] Column-I gives a list of possible set of parameters measured in some experiments. The variations of the parameters in the form of graphs are shown in Column-II. Match the set of parameters given in Column-I with the graph given in Column-II.
Column I: (A) Potential energy of a simple pendulum (y-axis) as a function of displacement (x-axis). (B) Displacement (y-axis) as a function of time (x-axis) for a one dimensional motion at zero or constant acceleration when the body is moving along the positive x-direction. (C) Range of a projectile (y-axis) as a function of its velocity (x-axis) when projected at a fixed angle. (D) The square of the time period (y-axis) of a simple pendulum as a function of its length (x-axis).
Column II: (P) Parabola opening up (Q) Straight line with positive slope through origin (R) Parabola opening right (S) Straight line with positive slope not through origin
**Ans: A-P, S; B-Q, S; C-S; D-Q**

#### Numerical Value Type

**N.35.** [1979] A mass M attached to a spring oscillates with a period of 2s. If the mass is increased by 2 kg the period increases by one sec. Find the initial mass M (in kg) assuming that Hooke's law is obeyed.
**Ans: 1.6**

**N.36.** [1996] A block is kept on a horizontal table. The table is undergoing simple harmonic motion of frequency 3 Hz in a horizontal plane. The coefficient of static friction between the block and the table is 0.72. Find the maximum amplitude in cm of the table for which the block does not slip on the surface of the table.
**Ans: 2**

**N.37.** [2001] A particle executes simple harmonic motion between x = -A and x = +A. It makes time t1 to go from 0 to A/2 and t2 to go from A/2 to A. Find the ratio T2/T1.
**Ans: 2**

**N.38.** [2010] A 0.1 kg mass is suspended from a wire of negligible mass. The length of the wire is 1 m and its cross-sectional area is 4.9 x 10^(-7) m^2. If the mass is pulled a little in the vertically downward direction and released, it performs simple harmonic motion of angular frequency 140 rad/s. If the Young's modulus of the material of the wire is n x 10^9 N/m^2, the value of n is.
**Ans: 4**

**N.39.** [2018] A spring-block system is resting on a frictionless floor as shown in the figure. The spring constant is 2.0 N/m and the mass of the block is 2.0 kg. Ignore the mass of the spring. Initially the spring is in an unstretched condition. Another block of mass 1.0 kg moving with a speed of 2.0 m/s collides elastically with the first block. The collision is such that the 2.0 kg block does not hit the wall. The distance, in metres, between the two blocks when the spring returns to its unstretched position for the first time after the collision is.
**Ans: 2.09**

#### Fill in the Blanks / Subjective Type

**40.** [1981] An ideal gas is enclosed in a vertical cylindrical container and supports a freely moving piston of mass M. The piston and the cylinder have equal cross-sectional area A. Atmospheric pressure is p_0 and when the piston is in equilibrium, the volume of the gas is V_0. The piston is now displaced slightly from its equilibrium position. Assuming that the system is completely isolated from its surroundings, show that the piston executes simple harmonic motion and find the frequency of oscillation.
**Ans: (1/(2pi))*sqrt(gamma(p_0*A^2 + MgA)/(V_0*M))**

**41.** [1981] Two masses m1 and m2 are suspended together by a massless spring of spring constant k as shown in the figure. When the masses are in equilibrium, m1 is removed without disturbing the system. Find the angular frequency and amplitude of oscillation of m2.
**Ans: sqrt(k/m2), m1*g/k**

**42.** [1986] Two simple harmonic motions are represented by the equations y1 = 10 sin(3pi*t + pi/4) and y2 = 5(sin(3pi*t) + sqrt(3) cos(3pi*t)). Their amplitudes are in the ratio of.
**Ans: 1:1**

**43.** [1991] Two non-viscous, incompressible and immiscible liquids of densities rho and 1.5*rho are poured into the two limbs of a circular tube of radius R and small cross section kept fixed in a vertical plane. Each liquid occupies one fourth the circumference of the tube. (i) Find the angle theta that the radius to the interface makes with the vertical in equilibrium position. (ii) If the whole liquid column is given a small displacement from its equilibrium position, show that the resulting oscillations are simple harmonic. Find the time period of these oscillations.
**Ans: (i) tan^-1(1/5), (ii) 2.5*sqrt(R)**

**44.** [1994] An object of mass 0.2 kg executes simple harmonic oscillation along the x-axis with a frequency of (25/pi) Hz. At the position x = 0.04 m, the object has kinetic energy of 0.5 J and potential energy 0.4 J. The amplitude of oscillations is.
**Ans: 0.06**

**45.** [1996] A thin rod of length L and area of cross section S is pivoted at its lowest point P inside a stationary, homogeneous and non-viscous liquid. The rod is free to rotate in a vertical plane about a horizontal axis passing through P. The density d1 of the rod is smaller than the density d2 of the liquid. The rod is displaced by a small angle theta from its equilibrium position and then released. Show that the motion of the rod is simple harmonic and determine its angular frequency in terms of the given parameters.
**Ans: omega = sqrt(3g(d2 - d1)/(2L*d1))**

**46.** [2005] A mass m is undergoing SHM in the vertical direction about the mean position y_0 with amplitude A and angular frequency omega. At a distance y* from the mean position, the mass detaches from the spring. Assume that the spring contracts and does not obstruct the motion of m. Find the distance y* (measured from the mean position) such that the height h attained by the block is maximum. (A*omega^2 > g)
**Ans: g/omega^2**
