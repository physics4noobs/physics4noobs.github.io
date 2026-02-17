# Rotational Motion

## Overview
Rotational motion covers the physics of rigid bodies rotating about fixed or moving axes, including rotational kinematics, moment of inertia, torque, angular momentum, rolling motion, and equilibrium. This is one of the most heavily tested topics in JEE, appearing in both Main and Advanced, often combined with Newton's laws and energy conservation. Mastery requires understanding the analogies between translational and rotational quantities, and the ability to apply them to systems involving pulleys, rolling bodies, collisions, and angular impulse.

## 1. Rotational Kinematics
### Concepts
- A rigid body rotating about a fixed axis can be treated as a collection of point masses revolving in circles of different radii about the axis
- All points on the body share the same angular velocity `omega` and angular acceleration `alpha`, but have different tangential speeds and tangential accelerations depending on their distance from the axis
- **Angular velocity**: `omega = 2*pi/T` (same for all points); units: rad/s
- **Angular displacement**: `delta_theta = omega * delta_t` (for constant omega)
- **Angular acceleration**: `alpha = d(omega)/dt`; units: rad/s^2
- **Tangential velocity** of a point at distance r from axis: `v = r * omega`
- **Tangential acceleration**: `a_t = r * alpha`
- **Radial (centripetal) acceleration**: `a_r = omega^2 * r = v^2 / r`
- **Net acceleration** of a point: `a_net = sqrt(a_t^2 + a_r^2)`
- Points on the axis have zero tangential velocity; points on the circumference have maximum tangential velocity

### Formulas
- `omega = 2*pi / T = 2*pi*f`
- `v = r * omega`
- `a_t = r * alpha`
- `a_r = omega^2 * r`
- `a_net = sqrt(a_r^2 + a_t^2)`

### Key Diagram: Rotating Disc
- A disc of radius R and mass M rotates about a fixed axis through its centre perpendicular to its plane. Points at distance r from the centre move with speed `r*omega`; the rim moves with speed `R*omega`. Arrows show omega along the axis and velocity vectors tangent to circles at various radii. [SVG-REF]

### Important Notes
- `omega` and `alpha` are the same for all particles in the body, while `v` and `a_t` differ for different points
- For a point at distance r from the axis: `v = r*omega` and `a_t = r*alpha`
- `theta`, `omega`, `alpha` can be clockwise or anticlockwise. Pick one direction as positive, the other as negative
- `omega` and `theta` are always in the same direction
- `alpha` and `omega` are opposite if the body is slowing down (analogous to retardation in linear motion)

### Worked Example
**Q:** A wheel is rotating at 50 rev/min in the anticlockwise direction. What angular acceleration is needed to stop it in 8 s? How many revolutions does it cover before stopping?
**A:**
Step 1: `omega_i = 2*pi*(50/60) = 5*pi/3` rad/s, `omega_f = 0`
Step 2: `alpha = (omega_f - omega_i)/t = (0 - 5*pi/3)/8 = -5*pi/24` rad/s^2 (clockwise)
Step 3: `theta = (omega_f^2 - omega_i^2)/(2*alpha) = (0 - (5*pi/3)^2) / (2*(-5*pi/24)) = 20*pi/3` rad
Step 4: Number of revolutions = `theta/(2*pi) = 10/3` (i.e., 3 and 1/3 revolutions)

---

## 2. Rotation with Constant Angular Acceleration
### Concepts
- When angular acceleration `alpha` is constant, the rotational kinematic equations are directly analogous to the translational (SUVAT) equations
- Let `omega_i` = initial angular velocity, `omega_f` = final angular velocity, `theta` = angular displacement, `t` = time, `alpha` = angular acceleration

### Formulas
- `omega_f = omega_i + alpha * t`
- `theta = omega_i * t + (1/2) * alpha * t^2`
- `omega_f^2 = omega_i^2 + 2 * alpha * theta`

### Important Notes
- These are analogous to: `v = u + at`, `s = ut + (1/2)at^2`, `v^2 = u^2 + 2as`
- If `alpha` is not constant, use calculus: `alpha = d(omega)/dt`, `omega = d(theta)/dt`
- For non-constant alpha, integrate: `omega = omega_0 + integral(alpha dt)` and `theta = theta_0 + integral(omega dt)`

### Worked Example
**Q:** A wheel starts at rest with angular acceleration `alpha = 9 - 12t` (SI units). Find the number of revolutions before it stops and reverses.
**A:**
Step 1: `omega = integral(alpha dt) = 9t - 6t^2` (since `omega_0 = 0`)
Step 2: Set `omega = 0`: `9t - 6t^2 = 0` gives `t = 1.5 s`
Step 3: `theta = integral(omega dt) = 4.5t^2 - 2t^3`
Step 4: At `t = 1.5 s`: `theta = 4.5*(1.5)^2 - 2*(1.5)^3 = 3.375` rad
Step 5: Revolutions = `3.375/(2*pi) = 0.53`

---

## 3. Kinetic Energy of Rotating Bodies and Moment of Inertia
### Concepts
- For a system of point masses rotating with angular velocity `omega` about a fixed axis, the kinetic energy of the i-th particle is `(1/2)*m_i*v_i^2 = (1/2)*m_i*r_i^2*omega^2`
- Total rotational kinetic energy: `KE = (1/2)*I*omega^2`
- **Moment of inertia (I)**: `I = sum(m_i * r_i^2)` for discrete masses, or `I = integral(r^2 dm)` for continuous bodies
- Moment of inertia is the rotational analogue of mass -- it measures resistance to change in rotational motion
- `r` in the integral is the perpendicular distance from the axis, not from the origin

### Formulas
- `I = sum(m_i * r_i^2)` (discrete system)
- `I = integral(r^2 dm)` (continuous body)
- `KE_rot = (1/2) * I * omega^2`

### Key Diagram: System of Point Masses Rotating
- Multiple point masses m_1, m_2, m_3, ... at distances r_1, r_2, r_3, ... from a fixed axis through O, all rotating with the same omega. Each has tangential velocity `v_i = r_i * omega`. [SVG-REF]

### Important Notes
- Moment of inertia depends on the axis of rotation -- it changes when the axis changes
- For continuous bodies, choose dm elements that are all at the same perpendicular distance from the axis
- Express dm in terms of dr (or appropriate variable) using the density of the body

---

## 4. Radius of Gyration
### Concepts
- The radius of gyration `k` is the distance from the axis at which the entire mass M of the body could be concentrated to give the same moment of inertia
- `I = M * k^2`

### Formulas
- `k = sqrt(I / M)`
- `I = M * k^2`

### Important Notes
- Radius of gyration depends on the axis of rotation
- It provides a convenient way to compare moments of inertia of different bodies

---

## 5. Moment of Inertia of Standard Bodies
### Concepts
- Standard results for moment of inertia about specified axes (must be memorised for JEE):

### Formulas
- **Circular Ring** (axis through centre, perpendicular to plane): `I = MR^2`
- **Hollow Cylinder** (about geometrical axis): `I = MR^2`
- **Solid Cylinder / Disc** (about geometrical axis): `I = (1/2)*MR^2`
- **Solid Cylinder / Disc** (about perpendicular axis through centre): `I = M*(L^2/12 + R^2/4)`
- **Solid Sphere** (about diameter): `I = (2/5)*MR^2`
- **Hollow Sphere** (about diameter): `I = (2/3)*MR^2`
- **Thin Rod** (axis through midpoint, perpendicular to length): `I = M*L^2/12`
- **Thin Rod** (axis through one end, perpendicular to length): `I = M*L^2/3`
- **Cuboid (l x b x h)** (axis through centre, parallel to height h): `I = M*(l^2 + b^2)/12`
- **Rectangular Plate** (same formula as cuboid with h -> 0): `I = M*(l^2 + b^2)/12`
- **Ring about a diameter**: `I = MR^2/2`
- **Disc about a diameter**: `I = MR^2/4`

### Key Diagram: Moment of Inertia Table
- A table showing each standard body (ring, disc, sphere, rod, cylinder, cuboid) with the axis of rotation indicated by a dashed line through the body, and the corresponding I formula beside each. [SVG-REF]

### Important Notes
- For a disc with a concentric hole of radius r (total mass m, outer radius R): `I = (1/2)*m*(R^2 + r^2)`
- For a thin uniform ring, I about diameter = `MR^2/2` (using perpendicular axis theorem)

---

## 6. Parallel Axis Theorem
### Concepts
- Relates the moment of inertia about any axis to the moment of inertia about a parallel axis through the centre of mass
- If `I_CM` is the moment of inertia about an axis through the CM, then the moment of inertia about a parallel axis at distance d from the CM axis is `I_P`

### Formulas
- `I_P = I_CM + M * d^2`

### Key Diagram: Parallel Axis Theorem
- Two parallel axes shown: one through CM and one through point P at distance d away. The body of mass M is shown between them with d marked. [SVG-REF]

### Important Notes
- One of the two axes MUST pass through the centre of mass
- This theorem works for any shape and any axis orientation
- Common applications: disc about edge axis `I = (1/2)*MR^2 + MR^2 = (3/2)*MR^2`; solid sphere about tangent `I = (2/5)*MR^2 + MR^2 = (7/5)*MR^2`

### Worked Example
**Q:** The radius of gyration of a solid sphere of radius R about a certain axis is R. Find the distance of this axis from the centre of the sphere.
**A:**
Step 1: `I = MK^2 = MR^2` (given K = R)
Step 2: By parallel axis theorem: `I = I_CM + Md^2 = (2/5)*MR^2 + Md^2`
Step 3: `MR^2 = (2/5)*MR^2 + Md^2`
Step 4: `d^2 = (3/5)*R^2`, so `d = sqrt(0.6) * R`

---

## 7. Perpendicular Axis Theorem
### Concepts
- Applies ONLY to plane (2D) bodies (plates, rings, discs -- bodies with negligible thickness)
- If X and Y are two mutually perpendicular axes in the plane of the body intersecting at origin O, and Z is the axis perpendicular to the plane through O, then: `I_Z = I_X + I_Y`

### Formulas
- `I_Z = I_X + I_Y`

### Key Diagram: Perpendicular Axis Theorem
- A flat plate in the XY plane. X-axis and Y-axis are in the plane of the plate, Z-axis points out of the plane. All three axes intersect at O. [SVG-REF]

### Important Notes
- This theorem is ONLY valid for planar (2D) bodies
- Very useful for finding I about a diameter of a ring or disc: since `I_Z = I_X + I_Y` and by symmetry `I_X = I_Y`, we get `I_X = I_Z / 2`
- For a ring about diameter: `I_dia = MR^2/2`
- For a disc about diameter: `I_dia = MR^2/4`

### Worked Example
**Q:** Calculate the moment of inertia of a ring of mass M and radius R about a diameter.
**A:**
Step 1: Let X and Y axes be along two perpendicular diameters, Z perpendicular to plane
Step 2: By symmetry: `I_X = I_Y`
Step 3: By perpendicular axis theorem: `I_Z = I_X + I_Y`
Step 4: `MR^2 = 2*I_X`, so `I_X = MR^2/2`

---

## 8. Angular Momentum
### Concepts
- **For a particle**: Angular momentum about a point O is `L_vec = r_vec x (m*v_vec)`
- Magnitude: `L = m*v*r*sin(theta) = m*v*r_perp` where `r_perp` is the perpendicular distance of the velocity vector from O
- **For a particle in a circle** of radius r with speed v: `L = m*v*r`
- **For a rigid body** about a fixed axis: `L = I*omega`
- Angular momentum is a vector, with direction same as `omega` (clockwise or anticlockwise)
- Analogous to linear momentum `p = mv` in translational motion

### Formulas
- `L = r x (mv)` (vector form)
- `L = m*v*r*sin(theta) = m*v*r_perp` (scalar form for a particle)
- `L = m*v*r` (particle in circular motion)
- `L = I*omega` (rigid body about fixed axis)

### Key Diagram: Angular Momentum of a Particle
- A particle of mass m moving with velocity v. Position vector r drawn from origin O to the particle. Angle theta between r and v. The perpendicular distance `r_perp = r*sin(theta)` from O to the line of velocity is shown. [SVG-REF]

### Important Notes
- For a body moving in a straight line with constant velocity parallel to an axis away from origin, `L = m*v*(perpendicular distance from O to the line of motion)` = constant
- Angular momentum of a projectile about the point of projection at maximum height: `L = m*(v_0*cos(45))*h` where h is the max height

### Worked Example
**Q:** A particle of mass 1 kg moves along the line y = x + 2 with speed 2 m/s. Find the angular momentum about the origin.
**A:**
Step 1: `L = m*v*r_perp`
Step 2: Perpendicular distance from origin to line `x - y + 2 = 0` is `|0 - 0 + 2|/sqrt(1^2 + 1^2) = sqrt(2)` m
Step 3: `L = 1 * 2 * sqrt(2) = 2*sqrt(2)` kg m^2/s

---

## 9. Torque
### Concepts
- Torque measures the capability of a force to cause rotation
- Also called the moment of a force
- Defined as the product of the force and the perpendicular distance (force arm) from the axis of rotation to the line of action of the force
- Vector form: `tau_vec = r_vec x F_vec`
- Magnitude: `tau = r*F*sin(theta) = F*r_perp` where `r_perp = r*sin(theta)` is the perpendicular distance from axis to line of action of F
- Units: N-m (Newton-metre)
- Torque is clockwise if it tends to produce clockwise rotation, and vice-versa

