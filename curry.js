const curry = (fn) => {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }

    return (...nextArgs) => curried(...args, ...nextArgs);
  };
};

const fn = function sum(a, b, c) {
  return a + b + c;
};

const curriedSum = curry(fn);
console.log(curriedSum(1)(2)(3)(4));
