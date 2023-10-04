import { limit } from "../Limit.js";

let a1 = limit(2, (x) => x ** 2); //returns 4
let a2 = limit(Infinity, (x) => (2 * x - 1) / x); // returns 2
let a3 = limit(1, Math.sin); // returns approximately 0.84147
console.log(a1, a2, a3);
