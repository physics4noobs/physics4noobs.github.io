# Gaseous State and Thermodynamics

## Overview
Gaseous State and Thermodynamics is a crucial chapter for JEE Main and Advanced, covering the Kinetic Theory of Gases (KTG), gas laws, thermodynamic processes, the first and second laws of thermodynamics, specific heat capacities, and heat engines. It connects microscopic molecular behaviour with macroscopic thermodynamic quantities and frequently appears in both conceptual and numerical problems. Mastery of ideal gas relations, process equations, and energy conservation is essential for competitive exams.

## 1. Kinetic Theory of Gases -- Fundamental Assumptions
### Concepts
- All gases consist of molecules which are considered as rigid, perfectly elastic, solid spheres; the volume occupied by the molecules is negligible compared to the volume of the containing vessel
- The molecules are in continuous random motion, moving in all directions with all possible velocities; there is no particular direction of motion of the particles
- Molecules collide with one another and with the walls of the vessel; at each collision velocities change but in steady state molecular density remains uniform and does not change with time
- No forces of attraction or repulsion are exerted on a gas molecule by other molecules or by the container except during collisions; the energy of the gas is purely kinetic
- All collisions among molecules or with the walls are perfectly elastic; kinetic energy is conserved before and after collision
- Molecules travel in straight lines with uniform velocity between collisions; the average distance between successive collisions is called the mean-free path
- A gas satisfying all these assumptions under all conditions of temperature and pressure is called an ideal gas or perfect gas
- A real gas shows deviations from ideal behaviour at low temperature and high pressure

### Formulas
- Ideal gas equation: `PV = nRT` where R = 8.314 J/mol/K = 0.082 L-atm/mol/K = 2 cal/mol/K
- Alternate form: `PM = dRT` where M is molecular weight and d is density
- Pressure exerted by a gas: `P = (1/3)(m0 N/V) c_rms^2 = (1/3) rho c_rms^2`

### Key Diagram: Gas Molecules in a Container
- Molecules moving randomly inside a cubic container, arrows showing velocity vectors in different directions, colliding with walls [SVG-REF]

### Important Notes
- An ideal gas is a theoretical concept; real gases approximate ideal behaviour at high temperature and low pressure
- Evidences for molecular motion: Diffusion (H2 diffuses into CO2 against gravity), Evaporation (escape of fast molecules causes cooling), Brownian Motion (irregular motion of particles due to molecular impacts)
- When two vessels at different temperatures are connected, use: `P = (P1 V1 + P2 V2)/(V1 + V2)` and `T = (n1 T1 + n2 T2)/(n1 + n2)`

### Worked Example
**Q:** A vessel A with capacity V1 = 3 lt contains gas at pressure P1 = 2 atm and a vessel B with capacity V2 = 4 lt contains the same gas at pressure of 1 atm. The temperature is 0 degrees C in A and 27 degrees C in B. What will be the pressure in the vessels if they are connected by a tube?

**A:**
Step 1: T1 = 273 K, T2 = 300 K
Step 2: Initial total energy = Final total energy: `(x/2) n1 R T1 + (x/2) n2 R T2 = (x/2)(n1 + n2) R T`
Step 3: T = final temperature = 283.2 K
Step 4: Final pressure = `(n1 + n2) RT / (V1 + V2)`
Step 5: P = `(6/272 + 4/300) * 283.2/7 = 1.43 atm`

---

## 2. Molecular Speeds
### Concepts
- Root Mean Square (RMS) speed: the square root of the mean of the squares of all molecular speeds
- Average speed: the arithmetic mean of all molecular speeds
- Most probable speed: the speed possessed by the maximum number of molecules
- For the same gas at two different temperatures: `c_rms(1)/c_rms(2) = sqrt(T1/T2)`
- For two different gases at different temperatures: `c_rms(1)/c_rms(2) = sqrt(T1 M2 / T2 M1)`

### Formulas
- RMS speed: `c_rms = sqrt(3P/rho) = sqrt(3RT/M) = sqrt(3kT/m0)`
- Average speed: `c_av = sqrt(8RT/(pi M)) = sqrt(8kT/(pi m0))`
- Most probable speed: `c_mp = sqrt(2RT/M) = sqrt(2kT/m0)`
- Relation: `c_rms > c_av > c_mp` (ratio approximately `1.73 : 1.60 : 1.41` i.e. `sqrt(3) : sqrt(8/pi) : sqrt(2)`)

### Key Diagram: Maxwell Speed Distribution Curve
- Bell-shaped curve with speed on x-axis and number of molecules on y-axis; c_mp at peak, c_av slightly right, c_rms further right [SVG-REF]

### Important Notes
- RMS speed depends on temperature and molecular mass, not on pressure (for ideal gas at given T)
- At the same temperature, lighter molecules move faster
- The ordering is always `v_rms > v_av > v_mp`

### Worked Example
**Q:** Calculate the root mean square speed of argon atoms at room temperature (25 degrees C). At what temperature will the root mean square speed be half that value?

**A:**
Step 1: M_Ar = 0.040 kg/mol, R = 8.3 J/mol/K, T = 273 + 25 = 298 K
Step 2: `c_rms = sqrt(3RT/M) = sqrt(3 * 8.3 * 298 / 0.040) = 430.7 m/s`
Step 3: For same gas: `c_rms(1)/c_rms(2) = sqrt(T1/T2)` => `1/2 = sqrt(T1/298)` => `T1 = 74.5 K = -198.5 degrees C`

---

## 3. Kinetic Energy and Degrees of Freedom
### Concepts
- The average kinetic energy of translation per molecule = `(3/2) kT`
- KE of translation per mole = `(3/2) RT = (3/2) PV`
- Degrees of freedom: the total number of independent quantities required to describe the position or motion of the system completely
- Monoatomic gas (He, Ne, Ar): 3 translational degrees of freedom
- Diatomic gas (H2, N2, O2): 5 degrees of freedom (3 translational + 2 rotational)
- Triatomic gas (CO2, H2O, SO2): 6 degrees of freedom (3 translational + 3 rotational)

### Formulas
- Average KE per molecule = `(1/2) m0 c_rms^2 = (3/2) kT`
- KE of translation per mole = `(3/2) RT`
- KE of translation for n moles = `n(3/2) RT = (3/2) PV`
- Equipartition of energy: each degree of freedom contributes `(1/2) kT` per molecule or `(1/2) RT` per mole
- Total energy per molecule: monoatomic = `(3/2) kT`, diatomic = `(5/2) kT`, triatomic = `3kT`
- Total energy per mole: monoatomic = `(3/2) RT`, diatomic = `(5/2) RT`, triatomic = `3RT`

