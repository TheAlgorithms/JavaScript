import {
  ReverseStringIterative,
  ReverseStringIterativeInplace
} from '../ReverseString'

describe('ReverseStringIterative', () => {
  it('expects to reverse a simple string', () => {
    expect(ReverseStringIterative('reverse')).toEqual('esrever')
    expect(ReverseStringIterative('some')).toEqual('emos')
    expect(ReverseStringIterative('string')).toEqual('gnirts')
    expect(ReverseStringIterative('The Algorithms Javascript')).toEqual(
      'tpircsavaJ smhtiroglA ehT'
    )
  })

  it('expects to reverse a string with spaces in between', () => {
    expect(ReverseStringIterative('reverse me')).toEqual('em esrever')
  })

  it('expects to reverse a simple string without capitalizing the first letter', () => {
    expect(ReverseStringIterative('Javascript')).toEqual('tpircsavaJ')
  })

  it.each`
    input
    ${123456}
    ${[1, 2, 3, 4, 5, 6]}
    ${{ test: 'test' }}
    ${null}
  `(
    'expects to throw a type error given a value that is $input',
    ({ input }) => {
      expect(() => ReverseStringIterative(input)).toThrow(
        'The given value is not a string'
      )
    }
  )

  it('expects to return a empty string with an empty string is given', () => {
    expect(ReverseStringIterative('')).toEqual('')
  })
})

describe('ReverseStringIterativeInplace', () => {
  it.each([
    ['hello', 'olleh'],
    ['word', 'drow']
  ])('reverse of %s is %s', (value, expected) => {
    expect(ReverseStringIterativeInplace(value)).toBe(expected)
  })
})
