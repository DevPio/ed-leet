var reverseString = function (s) {
  let firstPointer = 0;
  let lastPointer = s.length - 1;

  while (firstPointer < lastPointer) {
    const firstElement = s[firstPointer];
    const lasttElement = s[lastPointer];

    s[firstPointer] = lasttElement;
    s[lastPointer] = firstElement;

    firstPointer++;
    lastPointer--;
  }

  return s;
};

const reverseWords = function (s = "") {
  const words = s.trim().split(" ");

  return reverseString(words).join(" ");
};
