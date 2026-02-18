# Current Electricity (DC Circuits)

## Overview
Current electricity deals with the flow of electric charge through conductors and circuits. This module covers the fundamental concepts including electric current, resistance, Ohm's law, circuit analysis using Kirchhoff's laws, and various measurement techniques. The study includes both theoretical foundations and practical applications in DC circuits.

## 1. Electric Current and Resistance

### Concepts
- Electric current is the rate of flow of electric charge across any cross-section of a conductor
- SI unit of current is ampere (A)
- In metals, the carriers of electric current are negatively charged electrons
- By convention, the direction of electric current is taken as the direction of flow of positive charges
- In electrolytes, the carriers of electric current are ions
- Specific resistance (resistivity) depends only on the material of the conductor and temperature
- Resistance is directly proportional to length and inversely proportional to cross-sectional area

### Formulas
- Current: `I = dq/dt`
- 1 A = 1 C/1 s; 1 mA = 10⁻³ A; 1 µA = 10⁻⁶ A
- Charge flowing through a cross-section: `q = ∫(t₁ to t₂) I dt`
- Resistance: `R = ρ(l/A)` where ρ is resistivity
- Ohm's Law: `V = IR` or `V ∝ I`
- Microscopic form of Ohm's Law: `E = ρj` where E is electric field and j is current density
- Conductivity: `σ = 1/ρ`, so `j = σE`

### Important Notes
- The unit of resistivity in SI system is ohm-m (Ω-m)
- One ohm is defined as the resistance of a conductor which allows a passage of current of 1 A through it when a potential difference of 1 V is maintained across its ends
- Resistance is the opposition or obstruction to the flow of electrons which results on account of their collisions with the stationary ions of the conductor
- Resistivity is defined as the resistance of the conductor made of a given material having length of 1 meter and area of cross-section 1 m²

### Worked Example
**Q:** A conductor has a square cross-section, 2.0 mm on a side, and is 12 m long. The resistance between its ends is 0.072 Ω. What is the resistivity of the material?

**A:**
- A = (2.0 × 10⁻³)² = 4 × 10⁻⁶ m²
- l = 12 m, R = 0.072 Ω
- ρ = RA/l = (0.072 × 4 × 10⁻⁶)/12 = 2.4 × 10⁻⁶ Ω·m

---

## 2. Temperature Dependence of Resistance and Resistivity

### Concepts
- Resistance and resistivity of all materials change with temperature
- In metals (conductors), resistance increases with rise in temperature
- In insulators and semiconductors (carbon, silicon, germanium), resistance decreases with temperature
- Temperature coefficient of resistivity describes how resistivity changes with temperature
- Temperature coefficient of resistance describes how resistance changes with temperature
- Manganin is a notable exception where resistance decreases with temperature (negative temperature coefficient)

### Formulas
- Temperature coefficient of resistivity: `ρ₂ = ρ₁(1 + αρθ)` where θ = T₂ - T₁
- Temperature coefficient of resistance: `R₂ = R₁(1 + αR θ)`
- Relationship: `αR = αρ - α` (α: coefficient of linear expansion)
- Approximation: `αR ≈ αρ` (since α << αρ)

### Important Notes
- Temperature coefficients are material-specific and must be considered in precision applications
- The temperature dependence becomes significant for large temperature changes
- Different materials have vastly different temperature coefficients

### Worked Example
**Q:** A toaster using a Nichrome heating element operates on 120 V. When switched on at 0°C, it carries an initial current of 1.5 A. A few seconds later, the current reaches the steady value of 1.33 A. What is the final temperature of the element? The average value of the temperature coefficient of the Nichrome over the temperature range is 0.00045/°C.

**A:**
- Let R₀ and R₁ be the resistances at 0°C and final temperature T°C
- R₁ = R₀(1 + αRT)
- From the given conditions: 1.5 = 120/R₀ and 1.33 = 120/R₁
- R₀ = 80 Ω and R₁ = 90.23 Ω
- 90.23 = 80(1 + 0.00045 × T)
- T = (90.23/80 - 1)/0.00045 = 284°C

---

## 3. Ohm's Law

### Concepts
- Ohm's law states that the current passing through a conductor is directly proportional to the potential difference across its ends, provided temperature and other physical conditions remain unchanged
- The law applies to ohmic materials where the I-V relationship is linear
- Ohm's law can be expressed in both macroscopic and microscopic forms
- The constant R is called the resistance of the conductor
- Resistance is defined as the opposition or obstruction to the flow of electrons

