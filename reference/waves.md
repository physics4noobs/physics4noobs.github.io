# Wave Motion

## Overview
Wave Motion is one of the most important chapters for JEE Main and Advanced, covering transverse and longitudinal waves, wave speed in different media, wave equation, intensity and energy, superposition principle, standing waves, vibrations on strings and in air columns, beats, and the Doppler effect. It connects oscillatory motion with energy transfer through media and frequently appears in both single-concept and multi-concept problems. Mastery of wave equations, standing wave patterns, and Doppler effect is essential for competitive exams.

## 1. Basic Ideas of Wave Motion
### Concepts
- Wave motion involves transfer of disturbance (energy) from one point to the other with the particles of medium oscillating about their mean positions
- The particles of the medium do not themselves travel along with the wave; they oscillate back and forth about some equilibrium position as the wave passes by. Only the disturbance is propagated
- Mechanical waves (elastic waves) require a medium to travel; electromagnetic waves do not require any medium and can travel in vacuum
- If a stone is dropped in a pool of water, a disturbance is created where it enters the surface and spreads out, setting neighbouring particles into motion. The particles oscillate over short paths about their initial position, and as a result a wave moves through the medium. The medium as a whole does not go in the direction of the motion of the wave

### Formulas
- Wave speed (general relation): `c = v * lambda` where v is frequency and lambda is wavelength
- `v = 1/T` where T is the time period

### Key Diagram: Wave Propagation in a Medium
- A sinusoidal wave travelling along a string showing particles oscillating perpendicular to the direction of wave motion (transverse wave). Crests (upward peaks) and troughs (downward peaks) are marked. Single arrows show particle oscillation; double arrows show direction of wave motion [SVG-REF]

### Important Notes
- Wave speed is completely different from particle speed. Particle speed is the speed of vibrating particles in the medium; wave speed is the speed with which the disturbance propagates
- The medium as a whole does not move in the direction of wave propagation
- Mechanical waves require a material medium; electromagnetic waves do not

---

## 2. Transverse and Longitudinal Waves
### Concepts

#### (a) Transverse Waves
- In transverse waves, the particles of the medium oscillate perpendicular to the direction in which the wave travels
- Travelling waves on a tight rope are transverse waves. Disturbance travels along the rope in the form of crests (upward peaks) and troughs (downward peaks)
- Transverse waves require a shearing force in the medium. Hence transverse waves can be propagated only in the medium which will support a shearing stress, i.e., mainly solids
- Speed of transverse waves in a tight string: `c = sqrt(T/m)` where T is the tension in the string and m is the mass per unit length of the string
- Transverse wave speed in a string can also be written as: `c = sqrt(T/(A*d))` where A is the cross-sectional area and d is the density

#### (b) Longitudinal Waves
- In longitudinal waves, the oscillation of the particles is parallel to the direction in which the wave travels
- Disturbance travelling in a spring parallel to its length, pressure variation propagating in a liquid, sound waves travelling in a medium are examples of longitudinal waves
- Compressions (crowding together of molecules) and rarefactions (spreading out of molecules) travel along the medium. The pressure at a compression point is higher and at a rarefaction point is lower
- Longitudinal waves do not require shearing stress and hence can travel in any elastic medium: solid, liquid and gases

### Formulas
- Speed of transverse waves in a tight string: `c = sqrt(T/m)`
- Speed of longitudinal waves in a liquid: `c = sqrt(B/d)` where B is the Bulk Modulus and d is the density
- Speed of longitudinal waves in a gas: `c = sqrt(gamma * P / rho)` where gamma is the adiabatic index, P is pressure, rho is the density (Laplace's correction to Newton's formula)
- Speed of longitudinal waves in a solid rod: `c = sqrt(Y/d)` where Y is Young's modulus and d is the density
- Speed of longitudinal waves in a string: `c = sqrt(Y/d)`
- Relation between transverse and longitudinal speed in a string: if longitudinal speed is n times transverse speed, then `sqrt(Y/d) = n * sqrt(T/(A*d))` => `stress = T/A = Y/n^2`

### Key Diagram: Transverse vs Longitudinal Waves
- (a) Transverse wave on a rope: particles oscillate up and down, wave moves horizontally. Crests and troughs marked [SVG-REF]
- (b) Longitudinal wave in a spring/air column: particles oscillate along the direction of wave propagation. Compressions (C) and rarefactions (R) marked [SVG-REF]

### Important Notes
- Transverse waves can only propagate in media that support shearing stress (solids and surfaces of liquids)
- Longitudinal waves can propagate in solids, liquids and gases
- Sound waves in air are longitudinal waves
- Newton assumed isothermal process for sound in air: `c = sqrt(P/rho)` which gave 280 m/s (incorrect). Laplace corrected this using adiabatic process: `c = sqrt(gamma * P/rho)` which gives 331.6 m/s at NTP (correct)
- Effect of temperature on speed of sound: `c proportional to sqrt(T)` => `c2/c1 = sqrt(T2/T1)` where T is absolute temperature
- Using ideal gas law `P/rho = RT/M`: speed of sound in a gas = `sqrt(gamma * R * T / M)` where M is molecular mass

### Worked Example
**Q:** Calculate the velocity of sound in air at N.T.P. The density of air at N.T.P. is 1.29 gm/l. Assume air to be diatomic with gamma = 1.4. Hence calculate the velocity of sound in air at 27 degrees C.

**A:**
Step 1: Velocity of sound in air = `sqrt(gamma * P / rho) = sqrt(1.4 x 1.013 x 10^5 / 1.29) = 331.6 m/s`
Step 2: Speed of sound is proportional to `sqrt(T)` (absolute temperature)
Step 3: `c2/c1 = sqrt(T1/T2)` where T1 = 273 + 27 = 300 K, T2 = 273 K
Step 4: `c2 = 331.6 * sqrt(300/273) = 347.6 m/s`

---

## 3. Wave Properties
### Concepts
- **Wave Speed (c):** The speed with which the disturbance (or wave) propagates in the medium. It depends on the medium, not on the source
- **Wave Frequency (v):** The frequency with which the particles of the medium oscillate. In transverse waves, frequency is the number of crests (or troughs) that pass through a point in one second. In longitudinal waves, it is the number of compressions (or rarefactions) that pass through a point in one second
- **Time Period (T):** The time period of the oscillation of the particles in the medium is the time period of the wave
- **Amplitude (A):** Amplitude of the wave is the same as the amplitude of the oscillating particles
- **Wavelength (lambda):** The distance between two consecutive crests (or compressions) in a wave
- **Phase:** When a wave passes through a medium, all particles oscillate with the same frequency, but they reach corresponding positions in their path at different time instants

### Formulas
- `c = v * lambda` (wave speed = frequency x wavelength)
- `v = 1/T`
- Particles in same phase: distance between them = `0, lambda, 2*lambda, 3*lambda, ..., n*lambda`
- Particles in opposite phase: distance between them = `lambda/2, 3*lambda/2, 5*lambda/2, ..., (2n-1)*lambda/2`

### Key Diagram: Wave Properties
- A sinusoidal wave showing wavelength lambda, amplitude A, particles P (at crest), Q (at mean position), R (at trough). P and the particle one wavelength away are in same phase; P and R are in opposite phase [SVG-REF]

### Important Notes
- Two particles are in same phase if they have the same position and same velocity at all time instants (phase difference is an even multiple of pi)
- Two particles are in opposite phase (exactly out of phase) if their displacements from mean position are equal in magnitude but opposite in direction (phase difference is an odd multiple of pi)
- Wave speed depends on the medium; frequency depends on the source
- When a wave passes from one medium to another, its frequency remains the same but wavelength and speed change

---

## 4. Wave Equation
### Concepts

#### (I) Transverse wave travelling in a tight string
- If a transverse wave is travelling towards right in a tight string lying along X-axis, and we take one point on the string as origin O, the displacement (y) of any particle P located at X-coordinate (x) at an instant t is given by:
  `y(x, t) = A sin(2*pi*x/lambda - 2*pi*t/T + phi_0)`
- phi_0 depends upon initial conditions (at t = 0) and is called the initial phase
- The angle `phi = 2*pi*x/lambda - 2*pi*t/T + phi_0` is called the phase angle and represents the phase of the particle located at x at time instant t

#### Equivalent forms of the wave equation:
- `y(x, t) = A sin(kx - omega*t + phi_0)`
- `y(x, t) = A sin((2*pi/lambda)(x - c*t) + phi_0)`
- where `k = 2*pi/lambda` (angular wave number) and `omega = 2*pi/T = 2*pi*v` (angular frequency)

#### Phase difference between two particles:
- `Delta_phi = phi_1 - phi_2 = (2*pi/lambda)(x_1 - x_2) = (2*pi/lambda) * Delta_x`
- Same phase: `Delta_phi = 0, 2*pi, 4*pi, ...` for `Delta_x = 0, lambda, 2*lambda, ...`
- Opposite phase: `Delta_phi = pi, 3*pi, 5*pi, ...` for `Delta_x = lambda/2, 3*lambda/2, ...`

#### Particle velocity:
- `v_p = (dy/dt) at constant x = -omega * A * cos(kx - omega*t + phi_0)`
- Maximum particle velocity = `omega * A`

#### (II) General Form of wave Equation
- Any equation of the form `y = f(ax +/- bt)` (where a and b are positive constants) is called a wave equation if y is finite for all x and t
- '+' sign indicates left-travelling wave; '-' sign indicates right-travelling wave
- Wave speed = `b/a`; Angular wave number = `a`; Angular frequency = `b`

### Formulas
- `y(x, t) = A sin(kx - omega*t + phi_0)` (wave travelling in +ve X direction)
- `y(x, t) = A sin(kx + omega*t + phi_0)` (wave travelling in -ve X direction)
- `k = 2*pi/lambda` (angular wave number)
- `omega = 2*pi/T = 2*pi*v` (angular frequency)
- Wave speed: `c = omega/k = v*lambda = b/a` (for general form)
- Phase difference: `Delta_phi = (2*pi/lambda) * Delta_x`
- Particle velocity: `v_p = -omega * A * cos(kx - omega*t + phi_0)`
- Maximum particle speed: `v_p(max) = omega * A = 2*pi*v*A`

### Key Diagram: Transverse Wave on a String
- A sinusoidal wave on a string along the X-axis, with origin O, a particle P at position (x, y), showing wave motion direction (towards +ve X), particle oscillation direction (perpendicular to X-axis). Wavelength and amplitude marked [SVG-REF]

### Important Notes
- For a wave travelling in +ve X direction, use '-' sign between kx and omega*t terms
- For a wave travelling in -ve X direction, use '+' sign between kx and omega*t terms
- The shape of the disturbance does not change during propagation (for a non-dispersive medium)
- Particle velocity and wave velocity are different quantities: `v_p = -(wave speed) * (dy/dx)`

### Worked Example
**Q:** A transverse wave of wavelength 50 cm is travelling towards +ve X-axis along a string whose linear density is 0.05 g/cm. The tension in the string is 450 N. At t = 0, the particle at x = 0 is passing through its mean position with an upward velocity. Form an equation describing the wave. The amplitude of the wave is 2.5 cm.

**A:**
Step 1: `k = 2*pi/lambda = 2*pi/0.5 = 4*pi` per metre; A = 2.5 cm
Step 2: Wave speed = `sqrt(T/m) = sqrt(450 / (0.05 x 10^-1)) = sqrt(450/0.005) = 300 m/s`
Step 3: `omega = 2*pi*c/lambda = 2*pi(300)/0.5 = 1200*pi rad/s`
Step 4: At x = 0, t = 0: y(0,0) = 0 => `A sin(phi_0) = 0` => `phi_0 = 0 or pi`
Step 5: `dy/dt at (0,0) > 0` => `-omega * A * cos(phi_0) > 0` => `cos(phi_0) < 0` => `phi_0 = pi`
Step 6: Equation: `y = 2.5 sin(4*pi*x - 1200*pi*t + pi)` cm

---

## 5. Intensity of a Wave
### Concepts
- In a travelling wave, energy is transferred through the medium in the direction in which the wave travels
- The transfer of energy per unit time per unit area perpendicular to the direction of motion of the wave is called the Intensity of the wave
- Intensity is proportional to the square of the amplitude: `I proportional to A^2`
- As the wave propagates, its energy is shared by a larger number of particles and the energy through unit area per second decreases. Hence intensity and amplitude decrease as we move away from the source
- Sound intensity level is measured in decibels (dB): `beta = 10 * log_10(I/I_0)` where `I_0 = 10^-12 W/m^2` is the threshold of hearing

### Formulas
- `I = 2 * pi^2 * c * rho * v^2 * A^2` where c is wave speed, rho is density, v is frequency, A is amplitude
- For a point source (three-dimensional wave): `I = P / (4*pi*r^2)` where P is the power of the source
- Combining: `I proportional to 1/r^2` and `A proportional to 1/r` (for a point source)
- Sound level in decibels: `beta = 10 * log_10(I/I_0)` where `I_0 = 10^-12 W/m^2`

### Key Diagram: Intensity Variation from a Point Source
- A point source S emitting waves in all directions. Concentric circles representing wavefronts. At distance r, the intensity I = P/(4*pi*r^2). Arrows showing the direction of energy flow (radially outward) [SVG-REF]

### Important Notes
- Intensity is proportional to the square of amplitude and square of frequency
- For a point source, intensity follows inverse square law with distance
- For a line source (cylindrical wave), `I proportional to 1/r` and `A proportional to 1/sqrt(r)`
- Threshold of hearing: `I_0 = 10^-12 W/m^2`; Threshold of pain: approximately `1 W/m^2` (120 dB)
- An increase of 10 dB corresponds to a 10-fold increase in intensity

### Worked Example
**Q:** A source of sound emits a total power of 10 W in all directions. Find the distance from the source where the sound level is 100 dB.

**A:**
Step 1: `beta = 100 dB`; `100 = 10 * log_10(I/I_0)` => `I = I_0 * 10^10`
Step 2: `I = 10^-12 x 10^10 = 10^-2 W/m^2`
Step 3: Using `I = P/(4*pi*r^2)`: `10^-2 = 10/(4*pi*r^2)`
Step 4: `r^2 = 10/(4*pi * 10^-2) = 1000/(4*pi)`
Step 5: `r = sqrt(1000/(4*pi)) = 8.92 m`

---

## 6. Principle of Superposition
### Concepts
- Two or more waves can propagate through the same medium simultaneously
- At the points where the two waves overlap, the resultant displacement of particle is the resultant of displacements of the individual waves: `y = y_1 + y_2 + ...`
- The two most important situations involving superposition are:
  - **(i) Stationary Waves:** Formed when two waves of same frequency travelling in opposite directions overlap
  - **(ii) Beats:** Formed when two waves of slightly different frequencies travelling in the same direction overlap

### Formulas
- Superposition principle: `y = y_1 + y_2 + ... + y_n`
- For two waves of same amplitude and frequency travelling in opposite directions: `y = (2A sin kx) cos(omega*t)` (stationary wave)
- For two waves of slightly different frequencies: `y = [2A cos pi(v_1 - v_2)t] sin pi(v_1 + v_2)t` (beats)

### Key Diagram: Superposition of Two Waves
- Two sinusoidal waves y_1 and y_2 overlapping, with the resultant wave y = y_1 + y_2 shown below. Constructive interference where crests align; destructive interference where crest meets trough [SVG-REF]

### Important Notes
- The principle of superposition is valid for all types of waves (mechanical and electromagnetic)
- After the waves pass through each other, they continue with their original properties (amplitude, frequency, wavelength) unchanged
- Superposition can lead to constructive interference (amplitudes add) or destructive interference (amplitudes cancel)

---

## 7. Standing (Stationary) Waves
### Concepts
- When two transverse waves of equal amplitude and frequency travel along a tight string in opposite directions, they form a standing wave
- The equation of the standing wave: taking `y_1 = A sin(kx - omega*t)` and `y_2 = A sin(kx + omega*t)`, the resultant is `y(x, t) = (2A sin kx) cos(omega*t)`
- The particle at location x oscillates in SHM with angular frequency omega and amplitude `2A sin kx`
- Since amplitude depends on location (x), particles at different positions oscillate with different amplitudes

#### Nodes
- Points where amplitude is zero (permanently at rest)
- `2A sin kx = 0` => `kx = 0, pi, 2*pi, ...` => `x = 0, lambda/2, lambda, 3*lambda/2, 2*lambda, ...`

#### Antinodes
- Points where amplitude is maximum (= 2A)
- `sin kx = +/- 1` => `kx = pi/2, 3*pi/2, ...` => `x = lambda/4, 3*lambda/4, 5*lambda/4, ...`

### Formulas
- Standing wave equation: `y(x, t) = 2A sin(kx) cos(omega*t)`
- Nodes at: `x = 0, lambda/2, lambda, 3*lambda/2, ...` (i.e., `x = n*lambda/2` for n = 0, 1, 2, ...)
- Antinodes at: `x = lambda/4, 3*lambda/4, 5*lambda/4, ...` (i.e., `x = (2n+1)*lambda/4`)
- Separation between two consecutive nodes or antinodes = `lambda/2`
- Separation between a node and the next antinode = `lambda/4`

### Key Diagram: Standing Wave Pattern
- A string showing nodes (N) and antinodes (A) alternately placed, with positions marked at x = 0, lambda/2, lambda, 3*lambda/2, etc. The shape of the standing wave at times t = 0, T/8, T/4, 3T/8, T/2 shown. Nodes remain stationary; the segment between two nodes oscillates up and down [SVG-REF]

