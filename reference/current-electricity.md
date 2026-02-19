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

### ANSWER KEYS (Reference)

**Workbook Answer Key -- Level 1 (Q1-45)**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | B | D | C | B | D | D | C | B | A | B | C | B | D | B | D |

| Q# | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | B | D | B | C | C | A | A | A | D | D | B | C | B | C | A |

| Q# | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | B | C | B | B | C | B | C | A | C | A | C | B | A | A | B |

**Workbook Answer Key -- Level 2 (Q91-140)**

| Q# | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99 | 100 |
|---|---|---|---|---|---|---|---|---|---|---|
| Ans | D | B | B | A | A | A | C | C | BCD | A-P, B-R, C-S, D-Q |

| Q# | 101 | 102 | 103 | 104 | 105 | 106 | 107 | 108 | 109 | 110 |
|---|---|---|---|---|---|---|---|---|---|---|
| Ans | ABCD | D | BD | B | B | AC | ACD | B | C | A |

| Q# | 111 | 112 | 113 | 114 | 115 | 116 | 117 | 118 | 119 | 120 |
|---|---|---|---|---|---|---|---|---|---|---|
| Ans | 1 | 2 | 80 | 2.5 | 0.02 | - | - | - | - | - |

**JEE Main Archive (Q1-90)**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| Ans | B | B | D | B | D | C | A | A | B | A |

| Q# | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 |
|---|---|---|---|---|---|---|---|---|---|---|
| Ans | B | B | D | D | C | B | B | D | B | C |

| Q# | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
|---|---|---|---|---|---|---|---|---|---|---|
| Ans | D | C | B | B | D | C | D | C | A | C |

| Q# | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 |
|---|---|---|---|---|---|---|---|---|---|---|
| Ans | B | C | D | C | A | C | C | B | B | C |

| Q# | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 |
|---|---|---|---|---|---|---|---|---|---|---|
| Ans | C | C | D | C | B | D | D | D | B | D |

| Q# | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 |
|---|---|---|---|---|---|---|---|---|---|---|
| Ans | C | A | B | D | D | D | B | A | A | B |

| Q# | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 |
|---|---|---|---|---|---|---|---|---|---|---|
| Ans | D | A | A | A | C | A | D | A | D | D |

| Q# | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 |
|---|---|---|---|---|---|---|---|---|---|---|
| Ans | C | A | None | B | B | A | B | D | B | 10 |

| Q# | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 |
|---|---|---|---|---|---|---|---|---|---|---|
| Ans | 40 | D | 40 | 2 | C | 30 | 101 | 40 | 97 | 98 |

**JEE Advanced Archive (Q1-69)**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| Ans | B | B | B | C | C | B | D | D | A | C |

| Q# | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 |
|---|---|---|---|---|---|---|---|---|---|---|
| Ans | B | A | C | D | A | A | C | D | A | C |

| Q# | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
|---|---|---|---|---|---|---|---|---|---|---|
| Ans | D | C | D | C | B | BC | AD | ABCD | DD | 0.02 |

---

### CURRENT ELECTRICITY: LEVEL 0 (EASY)

**1.** A wire of resistivity ρ is stretched to double its length. What will be its new resistivity?

(A) ρ (B) 2ρ (C) ρ/2 (D) 4ρ

**2.** For wiring in the home, one uses copper wires or aluminium wires. What considerations are involved in this?

(A) Resistivity (B) Cost (C) Tensile strength (D) All of these

**3.** The emf of a cell working as a source is greater than its terminal voltage. Why?

(A) Due to internal resistance (B) Due to external resistance (C) Due to both (D) None

**4.** A carbon resistor is marked in colour bands of red, black, orange and silver. What is the resistance and tolerance value of the resistor?

(A) 2200 Ω ± 10% (B) 2000 Ω ± 5% (C) 2200 Ω ± 5% (D) 2000 Ω ± 10%

**5.** Define the current sensitivity of a galvanometer. Write its SI unit.

(A) Ampere/division (B) Division/ampere (C) Ampere (D) Division

**6.** State the condition for maximum current to be drawn from the cell.

(A) R = 0 (B) R = r (C) R = 2r (D) R >> r

**7.** Write the mathematical relation between mobility and drift velocity of charge carriers in a conductor. Name the mobile charge carriers responsible for conductors of electric current in: (i) an electrolyte (ii) an ionised gas.

(A) vd = μE; ions and electrons (B) vd = μ/E; ions and holes (C) E = μvd; electrons only (D) vd = E/μ; electrons and ions

**8.** A cylindrical metallic wire is stretched to increase its length by 10%. Calculate the percentage increase in its resistance.

(A) 10% (B) 20% (C) 21% (D) 31%

**9.** Explain the variation of conductivity with temperature for (i) a metallic conductor and (ii) ionic conductors.

(A) Increases; decreases (B) Decreases; increases (C) Both increase (D) Both decrease

**10.** First a set of n equal resistors of R each are connected in series to a battery of emf E and internal resistance R. A current I is observed to flow. Then the n resistors are connected in parallel to the same battery. It is observed that the current is increased 10 times. What is n?

(A) 5 (B) 10 (C) 20 (D) 25

**11.** The lengths of three conducting wires are in the ratio 1 : 2 : 3. All the wires are of same metal and their radii are also equal. If we join them in parallel across a battery, what will be the ratio of current in them?

(A) 1 : 1 : 1 (B) 3 : 2 : 1 (C) 1 : 2 : 3 (D) 6 : 3 : 2

**12.** A current is passed through a steel wire heated to red. Then half of the wire is immersed in cold water. Which half of the wire will heat up more and why?

(A) Heated half; higher R (B) Cold half; lower R (C) Both equally (D) Depends on material

**13.** When is more power delivered to a light bulb, just after it is turned on and the glow of the filament is increasing or after it has been ON for a few seconds and the glow is steady?

