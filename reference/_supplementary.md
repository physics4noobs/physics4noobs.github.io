# Supplementary: Vectors, Units & Dimensions, Math Tools, Experiments

## Overview

This supplementary guide covers foundational physics concepts essential for mechanics and measurement. **Part I** covers vector mathematics and operations—including representation, addition, dot and cross products, components, and equilibrium applications. **Part II** addresses units and dimensions systematically—introducing physical quantities, SI system, dimensional analysis, significant figures, and error propagation. The vector section emphasizes graphical and algebraic problem-solving techniques with real-world force applications, while the units section provides tools for dimensional correctness, unit conversion, and measurement accuracy assessment. **Parts III and IV** will address advanced mathematical tools and experimental techniques in subsequent materials.

---

# Part I: Vectors

## 1. Vector Representation and Basic Operations

### Concepts
- A **scalar** is a quantity with magnitude only (e.g., mass, speed, energy, temperature)
- A **vector** is a quantity with both magnitude and direction (e.g., displacement, velocity, force, acceleration)
- Vectors are represented geometrically as directed line segments (arrows)
- The length of the arrow represents magnitude; the direction of the arrow represents the direction
- Vectors are written as `a⃗` or **a** in bold, while their magnitudes are `|a⃗|` or simply `a`

### Formulas
- `|a⃗| = √(aₓ² + aᵧ²)` - magnitude from components
- `a⃗ = aₓî + aᵧĵ` - vector in component form
- `aₓ = a cos θ` - x-component
- `aᵧ = a sin θ` - y-component
- `k·a⃗ = k|a⃗|` (direction same if k > 0, opposite if k < 0) - scalar multiplication
- `−a⃗` has same magnitude but opposite direction as `a⃗`

### Important Notes
- Unit vectors **î**, **ĵ**, **k̂** represent directions along +X, +Y, +Z axes respectively, each with magnitude 1
- Parallel arrows of equal length and same direction represent the same vector
- Two parallel arrows of equal length but opposite direction represent opposite vectors: `|a⃗| = |−a⃗|`
- Angle θ is always measured from the positive X-axis
- In a coordinate system, a vector's position is irrelevant; only magnitude and direction matter

### Worked Example
**Q:** A vector `a⃗` has magnitude 5 units and makes an angle of 60° with the positive X-axis. Express it in component form.

**A:**
- `aₓ = 5 cos 60° = 5 × 0.5 = 2.5 units`
- `aᵧ = 5 sin 60° = 5 × (√3/2) = 2.5√3 units`
- Therefore, `a⃗ = 2.5î + 2.5√3ĵ`

---

## 2. Vector Addition and Resultant

### Concepts
- Vector addition yields a **resultant** vector
- **Collinear vectors** (same or opposite direction): add magnitudes if same direction; subtract if opposite
- **Non-collinear vectors** follow the **triangle law** or **parallelogram law**
- Triangle law: if vectors form two sides of a triangle, the resultant is the third side
- Parallelogram law: if vectors are adjacent sides of a parallelogram, the resultant is the diagonal through the common vertex

### Formulas
- Collinear (same direction): `R⃗ = a⃗ + b⃗` where `|R⃗| = |a⃗| + |b⃗|`
- Collinear (opposite directions): `|R⃗| = ||a⃗| − |b⃗||`
- Parallelogram law magnitude: `R = √(P² + Q² + 2PQ cos θ)` where θ is angle between vectors
- Resultant direction: `tan α = (Q sin θ)/(P + Q cos θ)` (angle with first vector)
- Minimum resultant (opposite directions): `Rₘᵢₙ = ||a⃗| − |b⃗||`
- Maximum resultant (same direction): `Rₘₐₓ = |a⃗| + |b⃗|`

### Important Notes
- For vectors at angle θ between them: `Rₘᵢₙ ≤ R ≤ Rₘₐₓ` always holds
- If three collinear vectors sum to zero, the sum of magnitudes of two equals the magnitude of the third
- If three non-collinear vectors sum to zero, they can be represented as sides of a triangle (triangle inequality)
- Commutative property: `a⃗ + b⃗ = b⃗ + a⃗`
- Associative property: `(a⃗ + b⃗) + c⃗ = a⃗ + (b⃗ + c⃗)`

### Worked Example
**Q:** Two forces of magnitude 7 N and 5 N act on a particle at an angle of 60° to each other. Find the magnitude and direction of the resultant.

**A:**
- Using `R = √(P² + Q² + 2PQ cos θ)` with P = 7, Q = 5, θ = 60°:
- `R = √(49 + 25 + 2×7×5×cos 60°)`
- `R = √(49 + 25 + 70×0.5) = √(74 + 35) = √109 ≈ 10.44 N`
- Direction: `tan α = (5 sin 60°)/(7 + 5 cos 60°) = (5×√3/2)/(7 + 2.5) = 2.5√3/9.5`
- `α ≈ 25.1°` from the 7 N force

---

## 3. Vector Components and Resolution

### Concepts
- Any vector can be **resolved** into components along perpendicular axes (X and Y)
- Components can be along any two perpendicular directions, not necessarily horizontal/vertical
- The X-component is parallel to the X-axis; the Y-component is parallel to the Y-axis
- Resolving a vector into components is the opposite of combining components to form a resultant
- Magnitude is preserved: `|a⃗|² = aₓ² + aᵧ²` (Pythagorean theorem)

