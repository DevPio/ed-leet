const toLowerCase = (s) => {
  let stringBuilder = "";
  const min = 97;
  const max = 122;

  for (let index = 0; index < s.length; index++) {
    const charCode = String.fromCharCode(s[index].charCodeAt());

    if (charCode >= min && charCode <= max) {
      stringBuilder += s[index];
    } else {
      stringBuilder += String.fromCharCode(s[index].charCodeAt() - 32);
    }
  }

  return stringBuilder;
};