### Key Diagram: Degrees of Freedom of a Diatomic Molecule
- Diatomic molecule A-A shown along X-axis, with arrows for translational motion along X, Y, Z and rotational motion about YY' and ZZ' axes (rotation about molecular axis XX' is negligible) [SVG-REF]

### Important Notes
- The average KE per molecule depends only on temperature, not on the nature of the gas
- At the same temperature, all ideal gas molecules (regardless of mass) have the same average KE
- Total KE of a gas depends on the nature (mono/di/triatomic) because it includes rotational energy
- For a diatomic gas: total KE = `(5/2) PV` (not `(3/2) PV` which is only translational KE)

### Worked Example
**Q:** An Oxygen storage tank has a capacity of 0.05 m^3. The gas pressure is 100 atm at 27 degrees C. Determine: (a) total KE of translation, (b) average KE of translation of molecules, (c) total KE of the gas.

**A:**
(a) Total KE of translation = `(3/2) PV = (3/2)(100)(10^5)(0.05) = 7.5 x 10^5 J`
(b) Average KE = `(3/2) kT = (3/2)(1.38 x 10^-23)(300) = 6.21 x 10^-21 J`
(c) Total KE (for diatomic gas O2) = `(5/2) PV = (5/2)(100)(10^5)(0.05) = 1.25 x 10^6 J`

---

## 4. Gas Laws
### Concepts

#### Boyle's Law
- At constant temperature, the pressure of a given quantity of gas varies inversely with volume
- `P proportional to 1/V` (for given n and T); `PV = constant`; `P1 V1 = P2 V2`

#### Charles' Law
- At constant pressure, the volume of a given quantity of gas varies directly with absolute temperature
- `V proportional to T` (for given n and P); `V/T = constant`; `V1/T1 = V2/T2`

#### Gay-Lussac's Law
- At constant volume, the pressure of a given quantity of gas varies directly with absolute temperature
- `P proportional to T` (for given n and V); `P/T = constant`; `P1/T1 = P2/T2`

#### Avogadro's Law
- Equal volumes of all gases at the same temperature and pressure contain equal numbers of molecules
- `V1/N1 = V2/N2` at same P and T

#### Dalton's Law of Partial Pressures
- The total pressure of a mixture of non-reacting gases equals the sum of partial pressures of each gas
- `P_T = p1 + p2 + p3 + ...`
- `P_T = (RT/V)(n1 + n2 + ...)`

### Formulas
- Boyle's Law: `P1 V1 = P2 V2` (constant T)
- Charles' Law: `V1/T1 = V2/T2` (constant P)
- Gay-Lussac's Law: `P1/T1 = P2/T2` (constant V)
- Boltzmann constant: `k = R/N0 = 1.38 x 10^-23 J/molecule/K`
- Gas equation in terms of k: `PV = NkT` where `N = nN0` = total number of molecules
- R = 8.314 J/mol/K = 0.082 L-atm/mol/K = 2 cal/mol/K

### Key Diagram: P-V Isotherms (Boyle's Law)
- Family of hyperbolic curves on P vs V axes, each curve at different temperature T1 < T2 < T3, with higher temperature curves further from origin [SVG-REF]

### Important Notes
- All gas laws are strictly valid only for ideal gases
- Real gases deviate significantly at high pressure and low temperature
- When mixing gases at different temperatures in connected vessels, total moles are conserved: initial moles = final moles

### Worked Example
**Q:** An air bubble is released from the bottom of a lake at a depth of 11 m. Temperature at bottom is 4 degrees C and at surface is 12 degrees C. Atmospheric pressure = 75 cm of Hg, density of mercury = 13600 kg/m^3. Find the ratio of the bubble's radius at the surface to its radius at the bottom.

**A:**
Step 1: P1 (bottom) = 75 + 80.88 = 155.88 cm Hg; P2 (surface) = 75 cm Hg
Step 2: T1 = 277 K, T2 = 285 K
Step 3: Using `P1 V1/T1 = P2 V2/T2`: `V2/V1 = (P1/P2)(T2/T1) = 2.138`
Step 4: `r2/r1 = (V2/V1)^(1/3) = (2.138)^(1/3) = 1.288`

---

## 5. Work Done and Internal Energy
### Concepts
- Work done by a gas during expansion: `dW = P dV`; total work `W = integral of P dV`
- Work done equals the area under the P-V curve above the V-axis
- If volume is constant (isochoric): W = 0
- If pressure is constant (isobaric): W = P(V2 - V1) = nR(T2 - T1)
- Work done depends on the path taken between two states (it is a path function)
- Internal energy U is the total energy of all atoms and particles in the system
- Change in internal energy Delta U depends only on initial and final temperatures (it is a state function)
- `Delta U = n Cv Delta T` for every process (since U is a state function)

### Formulas
- Work done by gas: `W = integral from V1 to V2 of P dV`
- At constant pressure: `W = P Delta V = nR Delta T`
- At constant volume: `W = 0`
- Internal energy change: `Delta U = n Cv Delta T = nR Delta T / (gamma - 1)`

### Key Diagram: Work Done from P-V Diagram
- P-V diagram showing a curve from state A(P1, V1) to state B(P2, V2), with shaded area under the curve representing work done [SVG-REF]

### Important Notes
- Work done BY the system is positive (+); work done ON the system is negative (-)
- Heat gained by the system is positive (+); heat lost is negative (-)
- Increase in internal energy is positive (+); decrease is negative (-)
- Delta U is the same for all paths between two given states; W and Delta Q depend on the path
- Delta Q is usually measured in calories; Delta U and W in Joules

---

## 6. First Law of Thermodynamics
### Concepts
- The first law is a statement of conservation of energy applied to thermodynamic systems
- If Delta Q is heat gained by the system, W is work done by the system, and Delta U is the change in internal energy, then: `Delta Q = Delta U + W`
- Heat supplied to a system goes partly into increasing internal energy and partly into doing external work
- The zeroth law states: if two bodies A and B are in thermal equilibrium with a third body C, then A and B are in thermal equilibrium with each other

### Formulas
- First Law: `Delta Q = Delta U + W`
- `Delta Q = n Cv Delta T + integral P dV`

### Key Diagram: First Law Energy Flow
- Block diagram showing heat Delta Q flowing into a system, splitting into Delta U (stored) and W (work output) [SVG-REF]

### Important Notes
- The first law does not tell us the direction in which a process will occur; that is given by the second law
- In a cyclic process: Delta U = 0 (returns to same state), so `Delta Q = W` (net heat = net work)
- Sign convention must be consistent: the convention used here is Delta Q = Delta U + W

### Worked Example
**Q:** A system is taken from state i to state f along path "iaf" with Delta Q = 50 cal, Delta W = 20 cal. Along path "ibf", Delta Q = 36 cal. Find: (a) Delta W along "ibf", (b) If Delta W = -13 cal for path "fi", what is Delta Q? (c) If U_i = 10 cal, find U_f. (d) If U_b = 22 cal, find Delta Q for process "ib" and "bf".

**A:**
Path "iaf": Delta U = 50 - 20 = 30 cal. So U_f - U_i = 30 cal.
(a) Along "ibf": Delta W = Delta Q - Delta U = 36 - 30 = 6 cal
(b) Path "fi": Delta U = -(30) = -30 cal; Delta Q = Delta U + W = -30 + (-13) = -43 cal
(c) U_f = U_i + 30 = 10 + 30 = 40 cal
(d) Process "ib": Delta Q = (U_b - U_i) + Delta W_ib = (22 - 10) + 6 = 18 cal; Process "bf": Delta Q = (U_f - U_b) + 0 = 40 - 22 = 18 cal

---

## 7. Specific Heat Capacities (Cp and Cv)
### Concepts
- Specific heat of a gas: heat required to raise the temperature of unit mass through 1 K
- Molar specific heat = molecular weight x specific heat (units: J/mol/K or cal/mol/K)
- Cv (molar specific heat at constant volume): heat required to raise temperature of 1 mole by 1 K at constant volume
- Cp (molar specific heat at constant pressure): heat required to raise temperature of 1 mole by 1 K at constant pressure
- Cp > Cv always, because at constant pressure the gas must do additional work of expansion
- The ratio gamma = Cp/Cv is called the adiabatic exponent

### Formulas
- At constant volume: `Delta Q = n Cv Delta T`; since W = 0, `Delta Q = Delta U` => `n Cv Delta T = Delta U`
- At constant pressure: `Delta Q = n Cp Delta T`; W = P Delta V = nR Delta T
- Mayer's relation: `Cp - Cv = R`
- From Cp/Cv = gamma and Cp - Cv = R: `Cv = R/(gamma - 1)` and `Cp = gamma R/(gamma - 1)`
- For monoatomic gas: Cv = (3/2)R, Cp = (5/2)R, gamma = 5/3
- For diatomic gas: Cv = (5/2)R, Cp = (7/2)R, gamma = 7/5
- For triatomic gas: Cv = 3R, Cp = 4R, gamma = 4/3

### Key Diagram: Cp and Cv for Different Gas Types
- Table showing gas type (mono/di/tri), degrees of freedom (3/5/6), Cv, Cp, and gamma values [SVG-REF]

### Important Notes
- Cp is always greater than Cv for any gas
- The difference Cp - Cv = R is universal for all ideal gases
- A gas has infinite specific heats (it depends on the process); Cv and Cp are two specific defined values
- For a polytropic process PV^x = constant, the molar heat capacity is: `C = R/(gamma - 1) - R/(x - 1) = Cv - R/(x - 1)`

### Worked Example
**Q:** One mole of oxygen is heated at constant pressure from 0 degrees C. What must be the quantity of heat supplied for the temperature to be doubled? If the same heat is supplied at constant volume, what will be the final temperature?

**A:**
Step 1: T1 = 273 K, T2 = 546 K (doubled)
Step 2: At constant pressure: `Delta Q = n Cp Delta T = 1 * (7/2) * 8.3 * (546 - 273) = 7930.6 J`
Step 3: At constant volume: `Delta Q = n Cv Delta T` => `7930.6 = 1 * 8.3/(1.4 - 1) * (T - 273)`
Step 4: `T = 655 K`

---

## 8. Thermodynamic Processes
### Concepts

#### Isothermal Process (T = constant)
- Temperature remains constant; system in thermal contact with a heat reservoir
- Gas obeys Boyle's Law: PV = constant
- Delta U = 0 (temperature unchanged); Delta Q = W (all heat converts to work)
- Process is slow to maintain thermal equilibrium

#### Adiabatic Process (Delta Q = 0)
- No heat enters or leaves the system; system is thermally insulated
- Delta U + W = 0 => W = -Delta U
- Gas obeys: `PV^gamma = constant`
- Also: `TV^(gamma-1) = constant` and `T^gamma P^(1-gamma) = constant`
- Adiabatic curve is steeper than isothermal on P-V diagram
- Adiabatic expansion: temperature falls, gas does positive work, internal energy decreases
- Adiabatic compression: temperature rises, work done on gas, internal energy increases

#### Isochoric Process (V = constant)
- Volume remains constant; W = 0
- P proportional to T; `P1/T1 = P2/T2`
- Delta Q = Delta U = n Cv Delta T
- Heat given => temperature and pressure rise; heat taken out => temperature and pressure fall

#### Isobaric Process (P = constant)
- Pressure remains constant; gas obeys Charles' Law: V proportional to T
- W = P(V2 - V1) = nR(T2 - T1)
- Delta Q = n Cp Delta T
- Isobaric expansion: V, T rise, positive work; isobaric compression: V, T fall, negative work

### Formulas

| Process | Work Done (W) | Heat Exchange (Delta Q) |
|---|---|---|
| Isothermal | `W = 2.303 nRT log10(V2/V1)` | `Delta Q = 2.303 nRT log10(V2/V1)` |
| Adiabatic | `W = (P1V1 - P2V2)/(gamma-1) = nR(T1-T2)/(gamma-1)` | `Delta Q = 0` |
| Isochoric | `W = 0` | `Delta Q = n Cv Delta T` |
| Isobaric | `W = P(V2-V1) = nR(T2-T1)` | `Delta Q = n Cp Delta T` |

- Internal energy change for ALL processes: `Delta U = n Cv Delta T = nR Delta T/(gamma - 1)`

### Key Diagram: Four Processes on P-V Diagram
- P-V diagram showing isothermal (hyperbola), adiabatic (steeper curve), isochoric (vertical line), and isobaric (horizontal line) processes, with labels [SVG-REF]

### Important Notes
- The adiabatic curve is always steeper than the isothermal curve at any point on the P-V diagram
- For adiabatic process: `P1 V1^gamma = P2 V2^gamma`, `T1 V1^(gamma-1) = T2 V2^(gamma-1)`, `T1^gamma P1^(1-gamma) = T2^gamma P2^(1-gamma)`
- In isothermal expansion, work is done by the gas using heat from the reservoir
- In adiabatic expansion, work is done at the expense of internal energy (temperature drops)
- A sudden or rapid process is approximately adiabatic

### Worked Example
**Q:** In a cylinder, 2.0 moles of an ideal monoatomic gas initially at 1.0 x 10^6 Pa and 300 K expands until its volume doubles. Compute the work done if the expansion is: (a) isothermal, (b) adiabatic, (c) isobaric.

**A:**
(a) Isothermal: `W = 2.303 nRT log(V2/V1) = 2.303 * 2 * 8.3 * 300 * log10(2) = 3452 J`
(b) Adiabatic: `T2 = T1 (V1/V2)^(gamma-1) = 300 * (1/2)^(2/3) = 189 K`; `W = nR(T1-T2)/(gamma-1) = 2*8.3*(300-189)/(5/3-1) = 2764 J`
(c) Isobaric: `V1 = nRT1/P1 = 4.98 x 10^-3 m^3`; `W = P(V2-V1) = P*V1 = 10^6 * 4.98 x 10^-3 = 4980 J`

---

## 9. Carnot Engine, Second Law, and Entropy
### Concepts
- A Carnot engine is an ideal heat engine operating between two temperatures (source T1 and sink T2) in a reversible cycle
- Carnot cycle consists of four steps: (1) isothermal expansion at T1, (2) adiabatic expansion from T1 to T2, (3) isothermal compression at T2, (4) adiabatic compression from T2 to T1
- Efficiency of Carnot engine: `eta = 1 - T2/T1` (T in Kelvin)
- eta = 1 (100%) only if T2 = 0 K (absolute zero), which is impossible
- Second Law of Thermodynamics:
  - Kelvin-Planck statement: It is impossible to construct an engine that converts all heat into work with no other effect (no perfect heat engine)
  - Clausius statement: It is impossible for heat to flow from a colder body to a hotter body without external work (no perfect refrigerator)
- Entropy (S): a measure of disorder of a system; `Delta S = Delta Q / T` for a reversible process

### Formulas
- Carnot efficiency: `eta = 1 - T2/T1 = W/Q1 = (Q1 - Q2)/Q1`
- Work done per cycle: `W = Q1 - Q2`
- `Q1/T1 = Q2/T2` (for Carnot cycle)
- Coefficient of performance (refrigerator): `beta = Q2/W = T2/(T1 - T2)`

### Key Diagram: Carnot Cycle on P-V Diagram
- P-V diagram showing four processes: isothermal expansion AB, adiabatic expansion BC, isothermal compression CD, adiabatic compression DA, forming a closed loop [SVG-REF]

### Important Notes
- The Carnot engine has the maximum possible efficiency for any engine operating between two given temperatures
- No real engine can be more efficient than a Carnot engine
- Efficiency depends only on the temperatures of source and sink, not on the working substance
- Entropy of an isolated system never decreases (it either increases or remains constant)
- For a reversible process: Delta S_total = 0; for an irreversible process: Delta S_total > 0

---

## Formula Summary Table

| Quantity | Formula |
|---|---|
| Ideal gas equation | `PV = nRT` |
| Pressure by gas | `P = (1/3) rho c_rms^2` |
| RMS speed | `c_rms = sqrt(3RT/M)` |
| Average speed | `c_av = sqrt(8RT/(pi M))` |
| Most probable speed | `c_mp = sqrt(2RT/M)` |
| Average KE per molecule | `(3/2) kT` |
| Total energy per mole (mono) | `(3/2) RT` |
| Total energy per mole (di) | `(5/2) RT` |
| Boyle's Law | `P1 V1 = P2 V2` (T const) |
| Charles' Law | `V1/T1 = V2/T2` (P const) |
| Mayer's relation | `Cp - Cv = R` |
| Cv | `R/(gamma - 1)` |
| Cp | `gamma R/(gamma - 1)` |
| gamma (mono/di/tri) | `5/3, 7/5, 4/3` |
| First Law | `Delta Q = Delta U + W` |
| Delta U (all processes) | `n Cv Delta T = nR Delta T/(gamma - 1)` |
| Isothermal work | `W = 2.303 nRT log10(V2/V1)` |
| Adiabatic work | `W = nR(T1 - T2)/(gamma - 1)` |
| Adiabatic relation | `PV^gamma = constant` |
| Carnot efficiency | `eta = 1 - T2/T1` |
| Polytropic heat capacity | `C = R/(gamma-1) - R/(x-1)` for `PV^x = const` |
| Boltzmann constant | `k = 1.38 x 10^-23 J/K` |

---

## Questions

### ANSWER KEYS (Reference)

**Workbook Answer Key -- Level 1 (Q1-60)**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | B | A | B | C | C | C | B | A | A | C | B | B | D | B | D |

| Q# | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | C | D | A | A | A | C | A | A | C | A | A | B | D | A | B |

| Q# | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | D | C | C | B | C | A | B | D | B | C | C | A | D | C | B |

| Q# | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | B | A | B | A | A | A | A | A | D | C | B | D | B | B | A |

**Workbook Answer Key -- Level 1 (Q61-75, NAT)**

| Q# | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | 5 | 150 | 20 | 25 | 8 | 3 | 50 | 3 | 923 | 250 | 3 | 4 | 6 | 3.03 | 11 |

**Workbook Answer Key -- Level 2 (Q76-115)**

| Q# | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | D | 0.12 | C | B | C | ABD | B | D | B | C | B | A | D | ABCD | BD |

| Q# | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99 | 100 |
|---|---|---|---|---|---|---|---|---|---|---|
| Ans | AD | A-Q; B-R; C-P; D-R | A | B | C | ABC | B | A | A-Q; B-R,S; C-P; D-Q | CD |

| Q# | 101 | 102 | 103 | 104 | 105 | 106 | 107 | 108 | 109 | 110 | 111 | 112 | 113 | 114 | 115 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | BC | A | C | 166.2 | A | AB | ABD | A | BC | A | A | A | A | B | D |

**Workbook Answer Key -- Previous Years JEE Main (Q1-81)**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | C | A | C | D | A | D | C | B | B | D | B | C | C | A | B |

| Q# | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | A | A | B | C | A | B | B | B | D | A | C | A | A | C | C |

| Q# | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | A | B | A | C | C | D | B | A | D | A | D | B | B | C | C |

| Q# | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | B | C | A | C | A | C | A | A | B | B | B | B | B | A | D |

| Q# | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | D | A | D | D | None | D | A | C | D | A | D | D | D | C | C |

| Q# | 76 | 77 | 78 | 79 | 80 | 81 |
|---|---|---|---|---|---|---|
| Ans | C | B | A | D | C | D |

**Workbook Answer Key -- Previous Years JEE Advanced (Q1-59)**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | A | A | B | B | D | B | A | B | D | D | C | C | A | C | D |

| Q# | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | B | D | A | C | A | B | A | D | A | A | B | A | C | D | A |

| Q# | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | D | D | D | C | ABCD | ABD | BC | CD | BD | BA | AB | ABD | ABC | ACD | BCD |

| Q# | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | ABD | CD | A | D | C | D | B | B | D | D | A | B | B | B |

| Q# | 60 | 61 | 62 | 63 | 64 | 65 |
|---|---|---|---|---|---|---|
| Ans | A-Q; B-P,S; C-S; D-Q,R | A-S; B-Q; C-P,Q; D-Q,R | A-Q; B-P,R; C-P,S; D-Q,S | A-P,R,T; B-P,R; C-Q,S; D-R,T | A-S; B-R; C-Q; D-P | C |

| Q# | 66 | 67 | 68 | 69 | 70 | 71 | 72 |
|---|---|---|---|---|---|---|---|
| Ans | D | B | 817 | -972 | (i) 1.965, (ii) 36 | 83.83 | 75.4 |

| Q# | 73 | 74 | 75 |
|---|---|---|---|
| Ans | (i) 1869.75, (ii) -5297.63, (iii) 500 | (i) 765, (ii) 10.82 | (i) 189, (ii) -2767, (iii) 2767 |

| Q# | 76 | 77 | 78 | 79 | 80 | 81 |
|---|---|---|---|---|---|---|
| Ans | (i) 909, (ii) 791.4, (iii) 61.4 | (i) 3250, (ii) 2750 | (i) 600, (ii) 4988 | (i) 4/3, (ii) 448.8 | 4 | 2 |

| Q# | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 |
|---|---|---|---|---|---|---|---|---|---|
| Ans | 900 | hollow sphere | 2R | sqrt(2T) | 675, 3.6 x 10^6 | 300 | 0.628 | 4.074, 23.926 | 45.68 |

| Q# | 91 | 92 | 93 | 94 | 95 | 96 | 97 |
|---|---|---|---|---|---|---|---|
| Ans | (i) P0V0, (ii) (5/2)P0V0, 3P0V0, (iii) P0V0/2, (iv) (25/8)(P0V0/R) B | Mv0^2/(3R) | False | False | True | False | True |

**In-Chapter Exercise A (from Module Section 2)**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | 6.225x10^5 N/m^2 | 1.97 kg/m^3 | 3.418x10^5 | 440.5 m/s | (a) 4 atm, (b) 1:2, (c) 1:1, (d) 1:2, (e) 600 K | 70.89 cm of Hg | 6.64x10^-23 gm, 40 | B | A | C | B | A-2, B-1, C-4, D-4 |

**In-Chapter Exercise B (from Module Section 4)**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| Ans | (a) 0.4, (b) 212.2 K, (c) 583 J | (ii) 831 J, (iii) on the piston, (iv) 2909 J, (v) 2078.5 J, (vi) 831 J | (ii) 12.471 kJ, (iii) DeltaV=0, (iv) 12.471 kJ, (v) 113.14 lt | (i) 5, (ii) 1.25 PV | (n1T1+n2T2)/(n1+n2) | 7J | (i) 1150.8 J, (ii) 1150.8J, (iii) 0 J | (ii) DeltaQ = DeltaW = RT(ln8 - 1.5) | C | ABCD |

**Miscellaneous Exercise (from Module)**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|
| Ans | B | A | D | B | C | A | BCD | D |

---

### GASEOUS STATE & THERMODYNAMICS: LEVEL 0 (EASY)
*Source: DTS-0 (CBSE Pattern)*

**VSA: Very Short Answer Type (1 mark)**

**1.** State the first law of thermodynamics.

**2.** When is the heat supplied to a system equal to the increase in its internal energy?

**3.** A gas does work during isothermal expansion. What is the source of mechanical energy so produced?

**4.** The temperature of a gas rises during an adiabatic compression, although no heat is given to the gas from outside. Why?

**5.** Write Kelvin-Planck statement for second law of thermodynamics.

**SA-I: Short Answer Type I (2 marks)**

**6.** Compare the formula Cp - Cv = R for an ideal gas with the thermodynamics relation Delta U = Delta Q - P Delta V.

**7.** Of what physical significance is the difference between the two principal specific heat capacities and their ratio?

**8.** (i) Can specific heat of a gas be negative?
(ii) What is the specific heat of a gas in an adiabatic process?

**9.** 400 J of work is done on a gas to reduce its volume by compression adiabatically. What is the change in internal energy of the gas?

**10.** An ideal gas is taken around the cycle ABCDA as shown in the P-V diagram. What is the work done during the cycle? [SVG-REF]

**11.** Can a kitchen be cooled by leaving the door of an electric refrigerator open?
Or
If a door of a working refrigerator is kept open for a long time in a closed room, will it make the room warm or cold?

**12.** What happens to the change in internal energy of a gas during (i) isothermal expansion (ii) adiabatic expansion?

**SA-II: Short Answer Type II (3 marks)**

**13.** (i) What is the significance of the area of closed curve on a P-V diagram?
(ii) Can the work done during a cyclic process be zero?
(iii) How many specific heats does a gas possess?

**14.** (i) The efficiency of a Carnot engine is 1/2. If the sink temperature is reduced by 100 degrees C, then engine efficiency becomes 2/3. Find the source temperature and sink temperature.
(ii) Explain why a Carnot engine cannot have 100% efficiency?

**15.** The state of a gas is changed adiabatically from state of equilibrium A to state of equilibrium B. In this process, 22.3 J work is done on the system. If the gas is taken from A to B via a process in which the net heat absorbed by the system is 9.35 cal, how much is the net work done by the system in latter case?

**16.** A gas expands in such a manner that its pressure and volume comply with the condition PV^2 = constant. Will the gas cool or get heated on expansion?

**17.** Show that the slope of adiabatic curve at any point is gamma times the slope of an isothermal curve at the corresponding point.

**18.** The volume versus temperature graph for a certain amount of a perfect gas at two pressures P1 and P2 are shown in figure. Which one is greater -- P1 or P2? [SVG-REF]

**19.** Define Cp and Cv. Why is Cp > Cv? For an ideal gas, prove that Cp - Cv = R.

**20.** Two gases have the same initial pressure P, volume V and temperature T. They both expand to the same volume from V to 2V, one adiabatically and the other isothermally. Plot P-V diagram for the given situation and hence explain
(i) In which case is the final pressure greater?
(ii) In which case is the work done greater?
(iii) In which case is the final temperature greater?

**21.** (i) Cooling is produced when a gas at high pressure suddenly expands. Why?
(ii) When a gas is suddenly compressed, its temperature rises. Why?

**22.** (i) Is it possible that there is change in temperature of a body without giving heat to it or taking heat from it?
(ii) Can the temperature of a gas be increased by keeping its pressure and volume constant?

**23.** Two Carnot engines A and B are operated in series. The first one A receives heat at 900 K and rejects it to a reservoir at temperature T. The second engine B operates on this reservoir and rejects heat to a reservoir at 400 K. Calculate temperature T when
(i) Efficiencies of both A and B are equal.
(ii) The work outputs of both A and B are equal.

**24.** (i) During a process, the volume of a gas is found to depend inversely on the square of its absolute temperature. Find how its pressure will depend on the absolute temperature.
(ii) Can two isothermal curves intersect?

**LA: Long Answer Type (5 marks)**

**25.** What is an isothermal process? State essential conditions for such a process to take place. Show analytically that work done by one mole of an ideal gas during isothermal expansion from volume V1 to volume V2 is given by `W = RT log_e (V2/V1)`. What is the change in internal energy of a gas, which is compressed isothermally?

**26.** Define an adiabatic process and state essential conditions for such a process to take place. Write its process equations in terms of P-V, T-V and P-T. Show analytically that work done by one mole of an ideal gas during adiabatic expansion from temperature T1 to T2 is given by `W = R(T1 - T2)/(gamma - 1)`.

**27.** Define a Carnot engine. Draw P-V diagram for Carnot cycle and list down the sequence of processes involved in it. Derive an expression for the efficiency of a Carnot engine.

---

### GASEOUS STATE & THERMODYNAMICS: LEVEL 1
*Source: DTS-1 (Kinetic Theory of Gases), DTS-2 (Gas Laws), DTS-3 (First Law and Processes), DTS-4 (Cyclic Processes and Heat Engines)*

#### DTS-1: Kinetic Theory of Gases

**1.** Four particles have velocities 1, 0, 2 and 3 m/s. The root mean square velocity of the particles (definition wise) is:
(A) 3.5 m/s (B) sqrt(3.5) m/s (C) 1.5 m/s (D) sqrt(14/3) m/s

**2.** A mixture of n mole of Nitrogen and 1 mole of hydrogen is kept in a container at room temperature. The ratio of r.m.s. velocities of hydrogen and nitrogen molecules is:
(A) sqrt(14) (B) sqrt(28) (C) n x 14 (D) n/26

**3.** Two ideal diatomic gases have their molar masses in the ratio 1:16 and temperature in the ratio 1:4. The average kinetic energy per molecule in the two cases will be in the ratio:
(A) 1:16 (B) 1:4 (C) 1:2 (D) 1:64

**4.** If we increase temperature of a gas sample, which of the following is true?
(A) K.E. of gas sample decrease (B) Average speed remains constant (C) Average momentum remains constant (D) P.E. of gas sample increases

**5.** The root-mean-square (rms) speed of oxygen molecules (O2) at a certain absolute temperature is v. If the temperature is doubled and the oxygen gas dissociates into atomic oxygen, the rms speed would be (nearly):
(A) v (B) sqrt(2v) (C) 2v (D) 2sqrt(2)v

**6.** The ratio of average translational K.E. and average rotational K.E. of a linear polyatomic molecule at temperature T is:
(A) 3 (B) 5 (C) 3/2 (D) 7/5

**7.** A closed and big compartment containing gas is moving with some acceleration in horizontal direction, neglect effect of gravity. Then the pressure in the compartment is:
(A) Same everywhere (B) Lower in the front side (C) Lower in the rear side (D) Lower in the upper side

**8.** A sample of a gas is kept in a closed container and temperature is increased. Which of the following is true?
(A) Pressure is increased because momentum transferred per collision to wall is increased (B) Pressure is decreased (C) Pressure is increased because frequency of collision is decreased (D) Both (A) and (C) are correct

**9.** At what temperature the effective speed of gaseous H2 molecules is equal to that of oxygen molecules at 320 K?
(A) 20 K (B) 50 K (C) 40 K (D) 30 K

**10.** There are two samples A and B, which contains two different gases. Each sample has one mole of a gas. Graph between internal energy (E) and temperature (T) as shown in figure, then: [SVG-REF]
(A) A contains He, B contains O2 (B) B contains N2, A contains O2 (C) A contains CO2, B contains He (D) A contains He, B contains CO2

**11.** The pressure of an ideal diatomic gas can be represented as P = 2E/(3V), here V is volume and E is:
(A) Rotational kinetic energy (B) Translational kinetic energy (C) Vibrational kinetic energy (D) Total kinetic energy

**12.** Consider a mixture of oxygen and hydrogen kept at room temperature. As compared to a hydrogen molecule an oxygen molecule hits the wall:
(A) with greater average speed (B) with smaller average speed (C) with greater average kinetic energy (D) with smaller average kinetic energy

**13.** The gas of capacity 20 ml is filled with hydrogen gas. The total average kinetic energy of translatory motion of its molecules is 1.52 x 10^4 joules. The pressure of hydrogen in the cylinder is:
(A) 2 x 10^5 N/m^2 (B) 3 x 10^5 N/m^2 (C) 4 x 10^5 N/m^2 (D) 5 x 10^5 N/m^2

**14.** A gas at a pressure P0 is contained in a vessel. If the masses of all the molecules are halved and their velocities doubled, the resulting pressure P would be equal to:
(A) 4P0 (B) 2P0 (C) P0 (D) P0/2

**15.** Four molecules of a gas have velocity 2, 4, 6 and 8 km/s, respectively. The ratio of their root mean velocity and average speed is:
(A) 0.913 (B) 1.059 (C) 0.931 (D) 1.095

#### DTS-2: Gas Laws

**16.** Air fills a room in winter at 7 degrees C and in summer at 37 degrees C. If the pressure is the same in winter and summer, the ratio of the weight of the air filled in winter and that in summer is:
(A) 2.2 (B) 1.75 (C) 1.1 (D) 3.3

**17.** 28 g of N2 gas is contained in a flask at a pressure of 10 atm and at a temperature of 57 degrees C. It is found that due to leakage in the flask, the pressure is reduced to half and the temperature to 27 degrees C. The quantity of N2 gas that leaked out is:
(A) 11/20 g (B) 20/11 g (C) 5/63 g (D) 63/5 g

**18.** The length of an air column trapped in a capillary tube by means of a mercury pellet is 5 cm at 30 degrees C. If the tube is heated uniformly to 80 degrees C, the new length of air column is: [SVG-REF]
(A) 5.83 cm (B) 6.83 cm (C) 58.3 cm (D) 4.87 cm

**19.** An ideal gas mixture filled inside a balloon expands according to relation PV^(1/3) = constant. The temperature of the gas inside the balloon is:
(A) Increasing (B) Constant (C) Decreasing (D) Cannot be said

**20.** The given curve represents the variation of temperature as a function of volume for one mole of an ideal gas. Which of the following curves best represents the variation of pressure as a function of volume? [SVG-REF]
(A) [SVG-REF] (B) [SVG-REF] (C) [SVG-REF] (D) [SVG-REF]

**21.** At the top of mountain, a thermometer reads 280 K and a barometer reads 70 cm Hg. At the bottom of mountain, they read 300 K and 76 cm of Hg. Find the ratio of densities of air at the top and that at the bottom.
(A) 0.80 (B) 0.89 (C) 0.99 (D) 0.97

**22.** Figure shows graphs of pressure vs density for an ideal gas at two temperatures T1 and T2. Then: [SVG-REF]
(A) T1 > T2 (B) T1 = T2 (C) T1 < T2 (D) any of the three is possible

**23.** When a gas filled in a closed vessel is heated through 1 degree C, its pressure increases by 0.4%. The initial temperature of the gas was:
(A) 250 K (B) 2500 K (C) 250 degrees C (D) 25 degrees C

**24.** When an air bubble rises from the bottom to the surface of a lake, its radius becomes double. Find the depth of the lake, given that the atmospheric pressure is equal to the pressure due to column of water 10 m high. Assume constant temperature and disregard surface tension.
(A) 30 m (B) 40 m (C) 70 m (D) 80 m

**25.** n1 mole of a monoatomic gas is mixed with n2 mole of a diatomic gas. (Assume gases are ideal). If Cp/Cv for the mixture is found to be 1.5, then n1:n2 is:
(A) 1:1 (B) 1:3 (C) 2:3 (D) 3:2

**26.** In a very good vacuum system in the laboratory, the vacuum attained was 10^-13 atm. If the temperature of the system was 300 K, the number of molecules present in a volume of 1 cm^3 is:
(A) 2.4 x 10^6 (B) 24 (C) 2.4 x 10^9 (D) zero

**27.** The given P-U graph shows the variation of internal energy of an ideal gas with increase in pressure. Which of the following pressure-volume graph is equivalent to this graph? [SVG-REF]
(A) [SVG-REF] (B) [SVG-REF] (C) [SVG-REF] (D) [SVG-REF]

**28.** A vessel of volume 50 litre contains an ideal gas at 0 degrees C. A portion of the gas is allowed to leak out from it under isothermal conditions so that pressure inside falls by 0.8 atmosphere. The number of moles of gas leaked out is nearly:
(A) 1.51 mole (B) 1.63 mole (C) 1.98 mole (D) 1.78 mole

**29.** A glass container encloses gas at a pressure 4 x 10^5 Pa and 300 K temperature. The container walls can bear a maximum pressure of 8 x 10^5 Pa. If the temperature of container is gradually increased find temperature at which container will break.
(A) 600 K (B) 150 K (C) 1200 K (D) 375 K

**30.** One mole of ideal gas goes through process P = 2V^2/(1 + V^2). Then change in temperature of gas when volume changes from V = 1 m^3 to 2 m^3 is:
(A) -4/(5R) K (B) 11/(5R) K (C) -5/(2R) K (D) 2K

#### DTS-3: First Law of Thermodynamics and Processes

**31.** The first law of thermodynamics is a statement of:
(A) conservation of heat (B) conservation of work (C) conservation of momentum (D) conservation of energy

**32.** For a p-V plot, the slope of an adiabatic curve = x times slope of isothermal at the same point. Here x is:
(A) R/(gamma - 1) (B) 1/gamma (C) gamma (D) 1/(gamma - 1)

**33.** Average degree of freedom per molecule of gas is 6. If 25 J of work is done by gas at constant pressure, find heat absorbed or evolved by gas.
(A) 50 J (B) 500 J (C) 100 J (D) 150 J

**34.** 30 litre of a gas at STP is isothermally compressed to 6 litre. Amount of heat taken out of the gas is: [ln 5 = 1.6]
(A) 8.05 J (B) 4.8 kJ (C) 18.05 J (D) 18.05 kJ

**35.** Four curves A, B, C and D are drawn in the figure for a given amount of gas. The curves which represent adiabatic and isothermal changes are: [SVG-REF]
(A) C and D respectively (B) D and C respectively (C) A and B respectively (D) B and A respectively

**36.** Two adiabatic expansions of n mole of same gas are shown. If VB/VA = (VD/VC) x (1/2) then TC/TD is: (gamma = 1.4) [SVG-REF]
(A) 2^(0.4) TA/TB (B) 2^(1.4) TA/TB (C) (TA/TB) * 1/2^(0.4) (D) TA/TB

**37.** Ideal mono-atomic gas is taken through process such that dQ = 3dU. The molar heat capacity for process is:
(A) 3R (B) 4.5R (C) 4R (D) 2R

**38.** When an ideal gas at pressure P, temperature T and volume V is isothermally compressed to V/n, its pressure becomes Pi. If the gas is compressed adiabatically to V/n, its pressure becomes Pa. The ratio Pi/Pa is: (gamma = Cp/Cv)
(A) 1 (B) n (C) n^gamma (D) n^(1-gamma)

**39.** During adiabatic process, pressure P and density rho equation is:
(A) P*rho^gamma = constant (B) P*rho^(-gamma) = constant (C) P^gamma * rho^(gamma+1) = constant (D) P^(1/gamma) * rho^gamma = constant

**40.** The ratio cp/cv = gamma for a gas. Its molecular weight is M. Its specific heat capacity at constant pressure is:
(A) R/(gamma - 1) (B) gamma*R/(gamma - 1) (C) gamma*R/(M(gamma - 1)) (D) gamma*R*M/(gamma - 1)

**41.** P-V diagram of a monatomic gas is a straight line passing through origin. The molar heat capacity of the gas in the process will be:
(A) 3R/2 (B) R/2 (C) 2R (D) 3R

**42.** One mole of an ideal gas (mono-atomic) at temperature T0 expands slowly according to law P^2 = cT (c is constant). If final temperature is 2T0, heat supplied to gas is:
(A) 2RT0 (B) (3/2)RT0 (C) RT0 (D) RT0/2

**43.** A mono-atomic gas is taken along path AB as shown. Calculate change in internal energy of the gas. [SVG-REF]
(A) 279.8 J (B) 341 J (C) 241 J (D) Zero

**44.** A gas is compressed adiabatically till its pressure becomes 27 times its initial pressure. Calculate final temperature if initial temperature is 27 degrees C and value of gamma is 3/2.
(A) 300 K (B) 600 K (C) 900 K (D) 1200 K

**45.** The volume of one mole of ideal gas with adiabatic exponent gamma = 4/3 is varied according to law V = 1/T. Find amount of heat obtained by gas in this process if gas temperature is increased by 100 K.
(A) 100R (B) 200R (C) 300R (D) 400R

#### DTS-4: Cyclic Processes, Heat Engines and Refrigerators

**46.** In a cyclic process shown in the figure an ideal gas is adiabatically taken from B to A, the work done on the gas during the process BA is 30 J. During process AB the heat absorbed by the gas is 20 J. The change in internal energy of the gas in the process AB is: [SVG-REF]
(A) 20 J (B) -30 J (C) 50 J (D) -10 J

**47.** A gas is taken through cyclic process ABCA as shown in figure. If 2.4 cal of heat is given in the process, what is the value of J (Mechanical equivalent of heat)? [SVG-REF]
(A) 4.17 J/cal (B) 4.4 J/cal (C) 4.12 J/cal (D) None of these

**48.** A Carnot engine has same efficiency between (i) 100 K and 500 K and (ii) T K and 900 K. The value of T is:
(A) 200 K (B) 180 K (C) 200 K (D) 320 K

**49.** If a system undergoes an adiabatic change from state 1 to state 2, the work done by the gas is:
(A) U1 - U2 (B) U2 - U1 (C) Cv(T2 - T1) (D) (1/2)(P2V2 - P1V1)

**50.** Two different ideal diatomic gases A and B are initially in the same state. A and B are then expanded to same final volume through adiabatic and isothermal process respectively. If PA, PB and TA, TB represents the final pressure and temperatures of A and B respectively then:
(A) PA < PB and TA < TB (B) PA > PB and TA > TB (C) PA > PB and TA < TB (D) PA < PB and TA > TB

**51.** A Carnot refrigerator works between two temperatures of 300 K and 600 K. Find the COP of the refrigerator if heat removed from lower temperature is 300 J.
(A) 1 (B) 1.2 (C) 0.5 (D) 0.8

**52.** In the following P-V diagram of an ideal gas, two adiabates cut two isotherms at T1 and T2. The value of VB/VC is: [SVG-REF]
(A) = VA/VD (B) < VA/VD (C) > VA/VD (D) cannot say

**53.** An ideal monoatomic gas undergoes the process AB as shown in the figure. If the heat supplied and the work done in the process are Q and W respectively, the ratio Q:W is: [SVG-REF]
(A) 2.50 (B) 1.67 (C) 0.67 (D) 0.40

**54.** One mole of a gas is subjected to two processes AB and BC, one after the other as shown in the figure. BC is represented by PV^n = constant. We can conclude that: (T = temperature, W = work done by gas, V = volume and U = internal energy) [SVG-REF]
(A) TA = TB = TC (B) VA < VB, PB < PC (C) WAB < WBC (D) UA < UB

**55.** Find equation of process for which heat capacity is C = (7/2)R for a mono-atomic gas.
(A) PV = constant (B) PV^2 = constant (C) P^2 V = constant (D) None of these

**56.** An ideal gas with adiabatic exponent gamma = 4/3 undergoes a process in which internal energy is related to volume as U = V^2. Then molar heat capacity of the gas for the process is:
(A) 3R (B) 3.5R (C) 4R (D) None of these

**57.** Three moles of an ideal monatomic gas perform a cycle shown in figure. The gas temperatures in different states are T1 = 400 K, T2 = 800 K, T3 = 2400 K, and T4 = 1200 K. The work done by the gas during the cycle is: [SVG-REF]
(A) 5 kJ (B) 10 kJ (C) 15 kJ (D) 20 kJ

**58.** A Carnot engine takes 3 x 10^6 of heat from a reservoir at 627 degrees C, and gives it to a sink at 27 degrees C. The work done by the engine is:
(A) 16.8 x 10^6 J (B) 2 x 10^6 cal (C) 4.2 x 10^6 J (D) zero

**59.** An ideal Carnot engine whose efficiency is 40% receives heat at 500 K. If the efficiency is to be 50%, the intake temperature for the same exhaust temperature is:
(A) 900 K (B) 600 K (C) 400 K (D) 700 K

**60.** Figure shows the variation of internal energy (u) with the pressure (P) of 2.0 mole gas in cyclic process abcda. The temperature of gas at c and d are 300 and 500 K. The heat absorbed by the gas during the process (in Joules) is: [SVG-REF]
(A) 400R ln2 (B) 200R ln2 (C) 100R ln2 (D) 300R ln2

---

### GASEOUS STATE & THERMODYNAMICS: LEVEL 1 (NAT)
*Source: DTS-5 (Mixed Topics, Numerical Answer Type)*

#### DTS-5: Mixed Topics (NAT)

**61.** A sample of gas is allowed to expand adiabatically. As a consequence its volume increases from 1 m^3 to 32 m^3 and temperature drops from 320 K to 80 K. How many degree of freedom are associated with the molecules of gas?

**62.** A heat engine with a thermal efficiency of 40% does 100 J of work per cycle. How much heat (in J) is exhausted to the cold reservoir per cycle?

**63.** Figure shows an ideal gas. Its pressure, volume and temperature are P0, V0 and T0 respectively. Thin U-tube contains mercury. It is seen that when 20 cm of extra mercury is added in limb B of U-tube and temperature of gas is doubled, level of A is maintained at its position. Consider surrounding to be vacuum. Find the initial pressure of gas (in cm of Hg.) [SVG-REF]

**64.** Figure shows a container having adiabatic walls and a freely movable separator which is highly conducting. The separator divides the cylinder in two equal parts A and B each containing 2 moles of ideal diatomic gas at temperature 300 K. Now a heater is switched on in part A, find the heat supplied (in kJ) by heater till pressure in part A is double. [Take R = 25/3 SI units] [SVG-REF]

**65.** Three moles of a diatomic gas are in a closed rigid container at temperature T (in K). 1 mole of diatomic gas gets dissociated into atoms without appreciable change in temperature. Now heat is supplied to the gas and temperature becomes 2T. If the heat supplied to the gas is x(RT), find the value of x.

**66.** Calculate the pressure (in 10^5 N/m^2) exerted by a mixture of 8 g of oxygen, 14 g of nitrogen, and 22 g of carbon dioxide in a container of 30 l at a temperature of 27 degrees C.

**67.** A reversible engine takes heat from a reservoir at 527 degrees C and gives out to the sink at 127 degrees C. The engine is required to perform useful mechanical work at the rate of 750 W. The efficiency (in %) of the engine is______.

**68.** If the P-V diagram of a diatomic gas is plotted, it is a straight line passing through the origin. The molar heat capacity of the gas in the process is IR, where I is an integer. Find the value of I.

**69.** A heat of 1200 J is supplied to an engine from a hot reservoir maintained at a temperature of 650 K. A 150 K reservoir is used as the cold reservoir. What is the maximum work (in J) that can be obtained from the engine?

**70.** If the work done by a Carnot engine working between two temperatures 600 K and 300 K is used as the work input in Carnot refrigerator, working between 200 K and 400 K, find the heat (in J) removed from the lower temperature by refrigerator? The heat supplied to engine is 500 J.

**71.** A vessel of volume 3V contains a gas at pressure 4P0 and another vessel of volume 2V contains the same gas at pressure 1.5P0. Both vessels have the same temperature. When both vessels are connected by a tube of negligible volume, the equilibrium pressure is IP0, where I is an integer. Find the value of I.

**72.** A vessel of volume 0.2 m^3 contains hydrogen gas at temperature 300 K and pressure 1 bar. Find the heat required (in K cal) to raise the temperature to 400 K. The molar heat capacity of hydrogen at constant volume is 5 cal/mol K.

**73.** A vessel contains helium, which expands at constant pressure when 15 kJ of heat is supplied to it. What will be the variation of the internal energy of the gas? What is the work performed in the expansion (in K)?

**74.** 4 mole of an ideal gas at 27 degrees C is isothermally expanded to 7 times its volume. Then it is heated at constant volume so that the pressure comes to the original value. The total heat absorbed in the two processes is 110.85 kJ. Now Cv for the gas (in cal mol^-1 k^-1) _____ . [Given that ln 7 = 1.95]

**75.** 1 mole of a monoatomic gas is taken from a point A to another point B along the path ACB. The initial temperature at A is T0. The heat absorbed by the gas in the process A -> C -> B is nRT0/2. Find n: [SVG-REF]

---

### GASEOUS STATE & THERMODYNAMICS: LEVEL 2
*Source: DTS-6 (KTG), DTS-7 (Gas Laws), DTS-8 (First Law and Processes), DTS-9 (Thermodynamic Processes)*

#### DTS-6: Kinetic Theory of Gases

**76.** A closed vessel of fixed volume contains a mass m of an ideal gas, the root mean square speed being v. Additional mass m of the same gas is pumped into the vessel and the pressure rises to 2P, the temperature remaining the same as before. The root mean square speed of the molecules now is:
(A) v/sqrt(2) (B) v*sqrt(2) (C) 2v (D) v

**77.** Find the density of a mixture of 4 g of hydrogen and 8 g helium at NTP. (in kg/m^3)

**78.** Two thermally insulated vessels 1 and 2 are filled with air at temperature (T1, T2), volumes (V1, V2) and pressure (P1, P2) respectively. If the valve joining the two vessels is opened, the temperature inside the vessel at equilibrium will be: (P = common pressure)
(A) T1 = T2 (B) (T1 + T2)/2 (C) T1 T2 P(V1 + V2)/(P1 V1 T2 + P2 V2 T1) (D) T1 T2 P(P1 V1 + P2 V2)/(P1 V1 T2 + P2 V2 T1)

**79.** The mass of hydrogen molecule is 3.32 x 10^-27 kg. If 10^23 hydrogen molecules strikes per second at 2 cm^2 area of a rigid wall at an angle of 45 degrees from the normal with 1000 m/s and rebound back with same speed then the pressure exerted on the wall is:
(A) 0.23 x 10^3 Pa (B) 2.24 x 10^3 Pa (C) 23.4 x 10^3 Pa (D) None of these

**80.** Four containers are filled with monoatomic ideal gases. For each container, the number of moles, the mass of an individual atom and the rms speed of the atoms are expressed in terms of n, m and u_rms respectively. If TA, TB, TC and TD are their temperatures respectively then which one of the options correctly represents the order? [SVG-REF]
(A) TB = TC > TA > TD (B) TD > TA > TC > TB (C) TD > TA = TB > TC (D) TB > TC > TA > TD

**\*81.** Pick the correct statement(s):
(A) The rms translational speed for different ideal gas samples at the same temperature is not necessarily same but it depends on the molar mass (B) Speed of a particular gas molecule can be greater than the RMS speed for the sample (C) Temperature of an ideal gas is doubled from 100 degrees C to 200 degrees C. The average kinetic energy of each particle is also doubled (D) It is possible for both the pressure and volume of a monoatomic ideal gas to change simultaneously without causing the internal energy of the gas to change

**82.** A one dimensional gas is a hypothetical gas with molecules that can move along only a single axis. The following table gives four situations, the velocities in metre per second of such a gas having four molecules. The plus and minus sign refer to the direction of the velocity along the axis.
Situation a: -2, +3, -4, +5; Situation b: +1, -3, +4, -6; Situation c: +2, +3, +4, +5; Situation d: +3, +3, -4, -5
In which situation root-mean-square speed of the molecules is greatest?
(A) a (B) b (C) c (D) d

**PARAGRAPH FOR QUESTIONS 83-85**
Two closed identical conducting containers are found in the laboratory of an old scientist. For the verification of the gas some experiments are performed on the two boxes and the results are noted.
Experiment 1: When the two containers are weighed; WA = 225 g, WB = 160 g and mass of evacuated container WC = 100 g.
Experiment 2: When the two containers are given same amount of heat, same temperature rise is recorded. The pressure change found are Delta PA = 2.5 atm, Delta PB = 1.5 atm.

**83.** Identify the gas filled in the container A and B.
(A) N2, Ne (B) He, H2 (C) O2, Ar (D) Ar, O2

**84.** Total number of molecules in 'A' are: (here NA = Avogadro number)
(A) (125/64) NA (B) 3.125 NA (C) (125/28) NA (D) 31.25 NA

**85.** Find the initial internal energy of the gas in container 'A', if the containers were at room temperature 300 K initially.
(A) 1406.25 cal (B) 1000 cal (C) 2812.5 cal (D) None of these

#### DTS-7: Gas Laws

**86.** Two identical containers joined by a small pipe initially contains the same gas at pressure P0 and absolute temperature T0. One container is now maintained at the same temperature while the other is heated to 2T0. The common pressure of the gases will be:
(A) (3/2)P0 (B) (4/3)P0 (C) (5/3)P0 (D) 2P0

**87.** The graph between (P/T) and T for a gas at constant volume will be: [SVG-REF]
(A) [SVG-REF] (B) [SVG-REF] (C) [SVG-REF] (D) [SVG-REF]

**88.** For a given thermodynamic process, the P-V diagram is as shown below: A->B: isobaric, B->C: adiabatic, C->A: isothermal. Which of the following is the V-T diagram for the process? [SVG-REF]
(A) [SVG-REF] (B) [SVG-REF] (C) [SVG-REF] (D) [SVG-REF]

**\*89.** A partition divides a container having insulated walls into two compartments I and II. The same gas fills the two compartments whose initial parameters are given. The partition is a conducting wall which can move freely without friction. Which of the following statements is/are correct, with reference to the final equilibrium position? [SVG-REF]
(A) The Pressure in the two compartments are equal (B) Volume of compartment I is 3V/5 (C) Volume of compartment II is 12V/5 (D) Final pressure in compartment I is 5P/3

**\*90.** During an experiment, an ideal gas is found to obey a condition P^2/rho = constant. (rho = density of the gas). The gas is initially at temperature T, pressure P and density rho. The gas expands such that density changes to rho/2. Choose correct statements.
(A) The pressure of the gas changes to sqrt(2) P (B) The temperature of the gas changes to sqrt(2) T (C) The graph of the above process on P-T diagram is parabola (D) The graph of the above process on P-T diagram is hyperbola

**\*91.** During an experiment, an ideal gas is found to obey a condition VP^2 = constant. The gas is initially at a temperature T, pressure P and volume V. The gas expands to volume 4V. Choose correct statements.
(A) The pressure of gas changes to P/2 (B) The temperature of gas changes to 4T (C) The graph of the above process on P-T diagram is parabola (D) The graph of the above process on P-T diagram is hyperbola

**92.** Corresponding to isobaric process match the following two columns.
Column I: (A) P-T graph (B) U-rho graph (C) T-V graph (D) T-rho graph
Column II: (P) [SVG-REF] (Q) [SVG-REF] (R) [SVG-REF] (S) [SVG-REF]

**PARAGRAPH FOR QUESTIONS 93-95**
Container A holds an ideal gas at a pressure 1 x 10^5 Pa and at 300 K. Container B whose volume is 4 times the volume of A has the same ideal gas at 400 K and at a pressure of 5 x 10^5 Pa. [SVG-REF]

**93.** The valve V is adjusted to allow the pressure to equalize, but the temperature of each container is kept constant at the initial value, then the pressure in the two containers is:
(A) 4 x 10^5 Pa (B) 3 x 10^5 Pa (C) 2 x 10^5 Pa (D) 1 x 10^5 Pa

**94.** Before the valve V is opened, vA and vB are rms velocities of the molecules in container A and B then vA/vB is:
(A) 2/sqrt(3) (B) sqrt(3)/2 (C) 3/4 (D) 4/3

**95.** Before the valve V is opened, the ratio of number of moles of gas in A and B is:
(A) 15/1 (B) 1/30 (C) 1/15 (D) 30/1

#### DTS-8: First Law of Thermodynamics and Processes

**\*96.** Two gases have the same initial pressure, volume and temperature. They expand to the same final volume, one adiabatically and the other isothermally. Then:
(A) The final temperature is greater for the isothermal process (B) The final pressure is greater for the isothermal process (C) The work done by the gas is greater for the isothermal process (D) All the above options are incorrect

**97.** The volume of air increases by 10% in the adiabatic expansion. The approximate percentage decrease in its pressure will be: (Assume gamma = 1.4)
(A) 5% (B) 14% (C) 8% (D) 10%

**98.** In the arrangement shown in figure, gas is thermally insulated. An ideal gas is filled in the cylinder having pressure P0 (> atmospheric pressure Pa). Spring of force constant k is initially unstretched. Piston of mass M and area S is frictionless. In equilibrium, piston rises up a distance x0. Then: [SVG-REF]
(A) Final pressure of the gas is Pa + kx0/S + mg/S (B) Work done by gas is (1/2)kx0^2 + mgx0 (C) Decrease in internal energy of gas is 2((1/2)kx0^2 + mgx0 + Pa S x0) (D) Decrease in internal energy of gas is (1/2)kx0^2 - mgx0 + Pa S x0

**99.** For the thermodynamic process on an ideal gas shown in the figure, match the quantities in column-I to those in column-II. [SVG-REF]
Column I: (A) AB (B) BC (C) CA (D) isochoric
Column II: (P) W = nRT ln(pi/pf) (Q) W = 0 (R) W = P(Vf - Vi) (S) isobaric

**\*100.** An ideal gas is kept in two adjacent chambers of volume V and 2V, separated by a thin partition, under initial conditions as shown in figure. The chamber is adiabatic i.e., no heat flows in or out. Now the partition is removed and the gas is allowed to stabilize. If pf and Tf are the values of final pressure and temperature, then: [SVG-REF]
(A) pf = (5/3)p (B) pf = p (C) pf/Tf = (8/9)(p/T) (D) Tf = (3/2)T

**\*101.** 3 mole of an ideal gas is taken through the process shown. BC is adiabatic and the total work done in the cycle is 560 J. (gamma = 1.4, R = 8.31 J/mol/K, take (4/3)^0.4 = 1.125). Choose correct Options. [SVG-REF]
(A) The work done in BC is 3255 J (B) The work done in BC is 3120 J (C) TB is 450 K (D) TB is 500 K

**102.** One mole of an ideal gas undergoes a process T = 300 + 2V. Then amount of work done by gas when volume increases from 2 m^3 to 4 m^3:
(A) 300R ln2 + 4R (B) 2 + 2 ln2 (C) 300R ln2 (D) None of these

**103.** One mole of an ideal gas whose adiabatic exponent is gamma = 4/3 undergoes a process P = 200 + 1/V. Then change in internal energy of gas when volume changes from 2 m^3 to 4 m^3 is:
(A) 400 J (B) 800 J (C) 1200 J (D) None of these

**104.** Find the amount of work done (in Joule) to increase the temperature of one mole of ideal gas by 30 degrees C, if it is expanding under the condition V proportional to T^(2/3). (R = 8.31 J/mol-K)

**105.** A certain mass of an ideal gas is at pressure P1, and volume V1. It is compressed isothermally and then allowed to expand adiabatically until its pressure returns to P1. The gas is then allowed to expand to its original volume. Which of the following P-V graph is correct? [SVG-REF]
(A) [SVG-REF] (B) [SVG-REF] (C) [SVG-REF] (D) [SVG-REF]

#### DTS-9: Thermodynamic Processes

**\*106.** CP is always greater than CV for a gas. Which of the following statements provide, partly or wholly, the reason for this?
(A) No work is done by a gas at constant volume (B) When a gas absorbs heat at constant pressure, its volume must change (C) For the same change in temperature, the internal energy of a gas changes by a smaller amount at constant volume than at constant pressure (D) The internal energy of an ideal gas is a function only of its temperature

**\*107.** A system undergoes a cyclic process in which it absorbs Q1 heat and gives out Q2 heat. The efficiency of the process is eta and the work done is W.
(A) W = Q1 - Q2 (B) eta = W/Q1 (C) eta = Q2/Q1 (D) eta = 1 - Q2/Q1

**108.** An ideal gas of mass m in a state A goes to another state B via three different processes as shown in figure. If Q1, Q2 and Q3 denote the heat absorbed by the gas along the three paths, then: [SVG-REF]
(A) Q1 < Q2 < Q3 (B) Q1 < Q2 = Q3 (C) Q1 = Q2 > Q3 (D) Q1 > Q2 > Q3

**\*109.** Two mole of Hydrogen and three mole of Helium are mixed at room temperature and at atmospheric pressure Pa and the mixture occupies a volume V.
(A) Cv of mixture is 2R (B) Cp of mixture is 2.9R (C) gamma of mixture is nearly 1.53 (D) If the mixture is expanded adiabatically to 2V final pressure is Pa/2^(1.4)

**110.** For a gas, molar specific heat in a process is greater than Cv. Which of the following relation is possible?
(A) P^2 V^(1/3) = C (B) PV^2 = C (C) PV^3 = C (D) P^2 V^3 = C

**111.** One mole of a monoatomic ideal gas undergoes process AB in given P-V diagram then average specific heat for this process is: [SVG-REF]
(A) 21R/10 (B) 18R/10 (C) 9R/10 (D) 13R/10

**112.** Molar heat capacity of gas whose molar heat capacity at constant volume is Cv, for process P = 2e^(2V) is:
(A) Cv + R/(1 + 2V) (B) Cv + R/(2V) (C) Cv + R/V (D) None of these

**PARAGRAPH FOR QUESTIONS 113-115**
A container of volume 4V0 made up of a perfectly non-conducting material is divided into two equal parts by a fixed rigid wall whose lower half is non-conducting and upper half is purely conducting. The right side of the wall is divided into two equal parts (initially) by means of massless non-conducting piston free to move as shown. Part A contains 2 moles of a gas while B and C contain 1 mole each of same gas (gamma = 3/2) at pressure P0. The heater in left part is switched on till the final pressure in section C becomes (125/27)P0. [SVG-REF]

**113.** Final temperature in part A is:
(A) 205 P0V0/(27R) (B) P0V0/R (C) 105 P0V0/(13R) (D) None of these

**114.** Final temperature in part C is:
(A) P0V0/R (B) (5/3) P0V0/R (C) P0V0/(3R) (D) 5P0V0/R

**115.** Heat supplied by heater is:
(A) (368/6) P0V0 (B) (113/6) P0V0 (C) (315/6) P0V0 (D) (368/9) P0V0

---

### GASEOUS STATE & THERMODYNAMICS: LEVEL 3 (SUBJECTIVE)
*Source: DTS-10 (KTG), DTS-11 (Gas Laws), DTS-12 (Thermodynamic Processes), DTS-13 (Advanced Problems)*

#### DTS-10: KTG

**116.** In a container, a gas is filled and maintained at temperature T0. Inner surface of the wall of the container is maintained at temperature T. At different temperatures T < T0; T = T0 and T > T0 of the inner surface of the container wall, pressure exerted by the gas on the container wall is measured to be P1, P2 and P3 respectively. Arrange the three pressures in ascending order.

**117.** Modern vacuum pumps permit the pressures down to P = 4 x 10^-15 atm to be reached at room temperatures. Assuming that the gas exhausted is nitrogen,
(i) Find the number of its molecules per cm^3.
(ii) Find the mean distance between them at this pressure.

**118.** A parallel beam of nitrogen molecules moving with velocity v = 400 m/s impinges on a wall at an angle theta = 30 degrees to its normal. The concentration of molecules in the beam is n = 0.9 x 10^19 cm^-3. Find the pressure exerted by the beam on the wall assuming molecules to scatter in accordance with the perfectly elastic collision law.

**119.** The temperature of a gas consisting of rigid diatomic molecules is T = 300 K. Calculate the angular root mean square velocity of a rotating molecule if its moment of inertia is equal to I = 2.1 x 10^-39 g.cm^2.

**120.** The bottoms of two vertical conducting cylinders of different cross sections are connected by a thin pipe. A gas is enclosed in the cylinders by movable pistons A and B fitted in each of the cylinders. The masses of the pistons are mA = 1.0 kg and mB = 2.0 kg. The whole arrangement is kept in a vacuum chamber. Initially the pistons are at the same height h = 40 cm from the base of the cylinders. If an additional mass of 1.0 kg were gently placed on piston A find the new height difference between the pistons. [SVG-REF]

**121.** In a two-liter plastic bottle, air is pumped to a pressure of 2 atm. A thin-walled plastic bag of large capacity (greater than 10 liters) with no air inside is sealed with mouth of the bottle. Bottle together with the bag is placed on one pan of the beam balance and weights are put on the other pan to establish balance. When the mouth of the bottle is opened, air flows from the bottle into the bag and the balance may be disturbed. How much additional weight must be put on the pan to regain the balance?

#### DTS-11: Gas Laws

**122.** A student in experimental study of a process 1 -> 2 -> 3 on an ideal gas prepares two graphs to show relations between temperature T, pressure P and volume V. Later he found that he has forgotten to specify a coordinate axes in both the graphs and numbering of points in the second graph. Unspecified coordinates are shown by letters a and b in the graphs and numbers assigned to the points by x, y and z in the second graphs. Three combinations of above quantities are suggested as (i) a = P, b = T, x = 1, y = 2, z = 3, (ii) a = P, b = T, x = 3, y = 2, z = 1, (iii) a = T, b = V, x = 3, y = 2, z = 1. Which of the following combinations best suit these graphs? [SVG-REF]

**123.** Two cylinders A and B of equal volume V0 contain the same ideal gas at the same temperature T0 and at different pressure 2p0 and p0 respectively. They are connected by a thin tube installed with a valve. Initially the valve is closed. The valve is opened slightly and as the gas leaks from A to B, the pressure in A is maintained at 2p0 by pushing in a piston. The process is continued until the pressure in cylinder B also becomes 2p0. Find the final temperature T in terms of T0 and final volume V of gas in cylinder A in terms of V0. Both the cylinders are in good thermal contact. Neglect heat loss to the surroundings. [SVG-REF]

**124.** An ideal gas of molar mass M is contained in a very tall vertical cylindrical vessel in the uniform gravitational field in which the free-fall acceleration equals g. Assuming the gas temperature to be the same and equal to T, find the height at which the centre of gravity of the gas is located.

**125.** An ideal gas of molar mass M is located in the uniform gravitational field in which the free-fall acceleration is equal to g. Find the gas pressure as a function of height h, if p = p0 at h = 0, and the temperature varies with height as
(i) T = T0(1 - ah) (ii) T = T0(1 + ah); where a is positive constant.

**126.** A horizontal cylinder closed from one end is rotated with a constant angular velocity omega about a vertical axis passing through the open end of the cylinder. The outside air pressure is equal to p0, the temperature to T, and the molar mass of air to M. Find the air pressure as a function of the distance r from the rotation axis. The molar mass is assumed to be independent of r.

**127.** A conducting cylinder placed on elevated pointed supports, traps an ideal gas in it with the help of piston of mass m. Area of the base of the cylinder is A. The piston being at the middle height of the cylinder and is in equilibrium. The friction force between the cylinder wall and the piston can be ignored. The mass of the rest of the cylinder including the gas is M. The atmosphere pressure is p0. Now the piston is slowly pulled upwards, find the maximum value of M such that the cylinder can be lifted off the supports. [SVG-REF]

#### DTS-12: Thermodynamic Processes

**128.** One mole of an ideal monatomic gas undergoes a linear process A -> B shown in the p-V indicator diagram. Find the volume of the gas when the process turns from an endothermic to an exothermic one. [SVG-REF]

**129.** Volleyball of mass m and volume V is inflated with overpressure Delta p. When the ball is thrown up to a height h, it falls down, hits the ground, and again bounces to the same height. Find the maximum temperature rise of the ball during the hit. Temperature of the surrounding air is T0 and consider air as an ideal diatomic gas and denote its molar specific heat at constant volume by Cv.

**130.** Inside a long cylinder, n = 0.5 mole of an ideal mono-atomic gas is trapped with the help of an airtight heat-insulating piston. The curved wall of the cylinder is made of a heat conducting material and the circular base is made of a heat insulating material. The piston is connected with left wall of the cylinder with an elastic rubber cord of negligible relaxed length and force constant k = 25 N/m. The cylinder is placed in an airtight evacuated oven and then oven is switched on. The piston is stopped at a distance l0 = 1.0 m from the left end of the cylinder, rate of temperature increase of the gas is measured and then the piston is released. If this rate of temperature increase is r0 = 0.08 K/s, find speed of the piston after it is released. [SVG-REF]

**131.** A gas takes part in two processes in which it is heated from the same initial state 1 to the same final temperature. The processes are shown on the P-V diagram by the straight line 1-2 and 1-3. 2 and 3 are the points on the same isothermal curve. Q1 and Q2 are the heat transferred along the two processes. Then in which case will the heat transfer be more. [SVG-REF]

**132.** Find the pressure of air in a vessel being evacuated as a function of evacuation time t. The vessel volume is V, the initial pressure is p0. The process is assumed to be isothermal, and the evacuation rate is equal to C and independent of pressure. Note: The evacuation rate is the gas volume being evacuated per unit time, with that volume being measured under the gas pressure attained by that moment.

**133.** A smooth vertical tube having two different sections is open from both ends and equipped with two pistons of different areas. Each piston slides within a respective tube section. One mole of ideal gas is enclosed between the pistons tied with a non-stretchable thread. The cross sectional area of the upper piston is Delta S = 10 cm^2 greater than that of the lower one. The combined mass of the two pistons is equal to m = 5.0 kg. The outside air pressure is p0 = 1.0 atm. By how many kelvin must the gas between the pistons be heated to shift the pistons through l = 5.0 cm? [SVG-REF]

#### DTS-13: Advanced Problems

**134.** An ideal mono-atomic gas is trapped in a cylinder closed at right end and is divided into two parts by a stationary heat-conducting wall. To the left of the wall is movable piston. The piston and walls of the cylinder cannot conduct heat. Mass of gas into the left and right parts is m1 and m2. Force F on the piston is slowly increased, starting from some initial value. What is the molar specific heat of the gas in the left side of the cylinder for this process? [SVG-REF]

**135.** An ideal gas is trapped in a vertical cylinder under a piston. The inner surface of the cylinder is lubricated with oil. The cylinder is made of a material of finite thermal conductivity. Initially the piston stays in equilibrium at height h above the base of the cylinder and the system is in thermal equilibrium with the surroundings. When a small weight is gently placed on the piston, the piston quickly settles to a new equilibrium position Delta h1 distance below its initial position. After a long time the piston moves further down by a distance Delta h2 = 0.4 Delta h1. If displacements Delta h1 and Delta h2 both are negligibly small as compared to the initial height h of the cylinder, find molar specific heat at constant volume of the gas and predict atomicity of the gas.

**136.** An ideal gas has an adiabatic exponent gamma. In some process its molar heat capacity varies as C = alpha/T, where alpha is a constant. It is heated from temperature T0 to a temperature eta time higher. Find
(i) The work performed by one mole of the gas.
(ii) The equation of the process in the variables p, V.

**137.** The volume of gas consisting of rigid diatomic molecules was increased eta = 2.0 times in a polytropic process with the molar heat capacity C = R. How many times will the rate of collisions of molecules against the vessel's wall be reduced as a result of this process?

**138.** The figure shows an insulated cylinder divided into three parts A, B and C. Pistons I and II are connected by a rigid rod and can move without friction inside the cylinder. Piston I is perfectly conducting while piston II is perfectly insulating. The initial state of the gas (gamma = 1.5) present in each compartment A, B and C is as shown. Now, compartment A is slowly given heat through a heater H such that the final volume of C becomes 4V0/9. Assume the gas to be ideal and find [SVG-REF]
(i) Final pressures in each compartment A, B and C.
(ii) Final temperatures in each compartment A, B and C.
(iii) Heat supplied by the heater.
(iv) Work done by the gas in A and B.
(v) Heat flowing across piston 1.

**139.** Two moles of an ideal monoatomic gas are confined within a cylinder by a massless and frictionless spring loaded piston of cross-sectional area 4 x 10^-3 m^2. The spring is initially in its relaxed state. Now the gas is heated by an electric heater (placed inside the cylinder) for some time. During this time, the gas expands and does 50 J of work in moving the piston through a distance 0.10 m. The temperature of the gas increases by 50 K. Calculate the spring constant and the heat supplied by the heater. (P_atm = 10^5 Pa)

---

### GASEOUS STATE & THERMODYNAMICS: MISCELLANEOUS QUESTION BANK
*Source: VMC Workbook Miscellaneous Question Bank (Level -1, 2, 3)*

**1.** When a basketball bounces against the ground and gets deformed and then recovers its shape, the air inside that ball is temporarily compressed. The compression ends when the ball recovers during the rebound. The temperature of air inside the ball
(A) remains constant throughout the bounce, because thermal energy is conserved
(B) decreases during the deformation process and increases during the recovery processes
(C) increases during the deformation process and decreases during the recovery process
(D) increases during both the deformation and recovery processes

**2.** The root mean square speed of a group of n gas molecules, having speed v1, v2, v3, ..., vn is:
(A) (1/n) sqrt((v1 + v2 + v3 + ... + vn)^2) (B) (1/n) sqrt(v1^2 + v2^2 + v3^2 + ... + vn^2) (C) sqrt((1/n)(v1^2 + v2^2 + v3^2 + ... + vn^2)) (D) sqrt((v1 + v2 + v3 + ... + vn)^2 / n)

**3.** One mole of an ideal gas undergoes a cyclic change as shown in figure. The process AB is isothermal. The pressure and volume at point C is 1.013 x 10^5 Pa and 22.4 litres respectively. The temperature of gas at C is: [SVG-REF]
(A) 0 deg C (B) 273 deg C (C) 0 K (D) 27 deg C

**4.** The molar heat capacity of a monatomic ideal gas undergoing the process PV^(1/2) = constant is:
(A) (15/2)R (B) (23/2)R (C) (7/2)R (D) Zero

**5.** For a given thermodynamic process, the P-V diagram is as shown below: A -> B : isobaric, B -> C : adiabatic, C -> A : isothermal. Which of the following is the V-T diagram for the process? [SVG-REF]
(A) [SVG-REF] (B) [SVG-REF] (C) [SVG-REF] (D) [SVG-REF]

**6.** A gas is confined in the cylinder under a light piston which is connected to the bottom of the cylinder with a weightless spring as shown in figure, under pressure p = 0.1 MPa and temperature T = 27 deg C. The initial pressure of the gas is equal to the external atmospheric pressure. Denote the temperature (in deg C) to which we should heat the gas to increase its volume n = 1.2 times, by T. Report T/20 as your answer. If the gas under the piston is fully pumped out, the piston will reach the bottom of the vessel, just compressing the spring completely (without touching the bottom). [SVG-REF]

**7.** One mole of an ideal monoatomic gas undergoes the cyclic process as shown. Find out efficiency (in percent) of the cycle. [Take ln 2 = 0.7] [SVG-REF]

**8.** An inventor claims to have made an engine which consumes 1 gm of fuel second (for calorific value 2 kcal/gm) and deliver 10 kW of power. Mark the correct statement:
(A) This is possible
(B) This is impossible
(C) The possibility of the invention is determined by the design of the engine
(D) The possibility of the invention is determined by the nature of the fuel used

**\*9.** Which of the following statements is/are correct?
(A) A real gas approaches perfect gas behaviour at high temperature and low pressure
(B) For ideal gas if gas pressure increases then its temperature must also increase
(C) An ideal gas would never condense into the liquid state
(D) The average translational kinetic energy per molecule at any given temperature is independent of the type of ideal gas

**10.** An ideal gas is taken along the reversible processes as represented by the adjoining diagram. [SVG-REF]
Column-I: (A) For process B -> C (B) For process A -> B (C) For cycle A -> B -> C -> A (D) For process C -> A
Column-II: (P) deltaQ > 0 (Q) deltaW > 0 (R) deltaU > 0 (S) deltaW = 0 (T) deltaQ < 0

**11.** The root mean square velocity of the molecules of a gas is 1260 m/s. The average speed of the molecules is:
(A) 1029 m/s (B) 1161 m/s (C) 1671 m/s (D) 917 m/s

**12.** A sample of nitrogen gas was taken through the cyclic process shown in the figure. What is the ratio of energy released by the gas in the isochoric process to work done by the gas in the isobaric process? [SVG-REF]
(A) 1.5 (B) 2.5 (C) 0.4 (D) 0.66

**13.** A certain amount of ideal monoatomic gas undergoes process given by TV^(1/2) = C where T is the temperature of the gas. The molar specific heat of the gas for the process will be given by:
(A) R/2 (B) 3R (C) 5R/2 (D) -R/2

**14.** In the P-V diagram shown, the gas does 5J of work in isothermal process ab and 4J in adiabatic process bc. What will be the change in internal energy of the gas in straight path c to a? [SVG-REF]
(A) 9 J (B) 1 J (C) 4 J (D) 5 J

**15.** n moles of an ideal gas filled in a container at temperature T is in thermodynamic equilibrium initially. If the gas is compressed slowly and isothermally to half its initial volume the work done by the atmosphere on the piston is:
(A) nRT/2 (B) -nRT/2 (C) nRT(ln 2 - 1/2) (D) -nRT ln 2

**16.** An ideal gas (Cp/Cv = gamma = 1.25) follows the cycle ABCDA shown in the figure. Determine the ratio of the heat energy given out by the gas to its surroundings during the isochore section of the cycle to the expansion work done by the gas during the isobaric section of the cycle. [SVG-REF]

**17.** A sample of ideal gas is taken through the cyclic process shown in the figure. The temperature of the gas at state A is T_A = 200 K. At states B and C the temperature of the gas is the same. What is the greatest temperature of the gas in Kelvin during the cyclic process? [SVG-REF]

**\*18.** Two moles of O2 (gamma = 7/5) at temperature T0 and 3 moles of CO2 (gamma = 4/3) at temperature 2T0 are allowed to mix together in a closed adiabatic vessel. The resulting mixture finally comes in thermal equilibrium. Then,
(A) final temperature of the mixture is 23T0/14 (B) final temperature of the mixture is 31T0/19
(C) adiabatic exponent (gamma) of the mixture formed is 14/5 (D) adiabatic exponent (gamma) of the mixture formed is 19/14

**19.** An ideal gas can be expanded from an initial state to a certain volume through two different processes: (a) PV^2 = K and (b) P = KV^2. Where K is a positive constant. Then, choose the correct option/s from the following.
(A) Final temperature in (a) will be greater than in (b)
(B) Final temperature in (b) will be greater than in (a)
(C) Work done by the gas in both the processes would be equal
(D) Total heat given to the gas in (a) is greater than in (b)

**20.** Respective graphs for adiabatic process taking first term on Y-axis. [SVG-REF]
Column I: (A) Pressure-Temperature (B) Volume-Temperature (C) Pressure-Volume (D) Pressure-Internal Energy
Column II: (P) [SVG-REF] (Q) [SVG-REF] (R) [SVG-REF] (S) [SVG-REF]

**21.** In an adiabatic expansion of air (gamma = 7/5) the volume increases by 5%. Then, the percentage change in pressure is approximately
(A) +7% (B) +3% (C) -5% (D) -7%

**22.** A gas is suddenly compressed to one fourth of its original volume. What will be its final pressure if its initial pressure is P:
(A) 2P (B) 4P (C) Less than P (D) More than 4P

**23.** A vertical cylinder with heat-conducting walls is closed at the bottom and is fitted with a smooth light piston. It contains one mole of an ideal gas. The temperature of the gas is always equal to the surrounding's temperature T0. The piston is moved up slowly to increase the volume of the gas times. Which of the following is incorrect?
(A) work done by the gas is RT0 ln eta
(B) work done against the atmosphere is RT0(eta - 1)
(C) there is no change in the internal energy of the gas
(D) the final pressure of the gas is 1/(eta - 1) times its initial pressure

**24.** When x amount of heat is given to a gas at constant pressure, it performs x/3 amount of work. The average number of degrees of freedom per molecule of the gas is:
(A) 3 (B) 4 (C) 5 (D) 6

**25.** A gas undergoes an adiabatic process and an isothermal process. The two processes are plotted on a p-V diagram. The resulting curves intersect at a point P. Tangents are drawn to the two curves at P. These make angles of 135 deg & 121 deg with the positive V-axis. If tan 59 deg = 1.66, the gas is likely to be:
(A) monoatomic (B) diatomic (C) triatomic (D) a mixture of monoatomic & diatomic gases

**26.** A heat engine uses an ideal gas (gamma = 1.40) that undergoes the reversible cycle shown in figure. Obtain the thermodynamic percentage efficiency of the engine. [SVG-REF]

**27.** One mole of an ideal monoatomic gas is taken from state A to state B through the process P = (3/2)T^(1/2). It is found that its temperature increases by 100 K in this process. Now it is taken from state B to C through a process for which internal energy is related to volume as U = (1/2)V^(1/2). Find the total work performed by the gas (in Joule), if it is given that volume at B is 100 m^3 and at C it is 1600 m^3. [Use R = 8.3 J/mol-K]

**\*28.** An ideal gas has molar heat capacity at constant pressure Cp = 8R/7. The gas is kept in a cylindrical vessel fitted with a piston which is free to move. Mass of the frictionless piston is 9 kg. Initial volume of the gas is 0.0027 m^3 and cross-section area of the piston is 0.09 m^2. The initial temperature of the gas is 300 K. Atmospheric pressure P0 = 1.05 x 10^5 N/m^2. An amount of 2.5 x 10^4 J of heat energy is supplied to the gas, then
(A) Initial pressure of the gas is 1.06 x 10^5 N/m^2
(B) Final temperature of the gas is 1000 K
(C) Final pressure of the gas is 1.06 x 10^5 N/m^2
(D) Work done by gas is 9.94 x 10^3 J

**\*29.** Figure shows an indicator diagram. During path 1-2-3, 100 cal are given to the system and 40 cal worth work is done. During path 1-4-3, the work done is 10 cal. [SVG-REF]
(A) Heat given to the system during path 1-4-3 is 70 cal
(B) If the system is brought from 3 to 1 along straight line path 3-1, work done on the system is worth 25 cal
(C) Along straight line path 3-1, the heat ejected by the system is 85 cal
(D) The internal energy of the system in state 3 is 140 cal above that in state 1

**30.** Match the following. (Here gas is ideal, P = pressure, V = volume, gamma = ratio of molar specific heat at constant pressure & constant volume)
Column I: (A) Adiabatic Bulk modulus of gas (B) Slope of P-V graph in isothermal process (C) Degree of freedom (D) Molar heat capacity at constant pressure divided by R
Column II: (P) -P/V (Q) 2/(gamma - 1) (R) gammaP (S) gamma/(gamma - 1)

**31.** Two different isotherms representing the relationship between pressure P and volume V at a same temperature of the same ideal gas are shown for masses m1 and m2 of the gas respectively in the figure given, then: [SVG-REF]
(A) m1 > m2 (B) m1 = m2 (C) m1 < m2 (D) All of the above possible

**32.** A process 1 -> 2 using diatomic gas is shown on the P-V diagram on the right. P2 = P1 = 6 N/m^2, V2 = V1 = 0 m^3. The molar heat capacity of the gas in this process will be [SVG-REF]
(A) 35R/12 (B) 25R/13 (C) 35R/11 (D) 22R/7

**33.** Let v denote the root mean square speed of the molecules in an ideal diatomic gas at absolute temperature T. The mass of a molecule is m. Neglecting vibrational energy terms, which is false?
(A) a molecule can have a speed greater than sqrt(2)v
(B) v is proportional to sqrt(T)
(C) the average rotational kinetic energy of a molecule is mv^2/4
(D) the average kinetic energy of a molecule is 5mv^2/6

**34.** In an H2 gas process, PV^2 = constant. The ratio of work done by gas to change in its internal energy is:
(A) 2/3 (B) 0.4 (C) -0.4 (D) -2/3

**35.** Pressure versus Volume graphs for two processes for ideal gas is shown in figure; in each case state of a system is changed from A to B along the straight lines shown. In which case, will the heat added to the system be more? [SVG-REF]
(A) Case I (B) Case II (C) Is non-zero but the same in both cases (D) Is zero in both cases

**36.** 3 moles of an ideal gas (Cp = 7R/2) at pressure P_A and temperature T_A is isothermally expanded to twice its volume. It is then compressed at constant pressure to its original volume. Finally the gas is compressed at constant volume to its original pressure P_A. Calculate the net work done (in joule) by gas. (here T_A = 400 K; ln 2R = 0.693)

**37.** A sample of monoatomic ideal gas occupies 5.00 L at atmospheric pressure and temperature 300 K (point A). It is heated at constant volume to 3.00 atm (point B) then it is allowed to expand isothermally to 1.00 atm (point C) and at last compressed isobarically to its original state. If the gas is monoatomic then calculate the total amount of heat (in joules) given to the gas during whole cycle. (Here R = 8.30 Joule/mole K; P_atm = 10^5 Pa; 1 L = 10^-3 m^3; ln 3 = 1.1) [SVG-REF]

**\*38.** Statement-I: The gas undergoes an isothermal process.
Statement-II: The gas undergoes a process such that its initial temperature equal to its final temperature.
(A) If 1st is true, 2nd may be false (B) If 2nd is true, 1st may be false
(C) If 1st is true, 2nd must be true (D) If 2nd is true, 1st must be true

**\*39.** Monoatomic, diatomic and triatomic gases whose initial volume and pressure are same, each is compressed till their pressure becomes twice the initial pressure then.
(A) If the compression is isothermal then their final volumes will be same
(B) If the compression is adiabatic, then their final volume will be different
(C) If the compression is adiabatic, then triatomic gas will have maximum final volume
(D) If the compression is adiabatic then monoatomic gas will have maximum final volume

**40.** In column I, statement about heat given to the system, work and internal energy are given. Symbols have their usual meaning use first law of thermodynamics in form deltaQ = deltaU + deltaW. Match the situations in column II with statements in column I.
Column I: (A) deltaQ > 0 (B) deltaQ < 0 (C) deltaW > 0 (D) deltaU > 0
Column II: (P) A block moving on rough ground with velocity v0. Block is the system. Assume no heat is lost to surrounding till the block comes to rest. (Q) A block is released from rest from massless elastic string at natural length. After a few oscillations, block comes to rest. The string is the system. (R) Water is boiled in a closed container with a movable light piston. The container with its contents is the system. (S) A monatomic ideal gas undergoes a process PT^(-3) = constant. Gas is the system. Pressure increases during the process.

**41.** A diatomic ideal gas is heated at constant volume until the pressure is doubled and again heated at constant pressure until volume is doubled. The average molar heat capacity for whole process is:
(A) 13R/6 (B) 19R/6 (C) 23R/6 (D) 17R/6

**42.** P-V graph for an ideal gas undergoing polytropic process PV^N = constant is shown here. Then N is [SVG-REF]
(A) 1 (B) 2 (C) 1.5 (D) None of these

**43.** PV versus T graph of equal masses of H2, He and CO2 is shown in figure. Choose the correct alternative [SVG-REF]
(A) 3 corresponds to H2, 2 to He and 1 to CO2
(B) 1 corresponds to He, 2 to H2 and 3 to CO2
(C) 1 corresponds to He, 3 to H2 and 2 to CO2
(D) 1 corresponds to CO2, 2 to H2 and 3 to He

**44.** The molar heat capacity C for an ideal gas going through a given process is given by C = a/T where 'a' is a constant. If gamma = Cp/Cv, the work done by one mole of gas during heating from T0 to etaT0 through the given process will be
(A) (1/a) ln eta (B) a ln eta - ((eta - 1)/(gamma - 1))RT0
(C) a ln eta - (gamma - 1)RT0 (D) None of these

**45.** One mole of an ideal gas at temperature T was cooled isochorically till the gas pressure fell from P to P/n. Then, by an isobaric process, the gas was restored to the initial temperature. The net amount of heat absorbed by the gas in the process is
(A) nRT (B) RT/n (C) RT(n - 1) (D) RT(1 - n^(-1))

**46.** A long container has air enclosed inside at room temperature and atmospheric pressure (10^5 pa). It has a volume of 20,000 cc. The area of cross section is 100 cm^2 and force constant of spring is k_spring = 1000 N/m. We push the right piston isothermally and slowly till it reaches the original position of the left piston which is movable. What is the final length of air column in m. Assume that spring is initially relaxed. [SVG-REF]

**47.** A cylinder fitted with a spring loaded piston shown in figure contains 0.01 m^3 gas at a pressure of 10^5 Pa. The cross-sectional area of the piston is 0.05 m^2. Initially the spring does not touch the piston but atmospheric pressure of 10^5 Pa acts on the piston. The gas is slowly heated till the volume is increased to three times the original value. If the force constant of the spring is 25 kN/m, calculate the work done (in Joule) by the gas. [SVG-REF]

**\*48.** One mole of monoatomic gas is taken through cyclic process shown below. T_A = 300 K. Process AB is defined as PT = constant. [SVG-REF]
(A) Work done in process AB is -400 R
(B) Change in internal energy in process CA is 900 R
(C) Heat transferred in the process BC is 2000 R
(D) Change in internal energy in process CA is -900 R

**\*49.** In the figure shown, the amount of heat supplied to one mole of an ideal gas is plotted on the horizontal axis and the amount work performed by the gas is drawn on the vertical axis. One of the straight lines in the figure is an isotherm and the other two are isobars of two gases. The initial states of both gases are same. [SVG-REF]
Mark the correct statements.
(A) Curve 3 corresponds to isothermal process
(B) Curve 1 corresponds to a polyatomic gas
(C) Curve 2 corresponds to a monoatomic gas
(D) Process 1 and 2 are isobaric process

**50.** In each situation of column-I, a process A -> B -> C in given for an ideal gas. Match each situation of column-I with correct result in column II.
Column-I: (A) V vs T: [SVG-REF] (B) V vs T: [SVG-REF] (C) P vs V: [SVG-REF] (D) P vs V: [SVG-REF]
Column-II: (P) Temperature increases continuously (Q) Pressure first increases & then remains constant (R) Temperature first decreases & then increases (S) Pressure first decreases & then remains constant (T) Volume first decreases then increases

**51.** What is fraction of molecule below an altitude h in atmosphere? Assume uniform gravitational field, isothermal conditions, mass of a molecule m, Boltzmann constant k, temperature T.
(A) f = e^(mgh/kT) (B) f = e^(-mgh/kT) (C) f = 1 - e^(-mgh/kT) (D) f = 1 - e^(mgh/kT)

**\*52.** At ordinary temperatures, the molecules of a diatomic gas have only translational and rotational kinetic energies. At high temperatures, they may also have vibrational energy. As a result of this, compared to lower temperatures, a diatomic gas at higher temperatures will have
(A) lower molar heat capacity (B) higher molar heat capacity
(C) lower isothermal compressibility (D) higher isothermal compressibility

**Paragraph for Q. 53 to 56**
Two cylinder A and B having piston connected by massless rod (as shown in figure). The cross-sectional area of two cylinders are same & equal to 'S'. The cylinder A contains m gm of an ideal gas at Pressure P & temperature T0. The cylinder B contain identical gas at same temperature T0 but has different mass. The piston is held at the state in the position so that volume of gas in cylinder A & cylinder B are same & is equal to V0. The walls & piston of cylinder A are thermally insulated, whereas cylinder B is maintained at temperature T0 reservoir. The whole system is in vacuum. Now the piston is slowly released and it moves towards left & mechanical equilibrium is reached at the state when the volume of gas in cylinder A becomes half of its original value. Then (here g for gas = 1.5) [SVG-REF]

**53.** The mass of gas in cylinder B:
(A) 2sqrt(2) m (B) 3sqrt(2) m (C) sqrt(2) m (D) None of these

**54.** The change in internal energy of gas in cylinder A:
(A) (sqrt(2) - 1)PV0 (B) 2(sqrt(2) - 1)PV0 (C) PV0/(sqrt(2) - 1) (D) None of these

**55.** If work done by gas in cylinder B is W_B & work done by gas in cylinder A is W_A then:
(A) W_A = -W_B (B) |W_A| > |W_B| (C) |W_A| < |W_B| (D) We can't say anything

**56.** What will be the compressive force in connecting rod at equilibrium
(A) PS (B) sqrt(2)PS (C) 2^(3/2)PS (D) None of these

---

### JEE MAIN ARCHIVE

**1.** Even Carnot engine cannot give 100% efficiency, because we cannot: [2002]
(A) prevent radiation (B) find ideal sources (C) reach absolute zero temperature (D) eliminate friction

**2.** Which statement is incorrect? [2002]
(A) All reversible cycles have same efficiency
(B) Reversible cycle has more efficiency than an irreversible one
(C) Carnot cycle is a reversible one
(D) Carnot cycle has the maximum efficiency in all cycles

**3.** 1 mol of a gas with gamma = 7/5 is mixed with 1 mol of a gas with gamma = 5/3, then the value of gamma for the resulting mixture is: [2002]
(A) 7/5 (B) 2/5 (C) 24/16 (D) 12/7

**4.** At what temperature is the rms velocity of a hydrogen molecule equal to that of an oxygen molecule at 47 deg C? [2002]
(A) 80 K (B) -73 K (C) 3 K (D) 20 K

**5.** "Heat cannot be itself flow from a body at lower temperature to a body at higher temperature" is a statement or consequence of: [2003]
(A) second law of thermodynamics (B) conservation of momentum (C) conservation of mass (D) first law of thermodynamics

**6.** During an adiabatic process, the pressure of a gas is found to be proportional to the cube of its absolute temperature. The ratio Cp/Cv for the gas is: [2003]
(A) 4/3 (B) 2 (C) 5/3 (D) 3/2

**7.** Which of the following parameters does not characterise the thermodynamic state of matter? [2003]
(A) Temperature (B) Pressure (C) Work (D) Volume

**8.** A Carnot engine takes 3 x 10^6 cal of heat from a reservoir at 627 deg C and gives it to a sink at 27 deg C. The work done by the engine is: [2003]
(A) 4.2 x 10^6 J (B) 8.4 x 10^6 J (C) 16.8 x 10^6 J (D) Zero

**9.** Which of the following statements is correct for any thermodynamic system? [2004]
(A) The internal energy changes in all processes
(B) Internal energy and entropy are state functions
(C) The change in entropy can never be zero
(D) The work done in an adiabatic process is always zero

**10.** A system goes from A to B via two processes I and II as shown in figure. If deltaU1 and deltaU2 are the changes in internal energies in the processes I and II, respectively, then: [SVG-REF] [2005]
(A) deltaU2 > deltaU1 (B) deltaU2 < deltaU1 (C) relation between deltaU2 and deltaU1 cannot be determined (D) deltaU1 = deltaU2

**11.** A gaseous mixture consists of 16 g of helium and 16 g of oxygen. The ratio Cp/Cv of the mixture is: [2005]
(A) 1.54 (B) 1.62 (C) 1.4 (D) 1.59

**12.** The work done in compressing 1 kg-mol of a gas adiabatically is 146 kJ. In this process, the temperature of the gas increases by 7 deg C. The gas is: (R = 8.3 J/mol-K) [2006]
(A) diatomic (B) triatomic (C) a mixture of monatomic and diatomic (D) monatomic

**13.** Two rigid boxes containing different ideal gases are placed on a table. Box A contains 1 mol of nitrogen at temperature T0, while box B contains 1 mol of helium at temperature (7/3)T0. The boxes are then put in thermal contact with each other and heat flows between them until the gases reach a common final temperature. (Ignore the heat capacity of boxes.) Then the final temperature of the gases, Tf, in terms of T0 is: [2006]
(A) Tf = (7/3)T0 (B) Tf = (3/7)T0 (C) Tf = (3/2)T0 (D) Tf = (5/2)T0

**14.** If Cp and Cv denote the specific heats of nitrogen per unit mass at constant pressure and constant volume, respectively, then: [2007]
(A) Cp - Cv = R/28 (B) Cp - Cv = R/14 (C) Cp - Cv = R (D) Cp - Cv = 28R

**15.** A Carnot engine, having an efficiency of eta = 1/10 as heat engine, is used as a refrigerator. If the work done on the system is 10 J, the amount of energy absorbed from the reservoir at a lower temperature is: [2007]
(A) 99 J (B) 90 J (C) 1 J (D) 100 J

**16.** When a system is taken from state I to state f along the path iaf, it is found that Q = 50 cal and W = 20 cal. Along the path ibf, Q = 36 cal. W along the path ibf is: [SVG-REF] [2007]
(A) 6 cal (B) 16 cal (C) 66 cal (D) 14 cal

**17.** An insulated container of gas has two chambers separated by an insulating partition. One of the chambers has volume V1 and contains ideal gas at pressure P1 and temperature T1. The other chamber has volume V2 and contains ideal gas at pressure P2 and temperature T2. If the partition is removed without doing any work on the gas, the final equilibrium temperature of the gas in the container will be: [2008]
(A) T1T2(P1V1 + P2V2)/(P1V1T2 + P2V2T1) (B) (P1V1T1 + P2V2T2)/(P1V1 + P2V2) (C) (P1V1T2 + P2V2T1)/(P1V1 + P2V2) (D) T1T2(P1V1 + P2V2)/(P1V1T1T2 + P2V2T1T2)

**18.** One kg of a diatomic gas is at a pressure of 8 x 10^4 Nm^(-2). The density of the gas is 4 kgm^(-3). What is the energy of the gas due to its thermal motion? [2009]
(A) 3 x 10^4 J (B) 5 x 10^4 J (C) 6 x 10^4 J (D) 7 x 10^4 J

**PARAGRAPH FOR QUESTIONS 19-21**
Two moles of helium gas is taken over the cycle ABCDA, as shown in the P-T diagram. [SVG-REF] [2009]

**19.** Assuming the gas to be ideal, the work done on the gas in taking it from A to B is:
(A) 200 R (B) 300 R (C) 400 R (D) 500 R

**20.** The work done on the gas in taking it from D to A is:
(A) -414 R (B) +414 R (C) -690 R (D) +690 R

**21.** The net work done on the gas in the cycle ABCDA is:
(A) zero (B) 276 R (C) 1076 R (D) 1904 R

**22.** A diatomic ideal gas is used in a Carnot engine as the working substance. If during the adiabatic expansion part of the cycle, the volume of the gas increases from V to 32V, the efficiency of the engine is: [2010]
(A) 0.5 (B) 0.75 (C) 0.99 (D) 0.25

**23.** 100 g of water is heated from 30 deg C to 50 deg C. Ignoring the slight expansion of the water, the change in its internal energy is (specific heat of water is 4184 J/Kg/K) [2011]
(A) 4.2 kJ (B) 8.4 kJ (C) 84 kJ (D) 2.1 kJ

**24.** Three perfect gases at absolute temperatures T1, T2 and T3 are mixed. The masses of molecules are m1, m2 and m3 and the number of molecules are n1, n2 and n3 respectively. Assuming no loss of energy, then final temperature of the mixture is: [2011]
(A) (T1 + T2 + T3)/3 (B) (n1T1 + n2T2 + n3T3)/(n1 + n2 + n3) (C) (n1T1^2 + n2T2^2 + n3T3^2)/(n1T1 + n2T2 + n3T3) (D) (n1^2 T1^2 + n2^2 T2^2 + n3^2 T3^2)/(n1T1 + n2T2 + n3T3)

**25.** A thermally insulated vessel contains an ideal gas of molecular mass M and ratio of specific heats gamma. It is moving with speed v and is suddenly brought to rest. Assuming no heat is lost to the surroundings, its temperature increases by: [2011]
(A) ((gamma - 1)/(2(gamma + 1)R))Mv^2 (B) ((gamma - 1)/(2gamma))Mv^2 (C) (gamma Mv^2)/(2R) (D) ((gamma - 1)/(2R))Mv^2

**26.** A Carnot engine operating between temperature T1 and T2 has efficiency 1/6. When T2 is lowered by 62 K, its efficiency increases to 1/3. Then T1 and T2 are respectively: [2011]
(A) 372 K and 310 K (B) 372 K and 330 K (C) 330 K and 268 K (D) 310 K and 248 K

**27.** The specific heat capacity of a metal at low temperature (T) is given as Cp(kJ K^(-1) kg^(-1)) = 32(T/400)^3. A 100 g vessel of this metal is to be cooled from 20 K to 4 K by a special refrigerator operating at room temperature (27 deg C). The amount of work required to cool the vessel is: [2011]
(A) equal to 0.002 kJ (B) greater than 0.148 kJ (C) between 0.148 kJ and 0.028 kJ (D) less than 0.028 kJ

**28.** A container with insulating walls is divided into two equal parts by a partition fitted with a valve. One part is filled with an ideal gas at a pressure p and temperature T, whereas the other part is completely evacuated. If the valve is suddenly opened, the pressure and temperature of the gas will be: [2011]
(A) p/2, T (B) p/2, T/2 (C) p, T (D) p, T/2

**29.** Helium gas goes through a cycle ABCDA (consisting of two isochoric and isobaric lines) as shown in the figure. Efficiency of this cycle is nearly: (Assume the gas to be closed to ideal gas) [SVG-REF] [2012]
(A) 15.4% (B) 9.1% (C) 10.5% (D) 12.5%

**30.** A Carnot engine, whose efficiency is 40%, takes in heat from a source maintained at a temperature of 500 K. It is desired to have an engine of efficiency 60%. Then, the source temperature for the same exhaust (sink) temperature must be: [2012]
(A) efficiency of carnot engine cannot be made larger than 50% (B) 1200 K (C) 750 K (D) 600 K

**31.** The given P-V diagram represents the thermodynamic cycle of an engine, operating with an ideal monoatomic gas. The amount of heat extracted from the source in a single cycle is: [SVG-REF] [2013]
(A) (13/2)P0V0 (B) (11/2)P0V0 (C) 4P0V0 (D) P0V0

**32.** One mole of diatomic ideal gas undergoes a cyclic process ABC as shown in the figure. The process BC is adiabatic. The temperatures at A, B and C are 400 K, 800 K and 600 K respectively. Choose the correct statement: [SVG-REF] [2014]
(A) The change in internal energy in the process AB is -350R
(B) The change in internal energy in the process BC is -500R
(C) The change in internal energy in whole cyclic process is 250R
(D) The change in internal energy in the process CA is 700R

**33.** An open glass tube is immersed in mercury in such a way that a length of 8 cm extends above the mercury level. The open end of the tube is then closed and sealed and the tube is raised vertically up by additional 46 cm. What will be length of the air column above mercury in the tube now? (Atmospheric pressure = 76 cm of Hg) [2014]
(A) 16 cm (B) 22 cm (C) 38 cm (D) 6 cm

**34.** Consider an ideal gas confined in an isolated closed chamber. As the gas undergoes an adiabatic expansion, the average time of collision between molecules increases as V^q, where V is the volume of the gas. The value of q is (gamma = Cp/Cv): [2015]
(A) (3gamma + 5)/6 (B) (3gamma - 5)/6 (C) (gamma + 1)/2 (D) (gamma - 1)/2

**35.** Consider a spherical shell of radius R at temperature T. The black body radiation inside it can be considered as an ideal gas of photons with internal energy per unit volume u = U/V proportional to T^4 and pressure p = (1/3)(U/V). If the shell now undergoes an adiabatic expansion, the relation between T and R is: [2015]
(A) T proportional to e^(-R) (B) T proportional to e^(-3R) (C) T proportional to 1/R (D) T proportional to 1/R^3

**36.** Which of the following is incorrect regarding the first law of thermodynamics? [2015]
(A) It is not applicable to any cyclic process
(B) It is a restatement of the principle of conservation of energy
(C) It introduces the concept of the internal energy
(D) Both (A) and (C)

**37.** An ideal gas undergoes a quasistatic, reversible process in which its molar heat capacity C remains constant. If during this process the relation of pressure p and volume V is given by pV^n = constant, then n is given by (hear Cp and Cv are molar specific heat at constant pressure and constant volume, respectively): [2016]
(A) n = Cp/Cv (B) n = (C - Cp)/(C - Cv) (C) n = (Cp - C)/(C - Cv) (D) n = (C - Cv)/(C - Cp)

**38.** n moles of an ideal gas undergoes a process A and B as shown in the figure. The maximum temperature of the gas during the process will be: [SVG-REF] [2016]
(A) (9/4)(P0V0)/(nR) (B) (3/2)(P0V0)/(nR) (C) (9/2)(P0V0)/(nR) (D) (9P0V0)/(nR)

**39.** Cp and Cv are specific heats at constant pressure and constant volume respectively. It is observed that Cp - Cv = a for hydrogen gas, Cp - Cv = b for nitrogen gas. The correct relation between a and b is: [2017]
(A) a = 28b (B) a = (1/14)b (C) a = b (D) a = 14b

**40.** An ideal gas has molecules with 5 degrees of freedom. The ratio of specific heats at constant pressure (Cp) and at constant volume (Cv) is: [2017]
(A) 7/5 (B) 6 (C) 7/2 (D) 5/2

**41.** N moles of a diatomic gas in a cylinder are at a temperature T. Heat is supplied to the cylinder such that the temperature remains constant but n moles of the diatomic gas get converted into monoatomic gas. What is the change in the total kinetic energy of the gas? [2017]
(A) 0 (B) (5/2)nRT (C) (3/2)nRT (D) (1/2)nRT

**42.** An engine operates by taking n moles of an ideal gas through the cycle ABCDA shown in figure. The thermal efficiency of the engine is (Take Cv = 1.5R, where R is gas constant): [SVG-REF] [2017]
(A) 0.24 (B) 0.15 (C) 0.32 (D) 0.08

**43.** For the P-V diagram given for an ideal gas, out of the following which one correctly represent the T-P diagram? [SVG-REF] [2017]
(A) [SVG-REF] (B) [SVG-REF] (C) [SVG-REF] (D) [SVG-REF]

**44.** The temperature of an open room of volume 30 m^3 increases from 17 deg C to 27 deg C due to the sunshine. The atmospheric pressure in the room remains 1 x 10^5 Pa. If ni and nf are the number of molecules in the room before and after heating, then nf - ni will be: [2017]
(A) 1.38 x 10^23 (B) 2.5 x 10^25 (C) -2.5 x 10^25 (D) -1.61 x 10^23

**45.** One mole of an ideal monoatomic gas is compressed isothermally in a rigid vessel to double its pressure at room temperature, 27 deg C. The work done on the gas will be: [2018]
(A) 300R (B) 300R ln 6 (C) 300R ln 2 (D) 300R ln 7

**46.** The value closest to the thermal velocity of a Helium atom at room temperature (300 K) in ms^(-1) is: [k_B = 1.4 x 10^(-23) J/K; m_He = 7 x 10^(-27) kg] [2018]
(A) 1.3 x 10^4 (B) 1.3 x 10^3 (C) 1.3 x 10^5 (D) 1.3 x 10^2

**47.** Two moles of helium are mixed with n moles of hydrogen. If Cp/Cv = 3/2 for the mixture, then the value of n is: [2018]
(A) 1 (B) 3 (C) 2 (D) 3/2

**48.** A Carnot's engine works as a refrigerator between 250 K and 300 K. It receive 500 cal heat from the reservoir at the lower temperature. The amount of work done in each cycle to operate the refrigerator is: [2018]
(A) 420 J (B) 772 J (C) 2100 J (D) 2520 J

**49.** The mass of a hydrogen molecule is 3.32 x 10^(-27) kg. If 10^23 hydrogen molecules strike, per second, a fixed wall of area 2 cm^2 at an angle of 45 deg to the normal, and rebound elastically with a speed of 10^3 m/s then the pressure on the wall is nearly [2018]
(A) 2.35 x 10^2 N/m^2 (B) 4.70 x 10^2 N/m^2 (C) 2.35 x 10^3 N/m^2 (D) 4.70 x 10^3 N/m^2

**50.** Two moles of an ideal monoatomic gas occupies a volume V at 27 deg C. The gas expands adiabatically to a volume 2V. Calculate (a) the final temperature of the gas and (b) change in its internal energy. [2018]
(A) (a) 189 K (b) -2.7 kJ (B) (a) 195 K (b) -2.7 kJ (C) (a) 189 K (b) 2.7 kJ (D) (a) 195 K (b) -57 kJ

**51.** Two Carnot engines A and B are operated in series. The first one, A, receives heat at T1 (= 600 K) and rejects to a reservoir at temperature T2. The second engine B receives heat rejected by the first engine and, in turn, rejects to a heat reservoir at T3 (= 400 K). Calculate the temperature T2 if the work outputs of the two engines are equal: [2019]
(A) 600 K (B) 300 K (C) 500 K (D) 400 K

**52.** A 15 g mass of nitrogen gas is enclosed in a vessel at a temperature 27 deg C. Amount of heat transferred to the gas, so that rms velocity of molecules is doubled, is about: [Take R = 8.3 J/K mole] [2019]
(A) 10 kJ (B) 6 kJ (C) 0.9 kJ (D) 14 kJ

**53.** A mixture of 2 moles of helium gas (atomic mass = 4u), and 1 mole of argon gas (atomic mass = 40 u) is kept at 300 K in a container. The ratio of their rms speeds [V_rms(helium)/V_rms(argon)], is close to: [2019]
(A) 3.16 (B) 0.45 (C) 2.24 (D) 0.32

**54.** A gas can be taken from A to B via two different process ACB and ADB. When path ACB is used 60 J of heat flows into the system and 30 J of work is done by the system. If path ADB is used work done by the system is 10 J. the heat flow into the system in path ADB is: [SVG-REF] [2019]
(A) 100 J (B) 40 J (C) 80 J (D) 20 J

**55.** Two kg of a monoatomic gas is at a pressure of 4 x 10^4 N/m^2. The density of the gas is 8 kg/m^3. What is the order of energy of the gas due to its thermal motion? [2019]
(A) 10^5 J (B) 10^4 J (C) 10^3 J (D) 10^6 J

**56.** Half mole of an ideal monoatomic gas is heated at constant pressure of 1 atm from 20 deg C to 90 deg C. Work done by gas is close to: (Gas constant R = 8.31 J/mol K) [2019]
(A) 581 J (B) 291 J (C) 73 J (D) 146 J

**57.** Three Carnot engines operate in series between a heat source at a temperature T1 and heat sink at temperature T4 (see figure). There are two other reservoirs at temperature T2 and T3, as shown, with T1 > T2 > T3 > T4. The three engines are equally efficient if: [2019]
(A) T2 = (T1 T4^2)^(1/3); T3 = (T1^2 T4)^(1/3) (B) T2 = (T1^2 T4)^(1/3); T3 = (T1 T4^2)^(1/3)
(C) T2 = (T1^3 T4)^(1/4); T3 = (T1 T4^3)^(1/4) (D) T2 = (T1 T4)^(1/2); T3 = (T1^2 T4)^(1/3)

**58.** In a process, temperature and volume of one mole of an ideal monoatomic gas are varied according to the relation VT = K, where K is a constant. In this process the temperature of the gas is increased by deltaT. The amount of heat absorbed by gas is (R is gas constant): [2019]
(A) (2K/3) deltaT (B) (1/2)R deltaT (C) (3/2)R deltaT (D) (1/2)KR deltaT

**59.** A gas mixture consists of 3 moles of oxygen and 5 moles of argon at temperature T. Considering only translational and rotational modes, the total internal energy of the system is [2019]
(A) 15RT (B) 12RT (C) 20RT (D) 4RT

**60.** A rigid diatomic ideal gas undergoes an adiabatic process at room temperature. The relation between temperature and volume for this process is TV^x = constant, then x is: [2019]
(A) 2/3 (B) 5/3 (C) 3/5 (D) 2/5

**61.** A vertical closed cylinder is separated into two parts by a frictionless piston of mass m and of negligible thickness. The piston is free to move along the length of the cylinder. The length of the cylinder above the piston is l1, and that below the piston is l2, such that l1 > l2. Each part of the cylinder contains n moles of an ideal gas at equal temperature T. If the piston is stationary, its mass, m, will be given by: (R is universal gas constant and g is the acceleration due to gravity) [2019]
(A) (RT/g)[2l1 + l2)/(l1 l2)] (B) (nRT/g)[1/l2 + 1/l1] (C) (RT/ng)[(l1 - 3l2)/(l2 2l1)] (D) (nRT/g)[(l1 - l2)/(l2 l1)]