### Formulas
- Macroscopic form: `V = IR`
- Microscopic form: `E = ρj` where E is electric field, ρ is resistivity, j is current density
- From Ohm's Law: `E/l = iρ/A` (for uniform field)
- Conductivity form: `j = σE` where σ = 1/ρ

### Important Notes
- Ohm's law is not a universal law; it applies only to ohmic materials
- The I-V characteristic graph for an ohmic conductor is a straight line passing through the origin
- Different materials have different resistance values at the same temperature

### Worked Example
**Q:** If the electric field magnitude in the conductor from the previous problem is 0.12 V/m, what is the total current?

**A:**
- Electric field: E = V/l = 0.12 V/m
- V = E × l = 0.12 × 12 = 1.44 V
- i = V/R = 1.44/0.072 = 20 A

---

## 4. Heating Effect of Current and Electric Power

### Concepts
- When current passes through a conductor, the electrons move from one end to another while experiencing collisions with fixed atoms
- These repeated collisions result in dissipation of kinetic energy in the form of heat
- This phenomenon is called the heating effect of current
- Heat is generated whenever current passes through a conductor
- Energy is dissipated as the positive charges fall from high potential to low potential
- Heat generated is measured in calories
- Power is the rate at which energy is dissipated

### Formulas
- Heat dissipated: `H = qV = (i)(V) = V·i·t = i²Rt`
- Heat in calories: `H = (V·i·t)/4.18 = (i²Rt)/4.18` calories
- Electric Power: `P = (heat dissipated)/t = i²R`
- Alternative power formulas: `P = VI = V²/R`
- SI unit of power: Watts (W); 1 W = 1 J/s
- Energy unit: 1 kWh = 3.6 × 10⁶ J
- Heat exchange for temperature rise: `(i²Rt)/4.18 = msθ` where m is mass, s is specific heat, θ is temperature difference

### Important Notes
- In heaters, electric irons, radiators etc., electrical energy is mostly converted into heat
- In electric lamps, only about 5% of the total electric energy is converted into visible light
- Power dissipation is proportional to i² and R
- The unit of power is Watts, defined as 1 Joule per second

### Worked Example
**Q:** A bulb has voltage rating of 220 V and power rating of 40 W. Calculate the resistance of the bulb and determine what will happen if a voltage source of 200 V is connected across the bulb.

**A:**
- Resistance of bulb: `R = (voltage rating)²/(power rating) = (220 × 220)/40 = 1210 Ω`
- If voltage across bulb is 200 V: Power dissipated = (200 × 200)/1210 = 33.05 W
- Since the power dissipated (33.05 W) is less than 40 W, the bulb will glow less than normal brightness

---

## 5. Drift Velocity and Mobility

### Concepts
- In a metal, electrons are in continuous random thermal motion similar to gas molecules
- The average velocity of these random motions is zero
- When a potential difference is applied, an electric field is established inside the conductor
- Each electron experiences an electric force due to the field
- Between successive collisions, electrons gain some speed which is lost in the next collision
- The average velocity of electrons in the direction of the electric field is called drift velocity
- The relaxation time is the average time between successive collisions
- Mobility is the ratio of drift velocity to electric field

### Formulas
- Drift velocity: `vd = eEτ/m`
- Relationship to current: `I = nArevd` and `j = nevd`
- Drift velocity in terms of field: `vd = eE/m` multiplied by relaxation time τ
- Relaxation time: `τ = m/(ne²ρ)`
- Electric field: `E = jρ` and `E = V/l`
- Terminal velocity of electrons: `vd = (eEτ)/m` where τ is relaxation time

### Important Notes
- Drift velocity is very small (typically 10⁻⁴ to 10⁻⁵ m/s) even though signal propagation appears instantaneous
- The drift velocity is opposite to the direction of the electric field (for electrons, which are negatively charged)
- Free electrons in a metal have random thermal motion similar to those of gas molecules
- When an electric field is established in the metal, electrons also experience an average drift velocity

### Worked Example
**Q:** A certain electric conductor has a square cross-section, 2.0 mm on a side, and is 12 m long. If the material has 8 × 10²⁸ free electrons per cubic meter, find the average drift velocity under the conditions of the previous problem where the electric field magnitude is 0.12 V/m and current is 20 A.

**A:**
- n = 8 × 10²⁸ electrons/m³
- Current: i = enAvd
- vd = i/(enA) = 20/(1.6 × 10⁻¹⁹ × 8 × 10²⁸ × 4 × 10⁻⁶)
- vd = 3.9 × 10⁻⁴ m/s

