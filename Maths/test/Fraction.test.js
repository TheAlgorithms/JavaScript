import { fraction } from './../Fraction.js';

describe('Fraction', () => {
    it('should return [1, 2] for 0.5', () => {
        expect(fraction(0.5)).toEqual([1, 2]);
    });
    it('should return [1, 3] for 0.3333333333333333', () => {
        expect(fraction(0.3333333333333333)).toEqual([1, 3]);
    });
    it('should return [1, 4] for 0.25', () => {
        expect(fraction(0.25)).toEqual([1, 4]);
    });
    it('should return [0, 1] for 0', () => {
        expect(fraction(0)).toEqual([0, 1]);
    });
    it('should return [139, 25] for 5.56', () => {
        expect(fraction(5.56)).toEqual([139, 25]);
    });
    it('should return [33, 100] for 0.33', () => {
        expect(fraction(0.33)).toEqual([33, 100]);
    });
    it('should return [5, 1] for 1', () => {
        expect(fraction(5)).toEqual([5, 1]);
    });
    it('should return [3333, 1000] for 3.333', () => {
        expect(fraction(3.33)).toEqual([333, 100]);
    });
    it('should return [1, 3] for 0.3333', () => {
        expect(fraction(0.3333, 3)).toEqual([1, 3]);
    });
});
