/**
 * According to Wikipedia, Multi-key quicksort, also known as three-way radix
 * quicksort, is an algorithm for sorting strings. This hybrid of quicksort and
 * radix sort was originally suggested by P. Shackleton, as reported in one of
 * C.A.R. Hoare's seminal papers on quicksort its modern incarnation was
 * developed by Jon Bentley and Robert Sedgewick in the mid-1990s.The algorithm
 * is designed to exploit the property that in many problems, strings tend to
 * have shared prefixes.
 *
 * This current implement is actually translated from its Java counterpart based
 * on the implementation by Nathan Fiedler in which the implementation was translated
 * from C in the paper "Fast algorithms for sorting and searching strings" paper
 * published in 1997.
 *
 *
 * @author Jian Liew
 */

/**
 * This function will sort the array in place.
 *
 * @param {*} The array of Strings to be sorted
 *
 */
function multiKeyQuickSort(strings) {
  if (strings != null && strings.length > 1) {
    ssort(strings, 0, strings.length, 0);
  }
}

function vecSwap(a, i, j, n) {
  while (n-- > 0) {
    const t = a[i];
    a[i] = a[j];
    a[j] = t;
    i++;
    j++;
  }
}

function sort(strings, low, high, depth) {
  if (
    strings != null &&
    strings.length > 1 &&
    low >= 0 &&
    low < high &&
    depth >= 0
  ) {
    ssort(strings, low, high - low, depth);
  }
}

function insertionSort(strings, low, high, depth) {
  if (strings == null || low < 0 || high <= low || depth < 0) {
    return;
  }
  for (let i = low + 1; i < high; i++) {
    for (let j = i; j > low; j--) {
      let idx = depth;
      let s = idx < strings[j - 1].length ? strings[j - 1].charAt(idx) : 0;
      let t = idx < strings[j].length ? strings[j].charAt(idx) : 0;
      while (s == t && idx < strings[j - 1].length) {
        idx++;
        s = idx < strings[j - 1].length ? strings[j - 1].charAt(idx) : 0;
        t = idx < strings[j].length ? strings[j].charAt(idx) : 0;
      }
      if (s <= t) {
        break;
      }
      let tmp = strings[j];
      strings[j] = strings[j - 1];
      strings[j - 1] = tmp;
    }
  }
}

function ssort(a, base, n, depth) {
  const THRESHOLD = 16;

  if (n < THRESHOLD) {
    insertionSort(a, base, base + n, depth);
    return;
  }
  let pl = base;
  let pm = base + n / 2;
  let pn = base + n - 1;
  let r;
  if (n > 30) {
    let d = n / 8;
    pl = med3(a, base, base + d, base + 2 * d, depth);
    pm = med3(a, base + n / 2 - d, pm, base + n / 2 + d, depth);
    pn = med3(a, base + n - 1 - 2 * d, base + n - 1 - d, pn, depth);
  }

  pm = med3(a, pl, pm, pn, depth);
  let t = a[base];
  a[base] = a[pm];
  a[pm] = t;
  let v = charAt(a[base], depth);
  let allzeros = v == 0;
  let le = base + 1,
    lt = le;
  let gt = base + n - 1,
    ge = gt;
  while (true) {
    for (; lt <= gt && (r = charAt(a[lt], depth) - v) <= 0; lt++) {
      if (r == 0) {
        t = a[le];
        a[le] = a[lt];
        a[lt] = t;
        le++;
      } else {
        allzeros = false;
      }
    }
    for (; lt <= gt && (r = charAt(a[gt], depth) - v) >= 0; gt--) {
      if (r == 0) {
        t = a[gt];
        a[gt] = a[ge];
        a[ge] = t;
        ge--;
      } else {
        allzeros = false;
      }
    }
    if (lt > gt) {
      break;
    }
    t = a[lt];
    a[lt] = a[gt];
    a[gt] = t;
    lt++;
    gt--;
  }
  pn = base + n;
  r = Math.min(le - base, lt - le);

  vecSwap(a, base, lt - r, r);
  r = Math.min(ge - gt, pn - ge - 1);
  vecSwap(a, lt, pn - r, r);
  if ((r = lt - le) > 1) {
    ssort(a, base, r, depth);
  }
  if (!allzeros) {
    ssort(a, base + r, le + n - ge - 1, depth + 1);
  }
  if ((r = ge - gt) > 1) {
    ssort(a, base + n - r, r, depth);
  }
}

function med3(a, l, m, h, depth) {
  console.log(a, l, m, h, depth);
  let va = charAt(a[l], depth);
  let vb = charAt(a[m], depth);
  if (va == vb) {
    return l;
  }
  let vc = charAt(a[h], depth);
  if (vc == va || vc == vb) {
    return h;
  }
  return va < vb
    ? vb < vc
      ? m
      : va < vc
      ? h
      : l
    : vb > vc
    ? m
    : va < vc
    ? l
    : h;
}

function charAt(s, d) {
  console.log(s);

  return d < s.length ? s.charAt(d) : 0;
}

// Test case 1

let unsortedArray = ['apple', 'cat', 'boy'];
let sortedArray = ['apple', 'boy', 'cat'];

multiKeyQuickSort(unsortedArray);
console.log('observed:', unsortedArray, 'expected:', sortedArray);

// Test case 2
let unsortedArray2 = ['z', 'm', '', 'a', 'd', 'tt', 'tt', 'tt', 'foo', 'bar'];
let sortedArray2 = ['', 'a', 'bar', 'd', 'foo', 'm', 'tt', 'tt', 'tt', 'z'];

console.log('observed:', unsortedArray2, 'expected:', sortedArray2);
multiKeyQuickSort(unsortedArray2);

// Test Case 3
let unsortedArray3 = ['aa', 'ad', 'ab', 'boy'];
let sortedArray3 = ['aa', 'ab', 'ad', 'boy'];

multiKeyQuickSort(unsortedArray3);
console.log('observed:', unsortedArray3, 'expected:', sortedArray3);
