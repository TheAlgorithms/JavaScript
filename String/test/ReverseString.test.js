import {
  ReverseStringIterative,
  ReverseStringIterativeInplace
} from '../ReverseString'

describe('ReverseStringIterative', () => {
  it('expects to reverse a simple string', () => {
    const SUT = ReverseStringIterative('reverse')
    expect(SUT).toEqual('esrever')
  })
  it('expects to reverse a string with spaces in between', () => {
    const SUT = ReverseStringIterative('reverse me')
    expect(SUT).toEqual('em esrever')
  })
  it('expects to reverse a simple string without capitalizing the first letter', () => {
    const SUT = ReverseStringIterative('Javascript')
    expect(SUT).toEqual('tpircsavaJ')
  })
  it.each`
    input
    ${123456}
    ${[1, 2, 3, 4, 5, 6]}
    ${{ test: 'test' }}
  `(
    'expects to throw a type error given a value that is $input',
    ({ input }) => {
      expect(() => {
        ReverseStringIterative(input)
      }).toThrow('The given value is not a string')
    }
  )
  it('expects to return a empty string with an empty string is given', () => {
    const SUT = ReverseStringIterative('')
    expect(SUT).toEqual('')
  })
})
describe('ReverseStringIterativeInplace', () => {
  it('expects to reverse a simple string', () => {
    const SUT = ReverseStringIterativeInplace('reverse')
    expect(SUT).toEqual('esrever')
  })
  it('expects to reverse a simple string without capitalizing the first letter', () => {
    const SUT = ReverseStringIterativeInplace('Javascript')
    expect(SUT).toEqual('tpircsavaJ')
  })
  it('expects to return an empty string given an empty string', () => {
    const SUT = ReverseStringIterativeInplace('Javascript')
    expect(SUT).toEqual('tpircsavaJ')
  })
  it.each`
    input
    ${123456}
    ${[1, 2, 3, 4, 5, 6]}
    ${{ test: 'test' }}
  `(
    'expects to throw a type error given a value that is $input',
    ({ input }) => {
      expect(() => {
        ReverseStringIterativeInplace(input)
      }).toThrow('The given value is not a string')
    }
  )
})
