// const decodeString = function (s = "") {
//   s = s.replace(/\[/g, "(").replace(/\]/g, ")");
//   let match = s.match(
//     /\d+\((?:[^)(]|\((?:[^)(]|\((?:[^)(]|\([^)(]*\))*\))*\))*\)/
//   );

//   while (match.length > 0) {
//     match = s.match(
//       /\d+\((?:[^)(]|\((?:[^)(]|\((?:[^)(]|\([^)(]*\))*\))*\))*\)/
//     );

//     if (!match) break;

//     let number = Number(match[0].match(/\d+/)[0]);
//     let char = match[0].replace(number, "");

//     s = s.replace(match[0], char.repeat(number));
//   }

//   return s.replace(/\(|\)/g, "");
// };

const decodeString = (string = "") => {
  const stack = [];
  let secondStack = [];
  do {
    for (let index = 0; index < string.length; index++) {
      const char = string[index];

      if (char === "]") {
        let mountChar = [];
        let currentChar = stack.pop();

        mountChar.unshift(currentChar);
        let currentString = "";
        while (!Number(currentChar)) {
          if (currentChar !== "[") {
            currentString += currentChar;
          }
          currentChar = stack.pop();
          mountChar.unshift(currentChar);
        }
        mountChar.push("]");
        console.log(mountChar);
        string = string.replace(
          mountChar.join(""),
          currentString.repeat(Number(currentChar))
        );
        secondStack.push(
          ...currentString.repeat(Number(currentChar)).split("")
        );
      } else {
        stack.push(char);
      }
    }
  } while (stack.length > 0);

  console.log(buildString);
};
//console.log(decodeString("3[z]2[2[y]pq4[2[jk]e1[f]]]ef"));
//console.log(decodeString("100[leetcode]"));
//console.log(decodeString("3[a]2[bc]"));
console.log(decodeString("3[a2[bc]]"));