(A) Initially (B) Finally (C) Both same (D) Cannot say

**14.** What will be the value of current through the 2Ω resistance for the circuit shown in the figure? Give reason to support your answer.

(A) 0 A (B) 0.5 A (C) 1 A (D) 2 A

**15.** Two students X and Y perform an experiment on potentiometer using the circuit diagram shown here. Keeping other things unchanged, (i) X increases the value of resistance R. (ii) Y decreases the value of resistance S in the set up. How would these changes affect the position of the null point in each case and why?

(A) Shift right; shift left (B) Shift left; shift right (C) No change; no change (D) Shift right; no change

**16.** The circuit shown in the diagram contains a battery 'B', a rheostat 'Rh' and identical lamps P and Q. What will happen to the brightness of the lamps, if the resistance through the rheostat is increased? Give reasons.

(A) Increase (B) Decrease (C) No change (D) Cannot determine

**17.** The element of heater is very hot while the wires carrying current are cold. Why?

(A) Wires have lower resistance (B) Heater has higher resistance (C) Both (D) None

**18.** A storage battery of emf 8V and internal resistance 0.5Ω is being charged by a 120 V.D.C. supply using a series resistor of 15.5Ω. What is the terminal voltage of the battery during charging? What is the purpose of having a series resistor in the charging circuit?

(A) 10 V; limit current (B) 12 V; limit power (C) 10 V; limit power (D) 12 V; limit current

**19.** Calculate the value of the current drawn from a 5V battery in the circuit as shown.

(A) 1 A (B) 0.5 A (C) 2 A (D) 0.25 A

**20.** (i) Calculate the equivalent resistance of the given electrical network between points A and B. (ii) Also calculate the current through CD and ACB if a 10V D.C. source is connected between points A and B and the value of R = 2Ω.

(A) 2 Ω; 1 A; 2 A (B) 3 Ω; 2 A; 3 A (C) 1.5 Ω; 1 A; 1.5 A (D) 2.5 Ω; 2 A; 2.5 A

**21.** The following graph shows the variation of terminal potential difference V, across a combination of three cells in series to a resistor, versus current i.

(i) Calculate the emf of each cell. (ii) For what current I will the power dissipation of the circuit be maximum?

(A) 3V; 1A (B) 2V; 0.5A (C) 1.5V; 1A (D) 2.5V; 2A

**22.** In order to quadruple the resistance of a wire of uniform cross-section, a fraction of its length was stretched uniformly till the final length of the wire was 1.5 times the initial length. Calculate the fraction elongated of the wire.

(A) 1/2 (B) 1/3 (C) 2/3 (D) 3/4

**23.** Define resistivity of a conductor. Plot a graph showing the variations of resistivity with temperature for a metallic conductor. How does one explain such a behaviour, using the mathematical expression of the resistivity of a material.

(A) Linear increase (B) Linear decrease (C) Exponential (D) Parabolic

**24.** Two students 'X' and 'Y' perform an experiment on potentiometer separately using the circuit given: Keeping other parameters unchanged, how will the position of the null point be affected if: (i) X increases the value of resistance R in the set-up by keeping the key K₁ closed and the key K₂ open? (ii) Y decreases the value of resistance S in the set-up, while the key K₂ remains open and the key K₁ closed? Justify.

(A) Shift right; shift left (B) Shift left; shift right (C) No change; shift left (D) Shift right; no change

---

### CURRENT ELECTRICITY: LEVEL 1

**1.** The current in a conductor varies with time t as I = 2t + 3t², where I is in ampere and t in seconds. Electric charge flowing through a section of the conductor during t = 2 sec to t = 3 sec is (in Coulomb):

(A) 10 (B) 24 (C) 33 (D) 44

**2.** In a gas discharge tube, if 3 × 10¹⁸ electrons are flowing per sec from left to right and 2 × 10¹⁸ protons are flowing per second from right to left of a given cross-section, the magnitude and direction of current through the cross-section is:

(A) 0.48 A, left to right (B) 0.48 A, right to left (C) 0.80 A, left to right (D) 0.80 A, right to left

**3.** A conductor wire having 10²⁸ free electrons per m³ carries a current of 20A. If the cross-section of the wire is 1mm², then the drift velocity of electrons will be:

(A) 6.25 × 10⁻⁵ ms⁻¹ (B) 1.25 × 10⁻⁵ ms⁻¹ (C) 1.25 × 10⁻³ ms⁻¹ (D) 1.25 × 10⁻⁴ ms⁻¹

**4.** The length of a current-carrying cylindrical conductor is L, its area of cross-section is A. The number density of free electrons in it is n, and the drift velocity of electrons in it is vd. The number of electrons passing through a particular cross-section of the conductor per unit time is given by:

(A) nA (B) nAvd (C) nvd (D) Avd

**5.** If ρ is the resistivity of a material, and n is the number density of free electrons in it, the mean time between collisions between electrons in the material is given by: (m denotes the mass of an electron, and e denotes the charge on an electron)

(A) ne²ρ/m (B) me²/nρ (C) mρ/ne² (D) m/ne²ρ

**6.** A conductor with rectangular cross-section has dimensions (a: 2a: 4a) as shown in figure. Resistance across AB is x, across CD is y and across EF is z. Then:

(A) x = y = z (B) x > y > z (C) y > z > x (D) x > z > y

**7.** The masses of the three wires of copper are in the ratio 5 : 3 : 1 and their lengths are in the ratio 1 : 3 : 5. The ratio of their electrical resistance is:

(A) 5 : 3 : 1 (B) √125 : 15 : 1 (C) 1 : 15 : 125 (D) 1 : 3 : 5

**8.** A rod of a certain metal is 1.0 m long and 0.6 cm in diameter. Its resistance is 3.0 × 10⁻³ Ω. Another disc made of the same metal is 2.0 cm in diameter and 1.0 mm thick. What is the resistance between the round faces of the disc?

