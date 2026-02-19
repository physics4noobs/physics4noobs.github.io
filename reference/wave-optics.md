# Wave Optics

## Overview
Wave optics deals with the wave nature of light, focusing on phenomena like interference, diffraction, and polarization. This chapter covers the superposition principle, interference patterns from coherent sources, and the fundamental experiments that demonstrate light's wave behavior, including Young's double slit experiment, Fresnel's biprism, Lloyd's mirror, and Huygens' principle for reflection and refraction.

---

## 1. Interference of Waves

### Concepts
- Interference occurs when two or more waves overlap in the same region of space
- The resultant wave depends on the amplitudes and phase difference between waves
- Path difference converts to phase difference: `Δφ = (2π/λ) × (path difference)`
- Sources are said to be in the same phase when phase difference is 2πn (where n is an integer)
- Sources are in opposite phase when phase difference is (2n+1)π

### Formulas
- `y₁ = A₁ sin(2πt/T - 2πx₁/λ + φ₁)` - displacement from first source
- `y₂ = A₂ sin(2πt/T - 2πx₂/λ + φ₂)` - displacement from second source
- `Δφ = (2π/λ)(x₂ - x₁) + φ₁ - φ₂` - phase difference at point P
- `A = √(A₁² + A₂² + 2A₁A₂ cos Δφ)` - resultant amplitude
- `x₂ - x₁ = p` - path difference
- If `φ₁ - φ₂ = 2πn`, then `Δφ = (2π/λ) p = 2πn` - sources in same phase
- If `φ₁ - φ₂ = (2n+1)π`, then `Δφ = (2π/λ) p = (2n+1)π` - sources in opposite phase

### Important Notes
- Resultant amplitude depends on both individual amplitudes and phase difference
- Maximum amplitude occurs when cos Δφ = 1 (constructive interference)
- Minimum amplitude occurs when cos Δφ = -1 (destructive interference)
- For sources in same phase: condition for constructive interference is Δφ = 2πn or p = nλ
- For sources in same phase: condition for destructive interference is Δφ = (2n+1)π or p = (odd number)λ/2
- Path difference is physical distance difference between waves reaching a point

### Worked Example
**Q:** Two speakers connected to the same source of fixed frequency are placed 2.0 m apart in a box. A sensitive microphone placed at a distance of 4.0 m from their midpoint along the perpendicular bisector shows maximum response. The box is slowly rotated till the speakers are in the same line with the microphone. The distance between the mid-point of the speakers and the microphone remains unchanged. Exactly 5 more maximum responses are heard in the microphone in doing this with the 5th maximum heard in the final orientation. Calculate the wavelength of the sound.

**A:**
- Initial position: Path difference = S₁M - S₂M = 0 (on perpendicular bisector)
- For maximum response (constructive interference): p = 0, λ, 2λ, 3λ, 4λ, 5λ
- Final position: Path difference = S₁M - S₂M = 2m
- Since 5 more maxima are heard, the fifth maximum corresponds to p = 5λ
- Therefore: 2 = 5λ
- λ = 0.4 m

---

## 2. Young's Double Slit Experiment

### Concepts
- Two coherent sources of light (S₁ and S₂) separated by small distance d produce interference pattern
- Light travels from sources to screen at distance D away
- Interference pattern consists of bright fringes (constructive) and dark fringes (destructive)
- The pattern shows alternating bands of dark and bright light called fringes
- Dark bands are called dark fringes, bright bands are called bright fringes
- Path difference at point P on screen: `p = S₂P - S₁P ≈ xd/D` (for small angle approximation where d << D)

### Formulas
- `p = xd/D` - path difference at point on screen at distance x from center (for d << D)
- Bright fringes: `p = 0, λ, 2λ, 3λ, ...` or `x = 0, Dλ/d, 2Dλ/d, 3Dλ/d, ...`
- Position of nth bright fringe: `xₙ = nDλ/d`
- Dark fringes: `p = λ/2, 3λ/2, 5λ/2, ...` or at positions with odd multiples of λ/2
- Position of nth dark fringe: `xₙ = (2n-1)Dλ/2d`
- Fringe width: `ω = Dλ/d` (distance between consecutive bright or dark fringes)
- Angular fringe width: `θ = ω/D = λ/d`

### Important Notes
- Path difference is approximately `xd/D` when d << D
- Fringe width is constant for a given setup
- Larger wavelength produces wider fringes
- Larger slit separation produces narrower fringes
- Larger screen distance produces wider fringes
- Central bright fringe is at O where path difference is zero

### Worked Example
**Q:** Two point sources of radiation S₁ and S₂ radiate waves of same frequency and are excited by the same oscillator. They are also in phase with each other. S₁ is placed at origin O while S₂ is placed at the point (0, 4) on Y-axis. Find the points of maxima of received intensity if a detector is moved towards positive X-axis starting from origin. The wavelength of radiation is 1m.

**A:**
- Let the detector be at point D (x, o)
- Let S₁S₂ = d = 4m
- Path difference = S₂D - S₁D = `√(x² + d²) - x = √(x² + 16) - x`
- For constructive interference: `√(x² + 16) - x = n` where n = 0, 1, 2, 3...
- `√(x² + 16) = x + n`
- `x² + 16 = x² + 2xn + n²`
- `16 = 2xn + n²`
- `x = (16 - n²)/(2n) = (8 - n/2)/n`
- First maxima (n=3): x = (16-9)/6 = 7/6 m ≈ 1.17 m
- Second maxima (n=2): x = (16-4)/4 = 3 m
- Third maxima (n=1): x = (16-1)/2 = 7.5 m

---

## 3. Fringe Width and Pattern Displacement

### Concepts
- Fringe width is the distance between two consecutive bright or dark fringes
- When a transparent plate is placed in the path of one of the interfering beams, the fringe pattern shifts
- The shift depends on the thickness, refractive index, and wavelength
- Path difference changes because light takes longer to traverse the plate
- Time taken to cross a plate of thickness t and refractive index μ: `t_plate = t/(c/μ) + t_air/c`

### Formulas
- `ω = Dλ/d` - fringe width in double slit experiment
- Path difference with plate: `p = xd/D - t(μ-1)`
- Shift of fringe pattern: `shift = Dt(μ-1)/d`
- Effective path = `S₁P + t(μ-1)` where t is plate thickness and μ is refractive index
- Angular fringe width: `θ = λ/d`
- Time relation: `t_plate/v_plate + t_air/v_air = (t/(c/μ) + t_air/c)` showing effective path change

### Important Notes
- Placing a transparent plate shifts the entire fringe pattern
- The shift is proportional to (μ-1)t where μ is refractive index and t is thickness
- Shift direction depends on which slit the plate covers
- The fringes become less distinct if the intensity of the two sources differs greatly
- Shift is in the direction of the slit covered by the plate

### Worked Example
**Q:** In a Young's double slit experiment the angular width of a fringe formed on a distant screen is 0.1°. The wavelength of the light used is 6000Å. What is the spacing between the slits?

**A:**
- Angular width: θ = ω/D = λ/d
- θ = 0.1° = 0.1 × π/180 radians
- λ/d = 0.1π/180
- d = λ × 180/(0.1π)
- d = 6000 × 10⁻¹⁰ × 180/(0.1π)
- d = 6 × 10⁻⁷ × 1800/π
- d ≈ 3.44 × 10⁻⁴ m

---

## 4. Constructive and Destructive Interference

### Concepts
- Constructive interference: waves add up to produce maximum amplitude
- Destructive interference: waves cancel out to produce minimum amplitude
- The type of interference depends on phase difference between waves
- For identical amplitude sources, constructive interference gives 4I₀ and destructive gives 0
- The conditions differ when sources are in opposite phase

### Formulas
- For constructive interference: `Δφ = even multiple of π` or `Δφ = 2nπ` (n = 0, 1, 2...)
- Maximum amplitude: `A_max = A₁ + A₂`
- For destructive interference: `Δφ = odd multiple of π` or `Δφ = (2n+1)π`
- Minimum amplitude: `A_min = |A₁ - A₂|`
- Resultant intensity: `I = I₁ + I₂ + 2√(I₁I₂) cos Δφ`
- Maximum intensity: `I_max = (√I₁ + √I₂)²` for Δφ = 0 or 2π
- Minimum intensity: `I_min = (√I₁ - √I₂)²` for Δφ = π or (2n+1)π
- For opposite phase sources, conditions are reversed: constructive at `p = (odd)λ/2`, destructive at `p = nλ`

### Important Notes
- For identical amplitude sources: I₁ = I₂ = I₀, then I_max = 4I₀ and I_min = 0
- Ratio of amplitudes: `A_max/A_min = (A₁ + A₂)/(A₁ - A₂) = (r+1)/(r-1)` where r = A₁/A₂
- Ratio of intensities: `I_max/I_min = ((r+1)/(r-1))²`
- When r = 1 (equal amplitudes): I_max/I_min = ∞ (perfect contrast)
- When sources are in opposite phase: constructive becomes destructive and vice versa

### Worked Example
**Q:** The path difference at a certain point on screen in a double-slit experiment is one-eighth of the wavelength. Find the ratio of intensity at this point and the intensity at central maximum.

**A:**
- At central maximum: constructive interference occurs (Δφ = 0)
- I_centre = I_max (assuming equal intensity sources)
- At the given point: Δφ = (2π/λ) × (path diff) = (2π/λ) × (λ/8) = π/4
- I = I_max cos²(Δφ/2) = I_max cos²(π/8)
- cos(π/8) = √((1 + cos(π/4))/2) = √((1 + √2/2)/2)
- I/I_max = cos²(π/8) ≈ 0.854

---

## 5. Intensity in Interference Pattern

### Concepts
- Intensity at any point depends on the phase difference between interfering waves
- For equal amplitude sources: I = I_max cos²(Δφ/2)
- The intensity distribution follows a cosine-squared function
- Maximum intensity occurs at positions where phase difference is even multiple of π
- Minimum intensity occurs at positions where phase difference is odd multiple of π
- The pattern has a periodic structure with period equal to fringe width

### Formulas
- `I = I₁ + I₂ + 2√(I₁I₂) cos Δφ` - resultant intensity
- For equal intensities I₁ = I₂ = I₀: `I = 2I₀(1 + cos Δφ) = 4I₀ cos²(Δφ/2)`
- `I_max = 4I₀` and `I_min = 0` for equal amplitude sources
- For sources in same phase: `A = A_max cos(Δφ/2)`
- `I(x) = I_max cos²(πx/ω)` where ω is fringe width (sources in same phase)
- Ratio of max to min: `I_max/I_min = ((r+1)/(r-1))²` where r = √(I₁/I₂)
- Position along screen: x measured from central maximum O

### Important Notes
- Graph of intensity vs distance is a series of peaks and valleys
- Distance between consecutive maxima equals one fringe width ω
- Intensity distribution is symmetric about central maximum
- The visibility of fringes decreases if amplitudes of sources are very different
- Visibility V = (I_max - I_min)/(I_max + I_min) ranges from 0 to 1

