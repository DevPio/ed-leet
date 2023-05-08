// function solution(A, K) {
//   let counter = 0;
//   let clone = [...A];
//   while (counter < K) {
//     for (let index = 0; index < A.length; index++) {
//       let element = clone[index];
//       if (index === A.length - 1) {
//         A[0] = element;
//       } else {
//         A[index + 1] = element;
//       }
//     }

//     clone = [...A];

//     counter++;
//   }

//   return clone;
// }

// solution([3, 8, 9, 7, 6], 3);

// 3;

// 8;

var isPalindromeHelp = function (str, startIndex, lastIndex) {
  if (startIndex >= lastIndex) {
    return true;
  }
  console.log(str[startIndex]);
  console.log(str[lastIndex]);
  var string = str[startIndex] !== str[lastIndex];
  if (string) {
    return false;
  }

  return isPalindromeHelp(str, startIndex + 1, lastIndex - 1);
};
var isPalindrome = function (str) {
  // base case #1
  // base case #2
  // recursive case

  return isPalindromeHelp(str, 0, str.length - 1);
};

console.log(isPalindrome(""));