(A) 1.35 × 10⁻⁶ Ω (B) 2.70 × 10⁻⁷ Ω (C) 4.05 × 10⁻⁶ Ω (D) 8.10 × 10⁻⁵ Ω

**9.** The resistance of a wire is 10Ω. Its length is increased by 10% by stretching uniformly. The new resistance will now be nearly:

(A) 12Ω (B) 1.2Ω (C) 13Ω (D) 11Ω

**10.** An electric current passes through a circuit containing two wires of the same material connected in parallel. If the lengths of the wires are in the ratio of 4:3 and radius of the wires are in the ratio of 2:3, then the ratio of the currents passing through the wires will be:

(A) 3:1 (B) 1:3 (C) 8:9 (D) 9:8

**11.** Consider the following quantities: number density of free electrons, n; mean free time of electrons between collisions, τ; drift velocity of electrons, vd; resistivity, ρ.

A constant potential difference is applied across a conductor. Assuming that the temperature of the conductor remains constant, which of these quantities is/are independent of the magnitude of the potential difference applied?

(A) n and ρ (B) n, vd and ρ (C) n, τ and ρ (D) Only ρ

**12.** The current in a metallic conductor is plotted against voltage at two different temperatures T₁ and T₂. Which is correct?

(A) T₁ > T₂ (B) T₁ < T₂ (C) T₁ = T₂ (D) Cannot be said

**13.** Which of the following quantities do not change when a metallic conductor connected to a battery of constant EMF is heated due to the current?

(A) Drift speed (B) Resistivity (C) Resistance (D) Number of free electrons

**14.** A carbon and an aluminium wire are connected in series. If the combination has resistance of 30Ω at 0°C, what is the resistance of the combination at 0°C so that resistance of the combination does not change with temperature? (αC = 0.5 × 10⁻³/°C, αA = 4 × 10⁻³/°C)

(A) 10Ω, 80Ω (B) 80/3 Ω, 10/3 Ω (C) 40/3 Ω, 80/3 Ω (D) 40Ω, 80Ω

**15.** The drift velocity of the electrons in a copper wire of length 2 m under the application of a potential difference of 220 V is 0.5 ms⁻¹. Their mobility (μm²V⁻¹s⁻¹) is:

(A) 2.5 × 10⁻³ (B) 2.5 × 10⁻² (C) 5 × 10² (D) 4.5 × 10⁻³

**16.** There are n similar resistors each of resistance R. The equivalent resistance comes out to be x when connected in parallel. If they are connected in series, the resistance comes out to be:

(A) x/n² (B) n²x (C) x/n (D) nx

**17.** A wire of resistance 12Ω is bent in the form of a circle. The effective resistance between the two points on any diameter of the circle is:

(A) 12Ω (B) 24Ω (C) 6Ω (D) 3Ω

**18.** A conductor of resistance 3Ω is stretched uniformly till its length is doubled. The wire is now bent in the form of an equilateral triangle. The effective resistance between the ends of any side of the triangle in ohms is:

(A) 9/2 (B) 8/3 (C) 2 (D) 1

**19.** In the circuit shown the value of I in ampere is:

(A) 1 (B) 0.60 (C) 0.4 (D) 1.5

**20.** In the given circuit, E = 8 V, R₁ = 1Ω, R₂ = R₃ = 5Ω, R₄ = 5Ω. The current through the resistance R₄ is in A:

(A) 1/3 (B) 2/3 (C) 1 (D) 2

**21.** In circuit shown below, the resistances are given in ohm and the battery is assumed ideal with emf equal to 3V. The potential difference across the resistance R₁ is:

(A) 0.4 V (B) 0.6 V (C) 1.2 V (D) 1.5 V

**22.** In the figure shown, the resistance across AB is:

(A) 5/8 R (B) 7/8 R (C) 1 R (D) 2 R

**23.** Five equal resistors, each equal to R are connected as shown in the following figure. The equivalent resistance between points A and B is:

(A) R (B) 5R (C) R/5 (D) 2R/3

**24.** Six resistors, each of value 3Ω are connected as shown in the figure. A cell of emf 3V is connected across AB. The effective resistance across AB and the current through the arm AB will be:

(A) 0.6 Ω,1 A (B) 15 Ω,2 A (C) 0.6 Ω,2 A (D) 1.5 Ω,1 A

**25.** The same mass of copper is drawn into two wires of diameter 1 mm and 2 mm. Two wires are connected in series and current is passed through them. Heat produced in the wires is in the ratio:

(A) 2 : 1 (B) 8 : 1 (C) 4 : 1 (D) 16 : 1

**26.** Two heater wires of equal length are first connected in series and then in parallel. The combination is connected across the same battery in both cases. The ratio of heat produced in the two cases will be:

(A) 1 : 2 (B) 1 : 4 (C) 2 : 1 (D) 4 : 1

**27.** A heater coil is cut into two equal parts and only one part is now used in the heater. The heat generated will now be: (The heater is connected across the same source in both cases)

(A) one fourth (B) halved (C) doubled (D) four times

**28.** 160W - 60V lamp is connected at 60 V DC supply. The number of electrons passing through the lamp in 1 min is nearly: (The charge of electron e = 1.6 × 10⁻¹⁹C)

(A) 10¹⁵ (B) 10²¹ (C) 1.6 × 10¹⁹ (D) 1.4 × 10²⁰

**29.** If two bulbs, both of rated power 100 W at 220 V, are connected in series with a 220 V supply, the total power consumed by the bulbs will be:

(A) 200 W (B) 100 W (C) 50 W (D) 25/2 W

**30.** The effective wattage of 60 W and 40W lamps connected in series is equal to:

(A) 24 W (B) 20 W (C) 100 W (D) 80 W

**31.** In the circuit shown in figure the emf of the source is equal to ξ = 5.0V and the resistance are equal to R₁ = 4.0Ω and R₂ = 6.0Ω. The internal resistance of the source equals R = 0.10Ω. The currents flowing through the resistances R₁ and R₂ are:

