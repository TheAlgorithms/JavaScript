import {checkWordOccurrence} from './CheckWordOccurrence';
describe('checkWordOccurrence', () => {
    it('expects throw on insert wrong string', () => {
        const value = 123;
        expect(() => checkWordOccurrence(value)).toThrow();
    });
    it('expect throw on insert wrong param for case sensitive', () => {
        const value = 'hello';
        expect(() => checkWordOccurrence(value, value)).toThrow();
    });
    it('check occurrence with case sensitive', () => {
        const stringToTest = "A Mad World";
        const charsOccurrences = checkWordOccurrence(stringToTest, true);
        const expectResult = {A: 1, M: 1, a: 1, d: 2, W: 1, l: 1, o: 1, r: 1};
        const occurrencesObjectKeys = Object.keys(charsOccurrences);
        const expectObjectKeys = Object.keys(expectResult);
        expect(occurrencesObjectKeys.length).toBe(expectObjectKeys.length);
        expectObjectKeys.forEach(key => {
            expect(expectResult[key]).toBe(charsOccurrences[key]);
        });
    });
    it('check occurrence with case insensitive', () => {
        const stringToTest = "A Mad World";
        const charsOccurrences = checkWordOccurrence(stringToTest, false);
        const expectResult = {A: 2, D: 2, L: 1, M: 1, O: 1, R: 1, W: 1};
        const occurrencesObjectKeys = Object.keys(charsOccurrences);
        const expectObjectKeys = Object.keys(expectResult);
        expect(occurrencesObjectKeys.length).toBe(expectObjectKeys.length);
        expectObjectKeys.forEach(key => {
            expect(expectResult[key]).toBe(charsOccurrences[key]);
        });

    });
});