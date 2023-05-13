var shuffle = function (nums, n) {
  let items = [];
  for (let index = 0; index < n; index++) {
    items.push(nums[index], nums[index + n]);
  }

  return items;
};

let count = (string = "") => {
  let count = 0;
  for (let index = 0; index < string.length; index++) {
    const element = string[index];
    if (element == " ") {
      count++;
    }
  }

  return count;
};

new Set().has;