**62.** An ideal gas is enclosed in a cylinder at pressure of 2 atm and temperature, 300 K. The mean time between two successive collisions is 6 x 10^(-8) s. If the pressure is doubled and temperature is increased to 500 K, the mean time between two successive collisions will be close to: [2019]
(A) 4 x 10^(-8) s (B) 3 x 10^(-6) s (C) 2 x 10^(-7) s (D) 0.5 x 10^(-8) s

**63.** An ideal gas occupies a volume of 2 m^3 at a pressure of 3 x 10^6 Pa. The energy of the gas is: [2019]
(A) 10^8 J (B) 6 x 10^4 J (C) 3 x 10^2 J (D) 9 x 10^6 J

**64.** For the given cyclic process CAB as shown for a gas, the work done is: [SVG-REF] [2019]
(A) 5 J (B) 1 J (C) 30 J (D) 10 J

**65.** If 10^22 gas molecules each of mass 10^(-26) kg collide with a surface (perpendicular to it) elastically per second over an area 1 m^2 with a speed 10^4 m/s, the pressure exerted by the gas molecules will be of the order of: [2019]
(A) 10^16 N/m^2 (B) 10^3 N/m^2 (C) 10^4 N/m^2 (D) 10^8 N/m^2

**66.** The given diagram shows four processes i.e., isochoric, isobaric, isothermal and adiabatic. The correct assignment of the processes, in the same order is given by: [SVG-REF] [2019]
(A) d a c b (B) a d c b (C) a d b c (D) d a b c

