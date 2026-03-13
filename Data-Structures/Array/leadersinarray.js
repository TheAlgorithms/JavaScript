export function leaders(arr) {
    const result = [];
    const n = arr.length;
    let maxRight = arr[n - 1];
    result.push(maxRight);

    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] >= maxRight) {
            maxRight = arr[i];
            result.push(maxRight);
        }
    }

    result.reverse();
    return result;
}
