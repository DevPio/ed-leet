function windowedSlice(arr, size) {
  let result = [];
  arr.some((el, i) => {
    if (i + size > arr.length) return true;
    result.push(arr.slice(i, i + size));
  });
  return result;
}

const readBinaryWatch = (turnedOn) => {
  const minutes = [1, 2, 4, 8, 16, 32];
  const hours = [1, 2, 4, 8];
  const results = [];

  if (turnedOn > minutes.length) return [];

  const minutesSlices = windowedSlice(minutes, turnedOn);
  const hoursSlices = windowedSlice(hours, turnedOn);
  for (let i = 0; i < minutesSlices.length; i++) {
    for (let j = 0; j < minutesSlices[i].length; j++) {
      results.push(
        `0:${
          minutesSlices[i][j].toString().length === 1
            ? `0${minutesSlices[i][j]}`
            : minutesSlices[i][j]
        }`
      );
    }
  }

  for (let i = 0; i < hoursSlices.length; i++) {
    for (let j = 0; j < hoursSlices[i].length; j++) {
      results.push(`${hoursSlices[i][j]}:00`);
    }
  }

  return results;
};

readBinaryWatch(1);