**67.** The temperature, at which the root mean square velocity of hydrogen molecules equals their escape velocity from the earth, is closest to: [Boltzmann Constant k_B = 1.38 x 10^(-23) J/K; Avogadro Number N_A = 6.02 x 10^26/kg; Radius of Earth: 6.4 x 10^6 m; Gravitational acceleration on Earth = 10 ms^(-2)] [2019]
(A) 10^4 K (B) 800 K (C) 650 K (D) 3 x 10^5 K

**68.** For a given gas at 1 atm pressure, rms speed of the molecules is 200 m/s at 127 deg C. At 2 atm pressure and at 227 deg C, the rms speed of the molecules will be: [2019]
(A) 80 m/s (B) 100 m/s (C) 100 sqrt(5) m/s (D) 80 sqrt(5) m/s

**69.** An HCl molecule has rotational, translational and vibrational motions. If the rms velocity of HCl molecules in its gaseous phase is v_bar, m is its mass and k_B is Boltzmann constant, then its temperature will be: [2019]
(A) mv_bar^2/(5k_B) (B) mv_bar^2/(3k_B) (C) mv_bar^2/(7k_B) (D) mv_bar^2/(6k_B)

**70.** Following figure shows two processes A and B for a gas. If deltaQ_A and deltaQ_B are the amount of heat absorbed by the system in two cases, and deltaU_A and deltaU_B are changes in internal energies, respectively, then: [SVG-REF] [2019]
(A) deltaQ_A > deltaQ_B, deltaU_A = deltaU_B (B) deltaQ_A < deltaQ_B, deltaU_A < deltaU_B (C) deltaQ_A = deltaQ_B, deltaU_A = deltaU_B (D) deltaQ_A > deltaQ_B, deltaU_A > deltaU_B

