// Import the functions to be tested
import {
  validateCred,
  findInvalidCards,
  idInvalidCardCompanies
} from '../LuhnAlgorithm.js'
// Import credit card numbers to be tested
import {
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  batch
} from '../LuhnAlgorithm.js'

describe('Luhn Algorithm Tests', () => {
  // Test for validateCred function
  describe('validateCred', () => {
    test('should return true for valid credit cards', () => {
      const validCards = [valid1, valid2, valid3, valid4, valid5]
      validCards.forEach((card) => {
        expect(validateCred(card)).toBe(true)
      })
    })

    test('should return false for invalid credit cards', () => {
      const invalidCards = [invalid1, invalid2, invalid3, invalid4, invalid5]
      invalidCards.forEach((card) => {
        expect(validateCred(card)).toBe(false)
      })
    })
  })

  // Test for findInvalidCards function
  describe('findInvalidCards', () => {
    test('should return only invalid credit cards from a batch', () => {
      const invalidCards = findInvalidCards(batch)
      const allInvalid = invalidCards.every((card) => !validateCred(card))
      expect(allInvalid).toBe(true)
    })

    test('should return an empty array if no invalid cards are found', () => {
      const validCards = [valid1, valid2, valid3, valid4, valid5]
      const invalidCards = findInvalidCards(validCards)
      expect(invalidCards).toEqual([])
    })
  })

  // Test for idInvalidCardCompanies function
  describe('idInvalidCardCompanies', () => {
    test('should identify all companies that issued invalid cards', () => {
      const invalidCards = findInvalidCards(batch)
      const companies = idInvalidCardCompanies(invalidCards)

      // Expect the companies array to include known companies
      expect(companies).toEqual(
        expect.arrayContaining(['Visa', 'Mastercard', 'Amex', 'Discover'])
      )
    })

    test('should return an empty array if no invalid cards are found', () => {
      const validCards = [valid1, valid2, valid3, valid4, valid5]
      const invalidCards = findInvalidCards(validCards) // Ensure only invalid cards are processed
      const companies = idInvalidCardCompanies(invalidCards)
      expect(companies).toEqual([])
    })

    test('should handle unknown card companies gracefully', () => {
      const unknownCard = [9, 3, 1, 8, 2, 0, 7, 4, 5, 6, 7, 8, 9]
      const companies = idInvalidCardCompanies([unknownCard])
      expect(companies).not.toContain('Unknown')
    })
  })
})
