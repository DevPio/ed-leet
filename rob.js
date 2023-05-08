const slideRobMult = (nums = [], currentIndex = 0) => {
  return Math.max(
    slideRobMult(nums, staticNum, currentIndex + 1),
    slideRobMult(nums, staticNum, currentIndex + 2),
    nums[currentIndex]
  );
};

const rob = (nums = []) => {
  return slideRobMult(nums);
};

console.log(rob([1]));
