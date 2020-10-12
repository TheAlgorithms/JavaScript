import { checkAnagram } from '../CheckAnagram'

describe('checkAnagram', () => {
  it.each`
    inputOne              | inputTwo
    ${123456}             | ${'abcd'}
    ${[1, 2, 3, 4, 5, 6]} | ${'abcd'}
    ${{ test: 'test' }}   | ${'abcd'}
    ${'abcd'}             | ${123456}
    ${'abcd'}             | ${[1, 2, 3, 4, 5, 6]}
    ${'abcd'}             | ${{ test: 'test' }}
  `(
    'expects to return "Not string(s)" given values $inputOne and $inputTwo',
    ({ inputOne, inputTwo }) => {
      const SUT = checkAnagram(inputOne, inputTwo)
      expect(SUT).toBe('Not string(s)')
    }
  )
  it('expects to return "Not anagram" if the arguments have different lengths', () => {
    const SUT = checkAnagram('abs', 'abds')
    expect(SUT).toBe('Not anagrams')
  })
  it('expects to return "Not anagram" if the arguments are not anagrams', () => {
    const SUT = checkAnagram('abcs', 'abds')
    expect(SUT).toBe('Not anagrams')
  })
  it('expects to return "Anagram" if the arguments are anagram', () => {
    const SUT = checkAnagram('abcd', 'bcad')
    expect(SUT).toBe('Anagrams')
  })
})
