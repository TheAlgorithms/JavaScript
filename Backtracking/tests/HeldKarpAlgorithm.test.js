
import { heldKarp } from '../HeldKarpAlgorithm'

describe('Held-Karp Algorithm - TSP Solver', () => {
    it('Test Case 1 - 4 cities (Simple)', () => {
        const distanceMatrix = [
            [0, 10, 15, 20],
            [10, 0, 35, 25],
            [15, 35, 0, 30],
            [20, 25, 30, 0]
        ]
        const result = heldKarp(distanceMatrix)
        expect(result).toBe(80)
    })

    it('Test Case 2 - 3 cities', () => {
        const distanceMatrix = [
            [0, 5, 10],
            [5, 0, 15],
            [10, 15, 0]
        ]
        const result = heldKarp(distanceMatrix)
        expect(result).toBe(30)
    })

    it('Test Case 3 - 5 cities', () => {
        const distanceMatrix = [
            [0, 10, 15, 20, 25],
            [10, 0, 35, 25, 30],
            [15, 35, 0, 30, 20],
            [20, 25, 30, 0, 10],
            [25, 30, 20, 10, 0]
        ]
        const result = heldKarp(distanceMatrix)
        expect(result).toBe(95)
    })

    it('Test Case 4 - 1 city', () => {
        const distanceMatrix = [
            [0]
        ]
        const result = heldKarp(distanceMatrix)
        expect(result).toBe(0)
    })

    it('Test Case 5 - 2 cities', () => {
        const distanceMatrix = [
            [0, 5],
            [5, 0]
        ]
        const result = heldKarp(distanceMatrix)
        expect(result).toBe(10)
    })

    it('Test Case 6 - Equal costs (4 cities)', () => {
        const distanceMatrix = [
            [0, 1, 1, 1],
            [1, 0, 1, 1],
            [1, 1, 0, 1],
            [1, 1, 1, 0]
        ]
        const result = heldKarp(distanceMatrix)
        expect(result).toBe(4)
    })

    it('Test Case 7 - Custom distances', () => {
        const distanceMatrix = [
            [0, 10, 20, 30],
            [5, 0, 15, 25],
            [10, 5, 0, 20],
            [20, 15, 10, 0]
        ]
        const result = heldKarp(distanceMatrix)
        expect(result).toBe(55)
    })

    it('Test Case 8 - Large distances', () => {
        const distanceMatrix = [
            [0, 1000, 2000, 3000],
            [1000, 0, 1500, 2500],
            [2000, 1500, 0, 3500],
            [3000, 2500, 3500, 0]
        ]
        const result = heldKarp(distanceMatrix)
        expect(result).toBe(8000)
    })
})