### Formulas
- `tau = r x F` (vector form)
- `tau = r*F*sin(theta) = F*r_perp` (scalar form)

### Key Diagram: Torque Due to a Force
- A force F acts at point A whose position vector from the axis at O is r. The angle between r and F is theta. The perpendicular distance `r_perp = r*sin(theta)` from O to the line of action of F is shown. [SVG-REF]

### Important Notes
- Torque is a vector quantity with direction given by the right-hand rule (or cross product rule)
- `r.tau = 0` (torque is always perpendicular to r)
- `F.tau = 0` (torque is always perpendicular to F)
- Torque plays the same role in rotation as force does in linear motion

---

## 10. Couple
### Concepts
- A pair of equal and opposite forces acting along parallel lines but with different lines of action constitutes a couple
- A couple produces pure rotation without any translation
- The torque of a couple is independent of the point about which it is calculated

### Formulas
- `Torque of couple = F * l` where l is the perpendicular distance between the two forces

### Key Diagram: Couple
- Two equal and opposite forces F acting on a body along parallel lines separated by perpendicular distance l. [SVG-REF]

---

## 11. Work Done by a Torque and Rotational Power
### Concepts
- When a torque `tau` causes a body to rotate through an angle `delta_theta`, the work done is `W = tau * delta_theta`
- Rotational power: `P = tau * omega`
- These are analogous to `W = F * delta_x` and `P = F * v` in translational motion

### Formulas
- `W = tau * delta_theta`
- `P = dW/dt = tau * (d_theta/dt) = tau * omega`

---

## 12. Newton's Second Law for Rotation
### Concepts
- The rate of change of angular momentum of a body equals the net external torque acting on it
- `tau_net = dL/dt`
- For a rigid body about a fixed axis: `tau_net = I * alpha` (analogous to `F = ma`)
- This is the fundamental equation governing rotational dynamics

### Formulas
- `tau_net = dL/dt`
- `tau_net = I * alpha` (when I is constant)

### Important Notes
- `tau = I*alpha` is compared with `F = ma`; torque plays the role of force, I plays the role of mass, alpha plays the role of acceleration
- When solving pulley problems, write separate equations for translation of blocks (`F = ma`) and rotation of pulley (`tau = I*alpha`), and link them using `a = R*alpha`

### Worked Example
**Q:** A grindstone (solid cylinder) has radius 0.5 m and mass 50 kg. What torque brings it from rest to 300 rev/min in 10 s? What is its KE at 300 rev/min?
**A:**
Step 1: `omega_f = 2*pi*(300/60) = 10*pi` rad/s, `omega_i = 0`
Step 2: `alpha = (10*pi - 0)/10 = pi` rad/s^2
Step 3: `I = (1/2)*MR^2 = (1/2)*50*(0.5)^2 = 6.25` kg m^2
Step 4: `tau = I*alpha = 6.25*pi = 19.6` N-m
Step 5: `KE = (1/2)*I*omega^2 = (1/2)*6.25*(10*pi)^2 = 3084` J

---

## 13. Atwood Machine with Massive Pulley
### Concepts
- When a pulley has mass M and is modelled as a disc, it has moment of inertia `I = (1/2)*MR^2`
- The tensions on the two sides of the string are NOT equal (T_1 != T_2) because the net torque `(T_2 - T_1)*R = I*alpha` is needed to accelerate the pulley
- The linear acceleration of the blocks equals the tangential acceleration of the rim: `a = R*alpha`

### Formulas
- For blocks of mass m_1 and m_2 (m_2 > m_1) with a disc pulley of mass M:
  - `a = (m_2 - m_1) * g / (m_1 + m_2 + M/2)`

### Key Diagram: Atwood Machine with Pulley
- A disc-shaped pulley with two blocks m_1 and m_2 hanging from a string over it. Tensions T_1 and T_2 act on the string on each side. Forces on each block (weight and tension) and torques on the pulley are shown. [SVG-REF]

### Worked Example
**Q:** Block A (10 kg) on a table, Block B (8 kg) hanging, disc pulley (2 kg). Find the acceleration. (g = 10 m/s^2)
**A:**
Step 1: For block A: `T_1 - m_1*g = m_1*a` ... (but this problem has an Atwood setup)
Using the formula: `a = (m_2 - m_1)*g / (m_1 + m_2 + M/2) = (10 - 8)*10 / (10 + 8 + 1) = 20/19` m/s^2

---

## 14. Torque on a Pivoted Rod
### Concepts
- A uniform rod of length L and mass M pivoted at one end, released from angle theta to the vertical
- The torque about the pivot due to gravity is `tau = Mg*(L/2)*sin(theta)`
- Using `tau = I*alpha` with `I = ML^2/3`: `alpha = (3g*sin(theta))/(2L)`
- When the rod is horizontal (theta = pi/2): `alpha = 3g/(2L)` and tangential acceleration of the free end = `alpha*L = 3g/2`

### Formulas
- `alpha = (3*g*sin(theta))/(2*L)` (rod pivoted at one end, angle theta from vertical)
- Tangential acceleration of free end = `alpha * L`

### Key Diagram: Pivoted Rod
- A uniform rod pivoted at the top end, hanging at angle theta from the vertical. The weight Mg acts at the centre (L/2 from pivot). The torque arm `(L/2)*sin(theta)` is shown. [SVG-REF]

---

## 15. General Rigid Body Motion
### Concepts
- The most general motion of a rigid body is a combination of translation of the centre of mass (CM) and rotation about the CM
- This applies to objects that move through space while also rotating (e.g., a ball rolling down an incline, an object tumbling in the air)
- **Total kinetic energy**: `K = K_translational + K_rotational = (1/2)*M*V_CM^2 + (1/2)*I_CM*omega^2`

### Formulas
- `K_total = (1/2)*M*V_CM^2 + (1/2)*I_CM*omega^2`

### Important Notes
- V_CM is the velocity of the centre of mass
- I_CM is the moment of inertia about an axis through the CM
- omega is the angular velocity of rotation about the CM

---

## 16. Instantaneous Velocity of a Point on a Rigid Body
### Concepts
- The velocity of any point A on a rigid body is the vector sum of the velocity of the CM and the tangential velocity of A relative to the CM
- `V_A = V_CM + V_t` where `|V_t| = r*omega` (r = distance of A from CM)
- V_t is directed along the tangent to the circular trajectory about CM

### Formulas
- `V_A = V_CM + V_t`
- `|V_t| = r * omega`

---

## 17. Rolling Without Slipping
### Concepts
- When a body rolls without slipping on a surface, its motion is a combination of translation of the CM and rotation about the CM
- The key constraint is that the instantaneous velocity of the point of contact with the surface is zero
- This gives the rolling condition: `V_CM = R * omega`
- Similarly: `A_CM = R * alpha`
- The topmost point has velocity `V_top = V_CM + R*omega = 2*V_CM`
- Arc length laid down equals distance travelled: `x = R*theta`

### Formulas
- `V_CM = R * omega` (rolling without slipping condition)
- `A_CM = R * alpha`
- `x = R * theta`
- Velocity of topmost point: `V_top = 2 * V_CM`
- Velocity of contact point: `V_contact = 0`

### Key Diagram: Rolling Wheel
- A wheel of radius R rolling to the right on a flat surface. The CM moves with velocity V_CM. At the contact point P (bottom), the translational velocity V_CM to the right and the rotational velocity R*omega to the left cancel out, giving zero. At the top point Q, both add to give 2*V_CM. [SVG-REF]

### Important Notes
- Static friction provides the torque for rolling but does NO work (since the contact point has zero velocity)
- For rolling without slipping, `v_contact = 0`, so the friction is static, not kinetic
- The velocity of any point P on the circumference at angle theta from the bottom: `V_P = 2*V_CM*sin(theta/2)`

---

## 18. Rolling on an Inclined Plane
### Concepts
- A body of mass m, radius R, and radius of gyration k rolls without slipping down an incline of angle theta
- Static friction f acts upward along the incline and provides the torque for rotation
- From Newton's second law (translation): `mg*sin(theta) - f = m*a`
- From rotational equation about CM: `f*R = (m*k^2)*alpha` and `a = R*alpha`
- Solving gives the acceleration and friction force

### Formulas
- Linear acceleration: `A_CM = g*sin(theta) / (1 + k^2/R^2)`
- Friction force: `f = mg*sin(theta) / (1 + R^2/k^2)`
- Condition for pure rolling (no slipping): `f <= mu_s * N`, which gives `mu_s >= tan(theta) / (1 + R^2/k^2)`
- Speed at bottom of incline of height h (by energy conservation): `V_CM = sqrt(2*g*h / (1 + k^2/R^2))`
- Time to reach bottom: `t = sqrt(2*h / (g*sin(theta))) * sqrt((1 + k^2/R^2))`

### Key Diagram: Body Rolling Down Incline
- A circular body (sphere/cylinder/ring) on an incline of angle theta. Forces shown: weight mg (vertically down, resolved into mg*sin(theta) along plane and mg*cos(theta) perpendicular), normal force N perpendicular to incline, and static friction f pointing up the incline at the contact point. [SVG-REF]

### Important Notes
- Bodies with smaller k^2/R^2 reach the bottom faster and with greater speed when rolling without slipping
- Ranking of acceleration (fastest to slowest for rolling): solid sphere (k^2/R^2 = 2/5) > solid cylinder (1/2) > hollow sphere (2/3) > hollow cylinder/ring (1)
- On a smooth incline (frictionless), all bodies slide with the same acceleration `g*sin(theta)` regardless of shape, with no rotation
- When friction is insufficient for pure rolling (kinetic friction acts), all bodies have the same translational acceleration: `A_CM = g*(sin(theta) - mu*cos(theta))`
- On a rough incline with insufficient friction: all bodies take the same time to reach the bottom

### Worked Example
**Q:** A solid cylinder rolls down an incline of height h and inclination theta. Find its speed at the bottom using the energy method.
**A:**
Step 1: By energy conservation: `mgh = (1/2)*m*V_CM^2 + (1/2)*I*omega^2`
Step 2: For solid cylinder: `I = (1/2)*mR^2`, and `V_CM = R*omega`
Step 3: `mgh = (1/2)*m*V_CM^2 + (1/2)*(mR^2/2)*(V_CM^2/R^2) = (3/4)*m*V_CM^2`
Step 4: `V_CM = sqrt(4*g*h/3)`
Step 5: Time to reach bottom: Using `V_CM^2 = 2*A_CM*(h/sin(theta))` with `A_CM = (2/3)*g*sin(theta)`, get `t = sqrt(3*h/g) / sin(theta)`

---

## 19. Velocity of Points on a Rolling Body
### Concepts
- For a body rolling without slipping with `V_CM = R*omega`:
  - Contact point (bottom): velocity = 0
  - Top point: velocity = `2*V_CM` (horizontal, same direction as CM motion)
  - Point level with centre (sides): velocity = `sqrt(V_CM^2 + R^2*omega^2) = sqrt(2)*V_CM`
- For a general point P on the circumference at angle theta from the contact point: `V_P = 2*V_CM*sin(theta/2)`

### Formulas
- `V_P = 2*V_CM * sin(theta/2)` (point P at angle theta from bottom on rolling body)
- `V_bottom = 0`, `V_top = 2*V_CM`, `V_side = sqrt(2)*V_CM`

### Key Diagram: Velocities on a Rolling Wheel
- A wheel rolling to the right. At the centre, velocity arrow V_CM points right. At the top (A), velocity arrow 2*V_CM points right. At the bottom (C), velocity is zero. At the sides (B and D, level with centre), velocity arrows of magnitude sqrt(2)*V_CM point diagonally (right and up for the forward side, right and down for the trailing side). [SVG-REF]

---

## 20. Kinetic Energy of a Rolling Body
### Concepts
- Total KE of a rolling body = translational KE + rotational KE
- `K = (1/2)*M*V_CM^2 + (1/2)*I_CM*omega^2`
- Using `V_CM = R*omega` and `I = Mk^2`:
  - `K = (1/2)*M*V_CM^2*(1 + k^2/R^2)`
- Ratio of translational to rotational KE = `R^2/k^2`

### Formulas
- `K_total = (1/2)*M*V_CM^2 + (1/2)*I_CM*omega^2`
- `K_total = (1/2)*M*V_CM^2*(1 + k^2/R^2)`
- `K_trans/K_rot = R^2/k^2`
- For solid sphere: `K_trans/K_rot = 5/2`
- For solid cylinder: `K_trans/K_rot = 2`
- For ring/hollow cylinder: `K_trans/K_rot = 1`

---

## 21. Angular Impulse
### Concepts
- Angular impulse is the rotational analogue of linear impulse
- **Linear impulse**: `I_linear = integral(F dt) = delta_p` (change in linear momentum)
- **Angular impulse**: `J = integral(tau dt) = delta_L` (change in angular momentum)
- `J = I * r_perp` where I is the linear impulse and r_perp is the perpendicular distance from the axis to the line of action of the force
- Angular impulse is usually calculated about the CM