### Important Notes
- Nodes are completely at rest; antinodes oscillate with maximum amplitude (2A)
- Points between a node and antinode have amplitude between 0 and 2A
- The portion between two consecutive nodes is often called a loop
- In a stationary wave, energy is not transferred from one point to the other (since nodes are at rest, they don't transfer energy)
- Nodes and antinodes are alternately placed

---

## 8. Vibrations on a Stretched String and in Air Columns
### Concepts

#### (a) Vibrations on a Stretched String
- Consider a string of length l stretched between two fixed supports. When a wave is set up, it travels in both directions while being reflected at each end
- For a stationary wave to exist, the fixed ends must be nodes
- The distance between two consecutive nodes is `lambda/2`, so if there are (n+1) nodes in all: `l = n*lambda/2`
- This gives: `lambda = 2l/n` and `v = c/lambda = nc/(2l)`
- The string can vibrate with frequencies that are integral multiples of the fundamental frequency v_0

#### Fundamental frequency and harmonics:
- `v_0 = (1/(2l)) * sqrt(T/m)` (fundamental frequency or first harmonic)
- The possible frequencies are: `v_0, 2*v_0, 3*v_0, ...`
- `n*v_0` is the n-th harmonic; `2*v_0` is the first overtone (second harmonic); `3*v_0` is the second overtone (third harmonic)

#### (b) Vibrations in an Air Column -- Open Pipe (open at both ends)
- The open ends become antinodes because particles at the open end can oscillate freely
- If there are (n+1) antinodes: `l = n*lambda/2`
- `v = c/lambda = nc/(2l)`
- Fundamental frequency: `v_0 = c/(2l)`
- The possible frequencies are: `v_0, 2*v_0, 3*v_0, ...` (all harmonics present)

#### (c) Vibrations in an Air Column -- Closed Pipe (closed at one end)
- The open end becomes an antinode and the closed end becomes a node
- The distance between a node and antinode is `lambda/4`
- If there are n nodes and n antinodes: `l = (2n-1)*lambda/4`
- `v = c/lambda = (2n-1)c/(4l)`
- Fundamental frequency: `v_0 = c/(4l)`
- The possible frequencies are: `v_0, 3*v_0, 5*v_0, ...` (only odd harmonics present)

### Formulas
- Stretched string: `v_n = n/(2l) * sqrt(T/m)` where n = 1, 2, 3, ...
- `v_0 = 1/(2l) * sqrt(T/m)` (fundamental frequency)
- Open pipe: `v_n = nc/(2l)` where n = 1, 2, 3, ... (all harmonics)
- Closed pipe: `v_n = (2n-1)c/(4l)` where n = 1, 2, 3, ... (odd harmonics only)
- For open pipe: `v_0 = c/(2l)`; For closed pipe: `v_0 = c/(4l)`
- Ratio of fundamental frequencies of open and closed pipes of same length: `v_0(open)/v_0(closed) = 2`

### Key Diagram: Harmonics on a String and in Pipes
- (a) String fixed at both ends: Fundamental mode (1 loop, N-A-N), Second harmonic (2 loops, N-A-N-A-N), Third harmonic (3 loops) [SVG-REF]
- (b) Open pipe: Fundamental (A-N-A), Second harmonic (A-N-A-N-A), Third harmonic (A-N-A-N-A-N-A) [SVG-REF]
- (c) Closed pipe: Fundamental (A-N), Third harmonic (A-N-A-N), Fifth harmonic (A-N-A-N-A-N) [SVG-REF]

### Important Notes
- For a closed pipe, only odd harmonics are present. This is a very important result for JEE
- For an open pipe, all harmonics are present
- For a stretched string, all harmonics are present (like open pipe)
- The n-th overtone = (n+1)-th harmonic for strings and open pipes
- The n-th overtone = (2n+1)-th harmonic for closed pipes
- End correction: In practice, the antinode forms slightly beyond the open end. End correction e approx 0.6R where R is the radius of the pipe. Effective length = l + e (for closed pipe) or l + 2e (for open pipe)

### Worked Example
**Q:** A steel wire 0.5 m long, of mass 5 gm, is stretched with a force of 400 N. (a) What is the minimum possible frequency with which this wire can vibrate? (b) Is it possible for the wire to vibrate with a frequency of 1100 Hz? (c) What is the highest overtone that a person can hear if he is capable of hearing up to 10,000 Hz?

**A:**
(a) Minimum frequency = fundamental frequency = `v_0 = (1/(2l)) * sqrt(T/m) = (1/(2 x 0.5)) * sqrt(400/(5 x 10^-3 x 2)) = 200 Hz`
(b) 1100/200 = 11/2, which is not an integer. The wire cannot vibrate with 1100 Hz.
(c) 10000 Hz = 50 x 200 = 50 v_0. The frequency of 10000 Hz is the 50th harmonic and hence 49th overtone. He can hear up to the 49th overtone.

---

## 9. Beats
### Concepts
- Beats are formed by the superposition of two waves of slightly different frequencies moving in the same direction
- If two sources of sound having slightly different frequencies are placed in the same medium, the resultant effect heard at any fixed position will consist of alternate loud and weak sounds
- Consider two waves of frequencies v_1 and v_2 and amplitude A at a point (x = 0):
  `y_1 = A sin(2*pi*v_1*t)` and `y_2 = A sin(2*pi*v_2*t)`
- Resultant: `y = [2A cos pi(v_1 - v_2)t] sin pi(v_1 + v_2)t`
- This represents a travelling wave whose frequency is `(v_1 + v_2)/2` and amplitude is `2A cos pi(v_1 - v_2)t`

#### Loud Sounds (maximum amplitude = +/- 2A):
- `cos pi(v_1 - v_2)t = +/- 1` => `t = 0, 1/(v_1 - v_2), 2/(v_1 - v_2), ...`

#### Weak Sounds (zero amplitude):
- `cos pi(v_1 - v_2)t = 0` => `t = 1/(2(v_1 - v_2)), 3/(2(v_1 - v_2)), ...`

- The interval between two loud (or weak) sounds = `1/(v_1 - v_2)`
- Number of loud sounds per second = `v_1 - v_2`
- **Beat frequency = `|v_1 - v_2|`**

### Formulas
- Beat frequency: `f_beat = |v_1 - v_2|`
- Resultant wave: `y = [2A cos pi(v_1 - v_2)t] sin pi(v_1 + v_2)t`
- Time between consecutive loud sounds = `1/|v_1 - v_2|`
- Time between consecutive weak sounds = `1/|v_1 - v_2|`

### Key Diagram: Beat Pattern
- Time axis showing amplitude variation of the resultant wave. Alternate loud (maximum amplitude) and weak (zero amplitude) regions marked. The envelope of the amplitude showing slow variation at frequency (v_1 - v_2) [SVG-REF]

### Important Notes
- `v_1 - v_2` must be small (0 to 8 Hz) so that loud and weak sound variations can be distinguished by the human ear
- Beats can be used to determine unknown frequency: if a tuning fork of known frequency v produces n beats per second with an unknown fork, the unknown frequency is `v +/- n`
- To decide between `v + n` or `v - n`: if filing (sharpening) the prong of the unknown fork (which increases its frequency) increases the beat frequency, then the unknown frequency was `v + n` (and vice versa)
- If loading (adding wax) to the unknown fork (decreasing its frequency) decreases the beat frequency, then the unknown frequency was `v + n`

### Worked Example
**Q:** A closed air column 32 cm long is in resonance with a tuning fork. Another open air column of length 66 cm is in resonance with another tuning fork. If the two forks produce 8 beats per second when sounded together, find (a) the speed of sound in air, (b) the frequencies of the forks.

**A:**
Step 1: For closed pipe: `v_1 = c/(4*l_1) = c/(4 x 32) = c/128`
Step 2: For open pipe: `v_2 = c/(2*l_2) = c/(2 x 66) = c/132`
Step 3: As v_1 > v_2, we have `v_1 - v_2 = 8`
Step 4: `c/128 - c/132 = 8` => `c(132 - 128)/(128 x 132) = 8`
Step 5: `c = (128 x 132 x 8)/4 = 33792 cm/s`
Step 6: `v_1 = 33792/128 = 264 Hz`; `v_2 = 33792/132 = 256 Hz`

---

## 10. Doppler Effect
### Concepts
- Consider a source of sound (S) producing sound waves of frequency v. If an observer (O) hears the sound waves, he will record a frequency same as v if both the source and the observer are stationary
- If the source or the observer or both are moving, the apparent frequency as heard by the observer will be different from v
- Let V_s and V_0 be the velocities of the source and observer respectively. If c is the speed of sound, the apparent frequency is:
  `v' = v * (c - V_0) / (c - V_s)`
- **Sign Convention:** V_0 and V_s are positive if they are directed from source to observer. They are taken as negative if directed from observer to source

#### Effect of medium velocity:
- If the medium is moving relative to the ground, the speed of the sound will be taken as `c + V_m` (V_m is the speed of the medium)
- V_m is positive if medium moves from source to observer
- The general formula becomes: `v' = v * (c + V_m - V_0) / (c + V_m - V_s)`

### Formulas
- Apparent frequency: `v' = v * (c - V_0) / (c - V_s)`
- With medium velocity: `v' = v * (c + V_m - V_0) / (c + V_m - V_s)`
- Source approaching stationary observer: `v' = v * c / (c - V_s)` (frequency increases)
- Source receding from stationary observer: `v' = v * c / (c + V_s)` (frequency decreases)
- Observer approaching stationary source: `v' = v * (c + V_0) / c` (frequency increases)
- Observer receding from stationary source: `v' = v * (c - V_0) / c` (frequency decreases)
- Apparent change in frequency when source crosses a stationary observer: `Delta_v = 2*f*V_s / v` (for V_s << c)

### Key Diagram: Doppler Effect
- (a) Source S moving towards stationary observer O with velocity V_s. Wavefronts compressed in front (shorter wavelength, higher frequency) and expanded behind (longer wavelength, lower frequency) [SVG-REF]
- (b) Observer O moving towards stationary source S. Observer intercepts more wavefronts per unit time [SVG-REF]

### Important Notes
- The positive direction is always taken from source to observer
- If V_s or V_0 is directed from source to observer, it is positive; if from observer to source, it is negative
- Doppler effect in sound depends on whether the source or observer is moving (unlike light, where only relative velocity matters)
- If source moves towards observer: apparent frequency increases, apparent wavelength decreases
- If observer moves towards source: apparent frequency increases, but wavelength remains unchanged
- When V_s = c (source moves at speed of sound), `v' -> infinity` (shock wave / sonic boom)
- The Doppler effect is used in SONAR, radar speed guns, and medical ultrasound

### Worked Example
**Q:** A railroad train is travelling at 30 m/s in still air. The frequency of the note emitted by locomotive whistle is 500 Hz. What is the frequency of the sound waves heard by a stationary listener (a) in front of the train, (b) behind the train? (Speed of sound = 345 m/s)

**A:**
(a) In front of train: source approaches observer. `V_s = +30 m/s`, `V_0 = 0`
`v' = 500 * (345 - 0)/(345 - 30) = 500 * 345/315 = 547.62 Hz`

(b) Behind the train: source recedes from observer. `V_s = -30 m/s`
`v' = 500 * (345 - 0)/(345 - (-30)) = 500 * 345/375 = 460 Hz`

---

## Important Formulas Summary

| Quantity | Formula |
|---|---|
| Wave speed (general) | `c = v * lambda` |
| Transverse wave speed (string) | `c = sqrt(T/m)` |
| Longitudinal wave speed (liquid) | `c = sqrt(B/d)` |
| Longitudinal wave speed (gas) | `c = sqrt(gamma * P / rho)` |
| Longitudinal wave speed (solid rod) | `c = sqrt(Y/d)` |
| Speed of sound (ideal gas) | `c = sqrt(gamma * R * T / M)` |
| Wave equation (+ve X) | `y = A sin(kx - omega*t + phi_0)` |
| Wave equation (-ve X) | `y = A sin(kx + omega*t + phi_0)` |
| Wave number | `k = 2*pi/lambda` |
| Angular frequency | `omega = 2*pi*v = 2*pi/T` |
| Phase difference | `Delta_phi = (2*pi/lambda) * Delta_x` |
| Particle velocity | `v_p = -omega * A * cos(kx - omega*t + phi_0)` |
| Max particle velocity | `v_p(max) = omega * A` |
| Intensity | `I = 2*pi^2 * c * rho * v^2 * A^2` |
| Intensity (point source) | `I = P/(4*pi*r^2)` |
| Sound level (dB) | `beta = 10 * log_10(I/I_0)`, `I_0 = 10^-12 W/m^2` |
| Standing wave equation | `y = 2A sin(kx) cos(omega*t)` |
| Nodes positions | `x = n*lambda/2` (n = 0, 1, 2, ...) |
| Antinodes positions | `x = (2n+1)*lambda/4` |
| String fundamental freq | `v_0 = (1/(2l)) * sqrt(T/m)` |
| String n-th harmonic | `v_n = n*v_0` |
| Open pipe fundamental | `v_0 = c/(2l)` |
| Open pipe harmonics | `v_n = n*v_0` (all harmonics) |
| Closed pipe fundamental | `v_0 = c/(4l)` |
| Closed pipe harmonics | `v_n = (2n-1)*v_0` (odd harmonics only) |
| Beat frequency | `f_beat = \|v_1 - v_2\|` |
| Doppler effect | `v' = v * (c - V_0)/(c - V_s)` |
| Doppler (with wind) | `v' = v * (c + V_m - V_0)/(c + V_m - V_s)` |

---

## Questions

### ANSWER KEYS (Reference)

**Workbook Answer Key -- Level 1 (Q1-75)**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | B | C | B | B | C | A | A | B | A | D | D | A | A | B | B |

| Q# | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | A | D | B | C | A | B | D | C | B | C | A | A | A | A | B |

| Q# | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | B | D | A | A | A | B | B | C | A | C | B | C | B | D | A |

| Q# | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | D | B | D | B | A | C | A | D | C | A | C | B | B | A | B |

| Q# | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | 5 | 1 | 0.02 | 2 | 2 | 6 | 8 | 2 | 3 | 8 | 1 | 1.7 | 3 | 2 | 172.7 |

**Workbook Answer Key -- Level 2 (Q76-115)**

| Q# | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | B | A | D | BCD | ABCD | B | B | C | C | AB | ABCD | ABC | ABD | B | A |

| Q# | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99 | 100 | 101 | 102 | 103 | 104 | 105 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | C | C | B | B | ABC | ABCD | ABCD | BC | A | B | C | A | ACD | B | C |

| Q# | 106 | 107 | 108 | 109 | 110 | 111 | 112 | 113 | 114 | 115 |
|---|---|---|---|---|---|---|---|---|---|---|
| Ans | C | B | C | A | ABCD | ACD | B | A | B | A |

**Workbook Answer Key -- Previous Years JEE Main (Q1-56)**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | C | C | B | B | B | A | C | B | D | D | A | B | D | A | C |

| Q# | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | C | B | D | A | B | C | D | A | D | B | A | A | A | B | C |

| Q# | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | D | B | A | D | C | A | C | A | B | A | C | A | A | D | C |

| Q# | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | D | C | A | C | C | D | C | D | C | A | -- |

**Workbook Answer Key -- Previous Years JEE Advanced (Q1-103)**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | B | A | C | C | A | A | A | D | A | B | B | D | D | B | B |

| Q# | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | C | B | A | B | B | D | B | D | A | A | A | A | B | A | B |

| Q# | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | B | D | ABCD | AC | AC | ABD | BD | AB | ABC | ABCD | BC | AC | BCD | ABCD | ABC |

| Q# | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | BD | AB | BC | ACD | ABD | BD | ABC | A | C | A | B | A | A |

| Q# | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 |
|---|---|---|---|---|---|---|---|---|---|---|
| Ans | A-P,T; B-P,S; C-Q,S; D-Q,R | A | B | 3.33 | 8 | 27.04 | 0.752 | 0.12 | 11 | 1.5 |

| Q# | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | (i)599Hz (ii)621Hz | 485.7Hz, 257.3Hz | (i)10^-3 sec (ii)0.5x10^-3 sec | (i)0.14s (ii)A_r=1.5cm, A_t=2cm | (i)400/189 (ii)3/4 | 336 | 30 | 5 | 7 | 5 | 3 | 6 | 5 or 5.0 or 5.00 | 8.12 or 8.13 |

| Q# | 83 | 84 | 85 | 86 | 87 | 88 |
|---|---|---|---|---|---|---|
| Ans | A(2*pi*v), A(2*pi*v)^2 | 0.125 | 240 | see key | 25:9 | 0.5 |

| Q# | 89 | 90 | 91 | 92 | 93 | 94 | 95 |
|---|---|---|---|---|---|---|---|
| Ans | (i)(2*pi/pi, b/2*pi) (ii)-0.8Acos(ax-bt) (iii)1.8Ab,0 | f | 6 | see key | (i)2 (ii)401 (iii)0.167 (iv)8.27x10^-5 V | 484 Hz to 403 Hz | 2V_b(V+V_m)f/((V^2-V_b^2)) |

| Q# | 96 | 97 | 98 | 99 | 100 | 101 | 102 | 103 |
|---|---|---|---|---|---|---|---|---|
| Ans | L_0=1+/-0.0067m, L_c=0.75m | (i)93.75cm (ii)DeltaP_0/sqrt(2) (iii)P_0 always (iv)(P_0+DeltaP_0)(P_0-DeltaP_0) | (i)3.2m,2.4m,1.6m,0.8m (ii)(a)dH/dt=(1.11x10^-2)sqrt(H) (b)43sec | (i)1.007x10^5 Hz (ii)1.03x10^5 Hz | False | False | True | False |

**In-Chapter Exercise A (from Section 1)**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|
| Ans | (a)3461.53m (b)2769.73m (c)1.153m/s | 0.12 m | (a)10m/s, 10*pi*s^-1, 1/5 s, 2m, pi*m^-1 (b)y=0.01sin(pi*x-10*pi*t+pi) (c)7.07x10^-3 m (d)-0.22m/s | 1044.36 m/s | B | A | A | [A-3][B-1][C-4][D-2] |

**In-Chapter Exercise B (from Section 2)**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | 7259 kg/m^3 | v=268.67Hz | 549Hz, 540Hz | 110 Hz | 2.14 m | 56 Hz | 161.78 Hz, 3 | 27.04 N | D | C | A | B | B | A | D |

**In-Chapter Exercise C (from Section 3)**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|
| Ans | 0.83 m/s | 1.5 m/s | 594 Hz, 495 Hz | 0.18 s | B | A | D | C |

**Miscellaneous Exercise (from Module)**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| Ans | B | C | B | D | C | D | A | ACD | C | D |

---

### WAVE MOTION: LEVEL 0 (EASY)
*Source: DTS-0 (CBSE Pattern)*

**VSA: Very Short Answer Type (1 mark)**

**1.** What is the minimum distance between two points in a wave having a phase difference 2*pi?

**2.** The density of oxygen is 16 times the density of hydrogen. What is the relation between the speeds of sound in two gases?

**3.** Two sound sources produce 12 beats in 4 seconds. By how much do their frequencies differ?

**4.** Given one use of beat phenomenon.

**5.** State the principle of superposition of waves.

**SA-I: Short Answer Type I (2 marks)**

**6.** State the factors on which the speed of a wave travelling along a stretched ideal string depends.

**7.** Velocity of sound in air at NPT is 332 m/s. What will be the velocity, when pressure is doubled and temperature is kept constant?

**8.** Two sounds of very close frequencies, say 256 Hz and 260 Hz are produced simultaneously. What is the frequency of resultant sound and also write the number of beats heard in one second?

**9.** Given below are some examples of wave motion. State in each case if the wave motion is transverse, longitudinal or a combination of both.
(i) Motion of a kink in a longitudinal spring produced by displacing one end of the spring sideways.
(ii) Waves produced in a cylinder containing a liquid by moving its piston back and forth.
(iii) Waves produced by a motorboat sailing in water.
(iv) Ultrasonic waves in air produced by a vibrating quartz crystal.

**10.** When a tuning fork is excited, molecules of air vibrate in accordance with the equation x = A cos(512*pi*t). When this tuning fork and another identical tuning fork loaded with a little wax are excited together, 4 beats are heard. What is the frequency of the second fork loaded with wax?

**11.** A SONAR system fixed in a submarine operates at a frequency 40.0 kHz. An enemy submarine moves towards the SONAR with a speed of 360 km/h. What is the frequency of sound reflected by the submarine? Take the speed of sound in water to be 1450 m/s.

**12.** A bat emits ultrasonic sound of frequency 100 kHz in air. If the sound meets a water surface, what is the wavelength of (i) the reflected sound, (ii) the transmitted sound? Speed of sound in air is 340 m/s and in water 1486 m/s.

**SA-II: Short Answer Type II (3 marks)**

**13.** A wave travelling along a string is described by y(x, t) = 0.005 sin(80.0x - 3.0t), in which the numerical constants are in SI units (0.005 m, 80.0 rad/m, and 3.0 rad/s). Calculate (i) the amplitude, (ii) the wavelength, and (iii) the period and frequency of the wave.

**14.** Two trains A and B approach a station from opposite sides, sounding their whistles. A stationary observer on the platform hears no beats. If the velocities of A and B are 15 m/s and 30 m/s respectively and the real frequency of the whistle of B is 600 Hz, find the real frequency of the whistle of A. (Velocity of sound = 330 m/s)

**15.** For the travelling harmonic wave y(x, t) = 2.0 cos 2*pi(10t - 0.0080x + 0.35), where x and y are in cm and t in s. Calculate the phase difference between oscillatory motion of two points separated by a distance of: (i) 4 m (ii) 0.5 m (iii) lambda/2 (iv) 3*lambda/4

**16.** (i) What is beat phenomenon?
(ii) A whistle revolves in a circle with angular velocity omega = 20 rad/s. If the frequency of the sound is 385 Hz and speed is 340 m/s, then find the frequency heard by the observer when the whistle is at B. [SVG-REF]

**17.** The transverse displacement of a string (clamped at its ends) is given by y(x, t) = 0.06 sin(2*pi/3 * x/3) cos(120*pi*t), where x, y are in m and t is in s. The length of the string is 1.5 m and its mass is 3.0 x 10^-2 kg. Answer the following:
(i) Does the function represent a travelling wave or a stationary wave?
(ii) Interpret the wave as a superposition of two waves travelling in opposite directions. What are the wavelength, frequency and speed of propagation of each wave?
(iii) Determine the tension in the string.

**18.** The equations of displacement of two waves are y_1 = 10 sin(3*pi*t + pi/3) and y_2 = 5[sin 3*pi*t + sqrt(3) cos 3*pi*t]. Find the ratio of their amplitudes.

**19.** Use the formula v = sqrt(gamma*P/rho) to explain why the speed of sound in air
(i) is independent of pressure,
(ii) increases with temperature,
(iii) increases with humidity

**20.** Two periodic waves of intensities I_1 and I_2 pass through a region at the same time in the same direction. What is the sum of the maximum and minimum intensities?

**21.** Explain why (or how):
(i) In a sound wave, a displacement node is a pressure antinode and vice versa.
(ii) Bats can ascertain distances, directions, nature and sizes of the obstacles without any eyes.
(iii) A violin note and sitar note may have the same frequency, yet we can distinguish between the two notes.

**22.** The patterns of standing waves formed on stretched string at two instants of time are shown in figure. The velocity of two waves superimposing to form stationary waves is 360 m/s and their frequencies are 256 Hz. [SVG-REF]
(i) Calculate the time at which the second curve is plotted.
(ii) Mark nodes and antinodes on the curve.
(iii) Calculate the distance between A' and C'.

**23.** Two sitars A and B, playing the note 'Dha' are slightly out of tune and produce beats of frequency 5 Hz. Then the tension of the string B is slightly increased and the beat frequency is found to decrease to 3 Hz. What is the original frequency of B if the frequency of A is 427 Hz?

**24.** Vini, while doing the resonance column experiment, notices that when the conditions became suitable for 'resonance', the loudness of sound became maximum and it remained sustained for long. On coming back home, she narrated her observations to her grandfather. Though he was unable to understand the physics of the phenomenon, he realised that similar things happen in real life too. He told Vini that when we align, orient, our thinking and actions, in an adaptive and accommodating way, our life becomes more vibrant, happy and productive. We are then in resonance with the environment and the society.
(i) Mention two values displayed by: (a) Vini (b) her grandfather
(ii) Sketch the standing waves, produced in the (closed tube) air column, for first and third harmonics, showing the positions of the node and antinode.

**LA: Long Answer Type (5 marks)**

**25.** For the wave described by y(x, t) = 3.0 sin(36t + 0.018x + pi/4). Plot the displacement (y) versus (t) graphs for x = 0, 2 and 4 cm. What are the shapes of these graphs? In which aspects does the oscillatory motion in travelling wave differ from one point to another: amplitude, frequency or phase?

**26.** Discuss Newton's formula for velocity of sound in air medium and apply Laplace's correction.

**27.** Explain Doppler effect in sound. Derive the expression for the apparent frequency of sound when the source and listener are
(i) approaching each other.
(ii) moving away from each other.

---

### WAVE MOTION: LEVEL 1

#### DTS-1: Travelling Wave, Speed of Wave
*Source: DTS-1 (Travelling wave, Speed of wave)*

**1.** Equation of a progressive wave is given by, y = 4 sin[pi(t/5 - x/9) + pi/6] where x and y are in metre. Then: (A) v = 1 m/s (B) lambda = 18 m (C) A = 0.04 m (D) f = 50 Hz

**2.** A transverse sinusoidal wave of wavelength 20 cm is moving along a string towards increasing x. The transverse displacement of the string particle at x = 0 as a function of time is shown in Figure. [SVG-REF] The equation of the wave with all the constants evaluated is: (A) y = (4.0 cm) sin(pi*x/10 - pi*t/5); x in cm and t in sec (B) y = (4.0 cm) sin(pi*x/10 + pi*t/5); x in cm and t in sec (C) y = (4.0 cm) sin(pi*x/10 - pi*t/5 + pi); x in cm and t in sec (D) y = (4.0 cm) cos(pi*x/10 - pi*t/5 + pi); x in cm and t in sec

**3.** The equation of a wave is given by y = 5 sin 10*pi(t - 0.01x). (All the quantities are expressed in SI units). The phase difference between the points separated by a distance of 10 m along the x-axis is: (A) pi/2 (B) pi (C) 2*pi (D) pi/4

**4.** The speed of propagation of a wave in a medium is 300 m/s. The equation of motion of point at x = 0 is given by y = 0.04 sin 600*pi*t (meter). The displacement of a point x = 75 cm at t = 0.01 s is: (A) 0.02 m (B) 0.04 m (C) Zero (D) 0.028 m

**5.** The displacement function of a wave traveling along positive x-direction is y = 1/(2 + 2x^2) at t = 0 and by y = 1/[2 + 2(x - 2)^2] at t = 2 s, where y and x are in metre. The velocity of the wave is: (A) 2 m/s (B) 0.5 m/s (C) 1 m/s (D) 3 m/s

**6.** A transverse sinusoidal wave of amplitude a, wavelength lambda and frequency f is travelling on a stretched string. The maximum speed of any point on the string is v/10, where v is the speed of propagation of the wave. If a = 10^-3 m and v = 10 m/s, then the value of lambda is: (A) 2*pi x 10^-2 m (B) 10^-3 m (C) pi x 10^-3 m (D) 2*pi x 10^-3 m

**7.** The equation of a transverse wave propagating in a string is y = 0.02 sin(x - 30t). Where x and y are in metre and t is in second. If linear density of the string is 1.3 x 10^-4 kg/m, then the tension in the string is: (A) 0.12 N (B) 1.2 N (C) 12 N (D) 120 N

**8.** A heavy rope is suspended from a rigid support. A wave pulse is set up at the lower end, then: (A) the pulse will travel with uniform speed (B) the pulse will travel with increasing speed (C) the pulse will travel with decreasing speed (D) the pulse cannot travel through the rope

**9.** In figure, the string has a mass of 14 kg. How much time will it take for a transverse disturbance produced at fixed support to reach the pulley? [SVG-REF] (A) 0.91 sec (B) 1.20 sec (C) 1.59 sec (D) 2.35 sec

**10.** The adiabatic constant for oxygen as well as hydrogen is 1.4. If the speed of sound in oxygen is 470 m/s, what will be the speed in hydrogen at the same temperature and pressure? (A) 940 m/s (B) 1053 m/s (C) 1260 m/s (D) 1880 m/s

**11.** The angle between wave velocity and particle velocity in a traveling wave may be: (A) zero (B) pi/2 (C) pi (D) All of these

**12.** A 100 Hz sinusoidal wave is traveling in the positive x-direction along a string with a linear mass density of 3.5 x 10^-3 kg/m and a tension of 35 N. At time t = 0, the point x = 0, has maximum displacement in the positive y direction. Next when this point has zero displacement the slope of the string at x = 0 is pi/20. Which of the following expression represent(s) the displacement of string as function of x (in metre) and t (in second)? (A) y = 0.025 cos(200*pi*t - 2*pi*x) (B) y = 0.5 cos(200*pi*t - 2*pi*x) (C) y = 0.025 cos(100*pi*t - 10*pi*x) (D) y = 0.5 cos(100*pi*t - 10*pi*x)

**13.** The displacement vs time graph for two waves A and B which travel along the same string are shown in the figure. [SVG-REF] What is the intensity ratio I_A/I_B? (A) 1 (B) 1.5 (C) 2 (D) 3

**14.** Loudness of sound from an isotopic point source at distance of 10 m is 20 dB. Find the loudness (in dB) at a point at a distance 10^(7/4) m from the source. (A) 3 (B) 5 (C) 7 (D) 9

**15.** Wave pulse on a string shown in figure is moving to the right without changing shape. Consider two particles at position x_1 = 1.5 m and x_2 = 2.5 m. Their transverse velocities at the moment shown in figure are along directions: [SVG-REF] (A) Positive y-axis and positive y-axis respectively (B) Negative y-axis and positive y-axis respectively (C) Positive y-axis and negative y-axis respectively (D) Negative y-axis and negative y-axis respectively

#### DTS-2: Interference, Reflection, Standing Wave on String
*Source: DTS-2 (Interference of wave, Reflection of wave, Standing wave on String)*

**16.** Two pulses are travelling in the same medium and are at positions, at a time as shown in figure. [SVG-REF] Subsequent possible interference pattern at different times are shown below. Write the correct order of pattern from the time when two pulses meet each other. (A) II -> I -> III -> IV (B) I -> II -> III -> IV (C) II -> III -> IV -> I (D) None as shape of each pulse will be altered as pulses passed each other

**17.** The equation of a plane progressive wave is y = 0.04 sin 4*pi[t - x/20]. When it is reflected at a denser medium (medium with lesser wave velocity) at x = 0, intensity of reflected wave is 81% of that of the incident wave. The equation of the reflected wave is: (A) y = 0.04 sin 4*pi(t - x/20) (B) y = 0.04 sin 4*pi(t + x/20) (C) y = +0.036 sin 4*pi(t + x/20) (D) y = -0.036 sin 4*pi(t + x/20)

**18.** The displacement y of a particle executing periodic motion is given by: y = 4 cos^2(t/2) sin(1000t). This expression may be considered to be a result of the superposition of n independent harmonic motions, where n is: (A) two (B) three (C) four (D) five

**19.** Two transverse waves A and B superimpose to produce a node at x = 0. If the equation of wave A is y = a cos(kx + omega*t), then the equation of wave B is: (A) +a cos(kx - omega*t) (B) -a cos(kx + omega*t) (C) -a cos(kx - omega*t) (D) +a cos(omega*t - kx)

**20.** Three one dimensional mechanical waves in an elastic medium given as: y_1 = 3A sin(omega*t - kx); y_2 = A sin(omega*t - kx + pi) and y_3 = 2A sin(omega*t + kx) are superimposed with each other. The maximum displacement amplitude of the medium particle would be: (A) 4A (B) 3A (C) 2A (D) A

**21.** In an experiment it was found that string vibrates in n loops when a mass M is placed on the pan. What mass should be placed on the pan to make it vibrate in 2n loops with same frequency? (Neglect the mass of pan) (A) 2M (B) M/4 (C) 4M (D) M/2

**22.** A string of length 1 m and linear mass density 0.01 kg/m is stretched to a tension of 100 N. When both ends of the string are fixed, the three lowest frequencies for standing wave are f_1, f_2 and f_3. When only one end of the string is fixed, the three lowest frequencies for standing wave are n_1, n_2 and n_3. Then: (A) n_3 = 5n_1 = f_3 = 125 Hz (B) f_3 = 5f_1 = n_2 = 125 Hz (C) f_3 = 2n_2 = 3f_1 = 150 Hz (D) 3f_1 = n_2 = f_3 = 75 Hz

**23.** Three resonant frequencies of string with both rigid ends are 90, 150 and 210 Hz. If the length of the string is 80 cm, what is the maximum possible speed of the transverse wave in the string? (A) 45 m/s (B) 75 m/s (C) 48 m/s (D) 80 m/s

**24.** For a certain stretched string, three consecutive resonance frequencies are observed as 105, 175, 245 Hz respectively. The string is . . . . . . . and fundamental frequency is: (A) fixed at both ends, 35 Hz (B) fixed at one end, 35 Hz (C) fixed at both ends, 52.5 Hz (D) fixed at one end, 52.5 Hz

**25.** The equation for the vibration of a string fixed at both ends vibrating in its second harmonic is given by y = 2 sin[0.3 cm^-1 x] cos[(500*pi s^-1)t] cm. The length of the string is: (A) 24.6 cm (B) 12.5 cm (C) 20.6 cm (D) 15.7 cm

**26.** A string of mass 0.2 kg/m has length l = 0.6 m is fixed at both ends and stretched such that it has a tension of 80 N. The string vibrates in 3 segments with maximum amplitude of 0.5 cm. The maximum transverse velocity amplitude is: (A) 1.57 m/s (B) 6.28 m/s (C) 3.14 m/s (D) 9.42 m/s

**27.** The equation of a stationary wave is y = 0.8 cos(pi*x/20) sin 200*pi*t where x is in cm, and t is in s. The separation between consecutive nodes will be: (A) 20 cm (B) 10 cm (C) 40 cm (D) 30 cm

**28.** A sonometer wire has a length 114 cm between two fixed ends. Where should two bridges be placed so as to divide the wire into three segments whose fundamental frequencies are in the ratio 1:3:4? (A) l_1 = 72 cm, l_2 = 24 cm, l_3 = 18 cm (B) l_1 = 60 cm, l_2 = 40 cm, l_3 = 15 cm (C) l_1 = 52 cm, l_2 = 30 cm, l_3 = 32 cm (D) l_1 = 65 cm, l_2 = 30 cm, l_3 = 19 cm

**29.** A sonometer wire resonates with a given tuning fork forming standing waves with five antinodes between the two bridges when a mass of 9 kg is suspended from the wire. When this mass is replaced by a mass M, the wire resonates with the same tuning fork forming three antinodes for the same positions of the bridges. The value of M is: (A) 25 kg (B) 5 kg (C) 12.5 kg (D) 1/25 kg

**30.** A string of length l is fixed at both ends and is vibrating in second harmonic. The amplitude at antinode is 5 mm. The amplitude of a particle at distance l/8 from the fixed end is: (A) 5*sqrt(2) mm (B) 5/sqrt(2) mm (C) 5 mm (D) 10/sqrt(2) mm

#### DTS-3: Organ Pipes, Beats
*Source: DTS-3 (Organ Pipes, Beats)*

**31.** An open and a closed pipe have same length. The ratio of frequencies of their nth overtone is: (A) (n+1)/(2n+1) (B) 2(n+1)/(2n+1) (C) n/(2n+1) (D) (n+1)/(2n)

**32.** Two pipes have each of length 2 m. One is closed at one end and the other is open at both ends. The speed of sound in air is 340 m/s. The frequency at which both can resonate is: (A) 340 Hz (B) 510 Hz (C) 42.5 Hz (D) None of these

**33.** Velocity of sound in an open organ pipe is 330 m/s. The frequency of wave is 1.1 kHz and the length of tube is 30 cm. To which harmonic does this frequency correspond? (A) 2nd (B) 3rd (C) 4th (D) 5th

**34.** An open pipe is suddenly closed at one end with the result that the frequency of third harmonic of the closed pipe is found to be higher by 100 Hz than the fundamental frequency of the open pipe. The fundamental frequency of the open pipe is: (A) 200 Hz (B) 300 Hz (C) 240 Hz (D) 480 Hz

**35.** Velocity of sound in an open organ pipe is 330 m/s. The frequency of wave is 1.1 kHz and the length of tube is 30 cm. To which harmonic does this frequency correspond? (A) 2nd (B) 3rd (C) 4th (D) 5th

**36.** An open pipe of sufficient length is dipping in water with a speed v vertically. If at any instant l is length of tube above water then the rate at which fundamental frequency of pipe changes, is: (Speed of sound = c) [SVG-REF] (A) cv/(2l^2) (B) cv/(4l^2) (C) c/(2v^2 l^2) (D) c/(4v^2 l^2)

**37.** A closed organ pipe and an open organ pipe of same length produce 2 beats when they are set into vibrations simultaneously in their fundamental mode. The length of open organ pipe is now halved and of closed organ pipe is doubled, the number of beats produced will be: (A) 8 (B) 7 (C) 4 (D) 2

**38.** There are three sources of equal intensity with frequencies 400, 401 and 402 vibrations per second. The number of beats heard per second is: (A) 0 (B) 1 (C) 2 (D) 3

**39.** The frequency of a man's voice is 300 Hz and its wavelength is 1 m. If the wavelength of a child's voice is 1.5 m, then the frequency of the child's voice is: (A) 200 Hz (B) 150 Hz (C) 400 Hz (D) 350 Hz

**40.** A source of frequency 10 kHz when vibrated over the mouth of a closed organ pipe is in unison at 300 K. The beats produced when temperature rises by 1 K is: (A) 30 Hz (B) 13.33 Hz (C) 16.67 Hz (D) 40 Hz

**41.** Two instruments having stretched strings are being played in unison. When the tension in one of the instruments is increased by 1%, 3 beats are produced in 2 s. The initial frequency of vibration of each wire is: (A) 600 Hz (B) 300 Hz (C) 200 Hz (D) 150 Hz

**42.** For a certain organ pipe three successive resonance frequencies are observed at 425 Hz, 595 Hz and 765 Hz respectively. If the speed of sound in air is 340 m/s, then the length of the pipe is: (A) 2.0 m (B) 0.4 m (C) 1.0 m (D) 0.2 m

**43.** An open pipe 40 cm long and a closed pipe 31 cm long, both having same diameter, are producing their first overtone, and these are in unison. The end correction of these pipes is: (A) 1 cm (B) 2 cm (C) 1.5 cm (D) 0.5 cm

**44.** A long glass tube is held vertically in water. A tuning fork is struck and held over the tube. Strong resonances are observed at two successive lengths 0.50 m and 0.84 m above the surface of water. If the velocity of sound is 340 m/s, then the frequency of the tuning fork is: (A) 128 Hz (B) 256 Hz (C) 384 Hz (D) 500 Hz

**45.** Assertion: Quality of sound produced by an open pipe is better than a closed pipe. Reason: Open pipe produces all harmonics but a closed pipe does not. (A) Statement-1 is True, Statement-2 is True and Statement-2 is a correct explanation for Statement-1 (B) Statement-1 is True, Statement-2 is True and Statement-2 is NOT a correct explanation for Statement-1 (C) Statement-1 is True, Statement-2 is False (D) Statement-1 is False, Statement-2 is True

#### DTS-4: Doppler's Effect
*Source: DTS-4 (Doppler's Effect)*

**46.** A whistle emitting a sound of frequency 450 Hz approaches a stationary observer at a speed of 33 m/s. Velocity of sound is 330 m/s. The frequency heard by the observer, in Hz, is: (A) 409 (B) 429 (C) 517 (D) 500

**47.** An observer standing near a railway crossing receives frequency of 2.2 kHz and 1.8 kHz when the train approaches and recedes from the observer. The velocity of the train (in m/s). (The speed of the sound in air is 300 m/s). (A) 15 (B) 30 (C) 35 (D) 40

**48.** The engine of a train sounds a whistle at frequency v. The frequency heard by a passenger is: (A) > v (B) < v (C) = 1/v (D) = v

**49.** Two sound sources are moving in opposite directions with velocities v_1 and v_2 (v_1 > v_2). Both are moving away from a stationary observer. The frequency of both the sources is 900 Hz. What is the value of v_1 - v_2 so that the beat frequency observed by the observer is 6 Hz? Speed of sound v = 300 m/s. Given that v_1 and v_2 << v. (A) 1 m/s (B) 2 m/s (C) 3 m/s (D) 4 m/s

**50.** A sonometer wire under tension of 64 N vibrating in its fundamental mode is in resonance with a vibrating tuning fork. The vibrating portion of the sonometer wire has a length of 10 cm and a mass of 1 gm. The vibrating tuning fork is now moved away from the vibrating wire with a constant speed and an observer standing near the sonometer hears one beat per second. Then the speed v with which the tuning fork is moved is (Consider the speed of sound in air is 300 m/s). (A) 0.75 m/s (B) 0.50 m/s (C) 0.30 m/s (D) 0.25 m/s

**51.** A stationary observer receives sonic oscillations from two tuning forks, one of which approaches and the other recedes with same speed. As this takes place the observer hears the beat frequency of 2 Hz. Then the speed of each tuning fork is: (if their oscillation frequency is 680 Hz and the velocity of sound in air is 340 m/s) (A) 1 m/s (B) 2 m/s (C) 0.5 m/s (D) 1.5 m/s

**52.** A wall is moving with velocity u and a source of sound moves with velocity u/2 in the same direction as shown in the figure. [SVG-REF] Assuming that the sound travels with velocity 10u, the ratio of incident sound wavelength on the wall to the reflected sound wavelength by the wall is equal to: (A) 9:11 (B) 11:9 (C) 4:5 (D) 5:4

**53.** A disc of radius R is rotating uniformly with angular frequency omega. A source of sound is fixed to the rim of the disc. The ratio of maximum to minimum frequency heard by a stationary observer, far away from the disc and in the plane of the disc is: (v = speed of sound) (A) v/(v - R*omega) (B) v/(v + R*omega) (C) (v - R*omega)/(v + R*omega) (D) (v + R*omega)/(v - R*omega)

**54.** A source is moving with constant speed v_s = 20 m/s towards a stationary observer due east of the source. Wind is blowing at the speed of 20 m/s at 60 degrees north of east. The source has frequency 500 Hz. Speed of sound = 300 m/s. The frequency registered by the observer is approximately: (A) 541 Hz (B) 552 Hz (C) 534 Hz (D) 517 Hz

**55.** A tuning fork of frequency 512 Hz is vibrated with a sonometer wire and 6 beats per second are heard. The beat frequency reduces if the tension in the string is slightly increased. The original frequency of vibration of the string is: (A) 506 Hz (B) 512 Hz (C) 518 Hz (D) 524 Hz

**56.** A small source of sound moves on a circle as shown in figure and an observer is sitting at O. [SVG-REF] Let v_1, v_2, v_3 be the frequencies heard of pulses which were emitted when the source was at A, B and C respectively. Then: (A) v_1 > v_2 > v_3 (B) v_1 = v_2 > v_3 (C) v_2 > v_3 > v_1 (D) v_1 > v_3 > v_2

**57.** If the source is moving towards right, wave front of sound waves get modified to: [SVG-REF] (A) compressed in front, expanded behind (B) concentric circles (C) shifted circles with compression in front (D) None of these

**58.** A source of sound S is travelling at (100/3) m/s along a road, towards a point A. When the source is 3 m away from A, a person standing at a point O on a road perpendicular to AS hears a sound of frequency v'. The distance of O from A at that time is 4 m. If the original frequency is 640 Hz, then the value of v' is (velocity of sound is 340 m/s): [SVG-REF] (A) 620 Hz (B) 680 Hz (C) 720 Hz (D) 840 Hz

**59.** When a train is approaching the observer, the frequency of the whistle is 100 cps. When it has passed the observer, it is 50 cps. The frequency when the observer moves with the train, is: (A) 66.67 cps (B) 33.33 cps (C) 30 cps (D) 25 cps

**60.** A motorcycle starts from rest and accelerates along a straight line at 2.2 m/s^2. The speed of sound is 330 m/s. A siren at the starting point remains stationary. When the driver hears the frequency of the siren at 90% of when the motorcycle is stationary, the distance travelled by the motorcyclist is: (A) 123.75 m (B) 247.5 m (C) 495 m (D) 990 m

#### DTS-5: Mixed (Numerical Answer Type)
*Source: DTS-5 NAT (Mixed Numerical Questions)*

**61.** A plane progressive wave of frequency 25 Hz, amplitude 2.5 x 10^-5 m, and initial phase zero moves along the negative x-axis with a velocity of 300 m/sec. A and B are two points at a separation of 6 m in the line of propagation. The phase difference is n*pi. Find n. **Ans: 5**

**62.** The average power transmitted across a cross section by two sound waves moving in the same direction is equal. The wavelengths of two sound waves are in the ratio of 1:2. Find the ratio of their pressure amplitudes. **Ans: 1**

**63.** The speed of a transverse wave, going on a wire of length 50 cm and mass 5 g is 80 m/s. The area of cross section of wire is 1.0 mm^2 and its Young's modulus is 16 x 10^11 N/m^2. Find the extension of the wire over its natural length (in mm). **Ans: 0.02**

**64.** A wave pulse passing on a string with a speed of 40 cm/s in the negative x-direction has its maximum at x = 0 at t = 0. Where will this maximum be located at t = 5 s? Write the coordinate x = -______ m. **Ans: 2**

**65.** A particle on a stretched string supporting a travelling wave, takes 5.0 ms to move from its mean position to the extreme position. The distance between two consecutive particles, which are at their mean positions, is 2.0 cm. Find the wave speed (in m/s). **Ans: 2**

**66.** The resultant loudness at a point P is n dB higher than the loudness of S_1 which is one of the two identical sounds S_1 and S_2 reaching at the point in phase. Find the value of n. (Take log 2 = 0.3) **Ans: 6**

**67.** An ambulance sounding a horn of frequency 256 Hz is moving towards a vertical wall with a velocity of 5 m/sec. If the speed of the sound is 330 m/sec, how many beats per second will be heard by an observer standing a few metres behind the ambulance? **Ans: 8**

**68.** The sound level at a point 5.0 m away from a point source is 40 dB. What will be the level (in x 10 dB) at a point 50 m away from the source? **Ans: 2**

**69.** If the intensity of sound is doubled, by how many decibels does the sound level increase? (in dB) (To the nearest integer) **Ans: 3**

**70.** A bullet goes past a person at a speed of 220 m/s. Find the fractional change in the frequency of the whistling sound (in terms of x 10^-1) heard by the person as the bullet crosses the person. Speed of sound in air is 330 m/s. **Ans: 8**

**71.** For a certain organ pipe, three successive resonance observed are 425, 595 and 765 Hz. Taking the speed of sound to be 340 m/sec, find the length of the pipe (in metres). **Ans: 1**

**72.** An ideal organ pipe resonates at frequencies of 50 Hz, 150 Hz, 250 Hz, ... Calculate the length of the pipe considering the speed of sound to be 340 m/sec (in metres). **Ans: 1.7**

**73.** In a mixture of gases, the average number of degrees of freedom per molecule is 6. The rms speed of the molecules of the gas is c. If velocity of sound in the gas is 2c/x; then value of x is **Ans: 3**

**74.** A glass tube of 1.0 m length is filled with water. The water can be drained out slowly at the bottom of the tube. A vibrating tuning fork of frequency 500 Hz is brought at the upper end of the tube and the velocity of sound is 300 m/sec. Find the number of resonances that can be obtained (nearly). **Ans: 2**

**75.** A closed organ pipe resonates in its fundamental mode at a frequency of 200 Hz with O_2 in the pipe at a certain temperature. If the pipe now contains 2 moles of O_2 and 3 moles of ozone, then what will be the fundamental frequency (in Hz) of the same pipe at same temperature? **Ans: 172.7**

---

### WAVE MOTION: LEVEL 2

#### DTS-6: Travelling Wave, Speed of Wave
*Source: DTS-6 (Travelling wave, Speed of wave)*

**Paragraph for Questions 76-78:** A transverse sinusoidal wave of wavelength 20 cm is moving along a string toward increasing x. The transverse displacement of the string particle at x = 0 as a function of time is shown in Figure. [SVG-REF]

**76.** Sketch of one wavelength of the wave (the portion between x = 0 and x = 20 cm) at time t = 0 is: [SVG-REF] (A) starts at y=0 going positive (B) starts at y=4 going down (C) starts at y=0 going negative (D) starts at y=-4 going up

**77.** The velocity of propagation of the wave is: (A) 2 cm/s (B) 4 cm/s (C) 1 cm/s (D) 8 cm/s

**78.** The transverse velocity of the particle at x = 0 at t = 5.0 s is: (A) -2 cm/s (B) +2 cm/s (C) +1.5 cm/s (D) -2.5 cm/s

**\*79.** Sound wave is travelling along positive x-direction. Displacement (y) of particles from their mean positions at any time t_0 is shown in the figure. [SVG-REF] Choose the correct alternative. (A) Particle located at E has its velocity in positive x-direction (B) Particle located at D has zero velocity (C) Particles located near C are under compression (D) Change in pressure at D is zero

**\*80.** The equation of a transverse mechanical wave propagating along the 'x' axis is given by the expression y = 2 sin^2(3x - 5t) + 6. Where y is displacement in 'm'; x is position on the 'x' axis in 'cm'; t is time in 'secs'. Choose the correct option (A) The amplitude of the wave is 1 m (B) The velocity of propagation is 5/3 cm/s (C) The frequency of the wave is 5/pi sec^-1 (D) The wavelength of the wave is pi/3 cm

**81.** A loudspeaker diaphragm 0.2 m in diameter is vibrating at 1 kHz with an amplitude of 0.01 x 10^-3 m. Assume that the air molecules in the vicinity have the same amplitude of vibration. Density of air is 1.29 kg/m^3. Take velocity of sound = 340 m/s. Match Column-I with Column-II: (A) Pressure amplitude (in N/m^2) (B) Sound intensity (in W/m^2) (C) Acoustic power radiated (in W). Codes: (A) R,P,Q (B) R,S,P (C) P,Q,R (D) Q,P,S

**Paragraph for Questions 82-83:** The figure represents two snaps of a travelling wave on a string. The first snap is taken at t = 0 and the second is taken at t = 0.05 s. [SVG-REF]

**82.** Determine the speed of the wave: (A) 20/3 m/s (B) 10/3 m/s (C) 20 m/s (D) 10 m/s

**83.** Determine the equation of the wave: (A) y = 10 sin[2*pi*x - (10/3)*pi*t + pi/6] (B) y = 10 sin[pi*x - (10/3)*pi*t + pi/3] (C) y = 10 sin[pi*x - (10/3)*pi*t + pi/6] (D) y = 10 sin[2*pi*x - (5/3)*pi*t + pi/3]

**84.** For four sine waves, moving on a string along positive x-direction, displacement-distance curves (y-x curves) as shown at time t = 0. [SVG-REF] Match y-x curves with corresponding equation. Codes: (A) P,Q,S,R (B) R,S,Q,P (C) R,P,S,Q (D) Q,R,P,S

**\*85.** A 10 m long horizontal stainless steel wire AB of mass 1 kg whose end A is fixed, is connected to a massless string BC passing over a smooth pulley. String BC is connected to a container of mass 2 kg at end C. Water (density = 1 x 10^3 kg/m^3) is poured in the container at a constant rate of 2.25 litre/sec at t = 0. Also at t = 0, a pulse is generated at end A. (A) Time taken by the pulse to reach point B is 0.612 sec (B) Time taken by the pulse to reach point B is 0.212 sec (C) Tension in the string at this moment is 33.77 N (D) Tension in the string at this moment is 24.77 N

#### DTS-7: Interference, Reflection, Standing Wave on String
*Source: DTS-7 (Interference of wave, Reflection of wave, Standing wave on String)*

**\*86.** A wave y = 3 mm sin(2*pi*x - 200*pi*t) is propagating in the left string. It strikes the boundary at x = 0 and is reflected partially and transmitted partially. [SVG-REF] mu = 1 gm/m (left), mu = 4 gm/m (right). Choose the correct statements: (A) The tension in strings is 10 N (B) The amplitude of transmitted wave is 2 mm (C) The wave undergoes a phase change of pi on reflection (D) The wavelength of transmitted wave is 1/2 m

**\*87.** The equation of a wave disturbance is given as y = 0.02 sin(pi/2 + 50*pi*t) cos(10*pi*x) where x and y are in metre and t is in seconds. Choose the correct statement(s). (A) Velocity of medium particle at x = 0.12 m at t = 1/5 sec is zero (B) Displacement node occurs at x = 0.15 m (C) Displacement antinode occurs at x = 0.3 m (D) The speed of constituent waves is 0.2 m/s

**\*88.** A wire of density 9 x 10^3 kg/m^3 is stretched between two clamps 1 m apart and is stretched to an extension of 4.9 x 10^-4 m. Young's modulus of material is 9 x 10^10 N/m^2. Then: (A) The lowest frequency of standing wave is 35 Hz (B) The frequency of 1st overtone is 70 Hz (C) The frequency of 1st overtone is 105 Hz (D) The stress in the wire is 4.41 x 10^7 N/m^2

**Paragraph for Questions 89-91:** A wave y = A sin(ax + bt + pi/2) is reflected by an obstacle at x = 0 which reduces its intensity by 36%. Due to superposition a resulting wave consists of standing wave and traveling: y = -1.6A sin(ax) sin(bt) + cA cos(bt + ax), where A, a, b and c are positive constants.

**89.** Amplitude of reflected wave is: (A) 0.6A (B) 0.8A (C) 0.4A (D) 0.2A

**90.** Value of c is: (A) 0.2 (B) 0.4 (C) 0.6 (D) 0.3

**91.** Position of second antinode is: (A) x = pi/(3a) (B) x = 3*pi/a (C) x = 3*pi/(2a) (D) x = 2*pi/(3a)

**92.** An aluminium wire and a steel wire of same cross-sectional area of 10^-2 cm^2 were connected together. A 10 kg block loaded on the compound wire as shown in figure. [SVG-REF] Waves are set up in the compound wire. The minimum frequency of excitation for which standing waves are observed with point A as a node is [L_1 = 60 cm, L_2 = 86.6 cm] [Density of aluminium = 2.6 g/cm^3 and of steel = 7.8 g/cm^3] (A) 223 Hz (B) 423 Hz (C) 327 Hz (D) 427 Hz

**93.** The frequency of a sonometer wire is 100 Hz. When the weights producing the tension are completely immersed in water the frequency becomes 80 Hz and on immersing the weights in a certain liquid the frequency becomes 60 Hz. The specific gravity of the liquid is: (A) 1.42 (B) 1.77 (C) 1.82 (D) 1.21

**94.** Following is given the equation of a stationary wave (all in SI units): y = (0.06) sin(2*pi*x) cos(5*pi*t). Match of following: Column-I: (A) Amplitude of constituent wave (B) Position of node at x = ...m (C) Position of antinode at x = ...m (D) Amplitude at x = 3/4 m (E) Smallest possible length (in meter) of string is. Codes: (A) S,Q,R,S,Q (B) S,Q,R,P,Q (C) P,Q,R,P,R (D) P,R,Q,P,Q

**\*95.** Figure shows a wave motion in which displacement of particles at an instant are represented. [SVG-REF] Choose the correct option(s). (A) If the wave represents a transverse travelling wave in a stretched string, then an element in region B has maximum kinetic energy (B) If it represents a transverse travelling wave in a stretched string, then an element in the region B has maximum potential energy (C) If it represents standing wave in a stretched string, then an element in the region D has maximum potential energy (D) If it represents standing wave in a stretched string, then an element in the region B has maximum kinetic energy

#### DTS-8: Organ Pipes, Beats
*Source: DTS-8 (Organ Pipes, Beats)*

**\*96.** For fundamental frequency f of a closed pipe, choose the correct options. (A) If radius of pipe is increased f will decrease (B) If temperature is increased f will increase (C) If molecular mass of the gas filled in the pipe is increased f will decrease (D) If pressure of gas (filled in the pipe) is increased without change in temperature, f will remain unchanged

**\*97.** Waves y_1 = A cos(0.5*pi*x - 100*pi*t) and y_2 = A cos(0.46*pi*x - 92*pi*t) are traveling along x-axis. (Here x is in m and t is in second): (A) The number of times intensity is maximum in time interval of 1 second is 4 (B) The wave velocity of louder sound is 200 m/s (C) The number of times y_1 + y_2 = 0 at x = 0 in 1 second is 100 (D) The time gap between two consecutive loud sounds (beat period) is 0.25 seconds

**\*98.** In a resonance tube experiment, a closed organ pipe of diameter 10 cm and of length 120 cm resonates, when tuned with a tuning fork of frequency 340 Hz. If water is poured into the pipe, then (speed of sound in air = 340 m/s). (A) minimum length of water column to have resonance is 50 cm (B) the distance between two successive nodes is 50 cm (C) the maximum length of water column to create resonance is 98 cm (D) the minimum length of water column to have resonance is 45 cm

**99.** A sonometer wire under tension of 64 N vibrating in its fundamental mode is in resonance with a vibrating tuning fork. The vibrating portion of the sonometer wire has a length of 10 cm and mass 1 gm. The vibrating tuning fork is now moved away from the vibrating wire at a constant speed and an observer standing near the sonometer hears one beat per sec. The speed, with which the tuning fork is moved, is 0.25x m/s. The value of x is (V_s = 300 m/s) (A) 3 (B) 2 (C) 5 (D) 7

**100.** In closed organ pipe at one end -- Match Column-I with Column-II: (A) Third overtone frequency is x times fundamental frequency then x is (B) Number of nodes in second overtone (C) Number of antinodes in second overtone (D) n-th harmonic does not exist, where n is. Codes: (A) T,P,P,T (B) S,P,P,(Q,T) (C) S,Q,R,Q (D) R,Q,S,(Q,T)

**101.** Two plane sources of sound of frequency n_1 = 400 Hz, n_2 = 401 Hz of equal amplitude a each, are sounded together. A detector receives waves from the two sources simultaneously. It can detect signals of amplitude with magnitude >= a only. Calculate, period of one complete cycle of intensity being received by the detector. (A) 2 sec (B) 1/2 sec (C) 1 sec (D) 1/4 sec

**102.** Time interval for which the detector remains idle in each cycle of intensity. (A) 1/3 sec (B) 2/3 sec (C) 1/2 sec (D) 1/4 sec

**\*103.** In an organ pipe of 99 cm length standing wave is setup whose equation is given by longitudinal displacement epsilon = (0.1 mm) cos(2*pi/0.8)(y + 0.01 m) cos 2*pi(400)t, where y is measured from the top of the tube in meters and t is sec. Here 0.01 m is the end correction. Bulk modulus of air is 5 x 10^5 N/m^2. (A) Upper end of the tube and lower end of the tube are respectively open and closed (B) Air column is vibrating in fundamental mode (C) Air column is vibrating in second overtone (D) Equation of the standing wave in terms of excess pressure is DeltaP = (125*pi N/m^2) sin(2*pi/0.8)(y + 0.01 m) cos(800*pi*t)

**104.** A tube U-shaped has a uniform cross-section with arm length l_1 and l_2 (l_1 > l_2). Tube has a liquid of density rho_1 filled to a height h. Another liquid of density rho_2 = rho_1/4 is poured in arm A. Both liquids are immiscible. The length of the second liquid that should be poured in A so that first overtone of A is in unison with fundamental tone of B is: [SVG-REF] (A) 2(l_1 - 3l_2 - 2h) (B) 2(l_1 - 3l_2 + 2h) (C) 2(l_1 + 3l_2 + 2h) (D) 2(l_1 - 3l_2 + 2h)

**105.** The air in a pipe closed at one end is made to vibrate in its second overtone by a tuning fork of frequency 440 Hz. The speed of sound in air 330 m/s. End correction may be neglected. Let P_0 denote the mean pressure at any point in the pipe and DeltaP_0 the maximum amplitude of pressure variation. Match Column-I with Column-II: (A) Find the length L (in cm) of the air column (B) The amplitude of pressure variation at the middle of the column (C) The maximum pressure at the open end of the pipe (D) The minimum pressure at the open end of the pipe. Codes: (A) R,S,P,S (B) R,P,P,S (C) R,P,Q,Q (D) R,P,Q,S

#### DTS-9: Doppler's Effect
*Source: DTS-9 (Doppler's Effect)*

**106.** A source of sound moves towards an observer. (A) The frequency of the source is increased (B) The velocity of sound in the medium is increased (C) The wavelength of sound in the medium towards the observer is decreased (D) The amplitude of vibration of the particle is increased

**107.** A source of sound attached to the bob of a simple pendulum executes SHM. The difference between the apparent frequency of sound as received by an observer during its approach and recession at the mean position of the SHM motion is 2% of the natural frequency of the source. The velocity of the source at the mean position is (velocity of sound in the air is 340 m/s) [Assume velocity of sound source << velocity of sound in air]: (A) 1.4 m/s (B) 3.4 m/s (C) 1.7 m/s (D) 2.1 m/s

**Paragraph for Questions 108-109:** A source of sound of frequency f = 1000 Hz moves uniformly along a straight line with a velocity V_s = 0.8v, where v is the speed of sound. An observer is standing at a distance of 250 m from the line.

**108.** The frequency of the sound heard by the observer at the instant when the source is closest to him is: (A) 2130.8 Hz (B) 2425.7 Hz (C) 2777.8 Hz (D) 3000.0 Hz

**109.** The distance between the source and the observer at the instant when the frequency of the sound heard by the observer is same as actual frequency f: (A) 320 m (B) 278 m (C) 225 m (D) 175 m

**\*110.** A source of sonic oscillations with frequency n_0 = 600 Hz moves away and at right angles to a wall with velocity u = 30 m/s. A stationary receiver is located on the line of motion of the source in the succession wall -> source -> receiver. If velocity of sound propagation is v = 330 m/s, calculate (A) beats frequency recorded by the receiver is 110 Hz (B) wavelengths of direct and reflected waves received by the receiver are 50 and 60 cm respectively (C) if receiver stands in between wall and source, beats recorded by the receiver is 0 (D) if receiver stands between wall and source, then wavelengths of direct and reflected waves are 60 cm each

**\*111.** A sonic source of frequency n_0 = 272 Hz is moving along a horizontal circle of radius R = 3 m with a speed u = 10 m/s. A stationary receiver lies in the same plane at a distance d = 5 m from centre of the circle. Speed of sound in air is v = 330 m/s. [SVG-REF] (A) minimum frequency received by the receiver is 264 Hz (B) minimum frequency received by the receiver is 272 Hz (C) If at t = 0, receiver receives minimum frequency, the minimum value of time t when it receives maximum frequency is (127/300)*pi sec (D) sound wave pulse emitted by source at points A and C will be received as with their actual frequency i.e, 272 Hz

**112.** A source of sound of frequency f_1 is placed on the ground. A detector placed at a height is released from rest on this source. The observed frequency f(Hz) is plotted against time t(sec). [SVG-REF] The speed of sound in air is 300 m/s. Find f_1 (g = 10 m/s^2): (A) 0.5 x 10^3 Hz (B) 1 x 10^3 Hz (C) 0.25 x 10^3 Hz (D) 0.2 x 10^3 Hz

**113.** A stationary observer receives a sound from a source of frequency v_0 moving with a constant velocity v_s = 30 m/s. The apparent frequency varies with time as shown in figure. [SVG-REF] Velocity of sound v = 300 m/s. Then which of the following is incorrect? (A) The minimum value of apparent frequency is 889 Hz (B) The natural frequency of source is 1000 Hz (C) The frequency-time curve corresponds to a source moving at an angle to the stationary observer (D) The maximum value of apparent frequency is 1111 Hz

**114.** A train A crosses a station with a speed of 40 m/s and whistles a short pulse of natural frequency n_0 = 596 Hz. Another train B is approaching towards the same station with the same speed along a parallel track. Two tracks are d = 99 m apart. When train A whistles, train B is 152 m away from the station as shown in figure. [SVG-REF] If velocity of sound in air is v = 330 m/s, the frequency of the pulse heard by driver of train B is: (A) 620 Hz (B) 724 Hz (C) 830 Hz (D) 532 Hz

**115.** A sound wave of frequency v travels horizontally to the right. It is reflected from a large vertical plane surface moving to the left with a speed V. The speed of sound in the medium is c. Match Column-I with Column-II: (A) The number of wave pulses striking the surface per second -> (R) v(c+V)/c (B) The wavelength of the reflected wave -> (S) c(c-V)/(v(c+V)) (C) The frequency of the reflected wave -> (P) v(c+V)/(c-V) (D) The number of beats heard by a stationary listener -> (Q) 2vV/(c-V)

---

### WAVE MOTION: LEVEL 3 (SUBJECTIVE)

#### DTS-10: Travelling Waves
*Source: DTS-10 (Subjective)*

**116.** A transverse wave traveling on a stretched string is represented by the equation y = 2/[(2x - 6.2t)^2 + 20]; x, y and t are in S.I. units. Shape of wave does not change. Find (i) Whether the above equation represents a travelling wave. If yes, then in which direction wave is moving? (ii) Velocity of wave (iii) Amplitude of wave

**117.** A pulse is started at a time t = 0 along the +x direction on a long, taut string. The shape of the pulse at t = 0 is given by function f(x) with: f(x) = x/4 + 1 for -4 < x <= 0; f(x) = -x + 1 for 0 < x < 1; f(x) = 0 otherwise. Here f and x are in centimeters. The linear mass density of the string is 50 g/m and it is under a tension of 5 N. (i) The shape of the string is drawn at t = 0. Then find the area of the pulse enclosed by the string and the x-axis. (ii) Find the transverse velocity of the particle at x = 13 cm at t = 0.015 s. (iii) What will be the vertical displacement of the particle of the string at x = 7 cm at t = 0.01 s?

**118.** At t = 0, a transverse wave pulse travelling in the positive x-direction with a speed of 2 m/s in a wire is described by the function y = 6/x^2 given that x != 0. Find the transverse velocity of a particle at x = 2 m and t = 2 s. Also mention the direction of velocity.

**119.** A transverse harmonic wave of amplitude 0.02 m is generated at one end (x = 0) of a long horizontal string by a tuning fork of frequency 500 Hz. At an instant t = 0, the displacement of the particle at x = 0.1 m is -0.01 m and that of the particle at x = 0.2 m is +0.01 m. (i) Calculate the wavelength and the wave velocity. (ii) Obtain the equation of the wave assuming that the wave is travelling along the +x-direction and that the end x = 0 is at the equilibrium position at t = 0.

**120.** Figure shows the position of medium particles at t = 0, supporting a simple harmonic wave traveling either along or opposite to the positive x-axis. [SVG-REF] (i) Find the angle theta made by the tangent at point P with the x-axis. (ii) If the particle at P has a velocity v_p = sqrt(3)*pi cm/s, in the negative y-direction, as shown in figure, then determine the speed and direction of the wave. (iii) Find the frequency of the waves. (iv) Find the displacement equation of the wave.

**121.** A 100 Hz sinusoidal wave is travelling in the positive x-direction along string with a linear mass density of 3.5 x 10^-3 kg/m and a tension of 35 N. At time t = 0, the point x = 0 has maximum displacement in the positive y-direction. Next, when this point has zero displacement the slope of the string is -pi/20. Find (i) amplitude (ii) wave speed (iii) the expression which represents the displacement of string as a function of x (in metres) and t (in seconds).

#### DTS-11: Standing Waves, Reflection/Transmission
*Source: DTS-11 (Subjective)*

**122.** The following equations represent transverse waves: z_1 = a cos(kx - omega*t); z_2 = A cos(kx + omega*t); z_3 = A cos(ky - omega*t). Identify the combination(s) of the waves which will produce (i) A standing wave (ii) A wave traveling in the direction making an angle of 45 degrees with the positive x and positive y axes. In each case, find the positions at which the resultant intensity is always zero.

**123.** The displacement of a medium in a sound wave is given by the equation y_1 = A cos(ax + bt) where A, a and b are positive constants. The wave is reflected by an obstacle situated at x = 0. The intensity of the reflected wave is 0.64 times that of the incident wave. (i) What are the wavelength and frequency of incident wave? (ii) Write the equation for the reflected wave. (iii) In the resultant wave formed after reflection, find the maximum and minimum values of the particle speeds in the medium. (iv) Express the resultant wave as a superposition of a standing wave and a traveling wave. What are the positions of the antinodes of the standing wave? What is the direction of propagation of traveling wave?

**124.** A metallic rod of length 1 m is rigidly clamped at its midpoint. Longitudinal stationary waves are set up in the rod in such a way that there are two nodes on either side of the midpoint. The amplitude of an antinode is 2 x 10^-6 m. (i) Write the equation of motion at a point 2 cm from the midpoint (ii) Write the equation of constituent waves in the rod (Y = 2 x 10^11 N/m^2 and rho = 8 x 10^3 kg/m^3)

**125.** A long wire PQR is made by joining two wires PQ and QR of equal radii. PQ has length 4.8 m and mass 0.06 kg. QR has length 2.56 m and mass 0.2 kg. The wire PQR is under tension of 80 N. A sinusoidal wave pulse of amplitude 3.5 cm is sent along the wire PQ from the end P. No power is dissipated during the propagation of the wave-pulse. Calculate (i) The time taken by the wave pulse to reach the other end R of the wire, and (ii) The amplitude of the reflected and transmitted wave pulse after the incident wave pulse crosses the joint Q.

**126.** A long wire ABC is made by joining two wires AB and BC of equal cross-sectional area. AB has length 4.80 m and mass 0.12 kg. BC has length 2.56 m and mass 0.4 kg. The wire ABC is under a tension of 160 N. A sinusoidal wave y = 3.5 sin(omega*t - kx) is sent along the wire ABC from the end A. Here y is in cm, x in m and t in sec. No power is dissipated during the propagation of the wave, find (i) the amplitudes of the reflected and the transmitted waves. (ii) the equation of the resultant wave in the wire AB. (iii) the maximum displacement of the nodes of the stationary wave in the wire AB and (iv) the fraction of power transmitted from the junction B.

**127.** Two wires 1 and 2 of the same cross-sectional area A = 10 mm^2 and the same length but made of different materials are welded together and their ends are rigidly clamped between two walls, as shown in the figure. [SVG-REF] Their respective Young's Moduli and the linear coefficients of thermal expansion are: Y_1 = 10^9 N/m^2, Y_2 = 2 x 10^9 N/m^2, alpha_1 = 6 x 10^-4 /deg C, alpha_2 = 3 x 10^-4 /deg C. (i) If the temperature of the system is reduced by 20 deg C, then (a) Find the tension in each wire (b) Find the displacement of the joint O (ii) Find the first overtone frequency of the system? Given: mu_1 = 0.3 kg/m and mu_2 = 0.075 kg/m; l_0 = 1 m

#### DTS-12: Beats, Organ Pipes
*Source: DTS-12 (Subjective)*

**128.** Two radio stations broadcast their programs at the same amplitude A, and at slightly different frequencies omega_1 and omega_2 respectively, where omega_2 - omega_1 = 10^3 Hz. A detector receives the signals from the two stations simultaneously. It can detect signals only of intensity >= 2A^2. (i) Find the time intervals between successive maxima of the intensity of the signal received by the detector. (ii) Find the time for which the detector remains idle in each cycle of the intensity of the signal.

**129.** A 3.6 m long vertical pipe resonates with a source of frequency 212.5 Hz when water level is at certain height in the pipe. (i) Find the height of water level (from the bottom of the pipe) at which resonance occurs. Neglect end correction. (ii) Now, the pipe is filled to a height H (= 3.6 m). A small hole is drilled very close to its bottom and water is allowed to leak. (a) Obtain an expression for the rate of fall of water level in the pipe as a function of H. (b) If the radii of the pipe and the hole are 2 x 10^-2 m and 1 x 10^-3 m respectively, calculate the time interval between the occurrence of first two resonances. (Speed of sound in air is 340 m/s and g = 10 m/s^2).

**130.** Two narrow cylindrical pipes A and B have the same length. Pipe A is open at both ends and is filled with a monoatomic gas of molar mass M_A. Pipe B is open at one end and closed at the other end and is filled with a diatomic gas of molar mass M_B. Both gases are at the same temperature. (i) If the frequency of the second harmonic of the fundamental mode in pipe A is equal to the frequency of the third harmonic of the fundamental mode in pipe B; determine the value of M_A/M_B. (ii) Now the open end of pipe B is also closed (so that pipe B is closed at both ends). Find the ratio of the fundamental frequency in pipe A to that in pipe B.

**131.** A detector receives waves from three sources of frequency 400 Hz, 401 Hz and 402 Hz simultaneously. The amplitude of each wave is a and they arrive at the detector in the same phase. The detector can detect signals of amplitude >= a only. Calculate (i) the time for which the detector remains idle in each cycle of intensity and (ii) the period of one complete cycle of intensity received by the detector. (iii) beat frequency.

**132.** AB is a cylinder of length 1 m fitted with a thin flexible diaphragm C at the middle and other thin flexible diaphragms A and B at the ends. The portion AC and BC contain hydrogen and oxygen gases respectively. The diaphragms A and B are set into vibrations of same frequency. What is the minimum frequency of these vibrations for which diaphragm C is a node? (Under the conditions of experiment v_H2 = 1100 m/s, v_O2 = 300 m/s)

**133.** The air column in a pipe closed at one end is made to vibrate in its second overtone by a tuning fork of frequency 440 Hz. The speed of sound in air is 330 m/s. End corrections may be neglected. Let P_0 denote the mean pressure at any point in the pipe, and DeltaP_0 the maximum amplitude of pressure variation. (i) Find the length L of the air column. (ii) What is the amplitude of pressure variation at the middle of the column? (iii) What are the maximum and minimum pressure at the open end of the pipe? (iv) What are the maximum and minimum pressure at the closed end of the pipe?

#### DTS-13: Doppler Effect
*Source: DTS-13 (Subjective)*

**134.** A source of sound is moving along a circular orbit of radius 3 metres with an angular velocity of 10 rad/s. A sound detector located far away from the source is executing linear simple harmonic motion along the line BD with an amplitude BC = CD = 6 metres. The frequency of oscillation of the detector is 5/pi per second. The source is at the point A when the detector is at the point B. If the source emits a continuous sound wave of frequency 340 Hz. Find the maximum and the minimum frequencies recorded by the detector. (Speed of sound = 340 m/s)

**135.** A boat is traveling in river with a speed 10 m/s along the stream flowing with a speed 2 m/s. From this boat, a sound transmitter is lowered into the river through a rigid support. The wavelength of the sound emitted from the transmitter inside the water is 14.45 mm. Assume that attenuation of sound in water and air is negligible. (i) What will be the frequency detected by a receiver kept inside the river downstream? (ii) The transmitter and the receiver are now pulled up into air. The air is blowing with a speed 5 m/s in the direction opposite the river stream. Determine the frequency of the sound detected by the receiver. (Temperature of the air and water = 20 deg C; Density of river water = 10^3 kg/m^3; Bulk modulus of the water = 2.088 x 10^9 Pa; Gas constant R = 8.31 J/mol-K; Mean molecular mass of air = 28.8 x 10^-3 kg/mol; C_P/C_V for air = 1.4)

**136.** A sound source of frequency f_0 = 1300 Hz is dropped from a height H = 505 m above the ground. At the same time a detector is thrown upwards with velocity v = 50 m/s along the same line. If the velocity of sound is v = 300 m/s, find the frequency detected by the detector after t = 5 s.

**137.** A source of sound of frequency f Hz and an observer are located at the same point. At t = 0, both start moving away from one another with constant accelerations 'a' m/s^2 in opposite directions. Find the frequency registered by the observer t (< c/a) seconds after the beginning of motion. Speed of sound in air is c m/s.

**138.** A source is moving along a circle x^2 + y^2 = R^2 with constant speed v_0 = 330*pi/(6*sqrt(3)) m/s in clockwise direction while an observer is stationary at point (2R, 0) with respect to the centre of circle. Frequency emitted by the source is n. (i) Find the coordinates of source when observer records the maximum and minimum frequency. (ii) Find the value of maximum and minimum frequency. Take speed of sound v = 330 m/s.

**139.** The curves 1 and 2 in the figure, represent the dependence of the ratio of the received frequency (f) to the actual frequency (f_0) produced by the source on the ratio of v_0/v or v_s/v, where v_s and v_0 are the velocities of the observer and source, respectively and v is the velocity of sound. [SVG-REF] (i) Identify which of the two curves corresponds to a moving source. (ii) Determine the value of (f/f_0) at the points A and B.

---

### Miscellaneous Exercise
*Source: Miscellaneous Exercise (MCQ, questions marked with * may have more than one correct option)*

**1.** A sufficiently long closed organ pipe has a small hole at its bottom. Initially the pipe is empty. Water is poured into the pipe at a constant rate. The fundamental frequency of the air column in the pipe: (A) continuously increases (B) first increases and then becomes constant (C) continuously decreases (D) first decreases and then becomes constant

**2.** An open organ pipe of length l is sounded together with another open organ pipe of length l + x in their fundamental tones. Speed of sound in air is v. The beat frequency heard will be (x << l). (A) vx/(4l^2) (B) vl^2/(2x) (C) vx/(2l^2) (D) vx^2/(2l)

**3.** A transverse wave y = 0.05 sin(20*pi*x - 50*pi*t) in meters, is propagating along +ve X-axis on a string. A light insect starts crawling on the string with the velocity of 5 cm/s at t = 0 along the +ve X-axis from a point where x = 5 cm. After 5 seconds the difference in the phase of its position is equal to: (A) 150*pi (B) 250*pi (C) -245*pi (D) -5*pi

**4.** A 10 watt source of sound of frequency 1000 Hz sends out waves in air. The displacement amplitude at a distance of 10 m from the source is (speed of sound in air = 340 m/s and density of air = 1.29 kg/m^3): (A) 0.62 micro-m (B) 4.2 m (C) 1.6 micro-m (D) 0.96 micro-m

**5.** A conveyor belt moves to the right with speed v = 300 m/min. A pieman puts pies on the belt at a rate of 20 per minutes while walking with speed 30 m/min towards a receiver at the other end. The frequency with which they are received by the stationary receiver is: (A) 26.67 per minute (B) 30 per minute (C) 22.22 per minute (D) 24 per minute

**6.** A string fixed at both ends is vibrating in the lowest mode of vibration for which a point at quarter of its length from one end is a point of maximum displacement. The frequency of vibration in this mode is 100 Hz. What will be the frequency emitted when it vibrates in the next mode such that this point is again a point of maximum displacement? (A) 400 Hz (B) 200 Hz (C) 600 Hz (D) 300 Hz

**7.** The fundamental frequency of a sonometer wire of length l is f_0. A bridge is now introduced at a distance of Delta-l from the centre of the wire (Delta-l << l). Then number of beats heard if both sides of the bridge are set into vibration in their fundamental modes are: (A) 8*f_0*Delta-l/l (B) f_0*Delta-l/l (C) 2*f_0*Delta-l/l (D) 4*f_0*Delta-l/l

**\*8.** The tension in a stretched string fixed at both ends is changed by 2%, the fundamental frequency is found to get changed by 15 Hz. Select the correct statement(s). (A) wavelength of the string of fundamental frequency does not change (B) velocity of propagation of wave changes by 2% (C) velocity of propagation of wave changes by 1% (D) original frequency is 1500 Hz

**9.** The equation of a plane progressive wave is y = 0.02 sin 8*pi*[t - x/20]. When it is reflected at a rarer medium (medium with higher velocity) at x = 0, its amplitude becomes 75% of its previous value. The equation of the reflected wave is: (A) y = 0.02 sin 8*pi*[t - x/20] (B) y = 0.02 sin 8*pi*[t + x/20] (C) y = +0.015 sin 8*pi*[t + x/20] (D) y = -0.015 sin 8*pi*[t + x/20]

**10.** How long will it take sound waves to travel a distance l between points A and B if the air temperature between them varies linearly from T_1 to T_2? The velocity of sound in air at temperature T is given by v = alpha*sqrt(T), where alpha is a constant. (A) 2*l/(alpha*sqrt(T_1*T_2)) (B) alpha*l*sqrt(T_1/T_2) (C) sqrt(T_1 + T_2) * alpha*l (D) 2*l/(alpha*(sqrt(T_2) + sqrt(T_1)))

---

### Miscellaneous Question Bank
*Source: Miscellaneous Question Bank Level 1, 2, 3 (MCQ, questions marked with * may have more than one correct option)*

**\*1.** A traveling wave pulse is represented by y = 8/[2 + (x + 4t)^2], where y and x are in meters and t in second with usual meanings. Then: (A) The pulse is traveling along -ve x-axis with the amplitude 4 m (B) The speed of the pulse is 4 ms^-1 (C) The pulse is traveling along -ve x-axis with the amplitude 2 m (D) The speed of the pulse is 2 ms^-1

**\*2.** In a plane progressive harmonic wave: (A) phase difference between displacement and acceleration of particle is zero (B) phase difference between displacement and acceleration of particle is pi (C) phase difference between displacement and velocity of particle is pi/2 (D) phase difference between velocity and acceleration of particle is pi/2

**\*3.** A transverse sinusoidal wave of amplitude A, wavelength lambda and frequency f is travelling on a stretched string. The maximum speed of any point on the string is v/10, where v is the speed of propagation of the wave. If A = 10^-3 m and v = 10 m/s then lambda and f are given by: (A) lambda = 2*pi x 10^-2 m (B) lambda = 10^-3 m (C) f = 10^3/(2*pi) Hz (D) f = 10^3 Hz

*Paragraph for Questions 4-6:* A sinusoidal transverse wave is travelling on a string in the +x direction with a wavelength of 20 cm, and an amplitude of 5 cm, and the time for a particular point to move from maximum displacement to zero is 0.5 ms.

**4.** The equation for the wave is: (A) y = 0.05 sin 2*pi*(5x - 500t) where x and y are in meter and t in sec (B) y = 0.05 sin 2*pi*(500t - 5x) where x and y are in meter and t in sec (C) y = 0.05 sin 2*pi*(5x + 500t) where x and y are in meter and t in sec (D) y = 0.05 sin 2*pi*(5x - 500t + phi) where x and y are in meter and t in sec and phi some initial phase constant which cannot be evaluated from given data

**5.** What is maximum speed of a point on the string during above wave propagation? (A) 25*pi m/s (B) 50*pi m/s (C) 75*pi m/s (D) 90*pi m/s

**6.** What is the speed of the wave? (A) 100 m/s (B) 75 m/s (C) 60 m/s (D) 50 m/s

**7.** There are three strings RP, PQ and QS as shown. Their mass and lengths are RP = (0.1 kg, 2 m), PQ = (0.2 kg, 3 m), QS = (0.15 kg, 4 m) respectively. All the strings are under same tension. Wave-1 is incident at P. It is partly reflected (wave-2) and partly transmitted (wave-3). Now wave-3 is incident at Q. It is again partly transmitted (wave-5) and partly reflected (wave-4). [SVG-REF] Phase difference between wave-1 and wave: (A) 2 is pi (B) 4 is zero (C) both (A) and (B) are correct (D) both (A) and (B) are wrong

**8.** A traveling wave is partly reflected and partly transmitted from a rigid boundary. Let a_i, a_r and a_t be the amplitudes of incident wave, reflected wave and transmitted wave respectively, and let I_i, I_r and I_t be the corresponding intensities. Choose the correct alternative. (A) I_i/I_r = (a_i/a_r)^2 (B) I_i/I_t = (a_i/a_t)^2 (C) I_r/I_t = (a_r/a_t)^2 (D) all of these

**9.** For the wave equation, y = a sin(bt - cx). Match the following two columns. Column-I: (A) Wave speed (B) Maximum particle speed (C) Wave frequency (D) Wavelength. Column-II: (P) b/(2*pi) (Q) c/(2*pi) (R) b/c (S) None of these. **Ans:** A-R, B-S, C-P, D-S

**10.** In a mixture of gases, the average number of degrees of freedom per molecule is 6. The rms speed of the molecules of the gas is c. If velocity of sound in the gas is 2c/x, then value of x is: **Ans: 3**

**11.** A transverse wave described by the equation y = 0.02 sin(x + 30t) where x and t are in meter and second, is traveling along a wire of area of cross-section 1 mm^2 and density 8000 kg/m^3. What is the tension in the string? (A) 20 N (B) 7.2 N (C) 30 N (D) 14.4 N

**12.** A source oscillates with a frequency 25 Hz and the wave propagates with 300 m/s. Two points A and B are located distance 10 m and 16 m away from the source. The phase difference between A and B is: (A) pi/4 (B) pi/2 (C) pi (D) 2*pi

**13.** If at t = 0, a traveling wave pulse on a string is described by the function y = 6/(x^2 + 3). What will be the wave function representing the pulse at time t, if the pulse is propagating along positive x-axis with speed 4 m/s? (A) y = 6/[(x + 4t)^2 + 3] (B) y = 6/[(x - 4t)^2 + 3] (C) y = 6/[(x - t)^2] (D) y = 6/[(x - t)^2 + 12]

**\*14.** The equation y = 4 + 2 sin(6t - 3x) represents a wave motion with: (A) amplitude 6 units (B) amplitude 2 units (C) wave speed 2 units (D) wave speed 1/2 units

**15.** A composite string is made up by joining two strings of different masses per unit length mu and 4*mu. The composite string is under the same tension. A transverse wave Y = (6 mm) sin(5t + 40x), where t is in seconds and x in metres, is sent along the lighter string towards the joint. The joint is at x = 0. The equation of the wave pulse reflected from the joint is: (A) (2 mm) sin(5t - 40x) (B) (4 mm) sin(40x - 5t) (C) -(2 mm) sin(5t - 40x) (D) (2 mm) sin(5t - 10x)

**16.** Match following two columns. Column-I: (A) y = A sin(omega*t - kx) (B) y = A sin(kx - omega*t) (C) y = -A cos(omega*t + kx) (D) y = -A cos(kx - omega*t). Column-II: (P) Traveling in positive x-direction (Q) Traveling in negative x-direction (R) At t = 0, velocity of particle is positive at x = 0 (S) At t = 0, acceleration of particle is positive at x = 0. **Ans:** A-P,R; B-P,R; C-Q,S; D-P,S

**17.** A string of length l is fixed at both ends and is vibrating in second harmonic. The amplitude at antinode is 5 mm. The amplitude of a particle at distance l/8 from the fixed end is: (A) 5*sqrt(2) mm (B) 5/sqrt(2) mm (C) 5 mm (D) 10/sqrt(2) mm

**18.** An organ pipe of 3.9*pi m long, open at both ends is driven to third harmonic standing wave. The amplitude of pressure oscillation is 1% of mean atmospheric pressure [p_0 = 10^5 N/m^2]. The maximum displacement of particle (in cm) from mean position will be: [Given velocity of sound = 200 m/s and density of air = 1.3 kg/m^3] **Ans: 2.5**

**19.** If the speed of longitudinal wave equals 10 times the speed of the transverse waves in a stretched wire of material which has modulus of elasticity E, then the stress in the wire is: (A) 10 E (B) 100 E (C) E/10 (D) E/100

**20.** Two sources of sound are moving in opposite directions with velocities v_1 and v_2 (v_1 > v_2). Both are moving away from a stationary observer. The frequency of both the sources is 1700 Hz. What is the value of (v_1 - v_2) (in m/s) so that the beat frequency observed by the observer is 10 Hz? v_sound = 340 m/s and assume that v_1, v_2 both are very much less than v_sound. (A) 1 m/s (B) 2 m/s (C) 3 m/s (D) 4 m/s

**\*21.** A wire is stretched and fixed at two ends. Transverse stationary waves are formed in it. It oscillates in its third overtone mode. The equation of stationary wave is y = A sin(kx) cos(omega*t), choose the correct options. (A) Amplitude of constituent waves is A/2 (B) The wire oscillates in three loops (C) The length of the wire is 4*pi/k (D) Speed of stationary wave is omega/k

**\*22.** Which of the following equations can form stationary waves? (i) Y = A sin(omega*t - kx) (ii) Y = A cos(omega*t - kx) (iii) Y = A sin(omega*t + kx) (iv) Y = A cos(omega*t + kx). The correct choice is: (A) (i) and (ii) (B) (i) and (iii) (C) (iii) and (iv) (D) (ii) and (iv)

**23.** I represents intensity of sound wave, A the amplitude and r the distance from the source. Then match the following two columns. Column 1: (A) Intensity due a point source (B) Amplitude due to a point source (C) Intensity due to a line source (D) Amplitude due to a line source. Column 2: (P) Proportional to r^(-1/2) (Q) Proportional to r^(-1) (R) Proportional to r^(-2) (S) Proportional to r^(-4). **Ans:** A-R, B-Q, C-Q, D-P

**\*24.** As a wave propagates, (A) the wave intensity remains constant for a plane wave (B) the wave intensity decreases as the inverse of the distance from the source for a spherical wave (C) the wave intensity decreases as the inverse square of the distance from the source for a spherical wave (D) total power of the spherical wave over the spherical surface centred at the source remains constant at all times

**25.** Tuning forks A and B produce two beats in the time interval of 0.4 s. The beats frequency is: (A) 5 Hz (B) 8 Hz (C) 10 Hz (D) 6 Hz

**26.** The equation of standing wave is y = a cos(kx) sin(omega*t), which one of following graphs represents the wave at t = T/4? (a is a positive constant, T denotes time period of the wave): (A) [SVG-REF: sinusoidal curve] (B) [SVG-REF] (C) [SVG-REF] (D) None of these

**27.** A car traveling towards a hill at 10 m/s sounds its horn which has a frequency 500 Hz. This is heard in a second car traveling behind the first car in the same direction with speed 20 m/s. The sound can also be heard in the second car by reflection of sound from the hill. The beat frequency heard by the driver of the second car will be: (Speed of sound in air = 340 m/s) (A) 31 Hz (B) 24 Hz (C) 21 Hz (D) 35.6 Hz

**28.** Two sounding bodies are producing progressive waves given by y_1 = 2 sin(400*pi*t) and y_2 = sin(404*pi*t) where t is in second, which superpose near the ears of a person. The person will hear: (A) 2 beats/s with intensity ratio 9/4 between maxima and minima (B) 2 beats/s with intensity ratio 9 between maxima and minima (C) 4 beats/s with intensity ratio 16 between maxima and minima (D) 4 beats/s with intensity ratio 16/9 between maxima and minima

**29.** A closed organ pipe resonates in its fundamental mode at a frequency of 200 Hz with O_2 in the pipe at a certain temperature. If the pipe now contains 2 moles of O_2 and 3 moles of ozone, then what will be the fundamental frequency (in Hz) of the same pipe at same temperature? **Ans: 175**

*Paragraph for Questions 30-34 (Assertion-Reason):* (A) Statement-1 is True, Statement-2 is True and Statement-2 is a correct explanation for Statement-1 (B) Statement-1 is True, Statement-2 is True and Statement-2 is NOT a correct explanation for Statement-1 (C) Statement-1 is True, Statement-2 is False (D) Statement-1 is False, Statement-2 is True

**30.** Statement 1: Transverse wave can't travel in gaseous medium. Statement 2: They do not possess modulus of rigidity. (A) (B) (C) (D)

**31.** Statement 1: Transverse waves can travel on the surface of water. Statement 2: Surface tension property of water plays the role of modulus of rigidity. (A) (B) (C) (D)

**32.** Statement 1: Two wave equations are y_1 = A sin(omega*t - kx) and y_2 = A sin(kx - omega*t). These two waves have a phase difference of pi. Statement 2: They are traveling in opposite directions. (A) (B) (C) (D)

**33.** Statement 1: Wave speed is given by c = f*lambda. If frequency f is doubled, c will become two times. Statement 2: For given conditions of medium wave speed remains constant. (A) (B) (C) (D)

**34.** Statement 1: On the moon you cannot hear your friend standing at some distance from you. Statement 2: There is vacuum on the moon. (A) (B) (C) (D)

**35.** A wire is stretched and fixed at its two ends. Its second overtone frequency is 210 Hz. Then match the following two columns. Column-I: (A) Fundamental frequency (B) Third harmonic frequency (C) Third overtone frequency (D) Second harmonic frequency. Column-II: (P) 210 Hz (Q) 350 Hz (R) 280 Hz (S) None. **Ans:** A-S(70 Hz), B-P, C-R, D-S(140 Hz)

*Paragraph for Questions 36-37:* There is a sinusoidal standing wave created in a string of length 150 cm and mass 1.5 kg tied at both ends. String has tension of 36 N. There are 4 nodes in the string other than the ends. Maximum displacement of a particle at a distance 35 cm from one of end is 2 mm.

**36.** Angular natural frequency of the wave is: (A) 20*pi*sqrt(10) per sec (B) 20*pi*sqrt(2/3) per sec (C) 20*pi per sec (D) 200*pi per sec

**37.** Maximum displacement of mid-point of the string is: (A) 8 mm (B) 4 mm (C) 2 mm (D) 1 mm

**\*38.** An air column in a pipe, which is closed at one end, is in resonance with a vibrating tuning fork of frequency 264 Hz. If v = 330 m/s, the length of the column in cm is(are): (A) 31.25 (B) 62.50 (C) 93.75 (D) 125

**39.** A boy with a radio, playing music at a frequency f is moving towards a wall with velocity v_b. A motorist is following the boy with a speed v_m. The expression for the beat frequency heard by the motorist, if the speed of sound is v, is: (A) [(v + v_m)/(v + v_b)] * f (B) (v + v_m)/(v + v_b) * f (C) 2*v_b*(v + v_m)/(v^2 - v_b^2) * f (D) 2*v_m*(v + v_b)/(v^2 - v_m^2) * f

**\*40.** Y(x,t) = 0.8/[(4x + 5t)^2 + 5] represents a moving pulse where x and y are in metre and t is in second. Then, (A) Pulse is moving in positive x-direction (B) In 2 s it will travel a distance of 2.5 m (C) Its maximum displacement is 0.16 m (D) It is a Symmetric pulse

**41.** A transverse wave described by the equation y = 0.02 sin(x + 30t) where x and t are in meter and second, is traveling along a wire of area of cross-section 1 mm^2 and density 8000 kg/m^3. What is the tension in the string (in N)? **Ans: 7.2**

**42.** How many times more intense is 90 dB sound than 40 dB sound? (A) 5 (B) 50 (C) 500 (D) 10^5

**43.** The frequency of a man's voice is 300 Hz and its wave-length is 1 m. If the wavelength of a child's voice is 1.5 m, then the frequency of the child's voice is: (A) 200 Hz (B) 150 Hz (C) 400 Hz (D) 350 Hz

**\*44.** A horizontal stretched string, fixed at two ends, is vibrating in its fifth harmonic according to the equation, y_1(x,t) = (0.01 m) [sin(62.8 m^-1)x] cos[(628 s^-1)t]. Assuming pi = 3.14, the correct statement(s) is (are): (A) The number of nodes is 5 (B) The length of the string is 0.25 m (C) The maximum displacement of the mid-point of the string from its equilibrium position is 0.01 m (D) The fundamental frequency is 100 Hz

**45.** A string of length L is stretched by L/20 and speed of transverse wave along it is v. The speed of wave when it is stretched by L/10 will be (assume that Hooke's law is applicable): (A) 2v (B) v/sqrt(2) (C) sqrt(2)*v (D) 4v

**46.** The equation of a travelling wave is given as y = 5 sin 10*pi*(t - 0.01x) along the x-axis. Here all quantities are in SI units. The phase difference between the points separated by a distance of 10 m along x-axis is: (A) pi/2 (B) pi (C) 2*pi (D) pi/4

**47.** Equation of longitudinal stationary wave in second overtone mode in a closed organ pipe is y = (4 mm) sin(pi*x) cos(pi*t). Here x is in metre and t in second. Then match the following two columns. Column 1: (A) Length of pipe (B) Wavelength (C) Distance of displacement node from the closed end (D) Distance of pressure node from the closed end. Column 2: (P) 1 m (Q) 1.5 m (R) 2.0 m (S) None. **Ans:** A-Q, B-R, C-P, D-S(0.5 m)

**48.** Two wave functions in a medium along x-direction are given by: y_1 = 1/[2 + (2x - 3t)^2] m; y_2 = -1/[2 + (2x + 3t - 6)^2] m, where x is in metres and t is in seconds. Select the correct choice: (A) There is no position at which resultant displacement will be zero at all times (B) There is no time at which resultant displacement will be zero everywhere (C) Both waves travel along the same direction (D) Both waves travel in opposite directions

**\*49.** Which of the following functions of x and t represents a progressive wave: (A) y = sin(4t - 3x) (B) y = 1/[4 + (4t - 3x)^2] (C) y = 1/(4t + 3x) (D) All of these

**50.** Transverse waves are generated in two uniform steel wires A and B by attaching their free ends to a fork of frequency 500 Hz. The diameter of wire A is half that of B and tension in wire A is half the tension in wire B. What is the ratio of velocities of waves in A and B? (A) 1 : 2 (B) sqrt(2) : 1 (C) 2 : 1 (D) 1 : sqrt(2)

**51.** The frequency of note A is 4 times that of note B. The energies of the two notes are equal. The amplitude of note B as compared to that of note A will be: (A) double (B) equal (C) four times (D) eight times

**52.** A sounding body emitting a frequency of 150 Hz is dropped from a height. During its fall under gravity it crosses a balloon moving upwards with a constant velocity of 2 m/s one second after it started to fall. The difference in the frequency (in Hz) observed by the man in balloon just before and just after crossing the body will be: (Velocity of sound = 300 m/s, g = 10 m/s^2) **Ans: 12**

**53.** A closed organ pipe has length L. The air in it is vibrating in third overtone with maximum amplitude a. The amplitude at distance L/7 from closed end of the pipe is: (A) 0 (B) a (C) a/2 (D) Data insufficient

**\*54.** Standing waves can be produced: (A) on a string clamped at both the ends (B) on a string clamped at one end free at the other (C) when incident wave gets reflected from a wall (D) when two identical waves with a phase difference of pi are moving in the same direction

**55.** Two monatomic ideal gases 1 and 2 of molecular masses m_1 and m_2 respectively are enclosed in separate containers kept at same temperature. The ratio of the speed of sound in gas 1 to that in gas 2 is given by: (A) sqrt(m_1/m_2) (B) sqrt(m_2/m_1) (C) m_1/m_2 (D) m_2/m_1

**56.** Mark correct option(s). (A) The phase of transmitted wave always remains unchanged (B) The amplitude of transmitted wave does not depend upon the velocity of wave in media (C) The amplitude of reflected wave and transmitted wave are same to each other for a given incident wave (D) The amplitude of reflected wave is equal to the amplitude of incident wave

---

### JEE Main Archive
*Source: JEE Main Archive (Single Correct MCQ)*

**1.** [2002] A wave y = a sin(omega*t - kx) superposes on a string on another wave producing a node at x = 0. Then the equation of the unknown wave is: (A) y = a sin(omega*t + kx) (B) y = a sin(omega*t - kx) (C) y = -a sin(omega*t + kx) (D) y = -a sin(omega*t - kx)

**2.** [2002] A tuning fork of unknown frequency produces 4 beats per second with another fork of frequency 288 cps. A little wax is placed on the unknown fork and it then produces 2 beats per second. The unknown frequency is: (A) 286 cps (B) 284 cps (C) 292 cps (D) 290 cps

**3.** [2002] Tube A has both ends open, while tube B has one end closed; otherwise, they are identical. The ratio of the fundamental frequencies of tubes A and B is: (A) 1 : 2 (B) 2 : 1 (C) 1 : 4 (D) 4 : 1

**4.** [2002] The length of a string attached to two rigid supports is 40 cm. The maximum wavelength in cm of a stationary wave produced on it is: (A) 20 (B) 80 (C) 40 (D) 120

**5.** [2002] When temperature increases, the frequency of a tuning fork: (A) increases (B) decreases (C) remains same (D) increases or decreases depending on the material

**6.** [2003] The displacement y of a wave travelling in the x-direction is given by y = 10^-4 sin(600t - 2x + pi/3) metre where x is expressed in metres and t in seconds. The speed of the wave-motion, in ms^-1 is: (A) 300 (B) 600 (C) 1200 (D) 200

**7.** [2003] A tuning fork of known frequency 256 Hz makes 5 beats per second with the vibrating string of a piano. The beat frequency decreases to 2 beats per second when the tension in the piano string is slightly increased. The frequency of the piano string before increasing the tension was: (A) (256 + 2) Hz (B) (256 - 2) Hz (C) (256 - 5) Hz (D) (256 + 5) Hz

**8.** [2003] A metal wire of linear mass density 10 g/m is stretched with a tension of 100 N weight between two rigid supports 1 metre apart. The wire passes at its middle point between the poles of a permanent magnet, and it vibrates in resonance when carrying an alternating current of frequency n. The frequency n of the alternating source is: (A) 25 Hz (B) 50 Hz (C) 100 Hz (D) 200 Hz

**9.** [2003] A tuning fork of known frequency 256 Hz makes 5 beats per second with the vibrating string of a piano. The beat frequency decreases to 2 beats per second when the tension in the piano string is slightly increased. The frequency of the piano string before increasing the tension was: (A) 261 Hz (B) 258 Hz (C) 254 Hz (D) 251 Hz

**10.** [2004] The displacement y of a particle in a medium can be expressed as y = -6 sin(100t + 20x + pi/4) m where t is in seconds and x in metres. The speed of the wave is: (A) 2000 m/s (B) 50 m/s (C) 20 m/s (D) 5 m/s

**11.** [2005] An observer moves towards a stationary source of sound with a velocity one-fifth of the velocity of sound. What is the percentage increase in the apparent frequency? (A) 20% (B) 5% (C) 0.5% (D) zero

**12.** [2005] When two tuning forks (fork 1 and fork 2) are sounded simultaneously, 4 beats per second are heard. Now some tape is attached to the prongs of fork 2. When the tuning forks are sounded again, 6 beats per second are heard. If the frequency of fork 1 is 200 Hz, then what was the original frequency of fork 2? (A) 204 Hz (B) 196 Hz (C) 202 Hz (D) 200 Hz

**13.** [2005] The intensity of gamma radiation from a given source is I. On passing through 36 mm of lead, it is reduced to I/8. The thickness of lead, which will reduce the intensity to I/2 will be: (A) 6 mm (B) 9 mm (C) 18 mm (D) 12 mm

**14.** [2006] A string is stretched between fixed points departed by 75 cm. It is observed to have resonant frequencies of 420 Hz and 315 Hz. There are no other resonant frequencies between these two. Then the lowest resonant frequency for this string is: (A) 105 Hz (B) 1.05 Hz (C) 1050 Hz (D) 10.5 Hz

**15.** [2006] A whistle producing sound waves of frequencies 9500 Hz and above is approaching a stationary person with velocity v meters per sound. The velocity of sound in air is 300 m/s. If person can hear frequencies up to 10000 Hz, the maximum value of v up to which he can hear the whistle is: (A) 15*sqrt(2) m/s (B) 15/sqrt(2) m/s (C) 15 m/s (D) 30 m/s

**16.** [2007] A sound absorber attenuates the sound level by 20 dB. The intensity decreases by a factor of: (A) 10000 (B) 10 (C) 100 (D) 1000

**17.** [2008] While measuring the speed of sound by performing a resonance column experiment, a student gets the first resonance condition at a column length of 18 cm during winter. Repeating the same experiment during summer, he measures the column length to be x centimeter for the second resonance. Then: (A) 18 > x (B) x > 54 (C) 54 > x > 36 (D) 36 > x > 18

**18.** [2008] The speed of sound in oxygen at a certain temperature is 460 m/s. The speed in helium at the same temperature will be (assume both gases to be ideal): (A) 460 m/s (B) 500 m/s (C) 650 m/s (D) 1420 m/s

**19.** [2008] A wave traveling along the x-axis is described by the equation y(x,t) = 0.005 cos(alpha*x - beta*t). If the wavelength and time period of the wave are 0.08 m and 2.0 s, respectively, then alpha and beta in appropriate units are: (A) alpha = 25.00*pi, beta = pi (B) alpha = 0.08/pi, beta = 2.0/pi (C) alpha = 0.04/pi, beta = 1.0/pi (D) alpha = 12.50*pi, beta = pi/2.0

**20.** [2009] A motor cycle starts from rest and accelerates along a straight path at 2 m/s^2. At the starting point of the motor cycle, there is a stationary electric siren. How far has the motor cycle gone when the driver hears the frequency of the siren at 94% of its value when the motor cycle was at rest? (Speed of sound is 330 m/s.) (A) 49 m (B) 98 m (C) 147 m (D) 196 m

**21.** [2009] Three sound waves of equal amplitudes have frequencies (v-1), v, and (v+1). They superpose to give beats. The number of beats products per second will be: (A) 4 (B) 3 (C) 2 (D) 1

**22.** [2010] The equation of a wave on a string of linear mass density 0.04 kg/m is given by y = 0.02(m) sin[2*pi*(t/0.04(s) - x/0.50(m))]. The tension in the string is: (A) 4.0 N (B) 12.5 N (C) 0.5 N (D) 6.25 N

**23.** [2010] A travelling wave represented by y = A sin(omega*t - kx) is superimposed on another wave represented by y = A sin(omega*t + kx). The resultant is: (A) a standing wave having nodes at x = (n + 1/2)*lambda/2, n = 0, 1, 2 (B) a wave travelling along +x direction (C) a wave travelling along -x direction (D) a standing wave having nodes at x = n*lambda/2; n = 0, 1, 2

**24.** [2011] Statement I: Two longitudinal waves given by equations y_1(x,t) = 2a sin(omega*t - kx) and y_2(x,t) = a sin(2*omega*t - 2kx) will have equal intensity. Statement II: Intensity of waves of given frequency in same medium is proportional to the square of amplitude only. (A) Statement I is false, Statement II is true (B) Statement I is true, Statement II is false (C) Statement I is true, Statement II is true; Statement II is the correct explanation of Statement I (D) Statement I is true, Statement II is true; Statement II is not correct explanation of Statement I

**25.** [2011] The transverse displacement y(x,t) of a wave on a string is given by y(x,t) = e^-(ax^2 + bt^2 + 2*sqrt(ab)*xt). This represents a: (A) wave moving in +x direction with speed sqrt(a/b) (B) wave moving in -x direction with speed sqrt(b/a) (C) standing wave of frequency sqrt(b) (D) standing wave of frequency 1/sqrt(b)

**26.** [2012] A cylindrical tube, open at both ends, has a fundamental frequency f in air. The tube is dipped vertically in water so that half of it is in water. The fundamental frequency of the air-column is now: (A) f (B) f/2 (C) 3f/4 (D) 2f

**27.** [2013] A sonometer wire of length 1.5 m is made of steel. The tension in it produces an elastic strain of 1%. What is the fundamental frequency all the wire if density and elasticity of steel are 7.7 x 10^3 kg/m^3 and 2.2 x 10^11 N/m^2 respectively? (A) 178.2 Hz (B) 200.5 Hz (C) 770 Hz (D) 188.5 Hz

**28.** [2014] A pipe of length 85 cm is closed from one end. Find the number of possible natural oscillations of air column in the pipe whose frequencies lie below 1250 Hz. The velocity of sound in air is 340 m/s. (A) 6 (B) 4 (C) 12 (D) 8

**29.** [2015] A train is moving on a straight track with speed 20 ms^-1. It is blowing its whistle at the frequency of 1000 Hz. The percentage change in the frequency heard by a person standing near the track as the train passes him is (speed of sound = 320 ms^-1) close to: (A) 6% (B) 12% (C) 18% (D) 24%

**30.** [2016] A uniform string of length 20 m is suspended from a rigid support. A short wave pulse is introduced at its lowest end. It starts moving up the string. The time taken to reach the support is (Take, g = 10 ms^-2): (A) 2*pi*sqrt(2) s (B) 2 s (C) 2*sqrt(2) s (D) sqrt(2) s

**31.** [2016] A pipe open at both ends has a fundamental frequency f in air. The pipe is dipped vertically in water, so that half of it is in water. The fundamental frequency of the air column is now: (A) f/2 (B) 3f/4 (C) 2f (D) f

**32.** [2017] An observer is moving with half the speed of light towards a stationary microwave source emitting waves at frequency 10 GHz. What is the frequency of the microwave measured by the observer? (speed of light = 3 x 10^8 ms^-1) (A) 12.1 GHz (B) 17.3 GHz (C) 15.3 GHz (D) 10.1 GHz

**33.** [2018] A granite rod of 60 cm length is clamped at its middle point and is set into longitudinal vibrations. The density of granite is 2.7 x 10^3 kg/m^3 and its Young's modulus is 9.27 x 10^10 Pa. What will be the fundamental frequency of the longitudinal vibrations? (A) 5 kHz (B) 2.5 kHz (C) 10 kHz (D) 7.5 kHz

**34.** [2019] A musician using an open flute of length 50 cm produces second harmonic sound waves. A person runs towards the musician from another end of a hall at a speed of 10 km/h. If the wave speed is 330 m/s, the frequency heard by the running person shall be close to: (A) 333 Hz (B) 753 Hz (C) 500 Hz (D) 666 Hz

**35.** [2019] A heavy ball is mass M is suspended from the ceiling of a car by a light string of mass m (m << M). When the car is at rest, the speed of transverse waves in the string is 60 ms^-1. When the car has acceleration a, the wave-speed increases to 60.5 ms^-1. The value of a, in terms of gravitational acceleration g, is closest to: (A) g/30 (B) g/20 (C) g/5 (D) g/10

**36.** [2019] Two coherent sources produce waves of different intensities which interfere. After interference, the ratio of the maximum intensity to the minimum intensity is 16. The intensity of the waves are in the ratio: (A) 25 : 9 (B) 16 : 9 (C) 5 : 3 (D) 4 : 1

**37.** [2019] A closed organ pipe has fundamental frequency of 1.5 kHz. The number of overtones that can be distinctly heard by a person with this organ pipe will be (Assume that the highest frequency a person can hear is 20,000 Hz): (A) 4 (B) 5 (C) 6 (D) 7

**38.** [2019] A string of length 1 m and mass 5 g is fixed at both ends. The tension in the string is 8.0 N. The string is set into vibration using an external vibrator of frequency 100 Hz. The separation between successive nodes on the string is close to: (A) 20.0 cm (B) 33.3 cm (C) 10.0 cm (D) 16.6 cm

**39.** [2019] A train moves towards a stationary observer with speed 34 m/s. The train sounds a whistle and its frequency registered by the observer is f_1. If the speed of the train is reduced to 17 m/s, the frequency registered is f_2. If speed of sound is 340 m/s, then the ratio f_1/f_2 is: (A) 20/19 (B) 19/18 (C) 21/20 (D) 18/17

**40.** [2019] Equation of travelling wave on a stretched string of linear density 5 g/m is y = 0.03 sin(450t - 9x) where distance and time are measured in SI unit. The tension in the string is: (A) 12.5 N (B) 7.5 N (C) 10 N (D) 5 N

**41.** [2019] A resonance tube is old and has jagged end. It is still used in the laboratory to determine velocity of sound in air. A tuning fork of frequency 512 Hz produces first resonance when the tube is filled with water to a mark 11 cm below a reference mark, near the open end of the tube. The experiment is repeated with another fork of frequency 256 Hz which produced first resonance when water reaches a mark 27 cm below the reference mark. The velocity of sound in air, obtained in the experiment, is close to: (A) 335 ms^-1 (B) 341 ms^-1 (C) 328 ms^-1 (D) 322 ms^-1

**42.** [2019] A travelling harmonic wave is represented by the equation y(x,t) = 10^-3 sin(50t + 2x), where x and y are in meter and t is in seconds. Which of the following is a correct statement about the wave? (A) The wave is propagating along the negative x-axis with speed 25 ms^-1 (B) The wave is propagating along the negative x-axis with speed 100 ms^-1 (C) The wave is propagating along the positive x-axis with speed 100 ms^-1 (D) The wave is propagating along the positive x-axis with speed 25 ms^-1

**43.** [2019] A person standing on an open ground hears the sound of a jet aeroplane, coming from north at an angle 60 degrees with ground level. But he finds the aeroplane right vertically above his position. If v is the speed of sound, speed of the plane is: (A) v/2 (B) 2v/sqrt(3) (C) sqrt(3)/2 * v (D) v

**44.** [2019] A wire of length 2L, is made by joining two wires A and B of same length but different radii r and 2r and made of the same material. It is vibrating at a frequency such that the joint of the two wires forms a node. If the number of antinodes in wire A is p and that in B is q then the ratio p : q is: [SVG-REF] (A) 3 : 5 (B) 1 : 4 (C) 4 : 9 (D) 1 : 2

**45.** [2019] A string is clamped at both the ends and it is vibrating in its 4th harmonic. The equation of the stationary wave is Y = 0.3 sin(0.157x) cos(200*pi*t). The length of the string is: (All quantities are in SI units.) (A) 60 m (B) 20 m (C) 80 m (D) 40 m

**46.** [2019] The pressure wave, P = 0.01 sin[1000t - 3x] Nm^-2, corresponds to the sound produced by a vibrating blade on a day when atmospheric temperature is 0 deg C. On some other day when temperature is T, the speed of sound produced by the same blade and at the same frequency is found to be 336 ms^-1. Approximate value of T is: (A) 12 deg C (B) 15 deg C (C) 11 deg C (D) 4 deg C

**47.** [2019] The correct figure that shows, schematically, the wave pattern produced by superposition of two waves of frequencies 9 Hz and 11 Hz, is: (A) [SVG-REF] (B) [SVG-REF] (C) [SVG-REF] (D) [SVG-REF]

**48.** [2019] A string 2.0 m long and fixed at its ends is driven by a 240 Hz vibrator. The string vibrates in its third harmonic mode. The speed of the wave and its fundamental frequency is: (A) 320 m/s, 80 Hz (B) 180 m/s, 120 Hz (C) 320 m/s, 120 Hz (D) 180 m/s, 80 Hz

**49.** [2019] Two cars A and B are moving away from each other in opposite directions. Both the cars are moving with a speed of 20 ms^-1 with respect to the ground. If an observer in car A detects a frequency 2000 Hz of the sound coming from car B, what is the natural frequency of the sound source in car B? (Speed of sound in air = 340 ms^-1) (A) 2060 Hz (B) 2300 Hz (C) 2250 Hz (D) 2150 Hz

**50.** [2019] A source of sound S is moving with a velocity of 50 m/s towards a stationary observer. The observer measures the frequency of the source as 1000 Hz. What will be the apparent frequency of the source when it is moving away from the observer after crossing him? (Take velocity of sound in air is 350 m/s) (A) 1143 Hz (B) 857 Hz (C) 750 Hz (D) 807 Hz

**51.** [2019] A stationary source emits sound waves of frequency 500 Hz. Two observers moving along a line passing through the source detect sound to be of frequencies 480 Hz and 530 Hz. Their respective speeds are in ms^-1. (Given speed of sound = 300 m/s) (A) 8, 18 (B) 16, 14 (C) 12, 18 (D) 12, 16

**52.** [2019] Two source of sound S_1 and S_2 produce sound waves of same frequency 660 Hz. A listener is moving from source S_1 towards S_2 with a constant speed u m/s and he hears 10 beat/s. The velocity of sound is 330 m/s. Then, u is equal to: (A) 5.5 m/s (B) 15.0 m/s (C) 10.0 m/s (D) 2.5 m/s

**53.** [2019] A small speaker delivers 2W of audio output. At what distance from the speaker will one detect 120 dB intensity sound? [Given reference intensity of sound as 10^-12 W/m^2] (A) 30 cm (B) 20 cm (C) 10 cm (D) 40 cm

**54.** [2019] A tuning fork of frequency 480 Hz is used in an experiment for measuring speed of sound (v) in air by resonance tube method. Resonance is observed to occur at two successive lengths of the air column, l_1 = 30 cm and l_2 = 70 cm. Then, v is equal to: (A) 379 ms^-1 (B) 332 ms^-1 (C) 338 ms^-1 (D) 384 ms^-1

**55.** [2019] A progressive wave travelling along the positive x-direction is represented by y(x,t) = A sin(kx - omega*t + phi). Its snapshot at t = 0 is given in the figure. [SVG-REF] For this wave, the phase phi is: (A) -pi/2 (B) pi/2 (C) pi (D) 0

**56.** [2019] A submarine (A) travelling at 18 km/hr is being chased along the line of its velocity by another submarine (B) travelling at 27 km/hr. B sends a sonar signal of 500 Hz to detect A and receives a reflected sound of frequency v. The value of v is close to: (Speed of sound in water = 1500 ms^-1) (A) 502 Hz (B) 499 Hz (C) 504 Hz (D) 507 Hz

---

### WAVES: JEE ADVANCED ARCHIVE
*Source: JEE Advanced (Archive) -- questions from 1980-2019*

**SINGLE OPTION CORRECT TYPE**

**1.** [1984] A transverse wave is described by the equation y = y0 sin 2pi(ft - x/lambda). The maximum particle velocity is equal to four times the wave velocity if:
(A) lambda = pi*y0/4 (B) lambda = pi*y0/2 (C) lambda = pi*y0 (D) lambda = 2*pi*y0
**Ans: B**

**2.** [1986] A tube, closed at one end and containing air, produces, when excited, the fundamental mode of frequency 512 Hz. If the tube is open at both ends the fundamental frequency that can be excited is (in Hz):
(A) 1024 (B) 512 (C) 256 (D) 128
**Ans: A**

**3.** [1988] A wave represented by the equation y = a cos(kx - omega*t) is superposed with another wave to form a stationary wave such that point x = 0 is a node. The equation for the other wave is:
(A) a sin(kx + omega*t) (B) a sin(kx - omega*t) (C) -a cos(kx + omega*t) (D) -a sin(kx - omega*t)
**Ans: C**

**4.** [1988] An organ pipe P1 closed at one end vibrating in its first harmonic and another pipe P2 open at both ends vibrating in its third harmonic are in resonance with a given tuning fork. The ratio of the length of P1 to that of P2 is:
(A) 8/3 (B) 3/8 (C) 1/6 (D) 1/3
**Ans: C**

**5.** [1995] An object of specific gravity rho is hung from a thin steel wire. The fundamental frequency for transverse standing waves in the wire is 300 Hz. The object is immersed in water so that one half of its volume is submerged. The new fundamental frequency in Hz is:
(A) 300*((2*rho - 1)/(2*rho))^(1/2) (B) 300*((2*rho)/(2*rho - 1))^(1/2) (C) 300*(2*rho/(2*rho - 1)) (D) 300*((2*rho - 1)/(2*rho))
**Ans: A**

**6.** [1996] The extension in a string, obeying Hook's law, is x. The speed of transverse wave in the stretched string is v. If the extension in the string is increased to 1.5x, the speed will be:
(A) 1.22 v (B) 0.61 v (C) 1.50 v (D) 0.75 v
**Ans: A**

**7.** [1996] An open pipe is suddenly closed at one end and with the result frequency of third harmonic of the closed pipe is found to be higher by 100 Hz than the fundamental frequency of the open pipe. The fundamental frequency of the open pipe is:
(A) 200 Hz (B) 300 Hz (C) 240 Hz (D) 480 Hz
**Ans: A**

**8.** [1997] A whistle giving out 450 Hz approaches a stationary observer at a speed of 33 m/s. The frequency heard by the observer in Hz is (speed of sound = 330 m/s):
(A) 409 (B) 429 (C) 517 (D) 500
**Ans: D**

**9.** [1997] A traveling wave in a stretched string is described by the equation y = A sin(kx - omega*t). The maximum particle velocity is:
(A) A*omega (B) omega/k (C) d*omega/dk (D) x/t
**Ans: A**

**10.** [1998] A string of length 0.4 m and mass 10^-2 kg is tightly clamped at its ends. The tension in the string is 1.6 N. Identical wave pulses are produced at one end at equal intervals of time, delta_t. The minimum value of delta_t which allows constructive interference between successive pulses is:
(A) 0.05 s (B) 0.10 s (C) 0.20 s (D) 0.40 s
**Ans: B**

**11.** [1999] The ratio of the speed of sound in nitrogen to that in helium gas at 300 K is:
(A) sqrt(2/7) (B) sqrt(1/7) (C) sqrt(3)/5 (D) sqrt(6)/5
**Ans: B**

**12.** [2000] A train moves towards a stationary observer with speed 34 m/s. The train sounds a whistle and its frequency registered by the observer is f1. If the train's speed is reduced to 17 m/s, the frequency registered is f2. If the speed of the sound is 340 m/s, then the ratio f1/f2 is:
(A) 18/19 (B) 1/2 (C) 2 (D) 19/18
**Ans: D**

**13.** [2000] Two vibrating strings of the same material but lengths L and 2L have radii 2r and r, respectively. They are stretched under the same tension. Both the strings vibrate in their fundamental modes, the one of length L with frequency n1 and the other with frequency n2. The ratio n1/n2 is given by:
(A) 2 (B) 4 (C) 8 (D) 1
**Ans: D**

**14.** [2000] Two monatomic ideal gases 1 and 2 of molecular masses m1 and m2, respectively, are enclosed in separate containers kept at the same temperature. The ratio of the speed of sound in gas 1 to that in gas 2 is given by:
(A) sqrt(m1/m2) (B) sqrt(m2/m1) (C) m1/m2 (D) m2/m1
**Ans: B**

**15.** [2001] Two pulses in a stretched string whose centres are initially 8 cm apart are moving towards each other as shown in the figure. The speed of each pulse is 2 cm/s. After 2 s, the total energy of the pulse will be:
(A) zero (B) purely kinetic (C) purely potential (D) partly kinetic and partly potential
**Ans: B**

**16.** [2001] The ends of a stretched wire of length L are fixed at x = 0 and x = L. In one experiment, the displacement of the wire is y1 = A sin(pi*x/L) sin(omega*t) and energy is E1 and in another experiment its displacement is y2 = A sin(2*pi*x/L) sin(2*omega*t) and energy is E2. Then:
(A) E2 = E1 (B) E2 = 2E1 (C) E2 = 4E1 (D) E2 = 16E1
**Ans: C**

**17.** [2002] A siren placed at a railway platform is emitting sound of frequency 5 kHz. A passenger sitting in moving train A records a frequency of 5.5 kHz while the train approaches the siren. During his return journey in a different train B he records a frequency of 6.0 kHz while approaching the same siren. The ratio of the velocity of train B to that of train A is:
(A) 242/252 (B) 2 (C) 4 (D) 6
**Ans: B**

**18.** [2002] A sonometer wire resonates with a tuning fork forming standing wave with five antinodes between the two bridges when a mass of 9 kg is suspended from the wire. When this mass is replaced by a mass M, the wire resonates with the same tuning fork forming three antinodes for the same positions of the bridges. The value of M is:
(A) 25 kg (B) 5 kg (C) 12.5 kg (D) 1/25 kg
**Ans: A**

**19.** [2003] A police car, moving at 22 m/s, chases a motorcyclist. The police man sounds his horn at 176 Hz, while both of them move towards a stationary siren of frequency 165 Hz. Calculate the speed of the motorcycle, if it is given that he does not observe any beats.
(A) 33 m/s (B) 22 m/s (C) zero (D) 11 m/s
**Ans: B**

**20.** [2003] In the experiment for the determination of the speed of sound in air using the resonance column method, the length of the air column that resonates in the fundamental mode, with a tuning fork is 0.1 m. When this length is changed to 0.35 m, the same tuning form resonates with the first overtone. Calculate the end correction.
(A) 0.012 m (B) 0.025 m (C) 0.05 m (D) 0.024 m
**Ans: B**

**21.** [2004] A source of sound of frequency 600 Hz is placed inside water. The speed in water is 1500 m/s and in air it is 300 m/s. The frequency of sound recorded by an observer standing in air is:
(A) 200 Hz (B) 3000 Hz (C) 120 Hz (D) 600 Hz
**Ans: D**

**22.** [2004] A pipe of length l1, closed at one end, is kept in a chamber of gas of density rho1. A second pipe open at both ends is placed in a second chamber of gas of density rho2. The compressibility of both the gases is equal. Calculate the length of the second pipe if frequency of first overtone in both the cases is equal:
(A) (4/3)*l1*sqrt(rho2/rho1) (B) (4/3)*l1*sqrt(rho1/rho2) (C) l1*sqrt(rho2/rho1) (D) l1*sqrt(rho1/rho2)
**Ans: B**

**23.** [2005] An open pipe is in resonance in 2nd harmonic with frequency f1. Now one end of the tube is closed and frequency is increased to f2 such that the resonance again occurs in nth harmonic. Choose the correct option.
(A) n = 3, f2 = (3/4)f1 (B) n = 3, f2 = (5/4)f1 (C) n = 5, f2 = (3/4)f1 (D) n = 5, f2 = (5/4)f1
**Ans: D**

**24.** [2006] A massless rod of length L is suspended by two identical strings AB and CD of equal length. A block of mass m is suspended from point O such that BO is equal to 'x'. Further it is observed that the frequency of 1st harmonic in AB is equal to 2nd harmonic frequency in CD. Then 'x' is:
(A) L/5 (B) 4L/5 (C) 3L/4 (D) L/4
**Ans: A**

**25.** [2007] In the experiment to determine the speed of sound using a resonance column:
(A) prongs of the tuning fork are kept in a vertical plane
(B) prongs of the tuning fork are kept in a horizontal plane
(C) in one of the two resonances observed, the length of the resonating air column is close to the wavelength of sound in air
(D) in one of the two resonances observed, the length of the resonating air column is closed to half of the wavelength of sound in air
**Ans: A**

**26.** [2008] A transverse sinusoidal wave moves along a string in the positive x-direction at a speed of 10 cm/s. The wavelengths of the wave is 0.5 m and its amplitude is 10 cm. At a particular time t, the snap-shot of the wave is shown in the figure. The velocity of point P when its displacement is 5 cm is:
(A) (sqrt(3)*pi/50) j-hat m/s (B) -(sqrt(3)*pi/50) j-hat m/s (C) (sqrt(3)*pi/50) i-hat m/s (D) -(sqrt(3)*pi/50) i-hat m/s
**Ans: A**

**27.** [2008] A vibrating string of certain length l under a tension T resonates with a mode corresponding to the first overtone (third harmonic) of an air column of length 75 cm inside a tube closed at one end. The string also generates 4 beats per second when excited along with a tuning fork of frequency n. Now when the tension of the string is slightly increased, the number of beats reduces to 2 per second. Assuming the velocity of sound in air to be 340 m/s, the frequency n of the tuning fork in Hz is:
(A) 344 (B) 336 (C) 117.3 (D) 109.3
**Ans: A**

**28.** [2010] A hollow pipe of length 0.8 m is closed at one end. At its open end a 0.5 m long uniform string is vibrating in its second harmonic and it resonates with the fundamental frequency of the pipe. If the tension in the wire is 50 N and the speed of sound is 320 ms^-1, the mass of the string is:
(A) 5 g (B) 10 g (C) 20 g (D) 40 g
**Ans: B**

**29.** [2011] A police car with a siren of frequency 8 kHz is moving with uniform velocity 36 km/h towards a tall building which reflects the sound waves. The speed of sound in air is 320 m/s. The frequency of the siren heard by the car driver is:
(A) 8.50 kHz (B) 8.25 kHz (C) 7.75 kHz (D) 7.50 kHz
**Ans: A**

**30.** [2012] A student is performing the experiment of resonance column. The diameter of the column tube is 4 cm. The frequency of the tuning fork is 512 Hz. The air temperature is 38 deg C in which the speed of sound is 336 m/s, the zero of the meter scale coincides with the top end of the resonance column tube. When the first resonance occurs, the reading of the water level in the column is:
(A) 14.0 cm (B) 15.2 cm (C) 16.4 cm (D) 17.6 cm
**Ans: B**

**31.** [2012] A student is performing the experiment of Resonance Column. The diameter of the column tube is 4 cm. The frequency of the tuning fork is 512 Hz. The air temperature is 38 deg C in which the speed of sound is 336 m/s. The zero of the meter scale coincides with the top end of the Resonance Column tube. When the first resonance occurs, the reading of the water level in the column is:
(A) 14.0 cm (B) 15.2 cm (C) 16.4 cm (D) 17.6 cm
**Ans: B**

**32.** [2014] A student is performing an experiment using a resonance column and a tuning fork of frequency 244 s^-1. He is told that the air in the tube has been replaced by another gas (assume that the column remain filled with the gas). If the minimum height at which resonance occurs is (0.350 +/- 0.005) m, the gas in the tube is (Useful information: sqrt(167RT) = 640 J^(1/2) mole^(-1/2); sqrt(140RT) = 590 J mole^(-1/2). The molar masses M in grams are given in the options. Take the values of sqrt(10/M) for each gas as given there.)
(A) Neon (M = 20, sqrt(10/20) = 7/10) (B) Nitrogen (M = 28, sqrt(10/20) = 3/5) (C) Oxygen (M = 32, sqrt(10/32) = 9/16) (D) Argon (M = 36, sqrt(10/36) = 17/32)
**Ans: D**

**MULTIPLE OPTIONS CORRECT TYPE**

**\*33.** [1981] A wave equation which gives the displacement along the y-direction is given by y = 10^-4 sin(60t + 2x) where x and y are in metres and t is time in seconds. This represents a wave:
(A) traveling with a velocity of 30 m/s in the negative x-direction
(B) of wavelength pi m
(C) of frequency 30/pi Hz
(D) of amplitude 10^-4 m traveling along the negative x-direction
**Ans: A, B, C, D**

**\*34.** [1985] An air column in a pipe, which is closed at one end, will be in resonance with a vibrating tuning fork of frequency 264 Hz if the length of the column (in cm) is (Speed of sound = 330 m/s):
(A) 31.25 (B) 62.50 (C) 93.75 (D) 125
**Ans: A, C**

**\*35.** [1987] The displacement of particle in a string stretched in the x-direction is represented by y. Among the following expressions for y, those describing wave motion are:
(A) cos kx sin omega*t (B) k^2*x^2 - omega^2*t^2 (C) cos^2(kx + omega*t) (D) cos(k^2*x^2 - omega^2*t^2)
**Ans: A, C**

**\*36.** [1989] Velocity of sound in air is 320 m/s. A pipe closed at one end has a length of 1 m. Neglecting end corrections, the air column in the pipe can resonate for sound of frequency:
(A) 80 Hz (B) 240 Hz (C) 320 Hz (D) 400 Hz
**Ans: A, B, D**

**\*37.** [1990] A wave is represented by the equation y = A sin(10*pi*x + 15*pi*t + pi/3) where x is in metres and t is in seconds. The expression represents:
(A) a wave traveling in the positive x-direction with a velocity 1.5 m/s
(B) a wave traveling in the negative x-direction with a velocity 1.5 m/s
(C) a wave traveling in the negative x-direction having a wavelength 0.2 m
(D) a wave traveling in the positive x-direction having a wavelength 0.2 m
**Ans: B, D**

**\*38.** [1991] Two identical straight wires are stretched so as to produce 6 beats per second when vibrating simultaneously. On changing the tension slightly in one of them, the beat frequency remains unchanged. Let T1 and T2 represent the higher and the lower initial tension in the strings. While making the above change in tension:
(A) T2 was decreased (B) T2 was increased (C) T1 was increased (D) T1 was decreased
**Ans: A, B**

**\*39.** [1995] A sound wave of frequency f travels horizontally to the right with speed v. It is reflected from a large vertical plane surface moving to left with a speed v. The speed of sound in medium is c. Then:
(A) The number of waves striking the surface per second is f*(c + v)/c
(B) The wavelength of reflected wave is c(c - v)/(f(c + v))
(C) The frequency of the reflected wave is f*(c + v)/(c - v)
(D) The number of beats heard by a stationary listener to the left of the reflecting surface is vf/(c - v)
**Ans: A, B, C**

**\*40.** [1995] A wave disturbance in a medium is described by y(x, t) = 0.02 cos(50*pi*t + pi/2) cos(10*pi*x), where x and y are in metre and t is in second. Then:
(A) A node occurs at x = 0.15 m
(B) An antinode occurs at x = 0.3 m
(C) The speed of wave is 5 m/s
(D) The wave length is 0.2 m
**Ans: A, B, C, D**

**\*41.** [1998] The (x, y) coordinates of the corners of a square plate are (0, 0), (L, 0), (L, L) and (0, L). The edges of the plate are clamped and transverse standing waves are set up in it. If u(x, y) denotes the displacement of the plate at point (x, y) at some instant of time, the possible expression(s) for u is (are) (a = positive constant):
(A) a cos(pi*x/2L) cos(pi*y/2L) (B) a sin(pi*x/L) sin(pi*y/L) (C) a sin(pi*x/L) sin(2*pi*y/L) (D) a cos(2*pi*x/L) sin(2*pi*y/L)
**Ans: B, C**

**\*42.** [1998] A transverse sinusoidal wave of amplitude a, wavelength lambda and frequency f is traveling on a stretched string. The maximum speed of any point on the string is v/10, where v is the speed of propagation of the wave. If a = 10^-3 m and v = 10 m/s, then lambda and f are given by:
(A) lambda = 2*pi x 10^-2 m (B) lambda = 10^-3 m (C) f = 10^3/(2*pi) Hz (D) f = 10^4 Hz
**Ans: A, C**

**\*43.** [1999] y(x, t) = 0.8/[(4x + 5t)^2 + 5] represents a moving pulse, where x and y are in metre and t in second. Then:
(A) pulse is moving in +x-direction
(B) in 2 s it will travel a distance of 2.5 m
(C) its maximum displacement is 0.16 m
(D) it is a symmetric pulse
**Ans: B, C, D**

**\*44.** [1999] In a wave motion y = a sin(kx - omega*t), y can represent:
(A) electric field (B) magnetic field (C) displacement (D) pressure
**Ans: A, B, C, D**

**\*45.** [1999] Standing wave can be produced:
(A) on a string clamped at both the ends
(B) on a string clamped at one end and free at the other
(C) when incident wave gets reflected from a wall
(D) when two identical waves with a phase difference of pi are moving in the same direction
**Ans: A, B, C**

**\*46.** [2012] A person blows into the open-end of a long pipe. As a result, a high-pressure pulse of air travels down the pipe. When this pulse reaches the other end of the pipe:
(A) a high-pressure pulse starts traveling up the pipe, if the other end of the pipe is open
(B) a low-pressure pulse starts traveling up the pipe, if the other end of the pipe is open
(C) a low-pressure pulse starts traveling up the pipe, if the other end of the pipe is closed
(D) a high-pressure pulse starts traveling up the pipe, if the other end of the pipe is closed
**Ans: B, D**

**\*47.** [2013] Two vehicles, each moving with speed u on the same horizontal straight road, are approaching each other. Wind blows along the road with velocity w. One of these vehicles blows a whistle of frequency f1. An observer in the other vehicle hears the frequency of the whistle to be f2. The speed of sound in still air is V. The correct statement(s) is (are):
(A) If the wind blows from the source to the observer, f2 > f1
(B) If the wind blows from the observer to the source, f2 > f1
(C) If the wind blows from observer to source, f2 < f1
(D) If the wind blows from the source to the observer, f2 < f1
**Ans: A, B**

**\*48.** [2013] A horizontal stretched string, fixed at two ends, is vibrating in its fifth harmonic according to the equation, y(x, t) = (0.01 m) sin[(62.8 m^-1)x] cos[(628 s^-1)t]. Assuming pi = 3.14, the correct statement(s) is (are):
(A) The number of nodes is 5
(B) The length of the string is 0.25 m
(C) The maximum displacement of the midpoint of the string, from its equilibrium position is 0.01 m
(D) The fundamental frequency is 100 Hz
**Ans: B, C**

**\*49.** [2014] One end of a taut string of length 3 m along the x axis is fixed at x = 0. The speed of the wave in the string is 100 ms^-1. The other end of the string is vibrating in the y direction so that stationary wave are set up in the string. The possible waveform(s) of these stationary waves is(are):
(A) y(t) = A sin(pi*x/6) cos(50*pi*t/3)
(B) y(t) = A sin(pi*x/3) cos(100*pi*t/3)
(C) y(t) = A sin(5*pi*x/6) cos(250*pi*t/3)
(D) y(t) = A sin(5*pi*x/2) cos(250*pi*t)
**Ans: A, C, D**

**\*50.** [2016] Two loudspeakers M and N are located 20 m apart and emit sound at frequencies 118 Hz and 121 Hz, respectively. A car is initially at a point P, 1800 m away from the midpoint Q of the line MN and moves towards Q constantly at 60 km/hr along the perpendicular bisector of MN. It crosses Q and eventually reaches a point R, 1800 m away from Q. Let v(t) represent the beat frequency measured by a person sitting in the car at time t. Let vP, vQ and vR be the beat frequencies measured at locations P, Q and R, respectively. The speed of sound in air is 330 ms^-1. Which of the following statement(s) is(are) true regarding the sound heard by the person?
(A) The plot below represents schematically the variation of beat frequency with time [v(t) vs t: starts at vQ, dips at Q, returns to vQ]
(B) vP + vR = 2*vQ
(C) The plot below represents schematically the variation of beat frequency with time [v(t) vs t: starts low at P, peaks at Q, returns low at R]
(D) The rate of change in beat frequency is maximum when the car passes through Q
**Ans: A, B, D**

**\*51.** [2017] A block M hangs vertically at the bottom end of a uniform rope of constant mass per unit length. The top end of the rope is attached to a fixed rigid support at O. A transverse wave pulse (Pulse 1) of wavelength lambda0 is produced at point O on the rope. The pulse takes time T_OA to reach point A. If the wave pulse of wavelength lambda0 is produced at point A (Pulse 2) without disturbing the position of M it takes time T_AO to reach point O. Which of the following options is/are correct?
(A) The velocities of the two pulses (Pulse 1 and Pulse 2) are the same at the midpoint of rope
(B) The velocity of any pulse along the rope is independent of its frequency and wavelength
(C) The wavelength of Pulse 1 becomes longer when it reaches point A
(D) The time T_AO = T_OA
**Ans: B, D**

**\*52.** [2018] In an experiment to measure the speed of sound by a resonating air column, a tuning fork of frequency 500 Hz is used. The length of the air column is varied by changing the level of water in the resonance tube. Two successive resonances are heard at air columns of length 50.7 cm and 83.9 cm. Which of the following statements is (are) true?
(A) The speed of sound determined from this experiment is 332 ms^-1
(B) The end correction in this experiment is 0.9 cm
(C) The wavelength of the sound wave is 66.4 cm
(D) The resonance at 50.7 cm corresponds to the fundamental harmonic
**Ans: A, B, C**

**LINKED COMPREHENSION TYPE**

*Paragraph for Questions 53-55* [2006]

Waves y1 = A cos(0.5*pi*x - 100*pi*t) and y2 = A cos(0.46*pi*x - 92*pi*t) are travelling along the x-axis. (Here x is in metre and t is in second)

**53.** Find the number of times intensity is maximum in time interval of 1 s.
(A) 4 (B) 6 (C) 8 (D) 10
**Ans: A**

**54.** The wave velocity of louder sound is:
(A) 100 m/s (B) 192 m/s (C) 200 m/s (D) 96 m/s
**Ans: C**

**55.** The number of times y1 + y2 = 0 at x = 0 in 1 s is:
(A) 100 (B) 46 (C) 192 (D) 96
**Ans: A**

*Paragraph for Questions 56-58* [2007]

Two trains A and B are moving with speeds 20 m/s and 30 m/s, respectively in the same direction on the same straight track with B ahead of A. The engines are at the front ends. The engine of train A blows a long whistle. Assume that the sound of the whistle is composed of components varying in frequency from f1 = 800 Hz to f2 = 1120 Hz, as shown in the figure. The spread in the frequency (highest frequency - lowest frequency) is thus 320 Hz. The speed of sound in still air is 340 m/s.

**56.** The speed of sound of the whistle is:
(A) 340 m/s for passengers in A and 310 m/s for passengers in B
(B) 360 m/s for passengers in A and 310 m/s for passengers in B
(C) 310 m/s for passengers in A and 360 m/s for passengers in B
(D) 340 m/s for passengers in both the trains
**Ans: B**

**57.** The distribution of the sound intensity of the whistle as observed by the passengers in train A is best represented by:
(A) [Intensity same as source - rectangular distribution between f1 and f2]
(B) [Different distribution]
(C) [Different distribution]
(D) [Different distribution]
**Ans: A**

**58.** The spread of frequency as observed by the passengers in train B is:
(A) 310 Hz (B) 330 Hz (C) 350 Hz (D) 290 Hz
**Ans: A**

**MATRIX MATCH TYPE**

**59.** [2011] Natural frequency of a system is called its fundamental frequency, whose wavelength is denoted as lambda_f. Match each system with statements given in Column-II describing the nature and wavelength of the standing waves.

Column-I: (A) Pipe closed at one end [length L] (B) Pipe open at both ends [length L] (C) Stretched wire clamped at both ends [length L] (D) Stretched wire clamped at both ends and at mid-point [length L]

Column-II: (P) Longitudinal waves (Q) Transverse waves (R) lambda_f = L (S) lambda_f = 2L (T) lambda_f = 4L

**Ans: A-P,T; B-P,S; C-Q,S; D-Q,R**

*Paragraph for Questions 60-61* [2019]

A musical instrument is made using four different metal strings, 1, 2, 3 and 4 with mass per unit length mu, 2mu, 3mu and 4mu respectively. The instrument is played by vibrating the strings by varying the free length in between the range L0 and 2L0. It is found that in string-1 (mu) at free length L0 and tension T0 the fundamental mode frequency is f0.

**60.** The length of the strings 1, 2, 3 and 4 are kept fixed at L0, 3L0/2, 5L0/4, and 7L0/4, respectively. Strings 1, 2, 3, and 4 are vibrated at their 1st, 3rd, 5th, and 14th harmonics, respectively such that all the strings have same frequency. The correct match for the tension in the four strings in the units of T0 will be:
(A) I->P, II->Q, III->T, IV->U (B) I->P, II->R, III->T, IV->U (C) I->P, II->Q, III->R, IV->T (D) I->T, II->Q, III->R, IV->U
**Ans: A**

**61.** If the tension in each string is T0, the correct match for the highest fundamental frequency in f0 units will be:
(A) I->Q, II->S, III->R, IV->P (B) I->P, II->R, III->S, IV->Q (C) I->P, II->Q, III->T, IV->S (D) I->Q, II->P, III->R, IV->T
**Ans: B**

**NUMERICAL VALUE TYPE**

**62.** [1980] A tube of a certain diameter and length 48 cm is open at both ends. Its fundamental frequency is found to be 320 Hz. The velocity of sound in air is 320 m/s. Estimate the diameter of the tube (in cm).
**Ans: 3.33**

**63.** [1981] A source of sound of frequency 256 Hz is moving rapidly towards wall with a velocity of 5 m/sec. How many beats per second will be heard by the observer on source itself if sound travels at a speed of 330 m/sec?
**Ans: 8**

**64.** [1982] A string 25 cm long and having a mass 2.5 gm is under tension. A pipe close at one end is 40 cm long. When the string is set vibrating in its first overtone and the air in the pipe in its fundamental frequency, 8 beats per second are heard. It is observed that decreasing the tension in the string decreases beat frequency. If the speed of sound in air is 320 m/s, find the tension (in Newton) in the string.
**Ans: 27.04**

**65.** [1983] A sonometer wire under tension of 64 Newtons vibrating in its fundamental mode is in resonance with a vibrating tuning fork. The vibrating portion of the sonometer wire has a length of 10 cm and a mass of 1 gm. The vibrating tuning fork is now moved away from the vibrating wire with a constant speed and an observer standing near the sonometer hears one beat per second. Calculate the speed (in m/s) with which the tuning fork is moved if the speed of sound in air is 300 m/s.
**Ans: 0.752**

**66.** [1984] A uniform rope of length 12 m and mass 6 kg hangs vertically from a rigid support. A block of mass 2 kg is attached to the free end of the rope. A transverse pulse of wavelength 0.06 m is produced at the lower end of the rope. What is the wavelength (in metre) of the pulse when it reaches the top of the rope?
**Ans: 0.12**

**67.** [1984] A steel wire of length 1 m, mass 0.1 kg and uniform cross-sectional area 10^-6 m^2 is rigidly fixed at both ends. The temperature of wire is lowered by 20 deg C. If transverse waves are set up by plucking the string in the middle, calculate the frequency (In S.I. units) of the fundamental mode of vibration. Young's modulus of steel = 2 x 10^11 N/m^2, coefficient of linear expansion of steel = 1.21 x 10^-5 (deg C)^-1.
**Ans: 11**

**68.** [1986] Two tuning forks with natural frequencies of 340 Hz each move relative to a stationary observer. One fork moves away from the observer, while the other moves towards him at the same speed. The observer hears beats of frequency 3 Hz. Find speed (in m/s) of the tuning fork. Speed of sound = 340 m/s.
**Ans: 1.5**

**69.** [1988] A train approaching a hill at a speed of 40 km/hr sounds a whistle of frequency 580 Hz when it is at a distance of 1 km from the hill. Wind with a speed of 40 km/hr is blowing in the direction of motion of the train. Find:
(i) The frequency of the whistle as heard by an observer on the hill.
(ii) The distance from the hill at which echo from the hill is heard by the driver and its frequency.
(Velocity of sound in air = 1200 km/hr)
**Ans: (i) 599 Hz (ii) 0.902 m, 621 Hz**

**70.** [1990] A source of sound is moving along a circular orbit of radius 3 metres with an angular velocity of 10 rad/s. A sound detector located far away from the source is executing linear simple harmonic motion along the line BD with an amplitude BC = CD = 6 metres. The frequency of oscillation of the detector is 5/pi per second. The source is at the point A when the detector is at the point B. If the source emits a continuous sound wave of frequency 340 Hz. Find the maximum and the minimum frequencies recorded by the detector. (Speed of sound = 340 m/s)
**Ans: 485.7 Hz, 257.3 Hz**

**71.** [1993] Two radio stations broadcast their programs at the same amplitude A, and at slightly different frequencies omega1 and omega2 respectively, where omega2 - omega1 = 10^3 Hz. A detector receives the signals from the two stations simultaneously. It can detect signals only of intensity >= 2A^2. Find:
(i) The time intervals between successive maxima of the intensity of the signal received by the detector.
(ii) The time for which the detector remains idle in each cycle of the intensity of the signal.
**Ans: (i) 10^-3 sec (ii) 0.5 x 10^-3 sec**

**72.** [1999] A long wire PQR is made by joining two wires PQ and QR of equal radii. PQ has length 4.8 m and mass 0.06 kg. QR has length 2.56 m and mass 0.2 kg. The wire PQR is under tension of 80 N. A sinusoidal wave pulse of amplitude 3.5 cm is sent along the wire PQ from the end P. No power is dissipated during the propagation of the wave pulse. Calculate:
(i) The time taken by the wave pulse to reach the other end R of the wire.
(ii) The amplitude of the reflected and transmitted wave pulse after the incident wave pulse crosses the joint Q.
**Ans: (i) 0.14 s (ii) A_r = -1.5 cm, A_t = 2 cm**

**73.** [2002] Two narrow cylindrical pipes A and B have the same length. Pipe A is open at both ends and is filled with a monoatomic gas of molar mass MA. Pipe B is open at one end and closed at the other end and is filled with a diatomic gas of molar mass MB. Both gases are at the same temperature.
(i) If the frequency of the second harmonic of the fundamental mode in pipe A is equal to the frequency of the third harmonic of the fundamental mode in pipe B, determine the value of MA/MB.
(ii) Now the open end of pipe B is also closed (so that pipe B is closed at both ends). Find the ratio of the fundamental frequency in pipe A to that in pipe B.
**Ans: (i) 400/189 (ii) 3/4**

**74.** [2003] In a resonance tube experiment to determine the speed of sound in air, a pipe of diameter 5 cm is used. The air column in pipe resonates with a tuning fork of frequency 480 Hz, when minimum length of air column is 16 cm. Find the speed of sound (in m/s) in air at room temperature.
**Ans: 336**

**75.** [2005] A whistling train approaches a junction. An observer standing at junction observes the frequency to be 2.2 KHz and 1.8 KHz of the approaching and the receding train respectively. Find the speed of the train (in m/s). (speed of sound = 300 m/s)
**Ans: 30**

**76.** [2009] A 20 cm long string, having a mass of 1.0 g, is fixed at both the ends. The tension in the string is 0.5 N. The string is set into vibrations using an external vibrator of frequency 100 Hz. Find the separation (in cm) between the successive nodes on the string.
**Ans: 5**

**77.** [2010] A stationary source is emitting sound at a fixed frequency f0, which is reflected by two cars approaching the source. The difference between the frequencies of sound reflected from the cars is 1.2% of f0. What is the difference in the speeds of the cars (in km per hour) to the nearest integer? The cars are moving at constant speeds much smaller than the speed of sound which is 330 ms^-1.
**Ans: 7**

**78.** [2010] When two progressive waves y1 = 4 sin(2x - 6t) and y2 = 3 sin(2x - 6t - pi/2) superimpose, the amplitude of the resultant wave is:
**Ans: 5**

**79.** [2015] Four harmonic waves of equal frequency and equal intensity I0 have phase angles 0, pi/3, 2*pi/3 and pi. When they are superposed, the intensity of the resulting wave is nI0. The value of n is:
**Ans: 3**

**80.** [2017] A stationary source emits sound of frequency f0 = 492 Hz. The sound is reflected by a large car approaching the source with a speed of 2 ms^-1. The reflected signal is received by the source and superposed with the original. What will be the beat frequency of the resulting signal in Hz? (Given that the speed of sound in air is 330 ms^-1 and the car reflects the sound at the frequency it has received).
**Ans: 6**

**81.** [2018] Two men are walking along a horizontal straight line in the same direction. The man in front walks at a speed 1.0 ms^-1 and the man behind walks at a speed 2.0 m/s^-1. A third man is standing at a height 12 m above the same horizontal line such that all three men are in a vertical plane. The two walking men are blowing identical whistles which emit a sound of frequency 1430 Hz. The speed of sound in air is 330 m s^-1. At the instant, when the moving men are 10 m apart, the stationary man is equidistant from them. The frequency of beats in Hz, heard by the stationary man at this instant, is x. Find x.
**Ans: 5**

**82.** [2019] A train S1, moving a uniform velocity of 108 km/h, approaches another train S2 standing on a platform. An observer O moves with a uniform velocity of 36 km/h towards S2, as shown in figure. Both the trains are blowing whistles of same frequency 120 Hz. When O is 600 m away from S2 and distance between S1 and S2 is 800 m, the number of beats heard by O is x. Find x. [Speed of the sound = 330 m/s]
**Ans: 8**

**FILL IN THE BLANKS TYPE**

**83.** [1983] A travelling wave has the frequency v and the particle displacement amplitude A. For the wave the particle velocity amplitude is _______ and the particle acceleration amplitude is _______.
**Ans: A(2*pi*v), A(2*pi*v)^2**

**84.** [1984] Sound waves of frequency 660 Hz fall normally on a perfectly reflecting wall. The shortest distance from the wall at which the air particles have maximum amplitude of vibration is _______ metres.
**Ans: 0.125**

**85.** [1987] In a sonometer wire, the tension is maintained by suspending a 50.7 kg mass from the free end of the wire. The suspended mass has a volume of 0.0075 m^3. The fundamental frequency of vibration of the wire is 260 Hz. If the suspended mass is completely submerged in water, the fundamental frequency will become _______ Hz.
**Ans: 240**

**86.** [1987] The following equations represent transverse waves: z1 = a cos(kx - omega*t); z2 = A cos(kx + omega*t); z3 = A cos(ky - omega*t). Identify the combination(s) of the waves which will produce:
(i) A standing wave: _______
(ii) A wave traveling in the direction making an angle of 45 degrees with the positive x and positive y axes: _______
In each case, find the positions at which the resultant intensity is always zero.
**Ans: (i) z1 and z2, x = (2n+1)*pi/(2k) where n = 0, 1, 2, ... (ii) z1 and z3, (x - y) = (2n+1)*pi/k where n = 0, 1, 2, ...**

**87.** [1989] A point source emits sound equally in all directions in a non-absorbing medium. Two points P and Q are at a distance of 9 m and 25 m respectively from the source. The ratio of the amplitudes of the waves at P and Q is _______.
**Ans: 25:9**

**88.** [1990] The amplitude of a wave disturbance propagating in the positive x-direction is given by y = 1/(1 + x^2) at time t = 0 and by y = 1/[1 + (1 - x)^2] at t = 2s, where x and y are in metres. The shape of the wave disturbance does not change during the propagation. The velocity of the wave is _______ m/s.
**Ans: 0.5**

**89.** [1991] The displacement of a medium in a sound wave is given by the equation y1 = A cos(ax + bt) where A, a and b are positive constants. The wave is reflected by an obstacle situated at x = 0. The intensity of the reflected wave is 0.64 times that of the incident wave.
(i) What are the wavelength and frequency of incident wave? _______
(ii) Write the equation for the reflected wave. _______
(iii) In the resultant wave formed after reflection, find the maximum and minimum values of the particle speeds in the medium. _______
(iv) Express the resultant wave as a superposition of a standing wave and a traveling wave. What are the positions of the antinodes of the standing wave? What is the direction of propagation of traveling wave? _______
**Ans: (i) 2*pi/a, b/(2*pi) (ii) -0.8A cos(ax - bt) (iii) 1.8Ab, 0 (iv) y = -1.6A sin(ax) sin(bt) + 0.2A cos(ax + bt); x = [n + (-1)^n/2]*pi/(2a); -x direction**

**90.** [1992] A cylindrical resonance tube open at both ends has fundamental frequency f in air. Half of the length of the tube is dipped vertically in water. The fundamental frequency to the air column now is _______.
**Ans: f**

**91.** [1992] A bus is moving towards a huge wall with a velocity of 5 m/s. The driver sounds a horn of frequency 200 Hz. The frequency of the beats heard by a passenger of the bus will be _______ Hz. (Speed of sound in air = 342 m/s.)
**Ans: 6**

**92.** [1994] A metallic rod of length 1 m is rigidly clamped at its midpoint. Longitudinal stationary waves are set up in the rod in such a way that there are two nodes on either side of the midpoint. The amplitude of an antinode is 2 x 10^-6 m.
(i) Write the equation of motion at a point 2 cm from the midpoint. _______
(ii) Write the equation of constituent waves in the rod. _______
(Y = 2 x 10^11 N/m^2 and rho = 8 x 10^3 kg/m^3)
**Ans: (i) y = 2 x 10^-6 cos(5*pi*(0.5 +/- 0.02)) sin(25000*pi*t) (ii) y1 = 10^-6 sin(25000*pi*t - 5*pi*x); y2 = 10^-6 sin(25000*pi*t + 5*pi*x)**

**93.** [1995] A gaseous mixture enclosed in a vessel of volume V consists of one mole of gas A with gamma (= Cp/Cv) = 5/3 and another gas B with gamma = 7/5 at a certain temperature T. The relative molar masses of the gas A and B are 4 and 32, respectively. The gases A and B do not react with each other and are assumed to be ideal. The gaseous mixture follows the equation PV^(19/13) = constant, in adiabatic processes.
(i) Find the number of moles of the gas B in the gaseous mixture. _______
(ii) Compute the speed of sound in the gaseous mixture at T = 300 K. (in m/s) _______
(iii) If T is raised by 1 K from 300 K, find the percentage change in the speed of sound in the gaseous mixture. _______
(iv) The mixture is compressed adiabatically to 1/5 of its initial volume V. Find the change in its adiabatic compressibility in terms of the given quantities. _______
**Ans: (i) 2 (ii) 401 (iii) 0.167 (iv) 8.27 x 10^-5 V**

**94.** [1996] A whistle emitting a sound of frequencies 440 Hz is tied to a string of 1.5 m length and rotated with an angular velocity of 20 rad/s in the horizontal plane. Calculate the range of frequencies heard by an observer stationed at a large distance from the whistle. _______
**Ans: 484 Hz to 403 Hz**

**95.** [1997] A band playing music at a frequency f is moving towards a wall at a speed vb. A motorist is following the band with a speed vm. If v is the speed of sound, obtain an expression for the beat frequency heard by the motorist. _______
**Ans: 2*vb*(V + vm)*f / (V^2 - vb^2)**

**96.** [1997] The first overtone of an open organ pipe beats with the first overtone of a closed organ pipe with a beat frequency of 2.2 Hz. The fundamental frequency of the closed organ pipe is 110 Hz. Find the lengths of the pipes. _______
**Ans: L_O = 1 +/- 0.0067 m, L_C = 0.75 m**

**97.** [1998] The air column in a pipe closed at one end is made to vibrate in its second overtone by a tuning fork of frequency 440 Hz. The speed of sound in air is 330 m/s. End corrections may be neglected. Let P0 denote the mean pressure at any point in the pipe, and Delta_P0 the maximum amplitude of pressure variation.
(i) Find the length L of the air column. _______
(ii) What is the amplitude of pressure variation at the middle of the column? _______
(iii) What are the maximum and minimum pressure at the open end of the pipe? _______
(iv) What are the maximum and minimum pressure at the closed end of the pipe? _______
**Ans: (i) 93.75 cm (ii) Delta_P0/sqrt(2) (iii) P0 always (iv) (P0 + Delta_P0), (P0 - Delta_P0)**

**98.** [2000] A 3.6 m long vertical pipe resonates with a source of frequency 212.5 Hz when water level is at certain height in the pipe.
(i) Find the height of water level (from the bottom of the pipe) at which resonance occurs. Neglect end correction. _______
(ii) Now, the pipe is filled to a height H (= 3.6 m). A small hole is drilled very close to its bottom and water is allowed to leak.
(a) Obtain an expression for the rate of fall of water level in the pipe as a function of H. _______
(b) If the radii of the pipe and the hole are 2 x 10^-2 m and 1 x 10^-3 m respectively, calculate the time interval between the occurrence of first two resonances. (Speed of sound in air = 340 m/s and g = 10 m/s^2). _______
**Ans: (i) 3.2 m, 2.4 m, 1.6 m and 0.8 m (ii)(a) -dH/dt = (1.11 x 10^-2)*sqrt(H) (b) 43 sec**

**99.** [2001] A boat is traveling in a river with a speed 10 m/s along the stream flowing with a speed 2 m/s. From this boat, a sound transmitter is lowered into the river through a rigid support. The wavelength of the sound emitted from the transmitter inside the water is 14.45 mm. Assume that attenuation of sound in water and air is negligible.
(Temperature of the air and water = 20 deg C; Density of river water = 10^3 kg/m^3; Bulk modulus of the water = 2.088 x 10^9 Pa; Gas constant R = 8.31 J/mol-K; Mean molecular mass of air = 28.8 x 10^-3 kg/mol; Cp/Cv for air = 1.4)
(i) What will be the frequency detected by a receiver kept inside the river downstream? _______
(ii) The transmitter and the receiver are now pulled up into air. The air is blowing with a speed 5 m/s in the direction opposite the river stream. Determine the frequency of the sound detected by the receiver. _______
**Ans: (i) 1.007 x 10^5 Hz (ii) 1.03 x 10^5 Hz**

**TRUE/FALSE TYPE**

**100.** [1980] A man stands on the ground at a fixed distance from a siren which emits sound of fixed amplitude. The man hears the sound to be louder on a clear night than on a clear day.
**Ans: False**

**101.** [1983] The ratio of the velocity of sound in hydrogen gas (gamma = 7/5) to that in helium gas (gamma = 5/3) at the same temperature is sqrt(21/5).
**Ans: False**

**102.** [1984] A plane wave of sound traveling in air is incident upon a plane water surface. The angle of incidence is 60 degrees. Assuming Snell's law to be valid for sound waves, it follows that the sound wave will be refracted into water away from the normal.
**Ans: True**

**103.** [1985] A source of sound with frequency 256 Hz is moving with a velocity V towards a wall and an observer is stationary between the source and the wall. The observer will hear beats.
**Ans: False**

---

**JEE Advanced Answer Key**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | B | A | C | C | A | A | A | D | A | B | B | D | D | B | B |

| Q# | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | C | B | A | B | B | D | B | D | A | A | A | A | B | A | B |

| Q# | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | B | D | ABCD | AC | AC | ABD | BD | AB | ABC | ABCD | BC | AC | BCD | ABCD | ABC |

| Q# | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | BD | AB | BC | ACD | ABD | BD | ABC | A | C | A | B | A | A | (see above) | A |

| Q# | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | B | 3.33 | 8 | 27.04 | 0.752 | 0.12 | 11 | 1.5 | (see above) | (see above) | (see above) | (see above) | (see above) | 336 | 30 |

| Q# | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | 5 | 7 | 5 | 3 | 6 | 5 | 8 | (see above) | 0.125 | 240 | (see above) | 25:9 | 0.5 | (see above) | f |

| Q# | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99 | 100 | 101 | 102 | 103 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | 6 | (see above) | (see above) | (see above) | (see above) | (see above) | (see above) | (see above) | (see above) | False | False | True | False |