**71.** The specific heats, Cp and Cv of a gas of diatomic molecules, A, are given (in units of J mol^(-1) K^(-1)) by 29 and 22, respectively. Another gas of diatomic molecules, B, has the corresponding values 30 and 21. If they are treated as ideal gases, then: [2019]
(A) A is rigid but B has a vibrational mode
(B) Both A and B have a vibrational mode each
(C) A has on vibrational mode and B has two
(D) A has a vibrational mode but B has none

**72.** When heat Q is supplied to a diatomic gas of rigid molecules, at constant volume its temperature increases by deltaT. The heat required to produce the same change in temperature, at a constant pressure is: [2019]
(A) (2/3)Q (B) (5/3)Q (C) (3/2)Q (D) (7/5)Q

**73.** One mole of an ideal gas passes through a process where pressure and volume obey the relation P = P0[1 - (1/2)(V0/V)^2]. Here P0 and V0 are constants. Calculate the change in the temperature of the gas if its volume changes from V0 to 2V0. [2019]
(A) (3/4)(P0V0/R) (B) (1/2)(P0V0/R) (C) (1/4)(P0V0/R) (D) (5/4)(P0V0/R)

**74.** A cylinder with fixed capacity of 67.2 lit contains helium gas at STP. The amount of heat needed to raise the temperature of the gas by 20 deg C is: [Given that R = 8.31 J mol^(-1) K^(-1)] [2019]
(A) 350 J (B) 374 J (C) 748 J (D) 700 J

