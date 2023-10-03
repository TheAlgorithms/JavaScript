import reverseWords from '../ReverseWords'

describe('Testing the reverseWords function', () => {
  it.each`
    input
    ${123456}
    ${[1, 2, 3, 4, 5, 6]}
    ${{ test: 'test' }}
    ${null}
  `(
    'expects to throw a type error given a value that is $input',
    ({ input }) => {
      expect(() => {
        reverseWords(input)
      }).toThrow('The given value is not a string')
    }
  )

  it('expects to reverse words to return a joined word', () => {
    expect(reverseWords('I Love JS')).toBe('JS Love I')
    expect(reverseWords('Hello World')).toBe('World Hello')
    expect(reverseWords('The Algorithms Javascript')).toBe(
      'Javascript Algorithms The'
    )
  })
})
