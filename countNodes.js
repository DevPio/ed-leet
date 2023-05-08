const dfs = (root, num = 0) => {
  if (!root) return;

  dfs(root.left, num);
  num = num + 1;
  dfs(root.left, num);

  return num;
};

const countNodes = function (root) {
  return dfs(root);
};
