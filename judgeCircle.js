const judgeCircle = function (moves = "") {
  const directions = {
    R: 1,
    L: -1,
    U: 1,
    D: -1,
  };

  let initialPosition = [0, 0];

  for (let index = 0; index < moves.length; index++) {
    const char = moves[index];
    let x = initialPosition[0];
    let y = initialPosition[1];

    if (char === "U") y += directions[char];
    if (char === "D") y += directions[char];
    if (char === "L") x += directions[char];
    if (char === "R") x += directions[char];

    initialPosition = [x, y];
  }

  return initialPosition;
};

judgeCircle("UD");
