const sumOfUnique = function (nums = []) {
  const hash = new Map();

  nums.forEach((number) => {
    if (!hash.has(number)) {
      hash.set(number, 1);
    } else {
      hash.set(number, hash.get(number) + 1);
    }
  });

  return [...hash.entries()].reduce((acc, dicionary) => {
    let [key, value] = dicionary;

    if (value === 1) return acc + key;

    return acc;
  }, 0);
};

console.log(sumOfUnique([1, 2, 3, 2]));
