const exist = (board, word = "") => {
  let mount = "";
  let indexWord = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j <= board[i].length; j++) {
      if (board[i].includes(word[indexWord])) {
        mount += word[indexWord];
        board[i].splice(board[i].indexOf(word[indexWord]), 1);
        indexWord++;
      }
    }

    if (mount.toLocaleLowerCase() === word.toLocaleLowerCase()) return true;
  }

  return false;
};

exist([["a", "a"]], "aa");
