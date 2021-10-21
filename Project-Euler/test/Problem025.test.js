import { fibonacciIndex } from '.../Problem025'

describe ('Check Problem 25 - 1000 digit Fibonnaci number', () => {
    it('First term of the Fibonnaci sequence containing 3 digits', () => {
        expect(digitFibonacci(3)).toBe(12)
    })

    it('First term of the Fibonnaci sequence containing 10 digits', () => {
        expect(digitFibonacci(10)).toBe(45)
    })

    it('First term of the Fibonnaci sequence containing 50 digits', () => {
        expect(digitFibonacci(50)).toBe(237)
    })

    it('First term of the Fibonnaci sequence containing 100 digits', () => {
        expect(digitFibonacci(100)).toBe(476)
    })

    it('First term of the Fibonnaci sequence containing 1000 digits', () => {
        expect(digitFibonacci(1000)).toBe(4782)
    })
    
    it('First term of the Fibonnaci sequence containing 10000 digits', () => {
        expect(digitFibonacci(10000)).toBe(47847)
    })
})