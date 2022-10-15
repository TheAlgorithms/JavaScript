/**
 * @function Ackerman
 * @description function to find ackerman using recursion.
 * @param {Integer,Integer} m,n - The input integer
 * @return {Integer} 
 * @see [ackerman](https://mathworld.wolfram.com/AckermannFunction.html#:~:text=The%20Ackermann%20function%20is%20the,primitive%20recursive%20(Dötzel%201991).)
 * @define_by
 *  A(m,n) = n+1 if m=0
 *  A(m,n) = A(m-1,1) if m>0 , n=0
 *  A(m,n) = A(m-1,A(m,n-1)) if m,n > 0
 */

const ackerman = (m, n) => {
    if (m === 0) {
        return n + 1
    }
    if (n === 0) {
        return ackerman((m - 1), 1);
    }
    if (m !== 0 && n !== 0) {
        return ackerman((m - 1), ackerman(m, (n - 1)))
    }
}
export { ackerman }
