function constructFenwickTree(array, n) {
    for (let i = 1; i <= n; i++) {
        FeneickTree[i] = 0;
    }
    for (let i = 0; i < n; i++) {
        updateFenwickTree(n, i, array[i]);
    }
}

function updateFenwickTree(n, index, value) {
    index = index + 1;
    while (index <= n) {
        FeneickTree[index] += value;
        index += index & (-index);
    }
}

function getPrefixSum(index) {
    let currSum = 0;
    index = index + 1;
    while (index > 0) {
        currSum += FeneickTree[index];
        index -= index & (-index);
    }
    
    return currSum;
}

let MAX_VALUE = 1000;
let FeneickTree = new Array(MAX_VALUE);
let array = [3, 2, 0, 6, 5, -1, 2];

let length = array.length;
constructFenwickTree(array, length);

getPrefixSum(6);
console.log(getPrefixSum(6))
array[2] += 6;
updateFenwickTree(length, 2, 6);
getPrefixSum(6);

//Output1 : 17
//Output2 : 23