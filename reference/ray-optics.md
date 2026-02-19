# Ray Optics

## Overview
Ray Optics covers the study of light behavior through reflection and refraction at various surfaces including plane mirrors, spherical mirrors, lenses, prisms, and combinations thereof. This chapter explores how light rays travel through different media, form images, and how optical devices manipulate light to create magnified or diminished images for practical applications.

---

## 1. Laws of Reflection and Fermat's Principle

### Concepts
- The angle of incidence equals the angle of reflection
- The incident ray, normal, and reflected ray lie in the same plane
- Fermat's Principle: light travels the path requiring minimum time
- Real and virtual objects and images based on convergence/divergence of rays
- Real image requires light to actually pass through the point; virtual image is only apparent

### Formulas
- `i = r` - Law of reflection (angle of incidence equals angle of reflection)

### Important Notes
- A real image can be projected on a screen, while a virtual image cannot
- Both object and image can be real or virtual depending on the optical system
- Real object: light energy actually present at the location
- Virtual object: light rays only tend to converge at the point

### Worked Example
**Q:** A plane mirror of length L/2 is long enough for a person of height L to view their entire reflected image. Is there any restriction on the position of the top edge of the mirror?

**A:**
- The man can view entire image if light rays from top of head and feet reach his eyes
- Let AB be the mirror, P be top of head, Q be feet, R be eyes
- AB = MN = MR + RN = 1/2(PR + QR) = 1/2 PQ
- Therefore, mirror length = L/2
- Top edge must be at horizontal level halfway between eyes and top of head

---

## 2. Sign Convention and Spherical Mirrors

### Concepts
- All distances parallel to principal axis measured from pole of spherical mirror
- Distances in direction of incident light taken as positive
- Distances opposite to incident light direction taken as negative
- Heights above principal axis taken as positive, below as negative
- Centre of curvature (C) and radius of curvature (R) for concave and convex mirrors
- Focus (F) is point where parallel rays converge/diverge after reflection

### Formulas
- `f = R/2` - Focal length is half the radius of curvature
- In convex mirrors: focal length is positive
- In concave mirrors: focal length is negative

### Important Notes
- Concave mirrors are converging mirrors; convex mirrors are diverging mirrors
- Focal length concept for plane mirrors: infinity
- For plane mirrors: `v = -u` (real image for virtual object, virtual image for real object)
- Mirror rotation by angle θ causes reflected ray rotation by 2θ

### Worked Example
**Q:** A ray of light travels at 20° below horizontal. At what angle with horizontal must a plane mirror be placed so it becomes vertically upwards after reflection?

**A:**
- Initially horizontal placement makes reflected ray 20° above horizontal
- To make reflected ray vertical, mirror must rotate by 70°/2 = 35°
- Mirror angle with horizontal = 35°

---

## 3. Mirror Equation and Magnification

### Concepts
- Relationship between object distance, image distance, and focal length
- Linear magnification: ratio of image size to object size
- Magnification negative for real inverted image; positive for virtual erect image
- Image formation depends on object location relative to C and F

### Formulas
- `1/u + 1/v = 1/f` - Mirror equation
- `M = I/O = -v/u = (-v-f)/f = -(v-f)/f` - Magnification formulas
- At infinity: image at F with zero size
- Between F and C: image beyond C, real, inverted, enlarged
- Between F and pole: image behind mirror, virtual, erect, enlarged
- At F: image at infinity

### Important Notes
- M negative for real inverted image
- M positive for virtual erect image
- Object distance measured from pole as reference
- Image characteristics depend critically on object position

### Worked Example
**Q:** A concave mirror is to form an image of the filament of a headlight lamp on a screen 4 m from the mirror. The filament is 4 mm high and the image is to be 32 cm high. What should be the focal length of the mirror and where should it be placed?

**A:**
- Image is real (on screen), hence inverted
- Magnification M = I/O = 32/0.4 = -80
- Using v = -4 m, M = -v/u gives u = -5 cm
- Using M = -(v-f)/f: 80 = (-4-f)/f
- Solving: f = -4/81 m (approximately 5 cm from filament)

---

## 4. Ray Diagrams for Spherical Mirrors

### Concepts
- Three key rays help construct image in mirrors:
  1. Ray parallel to principal axis passes through focus after reflection
  2. Ray through focus becomes parallel to principal axis after reflection
  3. Ray striking mirror normally (through C) reflects along same path
- Intersection of reflected rays gives image location
- Virtual images form behind mirror where reflected rays appear to diverge

### Formulas
- Ray tracing follows law of reflection at each point on mirror surface

### Important Notes
- For concave mirror: rays converge, can form real images
- For convex mirror: rays diverge, always forms virtual images
- Plane mirror: reflected rays appear to come from behind mirror at equal distance

### Worked Example
**Q:** Two plane mirrors are inclined at angle θ with each other. A light ray strikes one of them. Find its deviation after it has been reflected twice—once from each mirror.

**A:**
- Case 1: If i₁ > θ, net deviation = 360° - 2(i₁ + i₂) where i₁ + i₂ = θ
- Case 2: If i₁ < θ, net anti-clockwise deviation = 360° - (360° - 2θ) = 2θ
- Deviation depends on relative angle of incidence compared to prism angle

---

## 5. Refraction at Plane Surfaces

### Concepts
- Light bends when passing between media of different optical densities
- Snell's Law relates angle of incidence and refraction
- Critical angle for total internal reflection when light goes from denser to rarer medium
- Absolute refractive index: ratio of light speed in vacuum to speed in medium
- Relative refractive index: ratio of speeds in two different media

### Formulas
- `μ = c/v` - Absolute refractive index
- `₁μ₂ = c₂/c₁` - Relative refractive index (medium 1 to medium 2)
- `sin i/sin r = μ₂/μ₁` or `μ₁ sin i = μ₂ sin r` - Snell's Law
- `C = sin⁻¹(μ₁/μ₂)` - Critical angle from Snell's Law at refraction = 90°
- `d = t sin(i-r)/cos r` - Lateral displacement through glass slab

### Important Notes
- When light goes rarer to denser: bends toward normal
- When light goes denser to rarer: bends away from normal
- Total internal reflection occurs only when going from denser to rarer medium
- Magnitude of deviation = |i - r|

### Worked Example
**Q:** A layer of ice (μ = 1.33) lies on a glass plate (μ = 1.5). A ray of light makes an angle of incidence 60° on the surface of ice. Find the angle between this ray and the normal in glass.

**A:**
- At air-ice interface: sin 60°/sin r₁ = 1.33, giving sin r₁ = 1/(2×1.5×√3) → r₁ = 35°
- At ice-glass interface: sin 35°/sin r₂ = 1.5/1.33
- Solving: sin r₂ = √3/(2×1.5) = √3/3 → r₂ = 35°

---

## 6. Total Internal Reflection and Critical Angle

### Concepts
- When light travels from denser to rarer medium, refraction angle exceeds incidence angle
- If incidence angle exceeds critical angle C, refraction angle becomes 90°
- At angles greater than C, light undergoes total internal reflection
- No light escapes into rarer medium; all reflects back into denser medium
- Critical angle depends on material properties (μ₁ < μ₂)

### Formulas
- `sin C = μ_rarer/μ_denser` - Critical angle for an interface
- `C = sin⁻¹(1/μ)` - Critical angle from vacuum/air to medium of refractive index μ
- At critical angle: refraction angle = 90°
- For angles i > C: total internal reflection occurs

### Important Notes
- Total internal reflection can only occur when going from denser to rarer medium
- Critical angle is smallest for the largest difference in refractive indices
- This principle is used in optical fibers and prisms for light manipulation
- Light intensity reflection is 100% at angles exceeding critical angle

### Worked Example
**Q:** A point source of light S is placed at the bottom of a tank containing a liquid (μ = μ) upto depth h. A bright circular spot is seen on the surface. Show that the radius of this bright circle is r = h/√(μ²-1).

**A:**
- Light rays from S striking surface beyond critical angle undergo total internal reflection
- Only rays within critical angle cone escape
- From triangle APS: tan C = r/h where angle PSA = critical angle
- sin C = 1/μ gives tan C = 1/√(μ²-1)
- Therefore: r = h tan C = h/√(μ²-1)

---

## 7. Refraction Through a Glass Slab

### Concepts
- When light passes through parallel-sided glass slab, it emerges parallel to original direction
- Angle of emergence equals angle of incidence
- Ray undergoes lateral displacement but not angular deviation
- Lateral displacement depends on thickness, refractive index, and angle of incidence
- Application in optical instruments and protective glass

### Formulas
- `e = i` - Angle of emergence equals angle of incidence
- `d = t sin(i-r)/cos r` - Lateral displacement of ray
- Where t is thickness and r is refraction angle inside glass
- For small angles: displacement ≈ t(i-r)

### Important Notes
- Emergent ray is parallel to incident ray but laterally shifted
- Lateral displacement increases with angle of incidence
- Denser medium causes more bending and lateral shift
- Used in parallel-sided protective windows and glass sheets

### Worked Example
**Q:** A narrow beam of light strikes a glass plate (μ = 1.60) at an angle of 53° to the normal. If the plate is 20 mm thick, what will be the lateral displacement of the beam after it emerges from the plate?

