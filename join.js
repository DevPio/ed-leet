// function searchById(id, items) {
//   let start = 0;
//   let end = items.length - 1;

//   while (start <= end) {
//     let middle = Math.floor((start + end) / 2);

//     // NOTE the ".email" part added
//     if (items[middle].id === id) {
//       return items[middle];
//     } else if (items[middle].id < id) {
//       start = middle + 1;
//     } else {
//       end = middle - 1;
//     }
//   }
//   return -1;
// }

// const join = (arr1 = [], arr2 = []) => {
//   const result = [];

//   for (let index = 0; index < arr1.length; index++) {
//     const element = arr1[index];

//     const findElement = searchById(element.id,arr2);

//     if (findElement) {
//       const fistKeys =
//         Object.keys(findElement).length > Object.keys(element).length;

//       let currElement = {};
//       let compare = {};

//       if (fistKeys) {
//         currElement = findElement;
//         compare = element;
//       } else {
//         currElement = element;
//         compare = findElement;
//       }

//       for (const key in currElement) {
//         if (Object.hasOwnProperty.call(compare, key)) {
//           currElement[key] = findElement[key];
//           continue;
//         }
//       }

//       for (const key in compare) {
//         if (!Object.hasOwnProperty.call(currElement, key)) {
//           currElement[key] = compare[key];
//           continue;
//         }
//       }
//       arr2 = arr2.filter((item) => item.id !== findElement.id);

//       result.push(currElement);
//       continue;
//     }

//     result.push(element);
//   }

//   return [...result, ...arr2].sort((a, b) => a.id - b.id);
// };

const join = (arr1 = [], arr2 = []) => {
  const combineArray = arr1.concat(arr2);

  const mergedObject = {};

  for (const obj of combineArray) {
    const { id } = obj;
    if (!mergedObject[id]) {
      mergedObject[id] = { ...obj };
      continue;
    }

    mergedObject[id] = { ...mergedObject[id], ...obj };
  }

  return Object.values(mergedObject).sort((a, b) => a.id - b.id);
};

console.log(
  join(
    [
      { id: 1, x: 1 },
      { id: 2, x: 9 },
    ],
    [{ id: 3, x: 5 }]
  )
);

console.log(
  join(
    [
      { id: 1, x: 2, y: 3 },
      { id: 2, x: 3, y: 6 },
    ],
    [
      { id: 2, x: 10, y: 20 },
      { id: 3, x: 0, y: 0 },
    ]
  )
);

console.log(
  join(
    [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }],
    [{ id: 1, b: { c: 84 }, v: [1, 3] }]
  )
);
