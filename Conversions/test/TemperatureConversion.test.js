import * as tc from '../TemperatureConversion.js'



describe('Testing Conversion of Celsius to fahrenheit', () => {
  it('with celsius value', () => {
    const test1 = tc.celsius_to_fahrenheit(10)
    expect(test1).toBe(50)
  })
}

describe('Testing Conversion of Celsius to kelvin', () => {
  it('with celsius value', () => {
    const test1 = tc.celsius_to_kelvin(15)
    expect(test1).toBe(283)
  })
}

describe('Testing Conversion of Celsius to Rankine', () => {
  it('with celsius value', () => {
    const test1 = tc.celsius_to_rankine(28)
    expect(test1).toBe(542)
  })
}


describe('Testing Conversion of Fahrenheit to Celsius', () => {
  it('with Fahrenheit value', () => {
    const test1 = tc.fahrenheit_to_celsius(134)
    expect(test1).toBe(57)
  })
}

describe('Testing Conversion of Fahrenheit to Kelvin', () => {
  it('with Fahrenheit value', () => {
    const test1 = tc.fahrenheit_to_kelvin(125)
    expect(test1).toBe(325)
  })
}

describe('Testing Conversion of Fahrenheit to Rankine', () => {
  it('with Fahrenheit value', () => {
    const test1 = tc.fahrenheit_to_rankine(10)
    expect(test1).toBe(470)
  })
}

describe('Testing Conversion of Kelvin to Celsius', () => {
  it('with Kelvin value', () => {
    const test1 = tc.kelvin_to_celsius(100)
    expect(test1).toBe(-173)
  })
}

describe('Testing Conversion of Kelvin to Fahrenheit', () => {
  it('with Kelvin value', () => {
    const test1 = tc.kelvin_to_fahrenheit(20)
    expect(test1).toBe(-424)
  })
}

describe('Testing Conversion of Kelvin to Rankine', () => {
  it('with kelvin value', () => {
    const test1 = tc.kelvin_to_rankine(69)
    expect(test1).toBe(124)
  })
}
describe('Testing Conversion of Rankine to Celsius', () => {
  it('with Rankine value', () => {
    const test1 = tc.rankine_to_celsius(234)
    expect(test1).toBe(-143)
  })
}
describe('Testing Conversion of Rankine to Fahrenheit', () => {
  it('with Rankine value', () => {
    const test1 = tc.rankine_to_fahrenheit(98)
    expect(test1).toBe(-362)
  })
}
describe('Testing Conversion of Rankine to Kelvin', () => {
  it('with Rankine value', () => {
    const test1 = tc.rankine_to_kelvin(10)
    expect(test1).toBe(6)
  })
}
describe('Testing Conversion of Reamur to Celsius', () => {
  it('with Reamur value', () => {
    const test1 = tc.reaumur_to_celsius(100)
    expect(test1).toBe(125)
  })
}
describe('Testing Conversion of Reamur to Fahrenheit', () => {
  it('with Reamur value', () => {
    const test1 = tc.reaumur_to_fahrenheit(100)
    expect(test1).toBe(257)
  })
}
describe('Testing Conversion of Reamur to Kelvin', () => {
  it('with Reamur value', () => {
    const test1 = tc.reaumur_to_kelvin(100)
    expect(test1).toBe(398)
  })
}
describe('Testing Conversion of Reamur to Rankine', () => {
  it('with Reamur value', () => {
    const test1 = tc.reaumur_to_rankine(100)
    expect(test1).toBe(717)
  })
}
