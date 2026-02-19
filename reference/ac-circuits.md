# AC Circuits

## Overview
This chapter covers alternating current (AC) circuits and their behavior with different circuit elements. It explains how AC current and voltage vary sinusoidally with time, introduces key concepts like RMS values and impedance, and analyzes various circuit configurations including RC, RL, LCR circuits in both series and parallel arrangements. Understanding resonance, power dissipation, and phase relationships between current and voltage forms the core of AC circuit analysis.

---

## 1. Alternating Current Representation

### Concepts
- Alternating current is periodic and changes direction periodically
- AC magnitude and direction change continuously with time
- Represented as sinusoidal functions of time
- Angular frequency relates the period to the oscillation rate

### Formulas
- `I = I_0 sin ωt` - instantaneous current (sinusoidal representation)
- `I = I_0 cos ωt` - alternative sinusoidal representation
- `ω = 2π/T = 2πν` - angular frequency
- `I = I_0 sin(ωt + φ)` - general AC current with phase angle
- `V = V_0 sin(ωt + φ)` - alternating voltage

### Important Notes
- I is the instantaneous value of current at time t
- I_0 is the peak value (amplitude) or maximum value of AC
- ω is the angular frequency in rad/s
- T is the time period (time for one complete cycle)
- ν is the frequency in Hz
- Phase angle φ represents phase difference between current and voltage

### Worked Example
**Q:** The voltage in an ac circuit is represented by V = 220√2 sin(314t - φ). Calculate the peak and rms values of the voltage and the frequency of ac.

**A:**
- Peak value V_0 = 220√2 = 311V
- RMS value V_rms = V_0/√2 = 220V
- Angular frequency ω = 314 rad/s
- Since ω = 2πf, frequency f = 314/(2π) = 50 Hz

---

## 2. Average (Mean) Current

### Concepts
- Mean current is the average value over one complete cycle
- For a pure sinusoidal AC, the average over a full cycle is zero
- Mean value is calculated for half-cycle in practical applications
- DC instruments show zero deflection when connected to pure AC

### Formulas
- `I_avg = ∫I dt / ∫dt` - general formula for average current
- `I_avg = 2I_0/π = 0.637 I_0` - average current for half-cycle
- `V_avg = 2V_0/π = 0.637 V_0` - average voltage for half-cycle

### Important Notes
- Over a complete cycle, AC average value is zero due to symmetry
- Half-cycle average is calculated from t = 0 to t = T/2
- DC instruments indicate zero for pure AC because positive and negative areas cancel
- Half-cycle average is useful in rectifier applications

### Worked Example
**Q:** The electric current in a circuit is given by i = i_0(t/T) for some time. Calculate the rms current for the period t = 0 to t = T for i_0 = 20√3 A.

**A:**
- Mean square current: ⟨i²⟩_avg = (1/T)∫₀ᵀ i_0²(t/T)² dt = i_0²/3
- RMS current: i_rms = √(i_0²/3) = i_0/√3 = 20 A

---

## 3. RMS Value of Alternating Current

### Concepts
- RMS (root mean square) is the effective value of AC
- RMS value represents equivalent heating effect as DC current
- More practically useful than peak or average values
- Calculated as square root of mean of squared values

### Formulas
- `i_rms = √(i²_avg)` - definition of RMS current
- `i_rms = I_0/√2 = 0.707 I_0` - RMS current value
- `V_rms = V_0/√2 = 0.707 V_0` - RMS voltage value
- `U = i²_rms RT` - thermal energy in resistor for one period

### Important Notes
- RMS value is the DC equivalent that produces the same heating effect
- AC power supplies are specified in RMS values (220V AC means 220V rms)
- Peak value is √2 times the RMS value
- RMS current and voltage are always positive quantities
- The factor 0.707 comes from 1/√2

### Worked Example
**Q:** Calculate the rms current when voltage V = 200 sin(2πt) volts is applied across an 8Ω resistor.

**A:**
- Peak voltage V_0 = 200V
- RMS voltage V_rms = 200/√2 = 141.4V
- RMS current I_rms = V_rms/R = 141.4/8 = 17.68A

---

## 4. RC Circuit (Resistor-Capacitor)

### Concepts
- When AC voltage is applied to RC combination, current is also AC
- Current through resistor is in phase with voltage
- Current through capacitor leads voltage by 90°
- Total voltage across RC lags behind current by a phase angle
- Capacitive reactance is frequency-dependent

### Formulas
- `I(t) = I_m cos ωt` - current through RC circuit
- `V_R = I_m R cos ωt` - voltage across resistor
- `X_C = 1/(ωC)` - capacitive reactance
- `V_C = I_m/(ωC) cos(ωt - π/2)` - voltage across capacitor
- `Z = √(R² + 1/(ω²C²))` - impedance of RC combination
- `θ = tan⁻¹(1/(ωRC))` - phase angle (voltage lags current)

### Important Notes
- X_C is called reactance of capacitor, measured in ohms
- All values in phasor diagrams are rms values
- Voltage across RC combination lags behind I by angle tan⁻¹(1/(ωRC))
- Current leads voltage across capacitor by π/2
- Voltage leads current in pure resistor

### Worked Example
**Q:** In the RC circuit shown, R = 7Ω, C = 318.2 μF, and V(t) = 200 sin 2πt volts with f = 50Hz. Calculate capacitive reactance and impedance.

**A:**
- X_C = 1/(2πνC) = 1/(2π × 50 × 318.2 × 10⁻⁶) = 10Ω
- Z = √(R² + X_C²) = √(49 + 100) = √149 = 12.2Ω

---

## 5. RL Circuit (Resistor-Inductor)

### Concepts
- When AC voltage is applied to RL combination, current is AC
- Voltage across inductor leads current by 90°
- Total voltage across RL leads current by a phase angle
- Inductive reactance increases with frequency
- RL circuits cause voltage to lead current

### Formulas
- `I(t) = I_m cos ωt` - current through RL circuit
- `V_R = I_m R cos ωt` - voltage across resistor
- `V_L = L(dI/dt) = ωLI_m cos(ωt + π/2)` - voltage across inductor
- `X_L = ωL` - inductive reactance
- `Z = √(R² + ω²L²)` - impedance of RL combination
- `θ = tan⁻¹(ωL/R)` - phase angle (voltage leads current)

### Important Notes
- X_L is called reactance of inductor, measured in ohms
- Voltage across RL combination leads current by angle tan⁻¹(ωL/R)
- Current lags voltage in RL circuit
- Inductive reactance increases linearly with frequency
- At higher frequencies, inductors have more opposition to AC

### Worked Example
**Q:** Find the rms and instantaneous current and voltage across R and L for: R = 9Ω, L = 20 mH, V = 200 sin(100πt) volts.

**A:**
- X_L = ωL = 100π × 0.02 = 2π = 6.28Ω
- Z = √(9² + 6.28²) = 10.97Ω
- I_rms = 200/(√2 × 10.97) = 12.89A
- V_R(rms) = I_rms × R = 12.89 × 9 = 116V
- V_L(rms) = I_rms × ωL = 12.89 × 6.28 = 80.94V
- V leads I by 35°

---

## 6. LCR Circuit (Series Configuration)