**A:**
- At entry: sin 53°/sin r = 1.60
- Solving: sin r = 0.8/1.60 = 0.5, so r = 30°
- Lateral displacement d = 20 × sin(53°-30°)/cos 30° = 20 × sin 23°/cos 30° ≈ 8.9 mm

---

## 8. Refraction Through a Prism

### Concepts
- Prism is a transparent medium bounded by two plane surfaces at an angle (refracting angle A)
- Light undergoes refraction at both surfaces
- Angle of deviation D is angle between incident and emergent rays
- Angle of deviation depends on angle of incidence, prism angle, and refractive index
- Minimum deviation occurs when ray path is symmetric through prism

### Formulas
- `r₁ + i₂ = A` - Relationship at prism (from geometry)
- `D = i + e - A` - Angle of deviation formula
- `A + D_min = i + e = 2i` - At minimum deviation (i = e, r₁ = r₂)
- `sin[(A+D_min)/2]/sin(A/2) = μ` - Formula for refractive index at minimum deviation
- For small angle A: `D = (μ-1)A` - Deviation for prism with small refracting angle

### Important Notes
- Deviation D is minimum when angle of incidence = angle of emergence
- For minimum deviation: ray passes symmetrically through prism
- Same deviation is possible for two different angles of incidence
- Grazing incidence (i = 90°): refraction angle equals critical angle
- Grazing emergence (e = 90°): incidence angle at second surface = critical angle

### Worked Example
**Q:** A ray of light is incident on one face of a prism (μ = 1.5) at an angle of 60°. The refracting angle of the prism is also 60°. Find the angle of emergence and the angle of deviation.

**A:**
- At point P: sin 60°/sin r₁ = 1.5, giving sin r₁ = 1/√3, so r₁ = 35°16'
- Using r₁ + i₂ = A: i₂ = 60° - 35°16' = 24°44'
- At point Q: sin 24°44'/sin e = 1.5, giving sin e = 1.5 sin 24°44' = 0.63, so e = 39°
- Deviation D = i + e - A = 60° + 39° - 60° = 39°

---

## 9. Dispersion Through a Prism

### Concepts
- Refractive index varies with wavelength of light (μ_red < μ_violet)
- Shorter wavelengths (violet) deviate more than longer wavelengths (red)
- White light splits into constituent colors when passing through prism
- Angular separation between red and violet rays called angle of dispersion
- Dispersive power depends on material properties

### Formulas
- `D_violet = (μ_violet - 1)A` - Deviation for violet light
- `D_red = (μ_red - 1)A` - Deviation for red light
- `φ = D_violet - D_red = (μ_violet - μ_red)A` - Angle of dispersion
- `D_mean = [(μ_violet + μ_red)/2 - 1]A` - Mean deviation
- `ω = φ/D_mean = (μ_violet - μ_red)/(μ_mean - 1)` - Dispersive power

### Important Notes
- Dispersion increases with prism angle for same material
- Different materials have different dispersive powers
- Violet light has higher frequency and shorter wavelength, deviates more
- Used in spectroscopes and color separation devices

### Worked Example
**Q:** A ray of light is incident on one face of a prism (μ = 1.5) at an angle of 60°. The refracting angle of the prism is also 60°. Find the angle of emergence and the angle of deviation. Is there any other angle of incidence which will produce the same deviation?

**A:**
- First condition: i = 60°, giving deviation D = 39° (from previous example)
- By symmetry, same deviation occurs at i = 39° and e = 60°
- For same deviation: either (i₁ = 60°, e₁ = 39°) or (i₂ = 39°, e₂ = 60°)

---

## 10. Apparent Shift (Lateral Displacement)

### Concepts
- Object appears shifted when viewed through a layer of denser medium
- Shift depends on thickness of medium and refractive index
- Object appears closer to surface when viewed from above
- Apparent depth is less than real depth by factor μ
- Applicable to objects in water, glass, and other transparent media

### Formulas
- `apparent shift = t(1 - 1/μ)` - When object in denser medium between observer (in air)
- `apparent shift = t(1 - μ₀/μ)` - When observer in medium of index μ₀
- `apparent depth = real depth/μ` - For object in medium viewed from air
- For multiple layers: total shift = sum of individual shifts

### Important Notes
- Negative shift means object appears away from observer
- Multiple layers add their individual shifts
- Glass slabs placed in path of converging rays shift convergence point
- Used to understand why objects in water appear raised/closer than actual position

### Worked Example
**Q:** A layer of ether (μ = 1.36) 2 cm thick floats on water (μ = 4/3) 4 cm deep. What is the apparent distance from the ether surface to the bottom of the water layer when viewed at normal incidence?

**A:**
- Apparent depth of ether + apparent depth of water
- = 2/1.36 + 4/(4/3) = 1.47 + 3 = 4.47 cm
- Alternative: Total shift = 2(1 - 1/1.36) + 4(1 - 1/(4/3)) = 0.53 + 1 = 1.53 cm
- Apparent depth = (2 + 4) - 1.53 = 4.47 cm

---

## 11. Refraction at Spherical Surfaces

### Concepts
- Light refracts when incident on curved surface separating two media
- Object and image distances measured from pole of spherical surface
- Radius of curvature taken positive for convex surface facing incident light
- Refraction causes convergence/divergence of rays depending on surface shape
- Plane surface can be treated as spherical surface with R = ∞

### Formulas
- `μ₂/v - μ₁/u = (μ₂-μ₁)/R` - Refraction at spherical surface
- For plane surface (R = ∞): `μ₂/v - μ₁/u = 0` or `v/u = -μ₂/μ₁`
- Negative R: center of curvature on object side
- Positive R: center of curvature on image side

### Important Notes
- Spherical surface can form real or virtual images depending on parameters
- For diverging rays from curved surface: intermediate convergence point acts as virtual object
- Two refractions in sequence (like glass sphere) require treating each surface separately
- Total refraction is sum of refractions at both surfaces

### Worked Example
**Q:** A transparent rod 40 cm long is cut flat at one end and rounded to a hemispherical surface of 12 cm radius at the other end. A small object is embedded with in the rod along its axis and half way between its ends. When viewed from the flat end, the object appears 12.5 cm deep. What is its apparent depth when viewed from the curved end?

**A:**
- Flat surface: apparent depth = 12.5 cm (real depth = 12.5 × 1.6 = 20 cm for μ = 1.6)
- Curved surface: Using μ₂/v - μ₁/u = (μ₂-μ₁)/R
- For curved end: u = -20 cm, R = -12 cm, μ₁ = 1.6, μ₂ = 1
- 1/v - 1.6/(-20) = (1-1.6)/(-12)
- Solving: v = -33.3 cm (virtual image 33.3 cm from curved surface)

---

## 12. Lenses - Convex (Converging) Lens

### Concepts
- Convex lens has two surfaces that bulge outward
- Acts as converging lens for light parallel to principal axis
- Forms real or virtual images depending on object position
- Image location determined by focal length and object distance
- Six standard object positions with different image characteristics

### Formulas
- `1/f = (μ/μ₀ - 1)(1/R₁ - 1/R₂)` - Lens maker's formula
- `1/v + 1/u = 1/f` - Lens equation
- `M = I/O = v/u = f/(u+f) = 1 - v/f` - Magnification formulas
- Object beyond 2F: image between F and 2F, real, inverted, diminished
- Object at 2F: image at 2F, real, inverted, same size
- Object between 2F and F: image beyond 2F, real, inverted, enlarged
- Object at F: image at infinity
- Object between F and lens: virtual, erect, enlarged image on same side

### Important Notes
- Focal length positive for converging lens
- Real images: v positive, M negative
- Virtual images: v negative, M positive
- Size (I) of inverted image taken as negative

### Worked Example
**Q:** Find the focal length of a biconvex lens in air if the radii of its surface are 60 cm and 15 cm and refractive index of glass is 1.5.

**A:**
- R₁ = +60 cm (convex side), R₂ = -15 cm (coming out)
- Using lens maker's formula: 1/f = (1.5 - 1)(1/60 - 1/(-15))
- 1/f = 0.5 × (1/60 + 1/15) = 0.5 × (1/60 + 4/60) = 0.5 × 5/60 = 1/24
- Therefore f = 24 cm

---

## 13. Lenses - Concave (Diverging) Lens

### Concepts
- Concave lens has surfaces that curve inward
- Acts as diverging lens for all incident light
- Always forms virtual, erect, diminished image
- Image always on same side as object
- Focal length is negative
- Used as corrective lens for myopia

### Formulas
- Lens maker's formula: `1/f = (μ/μ₀ - 1)(1/R₁ - 1/R₂)` (same as convex)
- Lens equation: `1/v + 1/u = 1/f` (same formula)
- Magnification: `M = v/u` (always positive for real objects)
- Focal length f always negative
- Image location: `v` always negative (virtual)

### Important Notes
- For concave lens with real object: image always virtual, erect, and smaller
- Diverging lens cannot form real image of a real object
- Virtual object with concave lens can form real image
- Used in combination with convex lens for achromatic combinations

### Worked Example
**Q:** Find the focal length of a concave lens in water (μ = 4/3) if the surface have radii equal to 40 cm and 30 cm. (μ_glass = 1.5)

