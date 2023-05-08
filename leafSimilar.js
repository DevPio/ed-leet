const dfs = (root, cb) => {
  if (!root) return;

  dfs(root.left, cb);
  if (!root.left && !root.right) cb(root.val);
  dfs(root.right, cb);
};

const leafSimilar = (root1, root2) => {
  let itemsRoot1 = [];
  let itemsRoot2 = [];

  dfs(root1, (val) => itemsRoot1.push(val));
  dfs(root2, (val) => itemsRoot2.push(val));

  if (itemsRoot1.length != itemsRoot2.length) return false;

  for (let index = 0; index < itemsRoot1.length; index++) {
    if (itemsRoot1[index] != itemsRoot2[index]) return false;
  }
  return true;
};