### Concepts
- LCR circuit combines resistor, inductor, and capacitor in series
- Total impedance depends on the relative magnitudes of X_L and X_C
- Phase angle between voltage and current depends on net reactance
- Resonance occurs when X_L = X_C
- Circuit behavior changes based on which reactance dominates

### Formulas
- `V(t) = V_m cos(ωt + θ)` - total voltage across series LCR
- When `ωL > 1/(ωC)`: `V(t) = I_m√(R² + (ωL - 1/(ωC))²) cos(ωt + θ)` - V leads I
- When `ωL < 1/(ωC)`: `V(t) = I_m√(R² + (1/(ωC) - ωL)²) cos(ωt - θ)` - V lags I
- When `ωL = 1/(ωC)`: `V(t) = I_m R cos ωt` - V and I in phase
- `θ = tan⁻¹((ωL - 1/(ωC))/R)` - phase angle
- `Z = √(R² + (ωL - 1/(ωC))²)` - impedance of series LCR

### Important Notes
- Net reactance = ωL - 1/(ωC)
- When net reactance is positive, circuit is inductive (V leads I)
- When net reactance is negative, circuit is capacitive (V lags I)
- Impedance is minimum at resonance
- R is the only dissipative element

### Worked Example
**Q:** For a circuit with R = 3Ω, C = 1μF, L = 0.5H, find instantaneous current, rms values, phase angle given X_C = 4Ω, X_L = 8Ω.

**A:**
- X_L = ωL = 8Ω
- X_C = 1/(ωC) = 4Ω
- Net reactance = 8 - 4 = 4Ω
- Z = √(9 + 16) = 5Ω
- Phase angle θ = tan⁻¹(4/3) = 53°
- X_L > X_C, circuit is inductive (V leads I)

---

## 7. Average Power Across Resistor

### Concepts
- Power is dissipated only in the resistor
- Power in resistor equals voltage-current product integrated over period
- Average power depends on RMS values and phase angle
- Resistor dissipates energy continuously throughout the cycle

### Formulas
- `P_av = (1/T)∫₀ᵀ V(t)I(t) dt` - general average power formula
- `P_av = I_m² R cos² ωt` - instantaneous power in resistor
- `P_av = I²_rms R` - average power in resistor

### Important Notes
- Only resistor dissipates power in AC circuits
- Power dissipation is always positive in resistors
- RMS current and resistance determine power dissipation
- This is the only element where mechanical energy is converted

### Worked Example
**Q:** Calculate average power dissipated in 3Ω resistor when rms current is 40A.

**A:**
- P_av = I²_rms × R = 40² × 3 = 1600 × 3 = 4800W = 4.8 kW

---

## 8. Average Power Across Inductor

### Concepts
- Inductor stores energy in magnetic field during half-cycle
- Inductor returns energy to circuit during next half-cycle
- No net energy dissipation in ideal inductor
- Average power across inductor is zero over complete cycle

### Formulas
- `P_av = (1/T)∫₀ᵀ V(t)I(t) dt` - average power across inductor
- `P_av = (I_m²/(2T))∫₀ᵀ ωL cos(ωt + π/2) cos ωt dt`
- `P_av = 0` - average power across ideal inductor

### Important Notes
- Voltage and current are 90° out of phase
- During first quarter cycle, L absorbs energy
- During next quarter cycle, L releases this energy
- The area under V-I curve is zero over complete cycle
- Inductor is a reactive (non-dissipative) element

### Worked Example
**Q:** Calculate average power across an ideal inductor.

**A:**
- Average power P_av = 0 across ideal inductor
- Energy is alternately stored and released

---

## 9. Average Power Across Capacitor

### Concepts
- Capacitor stores energy in electric field during half-cycle
- Capacitor returns energy to circuit during next half-cycle
- No net energy dissipation in ideal capacitor
- Average power across capacitor is zero over complete cycle

### Formulas
- `P_av = (1/T)∫₀ᵀ V(t)I(t) dt` - average power across capacitor
- `P_av = (I_m²/(2))∫₀ᵀ (1/(ωC)) cos(ωt - π/2) cos ωt dt`
- `P_av = 0` - average power across ideal capacitor

### Important Notes
- Voltage and current are 90° out of phase
- Capacitor leads voltage by 90°
- During first quarter cycle, C absorbs energy
- During next quarter cycle, C releases this energy
- Like inductor, capacitor stores and releases energy cyclically

### Worked Example
**Q:** Calculate average power across an ideal capacitor.

**A:**
- Average power P_av = 0 across ideal capacitor
- Energy is alternately stored and released in electric field

---

## 10. General Average Power and Power Factor

### Concepts
- In general LCR circuits, average power depends on phase difference
- Power factor accounts for the phase relationship between voltage and current
- Only the in-phase component of voltage contributes to power dissipation
- Power factor is crucial for efficiency in AC power systems

### Formulas
- `P_av = V_rms I_rms cos θ` - general average power formula
- `cos θ` - power factor (where θ is phase angle between V and I)
- `P_av = V²_rms/R` - power dissipated (when V_rms is across resistor alone)

### Important Notes
- cos θ is also known as power factor
- Power factor = 1 when V and I are in phase (resistive circuit)
- Power factor = 0 when V and I are 90° out of phase (purely reactive)
- Power factor < 1 indicates reactive component in circuit
- For practical AC systems, power factor is a critical parameter

### Worked Example
**Q:** For a circuit with V_rms = 200V, I_rms = 40A, and phase angle θ = 53°, calculate average power.

**A:**
- Power factor = cos 53° = 0.6
- P_av = V_rms × I_rms × cos θ = 200 × 40 × 0.6 = 4800W = 4.8 kW

---

## 11. Resonance in LCR Circuit

### Concepts
- Resonance occurs when inductive reactance equals capacitive reactance
- At resonance, impedance is minimum (equals R only)
- Current reaches maximum value at resonance
- Power factor becomes unity at resonance
- Resonance frequency is independent of resistance

### Formulas
- `ω₀ = 1/√(LC)` - angular resonance frequency
- `ν₀ = 1/(2π√(LC))` - resonance frequency in Hz
- Condition: `ωL = 1/(ωC)` or `X_L = X_C`
- At resonance: `Z = R` (minimum impedance)
- `θ = 0°` and `cos θ = 1` at resonance

### Important Notes
- Resonance occurs when X_L = X_C
- Current I = V_rms/R at resonance (maximum current)
- Power dissipated = V²_rms/R at resonance (maximum power)
- Phase angle is zero at resonance
- Below resonance: circuit is capacitive; above: circuit is inductive

### Worked Example
**Q:** Find the resonance frequency and impedance at resonance for L = 0.5H, C = 1μF, R = 3Ω.

**A:**
- ω₀ = 1/√(LC) = 1/√(0.5 × 10⁻⁶) = 1414.2 rad/s
- ν₀ = ω₀/(2π) = 225.1 Hz
- At resonance: Z = R = 3Ω (minimum impedance)
- I_max = V_rms/R at resonance

---

## 12. Parallel RC Circuit

### Concepts
- In parallel RC circuit, voltage across both elements is same
- Currents through R and C are different and add vectorially
- Current through R is in phase with voltage
- Current through C leads voltage by 90°
- Total current leads voltage due to capacitive current component

