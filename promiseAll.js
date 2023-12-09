const promiseAll = (functions = []) => {
  return new Promise((resolve, reject) => {
    if (functions.length === 0) {
      resolve([]);
      return;
    }
    const results = [];
    let counter = 0;
    functions.forEach(async (currentFunction, idx) => {
      try {
        const el = await currentFunction();

        results[idx] = el;
        counter++;
        if (counter === functions.length) {
          resolve(results);
        }
      } catch (error) {
        reject(error);
      }
    });

    return results;
  });
};

Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) resolve([]);

    promises.forEach(async (promise) => {
      try {
        const res = await promise;

        resolve(res);
      } catch (error) {
        reject(error);
      }
    });
  });
};

Promise.myAny = function (promises = []) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) resolve([]);

    let counter = 0;
    let counterResut = 0;
    let result = [];
    promises.forEach(async (promise) => {
      try {
        const res = await promise;

        counterResut++;
        if (counterResut === promises.length) {
          resolve(result);
        }
        resolve(res);
      } catch (error) {
        counter++;
        if (counter === promises.length) {
          reject("all promises rejected");
        }
      }
    });
  });
};

Promise.myAll = async function (promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      resolve([]);
      return;
    }
    const results = [];
    let counter = 0;
    promises.forEach(async (currentFunction, idx) => {
      try {
        const el = await currentFunction;

        results[idx] = el;
        counter++;
        if (counter === promises.length) {
          resolve(results);
        }
      } catch (error) {
        reject(error);
      }
    });

    return results;
  });
};

Promise.myAllSettled = function (promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      resolve([]);
      return;
    }
    const results = [];
    let counter = 0;
    promises.forEach(async (currentFunction, idx) => {
      try {
        const el = await currentFunction;

        results[idx] = {
          status: "fulfilled",
          value: el,
        };
        counter++;
        if (counter === promises.length) {
          resolve(results);
        }
      } catch (error) {
        results[idx] = {
          status: "rejected",
          reason: error,
        };
        counter++;
        if (counter === promises.length) {
          resolve(results);
        }
      }
    });
  });
};
