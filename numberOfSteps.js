const numberOfSteps = function (num) {
  let reduce = 0;

  while (num > 0) {
    reduce++;

    if (num % 2 === 0) {
      num = Math.floor(num / 2);
      continue;
    }

    num -= 1;
  }

  return reduce;
};

numberOfSteps(14);
