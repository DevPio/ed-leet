const longestOnes = (nums = [], k) => {
  const maxSliding = Math.ceil(nums.length / 2);

  for (let right = 0; right < nums.length && right < maxSliding; right++) {
    let pointer = right;
    let counter = 0;
    const items = [];
    while (counter < maxSliding) {
      items.push(nums[pointer]);
      pointer++;
      counter++;
    }

    console.log(items);
  }
};

longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2);