**A:**
- R₁ = -30 cm (concave), R₂ = +40 cm
- Lens in water: 1/f = (μ_glass/μ_water - 1)(1/R₁ - 1/R₂)
- 1/f = (1.5/(4/3) - 1)(1/(-30) - 1/40)
- 1/f = (9/8 - 1)(-1/30 - 1/40) = (1/8)(-7/120) = -7/960
- Therefore f ≈ -137.1 cm

---

## 14. Lens Equation and Magnification

### Concepts
- Same mathematical relationships apply to lenses as mirrors
- Object and image distances related through focal length
- Magnification depends on position of object relative to focal length
- Multiple images possible when object placed at different locations
- Image characteristics change as object moves through different zones

### Formulas
- `1/v + 1/u = 1/f` - Lens equation (same as mirror)
- `M = I/O = v/u = f/(u-f) = -v/(u-f)` - Magnification
- Sign convention: u positive (object on incident side), v can be ± depending on image type
- For real object and real image: both u, v positive, f positive (convex lens)

### Important Notes
- Image size and nature depend on object position
- Magnification M = -1 when object at 2F (same size, inverted)
- As object approaches F from outside, image recedes to infinity
- Virtual object (negative u) produces different image characteristics

### Worked Example
**Q:** An object is imaged by a lens on a screen placed 12 cm from the lens. When the lens is moved 2 cm away from the object, the screen must be moved 2 cm closer to the object to reform it. Find the focal length of the lens.

**A:**
- Initial: 1/12 - 1/(-x) = 1/f ... (i)
- After shift: u' = -(x+2), v' = 12-2 = 10 cm
- 1/10 - 1/(x+2) = 1/f ... (ii)
- Solving equations: f = 4 cm

---

## 15. Displacement Method (Bessel's Method)

### Concepts
- Method to measure focal length of converging lens experimentally
- Object and screen fixed at distance D apart
- Lens moved to two positions giving sharp images
- At both positions: object distance + image distance = D
- Displacement L between two lens positions used to find focal length

### Formulas
- `x² - Dx + Df = 0` - Quadratic equation for object distance
- `x = (D ± √(D² - 4Df))/2` - Two object distances
- `L = x₁ - x₂ = √(D² - 4Df)` - Displacement of lens between two positions
- `f = (D² - L²)/(4D)` - Focal length from D and L
- `x₁ + x₂ = D - L` and `x₁ = D - x₂`

### Important Notes
- Method requires D > 4f for two distinct positions
- Product of magnifications in two positions = 1
- Object size = √(I₁ × I₂) where I₁, I₂ are image sizes at two positions
- More accurate than direct measurement methods

---

## 16. Combination of Lenses

### Concepts
- When multiple lenses placed close together (in contact), their powers add
- Power P = 1/f (measured in diopters when f in meters)
- Combination behaves as single lens with equivalent focal length
- Thick lenses or separated lenses require accounting for distance between them
- Combination with mirror follows different formula

### Formulas
- `1/F = 1/f₁ + 1/f₂ + 1/f₃ + ...` - For lenses in contact
- `P = P₁ + P₂ + ...` - Power addition (in diopters)
- For lens-mirror combination: `1/F' = -2(1/f₁ + 1/f₂ + ... + 1/f_m)`
- Where f₁, f₂ are lens focal lengths and f_m is mirror focal length

### Important Notes
- Powers add algebraically (negative for diverging lenses)
- Combination of converging and diverging lenses can achieve specific powers
- Used in optical instruments like telescopes and microscopes
- Achromatic combinations have zero dispersion

### Worked Example
**Q:** One surface of a biconvex lens having focal length 40 cm is silvered. The radius of curvature of the other surface is 60 cm. At what distance should an object be placed to obtain an object magnified 3 times?

**A:**
- Silvered lens acts as mirror-lens combination
- Focal length of combination: 1/F = -2[1/40 + 1/f_m]
- For magnification M = -3: u = -80/7 ≈ -11.4 cm

---

## 17. Chromatic Aberration and Achromatic Combination

### Concepts
- Refractive index varies with wavelength (μ_red < μ_violet)
- Different colors focus at different points (chromatic aberration)
- Red light focuses farther from lens than violet light
- Dispersive power ω characterizes material's color separation ability
- Achromatic combination eliminates chromatic aberration

### Formulas
- `μ_red < μ_violet` - Refractive index dependence on wavelength
- `f_red > f_violet` - Red light has longer focal length
- `ω = (μ_violet - μ_red)/(μ_mean - 1)` - Dispersive power
- For achromatic combination: `ω₁/f₁ + ω₂/f₂ = 0` - Condition for zero dispersion
- `1/F = 1/f₁ + 1/f₂` - Equivalent focal length (still has residual aberration)

### Important Notes
- Chromatic aberration limits lens performance for white light
- Achromatic doublets use two materials with different dispersive powers
- Converging and diverging lenses combined to cancel dispersion
- Red and blue focal lengths differ by factor depending on material and design

### Worked Example
**Q:** Two lenses of crown glass and flint glass are to form an achromatic combination with a net focal length of 35 cm. Calculate the focal lengths of the components. For crown glass: μ_yellow = 1.5175, μ_c - μ_F = 0.00856. For flint glass: μ_c - μ_F = 0.01722 and μ_y = 1.6214

**A:**
- Dispersive power: ω_crown = 0.01659, ω_flint = 0.027711
- From achromatic condition: ω₁/f₁ + ω₂/f₂ = 0
- From power addition: 1/f₁ + 1/f₂ = 1/35
- Solving: f₁ = 14.1 cm (crown), f₂ = -23.6 cm (flint)

---

## 18. Optical Instruments and Applications

### Concepts
- Magnifying glass: single lens with object between F and lens producing virtual erect enlarged image
- Camera: lens forms real inverted diminished image on film
- Telescope: objective forms image which is magnified by eyepiece
- Microscope: two converging lenses produce high magnification
- Prism binoculars: use prisms for lateral displacement and internal reflection
- Fiber optics: uses total internal reflection for light transmission

### Formulas
- Magnifying glass: `M = (D + f)/f` where D = 25 cm (least distance of distinct vision)
- Simple magnification: `M = D/f` (when image at infinity)
- Microscope magnification: `M = (L × D)/(f_o × f_e)` where L is tube length
- Camera area magnification: `(v/u)²`

### Important Notes
- Magnification in optical instruments depends on lens arrangement
- Real images can be projected; virtual images cannot
- Combination of lenses in sequence: treat sequentially using previous image as next object
- Practical instruments use multiple lenses to reduce aberrations

---

## Questions

### ANSWER KEYS (Reference)

**Workbook Answer Key - Level 0**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | A | D | D | B | B | A | A | C | B | C | D | A | B | C | D |

**Workbook Answer Key - Level 1 (Q 1-30)**

| Q# | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | A | C | B | B | A | A | B | B | C | C | A | A | B | C | A |

| Q# | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | A | C | B | B | A | A | B | B | C | C | A | A | B | C | A |

**Workbook Answer Key - Level 1 (Q 31-60)**

| Q# | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | A | B | A | A | C | A | D | B | B | B | C | B | A | D | B |

| Q# | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | C | B | B | A | B | B | D | A | C | B | D | D | C | D | C |

**Workbook Answer Key - Level 2 (Q 106-165)**

| Q# | 106 | 107 | 108 | 109 | 110 | 111 | 112 | 113 | 114 | 115 | 116 | 117 | 118 | 119 | 120 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | D | D | D | B | A | A | A | C | ABCD | ACD | B | C | C | C | A |

| Q# | 121 | 122 | 123 | 124 | 125 | 126 | 127 | 128 | 129 | 130 | 131 | 132 | 133 | 134 | 135 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | D | AC | BC | AB | 80 | D | C | D | B | B | B | B | AC | AB | 3 |

| Q# | 136 | 137 | 138 | 139 | 140 | 141 | 142 | 143 | 144 | 145 | 146 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | A | B | D | A | C | ABC | BCD | AC | 24 | A→PS; B→QR; C→QS; D→PS | A |

---

### RAY OPTICS: LEVEL 0 (EASY)

**1.** When light travels from one medium to the other whose refractive index is different, then which of the following will change?
(A) Frequency, wavelength and velocity (B) Frequency and wavelength (C) Wavelength and velocity (D) Only velocity

**2.** Why does cut diamond sparkles?
(A) High refractive index (B) Small size (C) Transparent nature (D) All of these

**3.** When white light passes through a thin glass prism, one gets spectrum on the other side of the prism. In the emergent beam, which colour is deviated the least by the prism?
(A) Red (B) Violet (C) Blue (D) Yellow

**4.** A concave lens of refractive index 1.5 is immersed in a medium of refractive index 1.65. What is the nature of the lens in the medium?
(A) Converging (B) Diverging (C) Plano-concave (D) Acts as a plane

**5.** A light beam is reflected by using a mirror. If the mirror rotates by an angle θ, the reflected light will deviate from the original path by the angle ________.
(A) θ (B) 2θ (C) θ/2 (D) 4θ

**6.** A convex lens is placed in contact with a plane mirror. A point at a distance of 20 cm on the axis of this combination has its image coinciding with itself. What is the focal length of the lens?
(A) 10 cm (B) 20 cm (C) 40 cm (D) 30 cm

**7.** For the same value of angle of incidence, the angles of refraction in three media A, B and C are are 15°, 25° and 35° respectively. In which medium would the velocity of light be minimum?
(A) A (B) B (C) C (D) Same in all

