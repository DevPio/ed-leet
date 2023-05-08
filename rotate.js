const rotate = (nums = [], k) => {
  let copy = [...nums];
  for (let i = 0; i < k; i++) {
    let previus = nums[nums.length - 1];
    for (let index = 0; index < copy.length - 1; index++) {
      const temp = nums[index];
      nums[index] = previus;
      previus = temp;
    }
  }

  return nums;
};

rotate([1, 2, 3, 4, 5, 6, 7], 3);

7;
1;

7;
1;

2;

1;
