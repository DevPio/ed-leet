const fac = (n, max) => {
  if (n === max) return max;

  return n + fac(n + 1, max);
};

const pivotInteger = (n) => {
  const map = new Map();

  for (let index = 1; index <= n; index++) {
    if (fac(0, index) === fac(index, n)) {
      return index;
    }
  }
};

pivotInteger(8);
console.log(fac(0, 3));
console.log(fac(6, 8));