### Formulas
- `aₓ = a cos θ` - X-component (a is magnitude, θ is angle with X-axis)
- `aᵧ = a sin θ` - Y-component
- `a = √(aₓ² + aᵧ²)` - magnitude from components
- `tan θ = aᵧ/aₓ` - angle with X-axis
- Vector form: `a⃗ = aₓî + aᵧĵ = a cos θ î + a sin θ ĵ`
- Components can be positive or negative depending on direction

### Important Notes
- When resolving at an arbitrary angle, the angle is always between the vector and the axis along which the cosine component is measured
- The angle always comes between the vector and its cosine component
- Components can be resolved along ANY two perpendicular axes, providing flexibility in problem-solving
- The vector can be reconstructed uniquely from its two perpendicular components

### Worked Example
**Q:** Resolve a vector of magnitude 10 units at 30° above the horizontal into components along horizontal and vertical directions.

**A:**
- Horizontal component: `aₓ = 10 cos 30° = 10 × (√3/2) = 5√3 units ≈ 8.66 units`
- Vertical component: `aᵧ = 10 sin 30° = 10 × 0.5 = 5 units`
- Verification: `√((5√3)² + 5²) = √(75 + 25) = √100 = 10 units ✓`

---

## 4. Vector Addition Using Components

### Concepts
- To add vectors using components: resolve each into X and Y components, add components separately, then find resultant
- X-components: add algebraically (considering signs)
- Y-components: add algebraically (considering signs)
- Resultant magnitude and direction determined from total components
- This method works for any number of vectors and avoids geometric construction errors

### Formulas
- `Rₓ = Σ(all X-components) = aₓ + bₓ + cₓ + ...`
- `Rᵧ = Σ(all Y-components) = aᵧ + bᵧ + cᵧ + ...`
- `R = √(Rₓ² + Rᵧ²)` - magnitude of resultant
- `tan θ = Rᵧ/Rₓ` - direction of resultant with X-axis
- If Rₓ is negative and/or Rᵧ is negative, resultant lies in appropriate quadrant

### Important Notes
- Components in opposite directions cancel partially
- Always account for signs when adding components
- The angle of the resultant is measured from the positive X-axis
- If Rₓ = 0, resultant is purely vertical (θ = 90° or 270°)
- If Rᵧ = 0, resultant is purely horizontal (θ = 0° or 180°)

### Worked Example
**Q:** Three forces act on a point: 8 N at 60° above horizontal, 10 N at 30° below horizontal, and 6 N along negative X-axis. Find the resultant.

**A:**
- Force 1: `Fₓ₁ = 8 cos 60° = 4 N`, `Fᵧ₁ = 8 sin 60° = 4√3 N`
- Force 2: `Fₓ₂ = 10 cos(-30°) = 5√3 N`, `Fᵧ₂ = 10 sin(-30°) = -5 N`
- Force 3: `Fₓ₃ = -6 N`, `Fᵧ₃ = 0 N`
- Totals: `Rₓ = 4 + 5√3 − 6 = −2 + 5√3 ≈ 6.66 N`
- `Rᵧ = 4√3 − 5 ≈ 1.93 N`
- `R = √((6.66)² + (1.93)²) ≈ 6.94 N`
- Direction: `tan θ = 1.93/6.66 ≈ 0.289`, `θ ≈ 16.1°` above X-axis

---

## 5. Equilibrium of Forces

### Concepts
- A particle is in **equilibrium** if it is at rest or moving with constant velocity
- For equilibrium, net force must be zero: `ΣF⃗ = 0`
- This means sum of X-components = 0 and sum of Y-components = 0
- Equilibrium conditions are used to find unknown forces or angles
- Common forces: weight (W = mg, downward), tension (T, along string), normal reaction (N, perpendicular to surface), friction (f, opposing motion)

### Formulas
- Equilibrium condition: `ΣFₓ = 0` and `ΣFᵧ = 0`
- Weight: `W = mg` (where g ≈ 9.8 m/s²)
- For two forces to balance a third: `F₁ + F₂ + F₃ = 0` (vector sum)
- If three forces balance, their resultant from any two equals opposite of the third

### Important Notes
- When drawing force diagrams, show ALL forces acting on the object
- Choose convenient X and Y axes to minimize components
- If an object is in equilibrium, tensions in strings connected to it can be found using component equations
- For three forces in equilibrium, they can be represented as sides of a triangle (with appropriate magnitude and direction)

### Worked Example
**Q:** Two strings attached to a 50 N weight make angles of 30° and 60° with the vertical. Find the tensions in the strings.

**A:**
- Let T₁ be tension at 30° from vertical, T₂ be tension at 60° from vertical
- X-component balance: `T₁ sin 30° = T₂ sin 60°`
- `T₁(0.5) = T₂(√3/2)`
- `T₁ = T₂√3`
- Y-component balance: `T₁ cos 30° + T₂ cos 60° = 50`
- `T₁(√3/2) + T₂(0.5) = 50`
- Substituting: `T₂√3(√3/2) + T₂(0.5) = 50`
- `1.5T₂ + 0.5T₂ = 50`
- `T₂ = 25 N`, `T₁ = 25√3 ≈ 43.3 N`

---

## 6. Dot Product (Scalar Product)

### Concepts
- The **scalar product** or **dot product** of two vectors `a⃗` and `b⃗` is a scalar (not a vector)
- It combines magnitude and angle between vectors
- Dot product is positive when angle is acute (< 90°), negative when obtuse (> 90°), zero when perpendicular
- Dot product represents the product of one vector's magnitude and the component of the other along it
- Used in calculating work done by a force, and determining angles between vectors

