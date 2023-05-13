const dfs = (root, level = 0) => {
  if (!root) return 0;

  dfs(root.left, level + 1);
  dfs(root.right, level + 1);

  return level;
};

const isBalanced = (root) => {
  let left = dfs(root.left);
  let right = dfs(root.right);

  return Math.abs(left - right) === 1;
};
