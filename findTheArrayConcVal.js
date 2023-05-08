const findTheArrayConcVal = function (nums = []) {
  let firstPointer = 0;
  let lastPointer = nums.length - 1;
  let result = 0;
  while (firstPointer < lastPointer) {
    let firstNumber = nums[firstPointer].toString();
    let lastNumber = nums[lastPointer].toString();

    result += Number(firstNumber + lastNumber);
    firstPointer++;
    lastPointer--;
  }

  const module = nums.length % 2;
  if (module !== 0) {
    let mid = Math.floor(nums.length / 2);
    result += nums[mid];
  }

  return result;
};
findTheArrayConcVal([7, 52, 2, 4]);

findTheArrayConcVal([5, 14, 13, 8, 12]);