### Formulas
- `a⃗ · b⃗ = |a⃗| |b⃗| cos θ = ab cos θ` (where θ is angle between vectors)
- `a⃗ · b⃗ = aₓbₓ + aᵧbᵧ + aᵤbᵤ` (component form in 3D)
- `a⃗ · a⃗ = |a⃗|² = a²` (dot product of vector with itself)
- Commutative: `a⃗ · b⃗ = b⃗ · a⃗`
- Distributive: `a⃗ · (b⃗ + c⃗) = a⃗ · b⃗ + a⃗ · c⃗`
- Unit vectors: `î · î = ĵ · ĵ = k̂ · k̂ = 1`, `î · ĵ = î · k̂ = ĵ · k̂ = 0`
- Work done: `W = F⃗ · s⃗ = Fs cos θ` (F is force, s is displacement)

### Important Notes
- If `a⃗ · b⃗ = 0`, vectors are perpendicular
- If `a⃗ · b⃗ > 0`, angle between vectors is acute
- If `a⃗ · b⃗ < 0`, angle between vectors is obtuse
- Dot product is maximum when vectors are parallel (θ = 0°), minimum (most negative) when antiparallel (θ = 180°)
- For 2D: `a⃗ · b⃗ = ab cos θ = aₓbₓ + aᵧbᵧ`

### Worked Example
**Q:** Find the angle between vectors `a⃗ = 3î + 4ĵ` and `b⃗ = 4î − 3ĵ`.

**A:**
- `a⃗ · b⃗ = (3)(4) + (4)(−3) = 12 − 12 = 0`
- Since dot product is zero, vectors are perpendicular
- Verification: `cos θ = (a⃗ · b⃗)/(|a⃗| |b⃗|) = 0/(5 × 5) = 0`, so `θ = 90°` ✓

---

## 7. Cross Product (Vector Product)

### Concepts
- The **cross product** of two vectors produces another vector (unlike scalar product)
- Magnitude depends on angle between vectors and magnitudes
- Direction is perpendicular to both vectors, determined by right-hand rule
- If fingers rotate from first vector to second, thumb points in direction of cross product
- Cross product of parallel vectors is zero; maximum when vectors are perpendicular
- Used for finding torque, angular momentum, and areas of parallelograms

### Formulas
- `a⃗ × b⃗ = |a⃗| |b⃗| sin θ n̂ = ab sin θ n̂` (where n̂ is unit vector perpendicular to both)
- Magnitude: `|a⃗ × b⃗| = ab sin θ`
- Anti-commutative: `a⃗ × b⃗ = −(b⃗ × a⃗)` (reversing order reverses direction)
- Distributive: `a⃗ × (b⃗ + c⃗) = a⃗ × b⃗ + a⃗ × c⃗`
- Unit vectors: `î × ĵ = k̂`, `ĵ × k̂ = î`, `k̂ × î = ĵ`, `î × î = 0`
- Component form (3D): `a⃗ × b⃗ = (aᵧbᵤ − aᵤbᵧ)î + (aᵤbₓ − aₓbᵤ)ĵ + (aₓbᵧ − aᵧbₓ)k̂`
- Area of parallelogram: `Area = |a⃗ × b⃗|`
- Torque: `τ⃗ = r⃗ × F⃗ = rF sin θ` (r is position vector from axis, F is force)

### Important Notes
- If `a⃗ × b⃗ = 0`, vectors are parallel (collinear)
- Cross product is maximum when vectors are perpendicular
- Right-hand rule: point fingers along first vector, curl toward second vector, thumb points in direction of cross product
- For 2D vectors in the XY-plane, cross product points along Z-axis
- `a⃗ × a⃗ = 0` (magnitude zero since sin 0° = 0)
- Cross product is NOT commutative (order matters, reverses direction)

### Worked Example
**Q:** Find `a⃗ × b⃗` where `a⃗ = î − 2ĵ` and `b⃗ = 3î − 2ĵ`.

**A:**
- Using 2D formula (components in XY-plane, so aᵤ = bᵤ = 0):
- `a⃗ × b⃗ = (aₓbᵧ − aᵧbₓ)k̂ = ((1)(−2) − (−2)(3))k̂ = (−2 + 6)k̂ = 4k̂`
- Magnitude: `|a⃗ × b⃗| = 4 units`
- Direction: along positive Z-axis (out of page)

---

# Part II: Units & Dimensions

## 6. Fundamental and Derived Quantities

### Concepts
- **Physical quantity** = Numerical value × Unit (Q = n × u)
- If unit changes, numerical value changes inversely: n₁u₁ = n₂u₂ (product constant)
- **Fundamental quantities** are chosen as independent base quantities (e.g., length, mass, time)
- **Derived quantities** are expressed as combinations of fundamental quantities
- **Scalar quantities** have only magnitude (mass, energy, temperature, etc.)
- **Vector quantities** have magnitude and direction (force, velocity, displacement, etc.)
- **Dimensionless quantities** are ratios of similar quantities (angle, relative density, strain, etc.)

### Formulas
- `n₁u₁ = n₂u₂` - conservation of magnitude when changing units
- `n₂ = n₁(u₁/u₂)` - conversion between units
- Derived dimension: expressed as product of powers of fundamental dimensions
- Example: `[Force] = [Mass][Length][Time]⁻² = MLT⁻²`
- `[Acceleration] = LT⁻²`, `[Velocity] = LT⁻¹`, `[Work] = ML²T⁻²`

