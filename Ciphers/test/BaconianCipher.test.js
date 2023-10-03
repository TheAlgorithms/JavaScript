import {
  baconianEncode,
  baconianDecode
} from '../BaconianCipher'

test('"Hello world" === baconianDecode(baconianEncode("Hello world"))', () => {
  const word = 'Hello world'
  const expectedResult = 'HELLO WORLD'
  const result = baconianDecode(baconianEncode(word))
  expect(result).toMatch(expectedResult)
})

test('"AABBBAABAAABABBABABBABBBA BABBAABBBABAAABABABBAAABB" === baconianEncode(baconianDecode("AABBBAABAAABABBABABBABBBA BABBAABBBABAAABABABBAAABB"))', () => {
  const word = 'AABBBAABAAABABBABABBABBBA BABBAABBBABAAABABABBAAABB'
  const result = baconianEncode(baconianDecode(word))
  expect(result).toMatch(word)
})
