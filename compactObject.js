const compactObject = (obj) => {
  const dfs = (obj) => {
    if (!obj) return;

    if (typeof obj !== "object") return obj;

    if (Array.isArray(obj)) {
      const newArray = [];
      for (const item of obj) {
        const keyIsValid = dfs(item);

        if (keyIsValid) {
          newArray.push(item);
        }
      }

      return newArray;
    }

    const newObject = {};

    for (const key in obj) {
      const keyIsValid = dfs(obj[key]);

      if (keyIsValid) {
        newObject[key] = keyIsValid;
      }
    }

    return newObject;
  };

  return dfs(obj);
};

compactObject({ a: null, b: [false, 1] });
