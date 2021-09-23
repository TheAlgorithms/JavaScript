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

  it('expects to return false if the arguments have different lengths', () => {
    const SUT = checkAnagram('abs', 'abds')
    expect(SUT).toBe(false)
  })

  it('expects to return false if the arguments are not anagrams', () => {
    const SUT = checkAnagram('abcs', 'abds')
    expect(SUT).toBe(false)
  })

  it('expects to return true if the arguments are anagrams', () => {
    const SUT = checkAnagram('abcd', 'bcad')
    expect(SUT).toBe(true)
  })

  it('expects to return true if the arguments of length 1 and are the same letter', () => {
    const SUT = checkAnagram('a', 'a')
    expect(SUT).toBe(true)
  })

  it('expects to return true if the arguments of are both empty strings', () => {
    const SUT = checkAnagram('', '')
    expect(SUT).toBe(true)
  })

  it('expects to return true if the arguments are anagrams with an odd length', () => {
    const SUT = checkAnagram('abcde', 'edcab')
    expect(SUT).toBe(true)
  })

  it('expects to return true if the arguments are anagrams with an even length', () => {
    const SUT = checkAnagram('abcdef', 'fedcab')
    expect(SUT).toBe(true)
  })

  it('expects to return false if either argument is an empty string while the other is not', () => {
    const SUT = checkAnagram('', 'edcab')
    expect(SUT).toBe(false)
    const SUT2 = checkAnagram('edcab', '')
    expect(SUT2).toBe(false)
  })

  it('expects to return false if the arguments contain the same letters but have unequal case', () => {
    const SUT = checkAnagram('ABDCE', 'abcde')
    expect(SUT).toBe(false)
    const SUT2 = checkAnagram('AbCdE', 'aBCdE')
    expect(SUT2).toBe(false)
  })

  it('expects to return true if the arguments are anagrams and contain number characters', () => {
    const SUT = checkAnagram('a1b2', '12ba')
    expect(SUT).toBe(true)
  })

  it('expects to return true if the arguments are anagrams and contain space characters', () => {
    const SUT = checkAnagram('a1 b2', '1 2ba')
    expect(SUT).toBe(true)
  })

  it('expects to return true if the arguments are anagrams and contain punctuation characters', () => {
    const SUT = checkAnagram('a!1b@2', '1@2ba!')
    expect(SUT).toBe(true)
  })

  it('expects to return false if the arguments contain the same letters but contain a different amount of space characters', () => {
    const SUT = checkAnagram('ea        cb', 'e cba')
    expect(SUT).toBe(false)
  })
})
