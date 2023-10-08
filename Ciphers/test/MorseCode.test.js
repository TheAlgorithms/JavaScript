import { morse } from '../MorseCode'

describe('Testing morse function', () => {
  it('should return an enciphered string with a given input string', () => {
    expect(morse('Hello World!')).toBe(
      '**** * *-** *-** ---   *-- --- *-* *-** -** -*-*--'
    )
    expect(morse('1+1=2')).toBe('*---- *-*-* *---- -***- **---')
  })

  it('should leave symbols that does not have its corresponding morse representation', () => {
    expect(morse('© 2023 GitHub, Inc.')).toBe(
      '©   **--- ----- **--- ***--   --* ** - **** **- -*** --**--   ** -* -*-* *-*-*-'
    )
  })

  it('should be able to accept custom morse code symbols', () => {
    expect(morse('Nodejs', '.', '|')).toBe('|. ||| |.. . .||| ...')
  })
})