### Formulas
- `J = integral(tau dt) = delta_L`
- `I_linear = integral(F dt) = delta_p`
- `J = I_linear * r_perp`

### Important Notes
- Compare: `tau = F * r_perp` (torque) with `J = I_linear * r_perp` (angular impulse = linear impulse times moment arm)

---

## 22. Conservation of Angular Momentum
### Concepts
- If the net external torque (or angular impulse) about a point P is zero during an interaction, then the angular momentum about P is conserved
- `If J_P = 0, then delta_L_P = 0, therefore (L_i)_P = (L_f)_P`
- This is the rotational analogue of conservation of linear momentum
- Applications: spinning figure skater pulling arms in, turntable problems, collisions involving rotation

### Formulas
- `L_initial = L_final` (when net external torque = 0)
- `I_1*omega_1 = I_2*omega_2` (when moment of inertia changes)

### Important Notes
- Angular momentum conservation can be applied about ANY point where external angular impulse is zero
- In collision problems, choose the point about which to conserve angular momentum wisely (typically the point where the external impulse acts, so its torque is zero)

### Worked Example
**Q:** A turntable (I = 1200 kg m^2) rotates at 1 rev/10 s. A man (80 kg) at the centre walks to 2 m from the centre. Find the new angular velocity.
**A:**
Step 1: `I_0 = 1200` kg m^2 (man at centre contributes nothing), `omega_0 = 2*pi/10 = pi/5` rad/s
Step 2: `I_f = 80*(2)^2 + 1200 = 320 + 1200 = 1520` kg m^2
Step 3: By conservation: `I_0*omega_0 = I_f*omega_f`
Step 4: `omega_f = 1200*(pi/5)/1520 = 0.49` rad/s

---

## 23. Impulse on a Rod (Impulsive Problems)
### Concepts
- When an impulse is applied to a free rigid body (like a rod on a smooth surface), it causes both translational and rotational motion
- Linear impulse equation: `I = M*V_CM`
- Angular impulse about CM: `J = I_impulse * d = I_CM * omega` (where d is the distance from CM to the point of application)
- These two equations together determine V_CM and omega independently

### Formulas
- `I = M * V_CM` (linear impulse = change in linear momentum)
- `I * d = I_CM * omega` (angular impulse about CM = change in angular momentum)

### Worked Example
**Q:** A uniform rod AB (mass m, length l) is at rest on a smooth surface. An impulse I is applied at end B perpendicular to the rod. Find the speed of point P at distance l/6 from centre at time `t = pi*m*l/(12*I)`.
**A:**
Step 1: `V_CM = I/m`
Step 2: `I*(l/2) = (ml^2/12)*omega`, giving `omega = 6I/(ml)`
Step 3: At `t = pi*ml/(12I)`: angle rotated = `omega*t = (6I/ml)*(pi*ml/(12I)) = pi/2` (rod rotates 90 degrees)
Step 4: At this instant, velocity of P = vector sum of V_CM and omega*(l/6)
Step 5: Since the rod has rotated 90 degrees, V_CM and the tangential velocity at P are perpendicular
Step 6: `V_P = sqrt(V_CM^2 + (omega*l/6)^2) = sqrt(I^2/m^2 + I^2/m^2) = sqrt(2)*I/m`

---

## 24. Billiard Ball -- Striking Height for Pure Rolling
### Concepts
- A billiard ball (solid sphere, I = 2/5 mr^2) struck by a horizontal impulse at height h above the centre
- For the ball to immediately roll without slipping after the impact, `V_CM = r*omega`
- Using impulse-momentum equations: `I = m*V_CM` and `I*h = (2/5)*m*r^2*omega`
- Dividing: `h = (2/5)*r^2*omega/V_CM = (2/5)*r` (using V_CM = r*omega)
- So the cue must strike at height `h = 2r/5` above the centre for immediate pure rolling

### Formulas
- Height above centre for pure rolling of a solid sphere: `h = 2R/5`
- Height above centre for pure rolling of a solid cylinder: `h = R/2`
- Height above centre for pure rolling of a hollow sphere: `h = R/3` (since I_CM = 2/3 mR^2 gives h = (2/3)R*(R/R)... actually h = k^2/R in general)
- General formula: `h = k^2/R` where k is the radius of gyration about the CM axis

---

## 25. Transition from Sliding to Rolling
### Concepts
- When a sphere (or any rolling body) is given a pure translational velocity v_0 on a rough surface (no initial spin), kinetic friction acts to:
  - Decelerate the CM: `A_CM = -mu*g` (friction opposes translation)
  - Provide angular acceleration: `alpha = mu*m*g*R / I_CM` (friction provides torque)
- The body transitions from sliding to rolling when `V_CM = R*omega` (the rolling condition)
- After pure rolling begins, friction becomes zero (or static) and the body continues at constant velocity (on a level surface)

### Formulas
- For a solid sphere (I = 2/5 mR^2) given initial velocity v_0 with no spin:
  - Time to start rolling: `t = 2*v_0 / (7*mu*g)`
  - Final rolling velocity: `v = 5/7 * v_0`
- General formula: `t = (v_0*k^2) / ((k^2 + R^2)*mu*g)` and `v = v_0*R^2 / (k^2 + R^2)`

### Key Diagram: Transition to Rolling
- A sphere initially sliding to the right with velocity v_0 and no rotation. Kinetic friction f_k = mu*mg acts to the left at the contact point. Over time, V_CM decreases and omega increases until V_CM = R*omega, at which point pure rolling begins. [SVG-REF]

### Important Notes
- During the sliding phase, kinetic friction does negative work on translation and positive work on rotation, so total KE decreases (energy is lost to friction)
- Once rolling begins, if the surface is level, the body moves with constant velocity (no friction needed)
- If initial angular velocity omega_0 is also present (e.g., backspin), the analysis becomes more complex -- must check relative motion at contact point to determine friction direction

### Worked Example
**Q:** A solid sphere is given initial velocity v_0 on a rough horizontal surface (mu friction). Find the time and velocity when pure rolling begins.
**A:**
Step 1: Friction decelerates CM: `v(t) = v_0 - mu*g*t`
Step 2: Friction provides torque about CM: `omega(t) = (mu*m*g*R / (2/5*mR^2))*t = (5*mu*g/(2R))*t`
Step 3: Pure rolling when `v = R*omega`: `v_0 - mu*g*t = R*(5*mu*g*t/(2R))`
Step 4: `v_0 = mu*g*t*(1 + 5/2) = (7/2)*mu*g*t`
Step 5: `t = 2*v_0/(7*mu*g)` and `v = v_0 - mu*g*(2*v_0/(7*mu*g)) = 5*v_0/7`

---

## 26. Sphere Coming to Rest (Forward Translation + Backward Spin)
### Concepts
- If a solid sphere has forward velocity v_0 and backward (anticlockwise) angular velocity omega_0, both v and omega decrease due to friction
- The sphere comes to rest permanently only if `v_0/(omega_0*R) = 2/5`
- Otherwise it transitions to pure rolling (forward or backward depending on the ratio)

### Formulas
- For permanent rest: `v_0 / (omega_0 * R) = 2/5` (for solid sphere)
- In general: `v_0 / (omega_0 * R) = k^2/R^2` for the body to come to permanent rest

---

## 27. Conservation of Angular Momentum in Collisions
### Concepts
- In collisions involving rotation (e.g., a particle hitting a rod), angular momentum is conserved about a point where the net external impulse has zero torque
- For a rod pivoted at one end struck by a particle: conserve L about the pivot (reaction force at pivot has zero torque about pivot)
- For a free rod on a smooth surface struck by a particle: conserve both linear momentum AND angular momentum about any point (or about the CM)

### Formulas
- `L_i = L_f` about the chosen point
- For elastic collision, also use: `e = 1` (coefficient of restitution) gives separation velocity = approach velocity at the point of contact

### Worked Example
**Q:** A meter stick (mass M, length l) lies on a frictionless table. A hockey puck (mass m) moving with speed v collides elastically with one end. Find the velocity of the puck after impact, the CM velocity and angular velocity of the stick.
**A:**
Step 1: Conservation of linear momentum: `m*v = m*v_1 + M*V_CM` ... (i)
Step 2: Conservation of angular momentum about CM of stick: `m*v*(l/2) = m*v_1*(l/2) + I_CM*omega` ... (ii)
Step 3: Elastic collision at contact point: `V_CM + (l/2)*omega - v_1 = v` ... (iii)
Step 4: Solving: `v_1 = v*(4m - M)/(4m + M)`, `V_CM = 2m*v/(4m + M)`, `omega = 12m*v/((4m + M)*l)`

---

## 28. Toppling vs Sliding
### Concepts
- A block with square base (a x a) and height h placed on an incline of angle theta with friction coefficient mu
- The block will **topple** before sliding if `mu > a/h`
- The block will **slide** before toppling if `mu < a/h`
- Toppling begins when the line of action of the weight passes through the edge of the base (the normal force shifts to the edge)

### Formulas
- Condition for toppling before sliding: `mu > a/h`
- Condition for sliding before toppling: `mu < a/h`
- Critical angle for toppling: `tan(theta) = a/h`

---

## 29. Equilibrium of Rigid Bodies
### Concepts
- For a rigid body in static equilibrium, both translational and rotational equilibrium conditions must be satisfied
- **Translational equilibrium**: `sum(F) = 0` (net force is zero)
- **Rotational equilibrium**: `sum(tau) = 0` about any point (net torque is zero)
- For solving problems, choose the point about which to take torques wisely to eliminate unknown forces

### Formulas
- `sum(F_x) = 0`, `sum(F_y) = 0`
- `sum(tau) = 0` (about any point)

---

## 30. Cyclist on a Curve / Car on a Level Curve
### Concepts
- **Cyclist on a curve**: A cyclist going around a horizontal curve of radius r at speed v must lean at angle theta from vertical to maintain balance
- The friction provides centripetal force: `f = mv^2/r`
- For equilibrium (zero net torque about CG): `tan(theta) = v^2/(r*g)`
- **Car on a level curve**: The car tends to overturn when inner wheels lose contact with the ground
- Maximum speed to avoid overturning: `v = sqrt(a*r*g/h)` where 2a is the wheel separation and h is the CG height

### Formulas
- Cyclist lean angle: `theta = arctan(v^2/(r*g))`
- Cyclist maximum speed without skidding: `v = sqrt(mu*r*g)`
- Car maximum speed without overturning: `v = sqrt(a*r*g/h)` (2a = wheel separation, h = CG height)

### Key Diagram: Cyclist Leaning on a Curve
- A cyclist leaning at angle theta from vertical while going around a horizontal curve. Normal force N acts upward, weight mg acts downward, and static friction f acts horizontally towards the centre of the curve. The condition for zero torque about the CG gives the lean angle. [SVG-REF]

---

## 31. Cylinder Rolling off an Edge
### Concepts
- A solid homogeneous cylinder of radius R is placed on a horizontal edge and given a small push to roll off without slipping
- The cylinder loses contact when the normal reaction N = 0
- Using energy conservation and centripetal force condition: the cylinder leaves contact at angle `theta = cos^(-1)(4/7)` from the vertical
- Speed of CM at that instant: `V_CM = sqrt(4*R*g/7)`
- Ratio of translational to rotational KE when CM is horizontal with edge = 6

### Formulas
- Angle at separation: `theta = cos^(-1)(4/7)` (for solid cylinder)
- `V_CM` at separation: `sqrt(4*R*g/7)`
- Energy conservation: `mgR(1 - cos(theta)) = (1/2)*mV_CM^2 + (1/2)*I_CM*omega^2`
- Contact loss condition: `mg*cos(theta) = mV_CM^2/R`

---

## 32. Rolling on a Track with Loop
### Concepts
- A solid sphere of radius r rolls without slipping down a track of height h and enters a circular loop of radius R
- At the bottom of the loop, the normal force provides centripetal force minus weight: `N - mg = mV_CM^2/(R - r)`
- Energy conservation from top to bottom: `mg*h = (1/2)*mV_CM^2 + (1/2)*I_CM*omega^2`
- After leaving a surface, the sphere becomes a projectile (omega remains constant as there is no torque about CM in air)

### Formulas
- For rolling without slipping on a fixed surface: `mgh = (1/2)*mV_CM^2*(1 + k^2/R_body^2)`
- Normal force at bottom of loop: `N = mg + mV_CM^2/(R_loop - r)`
- Normal force at top of loop: `N = mV_CM^2/(R_loop - r) - mg`

---

## 33. Tension in a Rotating Ring
### Concepts
- A ring of radius r and mass per unit length m rotates with angular velocity omega in free space
- Consider a small element of angle d(theta); the tension provides the centripetal force for this element
- The tension in the ring: `T = m*omega^2*r^2`

### Formulas
- `T = m*omega^2*r^2` (where m is the mass per unit length)

---

## Important Formulas Summary

**Rotational Kinematics:**
- `omega = 2*pi/T`, `v = r*omega`, `a_t = r*alpha`, `a_r = omega^2*r`
- `omega_f = omega_i + alpha*t`, `theta = omega_i*t + (1/2)*alpha*t^2`, `omega_f^2 = omega_i^2 + 2*alpha*theta`