**8.** Why does bluish colour predominate in a clear sky?
(A) Blue light has shorter wavelength (B) Blue light has longer wavelength (C) Less scattering (D) More absorption

**9.** An object of 3 cm height is placed at a distance of 60 cm from a convex mirror of focal length 30 cm. Find the nature, position and size of the image formed.
(A) Virtual, 20 cm, 1 cm (B) Real, 20 cm, 1 cm (C) Virtual, 30 cm, 2 cm (D) Real, 30 cm, 2 cm

**10.** Monochromatic light of wavelength 589 nm is incident from air on a water surface. If μ for water is 1.33, find the wavelength, frequency and speed of the refracted light.
(A) 443 nm, 5.1×10¹⁴ Hz, 2.25×10⁸ m/s (B) 443 nm, 5.1×10¹⁴ Hz, 3×10⁸ m/s (C) 589 nm, 5.1×10¹⁴ Hz, 2.25×10⁸ m/s (D) 443 nm, 3×10¹⁴ Hz, 2.25×10⁸ m/s

**11.** Use the mirror equation to show that an object place between f and 2f of a concave mirror produces a real image beyond 2f.
(A) Derivation (B) Using 1/u + 1/v = 1/f with f < u < 2f (C) Image forms at v > 2f (D) All correct

**12.** (i) Plane and convex mirrors are known to produce virtual images of the objects. Draw a ray diagram to show how, in the case of convex mirrors, virtual objects can produce real image. (ii) Why are convex mirrors used as side view mirrors in vehicles?
(A) Wider field of view (B) Erect images (C) Reduced size (D) All of these

**13.** A ray of light, incident on an equilateral glass prism (μg = √3) moves parallel to the base line of the prism inside it. Find the angle of incidence for this ray.
(A) 30° (B) 45° (C) 60° (D) 90°

**14.** A small bulb (assumed to be a point source) is placed at the bottom of a tank containing water to a depth of 80 cm. Find out the area of the surface of water through which light from the bulb can emerge. Take the value of the refractive index of water to be 4/3.
(A) 5027 cm² (B) 5100 cm² (C) 5200 cm² (D) 5300 cm²

**15.** (i) How is the focal length of a spherical mirror affected when the wavelength of the light used is increased? (ii) A convex lens has 20 cm focal length in air. What is its focal length in water? (Refractive index of air-water = 1.33, refractive index of air-glass = 1.5).
(A) (i) No change (ii) 100 cm (B) (i) Increases (ii) 80 cm (C) (i) Decreases (ii) 120 cm (D) (i) No change (ii) 120 cm

---

### RAY OPTICS: LEVEL 1

**1.** A ray of light is incident on a mirror. If the incident light ray is turned by 30° clockwise and the mirror by 40° clockwise, find the angle turned by the reflected ray.
(A) 50° (B) 30° (C) 40° (D) 60°

**2.** In the given figure, find the angle between reflected rays.
(A) 15° (B) 30° (C) 45° (D) 60°

**3.** A beam of light strikes one mirror of a right angle mirror assembly at an angle of incidence 45° as shown in the figure. The right angle mirror assembly is rotated such that the angle of incidence becomes 60°. Which of the following statements is correct about the emerging light beam?
(A) It will move through an angle of 15° with respect to the original emerging beam (B) It will move through an angle of 30° with respect to the original emerging beam (C) It will move through an angle of 45° with respect to the original emerging beam (D) It will emerge parallel to the original emerging beam

**4.** A ray of light is incident on a plane mirror along a vector i + j - k. The normal to the mirror at the point of incidence is along i + j. Then unit vector along the reflected ray is:
(A) 1/√3 (i + j + k) (B) -1/√3 (i + j + k) (C) 1/√3 (-i + j + k) (D) None of these

**5.** The light reflected by a plane mirror may form a real image:
(A) If the ray incident on the mirror are diverging (B) If the ray incident on the mirror are converging (C) If the object is placed very close to the mirror (D) Under no circumstance

**6.** Two plane mirror M₁ and M₂ are placed parallel to each other 20 cm apart. A luminous point object 'O' is placed between them at 5 cm from M₁ as shown in figure.
(A) The distance (in cm) of three nearest images from mirror M₁ are 5, 35 and 45 respectively (B) The distances (in cm) of three nearest image from mirror M₂ are 5, 35 and 45 respectively (C) The distances (in cm) of three nearest images from mirror M₁ are 15, 25 and 55 respectively (D) The distances (in cm) of three nearest images from mirror M₂ are 15, 35 and 55 respectively

**7.** Area of triangle formed by S and its two images is:
(A) 3√3 m² (B) 3√3/4 m² (C) 4/(3√3) m² (D) Can't be determined

**8.** A small object is placed 10 cm in front of a plane mirror. If you stand behind the object 30 cm from the mirror and look at its image, the distance focused for your eye will be:
(A) 60 cm (B) 20 cm (C) 40 cm (D) 80 cm

**9.** A point source has been placed as shown in the figure. What is the length on the screen that will receive reflected light from the plane mirror?
(A) 10 cm (B) 20 cm (C) 30 cm (D) 40 cm

**10.** As shown in the figure, a particle is placed at O in front of a plane mirror M. A man at P can move along path PY and PY'. Then which of the following is true?
(A) For all points on PY, man can see the image of O (B) For all points on PY', man can see the image, but for no point on PY, he can see image of O (C) For all points on PY', he can see the image but on PY, he can see the image only upto distance d (D) He can see the image only upto a distance d on either side of P

**11.** A person's eye is at a height of 1.5 m from ground. He stands in front of a 0.3 m long plane mirror which is 0.8 m above the ground. The length of the image he sees of himself is:
(A) 1.5 m (B) 1.0 m (C) 0.8 m (D) 0.6 m

**12.** A person walks at a velocity v in a straight line forming an angle α with the plane of a mirror. Determine the velocity vrel at which he approaches his image, assuming that the object and its image are symmetric relative to the plane of the mirror.
(A) 2v sin α (B) 2v cos α (C) v sin α (D) v cos α

**13.** A plane mirror is placed at origin parallel to y-z plane facing the positive x-axis. A object starts form (2m, 0, 0) with a velocity of (2i + 2j)m/s. The relative velocity of image with respect to object is along:
(A) positive x-axis (B) negative x-axis (C) positive y-axis (D) negative y-axis

**14.** A point object is moving with velocity u = 2i + j - k m/s in front of a stationary plane mirror. The magnitude of relative velocity of the image with respect to object is moving at twice the velocity of object if the normal of the plane mirror will be along:
(A) 2i + j + k (B) -2i + j - k (C) 2i + j - k (D) 2i - j - k

**15.** A boy is walking under an inclined mirror at a constant velocity V m/s along the X axis as shown in figure. If the mirror is inclined at an angle θ with the horizontal then what is the velocity of the image?
(A) V sin θi + V cos θj (B) V cos θi + V sin θj (C) V sin 2θi + V cos 2θj (D) V cos 2θi + V sin 2θj

**16.** The co-ordinates of the image of point object P formed by a concave mirror of radius of curvature 20 cm as shown in the figure is:
(A) (13.33 cm, -1 cm) (B) (13.33 cm, +1 cm) (C) (-13.33 cm, +1 cm) (D) (-13.33 cm, -1 cm)

**17.** A beam of convergent light converges to a point 0.5 m in front of the mirror after reflection a convex mirror but in the absence of the mirror the beam converges to a point 0.2 m behind the mirror. The radius of curvature of the mirror is:
(A) 20 cm (B) 50 cm (C) 66.67 cm (D) 28.57 cm

**18.** If a converging beam of light is incident on a concave mirror, the reflected light:
(A) may form a real image (B) must form a real image (C) may form a virtual image (D) may be a parallel beam

**19.** A linear object is placed along the axis of a mirror as shown in figure. If f is the focal length of the mirror then the length of image is:
(A) 2f/3 (B) f (C) f/3 (D) None of these

**20.** An infinitely long rod lies along the axis of a concave mirror of focal length f. The near end of the rod is at a distance u > f from the mirror. Its image will have a length:
(A) f²/(u-f) (B) uf/(u-f) (C) f²/(u+f) (D) uf/(u+f)

**21.** Concave mirror has a focal length 20 cm. The distance between the two positions of the object for which the image size is double of the object size is:
(A) 20 cm (B) 40 cm (C) 30 cm (D) 60 cm

**22.** Find the angle subtended by image of AB at the eye E.
(A) 0.04° (B) 2.3° (C) 7.2° (D) 4.6°

**23.** The incorrect statement for a concave mirror producing a virtual image of the object is:
(A) The linear magnification is always greater than one, except at the pole (B) The linear magnification is always less than one (C) The magnification tends to one as the object moves nearer to the pole of the mirror (D) The distance of the object from the pole of the mirror is less than the focal length mirror

**24.** A point object at 15 cm from a concave mirror of radius of curvature 20 cm is made to oscillate along the principal axis with amplitude 2 mm. The amplitude of its image will be:
(A) 2 mm (B) 4 mm (C) 8 mm (D) 16 mm

**25.** In figure, find the total magnification after two successive reflections: first on M₁ and then on M₂.
(A) +1 (B) -2 (C) +2 (D) -1

