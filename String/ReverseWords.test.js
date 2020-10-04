import { reverseWords } from './ReverseWords'

describe('reverseWords', () => {
  it('expects to reverse words to return a joined word', () => {
    const SUT = reverseWords('I Love JS')
    expect(SUT).toBe('JS Love I')
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
        reverseWords(input)
      }).toThrow('The given value is not a string')
    }
  )
})
