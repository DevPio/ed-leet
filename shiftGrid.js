//===================== PENDENTE DE RESOLVER ==============================
const shiftGrid = (grid, k) => {
  let nextElement;
  let lastElement;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (j === 0) {
        let element = grid[i][j];
        nextElement = grid[i][j + 1];
        grid[i][j + 1] = element;

        continue;
      }

      let getELement = grid[i][j + 1];
      if (!getELement) continue;
      grid[i][j + 1] = nextElement;
      nextElement = getELement;

      if (j + 1 === grid[i].length - 1 && i > 0) {
        grid[i][0] = lastElement;
      }
      if (j + 1 === grid[i].length - 1) {
        lastElement = nextElement;
      }

      if (i === grid.length - 1 && j + 1 === grid[i].length - 1) {
        grid[0][0] = lastElement;
      }
    }
  }
  return grid;
};

shiftGrid([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

shiftGrid([[1], [2], [3], [4], [7], [6], [5]]);
