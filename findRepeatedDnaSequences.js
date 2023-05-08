/**
 * @param {string} s
 * @return {string[]}
 */
function valid(s = "") {
  let chars = {
    A: "",
    C: "",
    G: "",
    T: "",
  };
  for (let index = 0; index < s.length; index++) {
    if (s[index] in chars) {
      if (typeof chars[s[index]] !== "number") {
        chars[s[index]] = index;
      } else {
        if (!(chars[s[index]] + 1 === index)) return false;
        chars[s[index]] = index;
      }
    }
  }

  return true;
}

function windowedSlice(arr, size) {
  let result = [];
  arr.some((el, i) => {
    if (i + size > arr.length) return true;
    result.push(arr.slice(i, i + size));
  });
  return result;
}
const findRepeatedDnaSequences = function (s = "") {
  const map = new Map();
  const slice = windowedSlice(s.split(""), 10);

  slice
    .map((n) => n.join(""))
    .forEach((n) => {
      if (!map.has(n)) {
        map.set(n, 1);
      } else {
        const counter = map.get(n);
        map.set(n, counter + 1);
      }
    });

  let items = [];

  if (s.length < 10) return [];
  if (slice.length === 1) {
    return [slice[0].join("")];
  }
  [...map.entries()].filter(([key, value]) => {
    if (value >= 2 && valid(key)) items.push(key);
  });

  return items;
};

console.log(findRepeatedDnaSequences("GAGAGAGAGAGA"));

// const map = new Map();
// windowedSlice("AAAAACCCCCAAAAACCCCCAAAAAGGGTTT".split(""), 10)
//   .map((n) => n.join(""))
//   .forEach((n) => {
//     if (!map.has(n)) {
//       map.set(n, 1);
//     } else {
//       const counter = map.get(g);
//       map.set(n, counter + 1);
//     }
//   });

//console.log(valid("AAAAAAAAAA"));
//console.log(valid("AAAAACCCCC"));