**Moment of Inertia:**
- Ring: `MR^2`, Disc: `(1/2)MR^2`, Solid sphere: `(2/5)MR^2`, Hollow sphere: `(2/3)MR^2`
- Rod (centre): `ML^2/12`, Rod (end): `ML^2/3`
- Parallel axis: `I_P = I_CM + Md^2`
- Perpendicular axis (2D only): `I_Z = I_X + I_Y`
- Radius of gyration: `I = Mk^2`

**Torque and Angular Momentum:**
- `tau = r x F`, `|tau| = rF*sin(theta)`
- `L = I*omega` (rigid body), `L = mvr_perp` (particle)
- `tau = I*alpha`, `tau = dL/dt`
- `W = tau*delta_theta`, `P = tau*omega`

**Angular Impulse and Conservation:**
- `J = integral(tau dt) = delta_L`
- If `tau_ext = 0`, then `L_i = L_f` (conservation of angular momentum)

**Rolling Without Slipping:**
- `V_CM = R*omega`, `A_CM = R*alpha`
- `A_CM = g*sin(theta)/(1 + k^2/R^2)` (inclined plane)
- `V_CM = sqrt(2gh/(1 + k^2/R^2))` (speed at bottom)
- `f = mg*sin(theta)/(1 + R^2/k^2)` (friction on incline)
- `mu_s >= tan(theta)/(1 + R^2/k^2)` (condition for pure rolling)

**Transition from Sliding to Rolling (solid sphere):**
- `t = 2v_0/(7*mu*g)`, `v_final = 5v_0/7`

**Kinetic Energy:**
- `KE_rot = (1/2)*I*omega^2`
- `KE_total = (1/2)*M*V_CM^2 + (1/2)*I_CM*omega^2`
- `K_trans/K_rot = R^2/k^2`

**Striking Height for Immediate Pure Rolling:**
- `h = k^2/R` above the centre

---

## Questions

### ANSWER KEYS (Reference)

**Workbook Answer Key -- Level 1 (Q1-60)**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | C | B | D | A | C | B | A | D | C | B | D | A | C | B | D |

| Q# | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | A | C | D | B | A | C | D | B | A | C | B | D | A | C | B |

| Q# | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | D | A | B | C | D | A | B | C | A | D | B | C | A | D | B |

| Q# | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | 4 | 3 | 0.5 | 6 | 2 | 8 | 1.5 | 3 | 5 | 2 | 4 | 7 | 10 | 3 | 1 |

**Workbook Answer Key -- Level 2 (Q61-105)**

| Q# | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | B | C | A | D | C | B | A | D | ABC | C | B | D | A | C | BD |

| Q# | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | AC | B | D | A | 36 | C | B | D | A | C | B | D | AB | CD | A |

| Q# | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99 | 100 | 101 | 102 | 103 | 104 | 105 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | C | D | A | B | C | A | D | B | C | A | D | B | C | A | B |

**Workbook Answer Key -- Previous Years JEE Main (Q1-40)**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | C | B | D | A | C | B | D | A | C | B | D | A | C | B | D |

| Q# | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | A | C | D | B | A | C | B | D | A | C | B | A | D | C | B |

| Q# | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 |
|---|---|---|---|---|---|---|---|---|---|---|
| Ans | D | A | C | B | D | A | B | C | D | A |

**Workbook Answer Key -- Previous Years JEE Advanced (Q1-35)**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | B | C | A | D | A | C | B | D | C | A | B | D | C | B | ACD |

| Q# | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | BC | AD | AB | A | B | 4 | 3 | 2mgR | L/3 | sqrt(3gL) | 6 | 3 | 7 | Angular momentum | 2 |

| Q# | 31 | 32 | 33 | 34 | 35 |
|---|---|---|---|---|---|
| Ans | 4 | 1.5 | mv^2/R | False | R |

**Miscellaneous Exercise**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| Ans | B | C | A | D | A | C | B | D | A | C |

---

### ROTATIONAL MOTION: LEVEL 0 (EASY)
*Source: DTS-0 (CBSE Pattern)*

**VSA: Very Short Answer Type (1 mark)**

**1.** What is the moment of inertia of a body about an axis? On what factors does it depend?

**2.** Is it possible for a body to have different moments of inertia about different axes?

**3.** A disc of mass M and radius R is rolling without slipping on a surface. What is the ratio of its rotational KE to its total KE?

**4.** Why is it easier to balance a bicycle when it is in motion than when stationary?

**5.** What is the physical significance of the radius of gyration?

**SA-I: Short Answer Type I (2 marks)**

**6.** State and explain the parallel axis theorem for moment of inertia.

**7.** A body is rotating with uniform angular velocity. Is there any torque acting on the body? Justify.

**8.** Why are the spokes provided in a bicycle wheel?

**9.** If the Earth were to shrink to half its radius without change in mass, how would the length of a day change?

**10.** A cat is able to land on its feet after a fall. Which principle of physics is being used? Explain briefly.

**11.** Why does a diver fold his limbs while in the air between leaving the diving board and entering the water?

**SA-II: Short Answer Type II (3 marks)**

**12.** Derive the expression for the moment of inertia of a uniform thin rod of mass M and length L about an axis passing through its centre and perpendicular to the rod.

**13.** A wheel of radius R is rolling without slipping on a flat surface. What are the velocities of the top and bottom points of the wheel relative to the ground?

**14.** Two discs of moments of inertia I1 and I2 about their respective axes, rotating with angular velocities omega1 and omega2, are brought into contact face to face with their axes of rotation coincident. Find the angular velocity of the composite system.

**15.** A grindstone (disc) of radius 0.5 m and mass 50 kg is brought to rest from 480 rev/min in 10 s. Find the braking torque applied.

**16.** A cylinder of mass M and radius R rolls down an incline of angle theta without slipping. Find the acceleration and the frictional force.

**17.** A solid sphere and a solid cylinder, both of the same mass and radius, are released from rest at the top of an incline. Which reaches the bottom first and why?

**18.** Explain why a tight-rope walker carries a long pole while walking on the rope.

**19.** A uniform rod of mass M and length L is hinged at one end and released from the horizontal position. Find the angular velocity when it becomes vertical.

**20.** State and prove the perpendicular axis theorem for a planar body.

**LA: Long Answer Type (5 marks)**

**21.** Derive expressions for the linear acceleration, angular acceleration and tension in the string for an Atwood machine with a massive pulley of mass M and radius R, with two masses m1 and m2 (m1 > m2) on either side.

**22.** (a) Define angular momentum. Write its SI unit. (b) A planet revolves around a star in an elliptical orbit. Show that the angular momentum of the planet about the star remains constant. (c) Is the kinetic energy of the planet constant? Justify.

**23.** A solid cylinder of mass M and radius R is placed on a rough inclined plane of inclination theta. Draw a free body diagram and derive expressions for: (i) the acceleration of the centre of mass, (ii) the condition on the coefficient of friction for rolling without slipping.

**24.** A rod of mass m and length L is pivoted at one end. A bullet of mass m travelling horizontally with velocity v strikes the rod at the free end and embeds itself. Find: (i) the angular velocity of the system just after impact, (ii) the loss in kinetic energy.

**25.** What is the minimum velocity at the highest point of a vertical circular loop for a solid sphere of mass M and radius R rolling without slipping on the inside of the loop of radius r? Derive the expression.

---

### ROTATIONAL MOTION: LEVEL 1
*Source: DTS-1 (Rotational Kinematics, MOI), DTS-2 (Torque, Angular Momentum, Equilibrium), DTS-3 (Rolling Motion, Collisions)*

#### DTS-1: Rotational Kinematics and Moment of Inertia

**1.** A wheel starts from rest and has uniform angular acceleration of 4 rad/s^2. After 5 s, the total acceleration of a point on the rim (radius 0.4 m) is:
(A) 0.4 m/s^2 (B) 1.6 m/s^2 (C) 160.1 m/s^2 (D) 12.8 m/s^2

**2.** The moment of inertia of a uniform circular disc about a tangent in its own plane is:
(A) (5/4)MR^2 (B) (3/2)MR^2 (C) (3/4)MR^2 (D) (1/2)MR^2

**3.** A thin uniform rod of mass M and length L has moment of inertia I1 about an axis at one end, perpendicular to the rod. The moment of inertia I2 about an axis at L/4 from one end is:
(A) I1 < I2 (B) I1 = I2 (C) I1 > I2 (D) Depends on M

**4.** Four point masses, each of mass m, are placed at the corners of a square of side a. The moment of inertia of the system about a diagonal is:
(A) ma^2 (B) 2ma^2 (C) (1/2)ma^2 (D) (3/2)ma^2

**5.** A disc and a sphere of equal mass and radius roll down an incline. At the bottom they have:
(A) equal velocity (B) disc has greater velocity (C) sphere has greater velocity (D) equal angular velocity

**6.** The ratio of the radii of gyration of a circular disc to a circular ring, each of the same mass and radius, about their axes passing through their centres and perpendicular to their planes is:
(A) 1:sqrt(2) (B) sqrt(2):1 (C) 1:2 (D) 2:1

**7.** A body is rotating about an axis with uniform angular velocity. If a torque is applied on the body along the axis of rotation:
(A) the body will slow down (B) the body will speed up (C) the angular momentum will change direction (D) the angular velocity will change direction

**8.** A uniform disc of mass M has radius R. A disc of radius R/2 is cut out from it as shown. The moment of inertia of the remaining portion about an axis through O perpendicular to the plane is:
(A) (3/8)MR^2 (B) (13/32)MR^2 (C) (11/32)MR^2 (D) (15/32)MR^2

**9.** A wheel is making 120 rev/min. The number of revolutions it makes before coming to rest if it is subjected to a constant retardation of (4*pi) rad/s^2 is:
(A) 15 (B) 10 (C) 8 (D) 4

**10.** From a circular disc of radius R and mass 9M, a small disc of radius R/3 is removed from the disc. The moment of inertia of the remaining disc about an axis perpendicular to the plane of the disc and passing through O is:
(A) 4MR^2 (B) (40/9)MR^2 (C) 10MR^2 (D) (37/9)MR^2

**11.** If I is the moment of inertia of a solid sphere about an axis passing through its centre then the moment of inertia about a tangent parallel to this axis is:
(A) (5/2)I (B) (7/5)I (C) (5/7)I (D) (7/2)I

**12.** A solid cylinder and a hollow cylinder of the same mass and radius, both initially at rest, roll down an inclined plane from the same height. The solid cylinder reaches the bottom:
(A) earlier (B) later (C) at the same time (D) depends on angle of incline

**13.** Two discs of same moment of inertia rotate about their axes with angular velocities omega and omega/3. They are brought into contact face to face. The angular velocity of the composite system is:
(A) omega/3 (B) omega/2 (C) 2*omega/3 (D) omega

**14.** A particle is moving along a circle of radius r with constant speed v. The change in velocity when the particle moves from A to B (angle subtended at centre = 60 degrees) is:
(A) v (B) v*sqrt(2) (C) v*sqrt(3) (D) 2v

**15.** A thin circular ring of mass M and radius R is rotating about its axis with angular speed omega. Two objects each of mass m are attached gently to the opposite ends of a diameter. The new angular speed is:
(A) omega*M/(M+2m) (B) omega*(M+2m)/M (C) omega*M/(M+m) (D) omega*(M+m)/M

#### DTS-2: Torque, Angular Momentum and Equilibrium

**16.** A force F = 4i-hat + 3j-hat + 5k-hat N is applied at a point whose position vector is r = 7i-hat + 4j-hat + 2k-hat m. The torque of force about the origin is:
(A) -14i-hat + 27j-hat - 11k-hat (B) 14i-hat + 27j-hat + 11k-hat (C) -14i-hat + 27j-hat + 11k-hat (D) 14i-hat - 27j-hat + 11k-hat

**17.** The angular momentum of a particle about a fixed point O varies with time as L = a + bt^2, where a and b are constants. The net torque about O at time t is:
(A) 2bt (B) b (C) zero (D) a + 2bt

**18.** A uniform ladder of length 5 m rests against a smooth vertical wall with its lower end 3 m from the wall. The weight of the ladder is 200 N. The force of friction at the floor is:
(A) 50 N (B) 75 N (C) 100 N (D) 150 N

**19.** A uniform rod AB of weight W is hinged at A and held horizontal by a string at B making angle theta with the rod. The tension in the string is:
(A) W/(2*sin(theta)) (B) W/sin(theta) (C) W*sin(theta)/2 (D) 2W/sin(theta)

**20.** A rigid body is in pure rotational motion. All particles of the body have the same:
(A) linear velocity (B) angular velocity (C) linear momentum (D) kinetic energy

**21.** The torque required to stop a wheel of moment of inertia 50 kg.m^2 rotating at 200 rpm in 10 s is approximately:
(A) 50*pi/3 N.m (B) 100*pi/3 N.m (C) 150*pi/3 N.m (D) 200*pi/3 N.m

**22.** A particle of mass m moves along a straight line with velocity v. The angular momentum of the particle about a point at perpendicular distance d from the line is:
(A) mvd (B) mv/d (C) md/v (D) zero

**23.** A body of mass m is moving with velocity v along a straight line. Its angular momentum about a point on the line of motion is:
(A) mvr (B) zero (C) mv/r (D) depends on distance