(A) 1A, 1A (B) 1.2A, 0.8A (C) 1.8A, 1.3A (D) 1.3A, 1.9A

**32.** In the circuit shown, the currents i₁ and i₂ are:

(A) i₁ = 3A, i₂ = 1A (B) i₁ = 1A, i₂ = 3A (C) i₁ = 0.5A, i₂ = 1.5A (D) i₁ = 1.5A, i₂ = 0.5A

**33.** A cell of emf E is connected across a resistance R. The potential difference between the terminals of the cell is found to be V volt. Then the internal resistance of the cell must be:

(A) (E - V)R (B) [(E - V)/V]R (C) [2(E - V)V]/E (D) [2(E - V)V]/R

**34.** The emf of a cell is E and its internal resistance is r. Its terminals are connected to a resistance R. The potential difference between the terminals is 1.6V for R = 4Ω and 1.8V for R = 9Ω. Then:

(A) E = 1V, r = 1Ω (B) E = 2V, r = 1Ω (C) E = 2V, r = 2Ω (D) E = 2.5V, r = 0.5Ω

**35.** A cell of emf E and internal resistance r supplies currents for the same time t through external resistance R₁ and R₂ respectively. If the heat produced in both cases is the same, then the internal resistance is given by:

(A) 1/r = 1/R₁ + 1/R₂ (B) r = (R₁ + R₂)/2 (C) r = √(R₁R₂) (D) r = R₁ + R₂

**36.** Two similar cells, whether joined in series or in parallel, have the same current through an external resistance of 2Ω. The internal resistance of each cell is:

(A) 1Ω (B) 2Ω (C) 0.5Ω (D) 1.5Ω

**37.** Two cells with the same emf E and different internal resistances r₁ and r₂ are connected in series (with similar polarity) to an external resistance R. The value of R so that the potential difference across the first cell will be zero is:

(A) √(r₁r₂) (B) r₁ + r₂ (C) r₁ - r₂ (D) (r₁ + r₂)/2

**38.** n identical cells, each of emf ε and internal resistance r, are joined in series to form a closed circuit. The potential difference across any one cell is:

(A) zero (B) ε (C) ε/n (D) (n - 1)ε/n

**39.** Five cells, each of emf E and internal resistance r are connected in series. If due to over sight, one cell is connected wrongly, then the equivalent emf and internal resistance of the combination is:

(A) 5E and 5r (B) 3E and 3r (C) 3E and 5r (D) 5E and 3r

**40.** Calculate the value E: for given circuit, when value of 2A current is either flowing in clockwise or anticlockwise direction.

(A) 22 V, -2V (B) 38 V, 2V (C) 32 V, -2V (D) 32 V, 8V

**41.** In section PQ of a circuit, P is at higher potential than Q by 40 V. The potential difference in volt across the battery A is:

(A) 6 V (B) 4 V (C) 2 V (D) 8 V

**42.** In the network shown in the figure, the potential difference between A and B is:

(A) 6V (B) zero (C) 2V (D) 4V

**43.** The current in branch CD of given circuit is:

(A) zero (B) 1 A (C) 2 A (D) 3 A

**44.** Current I₃ in the given circuit shown in the figure is:

(A) 5/11 A (B) 7/11 A (C) 2/11 A (D) None of these

**45.** In the given circuit the current i₁ is:

(A) 0.4 A (B) -0.4 A (C) 0.8 A (D) -0.8 A

**46.** An ideal ammeter and an ideal voltmeter are connected as shown. The ammeter and voltmeter reading for R₁ = 5Ω, R₂ = 15Ω, R₃ = 1.25Ω and E = 20V are given as:

(A) 6.25 A, 3.75 V (B) 3.00 A, 5 V (C) 3.75 A, 3.75 V (D) 3.75 A, 6.25 V

**47.** In the given circuit resistance of voltmeter is 400Ω and its reading is 20V. Find the value of emf of battery.

(A) 130/3 volt (B) 65volt (C) 40 volt (D) 33.6 volt

**48.** Voltmeters V₁ and V₂ are placed in series and then connected to an ideal battery. V₁ reads 80 V and has resistance 20kΩ and V₂ has resistance 10 kΩ. The EMF of the battery is:

(A) 240 V (B) 220 V (C) 160 V (D) 120 V

**49.** Three voltmeters A, B and C having resistances R, 1.5 R and 3 R respectively, are used in a circuit as shown. When a potential difference is applied between X and Y, the readings of the voltmeters are V₁, V₂ and V₃ respectively. Then:

(A) V₁ = V₂ = V₃ (B) V₁ < V₂ = V₃ (C) V₁ > V₂ > V₃ (D) V₁ < V₂ < V₃

**50.** A galvanometer has a resistance of 20Ω and reads full - scale when 0.2 V is applied across it. To convert it into a 10 A ammeter, the resistance connected across it should have a:

(A) 0.01Ω resistor connected across it (B) 0.02 Ω resistor connected across it (C) 200 Ω resistor connected in series with it (D) 2000 Ω resistor connected in series with it

**51.** The deflection in a moving coil galvanometer is reduced to half when it is shunted with a 40Ω coil. The resistance of the galvanometer is:

(A) 15Ω (B) 20Ω (C) 40Ω (D) 80Ω

**52.** A galvanometer of resistance 10Ω shows full scale deflection for current 100 mA. The resistance that needs to be connected in series with the galvanometer so that it can be used to measure potential difference in the range 0 - 100 V is (in Ohm):

(A) 90 (B) 990 (C) 9990 (D) 99990

**53.** A milliammeter of range 10mA and resistance 9Ω is joined in a circuit as shown. The meter gives full scale deflection for current I when A and B are used as its terminals, i.e. current enters at A and leaves at B (C is left isolated). The value of I is:

