/**
 * Represents a term in a polynomial.
 */
class PolynomialTerm {
    /**
     * Create a new polynomial term.
     * @param {number} coefficient - The coefficient of the term.
     * @param {number} exponent - The exponent of the term.
     */
    constructor(coefficient, exponent) {
      this.coefficient = coefficient;
      this.exponent = exponent;
      this.next = null;
    }
  }
  
  /**
   * Represents a polynomial as a linked list of terms.
   */
  class Polynomial {
    /**
     * Create an empty polynomial.
     */
    constructor() {
      this.headTerm = null;
      this.tailTerm = null;
    }
  
    /**
     * Add a term to the polynomial.
     * @param {number} coefficient - The coefficient of the term.
     * @param {number} exponent - The exponent of the term.
     */
    addTerm(coefficient, exponent) {
      const newTerm = new PolynomialTerm(coefficient, exponent);
      if (this.headTerm === null) {
        this.headTerm = newTerm;
        this.tailTerm = newTerm;
      } else {
        this.tailTerm.next = newTerm;
        this.tailTerm = newTerm;
      }
    }
  
    /**
     * Add two polynomials together and return a new polynomial.
     * @param {Polynomial} poly1 - The first polynomial.
     * @param {Polynomial} poly2 - The second polynomial.
     * @returns {Polynomial} - The result of polynomial addition.
     */
    static addPolynomials(poly1, poly2) {
      const result = new Polynomial();
      let term1 = poly1.headTerm;
      let term2 = poly2.headTerm;
  
      while (term1 || term2) {
        if (!term1) {
          result.addTerm(term2.coefficient, term2.exponent);
          term2 = term2.next;
        } else if (!term2) {
          result.addTerm(term1.coefficient, term1.exponent);
          term1 = term1.next;
        } else {
          if (term1.exponent === term2.exponent) {
            result.addTerm(term1.coefficient + term2.coefficient, term1.exponent);
            term1 = term1.next;
            term2 = term2.next;
          } else if (term1.exponent > term2.exponent) {
            result.addTerm(term1.coefficient, term1.exponent);
            term1 = term1.next;
          } else {
            result.addTerm(term2.coefficient, term2.exponent);
            term2 = term2.next;
          }
        }
      }
  
      return result;
    }
  
    /**
     * Convert the polynomial to a string representation.
     * @returns {string} - The string representation of the polynomial.
     */
    toString() {
      let currentTerm = this.headTerm;
      let result = "";
  
      while (currentTerm) {
        result += `${currentTerm.coefficient}x^${currentTerm.exponent}`;
        currentTerm = currentTerm.next;
        if (currentTerm) {
          result += " + ";
        }
      }
  
      return result;
    }
  }