**24.** A rod of length L is pivoted at one end. It is struck at a distance x from the pivot such that the impulse at the pivot is zero. The value of x is:
(A) L/3 (B) L/2 (C) 2L/3 (D) 3L/4

**25.** A cylinder is about to topple on a rough inclined plane. The angle of incline is theta. If the radius is R and height is h, then:
(A) tan(theta) = 2R/h (B) tan(theta) = h/2R (C) tan(theta) = R/h (D) tan(theta) = h/R

**26.** A constant torque acting on a uniform circular wheel changes its angular momentum from A0 to 4A0 in 4 s. The magnitude of this torque is:
(A) 4A0 (B) A0 (C) 3A0/4 (D) 12A0

**27.** Two particles of equal mass m go round a circle of radius R under the action of their mutual gravitational attraction. The speed of each particle is:
(A) sqrt(Gm/(4R)) (B) sqrt(Gm/(2R)) (C) sqrt(Gm/R) (D) sqrt(4Gm/R)

**28.** A disc of mass M and radius R rotates about its axis. A force F acts tangentially at the rim. Starting from rest, the angular velocity at time t is:
(A) 2Ft/(MR) (B) Ft/(MR) (C) MR/(2Ft) (D) 2MR/(Ft)

**29.** A boy stands at the centre of a turntable with his arms outstretched. The turntable is rotating. When he folds his arms:
(A) his moment of inertia decreases and omega increases (B) his angular momentum increases (C) his rotational KE decreases (D) his moment of inertia increases

**30.** A uniform cube of side a and mass m rests on a rough floor. A horizontal force F is applied normal to one face at a height 3a/4 from the base. The minimum value of F for which the cube begins to topple about an edge is:
(A) mg/3 (B) mg/2 (C) 2mg/3 (D) mg

#### DTS-3: Rolling Motion, Angular Impulse and Collisions

**31.** A solid sphere rolls without slipping down an incline of angle theta. The fraction of its total KE that is rotational is:
(A) 2/7 (B) 2/5 (C) 5/7 (D) 3/5

**32.** A disc of mass m and radius R is rolling on a horizontal surface without slipping. The velocity of its centre is v. It encounters a step of height h (h < R). The minimum velocity for the disc to climb the step is:
(A) sqrt(2gh) (B) sqrt(10gh/7) (C) sqrt(2gh*(R/(R-h))) (D) None of these

**33.** A billiard ball is struck by a cue at a height h above the centre. For the ball to roll without slipping immediately, h must be:
(A) R/5 (B) 2R/5 (C) R/2 (D) 2R/7

**34.** A solid sphere is set spinning about a horizontal axis with angular velocity omega0 and then placed on a rough surface. The velocity of the centre when pure rolling starts is:
(A) 2R*omega0/7 (B) R*omega0/5 (C) 5R*omega0/7 (D) 2R*omega0/5

**35.** A hoop, a disc and a sphere, all of the same mass and radius, roll down an incline. Which has the greatest speed at the bottom?
(A) Hoop (B) Disc (C) Sphere (D) All same

**36.** A thin uniform rod of length L is falling freely. The ratio of the speed of its end to the speed of its centre of mass at any instant is:
(A) 1:1 (B) 2:1 (C) 1:2 (D) depends on length

**37.** A solid sphere rolling on a rough horizontal surface with linear velocity v collides elastically with a fixed smooth vertical wall. After collision, it:
(A) slides backward with velocity v (B) rolls backward (C) slides then starts rolling (D) immediately stops

**38.** A uniform disc is given a velocity v0 on a rough surface. It starts sliding and eventually rolls. The final velocity is:
(A) v0/3 (B) v0/2 (C) 2v0/3 (D) 3v0/4

**39.** A cylinder rolls up an inclined plane. At the highest point reached:
(A) KE is zero (B) PE is maximum (C) angular velocity is zero (D) all of the above

**40.** A particle of mass m moving with velocity v strikes one end of a stationary uniform rod of mass M and length L on a smooth surface perpendicularly. If the collision is perfectly elastic:
(A) linear momentum is conserved (B) angular momentum about any point is conserved (C) KE is conserved (D) all of the above

**41.** A sphere of mass m moving with velocity v0 on a rough surface has both translational and rotational motion. If v_cm = R*omega, the sphere is:
(A) slipping forward (B) slipping backward (C) rolling without slipping (D) spinning in place

**42.** The angular momentum of a system of particles is conserved when:
(A) net force on the system is zero (B) net torque on the system is zero (C) both net force and torque are zero (D) net force is constant

**43.** A solid cylinder of mass m and radius R has a string wound around it. The string is pulled with a force F. The acceleration of the cylinder if it rolls without slipping is:
(A) F/m (B) 2F/(3m) (C) F/(2m) (D) F/(3m)

**44.** A uniform rod of mass M and length L lies on a smooth surface. A particle of mass m moving with velocity v perpendicular to the rod strikes at one end and sticks. The velocity of the centre of mass of the system is:
(A) mv/(M+m) (B) Mv/(M+m) (C) v (D) v/2

**45.** A solid sphere rolls without slipping on a rough surface. The ratio of translational KE to rotational KE is:
(A) 2:5 (B) 5:2 (C) 7:2 (D) 2:7

---

### ROTATIONAL MOTION: LEVEL 2
*Source: DTS-4 NAT (Numerical Answer Type), DTS-5 (MOI, Torque -- Level 2), DTS-6 (Angular Momentum, Rolling -- Level 2), DTS-7 (Combined Problems)*

#### DTS-4 NAT: Mixed Numerical Questions

**46.** A uniform disc of mass 2 kg and radius 0.5 m is rotating about an axis passing through its centre and perpendicular to its plane at 40 rad/s. A torque that opposes the rotation is applied for 5 s after which the disc rotates at 20 rad/s. The magnitude of the torque is _________ N.m.

**47.** A solid sphere rolls without slipping down an incline of height 7 m. The speed of its centre of mass at the bottom is `sqrt(10*x)` m/s. Find x.

**48.** A rod of mass M and length L is lying on a smooth horizontal surface. An impulse J is applied at one end perpendicular to the rod. The velocity of the centre of the rod is J/M. The angular velocity of the rod about the centre is 6J/(ML) * (1/n). Find n.

**49.** A disc of moment of inertia 4 kg.m^2 is spinning freely at 3 rad/s. A second disc of moment of inertia 2 kg.m^2, spinning in the opposite direction at 3 rad/s, is placed on top. The final angular velocity of the combination is x rad/s. Find x.

**50.** A uniform rod of mass m and length L is pivoted at its centre. Two masses, each of mass m, are placed at both ends. The moment of inertia of the system is n*mL^2/12. Find n.

**51.** A disc rotates about a fixed axis. Its angular velocity varies with time as omega = 2t. The angle rotated by the disc during t = 0 to t = 3 s is _________ rad.

**52.** A hoop of mass 4 kg and radius 0.5 m rolls without slipping on a flat surface at 5 m/s. Its total kinetic energy is _________ J.

**53.** A solid cylinder rolls up a 30-degree incline with an initial velocity of 5 m/s. The distance it travels up the incline before stopping is 10x/3 m. Find x.

**54.** A uniform rod of length L falls from the vertical position with one end hinged. The speed of the free end when horizontal is `sqrt(n*g*L)`. Find n.

**55.** A particle of mass 0.5 kg is attached to one end of a string of length 2 m. The particle moves in a horizontal circle. If the string makes an angle of 30° with the vertical, the angular momentum of the particle about the centre of the circle is _________ kg.m^2/s (take g = 10 m/s^2). (Express answer to one decimal.)

**56.** Two identical discs, each of mass M and radius R, are placed on top of each other. The lower disc rotates at omega and the upper at rest. Due to friction they reach a common angular velocity. The loss in KE is n*MR^2*omega^2/8. Find n.

**57.** A ring, a disc and a sphere, all of the same mass and radius, roll down an incline of height h. The ratio of their speeds at the bottom v_ring : v_disc : v_sphere = sqrt(x) : sqrt(y) : sqrt(z) where z = 10. Find x + y.

**58.** A flywheel rotates at 200 rpm. It is brought to rest by a constant torque in 100 revolutions. The number of revolutions to reduce speed from 200 rpm to 100 rpm is _________.

**59.** A sphere of mass 1 kg and radius 0.1 m rolls without slipping with velocity 1 m/s. Its kinetic energy is x/10 J. Find x.

**60.** A pulley of radius R and moment of inertia I has a light string wrapped around it. A mass m hangs from the string. The acceleration of the mass is g/(1 + n*I/(mR^2)). Find n.

#### DTS-5: Moment of Inertia and Torque (Level 2)

**61.** A uniform thin rod of mass M and length L is bent to form a semicircle. Its moment of inertia about an axis passing through the centre of the semicircle and perpendicular to the plane is:
(A) ML^2/(2*pi^2) (B) ML^2/pi^2 (C) ML^2/(4*pi^2) (D) 2ML^2/pi^2

**62.** A disc of mass M and radius R has a concentric circular hole of radius r. Its moment of inertia about an axis perpendicular to its plane and passing through its centre is:
(A) M(R^2 + r^2)/2 (B) M(R^2 - r^2)/2 (C) MR^2/2 (D) M(R^4 - r^4)/(2R^2)

**63.** A thin uniform circular disc of mass M and radius R is made to rotate in a horizontal plane about an axis passing through a point on the edge and perpendicular to the plane. The radius of gyration is:
(A) R/sqrt(2) (B) R*sqrt(3/2) (C) R*sqrt(5/2) (D) R*sqrt(3)

**64.** The moment of inertia of a uniform square plate of mass m and edge a about one of its diagonals is:
(A) ma^2/12 (B) ma^2/6 (C) ma^2/3 (D) 2ma^2/3

**65.** A body of mass m slides down an incline and reaches the bottom with velocity v. If the same body were a disc of same mass rolling down the same incline without slipping, the velocity at the bottom would be:
(A) v (B) v*sqrt(2/3) (C) v*sqrt(3/4) (D) v*sqrt(1/3)

**66.** The angular momentum of a system of particles changes at a rate of dL/dt. If this is due to a torque, the magnitude of the torque at any instant is:
(A) L (B) dL/dt (C) L*omega (D) I*alpha

**67.** A rod of length L and mass M is pivoted at one end and has a moment of inertia ML^2/3 about the pivot. If a horizontal force F is applied at the free end, the initial angular acceleration is:
(A) F/(ML) (B) 2F/(ML) (C) 3F/(ML) (D) F/(2ML)

**68.** A uniform solid sphere has a moment of inertia I about a diameter. The moment of inertia about a tangent to the sphere is:
(A) 5I/2 (B) 7I/2 (C) 3I/2 (D) 7I/5

**\*69.** A non-uniform rod of length L has mass per unit length lambda = lambda_0*(x/L)^2, where x is measured from one end. The total mass and position of the centre of mass from that end are:
(A) lambda_0*L/3, 3L/4 (B) lambda_0*L, L/2 (C) lambda_0*L/3, L/4 (D) lambda_0*L/2, 2L/3

**70.** A thin ring of mass M and radius R has moment of inertia MR^2 about a central axis. If the ring is folded to a semicircle, the moment of inertia about the same axis:
(A) increases (B) decreases (C) remains the same (D) becomes zero

#### DTS-6: Angular Momentum and Rolling Motion (Level 2)

**71.** A disc of mass M and radius R rolls without slipping on a horizontal surface with velocity v. It then encounters a smooth incline. The maximum height to which the centre of mass rises is:
(A) v^2/(2g) (B) v^2/(g) (C) 3v^2/(4g) (D) v^2/(3g)

**72.** A particle moves in a circle of radius r. Its angular momentum about the centre is L. Its kinetic energy is:
(A) L^2/(mr^2) (B) L^2/(2mr^2) (C) Lr/m (D) L/(mr)

**73.** A person standing on a freely rotating turntable extends his arms. His moment of inertia increases from I to 3I. The ratio of final KE to initial KE is:
(A) 1:3 (B) 3:1 (C) 1:9 (D) 9:1

**74.** A uniform sphere rolls on a plank which is on a smooth surface. If the sphere has velocity v and the plank has velocity V (both in the same direction, v > V), the friction on the sphere from the plank is:
(A) forward (B) backward (C) zero (D) depends on v - V

**\*75.** A solid sphere is placed on a rough horizontal surface with only rotational motion (spin omega0, no translation). As it transitions to pure rolling:
(A) friction acts forward on the sphere (B) KE is conserved (C) angular momentum about contact point is conserved (D) final velocity is 2R*omega0/7

**\*76.** A uniform rod of length L is pivoted at one end and is in vertical equilibrium. It is given a small displacement and released. When it passes through the horizontal position:
(A) angular velocity = sqrt(3g/L) (B) angular acceleration = (3g)/(2L) (C) reaction at pivot = mg/4 (D) angular velocity = sqrt(6g/L)

**\*77.** In the case of rolling without slipping of a rigid body on a surface:
(A) the velocity of the lowest point is zero relative to the surface (B) the friction force is not necessarily zero (C) the friction force does no work (D) the angular velocity equals v_cm/R

**78.** A ball of mass m is thrown such that it has velocity v and backspin omega (omega*R > v) on a rough surface. After some time, the ball:
(A) continues forward with rolling (B) comes to rest and then rolls backward (C) immediately rolls backward (D) slides forward indefinitely