### Important Notes
- SI system: Length (m), Mass (kg), Time (s), Electric Current (A), Temperature (K), Amount of substance (mol), Luminous intensity (cd)
- CGS system: Length (cm), Mass (g), Time (s)
- FPS system: Length (ft), Mass (lb), Time (s)
- Larger unit → smaller numerical value (inverse relationship)
- Unit vector is dimensionless and has magnitude 1
- Angle requires a unit (degree, radian) despite being dimensionless ratio

### Worked Example
**Q:** Convert 100 cm² to m².

**A:**
- Using `n₁u₁ = n₂u₂`: `100 cm² × 1 = n₂ × m²`
- Since 1 m = 100 cm, then 1 m² = 10,000 cm²
- `100 cm² = (100/10000) m² = 0.01 m² = 10⁻² m²`

---

## 7. Dimensional Analysis and Unit Consistency

### Concepts
- **Dimensional analysis** checks correctness of physical equations using dimensions
- **Principle of homogeneity**: dimensions on both sides of equation must be identical
- Used to find units of derived quantities, check dimensional correctness, and convert between systems
- Dimensionally correct equation may or may not be physically correct (missing dimensionless constants)
- Cannot derive numerical constants or transcendental functions using dimensions alone

### Formulas
- For equation X = A ± B + C, we need `[X] = [A] = [B] = [C]` (same dimensions all terms)
- For equation X = AB/C, dimensions: `[X] = [A][B]/[C]`
- For finding units: write dimensional formula and substitute fundamental units
- Conversion between systems: `n₂ = n₁[M₁ᵃL₁ᵇT₁ᶜ]/[M₂ᵃL₂ᵇT₂ᶜ]` (for different systems)

### Important Notes
- Terms being added/subtracted must have same dimensions (cannot add mass to length)
- Numerical constants are dimensionless
- Arguments of trigonometric, exponential, logarithmic functions must be dimensionless
- Dimensional analysis cannot find dimensionless constants (like π, 2, 1/2)
- Method works for any system of units (CGS, SI, FPS)

### Worked Example
**Q:** Check if the equation `v² = u² + 2as` is dimensionally correct.

**A:**
- LHS: `[v²] = (LT⁻¹)² = L²T⁻²`
- RHS: `[u²] = L²T⁻², [2as] = 1 × (LT⁻²) × L = L²T⁻²`
- Both sides have dimension L²T⁻², so equation is dimensionally correct ✓
- Note: This checks dimension only, not the coefficient

---

## 8. Significant Figures and Precision

### Concepts
- **Significant figures** represent the precision of a measurement
- More significant figures indicate greater measurement accuracy
- Rules for counting significant figures:
  - All non-zero digits are significant
  - Zero between non-zero digits is significant
  - Leading zeros are NOT significant
  - Trailing zeros are significant only if decimal point is present
  - In scientific notation, only the coefficient digits are counted

### Formulas
- Example: 42.3 has three significant figures
- Example: 0.045 has two significant figures (leading zeros not counted)
- Example: 433.00 has five significant figures (trailing zeros after decimal are significant)
- Example: 1.32 × 10² has three significant figures

### Important Notes
- Rules for calculations:
  - Addition/Subtraction: answer has same number of decimal places as value with least decimal places
  - Multiplication/Division: answer has same number of significant figures as value with least significant figures
