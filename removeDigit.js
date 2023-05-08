var removeDigit = function (number = "", digit = "") {
  let max = Number.MIN_VALUE;

  for (let index = 0; index < number.length; index++) {
    const element = number[index];

    if (element === digit) {
      max = Math.max(
        max,
        number.substring(0, index) + number.substring(index + 1)
      );
    }
  }

  Math.max;

  return max;
};

console.log(removeDigit("123", "3"));

console.log(removeDigit("1231", "1"));

console.log(removeDigit("551", "5"));
console.log(
  removeDigit(
    "2998589353917872714814599237991174513476623756395992135212546127959342974628712329595771672911914471",
    "3"
  )
);
