const firstUniqChar = function (s = "") {
  const hash = new Map();

  for (let index = 0; index < s.length; index++) {
    const char = s[index];

    if (!hash.has(char)) {
      hash.set(char, 1);
    } else {
      let value = hash.get(char) + 1;
      hash.delete(char);
      hash.set(char, value);
    }
  }

  for (const [key, value] of hash.entries()) {
    if (value === 1) return s.indexOf(key);
  }

  return -1;
};

console.log(firstUniqChar("leetcode"));
