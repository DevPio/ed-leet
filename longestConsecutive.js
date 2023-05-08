const longestConsecutive = (nums) => {
  nums = nums.sort((a, b) => a - b);

  if (nums.length === 0) return 0;
  let max = null;
  let sequence = 0;
  for (let index = 0; index < nums.length - 1; index++) {
    const element = nums[index];
    const next = nums[index + 1];
    if (element == next - 1) {
      sequence++;
    } else {
      max = Math.max(max, sequence);
      sequence = 0;
    }
  }
  max = Math.max(max, sequence);
  console.log(max);
};

longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]);
