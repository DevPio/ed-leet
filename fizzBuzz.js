const fizzBuzz = function (n) {
  let items = [];
  for (let index = 1; index <= n; index++) {
    if (!(index % 3) && !(index % 5)) {
      items.push("FizzBuzz");
      continue;
    }

    if (!(index % 3)) {
      items.push("Fizz");
      continue;
    }

    if (!(index % 5)) {
      items.push("Buzz");
      continue;
    }

    items.push(index.toString());
  }

  return items;
};

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