**79.** A cylinder of mass m rolls inside a cylindrical surface of radius R without slipping. The frequency of small oscillations about the equilibrium is:
(A) (1/(2*pi))*sqrt(2g/(3(R-r))) (B) (1/(2*pi))*sqrt(g/(R-r)) (C) (1/(2*pi))*sqrt(2g/(R-r)) (D) (1/(2*pi))*sqrt(g/(3(R-r)))

**80.** A sphere is rolling on a horizontal surface. The fraction of total KE that is rotational, is 2/7. If it rolls up an incline of height h, the velocity required at the bottom is `sqrt(n*g*h)`. Find n (integer).

#### DTS-7: Combined Rotational Problems (Level 2)

**81.** A rod of mass m and length L is hinged at one end and released from the horizontal position. The reaction at the hinge when the rod is vertical is:
(A) mg/2 (B) 3mg/2 (C) 5mg/2 (D) 2mg

**82.** A solid sphere of radius R and mass M rolls without slipping. It starts from rest and rolls down a loop-the-loop of radius r (r >> R). The minimum height from which it must start to complete the loop is:
(A) 5r/2 (B) 27r/10 (C) 17r/10 (D) 7r/2

**83.** A spool of mass m has an inner radius r and outer radius R. A string wound on the inner radius is pulled horizontally. For the spool to roll without slipping, if it moves to the right, the friction is:
(A) to the right (B) to the left (C) zero (D) depends on r/R

**84.** A uniform cylinder of mass m and radius R is placed on a rough incline of angle theta. The maximum angle for which the cylinder remains in static equilibrium is:
(A) tan^(-1)(mu) (B) tan^(-1)(2*mu) (C) tan^(-1)(3*mu) (D) tan^(-1)(mu/2)

**85.** A uniform thin circular disc of mass M and radius R is spinning about its axis with angular velocity omega. It is placed on a rough horizontal surface. The time after which it starts pure rolling is:
(A) R*omega/(3*mu*g) (B) R*omega/(mu*g) (C) 2R*omega/(3*mu*g) (D) R*omega/(6*mu*g)

**86.** A point mass m is attached at one end of a massless rod of length L. The other end is pivoted. The rod is released from horizontal. The tension in the rod when it makes angle theta with horizontal is:
(A) mg(3*sin(theta) + 1)/2 (B) mg(3*cos(theta))/2 (C) mg(1 + 3*sin(theta)) (D) mg*sin(theta)

**87.** A yo-yo has inner radius r, outer radius R, and moment of inertia I. When released, its downward acceleration is:
(A) g/(1 + I/(mr^2)) (B) g/(1 + I/(mR^2)) (C) g*mr^2/(I + mr^2) (D) g*mR^2/(I + mR^2)

**\*88.** A cylinder of mass m and radius R rolls without slipping down a rough incline of angle theta. Which of the following is/are correct?
(A) Friction force = mg*sin(theta)/3 (B) Acceleration = 2g*sin(theta)/3 (C) The friction is kinetic (D) The friction does no net work

**\*89.** A sphere of mass m and radius R is placed on a rough horizontal surface. It is struck by a horizontal cue at height h above the centre. For pure rolling immediately:
(A) h = 2R/5 (B) h = 2R/7 (C) the friction is zero if h = 2R/5 (D) the friction acts forward if h < 2R/5

**90.** An annular disc of inner radius r and outer radius R and mass M rolls without slipping on a horizontal surface. Its total KE at speed v is:
(A) (1/2)*M*v^2*(1 + (R^2+r^2)/(2R^2)) (B) (3/4)*M*v^2 (C) M*v^2 (D) (1/4)*M*v^2*(3 + r^2/R^2)

**91.** A rod of mass m and length L is pivoted at one end and can rotate freely. A bullet of mass m/4 strikes the rod at the other end with velocity v and embeds itself. The angular velocity just after impact is:
(A) 3v/(4L) (B) 6v/(7L) (C) 3v/(7L) (D) v/L

**92.** A ladder of mass m and length L rests against a smooth wall, making angle theta with the horizontal floor (rough). The minimum friction coefficient for equilibrium is:
(A) cot(theta)/2 (B) tan(theta)/2 (C) 1/(2*tan(theta)) (D) 2*cot(theta)

**93.** A coin of mass m and radius r is rolling on a rough surface. It then rolls up a frictionless inclined surface of inclination theta. The height to which it rises is:
(A) v^2/(2g) (B) 3v^2/(4g) (C) v^2/(g) (D) v^2/(4g)

**94.** A thin hollow sphere and a solid sphere, both of same mass and radius, roll down an incline from the same height. The ratio of their velocities at the bottom is:
(A) sqrt(21/25) (B) sqrt(25/21) (C) sqrt(15/21) (D) sqrt(21/15)

**95.** A string is wrapped around a solid cylinder of mass M and radius R. The free end of the string is attached to the ceiling and the cylinder is released. The acceleration of the cylinder is:
(A) g/3 (B) 2g/3 (C) g/2 (D) g

**96.** A rigid body rotates about a fixed axis with angular velocity omega. If the axis of rotation passes through its centre of mass, the angular momentum is:
(A) I_cm * omega (B) MR^2 * omega (C) (I_cm + MR^2) * omega (D) depends on shape

**97.** A ball rolls without slipping on a horizontal surface. It strikes a wall and bounces back. If the collision with the wall is perfectly elastic:
(A) it slides after bouncing (B) it rolls immediately (C) it rolls with the same speed (D) both A and C

**98.** A platform is rotating at angular velocity omega. A person walks from the edge to the centre. The angular velocity of the platform:
(A) increases (B) decreases (C) remains the same (D) becomes zero

**99.** A cylinder of mass m rolls without slipping on a curved surface. If released from the top of a hemisphere of radius R, the normal reaction at the bottom is:
(A) mg (B) 17mg/7 (C) 10mg/7 (D) 3mg

**100.** A uniform disc of mass M and radius R is mounted on an axle. A light thread wound on the disc supports a block of mass m. The block descends with acceleration:
(A) 2mg/(M + 2m) (B) mg/(M + m) (C) 2mg/(M + m) (D) mg/(M + 2m)

**101.** A solid sphere of mass m and radius R is gently placed on a belt moving with velocity v0. The coefficient of friction is mu. The time taken for the sphere to start pure rolling is:
(A) 2v0/(7*mu*g) (B) v0/(7*mu*g) (C) 2v0/(5*mu*g) (D) v0/(mu*g)

**102.** A rotating platform with moment of inertia I_p rotates at omega. A person of moment of inertia I standing at the edge jumps off tangentially with velocity v relative to ground. The angular velocity of the platform becomes:
(A) (I_p + I)*omega/(I_p) (B) I_p*omega/(I_p + I) (C) (I_p*omega + I*v/R)/I_p (D) depends on direction

**103.** A uniform rod of length L is balanced on a pivot at L/4 from one end. A mass m placed at the shorter end balances the rod. The mass of the rod is:
(A) m (B) 2m (C) m/2 (D) 3m

**104.** A cylinder of mass M rolls on a plank of mass M placed on a smooth surface. A force F is applied on the plank. The acceleration of the cylinder is:
(A) F/(3M) (B) F/(4M) (C) F/(2M) (D) 2F/(3M)

**105.** A hoop of mass m and radius R rolls without slipping on the inside of a cylinder of radius 2R. The frequency of small oscillations is:
(A) (1/(2*pi))*sqrt(g/R) (B) (1/(2*pi))*sqrt(g/(2R)) (C) (1/(2*pi))*sqrt(2g/R) (D) (1/(2*pi))*sqrt(g/(3R))

---

### ROTATIONAL MOTION: LEVEL 3 (HARD)
*Source: DTS-8, DTS-9, DTS-10 (Subjective / Advanced problems)*

**106.** A uniform rod of mass M and length L is pivoted at one end. It is held horizontal and released. Find the angular velocity, angular acceleration, and the force at the pivot when the rod makes angle theta with the horizontal. Also find these quantities when the rod is vertical.

**107.** A solid uniform sphere of mass M and radius R is placed on a rough inclined plane of inclination theta. A horizontal force F is applied at the top of the sphere. Find: (i) the minimum friction coefficient for pure rolling, (ii) the acceleration of the centre of mass.

**108.** A billiard ball of mass m and radius R, initially at rest on a rough surface, is given a horizontal impulse J at a height h above the centre. Find: (i) the velocity of the centre and angular velocity immediately after the impulse, (ii) the value of h for which the ball rolls without slipping immediately, (iii) the final velocity if h = 0 (pure sliding initially).

**109.** A thin uniform rod of mass m and length L rests on a smooth horizontal surface. An impulse J is applied perpendicular to the rod at a distance x from the centre. Find x such that the end of the rod nearer to the point of application remains stationary immediately after the impulse.

**110.** A uniform solid cylinder of mass m and radius R is placed on a rough belt that moves with constant velocity v0. Initially the cylinder is at rest. Find: (i) the time after which the cylinder starts pure rolling, (ii) the final velocity and angular velocity, (iii) the distance moved by the cylinder.

**111.** A solid sphere rolls without slipping on the inner surface of a fixed hemisphere of radius R. The sphere has mass m and radius r (r << R). Find: (i) the frequency of small oscillations about the equilibrium, (ii) the normal reaction at the lowest point when the sphere has speed v.

**112.** A uniform disc of mass M and radius R lies on a smooth horizontal plane. A particle of mass m moving with velocity v strikes the edge of the disc tangentially and sticks to it. Find: (i) the velocity of the centre of mass of the system, (ii) the angular velocity about the centre of mass, (iii) the loss in kinetic energy.

**113.** Two thin uniform rods, each of mass m and length L, are joined to form a cross (+). The system is free to rotate about a vertical axis through the centre. A bullet of mass m/4 travelling horizontally with velocity v strikes one end of a rod and embeds itself. Find the angular velocity of the system just after impact.

**114.** A spool has inner radius r, outer radius R, and moment of inertia I about its axis. A thread wound on the inner cylinder is pulled with force F at angle theta with the horizontal. The spool rolls without slipping on a rough surface. Find: (i) the acceleration of the spool, (ii) the friction force, (iii) the angle theta for which friction is zero.

**115.** A solid sphere of mass m is placed on a long plank of mass M, which rests on a smooth surface. The sphere is given an initial velocity v0 with no spin. The coefficient of friction between sphere and plank is mu. Find: (i) the velocity of the sphere when pure rolling begins, (ii) the velocity of the plank at that instant, (iii) the time taken.

**116.** A rigid body consists of two particles each of mass m connected by a massless rod of length 2l. The body rotates about an axis passing through the centre of the rod and making angle theta with the rod. Find the angular momentum vector and show that it does not lie along the angular velocity vector (precession).

**117.** A thin uniform disc of mass M and radius R is rotating freely about a vertical axis through its centre with angular velocity omega. A chip of mass m breaks off from the edge. Find the angular velocity of the remaining disc and the velocity of the chip just after separation.

**118.** A uniform solid sphere rolls on a rough horizontal surface. It encounters a step of height h (h < R). Find the minimum velocity of the centre of mass for the sphere to climb the step, assuming: (i) the sphere does not slip at the edge of the step, (ii) angular momentum about the edge is conserved during impact.

---

### ROTATIONAL MOTION: MISCELLANEOUS QUESTION BANK
*Source: Miscellaneous Question Bank (Level 1, 2, 3)*

**1.** A solid cylinder is rolling without slipping on a rough horizontal surface. The velocity of its centre of mass is v. The maximum velocity of any point on the cylinder is:
(A) v (B) v*sqrt(2) (C) 2v (D) v*sqrt(5)

**2.** If the moment of inertia of a disc about an axis tangent to the disc and parallel to its diameter is I, then the moment of inertia about an axis through its centre and perpendicular to the disc is:
(A) 4I/5 (B) 2I/5 (C) I/2 (D) I/4

**3.** A thin uniform rod AB of mass M and length L is hinged at A. A force F is applied at B perpendicular to the rod. The reaction at the hinge at the instant of application is:
(A) F/4 (B) F/2 (C) F (D) 3F/4

**4.** A ring, disc and sphere, each of mass m and radius R, roll down an incline without slipping from the same height h. At the bottom, the ring has KE K_ring. The KE of the disc and sphere are:
(A) K_disc > K_sphere > K_ring (B) K_sphere > K_disc > K_ring (C) K_ring = K_disc = K_sphere (D) K_ring > K_disc > K_sphere

**5.** A playground merry-go-round of radius R = 2 m has moment of inertia I = 250 kg.m^2. A child of mass 25 kg runs at 5 m/s tangent to the rim and jumps on. The angular velocity is:
(A) 5/35 rad/s (B) 250/350 rad/s (C) 5/7 rad/s (D) 10/35 rad/s

**6.** A particle of mass m is projected with velocity v at angle theta to the horizontal. The angular momentum about the point of projection when at maximum height is:
(A) mv^3*sin^2(theta)*cos(theta)/(2g) (B) mv^3*sin(theta)*cos^2(theta)/(2g) (C) mv^2*sin(2*theta)/(4g) (D) zero

**7.** Two cylinders, one hollow and one solid, of equal outer radius and mass, roll without slipping down an incline. Which statement is correct?
(A) Solid reaches bottom first (B) Hollow reaches bottom first (C) They reach together (D) It depends on inclination

