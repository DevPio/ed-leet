function windowedSlice(arr, size) {
  let result = [];
  arr.some((el, i) => {
    if (i + size > arr.length) return true;
    result.push(arr.slice(i, i + size));
  });
  return result;
}
var checkSubarraySum = function (nums, k) {
  const checkSubarraySumHelp = (nums, n) => {
    if (n === 0) return false;

    let items = windowedSlice(nums, n);

    for (let index = 0; index < items.length; index++) {
      const numbers = items[index];

      const sum = numbers.reduce((acc, number) => acc + number, 0);

      if (sum % k === 0) return true;
    }

    return checkSubarraySumHelp(nums, n - 1);
  };

  return checkSubarraySumHelp(nums, k);
};
