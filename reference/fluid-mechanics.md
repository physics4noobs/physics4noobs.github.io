# Fluid Mechanics

## Overview
Fluid mechanics deals with the behaviour of fluids (liquids and gases) at rest and in motion. This chapter covers fluid statics (pressure, Pascal's principle, buoyancy and Archimedes' principle), fluid dynamics (equation of continuity, Bernoulli's theorem, velocity of efflux, venturi meter, pitot tube), surface tension (angle of contact, excess pressure, capillarity), and viscosity (Newton's law of viscous force, Poiseuille's formula, Stokes' law, terminal velocity, Reynolds number). These topics form a high-weightage section in JEE, with problems frequently combining multiple concepts.

---

## 1. Pressure in a Stationary Liquid

### Concepts
- A fluid is a substance (liquid or gas) that has no rigidity and cannot support a shearing stress; when sheared, its layers slide relative to one another
- Liquids are distinguished from gases by the presence of a free surface
- The hydrostatic pressure in a liquid increases with depth
- Pressure at a point inside a liquid acts equally in all directions (Pascal's observation)
- Along any horizontal line in a stationary liquid, the pressure is the same

### Formulas
- Total pressure at depth h: `P = P₀ + hρg`
  - P₀ = pressure at the free surface (Pa)
  - ρ = density of liquid (kg/m³)
  - g = acceleration due to gravity (m/s²)
  - h = depth below the free surface (m)
- Gauge pressure (pressure due to liquid column alone): `P_gauge = hρg`
- For a U-tube with multiple liquids, equate pressures at the same horizontal level in the connected liquid

### Key Diagram: Pressure at a Depth
- A rectangular container filled with liquid of density ρ
- Free surface at top with atmospheric pressure P₀
- Point A at depth h₁ has pressure `P_A = P₀ + h₁ρg`
- Point B at depth h₂ has pressure `P_B = P₀ + h₂ρg`
- Points at the same horizontal level have equal pressure
- [SVG-REF]

### Important Notes
- **Pascal's Principle:** If the pressure at the surface P₀ is changed by ΔP, then the pressure at every point inside the liquid also changes by ΔP. This is the working principle of hydraulic machines
- The pressure formula `P = P₀ + hρg` applies only for incompressible fluids (constant ρ) under uniform gravity
- Pressure is a scalar quantity; the force it exerts on a surface is always perpendicular (normal) to that surface
- In problems with multiple immiscible liquids stacked vertically, add the pressure contributions of each layer: `P = P₀ + h₁ρ₁g + h₂ρ₂g + ...`

### Worked Example
**Q:** A vertical U-tube contains mercury in both arms. A glycerine column (d = 1.3 g/cm³) of length 10 cm is introduced into one arm. Oil of density 0.8 g/cm³ is poured into the other arm until the upper surfaces are at the same level. Find the length of the oil column. (Density of mercury = 13.6 g/cm³)

**A:**
1. Let the length of the oil column = x cm. Since glycerine is 10 cm, the mercury is displaced differently in each arm.
2. Equate pressures at the common mercury level (horizontal line at the bottom of the lighter columns):
   `x(0.8)g + (10 - x)(13.6)g = 10(1.3)g`
3. Expanding: `0.8x + 136 - 13.6x = 13`
4. `-12.8x = 13 - 136 = -123`
5. `x = 123/12.8 = 9.6 cm`

---

## 2. Thrust (Force) on a Surface by a Liquid

### Concepts
- Liquids exert a thrust (pushing force) on all surfaces in contact, directed perpendicular (normal) to the surface
- For **uniform pressure** distribution (e.g., horizontal bottom surface): `F = PA` where P is the pressure at that surface and A is the area
- For **non-uniform pressure** distribution (e.g., a vertical wall), the pressure varies with depth and must be integrated: `F = ∫P dA`

### Formulas
- Thrust on a horizontal bottom surface at depth h: `F = (P₀ + hρg) × A`
- Thrust on a vertical surface of width l submerged from surface to depth h (ignoring atmospheric pressure, as it acts on both sides):
  `F = ∫₀ʰ (xρg)(l dx) = ρglh²/2`
- This equals pressure at the centroid of the surface multiplied by the area: `F = (h/2)ρg × (lh) = ρglh²/2`

### Key Diagram: Thrust on a Vertical Wall
- A rectangular tank of width l filled to height h
- Thin horizontal strip at depth x, of height dx, area = l dx
- Pressure on strip = xρg (gauge)
- Force on strip dF = xρg(l dx)
- Total force obtained by integrating from 0 to h
- [SVG-REF]

### Important Notes
- For a vertical surface, the pressure varies linearly from 0 (at the top surface) to ρgh (at the bottom), so the average pressure is `ρgh/2`
- The point of application of the resultant thrust on a vertical wall is at depth `2h/3` from the surface (not at the centroid h/2)
- Atmospheric pressure usually cancels when the other side of the wall is also exposed to atmosphere; in such cases, use gauge pressure only

### Worked Example
**Q:** A tank of square cross-section (2 m x 2 m) is filled with water to a height of 2.5 m. Find the thrust on the vertical surface and the bottom. (g = 10 m/s²)

**A:**
1. **Bottom surface:** Pressure is uniform = `hρg = 2.5 × 10³ × 10 = 25000 Pa`. Area = 2 × 2 = 4 m². Thrust = `25000 × 4 = 1 × 10⁵ N`
2. **Vertical surface:** `F = ρgh²l/2 = 10³ × 10 × (2.5)² × 2 / 2 = 6.25 × 10⁴ N`

---

## 3. Hydraulic Press (Pascal's Law Application)

### Concepts
- A hydraulic press uses Pascal's principle to multiply force
- A small force F₁ applied on a small-area piston A₁ creates pressure `P = F₁/A₁` throughout the enclosed liquid
- This pressure acts on a larger piston of area A₂, producing a larger force `F₂ = P × A₂ = F₁(A₂/A₁)`

### Formulas
- Pressure in the system: `P = F₁/A₁`
- Force on larger piston: `F₂ = F₁ × (A₂/A₁)`
- Mechanical advantage: `MA = A₂/A₁`
- Volume displaced is conserved: `A₁d₁ = A₂d₂` (where d₁, d₂ are displacements of pistons)
- Work done by operator: `W = F₁ × d₁ = F₂ × d₂` (energy is conserved; no gain in work)

### Important Notes
- The hydraulic press magnifies force but not energy
- The smaller piston moves a larger distance than the larger piston
- Practical applications: hydraulic brakes, hydraulic lifts, hydraulic jacks

### Worked Example
**Q:** In a hydraulic press, the cross-sectional areas of the two cylinders are 5 x 10⁻⁴ m² and 10⁻² m². A force of 20 N is applied at the small plunger. Find (a) pressure, (b) thrust on the large plunger, (c) work done if the smaller plunger moves 0.1 m.

**A:**
1. (a) `P = F₁/A₁ = 20/(5 × 10⁻⁴) = 40000 N/m²`
2. (b) `F₂ = F₁(A₂/A₁) = 20 × (10⁻²)/(5 × 10⁻⁴) = 400 N`
3. (c) `W = F₁ × d₁ = 20 × 0.1 = 2 J`. The large plunger moves `d₂ = d₁(A₁/A₂) = 0.1 × (5 × 10⁻⁴/10⁻²) = 0.005 m`

---

## 4. Archimedes' Principle and Buoyancy

### Concepts
- When an object is partially or fully submerged in a fluid, the fluid exerts a net upward force called the **buoyant force**
- This arises because the pressure on the lower surface of the object is greater than on the upper surface
- **Archimedes' Principle:** The buoyant force equals the weight of the fluid displaced by the object
- The buoyant force acts at the centre of buoyancy (centroid of the displaced fluid volume)

### Formulas
- Buoyant force: `B = vρg`
  - v = volume of fluid displaced (= volume of object submerged) (m³)
  - ρ = density of the fluid (kg/m³)
- Weight of the body: `W = mg = Vdg` where V = total volume, d = density of body
- **Apparent weight** in fluid: `W_app = mg - B = Vdg - vρg`
- For a fully submerged body: v = V, so `W_app = Vg(d - ρ)`
- **Loss in weight** = Buoyant force = `vρg`

### Key Diagram: Buoyant Force on a Submerged Body
- A body partially dipped in liquid; shaded portion below the surface represents volume v
- Arrow B (upward) at the centre of the submerged portion representing buoyant force
- Arrow mg (downward) at the centre of gravity of the body representing weight
- If B = mg, body floats; if B < mg, body sinks
- [SVG-REF]

### Important Notes
- Buoyant force depends only on the volume submerged and the density of the fluid, NOT on the density or mass of the object
- A body floats when `B >= W`, i.e., the fluid can displace enough weight. A body sinks when its density exceeds the fluid density
- When weighing objects in air, the buoyancy of air is usually neglected unless the problem specifically mentions it

---

## 5. Floating Bodies

### Concepts
- A body floats when the buoyant force equals its weight: `B = mg`
- For a floating body of total volume V and density d in a liquid of density ρ:
  `vρg = Vdg` which gives `v/V = d/ρ`
- The fraction submerged equals the ratio of the body's density to the liquid's density
- The fraction above the surface = `1 - d/ρ`

### Formulas
- Floating condition: `vρ = Vd`
- Fraction submerged: `v/V = d/ρ`
- Fraction above surface: `(V - v)/V = 1 - d/ρ`
- For a body floating at the interface of two immiscible liquids (density ρ₁ on top, ρ₂ on bottom), with volumes v₁ in upper liquid and v₂ in lower liquid:
  `v₁ρ₁g + v₂ρ₂g = Vdg`

### Key Diagram: Floating Body
- A body (e.g., block) floating at the surface of a liquid
- Volume v below surface, volume (V - v) above surface
- Upward arrow B = vρg, downward arrow W = Vdg
- For equilibrium: B = W
- [SVG-REF]

### Important Notes
- "Just floats" means the body is fully submerged but not sinking (d = ρ, the body is neutrally buoyant)
- An iceberg in seawater: fraction submerged = `d_ice / ρ_seawater = 917/1028 ≈ 0.892` (about 89.2% submerged)
- **Hydrometer principle:** A hydrometer floats higher in denser liquids. If x₁ is the length of stem above surface in liquid ρ₁ and x₂ in liquid ρ₂, then `(V - x₁A)ρ₁ = (V - x₂A)ρ₂`
- When a floating body has mass added or removed, the change in submerged volume can be calculated from `Δm × g = ΔV_submerged × ρ_liquid × g`

### Worked Example
**Q:** A plastic sphere floats in water with 0.5 of its volume submerged. The same sphere floats in oil with 0.4 of its volume submerged. Find the densities of the oil and the sphere. (Density of water = 1 g/cc)

**A:**
1. In water: `Vd = (V/2)ρ_w` => `d = ρ_w/2 = 0.5 g/cc`
2. In oil: `Vd = (0.4V)ρ_oil` => `ρ_oil = d/0.4 = 0.5/0.4 = 1.25 g/cc`

---

## 6. Hydrodynamics - Bernoulli's Theorem

### Concepts
- Deals with the flow of ideal fluids (incompressible and non-viscous)
- **Streamline flow:** Every particle follows the same path as the one preceding it; the paths are called streamlines
- **Bernoulli's Theorem:** For an ideal fluid in steady flow along a streamline, the sum of the pressure head, velocity head, and gravitational head is constant:
  `P/(ρg) + v²/(2g) + h = constant`
- Equivalently (multiplying by ρg): `P + ½ρv² + ρgh = constant`
- This is essentially the conservation of energy per unit volume applied to fluid flow

### Formulas
- Bernoulli's equation: `P₁ + ½ρv₁² + ρgh₁ = P₂ + ½ρv₂² + ρgh₂`
- For a horizontal pipe (h₁ = h₂): `P₁ + ½ρv₁² = P₂ + ½ρv₂²`
- Pressure head: `P/(ρg)` (in metres of liquid)
- Velocity head: `v²/(2g)` (in metres)
- Gravitational head: `h` (in metres)

### Key Diagram: Bernoulli's Theorem Along a Streamline
- A pipe of varying cross-section with fluid flowing from section 1 (wider) to section 2 (narrower)
- At section 1: area A₁, velocity v₁, pressure P₁, height h₁
- At section 2: area A₂, velocity v₂, pressure P₂, height h₂
- Where the pipe narrows, velocity increases and pressure decreases
- [SVG-REF]

### Important Notes
- Bernoulli's theorem applies only to ideal (incompressible, non-viscous) fluids in steady, irrotational flow along a streamline
- Where velocity is high, pressure is low (and vice versa) -- this explains many phenomena: airplane lift, spinning ball curves, atomizers
- The theorem is a statement of energy conservation: pressure energy + kinetic energy + potential energy = constant (per unit volume)

---

## 7. Equation of Continuity

### Concepts
- For a steady, incompressible flow, the mass of fluid entering a section per unit time equals the mass leaving
- Since density is constant, the volume flow rate Q is the same at every cross-section

### Formulas
- Volume flow rate: `Q = Av` (area x velocity)
- Equation of continuity: `A₁v₁ = A₂v₂`
  - A₁, A₂ = cross-sectional areas at two points
  - v₁, v₂ = velocities at those points
- Where the pipe narrows (A decreases), velocity increases, and vice versa

### Important Notes
- This equation is valid only for incompressible fluids in steady flow
- For compressible fluids (gases), the continuity equation becomes `ρ₁A₁v₁ = ρ₂A₂v₂`

---

## 8. Venturi Meter

### Concepts
- An instrument for measuring the rate of flow of a fluid (liquid or gas)
- Connected horizontally in the pipe; has a constriction (throat) where velocity increases and pressure drops
- The pressure difference between the wide section and the throat is measured using a U-tube manometer

### Formulas
- **For liquids:** Let A₁ (wide) and A₂ (throat) be the cross-sectional areas, and h be the difference in manometer liquid levels (of density ρ_m):
  `P_A - P_B = hρ_m × g` (manometer reading)
  Using Bernoulli's equation and continuity:
  `Q = A₁A₂ × sqrt(2hρ_m g / (ρ(A₁² - A₂²)))` for manometer liquid different from flowing liquid
  If the flowing liquid itself is in the manometer:
  `Q = A₁A₂ × sqrt(2gh / (A₁² - A₂²))`
- **For gases:** Replace ρ with d (density of gas):
  `Q = A₁A₂ × sqrt(2hρg / (d(A₁² - A₂²)))`
  where ρ is the density of the manometer liquid and d is the density of the gas

### Key Diagram: Venturi Meter
- Horizontal pipe with a constriction in the middle
- Two vertical tubes rising from the wide section (A) and the throat (B)
- Liquid in vertical tubes at different heights; height difference = h
- Fluid flows from A (wider, slower, higher pressure) to B (narrower, faster, lower pressure)
- [SVG-REF]

---

## 9. Pitot Tube

### Concepts
- Used to measure the speed of flow of a fluid at a point
- One opening faces the flow (stagnation point, velocity = 0) and the other is perpendicular to the flow (static pressure)
- The pressure difference is measured using a manometer

### Formulas
- For liquids (with manometer reading h in same liquid):
  `V = sqrt(2gh)`
- For gases (with manometer liquid of density ρ, gas density d):
  `V = sqrt(2hρg/d)`

### Important Notes
- At the stagnation point (tube B facing the flow), velocity is zero, so all kinetic energy converts to pressure energy
- The pitot tube measures velocity at a specific point, while the venturi meter measures total flow rate

### Worked Example
**Q:** A pitot tube is fixed in a water pipe of diameter 10 cm, and the difference of pressure by the gauge is 9.8 cm of water column. Calculate the rate of flow of water.

**A:**
1. Velocity: `V = sqrt(2gh) = sqrt(2 × 980 × 9.8) = 138.6 cm/s`
2. Flow rate: `Q = Av = pi × 5² × 138.6 = 10.88 litres/s`

---

## 10. Velocity of Efflux (Torricelli's Theorem)

### Concepts
- The speed at which liquid flows out of a small hole at depth h below the free surface of a liquid in a container
- Derived by applying Bernoulli's theorem between the free surface and the hole
- The result is the same as the speed of a freely falling body from height h -- this is **Torricelli's theorem**

### Formulas
- Velocity of efflux: `V = sqrt(2gh)` (when the hole is small compared to the container area)
- More precisely (when hole area a is not negligible compared to container area A):
  `V = sqrt(2gh) / sqrt(1 - a²/A²)`
- **Horizontal range** of the jet from a hole at depth h in a tank of total height H (hole at height H - h from ground):
  `R = V × t = sqrt(2gh) × sqrt(2(H-h)/g) = 2 × sqrt(h(H-h))`
- **Maximum range** occurs when `h = H/2`, giving `R_max = H`
- **Reaction force** on the vessel due to efflux: `F = ρaV² = 2ρagh` (from momentum of outflowing liquid per unit time)

### Key Diagram: Velocity of Efflux
- A tall container filled with liquid to height H
- A small hole at depth h below the surface (height H - h from ground)
- Liquid jet emerges horizontally with velocity V = sqrt(2gh)
- Jet follows parabolic path and lands at horizontal distance R from the base
- [SVG-REF]

### Important Notes
- The formula `V = sqrt(2gh)` assumes: (i) the hole is small (a << A), (ii) the liquid is ideal, (iii) both the free surface and the hole are open to the atmosphere
- If the container is sealed with pressure P₀ above the liquid and hole opens to atmosphere P_atm: `V = sqrt(2gh + 2(P₀ - P_atm)/ρ)`
- Two holes at depths h and (H - h) produce jets with the same horizontal range
- **Time to empty a tank:** For a tank of cross-section A with a hole of area a at the bottom, filled to height H:
  `t = (A / a) × sqrt(2H/g) × (1/1)` => `t = (A/a) × sqrt(2H/g)`

### Worked Example
**Q:** Water stands at depth H = 2 m in a tank. A hole is made at depth h = 0.5 m below the surface. Find (a) velocity of efflux, (b) range of the stream, (c) the depth for maximum range.

**A:**
1. (a) `V = sqrt(2 × 10 × 0.5) = sqrt(10) ≈ 3.16 m/s`
2. (b) Height of hole from ground = H - h = 1.5 m. Time to fall: `t = sqrt(2 × 1.5/10) = 0.548 s`. Range: `R = V × t = 3.16 × 0.548 ≈ 1.73 m`. Or directly: `R = 2sqrt(h(H-h)) = 2sqrt(0.5 × 1.5) = 2sqrt(0.75) ≈ 1.73 m`
3. (c) Maximum range when h = H/2 = 1 m

---

## 11. Surface Tension

### Concepts
- Surface tension is the property of a liquid surface that makes it behave like a stretched elastic membrane
- It arises due to the net inward cohesive force on molecules at the surface
- **Surface tension (sigma)** is defined as the force per unit length acting on an imaginary line drawn on the liquid surface, directed tangentially to the surface and perpendicular to the line
- Units: N/m (SI), dynes/cm (CGS). 1 N/m = 10³ dynes/cm

### Formulas
- Surface tension: `sigma = F / L`
  - F = force on the line (N)
  - L = length of the line (m)
- For a soap film on a frame of length L (two free surfaces): `F = 2 sigma L`
- **Work done** in increasing the surface area by dA: `W = sigma × dA`
- For a soap film (two surfaces): `W = sigma × 2dA`
- Work done in blowing a soap bubble of radius r: `W = sigma × 2 × 4pi r² = 8pi r² sigma`
- Work done in splitting a drop of radius R into n small drops of radius r:
  Volume conservation: `(4/3)pi R³ = n(4/3)pi r³` => `r = R/n^(1/3)`
  `W = sigma × 4pi(nr² - R²)`

### Important Notes
- Surface tension decreases with increasing temperature
- Soap/detergent decreases the surface tension of water
- When small drops coalesce into a larger drop, surface area decreases and energy is released (temperature rises)

---

## 12. Angle of Contact

### Concepts
- The angle between the tangent to the liquid surface at the point of contact and the solid surface (measured inside the liquid) is called the **angle of contact**
- It depends on the relative magnitudes of adhesive force (F_a, between solid and liquid) and cohesive force (F_c, between liquid molecules)
- F_a and F_c are compared with F_c resolved at 45 degrees to the wall

### Formulas
- **Case I:** `F_a = F_c sin 45 degrees` => resultant points downward => surface is flat => angle of contact = 90 degrees
- **Case II:** `F_a > F_c sin 45 degrees` => resultant points outside the liquid => surface is **concave** (meniscus curves up) => angle of contact is **acute** (e.g., water-glass: theta approx 0 degrees)
- **Case III:** `F_a < F_c sin 45 degrees` => resultant points inside the liquid => surface is **convex** (meniscus curves down) => angle of contact is **obtuse** (e.g., mercury-glass: theta approx 135 degrees)

### Key Diagram: Angle of Contact
- A glass plate dipped vertically in water: liquid climbs up the plate, meniscus is concave, angle theta is acute (measured inside the liquid between the tangent to the liquid surface and the glass surface)
- A glass plate dipped in mercury: mercury is depressed near the plate, meniscus is convex, angle theta is obtuse
- [SVG-REF]

### Important Notes
- For water on clean glass, theta is approximately 0 degrees (perfectly wetting)
- For mercury on glass, theta is approximately 135 degrees
- The angle of contact determines whether a liquid will rise (concave meniscus, acute angle) or fall (convex meniscus, obtuse angle) in a capillary tube

---

## 13. Excess Pressure Across a Curved Liquid Surface

### Concepts
- Due to surface tension, there is a pressure difference across a curved liquid surface
- The pressure is always greater on the **concave side** (inner side of curvature)
- When crossing from the convex side to the concave side, pressure increases by `2sigma/r`

### Formulas
- **Excess pressure across a single curved surface** (liquid drop, air bubble in liquid): `Delta P = 2sigma/r`
  - r = radius of curvature
  - sigma = surface tension
- **Excess pressure inside a soap bubble** (two surfaces -- inner and outer): `Delta P = 4sigma/r`
- **Total pressure inside an air bubble** at depth h in a liquid: `P_inside = P_atm + h rho g + 2sigma/r`
- **Total pressure inside a soap bubble** in air: `P_inside = P_atm + 4sigma/r`
- **General formula for non-spherical surfaces** (two principal radii of curvature r₁ and r₂):
  `Delta P = sigma(1/r₁ + 1/r₂)`
  For a spherical surface: r₁ = r₂ = r, so `Delta P = 2sigma/r`
  For a cylindrical surface: one radius = r, other = infinity, so `Delta P = sigma/r`

### Key Diagram: Excess Pressure in Drops and Bubbles
- Liquid drop: one surface, excess pressure = 2sigma/r (higher pressure inside)
- Soap bubble: two surfaces (inner and outer), excess pressure = 4sigma/r
- Air bubble inside liquid: one surface, excess pressure = 2sigma/r, plus hydrostatic pressure
- [SVG-REF]

### Important Notes
- For a plane surface (r = infinity), the excess pressure is zero
- When two soap bubbles of radii r₁ and r₂ form a double bubble, the radius of the common surface is: `r = r₁r₂/(r₂ - r₁)` (assuming r₂ > r₁). The common surface is concave toward the smaller bubble
- When two soap bubbles coalesce to form one bubble (isothermal process, using Boyle's law): `P₁V₁ + P₂V₂ = P₃V₃` where `P_i = P₀ + 4sigma/r_i`
- The relation `3P dv + 4sigma ds = 0` holds for combining bubbles at constant temperature

### Worked Example
**Q:** Find the excess pressure inside a soap bubble of 5 mm diameter. Surface tension of soap solution = 1.6 N/m.

**A:**
1. Radius r = 5/2 mm = 2.5 x 10⁻³ m
2. Excess pressure = `4sigma/r = 4 × 1.6 / (2.5 × 10⁻³) = 2560 N/m²`

---

## 14. Capillarity

### Concepts
- When an open capillary tube (very narrow glass tube) is placed in a liquid, the liquid either rises or falls inside the tube
- **Rise:** occurs when the meniscus is concave (acute angle of contact), e.g., water in glass. The pressure just below the concave meniscus is less than atmospheric, so liquid rises until the hydrostatic pressure of the risen column balances the pressure deficit
- **Depression:** occurs when the meniscus is convex (obtuse angle of contact), e.g., mercury in glass. Pressure just below the convex meniscus is greater than atmospheric, so liquid is pushed down

### Formulas
- Height of capillary rise (or depression): `h = 2sigma cos(theta) / (R rho g)`
  - sigma = surface tension (N/m)
  - theta = angle of contact
  - R = radius of capillary tube (m)
  - rho = density of liquid (kg/m³)
  - g = acceleration due to gravity (m/s²)
- In terms of the radius of curvature of meniscus r (where `r = R/cos(theta)`): `h = 2sigma / (r rho g)`
- For water (theta approximately 0 degrees, cos theta = 1): `h = 2sigma / (R rho g)`
- For mercury (theta approximately 135 degrees, cos 135 = -1/sqrt(2)): depression `h = 2sigma / (R rho g sqrt(2))` (h is negative, indicating depression)

### Key Diagram: Capillary Rise
- A narrow tube of radius R dipped in a liquid
- Liquid rises to height h inside the tube
- Concave meniscus at the top with radius of curvature r
- Relationship: r = R / cos(theta)
- At the bottom of the meniscus, pressure = P_atm - 2sigma/r; this is balanced by the column weight
- [SVG-REF]

### Important Notes
- **Capillary tube of insufficient length:** If the tube length l < h (expected rise), the liquid rises to the top of the tube and adjusts the radius of curvature of the meniscus so that: `l × r' = h × r` => `r' = hr/l`. The liquid does NOT overflow
- **Capillary open at both ends with water filled:** Two meniscuses form (top and bottom). The maximum height of water column that can be held: `h = 4sigma/(r rho g)` (because there are two meniscuses each contributing 2sigma/r)
- Capillary rise is inversely proportional to the tube radius: narrower tubes cause higher rise
- Ratio of surface tensions from capillary experiments: `sigma₁/sigma₂ = (rho₁ h₁ cos(theta₂)) / (rho₂ h₂ cos(theta₁))`

### Worked Example
**Q:** Water rises to a height of 10 cm in a certain capillary tube. In the same tube, mercury is depressed by 3.42 cm. Find the ratio of surface tensions of water and mercury. (Angle of contact for water = 0 degrees, for mercury = 135 degrees)

**A:**
1. For water: `sigma_w = R rho_w g × 10 / (2 cos 0) = R rho_w g × 5`
2. For mercury: `sigma_Hg = R rho_Hg g × 3.42 / (2 × |cos 135|) = R × 13.6 rho_w × g × 3.42 / (2 × 1/sqrt(2))`
3. Ratio: `sigma_w / sigma_Hg = (1 × 10) / (13.6 × 3.42 / cos 135)` = `10 / (13.6 × 3.42 × sqrt(2))` = 0.1522

---

## 15. Viscosity

### Concepts
- **Viscosity** is the property by which a liquid (or fluid) opposes relative motion between its layers
- When a fluid flows over a surface, the layer in contact with the surface is at rest (no-slip condition), and velocity increases with distance from the surface
- The rate of change of velocity with distance perpendicular to the flow is called the **velocity gradient** (dv/dx)
- The resistive (viscous) force is proportional to the area and the velocity gradient

### Formulas
- Newton's law of viscosity: `F = -eta × A × (dv/dx)`
  - eta (also written as n) = coefficient of viscosity
  - A = area of the layer (m²)
  - dv/dx = velocity gradient (s⁻¹)
  - F = viscous force (N)
- Dimensions of eta: `[ML⁻¹T⁻¹]`
- SI unit: Pa.s (= N.s/m² = kg/(m.s))
- CGS unit: poise. `1 Pa.s = 10 poise`
- The coefficient of viscosity is the tangential force per unit area required to maintain a unit velocity gradient between layers

### Key Diagram: Velocity Profile in Viscous Flow
- Two parallel plates, bottom plate stationary, top plate moving with velocity v
- Fluid between the plates with arrows showing velocity increasing linearly from 0 (at bottom) to v (at top)
- This is the plane velocity profile for uniform velocity gradient
- For flow through a tube: parabolic profile with maximum velocity at the centre and zero at the walls
- [SVG-REF]

### Important Notes
- **Steady (laminar) flow:** Velocity at any point is constant in time. Particles follow well-defined paths called streamlines
- **Turbulent flow:** Irregular, chaotic flow with vortices. Occurs when velocity exceeds a critical value
- Viscosity of liquids decreases with temperature; viscosity of gases increases with temperature

---

## 16. Reynolds Number

### Concepts
- A dimensionless number that predicts whether flow will be laminar or turbulent
- It represents the ratio of inertial forces to viscous forces in the flow

### Formulas
- `N_R = rho V D / eta`
  - rho = density of fluid (kg/m³)
  - V = velocity of flow (m/s)
  - D = diameter of tube (m)
  - eta = coefficient of viscosity (Pa.s)
- **Flow classification:**
  - `N_R < 2000`: laminar flow
  - `2000 < N_R < 3000`: streamlined (transitional) flow
  - `N_R > 3000`: turbulent flow

### Important Notes
- The critical velocity (velocity at which flow transitions from laminar to turbulent) can be found: `V_c = N_R × eta / (rho D)`
- For flow in pipes, laminar flow is desirable for smooth fluid transport
- Reynolds number is dimensionless

---

## 17. Poiseuille's Formula

### Concepts
- Describes the steady laminar flow of a viscous liquid through a horizontal pipe of uniform circular cross-section
- A pressure difference must be maintained between the ends of the pipe to sustain flow against viscous resistance
- The velocity profile is parabolic: maximum at the centre, zero at the walls

### Formulas
- Volume flow rate: `Q = pi(P₁ - P₂)r⁴ / (8 eta l)`
  - P₁ - P₂ = pressure difference between the ends (Pa)
  - r = radius of the pipe (m)
  - eta = coefficient of viscosity (Pa.s)
  - l = length of the pipe (m)
- The flow rate depends on the fourth power of the radius -- doubling the radius increases flow rate by 16 times
- Fluid resistance (analogous to electrical resistance): `R_fluid = 8 eta l / (pi r⁴)`
  `Q = (P₁ - P₂) / R_fluid` (analogous to I = V/R)
- **Series combination** of capillaries: `R_total = R₁ + R₂` and flow rate through each is the same
- **Parallel combination:** `1/R_total = 1/R₁ + 1/R₂` and pressure drop across each is the same

### Important Notes
- Valid only for laminar flow (low Reynolds number)
- The r⁴ dependence means even small changes in tube radius dramatically affect flow (important in blood vessels)
- Analogous to Ohm's law: Pressure difference is like voltage, flow rate is like current, and fluid resistance is like electrical resistance

### Worked Example
**Q:** Three capillaries of same length but internal radii 3r, 4r, 5r are connected in series. If the pressure difference across the third capillary is 8.1 mm, find the pressure difference across the first.

**A:**
1. Since they are in series, `Q₁ = Q₂ = Q₃`. Using Poiseuille's formula: `P_i r_i⁴ = constant` (same eta, l)
2. `P₁(3r)⁴ = P₃(5r)⁴` => `P₁ × 81 = P₃ × 625`
3. `P₁ = 8.1 × 625/81 = 62.5 mm`

---

## 18. Stokes' Law and Terminal Velocity

### Concepts
- When a sphere moves through a viscous fluid, it experiences a resistive (drag) force called **Stokes' drag**
- At low velocities (laminar flow around the sphere), this force is proportional to velocity
- When a sphere is dropped in a fluid, it accelerates initially. As velocity increases, the viscous drag increases until it equals the net downward force (weight minus buoyancy). At this point, acceleration becomes zero and the sphere moves with constant **terminal velocity**

### Formulas
- **Stokes' law:** `F = 6 pi eta r v`
  - eta = coefficient of viscosity of the fluid
  - r = radius of the sphere
  - v = velocity of the sphere relative to the fluid
- **Terminal velocity:** At terminal velocity, `mg - B = F_drag`
  `(4/3)pi r³ d g - (4/3)pi r³ rho g = 6 pi eta r v_t`
  `v_t = (2r²(d - rho)g) / (9 eta)`
  - d = density of sphere material
  - rho = density of fluid
  - r = radius of sphere
- Terminal velocity is proportional to r² -- larger spheres fall faster
- For a rising bubble (d < rho), terminal velocity is upward: `v_t = (2r²(rho - d)g) / (9 eta)`

### Key Diagram: Terminal Velocity
- A sphere falling through a viscous fluid
- Three forces: Weight (mg, downward), Buoyant force (B, upward), Viscous drag (F = 6 pi eta r v, upward)
- At terminal velocity: mg = B + F
- Velocity-time graph: velocity increases from 0, curves and asymptotically approaches v_t (horizontal line)
- [SVG-REF]

### Important Notes
- Stokes' law is valid only for small spheres moving at low speeds (laminar flow conditions, low Reynolds number)
- At terminal velocity, the viscous force equals the effective weight: `F_viscous = mg(1 - rho/d)` = apparent weight
- When two drops of the same size (radius r, terminal velocity v) combine:
  Volume doubles: `R³ = 2r³` => `R = 2^(1/3) r`
  New terminal velocity: `V_t = v × (R/r)² = v × 2^(2/3) ≈ 1.587v`

### Worked Example
**Q:** Find the terminal velocity of a steel ball of 2 mm diameter falling through glycerine. (rho_glycerine = 1.3 g/cc, rho_steel = 8.3 g/cc, eta = 8.3 poise)

**A:**
1. r = 0.1 cm, `d - rho = 8.3 - 1.3 = 7.0 g/cc`
2. `v_t = (2/9) × (980 × (0.1)² × 7.0) / 8.3`
3. `v_t = (2/9) × (980 × 0.01 × 7.0) / 8.3 = (2 × 68.6) / (9 × 8.3) = 1.83 cm/s`

---

## 19. Rotating Fluids (Advanced)

### Concepts
- When a container of liquid is rotated about a vertical axis with angular velocity omega, the free surface takes the shape of a **paraboloid of revolution**
- Each element of liquid at distance x from the axis requires a centripetal force provided by the pressure gradient

### Formulas
- Pressure at distance r from axis at the bottom: `P = P₀ + (1/2)rho omega² r²`
  - P₀ = pressure at the central point on the bottom
- Shape of free surface: `y = omega² x² / (2g)` (parabolic, with vertex at the axis)
- For a horizontal rotating tube of length l filled with liquid, open at end A (distance h from axis) and closed at B (at distance l from axis):
  `P_B = P₀ + (rho omega²/2)[l² - (l-h)²]`

### Important Notes
- This topic is useful for JEE Advanced problems involving rotating frames and pseudo forces
- The parabolic surface ensures that at every point, the net force (gravity + centrifugal in the rotating frame) is perpendicular to the surface

---

## Important Formulas Summary

| Topic | Formula | Variables |
|-------|---------|-----------|
| Hydrostatic pressure | `P = P₀ + hρg` | h = depth, ρ = liquid density |
| Thrust on vertical wall | `F = ρglh²/2` | l = width, h = depth |
| Hydraulic press | `F₂ = F₁(A₂/A₁)` | A₁, A₂ = piston areas |
| Buoyant force | `B = vρg` | v = displaced volume |
| Floating condition | `v/V = d/ρ` | d = body density, ρ = liquid density |
| Apparent weight | `W_app = Vg(d - ρ)` | V = body volume |
| Equation of continuity | `A₁v₁ = A₂v₂` | A = area, v = velocity |
| Bernoulli's equation | `P + ½ρv² + ρgh = const` | Along a streamline |
| Velocity of efflux | `V = sqrt(2gh)` | h = depth of hole |
| Range of efflux jet | `R = 2sqrt(h(H-h))` | H = total height, h = depth of hole |
| Time to empty tank | `t = (A/a)sqrt(2H/g)` | A = tank area, a = hole area |
| Venturi meter (liquid) | `Q = A₁A₂sqrt(2gh/(A₁²-A₂²))` | h = manometer reading |
| Pitot tube (liquid) | `V = sqrt(2gh)` | h = manometer difference |
| Surface tension | `sigma = F/L` | F = force, L = length |
| Excess pressure (drop) | `ΔP = 2sigma/r` | Single surface |
| Excess pressure (soap bubble) | `ΔP = 4sigma/r` | Two surfaces |
| Capillary rise | `h = 2sigma cos(theta)/(Rρg)` | R = tube radius, theta = contact angle |
| Viscous force | `F = eta A (dv/dx)` | eta = viscosity coefficient |
| Reynolds number | `N_R = ρVD/eta` | D = diameter of tube |
| Poiseuille's formula | `Q = πΔPr⁴/(8ηl)` | r = pipe radius, l = pipe length |
| Stokes' drag | `F = 6πηrv` | r = sphere radius, v = velocity |
| Terminal velocity | `v_t = 2r²(d-ρ)g/(9η)` | d = sphere density |
| Rotating fluid surface | `y = ω²x²/(2g)` | Parabolic free surface |

---

## Questions

### ANSWER KEYS (Reference)

**Workbook Answer Key -- Level 1 (Q1-55)**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | B | D | A | C | B | D | A | C | B | D | A | C | B | A | D |

| Q# | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | C | B | A | D | C | B | A | D | C | B | A | D | C | B | A |

| Q# | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | D | A | C | B | D | A | C | B | D | A | C | B | A | D | C |

| Q# | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 |
|---|---|---|---|---|---|---|---|---|---|---|
| Ans | 3 | 5 | 2 | 4 | 8 | 1 | 6 | 3 | 7 | 2 |

**Workbook Answer Key -- Level 2 (Q56-90)**

| Q# | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | C | A | D | B | C | A | D | B | C | A | D | B | BC | A | D |

| Q# | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84 | 85 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | B | C | A | BD | C | AB | D | A | C | 25 | B | D | A | C | B |

| Q# | 86 | 87 | 88 | 89 | 90 |
|---|---|---|---|---|---|
| Ans | D | AC | B | A | C |

**Workbook Answer Key -- Previous Years JEE Main (Q1-38)**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | D | A | C | B | D | A | C | B | D | A | C | B | A | D | C |

| Q# | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | B | A | D | C | B | A | D | C | B | A | D | C | B | A | D |

| Q# | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 |
|---|---|---|---|---|---|---|---|---|
| Ans | C | B | A | D | C | B | A | D |

**Workbook Answer Key -- Previous Years JEE Advanced (Q1-32)**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | A | C | B | D | A | C | B | D | A | C | B | A | D | C | ACD |

| Q# | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | AB | CD | BC | A | B | 6 | 3 | 2 | 4rho*g | 0.5 | 3 | 5 | 2 | True | False |

| Q# | 31 | 32 |
|---|---|---|
| Ans | 4 | 7 |

**Miscellaneous Exercise**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| Ans | C | A | D | B | A | C | D | B | AC | D |

---

### FLUID MECHANICS: LEVEL 0 (EASY)
*Source: DTS-0 (CBSE Pattern)*

**VSA: Very Short Answer Type (1 mark)**

**1.** State Pascal's law of transmission of fluid pressure.

**2.** Why is the blood pressure in humans greater at the feet than at the brain?

**3.** What is the principle behind the working of a hydraulic lift?

**4.** Why does an iron needle float on water when placed gently, but sink when pushed in?

**5.** What is the angle of contact for a liquid that completely wets the surface?

**SA-I: Short Answer Type I (2 marks)**

**6.** State Archimedes' principle. A block of wood floats in water with 2/3 of its volume submerged. What is the density of wood?

**7.** Why is the speed of flow of a liquid greatest where the cross-sectional area is smallest? State the equation of continuity.

**8.** A hydraulic lift has a large piston of area 900 cm^2 and a small piston of area 10 cm^2. What force must be applied on the small piston to lift a car of mass 1350 kg?

**9.** Why do two soap bubbles of different radii, when connected by a tube, result in the smaller one shrinking?

**10.** Define coefficient of viscosity. Give its SI unit and dimensions.

**11.** Explain why raindrops fall with a constant velocity after some time. What is this velocity called?

**SA-II: Short Answer Type II (3 marks)**

**12.** State and prove Bernoulli's theorem for a steady flow of an incompressible, non-viscous fluid.

**13.** A tank is filled with water to a height H. A hole is made at a depth h from the surface. Using Torricelli's theorem, find: (i) the velocity of efflux, (ii) the range of the water jet on the ground, (iii) the depth at which the range is maximum.

**14.** Derive the expression for excess pressure inside: (i) a spherical liquid drop, (ii) a soap bubble.

**15.** Define surface tension. Derive the relation for the rise of a liquid in a capillary tube of radius r.

**16.** Water flows through a horizontal pipe of varying cross-section. At a point where the cross-section is 10 cm^2, the velocity is 1 m/s and the pressure is 2000 Pa. What is the pressure at another point where the cross-section is 5 cm^2?

**17.** State Stokes' law. Derive the expression for the terminal velocity of a sphere of radius r and density rho falling through a fluid of density sigma and viscosity eta.

**18.** A metal sphere of radius 2 mm and density 8000 kg/m^3 falls through glycerine of density 1300 kg/m^3 and viscosity 8.3 Pa.s. Calculate its terminal velocity.

**19.** Distinguish between streamline flow and turbulent flow. What is Reynolds number and what is its critical value?

**LA: Long Answer Type (5 marks)**

**20.** (a) State and derive Bernoulli's equation from the work-energy theorem. (b) Using Bernoulli's theorem, explain the working of a venturi meter and derive the expression for the rate of flow.

**21.** (a) What is capillarity? Derive an expression for the rise of liquid in a capillary tube. (b) Water rises to a height of 10 cm in a capillary tube. If the tube is cut at a height of 6 cm, describe what happens at the top of the tube. Will water overflow?

**22.** A cylindrical vessel of height H and cross-sectional area A is filled with a liquid of density rho. A small orifice of area a (a << A) is made at a height h from the bottom. Derive expressions for: (i) velocity of efflux, (ii) time taken for the liquid level to drop from H to h.

---

### FLUID MECHANICS: LEVEL 1
*Source: DTS-1 (Fluid Statics, Pressure, Buoyancy), DTS-2 (Bernoulli, Efflux, Continuity), DTS-3 (Surface Tension, Viscosity)*

#### DTS-1: Fluid Statics -- Pressure, Pascal's Law and Buoyancy

**1.** The pressure at the bottom of a tank of water is 3P/2 where P is the atmospheric pressure. If the water is drawn out till the level of water is lowered by one half, the pressure at the bottom of the tank will now be:
(A) 3P/4 (B) 5P/4 (C) 7P/4 (D) P

**2.** A liquid is kept in a cylindrical vessel which is rotated along its axis. The liquid rises at the sides. If the radius of the vessel is 0.05 m and the speed of rotation is 2 rev/s, the difference in heights of the liquid at the centre and at the sides of the vessel is (g = 10 m/s^2):
(A) 2 cm (B) 4 cm (C) 1 cm (D) 8 cm

**3.** A block of ice floats on water in a beaker. When the ice melts completely, the water level in the beaker:
(A) rises (B) falls (C) remains the same (D) first rises then falls

**4.** A body floats in a liquid with 1/4 of its volume above the surface. If the same body is placed in water, it floats with 1/3 of volume above water. The density of the liquid is:
(A) 4/3 (B) 3/4 (C) 8/9 (D) 9/8

**5.** A closed rectangular tank is completely filled with water and is accelerated horizontally with an acceleration a. Pressure is: (i) maximum at the rear bottom corner, (ii) minimum at the front top corner. Then:
(A) only (i) is true (B) only (ii) is true (C) both are true (D) neither is true

**6.** Two vessels have the same base area but different shapes. The first vessel takes twice the amount of water as the second vessel to fill up to a certain height. Is the force on the base of the vessel the same in both cases?
(A) Yes, force is same (B) No, first has double force (C) No, second has double force (D) Depends on shape

**7.** A body weighs 160 g in air, 130 g in water and 136 g in oil. The specific gravity of the oil is:
(A) 0.8 (B) 0.6 (C) 1.2 (D) 1.6

**8.** The pressure at the bottom of a U-tube of uniform cross-section when filled with a liquid of density rho to a height H on both sides is:
(A) 2*rho*g*H + P0 (B) rho*g*H + P0 (C) rho*g*H/2 + P0 (D) rho*g*H

**9.** A balloon with mass M is descending with acceleration a (a < g). How much mass must be removed so that the balloon starts ascending with acceleration a?
(A) Ma/(g+a) (B) 2Ma/(g+a) (C) 2Ma/(g-a) (D) Ma/g

**10.** An iceberg of density 900 kg/m^3 is floating in sea water of density 1000 kg/m^3. The percentage of volume of iceberg which is outside water is:
(A) 20% (B) 35% (C) 10% (D) 11%

**11.** A cylinder is filled with non-viscous liquid of density d to a height h0. A small hole is bored at the bottom. A piston is fitted so that it can slide frictionlessly in the cylinder. Mass of the piston is m and area is A. The speed of efflux is:
(A) sqrt(2gh0) (B) sqrt(2(mg/A + h0*d*g)/d) (C) sqrt(2gh0 + mg/A) (D) sqrt(2gh0 + mg/(A*d))

**12.** The apparent weight of a body in a liquid of density rho_l is W1, and in a liquid of density rho_2 is W2. The density of the body is:
(A) (W1*rho_2 - W2*rho_1)/(W1 - W2) (B) (W2*rho_1 - W1*rho_2)/(W2 - W1) (C) W1*W2/(rho_1 - rho_2) (D) (rho_1 - rho_2)/(W1 - W2)

**13.** A manometer connected to a closed vessel shows that the gas pressure is 20 cm of Hg less than the atmospheric pressure. If the atmospheric pressure is 76 cm of Hg, the absolute pressure is:
(A) 56 cm of Hg (B) 96 cm of Hg (C) 20 cm of Hg (D) 76 cm of Hg

**14.** A block of wood floats in water with 60% of its volume submerged. It is then placed in oil. If the density of oil is 800 kg/m^3, the fraction submerged in oil is:
(A) 3/4 (B) 1/2 (C) 7/8 (D) 2/3

**15.** A metallic sphere weighs 210 g in air, 180 g in water and 120 g in an unknown liquid. The density of the unknown liquid is:
(A) 3 g/cm^3 (B) 3/7 g/cm^3 (C) 1/3 g/cm^3 (D) 7/3 g/cm^3

#### DTS-2: Bernoulli's Theorem, Velocity of Efflux and Applications

**16.** Water flows through a horizontal pipe of varying cross-section. The pressure difference between two sections of cross-sectional areas 10 cm^2 and 20 cm^2 is 200 Pa. The volume flow rate is (density = 1000 kg/m^3):
(A) 25.8 cm^3/s (B) 258 cm^3/s (C) 2580 cm^3/s (D) 516 cm^3/s

**17.** An ideal liquid flows through a horizontal pipe whose diameter varies along its length. Measurements show that the largest difference in pressure is 23000 Pa. What is the maximum speed of water in the pipe?
(A) 6.78 m/s (B) 4.8 m/s (C) 3.4 m/s (D) 10 m/s

**18.** A tank is filled with water up to a height H. Water is allowed to come out of a hole P at a height h from the bottom. The horizontal range of the water jet is maximum when:
(A) h = H/4 (B) h = H/2 (C) h = 3H/4 (D) h = H

**19.** A cylindrical vessel of radius R is filled with water to a height H. A hole is made at the bottom. If the time taken to empty half the vessel is t1 and to empty the rest is t2, then t1/t2 is:
(A) 1 (B) greater than 1 (C) less than 1 (D) depends on R

**20.** Water flows steadily through a horizontal pipe of non-uniform cross-section. If the pressure is 4 x 10^4 Pa at a point where the speed is 2 m/s, what is the pressure at another point where the speed is 3 m/s?
(A) 3.75 x 10^4 Pa (B) 3.25 x 10^4 Pa (C) 4.25 x 10^4 Pa (D) 2.75 x 10^4 Pa

**21.** The velocity of efflux from a large tank at a depth h is v. If the tank is accelerated vertically upward with acceleration a, the velocity of efflux is:
(A) sqrt(2gh) (B) sqrt(2(g+a)h) (C) sqrt(2(g-a)h) (D) sqrt(2ah)

**22.** A pitot tube is mounted along the axis of a gas pipeline. The difference of pressure between the stagnation point and a point on the side of the tube is 39.2 Pa. If the gas density is 1.3 kg/m^3, the speed of the gas is approximately:
(A) 7.77 m/s (B) 5.5 m/s (C) 15.54 m/s (D) 30 m/s

**23.** An open tank has the shape of a frustum. The cross-section varies linearly from area A at the top to a at the bottom. The tank is full of water of density rho. The work done in pumping all the water out from the top is:
(A) rho*g*H^2*(A+a)/4 (B) rho*g*H^2*(2A+a)/6 (C) rho*g*H^2*A/3 (D) rho*g*H^2*(A+2a)/6

**24.** Water enters a house through a pipe with an inside diameter of 2 cm at an absolute pressure of 4 x 10^5 Pa. The pipe leading to the second floor bathroom 5 m above has inside diameter 1 cm. When the flow speed at the inlet pipe is 1.5 m/s, the flow speed and pressure in the bathroom are:
(A) 6 m/s, 2.3 x 10^5 Pa (B) 6 m/s, 3.3 x 10^5 Pa (C) 3 m/s, 3.5 x 10^5 Pa (D) 3 m/s, 2.3 x 10^5 Pa

**25.** A tank of large cross-sectional area is filled with water to a height H. A small orifice of area A is made at the bottom. The time taken for the water level to drop from H to H/2 is proportional to:
(A) H (B) sqrt(H) (C) H^2 (D) 1/sqrt(H)

**26.** A venturi meter has a pipe diameter of 20 cm and throat diameter of 10 cm. If the pressure difference is 480 Pa, the flow rate is (g = 10 m/s^2):
(A) 0.01 m^3/s (B) 0.10 m^3/s (C) 0.001 m^3/s (D) 1 m^3/s

**27.** A large tank of cross-sectional area A is filled with water. A horizontal pipe of cross-sectional area a (a << A) is attached near the bottom. The speed with which the water level drops when the water height is h:
(A) (a/A)*sqrt(2gh) (B) sqrt(2gh) (C) (A/a)*sqrt(2gh) (D) a*sqrt(2gh)/A^2

**28.** Water flowing in a canal 6 m wide and 1.5 m deep at a speed of 10 km/h enters a pipe at the end of the canal. If the pipe has cross-section 0.15 m^2, what is the speed of water in the pipe?
(A) 166.67 m/s (B) 16.67 m/s (C) 1.667 m/s (D) 1667 m/s

**29.** The dynamic lift on a wing of area 80 m^2 is 7.5 x 10^4 N. If the speed of air over the lower surface of the wing is 80 m/s, the speed over the upper surface is (density of air = 1.3 kg/m^3):
(A) 88.1 m/s (B) 95 m/s (C) 100 m/s (D) 85 m/s

**30.** A cylindrical tank has a hole of area a in its bottom. If water is poured in at rate Q m^3/s, the maximum height of water in the tank is:
(A) Q^2/(2*g*a^2) (B) Q^2/(g*a^2) (C) Q/(g*a) (D) Q*g*a

#### DTS-3: Surface Tension, Capillarity and Viscosity

**31.** A soap bubble of radius r1 is placed on another soap bubble of radius r2 (r2 > r1). The radius of the common film is:
(A) r1*r2/(r2 - r1) (B) r2 - r1 (C) (r1 + r2)/2 (D) r1*r2/(r1 + r2)

**32.** The excess pressure inside a soap bubble is three times the excess pressure inside a second soap bubble. The ratio of their volumes is:
(A) 1:3 (B) 1:9 (C) 1:27 (D) 1:81

**33.** Water rises to a height h in a capillary tube. If the length of the tube above the surface is made h/2, then:
(A) water rises to a height h (B) water rises to a height h/2 and stays (C) water overflows (D) water does not rise

**34.** A spherical drop of water has radius 1 mm. If the surface tension of water is 70 x 10^-3 N/m, the difference of pressure between inside and outside of the drop is:
(A) 35 Pa (B) 70 Pa (C) 140 Pa (D) 280 Pa

**35.** The angle of contact between glass and water is 0° and surface tension is 70 x 10^-3 N/m. Water rises in a glass capillary to (tube radius = 0.5 mm, density = 10^3 kg/m^3):
(A) 1.4 cm (B) 2.8 cm (C) 4.2 cm (D) 5.6 cm

**36.** Two parallel glass plates are dipped partly in a liquid of density rho and surface tension T. If the distance between the plates is d, the capillary rise of liquid between the plates is:
(A) 4T/(rho*g*d) (B) 2T/(rho*g*d) (C) T/(rho*g*d) (D) T/(2*rho*g*d)

**37.** A spherical liquid drop of radius R is divided into 8 equal droplets. The work done in the process is:
(A) 4*pi*R^2*T (B) 3*pi*R^2*T (C) 2*pi*R^2*T (D) pi*R^2*T

**38.** Two soap bubbles of radii r and R (R > r) are in contact. The radius of the common interface is:
(A) Rr/(R-r) (B) Rr/(R+r) (C) (R-r) (D) R + r

**39.** The viscous force on a sphere of radius r moving with velocity v through a fluid of viscosity eta is:
(A) 6*pi*eta*r*v (B) 4*pi*eta*r*v (C) 6*pi*eta*r^2*v (D) 4*pi*eta*r^2*v

**40.** A ball of density rho and radius r falls through a liquid of density sigma (sigma < rho) and viscosity eta. The terminal velocity is proportional to:
(A) r (B) r^2 (C) 1/r (D) 1/r^2

**41.** In Poiseuille's formula for the rate of flow Q through a capillary tube, if the pressure difference is doubled and the length is halved, the rate of flow becomes:
(A) 2Q (B) 4Q (C) 8Q (D) Q

**42.** The Reynolds number of a flow is 1500. The flow is:
(A) turbulent (B) streamline (C) unstable (D) impossible

**43.** Two capillary tubes of lengths in the ratio 1:2 and radii in the ratio 2:1 are connected in series. If the pressure across the combination is P, the pressure difference across the first tube is:
(A) P/9 (B) P/17 (C) 16P/17 (D) 8P/9

**44.** A liquid flows through a pipe. If the viscosity of the liquid is increased by a factor of 2, and the radius of the pipe is decreased by a factor of 2, the rate of flow (Poiseuille) changes by a factor of:
(A) 1/2 (B) 1/8 (C) 1/32 (D) 1/16

**45.** Two drops of the same radius are falling through air with terminal velocity v. If they coalesce, what is the terminal velocity of the combined drop?
(A) v (B) 2v (C) v*2^(1/3) (D) v*4^(1/3)

**46.** Surface tension of a soap solution is 25 x 10^-3 N/m. The excess pressure inside a bubble of diameter 1 cm is:
(A) 5 Pa (B) 10 Pa (C) 20 Pa (D) 40 Pa

**47.** The velocity of water in a river is 18 km/h near the surface. If the river is 5 m deep, the shearing stress between horizontal layers of water is (eta = 10^-3 Pa.s):
(A) 10^-3 N/m^2 (B) 10^-2 N/m^2 (C) 10^-4 N/m^2 (D) 10^-5 N/m^2

**48.** A capillary tube of radius r is immersed in a liquid of density rho and surface tension T. The capillary rise h is related to the contact angle theta as:
(A) h = 2T*cos(theta)/(rho*g*r) (B) h = T*cos(theta)/(rho*g*r) (C) h = 2T/(rho*g*r*cos(theta)) (D) h = T/(2*rho*g*r)

**49.** Water flows through two identical tubes A and B. A volume V of water passes through tube A per second and 2V through tube B. Which tube has the greater pressure difference?
(A) A (B) B (C) Same (D) Cannot determine

**50.** A spherical ball of radius r and density rho falls from rest in a viscous fluid of density sigma and viscosity eta. The distance travelled before reaching terminal velocity depends on:
(A) r only (B) eta only (C) rho, sigma, r, eta and g (D) None of the above

**51.** Detergents clean clothes because they:
(A) increase the surface tension of water (B) decrease the surface tension of water (C) increase the viscosity (D) decrease the density

**52.** A straw is dipped in water. Water rises and some of it overflows. The extra water that overflows is due to:
(A) excess atmospheric pressure (B) the meniscus being concave (C) surface tension force exceeding weight of the water column (D) capillary action only for short tubes

**53.** 1000 tiny drops of water, each of radius 0.1 mm, merge to form a single big drop. The change in surface energy is (T = 0.072 N/m):
(A) -8.1 x 10^-7 J (B) +8.1 x 10^-7 J (C) -8.1 x 10^-5 J (D) +8.1 x 10^-5 J

**54.** A liquid drop placed on a horizontal surface has a contact angle theta with the surface. The excess pressure inside the drop is:
(A) 2T/r (B) T/r (C) 2T*cos(theta)/r (D) depends on shape

**55.** A U-tube contains water and oil (density 0.8 g/cm^3). The oil column is 10 cm on one side. The difference in water levels on the two sides is:
(A) 2 cm (B) 4 cm (C) 6 cm (D) 8 cm

---

### FLUID MECHANICS: LEVEL 2
*Source: DTS-4 NAT (Numerical Answer Type), DTS-5 (Fluid Statics -- Level 2), DTS-6 (Bernoulli/Efflux -- Level 2), DTS-7 (Surface Tension/Viscosity -- Level 2)*

#### DTS-4 NAT: Mixed Numerical Questions

**56.** A block of wood (density 500 kg/m^3) floats in water. The fraction of volume above the surface is _________ % (integer).

**57.** A cylindrical vessel of area 100 cm^2 has at its bottom a small orifice of area 1 cm^2. Water flows into the vessel at 140 cm^3/s. The maximum height (in cm) of water in the vessel is _________.

**58.** A soap bubble of radius 3 cm has surface tension 0.04 N/m. The work done in doubling the radius is n x 10^-4 J. Find n (round to nearest integer).

**59.** A capillary tube of radius 0.5 mm is dipped in water (T = 0.072 N/m, contact angle 0 degrees). The rise of water is _________ cm (round to 1 decimal).

**60.** A sphere of radius 2 mm and density 7800 kg/m^3 falls through glycerine (density 1260 kg/m^3, viscosity 1.5 Pa.s). Terminal velocity is n x 10^-2 m/s. Find n (round to 1 decimal).

**61.** Two identical soap bubbles each of radius r coalesce isothermally. The radius of the new bubble is r*sqrt(n). Find n.

**62.** In a Poiseuille flow experiment, if the pressure difference across a tube of radius R and length L is P, the rate of flow is Q. If R is doubled and L is halved, the new rate of flow is n*Q. Find n.

**63.** An ice cube floats in a glass of water. When the ice melts, the water level stays the same. If instead the ice floats in a glass of saltwater, when it melts the level _________ (1 = rises, 2 = falls, 3 = same).

**64.** A large tank of cross section 1 m^2 has a small hole of area 1 cm^2 at the bottom. If the tank is filled to a height of 1 m, the time to empty (in s) is approximately _________ (use g = 10).

**65.** A body of density 8000 kg/m^3 weighs 40 N in air. Its apparent weight in a liquid of density 1200 kg/m^3 is _________ N.

**66.** Two capillary tubes of radii r and 2r are connected in series. If a liquid flows through them under a pressure head P, the pressure drop across the tube of radius r is P*n/17. Find n.

**67.** A spherical tank of radius R is full of water. A tap at the bottom (area a) is opened. The time to empty the tank is (14*pi*R^(5/2))/(n*a*sqrt(2g)). Find n.

**68.** The excess pressure inside a mercury drop (T = 0.5 N/m) of diameter 4 mm is _________ Pa.

**69.** Water flows in a pipe of diameter 4 cm at a velocity of 0.4 m/s. The velocity in a constriction of diameter 2 cm is _________ m/s.

**70.** A vessel has a small orifice at height h from the bottom. The total height of liquid is H. The range on the ground (vessel on floor) is maximum when h equals H/n. Find n.

#### DTS-5: Fluid Statics (Level 2)

**71.** A body floats in a liquid of density rho_1 with 1/3 of its volume exposed. It floats in another liquid of density rho_2 with 2/3 of its volume exposed. The ratio rho_1/rho_2 is:
(A) 1:2 (B) 2:1 (C) 3:2 (D) 2:3

**72.** A cubical block of side a and mass m floats in a liquid of density rho_l. If the block is pressed down by x and released, the period of oscillation is:
(A) 2*pi*sqrt(m/(rho_l*g*a^2)) (B) 2*pi*sqrt(h/g) (C) 2*pi*sqrt(a/(rho_l*g)) (D) 2*pi*sqrt(rho_l*a/g)

**73.** A uniform cylinder of length L and density rho floats in two liquids of densities rho_1 (top) and rho_2 (bottom, rho_2 > rho_1). The length submerged in the bottom liquid is:
(A) L*(rho - rho_1)/(rho_2 - rho_1) (B) L*rho/(rho_1 + rho_2) (C) L*(rho_2 - rho)/(rho_2 - rho_1) (D) L*rho_1/(rho_2 - rho_1)

**\*74.** A wooden block of mass m is floating in a liquid. A stone of mass M is placed on the block. The block just sinks. The density of wood is rho_w and liquid is rho_l:
(A) M/m = (rho_l - rho_w)/rho_w (B) The volume of the block is (m + M)/rho_l (C) The density of the block is less than rho_l (D) The tension at the bottom of the block is Mg

**75.** A beaker containing liquid of density rho accelerates upward with acceleration a. The pressure at depth h is:
(A) h*rho*(g+a) (B) h*rho*g (C) h*rho*(g-a) (D) h*rho*a

**76.** A U-tube has two arms of unequal cross-sectional areas A1 and A2 (A1 > A2). It is filled with liquid to the same level. A piston pushes down on the narrower arm with force F. The difference in levels is:
(A) F/(rho*g*A2) (B) F*(A1+A2)/(rho*g*A1*A2) (C) F/(rho*g*A1) (D) F/(rho*g*(A1-A2))

**77.** A cylinder of area of cross-section A has two pistons of negligible mass. The cylinder contains water. A force F is applied on one piston. The other piston is connected to a spring of force constant k. In equilibrium, the compression of the spring is:
(A) F/k (B) 2F/k (C) F/(2k) (D) F*A/k

**78.** A cube of side a and density 3*rho/4 floats in a liquid of density rho. A mass m is placed on the cube so that the cube is fully submerged. The value of m is:
(A) rho*a^3/4 (B) rho*a^3/2 (C) rho*a^3 (D) 3*rho*a^3/4

**79.** A solid sphere of radius R has a cavity of radius R/2 inside, centered at R/2 from the centre. The sphere floats in a liquid of density rho_l. The density of the material for it to float half submerged is:
(A) 4*rho_l/7 (B) 8*rho_l/7 (C) 2*rho_l/3 (D) rho_l/2

**80.** A container of height H is filled with two immiscible liquids of densities rho and 2*rho, each filling half the container. A small orifice is at the bottom. The velocity of efflux is:
(A) sqrt(3gH/2) (B) sqrt(gH) (C) sqrt(2gH) (D) sqrt(3gH/4)

#### DTS-6: Bernoulli and Efflux (Level 2)

**81.** A tank contains water up to height H. An orifice is at height h from the bottom. The stream strikes the ground at horizontal distance:
(A) 2*sqrt(h*(H-h)) (B) sqrt(2g*h*(H-h)) (C) 2*sqrt((H-h)/g) (D) h*sqrt(2(H-h)/g)

**82.** Water flows from a tap with speed v. The cross-section at distance h below the tap is (A is area at tap):
(A) A*v/sqrt(v^2+2gh) (B) A*sqrt(v^2/(v^2+2gh)) (C) A (D) A*(v^2+2gh)/v^2

**83.** A pitot tube in a wind tunnel reads a pressure difference of 120 Pa. The air density is 1.2 kg/m^3. The wind speed is approximately:
(A) 14.1 m/s (B) 10 m/s (C) 20 m/s (D) 7 m/s

**84.** A wide vessel with a small orifice at the bottom is filled with water and kerosene (specific gravity 0.8). Water layer height is 30 cm and kerosene layer is 20 cm. The velocity of efflux is (g = 10):
(A) sqrt(10) m/s (B) sqrt(9.2) m/s (C) sqrt(8.4) m/s (D) sqrt(11.6) m/s

**85.** A siphon tube is used to drain a tank. The speed of flow depends primarily on:
(A) the height of the tube above the tank (B) the difference in levels of the inlet and outlet (C) the cross-section of the tube (D) the density of the liquid

**86.** Water flows through a horizontal pipe at a rate of 5 litre/s. The pressure difference between two sections is 490 Pa. If the area at one section is 40 cm^2, the area at the other section is:
(A) 20 cm^2 (B) 10 cm^2 (C) 25 cm^2 (D) 30 cm^2

**\*87.** A tank has a small hole at a height h from the bottom. The tank is very wide and filled to height H:
(A) The velocity of efflux is sqrt(2g(H-h)) (B) The horizontal range on the ground (tank on floor) is 2*sqrt(h(H-h)) (C) Range is maximum when h = H/2 (D) Time of flight of the jet is sqrt(2h/g)

**88.** An open tank has water up to height H. A tube of uniform cross-section is bent into a U-shape and placed with both open ends facing up. If water is poured into one arm to height 2H, the velocity of flow is:
(A) sqrt(gH) (B) sqrt(2gH) (C) sqrt(gH/2) (D) sqrt(4gH)

**89.** A cylinder with a piston contains liquid. When the piston is pushed with force F, liquid squirts out through a small hole of area a. If piston area is A (A >> a), the speed of the liquid jet is:
(A) sqrt(2F/(rho*A)) (B) F/(rho*a) (C) sqrt(F/(rho*a)) (D) sqrt(2F*a/(rho*A))

**90.** A tank of cross-section A filled to height H has a small hole of area a at the bottom. The time for the level to fall from H to H/4 is:
(A) (A/a)*sqrt(H/(2g)) (B) (A/a)*sqrt(2H/g) (C) (A/a)*sqrt(H/g) (D) (A/a)*(sqrt(2H/g) - sqrt(H/(2g)))

---

### FLUID MECHANICS: LEVEL 3 (HARD)
*Source: DTS-8, DTS-9, DTS-10 (Subjective / Advanced problems)*

**91.** A cylindrical tank of height H and cross-section A stands on a table of height h above the floor. A small orifice of area a (a << A) is made at the bottom. The water jet hits the floor at a horizontal distance R from the base of the table. Find: (i) the velocity of efflux as a function of the water level y, (ii) the maximum range R_max and the level y at which it occurs, (iii) the time to empty the tank completely.

**92.** A closed cylindrical vessel of height H is completely filled with a liquid of density rho. The vessel is accelerated horizontally with acceleration a. Find: (i) the pressure at any point inside the vessel, (ii) the force on the front and rear walls, (iii) the free surface equation if the top is open.

**93.** A soap bubble of radius r1 and another of radius r2 are connected by a narrow tube. Show that air flows from the smaller bubble to the larger one. Find the radius of the combined bubble if the process is isothermal. (Surface tension = T, atmospheric pressure = P0.)

**94.** A sphere of radius R and density rho_s is submerged in a viscous fluid (density rho_f, viscosity eta) and released from rest. Derive the complete expression for the velocity as a function of time (not just terminal velocity). At what time does the sphere reach 99% of terminal velocity?

**95.** A U-tube of uniform cross-section A contains a liquid of density rho to a height h in each arm. The liquid in one arm is depressed by x and released. Show that the resulting oscillation is simple harmonic, and find the time period. If the tube has arms of unequal cross-sections A1 and A2, find the modified time period.

**96.** A wide cylindrical vessel of cross-section A has a small orifice of area a near the bottom. Water is poured into the vessel at a constant rate Q (volume/time). Find: (i) the steady-state height of water, (ii) the time to reach half the steady-state height, (iii) the differential equation governing the height as a function of time.

**97.** A capillary tube of inner radius r is dipped vertically in a liquid of density rho, surface tension T and contact angle theta. If the length of the tube above the liquid surface is L < 2T*cos(theta)/(rho*g*r), describe what happens at the top of the capillary. Find the radius of curvature of the meniscus at the top.

**98.** A large tank has two small orifices at heights h1 and h2 from the bottom (h1 < h2). The tank is filled to height H (H > h2). The two jets intersect at a point. Find the horizontal and vertical distances of this point from the base of the tank.

**99.** Derive Poiseuille's equation for the volume rate of flow of a viscous liquid through a horizontal tube of radius R and length L under a pressure difference Delta_P. A pipe of radius 1 cm and length 2 m carries oil of viscosity 0.2 Pa.s. Find the pressure needed for a flow rate of 1 litre/min.

**100.** An open cylindrical vessel of radius R rotates about its vertical axis with angular velocity omega. The vessel contains a liquid of density rho to a height h0 when stationary. Find: (i) the equation of the free surface, (ii) the pressure distribution, (iii) the maximum omega for which no liquid spills if the height of the vessel is H (H > h0).

**101.** A solid cone of semi-angle alpha, density rho_c, floats with its apex downward in a liquid of density rho_l (rho_l > rho_c). Find the fraction of the height that is submerged. If the cone is given a small vertical displacement and released, show that the motion is SHM and find the frequency.

**102.** Two parallel glass plates separated by a small distance d are partially immersed in a liquid of density rho and surface tension T. The contact angle is theta. Find: (i) the height of liquid between the plates, (ii) the force needed to separate the plates.

**103.** A container has a vertical tube of radius r1 at the bottom connected to a wider tube of radius r2 at the top. Water of density rho flows upward through the system. Using Bernoulli's equation and continuity, find the pressure difference between top and bottom as a function of the flow rate Q, heights, and radii. Under what conditions does cavitation occur?

**104.** A balloon of mass m (empty) is filled with a gas of density rho_g in air of density rho_a. The balloon has radius R. A payload of mass M hangs below it. The drag force on the balloon at velocity v is F_d = 0.5*C_d*rho_a*pi*R^2*v^2. Find: (i) the maximum payload for the balloon to ascend, (ii) the terminal velocity for a given payload, (iii) the initial acceleration.

**105.** A viscous liquid flows through a pipe of length L and radius R. The flow is fully developed (Poiseuille). A dye is injected at the centre of the pipe at the inlet. Derive the velocity profile v(r) and find: (i) the time for the dye at the centre to reach the outlet, (ii) the time for dye near the wall (at r = R - epsilon) to reach the outlet, (iii) the shape of the dye front at time t.

---

### FLUID MECHANICS: MISCELLANEOUS QUESTION BANK
*Source: Miscellaneous Question Bank (Level 1, 2, 3)*

**1.** A body floats in water with 40% of its volume outside water. When the same body floats in oil, 60% remains outside. The relative density of oil is:
(A) 0.9 (B) 1.2 (C) 1.5 (D) 2.4

**2.** Water from a tap emerges vertically downwards with initial speed 1 m/s. The cross-sectional area of the tap is 10^-4 m^2. The cross-sectional area of the stream 0.15 m below the tap is:
(A) 5 x 10^-4 m^2 (B) 5 x 10^-5 m^2 (C) 10^-5 m^2 (D) 2 x 10^-5 m^2

**3.** A tank is filled with water to a height H. The range of the water from an orifice at depth h from the surface is maximum when:
(A) h = H (B) h = H/2 (C) h = H/4 (D) h = 3H/4

**4.** A body of density rho is dropped from rest at height h into a lake of density sigma (sigma > rho). The maximum depth to which the body sinks before returning is:
(A) h*rho/(sigma - rho) (B) h*sigma/(sigma - rho) (C) h*rho/sigma (D) h*sigma/rho

**5.** The surface tension of water at 20°C is 0.0728 N/m. The pressure inside a drop of water of diameter 1 mm is (atmospheric pressure = 10^5 Pa):
(A) 10^5 Pa (B) 1.0003 x 10^5 Pa (C) 1.0029 x 10^5 Pa (D) 1.029 x 10^5 Pa

**6.** Two soap bubbles A and B of radii r and 3r are formed in air. The ratio of excess pressure in A to B is:
(A) 1:3 (B) 3:1 (C) 1:9 (D) 9:1

**7.** A liquid rises to height h in a capillary of radius r1 and to height h/2 in a capillary of radius r2. The ratio r1/r2 is:
(A) 1:2 (B) 2:1 (C) 1:4 (D) 4:1

**8.** The critical velocity of flow through a tube of radius r is given by v_c = K*eta/(r*rho), where K is Reynolds number. If the diameter of the tube is doubled and the liquid flows at the same speed, the Reynolds number:
(A) doubles (B) halves (C) remains the same (D) quadruples

**9.** A streamlined body falls through a fluid. The drag force is proportional to:
(A) v (B) v^2 (C) v^3 (D) sqrt(v)

**10.** Two identical spherical drops of water are falling through air with terminal velocity v. If the two drops coalesce to form a single drop, the terminal velocity of the bigger drop is:
(A) 2v (B) v*2^(2/3) (C) v*4^(1/3) (D) v*2^(1/3)

---

### JEE MAIN ARCHIVE
*Source: JEE Main (Archive) -- questions from 2002-2023*

**1.** [2002] Bernoulli's theorem is a consequence of:
(A) conservation of mass (B) conservation of energy (C) conservation of linear momentum (D) conservation of angular momentum
**Ans: B**

**2.** [2003] An ice cube of mass 0.1 kg at 0°C is placed in an isolated container which is at 227°C. The specific heat of the container varies with temperature T (in Kelvin) as s = A + BT. If the ice starts melting when the container cools to 27°C, the value of B is... (A = 100 cal/°C/kg, mass of container = 0.5 kg, L_ice = 8 x 10^4 cal/kg):
(A) 2/3 (B) 200/3 (C) 2 (D) 4/3
**Ans: A**

**3.** [2004] A ball is falling in a lake of depth 200 m shows 0.1% decrease in its volume at the bottom. The bulk modulus of the material of the ball is:
(A) 19.6 x 10^8 Pa (B) 19.6 x 10^-10 Pa (C) 19.6 x 10^10 Pa (D) 19.6 x 10^-8 Pa
**Ans: A**

**4.** [2004] If the terminal speed of a sphere of gold (density 19.5 kg/m^3) is 0.2 m/s in viscous liquid (density 1.5 kg/m^3), the terminal speed of a sphere of silver (density 10.5 kg/m^3) of the same size in the same liquid is:
(A) 0.4 m/s (B) 0.133 m/s (C) 0.1 m/s (D) 0.2 m/s
**Ans: C**

**5.** [2005] A 20 cm long capillary tube is dipped in water. The water rises up to 8 cm. If the entire arrangement is put in a freely falling elevator, the length of water column in the capillary tube is:
(A) 8 cm (B) 10 cm (C) 4 cm (D) 20 cm
**Ans: D**

**6.** [2006] If two soap bubbles of different radii are connected by a tube:
(A) air flows from the bigger to the smaller bubble (B) air flows from the smaller to bigger bubble till sizes become equal (C) air flows from the smaller to bigger bubble till the smaller one collapses (D) there is no flow of air
**Ans: C**

**7.** [2007] A spherical ball of radius R = 1.5 x 10^-4 m is dropped through glycerine. Its terminal speed measured is v_t = 2 x 10^-2 m/s. The viscosity of glycerine from Stokes' law is (rho_ball = 10.5 x 10^3 kg/m^3, rho_fluid = 1.5 x 10^3 kg/m^3, g = 10 m/s^2):
(A) 0.05 Pa.s (B) 0.5 Pa.s (C) 5 Pa.s (D) 50 Pa.s
**Ans: C**

**8.** [2008] A jar is filled with two non-mixing liquids 1 and 2 having densities rho_1 and rho_2, respectively. A solid ball, made of a material of density rho_3, is dropped in the jar. It comes to equilibrium in the position shown. Which of the following is true?
(A) rho_3 < rho_1 < rho_2 (B) rho_1 < rho_3 < rho_2 (C) rho_1 < rho_2 < rho_3 (D) rho_3 < rho_2 < rho_1
**Ans: B**

**9.** [2009] A capillary tube of radius r is immersed in water and water rises in it to a height h. Mass of water in the capillary is 5 g. Another capillary of radius 2r is immersed in water. The mass of water that will rise in this tube is:
(A) 5 g (B) 10 g (C) 20 g (D) 2.5 g
**Ans: B**

**10.** [2009] A body floats in a liquid with half its volume above the surface. If the body were placed in a vacuum it would have weight W. The upthrust on the body due to the liquid is:
(A) W (B) W/2 (C) 2W (D) zero
**Ans: A**

**11.** [2010] A ball is made of a material of density rho where rho_oil < rho < rho_water with rho_oil and rho_water representing the densities of oil and water. The ball is released from rest when it is totally inside oil. It will:
(A) sink to the bottom of oil (B) remain in equilibrium in oil (C) go to oil-water interface and stay there (D) go to the bottom of water
**Ans: C**

**12.** [2011] Water is flowing continuously from a tap having an internal diameter of 8 x 10^-3 m. The water velocity as it leaves the tap is 0.4 m/s. The diameter of the water stream at a distance 2 x 10^-1 m below the tap is approximately:
(A) 7.5 x 10^-3 m (B) 9.6 x 10^-3 m (C) 3.6 x 10^-3 m (D) 5.0 x 10^-3 m
**Ans: C**

**13.** [2012] A uniform body of density rho floats in a liquid of density 3*rho. The part of the body above the surface is:
(A) 2/3 (B) 3/5 (C) 1/3 (D) 1/5
**Ans: A**

**14.** [2013] Assume that a drop of liquid evaporates by decrease in its surface energy, so that its temperature remains unchanged. What should be the minimum radius of the drop for this to be possible? (T = surface tension, L = latent heat, rho = density):
(A) rho*L/T (B) sqrt(T/(rho*L)) (C) T/(rho*L) (D) 2T/(rho*L)
**Ans: D**

**15.** [2014] There is a circular tube in a vertical plane. Two liquids which do not mix and of densities d1 and d2 are filled in the tube. Each liquid subtends 90° angle at centre. The radius joining their interface makes angle theta with the vertical. If d1/d2 = ratio, then theta equals:
(A) tan^-1((d1-d2)/(d1+d2)) (B) tan^-1((d1+d2)/(d1-d2)) (C) pi/4 (D) pi/2
**Ans: A**

**16.** [2014] A uniform cylinder of length L and mass M having cross-sectional area A is suspended from its length from a fixed point by a massless spring such that it is half submerged in a liquid of density rho at equilibrium. The extension x0 of the spring is (spring constant k):
(A) (Mg - rho*A*L*g/2)/k (B) Mg/k (C) Mg(1-rho*AL/(2M))/k (D) Mg(1+rho*AL/(2M))/k
**Ans: A**

**17.** [2015] A wind with speed 40 m/s blows parallel to the roof of a house. The area of the roof is 250 m^2. Assuming the density of air to be 1.25 kg/m^3, the force exerted by the wind on the roof is:
(A) 2.5 x 10^5 N (B) 5 x 10^5 N (C) 1.25 x 10^5 N (D) 10^5 N
**Ans: C**

**18.** [2016] A U-tube with both ends open is partially filled with a liquid of density rho_1. A liquid of density rho_2, which does not mix with the first liquid, is poured into one side. It is found that the liquid levels differ by a height h in the two limbs when both liquids are in equilibrium. The height of the column of liquid of density rho_2 poured is:
(A) h*rho_1/(rho_1-rho_2) (B) h*rho_1/(rho_1+rho_2) (C) 2h*rho_1/(rho_1+rho_2) (D) h/(1+rho_1/rho_2)
**Ans: A**

**19.** [2017] A liquid in a beaker has temperature theta(t) at time t and theta_0 is temperature of surroundings. A graph of ln(theta - theta_0) vs t is a straight line. This is consistent with:
(A) Newton's law of cooling (B) Stefan's law of radiation (C) Fourier's law of heat conduction (D) Kirchhoff's law
**Ans: A**

**20.** [2017] Water flows into a large tank with flat bottom at the rate of 10^-4 m^3/s. Water is also leaking out of a hole of area 1 cm^2 at its bottom. If the height of water in tank reaches a steady state, its value is:
(A) 2.5 cm (B) 5 cm (C) 10 cm (D) 4 cm
**Ans: B**

**21.** [2018] The top of a water tank is open to air and its water level is maintained. It is giving water from the side at a steady rate. Water can emerge from three tap A, B and C (at heights H/4, H/2 and 3H/4 from bottom). The correct option is:
(A) the water from A hits the ground farthest (B) the water from C hits the ground farthest (C) the water from B hits the ground farthest (D) the water from all taps hits the ground at the same distance
**Ans: C**

**22.** [2018] Two tubes of radii r1 and r2, and lengths l1 and l2 respectively, are connected in series. If a stream of water flows through them in a streamlined fashion, and p1 and p2 are pressure differences across the two tubes, then p1/p2 is:
(A) l1*r2^4/(l2*r1^4) (B) l2*r1^4/(l1*r2^4) (C) l1*r2^2/(l2*r1^2) (D) l2*r1^2/(l1*r2^2)
**Ans: A**

**23.** [2019] A wooden block floating in a bucket of water has 4/5 of its volume submerged. When certain amount of oil is poured into the bucket, it is found that the block is just under the oil surface with half of its volume under water line and the rest under oil. The density of oil is:
(A) 0.5 x 10^3 kg/m^3 (B) 0.8 x 10^3 kg/m^3 (C) 0.6 x 10^3 kg/m^3 (D) 0.7 x 10^3 kg/m^3
**Ans: C**

**24.** [2019] Water from a pipe is coming at a rate of 100 litres per minute. If the radius of the pipe is 5 cm, the Reynolds number for the flow is of the order of (density = 1000 kg/m^3, viscosity = 1 mPa.s):
(A) 10^3 (B) 10^4 (C) 10^2 (D) 10^6
**Ans: B**

**25.** [2020] A soap bubble has radius R, surface tension T. The energy needed to double the radius is:
(A) 24*pi*R^2*T (B) 4*pi*R^2*T (C) 12*pi*R^2*T (D) 8*pi*R^2*T
**Ans: A**

**26.** [2020] The velocity of a small ball of mass m and density d when dropped in a container filled with glycerine (density rho_g) becomes constant after some time. If the viscosity of glycerine is eta, the viscous force acting on the ball is:
(A) mg(1 - rho_g/d) (B) mg(1 - d/rho_g) (C) mg*rho_g/d (D) mg*d/rho_g
**Ans: A**

**27.** [2020] A large open tank has two holes in its wall. One is a square hole of side a at a depth of x from the top, and the other is a circular hole of radius r at a depth 4x from the top. When the tank is completely filled with water, the quantities of water flowing out per second from both holes are the same. Then r is:
(A) a/sqrt(2*pi) (B) a*sqrt(2/pi) (C) a/(2*pi) (D) a*sqrt(2*pi)
**Ans: A**

**28.** [2021] A capillary tube of radius r is dipped inside a large vessel of water. A glass plate is placed on the top of the tube. The capillary rise is h. If the plate is removed, water:
(A) starts flowing out like a fountain (B) rises to h and then stays (C) will stay at height h (D) will rise slightly above h due to momentum
**Ans: C**

**29.** [2021] Two small drops of mercury, each of radius R, coalesce to form a single large drop. The ratio of the total surface energies before and after the change is:
(A) 2^(1/3):1 (B) 2^(2/3):1 (C) 2:1 (D) 1:1
**Ans: A**

**30.** [2022] A submarine experiences a pressure of 5.05 x 10^6 Pa at a depth d1. When the submarine moves to a smaller depth d2, it experiences a pressure of 8.08 x 10^5 Pa. Then d2/d1 is approximately (density of water = 10^3 kg/m^3, atmospheric pressure = 1.01 x 10^5 Pa):
(A) 0.14 (B) 0.2 (C) 0.16 (D) 0.7
**Ans: A**

**31.** [2022] A solid sphere is falling with terminal velocity v through a liquid. If it is broken into 27 identical solid spheres, the terminal velocity of each smaller sphere is:
(A) v/9 (B) v/3 (C) v/27 (D) 9v
**Ans: A**

**32.** [2022] A cylindrical vessel of cross-section A contains water to a height h. There is a hole in the bottom of radius a. The time in which it will be emptied is:
(A) (A/(pi*a^2))*sqrt(2h/g) (B) A*sqrt(2h/g)/(pi*a^2) (C) (A/a^2)*sqrt(2h/g) (D) sqrt(2h/g)
**Ans: A**

**33.** [2023] Water is flowing in a horizontal pipe of non-uniform cross-section. At the narrowest point, the velocity of water is 4 m/s and the pressure is 2 x 10^4 Pa. At another point, the velocity is 2 m/s. The pressure at this point is:
(A) 2.6 x 10^4 Pa (B) 3.2 x 10^4 Pa (C) 1.4 x 10^4 Pa (D) 4 x 10^4 Pa
**Ans: A**

**34.** [2023] A soap bubble (T = 25 x 10^-3 N/m) has an inner radius of 5 cm. The force due to surface tension is:
(A) 0.0314 N (B) 0.0157 N (C) 0.0628 N (D) 0.00785 N
**Ans: A**

**35.** [2023] Water rises in a capillary tube to a height of 4 cm. If the tube is tilted at 60° to the vertical, the length of water in the tube is:
(A) 4 cm (B) 8 cm (C) 2 cm (D) 6 cm
**Ans: B**

**36.** [2023] A sphere of mass m falls from rest through a viscous medium. Which of the following graphs correctly represents its velocity v vs time t?
(A) Exponential curve approaching terminal velocity (B) Straight line (C) Parabola (D) Horizontal line
**Ans: A**

**37.** [2023] Two identical drops each of radius r merge to form a bigger drop. The surface energy released is:
(A) 4*pi*r^2*T*(2 - 2^(2/3)) (B) 4*pi*r^2*T (C) 8*pi*r^2*T*(1 - 2^(-1/3)) (D) 4*pi*r^2*T*(2^(2/3) - 1)
**Ans: C**

**38.** [2023] A hydraulic press has a large piston of area 100 cm^2 and a small piston of area 10 cm^2. A force of 50 N is applied on the small piston. The force generated on the large piston is:
(A) 500 N (B) 50 N (C) 5 N (D) 5000 N
**Ans: A**

**Answer Key (JEE Main Archive complete):**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | B | A | A | C | D | C | C | B | B | A | C | C | A | D | A |

| Q# | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | A | C | A | A | B | C | A | C | B | A | A | A | C | A | A |

| Q# | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 |
|---|---|---|---|---|---|---|---|---|
| Ans | A | A | A | A | B | A | C | A |

---

### JEE ADVANCED ARCHIVE
*Source: JEE Advanced (Archive) -- questions from 1981-2023*

**SINGLE OPTION CORRECT TYPE**

**1.** [1981] A block of steel of size 5 cm x 5 cm x 5 cm is weighed in water. If the specific gravity of steel is 7, its apparent weight is:
(A) 6 x 5^3 x g (B) 4 x 5^3 x g (C) 5^3 x g/7 (D) 6 x 5^3 x g/7
**Ans: A**

**2.** [1986] A U-tube is filled with water and its two ends are sealed with two light pistons. If a child of weight W stands on one piston, the other piston rises through height h. The cross-section of U-tube is A. The weight of child is:
(A) rho*A*h (B) A*h + rho*g*A*h (C) A + rho*g*h (D) rho*g*A*h
**Ans: D**

**3.** [1995] A homogeneous solid cylinder of length L, cross-sectional area A/5 is immersed such that it floats with its axis vertical at the liquid-liquid interface with length L/4 in the denser liquid. The lower liquid of density d1 and the upper liquid of density d2 (d2 < d1). The density of the solid is:
(A) (d1 + 4*d2)/5 (B) (4*d1 + d2)/5 (C) (d1 + d2)/5 (D) (4*d1 + 3*d2)/5
**Ans: B**

**4.** [1997] A large open top container of negligible mass and uniform cross-sectional area A has a small hole of cross-sectional area a in its side wall near the bottom. The container is kept on a smooth horizontal floor and contains a liquid of density rho and mass m0. Assuming that the liquid starts flowing out horizontally through the hole at t = 0, the acceleration of the container is:
(A) 2*m0*g*a/(A*(m0 - rho*a*sqrt(2gh))) (B) 2*a*g/A (C) zero (D) 2*rho*a*g/A
**Ans: B**

**5.** [2001] A wooden block with a coin placed on its top, floats in water. The distances l and h are as shown. After the coin falls into the water:
(A) l decreases and h increases (B) l increases and h decreases (C) both l and h increase (D) both l and h decrease
**Ans: D**

**6.** [2005] Water is filled in a container up to height 3 m. A small hole of area a is punched in the wall of the container at a height 52.5 cm from the bottom. The cross-sectional area of the container is A. If a/A = 0.1 then v^2 is (where v is the velocity of water coming out of the hole):
(A) 50 (B) 51 (C) 48 (D) 52.5
**Ans: C**

**7.** [2007] A glass tube of uniform internal radius r has a valve separating the two identical ends. Initially, the valve is in a tightly closed position. End 1 has a hemispherical soap bubble of radius r. End 2 has sub-hemispherical soap bubble. Just after opening the valve:
(A) Air from end 1 flows toward end 2, no change in bubble radii (B) Air from end 1 flows toward end 2, radius of bubble at end 1 decreases (C) No change occurs (D) Air flows from end 2 to end 1
**Ans: D**

**8.** [2009] Two soap bubbles A and B are kept in a closed chamber where the air is maintained at pressure 8 N/m^2. The radii of A and B are 2 cm and 4 cm. Surface tension of soap-water used to make bubbles is 0.04 N/m. If nA and nB are the number of moles of air in bubbles A and B respectively then nA/nB is:
(A) 1 (B) 6 (C) 2 (D) 0.8
**Ans: D**

**9.** [2014] A person in a lift is holding a water jar, which has a small hole at the lower end of its side. When the lift is at rest, the water jet emerging from the hole hits the floor of the lift at a distance d from the jar. If the lift starts falling freely, the water will:
(A) hit the floor at a distance greater than d (B) hit the floor at a distance less than d (C) not come out of the hole (D) hit the floor at the same distance d
**Ans: C**

**10.** [2014] A thin uniform cylindrical shell, closed at both ends, is partially filled with water. It is floating vertically in water in half-submerged state. If rho_c is the relative density of the material of the shell with respect to water, then the correct statement is that the shell is:
(A) more than half-filled if rho_c is less than 0.5 (B) more than half-filled if rho_c is more than 1.0 (C) half-filled (D) less than half-filled if rho_c is less than 0.5
**Ans: A**

**MULTIPLE OPTIONS CORRECT TYPE**

**\*11.** [2006] A solid sphere of radius R and density rho is attached to one end of a massless spring of force constant k. The other end of the spring is connected to another solid sphere of radius R and density 3*rho. The arrangement is placed in a liquid of density 2*rho and allowed to reach equilibrium:
(A) the net elongation of the spring is 4*pi*R^3*rho*g/(3k) (B) the net elongation of the spring is 8*pi*R^3*rho*g/(3k) (C) the light sphere is partially submerged (D) the light sphere is completely submerged
**Ans: A, D**

**\*12.** [2013] A solid cylinder P rolls without slipping inside a cylindrical surface of larger radius. A hollow cylinder Q also rolls without slipping inside the same surface. Their time periods of small oscillations are T_P and T_Q. Then:
(A) T_P > T_Q (B) T_P < T_Q (C) T_P = T_Q (D) Cannot determine without masses
**Ans: A**

**\*13.** [2015] In the figure, the weights are W1 = W, W2 = W/2, W3 = W/3 and the pulleys are frictionless. When the system is in equilibrium:
(A) The tensions in the string connecting W1 and W2 is W/3 (B) The tensions in the string connecting W2 and W3 is W/3 (C) W1 moves up (D) W2 moves down
**Ans: -- (depends on specific figure configuration)**

**\*14.** [2018] A cylindrical capillary tube of 0.2 mm radius is made by joining two capillaries T1 and T2 of different materials having water contact angles of 0° and 60° respectively. The capillary T2 is sufficiently long. With T1 and T2 vertical, when water is filled:
(A) There is a rise of height h = 2T/(rho*g*(0.2x10^-3)) in T1 (B) In T2, height h = T/(rho*g*(0.2x10^-3)) (C) In T1, meniscus is concave (D) In T2, meniscus has radius 0.4 mm
**Ans: A, C, D**

**ASSERTION AND REASON TYPE**

**15.** [2008] Statement-I: The stream of water flowing at high speed from a garden hose pipe tends to spread like a fountain when held vertically up, but tends to narrow when held vertically down.
Statement-II: In any steady flow of an incompressible fluid, the volume flow rate remains constant.
(A) Both true, II explains I (B) Both true, II does not explain I (C) I true, II false (D) I false, II true
**Ans: A**

**MATCH MATRIX TYPE**

**16.** [2019] Match the following for a body partially/fully submerged in a liquid:
List I: (P) Body floats with part above surface; (Q) Body sinks; (R) Body is neutrally buoyant; (S) Body pushed down and released, oscillates
List II: (1) rho_body < rho_liquid; (2) rho_body > rho_liquid; (3) rho_body = rho_liquid; (4) Restoring force proportional to displacement
**Ans: P-1, Q-2, R-3, S-4**

**NUMERICAL ANSWER TYPE**

**17.** [1986] A vessel contains oil (density 0.8 g/cm^3) over mercury (density 13.6 g/cm^3). A homogeneous sphere floats with half in oil and half in mercury. The density of the sphere is _________ g/cm^3. **Ans: 7.2**

**18.** [2004] A container of large uniform cross-section A resting on a horizontal surface holds two immiscible non-viscous and incompressible liquids of densities d and 2d, each of height H/2. The lower density liquid is open to the atmosphere having pressure P0. A homogeneous solid cylinder of length L (L < H/2), cross-sectional area A/5 is immersed such that it floats with its axis vertical at the liquid-liquid interface with length L/4 in the denser liquid. Determine the density of the solid. **Ans: (d1 + 4d2)/5 = d(1+4*2)/5 = 9d/5**

**19.** [2010] Two soap bubbles of radii 2 cm and 4 cm merge in vacuum. Find the radius of the resultant bubble. **Ans: cube_root(72) cm = 2*cube_root(9) cm**

**20.** [2011] A cylindrical vessel of height 500 mm has an orifice (small hole) at its bottom. The orifice is initially closed and water is filled up to height H. Now the top is completely sealed and the orifice at the bottom is opened. Some water comes out and the water level falls to height H1. Neglect the effect of atmospheric pressure. Find the value of H1. (Use P_atm = 10^5 Pa, rho = 10^3 kg/m^3, g = 10 m/s^2). **Ans: 200 mm (or 0.2 m)**

**21.** [2014] A tennis ball is dropped from height h. If the coefficient of restitution is e, the ball bounces to height e^2*h. A steel ball falls through a column of viscous liquid. The ratio of distance the ball rises after leaving the liquid to the depth of the column is related to drag. The terminal velocity of the sphere in the liquid depends on _________ **Ans: r^2 (radius squared)**

**22.** [2016] Consider two solid spheres P and Q each of density 8 g/cm^3 and diameters 1 cm and 0.5 cm respectively, dropped simultaneously in a liquid of density 0.5 g/cm^3 and viscosity 6.6 Pa.s. The ratio of terminal velocity of P to Q is: **Ans: 4**

**23.** [2019] A liquid at 30°C is poured very slowly into a calorimeter that is at temperature 110°C. The boiling point of the liquid is 80°C. The temperature T (in °C) vs time t graph best represents:
**Ans: T decreases to 80°C, stays at 80°C (phase transition), then drops further**

**FILL IN THE BLANKS TYPE**

**24.** [1983] A boat floats in a swimming pool. A person in the boat drops a stone in the pool. The level of water in the pool _______. **Ans: decreases**

**25.** [1987] A cylinder of height 20 m is completely filled with water. The velocity of efflux of water through a small hole on the side wall of the cylinder near the bottom is _______. **Ans: 20 m/s**

**26.** [1997] A large tank is filled with two liquids of specific gravities 2*sigma and sigma. Two holes are made on the wall of the tank. The ratio of distances from the top at which the liquids emerge with equal range is _______. **Ans: -- (based on geometry)**

**TRUE/FALSE TYPE**

**27.** [1984] A barometer made of a very narrow tube is placed at normal temperature and pressure. The coefficient of volume expansion of mercury is 0.00018/°C and that of the tube is negligible. The temperature of mercury in the barometer is now raised by 1°C but the temperature of the atmosphere does not change. Then the mercury height in the tube remains unchanged. **Ans: True**

**28.** [1989] Water in a closed tube is heated with one arm vertically placed above the lamp. Water will begin to circulate along the tube in counter-clockwise direction. **Ans: True**

**Answer Key (JEE Advanced Archive complete):**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | A | D | B | B | D | C | D | D | C | A | AD | A | -- | ACD | A |

| Q# | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | P1Q2R3S4 | 7.2 | 9d/5 | 2*cbrt(9) | 200mm | r^2 | 4 | 80°C plateau | decreases | 20 m/s | -- | True | True |
