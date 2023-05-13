const reversePrefix = (word = "", ch = "") => {
  let splitWord = word.split("");
  let index = word.indexOf(ch);
  if (index < 0) return word;
  let firstPointer = 0;
  let lastPointer = index;

  while (firstPointer < lastPointer) {
    const firstElement = splitWord[firstPointer];
    const lasttElement = splitWord[lastPointer];

    splitWord[firstPointer] = lasttElement;
    splitWord[lastPointer] = firstElement;

    firstPointer++;
    lastPointer--;
  }

  return splitWord.join("");
};
