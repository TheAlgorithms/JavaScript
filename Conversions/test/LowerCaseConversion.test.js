import { LowerCaseConversion } from '../LowerCaseConversion'

test('The LowerCaseConversion of ApoLO is apolo', () => {
  const res = LowerCaseConversion('ApoLO')
  expect(res).toBe('apolo')
})

test('The LowerCaseConversion of WEB is web', () => {
  const res = LowerCaseConversion('WEB')
  expect(res).toBe('web')
})

test('The LowerCaseConversion of EaRTh is earth', () => {
  const res = LowerCaseConversion('EaRTh')
  expect(res).toBe('earth')
})

test('The LowerCaseConversion of TiGER is tiger', () => {
  const res = LowerCaseConversion('TiGER')
  expect(res).toBe('tiger')
})

test('The LowerCaseConversion of Cricket is cricket', () => {
  const res = LowerCaseConversion('Cricket')
  expect(res).toBe('cricket')
})
