const thirdMax = (nums = []) => {
  nums = [...new Set(nums)];
  if (nums.length < 3) return Math.max(...nums);

  nums = nums.sort((a, b) => b - a);

  let min = nums[0];
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];

    if (element < min) min = element;
    if (index == 2) return min;
  }
  return min;
};

thirdMax([1, 2, 2, 5, 3, 5]);