**75.** A 25 x 10^(-3) m^3 volume cylinder is filled with 1 mole of O2 gas at room temperature (300 K). The molecular diameter of O2, and its root mean square speed, are found to be 0.3 nm and 200 m/s, respectively. What is the average collision rate (per second) for an O2 molecule? [2019]
(A) ~10^11 (B) ~10^12 (C) ~10^10 (D) ~10^13

**76.** n moles of an ideal gas with constant volume heat capacity Cv undergo an isobaric expansion by certain volumes. The ratio of the work done in the process, to the heat supplied is: [2019]
(A) 4nR/(Cv - nR) (B) nR/(Cv - nR) (C) nR/(Cv + nR) (D) 4nR/(Cv + nR)

**77.** A Carnot engine has an efficiency of 1/6. When the temperature of the sink is reduced by 62 deg C, its efficiency is doubled. The temperature of the source and the sink are respectively. [2019]
(A) 99 deg C, 37 deg C (B) 37 deg C, 99 deg C (C) 62 deg C, 124 deg C (D) 124 deg C, 62 deg C

**78.** The number density of molecules of a gas depends on their distance r from the origin as n(r) = n0 e^(-alpha r^4). Then the total number of molecules is proportional to: [2019]
(A) n0 alpha^(-3/4) (B) sqrt(n0) alpha^(1/2) (C) n0 alpha^(1/4) (D) n0 alpha^(-3)

**79.** A diatomic gas with rigid molecules does 10 J of work when expanded at constant pressure. What would be the heat energy absorbed by the gas, in this process? [2019]
(A) 30 J (B) 40 J (C) 25 J (D) 35 J

**80.** Two moles of helium gas is mixed with three moles of hydrogen molecules (taken to be rigid). What is the molar specific heat of mixture at constant volume? (R = 8.3 J/mol K) [2019]
(A) 15.7 J/mol K (B) 19.7 J/mol K (C) 17.4 J/mol K (D) 21.6 J/mol K

**81.** A sample of an ideal gas is taken through the cyclic process abca as shown in the figure. The change in the internal energy of the gas along the path ca is -180 J. The gas absorbs 250 J of heat along the path ab and 60 J along the path bc. The work done by the gas along the path abc is: [SVG-REF] [2019]
(A) 140 J (B) 100 J (C) 120 J (D) 130 J

---

### GASEOUS STATE & THERMODYNAMICS: JEE ADVANCED ARCHIVE
*Source: JEE Advanced (Archive) -- questions from 1980-2019*

**SINGLE OPTION CORRECT TYPE**

**1.** [1983] An ideal monatomic gas is taken round the cycle ABCDA as shown in the P-V diagram. The work done during the cycle is: [P-V diagram shows rectangle with corners A(P,V), B(2P,V), C(2P,2V), D(P,2V)]
(A) PV (B) 2PV (C) (1/2)PV (D) zero
**Ans: A**

**2.** [1984] At room temperature, the rms speed of the molecules of a certain diatomic gas is found to be 1930 m/s. The gas is:
(A) H2 (B) F2 (C) O2 (D) Cl2
**Ans: A**

**3.** [1985] 70 Calories of heat is required to raise the temperature of 2 moles of an ideal gas at constant pressure from 30 deg C to 35 deg C. The amount of heat required (in Calories) to raise the temperature of the same gas through the same range (30 deg C to 35 deg C) at constant volume is:
(A) 30 (B) 50 (C) 70 (D) 90
**Ans: B**

**4.** [1988] If 1 mole of a monatomic gas (gamma = 5/3) is mixed with 1 mole of diatomic gas (gamma = 7/5), the value of gamma for the mixture is:
(A) 1.40 (B) 1.50 (C) 1.53 (D) 3.07
**Ans: B**

**5.** [1990] When an ideal diatomic gas is heated at constant pressure, the fraction of the heat energy supplied which increases the internal energy of the gas is:
(A) 2/5 (B) 3/5 (C) 3/7 (D) 5/7
**Ans: D**

**6.** [1992] Three closed vessels A, B and C are at the same temperature T and contain gases which obey the Maxwellian distribution of velocities. Vessel A contains only O2, B only N2 and C a mixture of equal quantities of O2 and N2. If the average speed of the O2 molecules in vessel A is v1, that of the N2 molecules in vessel B is v2, the average speed of the O2 molecules in vessel C is:
(A) (v1 + v2)/2 (B) v1 (C) (v1 v2)^(1/2) (D) sqrt(3kT/M)
**Ans: B**

**7.** [1995] From the following statements concerning ideal gas at any given temperature T, select the correct one(s):
(A) The coefficient of volume expansion at constant pressure is the same for all ideal gases
(B) The average translational kinetic energy per molecule of oxygen gas is 3kT, k being Boltzmann constant
(C) The mean-free path of molecules increases with increases in the pressure
(D) In a gaseous mixture, the average translational kinetic energy of the molecules of each component is different
**Ans: A**

