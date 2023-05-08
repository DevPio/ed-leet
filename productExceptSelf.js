const product = (array = []) => {
  return array.reduce((acc, number) => acc * number, 1);
};

const productExceptSelf = function (nums = []) {
  const productArray = [];

  for (let i = 0; i < nums.length; i++) {
    const result = product(nums.filter((number, index) => index !== i));

    productArray.push(result);
  }

  return productArray;
};

console.log(productExceptSelf([1, 2, 3, 4]));
