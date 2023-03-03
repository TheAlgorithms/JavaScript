/**
 * Author: Jacoby Johnson (cobyj33)
 *
 * Generates generations of Elementary 1D cellular automata
 *
 * Wikipedia: https://en.wikipedia.org/wiki/Elementary_cellular_automaton
 * See all 255 possible rules and find another explanation here: https://mathworld.wolfram.com/ElementaryCellularAutomaton.html
 *
 * My personal take on the explanation of Elementary Cellular Automata:
 *
 * Elementary 1D cellular automata defines the growth and decay of populations of "cells" according to a specific rule, where the population is a line (array) and each cell is in either an "alive" (1) or a "dead" (0) state.
 *
 * The next generation of for a cell in the simulation ONLY depends on the state of its neighborhood (the state of the cell itself as well as the states of the cells to the immediate right and the immediate left)
 * Therefore, since each neighborhood consists of 3 cells each with 2 states there are 2^3 possibilities that determine a cell's next state, where each possible neighborhood could be represented in binary as
 *
 * 111
 * 110
 * 101
 * 100
 * 011
 * 010
 * 001
 * 000
 *
 * Where "1" represents the cell being alive and "0" represents the cell being dead. The leftmost bit represents the left neighbor of the currently analyzed cell, the middle bit represents the currently analyzed cell, and the rightmost bit represents the right neighbor of the currently analyzed cell.
 *
 * Rules are represented between 0 and 255 (0 and 255 inclusive), or more conceptually is seen as an 8 bit binary number. Each bit represents whether a cell should survive according to one of the 8 states of a cell's neighborhood. In this way, the number can act like an array of data of length 8.
 * The most significant bit (ex: ->10100100 ) represents the output for the "all on" state while the least significant bit (ex: 10100100<- ) represents the output for the "all off" state
 * In other words, all of the 8 possible neighborhood configurations map toward the 8 bits in a rule's output values
 *
 * Therefore, to find whether the a cell is born, survives, or dies, one could convert the state of a cell and it's neighbors into a binary number, then use the numerical value of that binary number as an index to find the corresponding rule's output, which is what has been implemented below
 * This analysis of a cell's neighborhood is performed on each cell in a generation until a new generation is created and returned.
 *
 * Rules are usually demonstrated visually by how a single cell grows independently according to that rule
 *
 * Example: First generations of Rule 94                    First Generations of Rule 126
 * 000000000000000000000000001000000000000000000000000      000000000000000000000000001000000000000000000000000
 * 000000000000000000000000011100000000000000000000000      000000000000000000000000011100000000000000000000000
 * 000000000000000000000000110110000000000000000000000      000000000000000000000000110110000000000000000000000
 * 000000000000000000000001110111000000000000000000000      000000000000000000000001111111000000000000000000000
 * 000000000000000000000011010101100000000000000000000      000000000000000000000011000001100000000000000000000
 * 000000000000000000000111010101110000000000000000000      000000000000000000000111100011110000000000000000000
 * 000000000000000000001101010101011000000000000000000      000000000000000000001100110110011000000000000000000
 * 000000000000000000011101010101011100000000000000000      000000000000000000011111111111111100000000000000000
 * 000000000000000000110101010101010110000000000000000      000000000000000000110000000000000110000000000000000
 * 000000000000000001110101010101010111000000000000000      000000000000000001111000000000001111000000000000000
 * 000000000000000011010101010101010101100000000000000      000000000000000011001100000000011001100000000000000
 * 000000000000000111010101010101010101110000000000000      000000000000000111111110000000111111110000000000000
 * 000000000000001101010101010101010101011000000000000      000000000000001100000011000001100000011000000000000
 * 000000000000011101010101010101010101011100000000000      000000000000011110000111100011110000111100000000000
 * 000000000000110101010101010101010101010110000000000      000000000000110011001100110110011001100110000000000
 * 000000000001110101010101010101010101010111000000000      000000000001111111111111111111111111111111000000000
 * 000000000011010101010101010101010101010101100000000      000000000011000000000000000000000000000001100000000
 * 000000000111010101010101010101010101010101110000000      000000000111100000000000000000000000000011110000000
 * 000000001101010101010101010101010101010101011000000      000000001100110000000000000000000000000110011000000
 * 000000011101010101010101010101010101010101011100000      000000011111111000000000000000000000001111111100000
 *
 * DEV NOTE: This implementation assumes that cells on the edge (who only have 1 neighbor) have 1 neighbor and a permanently "dead" neighbor, which is technically correct in a finite space. However, most diagrams of these elementary cellular automata rules assume a infinite line of cells. Therefore, the edges of the array may not evolve perfectly in line with pictured diagrams which assume infinite space.
 */

/**
 * Find the next Elementary Cell Automata Generation given the previous generation and the rule [0-255] to follow
 * @param {(0 | 1)[]} generation The current generation of the Elementary Cellular Automata simulation
 * @param {number} rule The current rule of the Elementary Cellular Automata simulation. Must be an integer between 0 and 255 inclusive
 * @returns {(0 | 1)[]} The next generation according to the inputted rule
 */
export function getNextElementaryGeneration (generation, rule) {
  const NUM_ELEMENTARY_NEIGHBORHOOD_STATES = 8
  const MIN_RULE = 0
  const MAX_RULE = 255

  if (!Number.isInteger(rule)) {
    throw new Error(`Rule must be an integer between the values 0 and 255 (got ${rule})`)
  }
  if (rule < MIN_RULE || rule > MAX_RULE) {
    throw new RangeError(`Rule must be an integer between the values 0 and 255 (got ${rule})`)
  }

  const binaryRule = rule.toString(2).padStart(NUM_ELEMENTARY_NEIGHBORHOOD_STATES, '0')
  const ruleData = binaryRule.split('').map(bit => Number.parseInt(bit)) // note that ruleData[0] represents "all alive" while ruleData[7] represents "all dead"
  const output = new Array(generation.length)
  const LEFT_DEAD = 4 // 100 in binary
  const MIDDLE_DEAD = 2 // 010 in binary
  const RIGHT_DEAD = 1 // 001 in binary

  for (let i = 0; i < generation.length; i++) {
    let neighborhoodValue = LEFT_DEAD | MIDDLE_DEAD | RIGHT_DEAD

    if (i - 1 > 0 && generation[i - 1] === 1) {
      neighborhoodValue ^= LEFT_DEAD
    }

    if (generation[i] === 1) {
      neighborhoodValue ^= MIDDLE_DEAD
    }

    if (i + 1 < generation.length && generation[i + 1] === 1) {
      neighborhoodValue ^= RIGHT_DEAD
    }

    output[i] = ruleData[neighborhoodValue]
  }

  return output
}
