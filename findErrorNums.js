const findErrorNums = function (nums = []) {
  nums = nums.sort((a, b) => a - b);
  let firstPointer = 0;
  let lastPointer = nums.length;
  let missing = 1;
  while (firstPointer <= lastPointer) {
    let findItem = Math.floor((firstPointer + lastPointer) / 2);

    if (nums[findItem] === nums[findItem + 1]) {
      return [nums[findItem], nums[findItem] + 1];
    } else if (findItem < 0) {
      firstPointer++;
    } else {
      lastPointer--;
    }
  }

  return [];
};
console.log(findErrorNums([1, 2, 2, 4]));
console.log(findErrorNums([1, 1]));
console.log(findErrorNums([2, 2]));
