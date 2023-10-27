class DisjointSet {
  constructor() {
    this.parents = {};
    this.ranks = {};
    this.sizes = {};
  }

  // initializes a disjoint set
  makeSet(x) {
    this.parents[x] = x;
    this.ranks[x] = 0;
    this.sizes[x] = 1;
  }

  // returns the ultimate parent of the node.
  find(x) {
    if (this.parents[x] !== x) {
      this.parents[x] = this.find(this.parents[x]);
    }
    return this.parents[x];
  }

  // method to combine two nodes by rank.
  unionByRank(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);

    if (rootX === rootY) return;

    if (this.ranks[rootX] < this.ranks[rootY]) {
      this.parents[rootX] = rootY;
    } else if (this.ranks[rootX] > this.ranks[rootY]) {
      this.parents[rootY] = rootX;
    } else {
      this.parents[rootY] = rootX;
      this.ranks[rootX]++;
    }
  }

  // method to combine two nodes by size.
  unionBySize(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);

    if (rootX === rootY) return;

    if (this.sizes[rootX] < this.sizes[rootY]) {
      [rootX, rootY] = [rootY, rootX];
    }

    this.parents[rootY] = rootX;
    this.sizes[rootX] += this.sizes[rootY];
  }
}

//   // Example usage:
//   const ds = new DisjointSet();
//   ds.makeSet(1);
//   ds.makeSet(2);
//   ds.makeSet(3);

//   ds.unionByRank(1, 2);
//   ds.unionByRank(2, 3);

//   console.log(ds.find(1)); // Output: 1
//   console.log(ds.find(2)); // Output: 1
//   console.log(ds.find(3)); // Output: 1

//   ds.makeSet(4);
//   ds.makeSet(5);

//   ds.unionBySize(4, 5);
//   ds.unionBySize(1, 4);

//   console.log(ds.find(4)); // Output: 1
//   console.log(ds.find(5)); // Output: 1
//   console.log(ds.sizes[1]); // Output: 5
