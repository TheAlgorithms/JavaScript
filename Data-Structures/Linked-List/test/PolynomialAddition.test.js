import { Polynomial, PolynomialTerm } from '../PolynomialAddition';

describe('Polynomial', () => {
  it('should add two polynomials correctly', () => {
    // Create the first polynomial: 3x^2 + 4x^1 + 5x^0
    const poly1 = new Polynomial();
    poly1.addTerm(3, 2);
    poly1.addTerm(4, 1);
    poly1.addTerm(5, 0);

    // Create the second polynomial: 1x^3 + 2x^2 + 1x^0
    const poly2 = new Polynomial();
    poly2.addTerm(1, 3);
    poly2.addTerm(2, 2);
    poly2.addTerm(1, 0);

    // Perform polynomial addition
    const result = Polynomial.addPolynomials(poly1, poly2);

    // Expected result: 1x^3 + 5x^2 + 4x^1 + 6x^0
    expect(result.toString()).toEqual('1x^3 + 5x^2 + 4x^1 + 6x^0');
  });

  it('should add polynomials with missing terms correctly', () => {
    // Create the first polynomial: 3x^2
    const poly1 = new Polynomial();
    poly1.addTerm(3, 2);

    // Create the second polynomial: 2x^3
    const poly2 = new Polynomial();
    poly2.addTerm(2, 3);

    // Perform polynomial addition
    const result = Polynomial.addPolynomials(poly1, poly2);

    // Expected result: 2x^3 + 3x^2
    expect(result.toString()).toEqual('2x^3 + 3x^2');
  });

  it('should add empty polynomials correctly', () => {
    // Create empty polynomials
    const poly1 = new Polynomial();
    const poly2 = new Polynomial();

    // Perform polynomial addition
    const result = Polynomial.addPolynomials(poly1, poly2);

    // Expected result: Empty polynomial
    expect(result.toString()).toEqual('');
  });
});
