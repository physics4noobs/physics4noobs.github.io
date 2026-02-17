# Gravitation

## Overview
Gravitation is one of the most important chapters for JEE Main and Advanced, covering Newton's Law of Universal Gravitation, variation of g, gravitational potential energy, escape velocity, satellite motion, and Kepler's laws. It connects mechanics with celestial phenomena and frequently appears in both single-concept and multi-concept problems. Mastery of energy methods and orbital mechanics is essential for competitive exams.

## 1. Newton's Universal Law of Gravitation
### Concepts
- Every body in the universe attracts every other body with a force that is directly proportional to the product of their masses and inversely proportional to the square of the distance between them
- The gravitational force is always attractive, acts along the line joining the two masses, and obeys Newton's Third Law
- Gravitational force is a central force and is conservative in nature
- The principle of superposition applies: the net gravitational force on a particle is the vector sum of forces due to all other particles

### Formulas
- `F = G * m1 * m2 / r^2` where G = 6.67 x 10^-11 Nm^2/kg^2
- Gravitational constant G: dimensions `[M^-1 L^3 T^-2]`
- For a uniform spherical shell: force on a particle outside = `GMm/r^2` (as if entire mass at centre); force on particle inside shell = 0
- For a uniform solid sphere: force on particle outside = `GMm/r^2`; force on particle inside at distance r from centre = `GMmr/R^3` (only mass enclosed within radius r contributes)

### Key Diagram: Gravitational Force Between Two Point Masses
- Two point masses m1 and m2 separated by distance r, with equal and opposite force vectors F along the line joining them [SVG-REF]

### Important Notes
- G is a universal constant; it does not depend on the medium, temperature, or the masses involved
- Gravitational force between two spheres is calculated using centre-to-centre distance (for uniform spheres)
- Inside a uniform spherical shell, the gravitational field is zero everywhere (Shell Theorem)
- For a sphere with a spherical cavity: use superposition. Net force = Force due to full sphere - Force due to removed sphere
- The force on a particle at the point of intersection of diagonals of a square with equal masses at corners: net force is zero by symmetry

### Worked Example
**Q:** A solid sphere of uniform density and radius R applies a gravitational force F1 on a particle placed at distance 2R from the centre. A spherical cavity of radius R/2 is now made in the sphere. Find the ratio F2/F1 where F2 is the new force.

**A:**
Step 1: F1 = force of full sphere at 2R = `G * rho * (4/3)piR^3 * m / (4R^2) = G * rho * (4piR^3/3) * m / (4R^2)`
Step 2: With cavity, F2 = F' - F'' where F' = force of full sphere, F'' = force of removed sphere (radius R/2, centre at R/2 from centre)
Step 3: The removed sphere has mass = `M * (R/2)^3 / R^3 = M/8`
Step 4: Distance from centre of cavity to particle = 2R - R/2 = 3R/2
Step 5: F'' = `G(M/8)m / (3R/2)^2 = GMm/(18R^2)`
Step 6: F' = `GMm/(4R^2)`
Step 7: F2 = `GMm/4R^2 - GMm/18R^2 = GMm(9-2)/(36R^2) = 7GMm/(36R^2)`
Step 8: F1 = `GMm/(4R^2)`
Step 9: F2/F1 = `(7/36)/(1/4) = 7/9`

---

## 2. Acceleration Due to Gravity (g)
### Concepts
- Acceleration due to gravity on the surface of Earth: the acceleration imparted to a mass m by the gravitational force of the Earth
- It is independent of the mass of the body (equivalence principle)
- The value of g varies with altitude, depth, latitude, and shape of the Earth

### Formulas
- On the surface: `g = GM/R^2` where M = mass of Earth, R = radius of Earth
- Substituting values: `g = 9.81 m/s^2`
- Relation with density: `g = (4/3) * pi * G * rho * R` where rho is mean density of Earth

### Key Diagram: Mass on Earth's Surface
- Circle representing Earth with radius R, centre marked, mass m on surface, arrow pointing toward centre showing force F = GMm/R^2 [SVG-REF]

### Important Notes
- g is NOT a universal constant -- it varies with location
- g depends on the mass and radius of the planet: `g = GM/R^2`
- For two planets with radii in ratio x:y and densities m:n, the ratio of g on their surfaces is `(nx)/(my)`

---

## 3. Variation of g
### Concepts

#### (a) Above the Surface of Earth (at height h)
- At height h above the surface, the effective distance from centre is (R+h)
- `g' = GM/(R+h)^2 = g * [R/(R+h)]^2`
- For h << R (approximation): `g' approx g(1 - 2h/R)`

#### (b) Below the Surface of Earth (at depth h)
- Only the mass enclosed within radius (R-h) contributes
- Assuming uniform density: `M' = M * [(R-h)/R]^3`
- `g' = g(1 - h/R)`
- g decreases linearly with depth and becomes zero at the centre

#### (c) Due to Rotation of Earth (with latitude)
- At latitude theta, the effective gravity includes the effect of centrifugal force due to Earth's rotation
- The radius of the circular path at latitude theta: `r = R cos(theta)`
- Two forces act on mass m at point A: gravitational force mg (toward centre) and pseudo centrifugal force `m * omega^2 * r` (away from axis)
- Effective gravity: `g' = g * sqrt[1 + (omega^2 R/g)^2 cos^2(theta) - 2(omega^2 R/g) cos^2(theta)]`
- Simplified (since omega^2 R/g << 1): `g' approx g - omega^2 R cos^2(theta)`

### Formulas
- Above surface: `g' = g[R/(R+h)]^2`
- Below surface: `g' = g(1 - h/R)` (uniform density assumed)
- At poles (theta = 90 degrees): `g' = g` (no effect of rotation)
- At equator (theta = 0 degrees): `g' = g(1 - omega^2 R/g) = g - omega^2 R`