### Worked Example
**Q:** In a Young's double slit experiment the central bright fringe can be identified as it has the greater intensity than the other bright fringes. The intensity of light from S₁ and S₂ is the same. Explain using the property of double slit experiment.

**A:**
- At central maximum O, path difference = 0
- Phase difference Δφ = 0
- Resultant amplitude A = A_max = A₁ + A₂ = 2A₀
- Intensity at central maximum: I_centre = (2A₀)² = 4I₀ = I_max
- At other bright fringes, condition is p = nλ where n = 1, 2, 3... but they are at positions where both sources contribute with slight path variations
- However, central maximum has the exact shortest possible path difference (zero) ensuring perfect constructive interference
- Additionally, the fringe width formula `ω = Dλ/d` shows all bright fringes have same spacing, but intensity envelope may vary
- Central maximum stands out as highest intensity point on the screen

---

## 6. Fresnel's Biprism Experiment

### Concepts
- Uses a biprism (glass prism of very small base angle) to create two coherent virtual sources
- Light from a single source passes through the biprism and gets refracted
- Refracting rays emerge from upper and lower halves and create two virtual images S₁ and S₂
- The virtual images act as coherent sources producing interference pattern
- The biprism has angle α = 1°/3 (approximately)
- Fringe pattern is formed in the region where both virtual image light beams overlap

### Formulas
- Biprism angle: `α = 1°/3` (approximately 0.0167 radians)
- Deviation: `δ = (μ-1)α` (for small-angled prism)
- Separation of virtual sources: `d = 2aδ` where a is distance of source from biprism
- `d = 2a(μ-1)α` - separation between virtual images S₁ and S₂
- Fringe width: `ω = Dλ/d` where D is distance from biprism to screen
- This is same formula as Young's double slit: `ω = Dλ/d`

### Important Notes
- Virtual images are coherent and in phase
- The light intensity from S₁ and S₂ may differ depending on the orientation
- Fringe pattern is similar to Young's double slit experiment
- The advantage is using a single monochromatic source instead of two separate sources
- Separation of virtual sources: d = S₁S₂ depends on biprism angle and source distance

### Worked Example
**Q:** In a Fresnel's biprism experiment, a narrow slit illuminated by monochromatic light of wavelength 6000Å is placed 5cm behind the biprism. A screen is placed at a distance of 1m from the biprism on the other side. A convex lens placed 25 cm from the biprism and 75 cm from the screen forms the real images of coherent sources on the screen. These images are found 0.3 cm apart from each other. The lens is then removed. (i) What is the fringe width of the interference pattern on screen? (ii) If exactly 20 fringes are observed on the screen, what is the length occupied by the fringe pattern?

**A:**
(i) For the convex lens:
- Object distance u = a + 25 = 5 + 25 = 30 cm
- Image distance v = 75 cm
- Magnification = v/u = 75/30 = 2.5
- Size of virtual images on screen = 0.3 cm
- Size of object S₁S₂ = d = (size of image)/(magnification) = 0.3/2.5 = 0.12 cm = 1.2 mm
- D = a + ℓ = 5 + 100 = 105 cm
- λ = 6 × 10⁻⁵ cm
- Fringe width ω = Dλ/d = (105 × 6 × 10⁻⁵)/0.12 = 5.25 × 10⁻³ cm

(ii) Length of fringe pattern = ω × no of fringes = 5.25 × 10⁻³ × 20 = 0.105 cm = 1.05 mm

---

## 7. Lloyd's Mirror Experiment

### Concepts
- Uses a plane mirror to create a virtual image of the light source
- A real source S and its virtual image S' (reflected in mirror) act as two coherent sources
- The fringe pattern is formed only in the region where light from both S and S' reaches
- Important distinction: light from S' (reflected light) undergoes phase change of π radians
- This means S and S' are effectively out of phase (phase difference = π)
- The line where the mirror surface is acts as the dividing line

### Formulas
- Fringe width: `ω = Dλ/d` where d = 2h (h is height of source above mirror)
- Distance of sources from screen: D
- Separation between S and S': `d = S₁S₂ = 2h`
- Since reflection causes π phase change: sources are in opposite phase
- For dark fringe (opposite phase): `p = nλ` (opposite to normal double slit)
- For bright fringe (opposite phase): `p = (2n-1)λ/2` (opposite to normal double slit)
- Central fringe is dark (because of π phase difference from reflection and zero path difference)

### Important Notes
- The phase change of π occurs due to reflection from a denser medium (mirror surface)
- Light from S' (reflected light) is in opposite phase with light from S
- Conditions for constructive and destructive interference are reversed compared to normal double slit
- Central fringe (path difference = 0) is a dark fringe because of π phase change
- Fringe visibility can be improved by shifting the screen close to mirror's right edge
- The fringes form a complementary pattern to what would be seen without the mirror

### Worked Example
**Q:** In a Young's double slit experiment, the angular width of a fringe formed on a distant screen is 0.1°. The wavelength of the light used is 6000Å. What is the spacing between the slits?

**A:**
- Angular width: θ = ω/D = λ/d
- 0.1° = 0.1 × π/180 radians
- λ/d = 0.1π/180
- d = λ × 180/(0.1π)
- d = 6000 × 10⁻¹⁰ × 180/(0.1π)
- d ≈ 3.44 × 10⁻⁴ m

---

## 8. Huygens' Principle and Wavefront

### Concepts
- Wavefront is defined as a surface of constant phase (locus of all points oscillating in phase)
- Each point on the wavefront acts as a source of secondary disturbances
- These secondary wavelets spread out in all directions with the speed of the wave
- The new wavefront at a later time is the envelope of all these secondary wavelets
- Huygens' principle allows determination of new wavefront position if current wavefront is known
- Can be used to explain both reflection and refraction of waves at interfaces

### Formulas
- For refraction: `sin i/sin r = c₁/c₂ = λ₁/λ₂` (derived from Huygens principle)
- Snell's law derived: `n₁ sin i = n₂ sin r` where `n₁ = c/c₁` and `n₂ = c/c₂`
- For reflection: angle of incidence = angle of reflection (i = r)
- Wavelength in medium 2: `λ₂ = λ₁ × (c₂/c₁)`
- Frequency remains constant in all media: `f = c/λ = c₁/λ₁ = c₂/λ₂`

### Important Notes
- Huygens' principle is a geometrical construction method
- Secondary wavelets combine constructively in the forward direction
- Backward propagation is suppressed (combination gives zero amplitude)
- The principle explains refraction and reflection of light
- Every point on wavefront contributes to formation of new wavefront
- The envelope of secondary wavelets gives the new wavefront position

### Worked Example
**Q:** Explain the refraction of a plane wave using Huygens' principle.

**A:**
- Consider plane wave AB incident at angle i on interface separating media 1 and 2
- Speed of light in medium 1 is c₁ and in medium 2 is c₂ (assume c₁ > c₂)
- Point B touches the interface first and becomes source of secondary wavelets
- In time t (taken by wavefront to travel from A to C), the secondary wavelet from B travels distance c₂t in medium 2
- Meanwhile, point A in medium 1 travels distance c₁t before reaching the interface at point C
- The new wavefront CE is tangent to all secondary wavelets emanating from interface
- From geometry of the construction: sin i = BC/AC = c₁t/AC and sin r = AE/AC = c₂t/AC
- Therefore: sin i/sin r = c₁/c₂
- This proves Snell's law: `n₁ sin i = n₂ sin r`

---

## 9. Path Difference and Optical Path

### Concepts
- Path difference is the difference in distances traveled by light from two sources to a point
- Path difference directly determines the phase difference at that point
- Optical path is the product of refractive index and geometric path length
- Optical path difference accounts for the different speeds of light in different media
- Two rays with same geometric path but passing through different media will have different optical paths

### Formulas
- Geometric path difference: `p = x₂ - x₁`
- Phase difference: `Δφ = (2π/λ) × p`
- Optical path difference: `Δ = μ₁x₁ + μ₂x₂ - ...` (sum of refractive index × path in each medium)
- Path difference in terms of wavelength: `p = nλ` for constructive, `p = (n + 1/2)λ` for destructive
- When light passes through plate: effective path = `original path + t(μ-1)` where t is thickness
- Phase difference from path: `Δφ = (2π/λ) × (optical path difference)`

### Important Notes
- Path difference of λ corresponds to phase difference of 2π
- Path difference of λ/2 corresponds to phase difference of π
- Optical path accounts for speed changes in different media
- Two rays with same geometric path but different media will have different optical paths
- A plate of thickness t and index μ introduces effective path difference of `t(μ-1)`

### Worked Example
**Q:** A glass plate of refractive index 1.5 is coated with a thin layer of thickness t and refractive index 1.8. Light of wavelength 648 nm travelling in air is incident normally on the layer. It is partly reflected at the upper and lower surfaces of the layer and the two reflected rays interfere. Write the condition for their constructive interference. If wavelength is 648 nm, obtain the least value of t for which the rays interfere constructively.