---

## 6. Series and Parallel Combination of Resistances

### Concepts
- Resistances can be combined in two ways: series and parallel
- In series combination, the same current flows through all resistances
- In parallel combination, the same potential difference appears across all resistances
- An equivalent resistance can replace a combination without affecting the circuit
- Series resistances add up their voltages; parallel resistances share the current
- The total voltage in series is divided among the resistances
- In parallel, the current is divided among the resistances

### Formulas
- Series combination: `Req = R₁ + R₂` (for n resistors: Req = R₁ + R₂ + ... + Rn)
- Voltage division in series: `V₁ = (R₁/(R₁ + R₂))V` and `V₂ = (R₂/(R₁ + R₂))V`
- Parallel combination: `1/Req = 1/R₁ + 1/R₂` (for n resistors: 1/Req = 1/R₁ + 1/R₂ + ... + 1/Rn)
- Current division in parallel: `I₁ = (R₂/(R₁ + R₂))I` and `I₂ = (R₁/(R₁ + R₂))I`
- For two resistances in parallel: `Req = (R₁R₂)/(R₁ + R₂)`

### Important Notes
- In series, equivalent resistance is always greater than the largest individual resistance
- In parallel, equivalent resistance is always less than the smallest individual resistance
- The current through each resistor in series is the same
- The voltage across each resistor in parallel is the same
- Series combination is used to increase total resistance
- Parallel combination is used to decrease total resistance and distribute current

### Worked Example
**Q:** Two resistances of 4 Ω and 12 Ω are connected in parallel across a 24 V supply. Find the equivalent resistance, total current, and current through each resistor.

**A:**
- Equivalent resistance: `1/Req = 1/4 + 1/12 = 3/12 + 1/12 = 4/12` → Req = 3 Ω
- Total current: `I = V/Req = 24/3 = 8 A`
- Current through 4 Ω: `I₁ = (12/(4 + 12)) × 8 = (12/16) × 8 = 6 A`
- Current through 12 Ω: `I₂ = (4/(4 + 12)) × 8 = (4/16) × 8 = 2 A`
- Verification: I₁ + I₂ = 6 + 2 = 8 A = I

---

## 7. Electromotive Force (EMF) and Internal Resistance

### Concepts
- An electric cell is a device which can maintain a constant potential difference across its terminals
- The cell converts chemical energy into electrical energy and transfers this energy to the resistance connected across its terminals
- The positive charge carriers in the circuit fall from high potential to low potential across the resistance
- The cell lifts these charges from low potential to higher potential; this is called electromotive force (EMF)
- EMF is the potential difference across the terminals of a cell when the cell is in open circuit (not delivering current)
- Terminal voltage depends on both EMF and internal resistance
- Internal resistance is the resistance offered by the electrodes and electrolyte of the cell

### Formulas
- EMF definition: E is the potential difference across cell terminals in open circuit
- Terminal voltage when delivering current: `Vab = E - ir`
- Terminal voltage when being charged: `Vab = E + ir`
- Single loop circuit: `i = E/(R + r)` where E is EMF, r is internal resistance, R is external resistance
- Net EMF with cells in series: `Enet = E₁ + E₂ + ...` (if cells are in same direction)
- For cells opposing: `Enet = E₁ - E₂` (if E₁ > E₂)
- Internal resistance in series: `rnet = r₁ + r₂ + ...`

### Important Notes
- EMF is not a potential difference but the work done per unit charge by non-electrostatic forces inside the cell
- When no current flows, terminal voltage equals EMF
- When current is flowing out, terminal voltage is less than EMF
- When current is flowing in (charging), terminal voltage is more than EMF
- For proper functioning of potentiometer, the EMF of the cell used should be greater than the potential difference to be measured

### Worked Example
**Q:** Two cells with EMF E₁ = 10 V and E₂ = 40 V are connected with internal resistances r₁ = 1 Ω and r₂ = 2 Ω. Calculate the current through external resistance R = 15 Ω and the potential difference across the terminals of each cell. E₁ aids the circuit and E₂ opposes it.

**A:**
- Net EMF: E = E₂ - E₁ = 40 - 10 = 30 V
- Total internal resistance: r = r₁ + r₂ = 1 + 2 = 3 Ω
- Current: i = E/(R + r) = 30/(15 + 3) = 30/18 = 5/3 A
- Terminal voltage of E₁: VA - VB = E₁ - ir₁ = 10 - (5/3) × 1 = 35/3 V
- Terminal voltage of E₂: VC - VB = E₂ - ir₂ = 40 - (5/3) × 2 = 110/3 V