### Formulas
- `I² = I_R² + I_C²` (rms values from phasor)
- `(V_rms/Z)² = (V_rms/R)² + (V_rms/X_C)²`
- `1/Z = √(1/R² + 1/X_C²)` where `X_C = 1/(ωC)`
- `tan θ = I_C/I_R = (V/X_C)/(V/R) = R/(X_C)` or `tan θ = ωRC`
- `θ = tan⁻¹(ωRC)` - phase angle (current leads voltage)

### Important Notes
- Current leads voltage by angle θ in parallel RC
- Impedance is smaller than either R or X_C alone
- Admittance (1/Z) is useful for parallel circuits
- Total current is vector sum of branch currents

### Worked Example
**Q:** In parallel RC circuit, if I_R = 0.8A and I_C = 0.6A, find total current and phase angle.

**A:**
- I_total = √(I_R² + I_C²) = √(0.64 + 0.36) = 1A
- tan θ = I_C/I_R = 0.6/0.8 = 0.75
- θ = tan⁻¹(0.75) = 36.87°
- Current leads voltage

---

## 13. Parallel RL Circuit

### Concepts
- In parallel RL circuit, voltage across both elements is same
- Currents through R and L are different and add vectorially
- Current through R is in phase with voltage
- Current through L lags voltage by 90°
- Total current lags voltage due to inductive current component

### Formulas
- `I² = I_R² + I_L²` (rms values from phasor)
- `(V_rms/Z)² = (V_rms/R)² + (V_rms/X_L)²`
- `1/Z = √(1/R² + 1/X_L²)` where `X_L = ωL`
- `tan θ = I_L/I_R = (V/X_L)/(V/R) = R/(X_L) = R/(ωL)`
- `θ = tan⁻¹(R/(ωL))` - phase angle (current lags voltage)

### Important Notes
- Current lags voltage by angle θ in parallel RL
- Impedance is smaller than either R or X_L alone
- At higher frequencies, X_L increases making current lag less
- Total current is vector sum of branch currents

### Worked Example
**Q:** In parallel RL circuit, if I_R = 0.8A and I_L = 0.6A, find total current and phase angle.

**A:**
- I_total = √(I_R² + I_L²) = √(0.64 + 0.36) = 1A
- tan θ = I_L/I_R = 0.6/0.8 = 0.75
- θ = tan⁻¹(0.75) = 36.87°
- Current lags voltage

---

## 14. Parallel LCR Circuit

### Concepts
- In parallel LCR, voltage is common across all branches
- Each branch carries different current at different phase
- Total current is vector sum of three branch currents
- Resonance occurs when I_C = I_L (capacitive and inductive currents cancel)
- Circuit behavior depends on which branch current dominates

### Formulas
- When `I_C > I_L`: `I² = I_R² + (I_C - I_L)²` (capacitive circuit)
- When `I_L > I_C`: `I² = I_R² + (I_L - I_C)²` (inductive circuit)
- When `I_C = I_L`: `I = I_R` (resonance condition)
- `1/Z = √(1/R² + (1/X_C - 1/X_L)²)`
- `tan θ = (I_C - I_L)/I_R = (1/X_C - 1/X_L)/(1/R)`

### Important Notes
- At resonance in parallel LCR, impedance is maximum (= R)
- Current is minimum at resonance (= I_R only)
- The branch with larger susceptance dominates the phase
- Parallel resonance is used in many practical applications

### Worked Example
**Q:** In parallel LCR circuit at resonance with I_L = I_C = 0.8A and I_R = 0.6A, find total current.

**A:**
- At resonance, I_L = I_C cancel out
- I_total = I_R = 0.6A
- Phase angle θ = 0° (V and I in phase)

---

## 15. Phasor Diagrams and AC Circuit Analysis

### Concepts
- Phasor diagrams represent AC quantities as rotating vectors
- All values in phasor diagrams are RMS values
- Relative phase angles between quantities can be visualized
- Different circuit configurations produce different phasor shapes
- Phasor addition follows vector addition rules

### Formulas
- For RC circuit: V_C lags current by π/2; V_R in phase with I
- For RL circuit: V_L leads current by π/2; V_R in phase with I
- For LCR circuit: resultant V determined by net reactance
- Impedance Z equals ratio of peak voltage to peak current
- Phase angle θ determined by tan⁻¹(net reactance/R)

### Important Notes
- Phasor diagrams use RMS values for all quantities
- Voltage phasor is sum of individual voltage phasors
- Current phasor is same for all series circuit elements
- Angle between V and I phasors gives phase difference
- Phasor approach simplifies AC circuit analysis

### Worked Example
**Q:** Draw phasor diagram for RC circuit with V_rms = 141.5V, V_R = 81.2V, V_C = 116V.

**A:**
- V_R (81.2V) aligned with current (reference at 0°)
- V_C (116V) perpendicular, pointing downward (lags by 90°)
- Total V_rms = √(81.2² + 116²) = √(6593.44 + 13456) = 141.5V
- Phase angle θ = tan⁻¹(116/81.2) = tan⁻¹(1.43) = 55°
- Voltage lags current by 55°

---

## Questions

### ANSWER KEYS (Reference)

**Workbook Answer Key -- Level 1 (Q1-45)**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | D | B | A | B | C | B | C | A | B | C | D | B | C | B | B |

| Q# | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | C | A | C | B | B | A | B | B | A | D | A | D | C | A | B |

| Q# | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | 100 | 160 | 80 | 45 | 360 | 0.8 | 0.5 | 1000 | 400 | 15 | 75 | 225 | 5 | 2 | 80 |

**Workbook Answer Key -- Level 2 (Q46-65)**

| Q# | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | D | B | C | B | ABC | ABCD | C | A | A | 4 | B | A | A | B | ACD |

| Q# | 61 | 62 | 63 | 64 | 65 |
|---|---|---|---|---|---|
| Ans | BC | C | A | D | 2 |

**Workbook Answer Key -- JEE Main (Archive) (Q1-39)**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | B | A | C | C | D | B | C | C | D | D | B | D | D | D | D |

| Q# | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | C | B | C | B | C | D | D | D | D | A | C | C | None | B | A |

| Q# | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 |
|---|---|---|---|---|---|---|---|---|---|
| Ans | A | A | C | B | A | C | D | 400 | C |

**Workbook Answer Key -- JEE Advanced (Archive)**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | A | B | B | A | ABC | BC | AC | CD | AB | BC | A-RST; B-QRST; C-QP; D-QRST |

| Q# | 12 | 13 | 14 | 15 | 16 |
|---|---|---|---|---|---|
| Ans | 2 | 20 | 6 | 4 | e = Bωr²/2; i: Bωr²/2R (1-e^(-R/L)); τ: mgr cos ωt/2 - 1/4Ω²ωr⁴ |

---

### AC CIRCUITS: LEVEL 0 (CBSE PATTERN)

**1.** The peak value of emf in ac is E₀. Write its (i) rms (ii) average value over a complete cycle.

**2.** When an ac source is connected across an inductor, show on a graph the nature of variation of the voltage and the current over one complete cycle.

**3.** Define capacitive reactance. Write its S.I. units.

**4.** A reactive element, in an a.c. circuit, causes the current flowing (i) to lead in phase by π/2, (ii) to lag in phase by π/2 with respect to the applied voltage. Identify the element in each case.

**5.** Mention the two characteristic properties of the material suitable for making core of a transformer.

**6.** State the underlying principle of a transformer. How is the large scale transmission of electric energy over long distances done with the use of transformers?

