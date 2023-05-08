function solution(N) {
  const binary = N.toString(2);

  let start = null;
  let end = null;

  let max = 0;
  for (let index = 0; index < binary.length; index++) {
    const element = binary[index];

    if (element === "0" && binary[index - 1] && binary[index - 1] !== "0") {
      start = index;
    }
    if (element === "0" && binary[index + 1] && binary[index + 1] !== "0") {
      end = index;
    }

    if (start && end) {
      max = Math.max(end + 1 - start, max);
      start = null;
      end = null;
    }
  }

  return max;
}

solution(1041);
