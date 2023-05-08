const findDuplicate = function (nums = []) {
  let numbers = nums.sort((a, b) => a - b);

  for (let index = 0; index < numbers.length - 1; index++) {
    if (numbers[index] === numbers[index + 1]) return numbers[index];
  }

  return -1;
};
console.log(findDuplicate([4, 3, 1, 4, 2]));
