# Mechanical Properties of Matter

## Overview
This chapter covers the mechanical behavior of solid materials under applied forces, focusing on elasticity (stress, strain, and elastic moduli), thermal expansion of solids and liquids, and related applications. These concepts are fundamental to understanding how materials deform, store elastic energy, and respond to temperature changes -- all frequently tested topics in JEE Main and Advanced.

---

## 1. Elasticity -- Basic Concepts

### Concepts
- **Deforming force**: An external force applied to a body that tends to change its size or shape
- **Restoring force**: The internal force that opposes deformation, arising from intermolecular forces. By Newton's third law, restoring force equals the deforming force in magnitude
- **Elasticity**: The property of a body to regain its original shape and size after the removal of the deforming force
- **Elastic material**: Returns to original shape when deforming forces are removed (e.g., steel, quartz)
- **Plastic material**: Remains permanently deformed after removal of deforming forces (e.g., putty, clay)
- Steel is more elastic than rubber because steel deforms less under the same applied force (higher Young's modulus)

### Important Notes
- Elasticity is a bulk property of matter, not an atomic property
- A perfectly rigid body has infinite elasticity (no deformation at all)
- No material is perfectly elastic or perfectly plastic; real materials exhibit both behaviors
- The restoring force exists only as long as the deforming force is applied

---

## 2. Stress and Strain

### Concepts

**Stress** is the internal restoring force per unit area developed inside a body when a deforming force is applied.

`Stress = F/A`

- Units: N/m^2 or Pascal (Pa)
- Dimensions: [ML^(-1)T^(-2)]
- Stress is NOT a vector -- it is a tensor quantity, but for JEE, treat it as a scalar with direction context

**Strain** is the ratio of change in dimension to the original dimension.

`Strain = Change in dimension / Original dimension`

- Strain is dimensionless (no units)
- Strain is always a ratio, so it is a pure number

### Types of Stress and Strain

**1. Longitudinal (Tensile/Compressive) Stress and Strain:**
- Tensile stress: `sigma = F/A` (force pulls the rod, stretching it)
- Compressive stress: `sigma = F/A` (force pushes the rod, compressing it)
- Longitudinal strain: `epsilon = Delta_l / l`
- Here F is the force applied normal to the cross-sectional area A, l is the original length, Delta_l is the change in length

**2. Volume Stress and Strain:**
- Volume stress = Pressure applied uniformly on all surfaces: `P = F/A`
- Volume strain: `epsilon_v = Delta_V / V`
- Delta_V is negative if volume decreases (compression)

**3. Shear Stress and Strain:**
- Shear stress: `tau = F/A` where F is tangential force parallel to the surface of area A
- Shear strain: `gamma = Delta_x / y = tan(theta) approx theta` (for small angles)
- Delta_x is the lateral displacement of the top face, y is the height of the block
- Shear stress changes the shape of the body, not its volume

### Key Diagram: Types of Stress
- **Tensile**: A rod with equal and opposite outward forces at each end. Rod elongates by Delta_l. [SVG-REF]
- **Compressive**: A rod with equal and opposite inward forces at each end. Rod shortens by Delta_l. [SVG-REF]
- **Volume**: A cube with uniform inward forces (pressure) on all faces. Volume decreases by Delta_V. [SVG-REF]
- **Shear**: A rectangular block fixed at the bottom. Tangential force F on top face displaces it horizontally by Delta_x. The block deforms into a parallelogram. Angle theta = Delta_x / y. [SVG-REF]

### Important Notes
- For a wire hanging under its own weight, the stress is NOT uniform -- it is maximum at the top (supports entire weight) and zero at the free end
- Tensile and compressive stresses are collectively called longitudinal stress
- A bob of mass m hanging from a wire of radius r creates longitudinal stress = `mg / (pi * r^2)`

---

## 3. Hooke's Law and Stress-Strain Curve

### Concepts
- **Hooke's Law**: Within the elastic limit, stress is directly proportional to strain
  - `Stress = E * Strain` where E is the modulus of elasticity
  - `stress proportional to strain`
- The ratio stress/strain is called the **modulus of elasticity** (units: Pa or N/m^2)

### Key Diagram: Stress-Strain Curve for a Ductile Material
- X-axis: Strain; Y-axis: Stress
- **Region O to A (Proportional Limit)**: Linear region where Hooke's law is obeyed. Slope = Young's modulus
- **Region A to B (Elastic Limit)**: Stress is no longer proportional to strain, but body still returns to original shape on unloading
- **Point B**: Elastic limit (also called yield point). Beyond this, permanent deformation occurs
- **Region B to D**: Plastic deformation region. The material does not return to original shape
- **Point D (Ultimate Tensile Strength)**: Maximum stress the material can withstand
- **Point E (Fracture Point)**: The material breaks
- The area under the stress-strain curve up to the elastic limit represents elastic potential energy per unit volume
- [SVG-REF]

### Important Notes
- **Brittle materials** (cast iron, glass): Fracture point is close to elastic limit; very little plastic deformation
- **Ductile materials** (copper, steel): Large plastic deformation region between elastic limit and fracture point
- **Elastomers** (rubber): Can be stretched to large strains but the stress-strain curve is not linear; they still return to original shape
- For JEE: The stress-strain curve is crucial for understanding material behavior qualitatively

---

## 4. Elastic Moduli

### Formulas

**1. Young's Modulus (Y):**

`Y = Longitudinal Stress / Longitudinal Strain = (F/A) / (Delta_l / l) = F*l / (A * Delta_l)`

- Units: N/m^2 (Pa)
- Applicable to: solids only (wires, rods, beams)
- Useful rearrangements:
  - `Delta_l = F*l / (A*Y)` -- elongation under force
  - `F = Y*A*(Delta_l / l)` -- force needed for given elongation
- Compare with spring: `F = k*x` where effective spring constant `k = Y*A/l`

**2. Bulk Modulus (K):**

`K = -P / (Delta_V / V) = -P*V / Delta_V`

- Units: N/m^2 (Pa)
- The negative sign ensures K is positive (volume decreases when pressure increases, so Delta_V is negative)
- Applicable to: solids, liquids, and gases
- **Compressibility** = `1/K` (reciprocal of bulk modulus)

**3. Shear Modulus / Modulus of Rigidity (eta):**

`eta = Shear Stress / Shear Strain = (F/A) / theta = F / (A * theta)`

- Units: N/m^2 (Pa)
- Applicable to: solids only (fluids cannot sustain shear stress)
- Also called modulus of rigidity

### Relation Between Y, K, and eta

`3/Y = 1/eta + 1/(3K)`

Or equivalently: `Y = 9K*eta / (3K + eta)`

### Poisson's Ratio (sigma)

`sigma = -(Lateral strain) / (Longitudinal strain) = -(Delta_d / d) / (Delta_l / l)`

- Dimensionless quantity
- Theoretical range: -1 to 0.5
- For most materials: 0.2 to 0.4
- Relation: `Y = 2*eta*(1 + sigma) = 3*K*(1 - 2*sigma)`

### Important Notes
- Y_steel > Y_rubber, hence steel is more elastic than rubber
- For a perfectly rigid body, all elastic moduli are infinite
- Bulk modulus of gases depends on the process (isothermal: K = P; adiabatic: K = gamma*P)
- Only bulk modulus is defined for fluids; Young's modulus and shear modulus are defined only for solids

### Worked Example
**Q:** A metal wire 75 cm long and 0.13 cm in diameter stretches 0.035 cm when a load of 8 kg is hung on its ends. Find the stress, strain, and Young's modulus.

**A:**
Step 1: Calculate stress.
`sigma = F/A = (8 * 9.8) / (pi * (6.5 * 10^(-4))^2)`
`sigma = 78.4 / (pi * 4.225 * 10^(-7))`
`sigma = 5.9 * 10^7 N/m^2`

Step 2: Calculate strain.
`epsilon = Delta_l / l = 0.035 / 75 = 4.67 * 10^(-4)`

Step 3: Calculate Young's modulus.
`Y = sigma / epsilon = (5.9 * 10^7) / (4.67 * 10^(-4))`
`Y = 1.27 * 10^11 N/m^2`

---

## 5. Elastic Potential Energy

### Concepts
- When an elastic body is deformed, work is done by the applied force. This work is stored as elastic potential energy.
- This energy is released when the body returns to its original shape.

### Formulas

**Energy stored per unit volume (energy density):**

`u = (1/2) * stress * strain = (1/2) * Y * (strain)^2 = (1/2) * (stress)^2 / Y`

**Total elastic energy stored in a rod:**

`U = (1/2) * Y * (Delta_l / l)^2 * (A * l) = (1/2) * Y * A * (Delta_l)^2 / l`

Or equivalently:

`U = (1/2) * F * Delta_l`

(Compare with spring PE = (1/2) * k * x^2, where k = YA/l and x = Delta_l)

### Important Notes
- The factor of 1/2 comes from the fact that force increases linearly from 0 to F as the wire stretches from 0 to Delta_l (area of triangle in F vs Delta_l graph)
- Energy density = area under stress-strain curve (within proportional limit)

### Worked Example
**Q:** A copper rod of length 2 m is stretched by 5 mm. If Y_copper = 1.2 * 10^11 N/m^2, specific heat S = 0.1 cal/(g * degC), and density d = 9.09 g/cc, calculate the rise in temperature if the stored elastic energy is converted into heat.

**A:**
Step 1: Energy stored per unit volume.
`u = (1/2) * Y * (Delta_l / l)^2 = (1/2) * (1.2 * 10^11) * (5 * 10^(-3) / 2)^2`
`u = (1/2) * (1.2 * 10^11) * (6.25 * 10^(-6)) = 3.75 * 10^5 J/m^3`

Step 2: Equate to heat energy per unit volume.
`u = d * S * Delta_T * (4.2)` (converting cal to J)
`3.75 * 10^5 = (9.09 * 10^3) * (0.1 * 10^3) * Delta_T * 4.2`
`Delta_T = 3.75 * 10^5 / (9.09 * 10^3 * 100 * 4.2) = 0.099 degC`

---

## 6. Torsion of a Cylinder

### Concepts
- When a cylinder (or wire) is fixed at one end and twisted at the other end by angle theta, it exerts a restoring torque opposing the twist
- This restoring torque is proportional to the angle of twist

### Formulas

**Restoring torque:**

`tau = (pi * eta * r^4) / (2 * l) * theta = C * theta`

Where:
- eta = modulus of rigidity (shear modulus)
- r = radius of the cylinder
- l = length of the cylinder
- theta = angle of twist (radians)
- `C = (pi * eta * r^4) / (2 * l)` is the **torsional rigidity**

### Important Notes
- A hollow shaft is stronger than a solid shaft of the same mass and material. For a hollow shaft: `tau = (pi * eta * (r2^4 - r1^4)) / (2 * l) * theta`
- For equal volume of material, the hollow shaft requires more torque to produce the same twist, making it more resistant to torsional deformation
- Torsional rigidity C is analogous to spring constant k

### Worked Example
**Q:** A cylinder of length 1.5 m and diameter 4 cm is fixed at one end. A tangential force of 4 * 10^5 N is applied at the other end. Calculate the twist if the modulus of rigidity is 6 * 10^10 N/m^2.

**A:**
Step 1: Applied torque = F * r = 4 * 10^5 * 0.02 = 8 * 10^3 N*m

Step 2: Equate to restoring torque.
`F * r = (pi * eta * r^4) / (2 * l) * theta`
`theta = (2 * l * F * r) / (pi * eta * r^4) = (2 * l * F) / (pi * eta * r^3)`
`theta = (2 * 1.5 * 4 * 10^5) / (pi * 6 * 10^10 * (0.02)^3)`
`theta = (1.2 * 10^6) / (pi * 6 * 10^10 * 8 * 10^(-6))`
`theta = 1.2 * 10^6 / (1.508 * 10^6) = 0.796 radians (approx 45.5 deg)`

---

## 7. Applications of Elasticity

### Elongation of a Wire Under Its Own Weight

For a uniform wire/rod of mass M, length l, cross-sectional area A, and Young's modulus Y hanging vertically:

`Delta_l = M*g*l / (2*A*Y) = (rho * g * l^2) / (2 * Y)`

- The stress varies linearly from 0 at the free end to Mg/A at the support
- Equivalent to a concentrated load of M/2 acting at the center (hence the factor of 2 in the denominator)
- The stress at the midpoint = Mg/(2A)

### Thermal Stress

When a rod is clamped between two rigid supports and the temperature changes by Delta_T:
- The rod tries to expand/contract but cannot
- A thermal stress is developed: `sigma = Y * alpha * Delta_T`
- The thermal force: `F = Y * A * alpha * Delta_T`
- If temperature increases, the stress is compressive; if temperature decreases, the stress is tensile

### Wire Supporting a Load at an Angle (Depression Problem)

A wire of length 2l, radius r, Young's modulus Y is stretched taut between two fixed points. A mass m is hung from the midpoint, producing a depression d.

`d = l * (mg / (pi * r^2 * Y))^(1/3)`

### Natural Length from Two Tension Measurements

If a wire has length l1 at tension T1 and length l2 at tension T2, the natural (unstretched) length is:

`l_0 = (l1 * T2 - l2 * T1) / (T2 - T1)`

### Important Notes
- For a rod supported by two wires A and B of different materials:
  - Equal stress condition: `F1/A1 = F2/A2` (same stress in both wires)
  - Equal strain condition: `F1/(A1*Y1) = F2/(A2*Y2)` (same elongation in both wires)
- When a load is placed at distance x from wire A on a rigid rod of length L: `F1 * x = F2 * (L - x)` (torque balance)

---

## 8. Thermal Expansion

### Concepts
- When a solid is heated, its length, surface area, and volume increase
- Three coefficients describe expansion: alpha (linear), beta (superficial/areal), gamma (volumetric/cubical)
- These coefficients are properties of the material

### Formulas

**Linear Expansion:**

`l2 = l1 * (1 + alpha * Delta_T)`

Where alpha = coefficient of linear expansion, Delta_T = T2 - T1

**Superficial (Areal) Expansion:**

`A2 = A1 * (1 + beta * Delta_T)`

Where beta = coefficient of superficial expansion

**Volume (Cubical) Expansion:**

`V2 = V1 * (1 + gamma * Delta_T)`

Where gamma = coefficient of cubical expansion

### Relation Between alpha, beta, and gamma

`beta = 2 * alpha`
`gamma = 3 * alpha`
`6 * alpha = 3 * beta = 2 * gamma`

### Density Change with Temperature

As temperature increases, volume increases but mass remains constant:

`d2 = d1 / (1 + gamma * Delta_T)`

For small gamma * Delta_T: `d2 approx d1 * (1 - gamma * Delta_T)`

### Key Diagram: Linear Expansion of a Rod
- A horizontal rod of original length l at temperature T1
- After heating to T2, the rod expands to length l + Delta_l
- Delta_l = l * alpha * (T2 - T1) is shown as the extra length added to one end
- [SVG-REF]

### Important Notes
- alpha, beta, gamma are typically very small (order of 10^(-5) to 10^(-6) per degC for solids)
- For anisotropic crystals: if alpha1 is the linear expansion coefficient in one direction and alpha2 in the perpendicular direction, then gamma = alpha1 + 2*alpha2
- Water has anomalous expansion: it contracts from 0 degC to 4 degC and expands above 4 degC. Maximum density of water is at 4 degC

---

## 9. Thermal Expansion Applications

### Heated Metallic Scale

When a metallic scale is heated, all markings expand proportionally:

`Actual length = Reading * (1 + alpha * Delta_T)`

- If the scale expands, each division becomes larger than the true unit
- A heated scale reads less than the actual length (it underestimates)
- A cooled scale reads more than the actual length (it overestimates)

### Difference of Lengths of Two Rods

For the difference in lengths of two rods to remain constant at all temperatures:

`l1 * alpha1 = l2 * alpha2`

### Pendulum Clock and Temperature

Time period of a simple pendulum: `T = 2*pi * sqrt(l/g)`

When temperature rises by Delta_T:
- The pendulum length increases, so the time period increases
- The clock runs slow (loses time)

**Time lost or gained per day:**

`Delta_t = (1/2) * alpha * Delta_T * 86400 seconds`

- Temperature rises: clock loses time (runs slow)
- Temperature falls: clock gains time (runs fast)

### Bimetallic Strip
- Two strips of different metals (different alpha values) bonded together
- On heating, the strip bends toward the metal with the smaller alpha (since the other metal expands more)
- Radius of curvature of bimetallic strip: `R = delta / ((alpha_c - alpha_t) * T)` where delta is the thickness of each strip

### Expansion of Liquids

Liquids expand only in volume (no linear or areal expansion). Two types:
- **Apparent expansion**: Observed expansion = expansion of liquid - expansion of container
  - `gamma_apparent = gamma_liquid - gamma_vessel`
- **Real expansion**: Actual expansion of the liquid
  - `gamma_real = gamma_apparent + gamma_vessel`

### Liquid Overflow from a Heated Container

When a container full of liquid is heated by Delta_T:

`Volume overflow = V * (gamma_liquid - gamma_vessel) * Delta_T`

If vessel expansion is neglected: `Overflow = V * gamma_liquid * Delta_T`

### Worked Example
**Q:** A glass flask of volume 1000 cm^3 at 0 degC is filled with mercury. When heated to 100 degC, 15.2 cm^3 of mercury overflows. If gamma_Hg = 1.82 * 10^(-4) / degC, find the coefficient of linear expansion of glass.

**A:**
Step 1: Mercury overflow = V * (gamma_Hg - gamma_glass) * Delta_T
`15.2 = 1000 * (1.82 * 10^(-4) - gamma_glass) * 100`

Step 2: Solve for gamma_glass.
`15.2 / (1000 * 100) = 1.82 * 10^(-4) - gamma_glass`
`1.52 * 10^(-4) = 1.82 * 10^(-4) - gamma_glass`
`gamma_glass = 0.30 * 10^(-4) = 3 * 10^(-5) / degC`

Step 3: Find alpha_glass.
`alpha_glass = gamma_glass / 3 = 1 * 10^(-5) / degC`

---

## 10. Stress-Strain Curve -- Detailed Analysis

### Concepts
- The stress-strain curve is obtained experimentally by gradually increasing the load on a specimen and measuring the resulting elongation
- The curve reveals the elastic and plastic behavior of the material

### Key Regions and Points

| Region/Point | Description |
|---|---|
| O to A | **Proportional limit**: Hooke's law valid, stress proportional to strain. Slope = Young's modulus |
| A to B | **Elastic limit**: Still elastic (returns to original shape), but not proportional |
| B | **Yield point**: Beyond this, permanent deformation begins |
| B to D | **Plastic region**: Material deforms permanently. Strain increases rapidly with small stress increase |
| D | **Ultimate tensile strength (UTS)**: Maximum stress the material can sustain |
| D to E | **Necking**: Cross-section reduces locally; stress appears to decrease |
| E | **Fracture point**: Material breaks |

### Material Comparison

| Property | Ductile (Steel, Cu) | Brittle (Glass, Cast Iron) | Elastomer (Rubber) |
|---|---|---|---|
| Plastic region | Large | Very small | Large strain, returns |
| Fracture strain | High | Low | Very high |
| UTS vs Yield | Well separated | Close together | No clear yield point |
| Young's modulus | High | High | Low |

### Important Notes
- The area under the stress-strain curve up to fracture = total energy absorbed per unit volume (toughness)
- The area under the curve within elastic limit = resilience (elastic energy stored per unit volume)
- Loading and unloading curves for rubber do not coincide -- this is called **elastic hysteresis**, and the area between the curves represents energy lost as heat per cycle

---

## Important Formulas Summary

### Elasticity
| Formula | Description |
|---|---|
| `sigma = F/A` | Stress (N/m^2) |
| `epsilon = Delta_l / l` | Longitudinal strain |
| `Y = (F * l) / (A * Delta_l)` | Young's modulus |
| `K = -P * V / Delta_V` | Bulk modulus |
| `eta = F / (A * theta)` | Shear modulus (rigidity) |
| `3/Y = 1/eta + 1/(3K)` | Relation between moduli |
| `u = (1/2) * stress * strain` | Elastic energy density |
| `U = (1/2) * F * Delta_l` | Total elastic PE |
| `Delta_l = Mgl / (2AY)` | Elongation under own weight |
| `sigma_thermal = Y * alpha * Delta_T` | Thermal stress |
| `tau = C * theta`, `C = pi*eta*r^4 / (2l)` | Torsion of cylinder |
| `l_0 = (l1*T2 - l2*T1)/(T2 - T1)` | Natural length of wire |

### Thermal Expansion
| Formula | Description |
|---|---|
| `l2 = l1(1 + alpha * Delta_T)` | Linear expansion |
| `A2 = A1(1 + beta * Delta_T)` | Areal expansion |
| `V2 = V1(1 + gamma * Delta_T)` | Volume expansion |
| `beta = 2*alpha`, `gamma = 3*alpha` | Coefficient relations |
| `d2 = d1 / (1 + gamma * Delta_T)` | Density with temperature |
| `Actual = Reading * (1 + alpha * Delta_T)` | Heated scale correction |
| `l1 * alpha1 = l2 * alpha2` | Constant length difference |
| `Delta_t = (1/2)*alpha*Delta_T*86400` | Clock error per day (seconds) |
| `gamma_real = gamma_apparent + gamma_vessel` | Liquid expansion |
| `Overflow = V*(gamma_liq - gamma_vessel)*Delta_T` | Liquid overflow |

---

## Questions

### ANSWER KEYS (Reference)

**Workbook Answer Key -- Level 1 (Q1-45)**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | D | A | C | B | D | A | C | B | D | A | C | B | A | D | C |

| Q# | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | B | D | A | C | B | D | A | B | C | D | A | C | B | D | A |

| Q# | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | C | B | A | D | C | B | A | D | B | C | A | D | C | B | A |

**Workbook Answer Key -- Level 2 (Q46-75)**

| Q# | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | 2 | 5 | 0.3 | 4 | 8 | 1.5 | 3 | 6 | 2 | 4 | 7 | 1 | 3 | 5 | 2 |

| Q# | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | C | B | A | AD | C | B | D | A | BC | D | C | B | A | CD | B |

**Workbook Answer Key -- Previous Years JEE Main (Q1-35)**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | B | D | A | C | B | D | A | C | B | D | A | C | B | D | A |

| Q# | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | C | B | D | A | C | B | D | A | C | B | A | D | C | B | A |

| Q# | 31 | 32 | 33 | 34 | 35 |
|---|---|---|---|---|---|
| Ans | D | B | A | C | D |

**Workbook Answer Key -- Previous Years JEE Advanced (Q1-30)**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | C | A | D | B | A | C | D | B | A | C | B | D | A | C | ABD |

| Q# | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | AC | BD | A | B | 2 | 3 | 0.5 | 1.5 | 4 | Steel | 6.28x10^-6/°C | 1.5 mm | True | False | 7 |

**Miscellaneous Exercise**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| Ans | A | C | B | D | A | C | B | D | A | CD |

---

### MECHANICAL PROPERTIES: LEVEL 0 (EASY)
*Source: DTS-0 (CBSE Pattern)*

**VSA: Very Short Answer Type (1 mark)**

**1.** Define stress and give its SI unit.

**2.** Which is more elastic -- steel or rubber? Why?

**3.** What is Poisson's ratio? What are its limits for an isotropic material?

**4.** Why do railway tracks have small gaps between successive rails?

**5.** A wire is stretched by a force. What type of energy is stored in the wire?

**SA-I: Short Answer Type I (2 marks)**

**6.** State Hooke's Law. Draw a stress-strain curve for a ductile material and label the elastic limit and yield point.

**7.** Define Young's modulus. A steel wire of length 2 m and cross-sectional area 1 mm^2 is stretched by 1 mm when a force of 100 N is applied. Calculate Young's modulus.

**8.** Explain why a hollow shaft is stronger than a solid shaft of the same mass and material.

**9.** A metal rod is clamped at both ends. If the temperature rises by Delta_T, derive the expression for the thermal stress developed.

**10.** What happens to the time period of a simple pendulum if the temperature increases? The pendulum rod has coefficient of linear expansion alpha.

**11.** Define coefficient of linear, superficial and volumetric expansion. How are they related?

**SA-II: Short Answer Type II (3 marks)**

**12.** Derive the expression for elastic potential energy stored per unit volume of a stretched wire (energy density).

**13.** Two wires of the same material have lengths in the ratio 1:2 and diameters in the ratio 2:1. They are stretched by the same force. Find the ratio of their extensions.

**14.** What is a stress-strain curve? Explain the terms: proportionality limit, elastic limit, yield point, breaking point, and ultimate tensile strength using a labelled diagram.

**15.** A composite rod is made of two rods of materials with coefficients of linear expansion alpha1 and alpha2, and lengths L1 and L2. Derive the effective coefficient of linear expansion of the composite rod.

**16.** A steel rod (alpha = 12 x 10^-6 /°C, Y = 2 x 10^11 Pa) of length 1 m and cross-sectional area 1 cm^2 is heated from 20°C to 120°C while being held rigid. Calculate: (i) the thermal stress, (ii) the compressive force, (iii) the energy stored.

**17.** Explain what happens to a steel wire when it is loaded beyond its elastic limit. Discuss elastic fatigue and elastic after-effect.

**LA: Long Answer Type (5 marks)**

**18.** (a) Define the three elastic moduli: Young's modulus (Y), Bulk modulus (B), and Shear modulus (G). (b) Derive the relation Y = 3B(1 - 2*sigma) where sigma is Poisson's ratio.

**19.** A metal wire of length L and radius r is suspended from a rigid support and a mass m hangs from its free end. Derive expressions for: (i) the elongation of the wire, (ii) the elastic potential energy stored in the wire. If the wire breaks when the extension is Delta_l, find the maximum load it can support.

**20.** An iron ring of mean diameter 10 cm and cross-section 1 cm^2 has to be fitted on a wooden wheel of mean diameter 10.1 cm. The coefficient of linear expansion of iron is 12 x 10^-6 /°C and Young's modulus is 2 x 10^11 Pa. Find: (i) the temperature to which the ring must be heated, (ii) the stress and force exerted by the ring after it cools back.

---

### MECHANICAL PROPERTIES: LEVEL 1
*Source: DTS-1 (Elasticity, Stress-Strain), DTS-2 (Elastic Moduli, Energy), DTS-3 (Thermal Expansion)*

#### DTS-1: Stress, Strain and Hooke's Law

**1.** A steel wire of length 4.7 m and cross-sectional area 3 x 10^-5 m^2 stretches by the same amount as a copper wire of length 3.5 m and cross-sectional area 4 x 10^-5 m^2 under a given load. The ratio of Young's modulus of steel to copper is:
(A) 1.79 (B) 1.97 (C) 2.38 (D) 0.56

**2.** When a rubber band is stretched by a distance x, it exerts a restoring force of magnitude F = ax + bx^2 where a and b are constants. The work done in stretching from x = 0 to x = L is:
(A) aL^2/2 + bL^3/3 (B) aL + bL^2 (C) a + 2bL (D) aL^2 + bL^3

**3.** The breaking stress of a wire depends on:
(A) length of the wire (B) radius of the wire (C) material of the wire (D) shape of cross-section

**4.** A wire elongates by l mm when a load W is hung from it. If the wire goes over a pulley and two weights W each are hung at the two ends, the elongation of the wire will be:
(A) l (B) 2l (C) zero (D) l/2

**5.** A uniform steel wire of cross-sectional area A and length L is suspended from a rigid support. If the wire extends by Delta_l under its own weight, the extension of the wire of same material but of length 2L and cross-sectional area 2A is:
(A) Delta_l (B) 2*Delta_l (C) Delta_l/2 (D) 4*Delta_l

**6.** The stress versus strain graphs for wires of two materials A and B are as shown. If YA and YB are the Young's moduli of the materials, then:
(A) YA > YB (B) YA < YB (C) YA = YB (D) cannot be determined

**7.** A wire of length L, area of cross-section A is hanging from a fixed support. The length of the wire changes to L1 when mass M is suspended from its free end. The expression for Young's modulus is:
(A) MgL/(A*L1) (B) MgL/(A*(L1-L)) (C) Mg(L1-L)/(A*L) (D) MgL1/(A*L)

**8.** A wire can sustain the weight of 20 kg before breaking. If the wire is cut into two equal halves, each half can sustain a weight of:
(A) 10 kg (B) 20 kg (C) 40 kg (D) 5 kg

**9.** Two wires A and B of the same material, having radii in the ratio 1:2 and carry loads in the ratio 1:4. The ratio of their extensions is:
(A) 1:1 (B) 1:2 (C) 1:4 (D) 4:1

**10.** If the temperature of a wire of length 1 m and area 1 cm^2 is increased from 0°C to 100°C without being allowed to extend, the force required will be (alpha = 10^-5/°C, Y = 10^11 N/m^2):
(A) 10^3 N (B) 10^4 N (C) 10^5 N (D) 10^2 N

**11.** A copper wire and a steel wire of same diameter are connected end to end. A deforming force F is applied to this composite wire, which causes a total elongation of 1 cm. The two wires will have:
(A) same stress and same strain (B) same stress and different strain (C) different stress and same strain (D) different stress and different strain

**12.** The Young's modulus of steel is twice that of brass. Two wires of same length and same area of cross section, one of steel and other of brass, are suspended from the same roof. If we want the lower ends of the wires to be at the same level, then the weight hung from the steel wire and brass wire must be in the ratio of:
(A) 1:1 (B) 1:2 (C) 2:1 (D) 4:1

**13.** The compressibility of water is 5 x 10^-10 m^2/N. The pressure required to increase the density by 0.1% is:
(A) 2 x 10^6 Pa (B) 2 x 10^7 Pa (C) 2 x 10^5 Pa (D) 2 x 10^8 Pa

**14.** A cube is subjected to a uniform volume compression. If each side is decreased by 1%, the bulk strain is:
(A) 0.01 (B) 0.06 (C) 0.02 (D) 0.03

**15.** The Poisson's ratio of a material is 0.5. If a force is applied to a wire of this material, there is a decrease in cross-sectional area by 4%. The percentage increase in length is:
(A) 2% (B) 4% (C) 2.5% (D) 1%

#### DTS-2: Elastic Moduli and Elastic Energy

**16.** When a force is applied to a wire of the same material, same length, but double the radius, the extension produced is:
(A) the same (B) doubled (C) halved (D) one-fourth

**17.** The work done in stretching an elastic wire per unit volume is:
(A) stress x strain (B) (1/2) x stress x strain (C) 2 x stress x strain (D) stress / strain

**18.** A 5 m long wire is fixed to the ceiling. A weight of 10 kg is hung at the lower end and is 1 m above the floor. The wire was elongated by 1 mm. The energy stored in the wire due to stretching is:
(A) zero (B) 0.05 J (C) 100 J (D) 500 J

**19.** A body of mass m = 10 kg is attached to a wire of length 0.3 m. The maximum angular velocity with which it can be rotated in a horizontal circle is (breaking stress = 4.8 x 10^7 N/m^2, area = 10^-6 m^2):
(A) 4 rad/s (B) 8 rad/s (C) 1 rad/s (D) 2 rad/s

**20.** When a rod is heated but prevented from expanding, the thermal stress developed is independent of:
(A) temperature rise (B) coefficient of linear expansion (C) Young's modulus (D) length of the rod

**21.** If S is stress and Y is Young's modulus of the material of a wire, the energy stored per unit volume of the wire is:
(A) 2S^2*Y (B) S^2/(2Y) (C) 2Y/S^2 (D) S/(2Y)

**22.** A wire fixed at the upper end stretches by length l by applying a force F. The work done in stretching is:
(A) F*l (B) F*l/2 (C) 2F*l (D) F*l/4

**23.** Identical springs of spring constant K are connected in series and parallel and are used to pull a mass. If the extension produced in series and parallel combinations are x_s and x_p respectively then x_s/x_p is:
(A) n^2 (B) 1/n^2 (C) n (D) 1/n

**24.** A uniform cylindrical rod of length L, cross-sectional area A, Young's modulus Y is acted upon by forces as shown (stretched from both ends with force F). The elongation of the rod is:
(A) FL/(AY) (B) 2FL/(AY) (C) FL/(2AY) (D) 3FL/(2AY)

**25.** A light rod of length 2 m is suspended from the ceiling horizontally by means of two vertical wires of equal length tied to its ends. One wire is of brass (area 10^-4 m^2, Y = 10^11 Pa) and other of steel (area 2 x 10^-4 m^2, Y = 2 x 10^11 Pa). A weight is hung from the rod. The position of the weight from the brass end so that equal stress is produced in both wires is:
(A) 4/3 m (B) 1 m (C) 2/3 m (D) 1/2 m

**26.** An Indian rubber cord L metre long and area of cross-section A m^2 is suspended vertically. Density of rubber is D kg/m^3 and Young's modulus is Y Pa. The extension of the cord due to its own weight is:
(A) DgL^2/(6Y) (B) DgL^2/(2Y) (C) DgL^2/(4Y) (D) DgL^2/(Y)

**27.** A thick rope of rubber of density 1.5 x 10^3 kg/m^3 and Young's modulus 5 x 10^6 Pa, 8 m in length, when hung from a ceiling, the increase in length due to its own weight is:
(A) 9.6 x 10^-2 m (B) 19.2 x 10^-2 m (C) 9.6 x 10^-3 m (D) 9.6 m

**28.** A 5 m long aluminium wire (Y = 7 x 10^10 N/m^2) of diameter 3 mm supports a 40 kg mass. The elongation of the wire is:
(A) 0.4 mm (B) 4 mm (C) 0.1 mm (D) 40 mm

**29.** A solid ball of density half that of water falls freely under gravity from a height of 19.6 m and bounces back from the bottom of a tank. If the coefficient of restitution is 0.7, the ball will not bounce beyond:
(A) 9.6 m (B) 4.8 m (C) 2.4 m (D) 14.2 m

**30.** A wire of length L and cross-section A has Young's modulus Y. If the wire is stretched by a force F, the increase in internal energy of the wire is:
(A) F^2*L/(AY) (B) F^2*L/(2AY) (C) FL/(AY) (D) F^2*L/(4AY)

#### DTS-3: Thermal Expansion

**31.** Two rods, one of aluminium and the other of steel, having initial lengths l1 and l2 are connected together to form a single rod of length l1 + l2. The coefficients of linear expansion are alpha_Al and alpha_St. If the length of each rod increases by the same amount when their temperatures are raised by t°C, the ratio l1/(l1+l2) is:
(A) alpha_St/(alpha_Al) (B) alpha_Al/(alpha_St) (C) alpha_St/(alpha_Al + alpha_St) (D) alpha_Al/(alpha_Al + alpha_St)

**32.** The coefficient of apparent expansion of mercury in a glass vessel is 153 x 10^-6 /°C and in a steel vessel is 144 x 10^-6 /°C. The coefficient of volumetric expansion of steel is:
(A) 9 x 10^-6 /°C (B) 27 x 10^-6 /°C (C) 36 x 10^-6 /°C (D) 12 x 10^-6 /°C

**33.** A hole is drilled in a copper sheet. The diameter of the hole is 4.24 cm at 27°C. What is the change in the diameter when the sheet is heated to 227°C? (alpha = 1.7 x 10^-5 /°C):
(A) increases by 0.0144 cm (B) decreases by 0.0144 cm (C) increases by 0.0288 cm (D) no change

**34.** A clock with a brass pendulum has a time period of 2 s at 20°C. If the clock is used in a city where the average temperature is 40°C, how much time does the clock lose or gain in one day? (alpha_brass = 18 x 10^-6 /°C):
(A) gains 15.55 s (B) loses 15.55 s (C) gains 31.1 s (D) loses 31.1 s

**35.** A steel tape is correctly calibrated at 20°C. The length of a steel rod measured by this tape at 40°C is 200 cm. The true length of the rod at 40°C is (alpha = 12 x 10^-6 /°C):
(A) 200.048 cm (B) 199.952 cm (C) 200.024 cm (D) 200 cm

**36.** A bimetallic strip is heated. The strip will:
(A) bend towards the metal with lower alpha (B) bend towards the metal with higher alpha (C) twist (D) not bend

**37.** The volume of a solid decreases by 0.6% when it is cooled through 50°C. The coefficient of linear expansion of the solid is:
(A) 4 x 10^-5 /°C (B) 1.2 x 10^-4 /°C (C) 6 x 10^-5 /°C (D) 1 x 10^-5 /°C

**38.** A glass flask of volume 200 cm^3 is just filled with mercury at 20°C. The amount of mercury that will overflow when the temperature is raised to 100°C is (gamma_glass = 2.7 x 10^-5 /°C, gamma_mercury = 1.8 x 10^-4 /°C):
(A) 2.46 cm^3 (B) 1.23 cm^3 (C) 3.52 cm^3 (D) 4.8 cm^3

**39.** The real coefficient of expansion of a liquid is 7 times the volume coefficient of expansion of the vessel. The ratio of apparent expansion to real expansion of the liquid is:
(A) 1/7 (B) 6/7 (C) 7/6 (D) 7

**40.** A steel ruler is calibrated at 25°C. A reading of 50 cm is taken on a day when the temperature is 5°C. The actual length measured is (alpha = 11 x 10^-6 /°C):
(A) 50.011 cm (B) 49.989 cm (C) 50 cm (D) 49.979 cm

**41.** Water is heated from 0°C to 10°C. Its volume:
(A) increases (B) decreases (C) first decreases then increases (D) first increases then decreases

**42.** A body with coefficient of linear expansion alpha is heated through t°C. The percentage increase in area is approximately:
(A) alpha*t (B) 2*alpha*t (C) 3*alpha*t (D) alpha*t/2

**43.** Two rods of different materials having coefficients of thermal expansion alpha1, alpha2 and Young's moduli Y1, Y2 respectively are fixed between two rigid walls. The rods are heated such that they undergo the same increase in temperature. If the rods do not bend, the thermal stresses developed are in the ratio:
(A) alpha1*Y1 : alpha2*Y2 (B) alpha1/Y1 : alpha2/Y2 (C) alpha1 : alpha2 (D) Y1 : Y2

**44.** A rod of length 20 cm is made of metal A for the first 10 cm and metal B for the next 10 cm. The coefficients of linear expansion are 10 x 10^-6 /°C and 20 x 10^-6 /°C respectively. On heating through 10°C, the change in length is:
(A) 0.003 cm (B) 0.002 cm (C) 0.01 cm (D) 0.015 cm

**45.** An isotropic solid has a coefficient of linear expansion alpha. The coefficient of volumetric expansion is:
(A) alpha (B) alpha/3 (C) 3*alpha (D) alpha^3

---

### MECHANICAL PROPERTIES: LEVEL 2
*Source: DTS-4 NAT (Numerical Answer Type), DTS-5 (Elasticity -- Level 2), DTS-6 (Thermal Expansion -- Level 2)*

#### DTS-4 NAT: Mixed Numerical Questions

**46.** A wire of length 1 m and area 1 mm^2 is loaded by 2 kg. If Y = 2 x 10^11 N/m^2, the extension is x x 10^-5 m. Find x.

**47.** A steel rod of length 1 m, cross-section 1 cm^2 is heated from 0°C to 200°C without being allowed to bend or expand. The compressive force developed (in kN) is F. Find F/10. (Y = 2 x 10^11 Pa, alpha = 12 x 10^-6 /°C)

**48.** A wire of length 2 m is made of steel (Y = 2 x 10^11 Pa). If the elastic energy stored per unit volume is 40 x 10^4 J/m^3, the stress in the wire is n x 10^7 Pa. Find n.

**49.** Two wires each of radius 0.2 cm and negligible mass, one made of steel (Y = 2 x 10^11 Pa) and the other of brass (Y = 1 x 10^11 Pa) are loaded as shown with 5 kg mass at the junction and 2 kg mass at the free end. Both wires are 1 m long. The extension of the steel wire is x x 10^-3 cm. Find x (approx, use g = 10).

**50.** An aluminium rod (Y = 7 x 10^10 Pa) has a diameter of 2 cm and length 1 m. When a load of 980 N is applied, the rod deforms. The strain energy per unit volume is approximately n x 10^-2 J/m^3. Find n.

**51.** A uniform rod of length L, density rho, Young's modulus Y hangs vertically from a rigid support. The extension produced is rho*g*L^2/(n*Y). Find n.

**52.** A sphere of radius 10 cm is subjected to a uniform pressure of 6 x 10^6 Pa. The fractional decrease in volume is 0.01%. Bulk modulus is n x 10^10 Pa. Find n.

**53.** A steel wire of diameter 2 mm has a breaking strength of 4 x 10^5 N/m^2. The maximum load it can carry is n*pi N. Find n.

**54.** If the potential energy of a spring is V on stretching it by 2 cm, then its potential energy when it is stretched by 10 cm will be nV. Find n.

**55.** Two identical wires of rubber and steel are stretched by the same force. If the extension of the rubber wire is 10 times that of the steel wire and their cross-sections are equal, the ratio Y_steel/Y_rubber is _________.

**56.** A wire of length 1.5 m and diameter 0.4 cm elongates 0.8 mm when stretched by a force of 50 N. Young's modulus of the wire is n x 10^9 Pa. Find n (round to integer).

**57.** A 50 cm steel rod (alpha = 11 x 10^-6 /°C, Y = 2 x 10^11 N/m^2, area 1 cm^2) is heated by 40°C while clamped. The compressive force (in N) is _________.

**58.** A solid ball of metal has a concentric spherical cavity. If heated uniformly, the cavity:
(A) shrinks (B) grows (C) stays same (D) depends on material. Answer as 1 for A, 2 for B, 3 for C, 4 for D.

**59.** Two rods of equal length and equal cross-section are joined end to end. If their Young's moduli are Y1 and Y2, the equivalent Young's modulus is 2*Y1*Y2/(Y1+Y2). If Y1 = Y2 = Y, the equivalent is nY. Find n.

**60.** A uniform wire of steel of length 5 m is placed between two rigid supports. Its area of cross-section is 2 cm^2. If the temperature decreases by 10°C, the tension developed is approximately n kN. (Y = 2 x 10^11, alpha = 1.2 x 10^-5). Find n.

#### DTS-5: Elasticity (Level 2)

**61.** A uniform rod of length L, cross-section A and mass m hangs from a rigid support. The elastic strain energy stored in the rod due to its own weight is:
(A) m^2*g^2*L/(6AY) (B) m^2*g^2*L/(2AY) (C) m^2*g^2*L^2/(2AY) (D) m^2*g^2/(6ALY)

**62.** A wire is made of a material of breaking stress 6 x 10^8 N/m^2. The wire is loaded till the point just below its breaking point. Then the decrease in the diameter is observed to be 1%. What is the original diameter of the wire if Y = 6 x 10^11 N/m^2?
(A) 0.4 mm (B) 1 mm (C) 0.6 mm (D) cannot be determined

**63.** A 10 m long steel wire is loaded to 1/3 of its yield strength. If the class A yield strength is 3 x 10^8 Pa and Y = 2 x 10^11 Pa, the extension is:
(A) 1.5 cm (B) 0.5 cm (C) 1 cm (D) 2 cm

**\*64.** A metal wire of length L and area A is attached to a rigid support. The wire is cooled through a temperature Delta_T. If Y is the Young's modulus of the metal and alpha is its coefficient of linear expansion:
(A) The stress in the wire is Y*alpha*Delta_T (B) The strain energy stored per unit volume is Y*(alpha*Delta_T)^2/2 (C) The wire will try to contract (D) The thermal stress is independent of the length of the wire

**65.** A thin metallic wire is bent to form a semicircle of radius r. If it is straightened and then rebent to form a full circle, the ratio of stress in the second case to the first is:
(A) 2:1 (B) 1:2 (C) 4:1 (D) 1:4

**66.** A uniform wire of length L under tension hangs from a rigid support. If its diameter doubles, the new extension is:
(A) l (B) l/2 (C) l/4 (D) l/8

**67.** The Young's modulus of a wire of length L and radius r is Y. If the length is reduced to L/2 and radius to r/2, Young's modulus will be:
(A) Y/2 (B) Y (C) 2Y (D) 4Y

**68.** Two wires of same length are made of the same material. The wire A has radius r and wire B has radius 2r. The ratio of their extensions for the same load is:
(A) 1:4 (B) 4:1 (C) 1:2 (D) 2:1

**\*69.** A wire of cross-section A and length L has a breaking stress sigma_b. What is the maximum weight it can support when:
(A) Hung vertically -- the answer is sigma_b * A (B) Used as a horizontal tension member -- the answer is sigma_b * A (C) Swung in a horizontal circle of radius L -- the answer is sigma_b * A - m*v^2/L (D) The breaking force depends only on sigma_b and A, not on the manner of use

**70.** A metal cube is subjected to hydrostatic pressure P. The strain energy per unit volume is:
(A) P^2/(2B) (B) P^2/(6B) (C) 3P^2/(2B) (D) P/(2B)

**71.** A material has Poisson's ratio 0.5. If Young's modulus is Y, the Bulk modulus is:
(A) Y/3 (B) infinity (C) Y (D) Y/2

**72.** Elastic energy stored per unit volume for a given stress S is more in which material?
(A) material with larger Y (B) material with smaller Y (C) same for all materials (D) depends on dimensions

**73.** A bar of cross-section A has equal and opposite tensile forces F applied at its ends. If the yield stress is sigma_y and the bar elongates before fracturing, this type of failure is:
(A) brittle fracture (B) ductile fracture (C) fatigue failure (D) creep

**74.** For a wire of length L, stretched by length l under force F, if the wire is further stretched by dl, the work done is:
(A) F*dl (B) F*dl/2 (C) F*(l + dl)/2 (D) F*dl * L/(A*Y)

**75.** A rubber band originally of length L is stretched to 3L. If the Young's modulus of the material is Y and cross-section A, the work done is:
(A) 2*Y*A*L (B) 4*Y*A*L (C) Y*A*L/2 (D) 2*Y*A*L/3

---

### MECHANICAL PROPERTIES: LEVEL 3 (HARD)
*Source: DTS-8, DTS-9 (Subjective / Advanced problems)*

**76.** A steel wire and a copper wire of equal length and equal cross-sectional area are joined end to end and the combination is subjected to a tension T. Find the ratio of: (i) stresses in the two wires, (ii) strains in the two wires, (iii) elastic energy stored in the two wires. (Y_steel = 2 x 10^11 Pa, Y_copper = 1.2 x 10^11 Pa)

**77.** A uniform rod of mass m, cross-section A, length L and Young's modulus Y is rotated about one end in a horizontal plane with angular velocity omega. Derive the expression for the extension of the rod and the elastic energy stored.

**78.** A cylindrical pillar of diameter 28 cm and height 4 m is required to support a load of 2 x 10^5 kg. The Young's modulus of the material is 2 x 10^11 Pa. (i) Calculate the stress and strain. (ii) Find the compression of the pillar. (iii) Determine the elastic energy stored.

**79.** Two wires of different materials A (length L1, area A1, Y1) and B (length L2, area A2, Y2) are joined together and suspended from a rigid support. A weight W is hung from the free end. Find: (i) the total extension, (ii) the effective Young's modulus of the combination, (iii) the energy stored in each wire.

**80.** A thin steel ring of mean radius R and cross-section area A is heated and slipped onto a rigid wooden wheel of mean radius R + Delta_R (Delta_R << R). Find: (i) the temperature rise needed to slip the ring on, (ii) the tension in the ring when it cools to room temperature, (iii) the pressure exerted by the ring on the wheel.

**81.** A wire of length L, cross-section A and Young's modulus Y is stretched by length Delta_l. If Poisson's ratio is sigma, find: (i) the change in diameter, (ii) the change in volume, (iii) the volumetric strain in terms of sigma and longitudinal strain.

**82.** An elastic wire has natural length L and spring constant k. A block of mass m is attached to it and dropped from the point of suspension. Find: (i) the maximum extension of the wire, (ii) the elastic energy stored at maximum extension, (iii) the equilibrium extension.

**83.** A composite bar of length L = L1 + L2 is made of two materials with coefficients of linear expansion alpha1, alpha2 and Young's moduli Y1, Y2, cross-sections A1, A2 respectively. The ends are fixed to rigid walls. If the temperature increases by Delta_T, find the compressive stress in each part and the displacement of the junction.

**84.** A wire of length L and cross-section A has a breaking strain of epsilon_b. The wire is used to whirl a mass m in a vertical circle of radius R (R approximately equal to L). Find the maximum angular velocity for which the wire does not break, considering the weight of the mass at the lowest point.

**85.** A uniform rod of mass m, length L and Young's modulus Y hangs vertically from a rigid support. A mass M is attached to the free end. Find: (i) the extension due to its own weight, (ii) the extension due to the attached mass, (iii) the total elastic energy stored in the rod.

**86.** A steel ball of mass m = 0.1 kg falls from height h = 1 m onto a steel plate. If the coefficient of restitution is e = 0.9, the time of contact during the collision is tau = 0.001 s, and the average force of impact is F. The ball makes a small elastic depression on the plate. Using Hertz contact theory, the radius of the contact circle depends on the elastic moduli and radii. Calculate F and estimate the maximum stress during impact.

**87.** A thin-walled cylindrical vessel of radius R and wall thickness t (t << R) is subjected to an internal gauge pressure P. Derive: (i) the hoop (circumferential) stress, (ii) the longitudinal stress, (iii) the maximum shear stress, and (iv) explain why such vessels fail by splitting along their length.

---

### MECHANICAL PROPERTIES: MISCELLANEOUS QUESTION BANK
*Source: Miscellaneous Question Bank (Level 1, 2, 3)*

**1.** The ratio of the lengths of two wires, made of the same material, with radii in the ratio 1:2, having equal extensions under equal loads, is:
(A) 1:4 (B) 4:1 (C) 1:2 (D) 2:1

**2.** If the work done in stretching a wire by 1 mm is 2 J, the work done in stretching another wire of the same material with double the radius and half the length by 1 mm is:
(A) 16 J (B) 4 J (C) 8 J (D) 1/4 J

**3.** A wire of length L and radius r is clamped at one end. On stretching the other end of the wire with force F, the increase in its length is l. If another wire of the same material but of length 2L and radius 2r is stretched with force 2F, the increase in its length will be:
(A) l (B) 2l (C) l/2 (D) 4l

**4.** An iron bar (Y = 10^11 Pa, alpha = 10^-5/°C) of length 10 m and cross-section 1 cm^2 is connected between two rigid walls. If the temperature falls by 30°C, the force exerted by the bar is:
(A) 3000 N (B) 1500 N (C) 300 N (D) 30000 N

**5.** When a force is applied to the free end of a metal wire, the wire stretches. The strain energy stored per unit volume is equal to:
(A) stress x strain (B) (1/2) x stress x strain (C) stress / strain (D) strain / stress

**6.** The coefficient of linear expansion of brass and steel are alpha1 and alpha2 respectively. If we take a brass rod of length l1 and a steel rod of length l2 at 0°C, their difference of length (l1 - l2) will remain the same at any temperature if:
(A) alpha1*l2 = alpha2*l1 (B) alpha1*l1 = alpha2*l2 (C) alpha1*l1^2 = alpha2*l2^2 (D) alpha1^2*l1 = alpha2^2*l2

**7.** A uniform rope of length L and mass per unit length lambda hangs vertically from a rigid support. If a block of mass M is attached to the free end, the stress in the rope at a distance x from the rigid support is:
(A) (M + lambda*x)*g/A (B) (M + lambda*(L-x))*g/A (C) Mg/A (D) lambda*x*g/A

**8.** Young's modulus of a material in terms of bulk modulus B and Poisson's ratio sigma is:
(A) 3B(1 - 2*sigma) (B) 3B(1 + 2*sigma) (C) B/(1 - 2*sigma) (D) B(1 - 2*sigma)

**9.** Two rods of equal cross-section, one of steel (Y = 2 x 10^11 Pa) and the other of brass (Y = 10^11 Pa), are joined end to end. Each rod is 1 m long. The combination is subjected to a tensile force. If the total extension is 0.06 cm, the extensions of the steel and brass rods are:
(A) 0.02 cm, 0.04 cm (B) 0.03 cm, 0.03 cm (C) 0.04 cm, 0.02 cm (D) 0.01 cm, 0.05 cm

**10.** A mercury thermometer and a resistance thermometer are calibrated at 0°C and 100°C. They read 50°C and 50.5°C respectively at a particular temperature. This discrepancy arises because:
(A) both are inaccurate (B) the expansion of mercury is not perfectly linear (C) resistance doesn't change linearly (D) both (B) and (C)

---

### JEE MAIN ARCHIVE
*Source: JEE Main (Archive) -- questions from 2002-2023*

**1.** [2002] The length of a rubber cord is l1 when the tension is 4 N, and l2 when the tension is 6 N. The length when the tension is 9 N is:
(A) (2.5*l2 - 1.5*l1) (B) (6*l2 - 1.5*l1) (C) (3*l2 - 2*l1) (D) (3.5*l2 - 2.5*l1)
**Ans: A**

**2.** [2003] A wire fixed at the upper end stretches by length l by applying a force F. The work done in stretching is:
(A) F*l/2 (B) F*l (C) 2F*l (D) F*l/4
**Ans: A**

**3.** [2004] The temperature of a thin uniform rod increases by Delta_T. If moment of inertia I is not to be affected, the fractional change in density Delta_rho/rho is:
(A) -3*alpha*Delta_T (B) -2*alpha*Delta_T (C) alpha*Delta_T (D) 2*alpha*Delta_T
**Ans: B**

**4.** [2005] A wire elongates by l mm when a load W is hung from it. If the wire goes over a pulley and two weights W each are hung at the two ends, elongation of the wire will be (in mm):
(A) l (B) 2l (C) zero (D) l/2
**Ans: A**

**5.** [2006] A 20 kg load is suspended by a wire. If the breaking stress is 4.8 x 10^8 Pa, the minimum radius of the wire is:
(A) 0.36 mm (B) 3.6 mm (C) 36 mm (D) 0.036 mm
**Ans: A**

**6.** [2007] Two rods of the same dimensions but materials of thermal conductivities K1 and K2, are joined end to end. The effective thermal conductivity is:
(A) K1*K2/(K1+K2) (B) 2*K1*K2/(K1+K2) (C) (K1+K2)/2 (D) sqrt(K1*K2)
**Ans: B**

**7.** [2008] If S is the stress and Y is Young's modulus, the energy stored per unit volume is:
(A) 2Y/S^2 (B) S^2/(2Y) (C) 2S^2*Y (D) S/(2Y)
**Ans: B**

**8.** [2008] Coefficient of linear expansion of brass and steel are alpha1 and alpha2. The length of brass rod is l1 and steel rod is l2 at 0°C such that (l1 - l2) is the same at all temperatures. Then:
(A) alpha1*l1 = alpha2*l2 (B) alpha2*l1 = alpha1*l2 (C) alpha1*l1^2 = alpha2*l2^2 (D) alpha2^2*l1 = alpha1^2*l2
**Ans: A**

**9.** [2009] A ball of mass 0.2 kg rests on a vertical post of height 5 m. A bullet of mass 0.01 kg travelling at v = 500 m/s hits the ball and sticks. How high does the combined mass rise?
(A) 0.3 m (B) 0.6 m (C) 0.8 m (D) 1.0 m
**Ans: C**

**10.** [2010] Two wires are made of the same material and have the same volume. The first wire has cross-sectional area A and the second wire has 3A. If the length of the first wire is increased by Delta_l on applying force F, how much force is needed to stretch the second wire by the same amount?
(A) F (B) 4F (C) 6F (D) 9F
**Ans: D**

**11.** [2010] A metal rod of Young's modulus Y and coefficient of thermal expansion alpha is held at its two ends such that its length remains invariant. If its temperature is raised by t°C, the linear stress developed is:
(A) alpha*t/Y (B) Y*alpha*t (C) Y/(alpha*t) (D) 1/(Y*alpha*t)
**Ans: B**

**12.** [2011] Two rods of equal length cross-section area and moment of inertia, one of steel and the other of brass, are joined end to end and clamped at one end. The free end is gently displaced. The frequency of oscillation of the system is proportional to:
(A) Y_s*Y_b (B) sqrt(Y_s*Y_b) (C) Y_s + Y_b (D) sqrt(Y_s + Y_b)
**Ans: D**

**13.** [2012] Coefficient of linear expansion of a metal rod does not depend upon:
(A) nature of material (B) change in temperature (C) initial length of rod (D) None of the above
**Ans: C**

**14.** [2013] The compressibility of water is 4 x 10^-5 per unit atmospheric pressure. The decrease in volume of 100 cm^3 of water under 100 atm pressure is:
(A) 0.4 cm^3 (B) 4 x 10^-5 cm^3 (C) 0.025 cm^3 (D) 0.004 cm^3
**Ans: A**

**15.** [2014] The potential energy function for the force between two atoms in a diatomic molecule is approximately given by U(x) = a/x^12 - b/x^6. The dissociation energy of the molecule is:
(A) b^2/(4a) (B) b^2/(2a) (C) b^2/(12a) (D) b^2/(6a)
**Ans: A**

**16.** [2014] A steel wire of length 4.7 m and cross-sectional area 3 x 10^-5 m^2 stretches by the same amount as a copper wire of length 3.5 m and cross-sectional area 4 x 10^-5 m^2 under a given load. The ratio Y_steel/Y_copper is about:
(A) 1.8 (B) 3.6 (C) 0.5 (D) 2.0
**Ans: A**

**17.** [2015] A copper rod and a steel rod of the same dimensions are heated through the same rise in temperature. If copper rod increases by 0.3%, the increase in the steel rod would be approximately (alpha_Cu/alpha_St = 2):
(A) 0.15% (B) 0.6% (C) 0.45% (D) 0.3%
**Ans: A**

**18.** [2016] The stress-strain curves are drawn for two different materials X and Y. It is observed that the ultimate strength point and the fracture point are close to each other for material X but are far apart for material Y. We can say that materials X and Y are likely to be:
(A) X = ductile, Y = brittle (B) X = brittle, Y = ductile (C) X = polymer, Y = glass (D) X = glass, Y = rubber
**Ans: B**

**19.** [2016] A rope 1 cm in diameter breaks if the tension in it exceeds 500 N. The maximum tension that may be given to a similar rope of diameter 2 cm is:
(A) 500 N (B) 250 N (C) 1000 N (D) 2000 N
**Ans: D**

**20.** [2017] An external pressure P is applied on a cube at 0°C so that it is equally compressed from all sides. K is the bulk modulus and alpha is the coefficient of linear expansion. To bring the cube to its original size by heating, the temperature should be raised by:
(A) P/(3*alpha*K) (B) 3*alpha/(P*K) (C) 3*K*alpha/P (D) P/(alpha*K)
**Ans: A**

**21.** [2017] A man grows into a giant such that his linear dimensions increase by a factor of 9. Assuming his density remains same, the stress in his leg will change by a factor of:
(A) 81 (B) 1/81 (C) 9 (D) 1/9
**Ans: C**

**22.** [2018] A rod of length 50 cm is pivoted at one end. It is raised such that it makes an angle of 30° from the horizontal and then released from rest. Its angular speed when it passes through the horizontal is (g = 10 m/s^2):
(A) sqrt(30) rad/s (B) sqrt(30/2) rad/s (C) sqrt(20/3) rad/s (D) sqrt(15) rad/s
**Ans: A**

**23.** [2018] Young's modulus of steel is twice that of brass. Two wires of same length and same area of cross section, one of steel and other of brass are suspended from the same roof. If we want the lower ends of the wires to be at the same level, the weight hung from steel and brass wire must be in the ratio of:
(A) 2:1 (B) 4:1 (C) 1:1 (D) 1:2
**Ans: A**

**24.** [2019] Two rods A and B of identical dimensions are at temperature 30°C. A is of steel and B of brass. The increase in the lengths of the two rods are measured when heated to the same temperature. It is found that the rod B increases by 50% more than A. The coefficient of linear expansion of A is 12 x 10^-6/°C. What is the value for B?
(A) 12 x 10^-6/°C (B) 15 x 10^-6/°C (C) 18 x 10^-6/°C (D) 21 x 10^-6/°C
**Ans: C**

**25.** [2019] A body of mass m = 10 kg is attached to one end of a wire of length 0.3 m. The maximum angular velocity with which it can be rotated about the other end in a circle (breaking stress = 4.8 x 10^7 Pa, area = 10^-6 m^2) is:
(A) 4 rad/s (B) 2 rad/s (C) 1 rad/s (D) 8 rad/s
**Ans: A**

**26.** [2020] A uniform wire of length 10 m and weight 4 N is suspended vertically from a rigid support and a weight of 6 N is hung at its lower end. Find the change in the shape of the wire if Y = 2 x 10^11 Pa, radius = 10^-3 m. The elongation is:
(A) 0.127 mm (B) 2.54 mm (C) 1.27 mm (D) 0.0127 mm
**Ans: A**

**27.** [2020] A wire of length L, area of cross-section A is hung from a fixed support. The length changes to L1 when mass M is suspended from the free end. The expression for Young's modulus is:
(A) MgL/(A*(L1-L)) (B) Mg*L1/(A*L) (C) MgL/(A*L1) (D) Mg(L1-L)/(A*L)
**Ans: A**

**28.** [2021] A steel wire of diameter d and length l when stretched by a force F, it stretches by l/200. If a wire of the same material and length 2l but of diameter d/2 is pulled by F/2, its elongation will be:
(A) l/100 (B) l/200 (C) l/50 (D) l/400
**Ans: A**

**29.** [2021] The diameter of a brass rod is 4 mm and Young's modulus is 9 x 10^10 Pa. The force required to stretch it by 0.1% of its length is:
(A) 36 N (B) 36*pi N (C) 360 N (D) 360*pi N
**Ans: B**

**30.** [2022] Two identical wires each of length l are connected in series and then in parallel to a battery. The ratio of lengths of the composite wires (series to parallel) is:
(A) 4:1 (B) 2:1 (C) 1:2 (D) 1:4
**Ans: A**

**31.** [2022] A solid metallic cube having total surface area 24 m^2 is uniformly heated. If the temperature is increased by 10°C, calculate the increase in volume of the cube. (alpha = 5 x 10^-4/°C):
(A) 0.12 m^3 (B) 0.24 m^3 (C) 0.06 m^3 (D) 0.36 m^3
**Ans: A**

**32.** [2022] A wire of length 40 cm which has a mass of 4 g oscillates in its second harmonic and sets the air column in the tube to vibrations in its fundamental mode as shown. The speed of sound in air is 340 m/s. The tension in the wire is:
(A) 11.56 N (B) 5.78 N (C) 2.89 N (D) 23.12 N
**Ans: A**

**33.** [2023] A steel wire of length 3.2 m (Y = 2 x 10^11 Pa) and a copper wire of length 4.4 m (Y = 1.1 x 10^11 Pa) are joined end to end and a force of 800 N is applied. If both wires have circular cross-sections of 2 mm radius, the net elongation is:
(A) 0.66 mm (B) 0.1 mm (C) 1.2 mm (D) 0.9 mm
**Ans: A**

**34.** [2023] On heating, the unit of coefficient of linear expansion is:
(A) °C^-1 (B) °C (C) dimensionless (D) m/°C
**Ans: A**

**35.** [2023] A uniform thick bar lies on a smooth horizontal surface and is free to move. A thin disc of mass m hits the bar at its end with velocity v perpendicular to the bar. If the bar has mass 4m, the angular velocity about the centre of mass after perfectly inelastic collision is (bar length = L):
(A) 15v/(19L) (B) 3v/(4L) (C) 5v/(7L) (D) v/L
**Ans: A**

**Answer Key (JEE Main Archive complete):**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | A | A | B | A | A | B | B | A | C | D | B | D | C | A | A |

| Q# | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | A | A | B | D | A | C | A | A | C | A | A | A | A | B | A |

| Q# | 31 | 32 | 33 | 34 | 35 |
|---|---|---|---|---|---|
| Ans | A | A | A | A | A |

---

### JEE ADVANCED ARCHIVE
*Source: JEE Advanced (Archive) -- questions from 1981-2023*

**SINGLE OPTION CORRECT TYPE**

**1.** [1986] A metal bar of length L and area A is clamped between two rigid supports. For the bar, Young's modulus is Y and coefficient of linear expansion is alpha. If the temperature of the bar is increased by Delta_T, the force exerted by the bar on the supports is:
(A) Y*A*alpha*Delta_T (B) Y*A*alpha*Delta_T/L (C) Y*alpha*Delta_T (D) Y*L*alpha*Delta_T
**Ans: A**

**2.** [1992] A wire of length L and cross-sectional area A is made of material of Young's modulus Y. The work done in stretching the wire by an amount x is:
(A) Y*A*x^2/(2L) (B) Y*A*x/(2L) (C) Y*x^2*A/L (D) Y*A*x^2/(4L)
**Ans: A**

**3.** [1996] If in a wire of Young's modulus Y, longitudinal strain x is produced, then the value of potential energy stored in its unit volume will be:
(A) Y*x^2/2 (B) 2*Y*x^2 (C) Y*x^2 (D) Y*x/2
**Ans: A**

**4.** [1998] The pressure that has to be applied to the ends of a steel wire of length 10 cm to keep its length constant when its temperature is raised by 100°C is (Y = 2 x 10^11 Pa, alpha = 1.1 x 10^-5/°C):
(A) 2.2 x 10^8 Pa (B) 2.2 x 10^9 Pa (C) 2.2 x 10^7 Pa (D) 2.2 x 10^6 Pa
**Ans: A**

**5.** [2003] Two rods one of aluminium and the other made of steel, having initial length l1 and l2 are connected together to form a single rod of length (l1 + l2). The coefficients of linear expansion are alpha_Al and alpha_St. If the length of each rod increases by the same amount when their temperature is raised by t°C, then l1/(l1+l2) is:
(A) alpha_St/(alpha_Al + alpha_St) (B) alpha_Al/(alpha_Al + alpha_St) (C) alpha_St/alpha_Al (D) alpha_Al/alpha_St
**Ans: A**

**6.** [2005] A 0.1 kg mass is suspended from a wire of negligible mass. The length of the wire is 1 m and its cross-sectional area is 4.9 x 10^-7 m^2. If the mass is pulled a little in the vertically downward direction and released, it performs SHM of frequency 1/(2*pi)*sqrt(x). The value of x is (Y = 2 x 10^9 N/m^2):
(A) 1/0.98 (B) 0.98 (C) 9800 (D) 0.0098
**Ans: C**

**7.** [2008] A metal rod of Young's modulus Y and coefficient of thermal expansion alpha is held at its two ends such that its length remains invariant. If its temperature is raised by t°C, the linear stress developed is:
(A) alpha*t/Y (B) Y*alpha*t (C) Y/(alpha*t) (D) 1/(Y*alpha*t)
**Ans: B**

**8.** [2010] Two wires are made of the same material and have the same volume. However wire 1 has cross-sectional area A and wire 2 has 3A. If the length of wire 1 increases by Delta_x on applying force F, how much force is needed to stretch wire 2 by the same amount?
(A) F (B) 4F (C) 6F (D) 9F
**Ans: D**

**9.** [2014] One end of a horizontal thick copper wire of length 2L and radius 2R is welded to an end of another horizontal thin copper wire of length L and radius R. When this arrangement is stretched by forces F, the elongation in the thin wire is:
(A) zero (B) FL/(pi*R^2*Y) (C) F*2L/(pi*R^2*Y) (D) FL/(4*pi*R^2*Y)
**Ans: B**

**10.** [2015] A steel ball is placed on the surface of water in a beaker. It sinks to the bottom. The force exerted by water on the ball during its descent is:
(A) equal to its weight (B) less than its weight (C) greater than its weight but less than weight + buoyancy (D) equal to buoyancy force
**Ans: D**

**MULTIPLE OPTIONS CORRECT TYPE**

**\*11.** [1999] When a rod with free expansion coefficient alpha is raised by Delta_T and its expansion is partially prevented:
(A) thermal stress may exceed elastic limit (B) the compressive strain depends on alpha and Delta_T (C) the restoring force depends on Y and A (D) The Young's modulus is independent of temperature
**Ans: A, B, C**

**\*12.** [2009] A student performs an experiment to determine the Young's modulus of a wire, exactly 2 m long, by Searle's method. In a particular reading, the student measures the extension in the length of the wire to be 0.8 mm with an uncertainty of +/- 0.05 mm at a load of exactly 1.0 kg. The student also measures the diameter of the wire to be 0.4 mm with an uncertainty of +/- 0.01 mm. Take g = 9.8 m/s^2 (exact). The Young's modulus obtained from the reading is:
(A) (2 +/- 0.3) x 10^11 Pa (B) (2 +/- 0.2) x 10^11 Pa (C) (2 +/- 0.1) x 10^11 Pa (D) (2 +/- 0.05) x 10^11 Pa
**Ans: B**

**ASSERTION AND REASON TYPE**

**13.** [2008] Statement-I: The stream of water flowing at high speed from a garden hose pipe tends to spread like a fountain when held vertically up, but tends to narrow down when held vertically down.
Statement-II: In any steady flow of an incompressible fluid, the volume flow rate of the fluid remains constant.
(A) Both true, II explains I (B) Both true, II does not explain I (C) I true, II false (D) I false, II true
**Ans: A**

**MATCH MATRIX TYPE**

**14.** [2018] Column I lists some physical quantities and Column II lists their dimensions/units. Match:
(P) Stress -> (3) ML^-1T^-2
(Q) Strain -> (2) Dimensionless
(R) Young's modulus -> (3) ML^-1T^-2
(S) Elastic PE per unit volume -> (3) ML^-1T^-2
**Ans: P-3, Q-2, R-3, S-3**

**NUMERICAL ANSWER TYPE**

**15.** [1990] A uniform rod of length L and density rho is being pulled along a smooth floor with a horizontal acceleration alpha. The magnitude of the stress at the transverse cross-section through the mid-point of the rod is rho*alpha*L/n. Find n. **Ans: 2**

**16.** [2007] A wire of cross-section A, Young's modulus Y is stretched by a force F. The elastic PE per unit volume stored in the wire is F^2/(n*A^2*Y). Find n. **Ans: 2**

**17.** [2014] A pendulum made of a uniform wire of cross-sectional area A has time period T. When an additional mass M is added to its bob, the time period changes to T_M. If the Young's modulus of the material of the wire is Y, then 1/Y is equal to [(T_M/T)^2 - 1]*(n)/(Mg). Find the expression for n in terms of A. **Ans: A (i.e., n = A)**

**18.** [2019] A thin rod of length L is lying along the x-axis with its ends at x = 0 and x = L. Its linear density (mass per unit length) varies with x as k*(x/L)^n where n can be zero or any positive number. If the position x_CM of the centre of mass of the rod is plotted against n, which curve best represents the correct behavior? **Ans: x_CM = L(n+1)/(n+2), curve starts at L/2 and asymptotes to L**

**FILL IN THE BLANKS TYPE**

**19.** [1984] A wire of length L and radius r fixed at one end and a force F applied to the other end produces extension l. The extension produced in another wire of same material of length 2L and radius 2r by a force 2F is _______. **Ans: l (same extension)**

**TRUE/FALSE TYPE**

**20.** [1984] A rod of length L and negligible mass is suspended at its two ends by two wires of steel (Y_s) and aluminium (Y_a) of equal lengths and having areas A_s and A_a. In order that a mass suspended at the rod at distance d from steel wire causes equal stress in both wires: d/L = A_s/(A_s + A_a). **Ans: False (should be d/L = A_a/(A_s + A_a))**

**Answer Key (JEE Advanced Archive complete):**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | A | A | A | A | A | C | B | D | B | D | ABC | B | A | P3Q2R3S3 | 2 |

| Q# | 16 | 17 | 18 | 19 | 20 |
|---|---|---|---|---|---|
| Ans | 2 | A | L(n+1)/(n+2) | l | False |
