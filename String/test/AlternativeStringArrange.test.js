import { AlternativeStringArrange } from '../AlternativeStringArrange'

test('AlternativeStringArrange(Agrtm, loih) -> Algorithm', () => {
  const str1 = 'Agrtm'
  const str2 = 'loih'
  const res = AlternativeStringArrange(str1, str2)
  expect(res).toEqual('Algorithm')
})

test('AlternativeStringArrange(JvSrp, aacit) -> JavaScript', () => {
  const str1 = 'JvSrp'
  const str2 = 'aacit'
  const res = AlternativeStringArrange(str1, str2)
  expect(res).toEqual('JavaScript')
})

test('AlternativeStringArrange(abc, def) -> adbecf', () => {
  const str1 = 'abc'
  const str2 = 'def'
  const res = AlternativeStringArrange(str1, str2)
  expect(res).toEqual('adbecf')
})
