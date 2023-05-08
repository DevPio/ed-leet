var isAnagram = function (s = "", t = "") {
  let index = 0;
  let char = {};
  let length = Math.max(s.length, t.length);
  let currentString = s.length > t.length ? s : t;
  while (index < length) {
    if (currentString[index] in char) {
      index++;
      continue;
    }
    const regex = new RegExp(`${currentString[index]}`, "gi");
    let smatch = s.match(regex);
    let tmatch = t.match(regex);

    char[currentString[index]] = currentString[index];
    if (!smatch || !tmatch || smatch.length !== tmatch.length) return false;

    index++;
  }
  return true;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