(A) 100 mA (B) 900 mA (C) 1 A (D) 1.1 A

**54.** The resistance of a galvanometer is 50Ω and it shows full scale deflection for a current of 1 mA. To convert it into a voltmeter to measure 1 V and as well as 10 V (refer circuit diagram) the resistance R₁ and R₂ respectively are:

(A) 950 Ω and 9150 Ω (B) 900 Ω and 9950 Ω (C) 900 Ω and 9900 Ω (D) 950 Ω and 9000 Ω

**55.** A 2V battery, a 990 Ω resistor and a potentiometer of 2m length, all are connected in series. If the resistance of the potentiometer wire is 10Ω, the potential gradient in it is:

(A) 0.05Vm⁻¹ (B) 0.5Vm⁻¹ (C) 0.01Vm⁻¹ (D) 0.1Vm⁻¹

**56.** A potentiometer wire of length 1m and resistance 20Ω is connected in series with a 15V battery and an external resistance 40Ω. A secondary cell of emf E in the secondary circuit is balanced by 24 cm long potentiometer wire. The emf E of the cell is:

(A) 2.4 V (B) 1.2 V (C) 2.0 V (D) 3V

**57.** In a potentiometer arrangement, a cell of emf 1.5 V gives a balance point at 27 cm length of wire. If the cell is replaced by another cell and balance point shifts to 54 cm, the emf of the second cell is:

(A) 3 V (B) 1.5 V (C) 0.75 V (D) 2.25 V

**58.** In the circuit shown, a meter bridge is in its balanced state. The meter bridge wire has a resistance of 0.1 ohm/cm. The value of unknown resistance X and the current drawn from the battery of negligible resistance is:

(A) 6Ω, 5 amp (B) 4Ω, 0.1 amp (C) 4Ω, 1.0 amp (D) 12Ω, 0.5 amp

**59.** The figure shows a meter-bridge circuit, with AB = 100 cm, X = 12Ω and R = 18Ω, and the jockey J is in the position of balance.

If R is now made 8Ω, through what distance will J have to be moved to obtain balance?

(A) 10 cm (B) 20 cm (C) 30 cm (D) 40 cm

**60.** In the circuit shown, initially the balance point for jockey is found to be at 40 cm from A. When R₂ is shunted by a resistance of 10Ω, balance shifts to 50 cm. R₁ and R₂ are (AB = 1 m):

(A) 10/3 Ω,1.5Ω (B) 20Ω,30Ω (C) 10Ω, 15Ω (D) 5Ω, 15/2 Ω

---

### CURRENT ELECTRICITY: LEVEL 2

**91.** A constant potential difference is applied across a metal wire. Let the average thermal velocity of electrons be vt and the drift velocity be vd. As the temperature of the wire rises:

(A) Both vt and vd increase (B) Both vt and vd decrease (C) vt decrease and vd increases (D) vt increases and vd decreases

**92.** The temperature coefficient of resistivity is 6 × 10⁻³ °C⁻¹ and coefficient of linear expansion is 10 × 10⁻³ °C⁻¹. Its temperature coefficient of resistance is N × 10⁻³ °C⁻¹. Then, the value of N is:

(A) 4 (B) 5 (C) 7 (D) 8

**93.** Two wires of different materials of resistivity ρ₁ and ρ₂, length l₁ and l₂, and area of cross-section A₁ and A₂ respectively, are connected in parallel. The ratio of current density in the two wires, j₁/j₂, is given by:

(A) [A₁/A₂][ρ₂/ρ₁][l₁/l₂] (B) [ρ₂/A₁][ρ₁/l₁] (C) [A₂/A₁][ρ₂/ρ₁][l₂/l₁] (D) [ρ₂/ρ₁][l₁/l₂]

**94.** How much time would the insect travelling in the direction of electron drift along a bare copper wire that carries a current of 2.56A. It travels with the drift speed of the electron in the wire of uniform cross-section area 1mm². Number of free electrons for copper = 8 × 10²² /cc and resistivity of copper = 1.6 × 10⁻⁸Ωm.

(A) 50 sec (B) 5 sec (C) 5000 sec (D) None of these

**95.** What is order of average time of collision for free electrons of copper?

(A) 10⁻¹³ sec (B) 10⁻¹⁵ sec (C) 10⁻¹¹ sec (D) 10⁻⁸ sec

**96.** If the insect starts from the point of zero potential at t = 0, it reaches a point of ___potential after 10 sec.

(A) 80μV (B) -80μV (C) 160μV (D) -160μV

**97.** A non-conducting ring of radius R has charge Q distributed unevenly over it. If it rotates with an angular velocity ω, the equivalent current will be:

(A) zero (B) Qω (C) Qω/2π (D) Qω/2πR

**98.** Two wires each of radius of cross-section r, but of different materials are connected together end to end (in series). If the densities of charge carriers in the two wires are in the ratio 1 : 4, the drift velocity of electrons in the two wires will be in the ratio:

(A) 1 : 2 (B) 2 : 1 (C) 4 : 1 (D) 1 : 4

**99.** A current passes through a wire of non uniform cross section. Which of the following quantities vary with the change in cross-section?

(A) Current (B) Drift speed (C) Electric field (D) Current density

**100.** Column-I gives physical quantities based on a situation in which an ideal cell of e.m.f. V is connected across a cylindrical rod of uniform cross-section area and conductivity (σ) as shown in figure. E, j, φ and i are electric field, current density, electric flux and current through shaded cross-section respectively, as shown in figure. Physical quantities in Column-II are equal to those in column I. Match the expression in Column-I with the statements in Column-II.

(A) A-P, B-Q, C-R, D-S (B) A-P, B-R, C-S, D-Q (C) A-R, B-S, C-P, D-Q (D) A-S, B-P, C-Q, D-R

**101.** The potential difference across 8Ω resistance is 48V, as shown in the figure. The value of potential difference across X and Y will be:

