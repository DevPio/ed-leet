const chunk = (arr = [], size) => {
  let index = 0;
  const chunks = [];

  while (index < arr.length) {
    let count = size;
    const chunk = [];

    while (count-- > 0 && index < arr.length) {
      chunk.push(arr[index]);

      index++;
    }

    chunks.push(chunk);
  }

  return chunks;
};