**7.** An alternating voltage given by V = 140 sin314t is connected across a pure resistor of 50Ω. Find (i) The frequency of the source. (ii) The rms current through the resistor.

**8.** Show that the current leads the voltage in phase by π/2 in an ac circuit containing an ideal capacitor.

**9.** An electric lamp having coil of negligible inductance connected in series with a capacitor and an ac source is glowing with certain brightness. How does the brightness of the lamp change on reducing the (i) capacitance, and (ii) the frequency?

**10.** A capacitor 'C', a variable resistor 'R' and a bulb 'B' are connected in series to the ac mains in circuit as shown. The bulb glows with some brightness. How will the glow of the bulb change if (i) a dielectric slab is introduced between the plates of the capacitor, keeping resistance R to be the same; (ii) the resistance R is increased keeping the same capacitance?

**11.** Calculate the quality factor of a series LCR circuit with L = 2.0 H, C = 2μF and R = 10Ω. Mention the significance of quality factor in LCR circuit.

**12.** A light bulb is rated 100 W for 220 V ac supply of 50 Hz. Calculate (i) The resistance of the bulb; (ii) The rms current through the bulb

---

### AC CIRCUITS: LEVEL 1 (DTS-1)

**1.** The rms value of an AC of 50 Hz is 10 A. The time taken by an alternating current in reaching from zero to maximum value and the value of the peak current will be:
(A) 2 × 10⁻² s and 14.14 A (B) 1 × 10⁻² s and 7.07 A (C) 5 × 10⁻³ s and 7.07 A (D) 5 × 10⁻³ s and 14.14 A

**2.** The peak value of instantaneous emf E given by E = E₀ cos ωt is 10 V and frequency is 50 Hz. At time t = (1/600) s, the instantaneous value of emf is:
(A) 10 V (B) 5√3V (C) 5 V (D) 1 V

**3.** Figure shows a source of alternating voltage connected to a capacitor and a resistor. Which of the following phasor diagrams correctly describes the phase relationship between I_C, the current between the source and the capacitor, and I_R, the current in the resistor?
(A) [phasor diagram A] (B) [phasor diagram B] (C) [phasor diagram C] (D) [phasor diagram D]

**4.** Using an ac voltmeter, the potential difference in the electrical line in a house is read to be 234V. If the line frequency is known to be 50 cycles/second, the equation for the line voltage is:
(A) V = 165 sin(100πt) (B) V = 331 sin(100πt) (C) V = 220 sin(100πt) (D) V = 440 sin(100πt)

**5.** In a purely resistive AC circuit:
(A) Voltage leads current (B) Voltage lags current (C) Voltage and current are in same phase (D) Nothing can be said

**6.** Identify the graph which correctly represents the variation of capacitive reactance X_C with frequency:
(A) [graph A] (B) [graph B] (C) [graph C] (D) [graph D]

**7.** In the circuit shown in figure, the reading of the AC ammeter is:
(A) 20√2 mA (B) 40√2 mA (C) 20 mA (D) 40 mA

**8.** At a frequency ω₀, the reactance of a certain capacitor equals that of a certain inductor. If the frequency is changed to 2ω₀, what is the ratio of the reactance of the inductor to that of the capacitor?
(A) 1 : 1 (B) √2 : 1 (C) 1 : 2√2 (D) 1 : 2

**9.** A pure inductive coil of 30 mH is connected to an AC source of 220 V, 50 Hz. The rms current in the coil is:
(A) 50.35 A (B) 23.4 A (C) 30.5 A (D) 12.3 A

**10.** An inductor coil having some resistance is connected to an ac source. Which of the following have zero average value over a cycle:
(A) Induced emf in the inductor (B) Current (C) Both (A) and (B) (D) neither (A) and (B)

**11.** When 100 V DC is applied across a solenoid a current of 1 A flows in it. When 100 V AC is applied across the same coil, the current drops to 0.5 A. If the frequency of the AC source is 50 Hz, the impedance and inductance of the solenoid are:
(A) 100Ω, 0.03H (B) 200Ω, 1.0 H (C) 100Ω, 0.86H (D) 200Ω, 0.55 H

**12.** The circuit given in figure has a resistanceless choke coil L and resistance R. The voltages across R and L are given in figure. The value of the applied voltage is:
(A) 100 V (B) 200 V (C) 300 V (D) 400 V

**13.** An inductive coil has resistance of 100Ω. When an ac signal of frequency 1000 Hz is fed to the coil, the applied voltage leads the current by 45°. What is the inductance of the coil?
(A) 2 mH (B) 3.3 mH (C) 16 mH (D) √5mH

**14.** An inductor and a resistor are connected in series with an ac source. In this circuit:
(A) The current and the p.d. across the resistance lead the p.d. across the inductance
(B) The current and the p.d. across the resistance lag behind the p.d. across the inductance by an angle π/2
(C) The current and the p.d. across the resistance lag behind the p.d. across the inductance by an angle π
(D) The p.d. across the resistance lags behind the p.d. across the inductance by an angle π/2 but the current in resistance leads the p.d. across the inductance by π/2

**15.** The resonance frequency of the circuit of an oscillator when L = 10/π² mH and C = 0.04μF is:
(A) 250 kHz (B) 25 kHz (C) 2.5 kHz (D) 25 MHz

**16.** For an LCR series circuit with an ac source of angular frequency ω:
(A) circuit will be capacitive if ω > 1/LC (B) circuit will be inductive if ω = 1/√LC (C) power factor of circuit will be unity if capacitive reactance equals inductive reactance (D) current will be leading voltage if ω > 1/√LC

**17.** In the series LCR circuit shown in figure, the voltmeter and ammeter readings are:
(A) V = 100V, I = 2 A (B) V = 100 V, I = 5 A (C) V = 1000 V, I = 2 A (D) V = 300 V, I = 1 A

**18.** An LCR circuit contains resistance of 100Ω and supply of 200 V at 300 rad angular frequency. If only capacitance is taken out from the circuit and the rest of the circuit is joined, current lags behind the voltage by 60°. If, on the other hand, only inductor is taken out, the current leads by 60° with the applied voltage. The current flowing in the circuit is:
(A) 1 A (B) 1.5 A (C) 2 A (D) 2.5 A

**19.** In a series LCR circuit the voltage across the resistance, capacitance and inductance is 10 V each. If the capacitance is short circuited, the voltage across the inductance will be:
(A) 10 V (B) 10/√2V (C) (10/√3)V (D) 20V

**20.** In an AC circuit, the voltage applied is E = E₀ sin ωt. The resulting current in circuit is I = I₀ sin(ωt - π/2). The power consumption in the circuit is given by:
(A) P = E₀I₀/√2 (B) P = zero (C) P = E₀I₀/2 (D) P = √2E₀I₀

**21.** 110 volts (rms) is applied across a series circuit having resistance 11Ω and impedance 22Ω. The power consumed is:
(A) 275 W (B) 366 W (C) 550 W (D) 1100 W

**22.** A resistance is connected to an ac source. If a capacitor is included in series circuit then average power absorbed by the resistance:
(A) will increase (B) will decrease (C) may increase of decrease (D) will remain constant

**23.** A sinusoidal alternating current of peak value I₀ passes through a heater of resistance R. What is the mean power output of the heater?
(A) I₀²R (B) I₀²R/2 (C) 2I₀²R (D) √2I₀²R

