const getAverages = (nums = [], k) => {
  const prefix = [nums[0]];

  for (let index = 1; index < nums.length; index++) {
    const element = nums[index];

    prefix.push(element + prefix[prefix.length - 1]);
  }

  const avgs = [];
  for (let index = 0; index < nums.length; index++) {
    if (index - k < 0 || nums.length - 1 - index < k) {
      avgs.push(-1);
      continue;
    }

    let rigthSum = prefix[index + k];

    if (index - k > 0) {
      rigthSum = rigthSum - prefix[index - k - 1];
    }

    avgs.push(Math.trunc(rigthSum / (k * 2 + 1)));
  }

  return avgs;
};

console.log(getAverages([7, 4, 3, 9, 1, 8, 5, 2, 6], 3));

function fn(nums, k) {
  let left = 0;
  let curr = 0;
  let answer = 0;
  for (right = 0; right < nums.length; right++) {
    curr += nums[right];
    while (curr > k) {
      curr -= nums[left];
      left++;
    }

    answer = Math.max(answer, right - left + 1);
  }

  return answer;
}
