const longestCommonPrefix = function (strs = []) {
  let currentString = strs[0];

  let prefix = "";
  for (let i = 0; i < currentString.length; i++) {
    const char = currentString[i];

    for (let j = 0; j < strs.length; j++) {
      const charArray = strs[j][i];
      if (char !== charArray) return prefix;
    }

    prefix += char;
  }

  return prefix;
};

//console.log(longestCommonPrefix(["flower", "flow", "flight"]));
//console.log(longestCommonPrefix(["dog", "racecar", "car"]));
//console.log(longestCommonPrefix(["aa"]));
