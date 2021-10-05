import { ReverseStringIterative, ReverseStringIterativeInplace } from '../ReverseString'

describe('ReverseStringIterative', () => {
  it('expects to reverse a simple string', () => {
    expect(ReverseStringIterative('reverse')).toEqual('esrever')
    expect(ReverseStringIterative('some')).toEqual('emos')
    expect(ReverseStringIterative('string')).toEqual('gnirts')
    expect(ReverseStringIterative('The Algorithms Javascript')).toEqual('tpircsavaJ smhtiroglA ehT')
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
      expect(() => ReverseStringIterative(input)).toThrow('The given value is not a string')
    }
  )

  it('expects to return a empty string with an empty string is given', () => {
    expect(ReverseStringIterative('')).toEqual('')
  })
})

describe('ReverseStringIterativeInplace', () => {
  it('expects to reverse a simple string', () => {
    expect(ReverseStringIterativeInplace('reverse')).toEqual('esrever')
    expect(ReverseStringIterativeInplace('some')).toEqual('emos')
    expect(ReverseStringIterativeInplace('string')).toEqual('gnirts')
    expect(ReverseStringIterativeInplace('The Algorithms Javascript')).toEqual('tpircsavaJ smhtiroglA ehT')
  })

  it('expects to reverse a simple string without capitalizing the first letter', () => {
    expect(ReverseStringIterativeInplace('Javascript')).toEqual('tpircsavaJ')
  })

  it('expects to return an empty string given an empty string', () => {
    expect(ReverseStringIterativeInplace('Javascript')).toEqual('tpircsavaJ')
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
      expect(() => ReverseStringIterativeInplace(input)).toThrow('The given value is not a string')
    }
  )
})
