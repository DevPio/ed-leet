const selectionSort = (array = []) => {
  let minIndex = null;
  for (let i = 0; i < array.length; i++) {
    minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    const temp = array[minIndex];

    array[minIndex] = array[i];
    array[i] = temp;
  }

  return array;
};

console.log(selectionSort([1, 2, 3, 4, 5]));
