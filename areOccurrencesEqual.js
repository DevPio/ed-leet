const areOccurrencesEqual = (s) => {
  const hash = new Map();
  for (let index = 0; index < s.length; index++) {
    if (hash.has(s[index])) {
      let number = hash.get(s[index]);

      hash.delete(s[index]);

      hash.set(s[index], number + 1);

      continue;
    }
    hash.set(s[index], 0);
  }

  return new Set(hash.values()).size === 1;
};
