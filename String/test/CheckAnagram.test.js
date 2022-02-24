import { checkAnagramViaMap, checkAnagramViaRegex } from '../CheckAnagram'

describe('Testing checkAnagramViaRegex', () => {
  it.each`
    inputOne              | inputTwo
    ${123456}             | ${'abcd'}
    ${[1, 2, 3, 4, 5, 6]} | ${'abcd'}
    ${{ test: 'test' }}   | ${'abcd'}
    ${'abcd'}             | ${123456}
    ${'abcd'}             | ${[1, 2, 3, 4, 5, 6]}
    ${'abcd'}             | ${{ test: 'test' }}
  `(
    'expects to throw the type Error given values $inputOne and $inputTwo',
    ({ inputOne, inputTwo }) => {
      expect(
        () => checkAnagramViaRegex(inputOne, inputTwo)
      ).toThrowError()
    }
  )

  it('expects to return false if the arguments have different lengths', () => {
    const SUT = checkAnagramViaRegex('abs', 'abds')
    expect(SUT).toBe(false)
  })

  it('expects to return false if the arguments are not anagrams', () => {
    const SUT = checkAnagramViaRegex('abcs', 'abds')
    expect(SUT).toBe(false)
  })

  it('expects to return true if the arguments are anagrams', () => {
    const SUT = checkAnagramViaRegex('abcd', 'bcad')
    expect(SUT).toBe(true)
  })

  it('expects to return true if the arguments of length 1 and are the same letter', () => {
    const SUT = checkAnagramViaRegex('a', 'a')
    expect(SUT).toBe(true)
  })

  it('expects to return true if the arguments of are both empty strings', () => {
    const SUT = checkAnagramViaRegex('', '')
    expect(SUT).toBe(true)
  })

  it('expects to return true if the arguments are anagrams with an odd length', () => {
    const SUT = checkAnagramViaRegex('abcde', 'edcab')
    expect(SUT).toBe(true)
  })

  it('expects to return true if the arguments are anagrams with an even length', () => {
    const SUT = checkAnagramViaRegex('abcdef', 'fedcab')
    expect(SUT).toBe(true)
  })

  it('expects to return false if either argument is an empty string while the other is not', () => {
    const SUT = checkAnagramViaRegex('', 'edcab')
    expect(SUT).toBe(false)
    const SUT2 = checkAnagramViaRegex('edcab', '')
    expect(SUT2).toBe(false)
  })

  it('expects to return true if the arguments contain the same letters but have unequal case', () => {
    const SUT = checkAnagramViaRegex('ABDCE', 'abcde')
    expect(SUT).toBe(true)
    const SUT2 = checkAnagramViaRegex('AbCdE', 'aBCdE')
    expect(SUT2).toBe(true)
    const SUT3 = checkAnagramViaRegex('Eleven plus two', 'Twelve plus one')
    expect(SUT3).toBe(true)
  })

  it('expects to return true if the arguments are anagrams and contain number characters', () => {
    const SUT = checkAnagramViaRegex('a1b2', '12ba')
    expect(SUT).toBe(true)
  })

  it('expects to return true if the arguments are anagrams and contain space characters', () => {
    const SUT = checkAnagramViaRegex('a1 b2', '1 2ba')
    expect(SUT).toBe(true)
  })

  it('expects to return true if the arguments are anagrams and contain punctuation characters', () => {
    const SUT = checkAnagramViaRegex('a!1b@2', '1@2ba!')
    expect(SUT).toBe(true)
  })

  it('expects to return false if the arguments contain the same letters but contain a different amount of space characters', () => {
    const SUT = checkAnagramViaRegex('ea        cb', 'e cba')
    expect(SUT).toBe(false)
  })
})

describe('Testing checkAnagramViaMap', () => {
  it.each`
    inputOne              | inputTwo
    ${123456}             | ${'abcd'}
    ${[1, 2, 3, 4, 5, 6]} | ${'abcd'}
    ${{ test: 'test' }}   | ${'abcd'}
    ${'abcd'}             | ${123456}
    ${'abcd'}             | ${[1, 2, 3, 4, 5, 6]}
    ${'abcd'}             | ${{ test: 'test' }}
  `(
    'expects to throw the type Error given values $inputOne and $inputTwo',
    ({ inputOne, inputTwo }) => {
      expect(
        () => checkAnagramViaMap(inputOne, inputTwo)
      ).toThrowError()
    }
  )

  it('expects to return false if the arguments have different lengths', () => {
    const SUT = checkAnagramViaMap('abs', 'abds')
    expect(SUT).toBe(false)
  })

  it('expects to return false if the arguments are not anagrams', () => {
    const SUT = checkAnagramViaMap('abcs', 'abds')
    expect(SUT).toBe(false)
  })

  it('expects to return true if the arguments are anagrams', () => {
    const SUT = checkAnagramViaMap('abcd', 'bcad')
    expect(SUT).toBe(true)
  })

  it('expects to return true if the arguments of length 1 and are the same letter', () => {
    const SUT = checkAnagramViaMap('a', 'a')
    expect(SUT).toBe(true)
  })

  it('expects to return true if the arguments of are both empty strings', () => {
    const SUT = checkAnagramViaMap('', '')
    expect(SUT).toBe(true)
  })

  it('expects to return true if the arguments are anagrams with an odd length', () => {
    const SUT = checkAnagramViaMap('abcde', 'edcab')
    expect(SUT).toBe(true)
  })

  it('expects to return true if the arguments are anagrams with an even length', () => {
    const SUT = checkAnagramViaMap('abcdef', 'fedcab')
    expect(SUT).toBe(true)
  })

  it('expects to return false if either argument is an empty string while the other is not', () => {
    const SUT = checkAnagramViaMap('', 'edcab')
    expect(SUT).toBe(false)
    const SUT2 = checkAnagramViaMap('edcab', '')
    expect(SUT2).toBe(false)
  })

  it('expects to return true if the arguments contain the same letters but have unequal case', () => {
    const SUT = checkAnagramViaMap('ABDCE', 'abcde')
    expect(SUT).toBe(true)
    const SUT2 = checkAnagramViaMap('AbCdE', 'aBCdE')
    expect(SUT2).toBe(true)
    const SUT3 = checkAnagramViaMap('Eleven plus two', 'Twelve plus one')
    expect(SUT3).toBe(true)
  })

  it('expects to return true if the arguments are anagrams and contain number characters', () => {
    const SUT = checkAnagramViaMap('a1b2', '12ba')
    expect(SUT).toBe(true)
  })

  it('expects to return true if the arguments are anagrams and contain space characters', () => {
    const SUT = checkAnagramViaMap('a1 b2', '1 2ba')
    expect(SUT).toBe(true)
  })

  it('expects to return true if the arguments are anagrams and contain punctuation characters', () => {
    const SUT = checkAnagramViaMap('a!1b@2', '1@2ba!')
    expect(SUT).toBe(true)
  })

  it('expects to return false if the arguments contain the same letters but contain a different amount of space characters', () => {
    const SUT = checkAnagramViaMap('ea        cb', 'e cba')
    expect(SUT).toBe(false)
  })
})
