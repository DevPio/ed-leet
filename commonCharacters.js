function commonCharacters(strings = []) {
  let set = new Set(strings.join(""));
  let keys = {};

  set.forEach((key) => {
    for (let index = 0; index < strings.length; index++) {
      if (!keys[key]) keys[key] = 0;

      if (strings[index].includes(key)) {
        keys[key] += 1;
      }
    }
  });
  let results = [];

  Object.keys(keys).forEach((key) => {
    if (keys[key] === strings.length) {
      results.push(key);
    }
  });
  return results;
}

console.log(commonCharacters(["abc", "bcd", "cbaccd"]));
