const maxPower = (s = "") => {
  const hash = new Map();
  let max = null;
  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    if (!hash.has(element)) {
      hash.set(element, {
        index,
        number: 1,
      });
      continue;
    }

    const number = hash.get(element);

    if (number.index == index - 1) {
      hash.set(element, {
        index,
        number: number.number + 1,
      });
    }

    if (!(number.index == index - 1)) {
      hash.set(element, {
        index,
        number: 1,
      });
    }

    if (element !== s[index + 1] && index !== s.length - 1) {
      max = Math.max(max, hash.get(element).number);
    }
    if (index == s.length - 1) {
      max = Math.max(max, hash.get(element).number);
    }
  }
  console.log(hash);
  if (new Set(s).size == 1) return hash.get(s[0]).number;
  if (max == null) return 1;
  return max;
};
