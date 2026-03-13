// Prefix-Sum/BasicPrefixSum.js
export const prefixSum = (arr) => {
  if (!Array.isArray(arr)) {
    throw new TypeError("prefixSum: expected argument to be an Array of numbers");
  }

  const n = arr.length;
  let running = 0;

  for (let i = 0; i < n; i++) {
    const v = arr[i];
    if (typeof v !== "number" || !Number.isFinite(v)) {
      throw new TypeError(
        `prefixSum: array element at index ${i} is not a finite number (received: ${String(v)})`
      );
    }
    running += v;
    arr[i] = running;
  }

  return arr;
};