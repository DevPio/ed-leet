var flat = function (arr = [], n) {
  let iterator = 0;

  while (n > iterator) {
    let isContainsArray = false;
    arr = arr.flatMap((n) => {
      if (Array.isArray(n)) isContainsArray = true;
      return n;
    });

    if (!isContainsArray) break;
    iterator++;
  }

  return arr;
};
console.log(
  [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]].flat(100)
);
console.log(
  flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 10000)
);
