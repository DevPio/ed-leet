const fixedPoint = (arr) => {
  for (let index = 0; index < arr.length; index++)
    if (arr[index] === index) return index;

  return -1;
};
