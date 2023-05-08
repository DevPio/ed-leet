const cached = {};
const myPow = function (x, n) {
  if (n === 0) {
    return 1;
  }
  if (Math.floor(x) === 0) {
    return 0;
  }
  if (n < 0) {
    return 1 / myPow(x, n * -1);
  }

  return x * myPow(x, n - 1);
};

console.log(myPow(2.0, -2));
//console.log(myPow(0.00001, 2147483647));
//console.log(myPow(2, 2));