**8.** [1996] The temperature of an ideal gas is increased from 120 K to 480 K. If at 120 K the root mean square velocity of the gas molecules is v, at 480 K it becomes:
(A) 4v (B) 2v (C) v/2 (D) v/4
**Ans: B**

**9.** [1997] A ring shaped tube contains two ideal gases with equal masses and atomic mass numbers M1 = 32 and M2 = 28. The gases are separated by one fixed partition P and another movable conducting partition S which can move freely without friction inside the ring. The angle (in radians) as shown in the figure in equilibrium is:
(A) 7pi/8 (B) 8pi/7 (C) 15pi/16 (D) 16pi/15
**Ans: B**

**10.** [1997] The average translational energy and the rms speed of molecules in a sample of oxygen gas at 300 K are 6.21 x 10^(-21) J and 484 m/s, respectively. The corresponding values at 600 K are nearly: (Assuming ideal gas behaviour)
(A) 12.42 x 10^(-21) J, 968 m/s (B) 8.78 x 10^(-21) J, 684 m/s (C) 6.21 x 10^(-21) J, 968 m/s (D) 12.42 x 10^(-21) J, 684 m/s
**Ans: D**

**11.** [1997] The average translational kinetic energy of O2 (relative molar mass 32) molecules at a particular temperature is 0.048 eV. The average translational kinetic energy of N2 (relative molar mass 28) molecules in eV at that temperature is:
(A) 0.0015 (B) 0.003 (C) 0.048 (D) 0.768
**Ans: C**

**12.** [1997] A vessel contains 1 mole of O2 gas (relative molar mass 32) at pressure P and temperature T. An identical vessel containing 1 mole of He gas (relative molar mass 4) at a temperature 2T has a pressure of:
(A) P/8 (B) P (C) 2P (D) 8P
**Ans: C**

**13.** [1998] A vessel contains a mixture of one mole of oxygen and two moles of nitrogen at 300 K. The ratio of the average rotational kinetic energy per O2 molecule to per N2 molecule is:
(A) 1 : 1 (B) 1 : 2 (C) 2 : 1 (D) depends on the moment of inertia of the two molecules
**Ans: A**

**14.** [1998] Two identical containers A and B with frictionless pistons contain the same ideal gas at the same temperature and the same volume V. The mass of the gas in A is mA and that in B is mB. The gas in each cylinder is now allowed to expand isothermally to the same final volume 2V. The changes in the pressure in A and B are found to be deltaP and 1.5 deltaP, respectively. Then:
(A) 4mA = 9mB (B) 2mA = 3mB (C) 3mA = 2mB (D) 9mA = 4mB
**Ans: C**

**15.** [1998] Two cylinders A and B fitted with pistons contain equal amounts of an ideal diatomic gas at 300 K. The piston of A is free to move, while that of B is held fixed. The same amount of heat is given to the gas in each cylinder. If the rise in temperature of the gas in A is 30 K, then the rise in temperature of the gas in B is:
(A) 30 K (B) 18 K (C) 50 K (D) 42 K
**Ans: D**

**16.** [1998] A given quantity of an ideal gas is at pressure P and absolute temperature T. The isothermal bulk modulus of the gas is:
(A) (2/3)P (B) P (C) (3/2)P (D) 2P
**Ans: B**

**17.** [1999] A gas mixture consists of 2 moles of oxygen and 4 moles of argon at temperature T. Neglecting all vibrational modes, the total internal energy of the system is:
(A) 4RT (B) 15RT (C) 9RT (D) 11RT
**Ans: D**

**18.** [2000] Starting with the same initial conditions, an ideal gas expands from volume V1 to V2 in three different ways. The work done by the gas is W1 if the process is purely isothermal, W2 if purely isobaric and W3 if purely adiabatic. Then:
(A) W2 > W1 > W3 (B) W2 > W3 > W1 (C) W1 > W2 > W3 (D) W1 > W3 > W2
**Ans: A**

**19.** [2000] An ideal gas is initially at temperature T and volume V. Its volume is increased by deltaV due to an increase in temperature deltaT, pressure remaining constant. The quantity delta = deltaV/(V deltaT) varies with temperature as:
(A) Constant [horizontal line] (B) Linearly increasing (C) Decreasing curve (D) Increasing curve that levels off
**Ans: D**

**20.** [2001] In a given process on an ideal gas, dW = 0 and dQ < 0. Then for the gas:
(A) the temperature will decrease (B) the volume will increase (C) the pressure will remain constant (D) the temperature will increase
**Ans: A**

**21.** [2001] P-V plots for two gases during adiabatic process are shown in the figure. Plots 1 and 2 should correspond, respectively, to:
(A) He and O2 (B) O2 and He (C) He and Ar (D) O2 and N2
**Ans: B**

**22.** [2002] Which of the following graphs correctly represent the variation of beta = -(dV/dp)/V with P for an ideal gas at constant temperature?
(A) Horizontal line (B) Increasing curve (C) Decreasing curve (D) Hyperbola (1/P curve)
**Ans: D**

**23.** [2002] A monatomic ideal gas, initially at temperature T1, is enclosed in a cylinder fitted with a frictionless piston. The gas is allowed to expand adiabatically to a temperature T2 by releasing the piston suddenly. If L1 and L2 are the lengths of the gas column before and after expansion, respectively, then T1/T2 is given by:
(A) (L1/L2)^(2/3) (B) L1/L2 (C) L2/L1 (D) (L2/L1)^(2/3)
**Ans: D**

**24.** [2002] An ideal gas is taken through the cycle A -> B -> C -> A, as shown in the figure. If the net heat supplied to the gas in the cycle is 5 J, the work done by the gas in the process C -> A is: [P-V diagram: A at (10,2), B at (10,1) (in P(N/m^2) vs V(m^3)), C at (1,1)]
(A) -5 J (B) -10 J (C) -15 J (D) -20 J
**Ans: B**

**25.** [2003] An ideal gas undergoes a cyclic process as shown in the given P-T diagram, where AC is adiabatic. The process is also represented by:
(A) P-V diagram with A top-left, B bottom-left, C bottom-right (B) Similar with different curve shapes (C) A top-right, B bottom-left, C bottom-right (D) Different arrangement
**Ans: A**

**26.** [2004] An ideal gas is initially at P1, V1 is expanded to P2, V2 and then compressed adiabatically to the same volume V1 and pressure P3. If W is the net work done by the gas in the complete process, which of the following is true?
(A) W > 0; P3 > P1 (B) W < 0; P3 > P1 (C) W > 0; P3 < P1 (D) W < 0; P3 < P1
**Ans: A**

**27.** [2005] Temperature of a gas is 20 deg C and pressure is changed from 1.01 x 10^5 Pa to 1.165 x 10^5 Pa. If volume is decreased isothermally by 10%. Bulk modulus of gas is:
(A) 1.55 x 10^5 (B) 0.155 x 10^5 (C) 1.4 x 10^5 (D) 1.01 x 10^5
**Ans: A**

**28.** [2008] An ideal gas is expanding such that PT^2 = constant. The coefficient of volume expansion of the gas is:
(A) 1/T (B) 2/T (C) 3/T (D) 4/T
**Ans: C**

**29.** [2010] A real gas behaves like an ideal gas if its:
(A) pressure and temperature are both high (B) pressure and temperature are both low (C) pressure is high and temperature is low (D) pressure is low and temperature is high
**Ans: D**

**30.** [2011] 5.6 litre of helium gas at STP is adiabatically compressed to 0.7 litre. Taking the initial temperature to be T1, the work done in the process is:
(A) (9/8)RT1 (B) (3/2)RT1 (C) (15/8)RT1 (D) (9/2)RT1
**Ans: A**

**31.** [2012] A mixture of 2 moles of helium gas (atomic mass = 4 amu), and 1 mole of argon gas (atomic mass = 40 amu) is kept at 300 K in a container. The ratio of the rms speeds (v_rms(helium)/v_rms(argon)) is:
(A) 0.32 (B) 0.45 (C) 2.24 (D) 3.16
**Ans: D**

**32.** [2012] Two moles of a monoatomic gas are in a rubber balloon at 30 deg C. The balloon is fully expandable and can be assumed to require no energy in its expansion. The temperature of the gas in the balloon is slowly changed to 35 deg C. The amount of heat required in raising the temperature is nearly: (Take R = 8.31 J/mol.K)
(A) 62 J (B) 104 J (C) 124 J (D) 208 J
**Ans: B**

**33.** [2013] Two non-reactive monoatomic ideal gases have their atomic masses in the ratio 2 : 3. The ratio of their partial pressures, when enclosed in a vessel kept at a constant temperature, is 4 : 3. The ratio of their densities is:
(A) 1 : 4 (B) 1 : 2 (C) 6 : 9 (D) 8 : 9
**Ans: D**

**34.** [2016] A gas is enclosed in a cylinder with a movable frictionless piston. Its initial thermodynamic state at pressure Pi = 10^5 Pa and Volume Vi = 10^(-3) m^3 changes to a final state at Pf = (1/32) x 10^5 Pa and Vf = 8 x 10^(-3) m^3 in an adiabatic quasi-static process, such that P^3 V^5 = constant. Consider another thermodynamic process that brings the system from the same initial state to the same final state in two steps: an isobaric expansion at Pi followed by an isochoric (isovolumetric) process at volume Vf. The amount of heat supplied to the system in the two-step process is approximately:
(A) 112 J (B) 294 J (C) 588 J (D) 813 J
**Ans: C**

**MULTIPLE OPTIONS CORRECT TYPE**

**\*35.** [1989] For an ideal gas:
(A) The change in internal energy in a constant pressure process from temperature T1 to T2 is equal to nCv(T2 - T1), where Cv is the molar specific heat at constant volume and n the number of moles of the gas
(B) The change in internal energy of the gas and the work done by the gas are equal in magnitude in an adiabatic process
(C) The internal energy does not change in an isothermal process
(D) No heat is added or removed in an adiabatic process
**Ans: ABCD**

**\*36.** [1993] An ideal gas is taken from the state A (pressure P, volume V) to the state B (pressure P/2, volume 2V) along a straight line path in the P-V diagram. Select the correct statement(s) from the following:
(A) The work done by the gas in process A to B exceeds the work that would be done by it if the system were taken from A to B along the isotherm
(B) In the T-V diagram, the path AB becomes a part of a parabola
(C) In the P-T diagram, the path AB becomes a part of a hyperbola
(D) In going from A to B, the temperature T of the gas first increases to a maximum value and then decreases
**Ans: ABD**

**\*37.** [1998] During the melting of a slab of ice at 273 K at atmosphere pressure,
(A) Positive work is done by the ice-water system on the atmosphere
(B) Positive work is done on the ice-water system by the atmosphere
(C) The internal energy of the ice-water system increases
(D) The internal energy of the ice-water system decreases
**Ans: BC**

**\*38.** [1998] Let v_bar, v_rms and vp, respectively, denote the mean speed, root mean square speed and most probable speed of the molecules in an ideal monatomic gas at absolute temperature T. The mass of a molecule is m, then:
(A) No molecule can have a speed greater than sqrt(2) v_rms
(B) No molecule can have speed less than vp/sqrt(2)
(C) vp < v_bar < v_rms
(D) The average kinetic energy of a molecule is (3/4)m vp^2
**Ans: CD**

**\*39.** [2009] Cv and Cp denotes the molar specific heat capacities of a gas at constant volume and constant pressure, respectively, then:
(A) Cp - Cv is larger for a diatomic ideal gas than for a monatomic ideal gas
(B) Cp + Cv is larger for a diatomic ideal gas than for a monatomic ideal gas
(C) Cp/Cv is larger for a diatomic ideal gas than for a monatomic ideal gas
(D) Cp . Cv is larger for a diatomic ideal gas than for a monatomic ideal gas
**Ans: BD**

**\*40.** [2009] Figure shows the P-V plot of an ideal gas taken through a cycle ABCDA. The part ABC is a semi-circle and CDA is half of an ellipse. Then: [P-V diagram: A at (3,3), B at (2,2), C at (3,1), D at (1,2)]
(A) The process during the path A -> B is isothermal
(B) Heat flows out of the gas during the path B -> C -> D
(C) Work done during the path A -> B -> C is zero
(D) Positive work is done by the gas in the cycle ABCDA
**Ans: BD**

**\*41.** [2010] One mole of an ideal gas in initial state A undergoes a cyclic process ABCA, as shown in the figure. Its pressure at A is P0. Choose the correct option(s) from the following: [V-T diagram: A at (T0, V0), B at (T0, 4V0), C curves back]
(A) Internal energies at A and B are the same
(B) Work done by the gas in process AB is P0 V0 ln 4
(C) Pressure at C is P0/4
(D) Temperature at C is T0/4
**Ans: ABD**

**\*42.** [2015] A container of fixed volume has a mixture of one mole of hydrogen and one mole of helium in equilibrium at temperature T. Assuming the gasses are ideal, the correct statements (s) is (are):
(A) The average energy per mole of the gas mixture is 2RT
(B) The ratio of speed of sound in the gas mixture to that in helium gas is sqrt(6/5)
(C) The ratio of the rms speed of helium atoms to that of hydrogen molecules is 1/2
(D) The ratio of the rms speed of helium atoms to that of hydrogen molecules is 1/sqrt(2)
**Ans: ABD**

**\*43.** [2015] An ideal monoatomic gas is confined in a horizontal cylinder by a spring loaded piston (as shown in the figure). Initially the gas is at temperature T1, pressure P1 and volume V1 and the spring is in its relaxed state. The gas is then heated very slowly to temperature T2, pressure P2 and volume V2. During this process the piston moves out by a distance x. Ignoring the friction between the piston and the cylinder, the correct statements is(are):
(A) If V2 = 2V1 and T2 = 3T, then the energy stored in the spring is (1/4) P1 V1
(B) If V2 = 2V1 and T2 = 3T1, then the change in internal energy is 3P1 V1
(C) If V2 = 3V1 and T2 = 4T1, then the work done by the gas is (7/3) P1 V1
(D) If V2 = 3V1 and T2 = 4T, then the heat supplied to the gas is (17/6) P1 V1
**Ans: ACD**

**\*44.** [2017] A flat plate is moving normal to its plane through a gas under the action of a constant force F. The gas is kept at a very low pressure. The speed of the plate v is much less than the average speed u of the gas molecules. Which of the following options is/are true?
(A) The pressure difference between the leading and trailing faces of the plate is proportional to uv
(B) The plate will continue to move with constant non-zero acceleration, at all times
(C) At a later time external force F balances the resistive force
(D) The resistive force experienced by the plate is proportional to v
**Ans: ACD**

**\*45.** [2018] One mole of a monatomic ideal gas undergoes a cyclic process as shown in the figure (where V is the volume and T is the temperature). Which of the statements below is (are) true?
(A) Process I is an isochoric process
(B) In process II, gas absorbs heat
(C) In process IV, gas releases heat
(D) Processes I and III are not isobaric
**Ans: ABD**

**\*46.** [2019] A mixture of ideal gas containing 5 moles of monatomic gas and 1 mole of rigid diatomic gas is initially at pressure P0, volume V0, and temperature T0. If the gas mixture is adiabatically compressed to a volume V0/4, then the correct statement(s) is(are): (Given 2^1.2 = 2.3; 2^3.2 = 9.2; R is gas constant)
(A) Adiabatic constant of the gas mixture is 1.6
(B) The work |W| done during the process is 13RT0
(C) The average kinetic energy of the gas mixture after compression is in between 18RT0 and 19RT0
(D) The final pressure of the gas mixture after compression is in between 9P0 and 10P0
**Ans: ABD**

**\*47.** [2019] One mole of a monatomic ideal gas goes through a thermodynamic cycle, as shown in the volume versus temperature (V-T) diagram. The correct statement(s) is(are): [V-T diagram: states 1,2,3,4 forming a cycle with V0, 2V0 and T0/2, T0, 3T0/2, 2T0]
(A) The above thermodynamic cycle exhibits only isochoric and adiabatic processes
(B) The ratio of heat transfer during processes 1->2 and 3->4 is |Q(1->2)/Q(3->4)| = 1/2
(C) Work done in this thermodynamics cycle (1->2->3->4->1) is |W| = (1/2)RT0
(D) The ratio of heat transfer during processes 1->2 and 2->3 is |Q(1->2)/Q(2->3)| = 5/3
**Ans: CD**

**LINKED COMPREHENSION TYPE**

**Paragraph for Questions 48-50** [2007]
A fixed thermally conducting cylinder has a radius R and height L0. The cylinder is open at its bottom and has a small hole at top. A piston of mass M is held at a distance L from the top surface as shown in the figure. The atmospheric pressure is p0.

**48.** The piston is now pulled out slowly and held at a distance 2L from the top. The pressure in the cylinder between its top and the piston will then be:
(A) p0 (B) p0/2 (C) p0/2 + Mg/(pi R^2) (D) p0/2 - Mg/(pi R^2)
**Ans: A**

**49.** While the piston is at a distance 2L from the top, the hole at the top is sealed. The piston is then released to a position where it can stay in equilibrium. In the conditions, the distance of the piston from the top is:
(A) [2p0 pi R^2/(pi R^2 p0 + Mg)](2L) (B) [p0 pi R^2 - Mg/(pi R^2 p0)](2L) (C) [p0 pi R^2 + Mg/(pi R^2 p0)](2L) (D) [p0 pi R^2/(pi R^2 p0 - Mg)](2L)
**Ans: D**

**50.** The piston is taken completely out of the cylinder. The hole at the top is sealed. A water tank is brought below the cylinder and put in a position so that the water surface in the tank is at the same in the top of the cylinder. The density of the water is rho. In equilibrium, the height H of the water column in the cylinder satisfies:
(A) rho g(L0 - H)^2 + p0(L0 - H) + L0 p0 = 0 (B) rho g(L0 - H)^2 - p0(L0 - H) - L0 P0 = 0 (C) rho g(L0 - H)^2 + p0(L0 - H) - L0 p0 = 0 (D) rho g(L0 - H)^2 - p0(L0 - H) + L0 p0 = 0
**Ans: D**

**Paragraph for Questions 51-53** [2008]
A small spherical monoatomic ideal gas bubble (gamma = 5/3) is trapped inside a liquid of density rho_l (see figure). Assume that the bubble does not exchange any heat with the liquid. The bubble contains n moles of gas. The temperature of the gas when the bubble is at the bottom is T0, the height of the liquid is H and the atmospheric pressure is P0. (Neglect surface tension)

**51.** As the bubble moves upwards, beside the buoyancy force the following forces are acting on it:
(A) Only the force of gravity (B) The force due to gravity and the force due to the pressure of the liquid (C) The force due to gravity, the force due to the pressure of the liquid and the force due to viscosity of the liquid (D) The force due to gravity and the force due to viscosity of the liquid
**Ans: D**

**52.** When the gas bubble is at height y from the bottom, its temperature is:
(A) T0 [(P0 + rho_l gH)/(P0 + rho_l gy)]^(2/5) (B) T0 [(P0 + rho_l g(H-y))/(P0 + rho_l gH)]^(2/5) (C) T0 [(P0 + rho_l gH)/(P0 + rho_l gy)]^(3/5) (D) T0 [(P0 + rho_l g(H-y))/(P0 + rho_l gH)]^(3/5)
**Ans: B**

**53.** The buoyancy force acting on the gas bubble is (Assume R is the universal gas constant):
(A) rho_l nRgT0 (P0 + rho_l gH)^(2/5) / (P0 + rho_l gy)^(7/5) (B) rho_l nRgT0 / [(P0 + rho_l gH)^(2/5) (P0 + rho_l g(H-y))^(3/5)] (C) rho_l nRgT0 (P0 + rho_l gH)^(3/5) / (P0 + rho_l gy)^(8/5) (D) rho_l nRgT0 / [(P0 + rho_l gH)^(3/5) (P0 + rho_l g(H-y))^(2/5)]
**Ans: B**

**Paragraph for Questions 54-55** [2014]
In the figure a container is shown to have a movable (without friction) piston on top. The container and the piston are all made of perfectly insulating material allowing no heat transfer between outside and inside the container. The container is divided into two compartments by a rigid partition made of a thermally conducting material that allows slow transfer of heat. The lower compartment of the container is filled with 2 moles of an ideal monatomic gas at 700 K and the upper compartment is filled with 2 moles of an ideal diatomic gas at 400 K. The heat capacities per mole of an ideal monatomic gas are Cv = (3/2)R, Cp = (5/2)R and those for an ideal diatomic gas are Cv = (5/2)R, Cp = (7/2)R.

**54.** Consider the partition to be rigidly fixed so that it does not move. When equilibrium is achieved, the final temperature of the gasses will be:
(A) 550 K (B) 525 K (C) 513 K (D) 490 K
**Ans: D**

**55.** Now consider the partition to be free to move without friction so that the pressure of gasses in both compartments is the same. Then total work done by the gasses till the time they achieve equilibrium will be:
(A) 250R (B) 200R (C) 100R (D) -100R
**Ans: D**

