//REFAZER VERGONHOSO

var distributeCandies = function (candyType) {
  let iterator = candyType.length / 2;
  candyType = [...new Set(candyType)];
  const hash = new Map();
  for (let index = 0; index < iterator; index++) {
    hash.set(candyType[index], candyType[index]);
  }

  return hash.size;
};

distributeCandies([1, 1, 2, 2, 3, 3]);
