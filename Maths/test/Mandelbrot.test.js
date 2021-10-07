import { getRGBData } from '../Mandelbrot'

describe('Mandelbrot', () => {
  it('should produce black pixels inside the set', () => {
    const blackAndWhite = getRGBData(800, 600, -0.6, 0, 3.2, 50, false)
    expect(blackAndWhite[400][300]).toEqual([0, 0, 0]) // black

    const colorCoded = getRGBData(800, 600, -0.6, 0, 3.2, 50, true)
    expect(colorCoded[400][300]).toEqual([0, 0, 0]) // black
  })

  it('should produce white pixels outside of the set', () => {
    const blackAndWhite = getRGBData(800, 600, -0.6, 0, 3.2, 50, false)
    expect(blackAndWhite[0][0]).toEqual([255, 255, 255]) // black
  })

  it('should produce colored pixels distant to the set', () => {
    const colorCoded = getRGBData(800, 600, -0.6, 0, 3.2, 50, true)
    expect(colorCoded[0][0]).toEqual([255, 0, 0]) // red
  })
})
