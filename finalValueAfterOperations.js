const finalValueAfterOperations = (operations = []) => {
  let counter = 0;
  for (let index = 0; index < operations.length; index++) {
    const element = operations[index];

    if (element[0] === "+" || element[element.length - 1] === "+") {
      counter++;
    } else {
      counter--;
    }
  }

  return counter;
};
