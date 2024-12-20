/**
 * Luhn algorithm, also known as the “Modulus 10” or “mod 10” algorithm. 
 * This algorithm is a simple checksum formula used to validate the authenticity of credit card numbers.
 * The Luhn algorithm works by doubling every second digit from right to left, adding the resulting digits, and then checking if the total is divisible by 10. 
 * If it is, the credit card number is considered valid.
 * The Luhn algorithm is widely used in credit card verification and is specified in ISO/IEC 7812-1. 
 * It is not intended to be a cryptographically secure hash function but rather a simple method to detect accidental errors, not malicious attacks.
 * https://en.wikipedia.org/wiki/Luhn_algorithm
 */

// Valid credit card numbers
export const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
export const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
export const valid3 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
export const valid4 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
export const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// Invalid credit card numbers
export const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
export const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
export const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
export const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
export const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Mixed batch of credit card numbers
export const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
export const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
export const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
export const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
export const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

export const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

/**
 * Validates a credit card number using the Luhn Algorithm.
 * @param {number[]} numArr - Array representing the credit card number.
 * @returns {boolean} - True if the card is valid, false otherwise.
 */
export function validateCred(numArr) {
    let total = 0;
    for (let i = numArr.length - 1; i >= 0; i--) {
        let currValue = numArr[i];
        // Double every other digit starting from the second-to-last
        if ((numArr.length - 1 - i) % 2 === 1) {
            currValue *= 2;
        if (currValue > 9) {
            currValue -= 9;
        }
    }
    total += currValue;
    }
    return total % 10 === 0;
};

/**
 * Finds invalid credit card numbers from a batch.
 * @param {number[][]} cards - Array of credit card numbers.
 * @returns {number[][]} - Array of invalid credit card numbers.
 */
export function findInvalidCards(cards) {
    return cards.filter(card => !validateCred(card));
};

/**
 * Identifies credit card companies that issued invalid card numbers.
 * @param {number[][]} invalidBatch - Array of invalid credit card numbers.
 * @returns {string[]} - Array of company names.
 */
export function idInvalidCardCompanies(invalidBatch) {
    const companies = new Set();
    invalidBatch.forEach(card => {
        switch (card[0]) {
        case 3:
            companies.add('Amex');
            break;
        case 4:
            companies.add('Visa');
            break;
        case 5:
            companies.add('Mastercard');
            break;
        case 6:
            companies.add('Discover');
            break;
        default:
            console.warn('Company not found for card starting with:', card[0]);
        }
    });
    return Array.from(companies);
};

// Example Usage
console.log(validateCred(valid1)); // Should print true
console.log(validateCred(invalid1)); // Should print false
console.log(findInvalidCards(batch)); // Find all invalid cards
console.log(idInvalidCardCompanies(findInvalidCards(batch))); // Find companies of invalid cards
