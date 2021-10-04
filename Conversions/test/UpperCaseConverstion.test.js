import { upperCaseConversion } from '../UpperCaseConversion'

describe(('Test the upperCaseConversion function'), () => {
  it('should return an empty string when the input is an empty string', () => {
    expect(upperCaseConversion('')).toEqual('')
  })

  it('should return an all-uppercase string when input is an all-uppercase string', () => {
    expect(upperCaseConversion('ALLUPPERCASE')).toEqual('ALLUPPERCASE')
  })

  it('should return an all-uppercase string when input is an all-uppercase string with spaces', () => {
    expect(upperCaseConversion('ALL UPPERCASE')).toEqual('ALL UPPERCASE')
  })

  it('should return an all-uppercase string when input is an all-uppercase string with punctuation', () => {
    expect(upperCaseConversion('ALL UPPER-CASE!')).toEqual('ALL UPPER-CASE!')
  })

  it('should return an all-uppercase string when input is an all-lowercase string', () => {
    expect(upperCaseConversion('lowercaseinput')).toEqual('LOWERCASEINPUT')
  })

  it('should return an all-uppercase string when input is an all-lowercase string with spaces', () => {
    expect(upperCaseConversion('lowercase input')).toEqual('LOWERCASE INPUT')
  })

  it('should return an all-uppercase string when input is an all-lowercase string with punctuation', () => {
    expect(upperCaseConversion('lower-case, input.')).toEqual('LOWER-CASE, INPUT.')
  })

  it('should return an all-uppercase string when input is an mixed-case string', () => {
    expect(upperCaseConversion('mixeDCaSeINPuT')).toEqual('MIXEDCASEINPUT')
  })

  it('should return an all-uppercase string when input is an mixed-case string with spaces', () => {
    expect(upperCaseConversion('mixeD CaSe INPuT')).toEqual('MIXED CASE INPUT')
  })

  it('should return an all-uppercase string when input is an mixed-case string with punctuation', () => {
    expect(upperCaseConversion('mixeD-CaSe INPuT!')).toEqual('MIXED-CASE INPUT!')
  })
})
