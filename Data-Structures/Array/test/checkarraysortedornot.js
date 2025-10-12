export function isSorted(arr) {
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        if (arr[i - 1] > arr[i]) {
            return false;
        }
    }
    return true;
}
