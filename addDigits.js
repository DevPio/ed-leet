const addDigits = (num) => {
  let currentNum = num;
  let sum = 0;

  while (currentNum > 0) {
    let digit = currentNum % 10;

    sum += digit;
    currentNum = Math.trunc(currentNum / 10);

    if (!currentNum && Math.floor(Math.log10(sum)) + 1 === 1) return sum;

    if (!currentNum) {
      currentNum = sum;
      sum = 0;
    }
  }

  return sum;
};

console.log(addDigits(38));
console.log(addDigits(0));