**24.** A resistor and an inductor are connected to an ac supply of 120 V and 50 Hz. The current in the circuit is 3A. If the power consumed in the circuit is 108 W, then the resistance in the circuit is:
(A) 12Ω (B) 40Ω (C) √(52 × 28)Ω (D) 360Ω

**25.** A series circuit has an impedance of 50.0Ω and a power factor of 0.63 at 60 Hz. The voltage lags the current. To raise the power factor of the circuit:
(A) An inductor should be placed in series (B) A capacitor should be placed in series (C) A resistance should be placed in series (D) An inductor or a resistance should be placed in series

**26.** Power factor is one for:
(A) pure resistor (B) pure inductor (C) pure capacitor (D) either an inductor or a capacitor

**27.** An alternating voltage E = 200 sin 100t is applied to a series combination R = 30Ω and an inductor of 400 mH. The power factor of the circuit is:
(A) 0.01 (B) 0.2 (C) 0.05 (D) 0.6

**28.** A step up transformer operates at 230 V and current through secondary coil is 40A. If it has a turn ratio of 1.25 then current in primary coil is:
(A) 25 A (B) 100 A (C) 50 A (D) 20 A

**29.** Figure shows an iron-cored transformer assumed to be 100% efficient. The ratio of the secondary turns to the primary turns is 1:20. A 240 V ac supply is connected to the primary coil and a 6.0Ω resistor is connected to the secondary coil. What is the current in the primary coil?
(A) 0.10 A (B) 0.14 A (C) 2.0 A (D) 40 A

**30.** The primary and secondary coils of a transformer have 50 and 1500 turns respectively. If the magnetic flux φ linked with the primary coil is given by φ = φ₀ + 4t, where φ is in weber, t is time in second and φ₀ is a constant, the output voltage across the secondary coil is:
(A) 90 V (B) 120 V (C) 220 V (D) 30 V

**31.** A series circuit consisting of a resistance 30Ω, a capacitor of capacitance 10 μF and a coil of inductance 10 mH is connected to an AC source of angular frequency 2000 rad/s. If the rms current through the circuit is 1 A, the amplitude of the voltage source is _________V.

**32.** A series circuit consisting of a resistance 250Ω, a capacitor of capacitance 100 μF and a coil of inductance 10 mH is connected to an AC source of variable frequency. The frequency of the source for which the current in the circuit is in phase with the voltage is _________Hz. (Take π = 25/8)

**33.** A resistance 3Ω is connected to a coil of inductance 10 mH and an AC source of amplitude 20 V and angular frequency 400 rad/s. The rate at which power is dissipated in the resistance is _________W.

**34.** The reactance of a capacitor at frequency 200 Hz is 30√3 Ω. When the capacitor is placed in series with a resistance R and powered with an AC source of frequency 400 Hz, the current in the circuit lags the voltage by a phase angle of π/6. Then, the resistance R is equal to _________Ω.

**35.** In a series LCR circuit running at frequency 300 Hz, the rms potential difference across the inductor coil is 25 V, and the rms potential difference across the capacitor is 36 V. Then, the frequency at which the circuit must be run so that the rms potential difference across the inductor is equal to the rms potential difference across the capacitor is _________Hz.

**36.** A series circuit consisting of a resistance 120Ω, a capacitor of capacitance 10 μF and a coil of inductance 10 mH is connected to an AC source of angular frequency 1000 rad/s. The power factor is _________.

**37.** In a series LCR circuit, the reactance of the resistance, the capacitor and the inductor are in the ratio √3 : 4 : 1. The power factor of the circuit is _________.

**38.** The rate of power dissipation in a series LCR circuit with a resistance 1000Ω, a capacitor of capacitance 2 μF and a coil of inductance 0.5 H is maximum at angular frequency _________rad/s.

**39.** A series LCR circuit is in resonance at an angular frequency 200 rad/s. When the circuit is powered with an AC source of angular frequency 100 rad/s, the current leads the voltage by a phase angle π/3. Then, the angular frequency at which the voltage leads the current by a phase angle π/3 is _________rad/s.

**40.** In a series LCR circuit, the rms current is 2 A, the rate of power dissipation is 24 W and the power factor is 0.4. The impedance of the circuit is _________Ω.

**41.** In a series LCR circuit operating on an AC source of variable frequency, the capacitor and inductor coil have reactance 20Ω and 320Ω respectively at frequency 300 Hz. The resonant frequency of the circuit is _________Hz.

**42.** A series LCR circuit consumes power 300 W at resonance. If the frequency of the source is adjusted such that the current in the circuit leads the voltage by a phase angle π/6, the power consumed becomes _________W.

**43.** The quality factor of a series LCR circuit with a resistance 1000Ω, a capacitor of capacitance 2 μF and a coil of inductance 0.5 H is _________.

**44.** Two voltage sources e₁ = [100 sin(300t)] V and e₂ = [100√3 cos(300t)] V are connected in series with a resistance 100Ω. The maximum current in the circuit is _________A.

**45.** A resistance 20Ω connected to an AC voltage source of angular frequency 250 Hz consumes power P₀. The inductance of a coil that needs to be connected in series with the resistance so that it now consumes power P₀/2 is _________mH.

---

### AC CIRCUITS: LEVEL 2 (DTS-2)

**46.** A resistance of 20Ω is connected to a source of an alternating potential V = 220 sin(100πt). The time taken by the current to change from the peak value to rms value, is:
(A) 0.2 s (B) 0.25 s (C) 2.5 × 10⁻³ s (D) 2.5 × 10⁻³ s

**47.** A capacitor of 10μF and an inductor of 1H are joined in series. An alternating current of 50 Hz is applied to this combination. What is the impedance of the combination?
(A) 5(π² - 5)/π Ω (B) 100(10 - π²)/π Ω (C) 10(π² - 5)/π Ω (D) 5(10 - π²)/π Ω

**48.** A 220-V, 50Hz ac generator is connected to an inductor and a 50Ω resistor in series. The current in the circuit is 1.0 A. What is the potential difference across inductor?
(A) 102.2V (B) 186.4 V (C) 214 V (D) 170 V

**49.** A direct current of 5 A is superimposed on an alternating current I = 10 sin ωt flowing through a wire. The rms value of the resulting current will be:
(A) (15/2)A (B) 5√3A (C) 5√5A (D) 15 A

**50.** The average value of AC current in a half-time period may be:
(A) Positive (B) Negative (C) Zero (D) None of the above

**51.** For the saw-tooth voltage variation [shown] for an AC circuit, choose correct option(s):
(A) V(t) = V₀(2t/T - 1) for 0 ≤ t ≤ T (B) V_av(1/2 cycle) = V₀/2 (C) V_rms = V₀/√3 (D) V₀ > V_rms > V_av

**52.** A 0.21H inductor and a 12Ω resistance are connected in series to a 220 V, 50 Hz ac source. The current in the circuit is:
(A) 220/√4400 A (B) 22/2√5 A (C) 220/√4550 A (D) 22/5√3 A

**53.** The phase angle between the current and the source voltage is:
(A) tan⁻¹(7π/4) (B) cos⁻¹(7π/4) (C) tan⁻¹(4π/7) (D) cos⁻¹(4π/7)

