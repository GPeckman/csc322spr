### Checkpoint 1

In the flat shading mode, the polygons that the sphere is made of are clearly visible. In the smooth shading mode, the polygons are smoothed out so that the sphere looks like a smoothly curved surface.

With the subdivision modifier added, the polygons in the flat shading mode are smaller and more numerous, making the sphere seem more smooth. The smooth shading mode looks the same with the subdivision modifier.

## Checkpoint 2

When rendered with strong lighting, the pixel at (325, 193) has color value (0.00423, 0.00427, 0.00424)

With weak lighting, the pixel instead has color value (0.00106, 0.00105, 0.00104)

Multiplying the power of the light by 4 multiples the irradiance of a pixel by roughly 4 times as well.

With a strong light that is twice as close to the sphere, the same pixel has the color value (0.00839, 0.00844, 0.00839)

Thus, irradiance seems to be inversely proportional to distance. Dividing the distance by 2 multiples the irradiance by 2

After changing the light to an area light, the whole image became much brighter, even though the light source had the same amount of power as before. The sphere's shadow also appeared much smaller, probably because the light source became larger. 

## Checkpoint 4

Image 1: Principled BSDF for the sphere, Diffuse BSDF for the plane
Image 2: Glass BSDF for the sphere, Glossy BSDF for the plane
Image 3: Refraction BSDF for the sphere, Metallic BSDF for the plane