**26.** Find the co-ordinates of image of point object P formed after two successive reflection in situation as shown in figure considering first reflection at concave mirror and then at convex.
(A) (30 cm, -14 mm) (B) (-30 cm, 14 mm) (C) (-30 cm, -14 mm) (D) None of these

**27.** An object O is placed in front of a small plane mirror M₁ and a large convex mirror M₂ of focal length f. The distance between O and M₁ is x and the distance between M₁ and M₂ is y. The images of O formed by M₁ and M₂ coincide. The magnitude of f is:
(A) (x² - y²)/(2y) (B) (x² + y²)/(2y) (C) x - y (D) (x² + y²)/(x - y)

**28.** A point object P moves towards a stationary concave mirror with a constant speed v, along the optical axis. The speed of the image:
(A) Is always less than v (B) May be greater than, equal to or less than v, depending upon on position of P (C) Is always greater than v (D) None of these

**29.** A luminous point object is moving along the principal axis of a concave mirror of focal length 12 cm towards it. When its distance from the mirror is 20 cm, its velocity is 4 cm/s. The velocity of the image in cm/s at that instant is:
(A) 6, towards the mirror (B) 6, away from the mirror (C) 9, away from the mirror (D) 9, towards the mirror

**30.** In the figure M₁and M₂ are two fixed mirrors shown. If the object 'O' located between the two mirrors moves towards the plane mirror, then the image I which is formed after two successive reflections first from M₁ and then from M₂ respectively will move:
(A) Always towards right (B) Always towards left (C) Depends on position of O (D) Cannot be determined

**31.** A ray of light fails on a transparent glass slab with refractive index of 1.62. The angle of incidence for which the reflected and refracted rays are mutually perpendicular is:
(A) tan⁻¹(1.62) (B) sin⁻¹(1.62) (C) cos⁻¹(1.62) (D) None of these

**32.** A ray of light passes from glass, having a refractive index of 1.6, to air. The angle of incidence for which the angle of refraction is twice the angle of incidence is:
(A) sin⁻¹(2/5) (B) sin⁻¹(5/8) (C) sin⁻¹(5/8) (D) sin⁻¹(2/5)

**33.** A light ray of frequency ν and wavelength λ enters a liquid of refractive index 3/2. The ray travels in the liquid with:
(A) Frequency ν and wavelength (2/3)λ (B) Frequency ν and wavelength (3/2)λ (C) Frequency ν and wavelength λ (D) Frequency (3/2)ν and wavelength λ

**34.** The x - z plane separates two media A and B with refractive indices μ₁ and μ₂ respectively. A ray of light travels from A to B. Its directions in the two media are given by the unit vectors rₐ = ai + bj and rᵦ = ai + βj respectively where i and j are unit vectors in the x and y direction. Then:
(A) μ₁a = μ₂a (B) μ₁a = μ₂β (C) μ₁β = μ₂β (D) μ₁β = μ₂b

**35.** A ray of light is incident on a thick slab of glass (thickness t) as shown below. The emergent ray is parallel to the incident ray but displaced sideways by a distance. If the angles are small then d is:
(A) t(1 - i/r) (B) rt(1 - i/r) (C) t(1 - r/i) (D) t(1 - i/r)

**36.** A ray of light incident from air on a glass plate of refractive index n is partly reflected and partly refracted at the two surfaces of the glass. The displacement y₀ in the figure is:
(A) 2d sin θ/(√(n² - sin² θ)) (B) 2d sin θ/(sin² θ - 1/n²) (C) 2d√(n² - sin² θ)/(sin θ) (D) None of these

**37.** A fish in water (refractive index n) looks at a bird vertically above in the air. If y is the height of the bird and x is the depth of the fish from the surface, then the distance of the bird as estimated by this fish is:
(A) x + y(1 - 1/n) (B) y + x(1 - 1/n) (C) x + y(1 - 1/n) (D) x + ny

**38.** Consider the situation shown in figure. Water (μ = 4/3) is filled in a beaker upto a height of 10 cm. A plane mirror is fixed at a height of 5 cm from the surface of water. Distance of image from the mirror after reflection from it of an object O at the bottom of the beaker is:
(A) 15 cm (B) 12.5 cm (C) 7.5 cm (D) 10 cm

**39.** A vessel of height 2d is half-filled with a liquid of refractive index √2 and the other half with a liquid of refractive index n. (The given liquids are immiscible). Then the apparent depth of the inner surface of the bottom of the vessel will be:
(A) d/(n + √2) (B) d(n + √2)/(n√2) (C) d√2n/(d(n + √2)) (D) nd/(d + √2)

**40.** In a thick glass slab of thickness t and refractive index n₁ a cuboidal cavity of thickness m is carved as shown in the figure and is filled with liquid of R.I. n₂(n₁ > n₂). The ratio of t/m, so that shift produced by this slab is zero when an observer A observes an object B with parallel rays is:
(A) (n₁ - n₂)/(n₂ - 1) (B) (n₁ - n₂)/(n₂(n₁ - 1)) (C) (n₁ - n₂)/(n₁ - 1) (D) (n₁ - n₂)/(n₁(n₂ - 1))

**41.** A mango tree is at the bank of river and one of the branch of tree extends over the river. A tortoise lives in river. A mango falls just above the tortoise. The acceleration of the mango falling from tree appearing to the tortoise is (Refractive index of water is 4/3 and the tortoise is stationary):
(A) g (B) 3g/4 (C) 4g/3 (D) None of these

**42.** Seeta and Geeta are asked to draw the trajectory of a light ray near earth's surface when refractive index is decreasing with increase in height. Figure shows the respective ray diagrams.
(A) Seeta is correct (B) Geeta is correct (C) Both are correct (D) No conclusion can be drawn

**43.** Statement -1: When light travels from denser to rarer medium the critical angle of incidence have different values for different wavelengths of light. Statement -2: Refractive index of a medium varies with wavelength of light.
(A) Both statement -1 and statement -2 are true and statement -2 is the correct explanation of statement -1 (B) Both statement -1 and statement -2 are true and statement -2 is the correct explanation of statement -1 (C) Statement -1 is true but statement -2 is false (D) Statement -1 is false but statement -2 is true

**44.** Light traveling through three transparent substances follows the path shown in the figure. Assuming that total internal reflection does take place on the bottom surface of medium 2, arrange the refractive index in the increasing order.
(A) μ₁ < μ₂ < μ₃ (B) μ₃ < μ₁ < μ₂ (C) μ₁ < μ₃ < μ₂ (D) μ₃ < μ₁ < μ₂

**45.** A point light source S is outside a cylinder on its axis near the end face (base). Determine the minimum refractive index n of the cylinder material for which none of the rays entering the base will emerge from the lateral surface.
(A) 1/√2 (B) √2 (C) 1/2 (D) 1

**46.** A ray of light is incident normally on one of the faces of a prism of apex angle 30° and refractive index √2. The angle of deviation of the ray is:
(A) 0° (B) 12.5° (C) 15° (D) 22.5°

**47.** One of the refracting surfaces of prism of angle 30° is silvered. A ray of light incident at an angle of 60° retraces its path. The refractive index of the material of prism is:
(A) √2 (B) √3 (C) 3/2 (D) 2

**48.** Two parallel light rays pass through an isosceles prism of refractive index √(√3/√2) as shown in the figure. The angle between the two emergent rays is:
(A) 45° (B) 30° (C) 15° (D) 60°

**49.** Angle of minimum deviation is equal to the angle of prism A of an equilateral glass prism. The angle of incidence at which minimum deviation will be obtained is:
(A) 60° (B) 30° (C) 45° (D) sin⁻¹(2/3)

**50.** A ray of light passes through an equilateral prism such that the angle of incidence and the angle of emergence are both equal to 3/4 th of the angle of prism. The angle of minimum deviation is:
(A) 15° (B) 30° (C) 45° (D) 60°

**51.** Refractive index of the material of a prism μ = √2 and the angle of the prism is 60°. The angle of incidence for minimum deviation is:
(A) 30° (B) 45° (C) 60° (D) 90°

**52.** If the angle of minimum deviation is 60° for an equilateral prism, then the refractive index of the material of the prism is:
(A) 1.41 (B) 1.5 (C) 1.6 (D) 1.73

**53.** The refractive index of material of a prism of angles 45°, 45°, and 90° is 1.5. The path of the ray of light incident normally on the hypotenuse side is shown in:
(A) [Diagram A] (B) [Diagram B] (C) [Diagram C] (D) [Diagram D]

**54.** A ray of light is incident normally on one face of an equilateral prism of refractive index 1.5. The angle of deviation is:
(A) 30° (B) 12.5° (C) 60° (D) 120°

**55.** Light is incident normally on face AB of a prism as shown in figure. A liquid of refractive index μ is placed on face AC of the prism. The prism is made of glass of refractive index 3/2. The limits of μ for which total internal reflection takes place on face AC is:
(A) μ > √3/2 (B) μ < 3√3/2 (C) μ > √3 (D) μ < √3/2

**56.** A triangular prism of glass is inside water. A ray, incident normally, on one of the faces, is totally reflected from face BC. Then the minimum refractive index of glass is:
(A) √3/2 (B) 5/3 (C) 2√2/5 (D) 4√2/3

