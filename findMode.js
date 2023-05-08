class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const tree = new TreeNode(1);

tree.right = new TreeNode(1);
tree.left = new TreeNode(0);

tree.left.right = new TreeNode(0);
tree.left.left = new TreeNode(0);
tree.left.left.left = new TreeNode(0);

tree.right.left = new TreeNode(1);
tree.right.right = new TreeNode(1);

const dfs = (root, cb) => {
  if (!root) return;

  dfs(root.left, cb);
  cb(root.val);
  dfs(root.right, cb);
};

const findMode = (root) => {
  const hash = new Map();
  dfs(root, (val) => {
    if (hash.has(val)) {
      const value = hash.get(val);

      //hash.delete(val);

      hash.set(val, value + 1);

      return;
    }

    hash.set(val, 1);
  });

  const spreadItems = [...hash.keys()];
  if (hash.size === 1) return spreadItems;

  const max = Math.max(...spreadItems.map((key) => hash.get(key)));

  return [...spreadItems].filter((n) => n >= max);
};

findMode(tree);
