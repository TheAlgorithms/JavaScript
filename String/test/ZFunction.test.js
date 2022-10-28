import ZFunction from '../ZFunction'

test('Test Case 1', () => {
  const text = 'aabxaayaab'
  const ZArray = ZFunction(text)
  expect(ZArray).toEqual([10, 1, 0, 0, 2, 1, 0, 3, 1, 0])
})

test('Test Case 2', () => {
  const text = 'aabxaabxcaabxaabxay'
  const ZArray = ZFunction(text)
  expect(ZArray).toEqual([
    19, 1, 0, 0, 4, 1, 0, 0, 0, 8, 1, 0, 0, 5, 1, 0, 0, 1, 0
  ])
})
