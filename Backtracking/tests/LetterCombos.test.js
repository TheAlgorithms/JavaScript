import { letterCombinations } from '../LetterCombos'

describe('LetterCombinations', () => {
    it('Letter Combinations of 23', () => {
        const res = letterCombinations("23")
        expect(res).toEqual(["ad","ae","af","bd","be","bf","cd","ce","cf"])
    })

    it('Letter Combinations of empty string', () => {
        const res = letterCombinations("")
        expect(res).toEqual([])
    })

    it('Letter Combinations of 2', () => {
        const res = letterCombinations("2")
        expect(res).toEqual(["a","b","c"])
    })
})