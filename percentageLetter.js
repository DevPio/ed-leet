const percentageLetter = (s = "", letter = "") => {
  let percent = 0;

  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    if (element === letter) {
      percent++;
    }
  }

  return (percent / letter.length) * 100;
};