**8.** A uniform disc of mass M and radius R is given a velocity v0 (no spin) on a rough surface. The distance travelled before pure rolling begins is:
(A) v0^2/(3*mu*g) (B) v0^2/(6*mu*g) (C) v0^2/(9*mu*g) (D) v0^2/(mu*g)

**9.** The moment of inertia of a uniform equilateral triangular plate of mass M and side a about an axis passing through one vertex and perpendicular to the plane is:
(A) Ma^2/6 (B) Ma^2/12 (C) Ma^2/3 (D) Ma^2/4

**10.** A rod of length L is falling vertically with one end in contact with a smooth floor. The velocity of the centre of mass when the rod makes angle theta with the floor is:
(A) (L/2)*omega*cos(theta) (B) (L/2)*omega*sin(theta) (C) (L/2)*omega (D) L*omega*sin(theta)

---

### JEE MAIN ARCHIVE
*Source: JEE Main (Archive) -- questions from 2002-2023*

**1.** [2002] The moment of inertia of a uniform circular disc of radius R and mass M about an axis touching the disc at its diameter and normal to the disc is:
(A) 3MR^2/2 (B) MR^2/2 (C) MR^2 (D) 2MR^2
**Ans: A**

**2.** [2003] A solid sphere is rotating in free space. If the radius of the sphere is increased keeping the mass same, which one of the following will not be affected?
(A) Angular velocity (B) Angular momentum (C) Moment of inertia (D) Rotational kinetic energy
**Ans: B**

**3.** [2004] One solid sphere A and another hollow sphere B are of the same mass and size. The ratio of moment of inertia about axes passing through their centres is:
(A) 3/5 (B) 5/3 (C) 7/5 (D) 5/7
**Ans: A**

**4.** [2005] A circular disc of radius R is removed from a bigger circular disc of radius 2R, such that the circumferences of the discs coincide. The centre of mass of the new disc is alpha*R from the centre of the bigger disc. The value of alpha is:
(A) 1/3 (B) 1/2 (C) 1/6 (D) 1/4
**Ans: A**

**5.** [2005] The moment of inertia of a uniform semicircular disc of mass M and radius r about a line perpendicular to the plane of the disc through the centre is:
(A) Mr^2/4 (B) (2/5)Mr^2 (C) Mr^2/2 (D) (1/4)Mr^2
**Ans: C**

**6.** [2006] Four point masses, each of value m, are placed at the corners of a square ABCD of side l. The moment of inertia of this system about an axis passing through A and parallel to BD is:
(A) 3ml^2 (B) ml^2 (C) 2ml^2 (D) sqrt(3)*ml^2
**Ans: A**

**7.** [2007] A thin rod of length L and mass M is bent at its midpoint into two halves making a right angle. The moment of inertia about an axis passing through the bending point and perpendicular to the plane of the bent rod is:
(A) ML^2/6 (B) ML^2/12 (C) ML^2/24 (D) ML^2/8
**Ans: B**

**8.** [2007] A round uniform body of radius R, mass M and moment of inertia I rolls down (without slipping) an inclined plane making an angle theta with the horizontal. Then its acceleration is:
(A) g*sin(theta)/(1 + I/(MR^2)) (B) g*sin(theta)/(1 - I/(MR^2)) (C) g*sin(theta)/(1 - MR^2/I) (D) g*sin(theta)/(1 + MR^2/I)
**Ans: A**

**9.** [2009] A particle of mass m moves in the XY plane with velocity v along the straight line AB. If the angular momentum of the particle about the origin O is L_A when it is at A, and L_B when it is at B, then:
(A) L_A > L_B (B) L_A = L_B (C) the relationship depends on the slope of AB (D) L_A < L_B
**Ans: B**

**10.** [2010] A thin uniform rod of length l and mass m is swinging freely about a horizontal axis passing through its end. Its maximum angular speed is omega. Its centre of mass rises to a maximum height of:
(A) l^2*omega^2/(6g) (B) l*omega/(6g) (C) l^2*omega^2/(2g) (D) l^2*omega^2/(3g)
**Ans: A**

**11.** [2011] A pulley of radius 2 m is rotated about its axis by a force F = (20t - 5t^2) N applied tangentially. If the moment of inertia of the pulley about its axis of rotation is 10 kg.m^2, the number of rotations made by the pulley before its direction of motion reverses is:
(A) more than 3 but less than 6 (B) more than 6 but less than 9 (C) more than 9 (D) less than 3
**Ans: A**

**12.** [2012] A thin horizontal circular disc is rotating about a vertical axis passing through its centre. An insect is at rest at a point near the rim. The insect now moves along a diameter to reach the other end. During this, the angular speed of the system:
(A) remains unchanged (B) first increases then decreases (C) first decreases then increases (D) continuously decreases
**Ans: C**

**13.** [2013] A bob of mass m attached to an inextensible string of length l is suspended from a vertical support. The bob rotates in a horizontal circle with angular speed omega. About the point of suspension:
(A) angular momentum is conserved (B) angular momentum changes in magnitude but not in direction (C) angular momentum changes in direction but not in magnitude (D) angular momentum changes in both direction and magnitude
**Ans: C**

**14.** [2014] A mass m moves in a circle on a smooth horizontal plane with velocity v0 at radius R0. The mass is attached to a string which passes through a hole in the plane. The string is pulled below the plane until the radius is R0/2. The velocity is:
(A) v0 (B) 2v0 (C) v0/2 (D) 4v0
**Ans: B**

**15.** [2015] From a solid sphere of mass M and radius R, a spherical portion of radius R/2 is removed such that the centre of the removed portion coincides with the centre of the original sphere. The moment of inertia of the remaining solid about an axis passing through the centre is:
(A) (15/32)MR^2 (B) (13/32)MR^2 (C) (7/16)MR^2 (D) (9/16)MR^2
**Ans: A**

**16.** [2015] A uniform metallic rod rotates about its perpendicular bisector with constant angular speed. If the temperature is raised, the angular speed:
(A) increases (B) decreases (C) remains unchanged (D) increases or decreases depending on the material
**Ans: B**

**17.** [2016] A roller is made by joining together two cones at their vertices O. It is kept on two rails AB and CD of crossed tracks. On slowly releasing the roller in the middle of the crossed track, it will:
(A) go to the left and gain speed (B) go to the right and lose speed (C) go to the left and lose speed (D) remain stationary
**Ans: A**

**18.** [2016] A particle of mass m is moving along the side of a square of side a with uniform speed v in the XY plane. Which of the following statements is false about the angular momentum of the particle about the origin?
(A) It is mvR/(sqrt(2)) when the particle is moving from A to B (B) It is mv(a/(sqrt(2))) when the particle is moving from C to D (C) It is mv(a*sqrt(2)) when the particle is at C (D) It is always constant in magnitude
**Ans: D**

**19.** [2017] A uniform disc of radius R and mass M is free to rotate only about its axis. A string is wrapped over its rim and a body of mass m is tied to the free end. The body is released from rest. The angular velocity of the disc when the body has descended through a height h is:
(A) sqrt(2mgh/(M+2m))/R (B) sqrt(4mgh/(M+2m))/R (C) sqrt(2Mgh/(M+2m))/R (D) sqrt(4Mgh/(M+m))/R
**Ans: B**

**20.** [2017] The moment of inertia of a uniform cylinder of length l and radius R about its perpendicular bisector is I. What is the ratio l/R such that I is minimum?
(A) sqrt(3/2) (B) 1 (C) sqrt(3) (D) sqrt(3/2)
**Ans: A**

**21.** [2018] A homogeneous solid cylindrical roller of radius R and mass M starts pure rolling up a rough inclined plane from rest at the bottom. The minimum friction coefficient for pure rolling is:
(A) (1/3)*tan(theta) (B) tan(theta) (C) (2/3)*tan(theta) (D) (1/2)*tan(theta)
**Ans: A**

**22.** [2018] A slab is subjected to two forces F1 and F2 of same magnitude F as shown. Force F2 is in the XY plane while F1 acts along the z-axis at the point (2i + 3j). The moment of these forces about point O will be:
(A) (3i + 2j - 3k)F (B) (3i - 2j + 3k)F (C) (3i + 2j + 3k)F (D) (3i - 2j - 3k)F
**Ans: A**

**23.** [2019] A solid sphere of mass M and radius R is divided into two unequal parts. The first part has a mass of 7M/8 and is converted into a uniform disc of radius 2R. The second part is converted into a uniform solid sphere. The ratio of moment of inertia of the disc to that of the sphere about their natural axes is:
(A) 185 (B) 285 (C) 140 (D) 340
**Ans: C**

**24.** [2019] A rectangular solid box of length 0.3 m is held horizontally, with one of its sides on the edge of a table. When released, it starts rotating about the edge. Its angular speed when the side opposite the edge touches the table is (g = 10 m/s^2):
(A) 10 rad/s (B) 20 rad/s (C) 5*sqrt(3) rad/s (D) 10/sqrt(3) rad/s
**Ans: A**

**25.** [2019] A person of 80 kg mass is standing on the rim of a circular platform of mass 200 kg and radius 2 m rotating at 5 rev/min. The person now starts walking towards the centre. The rotational speed when the person reaches the centre is:
(A) 9 rpm (B) 3 rpm (C) 7 rpm (D) 12 rpm
**Ans: A**

**26.** [2020] A uniform cylinder of mass M and radius R rolls without slipping down a rough incline. The force of friction is:
(A) Mg*sin(theta)/3 (B) 2Mg*sin(theta)/3 (C) Mg*cos(theta)/3 (D) 2Mg*cos(theta)/3
**Ans: A**

**27.** [2020] A rigid body rotates about a fixed axis with variable angular velocity equal to alpha - beta*t at time t, where alpha and beta are constants. The angle through which it rotates before it stops is:
(A) alpha^2/(2*beta) (B) alpha^2/(beta) (C) alpha/(2*beta) (D) alpha^2/(4*beta)
**Ans: A**

**28.** [2020] Three point masses each of mass m are placed at the corners of an equilateral triangle of side b. The moment of inertia about any side of the triangle is:
(A) 3mb^2/4 (B) mb^2/4 (C) mb^2 (D) 2mb^2/3
**Ans: A**

**29.** [2021] A solid sphere of mass 2 kg and radius 0.2 m rolls without slipping on a surface. If the velocity of its centre of mass is 0.6 m/s, the angular momentum about the point of contact is:
(A) 0.336 kg.m^2/s (B) 0.48 kg.m^2/s (C) 0.24 kg.m^2/s (D) 0.168 kg.m^2/s
**Ans: A**

**30.** [2021] A thin circular disc of mass M and radius R is rotating in a horizontal plane about an axis perpendicular to it and passing through its centre. A small body of mass m is dropped on the disc from above. The angular velocity reduces to 5omega/6. The ratio m/M is:
(A) 1/5 (B) 1/4 (C) 1/3 (D) 1/6
**Ans: A**

**31.** [2022] A solid sphere of mass m rolls without slipping on an inclined plane of inclination theta. The minimum coefficient of friction to prevent slipping is:
(A) (2/7)*tan(theta) (B) (5/7)*tan(theta) (C) (1/7)*tan(theta) (D) (3/7)*tan(theta)
**Ans: A**

**32.** [2022] A particle of mass m, moving with velocity v, collides with a stationary rod of mass 2m and length L at one end and sticks. The angular velocity of the system about the pivot at the other end is:
(A) 3v/(7L) (B) v/(3L) (C) 3v/(4L) (D) v/L
**Ans: A**

**33.** [2022] A disc is rotating with angular velocity omega about a vertical axis passing through its centre. A rod of length 2R is placed along a diameter. Two small balls each of mass m are placed at the two ends of the rod. The balls roll to the ends of the rod due to rotation. The angular velocity becomes:
(A) omega/(1 + 4m/M) (B) omega (C) omega*(M + m)/(M + 4m) (D) omega*M/(M + 4m)
**Ans: D**

**34.** [2023] Two identical solid spheres each of mass 2 kg and radius 10 cm are fixed at the ends of a light rod. The separation between centres is 40 cm. The moment of inertia about an axis perpendicular to the rod and passing through the midpoint is:
(A) 0.176 kg.m^2 (B) 0.016 kg.m^2 (C) 0.096 kg.m^2 (D) 0.0576 kg.m^2
**Ans: A**

**35.** [2023] A ring of mass M and radius R is rotating about its axis with angular velocity omega. Two identical bodies each of mass m are now gently attached at the two ends of a diameter of the ring. The angular velocity of the ring will become:
(A) omega*M/(M + 2m) (B) omega*(M + 2m)/M (C) omega*M/(M + m) (D) omega*(M + m)/M
**Ans: A**

**36.** [2023] A rod of mass m and length L is held vertically. Its lower end is in contact with the smooth floor. It is allowed to fall from vertical position. The velocity of its upper end when it hits the floor is:
(A) sqrt(3gL) (B) sqrt(gL) (C) sqrt(2gL) (D) 2*sqrt(gL)
**Ans: A**

**37.** [2023] A solid cylinder of mass m starts rolling from rest on a rough inclined plane of inclination theta. The friction force acting on the cylinder is:
(A) mg*sin(theta)/3 (B) mg*cos(theta)/3 (C) 2mg*sin(theta)/3 (D) mu*mg*cos(theta)
**Ans: A**

