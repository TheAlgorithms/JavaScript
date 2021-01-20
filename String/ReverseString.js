/**
 * A short example showing how to reverse a string
 * @flow
 */

/**
 * Create a new string and append
 * @complexity O(n)
 *
 *  Doctests
 *
 * > ReverseStringIterative('some')
 *  'emos'
 * > ReverseStringIterative('string')
 *  'gnirts'
 * > ReverseStringIterative('The Algorithms Javascript')
 *  'tpircsavaJ smhtiroglA ehT'
 * > ReverseStringIterative([])
 *  ! TypeError
 * > ReverseStringIterative({})
 *  ! TypeError
 * > ReverseStringIterative(null)
 *  ! TypeError
 */
function ReverseStringIterative (string) {
  if (typeof string !== 'string') {
    throw new TypeError('The given value is not a string')
  }
  let reversedString = ''
  let index

  for (index = string.length - 1; index >= 0; index--) {
    reversedString += string[index]
  }

  return reversedString
}

/**
 * JS disallows string mutation so we're actually a bit slower.
 *
 * @complexity O(n)
 *
 * 'some' -> 'eoms' -> 'emos'
 *
 *  Doctests
 *
 * > ReverseStringIterativeInplace('some')
 *  'emos'
 * > ReverseStringIterativeInplace('string')
 *  'gnirts'
 * > ReverseStringIterativeInplace('The Algorithms Javascript')
 *  'tpircsavaJ smhtiroglA ehT'
 * > ReverseStringIterativeInplace([])
 *  ! TypeError
 * > ReverseStringIterativeInplace({})
 *  ! TypeError
 * > ReverseStringIterativeInplace(null)
 *  ! TypeError
 */
function ReverseStringIterativeInplace (string) {
  if (typeof string !== 'string') {
    throw new TypeError('The given value is not a string')
  }
  const _string = string.split('')

  for (let i = 0; i < Math.floor(_string.length / 2); i++) {
    const first = _string[i]
    const second = _string[_string.length - 1 - i]
    _string[i] = second
    _string[_string.length - 1 - i] = first
  }

  return _string.join('')
}

export { ReverseStringIterative, ReverseStringIterativeInplace }