(A) 168 V (B) 100 V (C) 152 V (D) 48 V

**102.** Equivalent resistance between points A and B is:

(A) 3Ω (B) 4Ω (C) 4.5Ω (D) 5Ω

**103.** Two circuits as shown in the figure are called Circuit A and Circuit B. The equivalent resistance of Circuit A is x and that of Circuit B is y between 1 and 2 for both the circuits, then:

(A) y > x (B) y = (√3 + 1)R (C) xy = 2R² (D) y - x = 2R

**104.** In a given network, each resistance has value of 6Ω. The point X is connected to point A by a copper wire of negligible resistance and point Y is connected to point B by the same wire. The effective resistance between X and Y will be:

(A) 18 Ω (B) 6Ω (C) 3 Ω (D) 2Ω

**105.** A conductor is made of an isotropic material and has shape of a truncated cone. A battery of constant emf is connected across it and its left end is earthed, as shown. If at a certain section at a distance x from left end, electric field intensity and the rate of generation of heat per unit length are E and H respectively, which of the following graphs is (are) correct?

(A) E decreasing with x (B) E peak then decreasing (C) H decreasing with x (D) H peak then decreasing

**106.** A cylindrical conductor AB of length l and area of cross-section a is connected to a battery having emf E. The specific conductivity of cylindrical conductor varies as σ = σ₀/√x, where σ₀ is constant and x is distance from end A. What is the electric field just near the end B of cylinder?

(A) E/l (B) 3E/2l (C) 2E/3l (D) E/2l

**107.** The charge flowing through a resistance R varies with time t as Q = at - bt². The total heat produced in R from t = 0 to the time when value of Q becomes again zero is:

(A) a³R/6b (B) a³R/3b (C) a³R/2b (D) a³R/b

**108.** For ensuring dissipation of same energy in all three resistors (R₁, R₂, R₃) connected as shown in figure, their values must be related as:

(A) R₁ = R₂ (B) R₁ = 4R₂ (C) R₂ = 1/4 R₃ (D) R₂ = R₃ + R₄

**109.** Four bulbs are connected as shown to a battery of EMF 220 V. The voltage and power rating of the bulbs are:
Bulb 1 : 220 V, 100 W — Bulb 2 : 220 V, 50 W
Bulb 3 : 440 V, 400 W — Bulb 4 : 440 V, 200 W
Choose the correct choice(s):

(A) The current i₁ is 0.91 A (B) The current i₂ is 0.46 A (C) Bulb 1 consumes power 100 W (D) Bulb 4 consumes power 50 W

**110.** If X, Y and Z in the given circuit are identical lamps, which of the following changes occur to the brightness of the lamps, when switch S is closed?

(A) X stays the same, Y decreases (B) X increases, Y decreases (C) X increases, Y stays the same (D) X decreases, Y increases

**111.** The potential difference V across the terminals of the battery are:

(A) 10V (B) 12V (C) 14V (D) 16V

**112.** The rate at which energy is being dissipated as heat inside the battery is:

(A) 100W (B) 500W (C) 600W (D) 700W

**113.** A battery supplies 150 W and 196 W power to two resistors of 60Ω and 4Ω respectively, when they are connected separately to it. The internal resistance of battery is ______(in Ω).

(A) 1 (B) 2 (C) 4 (D) 5

**114.** In the circuit shown, the internal resistances of the batteries are indicated next to them. Choose the correct option(s):

(A) The potential at P is -7.5 V (B) The potential at Q is -1V (C) The potential at R is zero (D) No current will flow to earth

**115.** n identical cells, each of emf E and internal resistance r, are joined in series to form a closed circuit. One cell (A) is joined with reversed polarity. The potential difference across each cell, except A, is:

(A) 2E/n (B) (n - 1)E/n (C) (n - 2)E/n (D) 2nE/(n - 2)

**116.** Each cell has emf ε and internal resistance r in the figure. Find the current through resistance R.

(A) 4ε/r (B) 3ε/r (C) ε/r (D) zero

**117.** In the network shown, points A, B and C are at potentials of 70 V, zero and 10 V respectively. Choose the correct statements.

(A) Point D is at a potential of 40 V. (B) The currents in the sections AD, DB, DC are in the ratio 3 : 2 : 1 (C) The currents in the sections AD, DB, DC are in the ratio 1 : 2 : 3 (D) The network draws a total power of 200 W

**118.** Figure shows a part of the circuit. Which points have the same potential as that of point A:

(A) D (B) F (C) H (D) I

**119.** In the figure shown: (All batteries are ideal)

(A) current through 25V cell is 20 A (B) current through 25V cell is 12.5 A (C) power supplied by 20V cell is 20 W (D) power supplied by 20V cell is -20 W

**120.** In the given circuit, currents through 4Ω and 10Ω resistances are as shown. The current through the 5Ω resistance is ______ (in A).

(A) 5 A (B) 4 A (C) 1 A (D) 2 A

---

### MISCELLANEOUS

**1.** A square aluminium rod is 1m long and 5mm on edge. What must be the radius of another circular aluminium rod whose length is 1m and which has the same resistance as the previous rod?

(A) 5.0 mm (B) 4.2 mm (C) 2.8 mm (D) 1.4 mm

**2.** Two electric bulbs, first of 220 volt, 100 watt and the other of 220 volt, 25 watt are connected in series across a 220 volt line, then the electric currents in the first and the second bulbs are respectively:

(A) (1/11) amp and (1/11) amp (B) (20/44) amp and (5/44) amp (C) (25/88) amp and (25/88)amp (D) (1/22) amp and (1/22) amp

**3.** A wire is cut into 4 pieces, which are arranged in parallel to obtain one conductor. If the original resistance of the wire was R, the resistance of the bundle will be:

(A) R/4 (B) R/8 (C) R/16 (D) R/32

**4.** The equivalent resistance between A and B are:

(A) R₁ (B) R₂ (C) R₁R₄/(R₂ + R₃) + R₁ (D) R₁R₄/(R₁ + R₄)

**5.** Two bulbs consume same power when operated at 200 V and 300 V respectively. When these bulbs are connected in series across a D.C source of 500 V, then:

(A) Ratio of potential difference across them is 3/2 (B) Ratio of potential difference across them is 4/9 (C) Ratio of power consumed by them is 4/9 (D) Ratio of power consumed by them is 2/3

**6.** In the given circuit, R₁ = 10Ω, R₂ = 6Ω, and E = 10V given. Correct statements are:

(A) Effective resistance of the circuit is 20Ω (B) Reading of A₁ is 1/2 A (C) Reading of A₂ is 1/8 A (D) Reading of A₃ is 1/8 A

**7.** Match the column I with column II:

(P) Resistivity of a metal with temperature → 1. (graph showing decrease with temperature)
(Q) Resistivity of a semiconductor with temperature → 2. (graph showing increase with temperature)
(R) Resistivity of a metal alloy with temperature → 3. (graph showing constant with temperature)
(S) Resistivity of a diamagnetic substance → 4. (graph showing increase then decrease with temperature)

(A) P-2, Q-1, R-3, S-4 (B) P-1, Q-2, R-3, S-4 (C) P-2, Q-3, R-4, S-1 (D) P-2, Q-3, R-4, S-3

**8.** Match the circuits given in column II with the respective column I. select the correct code. More than one match is possible.

(P) Wheatstone bridge → (circuits shown)
(Q) Balanced Wheatstone bridge → (circuits shown)
(R) Direction of current from B to D → (circuits shown)
(S) Direction of current form D to B → (circuits shown)

(A) P-1,2, Q-1,2,3,4 (B) P-1,2,3,4, Q-1,2,3 (C) P-2,3, Q-1,3,4 (D) P-1,3, Q-2,4,1,2

**9.** In an experiment to measure the internal resistance of a cell, it is found that no current passes through the galvanometer when the terminals of a cell are connected across 52 cm of the potentiometer wire. If the cell is shunted by a resistance of 5Ω, a balance is found when the cell is connected across 40 cm of the wire. The internal resistance of the cell is 15 × 10⁻ˣ. Then value of x is [blank].

**10.** Which are true for an ammeter and a voltmeter respectively?

(A) Vr > VR, Vr < VR (B) Vr > VR, Vr > VR (C) Vr < VR, Vr > VR (D) Vr = VR, Vr < VR

**11.** To convert galvanometer into an ammeter capable of reading current up to 10.01 A, resistance required is:

(A) 0.1Ω (B) 1 Ω (C) 10 Ω (D) 100 Ω

**12.** To make a voltmeter which can read up to 100 V, resistance required for galvanometer is:

(A) 900 Ω (B) 1000 Ω (C) 9900 Ω (D) 10000 Ω

**13.** The equivalent resistance between A and B is:

(A) 10 Ω (B) 20 Ω (C) 15 Ω (D) None of these

**14.** V - I graph for a conductor at temperature T₁ and T₂ is shown. (T₂ - T₁) is proportional to:

(A) cos 2θ (B) sin 2θ (C) cot 2θ (D) tan 2θ

**15.** In the circuit shown, current delivered by battery is:

(A) 1/3 A when S₁ is closed and S₂ is opened. (B) 4/3 A when S₁ is opened and S₂ is closed. (C) 2A when S₁ and S₂ are closed. (D) 4/3 A when both S₁ and S₂ are opened.

**16.** In the given circuit Vₚ - VQ equals:

(A) 3V (B) 11/3 V (C) -11/3 V (D) -3V

**17.** In the circuit shown below, the voltmeter is of large resistance. The emf of the cell is E. The reading of the voltmeter is:

(A) Zero (B) E/10 (C) E/5 (D) E/2

**18.** Find the value of R for which no current will flow through 5V battery.

(A) 4Ω (B) 1 Ω (C) 3 Ω (D) 5 Ω

**19.** Which resistor consumes maximum power?

(A) 1Ω resistor (B) 2Ω resistor (C) 3Ω resistor (D) None of the above

**20.** Which battery consumes or gives maximum power?

(A) 10 V battery (B) 15 V battery (C) 5 V battery between points F and B (D) 5 V battery between points H and D

**21.** A voltmeter has a resistance G ohm and range V volt. The value of resistance used in series to convert it into voltmeter range nV volt is:

(A) nG (B) (n - 1)G (C) G/n (D) G/(n - 1)

**22.** Two batteries each of emf E and internal resistance r are connected turn by turn in series and in parallel, and are used to find current in an external resistance R. If the current in series is equal to that in parallel, the internal resistance of each battery is:

(A) R (B) R/2 (C) R/3 (D) R/4

**23.** The current at C of circuit equals 2A. The rate of heat loss in A, B and C are 1.20, 0.60 and 1.20 J/s respectively. Assuming internal resistance of cell to zero, the emf of cell is:

(A) 3 V (B) 1.5 V (C) 3.6 V (D) 1.2 V

**24.** Two resistors R and 2R are connected in series in an electric circuit. The thermal energy developed in R and 2R in the ratio.

(A) 1 : 2 (B) 2 : 1 (C) 1 : 4 (D) 4 : 1

**25.** If twelve resistors each of 5Ω are connected between points A and B, then:

(A) RAB = R (B) RAB = R/2 (C) RAB = 3R/2 (D) RAB = 5R/2

**26.** What is the effective resistance between the terminals A and B of the mesh shown in figure?

(A) 2R (B) R (C) R/2 (D) R/3

**27.** The maximum power dissipated in an external resistance R. When connected to a cell of emf E and internal resistance r will be:

(A) E²/r (B) E²/2r (C) E²/3r (D) E²/4r

**28.** Three resistances A, B and C have values 3R, 6R and R respectively. When some potential difference is applied across the network, the thermal powers dissipated by A, B and C are in the ratio:

(A) 2 : 3 : 4 (B) 2 : 4 : 3 (C) 4 : 2 : 3 (D) 3 : 2 : 4

**29.** The charge flowing in a conductor varies with time as Q = at - ½bt² - 1/6 ct³, where a, b, c are positive constants, Then, the current:

(A) has an initial value a (B) reaches a minimum value after time b/c (C) reaches a maximum value after time b/c (D) has either a maximum or a minimum value (a - b²/2c)

**30.** A and B are two points on a uniform ring of resistance R. The ∠ACB = 0, where C is the centre of the ring. The equivalent resistance between A and B is:

(A) R/(4π²(2π - θ)0) (B) R(1 - θ/2π) (C) R θ/2π (D) R(2π - θ)/4π

**31.** When some potential difference is maintained between A and B, current I enters the network at A and leaves at B.

(A) The equivalent resistance between A and B is 8Ω (B) C and D are at the same potential (C) No current flows between C and D (D) Current 3I/5 flows from D to C

**32.** Three unequal resistances connected in parallel are equivalent to a single resistor of 1Ω. If two resistances are in ratio of 1 : 2 and if no resistance is fractional, the largest of three resistors is [blank].

**33.** In the part of circuit shown in the figure, the potential difference between G and H (VG - VH) will be [blank].

**34.** In the network, each resistor has resistance R. Effective resistance between A and B is aR/3. Value of a is [blank].

**35.** Four bulbs of power 25W, 40W, 60W and 100W are connected in series. Match Column I of watts of bulbs with Column II of their potential difference in Column II.

(P) 25 W → 1. Highest potential difference
(Q) 40 W → 2. Lowest potential difference
(R) 60 W → 3. Third highest potential difference
(S) 100 W → 4. Second highest potential difference

(A) P-1, Q-2, R-3, S-4 (B) P-1, Q-4, R-3, S-2 (C) P-2, Q-3, R-4, S-1 (D) P-2, Q-4, R-1, S-3

**36.** A set of n identical resistors, each of resistance R when connected in series has an effective resistance of x. When the resistors are connected in parallel, the effective resistance is y. How is R, x and y are related.

(A) R = xy/(x + y) (B) R = y - x (C) R = x + y (D) R = √xy

**37.** n identical light bulbs, each designed to draw P power from a certain voltage supply, are joined in series across that supply. The total power which they will draw is:

(A) nP (B) P (C) P/n (D) P/n²

**38.** Two non ideal batteries are connected in parallel. Consider has following statements:
A. The equivalent emf is smaller than either of the two emf.
B. The equivalent internal resistance is smaller than either of the two internal resistances.

(A) Both A and B are correct (B) A is correct but B is wrong (C) B is correct but A is wrong (D) Both A and B are wrong

**39.** In the adjoining circuit, the battery ξ₁ has an e.m.f. of 12 volt and zero internal resistance while the battery ξ₂ has an e.m.f. of 2 volt. If the galvanometer G reads zero, then the value of the resistance X in ohm is:

(A) 10 (B) 100 (C) 500 (D) 200

**40.** A network of nine resistors (resistance mentioned in ohms) has been shown. The equivalent resistance between A and D is:

(A) 5Ω (B) 3/2Ω (C) 2/3 Ω (D) 2Ω

**41.** In the circuit shown, A₁ and A₂ are ammeters of resistance 5Ω each. When an ideal cell of emf 10 V is applied between A and B:

(A) The current drawn from the cell is 1A (B) The reading of A₁ is 1A (C) The reading of A₂ is 1A (D) If C₁ is joined to C₂ and D₁ is joined to D₂, the ammeter readings will remain equal

**42.** A current passes through a wire of non-uniform cross-section. Which of the following quantities are independent of the cross-section?

(A) The charge crossing in a given time interval (B) Drift speed (C) Current density (D) Free-electron density

**43.** An accumulator battery (storage cell) B of emf E and internal resistance r is being charged from DC supply whose terminals are T₁ and T₂:

(A) Potential difference between T₁ and T₂ must be > E (B) T₁ must be positive with respect to T₂ (C) In the battery, current flows from the positive to the negative terminal (D) All the above options are incorrect

**44.** When jockey is touched with wire AB at point C such that AC = 40cm, there is no deflection in galvanometer. The emf of cell is:

(A) 4V (B) 5V (C) 5/4 V (D) 6V

**45.** If jockey is touched at point B, then potential difference across wire AB is:

(A) 6.93 V (B) 8.93 V (C) 9.93 V (D) 0V

**46.** If jockey is touched at point A, then potential difference across the cell is:

(A) 3V (B) 2.5 V (C) 2 V (D) None of these

**47.** A voltmeter and an ammeter are connected in series to an ideal cell of emf E. The voltmeter reading is V and the ammeter reading is I:

(A) V < E (B) The voltmeter resistance is V/I (C) The potential difference across the ammeter is (E - V) (D) Voltmeter resistance plus ammeter resistance = E/I

**48.** In the circuit, the battery is ideal. A voltmeter of resistance 600Ω is connected in turn across R₁ and R₂, giving readings of V₁ and V₂ respectively.

(A) V₁ = 80 V (B) V₁ = 60 V (C) V₂ = 30 V (D) V₂ = 40 V

**49.** In the circuit shown above, each of the four conductors is of resistance R. The potential difference between A and B is V by an ideal cell of emf V. The current draw from the cell is:

(A) V/R (B) 2V/R (C) 3V/R (D) 4V/R

**50.** In the given circuit, the resistance between points P and Q is:

(A) 25Ω (B) 10Ω (C) 30Ω (D) 5Ω

---

### JEE MAIN ARCHIVE

Questions 1-90 with corresponding answers as listed in the answer key table above.

---

### JEE ADVANCED ARCHIVE

Questions 1-69 with corresponding answers as listed in the answer key table above.
