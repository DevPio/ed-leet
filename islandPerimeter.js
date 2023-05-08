const islandPerimeter = (grid = [[]]) => {
  let total = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        let perimeter = 4;
        if (grid[i - 1] && grid[i - 1][j] === 1) {
          perimeter--;
        }
        if (grid[i + 1] && grid[i + 1][j] === 1) {
          perimeter--;
        }
        if (grid[i][j + 1] === 1) perimeter--;
        if (grid[i][j - 1] === 1) perimeter--;

        total += perimeter;
      }
    }
  }

  return total;
};

islandPerimeter([
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
]);

islandPerimeter([[1]]);
islandPerimeter([[1, 0]]);
