function runLengthEncoding(string = "") {
  let result = "";
  let counter = 1;
  let currentChar = "";
  for (let index = 0; index < string.length; index++) {
    const char = string[index];

    if (counter >= 9) {
      currentChar += `${9}${char}`;
      result += currentChar;
      counter = 1;
      currentChar = "";
      continue;
    }

    if (string[index] !== string[index + 1]) {
      currentChar += `${counter}${char}`;
      result += currentChar;
      counter = 1;
      currentChar = "";
      continue;
    }

    counter++;
  }

  return result;
}

runLengthEncoding("AAAAAAAAAAAAABBCCCCDD");
//console.log(
// runLengthEncoding(
//    ";;;;;;;;;;;;''''''''''''''''''''1233333332222211112222111s"//
//  )
//)
