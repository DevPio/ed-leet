var timeLimit = function (fn, t) {
  const comparePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("first");
    }, t);
  });
  return async function (...args) {
    const resolve = await Promise.race([comparePromise, fn.apply(null, args)]);

    if (resolve === "first") return "Time Limit Exceeded";

    return resolve;
  };
};

timeLimit(async (n) => {
  await new Promise((res) => setTimeout(res, 10));
  return n * n;
}, 50)(5);
