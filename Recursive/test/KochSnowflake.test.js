import { iterate, Vector2 } from '../KochSnowflake'

describe('KochSnowflake', () => {
  it('should produce the correctly-transformed vectors', () => {
    expect(iterate([new Vector2(0, 0), new Vector2(1, 0)], 1)[0])
      .toEqual({ x: 0, y: 0 })

    expect(iterate([new Vector2(0, 0), new Vector2(1, 0)], 1)[1])
      .toEqual({ x: 1 / 3, y: 0 })

    expect(iterate([new Vector2(0, 0), new Vector2(1, 0)], 1)[2])
      .toEqual({ x: 1 / 2, y: Math.sin(Math.PI / 3) / 3 })

    expect(iterate([new Vector2(0, 0), new Vector2(1, 0)], 1)[3])
      .toEqual({ x: 2 / 3, y: 0 })

    expect(iterate([new Vector2(0, 0), new Vector2(1, 0)], 1)[4])
      .toEqual({ x: 1, y: 0 })
  })
})
