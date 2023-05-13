const leftRigthDifference = (nums = []) => {
  const left = [0];
  const right = [0];
  for (let index = 0; index < nums.length - 1; index++) {
    left.push(left[index] + nums[index]);
    let j = nums.length - 1 - index;
    right.unshift(nums[j] + right[0]);
  }
  const result = [];
  for (let index = 0; index < nums.length; index++) {
    result.push(left[index] - right[right]);
  }

  return result;
};

leftRigthDifference([10, 4, 8, 3]);
