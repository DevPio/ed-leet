const arraySign = (nums = []) => {
  const product = nums.reduce((acc, number) => (acc = acc * number));

  if (product > 0) return 1;

  if (product < 0) return -1;

  return 0;
};

console.log(arraySign([-1, -2, -3, -4, 3, 2, 1]));
