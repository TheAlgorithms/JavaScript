import { FibonacciUsingFormula } from '../FibonacciUsingFormula'

describe('FibonacciUsingFormula' , () => {
    it('should calculate the correct Fibonacci number for n = 0', () => {
        const result = FibonacciUsingFormula(0)
        expect(result).toBe(0)
    })
    it('should calculate the correct Fibonacci number for n = 1', () => {
        const result = FibonacciUsingFormula(1)
        expect(result).toBe(1)
    })
    it('should calculate the correct Fibonacci number for n = 2', () => {
        const result = FibonacciUsingFormula(2)
        expect(result).toBe(1)
    })
    it('should calculate the correct Fibonacci number for n = 5', () => {
        const result = FibonacciUsingFormula(5)
        expect(result).toBe(5)
    })
    it('should calculate the correct Fibonacci number for n = 10', () => {
        const result = FibonacciUsingFormula(10)
        expect(result).toBe(55)
    })
    it('should calculate the correct Fibonacci number for n = 15', () => {
        const result = FibonacciUsingFormula(15)
        expect(result).toBe(610)
    })
})
