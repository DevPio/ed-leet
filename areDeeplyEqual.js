//refazer esse codigo

const areDeeplyEqual = (o1, o2) => {
  if (typeof o1 != typeof o2) return false;
  if (typeof o1 !== "object" || o1 === null) {
    return o1 === o2;
  }
  if (!o1 || !o2) return o1 == o2;
  const keys = Object.keys(o1);

  if (keys.length != Object.keys(o2).length) return false;

  if (Array.isArray(o1) && Array.isArray(o2)) {
    const arrayOne = o1;
    const arrayTwo = o2;

    for (let index = 0; index < arrayOne.length; index++) {
      if (typeof arrayOne[index] === "object") {
        console.log(arrayOne[index]);
        const r = areDeeplyEqual(arrayOne[index], arrayTwo[index]);
        if (!r) return false;
        continue;
      }

      if (arrayOne[index] !== arrayTwo[index]) return false;
    }
    return true;
  }

  for (const key of keys) {
    console.log(key);
    if (!(key in o2)) return false;

    if (
      (Array.isArray(o1) && !Array.isArray(o2)) ||
      (Array.isArray(o2) && !Array.isArray(o1))
    ) {
      return false;
    }

    if (typeof o1[key] != typeof o2[key]) return false;

    if (
      typeof o1[key] !== "object" &&
      !Array.isArray(o1[key]) &&
      o1[key] !== o2[key]
    ) {
      return false;
    }

    if (typeof o1[key] == "object") {
      const result = areDeeplyEqual(o1[key], o2[key]);

      if (!result) return false;
      continue;
    }

    if (Array.isArray(o1[key])) {
      const arrayOne = o1[key];
      const arrayTwo = o1[key];

      for (let index = 0; index < arrayOne.length; index++) {
        if (typeof arrayOne[index] === "object")
          return areDeeplyEqual(arrayOne[index], arrayTwo[index]);

        if (arrayOne[index] !== arrayTwo[index]) return false;
      }
    }
  }

  return true;
};
const obj1 = {
  x: 1,
  y: 1,
  0.12482698641322854: [{}],
  6301375145521158: {
    x: 1,
    y: 1,
    0.6160988971185997: [{}],
    "9315529850178343": {
      x: 1,
      y: 1,
      0.6490363878655185: [{}],
      "023965276078886877": {
        x: 1,
        y: 1,
        0.3454440796831246: [{}],
        6019017418648773: {
          x: 1,
          y: 1,
          0.04165623002453556: [{}],
          "09085494651990644": {
            x: 1,
            y: 1,
            0.4229513936101805: [{}],
            709942437115813: {
              x: 1,
              y: 1,
              0.8108232125709058: [{}],
              2558254279741652: {
                x: 1,
                y: 1,
                0.4805407477163812: [{}],
                8807879514101631: {
                  x: 1,
                  y: 1,
                  0.533245095512793: [{}],
                  3433451941761887: {
                    x: 1,
                    y: 1,
                    0.4775152976392767: [{}],
                    6594178104215074: {
                      x: 1,
                      y: 1,
                      0.6055120574080027: [{}],
                      896732906980318: null,
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

const obj2 = {
  x: 1,
  y: 1,
  0.12482698641322854: [{}],
  6301375145521158: {
    x: 1,
    y: 1,
    0.6160988971185997: [{}],
    "9315529850178343": {
      x: 1,
      y: 1,
      0.6490363878655185: [{}],
      "023965276078886877": {
        x: 1,
        y: 1,
        0.3454440796831246: [{}],
        6019017418648773: {
          x: 1,
          y: 1,
          0.04165623002453556: [{}],
          "09085494651990644": {
            x: 1,
            y: 1,
            0.4229513936101805: [{}],
            709942437115813: {
              x: 1,
              y: 1,
              0.8108232125709058: [{}],
              2558254279741652: {
                x: 1,
                y: 1,
                0.4805407477163812: [{}],
                8807879514101631: {
                  x: 1,
                  y: 1,
                  0.533245095512793: [{}],
                  3433451941761887: {
                    x: 1,
                    y: 1,
                    0.4775152976392767: [{}],
                    6594178104215074: {
                      x: 1,
                      y: 1,
                      0.6055120574080028: [{}],
                      896732906980318: null,
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

console.log(areDeeplyEqual(obj1, obj2));
