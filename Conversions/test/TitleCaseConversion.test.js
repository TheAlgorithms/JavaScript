import { titleCaseConversion } from '../TitleCaseConversion'

describe('Tests for the titleCaseConversion function', () => {
  it('should return an empty string when the input is an empty string', () => {
    expect(titleCaseConversion('')).toEqual('')
  })

  it('should return the input string when the input string is a title case string', () => {
    expect(titleCaseConversion('A Proper Title Case String')).toEqual(
      'A Proper Title Case String'
    )
  })

  it('should return a title case string when input is an all-uppercase string', () => {
    expect(titleCaseConversion('ALL UPPER CASE')).toEqual('All Upper Case')
  })

  it('should return a title case string when input is a title case string of with spaces', () => {
    expect(titleCaseConversion('ALL UPPERCASE')).toEqual('All Uppercase')
  })

  it('should return a title case string when input is a title case string of with no spaces', () => {
    expect(titleCaseConversion('ALLUPPERCASE')).toEqual('Alluppercase')
  })

  it('should return a title case string when input is a title case string with punctuation', () => {
    expect(titleCaseConversion('All Title Case!')).toEqual('All Title Case!')
  })

  it('should return a title case string when input is an all-lowercase string with no spaces', () => {
    expect(titleCaseConversion('lowercaseinput')).toEqual('Lowercaseinput')
  })

  it('should return a title case string when input is an all-lowercase string with spaces', () => {
    expect(titleCaseConversion('lowercase input')).toEqual('Lowercase Input')
  })

  it('should return a title case string when input is an all-lowercase string with punctuation', () => {
    expect(titleCaseConversion('lower, case, input.')).toEqual(
      'Lower, Case, Input.'
    )
  })

  it('should return a title case string when input is an mixed-case string', () => {
    expect(titleCaseConversion('mixeD CaSe INPuT')).toEqual('Mixed Case Input')
  })

  it('should return a title case string when input is an mixed-case string with no spaces', () => {
    expect(titleCaseConversion('mixeDCaSeINPuT')).toEqual('Mixedcaseinput')
  })

  it('should return a title case string when input is an mixed-case string with punctuation', () => {
    expect(titleCaseConversion('mixeD, CaSe, INPuT!')).toEqual(
      'Mixed, Case, Input!'
    )
  })
})