- Rounding rules:
  - If digit < 5: leave preceding digit unchanged
  - If digit > 5: increase preceding digit by 1
  - If digit = 5 followed by non-zero: increase preceding digit by 1
  - If digit = 5 followed by zero or nothing: make preceding digit even (banker's rounding)
- Order of magnitude: round to nearest power of 10

### Worked Example
**Q:** Add 33.3 cm (1 decimal place) + 3.11 cm (2 decimal places) + 0.313 cm (3 decimal places).

**A:**
- Sum = 36.723 cm
- Answer must have only 1 decimal place (least number among operands)
- Rounded result = 36.7 cm ✓

---

## 9. Unit Conversion and Consistency

### Concepts
- Converting between unit systems requires dimensional formula and unit ratios
- For a quantity with dimensional formula [Mᵃ Lᵇ Tᶜ]:
  - If n₁, M₁, L₁, T₁ are numerical value and units in system 1
  - If n₂, M₂, L₂, T₂ are numerical value and units in system 2
  - Then: `n₂ = n₁[M₁/M₂]ᵃ[L₁/L₂]ᵇ[T₁/T₂]ᶜ`
- Common conversions: 1 Newton = 10⁵ Dyne, 1 Joule = 10⁷ Erg

### Formulas
- General conversion: `n₂ = n₁[u₁/u₂]` for single dimension
- For multiple dimensions: `n₂ = n₁[M₁/M₂]ᵃ × [L₁/L₂]ᵇ × [T₁/T₂]ᶜ`
- Energy conversion: 1 MeV = 1.6 × 10⁻¹³ J
- Power conversion: 1 horse power = 746 W
- Practical units: 1 light-year = 1.6 km, 1 Ångström = 10⁻¹⁰ m

### Important Notes
- Always write dimensional formula before converting
- Carefully match fundamental units between systems
- Practical units (light-year, horse power) can be expressed in any system
- Conversion factors should be applied with correct powers
- Check dimensions before and after conversion

### Worked Example
**Q:** Convert 100 Dyne into Newton (CGS to SI).

**A:**
- Dimensional formula: `[Force] = MLT⁻²`
- In CGS: 1 g, 1 cm, 1 s
- In SI: 1 kg, 1 m, 1 s
- `n₂ = n₁[M₁/M₂] × [L₁/L₂] × [T₁/T₂]⁻²`
- `n₂ = 100 × [1g/1kg] × [1cm/1m] × [1s/1s]⁻²`
- `n₂ = 100 × [10⁻³] × [10⁻²] × 1 = 100 × 10⁻⁵ = 10⁻³ = 0.001 N`
- Or simply: 1 N = 10⁵ Dyne, so 100 Dyne = 10⁻³ N ✓

---

## 10. Error Analysis and Propagation

### Concepts
- **Absolute error** (Δa): magnitude of difference between true and measured values
- **Mean absolute error**: arithmetic mean of absolute errors in repeated measurements
- **Relative (fractional) error**: ratio of mean absolute error to mean value
- **Percentage error**: relative error expressed as percentage
- **Error propagation**: how individual measurement errors combine to affect final result
- Rules differ for sum/difference (absolute), product/quotient (relative), and powers

### Formulas
- Mean value: `aₘ = (a₁ + a₂ + ... + aₙ)/n`
- Absolute errors: `Δaᵢ = aₘ − aᵢ`
- Mean absolute error: `Δā = (|Δa₁| + |Δa₂| + ... + |Δaₙ|)/n`
- Relative error: `Δa/aₘ`
- Percentage error: `(Δa/aₘ) × 100%`

### Propagation Rules
- **Sum**: `x = a + b`, then `Δx = ±(Δa + Δb)` (absolute errors add)
- **Difference**: `x = a − b`, then `Δx = ±(Δa + Δb)` (absolute errors add)
- **Product**: `x = ab`, then `Δx/x = ±(Δa/a + Δb/b)` (relative errors add)
- **Division**: `x = a/b`, then `Δx/x = ±(Δa/a + Δb/b)` (relative errors add)
- **Power**: `x = aⁿbᵐ`, then `Δx/x = ±(n·Δa/a + m·Δb/b)` (weighted sum of relative errors)

### Important Notes
- Maximum error is used (worst-case scenario)
- Quantity with maximum power contributes most to error
- Error should be rounded to 1-2 significant figures
- Result of calculation should match precision of error
- Percentage error is independent of units

### Worked Example
**Q:** If length L = 5.0 ± 0.1 cm and mass M = 10 ± 1 g, find relative error in density `ρ = M/V` where `V = L³`.

**A:**
- V = L³, so `ΔV/V = 3(ΔL/L) = 3 × (0.1/5.0) = 0.06 = 6%`
- ρ = M/V, so `Δρ/ρ = (ΔM/M) + (ΔV/V) = (1/10) + 0.06 = 0.1 + 0.06 = 0.16 = 16%`
- Therefore, density has 16% relative error

---

---

# Part III: Basic Math Tools

## 11. Coordinate Geometry and Straight Lines

### Concepts
- **Cartesian coordinates** represent a point P as (x, y) where x is the perpendicular distance from the y-axis and y is the perpendicular distance from the x-axis
- **Distance between two points** A(x₁, y₁) and B(x₂, y₂) is found using the Pythagorean theorem
- **Midpoint** of a line segment joining two points divides it equally
- **Gradient (slope)** of a line measures its steepness and is constant for any two points on the line
- **Straight line equations** can be expressed in multiple forms: slope-intercept, two-intercept, or general form

### Formulas
- `Distance AB = √[(x₂ − x₁)² + (y₂ − y₁)²]` - distance between two points
- `Midpoint = ((x₁ + x₂)/2, (y₁ + y₂)/2)` - midpoint of segment
- `m = tan θ = (y₂ − y₁)/(x₂ − x₁)` - slope of a line (rise/run)
- `y = mx + c` - slope-intercept form (m = slope, c = y-intercept)
- `x/a + y/b = 1` - two-intercept form (a = x-intercept, b = y-intercept)
- `ax + by + c = 0` - general linear equation

### Important Notes
- The angle θ is measured from the positive X-axis in anticlockwise direction
- If θ is acute, slope is positive; if θ is obtuse, slope is negative
- Parallel lines have equal slopes; perpendicular lines have slopes whose product is −1
- The zero of the coordinate system is at the origin (0, 0)
- Parabola equations: `y = ax²` (opens up if a > 0, down if a < 0) or `x = ay²` (opens right if a > 0, left if a < 0)

---

## 12. Logarithms and Exponentials

### Concepts
- **Logarithm** is the reverse of power: if `a^k = c` then `log_a c = k` (where a > 0, a ≠ 1)
- **Common logarithm** has base 10: `log x = log₁₀ x`
- **Natural logarithm** has base e: `ln x = log_e x` (used extensively in physics)
- Logarithms convert multiplication into addition, making calculations easier
- **Exponential functions** describe growth/decay processes common in physics

### Formulas
- `log_a(xy) = log_a x + log_a y` - product rule
- `log_a(x/y) = log_a x − log_a y` - quotient rule
- `log_a x^p = p·log_a x` - power rule
- `log_a x = log_b x / log_b a` - change of base formula
- `If log_a c = k, then a^k = c` - definition of logarithm
- Graphs: `y = e^x` (exponential, always increasing), `y = ln x` (logarithm, defined for x > 0)

### Important Notes
- Common bases: base 10 for common logarithms, base e (≈2.718) for natural logarithms
- `log(1) = 0` and `ln(1) = 0` for any base
- `log(a^a) = a·log a` for any valid base
- Exponential and logarithmic functions are inverses of each other
- In physics problems, natural logarithm is preferred for calculus operations

---

## 13. Differentiation and Rates of Change

### Concepts
- **Derivative** measures the rate of change of a function with respect to a variable
- **Infinitesimal change** (Δx → 0) means a change so small it approaches zero but never equals it
- The derivative `dy/dx` represents the instantaneous rate of change or slope of the tangent line
- Differentiation is essential for finding velocity (rate of change of position), acceleration (rate of change of velocity), and other physical quantities
- Different functions have different differentiation rules

### Formulas
- `dy/dx = lim(Δx→0) [Δy/Δx] = lim(Δx→0) [f(x+Δx) − f(x)]/Δx` - definition of derivative
- `d/dx(x^n) = nx^(n−1)` - power rule
- `d/dx(sin x) = cos x`, `d/dx(cos x) = −sin x` - trigonometric derivatives
- `d/dx(e^x) = e^x`, `d/dx(a^x) = a^x·ln a` - exponential derivatives
- `d/dx(ln x) = 1/x`, `d/dx(log_a x) = 1/(x·ln a)` - logarithmic derivatives
- `d/dx[u + v] = du/dx + dv/dx` - addition rule
- `d/dx(uv) = u(dv/dx) + v(du/dx)` - product rule
- `d/dx[f(ax+b)] = a·df/dx` - chain rule for linear extension

### Important Notes
- If a function has constant value, its derivative is zero
- Second derivative `d²y/dx²` describes the rate of change of the first derivative (concavity)
- For position-time functions: first derivative gives velocity, second derivative gives acceleration
- The derivative at a point gives the slope of the tangent line at that point

---

## 14. Integration and Area Under Curves

### Concepts
- **Integration** is the reverse process of differentiation
- **Indefinite integral** represents a family of functions differing by a constant
- **Definite integral** calculates the area under a curve between two limits
- Integration is used to find area, displacement (integral of velocity), work done, and other accumulated quantities
- The constant of integration 'c' appears in indefinite integrals because differentiation of a constant is zero

### Formulas
- `∫x^n dx = x^(n+1)/(n+1) + c` (for n ≠ −1) - power rule integration
- `∫dx/x = ln x + c` - logarithmic integration
- `∫e^x dx = e^x + c` - exponential integration
- `∫sin x dx = −cos x + c`, `∫cos x dx = sin x + c` - trigonometric integration
- `∫sec² x dx = tan x + c`, `∫cosec² x dx = −cot x + c` - trigonometric identities
- `∫[f(x) + g(x)]dx = ∫f(x)dx + ∫g(x)dx` - sum rule
- `∫c·f(x)dx = c∫f(x)dx` - constant multiple rule
- `∫_a^b f(x)dx = [F(b) − F(a)]` - definite integral (where F is antiderivative of f)

### Important Notes
- Integration of a constant: `∫c dx = cx + c'`
- Definite integrals have specific numerical values (no constant term)
- Area under a curve from x = a to x = b equals the definite integral between these limits
- The antiderivative is the reverse of the derivative

---

# Part IV: Experiments & Errors

## 15. Least Count, Permissible Error, and Measurement Precision

### Concepts
- **Least count** is the smallest quantity an instrument can measure accurately
- **Permissible error** is the maximum error allowed due to instrument limitations
- Different instruments have different least counts: mm scale (1 mm), Vernier caliper (0.1 mm), screw gauge (0.01 mm), stop watch (0.1 s), thermometer (1°C)
- **Zero error** occurs when instrument reading is non-zero when measuring zero
- Measurement accuracy improves with smaller least counts

### Formulas
- `Maximum permissible error (Δf) = least count of instrument` - maximum error in single measurement
- `Permissible error = place value of last measured digit`
- For Vernier caliper: `L.C. = 1 M.S.D. − 1 V.S.D.` - least count formula
- For screw gauge: `L.C. = Pitch / Number of circular scale divisions`
- `Total reading = N + n × L.C.` - Vernier caliper reading (N = main scale reading, n = coinciding division)

### Important Notes
- Zero error must be algebraically subtracted from measured reading to get true reading
- If zero error is positive (to the right), it's subtracted; if negative (to the left), it's added
- Least count determines the precision of measurement
- More divisions on instrument scale lead to smaller least count and higher precision

---

## 16. Vernier Caliper and Screw Gauge

### Concepts
- **Vernier caliper** consists of a main scale (graduated in mm), a Vernier scale (with smaller divisions), metallic strip E, and moving jaws A and B
- **Main scale** reading is the mark to the left of the Vernier zero
- **Vernier scale** coincidence gives the fractional part
- **Screw gauge** (micrometer) uses the principle of micrometer screw for higher precision (0.01 mm)
- Circular scale of screw gauge is divided into 50 or 100 equal parts

### Formulas
- Vernier caliper L.C.: `L.C. = 1 M.S.D. − 1 V.S.D. = 1 mm − 0.9 mm = 0.1 mm = 0.01 cm`
- Vernier reading: `Reading = N + n(L.C.)` where N = main scale and n = Vernier division coinciding
- Screw gauge L.C.: `L.C. = Pitch/100` (if 100 divisions) or `L.C. = Pitch/50` (if 50 divisions)
- Typical screw gauge: `L.C. = 1 mm/100 = 0.01 mm = 10 μm`
- Screw gauge reading: `Reading = M.S.R. + n(L.C.)` where M.S.R. = linear scale and n = circular scale reading

### Important Notes
- **Zero error in Vernier**: If zero of Vernier lies to the right, error is positive; to the left, error is negative
- **Back lash error in screw gauge**: Due to loose fitting of the thread; minimize by always rotating screw in same direction
- True reading = Measured reading − Zero error (algebraic subtraction)
- Measurement of external diameter uses outer jaws; internal diameter uses inner jaws; depth uses strip E

---

## 17. Simple Pendulum and Time Period Measurement

### Concepts
- **Simple pendulum** consists of a small spherical bob attached to a thread suspended from a fixed point
- **Time period (T)** is the time for one complete oscillation
- Motion is approximately simple harmonic (SHM) for small amplitudes
- Relation between time period, length, and gravitational acceleration: `T = 2π√(L/g)`
- **Errors in measurement** arise from finite amplitude, length measurement, and time measurement

### Formulas
- `T = 2π√(L/g)` - time period formula
- `g = 4π²L/T²` - calculating gravitational acceleration
- `Δg/g = ΔL/L + 2(ΔT/T)` - error propagation for g
- Total time for n oscillations measured with least count Δt gives period: `T = (total time)/n`
- Error in T: `ΔT = Δt/n` where Δt is least count of measuring instrument

### Important Notes
- Amplitude should be small (less than 15°) to ensure approximately SHM
- Use large number of oscillations (e.g., 50) to minimize error in period measurement
- Both length and time measurements contribute to error in g determination
- Time period is independent of mass of bob but depends on length and g
- Gravitational acceleration can be determined experimentally using this method

---

## 18. Young's Modulus Determination (Searle's Method)

### Concepts
- **Young's modulus (Y)** measures the stiffness of a material (resistance to elongation)
- **Searle's apparatus** uses two parallel wires: one experimental wire P (with variable load) and one reference wire Q (constant length)
- **Stress** is the force per unit area causing deformation
- **Strain** is the fractional change in length
- Young's modulus = Stress/Strain

### Formulas
- `Y = Stress/Strain = (Mg/πr²)/(ΔL/L) = MgL/(πr²ΔL)`
- `Stress = Mg/πr²` where M = mass of load, g = acceleration due to gravity, r = wire radius
- `Strain = ΔL/L` where ΔL = elongation, L = original length
- `ΔY/Y = ΔL/L + 2(ΔD/D) + ΔL_extension/ΔL` - relative error formula
- Percentage error: `(ΔY/Y) × 100%`

### Important Notes
- Diameter of wire measured using screw gauge (least count 0.001 cm)
- Length measured using meter scale (least count 0.1 cm)
- Extension measured using micrometer screw (least count 0.001 cm)
- Extension is measured using a sensitive screw gauge attached to the apparatus
- Keep load below half the breaking force to ensure elastic deformation
- Systematic errors arise from temperature changes and wire non-uniformity

---

## 19. Specific Heat Capacity Using Calorimeter

### Concepts
- **Calorimeter** is an insulated vessel used to measure heat transfer
- **Specific heat capacity (S)** is the heat required to raise temperature of unit mass by 1°C
- **Heat exchange principle**: Heat lost by hot object = Heat gained by calorimeter + liquid
- Electrical heating coil provides known heat: `Q = Vit` (voltage × current × time)
- Method eliminates need to know specific heat of calorimeter material

### Formulas
- `S_liquid = Vit / [m₂(θ_f − θ₀) − m₁S_c(θ_f − θ_0)]` - specific heat from electrical heating
- Heat energy supplied: `Q = Vit` (V = voltage, i = current, t = time in seconds)
- `S_liquid = Heat supplied / [mass × temperature change]`
- Error analysis: `ΔS/S = ΔV/V + Δi/i + Δt/t + Δm/m + Δ(θ_f − θ_0)/(θ_f − θ_0)`
- Percentage error: `(ΔS/S) × 100%`

### Important Notes
- Insulation minimizes heat loss to surroundings
- Continuous stirring ensures uniform temperature distribution
- Time for heating should be sufficient for accurate temperature measurement
- Thermometer least count: typically 1°C (but precision thermometers have 0.1°C)
- Water equivalent of calorimeter must be known if not using cancellation method
- Room temperature θ₀ and final temperature θ_f are carefully recorded

---

## 20. Focal Length Using U-V Method and Optical Bench

### Concepts
- **U-V method** determines focal length by measuring object distance (u) and image distance (v)
- **Lens formula**: `1/f = 1/u + 1/v` where f is focal length
- **Optical bench** has a scale with holder for lens and movable holders for object and image
- **Real image** is formed on a screen; **virtual image** cannot be projected on screen
- For convex lens, both real and virtual images are possible depending on object position

### Formulas
- `1/f = 1/u + 1/v` - lens formula (Gaussian form)
- `1/u + 1/v = 1/f` rearranged as: `f = uv/(u+v)`
- `Δf/f² = (Δu/u² + Δv/v²)` - error in focal length
- `(Δf)_max = (Δu/u² + Δv/v²) × f²` - maximum permissible error
- **Parallax error** occurs when object and image don't lie on bench axis
- **Index error** arises from mismatch between index marks and lens/object positions

### Important Notes
- Parallax is minimized by displacing eye position until object and image images coincide
- Index error remains constant and must be corrected in every observation
- Index correction: e = observed distance − actual distance
- Use multiple values of u and v to reduce random errors
- Convex lens forms real image when object is beyond focal length (u > f)
- Error mainly arises from imprecise position determination on the optical bench

---

## 21. Resonance Column and Speed of Sound

### Concepts
- **Resonance column** is a glass tube closed at one end, filled with water to variable heights
- **Resonance** occurs when frequency of tuning fork matches natural frequency of air column
- First resonance at length `l₁ = v/(4f₀)`, second resonance at `l₂ = 3v/(4f₀)`
- **End correction** accounts for air column extending slightly beyond tube end
- Difference between successive resonance lengths: `Δl = l₂ − l₁ = v/(2f₀)`

### Formulas
- `Speed of sound v = 2f₀(l₂ − l₁)` - from difference in resonance lengths
- `End correction ε = v/(4f₀) − l₁` where l₁ is first resonance length
- Effective length: `l_eff = l + ε` (l is measured length)
- For first mode: `l₁ + ε = v/(4f₀)`, for second mode: `l₂ + ε = 3v/(4f₀)`
- Temperature dependence: `v ∝ √T` where T is absolute temperature

### Important Notes
- Tuning fork frequency remains constant but speed varies with temperature
- If temperature changes during experiment, calculate speed at that temperature
- Water level falls as air column increases; record exact position for each resonance
- Keep tuning fork at fixed distance from tube; same fork must be used throughout
- Maximum error arises from uncertainty in measuring l₂ − l₁ and frequency

---

## 22. Ohm's Law and Resistance Measurement

### Concepts
- **Ohm's Law**: V = IR (voltage = current × resistance)
- **Verification** requires measuring current through and voltage across a resistor
- **Ammeter** (low resistance) measures current; **Voltmeter** (high resistance) measures potential difference
- Errors arise from finite resistances of meters and Joule heating effect
- **Specific resistance (ρ)** of a wire: `ρ = πr²R/L` where r is radius, L is length

### Formulas
- `R = V/I` - Ohm's law rearranged
- `ρ = πD²R/(4L)` - specific resistance formula (D = diameter, L = length)
- `Δρ/ρ = 2(ΔD/D) + ΔR/R + ΔL/L` - error in specific resistance
- Maximum permissible error: `(Δρ/ρ)_max = 2(ΔD/D) + ΔL/L + ΔV/V + ΔI/I`
- Voltage-current graph should be linear passing through origin (ideal)

### Important Notes
- Graph of V versus I determines resistance from slope
- Systematic errors: current through voltmeter (finite resistance), Joule heating (increases resistance with temperature)
- Minimize heating by switching circuit on briefly
- Use thick connecting wires to reduce wire resistance errors
- Diameter measurement using screw gauge gives significant uncertainty contribution
- Heating effect minimized by using lower currents and switching on for short periods

---

## 23. Meter Bridge and Resistance Measurement

### Concepts
- **Meter bridge** is a variant of Wheatstone bridge for measuring unknown resistance
- Unknown resistance R is in one gap, known resistance S in other gap
- **Balancing point** occurs when no current flows through galvanometer
- At balance: `P/Q = R/S` where P and Q are ratio arms (usually 1:1, 1:10, 1:100, etc.)
- **End corrections** account for extra resistance at gaps A and B

### Formulas
- `R/S = l/(100−l)` - meter bridge balance equation at point l cm from end A
- `R = S × l/(100−l)` - resistance calculation
- End corrections: `R₁ = l₁ + α` and `R₂ = l₂ + β` (α and β are end corrections)
- Without end correction: `(ΔR/R)_max = Δl/(l(100−l))` when l = 50 cm (minimum error)
- **Error in ρ**: `Δρ/ρ = 2(Δr/r) + ΔL/L + Δl/l + Δl/(100−l)`

### Important Notes
- Balance point l should be between 40−60 cm for minimum error
- If unbalanced, reverse positions of R and S to check consistency
- Heating effect minimized by connecting rheostat with key K₁
- Jockey taps carefully to avoid disturbing contact; galvanometer key used momentarily
- End corrections estimated by balancing in two positions and solving simultaneously
- Major errors from non-uniform bridge wire resistance and connection resistance

---

## 24. Post Office Box (Wheatstone Bridge Box)

### Concepts
- **Post office box** measures unknown resistance using balanced Wheatstone bridge
- Contains three resistance arms: two ratio arms (AB and BC) and one variable arm (AD), unknown resistance in fourth arm (CD)
- Ratio arms contain standard resistances of 10Ω, 100Ω, 1000Ω (coarse adjustments)
- Variable arm contains 1Ω steps up to 5000Ω (fine adjustments)
- At balance: `PX = QR` where P and Q are selected ratio resistances

### Formulas
- `X = Q/P × R` - unknown resistance formula (at balance, no galvanometer deflection)
- Minimum measurable resistance: `X_min = (Q_min/P_max) × R_min = (10/1000) × 1 = 0.01Ω`
- Maximum measurable resistance: `X_max = (Q_max/P_min) × R_max = (1000/10) × 5000 = 1,111,100Ω`
- Percentage error decreases when using equal ratio arms (P = Q)

### Important Notes
- Initially estimate X by trying different ratio combinations: X should lie between Q/P × 1 and Q/P × 5000
- Once range narrowed, use appropriate ratio arm values
- Fine adjustments made after selecting coarse values to find exact balance
- No deflection in galvanometer at balance point
- Connecting wires, plugs, and contact resistance are major error sources
- Clean plugs and connections to reduce systematic errors
- Primary advantage: can measure very small (0.01Ω) and very large (>1MΩ) resistances

---