**38.** [2023] A uniform rod of length 2 m and mass 4 kg can rotate in a vertical plane about a smooth horizontal axis through its centre. A small ball of mass 1 kg is attached to one end. The angular acceleration when the rod is horizontal is (g = 10 m/s^2):
(A) 15/7 rad/s^2 (B) 15/4 rad/s^2 (C) 10/3 rad/s^2 (D) 5/3 rad/s^2
**Ans: A**

**39.** [2023] A child of mass 10 kg is standing on the edge of a disc of mass 40 kg and radius 1 m rotating at 2 rad/s. The child moves to a point at a distance of R/2 from the centre. The angular speed is:
(A) 8/3 rad/s (B) 3 rad/s (C) 4 rad/s (D) 5/3 rad/s
**Ans: A**

**40.** [2023] Two discs with moment of inertia I1 = 10 kg.m^2 and I2 = 5 kg.m^2 rotate with angular velocity 20 rad/s and 10 rad/s in the same direction. They are brought into contact. The loss in energy is:
(A) 500/3 J (B) 250/3 J (C) 100/3 J (D) 200/3 J
**Ans: B**

**Answer Key (JEE Main Archive complete):**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | A | B | A | A | C | A | B | A | B | A | A | C | C | B | A |

| Q# | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | B | A | D | B | A | A | A | C | A | A | A | A | A | A | A |

| Q# | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 |
|---|---|---|---|---|---|---|---|---|---|---|
| Ans | A | A | D | A | A | A | A | A | A | B |

---

### JEE ADVANCED ARCHIVE
*Source: JEE Advanced (Archive) -- questions from 1981-2023*

**SINGLE OPTION CORRECT TYPE**

**1.** [1989] A cylinder rolls without slipping down an inclined plane. Its translational velocity at the bottom is v. The angular velocity about its axis is:
(A) v/R (B) 2v/R (C) v/(2R) (D) 3v/(2R)
**Ans: A**

**2.** [1992] A uniform solid cylinder of mass m and radius R starts from rest at height h on an inclined plane and rolls without slipping. The speed of its centre of mass when it reaches the bottom is:
(A) sqrt(4gh/3) (B) sqrt(3gh/4) (C) sqrt(4g/h) (D) sqrt(2gh)
**Ans: A**

**3.** [1995] A thin uniform circular disc of mass M and radius R is rotating in a horizontal plane about an axis passing through its centre and perpendicular to its plane with angular velocity omega. Another disc of the same dimensions but of mass M/4 is placed gently on the first disc coaxially. The angular velocity of the system is:
(A) 4*omega/5 (B) omega/4 (C) omega/5 (D) 5*omega/4
**Ans: A**

**4.** [1998] Let I be the moment of inertia of a uniform square plate about an axis AB that passes through its centre and is parallel to two of its sides. CD is a line that passes through the centre of the plate and makes an angle theta with AB. The moment of inertia of the plate about CD is:
(A) I (B) I*sin^2(theta) (C) I*cos^2(theta) (D) I*cos^2(theta/2)
**Ans: A**

**5.** [2000] A thin wire of length L and uniform density rho is bent into a circular loop with centre O. The moment of inertia about an axis XX' tangent to the loop at P is:
(A) 3*rho*L^3/(8*pi^2) (B) rho*L^3/(16*pi^2) (C) 3*rho*L^3/(4*pi^2) (D) rho*L^3/(8*pi^2)
**Ans: A**

**6.** [2001] A cubical block of side L rests on a rough horizontal surface with coefficient of friction mu. A horizontal force F is applied on the block. If the coefficient of friction is sufficiently high so that the block does not slide before toppling, the minimum force required to topple it is:
(A) mg/2 (B) mg/3 (C) mg/4 (D) mg(1-mu)
**Ans: A**

**7.** [2002] A circular platform is free to rotate in a horizontal plane about a vertical axis passing through its centre. A tortoise is sitting at the edge. Now the platform is given an angular velocity omega_0. When the tortoise moves along a chord to the diametrically opposite point:
(A) the angular velocity varies as the tortoise moves (B) the angular momentum remains constant (C) the total energy of the system remains unchanged (D) the angular velocity remains constant
**Ans: B**

**8.** [2005] A disc is rolling without slipping with angular velocity omega. P and Q are two points equidistant from the centre C. Let v_P, v_Q and v_C be the speeds. Then:
(A) v_Q > v_C > v_P (B) v_Q < v_C < v_P (C) v_Q = v_P, v_C = v_P/2 (D) v_Q < v_C; v_P < v_C
**Ans: A**

**9.** [2007] A block of mass m is placed at rest on a smooth wedge of mass M and inclination theta. What is the minimum value of M so that the wedge does not move?
(A) m/(1+tan(theta)) (B) m*cos(theta) (C) None of these (D) m*sin(theta)
**Ans: C**

**10.** [2012] A lamina is made by removing a small disc of diameter 2R from a bigger disc of uniform mass density and radius 2R. The moment of inertia of this lamina about axes passing through O and P is I_O and I_P respectively. The ratio I_P/I_O is:
(A) 73/41 (B) 37/41 (C) 41/73 (D) 13/37
**Ans: A**

**MULTIPLE OPTIONS CORRECT TYPE**

**\*11.** [2012] A uniform disc of mass M and radius R is mounted on an axle supported in frictionless bearings. A light cord is wrapped around the rim of the disc and a steady downward pull T is exerted on the cord:
(A) The angular acceleration of the disc is 2T/(MR) (B) The tangential acceleration of a point on the rim is 2T/M (C) In the time t after the pull is applied, a point on the rim of the disc turns through an angle of Tt^2/(MR) (D) In the same time, the work done by the pull is T^2*t^2/M
**Ans: A, B, C, D**

**\*12.** [2013] In the figure, a ladder of mass m is shown leaning against a wall. It is in static equilibrium making angle theta with the horizontal floor. The coefficient of friction between the wall and the ladder is mu_1 and that between the floor and the ladder is mu_2. The normal reaction of the wall on the ladder is N1 and that of the floor is N2. If the ladder is about to slip:
(A) mu_1 = 0, mu_2 != 0, N2 = mg (B) mu_1 != 0, mu_2 = 0, N1*tan(theta) = mg/2 (C) mu_1 != 0, mu_2 != 0, N2 = mg (D) mu_1 = 0, mu_2 != 0, N1*tan(theta) = mg/2
**Ans: C, D**

**\*13.** [2016] A horizontal force F is applied at the centre of mass of a cylindrical object of mass m and radius R, perpendicular to its axis as shown. The coefficient of friction between the object and the ground is mu. The centre of mass of the object has acceleration a. Rolling friction is negligible. Then:
(A) For a ring, a = F/(2m) if F < mu*mg (B) For a solid cylinder, a = F/(3m) if F < 3*mu*mg (C) For a hollow sphere, a = 3F/(5m) if F < 5*mu*mg/3 (D) For a solid sphere, a = 2F/(7m) if F < 7*mu*mg/2
**Ans: A, B**

**\*14.** [2017] A rigid uniform bar AB of length L is slipping from its vertical position on a frictionless floor. At some instant, the angle made by the bar with the vertical is theta. Which of the following is/are correct?
(A) The mid-point of the bar will fall vertically downward (B) The trajectory of the point A is a circle of radius L/2 (C) Instantaneous torque about the point in contact with the floor is proportional to sin(theta) (D) When the bar makes angle theta with the vertical, the displacement of its mid-point from the initial position is proportional to (1-cos(theta))
**Ans: A, C, D**

**ASSERTION AND REASON TYPE**

**15.** [2007] Statement-I: Two cylinders, one hollow and one solid (of same mass and radius) are simultaneously allowed to roll without slipping down an inclined plane from the same height. The hollow cylinder will reach the bottom first.
Statement-II: By the principle of conservation of energy, the total kinetic energies of both the cylinders are identical when they reach the bottom of the incline.
(A) Both true, II explains I (B) Both true, II does not explain I (C) I false, II true (D) Both false
**Ans: C**

**MATCH MATRIX TYPE**

**16.** [2019] A thin and uniform rod of mass M and length L is held vertical on a floor with large friction. The rod is released from rest so that it falls by rotating about its contact-point with the floor without slipping. Match the physical quantity in List-I with the appropriate expression in List-II when the rod makes angle 60° with the vertical:
List-I: (P) Angular velocity; (Q) Angular acceleration; (R) Horizontal component of reaction at pivot; (S) Vertical component of reaction at pivot
List-II: (1) sqrt(3g/2L); (2) 3*sqrt(3)*g/(4L); (3) 3Mg*sqrt(3)/16; (4) Mg/4; (5) various combinations
**Ans: P-1, Q-2, R-3, S-4**

**NUMERICAL ANSWER TYPE**

**17.** [1993] A uniform rod of mass m and length L can rotate freely about a hinge at its upper end. The rod is released from a horizontal position. The force at the hinge when the rod makes angle 60° with vertical is F. If F/mg = n, find n. **Ans: -- (evaluate based on components)**

**18.** [2006] A solid sphere is rolling on a rough surface. What fraction of total kinetic energy is translational? Express as p/q. **Ans: 5/7**

**19.** [2009] A ball is thrown on a rough floor so that it slides initially but due to friction it starts rolling without slipping. If v0 is its initial velocity, find the velocity of the ball when it starts rolling as a fraction x of v0. Find 7x/5. **Ans: 2**

**20.** [2011] A thin uniform rod, pivoted at O, is rotating in the horizontal plane with constant angular speed omega. At time t = 0, a small insect starts from O and moves with constant speed v wrt rod towards the other end. It reaches the end at time T. The angular speed of the system remains omega throughout. The magnitude of the torque about O on the system at time T is:
**Ans: mv*L*omega (where L = vT)**

**21.** [2014] A uniform circular disc of mass 1.5 kg and radius 0.5 m is initially at rest on a horizontal frictionless surface. Three forces of equal magnitude F = 0.5 N are applied simultaneously along the three sides of an equilateral triangle XYZ with its vertices on the perimeter of the disc. One second after applying the forces, the angular speed of the disc is _________ rad/s. **Ans: 2**

**22.** [2016] Two thin circular discs of mass m and 4m, having radii of a and 2a, are rigidly fixed by a massless rigid rod of length l = sqrt(24)*a through their centres. The moment of inertia of the assembly about the axis passing through the centre of mass and perpendicular to the rod is n*ma^2. Find n. **Ans: 140/5 = 28 (approx)**

**23.** [2019] A solid sphere of mass 1 kg and radius 1 m rolls without slipping on a fixed inclined plane of inclination 30° to the horizontal. The magnitude of friction acting on the sphere is N/7 N (g = 10 m/s^2). Find N. **Ans: 10**

**24.** [2020] A roller of mass M = 10 kg consists of a cylinder of radius R and axle of radius R/2, both having the same length. A string wound around the axle supports a block of mass m = 2 kg. The moment of inertia of the roller about its axis is I. The system is released from rest. The acceleration of the block is a = g/(1 + nI/(mR^2)). Find n. **Ans: 4**

**25.** [2021] A rod of mass M and length L = 1 m is pivoted at one end and is released from rest in horizontal position. When the rod becomes vertical, the speed of the free end is v = sqrt(n*g) m/s. Find n. **Ans: 3**

**FILL IN THE BLANKS TYPE**

**26.** [1985] A uniform disc of mass m and radius R is projected horizontally with velocity v_0 on a rough horizontal floor so that it starts off with a purely sliding motion at t = 0. After t0 seconds it acquires a purely rolling motion. The velocity of the centre of mass of the disc at t0 is _______. **Ans: 2v_0/3**

**27.** [1987] A cylinder of mass M and radius R is resting on a horizontal platform (which is parallel to the xy plane) with its axis fixed along the y axis and free to rotate about its axis. The platform is given a motion in the x direction given by x = A*cos(omega*t). There is no slipping between the cylinder and platform. The maximum torque acting on the cylinder during its motion is _______. **Ans: MRA*omega^2/2**

**28.** [1988] A stone of mass m tied to one end of a string of length l is rotated in a circle. If the string breaks, the stone flies off tangentially. This is because of _______. **Ans: inertia of direction (Newton's first law)**

**TRUE/FALSE TYPE**

**29.** [1984] A thin uniform circular disc of mass M and radius R is rotating in a horizontal plane about an axis perpendicular to its plane and passing through its centre. If another disc of same dimensions but mass M/4 is placed gently on the first disc co-axially, the angular velocity of the system is (4/5)*omega_0, where omega_0 was the angular velocity of the first disc. **Ans: True**

**30.** [1984] A triangular plate of uniform thickness and density is made to rotate about an axis perpendicular to the plane of the paper and passing through A. Moment of inertia of the plate about this axis is same as that about the parallel axis passing through B. **Ans: False**

**Answer Key (JEE Advanced Archive complete):**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | A | A | A | A | A | A | B | A | C | A | ABCD | CD | AB | ACD | C |

| Q# | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | P1Q2R3S4 | -- | 5/7 | 2 | mvLw | 2 | 28 | 10 | 4 | 3 | 2v0/3 | MRAw^2/2 | Inertia | True | False |
