class SegmentTree {
    constructor(arr) {
        this.n = arr.length;
        this.tree = new Array(2 * this.n);
        this.build(arr);
    }

    build(arr) {
        for (let i = 0; i < this.n; i++) {
            this.tree[this.n + i] = arr[i];
        }
        for (let i = this.n - 1; i > 0; --i) {
            this.tree[i] = this.tree[i * 2] + this.tree[i * 2 + 1];
        }
    }

    update(index, value) {
        index += this.n;
        this.tree[index] = value;
        while (index > 1) {
            index >>= 1;
            this.tree[index] = this.tree[index * 2] + this.tree[index * 2 + 1];
        }
    }

    query(left, right) {
        let res = 0;
        left += this.n;
        right += this.n;
        while (left < right) {
            if (left & 1) {
                res += this.tree[left++];
            }
            if (right & 1) {
                res += this.tree[--right];
            }
            left >>= 1;
            right >>= 1;
        }
        return res;
    }
}

// Example usage
let arr = [1, 3, 5, 7, 9, 11];
let segTree = new SegmentTree(arr);
console.log(segTree.query(1, 3)); // Output: 8
segTree.update(1, 10);
console.log(segTree.query(1, 3)); // Output: 15
