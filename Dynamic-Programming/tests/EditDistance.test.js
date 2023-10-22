import { minimumEditDistance } from '../EditDistance'

test('minimumEditDistance(kitten, sitten) => 1', () => {
  const str1 = 'kitten'
  const str2 = 'sitten'
  const res = minimumEditDistance(str1, str2)
  expect(res).toEqual(1)
})

test('minimumEditDistance(school, skull) => 4', () => {
  const str1 = 'school'
  const str2 = 'skull'
  const res = minimumEditDistance(str1, str2)
  expect(res).toEqual(4)
})

test('minimumEditDistance(Algorithm, Algorithm) => 0', () => {
  const str1 = 'Algorithm'
  const str2 = 'Algorithm'
  const res = minimumEditDistance(str1, str2)
  expect(res).toEqual(0)
})
