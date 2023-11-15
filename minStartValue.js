const minStartValue = (nums = []) => {
  let counter = 1;

  while (true) {
    const items = [];

    const initialValues = [counter + nums[0]];

    for (let index = 1; index < nums.length; index++) {
      const element = nums[index];

      const sum = initialValues[initialValues.length - 1] + element;

      if (sum < 1) break;
      initialValues.push(sum);
    }

    if (initialValues.length === nums.length) break;

    counter++;
  }

  return counter;
};

minStartValue([-3, 2, -3, 4, 2]);