**A:**
- Ray 1 is reflected from upper surface (denser medium): phase change = π
- Ray 2 is reflected from lower surface (rarer medium to air boundary): no phase change
- Path difference between two rays = 2μt (for normal incidence, where μ = 1.8)
- Phase difference from path = (2π/λ) × 2μt = 4πμt/λ
- Additional phase from reflection on upper surface = π
- Total phase difference: Δφ = π + 4πμt/λ
- For constructive interference: Δφ = (n - 1/2) × 2π where n = 1, 2, 3...
- Therefore: π + 4πμt/λ = 2π(n - 1/2)
- 1 + 4μt/λ = 2n - 1
- 4μt/λ = 2n - 2 = 2(n - 1)
- t = λ(n-1)/(2μ)
- For least value when n = 1: t_min = λ × 0/(2 × 1.8) = 0 (this doesn't work)
- For n = 2: t_min = λ/(2 × 1.8) = 648/(2 × 1.8 × 7.2) = 648/25.92 ≈ 25 nm

---

## 10. Multiple Slit Interference

### Concepts
- Multiple slits create sharp interference maxima (principal maxima) and secondary minima
- Condition for principal maxima: `d sin θ = nλ` where d is slit separation
- Each slit also produces a diffraction pattern (envelope effect)
- The resulting pattern is the product of single slit diffraction pattern and multiple slit interference pattern
- Gratings with many slits produce very sharp and bright principal maxima
- Between principal maxima, there are N-2 secondary minima (where N = number of slits)

### Formulas
- Principal maxima: `d sin θ = nλ` (n = 0, 1, 2...)
- Secondary minima between principal maxima occur when: `d sin θ = (nλ + λ/N)` where N is number of slits
- Number of secondary minima between principal maxima: N-1 (creates N-2 bright secondary maxima)
- Width of principal maximum decreases with increase in number of slits
- For N slits: intensity at principal maxima ∝ N²
- Grating equation: `d(sin θ_m - sin θ_i) = mλ` for diffraction grating

### Important Notes
- Principal maxima are sharp and distinct with width inversely proportional to number of slits
- Secondary maxima are much weaker than principal maxima
- Width of fringe pattern remains same but visibility improves with more slits
- As N increases, principal maxima become sharper (narrower)
- The spacing between principal maxima depends on d, λ, and angle

---

## 11. Diffraction from Single Slit

### Concepts
- Single slit diffraction produces a pattern with central bright maximum and side minima
- Minima occur when path difference from edges of slit equals odd multiple of λ/2
- Central maximum is much brighter and wider than other maxima
- The diffraction pattern becomes more pronounced for narrower slits
- Pattern is symmetric about the central maximum
- All the light from the slit must be considered to find the diffraction pattern

### Formulas
- Single slit diffraction minima: `b sin θ = nλ` where b is slit width and n = 1, 2, 3...
- Position of nth minimum: `xₙ = nDλ/b` (for small angles, where D is screen distance)
- Width of central maximum: `W = 2Dλ/b` (distance between first minima on either side)
- Angular position of nth minimum: `θₙ = nλ/b` (for small angles)
- Intensity at center of pattern: maximum
- Intensity decreases away from center as `sin²(πb sin θ/λ)/(πb sin θ/λ)²`

### Important Notes
- Dark fringes occur when path difference from slit edges = λ/2, 3λ/2, 5λ/2...
- Central maximum has width 2Dλ/b (wider than bright fringes in double slit with same d)
- Narrower slit produces wider diffraction pattern
- Larger wavelength produces wider diffraction pattern
- Secondary maxima are much weaker (about 4% of central maximum intensity)

---

## 12. Rayleigh Criterion and Resolution

### Concepts
- Rayleigh criterion determines the minimum angular separation for two sources to be resolved
- Two sources are just resolved when central maximum of one coincides with first minimum of other
- Resolution limit depends on wavelength and aperture size
- Diffraction limit cannot be overcome by increasing magnification alone
- This criterion applies to telescopes, microscopes, and other optical instruments

### Formulas
- Rayleigh criterion: `θ_min = 1.22 λ/D` for circular aperture (D is aperture diameter)
- For rectangular aperture: `θ_min = λ/b` where b is slit width
- Linear separation for two sources just resolved: `s = 1.22 λD/a` where a is aperture diameter
- Resolving power of optical instrument: `R = D/λ` where D is aperture size
- For telescope: minimum angular separation = `1.22 λ/D`

### Important Notes
- Shorter wavelengths give better resolution
- Larger apertures give better resolution
- Diffraction sets the ultimate limit on resolution
- Practical limitations include optical aberrations and environmental disturbances
- The factor 1.22 comes from first minimum of Bessel function for circular aperture

---

## 13. Brewster's Angle and Polarization by Reflection

### Concepts
- Unpolarized light vibrates in all directions perpendicular to propagation
- Brewster's angle: angle at which reflected light is completely polarized
- At Brewster's angle, reflected and refracted rays are perpendicular (i + r = 90°)
- The reflected light contains only one polarization direction (perpendicular to plane of incidence)
- This phenomenon occurs at the interface between two transparent media with different refractive indices

### Formulas
- Brewster's angle: `tan θ_B = n₂/n₁` (ratio of refractive indices)
- For air-glass interface: `tan θ_B = n_glass ≈ 1.5`, so `θ_B ≈ 56.3°`
- At Brewster's angle: angle of incidence + angle of refraction = 90°, so `i + r = 90°`
- Condition: `sin i/sin r = n₂/n₁` becomes `tan θ_B = n₂/n₁` when i + r = 90°

### Important Notes
- Reflected light is completely polarized perpendicular to plane of incidence
- Refracted light is partially polarized (parallel component reduced)
- Brewster's angle depends on the pair of media involved
- No reflected light at Brewster's angle for one polarization component
- This principle is used in polarizing filters and reducing reflections

---

## 14. Malus's Law and Crossed Polarizers

### Concepts
- Malus's law describes intensity of light after passing through a polarizer
- When two polarizers are crossed (90° apart), no light passes
- Polaroid filters transmit only one polarization direction
- Double polarizers can be used to measure polarization angle
- Unpolarized light becomes polarized after passing through first polarizer

### Formulas
- Malus's law: `I = I₀ cos² θ` (intensity after passing through polarizer)
- For two successive polarizers at angle θ: `I = I₀ cos² θ`
- For unpolarized light through single polarizer: `I = I₀/2`
- For completely polarized light at angle θ: `I = I₀ cos² θ`
- For two crossed polarizers: `I = 0` (no transmission when θ = 90°)

### Important Notes
- When θ = 0° (parallel polarizers): maximum transmission (I = I₀)
- When θ = 90° (crossed polarizers): minimum transmission (I = 0)
- Average intensity through crossed polarizers is zero
- Polarizers are used in LCD screens and sunglasses
- Three polarizers can transmit light even if first and third are crossed

---

## 15. Dispersion and Prism

### Concepts
- Dispersion is the separation of light into its component colors/wavelengths
- Different wavelengths have different refractive indices in a medium
- Prism disperses white light into spectrum due to wavelength-dependent refraction
- Angular dispersion depends on prism angle and material properties
- Chromatic aberration in lenses is due to dispersion
- Minimum deviation condition occurs when ray passes symmetrically through prism

### Formulas
- Deviation angle: `δ = i + e - A` where i is incident angle, e is emergent angle, A is prism angle
- Minimum deviation: `sin((A + δ_m)/2) = n sin(A/2)` where n is refractive index
- At minimum deviation: `i = e` and ray passes symmetrically through prism (inside angle = A/2)
- Angular dispersion: `dδ/dλ` relates deviation change to wavelength change
- Dispersive power: `ω = (n_B - n_R)/(n_Y - 1)` (ratio for blue, red, yellow wavelengths)
- Refractive index variation: `μ(λ) = A + B/λ²` (example form)

### Important Notes
- Red light has longer wavelength and bends less (lower refractive index)
- Violet light has shorter wavelength and bends more (higher refractive index)
- At minimum deviation, the ray path through prism is symmetric
- Dispersion is used in spectrometers to analyze light composition
- Prism has advantage over grating: no overlap of orders, continuous spectrum visible

---

## Questions

### ANSWER KEYS (Reference)

**Workbook Answer Key - Level 0**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | C | D | B | C | A | C | B | C | A | B | C | B | B | A | C |

| Q# | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | C | B | B | B | D | D | B | D | C | A | D | D | C | D | B |

**Workbook Answer Key - Level 1**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | C | B | C | C | A | C | B | C | A | B | C | B | B | A | C |

| Q# | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | B | B | B | D | D | B | D | C | A | D | D | C | D | B | C |

**Workbook Answer Key - Level 2**

| Q# | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | B | I | B | 3 | [A-q], [B-p], [C-p], [D-p] | ABD | AC | 5 | B | 7 | D | AB |

| Q# | 58 | 59 | 60 | 61 | 62 | 63 | 64 | 65 |
|---|---|---|---|---|---|---|---|---|
| Ans | A | A | AC | 3 | ABCD | BC | D | [A-r], [B-r], [C-s], [D-p] |

**Workbook Answer Key - JEE Main (Archive)**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | A | B | C | C | B | D | A | B | D | C | C | C | C | A | C |

| Q# | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | D | B | B | C | C | C | C | B | B | D | C | None | D | B | C |

| Q# | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | D | D | C | C | B | C | 9 | C | D | A | 750 |

**Workbook Answer Key - JEE Advanced (Archive)**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | D | C | A | A | B | B | A | B | D | C | C | A | D | B | A |

| Q# | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | BD | AC | ABC | AB | ABC | BC | BC | A | C | B | 13.9 | 5892 | 9.3 |

| Q# | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | (i) 7 x 10^-6 m | (ii) 1.6, 5.7 x 10^-5 | (i) (4.33nm) (ii) (3/4) (iii) (650, 433.33) | 3.5 | 3 | [A-p, s], [B-q], [C-t], [D-r, s, t] | 2 x 10^8 m/s, 4000Å | 2 | (i) μ₀ε₀^(-1/2) | (i) (1mm) (ii) (increase) | 5 x 10^(-1, 4000 | True | False | A |

---

### WAVE OPTICS: LEVEL 0 (EASY)

**1.** State Huygens's principle of light.
(A) Each point on a wavefront acts as a source of secondary waves (B) Light travels in straight lines (C) Light reflects at interfaces (D) Light refracts based on density

**2.** What type of wavefront will emerge from a (i) point source, and (ii) distant light source?
(A) Spherical, plane (B) Plane, spherical (C) Cylindrical, plane (D) Circular, elliptical

**3.** Define the term 'coherent sources' which are required to produce interference pattern in Young's double slit experiment.
(A) Sources that have the same frequency and constant phase difference (B) Sources at the same distance (C) Any two sources of light (D) Sources with different frequencies

**4.** How does the fringe width of interference fringes change, when the whole apparatus of Young's experiment is kept in a liquid of refractive index 1.3?
(A) Increases by factor 1.3 (B) Decreases by factor 1.3 (C) Remains unchanged (D) Depends on wavelength

**5.** How does the angular separation between fringes in single – slit diffraction experiment change when the distance of separation between the slit and screen is doubled?
(A) Doubles (B) Halves (C) Remains same (D) Becomes four times

**6.** For a given single slit, the diffraction pattern is obtained on a fixed screen, first by using red light and then with blue light. In which case, will the central maxima, in the observed diffraction pattern, have a larger angular width?
(A) Red light (B) Blue light (C) Same for both (D) Cannot determine

**7.** (i) Write the conditions under which light sources can be said to be coherent. (ii) Why is it necessary to have coherent sources in order to produce an interference pattern?
(A) Same frequency, constant phase difference; needed for stable interference (B) Different frequencies (C) Any two sources work (D) Phase difference changes with time

**8.** Define resolving power of a microscope and write one factor on which it depends.
(A) Ability to distinguish between two close objects; depends on wavelength and aperture (B) Ability to magnify (C) Ability to focus (D) Depends on object size

**9.** State Brewster's law. The value of Brewster angle for a transparent medium is different for light of different colours. Give reason.
(A) tan θ_B = n₂/n₁; different colors have different refractive indices (B) All colors have same refractive index (C) Brewster angle is independent of wavelength (D) Only applies to white light

**10.** Two slits are made one millimeter apart and the screen is placed one metre away. What is the fringe separation when blue-green light of wavelength 500 nm is used?
(A) 0.5 mm (B) 1.0 mm (C) 1.5 mm (D) 2.0 mm

**11.** Define the term wavefront. Consider a plane wavefront incident on a thin convex lens. Draw a proper diagram to show how the incident wavefront traverses through the lens and after refraction focusses on the focal point of the lens, giving the shape of the emergent wavefront.
(A) Locus of points in phase; converges to point (B) Path of light rays (C) Perpendicular to rays (D) Surface of constant intensity

**12.** What is the effect on the interference fringes in Young's double slit experiment when (i) the width of the source slit is increased; (ii) the monochromatic source is replaced by a source of white light.
(A) Less visibility, colored fringes (B) More visibility, white fringes (C) No change (D) Fringes disappear

**13.** Define the term 'resolving power' of an astronomical telescope. How does it get affected on (i) Increasing the aperture of the objective lens? (ii) Increasing the wavelength of the light used? Justify your answer in each case.
(A) Ability to distinguish stars; increases with aperture, decreases with wavelength (B) Improves with wavelength (C) Independent of both (D) Depends on eyepiece

**14.** For a single slit of width 'a', the first minimum of the interference pattern of a monochromatic light of wavelength λ occurs at an angle of λ/a. At the same angle of λ/a, we get a maximum for two narrow slits separated by a distance 'a'. Explain.
(A) Different diffraction patterns have different conditions (B) Same condition applies to both (C) Minima and maxima coincide (D) Only valid for slits

**15.** Laser light of wavelength 640 nm incident on a pair of slits produces an interference pattern in which the bright fringes are separated by 7.2 mm. Calculate the wavelength of another source of light which produces interference fringes separated by 8.1 mm using same arrangement. Also find the minimum value of the order (n) of bright fringe of shorter wavelength which coincides with that of the longer wavelength.
(A) 720 nm, n = 6 (B) 810 nm, n = 7 (C) 568 nm, n = 9 (D) 640 nm, n = 8

**16.** Distinguish between polarized and unpolarized light. Does the intensity of polarized light emitted by a Polaroid depend on its orientation? Explain briefly. The vibration in beam of polarized light make an angle of 60° with the axis of the Polaroid sheet. What percentage of light is transmitted through the sheet?
(A) 25% (B) 50% (C) 75% (D) 100%

**17.** Answer the following questions:
(i) In a double slit experiment using light of wavelength 600 nm, the angular width of the fringe formed on a distant screen is 0.1°. Find the spacing between the two slits.
(ii) Light of wavelength 500 Å propagating in air gets partly reflected from the surface of water. How will the wavelengths and frequencies of the reflected and refracted light be affected?
(A) d = 3.44 mm; frequencies same, wavelengths change (B) d = 2.0 mm; both change (C) d = 1.5 mm; both unchanged (D) No change in any property

**18.** (i) The ratio of the width of two slits in Young's double slit experiment is 4: 1. Evaluated the ratio of intensities at maxima and minima in the interference pattern. (ii) Does the appearance of bright and dark fringes in the interference pattern violate, in any way, conservation of energy? Explain.
(A) 9:1; no violation, redistribution of energy (B) 4:1; energy not conserved (C) 16:1; pattern is periodic (D) 2.25:1; fringes only at center

**19.** In Young's double slit experiment using monochromatic light of wavelength λ, the intensity of light at a point on the screen where path difference is λ, is K units. Find out the intensity of light at a point where path difference is λ/3.
(A) 2K (B) K/2 (C) 3K/4 (D) K/4

**20.** (i) Using the phenomenon of polarization, show how transverse nature of light can be demonstrated. (ii) Two Polaroids P₁ and p₂ are placed with their pass axes perpendicular to each other. Unpolarised light of intensity I₀ is incident on P₁. A third Polaroid P₃ is kept in between P₁ and P₂ such that its pass axis makes an angle of 30° with that of P₁. Determine the intensity of light transmitted through P₁,P₂ and P₃.
(A) I₀/8 (B) I₀/4 (C) I₀/16 (D) 3I₀/16

**21.** The intensity at the central maxima (O) in Young's double slit experiment is I₀. If the distance OP equals one-third of the fringe width of the pattern, show that the intensity at point P would be I₀/4.
(A) Proven using intensity formula (B) Path difference = λ/3 (C) Phase difference = 2π/3 (D) Intensity varies as cos²(Δφ/2)

**22.** A beam of light, consisting of two wavelengths, 600 nm and 450 nm is used to obtained interference fringes in a Young's double slit experiment. Find the least distance, from the central maximum, where the bright fringes, due to both the wavelengths, coincide. The distance between the two slits is 4.0 mm and the screen is at a distance 1.0 m from the slits.
(A) 0.3 mm (B) 0.6 mm (C) 0.9 mm (D) 1.2 mm

**23.** Consider two coherent source S₁ and S₂ producing monochromatic waves to produce interference pattern. Let the displacement of the wave produced by S₁ be given by y₁ = a cos ωt and the displacement by S₂ be y₂ = a cos(ωt + φ). Find out the expression for the amplitude of the resultant displacement at a point and show that the intensity at that point will be I = 4a² cos² φ / 2. Hence establish the conditions for constructive and destructive interference.
(A) A = 2a cos(φ/2); constructive when φ = 0, destructive when φ = π (B) A = a√2; different conditions (C) A = 3a (D) No phase dependence

**24.** In Young's double slit experiment, the two slits 0.15 mm apart are illuminated by monochromatic light of wavelength 450 nm. The screen is 1.0 m away from the slits. (i) Find the distance of the second (a) bright fringe, (b) dark fringe from the central maximum. (ii) How will the fringe pattern change if the screen is moved away from the slits?
(A) (a) 6 mm, (b) 3 mm; fringes get closer (B) (a) 6 mm, (b) 1.5 mm; fringes get farther (C) (a) 3 mm, (b) 1.5 mm; width increases (D) (a) 4 mm, (b) 2 mm; remains same

**25.** (i) Obtain the conditions for the bright and dark fringes in diffraction pattern due to a single narrow slit illuminated by a monochromatic source. (ii) When the width of the slit is made double, how would this affect the size and intensity of the central diffraction band? Justify.
(A) Bright: b sin θ = (n+1/2)λ; Dark: b sin θ = nλ; band becomes narrower and brighter (B) Width doubles, intensity halves (C) No change (D) Band widens, intensity decreases

**26.** (i) State Huygens's principle. Using this principle draw a diagram to show how a plane wave front incident at the interface of the two media gets refracted when it propagates from a rarer to a denser medium. Hence verify Snell's law of refraction. (ii) Using Huygens's construction, draw a figure showing the propagation of a plane wave reflecting at the interface of the two media. Show that the angle of incidence is equal to the angle of reflection.
(A) Verified using wavefront construction (B) Principle not applicable to reflection (C) Only applies to refraction (D) Cannot explain both phenomena

**27.** Describe Young's double slit experiment to produce interference pattern due to a monochromatic source of light. Deduce the expression for the fringe width.
(A) ω = Dλ/d (B) ω = d/Dλ (C) ω = λd/D (D) ω = D/λd

---

### WAVE OPTICS: LEVEL 1

**1.** Light travels outwards from a point source such that the wavefronts are spherical. Then, the intensity is related to the distance from the source as: (A) I ∝ r² (B) I ∝ 1/r (C) I ∝ 1/r² (D) I ∝ 1/r^(3/2)

**2.** A ray of light travelling in air is incident on one face of a parallel glass slab of thickness t and refractive index μ at an angle of incidence i. The total time spent by the ray inside the slab is: (A) μ²t/c√(1-μ² sin² i) (B) t/c√(μ²-sin² i) (C) μt/c√(μ²-sin² i) (D) μ²t/c√(μ²-sin² i)

**3.** Electromagnetic radiation of frequency n, wavelength λ, travelling with velocity v in air, enters a glass slab of refractive index μ. The frequency, wavelength and velocity of the wave in glass slab respectively are: (A) n, λ/μ, v/μ (B) n, λ/μ, v/μ (C) n, λ/μ, v/μ (D) n/μ, λ/μ, v/μ

**4.** When interference of light takes place: (A) Energy is created in the region of maximum intensity (B) Energy is destroyed in the region of maximum intensity (C) Conservation of energy holds good and energy is redistributed (D) Conservation of energy does not hold good

**5.** Light of wavelength λ in air enters a medium of refractive index μ. Two points in this medium, lying along the path of this light, are at a distance x apart. The phase difference between these points is: (A) μ 2πx/λ (B) 1/μ 2πx/λ (C) (μ-1) 2πx/λ (D) 1/(μ-1) 2πx/λ

**6.** Spherical wavefronts, emanating from a point source, strike a plane reflecting surface. What will happen to these wave front, immediately after reflection? (A) They will remain spherical with the same curvature, both in magnitude and sign (B) They will become plane wave fronts (C) They will remain spherical, with the same curvature, but sign of curvature reversed (D) They will remain spherical, but with different curvature, both in magnitude and sign.

**7.** Interference pattern is obtained with two coherent light sources of intensity ratio n. In the interference pattern. The ratio I_max + I_min will be: (A) √n/(n+1) (B) 2√n/(n+1) (C) √n/(n+1)² (D) 2√n/(n+1)²

**8.** Two coherent sources of different intensities send waves which interfere. The ratio of maximum intensity to minimum intensity is 25 : 1. The intensities of the sources are in the ratio: (A) 25:1 (B) 5:1 (C) 9:4 (D) 25:16

**9.** Light waves travel in vacuum along the X-axis. Which of the following may represent the wavefronts? (A) X = c (B) y = c (C) z = c (D) x + y + z = c

**10.** The refractive index of glass is 1.5 for light waves of X = 6000Å wavelength in vacuum. Its wavelength in glass is: (A) 2000 Å (B) 4000 Å (C) 1000 Å (D) 3000 Å

**11.** The wavefront due to a source situated at infinity is: (A) Spherical (B) Cylindrical (C) Planar (D) Circular

**12.** Upon reflection from a surface, the phase angle of a light wave shifts by π if: (A) the reflecting surface is opaque (B) the medium containing the wave has a lower refractive index than the medium behind the reflecting surface (C) the medium containing the wave has a higher refractive index than the medium behind the reflecting surface (D) in all cases

**13.** Light travels from a point source and falls on a screen. Now a glass slab is introduced between the source and the screen such that its two faces are parallel to the screen. The slab does not absorb or reflect any light. The size of the slab is sufficiently large to ensure that all the light that falls on the screen passes through the slab. Then, due to the introduction of the slab, the incident intensity of light at any point on the screen: (A) stays the same (B) increases (C) decreases (D) increases for some points and decreases for others

**14.** Wavefront is the locus of all points, where the particles of the medium vibrate with the same: (A) Phase (B) Amplitude (C) Frequency (D) Period

**15.** Which among the following isn't a suitable phenomenon to establish that light is wave motion? (A) Interference (B) Diffraction (C) Reflection (D) Polarization

**16.** How is the interference pattern affected if the Young's experiment was performed in still water than in air? (A) Fewer fringes will be visible (B) Fringes will be broader (C) Fringes will be narrower (D) No fringes will be observed

**17.** In Young's double slit experiment the fringe width with light of wavelength 6000Å is found to be 4.0 mm. What will be the fringe width if light of wavelength 4800Å is used? (A) 2.8 mm (B) 3.2 mm (C) 4.0 mm (D) 4.8 mm

**18.** In a two slit experiment with monochromatic light, fringes are obtained on a screen placed at some distance from the slits. If the screen is moved by a distance 5×10⁻³m towards the slits, the change in the fringe width is 3×10⁻⁵m. If the separation between the slits is 10⁻⁵m, the wavelength of light used is: (A) 5×10⁻⁷m (B) 6×10⁻⁷m (C) 7×10⁻⁷m (D) 6×10⁻⁶m

**19.** The intensity of the central maximum in an interference experiment using two identical slits is I. When one of the slits is closed, the intensity is I₀. The ratio I/I₀ is: (A) 2:1 (B) 4:1 (C) 1:2 (D) 1:4

**20.** Monochromatic light of wavelength 500 nm is incident on two parallel slits separated by a distance of 5×10⁻⁵m. The interference pattern is obtained on a screen at a distance of 0.1 m from the slits. The intensity of the central maximum is I₀. When one of the slits is covered by a glass sheet of thickness 5×10⁻⁶m and refractive index 1.5, the intensity at the centre of the screen will be equal to (Assuming 100% Light transmission by the glass sheet): (A) I₀/2 (B) I₀/3 (C) I₀/4 (D) I₀

**21.** A double slit apparatus is immersed in a liquid of refractive index 1.33. It has slit separation of 1mm and distance between the plane of slits and screen 1.33 m. The slits are illuminated by a parallel beam of light whose wavelength in air is 6300Å. What is the fringe width? (A) (1.33×0.63)μm (B) 0.63/1.33 mm (C) 0.63/(1.33)² mm (D) 0.63 mm

**22.** In Young's experiment, the ratio of maximum to minimum intensities of the fringe system is 4 : 1. the amplitudes of the coherent sources are in the ratio: (A) 4:1 (B) 3:1 (C) 2:1 (D) 1:1

**23.** In the Young's double slit experiment with sodium light, the slits are 0.589 m apart. The angular separation of the third maxima from the central maximum will be: (A) sin⁻¹(0.33×10⁸) (B) sin⁻¹(0.33×10⁻⁶) (C) sin⁻¹(3×10⁻⁸) (D) sin⁻¹(3×10⁶)

**24.** In Young's double slit experiment, the wave length of the light used is doubled and distance between two slits is made half of initial distance. The resultant fringewidth becomes: (A) 2 times (B) 3 times (C) 4 times (D) Half

**25.** In the ideal double-slit experiment, when a glass plate (μ = 1.5) of thickness t is introduced in the path of one of the intersecting beams (wavelength λ), the intensity at the position where the central maximum occurred previously remains unchanged. The minimum thickness of the glass plate is: (A) 2λ (B) 2λ/3 (C) λ/3 (D) λ

**26.** In an interference experiment, third bright fringe is obtained at a point on the screen with a light of 700 nm. What should be the wavelength of the light source in order to obtain 5ᵗʰ bright fringe at the same point? (A) 500 nm (B) 630 nm (C) 750 nm (D) 420 nm

**27.** In Young's experiment, the third bright band for light of wavelength 6000 Å coincides with the fourth bright band from another source of light in the same arrangement. Then the wavelength of second source is: (A) 3600 Å (B) 4000 Å (C) 5000 Å (D) 4500 Å

**28.** In Young's double-slit experiment, the separation between the slits is d, distance between the slit and screen is D (D > > d). In the interference pattern, there is a maxima exactly in front of each slit. Then the possible wavelength (s) used in the experiment are: (A) d²/D, d²/2D, d²/3D (B) d²/D, d²/2D, d²/5D (C) d²/2D, d²/4D, d²/6D (D) None of these

**29.** When one of the slits of Young's experiment is covered with a transparent sheet of thickness 4.8 mm, the central fringe shifts to a position originally occupied by the 30ᵗʰ bright fringe. What should be the thickness of the sheet if the central fringe has to shift to the position occupied by 20ᵗʰ bright fringe? (A) 3.8 mm (B) 1.6 mm (C) 7.6 mm (D) 3.2 mm

**30.** In a Young's double slit experiment, the intensity at the central maximum is I₀ and the fringe width is β. Then, the minimum separation between two points where the intensity is I₀/4 is: (A) β/6 (B) β/3 (C) 2β/3 (D) 3β/4

---

### WAVE OPTICS: LEVEL 2

**46.** A parallel beam of light passes from a medium of refractive index μ₁ into a medium of refractive index μ₂ as shown. The points P and Q lie on the interface between the mediums. PP' is a wavefront in the first medium and QQ' is a wavefront in the second medium. The ratio P'Q'/PQ' is equal to: (A) μ₁/μ₂ (B) μ₂/μ₁ (C) (μ₁/μ₂)² (D) (μ₂/μ₁)²

**47.** Two waves, u₁ = A sin(πx/6 + 4πt + π/6) and u₂ = A cos(πx/4 - x + 4πt + π/3) interfere at the point (2,0,-1). The intensity reaching the point due to each wave is I, and the resultant intensity at the point is I_R. Then I_R/I = ___

**48.** Incident and refracted parallel plane wavefronts in medium (1) and (2) respectively are shown in figure. Medium (1) is air. Find the refractive index of medium (2). (A) √2 (B) √3 (C) 2 (D) √3/√2

**49.** An interference is observed due to two coherent sources 'A' & 'B' having zero phase difference separated by a distance 4λ along the y-axis where λ is the wavelength of the source. A detector D is moved on the positive x-axis. The number of points on the x axis excluding the points x = 0 & x = ∞ at which maximum will be observed is. (A) Shows diagram with sources A and B (B) Maximum count depends on distance (C) Infinite points (D) Specific number based on geometry

**50.** MATCH THE FOLLOWING: (A) Light diverging from a point source - (P) Plane wavefront (B) Light emerging from a convex lens when a point source is placed at its focus - (Q) Spherical wavefront (C) Light reflected from a concave mirror when a point source is placed at its focus - (R) Cylindrical wavefront (D) [diagram showing emerging light] - (S) Concave right wave front

**51.** The wavelength of sodium light in air is 589 nm: (A) its frequency in air is 5.09×10¹⁴ Hz (B) its wavelength in water (μ_w = 1.33) is 443 nm (C) its frequency in water is 3.78×10¹⁴ Hz (D) its speed in water is 2.25×10⁸ m/sec

**52.** A beam of light of intensity I₀ travelling in medium 1 is incident on an interface with medium 2 at an angle of incidence θ. The refractive index of medium 2 is lower than the refractive index of medium 1, and the critical angle for the pair of mediums is θ_c. Let the intensity of the beam reflected back into medium 1 be I_R and let the intensity of the beam transmitted into medium 2 be I_T. Then: (A) I_R = I and I_T = 0 if θ > θ_c (B) I_R = 0 and I_T = I if θ < θ_c (C) I_R + I_T = I in all cases (D) I_R + I_T < I in all cases

**53.** In the shown figure interferometer is used to demonstrate the interference of sound waves. S is a source of wave, and D is a detector. Path SBD can be varied in length, but path SAD is fixed. The interferometer contains air, and it is found that the resultant intensity at D has a minimum value of 10 W/cm² at its (of SBD path) one position and climbs gradually to 90 W/cm² at a second position 1.65 cm from the first. The frequency of sound emitted from the source is ν 10⁵ Hz. Then find value of ν? [Take speed of sound in air as 330 m/s]

**54.** Figure shows a wavefront P passing through two systems A and B, and emerging as Q and then as R. The system A and B could, respectively, be: (A) a prism and a convergent lens (B) a convergent lens and a prism (C) a divergent lens and a prism (D) a convergent lens and a divergent lens

**55.** A narrow monochromatic beam of light of intensity I is incident on a glass plate as shown in the figure. Another identical glass plate is kept close to the first one and parallel to it. Each glass plate reflects 25% of the light incident on it and transmits the remaining. Find the ratio √(I_max/I_min) the interference pattern formed by two beams obtained after one reflection at each plate.

**56.** Light is incident at an angle φ with the normal to a plane containing two slits of separation d. select the expression that correctly describes the positions of the interference maxima in terms of the incoming angle φ and outgoing angle θ. (A) sin φ + sin θ = (m + 1/2)λ/d (B) d sin θ = mλ (C) sin φ - sin θ = (m+1)λ/d (D) sin φ + sin θ = mλ

**57.** In a Young's double slit experiment performed with identical slits and monochromatic light of wavelength λ, it is observed that if one of the slits is covered with an opaque sheet, the intensity at a point Q on the screen remains unaffected. Then, the angular position of the point Q may be: (A) sin⁻¹(2λ/3d) (B) sin⁻¹(3λ/3d) (C) sin⁻¹(3λ/4d) (D) sin⁻¹(5λ/4d)

**58.** Two identical coherent sources are placed on a diameter of a circle of radius R at separation x (< R) symmetrical about the centre of the circle. The sources emit identical wavelength λ each. The number of point on the circle of maximum intensity is (x = 5λ): (A) 20 (B) 22 (C) 24 (D) 26

**59.** In Young's double slit experiment using monochromatic light, the light pattern shifts by a certain distance on the screen when a mica sheet of refractive index μ and thickness t microns is introduced in the path of one of the interfering waves. The mica sheet is then removed and the distance between the plane of slits and the screen is doubled. It is found that the distance between successive maxima (or minima) now is the same as the observed fringe shift upon the introduction of the mica sheet. Calculate wavelength of light? (A) (l/2)(μ-1) (B) t(μ-1) (C) μt (D) 3μt

**60.** In a Young's double slit experiment, the angular fringe width close to the central maximum is Δθ₀ = 0.0025 rad. Then, between (and including) the two points with angular position θ = ±30° on either side of the central maximum, the number of: (A) points of maximum is 401 (B) points of maximum is 201 (C) points with intensity half the intensity at the central maximum is 800 (D) points with intensity half the intensity at the central maximum is 400

**61.** A screen is at a distance D = 80cm from a diaphragm having two narrow slits S₁ and S₂ which are d = 2mm apart. Slit S₁ is covered by a transparent sheet of thickness t₁ = 2.5μm and S₂ by another sheet of thickness t₂ = 1.25μm as shown in figure. Both sheets are made of same material having refractive index μ = 1.40 and water is filled in space between diaphragm and screen. A monochromatic light beam of wavelength λ = 5000 Å is incident normally on the diaphragm. Assuming intensity of beam to be uniform, calculate ratio of intensity at central point on screen to individual identical beams through slits. (μ_w = 4/3)

**62.** Two points monochromatic and coherent sources of light of wavelength λ each are placed as shown in figure. The initial phase difference between the sources is zero. (D > > d). Mark the correct statement (s). (A) If d = 7λ/2, Q will be a minima. (B) If d = λ, only one maxima can be observed on the screen. (C) If d = 4.8λ, then total 10 minima would be there on the screen (D) If d = 5λ/2, the intensity at O would be minimum.

**63.** In Young's double-slit experiment, two wavelengths of light are used simultaneously where λ₂ = 2λ₁, in the fringe pattern observed on the screen. (A) Maxima of wavelength λ₂ can coincide with minima of wavelength λ₁. (B) Fringe width of λ₂ will be double that of fringe width of λ₁ and nth order maxima of λ₂ will coincide with 2ⁿᵈ order maxima of λ₁ (C) nᵗʰ order minima of λ₂ will coincide with 2nd order minima of λ₁ (D) None of the above

**64.** In a Young's double slit experiment, the fringe width close to the central maximum is β₀. Then, the fringe width close to a point with angular position θ is: (A) β₀ (B) β₀/cos θ (C) β₀/cos² θ (D) β₀/cos³ θ

**65.** MATCH THE FOLLOWING: A double-slit interference pattern is produced on a screen, as shown in figure, using monochromatic light of wavelength 500 nm. Point P is the location of the central bright fringe that is produced when light waves arrive in phase without any path difference. A choice of three strips A, B, and C of transparent materials with different thicknesses and refractive indices is available, as shown in the table. These are placed over one or both of the slits, singularly or in conjunction, causing the interference pattern to be shifted across the screen from the original pattern. In Column 1, how the strips have been placed, is mentioned whereas in column 2, order of the fringe at point P on the screen that will be produced due to the placement of the strip(s), is shown. Correctly match both the columns.

| Film | A | B | C |
|---|---|---|---|
| Thickness (in μm) | 5 | 1.5 | 0.25 |
| Refractive index | 1.5 | 2.5 | 2 |

(A) Only strip B is placed over slit 1. - (P) First bright (B) Strip A is placed over slit 1 and strip C is placed over slit II. - (Q) Fourth dark (C) Strip A is placed over slit 1 and strip B and strip C are placed over slit II in conjunction. - (R) Fifth dark (D) Strip A and Strip C are placed over slit 1 (in conjunction) and strip B is placed over slit II - (S) Central bright

---

### JEE MAIN ARCHIVE

**[2003]**
**1.** To demonstrate the phenomenon of interference, we require two sources which emit radiation: (A) Of the same frequency and having a definite phase relationship (B) Of nearly the same frequency (C) Of the same frequency (D) Of different wavelengths
**Ans: A**

**[2004]**
**2.** The maximum number of possible interference maxima for slit-separation equal to twice the wavelength in Young's double-slit experiment is: (A) Infinite (B) five (C) three (D) zero
**Ans: B**

**[2007]**
**3.** In Young's double-slit experiment, the intensity at a point where the path difference is λ/6, (λ being the wavelength of the light used) is I. If I₀ denotes the maximum intensity, I/I₀ is equal to: (A) √5/2 (B) 1/2 (C) 3/4 (D) 1/√2
**Ans: C**

**[2009]**
**4.** A mixture of lights, consisting of wavelength 590 nm and an unknown wavelength illuminates Young's double slit and gives rise to two overlapping interference patterns on the screen. The central maxima of both lights coincide. Further, it is observed that the third bright fringe of the known light coincides with the fourth bright fringe of the unknown light. From this data, the wavelength of the unknown light is: (A) 393.4 nm (B) 885.0 nm (C) 442.5 nm (D) 776.8 nm
**Ans: B**

**PARAGRAPH FOR QUESTIONS 5 - 7**
An initially parallel cylindrical beam travels in a medium of refractive index μ(I) = μ₀ + μ₁I, where μ₀ and μ₁ are positive constants and I is the intensity of the light beam. The intensity of the beam is decreasing with increasing radial distance from the axis of the beam.

**[2010]**
**5.** As the beam enters the medium, it will: (A) Diverge (B) converge (C) diverge near the axis and converge near the periphery (D) travel as a cylindrical beam
**Ans: B**

**[2010]**
**6.** The initial shape of the wave front of the beam is: (A) convex (B) concave (C) convex near the axis and concave near the periphery (D) planar
**Ans: B**

**[2010]**
**7.** The speed of light in the medium is: (A) minimum on the axis of the beam (B) the same everywhere in the beam (C) directly proportional to the intensity I (D) maximum on the axis of the beam
**Ans: A**

**[2011]**
**8.** The question has a paragraph followed by two statements, Statement - 1 and statement -2. Of the given four alternatives after the statements, choose the one that describes the statements.
**Statement 1:** When light reflects from the air-glass plate interface, the reflected wave suffers a phase change of π.
**Statement 2:** The centre of the interference pattern is dark.
(A) Statement-1 is true, Statement-2 is true; Statement-2 is the correct explanation of Statement-1. (B) Statement-1 is true, Statement-2 is true; Statement-2 is not the correct explanation of statement-1 (C) Statement-1 is false, Statement-2 is true. (D) Statement-1 is true, Statement-2 is false.
**Ans: D**

**[2012]**
**9.** In Young's double slit experiment, one of the slit is wider than other, so that amplitude of the light from one slit is double of that from other slit. If I_m be the maximum intensity, the resultant intensity I when they interfere at phase difference φ is given by: (A) I_m/9 (4 + 5cosφ) (B) I_m/3 (1 + 2cos² φ/2) (C) I_m/5 (1 + 4cos² φ/2) (D) I_m/9 (1 + 8cos² φ/2)
**Ans: D**

**[2012]**
**10.** In a Young's double slit experiment, the two slits act as coherent sources of waves of equal amplitude A and wavelength λ. In another experiment with the same arrangement the two slits are made to act as incoherent sources of waves of same amplitude and wavelength. If the intensity at the middle point of the screen in the first case is I₁ and in the second case is I₂ then the ratio I₁/I₂ is: (A) 0.5 (B) 4 (C) 2 (D) 1
**Ans: B**

**[2012]**
**11.** At two points P and Q on a screen, in Young's double slit experiment, waves from slits S₁ and S₂ have a path difference of 0 and λ/4 respectively. The ratio of intensities at P and Q will be: (A) 4:1 (B) 3:2 (C) 2:1 (D) √2:1
**Ans: C**

**[2013]**
**12.** Two coherent point sources S₁ and S₂ are separated by a small distance d as shown. The fringes obtained on the screen will be: (A) Straight line (B) Semi-circles (C) Concentric circles (D) Points
**Ans: C**

**[2013]**
**13.** This question has statement-1 and statement-2, of the four choices given after the statements, choose the one that best describes the two statements.
**Statement 1:** In Young's double slit experiment, the number of fringes observed in the field of view is small with longer wavelength of light and is large with shorter wavelength of light.
**Statement 2:** In the double slit experiment, the fringe width depends directly on the wavelength of light.
(A) Statement 1 is true, and statement 2 is true and statement 2 is not the correct explanation of the statement 1 (B) Statement 1 is false and the statement 2 is true (C) Statement 1 is true and statement 2 is true and the statement 2 is true explanation of the statement 1 (D) Statement 1 is true and the statement 2 is false.
**Ans: C**

**[2013]**
**14.** A ray of light of intensity I is incident on a parallel glass slab at point A as shown in diagram. It undergoes partial reflection and refraction. At each reflection, 25% of incident energy is reflected. The rays AB and AB' undergo interference. The ratio of I_max and I_min is: (A) 49:1 (B) 7:1 (C) 4:1 (D) 8:1
**Ans: B**

**[2014]**
**15.** Interference pattern is observed at P' due to superposition of two rays coming out from a source S' as shown in the figure. The value of I for which maxima is obtained at P' is (R is perfect reflecting surface): (A) I = 2nλ/√3 - 1 (B) I = (2n - 1)λ/2l(√3 - 1) (C) I = (2n - 1)λ/4(2 - √3) (D) I = (2n - 1)λ/(√3 - 1)
**Ans: B**

**[2014]**
**16.** Two monochromatic light beams of intensity 16 and 9 units are interfering. The ratio of intensities of bright and dark parts of the resultant pattern is: (A) 16/9 (B) 7/1 (C) 4/3 (D) 49/1
**Ans: D**

**[2014]**
**17.** Using monochromatic light of wavelength λ, an experimentalist sets up the Young's Double slit experiment in three ways as shown. If he observes that y = β', the wavelength of light used is: (A) 520 nm (B) 540 nm (C) 560 nm (D) 580 nm
**Ans: B**

**[2015]**
**18.** In Young's double slit experiment with light of wavelength λ, the separation of slits is d and distance of screen is D such that D >> d. If the fringe width is β, the distance from point of maximum intensity to the point where intensity falls to half of maximum intensity on either side is: (A) β/2 (B) β/4 (C) β/3 (D) β/6
**Ans: C**

**[2015]**
**19.** On a hot summer night, the refractive index of air is smallest near the ground and it increases with height from the ground. When a light beam is directed horizontally, the Huygens' principle leads us to conclude that as it travels, the light beam: (A) Goes horizontally without any deflection (B) Bends downwards (C) Bends upwards (D) Becomes narrower
**Ans: B**

**[2016]**
**20.** In Young's double slit experiment, the distance between slits and the screen is 1.0 m and monochromatic light of 600 nm is being used. A person standing near the slits is looking at the fringe pattern. When the separation between the slits is varied, the interference pattern disappears for a particular distance d₀ between the slits. If the angular resolution of the eye is 1°/60, the value of d₀ is close to: (A) 1 mm (B) 3 mm (C) 2 mm (D) 4 mm
**Ans: B**

**[2017]**
**21.** In a Young's double slit experiment, slits are separated by 0.5 mm, and the screen is placed 150 cm away. A beam of light consisting of two wavelengths, 650 nm and 520 nm, is used to obtain interference fringes on the screen. The least distance from the common central maximum to the point where the bright fringes due to both the wavelengths coincide is: (A) 15.6 mm (B) 1.56 mm (C) 7.8 mm (D) 9.75 mm
**Ans: D**

**[2019]**
**22.** In a Young's double slit experiment, the slits are placed 0.320 mm apart. Light of wavelength λ = 500 nm is incident on the slits. The total number of bright fringes that are observed in the angular range -30° ≤ θ ≤ 30° is: (A) 640 (B) 321 (C) 641 (D) 320
**Ans: C**

**[2019]**
**23.** In a Young's double slit experiment with Slit separation 0.1 mm, one observes a bright fringe at angle π/40 rad by using light of wavelength λ₁. When the light of wavelength λ₂ is used a bright fringe is seen at the same angle in the same set up. Given that λ₁ and λ₂ are in visible range (380 nm to 740nm), their values are: (A) 380 nm, 525 nm (B) 625 nm, 500 nm (C) 400 nm, 500 nm (D) 380 nm, 500 nm
**Ans: D**

**[2019]**
**24.** Consider a Young's double slit experiment as shown in the figure. What should be the slit separation d in terms of wavelength λ such that the first minima occurs directly in front of the slit (S₁)? (A) λ/(√5 - 2) (B) λ/2(√5 - 2) (C) λ/(5 - √2) (D) λ/2(5 - √2)
**Ans: B**

**[2019]**
**25.** In a Young's double slit experiment, the path difference, at a certain point on the screen, between two interfering waves is Δ = λ/8 of wavelength. The ratio of the intensity at this point to that at the centre of a bright fringe is close to: (A) 0.94 (B) 0.80 (C) 0.74 (D) 0.85
**Ans: D**

**[2019]**
**26.** In an interference experiment the ratio of amplitudes of coherent waves is a₁/a₂ = 1/3. The ratio of maximum and minimum intensities of fringes will be: (A) 9 (B) 18 (C) 4 (D) 2
**Ans: C**

**[2019]**
**27.** The figure shows a Young's double slit experimental setup. It is observed that when a thin transparent sheet of thickness t and refractive index μ is put in front of one of the slits, the central maximum gets shifted by a distance equal to n fringe widths. If the wavelength of light used is λ, t will be: (A) nDλ/d(μ - 1) (B) 2Dλ/d(μ - 1) (C) Dλ/d(μ - 1) (D) 2nDλ/d(μ - 1)
**Ans: B**

**[2019]**
**28.** In a Young's double slit experiment, the ratio of the slit's width is 4 : 1. The ratio of the intensity of the maxima to minima, close to the central fringe on the screen, will be: (A) (√5 + 1)²: 16 (B) 25:9 (C) 4:1 (D) 9:1
**Ans: A**

**[2019]**
**29.** In a double slit experiment, when a thin film of thickness t having refractive index μ is introduced in front of one of the slits, the maximum at the centre of the fringe pattern shifts by one fringe width. The value of t is (λ is the wavelength of the light used): (A) λ/(2λ - 1) (B) λ/(μ - 1) (C) 2λ/(μ - 1) (D) λ/2(μ - 1)
**Ans: C**

**[2019]**
**30.** A ray of light AO in vacuum is incident on a glass slab at angle 60° and refracted at angle 30° along OB as shown in the figure. The optical path length of light ray from A to B is: (A) 2a + 2b/3 (B) 2√3/a + 2b (C) 2a + 2b (D) 2a + 2b/√3
**Ans: A**

**[2020]**
**31.** Interference fringes are observed on a screen by illuminating two thin slits 1 mm apart with a light source (λ = 632.8nm). The distance between the screen and the slits is 100 cm. If a bright fringe is observed on a screen at a distance of 1.27 mm from the central bright fringe, then the path difference between the waves, which are reaching this point from the slits is close to: (A) 2.87 nm (B) 2 nm (C) 2.05 μm (D) 1.27 μm
**Ans: C**

**[2020]**
**32.** In a Young's double slit experiment, 16 fringes are observed in a certain segment of the screen when light of wavelength 700 nm is used. If the wavelength of light is changed to 400 nm, the number of fringes observed in the same segment of the screen would be: (A) 24 (B) 30 (C) 18 (D) 28
**Ans: B**

**[2020]**
**33.** In a Young's double slit experiment, light of 500 nm is used to produce an interference pattern. When the distance between the slits is 0.05 mm, the angular width (in degree) of the fringes formed on the distance screen is close to: (A) 0.17° (B) 0.07° (C) 0.57° (D) 1.7°
**Ans: B**

**[2020]**
**34.** Two light waves having the same wavelength λ in vacuum are in phase initially. Then the first wave travels a path L₁ through a medium of refractive index n₁ while the second wave travels a path of length L₂ through a medium of refractive index n₂. After this the phase difference between the two waves is: (A) 2π/λ (n₂L₁ - n₁L₂) (B) 2π/λ [L₁/n₁ - L₂/n₂] (C) 2π/λ (n₁L₁ - n₂L₂) (D) 2π/λ [L₂/n₁ - L₁/n₂]
**Ans: C**

**[2020]**
**35.** Two coherent sources of sound, S₁ and S₂, produce sound waves of the same wavelength, λ = 1 m, in phase. S₁ and S₂ are placed 1.5 m apart (see fig). A listener, located at L, directly in front of S₂, finds that the intensity is at a minimum when he is 2 m away from S₁. The listener moves away from S₁, keeping his distance from S₂ fixed. The adjacent maximum of intensity is observed when the listener is at a distance d from S₁. Then, d is: (A) 2 m (B) 3 m (C) 5 m (D) 12 m
**Ans: C**

**[2020]**
**36.** In the figure below, P and Q are two equally intense coherent sources emitting radiation of wavelength 20m. The separation between P and Q is 5m and the phase of P is ahead of that of Q by 90°. A, B and C are three distinct points of observation, each equidistant from the midpoint of PQ. The intensities of radiation at A, B, C will be in the ratio: (A) 0:1:4 (B) 2:1:0 (C) 0:1:2 (D) 4:1:0
**Ans: C**

**[2020]**
**37.** A Young's double-slit experiment is performed using monochromatic light of wavelength λ. The intensity of light at a point on the screen, where the path difference is λ, is K units. The intensity of light at a point where the path difference is λ/3 is given by nK/12, where n is an integer. The value of n is______.
**Ans: (need to calculate)**

**[2020]**
**38.** In a Young's double slit experiment, the separation between the slits is 0.15 mm. In the experiment, a source of light of wavelength 589 nm is used and the interference pattern is observed on a screen kept 1.5 m away. The separation between the successive bright fringes on the screen is: (A) 3.9 mm (B) 4.9 mm (C) 5.9 mm (D) 6.9 mm
**Ans: B**

**[2020]**
**39.** In a double-slit experiment, at a certain point on the screen the path difference between the two interfering waves is 1/8 th of a wavelength. The ratio of the intensity of light at that point to that at the centre of a bright fringe is: (A) 0.672 (B) 0.760 (C) 0.568 (D) 0.853
**Ans: D**

**[2020]**
**40.** Three harmonic waves having equal frequency v and same intensity I₀, have phase angles 0, π/4 and -π/4 respectively. When they are superposed the intensity of the resultant wave is close to: (A) 5.8I₀ (B) I₀ (C) 0.2I₀ (D) 3I₀
**Ans: A**

**[2020]**
**41.** In a Young's double slit experiment 15 fringes are observed on a small portion of the screen when light of wavelength 500 nm is used. Ten fringes are observed on the same section of the screen when another light source of wavelength λ is used. Then the value of λ is (in nm)
**Ans: (need to calculate)**

---

### JEE ADVANCED ARCHIVE

**SINGLE OPTION CORRECT TYPE**

**[1981]**
**1.** In Young's double slit experiment, the separation between the slit is halved and the distance between the slits and the screen is doubled. The fringe width is: (A) Unchanged (B) halved (C) doubled (D) quadrupled
**Ans: A**

**[1988]**
**2.** Two coherent monochromatic light beams of intensities I and 4I are superposed. The maximum and minimum possible intensities in the resulting pattern are: (A) 5I and I (B) 5I and 3I (C) 9I and I (D) 9I and 3I
**Ans: C**

**[1999]**
**3.** A thin slice is cut out of a glass cylinder along a plane parallel to its axis. The slice is placed on a flat plat as shown. The observed interference fringes from this combination shall be: (A) Straight (B) Circular (C) Equally spaced (D) Having fringes spacing which increases as we go outwards.
**Ans: D**

**[2000]**
**4.** In a double-slit experiment, instead of taking slits of equal widths, one slit is made twice as wide as the other. Then in the interference pattern: (A) The intensities of both the maxima and the minima increase (B) The intensity of the maxima increases and the minima has zero intensity (C) The intensity of the maxima decreases and that of the minima increases (D) The intensity of the maxima decreases and the minima has zero intensity
**Ans: B**

**[2001]**
**5.** Two beams of light having intensities I and 4I interfere to produce a fringe pattern. The phase difference between the beams is π/2 at point A and π at point B. Then the difference between the resultant intensities at A and B is: (A) 2I (B) 4I (C) 5I (D) 7I
**Ans: C**

**[2001]**
**6.** In Young's double-slit experiment, 12 fringes are observed to be formed in a certain segment of the screen when light of wavelength 600 nm is used. If the wavelength of light is changed to 400 nm, number of fringes observed in the same segment of the screen is given by: (A) 12 (B) 18 (C) 24 (D) 30
**Ans: B**

**[2002]**
**7.** In the ideal double-slit experiment, when a glass plate (refractive index 1.5) of thickness t is introduced in the path of one of the interfering beams (wavelength λ), the intensity at the position where the central maximum occurred previously remains unchanged. The minimum thickness of the glassplate is: (A) 2λ (B) 2λ/3 (C) λ/3 (D) λ
**Ans: B**

**[2003]**
**8.** In the below figure, CP represents a wavefront and AO and BP, the corresponding two rays. Find the condition on θ for constructive interference at P between the ray BP and reflected ray OP. (A) cos θ = 3λ/2ad (B) cos θ = λ/4d (C) sec θ - cos θ = λ/d (D) sec θ - cos θ = 4λ/2d
**Ans: C**

**[2004]**
**9.** In a YDSE bi-chromatic light of wavelength 400 nm and 560 nm are used. The distance between the slits is 0.1 mm and the distance between the plane of the slits and the screen is 1 m. The minimum distance between two successive regions of complete darkness is: (A) 4 mm (B) 5.6 mm (C) 14 mm (D) 28 mm
**Ans: C**

**[2005]**
**10.** In Young's double-slit experiment, intensity at point is (I/4) of the maximum intensity. Angular position of the point is: (A) sin⁻¹(λ/d) (B) sin⁻¹(λ/2d) (C) sin⁻¹(λ/3d) (D) sin⁻¹(λ/4d)
**Ans: C**

**[2005]**
**11.** In YDSE, an electron beam is used to obtain interference pattern. If speed of electron is increased then: (A) No interference pattern will be observed (B) Distance between two consecutive fringes will increase (C) Distance between two consecutive fringes will decrease (D) Distance between two consecutive fringes remains same
**Ans: C**

**[2005]**
**12.** When a ray of light enters a glass slab from air. (A) It's wavelength decreases (B) Its wavelength increases (C) Its frequency increases (D) Neither its wavelength nor its frequency changes
**Ans: A**

**[2012]**
**13.** Young's double slit experiment is carried out by using green, red and blue light, one colour at a time. The fringe widths recorded are β_G, β_R and β_G, respectively, then: (A) β_G > β_R > β_R (B) β_R > β_G > β_R (C) β_R > β_R > β_G (D) β_R > β_G > β_R
**Ans: C**

**[2013]**
**14.** In Young's double-slit experiment, using a monochromatic light of wavelength λ, the path difference (in terms of an integer n) having half the peak intensity is: (A) (2n+1)λ/2 (B) (2n+1)λ/4 (C) (2n+1)λ/8 (D) (2n+1)λ/16
**Ans: B**

**[2019]**
**15.** In a Young's double slit experiment, the slit separation d is 0.3 mm and the screen distance D is 1 m. A parallel beam of light of wavelength 600 nm is incident on the slits at an angle α as shown in figure. On the screen, the point O is equidistant from the slits and distance PQ is 11.0 mm. Which of the following statement(s) is(are) correct? (A) For α = 0.36/π degree, there will be destructive interference at point P (B) For α = 0, there will be constructive interference at point P (C) Fringe spacing depends on α (D) For α = 0.36/π degree, there will be destructive interference at point O
**Ans: [Need to verify which are correct]**

---

**MULTIPLE OPTION CORRECT TYPE**

**[1982]**
**16.** In Young's double slit experiment, the interference pattern is found to have an intensity ratio between the bright and dark fringes as 9. This implies that: (A) The intensities at the screen due to the two slits are 5 units and 4 units, respectively (B) The intensities at the screen due to the two slits are 4 units and 1 units, respectively (C) The amplitude ratio is 3 (D) The amplitude ratio is 2
**Ans: B, D**

**[1984]**
**17.** White light is used to illuminate the two slits in Young's double –slit experiment. The separation between the slits is D and the screen is at a distance d(> b) from the slits. A point on the screen directly in front of one of the slits contain wavelengths are missing. Some of these missing wavelengths are: (A) λ = b²/d (B) λ = 2b²/d (C) λ = b²/3d (D) λ = 2b²/3d
**Ans: A, C**

**[1995]**
**18.** In an interference arrangement similar to Young's double slit experiment, the slits S₁ and S₂ are illuminated with coherent microwave sources, each of frequency 10⁸ Hz. The sources are synchronized to have zero phase difference. The slits are separated by a distance d = 150.0m. The intensity I(θ) is measured as a function of θ, where θ is defined as shown. If I₀ is the maximum intensity, then I(θ) for 0 ≤ θ ≤ 90° is given by: (A) I(θ) = I₀/2 for θ = 30° (B) I(θ) = I₀/4 for θ = 90° (C) I(θ) = I₀, for θ = 0° (D) I(θ) = I₀, for θ = 0° is constant for all values of θ
**Ans: A, C**

**[2008]**
**19.** In a Young's double slit experiment, the separation between the two slits is d and the wavelength of the light is λ. The intensity of light falling on slit 1 is four times the intensity of light falling on slit 2. Choose the correct choice (s): (A) If d = λ, the screen will contain only one maximum (B) If λ < d < 2λ, at least one more maximum (besides the central maximum) will be observed on the screen. (C) If the intensity of light falling on slit 1 is reduced so that it becomes equal to the of slit 2, the intensities of the observed dark and bright fringes will increase. (D) If the intensity of light falling on slit 2 is increased so that it becomes equal to that of slit 1, the intensities of the observed dark and bright fringes will increase.
**Ans: A, B, D**

**[2014]**
**20.** A light source, which emits two wavelength λ₁ = 400 nm and λ₂ = 600 nm, is used in a Young's double slit experiment. If recorded fringe widths for λ₁ and λ₂ are β₁ and β₂ and the number of fringes for them within a distance y on one side of the central maximum are m₁ and m₂, respectively, then: (A) β₂ > β₁ (B) m₁ > m₂ (C) From the central maximum, 3ʳᵈ maximum of λ₂ overlaps with 5ᵗʰ minimum of λ₁ (D) The angular separation of fringes for λ₁ is greater than λ₂
**Ans: A, B**

**[2016]**
**21.** While conducting the Young's double slit experiment, a student replaced the two slits with a large opaque plate in the xy plane containing two small holes that act as two coherent point sources (S₁, S₂) emitting light of wavelength 600 nm. The student instantly placed the screen parallel to the x-z plane at a distance D = 3m from the mid-point of S₁S₂, as shown schematically in the figure. The distance between the sources d = 0.0003 mm. The origin O is at the intersection of the screen and the line joining S₁S₂. Which of the following is(are) true of the intensity pattern on the screen? (A) Hyperbolic bright and dark bands with foci symmetrically placed about O in the x-direction (B) Semi circular bright and dark bands centered at point O (C) The region very close to the point O will be dark (D) Straight bright and dark bands parallel to the x-axis
**Ans: A, B, C**

**[2017]**
**22.** Two coherent monochromatic point sources S₁ and S₂ of wavelength λ = 600nm are placed symmetrically on either side of the centre of the circle as sown. The sources are separated by distance d = 1.8 mm. This arrangement produces interferences fringes visible as alternate bright and dark spots on the circumference of the circle. The angular separation between two consecutive bright spots is Δθ. Which of the following options is/are correct? (A) A dark sport will be formed at the point P₂ (B) At P₁ the order of the fringe will be maximum (C) The total number of fringes produced between P₁ and P₂ in the first quadrant is close to 3000 (D) The angular separation between two consecutive bright spots decreases as we move from P₁ to P₂ along the first quadrant
**Ans: A, C, D**

---

**LINK COMPREHENSION TYPE**

**PARAGRAPH FOR QUESTIONS 23 - 25**
The figure shows a surface XY separating two transparent media, medium-1 and medium-2. The lines ab and cd represent wavefronts of a light wave travelling in medium-1 and incident on XY. The lines ef and gh represent wavefronts of the light wave in medium 2 after refraction.

**[2007]**
**23.** Light travels as a: (A) Parallel beam in each medium (B) Convergent beam in each medium (C) Divergent beam in each medium (D) Divergent beam in one medium and convergent beam in the other medium
**Ans: A**

**24.** The phases of the light wave at c, d, e and f are φ_c, φ_d, φ_e and φ_f respectively. It is given that φ_c ≠ φ_f. Then: (A) φ_c cannot be equal to φ_d (B) φ_d can be equal to φ_c (C) (φ_d - φ_f) is equal to (φ_c - φ_e) (D) (φ_d - φ_c) is not equal to (φ_f - φ_e)
**Ans: B**

**25.** Speed of light is: (A) the same in medium-1 and medium-2 (B) larger in medium-1 than in medium-2 (C) larger in medium-2 than in medium-1 (D) different at b and d
**Ans: B**

---

**NUMERICAL VALUE TYPE**

**[1982]**
**26.** Screen S is illuminated by two point sources A and B. Another source C sends a parallel beam of light towards point P on the screen. Line AP is normal to the screen and the lines AP, BP and CP are in one plane. The distance AP, BP and CP are 3m, 1.5 m and 1.5 m respectively. The radiant powers of sources A and B are 90 watts and 180 watts respectively. The beam from C is of intensity 20 watts/m². Calculate the intensity at P on the screen [in W/m²].
**Ans: (need to calculate)**

**[1983]**
**27.** In Young's double slit experiment using monochromatic light, the fringe pattern shifts by a certain distance of the screen when a mica sheet of refractive index 1.6 and thickness 1.964 microns is introduced in the path of one of the interfering waves. The mica sheet is then removed and the distance between the plane of slits and the screen is doubled. It is found that the distance between successive maxima (or minima) now is the same as the observed fringe shift upon the introduction of the mica sheet. Calculate the wavelength of monochromatic light used in the experiment. [in Å]
**Ans: (need to calculate)**

**[1997]**
**28.** In a Young's experiment, the upper slit is covered by a thin glass plate of refractive index 1.4, while the lower slit is covered by another glass plate, having the same thickness as the first one but having refractive index 1.7. Interference pattern is observed using light of wavelength 54000Å. It is found that the point P on the screen, where the central maximum (n = 0) fall before the glass plates were inserted, now has ¾ the original intensity. It is further observed that what used to be the fifth maximum earlier lies below the point P while the sixth minima lies above P. Calculate the thickness of glass plate (in μM).
**Ans: (need to calculate)**

**[1999]**
**31.** In a Young's double slit experiment light consisting of two wavelength λ₁ = 500nm and λ₂ = 700 nm is incident normally on the slits. Find the distance (in mm) from the central maxima where the maxima due to two wavelengths coincide for the first time after central maxima. (Given D/d = 1000) where D is the distance between the slits and the screen and d is the separation between the slits.
**Ans: (need to calculate)**

**[2004]**
**32.** A young's double slit interference arrangement with slits S₁ and S₂ is immersed in water (refractive index = 4/3) as shown in the figure. The positions of maxima on the surface of water are given by x² + p²m²x² - d², where λ is the wavelength of light in air (refractive index =1), 2d is the separation between the slits and m is integer. The value of p is _____.
**Ans: (need to calculate)**

---

**MATCH MATRIX TYPE**

**[2009]**
**33.** Column I shows four situations of standard Young's double-slit arrangement with the screen placed far away from the slits. In each of these cases, S₁P₂ - S₂P₂ = λ/3, where λ is the wavelength of the light used. In the cases B, C and D, a transparent sheet of refractive index μ and thickness t is pasted on slit S₂. The thickness of the sheets are different in the different cases. The phase difference between the light waves reaching point P on the screen from the two slits δ(P) and the intensity I(P) at P are shown in Column 2. Match each situation given in Column 1 with the statements (s) in Column 2 valid for that situation.

(A) [(μ - 1)t = λ/4] - (P) δ(P₀) = 0 (Q) δ(P₁) = 0 (R) I(P₁) = 0 (S) I(P₀) > I(P₁) (T) I(P₀) > I(P₁)
(B) [(μ - 1)t = λ/4] - (P) δ(P₀) = 0 (Q) δ(P₁) = 0 (R) I(P₁) = 0 (S) I(P₀) > I(P₁) (T) I(P₀) > I(P₁)
(C) [(μ - 1)t = λ/2] - (P) δ(P₀) = 0 (Q) δ(P₁) = 0 (R) I(P₁) = 0 (S) I(P₀) > I(P₁) (T) I(P₀) > I(P₁)
(D) [(μ - 1)t = 3λ/4] - (P) δ(P₀) = 0 (Q) δ(P₁) = 0 (R) I(P₁) = 0 (S) I(P₀) > I(P₁) (T) I(P₀) > I(P₁)
**Ans: [Matching required based on conditions]**

---

**FILL IN THE BLANKS TYPE**

**[1983]**
**34.** A light wave of frequency 5×10¹⁴ Hz enters a medium of refractive index 1.5. In the medium, the velocity of the light wave is ............. and its wavelength is ............. Å
**Ans: (need to calculate)**

**[1986]**
**35.** In Young's double slit experiment, the two slits act as coherent sources of equal amplitude A and of wavelength λ. In another experiment with the same set-up the two slits are sources of equal amplitude A and wavelength λ, but are incoherent. The ratio the intensity of light at the mid-point of the screen in the first case to that in the second case is............. .
**Ans: (need to calculate)**

**[1992]**
**36.** If ε₀ and μ₀ are, respectively, the electric permittivity and magnetic permeability of free space, ε and μ are the corresponding quantities in a medium, the index of refraction of the medium in terms of the above parameters is ......... .
**Ans: (need to calculate)**

**[1993]**
**37.** In the figure shown, S is a monochromatic point source emitting light of wavelength λ = 500nm. A thin lens of circular shape and focal length 0.10m is cut into two identical halves L₁ and L₂ by a plane passing through a diameter. The two halves are placed symmetrically about the central axis SO with a gap of 0.5 mm. The distance along the axis from S to L₁ and L₂ is 0.15m, while that from L₁ and L₂ to O is 1.30 m. The screen at O is normal to SO. (i) If the third intensity maximum occurs at point A on the screen, find distance OA_____. (ii) If the gap between L₁ and L₂ is reduced from its original value of 0.5 mm. will the distance OA increase, decrease, or remain the same? ...............
**Ans: (need to calculate)**

**[1997]**
**38.** A light of wavelength 6000 Å in air, enters a medium with refractive index 1.5. Inside the medium its frequency is .............. Hz and its wavelength is .............. Å
**Ans: (need to calculate)**

**[1984]**
**39.** Two slits in a Young's double slit experiment are illuminated by two different sodium lamps emitting light of the same wavelength. No interference pattern will be observed on the screen.
**Ans: [True/False statement]**

**[1987]**
**40.** In a Young's double slit experiment performed with a source of white light, only black and white fringes are observed.
**Ans: [True/False statement]**

---

**JEE ADVANCED 2020 QUESTION**

**[2020]**
**41.** A parallel beam of light strikes a piece of transparent glass having cross section as shown in the figure below. Correct shape of the emergent wavefront will be (figures are schematic and not drawn to scale): (A) [Wavy on left, curved on right] (B) [Wavy on left, curved on right - variant] (C) [Straight wavy] (D) [Curved on both sides]
**Ans: (need to select correct shape)**