**54.** In Column I, the variation of current i with time t is given in figure. In Column II, root mean square current i_rms and average current are given. Match the following columns and select the correct option from the codes given below.
[Column I shows 4 current waveforms: sinusoidal, triangular, square wave, square pulse]
[Column II shows formulas: P) i_rms = i₀/√3, Q) Average current for positive half cycle is i₀, R) Average current for positive half cycle is i₀/2, S) Full cycle average current is zero]

**55.** Two resistors are connected in series across a 5V rms source of alternating potential. The potential difference across 6Ω resistor is 3V. If R is replaced by a pure inductor L of such magnitude that current remains same, then the potential difference across L is _________ volts.

**56.** Which voltmeter will give zero reading at resonance?
(A) V₁ (B) V₂ (C) V₃ (D) None of these

**57.** In a circuit L, C and R are connected in series with an alternating voltage source of frequency f. The current leads the voltage by 45°. The value C is:
(A) 1/(2πf(2ωiL + R)) (B) 1/(πf(2ωiL + R)) (C) 1/(2πf(2ωiL - R)) (D) 1/(πf(2ωf L - R))

**58.** In the circuit, as shown in the figure, if the value of R.M.S. current is 2.2 ampere, the power factor of the box is:
(A) 1/√2 (B) 1 (C) √3/2 (D) 1/2

**59.** In the circuit shown in figure, if both the bulbs B₁ and B₂ are identical:
(A) their brightness will be same (B) B₂ will be brighter than B₁ (C) B₁ will be brighter than B₂ (D) only B₂ will glow because the capacitor has infinite impedance

**60.** In an R-L-C series circuit shown in the figure, the readings of voltmeters V₁ and V₂ are 100V and 120V, respectively. The source voltage is 130V. For this situation, mark out the correct statement(s):
(A) Voltage across resistor, inductor and capacitor are 50V, 50√3 V and 120 + 50√3 V, respectively
(B) Voltage across resistor, inductor and capacitor are 50V, 50√3 V and 120 - 50√3 V, respectively
(C) Power factor of the circuit is 5/13
(D) The circuit is capacitive in nature

**61.** When a voltage V_s = 200√2 sin(ωt + 15°) is applied to an AC circuit, the current in the circuit is found to be i = 2 sin(ωt + π/4). Then:
(A) average power consumed is 200√6 W (B) average power consumed is 100√6 W (C) power factor is √6/2 (D) power factor is 1/2

**62.** A box contains a combination of L, C and R. When 250 V DC is applied to the terminals of the box, a current of 1A flows in the circuit. When an AC source of 250 V at 2250 rad s⁻¹ is connected, a current of 1.25 A flows in the circuit. When frequency of AC is increased, it is observed that current increases with frequency and becomes maximum at 4500 rad s⁻¹. Circuit must be:
(A) [Series RLC circuit diagram] (B) [Parallel RC circuit diagram] (C) [Series RC circuit diagram] (D) [Series RL circuit diagram]

**63.** Total circuit reactance is:
(A) 333.33Ω (B) 222.22Ω (C) 111.11Ω (D) 444.44Ω

**64.** Capacitance of capacitor used in the circuit is:
(A) 2μF (B) 2.5μF (C) 1.5μF (D) 1 μF

**65.** In the circuit of figure, the source frequency is ω = 2000 rad/s. The current in the circuit will be _________ Ampere.

---

### AC CIRCUITS: JEE MAIN ARCHIVE

**[2002]**

**1.** The power factor of an AC circuit having resistance (R) and inductance (L) connected in series and an angular velocity ω is:
(A) R/ωL (B) R/(R² + ω²L²)^(1/2) (C) ωL/R (D) R/(R² - ω²L²)^(1/2)

**[2003]**

**2.** The core of any transformer is laminated so as to:
(A) Reduce the energy loss due to eddy currents (B) Make it light weight (C) Make it robust & strong (D) Increase the secondary voltage

**[2004]**

**3.** In a LCR circuit capacitance is changed from C to 2C. For the resonant frequency to remain unchanged, the inductance should be changed from L to:
(A) 4 L (B) 2 L (C) L/2 (D) L/4

**4.** Alternating current cannot be measured by DC ammeter because:
(A) AC cannot pass through DC ammeter (B) AC changes direction (C) Average value of current for complete cycle is zero (D) DC ammeter will get damaged

**[2004]**

**5.** In an LCR series AC circuit, the voltage across each of the components, L, C and R is 50 V. The voltage across the LC combination will be:
(A) 50 V (B) 50√2 V (C) 100 V (D) 0 V

**[2005]**

**6.** The phase difference between the alternating current and emf is π/2. Which of the following cannot be constituent of the circuit?
(A) C alone (B) R, L (C) L, C (D) L alone

**7.** A circuit has a resistance of 12Ω and an impedance of 15Ω. The power factor of the circuit will be:
(A) 1.25 (B) 0.125 (C) 0.8 (D) 0.4

**[2005]**

**8.** The self inductance of the motor of an electric fan is 10 H. In order to impart maximum power at 50 Hz, it should be connected to a capacitance of:
(A) 4μF (B) 8μF (C) 1μF (D) 2μF

**[2006]**

**9.** In an AC generator, a coil with N turns, all of the same area A and total resistance R, rotates with frequency ω in a magnetic field B. The maximum value of emf generated in the coil is:
(A) NABRω (B) NAB (C) NABR (D) NABω

**[2006]**

**10.** In a series resonant LCR circuit, the voltage across R is 100 volts and R = 1 kΩ with C = 2μF. The resonant frequency ω is 200 rad/s. At resonance the voltage across L is:
(A) 4 × 10⁻³V (B) 2.5 × 10⁻²V (C) 40 V (D) 250 V

**[2007]**

**11.** In an a.c. circuit the voltage applied is E = E₀ sin ωt. The resulting current in the circuit is I = I₀ sin(ωt - π/2). The power consumption in the circuit is given by:
(A) P = E₀I₀/√2 (B) P = Zero (C) P = E₀I₀/2 (D) P√2 E₀I₀

**[2010]**

**12.** In a series LCR circuit R = 200Ω and the voltage and the frequency of the main supply is 220 V and 50 Hz respectively. On taking out the capacitance from the circuit the current lags behind the voltage by 30°. On taking out the inductor from the circuit the current leads by 30°. The power dissipated in the LCR circuit is:
(A) 305 W (B) 210 W (C) Zero W (D) 242 W

**[2013]**

**13.** A series LR circuit is connected to an ac source of frequency ω and the inductive reactance is equal to 2R. A capacitance of capacitive reactance equal to R is added in series with L and R. The ratio of the new power factor to the old one is:
(A) √(2/5) (B) √(2/5) (C) √(3/17) (D) √(5/17)

**[2013]**

**14.** When resonance is produced in a series LCR circuit, then which of the following is not correct?
(A) Current in the circuit is in phase with the applied voltage (B) Inductive and capacitive reactance are equal (C) If R is reduced, the voltage across capacitor will increase (D) Impedance of the circuit is maximum

**[2013]**

**15.** In a series LCR circuit, C = 10⁻¹¹ Farad, L = 10⁻⁶ Henry and R = 100 ohm. When a constant D.C. voltage E is applied to the circuit, the capacitor acquires charge 10⁻⁹C. The D.C. source is replaced by a sinusoidal voltage source in which the peak voltage E₀ is equal to the constant D.C. voltage E. At resonance the peak value of the charge acquired by the capacitor will be:
(A) 10⁻¹⁵C (B) 10⁻⁶C (C) 10⁻¹⁰C (D) 10⁻⁸C

