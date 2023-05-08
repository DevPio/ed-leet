const findContentChildren = (g = [], s = []) => {
  g = g.sort((a, b) => a - b);
  s = s.sort((a, b) => a - b);
  let match = 0;
  let ind = 0;
  let lenghS = s.length;
  for (let i = 0; i < g.length && ind < lenghS; i++) {
    if (s[ind] >= g[i]) {
      match++;
      ind++;
      s[j] = 0;

      break;
    }
  }

  return match;
};