---

## 8. Kirchhoff's Laws

### Concepts
- Kirchhoff's laws are fundamental to circuit analysis and allow solving complex circuits
- Kirchhoff's Voltage Law (KVL) states that the algebraic sum of potentials in a closed path is zero
- Kirchhoff's Current Law (KCL) states that the sum of currents arriving at a junction equals the sum of currents leaving the junction
- In KVL analysis, potential rises (through EMF) are taken as positive and potential falls (through resistance) are taken as negative
- When passing through a resistor in the direction of current, change in potential is negative (-iR)
- When passing through a resistor opposite to current direction, change in potential is positive (+iR)
- When passing through a cell in the direction of EMF, change in potential is +E
- When passing through a cell opposite to EMF direction, change in potential is -E

### Formulas
- Kirchhoff's Voltage Law: In any closed loop, `Σ ΔV = 0`
- Kirchhoff's Current Law: At any junction, `Σ I(entering) = Σ I(leaving)`
- For resistor in direction of current: potential change = -iR
- For resistor opposite to current: potential change = +iR
- For EMF in direction (negative to positive terminal): potential change = +E
- For EMF opposite direction: potential change = -E

### Important Notes
- Kirchhoff's laws apply to both AC and DC circuits
- They are consequences of conservation of charge and energy
- When solving circuits, the sign of calculated currents indicates actual direction (positive = assumed direction, negative = opposite direction)
- Number of independent equations from KVL = Number of independent loops = Number of branches - Number of nodes + 1
- Number of independent equations from KCL = Number of nodes - 1

### Worked Example
**Q:** Calculate the current through each resistor in the given circuit: E₁ = 6 V, E₂ = 8 V, E₃ = 10 V, R₁ = 5 Ω, R₂ = 10 Ω, R₃ = 4 Ω. All cells have no internal resistance.

**A:**
Using Kirchhoff's voltage law for two loops:
- Loop 1 (containing R₁, R₂, E₁, E₃): +xR₁ - E₁ + yR₃ + E₃ = 0 → 5x + 4y = -4
- Loop 2 (containing R₁, R₃, E₂): -(x-y)R₂ - E₂ + yR₁ + E₃ = 0 → 5x - 7y = 1

Solving: x = -24/55 A, y = -5/11 A

Current directions:
- Through R₁: 24/55 A (towards left)
- Through R₂: 1/55 A (towards right)
- Through R₃: 5/11 A (towards up)

---

## 9. Wheatstone Bridge Network

### Concepts
- The Wheatstone bridge is a circuit used to measure unknown resistances
- The balanced condition occurs when the current through one arm (galvanometer) becomes zero
- At balance, points A and B are at the same potential
- The network is called balanced network if the balance condition is satisfied
- The meter bridge is an instrument based on the Wheatstone bridge principle
- A sliding contact allows measuring unknown resistance by measuring lengths on a wire
- The circuit has two arms with known resistances and two arms for comparison

### Formulas
- Balance condition (no current through galvanometer): `R₁/R₂ = R₃/R₄`
- From balance condition: `R₁ × R₄ = R₂ × R₃`
- For meter bridge: `X/R = l₁/l₂` where X is unknown, R is known, l₁ and l₂ are lengths
- Also: `X = R(l₁/l₂)`
- For unknown resistance on left: `X = R(80/20) = 4R` (if initial null at 80 cm)
- Equivalent resistance of balanced bridge: Current through R is removed since no current flows, so `Req = (R₁ + R₃)` || `(R₂ + R₄)`

### Important Notes
- At balance, no current flows through the galvanometer, so it doesn't affect the measurement
- The balance condition is independent of the supply voltage and galvanometer sensitivity
- When current through a branch is zero, that branch can be removed without affecting the circuit
- Meter bridge requires accurate length measurement but uses only one known resistance
- The balancing length is called null point

### Worked Example
**Q:** Two unknown resistances X and Y are placed in the left and right gaps of a meter bridge. The null-point in galvanometer is obtained at a distance of 80 cm from left. A resistance of 100 Ω is now connected in parallel across X. The null-point is then found by shifting the sliding contact towards left by 20 cm. Calculate X and Y.

**A:**
From first null point (X/Y = 80/20): X/Y = 4 ... (i)