**[2013]**

**16.** An LCR circuit as shown in the figure is connected to a voltage V_ac whose frequency can be varied. The frequency at which the voltage across the resistor is maximum, is:
(A) 902 Hz (B) 143 Hz (C) 23 Hz (D) 345 Hz

**[2013]**

**17.** The plot given below is of the average power delivered to an LRC circuit versus frequency. The quality factor of the circuit is:
(A) 5.0 (B) 2.0 (C) 2.5 (D) 0.4

**[2013]**

**18.** In the circuit shown here, the voltage across L and C are respectively 300 V and 400 V. The voltage of the ac source is:
(A) 400 Volt (B) 500 Volt (C) 100 Volt (D) 700 Volt

**[2014]**

**19.** A sinusoidal voltage V(t) = 100 sin(500t) is applied across a pure inductance of L = 0.02 H. The current through the coil is:
(A) 10 cos (500 t) (B) -10 cos (500 t) (C) 10 sin (500 t) (D) -10 sin (500 t)

**[2014]**

**20.** When the rms voltages V_L, V_C, V_R are measured respectively across the inductor L, the capacitor C and the resistor R in a series LCR circuit connected to an AC source, it is found that the ratio V_L : V_C : V_R is 1 : 2 : 3. If the rms voltage of the AC source is 100 V, then V_R is close to:
(A) 50 V (B) 70 V (C) 90 V (D) 100 V

**[2014]**

**21.** For the LCR circuit, shown here, the current is observed to lead the applied voltage. An additional capacitor C', when joined with the capacitor C present in the circuit, makes the power factor of the circuit unity. The capacitor C must have been connected in:
(A) Series with C and has a magnitude 1 - ω²LC / ω²L (B) Series with C and has a magnitude C / (ω²LC - 1) (C) Parallel with C and has a magnitude C / (ω²LC - 1) (D) Parallel with C and has a magnitude 1 - ω²LC / ω²L

**[2016]**

**22.** An arc lamp requires a direct current of 10 A at 80 V to function. If it is connected to a 220 V (rms), 50 Hz AC supply, the series inductor needed for it to work is close to:
(A) 80 H (B) 0.08 H (C) 0.044 H (D) 0.065 H

**[2016]**

**23.** A series LR circuit is connected to a voltage source with V(t) = V₀ sin ωt. After very large time, current I(t) behaves as (t₀ ≫ V/R):
(A) [graph A] (B) [graph B] (C) [graph C] (D) [graph D]

**[2018]**

**24.** A sinusoidal voltage of peak value 283 V and angular frequency 320/s is applied to a series LCR circuit. Given that R = 5Ω, L = 25 mH and C = 1000 μF. The total impedance, and phase difference between the voltage across the source and the current will respectively be:
(A) 10Ω and tan⁻¹(5/3) (B) 10Ω and tan⁻¹(8/3) (C) 7Ω and tan⁻¹(5/3) (D) 7Ω and 45°

**[2018]**

**25.** For an RLC circuit driven with voltage of amplitude v_m and frequency ω₀ = 1/√LC, the current exhibits resonance. The quality factor Q is given by:
(A) ω₀L/R (B) ω₀R/L (C) R/(ω₀C) (D) CR/ω₀

**[2019]**

**26.** In an a.c. circuit, the instantaneous e.m.f. and current are given by:
(A) e = 100 sin 30 t; i = 20 sin(30t - π/4). In one cycle of a.c., the average power consumed by the circuit and the wattless current are, respectively:
(A) 50, 0 (B) 50, 10 (C) 1000/√2, 10 (D) 1000/√2, 0

**[2019]**

**27.** A series AC circuit containing an inductor (20 mH), a capacitor (120 μF) and a resistor (60Ω) is driven by an AC source of 24 V/50 Hz. The energy dissipated in the circuit in 60 s is:
(A) 3.39 × 10³ J (B) 2.26 × 10³ J (C) 5.65 × 10² J (D) 5.17 × 10² J

**[2019]**

**28.** In the above circuit, C = √3/3 μF, R₂ = 20Ω, L = √3/10 H and R₁ = 10Ω. Current in L-R₁ path is I₁ and in C-R₂ path it is I₂. The voltage of AC source is given by V = 200√2 sin(100t) volts. The phase difference between I₁ and I₂ is:
(A) 90° (B) 60° (C) 30° (D) 0°

**[2019]**

**29.** A power transmission line feeds input power at 2300 V to a step down transformer with its primary windings having 4000 turns. The output power is delivered at 230 V by the transformer. If the current in the primary of the transformer is 5A and its efficiency is 90%, the output current would be:
(A) 35 A (B) 45 A (C) 25 A (D) 50 A

**[2019]**

**30.** An alternating voltage v(t) = 220 sin 100 πt volt is applied to a purely resistive load of 50Ω. The time taken for the current to rise from half of the peak value to the peak value is:
(A) 3.3 ms (B) 7.2 ms (C) 2.2 ms (D) 5 ms

**[2019]**

**31.** A circuit connected to an ac source of emf e = e₀ sin(100t) with t in seconds, gives a phase difference of π/4 between the emf e and current i. Which of the following circuits will exhibits this?
(A) RC circuit with R = 1 kΩ and C = 10μF (B) RL circuit with R = 1 kΩ and L = 1 mH (C) RL circuit with R = 1 kΩ and L = 10mH (D) RC circuit with R = 1 kΩ and C = 1μF

**[2019]**

**32.** A transformer consisting of 300 turns in the primary and 150 turns in the secondary gives output power of 2.2 kw. If the current in the secondary coil is 10 A, then the input voltage and current in the primary coil are:
(A) 440 V and 5A (B) 220 V and 10 A (C) 440 V and 20A (D) 220 V and 20 A

---

### AC CIRCUITS: JEE ADVANCED ARCHIVE

**SINGLE OPTION CORRECT TYPE**

**[2003]**

**1.** When an AC source of emf e = E₀ sin (100 t) is connected across a circuit, the phase difference between the emf e and the current i in the circuit is observed to be π/4, as shown in the diagram. If the circuit consists possibly only of R-C or R-L or L-C in series, find the relationship between the two elements:
(A) R = 1kΩ, C = 1μF (B) R = 1kΩ, C = 5μF (C) R = 1kΩ, L = 10H (D) R = 1kΩ, L = 1H

**[2010]**

**2.** An AC voltage source of variable angular frequency ω and fixed amplitude V₀ is connected in series with a capacitance C and an electric bulb of resistance R (inductance zero). When ω is increased:
(A) the bulb glows dimmer (B) the bulb glows brighter (C) total impedance of the circuit is unchanged (D) total impedance of the circuit increases

---

**LINKED COMPREHENSION TYPE**

**PARAGRAPH FOR QUESTIONS 3-4**

A thermal power plant produces electric power of 600 kW at 4000 V, which is to be transported to a place 20 km away from the power plant for consumers' usage. It can be transported either directly with a cable of large current carrying capacity or by using a combination of step-up and step-down transformers at the two ends. The drawback of the direct transmission is the large energy dissipation. In the method using transformer is used at the plant side so that the current is reduced to a smaller value.