**57.** A prism placed in air made up of flint glass is such that any incident ray on one surface does not emerge from the second surface. Critical angle for flint glass is 36° in air. Then, refracting angle A may be:
(A) 37° (B) 54° (C) 71° (D) 73°

**58.** A flint glass prism and crown glass prism are to be combined in such a way that the deviation of the mean ray is zero. The refractive index of flint and crown glasses for the mean ray are 1.6 and 1.9 respectively. If the refracting angle of the flint prism is 6°, what would be the refracting angle of crown prism?
(A) 2° (B) 8° (C) 4° (D) 6°

**59.** The following data are given for a crown glass prism: Refractive index for violet light nᵥ = 1.521. Refractive index for red light nᵣ = 1.510. Refractive index for yellow light nᵧ = 1.515. Then the dispersive power of a parallel glass slab made of the same material is:
(A) 0.01 (B) 0.03 (C) 0 (D) 0.02

**60.** In the case of minimum deviation for an equilateral flint glass prism, the angle of refraction is 30° as shown in figure. What should be the angle of refraction of light (for ray incident on surface AB) satisfying the condition of minimum deviation in case of an equilateral crown glass prism? [Given μflint > μcrown]
(A) > 30° (B) < 30° (C) 30° (D) information insufficient

**61.** A ray incident at a point B at an angle of incidence θ enters into a glass sphere and is reflected and refracted at the farther surface of the sphere, as shown. The angle between the reflected and refracted rays at this surface is 90°. If refractive index of material of sphere is √3, the value of θ is:
(A) π/3 (B) π/4 (C) π/6 (D) π/12

**62.** A point source of light at the surface of a sphere causes a parallel beam of light to emerge from the opposite surface of the sphere. The refractive index of the material of the sphere is:
(A) 1.5 (B) 5/3 (C) 2 (D) 2.5

**63.** A plastic hemisphere has a radius of curvature of 8 cm and an index of refraction 1.6. On the axis halfway between the plane surface and the spherical one (4 cm from each) is a small object O. The distance between the two images when viewed along the axis from the two sides of the hemisphere is approximately:
(A) 1.0 cm (B) 1.5 cm (C) 3.75 cm (D) 2.5 cm

**64.** Half the surface of transparent sphere of refractive index 2 is silvered. A narrow, parallel beam of light is incident on the unsilvered surface, symmetrically with respect to the silvered part. The light finally emerging from the sphere will be a:
(A) parallel beam (B) converging beam (C) slightly divergent beam (D) widely divergent beam

**65.** In the figure shown a point object O is placed in air. A spherical boundary separates various media of radius of curvature 1.0 m. AB is principal axis. The refractive index above AB is 1.6 and below AB is 2.0. The separation between the images formed due to refraction at spherical surface is:
(A) 12 m (B) 20 m (C) 14 m (D) 10 m

**66.** A glass hemisphere of radius R and refractive index 1.5 is silvered on its flat face as shown in the figure. A small object of height h is located at a distance 2R from surface of hemisphere. The final image will form:
(A) At a distance of R from silvered surface, on right side (B) On the object itself (C) At the hemispherical surface (D) At a distance of 2R from the silvered surface on left side

**67.** A parallel beam of light falls normally on the plane surface of a piano convex lens of refractive index 3/2. If the radius of the curved surface of the lens is 20 cm, the beam will be focused at which of the following distances from the lens?
(A) 20 cm (B) 30 cm (C) 40 cm (D) 50 cm

**68.** A thin equiconvex lens of refractive index 3/2 and radius of curvature 30 m is put in water (refractive index 4/3). Its focal length is:
(A) 0.15 m (B) 0.30 m (C) 0.45 m (D) 1.20 m

**69.** A convex lens is dipped in a liquid having refractive index equal to refractive index of the lens. Then its focal length will:
(A) Become infinite (B) Become small but non-zero (C) Remain unchanged (D) Become zero

**70.** A thin lens of refractive index 1.5 has a focal length of 15 cm in air. When the lens is placed in a medium of refractive index 4/3, its focal length will become:
(A) 30 cm (B) 45 cm (C) 60 cm (D) 75 cm

**71.** Distance of an object from the first focus of an equi-convex lens is 10 cm and the distance of its real image from second focus is 40 cm. The focal length of the lens is:
(A) 25 cm (B) 10 cm (C) 20 cm (D) 40 cm

**72.** The magnification of an object placed in front of a convex lens of focal length 20 cm is +2. To obtain a magnification of -2, the object will has to be moved at distance equal to:
(A) 10 cm (B) 20 cm (C) 30 cm (D) 40 cm

**73.** A point object is placed at a distance of 25 cm from a convex lens of focal length 20 cm. If a glass slab of thickness t and refractive index 1.5 is inserted between the lens and the object, the image is formed at infinity. The thickness t is:
(A) 10 cm (B) 5 cm (C) 20 cm (D) 15 cm

**74.** A thin linear object of size 1 mm is kept along the principal axis of a convex lens of focal length 10 cm. The object is at 15 cm from the lens. The length of the image is (in mm):
(A) 1 (B) 4 (C) 2 (D) 8

**75.** Statement-1: The focal length of a thin converging lens, made of glass, for violet light is fᵥ, while that for red light is fᵣ. These satisfy the relation fᵥ < fᵣ. Statement-2: The refractive index of the material of the lens (glass) satisfies μᵥ > μᵣ; and 1/f = (μ - 1)[1/R₁ - 1/R₂] applies to the lens.
(A) Statement -1 is True, Statement -2 is True, Statement -2 is a correct explanation for Statement -1. (B) Statement -1 is True, Statement -2 is True; Statement -2 is NOT a correct explanation for Statement -1. (C) Statement -1 is True, Statement -2 is False. (D) Statement -1 is False, Statement -2 is True.

**76.** Parallel beam of light is incident on the system of two convex lenses of focal length f₁ = 20cm and f₂ = 10cm. What should be the distance between the two lenses so that rays after refraction from both the lenses emerge as a parallel beam?
(A) 60 cm (B) 30 cm (C) 90 cm (D) 40 cm

**77.** A plano convex glass lens (μg = 3/2) of radius of curvature R = 10 cm is placed at a distance 'b' from a concave lens of focal length 20 cm. What should be the distance 'a' of a point object O from the plano convex lens so that the distance of final image from concave lens is independent of 'b'?
(A) 40 cm (B) 60 cm (C) 30 cm (D) 20 cm

**78.** A point object O is placed at distance of 20 cm from a convex lens of focal length 10 cm as shown in figure. At what distance x from the lens should a concave mirror of focal length 20 cm, be placed so that final image coincides with the object.
(A) 10 cm (B) 40 cm (C) 20 cm (D) Final image can never coincide with the object in the given conditions

**79.** A diverging lens of focal length 10 cm is placed 10 cm in front of a plane mirror as shown in the figure. Light from a very far away source falls on the lens. The final image is at a distance:
(A) 20 cm behind the mirror (B) 7.5 cm in front of the mirror (C) 7.2 cm behind the mirror (D) 2.5 cm in front of the mirror

**80.** Figure shows a thin converging lens for which the focal length is 5.00 cm. The lens is in front of a concave spherical mirror of radius R = 30 cm. If the lens and mirror are 20.0 cm apart and an object is placed 15 cm to the left of the lens, determine the approximate distance of the image from lens.
(A) 5.3 cm (B) 4.6 cm (C) 6.1 cm (D) 12.7 cm

**81.** A convex lens is made of two different materials having radius of curvature of surface A and surface B as 25 cm and 24 cm respectively. The effective focal length of lens is:
(A) 75/4 cm (B) 75 cm (C) 50 cm (D) 30 cm

**82.** A plano convex lens fits exactly into a plano concave lens. Their plane surfaces are parallel to each other. If the lenses are made of different materials of refractive indices μ₁ and μ₂ and R is the radius of curvature of the curved surface of the lenses, then focal length of the combination is:
(A) -R/(μ₁ - μ₂) (B) 2R/(μ₂ - μ₁) (C) R/(2(μ₁ - μ₂)) (D) R/(2 - (μ₁ - μ₂))

**83.** Two identical glass (μ = 3/2) equi-convex lenses of focal length f are kept in contact. The space between the two lenses is filled with water (μ₀ = 4/3). The focal length of the combination is:
(A) f (B) f/2 (C) 4f/3 (D) 3f/4

**84.** An equi-convex lens of glass (μg = 1.5) of focal length 10 cm is silvered on one side. It will behave like a:
(A) concave mirror of focal length 10 cm (B) convex mirror of focal length 5.0 cm (C) concave mirror of focal length 2.5 cm (D) convex mirror of focal length 20 cm

**85.** Four identical thin lenses are kept one beside the other on the same optical axis as shown in the figure. The right surface of rightmost lens is silvered. Focal length of each lens is 20 cm and radius of silvered surface is 20 cm. The focal length of the combined system is:
(A) 2 cm (B) -2 cm (C) 5 cm (D) -5 cm

**86.** A plano-convex lens of refractive index 1.5 and radius of curvature 30 cm is silvered at the curved surface. Now this lens has been used to form the image of an object. At what distance from this lens an object be placed in order to have a real image of the size of the object?
(A) 20 cm (B) 30 cm (C) 60 cm (D) 80 cm

**87.** The given lens is broken into four parts and rearranged as shown. If the initial focal length is f then after rearrangement the equivalent focal length is:
(A) f (B) f/2 (C) f/4 (D) 4f

