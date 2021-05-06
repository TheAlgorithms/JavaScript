import { permutate } from '../PermutateString'

describe('Permutate a string', () => {
  it('expects to throw an Error with an empty string', () => {
    expect(() => { permutate() }).toThrow('The arg must be a valid, non empty string')
  })
  it('expects to permute "no" into [no, on]', () => {
    expect(['no', 'on']).toEqual(permutate('no'))
  })
  it('expects to permute "yes" into [esy, eys, sey, sye, yes, yse]', () => {
    expect(['esy', 'eys', 'sey', 'sye', 'yes', 'yse']).toEqual(permutate('yes'))
  })
  it('expects to permute "good" into [dgoo dogo doog gdoo godo good odgo odog ogdo ogod oodg oogd ]', () => {
    expect(['dgoo', 'dogo', 'doog', 'gdoo', 'godo', 'good', 'odgo', 'odog', 'ogdo', 'ogod', 'oodg', 'oogd'])
      .toEqual(permutate('good'))
  })
})
