const out = (param) => (!param ? "" : param);
const mergeAlternately = (word1 = "", word2 = "") => {
  let max = Math.max(word1.length, word2.length);

  let output = "";
  for (let index = 0; index < max; index++) {
    output += out(word1[index]) + out(word2[index]);
  }

  return output;
};
