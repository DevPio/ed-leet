const isHappy = (num) => {
  let numberHappy = num;
  let digits = [];

  let sequence = new Map();
  while (numberHappy != 0) {
    digits.push(numberHappy % 10);
    numberHappy = Math.trunc(numberHappy / 10);

    if (numberHappy !== 0) continue;

    const sum = digits.reduce((acc, item) => acc + Math.pow(item, 2), 0);
    if (sequence.has(sum)) return false;
    if (sum === 1) return true;

    sequence.set(sum, sum);
    numberHappy = sum;
    digits = [];
  }
};

console.log(isHappy(19));
console.log(isHappy(2));