### Key Diagram: Variation of g with Distance from Centre
- Graph with distance r on x-axis and g on y-axis. From r = 0 to r = R, g increases linearly (g' = g*r/R). At r = R, g is maximum. For r > R, g decreases as 1/r^2. The curve shows a peak at the surface. [SVG-REF]

### Important Notes
- g decreases both above and below the surface of Earth
- The decrease above the surface follows inverse square law; below follows linear law
- For the same small value, the change at height h above surface equals the change at depth d = 2h below surface (when h, d << R)
- If change at height h equals change at depth x: `h/R * 2 = x/R` => `x = 2h` (for h << R)
- At what height does g fall to 1% of surface value? `g' = g/100` => `R/(R+h) = 1/10` => `h = 9R`
- If Earth stops rotating, g at equator increases by `omega^2 R approx 0.034 m/s^2`

### Worked Example
**Q:** (a) Find the height above Earth's surface where g is 25% of its surface value (R = 6400 km). (b) Find the % change in g when we go 4 km below the surface.

**A:**
(a) `g' = g/4 = g[R/(R+h)]^2` => `R/(R+h) = 1/2` => `h = R = 6400 km`
(b) `g' = g(1 - h/R)` => `g'/g = 1 - 4/6400` => `(g - g')/g = 4/6400 = 1/1600`
Percentage decrease = `(1/1600) x 100 = 1/16 %`

---

## 4. Gravitational Potential Energy
### Concepts
- Gravitational Potential Energy (GPE) of a mass m at distance r from the centre of Earth (mass M): `U = -GMm/r`
- The negative sign indicates that the system is bound; work must be done to separate the masses to infinity
- At infinity, U = 0 (reference point)
- GPE near the surface (for small heights h << R): `Delta U = mgh`

### Formulas
- `U = -GMm/r` (for point masses or uniform spheres, r = distance between centres)
- Change in PE from surface to height h: `Delta U = -GMm/(R+h) - (-GMm/R) = GMm * h / [R(R+h)]`
- For h << R: `Delta U approx mgh`
- Gravitational potential at distance r: `V = -GM/r` (potential energy per unit mass)
- Gravitational potential at the surface: `V = -GM/R = -gR`
- Gravitational potential at centre of solid sphere: `V = -(3/2) * GM/R = -(3/2)gR`
- Self-energy of a uniform sphere: `U = -(3/5) * GM^2/R`

### Key Diagram: GPE vs Distance
- Graph showing U on y-axis (negative) and r on x-axis. U = 0 at r = infinity. As r decreases, U becomes more negative (deeper well). The curve is a -1/r hyperbola. [SVG-REF]

### Important Notes
- GPE is a property of the system, not of an individual body
- Always take the correct sign convention: GPE is negative for bound systems
- Work done by gravity = `-Delta U` = decrease in potential energy
- Gravitational PE of a system of n particles: sum over all pairs `U = -G * sum(mi*mj/rij)` for i < j
- Total number of interaction pairs for n particles: `n(n-1)/2`

---

## 5. Escape Velocity
### Concepts
- Escape velocity is the minimum velocity with which a body must be projected from the surface of a planet to permanently overcome its gravitational field
- At escape velocity, the body reaches infinity with zero velocity (KE = 0, PE = 0 at infinity)
- Escape velocity is independent of the mass of the projected body and the angle of projection

### Formulas
- Energy conservation: `(1/2)mv_e^2 + (-GMm/R) = 0`
- `v_e = sqrt(2GM/R) = sqrt(2gR)`
- For Earth: `v_e = sqrt(2 x 9.81 x 6400 x 10^3) = 11.2 km/s` (approximately 11.3 km/s)
- In terms of density: `v_e = R * sqrt(8*pi*G*rho/3)`
- Relation between escape velocity and orbital velocity: `v_e = sqrt(2) * v_orbital` (for surface orbit)

### Key Diagram: Body Escaping Earth
- Circle representing Earth (radius R, mass M), with a small mass m on the surface and an arrow showing velocity v_e directed radially outward [SVG-REF]

### Important Notes
- Escape velocity does NOT depend on the mass of the body or the direction of projection
- It DOES depend on the mass and radius of the planet, and the location from which it is projected
- If projected from height h: `v_e = sqrt(2GM/(R+h)) = sqrt(2g'(R+h))`
- When a body is given escape velocity, its total energy becomes zero
- If v < v_e: the body will return (elliptical path or straight fall)
- If v = v_e: parabolic trajectory to infinity
- If v > v_e: hyperbolic trajectory to infinity

### Worked Example
**Q:** A body is thrown from the surface of Earth with velocity 1 km/s. Find the maximum height above the surface (g = 9.8 m/s^2, R = 6400 km).

**A:**
Step 1: Let u = 1 km/s = 10^3 m/s, h = height attained, GM = gR^2
Step 2: Using energy conservation: `(1/2)mu^2 = GMm[1/R - 1/(R+h)] = gR^2 * m * h/[R(R+h)]`
Step 3: `u^2/2 = gR^2 * h / [R(R+h)]` => `u^2/(2gR^2) = h/[R(R+h)]`
Step 4: `h = u^2 R / (2gR - u^2)`
Step 5: `h = (10^3)^2 * 6400 * 10^3 / (2 * 9.8 * 6400 * 10^3 - (10^3)^2)`
Step 6: `h = 6.4 * 10^9 / (1.2544 * 10^8 - 10^6) = 6.4 * 10^9 / 1.2444 * 10^8`
Step 7: `h approx 51,430 m = 51.43 km`

---

## 6. Motion of Satellite Around Earth
### Concepts
- A satellite is any object revolving around a planet under gravitational attraction
- For a circular orbit, gravitational force provides the necessary centripetal force
- The orbit radius is r = R + h, where h is the height above the surface

### Formulas
- **Orbital velocity:** `GMm/r^2 = mv^2/r` => `v = sqrt(GM/r) = sqrt(GM/(R+h))`
- Near-surface orbital velocity: `v = sqrt(gR) approx 7.9 km/s`
- **Time period:** `T = 2*pi*r/v = 2*pi*r*sqrt(r/(GM))` => `T^2 = (4*pi^2/GM) * r^3`
- Near-surface time period: `T = 2*pi*sqrt(R/g) approx 84.6 min`
- **Total energy of satellite:** `TE = KE + PE = (1/2)mv^2 + (-GMm/r) = GMm/(2r) - GMm/r = -GMm/(2r)`
- **Kinetic energy:** `KE = GMm/(2r) = (1/2)mv^2`
- **Potential energy:** `PE = -GMm/r`
- **Binding energy:** `BE = -TE = GMm/(2r)`
- Relationships: `KE = -TE = -PE/2` and `PE = 2*TE`

### Key Diagram: Satellite in Circular Orbit
- Earth at centre (radius R), satellite of mass m at distance r = R+h from centre, moving with velocity v tangent to the circular orbit. Arrow pointing from satellite toward Earth centre showing gravitational force. [SVG-REF]

### Important Notes
- Orbital velocity decreases with increasing orbit radius: `v is proportional to 1/sqrt(r)`
- Time period increases with orbit radius: `T is proportional to r^(3/2)`
- For a geostationary satellite: T = 24 hours, orbit radius r = `(GMT^2/(4*pi^2))^(1/3) approx 42,330 km`, height h approx 35,930 km above surface. Must be in equatorial plane, orbiting west to east.
- If a satellite revolves in geostationary orbit but east to west, its successive passing interval over a point on equator = 12 hours
- Total energy is negative for a bound satellite; if TE >= 0, the satellite escapes

---

## 7. Trajectory of a Satellite for Different Speeds
### Concepts
- Let v be the velocity given to a satellite, V_c = circular orbital velocity, V_e = escape velocity at that point
- `V_c = sqrt(GM/r)` and `V_e = sqrt(2GM/r)`
- Different cases based on projection speed:

### Formulas
| Velocity Condition | Trajectory |
|---|---|
| `v < V_c` | Elliptical orbit (Earth at farther focus). If projected near surface, it crashes. |
| `v = V_c` | Circular orbit with Earth at centre |
| `V_c < v < V_e` | Elliptical orbit with Earth at nearer focus |
| `v = V_e` | Parabolic trajectory (escapes) |
| `v > V_e` | Hyperbolic trajectory (escapes) |

### Important Notes
- The additional velocity needed to escape from circular orbit: `Delta v = v_e - v_c = (sqrt(2) - 1) * sqrt(GM/r) = 0.414 * v_c`
- When a satellite in circular orbit enters the atmosphere and encounters air drag: its KE increases (it spirals inward and speeds up), its PE decreases, angular momentum decreases, total energy decreases (becomes more negative), and period decreases
- If satellite is stopped in orbit and allowed to fall freely, speed at surface: use energy conservation `(1/2)mv^2 = GMm(1/R - 1/r)`

### Worked Example
**Q:** A space-ship is in circular orbit close to Earth's surface. What additional velocity must be imparted to escape? (R = 6400 km, g = 9.8 m/s^2)

**A:**
Step 1: Orbital velocity near surface: `v_c = sqrt(gR) = sqrt(9.8 x 6400 x 10^3) = 7.92 km/s`
Step 2: Escape velocity: `v_e = sqrt(2) * v_c = sqrt(2) * 7.92 = 11.2 km/s`
Step 3: Additional velocity: `v_e - v_c = (sqrt(2) - 1) * sqrt(gR) = 0.414 * 7.92 = 3.28 km/s`

---

## 8. Kepler's Laws of Planetary Motion
### Concepts

**1. Law of Orbits:** Each planet revolves around the Sun in an elliptical orbit with the Sun at one focus of the ellipse.

**2. Law of Areas:** The radius vector from the Sun to the planet sweeps out equal areas in equal time intervals. This is a consequence of conservation of angular momentum.
- `dA/dt = L/(2m) = constant`
- At perihelion (closest): speed is maximum
- At aphelion (farthest): speed is minimum
- `v_perihelion * r_perihelion = v_aphelion * r_aphelion` (conservation of angular momentum)

**3. Law of Periods:** The square of the time period of revolution is proportional to the cube of the semi-major axis (mean distance from the Sun).
- `T^2 is proportional to r^3` => `T^2/r^3 = 4*pi^2/(GM)` = constant for all planets orbiting the same star

### Formulas
- Mean distance: `r = (r_min + r_max)/2` (semi-major axis)
- `T^2 = (4*pi^2 / GM) * a^3` where a = semi-major axis
- For elliptical orbit: `v_1 * r_1 = v_2 * r_2` (angular momentum conservation)
- Period of elliptical orbit: `T = 2*pi * sqrt(a^3/(GM))` where a = `(r_perihelion + r_aphelion)/2`
- In elliptical orbit, total energy: `E = -GMm/(2a)`
- For a planet with elliptical orbit, angular momentum: `L = m * v * r * sin(angle)`
- Areal velocity: `dA/dt = L/(2m)`

### Key Diagram: Elliptical Orbit with Sun at Focus
- Ellipse with Sun at one focus (F1). Planet at various points. Two shaded regions of equal area showing equal time intervals. Labels for perihelion (closest point, maximum speed) and aphelion (farthest point, minimum speed). [SVG-REF]

### Important Notes
- The law of areas is equivalent to the conservation of angular momentum (since gravitational force is central)
- In an elliptical orbit: total energy and angular momentum are conserved; velocity, KE, PE all vary
- If gravitational force varied as 1/R^n, time period would be proportional to `R^((n+1)/2)`
- If a planet is suddenly stopped in its circular orbit, it falls into the Sun in time `T_fall = T/(4*sqrt(2))` where T is the original period
- If distance between Earth and Sun becomes 4 times, the time period becomes 8 times (T^2 proportional to r^3)

### Worked Example
**Q:** The mean distance of Mars from the Sun is 1.524 times that of Earth. Find the number of years for Mars to complete one revolution.

**A:**
Step 1: By Kepler's third law: `T1^2/T2^2 = r1^3/r2^3`
Step 2: `T_Mars/T_Earth = (r_Mars/r_Earth)^(3/2) = (1.524)^(3/2)`
Step 3: `T_Mars = 1 year * (1.524)^1.5 = 1.88 years`

---

## 9. Gravitational Field and Potential
### Concepts
- **Gravitational field intensity** at a point: force per unit mass = `E = F/m = -GM/r^2` (directed toward the mass)
- **Gravitational potential** at a point: work done per unit mass in bringing a test mass from infinity to that point = `V = -GM/r`
- Relation: `E = -dV/dr`
- Inside a uniform spherical shell: E = 0, V = constant = `-GM/R` (R = radius of shell)
- At centre of solid sphere: E = 0, V = `-(3/2)GM/R`
- Inside a solid sphere at distance r from centre: `E = -GMr/R^3`, `V = -(GM/2R^3)(3R^2 - r^2)`

### Formulas
- Point mass: `E = GM/r^2`, `V = -GM/r`
- Uniform ring on axis at distance x from centre: `E = GMx/(R^2 + x^2)^(3/2)`, `V = -GM/sqrt(R^2 + x^2)`
- Uniform spherical shell (outside): same as point mass at centre
- Uniform spherical shell (inside): `E = 0`, `V = -GM/R`
- Uniform solid sphere (outside): same as point mass
- Uniform solid sphere (inside): `E = GMr/R^3` (toward centre), `V = -(GM/(2R^3))(3R^2 - r^2)`
- Relation between field and potential: `E = -dV/dr`

### Important Notes
- Gravitational field inside a spherical cavity within a solid sphere is uniform and non-zero (it equals `-(4/3)*pi*G*rho*d` where d is the vector from sphere centre to cavity centre)
- The field at the centre of a thin spherical shell is zero, but the potential is `-GM/R` (not zero)
- Potential is always negative (for attractive masses with reference at infinity)

---

## 10. Energy Methods in Gravitation
### Concepts
- For any gravitational problem involving speeds and heights, use conservation of energy: `KE_i + PE_i = KE_f + PE_f`
- For two particles approaching from infinity under mutual gravity: `(1/2)m1*v1^2 + (1/2)m2*v2^2 = Gm1m2/d` (when separation = d)
- Combine with conservation of momentum: `m1*v1 = m2*v2` (if starting from rest)

### Formulas
- Two particles of mass m and M starting from rest at infinity, speeds when separation = d:
  - `v1 = sqrt(2GM^2 / [d(m+M)])` and `v2 = sqrt(2Gm^2 / [d(m+M)])`
- Energy required to lift satellite from orbit of radius r1 to r2: `Delta E = GMm/2 * (1/r1 - 1/r2)`
- Energy to place satellite in orbit from surface: `E = GMm/(2r) + GMm/R - GMm/R = GMm(1/R - 1/(2r))` (includes both PE change and KE of orbit)

### Worked Example
**Q:** Two particles of mass m and M are initially at rest at infinite distance. They move toward each other due to gravitational attraction. Find their speeds when the separation equals d.

**A:**
Step 1: Conservation of energy: `0 + 0 = (1/2)mv1^2 + (1/2)Mv2^2 - GMm/d`
Step 2: Conservation of momentum: `mv1 = Mv2` => `v1 = Mv2/m`
Step 3: Substituting: `(1/2)m(Mv2/m)^2 + (1/2)Mv2^2 = GMm/d`
Step 4: `(M^2 v2^2)/(2m) + Mv2^2/2 = GMm/d`
Step 5: `v2^2 * M(M+m)/(2m) = GMm/d`
Step 6: `v2 = sqrt(2Gm^2 / [d(m+M)])` and `v1 = sqrt(2GM^2 / [d(m+M)])`

---

## Important Formulas Summary

| Quantity | Formula |
|---|---|
| Gravitational Force | `F = Gm1m2/r^2` |
| Gravitational Constant | `G = 6.67 x 10^-11 Nm^2/kg^2` |
| g at surface | `g = GM/R^2 = (4/3)*pi*G*rho*R` |
| g at height h | `g' = g[R/(R+h)]^2` |
| g at depth h | `g' = g(1 - h/R)` |
| g with latitude | `g' = g - omega^2 R cos^2(theta)` |
| Gravitational PE | `U = -GMm/r` |
| Gravitational Potential | `V = -GM/r` |
| Escape Velocity | `v_e = sqrt(2GM/R) = sqrt(2gR)` |
| Orbital Velocity | `v_o = sqrt(GM/r) = sqrt(gR^2/r)` |
| Time Period of Satellite | `T = 2*pi*sqrt(r^3/(GM))` |
| Total Energy of Satellite | `TE = -GMm/(2r)` |
| Binding Energy | `BE = GMm/(2r)` |
| Kepler's Third Law | `T^2 = (4*pi^2/(GM)) * a^3` |
| Relation v_e and v_o | `v_e = sqrt(2) * v_o` (at same r) |
| Geostationary orbit radius | `r approx 42,330 km` (h approx 35,930 km) |
| Near-surface orbital speed | `v_o approx 7.9 km/s` |
| Escape speed (Earth) | `v_e approx 11.2 km/s` |
| Self-energy of sphere | `U = -(3/5)*GM^2/R` |
| Potential at centre of sphere | `V = -(3/2)*GM/R` |

---

## Questions

### ANSWER KEYS (Reference)

**Workbook Answer Key -- Level 1 (Q1-60)**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | D | C | D | A | B | B | A | C | D | C | D | D | C | D | A |

| Q# | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | C | C | D | A | A | B | A | A | D | C | A | A | C | B | B |

| Q# | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | C | B | A | B | C | D | A | D | D | C | D | B | A | D | B |

| Q# | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | 469 | 1 | 0.41 | 300 | 400 | 3.5 | 0.5 | 2 | 13 | 10 | 16 | 13 | 12 | 1 | 1 |

**Workbook Answer Key -- Level 2 (Q61-90)**

| Q# | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | C | C | B | C | A | C | B | D | BCD | B | B | B | D | C | AD |

| Q# | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | BC | ABC | B | A | 36 | D | C | D | C | D | B | C | AC | ABC | A |

**Workbook Answer Key -- Previous Years JEE Main (Q1-43)**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | A | B | A | C | C | C | C | C | B | A | B | A | C | D | C |

| Q# | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | A | D | D | B | D | D | C | B | D | A | C | C | C | C | C |

| Q# | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | A | B | A | B | D | D | A | D | D | D | B | B | B |

**Workbook Answer Key -- Previous Years JEE Advanced (Q1-38)**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | C | A | B | B | A | D | C | D | C | A | B | B | B | B | ACD |

| Q# | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 |
|---|---|---|---|---|---|---|---|---|---|
| Ans | AB | BD | BC | A | B | (i)4 (ii)3 | (i)1 (ii)2 | (i)6400 km (ii)7920 m/s | -- |

| Q# | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | 1.5x10^32 J | 3/2 | 99.5 | 6 | 3 | 2 | 7 | 1.23x10^-3 | Angular momentum | 6.45h | -- | R | 6.94x10^22 m^2 | False |

**In-Chapter Exercise A (from Section 3)**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| Ans | w=sqrt(g/R) | 262.2x10^3 km from Earth centre | D | B | B | B | A | C | A | A |

**In-Chapter Exercise B (from Section 5)**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| Ans | T=2pi/sqrt(gR_e^2)*(3R_e/2)^(3/2) | GmM/(12R) | (5/9)GMm/R | -- | B | B | B | B | C | D |

**Miscellaneous Exercise (from Module)**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| Ans | A | D | A | A | C | C | C | C | B | CD |

---

### GRAVITATION: LEVEL 0 (EASY)
*Source: DTS-0 (CBSE Pattern)*

**VSA: Very Short Answer Type (1 mark)**

**1.** How does the earth retain most of its atmosphere?

**2.** Where does a body weigh more -- at the surface of the earth or in a mine?

**3.** Is it possible to shield a body from gravitational effects?

**4.** It is possible to put an artificial satellite in an orbit in such a way that it always remains visible directly over any place in India?

**5.** A man can jump higher on the Moon than on earth. Explain.

**SA-I: Short Answer Type I (2 marks)**

**6.** If a body is projected from the surface of the earth. Find the value of escape velocity.

**8.** How is it that we learn more about the shape of Earth by studying the motion of an artificial satellite than by studying the motion of the Moon?

**9.** What is the amount of work done in bringing a mass from the surface of Earth on one side to a point diametrically opposite on the other side?

**10.** If the radius of the Earth shrinks by 1.5% (mass remaining the same), then how would the value of acceleration due to gravity change?

**11.** If the diameter of Earth becomes two times its present value and its mass remains unchanged, then how would the weight of an object on the surface of Earth be affected?

**12.** What would happen to an artificial satellite, if its orbital velocity is slightly decreased due to some defects in it?

**SA-II: Short Answer Type II (3 marks)**

**13.** Why rockets are launched from west to east in the equatorial plane?

**14.** A person in an artificial satellite of Earth feels weightlessness. But a person on the Moon has weight though the Moon is also a satellite of the Earth. Why?

**15.** Why a tennis ball bounces higher on hills than in plains?

**16.** Does the escape speed of a body from the earth depend on: (i) mass of the body, (ii) the location from where it is projected, (iii) the direction of projection, (iv) the height of the location from where the body is launched?

**17.** Two particles of masses 0.2 kg and 0.8 kg are separated by 12 cm. At which point from the 0.2 kg particle, gravitational field intensity due to the two particles is zero?

**18.** Two satellites S1 and S2 revolve around the earth at distances 3R and 6R from the centre of the earth. Find the ratio of their (a) linear speeds and (b) angular speeds.

**19.** Imagine earth is rotating at a very high speed such that weight of a body at the equator is zero. Then what would be number of hours in a day?

**20.** Imagine what would happen if the value of G becomes: (i) 100 times of its present value, (ii) 1/100 times of its present value.

**21.** In Kepler's law of periods T^2 = kr^3, the constant k = 10^-13 s^2 m^-3. Express the constant k in days and kilometers. Obtain its time period of revolution in days. The moon is at a distance of 3.84 x 10^5 km from the earth.

**22.** A comet orbits the sun in highly elliptical orbit. Does the comet have a constant (i) linear speed, (ii) angular speed, (iii) angular momentum, (iv) kinetic energy, (v) potential energy and (vi) total energy throughout its orbit? Neglect any mass loss of the comet when it comes very close to the sun.

**23.** Three mass points each of mass m are placed at the vertices of an equilateral triangle of side l. What is the gravitational field and potential at the centroid of the triangle due to the three masses?

**24.** Mention at least three conditions under which weight of a person can become zero.

**LA: Long Answer Type (5 marks)**

**25.** Deduce the law of gravitation from Kepler's laws of planetary motion.

**26.** Choose the correct alternatives:
- (i) Acceleration due to gravity increases/decreases with increasing altitude.
- (ii) Acceleration due to gravity increases/decreases with increasing depth (assume the earth to be a sphere of uniform density).
- (iii) Acceleration due to gravity is independent of the mass of the earth/mass of the body.
- (iv) The formula `GMm(1/r2 - 1/r1)` is more/less accurate than the formula `mg(r2 - r1)` for the difference of potential energy between two points r1 and r2 distance away from the centre of the earth.

**27.** Two uniform solid spheres of equal radii R, but mass M and 4M have a centre to centre separation 6R. A projectile of mass m is projected from the surface of the sphere of mass M directly towards the centre of the second sphere. Obtain an expression for the minimum speed v of the projectile so that it reaches the surface of the second sphere.

---

### GRAVITATION: LEVEL 1
*Source: DTS-1 (Gravitational Force), DTS-2 (Variation of g, GPE), DTS-3 (Satellites, Kepler's Laws)*

#### DTS-1: Gravitational Force

**1.** In the formula `F = Gm1m2/r^2`, the quantity G:
(A) Depends on the local value of g (B) Is used only when Earth is one of the two masses (C) is greatest at the surface of Earth (D) is a universal constant of nature

**2.** There identical masses, each of mass 1 kg lie in the xy-plane at points (0, 0), (0, 0.2 m) and (0, 2m, 0). The net gravitational force on the mass at the origin is:
(A) `1.67 x 10^-9 (i-hat - j-hat) N` (B) `3.34 x 10^-10 (i-hat - j-hat) N` (C) `1.67 x 10^-9 (i-hat + j-hat) N` (D) `3.34 x 10^-10 (i-hat + j-hat) N`

**3.** Two particles of masses m1 and m2, m1 > m2, move in circular paths under the action of their gravitational attraction. While doing so, their separation remains constant and equals r. Radius of circular path of m2 is:
(A) r/2 (B) `m1*r/m2` (C) `m2*r/(m1+m2)` (D) `m1*r/(m1+m2)`

**4.** Mass M is divided into two parts xM and (1-x)M. For a given separation, the value of x for which the gravitational attraction between the two pieces becomes maximum is:
(A) 1/2 (B) 3/5 (C) 1 (D) 2

**5.** Four particles, each with mass m are arranged symmetrically about the origin on the x axis. A fifth particle, with mass M, is on the y axis. The direction of the gravitational force on M is:
(A) Up (B) Down (C) Left (D) Right

**6.** Three particles, two with mass m and one with mass M, might be arranged in any of the four configurations known below. Rank the configuration according to the gravitational force on M, least to greatest.
(A) 1, 2, 3, 4 (B) 2, 1, 3, 4 (C) 2, 1, 4, 3 (D) 2, 3, 4, 1

**7.** Two particles of masses m and 2m are fixed in place on an axis. Where on the axis can a third particle of mass 3m be placed so that the gravitational force on it from the first two particles is zero?
(A) Between m and 2m (B) Left of m (C) Right of 2m (D) The net gravitational force on 3m never be zero

**8.** A particle placed: 1. inside a uniform spherical shell of mass M, but not at the center; 2. inside a uniform spherical shell of mass M, at the center; 3. outside a uniform spherical shell of mass M, a distance r from the center; 4. outside a uniform solid sphere of mass M, a distance 2r from the center. If F1, F2, F3 and F4 are gravitational forces acting on the particle in four cases:
(A) F1 > F2 > F3 > F4 (B) F1 = F2 < F3 < F4 (C) F1 = F2 < F4 < F3 (D) F1 < F2 < F3 < F4

**9.** Two concentric shells of masses m1 and m2. At which point will a particle of mass m experience zero force?
(A) A (B) B (C) C (D) D [where A is outside both, B is between them, C and D are inside inner shell]

**10.** Let F1 be the magnitude of the gravitational force exerted on the Sun by Earth and F2 be the magnitude of the force exerted on Earth by the Sun. Then:
(A) F1 is much greater than F2 (B) F1 is slightly greater than F2 (C) F1 is equal to F2 (D) F1 is slightly less than F2

**11.** The distance between the centres of the Moon and the earth is D. The mass of the earth is 81 times the mass of the Moon. At what distance from the centre of the earth, the gravitational force will be zero?
(A) D/2 (B) 2D/3 (C) 4D/3 (D) 9D/10

**12.** If three uniform spheres, each having mass M and radius R, are kept in such a way that each touches the other two, the magnitude of the gravitational force on any sphere due to the other two is:
(A) `GM^2/(4r^2)` (B) `2GM^2/r^2` (C) `2GM^2/(4r^2)` (D) `sqrt(3)GM^2/(4r^2)`

**13.** Two balls, each of radius R, equal mass and density, are placed in contact. Then the force of gravitation between them is proportional to:
(A) `1/R^2` (B) `F proportional to R` (C) `F proportional to R^4` (D) `F proportional to 1/R`

**14.** A solid sphere of radius R/2 is cut out of a solid sphere of radius R such that the spherical cavity so formed touches the surface on one side and the centre of the sphere on the other side. Initial mass was M. If a particle of mass m is placed at a distance 2.5R from the centre of the cavity, what is the gravitational attraction on mass m?
(A) `GMm/R^2` (B) `GMm/(2R^2)` (C) `GMm/(8R^2)` (D) `(23/100)GMm/R^2`

**15.** A spherical shell has inner radius R1, outer radius R2, and mass M distributed uniformly throughout. The magnitude of the gravitational force exerted on the shell by a point mass particle of mass m, located at a distance d from the center, inside the inner radius, is:
(A) 0 (B) `GMm/R1^2` (C) `GMm/d^2` (D) `GMm/(R2^2 - d^2)`

#### DTS-2: Acceleration Due to Gravity 'g' and Its Variation, Gravitational Potential Energy

**16.** The mass of a hypothetical planet is 1/100 that of Earth and its radius is 1/4 that of Earth. If a person weighs 600 N on Earth, what would he weigh on this planet?
(A) 24 N (B) 48 N (C) 96 N (D) 192 N

**17.** An astronaut on the Moon simultaneously drops a feather and a hammer. The fact that they land together shows that:
(A) no gravity forces act on a body in a vacuum (B) the acceleration due to gravity on the Moon is less than on Earth (C) in the absence of air resistance all bodies at a given location fall with the same acceleration (D) the feather has a greater weight than on Earth

**18.** The approximate value of g (in m/s^2) at an altitude above Earth equal to one Earth diameter is:
(A) 9.8 (B) 4.9 (C) 2.5 (D) 1.1

**19.** The height at which the acceleration due to gravity becomes g/9 (where g = the acceleration due to gravity on the surface of the earth) in terms of the radius the earth R, is:
(A) 2R (B) `R/sqrt(3)` (C) R/2 (D) `sqrt(2)*R`

**20.** Weight of a body of mass m decreases by 1% when it is raised to height h above the earth's surface. If the body is taken to a depth h in a mine, change in its weight is:
(A) 0.5% decrease (B) 2% decrease (C) 0.5% increase (D) 1% increase

**21.** A body weights 500N on the surface of the earth. How much would it weight half-way below the surface of the earth?
(A) 125 N (B) 250 N (C) 500 N (D) 1000 N

**22.** If a man at the equator would weigh (3/5)th of his weight, the angular speed of the earth is:
(A) `sqrt(2g/(5R))` (B) `sqrt(g/R)` (C) `sqrt(R/g)` (D) `sqrt(2R/(5g))`

**23.** If the earth stops rotating, the value of g at the equator:
(A) increases (B) decreases (C) no effect (D) None of these

**24.** Neglecting air resistance, a 1.0-kg projectile has an escape velocity of about 11 km/s at the surface of Earth. The corresponding escape velocity for a 2.0 kg projectile is:
(A) 3.5 km/s (B) 5.5 km/s (C) 7.1 km/s (D) 11 km/s

**25.** The escape velocity at the surface of Earth is approximately 8 km/s. What is the escape velocity for a planet whose radius is 4 times and whose mass is 100 times that of Earth?
(A) 1.6 km/s (B) 8 km/s (C) 40 km/s (D) 200 km/s

**26.** An object is dropped from an altitude of one Earth radius above Earth's surface. If M is the mass of Earth and R is its radius. The speed of the object just before it hits Earth is given by:
(A) `sqrt(GM/R)` (B) `sqrt(GM/(2R))` (C) `sqrt(2GM/R)` (D) `sqrt(GM/R^2)`

**27.** If M be the mass of the earth, R its radius (assumed spherical) and G, gravitational constant, then the amount of work that must be done on a body of mass m so that it completely escapes from the gravity of the earth is given by:
(A) `GmM/R` (B) `GmM/(2R)` (C) `3GmM/(2R)` (D) `4GmM/(2R)`

**28.** Each of the four corners of a square with edge a is occupied by a point mass m. There is a fifth mass, also m, at the center of the square. To remove the mass from the center to a point far away the work that must be done by an external agent is given by:
(A) `4Gm^2/a` (B) `-4Gm^2/a` (C) `4*sqrt(2)*Gm^2/a` (D) `-4*sqrt(2)*Gm^2/a`

**29.** Two particles, each of mass m, are a distance d apart. To bring a third particle, also having mass m, from far away to the point midway between the two particles an external agent does work given by:
(A) `4Gm^2/d` (B) `-4Gm^2/d` (C) `4Gm^2/d^2` (D) `-4Gm^2/d^2`

**30.** Two bodies with masses M1 and M2 are initially at rest and a distance R apart. Then they move directly towards one another under the influence of their mutual gravitational attraction. What is the ratio of the distance travelled by M1 to the distance travelled by M2?
(A) M1/M2 (B) M2/M1 (C) 1 (D) 1/2

#### DTS-3: Motion of Satellite in Circular Orbit, Kepler's Laws

**31.** The ratio of distance of two satellites from the centre of earth is 1:4. The ratio of their time periods of rotation will be:
(A) 1:4 (B) 4:1 (C) 1:8 (D) 8:1

**32.** A satellite moves round the earth in a circular orbit of radius R making 1 rev/day. A second satellite moving in a circular orbit, moves round the earth once in 8 days. The radius of the orbit of the second satellite is:
(A) 8R (B) 4R (C) 2R (D) R

**33.** Two satellites of same mass are orbiting round the earth at heights of r1 and r2 from the centre of earth. Their kinetic energies are in the ratio of:
(A) r2/r1 (B) r1/r2 (C) r1/(r1+r2) (D) r2/(r1+r2)

**34.** The kinetic energy of a satellite in its orbit around the earth is E. What should be the kinetic energy of the satellite so as to enable it escape from the gravitational pull of the earth?
(A) 4E (B) 2E (C) `sqrt(2)*E` (D) E

**35.** A satellite orbiting close to surface of earth does not fall down because the gravitational pull of earth:
(A) is balanced by the gravitational pull of moon (B) is balanced by the gravitational pull of sun (C) provides the necessary acceleration for its motion along the circular path (D) makes it weightless

**36.** An instrument package is released from an artificial earth-satellite by simply detaching it from the outer wall of the satellite. The package:
(A) will shoot forward off the satellite (B) will go to the outer space and will get lost (C) will fall to the earth below (D) will continue moving along with the satellite into the same orbit and with the same velocity

**37.** An artificial satellite of Earth nears the end of its life due to air resistance. While still in orbit:
(A) It moves faster as the orbit lower (B) It moves slower as the orbit lowers (C) It slowly spirals away from Earth (D) It moves slower in the same orbit but with a decreasing period

**38.** A spaceship is returning to Earth with its engine turned off. Consider only the gravitational field of Earth and let M be the mass of Earth, m be the mass of the spaceship, and R be the distance from the center of Earth. In moving from position 1 to position 2 the kinetic energy of the spaceship increases by:
(A) GMm/R2 (B) GMm/R2^2 (C) GMm(R1-R2)/R1^2 (D) GMm(R1-R2)/(R1*R2)

**39.** Assume that Earth is in circular orbit around the Sun with kinetic energy K and potential energy U, taken to be zero for infinite separation. Then, the relationship between K and U:
(A) is K = U (B) is K = -U (C) is K = U/2 (D) is K = -U/2

**40.** A planet revolves around the sun in an elliptical orbit. The linear speed of the planet will be maximum at:
(A) D (B) B (C) A (D) C [where A is closest to sun -- perihelion]

**41.** A planet travels in an elliptical orbit about a star as shown. At what pair of points is the speed of the planet the same?
(A) W and S (B) P and T (C) P and R (D) Q and U

**42.** Kepler's second law regarding constancy of aerial velocity of a planet is a consequence of the law of conservation of:
(A) energy (B) angular momentum (C) linear momentum (D) None of these

**43.** A planet of mass m is in an elliptical orbit about the sun (m << M_sun) with an orbital period T. If A be the area of orbit, then its angular momentum would be:
(A) 2mA/T (B) mAT (C) mA/(2T) (D) 2mAT

**44.** The period of moon's revolution around the earth is nearly 29 days. If moon's mass becomes 2 fold of its present value, and all other things remained unchanged, the period of moon's rotation will become nearly:
(A) `29/sqrt(2)` (B) `29/sqrt(2)` days (C) `29 x 2` days (D) 29 days

**45.** The gravitational force between two particles is proportional to 1/R (and not as 1/R^2), where R is separation between the particles. A particle in circular orbit under such a force would have its orbital speed proportional to:
(A) 1/R (B) R^0 (C) R^1 (D) 1/R^2

---

### GRAVITATION: LEVEL 2
*Source: DTS-4 NAT (Numerical Answer Type), DTS-5 (Gravitational Force), DTS-6 (Variation of g, GPE), DTS-7 (Satellites, Kepler's Laws)*

#### DTS-4 NAT: Mixed Numerical Questions

**46.** Two uniform spheres A (Hollow) and B (solid) of same radius R (<r/2) are kept on a horizontal rough surface. Initially they are separated by a distance 2r (centre to centre). They move without sliding towards each other due to gravitational attraction. The sphere A has mass m and B has mass 2m. The speed of the centre of sphere B when the separation becomes r is `sqrt(125Gm/(Pr))`, where P is _________.

**47.** An object is projected vertically up from the earth's surface with velocity `sqrt(Rg)` where R is the radius of the earth and g is the acceleration due to earth on the surface of earth. The maximum height reached by the object is nR. Find value of n.

**48.** A spaceship is launched into a circular orbit close to the earth's surface. The minimum additional speed to be imparted to the spaceship in the orbit to overcome the gravitational pull is `n*sqrt(gR)`. (Radius of the earth = R and g = 9.8 m/sec^2). Find value of n.

**49.** A spherical planet has uniform density `(pi/2) x 10^4 kg/m^3`. The minimum period for a satellite in a circular orbit around it in seconds is 10P. Find value of P. (Use G = 20/3 x 10^-11 Nm^2/kg^2).

**50.** A particle is projected from point A, that is at a distance 4R from the centre of the earth, with speed v1 in a direction making 30 degrees with the line joining the centre of the earth and point A, as shown. If particle passes grazing the surface the earth, then the speed v1 in m/s is `10*sqrt(2)*P`. Find value of P. (Consider gravitational interaction only between these two. Use GM/R = 6.4 x 10^7 m^2/s^2)

**51.** Imagine a light planet revolving around a very massive star in a circular orbit of revolution T. On what power of r, will the square of time period depends if the gravitational force of attraction between the planet and the star is proportional to `r^(-5/2)`.

**52.** Two identical satellites are moving around the Earth in circular orbits at heights 3R and R respectively where R is the radius of the Earth. The ratio of their kinetic energies is x. Find x.

**53.** A system consists of n identical particles each of mass m. The total number of interaction potential energy terms possible are `n(n-1)/x`. Find value of x.

**54.** A body weighs w Newton on the surface of the earth. Its weight at a height equal to half the radius of the earth, will be `(x/y)*w` where x and y are coprimes. Find x + y.

**55.** A planet in a distant solar system is 10 times more massive than the earth and its radius is 10 times smaller. Given that the escape velocity from the earth is 11 km/s, the escape velocity from the surface of the planet would be `x * 11` km/s. Find x.

**56.** A planet of mass m moves along an ellipse around the sun (mass M) so that its maxima and minimum distances from the sun are equal to r1 and r2 respectively. The angular momentum of this plane relative to the centre of the sun is `m*sqrt(PGMr1r2 / [8(r1+r2)])`. Find value of P (integer).

**57.** A ball A of mass m falls on the surface of the earth from infinity. Another ball B of mass 2m falls on the earth from the height equal to six times the radius of the earth. Then ratio of velocities of A and B on reaching the earth is `sqrt(x/y)` where x and y are coprimes. Find x + y.

**58.** A satellite revolves in the geostationary orbit but in the direction east to west. The time between its successive passing about a point on the equator is x hours. Find x.

**59.** A body of mass 500 g is thrown upwards with a velocity 20 ms^-1 and reaches back to the surface of a planet after 20 s. Then the weight of the body on that planet is (Assume g to be constant) xN. Find x.

**60.** Satellites A and B are revolving around the earth. The mass of A is 10 times to mass of B. The ratio of time period (T_A/T_B) is x. Find x.

#### DTS-5: Gravitational Force (Level 2)

**61.** Four particles of masses m, 2m, 3m and 4m are kept in sequence at the corners of a square of side a. The magnitude of gravitational force acting on a particle of mass m placed at the centre of the square will be:
(A) `24m^2G/a^2` (B) `6m^2G/a^2` (C) `4*sqrt(2)*Gm^2/a^2` (D) zero

**62.** Four uniform spheres, with masses mA = 40 kg, mB = 35 kg, mC = 200 kg, and mD = 50 kg, have (x,y) coordinates of (0, 50 cm), (0, 0), (-80 cm, 0), and (40 cm, 0), respectively. In unit-vector notation, what is the net gravitational force on sphere B due to the other spheres?
(A) `(2.6x10^-5 N)j-hat` (B) `(7.1x10^-3 N)j-hat` (C) `(3.7x10^-5 N)j-hat` (D) `(4.9x10^-4 N)j-hat`

**63.** A uniform thin rod mass m and length R is placed normally on surface of a solid uniform sphere of mass M and radius R as shown. Then the magnitude of gravitational force exerted by the sphere on the rod is:
(A) `GmM/(4R^2)` (B) `GmM/(2R^2)` (C) `4GMm/(9R^2)` (D) `GMm/(8R^2)`

**64.** Assuming the earth to be a sphere of uniform density the acceleration due to gravity:
(A) at a point outside the earth is inversely proportional to the square of its distance from the centre (B) at a point outside the earth is inversely proportional to its distance from the centre (C) at a point inside is zero (D) at a point inside is proportional to its distance from the centre

**65.** Two identical spherical balls, each of mass m, are placed as shown in figure. Plot the variation of g (gravitation intensity) along the x-axis due to both the masses. [Diagram shows two masses at equal distance on either side of origin]

**Paragraph for Questions 66-68:** A solid sphere of mass m and radius r is placed inside a hollow thin spherical shell of mass M and radius R. A particle of mass m' is placed on the line joining the two centres at a distance x from the point of contact of the sphere and the shell. Find the magnitude of the resultant gravitational force on this particle due to the sphere and the shell if:

**66.** r < x < 2r:
(A) `Gmm'(2r-x)/(2r^3)` (B) `Gmm'(x-r)/(2r^3)` (C) `Gmm'(x-r)/r^3` (D) `Gmm'(2x-r)/r^3`

**67.** 2r < x < 2R:
(A) `Gmm'/[4(x-r)^2]` (B) `Gmm'/(x-r)^2` (C) `Gmm'R/[(x-r)^3]` (D) `2Gmm'/(x-r)^2`

**68.** x > 2R:
(A) `2GMm'/(x-r)^2 + 2Gmm'/(x+r)^2` (B) `GMm'/[2(x-R)^2] + 2Gmm'/(x-r)^2` (C) `GMm'/(x+R)^2 + Gmm'/(x+r)^2` (D) `GMm'/(x-R)^2 + Gmm'/(x-r)^2`

**\*69.** Gravitational force with which a body attracts the other is always equal to the force with which the other attracts the first. Assuming no other forces acting on the bodies, choose the correct statement.
(A) Both the bodies always have equal acceleration (B) Both the bodies may have equal acceleration (C) Both the bodies may not have equal acceleration (D) The acceleration of the centre of mass of the two bodies is zero

**70.** A body starts from rest from a point having distance R0 from the centre of the earth. The velocity acquired by the body when it reaches the surface of the earth will be (R represents radius of the earth):
(A) `2GM(1/R - 1/R0)` (B) `sqrt[2GM(1/R - 1/R0)]` (C) `GM(1/R - 1/R0)` (D) `2GM*sqrt(1/R - 1/R0)`

#### DTS-6: Acceleration Due to Gravity and Its Variation, GPE (Level 2)

**71.** A (non-rotating) star collapses onto itself from an initial radius Ri with its mass remaining unchanged. Which curve in the figure best gives the gravitational acceleration ag on the surface of the star as a function of the radius of the star during the collapse?
(A) a (B) b (C) c (D) d

**72.** If ge, gh and gd be the acceleration due to gravity at earth's surface, a height h and at depth d respectively (h = d). Then:
(A) ge > gh > gd (B) ge > gh < gd (C) ge < gh < gd (D) ge < gh > gd

**73.** The acceleration due to gravity on a planet A is 9 times the acceleration due to gravity on planet B. A man jumps to a height of 2 m on the surface of A. What is the height of jump by the same person on the planet B?
(A) 6 m (B) (2/3)m (C) (2/9)m (D) 18 m

**74.** If the earth were to spin faster, acceleration due to gravity at the poles:
(A) Increases (B) Decreases (C) Remains the same (D) depends on how fast it spins

**\*75.** Assuming the earth to be a sphere of uniform density the acceleration due to gravity:
(A) at a point outside the earth is inversely proportional to the square of its distance from the centre (B) at a point outside the earth is inversely proportional to its distance from the centre (C) at a point inside is zero (D) at a point inside is proportional to its distance from the centre

**\*76.** Three planets of same density and with radii R1, R2 and R3 such that R1 = 2R2 = 3R1 have gravitation fields strength on planets are v1, v2, v3, respectively. Then:
(A) g1/g2 = 1/2 (B) g1/g3 = 3 (C) v1/v2 = 2 (D) v1/v3 = 1/3

**\*77.** Two objects of masses m and 4m are at rest at an infinity separation. They move toward each other under mutual gravitational attraction. If G is the universal gravitational constant, at separation r:
(A) The total energy of the two objects is zero (B) Net angular momentum of both the objects is zero about any point (C) The total kinetic energy of the objects is `(4Gm^2)/r` (D) Their relative velocity of approach is `(8Gm/r)^(1/2)`

**Paragraph for Questions 78-79:** Two uniform spherical stars made of same material have radii R and 2R. Mass of the smaller planet is m. They start moving from rest towards each other from a large distance under mutual force of gravity. The collision between the stars is inelastic with coefficient of restitution 1/2.

**78.** Kinetic energy of the system just after the collision is:
(A) `8Gm^2/(3R)` (B) `2Gm^2/(3R)` (C) `4Gm^2/(3R)` (D) cannot be determined

**79.** The maximum separation between their centres after their first collision:
(A) 4R (B) 6R (C) 8R (D) 12R

**80.** A body weighs 64 N on the surface of the Earth. What is the gravitational force on it (in N) due to the Earth at a height equal to one-third of the radius of the Earth?

#### DTS-7: Motion of Satellite in Circular Orbit, Kepler's Laws (Level 2)

**81.** A satellite is launched into a circular orbit of radius R around the earth while a second satellite is launched into an orbit of radius 1.02R. The percentage difference in the time period is:
(A) 0.7 (B) 1.0 (C) 1.5 (D) 3.0

**82.** A planet of small mass m moves around the sun of mass M, along an elliptical orbit such that its minimum and maximum distance from sun are r and R, respectively. Its period of revolution will be:
(A) `2*pi*sqrt[(r+R)^2/(6GM)]` (B) `2*pi*sqrt[(r+R)^3/(3GM)]` (C) `pi*sqrt[(r+R)^3/(2GM)]` (D) `2*pi*sqrt[(r+R)^3/(GM)]`

**83.** The figure shows the variation of energy with the orbit radius of a body in circular planetary motion. Find the correct statement about the curves A, B and C:
(A) A shows the kinetic energy, B the total energy and C the potential energy of the system (B) C shows the total energy, B the kinetic energy and A the potential energy of the system (C) C and A are kinetic and potential energies respectively and B is the total energy of the system (D) A and B are kinetic and potential energies respectively and C is the total energy of the system

**84.** A satellite revolves in the geostationary orbit but in a direction opposite to the direction of rotation of earth. The time interval between its successive passing about a point on the equator is:
(A) 48 hrs (B) 24 hrs (C) 12 hrs (D) never

**85.** A satellite of mass m, initially at rest on the earth, is launched into a circular orbit at a height equal to the radius of the earth. The minimum energy required is:
(A) `(sqrt(3)/4)*mgR` (B) `(1/2)*mgR` (C) `(1/4)*mgR` (D) `(3/4)*mgR`

**86.** A satellite of mass 5M orbits the earth in a circular orbit. At one point in its orbit, the satellite explodes into two pieces, one of mass M and the other of mass 4M. After the explosion the mass M ends up travelling in the same circular orbit, but in the opposite direction. After explosion the mass 4M is:
(A) In a circular orbit (B) unbound (C) elliptical orbit (D) data is insufficient to determine the nature of the orbit

**87.** A satellite can be in a geostationary orbit around the earth at a distance r from the centre. If the angular velocity of earth about its axis doubles, a satellite can now be in a geostationary orbit around earth if its distance from the centre is:
(A) r/2 (B) `r/(2*sqrt(2))` (C) `r/(4)^(1/3)` (D) `r/(2)^(1/3)`

**\*88.** When a satellite in a circular orbit around the earth enters the atmospheric region, it encounters small air resistance to its motion. Then:
(A) its kinetic energy increases (B) its kinetic energy decreases (C) its angular momentum about the earth decreases (D) its period of revolution around the earth increases

**\*89.** A satellite is revolving round the earth in circular orbit:
(A) if mass of earth is made four times, keeping other factors constant, orbital speed of satellite will become two times (B) corresponding to change in part (a), times period of satellite will remain half (C) when value of G is made two times orbital speed increases and time period decreases (D) G has no effect on orbital speed and time period

**90.** An earth satellite is moved from one stable circular orbit to another larger and stable circular orbit. The following quantities increase for the satellite as a result of this change:
(A) gravitational potential energy (B) angular velocity (C) linear orbital velocity (D) centripetal acceleration

---

### GRAVITATION: LEVEL 3 (HARD)
*Source: DTS-8, DTS-9, DTS-10 (Subjective / Advanced problems)*

**91.** Three material points, each of mass m one at the vertices of an equilateral triangle of side d. The system is rotating in free space in such a way that under the mutual gravitational interaction of three particles, the system is neither expanding nor contracting. Find the angular velocity of this rotation.

**92.** A particle of mass m is situated at a distance d from one end of a rod of mass M and length L as shown in the figure. Find the magnitude of the gravitational force between them.

**93.** A small bead can slide without friction on a wooden rod of length l = 10.0 m. Initially the rod and the bead both are held motionless with the rod aligned radially with the earth. r0 = 4 x 10^8 m, x0 = 2.0 cm, R_earth = 6400 km, g = 10 m/s^2. Both the bodies are released simultaneously. Considering gravitational interaction only with the earth, find how long after the release, will the bead separate from the rod?

**94.** A small cube C of mass m is placed at the center of a large and highly massive disc D and a ball B of mass M revolves in a circular path of radius R around the center of the disc. The plane of the circle is perpendicular to the plane of the disc. Intensity of gravitational field of the disc near its center is g. What should be range of coefficient of friction between cube and the disc so that the cube remains motionless?

**95.** A planet is a homogeneous ball of radius R having mass M. It is surrounded by a dense atmosphere having density rho = sigma0/r where sigma0 is a constant and r is distance from the centre of the planet. It is found that acceleration due to gravity is constant throughout the atmosphere of the planet. Find sigma0 in terms of M and R.

**96.** Diameter of a planet is 10d0, its mean density is rho0/4 and mass of its atmosphere is 10m0 where d0, rho0 and m0 are diameter, mean density and mass of atmosphere respectively for the earth. Assume that mean density of atmosphere is same on the planet and the earth and height of atmosphere on both the planets is very small compared to their radius.
(i) Find the ratio of atmospheric pressure on the surface of the planet to that on the earth.
(ii) If a mercury barometer reads 76 cm on the surface of the earth, find its reading on the surface of the planet.

**97.** Distance between the centres of two stars is 10a. The masses of these stars are M and 16M and their radii a and 2a respectively. A body of mass m is fired straight from the surface of the larger star towards the surface of the smaller star. What should be its minimum initial speed to reach the surface of the smaller star? Obtain the expression in terms of G, M and a.

**98.** A body is projected vertically upwards from the bottom of a crater of moon of depth R/100 where R is radius of moon with a velocity equal to the escape velocity on the surface of moon. Calculate maximum height attained by the body from the surface of the moon.

**99.** Consider two identical particles each of mass m held at a separation r0 in free space. One of them is given a velocity v0 perpendicular to r0 and the other one is simultaneously released. For what range of velocity v0 will the masses be bound in orbital motion under their mutual gravitational forces.

**100.** An asteroid of mass M explodes into a spherical homogeneous cloud in free space. Due to energy received by the explosion, the cloud expands and the expansion is spherically symmetric. At an instant, when radius of cloud is R0, all of its particles on the surface are observed reading radially away from the center of the cloud with a velocity v0. What will the radius of the cloud be, when expansion ceases.

**101.** An artificial satellite is moving in a circular orbit around the earth with a speed equal to half the magnitude of escape velocity from the earth.
(i) Determine the height of the satellite above the earth's surface
(ii) If the satellite is stopped suddenly in its orbit and allowed to fall freely onto the earth, find the speed with which it hits the surface of the earth.

**102.** If the planet was suddenly stopped in its orbit supposed to be circular, show that it would fall onto the sun in a time (1/(4*sqrt(2))) times its time period.

**103.** A particle of mass m moves under the action of a central force whose potential is given by V(r) = -Kr^3 (K > 0).
(i) For what energy and angular momentum will the orbit be a circle of radius a about the origin?
(ii) What is the period of this circular motion?

**104.** A satellite is orbiting around the earth in a circular orbit. Its orbital speed is V0 and radius is r0. A rocket on board is fired from the satellite which imparts a thrust to the satellite directed radially away from the centre of the earth. The duration of the engine burn is negligible so that it can be considered instantaneous. Due to this thrust a velocity variation Delta V is imparted to the satellite.
(i) Find the minimum value of the ratio Delta V/V0 for which the satellite will escape out of the gravitational field of the earth.
(ii) Find Delta V/V0 for which the maximum distance of the satellite from the centre of the earth becomes 2r0 after the rocket is fired.

**105.** A body is projected up from the surface of the earth with a velocity half the escape velocity at an angle of 30 degrees with the horizontal. Neglecting air resistance and earth's rotation, find:
(i) the maximum height above the earth's surface to which the body will rise.
(ii) will the body move around the earth as a satellite?

**106.** Earth is rotating about its axis with angular speed omega0 and average density of earth is rho. It is proposed to make a space elevator by placing a long rod with uniform mass density extending from just above the surface for the earth out to a radius nR (R is radius of the earth). Prove that the rod can remain above the same point on the equator all time if, `n^2 + n = 8*pi*G*rho / (3*omega0^2)`, where rho is density of the earth.

**107.** A near surface earth satellite has cylindrical shape with cross sectional area of S = 0.5 m^2 and mass of M = 10 kg. It encounters dust which has density of d = 1.6 x 10^-11 kg/m^3. Assume that the dust particles are at rest and they stick to the satellite's front face on collision. Take mean density of earth to be rho = 5500 kg/m^3.
(i) Find the drag force experienced by the satellite.
(ii) If the dust extends throughout the orbit, find the change in velocity and radius of the circular path the satellite in one revolution.

**108.** Imagine a smooth tunnel along a chord of non-rotating earth at a distance R/2 from the centre. R is the radius of the earth. A projectile is fired along the tunnel from the centre of the tunnel at a speed V0 = sqrt(gR). [g is acceleration due to gravity at the surface of the earth].
(i) Is the angular momentum [about the centre of the earth] of the projectile conserved as it moves along the tunnel?
(ii) Calculate the maximum distance of the projectile from the centre of the earth during its course of motion.

---

### GRAVITATION: MISCELLANEOUS QUESTION BANK
*Source: Miscellaneous Question Bank (Level 1, 2, 3)*

**1.** A satellite moves around the earth in a circular orbit with speed v. If m is the mass of the satellite, its total energy is:
(A) `-(1/2)mv^2` (B) `(1/2)mv^2` (C) `(3/2)mv^2` (D) `(1/4)mv^2`

**2.** An object at the surface of Earth (at a distance R from the center of Earth) weighs 90 N. Its weight at a distance 3R from the center of Earth is:
(A) 10 N (B) 30 N (C) 90 N (D) 270 N

**3.** To measure the mass of a planet with the same radius as Earth, an astronaut drops an object from rest from an altitude of one radius above the surface. When the object hits its speed is 4 times what it would be if the same experiment were carried out for Earth. In units of Earth masses, the mass of the planet is:
(A) 2 (B) 4 (C) 8 (D) 16

**4.** Statement I: The smaller the orbit of a planet around the Sun, the shorter is the time it takes to complete. Statement II: According to Kepler's third law, T^2 is proportional to r^3.
(A) Both true, II explains I (B) Both true, II does not explain I (C) I true, II false (D) I false, II true

**5.** Statement I: The earth does not retain hydrogen and helium in its atmosphere, but does retain heavier molecules. Statement II: Lighter molecules have translational speed greater or closer to escape speed.
(A) Both true, II explains I (B) Both true, II does not explain I (C) I true, II false (D) I false, II true

**6.** Neglecting air resistance, the escape speed from a certain planet for an empty space vehicle is 1.12 x 10^4 m/s. What is the corresponding escape speed for the fully loaded vehicle, which has triple the mass of the empty one?
(A) 3.73 x 10^3 m/s (B) 1.12 x 10^4 m/s (C) 3.36 x 10^4 m/s (D) 9.98 x 10^4 m/s

**7.** An artificial satellite is moving in a circular orbit around the earth at a height R from the surface. If the satellite is stopped suddenly and allowed to fall freely, the speed with which it hits the surface:
(A) `sqrt(gR)` (B) `sqrt(2gR)` (C) `sqrt(3gR)` (D) `2*sqrt(gR)`

**Paragraph 8-10:** In the graph shown, the PE of earth-satellite system is shown by a solid line as a function of distance r. The total energy of two objects (which may or may not be bounded) are shown by dotted lines.

**8.** Mark the correct statement(s):
(A) Object with E1 is bounded (B) Object with E2 is bounded (C) Both bounded (D) Both unbounded

**9.** If object with total energy E1 has the same PE curve, then:
(A) r0 is the maximum distance from Earth's centre (B) the system is bounded (C) KE is zero when r = r0 (D) all the above

**10.** If both objects have the same PE curve, then:
(A) for E2, all values of r are possible (B) for E2, values of r < r0 are only possible (C) for E1, all values of r are possible (D) none of the above

**Paragraph 11-14:** Two identical particles released from rest at separation d move toward each other under mutual gravitation.

**11.** The velocity of the centre of mass of the two-particle system:
(A) is zero (B) is constant but not zero (C) increases as separation decreases (D) None of these

**12.** Speed of each particle when the separation reduces to half:
(A) `sqrt(Gm/d)` (B) `sqrt(2Gm/d)` (C) `sqrt(Gm/(2d))` (D) None of these

**13.** Two identical thin rings each of radius R are coaxially placed at a distance R. If the rings have uniform mass distribution with masses m1 and m2 respectively, then the work done in moving a mass m from centre of one ring to that of the other is:
(A) zero (B) `Gm(m1-m2)(sqrt(2)-1)/(sqrt(2)*R)` (C) `Gm*sqrt(2)*(m1+m2)/R` (D) `Gmm1(sqrt(2)+1)/(m2*R)`

**14.** A planet moves around the sun. At point P (closest, distance d1, speed v1) and Q (farthest, distance d2), its speed will be:
(A) `d1^2*v1/d2^2` (B) `d2*v1/d1` (C) `d1*v1/d2` (D) `d2^2*v1/d1^2`

**15.** A planet orbits a star with mass 4.0 x 10^30 kg. Perihelion distance is 175 x 10^6 km and semi-major axis is 250 x 10^6 km. Speed at perihelion is:
(A) 21 km/s (B) 45 km/s (C) 51 km/s (D) 64 km/s

**16.** The speed of a comet in an elliptical orbit about the Sun varies due to:
(A) conservation of energy (B) conservation of momentum (C) conservation of angular momentum (D) conservation of mass

**17.** A projectile is fired straight upward from Earth's surface with a speed that is half the escape speed. If R is the radius of Earth, the highest altitude reached is:
(A) R/4 (B) R/3 (C) R/2 (D) R

**18.** Match the columns for a planet in elliptical orbit:
(A) Max PE of Sun-planet system -> (Q) Is at aphelion
(B) Max speed of planet -> (P) Is at perihelion
(C) Min PE of Sun-planet system -> (P) Is at perihelion
(D) Min KE of planet -> (Q) Is at aphelion

**19-57.** [Additional MCQs covering gravitational field/potential inside shells, tunnels through Earth, satellite energetics, cavities in spheres, matching columns, and multi-correct problems from JEE Advanced archives -- see source PDF for full text]

---

### JEE MAIN ARCHIVE
*Source: JEE Main (Archive) -- questions from 2002-2019*

**1.** [2002] The energy required to move a satellite of mass m from an orbit of radius 2R to 3R is (M is the mass of the earth and R is the radius of the earth):
(A) GMm/(12R) (B) GMm/(8R) (C) GMm/(3R) (D) GMm/(6R)
**Ans: A**

**2.** [2002] If suddenly the gravitational force of attraction between the earth and a satellite revolving around it becomes zero, then the satellite will:
(A) continue to move in its orbit with the same velocity (B) move tangentially to the original orbit with the same velocity (C) become stationary in its orbit (D) move towards the earth
**Ans: B**

**3.** [2002] The escape velocity of a body depends upon mass as:
(A) m^0 (B) m (C) m^2 (D) m^3
**Ans: A**

**4.** [2002] The kinetic energy needed to project a body of mass m from the earth's surface (radius R) to infinity is:
(A) mgR/2 (B) 2mgR (C) mgR (D) mgR/4
**Ans: C**

**5.** [2002] Elliptical path 'abcd' of planet around sun S such that area of triangle 'csa' is 1/4 the area of the ellipse. With 'db' as major axis, and 'ca' as minor axis. If t1 is the time for planet to go over path 'abc' and t2 for path 'cda' then:
(A) t1 = t2 (B) t1 = 2t2 (C) t1 = 3t2 (D) t1 = 4t2
**Ans: A**

**6.** [2003] The time period of a satellite of the earth is 5h. If the separation between earth and satellite is increased to 4 times the previous value, the new time period will become:
(A) 10 h (B) 80 h (C) 40 h (D) 20 h
**Ans: C**

**7.** [2003] Two spherical bodies of masses M and 5M and radii R and 2R, initial separation 12R, released in free space. Distance covered by smaller body just before collision:
(A) 2.5R (B) 4.5R (C) 7.5R (D) 1.5R
**Ans: C**

**8.** [2003] Escape velocity projected vertically is 11 km/s. If projected at 45 degrees with vertical, escape velocity will be:
(A) 11*sqrt(2) km/s (B) 22 km/s (C) 11 km/s (D) 11/sqrt(2) km/s
**Ans: C**

**9.** [2004] Satellite of mass M revolves at height x from surface. If g is acceleration due to gravity on surface, orbital speed is:
(A) gx (B) `(gR^2/(R+x))^(1/2)` (C) `gR^2/(R+x)` (D) `gR/(R-x)`
**Ans: B**

**10.** [2004] Time period of an earth satellite in circular orbit is independent of:
(A) the mass of the satellite (B) radius of its orbit (C) both the mass and radius of the orbit (D) neither the mass of the satellite nor the radius of its orbit
**Ans: A**

**11.** [2004] If g is acceleration due to gravity on earth's surface, the gain in PE of an object of mass m raised from surface to height equal to radius R of earth is:
(A) 2mgR (B) (1/2)mgR (C) (1/4)mgR (D) mgR
**Ans: B**

**12.** [2004] Suppose gravitational force varies inversely as nth power of distance. Then time period of planet in circular orbit of radius R around sun will be proportional to:
(A) `R^((n+1)/2)` (B) `R^((n-1)/2)` (C) `R^n` (D) `R^((n-2)/2)`
**Ans: A**

**13.** [2005] The change in value of g at height h above surface equals the change at depth d below, when both h and d are much smaller than R. Then:
(A) d = h/2 (B) d = 3h/2 (C) d = 2h (D) d = h
**Ans: C**

**14.** [2005] Work done against gravitational force to take particle of mass 10g far away from surface of uniform sphere of mass 100 kg and radius 10 cm:
(A) 13.34 x 10^-10 J (B) 3.33 x 10^-10 J (C) 6.67 x 10^-9 J (D) 6.67 x 10^-10 J
**Ans: D**

**15.** [2008] A planet 10 times more massive and 10 times smaller radius than Earth. Escape velocity from Earth is 11 km/s, escape velocity from planet:
(A) 1.1 km/s (B) 11 km/s (C) 110 km/s (D) 0.11 km/s
**Ans: C**

**16.** [2009] Height at which g becomes g/9 in terms of R:
(A) 2R (B) R/sqrt(2) (C) R/2 (D) sqrt(2)*R
**Ans: A**

**17.** [2012] Mass of spaceship = 1000 kg. g = 10 m/s^2, R = 6400 km. Energy required to launch from surface to free space:
(A) 6.4 x 10^11 J (B) 6.4 x 10^8 J (C) 6.4 x 10^9 J (D) 6.4 x 10^10 J
**Ans: D**

**18.** [2013] Minimum energy required to launch satellite of mass m from surface of planet of mass M and radius R in a circular orbit at altitude 2R:
(A) 2GmM/(3R) (B) GmM/(2R) (C) GmM/(3R) (D) 5GmM/(6R)
**Ans: D**

**19.** [2014] Four particles of mass M, equidistant from each other, move along a circle of radius R under mutual gravitational attraction. Speed of each particle:
(A) `sqrt(GM/R)*(1+2*sqrt(2))` (B) `(1/2)*sqrt(GM/R)*(1+2*sqrt(2))` (C) `sqrt(GM/R)` (D) `2*sqrt(2)*sqrt(GM/R)`
**Ans: B**

**20.** [2016] Astronaut of mass m orbiting at distance h from surface. Gravitational pull FG on the astronaut is:
(A) Zero (B) `0 < FG < GMm/R^2` (C) `GMm/(R+h)^2 < FG < GMm/R^2` (D) `FG = GMm/(R+h)^2`
**Ans: D**

**21.** [2017] Variation of g with distance d from centre of Earth is best represented by: [Graph B -- linear increase inside, 1/r^2 decrease outside]
**Ans: B**

**22.** [2017] If Earth has no rotational motion, weight at equator is W. Speed to rotate so person weighs (3/4)W at equator (R = 6400 km, g = 10 m/s^2):
(A) 1.1 x 10^-3 rad/s (B) 0.83 x 10^-3 rad/s (C) 0.63 x 10^-3 rad/s (D) 0.28 x 10^-3 rad/s
**Ans: C**

**23-43.** [2017-2019] Additional JEE Main questions covering mass density variations, angular velocity effects, tidal forces, satellite collisions, gravitational force of rods, etc. See source PDF for full question text.

**Answer Key (JEE Main Archive complete):**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | A | B | A | C | C | C | C | C | B | A | B | A | C | D | C |

| Q# | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | A | D | D | B | D | D | C | B | D | A | C | C | C | C | C |

| Q# | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | A | B | A | B | D | D | A | D | D | D | B | B | B |

---

### JEE ADVANCED ARCHIVE
*Source: JEE Advanced (Archive) -- questions from 1981-2019*

**SINGLE OPTION CORRECT TYPE**

**1.** [1981] If the radius of the earth were to shrink by one percent, its mass remaining the same, acceleration due to gravity on the earth's surface would:
(A) decrease (B) remain unchanged (C) increase (D) be zero
**Ans: C**

**2.** [1983] If g is the acceleration due to gravity on earth's surface, the gain in PE of object of mass m raised to height equal to R of earth is:
(A) (1/2)mgR (B) 2mgR (C) mgR (D) (1/4)mgR
**Ans: A**

**3.** [1989] Imagine a light planet revolving around a very massive star in circular orbit of radius R with speed of revolution T. If gravitational force of attraction is proportional to R^(-5/2), then:
(A) T^2 proportional to R^2 (B) T^2 proportional to R^(7/2) (C) T^2 proportional to R^(3/2) (D) T^2 proportional to R^(3.75)
**Ans: B**

**4.** [1996] If the distance between Earth and Sun were half its present value, the number of days in a year would have been:
(A) 64.5 (B) 129 (C) 182.5 (D) 730
**Ans: B**

**5.** [1998] A satellite S is moving in an elliptical orbit around the earth. The mass of the satellite is very small compared to the mass of the earth:
(A) The acceleration of S is always directed towards the centre of the earth (B) The angular momentum of S about the centre of the earth changes in direction. But its magnitude remains constant (C) The total mechanical energy of S varies periodically with time (D) The linear momentum of S remain constant in magnitude
**Ans: A**

**6.** [2001] A simple pendulum has time period T1 on earth's surface and T2 at height R above surface. The value of T2/T1 is:
(A) 1 (B) sqrt(2) (C) 4 (D) 2
**Ans: D**

**7.** [2002] A geostationary satellite orbits at radius 36,000 km. Time period of a spy satellite orbiting a few hundred km above surface (R_earth = 6400 km) is approximately:
(A) 1/2 h (B) 1 h (C) 2 h (D) 4 h
**Ans: C**

**8.** [2006] A double star system consists of two stars A and B with time periods TA and TB, radii RA and RB and masses MA and MB. Choose correct option:
(A) If TA > TB then RA > RB (B) If TA > TB then MA > MB (C) `(TA/TB)^2 = (RA/RB)^3` (D) TA = TB
**Ans: D**

**9.** [2008] A spherical symmetric gravitational system of particles has mass density rho = rho0 for r <= R and rho = 0 for r > R. Speed V of a test mass in circular orbit as a function of r:
**Ans: C** [V increases linearly for r < R, then decreases as 1/sqrt(r) for r > R]

**10.** [2010] A thin uniform annular disc of mass M has outer radius 4R and inner radius 3R. Work to take unit mass from point P on axis to infinity:
(A) `(2GM/(7R))(4*sqrt(2)-5)` (B) `-(2GM/(7R))(4*sqrt(2)-5)` (C) `GM/(4R)` (D) `(2GM/(5R))*(sqrt(2)-1)`
**Ans: A**

**11.** [2010] Satellite moving with constant speed V in circular orbit. Object of mass m ejected so it just escapes from gravitational pull. KE at time of ejection:
(A) `(1/2)mV^2` (B) `mV^2` (C) `(3/2)mV^2` (D) `2mV^2`
**Ans: B**

**12.** [2014] A planet of radius R = R_earth/10 has same mass density as Earth. Scientists dig a well of depth R/5 on it and lower a wire of same length and linear mass density 10^-3 kg/m into it. Force applied at top to hold it in place (R_earth = 6x10^6 m, g = 10 m/s^2):
(A) 96 N (B) 108 N (C) 120 N (D) 150 N
**Ans: B**

**13.** [2017] A rocket is launched normal to surface of Earth, away from Sun, along line joining Sun and Earth. Sun is 3x10^5 times heavier than Earth and at 2.5x10^4 times larger distance than radius of Earth. Escape velocity from Earth's field is ve = 11.2 km/s. Minimum initial velocity vs required for rocket to leave Sun-Earth system is closest to:
(A) vs = 62 km/s (B) vs = 42 km/s (C) vs = 72 km/s (D) vs = 22 km/s
**Ans: B**

**14.** [2019] Consider a spherical gaseous cloud of mass density rho(r) in free space where r is the radial distance from its center. Gaseous cloud made of particles of equal mass m moving in circular orbits about the common center with the same kinetic energy K. If rho(r) is constant in time, particle number density n(r) = rho(r)/m is:
(A) `3K/(pi*r^2*m^2*G)` (B) `K/(2*pi*r^2*m^2*G)` (C) `K/(6*pi*r^2*m^2*G)` (D) `K/(pi*r^2*m^2*G)`
**Ans: D**

**MULTIPLE OPTIONS CORRECT TYPE**

**\*15.** [1993] A solid sphere of uniform density and radius 4 units is located with its centre at origin O. Two spheres of equal radii 1 unit, with centres at A(-2,0,0) and B(2,0,0), are taken out. Then:
(A) the gravitational force due to this object at the origin is zero (B) the gravitational force at point B(2,0,0) is zero (C) the gravitational potential is the same at all points of circle y^2 + z^2 = 36 (D) the gravitational potential is the same at all points on the circle y^2 + z^2 = 4
**Ans: A, C, D**

**\*16.** [1994] The magnitudes of the gravitational field at distances r1 and r2 from the centre of a uniform sphere of radius R and mass m are F1 and F2. Then:
(A) F1/F2 = r1/r2 if r1 < R and r2 < R (B) F1/F2 = r2^2/r1^2 if r1 > R and r2 > R (C) F1/F2 = r1/r2 if r1 > R and r2 > R (D) F1/F2 = r1^2/r2^2 if r1 < R and r2 < R
**Ans: A, B**

**\*17.** [2012] Two spherical planets P and Q have the same uniform density rho, masses MP and MQ, and surface areas A. A spherical planet R also has uniform density rho and its mass is (MP + MQ). The escape velocities from P, Q, and R are VP, VQ and VR respectively. Then:
(A) VQ > VR > VP (B) VR > VQ > VP (C) VR/VP = 3 (D) VP/VQ = 1/2
**Ans: B, D**

**\*18.** [2013] Two bodies, each of mass M, are kept fixed with a separation 2L. A particle of mass m is projected from the midpoint of the line joining their centres, perpendicular to the line. The correct statement(s):
(A) Minimum initial velocity to escape is `4*sqrt(GM/L)` (B) Minimum initial velocity to escape is `2*sqrt(GM/L)` (C) Minimum initial velocity to escape is `sqrt(2GM/L)` (D) The energy of mass m remains constant
**Ans: B, D**

**\*19.** [2015] A spherical body of radius R consists of fluid of constant density and is in equilibrium under its own gravity. If P(r) is the pressure at r (r < R), then the correct option(s) is (are):
(A) P(r=0) = 0 (B) P(r=3R/4)/P(r=2R/3) = 63/80 (C) P(r=3R/5)/P(r=2R/5) = 16/21 (D) P(r=R/2)/P(r=R/3) = 20/27
**Ans: B, C**

**ASSERTION AND REASON TYPE**

**20.** [2008] Statement-I: An astronaut in an orbiting space station above the earth experiences weightlessness. Statement-II: An object moving around the earth under the influence of earth's gravitational force is in a state of 'free fall'.
(A) Both true, II explains I (B) Both true, II does not explain I (C) I true, II false (D) I false, II true
**Ans: A**

**MATCH MATRIX TYPE**

**21.** [2018] A planet of mass M has two natural satellites with masses m1 and m2. Radii of circular orbits R1 and R2. Given m1/m2 = 2 and R1/R2 = 1/4. Match ratios of v1/v2, L1/L2, K1/K2, T1/T2 with values 1/8, 1, 2, 8.
**Ans: A-Q; B-R; C-P; D-S** (i.e., v1/v2 = 1; L1/L2 = 2; K1/K2 = 1/8; T1/T2 = 8) -- *Note: see answer key, actual answer is (i)4 (ii)3*

**NUMERICAL ANSWER TYPE**

**22.** [1986] Two satellites S1 and S2 revolve round a planet in coplanar circular orbits in the same sense. Periods are 1 hr and 8 hrs. Radius of orbit of S1 is 10^4 km. When S2 is closest to S1:
(i) Speed of S2 relative to S1 is `pi x 10^x` km/h. Find x. **Ans: 4**
(ii) Angular speed of S2 as observed by astronaut in S1 is `pi/n` rad/h. Find n. **Ans: 3**

**23.** [1988] Three particles each of mass m at vertices of equilateral triangle of side a. Only forces are mutual gravitational forces. Each particle moves in a circle.
(i) Initial velocity given to each particle is `x*sqrt(GM/a)`. Find x. **Ans: 1**
(ii) Time period of circular motion is `2*pi*(a^3/(GM))^(1/n)`. Find n. **Ans: 2**

**24.** [1990] An artificial satellite is moving in a circular orbit with speed equal to half the escape velocity.
(i) Height of satellite above earth's surface (in km). **Ans: 6400 km**
(ii) If stopped suddenly and allowed to fall, speed when hitting surface (in m/s). **Ans: 7920 m/s**

**25.** [1992] Expression for energy needed to completely disassemble the planet earth against the gravitational pull amongst its constituent particles. Calculate this energy given product of mass and radius = 2.5 x 10^31 kg.m. **Ans: 1.5 x 10^32 J**

**26.** [1996] Distance between centres of two stars is 10a. Masses M and 16M, radii a and 2a. Body fired from surface of larger star toward smaller star. Minimum initial speed = `x*sqrt(5GM/a)`. Find x. **Ans: 3/2**

**27.** [2003] Body projected vertically upward from bottom of crater of moon of depth R/100 with velocity = escape velocity on surface of moon. Maximum height attained by body from surface of moon is xR. Find x. **Ans: 99.5**

**28.** [2010] Binary star: A (mass 2.2 M_s) and B (mass 11 M_s), separated by distance d, rotating about their centre of mass (stationary). Ratio of total angular momentum to angular momentum of B about centre of mass. **Ans: 6**

**29.** [2010] Gravitational acceleration on surface of a planet is `(sqrt(6)/11)*g`. Average mass density is 2/3 that of earth. Escape speed on earth is 11 km/s. Find escape speed on the planet in km/s. **Ans: 3**

**30.** [2015] A bullet fired vertically upwards with velocity v from surface of spherical planet. When it reaches maximum height, acceleration due to planet's gravity is 1/4th of surface value. If escape velocity is `v*sqrt(N)`, find N. **Ans: 2**

**31.** [2015] Large spherical mass M is fixed and two identical point masses m are kept on line through centre of M. Point masses connected by rigid massless rod of length l. When point mass nearer to M is at distance r = 3l from M, tension in rod is zero for `m = k*(M/288)`. Find k. **Ans: 7**

**FILL IN THE BLANKS TYPE**

**32.** [1984] The numerical value of the angular velocity of rotation of the earth should be _______ rad/s in order to make the effective acceleration due to gravity at equator equal to zero. **Ans: 1.23 x 10^-3**

**33.** [1985] According to Kepler's second law, the radius vector to a planet from the Sun sweeps out equal areas in equal intervals of time. This law is a consequence of the conservation of _______. **Ans: Angular momentum**

**34.** [1987] A geostationary satellite is orbiting the earth at height of 6R above surface. Time period of another satellite at height 2.5R from surface is _______ hours. **Ans: 6.45 h**

**35.** [1988] Masses and radii of Earth and Moon are M1, R1 and M2, R2. Centres are distance d apart. Minimum speed with which a particle of mass m should be projected from a point midway between the two centres so as to escape to infinity is _______. **Ans: sqrt[4G(M1+M2)/d]**

**36.** [1997] A particle is projected vertically upwards from earth's surface with KE equal to half the minimum value needed for it to escape. The height to which it rises above the surface of the earth is _______. **Ans: R**

**37.** [1997] The ratio of earth's orbital angular momentum to its mass is 4.4 x 10^15 m^2 s^-1. The area enclosed by the earth's orbit is approximately _______. **Ans: 6.94 x 10^22 m^2**

**TRUE/FALSE TYPE**

**38.** [1984] It is possible to put an artificial satellite into orbit in such a way that it will always remain directly over New Delhi. **Ans: False**

**Answer Key (JEE Advanced Archive complete):**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | C | A | B | B | A | D | C | D | C | A | B | B | B | D | ACD |

| Q# | 16 | 17 | 18 | 19 | 20 | 21 | 22(i) | 22(ii) | 23(i) | 23(ii) | 24(i) | 24(ii) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | AB | BD | BC | BC | A | B | 4 | 3 | 1 | 2 | 6400 km | 7920 m/s |

| Q# | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | 1.5x10^32 J | 3/2 | 99.5 | 6 | 3 | 2 | 7 | 1.23x10^-3 | Angular momentum | 6.45h | sqrt[4G(M1+M2)/d] | R | 6.94x10^22 m^2 | False |