**88.** A converging lens of focal length 20 cm and diameter 5 cm is cut along the line AB. The part of the lens shown shaded in the diagram is now used to form an image of a point P placed 30 cm away from it on the line XY, which is perpendicular to the plane of the lens. The image of P will be formed:
(A) 0.5 cm above XY (B) 1 cm below XY (C) on XY (D) 1.5 cm below XY

**89.** Convex lens of focal length f is split into two half from its principal axis. The separation between two lens is 20 cm and the separation between nearest lens and object is 30 cm as shown in the figure. If image by nearest lens is formed at infinity, the image of the object formed by second lens from its optical centre is:
(A) 75 cm (B) 20 cm (C) 120 cm (D) Infinity

**90.** A mirror of focal 15 cm is cut into two equal halves and the two halves are shifted perpendicular to principal axis as shown in figure. If the object is placed at a distance of 10 cm as shown in figure, then the separation between images formed by two halves of mirror is:
(A) 3 mm (B) 4 mm (C) 5 mm (D) 6 mm

**91.** A point source of light is placed at the bottom of a swimming pool of depth 2√5 m. When viewed from air, the radius of the bright spot of light that appears on the surface of water is ______m. (μwater = √7/4)
(A) 2 m (B) 3 m (C) 4 m (D) 1 m

**92.** A small object is initially placed on the principle axis of a concave mirror at the mid-point between its focus and centre of curvature. A real image is formed. Now, if the object is moved 10 cm towards the focus, the image doubles in size while remaining real. The focal length of the mirror is ______cm.
(A) 10 (B) 15 (C) 20 (D) 25

**93.** A point source of light is placed in front of the curved surface of a glass slab kept in air as shown. The radius of curvature of the curved surface is 80 cm. The distance between the actual position and the apparent position of the source when viewed from a point in air to the right of the flat surface is ______cm. (μglass = 3/2)
(A) 10 (B) 20 (C) 30 (D) 40

**94.** Two equi-convex lenses of identical dimensions but different refractive index μ₁ = 3/2 and μ₂ = 5/6 are kept in contact. The focal length of this system is 72 cm. Then, if the system is immersed in water of refractive index 4/3, its focal length becomes ______cm.
(A) 360 (B) 180 (C) 120 (D) 90

**95.** A small object of relative density 2/3 detaches from the bottom of a swimming pool of depth 3 m and starts rising vertically. After 1 second, the depth of the object below the surface of water, as observed by a person standing beside the pool, is ______cm. (g = 10 m/s², μwater = 4/3)
(A) 150 (B) 200 (C) 250 (D) 300

**96.** A ray of light is incident normally on the face AB of an isosceles prism ABC with AB = AC and ∠A = 30°, placed in air. After entering the prism, the ray strikes the face AC directly. The minimum refractive index of the prism so that they suffers total internal reflection at the face AC is ________.
(A) √2 (B) √3 (C) 1.5 (D) 2

**97.** A parallel glass slab of refractive index √3 and thickness 4√3 cm is placed in the path of a ray of light travelling in air, such that the ray is incident on a face of the slab at an angle of incidence 60°. The lateral distance between this ray and the emergent ray is ______cm.
(A) 6 (B) 8 (C) 10 (D) 12

---

### RAY OPTICS: LEVEL 2

[Continuing with Level 2 questions from the workbook and JEE Main Archive...]

---

### JEE MAIN ARCHIVE

**[2002] 1.** A light bulb is placed between two plane mirrors inclined at an angle of 60°. The numbers of images formed are:
(A) 6 (B) 2 (C) 5 (D) 4

**[2003] 2.** To get three images of a single object, one should have two plane mirrors at an angle of:
(A) 60° (B) 90° (C) 120° (D) 30°

**[2004] 3.** A light ray is incident perpendicular to a face of a 90° prism and is totally internally reflected at the glass - air interface. If the angle of reflection is 45°, what can be concluded about the refractive index n?
(A) n < 1/√2 (B) n < √2 (C) n > 1/√2 (D) n > √2

**[2004] 4.** A plano-convex lens of refractive index 1.5 and radius of curvature 30 cm is silvered at the curved surface. Now this lens is used to form the image of an object. At what distance from this lens, an object to place in order to have a real image of the size of the object?
(A) 20 cm (B) 30 cm (C) 60 cm (D) 80 cm

**[2005] 5.** A thin glass (refractive index 1.5) lens has optical power of -5 D in air. Its optical power in a liquid medium of refractive index 1.6 is:
(A) 1 D (B) -25 D (C) 25 D (D) None of these

**[2005] 6.** A fish looking up through the water sees the outside world contained in a circular horizon. If the refractive index of water is 4/3 and the fish is 12 cm below the surface, the radius of this circle (in cm) is:
(A) 4√5 (B) 36√5 (C) 36√7 (D) 36/√7

**[2006] 7.** The refractive index of glass is 1.520 for red light and 1.525 for blue light. Let D₁ and D₂ be the angle of minimum deviation for red and blue lights, respectively, in a prism of glass. Then:
(A) D₁ can be less than or greater than D₂ depending upon the angle of prism (B) D₁ > D₂ (C) D₁ = D₂ (D) D₁ < D₂

**[2007] 8.** Two lenses of powers -15 D and + 5 D are in contact with each other. The focal length of the combination is:
(A) -10 cm (B) +20 cm (C) 5 cm (D) -20 cm

**[2008] 9.** A student measures the focal length of a convex lens by putting an object pin at a distance 'u' from the lens and measuring the distance 'v' of the image of the pin. The graph between 'u' and 'v' plotted by the student should look like:
(A) [Linear increasing] (B) [Curved decreasing] (C) [Curved increasing then decreasing] (D) [Linear decreasing]

**[2009] 10.** A transparent solid cylindrical rod has a refractive index of 2/√3. It is surrounded by air. A light ray is incident at the midpoint of one end of the rod as shown in the figure. The incident angle for which the light ray grazes along the wall of the rod is:
(A) sin⁻¹(1/2) (B) sin⁻¹(√3/2) (C) sin⁻¹(2/√3) (D) sin⁻¹(1/√3)

**[2011] 11.** A car is fitted with a convex side - view mirror of focal length 20 cm. A second car 2.8 m behind the first car is overtaking the first car at a relative speed of 15 m/s. The speed of the image of the second car as seen in the mirror of the first one is:
(A) 1/10 m/s (B) 1/15 m/s (C) 10 m/s (D) 15 m/s

**[2011] 12.** Let the x-y plane be the boundary between two transparent media. Medium 1 in z ≥ 0 has a refractive index of √2 and medium 2 with z < 0 has a refractive index of √3. A ray of light in medium 1 given by the vector 8(√3i + √3j - 10k) is incident on the plane of separation. The angle of refraction in medium 2 is:
(A) 30° (B) 45° (C) 60° (D) 75°

**[2011] 13.** A beaker contains water up to a height h₁ and kerosene of height h₂ above water so that the total height of (water + kerosene) is (h₁ + h₂). Refractive index of water is μ₁ and that of kerosene is μ₂. The apparent shift in the position of the bottom of the beaker when viewed from above is:
(A) (1 - 1/μ₁)h₂ + (1 - 1/μ₂)h₁ (B) (1 - 1/μ₁)h₂ - (1 - 1/μ₂)h₁ (C) (1 - 1/μ₁)h₁ + (1 - 1/μ₂)h₂ (D) (1 - 1/μ₁)h₁ - (1 - 1/μ₂)h₂

**[2012] 14.** An object 2.4 m in front of a lens forms a sharp image on a film 12 cm behind the lens. A glass plate 1 cm thick. of refractive index 1.50, is interposed between lens and film with its plane faces parallel to film. At what distance (from lens) should object be shifted to be in sharp focus on film?
(A) 7.2 m (B) 2.4 m (C) 3.2 m (D) 5.6 m

**[2013] 15.** The graph between angle of deviation (δ) and angle of incidence (i) for a triangular prism is represented by:
(A) [Parabolic curve] (B) [U-shaped curve] (C) [V-shaped curve] (D) [Linear]

**[2013] 16.** Diameter of plano-convex lens is 6 cm and thickness at the centre is 3 mm. If speed of light in material of lens is 2 × 10⁸ m/s, the focal length of the lens is:
(A) 20 cm (B) 30 cm (C) 10 cm (D) 15 cm

**[2013] 17.** A light ray falls on a square glass slab as shown in the diagram. The index of refraction of the glass, if total internal reflection is to occur on the vertical face, is equal to:
(A) (√2 + 1)/2 (B) √2/2 (C) 3/2 (D) √3/√2

**[2013] 18.** The image of an illuminated square is obtained on a screen with the help of a converging lens. The distance of the square from the lens is 40 cm. The area of the image is 9 times that of the square. The focal length of the lens is:
(A) 36 (B) 27 (C) 60 (D) 30

**[2013] 19.** Light is incident from a medium into air at two possible angles of incidence (1) 20° and (2) 40°. In the medium light travels 3.0 cm in 0.2 ns. The ray will:
(A) Suffer total internal reflection in both cases (1) and (2) (B) Suffer total internal reflection in case (2) only (C) Have part reflection and part transmission in case (2) (D) Have 100% transmission in case (1)

