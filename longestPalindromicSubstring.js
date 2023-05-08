function isPalindrome(string) {
  let comp = "";
  for (let index = string.length - 1; index >= 0; index--) {
    comp += string[index];
  }

  return comp === string;
}

function longestPalindromicSubstring(string) {
  let max = "";

  for (i = 0; i < string.length; i++) {
    for (j = i + 1; j < string.length + 1; j++) {
      let currentString = string.slice(i, j);
      if (isPalindrome(currentString) && currentString.length > max.length) {
        max = currentString;
      }
    }
  }

  return max;
}

isPalindrome("abc");
