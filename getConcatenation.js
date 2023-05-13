var getConcatenation = function (nums = []) {
  let arr = new Array(nums.length * 2);

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    arr[index] = element;
  }
  let counter = 1;
  for (let index = nums.length; index < nums.length * 2; index++) {
    let i = (counter % (nums.length + 1)) - 1;
    console.log(i);
    const element = nums[i];
    arr[index] = element;

    counter++;
  }
  return arr;
};

getConcatenation([1, 2, 1]);
