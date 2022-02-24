import { checkAnagramMap, checkAnagramRegex } from '../CheckAnagram'

describe('Testing checkAnagramRegex', () => {
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
        () => checkAnagramRegex(inputOne, inputTwo)
      ).toThrowError()
    }
  )

  it('expects to return false if the arguments have different lengths', () => {
    const SUT = checkAnagramRegex('abs', 'abds')
    expect(SUT).toBe(false)
  })

  it('expects to return false if the arguments are not anagrams', () => {
    const SUT = checkAnagramRegex('abcs', 'abds')
    expect(SUT).toBe(false)
  })

  it('expects to return true if the arguments are anagrams', () => {
    const SUT = checkAnagramRegex('abcd', 'bcad')
    expect(SUT).toBe(true)
  })

  it('expects to return true if the arguments of length 1 and are the same letter', () => {
    const SUT = checkAnagramRegex('a', 'a')
    expect(SUT).toBe(true)
  })

  it('expects to return true if the arguments of are both empty strings', () => {
    const SUT = checkAnagramRegex('', '')
    expect(SUT).toBe(true)
  })

  it('expects to return true if the arguments are anagrams with an odd length', () => {
    const SUT = checkAnagramRegex('abcde', 'edcab')
    expect(SUT).toBe(true)
  })

  it('expects to return true if the arguments are anagrams with an even length', () => {
    const SUT = checkAnagramRegex('abcdef', 'fedcab')
    expect(SUT).toBe(true)
  })

  it('expects to return false if either argument is an empty string while the other is not', () => {
    const SUT = checkAnagramRegex('', 'edcab')
    expect(SUT).toBe(false)
    const SUT2 = checkAnagramRegex('edcab', '')
    expect(SUT2).toBe(false)
  })

  it('expects to return true if the arguments contain the same letters but have unequal case', () => {
    const SUT = checkAnagramRegex('ABDCE', 'abcde')
    expect(SUT).toBe(true)
    const SUT2 = checkAnagramRegex('AbCdE', 'aBCdE')
    expect(SUT2).toBe(true)
    const SUT3 = checkAnagramRegex('Eleven plus two', 'Twelve plus one')
    expect(SUT3).toBe(true)
  })

  it('expects to return true if the arguments are anagrams and contain number characters', () => {
    const SUT = checkAnagramRegex('a1b2', '12ba')
    expect(SUT).toBe(true)
  })

  it('expects to return true if the arguments are anagrams and contain space characters', () => {
    const SUT = checkAnagramRegex('a1 b2', '1 2ba')
    expect(SUT).toBe(true)
  })

  it('expects to return true if the arguments are anagrams and contain punctuation characters', () => {
    const SUT = checkAnagramRegex('a!1b@2', '1@2ba!')
    expect(SUT).toBe(true)
  })

  it('expects to return false if the arguments contain the same letters but contain a different amount of space characters', () => {
    const SUT = checkAnagramRegex('ea        cb', 'e cba')
    expect(SUT).toBe(false)
  })
})

describe('Testing checkAnagramMap', () => {
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
        () => checkAnagramMap(inputOne, inputTwo)
      ).toThrowError()
    }
  )

  it('expects to return false if the arguments have different lengths', () => {
    const SUT = checkAnagramMap('abs', 'abds')
    expect(SUT).toBe(false)
  })

  it('expects to return false if the arguments are not anagrams', () => {
    const SUT = checkAnagramMap('abcs', 'abds')
    expect(SUT).toBe(false)
  })

  it('expects to return true if the arguments are anagrams', () => {
    const SUT = checkAnagramMap('abcd', 'bcad')
    expect(SUT).toBe(true)
  })

  it('expects to return true if the arguments of length 1 and are the same letter', () => {
    const SUT = checkAnagramMap('a', 'a')
    expect(SUT).toBe(true)
  })

  it('expects to return true if the arguments of are both empty strings', () => {
    const SUT = checkAnagramMap('', '')
    expect(SUT).toBe(true)
  })

  it('expects to return true if the arguments are anagrams with an odd length', () => {
    const SUT = checkAnagramMap('abcde', 'edcab')
    expect(SUT).toBe(true)
  })

  it('expects to return true if the arguments are anagrams with an even length', () => {
    const SUT = checkAnagramMap('abcdef', 'fedcab')
    expect(SUT).toBe(true)
  })

  it('expects to return false if either argument is an empty string while the other is not', () => {
    const SUT = checkAnagramMap('', 'edcab')
    expect(SUT).toBe(false)
    const SUT2 = checkAnagramMap('edcab', '')
    expect(SUT2).toBe(false)
  })

  it('expects to return true if the arguments contain the same letters but have unequal case', () => {
    const SUT = checkAnagramMap('ABDCE', 'abcde')
    expect(SUT).toBe(true)
    const SUT2 = checkAnagramMap('AbCdE', 'aBCdE')
    expect(SUT2).toBe(true)
    const SUT3 = checkAnagramMap('Eleven plus two', 'Twelve plus one')
    expect(SUT3).toBe(true)
  })

  it('expects to return true if the arguments are anagrams and contain number characters', () => {
    const SUT = checkAnagramMap('a1b2', '12ba')
    expect(SUT).toBe(true)
  })

  it('expects to return true if the arguments are anagrams and contain space characters', () => {
    const SUT = checkAnagramMap('a1 b2', '1 2ba')
    expect(SUT).toBe(true)
  })

  it('expects to return true if the arguments are anagrams and contain punctuation characters', () => {
    const SUT = checkAnagramMap('a!1b@2', '1@2ba!')
    expect(SUT).toBe(true)
  })

  it('expects to return false if the arguments contain the same letters but contain a different amount of space characters', () => {
    const SUT = checkAnagramMap('ea        cb', 'e cba')
    expect(SUT).toBe(false)
  })
})
