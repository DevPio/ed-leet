const isIsomorphic = (s = "", t = "") => {
  const hash = new Map();
  const inverser = new Map();
  for (let index = 0; index < s.length; index++) {
    if (hash.has(s[index]) && hash.get(s[index]) !== t[index]) return false;

    if (inverser.has(t[index]) && inverser.get(t[index]) !== s[index])
      return false;
    inverser.set(t[index], s[index]);
    hash.set(s[index], t[index]);
  }

  return true;
};
