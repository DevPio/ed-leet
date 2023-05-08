const isSubsequence = (s = "", t = "") => {
  const tSplit = t.split("");
  const split = s.split("");
  let numbers = [];

  for (let index = 0; index < split.length; index++) {
    const element = split[index];
    const indexElement = t.indexOf(element);
    if (indexElement > -1) {
      tSplit.splice(indexElement, 1);
      numbers.push(indexElement);
    } else {
      return false;
    }
  }

  for (let index = 0; index < numbers.length - 1; index++) {
    if (numbers[index] > numbers[index - 1]) return false;
  }

  return true;
};
