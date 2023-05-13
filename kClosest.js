var kClosest = function (points = [[]], k) {
  let items = [];
  for (let index = 0; index < array.length; index++) {
    const [x, y] = points[index];
    let result = Math.sqrt(Math.pow(x - 0, 2) + Math.pow(y - 0, 2));
    items.push({
      val: result,
      value: [x, y],
    });
  }

  items = items.sort((a, b) => a.val - b.val);

  console.log(items.map((item) => item.value));
};
