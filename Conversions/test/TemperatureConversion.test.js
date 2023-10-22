import * as tc from '../TemperatureConversion.js'

describe('Testing Conversion of Celsius to fahrenheit', () => {
  it('with celsius value', () => {
    const test1 = tc.celsiusToFahrenheit(10)
    expect(test1).toBe(50)
  })
})

describe('Testing Conversion of Celsius to kelvin', () => {
  it('with celsius value', () => {
    const test1 = tc.celsiusToKelvin(15)
    expect(test1).toBe(288)
  })
})

describe('Testing Conversion of Celsius to Rankine', () => {
  it('with celsius value', () => {
    const test1 = tc.celsiusToRankine(28)
    expect(test1).toBe(542)
  })
})

describe('Testing Conversion of Fahrenheit to Celsius', () => {
  it('with Fahrenheit value', () => {
    const test1 = tc.fahrenheitToCelsius(134)
    expect(test1).toBe(57)
  })
})

describe('Testing Conversion of Fahrenheit to Kelvin', () => {
  it('with Fahrenheit value', () => {
    const test1 = tc.fahrenheitToKelvin(125)
    expect(test1).toBe(325)
  })
})

describe('Testing Conversion of Fahrenheit to Rankine', () => {
  it('with Fahrenheit value', () => {
    const test1 = tc.fahrenheitToRankine(10)
    expect(test1).toBe(470)
  })
})

describe('Testing Conversion of Kelvin to Celsius', () => {
  it('with Kelvin value', () => {
    const test1 = tc.kelvinToCelsius(100)
    expect(test1).toBe(-173)
  })
})

describe('Testing Conversion of Kelvin to Fahrenheit', () => {
  it('with Kelvin value', () => {
    const test1 = tc.kelvinToFahrenheit(20)
    expect(test1).toBe(-424)
  })
})

describe('Testing Conversion of Kelvin to Rankine', () => {
  it('with kelvin value', () => {
    const test1 = tc.kelvinToRankine(69)
    expect(test1).toBe(124)
  })
})
describe('Testing Conversion of Rankine to Celsius', () => {
  it('with Rankine value', () => {
    const test1 = tc.rankineToCelsius(234)
    expect(test1).toBe(-143)
  })
})
describe('Testing Conversion of Rankine to Fahrenheit', () => {
  it('with Rankine value', () => {
    const test1 = tc.rankineToFahrenheit(98)
    expect(test1).toBe(-362)
  })
})
describe('Testing Conversion of Rankine to Kelvin', () => {
  it('with Rankine value', () => {
    const test1 = tc.rankineToKelvin(10)
    expect(test1).toBe(6)
  })
})
describe('Testing Conversion of Reaumur to Celsius', () => {
  it('with Reaumur value', () => {
    const test1 = tc.reaumurToCelsius(100)
    expect(test1).toBe(125)
  })
})
describe('Testing Conversion of Reaumur to Fahrenheit', () => {
  it('with Reaumur value', () => {
    const test1 = tc.reaumurToFahrenheit(100)
    expect(test1).toBe(257)
  })
})
describe('Testing Conversion of Reaumur to Kelvin', () => {
  it('with Reamur value', () => {
    const test1 = tc.reaumurToKelvin(100)
    expect(test1).toBe(398)
  })
})
describe('Testing Conversion of Reamur to Rankine', () => {
  it('with Reamur value', () => {
    const test1 = tc.reaumurToRankine(100)
    expect(test1).toBe(717)
  })
})