At the consumers' end a step-down transformer is used to supply power to the consumers at the specified lower voltage. It is reasonable to assume that the power cable is purely resistive and the transformers are ideal with a power factor unity. All the current and voltages mentioned are rms values.

**[2013]**

**3.** If the direct transmission method with a cable of resistance 0.4Ω km⁻¹ is used, the power dissipation (in %) during transmission is:
(A) 20 (B) 30 (C) 40 (D) 50

**4.** In the method using the transformers, assume that the ratio of the number of turns in the primary to that in the secondary in the step-up transformer is 1 : 10. If the power to the consumers has to be supplied at 200V, the ratio of the number of turns in the primary to that in the secondary in the step-down transformer is:
(A) 200 : 1 (B) 150 : 1 (C) 100 : 1 (D) 50 : 1

---

**MULTIPLE OPTIONS CORRECT TYPE**

**[1984]**

**5.** L, C and R represent the physical quantities, inductance, capacitance and resistance respectively. The combination which have the dimensions of frequency are:
(A) 1/RC (B) R/L (C) 1/√LC (D) C/L

**[2011]**

**6.** A series R - C circuit is connected to AC voltage source. Consider two cases: (A) when C is without a dielectric medium and (B) when C is filled with dielectric of constant 4. The current i_R through the resistor and voltage V_C across the capacitor are compared in the two cases. Which of the following is/are true?
(A) i_R^A > i_R^B (B) i_R^A < i_R^B (C) V_C^A > V_C^B (D) V_C^A < V_C^B

**[2012]**

**7.** In the given circuit, the AC source has ω = 100 rad/s. Considering the inductor and capacitor to be ideal, the correct choice(s) is (are):
(A) The current through the circuit, I is 0.3 A (B) The current through the circuit, I is 0.3√2 (C) The voltage across 100Ω resistor = 10√2V (D) The voltage across 50Ω resistor = 10V

**[2014]**

**8.** At time t = 0, terminal A in the circuit shown is connected to B by a key and an alternating current I(t) = I₀ cos(ωt), with I₀ = 1A and ω = 500 rad s⁻¹ starts flowing in it with the initial direction shown in the figure. At t = 7π/6ω, the key is switched from B to D. Now onwards only A and D are connected. A total charge Q flows from the battery to charge the capacitor fully. If C = 20μF, R = 10Ω and the battery is ideal with emf of 50 V, identify the correct statement(s):
(A) Magnitude of the maximum charge on the capacitor before t = 7π/6ω is 1 × 10⁻³C
(B) The current in the left part of the circuit just before t = 7π/6ω is clockwise
(C) Immediately after A is connected to D, the current in R is 10 A
(D) Q = 2 × 10⁻³C

**[2017]**

**9.** In the circuit shown, L = 1μH, C = 1μF and R = 1 kΩ. They are connected in series with an AC source V = V₀ sin ωt as shown. Which of the following option(s) is(are) correct?
(A) At ω = 0 the current flowing through the circuit becomes nearly zero.
(B) The frequency at which the current will be in phase with the voltage is independent of R.
(C) The current will be in phase with the voltage if ω = 10⁴ rad/s.
(D) At ω >> 10⁶ rad/s, the circuit behaves like a capacitor.

---

**PARAGRAPH FOR QUESTION 10**

The instantaneous voltages at three terminals marked X, Y and Z are given by:
V_X = V₀ sin ωt,
V_Y = V₀ sin(ωt + 2π/3), and
V_Z = V₀ sin(ωt + 4π/3).

An ideal voltmeter is configured to real rms value of the potential difference between its terminals. It is connected between point X and Y and then between Y and Z. The reading(s) of the voltmeter will be:

**[2017]**

**10.**
(A) V_YZ^rms = V₀√(1.7.2) (B) V_YZ^rms = V₀√(3/2) (C) independent of the choice of the two terminals. (D) V_YZ^rms = 0.

---

**MATCH MATRIX TYPE**

**[2010]**

**11.** You are given only resistances, capacitors and inductors. There are connected to a variable DC voltage source (the first two circuits) or an AC voltage source of 50 Hz frequency (the next three circuits) in different ways as shown in Column II. When a current I (steady state for DC or rms for AC) flows through the circuit, the corresponding voltage V₁ and V₂ (indicated in circuits) are related as shown in Column I.

Column I: I = 0, V₁ is proportional to I
Column II: [5 circuit diagrams with different configurations]

Match the following columns and select the correct option from the codes given below.
(A) I = 0, V₂ > V₁ (P) [Inductor-Capacitor circuit diagram]
(B) I = 0, V₂ > V₁ (Q) [Inductor-Resistor circuit diagram]
(C) V₁ = 0, V₂ = V (R) [Resistor-Inductor circuit diagram]
(D) I = 0, V₂ is proportional to I (S) [Inductor-Capacitor circuit diagram]
(T) [Resistor-Capacitor circuit diagram]

---

**NUMERICAL ANSWER TYPE**

**[2003]**

**12.** A square loop of wire (of negligible resistance) of side a, has a capacitor of capacitance C in it. The loop kept symmetrically in the plane of two long straight fixed parallel wires (see figure). The wires carry equal currents I = I₀ sin ωt in opposite directions.

(i) The maximum value of the current in the loop is aω²u₀I₀Lc in x / π. Find x.

(ii) Make a neat sketch of the charge q(t) on the upper plate A of the capacitor, versus t (for the period 0 to T) on the diagram given below for this purpose. Assume current to be positive for counter clockwise direction.

**[2004]**

**13.** An inductor of inductance (L) equal to 35 mH and resistance (R) equal to 11Ω are connected in series to an AC source. The rms voltage of a.c. source is 220 volts and frequency is 50 Hz. Find the peak value of current in the circuit. (Given π = 22/7)

**[2011]**

**14.** A long circular tube of length 10 m and radius 0.3 m carries a current I along its curved surface as shown. A wire-loop of resistance 0.005Ω and of radius 0.1 m is placed inside the tube with its axis coinciding with the axis of the tube.

The current varies as I = I₀ l_t cos 300 t where I₀ is constant. If the magnetic moment of the loop is Nμ₀I₀ sin(300t), then N is:

**[2011]**

**15.** A series R - C combination is connected to an AC voltage of angular frequency ω = 5.00 rad/s. If the impedance of the R - C circuit is R√1.25, the time constant (in millisecond) of the circuit is:

---

**FILL IN THE BLANKS TYPE**

**[1995]**

**16.** A metal rod OA of mass m and length r is kept rotating with a constant angular speed ω in a vertical plane about a horizontal axis at the end O. The free end A is arranged to slide without friction along a fixed conducting circular ring in the same plane of rotation. A uniform and constant magnetic induction B is applied perpendicular and into the plane of rotation as shown in figure. An inductor L and an external resistance R are connected through a switch between the point O and a point C on the ring to form an electrical circuit. Neglect the resistance of the ring and the rod. Initially, the switch is open.

(i) What is the induced emf across the terminals of the switch _________?

(ii) The switch S is closed at time t = 0.
(a) Obtain an expression for the current as a function of time _________.
(b) In the steady state, obtain the time dependence of the torque required to maintain the constant angular speed. Given that the rod OA was along the positive X axis at t = 0 _________.