**Paragraph for Questions 56-58** [2017]
An ideal gas is undergoing a cyclic thermodynamic process in different ways as shown in the corresponding P-V diagrams in column 3 of the table. Consider only the path from state 1 to state 2. W denotes the corresponding work done on the system. The equations and plots in the table have standard notations as used in thermodynamic process. Here gamma is the ratio of heat capacities at constant pressure and constant volume. The number of moles of the gas is n.

Column-I: (I) W(1->2) = 1/(gamma-1)(P2V2 - P1V1); (II) W(1->2) = -PV2 + PV1; (III) W(1->2) = 0; (IV) W(1->2) = -nRT ln(V2/V1)
Column-II: (i) Isothermal; (ii) Isochoric; (iii) Isobaric; (iv) Adiabatic
Column-III: (P), (Q), (R), (S) -- various P-V diagrams

**56.** Which of the following options is the only correct representation of a process in which deltaU = deltaQ - P deltaV?
(A) (II) (iv) (R) (B) (III) (iii) (P) (C) (II) (iii) (P) (D) (II) (iii) (S)
**Ans: C**

**57.** What one of the following options correctly represents a thermodynamic process that is used as a correction in the determination of the speed of sound in an ideal gas?
(A) (I) (iv) (Q) (B) (III) (iv) (R) (C) (I) (ii) (Q) (D) (IV) (ii) (R)
**Ans: A**

**58.** Which one of the following options is the correct combination?
(A) (IV) (ii) (S) (B) (III) (ii) (S) (C) (II) (iv) (R) (D) (II) (iv) (P)
**Ans: B**

**Paragraph for Questions 66-67** [2019]
In a thermodynamic process on an ideal monatomic gas, the infinitesimal heat absorbed by the gas is given by T deltaX, where T is temperature of the system and deltaX is the infinitesimal change in a thermodynamic quantity X of the system. For a mole of monatomic ideal gas X = (3/2)R ln(T/T_A) + R ln(V/V_A). Here, R is gas constant, V is volume of gas, T_A and V_A are constants.

The List-I below gives some quantities involved in a process and List-II gives some possible values of these quantities.

List-I: (I) Work done by the system in process 1->2->3; (II) Change in internal energy in process 1->2->3; (III) Heat absorbed by the system in process 1->2->3; (IV) Heat absorbed by the system in process 1->2
List-II: (P) (1/3)RT0 ln 2; (Q) (1/3)RT0; (R) RT0; (S) (4/3)RT0; (T) (1/3)RT0(3 + ln 2); (U) (5/6)RT0

**66.** If the process on one mole of monatomic ideal gas is as shown in the TV-diagram with P0 V0 = (1/3)RT0, the correct match is:
(A) I->P, II->T, III->Q, IV->T (B) I->P, II->R, III->T, IV->S (C) I->S, II->T, III->Q, IV->U (D) I->P, II->R, III->T, IV->P
**Ans: D**

**67.** If the process carried out on one mole of monatomic ideal gas is as shown in figure in the PV-diagram with P0 V0 = (1/3)RT0, the correct match is:
(A) I->Q, II->R, III->P, IV->U (B) I->Q, II->R, III->S, IV->U (C) I->Q, II->S, III->R, IV->U (D) I->S, II->R, III->Q, IV->T
**Ans: B**

**ASSERTION AND REASON TYPE**

For Q59, use the following key:
(A) Statement-I is True, Statement-II is True and Statement-II is a correct explanation for Statement-I
(B) Statement-I is True, Statement-II is True and Statement-II is NOT a correct explanation for Statement-I
(C) Statement-I is True, Statement-II is False
(D) Statement-I is False, Statement-II is True

**59.** [2007] **Statement 1:** The total translational kinetic energy of all the molecules of a given mass of an ideal gas is 1.5 times the product of its pressure and its volume. **Statement 2:** The molecules of a gas collide with each other and the velocities of the molecules change due to the collision.
**Ans: B**

**MATCH MATRIX TYPE**

**60.** [2006] Heat given to process is positive. Match the following options of column I with the corresponding options in column II. [P-V diagram: P(atm) vs V(m^3) showing points J, K, L, M forming a cycle; J at top, K at left, L at bottom-right, M at right]

Column I: (A) JK (B) KL (C) LM (D) MJ
Column II: (P) deltaW > 0 (Q) deltaQ < 0 (R) deltaW < 0 (S) deltaQ > 0
**Ans: A-Q; B-P,S; C-S,D-Q,R**

**61.** [2007] Column I gives some devices and Column II gives some processes on which the functioning of these devices depends. Match the devices in Column I with the processes in Column II.

Column I: (A) Bimetallic strip (B) Steam engine (C) Incandescent lamp (D) Electric fuse
Column II: (P) Radiation from a hot body (Q) Energy conversion (R) Melting (S) Thermal expansion of solids
**Ans: A-S; B-Q; C-P,Q; D-Q,R**

**62.** [2008] Column I contains a list of processes involving expansion of an ideal gas. Match this with Column II describing the thermodynamic change during this process.

Column I:
(A) An insulated container has two chambers separated by a valve. Chamber II has vacuum. The valve is opened.
(B) An ideal monatomic gas expands to twice its original volume such that its pressure P proportional to 1/V^2, where V is the volume of the gas.
(C) An ideal monatomic gas expands to twice its original volume such that its pressure P proportional to 1/V^(4/3), where V is its volume.
(D) An ideal monatomic gas expands such that its pressure P and volume V follow the behaviour shown in the graph.

Column II: (P) The temperature of the gas decreases (Q) The temperature of the gas increases or remains constant (R) The gas loses heat (S) The gas gains heat
**Ans: A-Q; B-P,R; C-P,S; D-Q,S**

**63.** [2011] One mole of a monatomic gas is taken through a cycle ABCDA as shown in the P-V diagram. Column II gives the characteristics involved in the cycle. Match them with each of the processes given in Column I. [P-V diagram: A at (V,3P), B at (V,3P) top-right, C at (3V,P), D at (9V,P)]

Column I: (A) Process A->B (B) Process B->C (C) Process C->D (D) Process D->A (E) Process A->B
Column II: (P) Internal energy decreases (Q) Internal energy increases (R) Heat is lost (S) Heat is gained (T) Work is done on the gas
**Ans: A-P,R,T; B-P,R; C-Q,S; D-R,T**

**64.** [2013] One mole of mono-atomic ideal gas is taken along two cyclic processes E->F->G->E and E->F->H->E as shown in the PV diagram. The processes involved are purely isobaric, isothermal or adiabatic. Match the paths in Column I with the magnitudes of the work done in Column II. [PV diagram: E at (V0, P0), F at (V0, 32P0), G and H on the curve; processes are isobaric, isothermal or adiabatic]

Column I: (A) G->E (B) G->H (C) F->H (D) F->G
Column II: (P) 160 P0 V0 ln 2 (Q) 36 P0 V0 (R) 24 P0 V0 (S) 31 P0 V0
**Ans: A-S; B-R; C-Q; D-P**

**65.** [2018] One mole of a monatomic ideal gas undergoes four thermodynamic processes as shown schematically in the PV-diagram below. Among these four processes, one is isobaric, one is isothermal and one is adiabatic. Match the processes mentioned in Column-I with the corresponding statements in Column-II. [PV diagram: P vs V with processes I, II, III, IV; P0 and 3P0 marked; V0 and 3V0 marked]

Column-I: (A) In process I (B) In process II (C) In process III (D) In process IV
Column-II: (P) Work done by the gas is zero (Q) Temperature of the gas remains unchanged (R) No heat is exchanged between the gas and its surroundings (S) Work done by the gas is 6P0V0
(A) A-s; B-r; C-p; D-q (B) A-p; B-r; C-q; D-s (C) A-r; B-s; C-p; D-q (D) A-r; B-s; C-q; D-p
**Ans: A**

**NUMERICAL ANSWER TYPE**

**68.** [1980] A jar contains a gas and a few drops of water at TK. The pressure in the jar is 830 mm of Hg. The temperature of the jar is reduced by 1%. The saturated vapour pressure of water at the two temperatures are 30 and 25 mm of Hg. Calculate the new pressure in the jar (in mm of Hg).
**Ans: 817**

**69.** [1982] Calculate the work done (in Joule) when one mole of a perfect gas is compressed adiabatically. The initial pressure and volume of the gas are 10^5 N/m^2 and 6L respectively. The final volume of the gas is 2L. The molar specific heat of the gas at constant volume is 3R/2.
**Ans: -972**

**70.** [1983] One gram mole of oxygen at 27 deg C and one atmospheric pressure is enclosed in a vessel.
(i) Assuming the molecules to be moving with v_rms, the number of collisions per second which the molecules make with one square meter area of the vessel wall is x x 10^27. Find x.
**Ans: (i) 1.965**
(ii) The vessel is next thermally insulated and moved with a constant speed v0. It is then suddenly stopped. The process results in a rise of the temperature of the gas by 1 deg C. Calculate the speed v0 (in m/s).
**Ans: (ii) 36**

**71.** [1985] Two glass bulbs of equal volume are connected by a narrow tube and are filled with a gas at 0 deg C and a pressure of 76 cm of mercury. One of the bulbs is then placed in melting ice and the other is placed in a water bath maintained at 62 deg C. What is the new value of the pressure inside the bulbs (in cm of Hg)? The volume of the connecting tube is negligible.
**Ans: 83.83**

**72.** [1986] A thin tube of uniform cross-section is sealed at both ends. It lies horizontally, the middle 5 cm containing mercury and the two equal ends containing air at the same pressure p. When the tube is held at an angle of 60 deg with the vertical direction, the length of the air column above and below the mercury column are 46 cm and 44.5 cm respectively. Calculate the pressure p in centimetre of mercury. (The temperature of the system is kept at 30 deg C.)
**Ans: 75.4**

**73.** [1993] One mole of a monatomic ideal gas is taken through the cycle shown in the figure: A->B: adiabatic expansion; B->C: cooling at constant volume; C->D: adiabatic compression; D->A: heating at constant volume. The pressure and temperature at A, B, etc. are denoted by PA, PB, etc. and TA, TB etc. respectively. Given that TA = 1000 K, PB = (2/3)PA and PC = (1/3)PA. [Given: (2/3)^(2/5) = 0.85]
Calculate the following quantities:
(i) The work done by the gas in process A->B (in J).
**Ans: (i) 1869.75**
(ii) The heat lost by the gas in the path B->C (in J).
**Ans: (ii) -5297.63**
(iii) The temperature TD (in K).
**Ans: (iii) 500**

**74.** [1994] An ideal gas is taken through a cyclic thermodynamic process through four steps. The amounts of heat involved in these steps are Q1 = 5960 J, Q2 = -5585 J, Q3 = -2980 J and Q4 = 3645 J respectively. The corresponding quantities of work involved are W1 = 2200 J, W2 = -825 J, W3 = -1100 J and W4 respectively.
(i) Find the value of W4 (In Joule).
**Ans: (i) 765**
(ii) What is the efficiency of the cycle? (in %)
**Ans: (ii) 10.82**

**75.** [1996] At 27 deg C two moles of an ideal monoatomic gas occupy a volume V. The gas expands adiabatically to a volume 2V. Calculate:
(i) the final temperature of the gas (in K).
**Ans: (i) 189**
(ii) change in its internal energy (in J).
**Ans: (ii) -2767**
(iii) the work done by the gas during this process (in J).
**Ans: (iii) 2767**

**76.** [1997] One mole of a diatomic ideal gas (gamma = 1.4) is taken through a cyclic process starting from point A. The process A->B is an adiabatic compression, B->C is isobaric expansion, C->D an adiabatic expansion and D->A is isochoric. The volume ratios are VA/VB = 16 and VC/VB = 2 and the temperature at A is TA = 300 K.
(i) Find the temperature of the gas at the point B (in K).
**Ans: (i) 909**
(ii) Find the temperature of the gas at the point D (in K).
**Ans: (ii) 791.4**
(iii) Find the efficiency of the cycle (in %).
**Ans: (iii) 61.4**

**77.** [1997] A sample of 2 kg monoatomic helium (assumed ideal) is taken through the process ABC and another sample of 2 kg of the same gas is taken through the process ADC (see figure). Given molecular mass of helium = 4. [P-V diagram: A at (10,5x10^4), B at (10,10x10^4), C at (20,10x10^4), D at (20,5x10^4) in V(m^3) vs P(x10^4 N/m^2)]
(i) How much is the heat involved in the process ABC (in kJ)?
**Ans: (i) 3250**
(ii) How much is the heat involved in the process ADC (in kJ)?
**Ans: (ii) 2750**

**78.** [2001] A monatomic ideal gas of two moles is taken through a cyclic process starting from A as shown in the figure. The volume ratios are VB/VA = 2 and VD/VA = 4. If the temperature TA at A is 27 deg C. Calculate:
(i) The temperature of the gas at point B (in K).
**Ans: (i) 600**
(ii) The total work done by the gas during the complete cycle (in J).
**Ans: (ii) 4988**

**79.** [2004] The piston cylinder arrangement shown contains a diatomic gas at temperature 300 K. The cross-sectional area of the cylinder is 1 m^2. Initially the height of the piston above the base of the cylinder is 1 m. The temperature is now raised to 400 K at constant pressure.
(i) Find the new height (in m) of the piston above the base of the cylinder.
**Ans: (i) 4/3**
(ii) If the piston is now brought back to its original height without any heat loss, find the new equilibrium temperature of the gas (in K).
**Ans: (ii) 448.8**

**80.** [2010] A diatomic ideal gas is compressed adiabatically to 1/32 of its initial volume. If the initial temperature of the gas is Ti (in Kelvin) and the final temperature is aTi, the value of a is:
**Ans: 4**

**81.** [2014] A thermodynamic system is taken from an initial state i with internal energy Ui = 100 J to the final state f along two different paths iaf and ibf, as schematically shown in the figure. The work done by the system along the paths af, ib and bf are Waf = 200 J, Wib = 50 J and Wbf = 100 J respectively. The heat supplied to the system along the path iaf, ib and bf are Qiaf, Qib and Qbf respectively. If the internal energy of the system in the state b is Ub = 200 J and Qiaf = 500 J, the ratio Qbf/Qib is:
**Ans: 2**

**82.** [2018] One mole of a monatomic ideal gas undergoes an adiabatic expansion in which its volume becomes eight times its initial value. If the initial temperature of the gas is 100 K and the universal gas constant 8.0 J mol^(-1) K^(-1), the decrease in its internal energy, in Joule, is:
**Ans: 900**

**FILL IN THE BLANKS TYPE**

**83.** [1982] A solid sphere of copper of radius R and hollow sphere of the same material of inner radius r and outer radius R are heated to the same temperature and allowed to cool in the same environment. Which of them starts cooling faster? _______
**Ans: hollow sphere**

**84.** [1984] One mole of a monatomic ideal gas is mixed with one mole of a diatomic ideal gas. The molar specific heat of the mixture at constant volume is _______.
**Ans: 2R**

**85.** [1987] During an experiment, an ideal gas is found to obey an additional law p^2 V = constant. The gas is initially at a temperature T and volume V when it expands to a volume 2V, the temperature becomes _______ K.
**Ans: sqrt(2) T**

**86.** [1987] An ideal gas has a specific heat at constant pressure Cp = 5R/2. The gas is kept in a closed vessel of volume 0.0083 m^3, at a temperature of 300 K and a pressure of 1.6 x 10^6 N/m^2. An amount of 2.49 x 10^4 J of heat energy is supplied to the gas. Then the final temperature of the gas is _______ K and pressure of the gas is _______ Pa.
**Ans: 675, 3.6 x 10^6**

**87.** [1993] A container of volume 1 m^3 is divided into two equal parts by a partition. One part has an ideal gas at 300 K and the other part is vacuum. The whole system is thermally isolated from the surroundings. When the partition is removed, the gas expands to occupy the whole volume. Its temperature now be _______.
**Ans: 300**

**88.** [1994] A monoatomic ideal gas with pressure p, volume V and temperature T is expanded isothermally to a volume 2V and a final pressure pi. If the same gas is expanded adiabatically to a volume 2V, the final pressure is pa/pi is _______.
**Ans: 0.628**

**89.** [1994] A closed container of volume 0.02 m^3 contains a mixture of neon and argon gases, at a temperature of 27 deg C and pressure of 1 x 10^5 Nm^(-2). The total mass of the mixture is 28 g. If the molar masses of neon and argon are 20 and 40 g mol^(-1) respectively, the masses of the individual gasses in the container are: Neon _______ g and Argon _______ g. (Universal gas constant R = 8.314 J/mol-K).
**Ans: 4.074, 23.926**

**90.** [1997] A gas thermometer is used as a standard thermometer for measurement of temperature. When the gas container of the thermometer is immersed in water at its triple point 273.16 K, the pressure in the gas thermometer reads 3.0 x 10^4 N/m^2. When the gas container of the same thermometer is immersed in another system, the gas pressure reads 3.5 x 10^4 N/m^2. The temperature of this system is therefore _______ deg C.
**Ans: 45.68**

**91.** [1998] One mole of ideal monoatomic gas is taken round the cyclic process ABCA as shown in figure. [P-V diagram: A at (V0, P0), B at (2V0, 3P0), C at (2V0, P0)]
(i) The work done by the gas is _______.
**Ans: (i) P0 V0**
(ii) The heat rejected by the gas in the path CA is _______ and the heat absorbed by the gas in the path AB is _______.
**Ans: (ii) (5/2) P0 V0, 3P0 V0**
(iii) The net heat absorbed by the gas in the path BC is _______.
**Ans: (iii) (P0 V0)/2**
(iv) The maximum temperature attained by the gas during the cycle is _______.
**Ans: (iv) (25/8)(P0 V0/R)**

**92.** [2003] An insulated box containing a monoatomic gas of molar mass M moving with speed v0 is suddenly stopped. Find the increment in gas temperature as a result of stopping the box. _______
**Ans: Mv0^2/(3R)**

**TRUE/FALSE TYPE**

**93.** [1982] The volume V versus temperature T graphs for a certain amount of a perfect gas at two pressures p1 and p2 are as shown in figure. It follows from the graphs that p1 is greater than p2.
**Ans: False**

**94.** [1982] Two different gases at the same temperature have equal root mean square velocities.
**Ans: False**

**95.** [1985] The curves A and B in the figure show p-V graphs for an isothermal and an adiabatic process for an ideal gas. The isothermal process is represented by the curve A.
**Ans: True**

**96.** [1987] The root mean square (rms) speed of oxygen molecules (O2) at a certain temperature T (degree absolute) is V. If the temperature is doubled and oxygen gas dissociates into atomic oxygen, the rms speed remains unchanged.
**Ans: False**

**97.** [1987] At a given temperature, the specific heat of a gas at a constant pressure is always greater than its specific heat at constant volume.
**Ans: True**

---

**JEE Advanced Answer Key**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | A | A | B | B | D | B | A | B | D | D | C | C | A | C | D |

| Q# | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | B | D | A | D | A | B | D | D | B | A | A | A | C | D | A |

| Q# | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | D | D | C | ABCD | ABD | BC | CD | BD | BD | BD | AB | ABD | ACD | ACD | BCD |

| Q# | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | ABD | CD | A | D | B | D | B | B | D | D | C | A | B | B | A-Q;B-P,S;C-S;D-Q,R |

| Q# | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 |
|---|---|---|---|---|---|---|---|---|---|
| Ans | A-S;B-Q;C-P,Q;D-Q,R | A-Q;B-P,R;C-P,S;D-Q,S | A-P,R,T;B-P,R;C-Q,S;D-R,T | A-S;B-R;C-Q;D-P | C | D | B | 817 | -972 |

| Q# | 70(i) | 70(ii) | 71 | 72 | 73(i) | 73(ii) | 73(iii) | 74(i) | 74(ii) |
|---|---|---|---|---|---|---|---|---|---|
| Ans | 1.965 | 36 | 83.83 | 75.4 | 1869.75 | -5297.63 | 500 | 765 | 10.82 |

| Q# | 75(i) | 75(ii) | 75(iii) | 76(i) | 76(ii) | 76(iii) | 77(i) | 77(ii) | 78(i) | 78(ii) |
|---|---|---|---|---|---|---|---|---|---|---|
| Ans | 189 | -2767 | 2767 | 909 | 791.4 | 61.4 | 3250 | 2750 | 600 | 4988 |

| Q# | 79(i) | 79(ii) | 80 | 81 | 82 | 83 | 84 | 85 | 86 |
|---|---|---|---|---|---|---|---|---|---|
| Ans | 4/3 | 448.8 | 4 | 2 | 900 | hollow sphere | 2R | sqrt(2)T | 675, 3.6x10^6 |

| Q# | 87 | 88 | 89 | 90 | 91(i) | 91(ii) | 91(iii) | 91(iv) | 92 |
|---|---|---|---|---|---|---|---|---|---|
| Ans | 300 | 0.628 | 4.074, 23.926 | 45.68 | P0V0 | (5/2)P0V0, 3P0V0 | (P0V0)/2 | (25/8)(P0V0/R) | Mv0^2/(3R) |

| Q# | 93 | 94 | 95 | 96 | 97 |
|---|---|---|---|---|---|
| Ans | False | False | True | False | True |
