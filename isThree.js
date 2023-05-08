const isThree = function (n) {
  let divisors = 0;

  for (let index = 1; index <= n; index++) {
    if (n % index === 0) divisors++;
  }

  return divisors === 3;
};