From second null point: When 100 Ω is in parallel with X, equivalent resistance = 100X/(100 + X)

For new null point at 60 cm from left: [100X/(100 + X)]/Y = 60/40 ... (ii)

From (i) and (ii): X = 500/3 Ω and Y = 125/3 Ω

---

## 10. Ammeter, Voltmeter, and Galvanometer

### Concepts
- An ammeter is an instrument that measures current in a branch of a circuit
- The ammeter must be inserted into the branch in series with the element to be measured
- The resistance of an ammeter should be very small (ideally zero) to not affect the current being measured
- A voltmeter measures potential difference across two points in a circuit
- The voltmeter is connected in parallel between two points without breaking the circuit
- The resistance of a voltmeter should be very large (ideally infinite) to draw negligible current
- A galvanometer is used to detect the presence of small currents in any branch
- The galvanometer needle shows full scale deflection for full scale deflection current (If)
- A galvanometer can be converted to an ammeter by connecting a small shunt resistance in parallel
- A galvanometer can be converted to a voltmeter by connecting a high resistance in series

### Formulas
- Shunt resistance for ammeter (range I): `R = (If × G)/(I - If)` where G is galvanometer resistance
- Multiplier for ammeter with n divisions for range I: `n = I/If`
- Series resistance for voltmeter (range V): `R = (V/If) - G` where If is full scale deflection current
- Sensitivity of ammeter conversion: `n = I/If` (range multiplier)
- For galvanometer with range 0 to If through shunt R: `If(G + R) = I·R`
- For voltmeter conversion: `If(G + R) = V`

### Important Notes
- The ammeter has very low resistance (acts as short circuit ideally)
- The voltmeter has very high resistance (acts as open circuit ideally)
- When converting galvanometer to ammeter, the shunt is connected in parallel
- When converting galvanometer to voltmeter, the multiplier is connected in series
- Real ammeters and voltmeters have finite non-ideal resistances

### Worked Example
**Q:** A galvanometer of 100 Ω has a full-scale deflection current equal to 5 mA. What is the resistance that must be connected to convert this galvanometer into:
(a) an ammeter of range 0 - 10 A, (b) a voltmeter of range 0 - 5 V?

**A:**
(a) Let R₁ be the shunt resistance for ammeter conversion. When I = 10 A flows through the ammeter, If should flow through G:
- If·G = (I - If)·R₁
- 5 × 10⁻³ × 100 = (10 - 5 × 10⁻³) × R₁
- R₁ = 0.050025 Ω

(b) Let R₂ be the series resistance for voltmeter conversion. When maximum voltage V = 5 volts occurs, current If must flow through G:
- If(G + R₂) = V
- 5 × 10⁻³(100 + R₂) = 5
- R₂ = 900 Ω

---

## 11. Potentiometer

### Concepts
- The potentiometer is an instrument that allows measurement of potential difference without drawing current from the circuit being measured
- The potentiometer uses a sliding contact on a uniform wire to measure unknown potential differences
- The no deflection condition of the galvanometer ensures zero current through the galvanometer branch
- The balancing length is the length at which no deflection occurs
- The potential difference is measured by the potential gradient (potential per unit length)
- For proper working, the EMF of the cell used in the potentiometer must be greater than the potential difference to be measured
- The length x for no deflection is called the balancing length
- The potential gradient is constant along the wire if current is constant

### Formulas
- Potential difference measured: `Vcb = (V_AB/L) × x` where L is total length, x is balancing length
- Potential gradient: `k = V_AB/L` (potential per unit length)
- Potential to be measured: `V = (V_AB/L) × x`
- For internal resistance measurement: `E = (V_AB/L) × l₁` and `E - ir = (V_AB/L) × l₂`
- From these: `r = R(l₁/l₂ - 1)`

### Important Notes
- The potentiometer is a null-deflection instrument, so it doesn't draw current from the circuit being measured
- This gives it high accuracy compared to voltmeters which do draw current
- The balancing length is found by adjusting the sliding contact until galvanometer shows zero deflection
- The EMF of the cell used in the potentiometer should be greater than the EMF or potential difference being measured
- The batary, galvanometer, and potentiometer wire are in series in the potentiometer circuit

### Worked Example
**Q:** A battery of EMF 4 V is connected across a 10 m long potentiometer wire having a resistance per unit length 1.6 Ω m⁻¹. A cell of EMF 2.4 V is connected so that its negative terminal is connected to the low potential end of the potentiometer wire and the other end is connected through a galvanometer to a sliding contact along the wire. It is found that the no-deflection point occurs against the balancing length of 8 m. Calculate the internal resistance of the 4 V battery.