**[2013] 20.** A printed page is pressed by a glass of water. The refractive index of the glass and water is 1.5 and 1.33, respectively. If the thickness of the bottom of glass is 1 cm and depth of water is 5 cm, how much the page will appear to be shifted if viewed from the top?
(A) 1.03 cm (B) 3.58 cm (C) 1.57 cm (D) 1.90 cm

**[2014] 21.** The refractive index of the material of a concave lens is μ. It is a medium of refractive index μ₁. A parallel beam of light is incident on the lens. The path of the emergent rays when μ₁ >μ is:
(A) [Converging] (B) [Diverging] (C) [Parallel] (D) [Complex path]

**[2014] 22.** A green light is incident from the water interface at the critical angle (θ). Select the correct statement.
(A) The spectrum of visible light whose frequency is more than that of green light will come out to the air medium (B) The entire spectrum of visible light will come out of the water at various angle to the normal (C) The entire spectrum of visible light will come out of the water at an angle of 90° to the normal (D) The spectrum of visible light whose frequency is less than that of green light will come out to the air medium

**[2014] 23.** A thin convex lens made from crown glass (μ = 3/2) has focal length f. When it is measured in two different liquids having refractive indices 4/3 and 5/3, it has the focal length f₁ and f₂ respectively. The correct relation between the focal lengths is:
(A) f₂ > f and f₁ becomes negative (B) f₁ and f₂ both become negative (C) f₁ = f₂ < f (D) f₁ > f and f₂ becomes negative

**[2014] 24.** A diver looking up through the water sees the outside world contained in a circular horizontal. The refractive index of water is 4/3, and the diver's eyes are 15 cm below the surface of the water. Then the radius of the circle is:
(A) 15 × 3 × √3 cm (B) 15 × 3√7 cm (C) 15 × √7/3 cm (D) 15 × 3/√7 cm

**[2015] 25.** Monochromatic light is incident on a glass prism of angle A. If the refractive index of the material of the prism is μ, a ray, incident at an angle θ, on the face AB would get transmitted through the face AC of the prism provided:
(A) θ > sin⁻¹[μ sin(A - sin⁻¹(1/μ))] (B) θ < sin⁻¹[μ sin(A - sin⁻¹(1/μ))] (C) θ > cos⁻¹[μ sin(A + sin⁻¹(1/μ))] (D) θ > cos⁻¹[μ sin(A + sin⁻¹(1/μ))]

**[2015] 26.** You are asked to design a shaving mirror assuming that a person keeps it 10 cm from his face and views the magnified image of the face at the closest comfortable distance of 25 cm, the radius of curvature of the mirror would then be:
(A) -24 cm (B) 60cm (C) -24 cm (D) 30cm

---

### JEE ADVANCED ARCHIVE

**[1981] 1.** A glass prism of refractive index 1.5 is immersed in water (refractive index 4/3). A light beam normally on the face AB is totally reflected to reach on the face BC if:
(A) sin θ ≤ 8/9 (B) 2/3 ≤ θ ≤ 8/9 (C) sin θ ≤ 2/3 (D) sin θ ≤ 8/9

**[1982] 2.** A convex lens of focal length 40 cm is in contact with a concave lens of focal length 25 cm. The power of the combination is:
(A) -1.5 dioptre (B) -6.5 dioptre (C) +6.5 dioptre (D) +6.67 dioptre

**[1983] 3.** A ray of light from a denser medium strikes a rare medium at an angle of incidence (isee figure). The reflected and refracted rays make an angle of 90° with each other. The angles of reflection and refraction are r and r'. The critical angle is:
(A) sin⁻¹(tan r) (B) sin⁻¹(tan i) (C) sin⁻¹(tan r') (D) tan⁻¹(sin i)

**[1988] 4.** A short linear object of length L lies along the axis of a concave mirror of focal length f at a distance u from the pole of the mirror. The size of the image is approximately equal to:
(A) b((u - f)/f)^(1/2) (B) b((u/(u - f))^(1/2) (C) b((u - f)/f)² (D) b((f/(u - f))²

**[1989] 5.** A beam of light consisting of red, green, and blue colour is incident on a right-angled prism. The refractive indicates of the material of the prism for the above red, green, and blue wavelengths are 1.39, 1.44, and 1.47, respectively. The prism will:
(A) separate part of the red colour from the green and blue colours (B) separate part of the blue colour from the red and green colours (C) separate all the three colour from one another (D) not separate even partially any colour from the other two colours

**[1990] 6.** A thin prism P₁ with angle 4° and made from glass of refractive index 1.54 is combined with another thin prism P₂ made from glass of refractive index 1.72 to produce dispersion without deviation. The angle of the prism P₂ is:
(A) 5.33° (B) 4° (C) 3° (D) 2.6°

**[1993] 7.** Two thin convex lenses of focal length f₁ and f₂ are separated by a horizontal distance d (where d < f₁, d < f₂) and their centres are displaced by a vertical separation Δ as shown in figure. Taking the origin of coordinates O at the centre of the first lens, the x and y coordinates of the focal point of this lens system, for a parallel beam of rays coming from the left, are given by:
(A) x = f₁f₂/(f₁ + f₂), y = Δ (B) x = f₁(f₂ + d)/(f₁ + f₂ - d), y = Δ/(f₁ + f₂) (C) x = f₁f₂ + d(f₁ - d)/(f₁ + f₂ - d), y = Δ(f₁ - d)/(f₁ + f₂ - d) (D) x = f₁f₂ + d(f₁ - d)/(f₁ + f₂ - d), y = Δ(f₁ - d)/(f₁ + f₂ - d)

**[1994] 8.** Spherical aberration in a thin lens can be reduced by:
(A) using a monochromatic light (B) using a doublet combination (C) using a circular annular mask over the lens (D) increasing the size of the lens

**[1995] 9.** An isosceles prism of angle 120° has a refractive index 1.44. Two parallel monochromatic rays enter the prism parallel to each other in air as shown in figure. The rays emerging from the opposite faces:
(A) Are parallel to each other (B) Are diverging (C) Make an angle of 2sin⁻¹(0.72) - 30° with each other (D) Make an angle of 2 sin⁻¹(0.72) with each other

**[1995] 10.** A diminished image of an object is to be obtained on a screen 1.0m from it. This can be achieved by appropriately placing:
(A) A concave mirror of suitable focal length (B) A convex mirror of suitable focal length (C) A convex lens of focal length less than 0.25 m (D) A concave lens of suitable focal length

**[1997] 11.** An eye specialist prescribes spectacles having combination of convex lens of focal length 40 cm in contact with a concave lens of focal length 25 cm. The power of this lens combination in diopters is:
(A) +1.5 (B) -1.5 (C) 6.67 (D) -6.67

**[1998] 12.** A concave mirror is placed on a horizontal table, with its axis directed vertically upward. Let O be the pole of the mirror and C its centre of curvature. A point object is placed at C. It has a real image, also located at C. If the mirror is now filled with water, the image will be:
(A) Real and located at C (B) Real, and located at a point between C and ∞ (C) Virtual, and located at a point between C and O (D) Real, and located at a point between C and O

**[1998] 13.** A spherical surface of radius of curvature R separates air (refractive index 1.0) from glass (refractive index 1.5). The line PQ cuts the surface at a point O. PQ cuts the surface at a point O. The distance PO is equal to:
(A) 5R (B) 3R (C) 2R (D) 1.5R

**[1998] 14.** A real image of a distant object is formed by a plano-convex lens on its principal axis. Spherical aberration:
(A) is absent (B) is smaller if the curved surface of the lens faces the object (C) is smaller if the plane surface of the lens faces the object (D) is the same whichever side of the lens faces the object

**[1999] 15.** A concave lens of glass, refractive index 1.5, has both surfaces of same radius of curvature R. On immersion in a medium of refractive index 1.75, it will behave as a:
(A) Convergent lens of focal length 3.5 R (B) Convergent lens of focal length 3.0 R (C) Divergent lens of focal length 3.5 R (D) Divergent lens of focal length 3.0 R

**[2000] 16.** A point source of light B is placed at a distance L in front of the centre of a mirror of width'd' hung vertically on a wall. A man walks in front of the mirror along a line parallel to the mirror at a distance 2L from it as shown in the figure. The greatest distance over which he can see the image of the light source in the mirror is:
(A) d/2 (B) d (C) 2d (D) 3d

**[2000] 17.** A diverging beam of light from a point source S having divergence angle α, falls symmetrically on a glass slab as shown. The angles of incidence of the two extreme rays are equal. If the thickness of the glass slab is t and the refractive index is n, then the divergence angle of the emergent beam is:
(A) Zero (B) α (C) sin⁻¹(1/n) (D) 2 sin⁻¹(1/n)

**[2000] 18.** A rectangular glass slab ABCD of refractive index n, is immersed in water of refractive index n₂(n₁ < n₂). A ray of light is incident at the surface AB of the slab as shown. The maximum value of the angle of incidence αmax such that the ray comes out from the other surface CD is given by:
(A) sin⁻¹[n₂/n₁ cos(sin⁻¹(n₂/n₁))] (B) sin⁻¹[n₁ cos(sin⁻¹(n₁/n₂))] (C) sin⁻¹[n₁/n₂] (D) sin⁻¹[n₂/n₁]

[Continuing with remaining JEE Advanced questions...]
