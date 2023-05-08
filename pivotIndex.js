// const pivotIndex = (nums = []) => {
//   for (let index = 0; index < nums.length; index++) {
//     const left = nums
//       .filter((_, indexLeft) => index < indexLeft)
//       .reduce((acc, number) => acc + number, 0);

//     const right = nums
//       .filter((_, indexRight) => index > indexRight)
//       .reduce((acc, number) => acc + number, 0);

//     if (left === right) return index;
//   }

//   return -1;
// };

const pivotIndex = (nums = []) => {
  const prefixSumsLeft = [0];
  const prefixSumsRight = [0];

  // Calcula as somas cumulativas dos elementos do array em ambos os sentidos
  for (let i = 0; i < nums.length; i++) {
    prefixSumsLeft.push(prefixSumsLeft[i] + nums[i]);
    let index = nums.length - i - 1;
    prefixSumsRight.push(prefixSumsRight[i] + nums[index]);
  }

  // Compara os valores de soma em cada posição para encontrar o índice do pivô
  for (let i = 0; i < nums.length; i++) {
    if (prefixSumsLeft[i] === prefixSumsRight[nums.length - i - 1]) {
      return i;
    }
  }

  return -1;
};

pivotIndex([1, 7, 3, 6, 5, 6]);
