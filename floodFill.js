const floodFill = (image = [[]], sr, sc, color) => {
  const dfs = (image, sr, sc, color) => {
    console.log(sr);
    if (
      sr >= image.length ||
      sr < 0 ||
      sc < 0 ||
      sc >= image[sr].length ||
      image[sr][sc] === 0 ||
      image[sr][sc] === color
    )
      return;

    if (image[sr][sc] === 1) {
      image[sr][sc] = color;
    }
    dfs(image, sr + 1, sc, color);
    dfs(image, sr - 1, sc, color);
    dfs(image, sr, sc + 1, color);
    dfs(image, sr, sc - 1, color);
  };

  dfs(image, sr, sc, color);

  return image;
};

floodFill(
  [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
  ],
  1,
  1,
  2
);
