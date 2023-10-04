function printDivisors(n) {
    const v = [];
    for (let i = 1; i * i <= n; i++) {
      if (n % i === 0) {
        if (n / i !== i) {
          v.push(i);
          const x = n / i;
          v.push(x);
        } else {
          v.push(i);
        }
      }
    }
    v.sort((a, b) => a - b);
    return v;
  }
  