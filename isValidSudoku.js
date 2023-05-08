const valid = (board = [[]], i, j, element, staticI, staticJ) => {
  if (i < 0 || i >= board.length || j < 0 || j >= board[i].length) {
    return true;
  }

  if (j === staticJ && staticI !== i && board[i][j] === element) {
    return false;
  }

  if (j !== staticJ && staticI === i && board[i][j] === element) {
    return false;
  }

  return (
    valid(board, i + 1, j, element, staticI, staticJ) &&
    valid(board, i, j - 1, element, staticI, staticJ)
  );
};

//============= ACHAR UM MODO DE SEPARAR OS QUADRANTES EM HASHS

const valids = (board = [[]], i, j, element, staticI, staticJ) => {
  if (i < 0 || i >= board.length || j < 0 || j >= board[i].length) {
    return true;
  }

  if (j === staticJ && staticI !== i && board[i][j] === element) {
    return false;
  }

  if (j !== staticJ && staticI === i && board[i][j] === element) {
    return false;
  }
  return (
    valids(board, i - 1, j, element, staticI, staticJ) &&
    valids(board, i, j + 1, element, staticI, staticJ)
  );
};

const isValidSudoku = function (board = [[]]) {
  const hash = {};

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const element = board[i][j];
      if (element !== ".") {
        let idx = (i / 3) * 3 + j / 3;
        console.log(i / 3, j / 3, element);
        //console.log(idx, element);
        if (hash[idx] && hash[Math.floor(idx)].includes(element)) return false;
        if (!hash[idx]) hash[Math.floor(idx)] = [];
        else hash[idx].push(element);
        if (
          !valid(board, i, j, element, i, j) ||
          !valids(board, i, j, element, i, j)
        )
          return false;
      }
    }
  }

  return true;
};

// isValidSudoku([
//   ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//   ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//   [".", "9", "8", ".", ".", ".", ".", "6", "."],
//   ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//   ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//   ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//   [".", "6", ".", ".", ".", ".", "2", "8", "."],
//   [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//   [".", ".", ".", ".", "8", ".", ".", "7", "9"],
// ]);

// isValidSudoku([
//   ["8", "3", ".", ".", "7", ".", ".", ".", "."],
//   ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//   [".", "9", "8", ".", ".", ".", ".", "6", "."],
//   ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//   ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//   ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//   [".", "6", ".", ".", ".", ".", "2", "8", "."],
//   [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//   [".", ".", ".", ".", "8", ".", ".", "7", "9"],
// ]);

console.log(
  isValidSudoku([
    [".", ".", ".", ".", "5", ".", ".", "1", "."],
    [".", "4", ".", "3", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "3", ".", ".", "1"],
    ["8", ".", ".", ".", ".", ".", ".", "2", "."],
    [".", ".", "2", ".", "7", ".", ".", ".", "."],
    [".", "1", "5", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "2", ".", ".", "."],
    [".", "2", ".", "9", ".", ".", ".", ".", "."],
    [".", ".", "4", ".", ".", ".", ".", ".", "."],
  ])
);
