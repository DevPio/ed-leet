const removeVowels = (s = "") => {
  let regex = /a|e|i|o|u/g;

  s = s.replace(regex, "");

  return s;
};
