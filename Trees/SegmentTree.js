// Segment Tree with range sum query and range add updates (lazy propagation)
// Usage: const st = new SegmentTree(array); st.rangeSum(l, r); st.updateRange(l, r, add);

class SegmentTree {
  constructor(arr) {
    this.n = arr.length
    this.tree = new Array(this.n * 4).fill(0)
    this.lazy = new Array(this.n * 4).fill(0)
    this._build(1, 0, this.n - 1, arr)
  }

  _build(node, l, r, arr) {
    if (l === r) {
      this.tree[node] = arr[l]
      return
    }
    const mid = (l + r) >> 1
    this._build(node << 1, l, mid, arr)
    this._build((node << 1) | 1, mid + 1, r, arr)
    this.tree[node] = this.tree[node << 1] + this.tree[(node << 1) | 1]
  }

  _apply(node, l, r, add) {
    this.tree[node] += add * (r - l + 1)
    this.lazy[node] += add
  }

  _push(node, l, r) {
    const add = this.lazy[node]
    if (add !== 0 && l !== r) {
      const mid = (l + r) >> 1
      this._apply(node << 1, l, mid, add)
      this._apply((node << 1) | 1, mid + 1, r, add)
      this.lazy[node] = 0
    } else if (l === r) {
      this.lazy[node] = 0
    }
  }

  updateRange(ql, qr, add) {
    this._updateRange(1, 0, this.n - 1, ql, qr, add)
  }

  _updateRange(node, l, r, ql, qr, add) {
    if (ql > r || qr < l) return
    if (ql <= l && r <= qr) {
      this._apply(node, l, r, add)
      return
    }
    this._push(node, l, r)
    const mid = (l + r) >> 1
    this._updateRange(node << 1, l, mid, ql, qr, add)
    this._updateRange((node << 1) | 1, mid + 1, r, ql, qr, add)
    this.tree[node] = this.tree[node << 1] + this.tree[(node << 1) | 1]
  }

  rangeSum(ql, qr) {
    return this._rangeSum(1, 0, this.n - 1, ql, qr)
  }

  _rangeSum(node, l, r, ql, qr) {
    if (ql > r || qr < l) return 0
    if (ql <= l && r <= qr) return this.tree[node]
    this._push(node, l, r)
    const mid = (l + r) >> 1
    return (
      this._rangeSum(node << 1, l, mid, ql, qr) +
      this._rangeSum((node << 1) | 1, mid + 1, r, ql, qr)
    )
  }
}

export { SegmentTree }