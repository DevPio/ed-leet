const sumDigit = (num) => {
  let digit = num;
  let sum = 0;
  while (digit !== 0) {
    let module = digit % 10;
    sum += module;
    digit = Math.floor(digit / 10);
  }

  return sum;
};

const differenceOfSum = (nums = []) => {
  let firstSum = nums.reduce((acc, number) => acc + number, 0);
  let secondSum = nums.reduce((acc, number) => acc + number, 0);
  return firstSum + secondSum;
};
