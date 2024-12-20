// Import the functions to be tested
import { validateCred, findInvalidCards, idInvalidCardCompanies } from '../LuhnAlgorithm.js';

// Import credit card numbers to be tested
import { valid1, valid2, valid4, valid3, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, batch} from '../LuhnAlgorithm.js'

// Test suite for credit card validation

  //Test validateCred function
    function testValidateCred() {
        console.log('Running tests for validateCred...');
    
    // Valid test cases
        if (![valid1, valid2, valid3, valid4, valid5].every(card => validateCred(card))) {
            console.error('FAILED: validateCred should return true for all valid cards');
        }
        if ([invalid1, invalid2, invalid3, invalid4, invalid5].some(card => validateCred(card))) {
            console.error('FAILED: validateCred should return false for all invalid cards');
        } else {
            console.log('PASSED: Valid card test');
        };

    // Invalid test cases
        if (validateCred(invalid1 || invalid2 || invalid3 || invalid4 || invalid5)) {
            console.error('FAILED: validateCred should return false for invalid cards');
        } else {
            console.log('PASSED: Invalid card test');
        }
    };

  //Test findInvalidCards function
    function testFindInvalidCards(batch) {
        console.log('Running tests for findInvalidCards...');
        const invalidCards = findInvalidCards(batch);

    // Check if the result only contains invalid cards
        const allInvalid = invalidCards.every(card => !validateCred(card));

        if (!allInvalid) {
            console.error('FAILED: findInvalidCards should return only invalid cards');
        } else {
            console.log('PASSED: Find invalid cards test');
        }
    };

  // Test idInvalidCardCompanies function
    function testIdInvalidCardCompanies() {
        console.log('Running tests for idInvalidCardCompanies...');
        const companies = idInvalidCardCompanies(batch);

        if (!companies.includes('Visa') || !companies.includes('Mastercard') || !companies.includes('Amex') || !companies.includes('Discover')) {
            console.error('FAILED: idInvalidCardCompanies should include all expected companies');
        } else if (companies.includes('Unknown')) {
            console.error('FAILED: idInvalidCardCompanies should not include unrecognized prefixes');
        } else {
            console.log('PASSED: Identify invalid card companies test');
        }
    };

  //Run all tests
    function runAllTests() {
        console.log('Starting test suite...');
        testValidateCred();
        testFindInvalidCards(batch);
        testIdInvalidCardCompanies();
        console.log('Testing edge cases...');
        console.assert(findInvalidCards([[]]).length === 0, 'FAILED: findInvalidCards should handle empty arrays');
        console.log('All tests completed.');
    };

  // Run the test suite
    runAllTests();