**A:**
The EMF of the cell is the potential difference to be measured:
- emf of cell = (potential gradient) × x = (V_AB/L) × 8

- V_AB = 3 volts (from the no-deflection condition with balancing length 8 m for the 2.4 V cell)
- But V_AB = E - R_AB × i_AB where i_AB is current through the potentiometer wire

- V_AB = E_battery - i × R_internal of battery

- 3 = 4 - (current) × (internal resistance)

From the given information: 2.4 = (3/10) × 8 = 2.4 volts (verified)

- r = 16/3 Ω

---

## 12. RC Circuits (Charging and Discharging)

### Concepts
- When a capacitor charges or discharges through a resistor, the current varies with time
- During charging, the capacitor voltage increases exponentially from zero to final value
- During discharging, the capacitor voltage decreases exponentially from initial value to zero
- The time constant (τ = RC) determines the rate of charging or discharging
- After time equal to one time constant, the charge reaches about 63% of its maximum value (during charging)
- The current during charging decreases exponentially with time
- During discharging, the current also decreases exponentially but in opposite direction

### Formulas
- Time constant: `τ = RC`
- Charging of capacitor: `q(t) = Q(1 - e^(-t/RC))` where Q is maximum charge
- Charging current: `i(t) = (E/R)e^(-t/RC)`
- Voltage across capacitor during charging: `V_c(t) = E(1 - e^(-t/RC))`
- Discharging of capacitor: `q(t) = Q₀e^(-t/RC)`
- Discharging current: `i(t) = (V₀/R)e^(-t/RC)`
- Charge after time t: `q = ∫(0 to t) i dt`

### Important Notes
- The time constant τ = RC gives a characteristic time scale for the circuit
- At t = τ, charging reaches 63.2% of maximum value
- At t = 5τ, circuit is considered fully charged or discharged (99.3% complete)
- The exponential decay is independent of the initial voltage or charge
- The time constant increases with both resistance and capacitance

### Worked Example
**Q:** A capacitor of capacitance C is charged to voltage V through a resistor R. How long will it take to charge to 99% of final voltage?

**A:**
Using: `V_c(t) = V(1 - e^(-t/RC))`

For 99% charging: `0.99V = V(1 - e^(-t/RC))`
- `0.99 = 1 - e^(-t/RC)`
- `e^(-t/RC) = 0.01`
- `-t/RC = ln(0.01) = -4.605`
- `t = 4.605 × RC` or approximately `t ≈ 4.6RC`

---

## 13. Power and Energy in Circuits

### Concepts
- Power is the rate at which energy is delivered or consumed in a circuit
- In resistive elements, electrical energy is converted to heat energy
- In batteries being discharged, chemical energy is converted to electrical energy
- In batteries being charged, electrical energy is converted to chemical energy
- Total power supplied by a battery equals the sum of power dissipated in all resistances
- Power delivered by a battery depends on both EMF and current
- Energy supplied by battery equals EMF times charge transferred

### Formulas
- Power in a resistor: `P = i²R = VI = V²/R`
- Power supplied by battery: `P = EI` (where E is EMF and I is current)
- Power dissipated in internal resistance: `P_r = i²r`
- Power delivered to external circuit: `P_ext = VI = i(E - ir) = i²R`
- Total energy from battery in time t: `W = EIt`
- Energy dissipated as heat: `Q = i²Rt = VIt`
- Energy in joules to calories conversion: `Q(calories) = Q(joules)/4.18`

### Important Notes
- Power delivered to external load is maximum when external resistance equals internal resistance (maximum power transfer theorem)
- Maximum power transfer: P_max = E²/4r
- When R = r, power delivered is maximum
- Total power from battery goes into both external resistance and internal resistance
- Different appliances have different power ratings based on their usage

### Worked Example
**Q:** An electric kettle has a resistance of 20 Ω and is connected to a 220 V supply. Calculate the power consumed, current flowing through it, and energy consumed in 5 minutes.

**A:**
- Power: P = V²/R = (220)²/20 = 2420 W = 2.42 kW
- Current: I = V/R = 220/20 = 11 A
- Energy in 5 minutes: W = Pt = 2420 × (5 × 60) = 726,000 J = 0.202 kWh

---

## Questions

(Questions to be added)
