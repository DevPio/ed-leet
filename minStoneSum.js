const minStoneSum = (piles = [], k) => {
  piles.sort((a, b) => b - a);
  let total = piles.reduce((total, pile) => pile + total, 0);

  for (let index = 0; index < k; index++) {
    const max = piles[index];

    total -= max - Math.floor(max / 2);
  }
  return total;
};

minStoneSum([5, 4, 9], 2);
minStoneSum([4, 3, 6, 7], 3);
