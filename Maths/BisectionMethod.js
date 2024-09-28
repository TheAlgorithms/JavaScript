/**
 *
 * @file
 * @brief Find real roots of a function in a specified interval [a, b], where f(a)*f(b) < 0
 *
 * @details Given a function f(x) and an interval [a, b], where f(a) * f(b) < 0, find an approximation of the root
 * by calculating the middle m = (a + b) / 2, checking f(m) * f(a) and f(m) * f(b) and then by choosing the
 * negative product that means Bolzano's theorem is applied,, define the new interval with these points. Repeat until
 * we get the precision we want [Wikipedia](https://en.wikipedia.org/wiki/Bisection_method)
 *
 * @author [ggkogkou](https://github.com/ggkogkou)
 *
 */

const findRoot = (a, b, func, numberOfIterations) => {
  // Check if a given  real value belongs to the function's domain
  const belongsToDomain = (x, f) => {
    const res = f(x)
    return !Number.isNaN(res)
  }
  if (!belongsToDomain(a, func) || !belongsToDomain(b, func))
    throw Error("Given interval is not a valid subset of function's domain")

  // Bolzano theorem
  const hasRoot = (a, b, func) => {
    return func(a) * func(b) <= 0
  }
  if (hasRoot(a, b, func) === false) {
    throw Error(
      'Product f(a)*f(b) has to be negative so that Bolzano theorem is applied'
    )
  }

  // Declare m
  const m = (a + b) / 2

  // Recursion terminal condition
  if (numberOfIterations === 0) {
    return m
  }

  // Find the products of f(m) and f(a), f(b)
  const fm = func(m)
  const prod1 = fm * func(a)
  const prod2 = fm * func(b)

  // Depending on the sign of the products above, decide which position will m fill (a's or b's)
  if (prod2 <= 0) return findRoot(m, b, func, --numberOfIterations)

  return findRoot(a, m, func, --numberOfIterations)
}

export { findRoot }
