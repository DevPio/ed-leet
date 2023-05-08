class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
const tree = new TreeNode(5);

tree.left = new TreeNode(1);
tree.right = new TreeNode(7);
const dfs = (root, cb) => {
  if (!root) return;

  dfs(root.left, cb);
  cb(root.val);
  dfs(root.right, cb);
};

const inserteTree = (tree, val) => {
  let node = tree;

  while (node.right) {
    node = node.right;
  }

  node.right = new TreeNode(val);
};
const increasingBST = (root) => {
  let tree;

  dfs(root, (val) => {
    if (!tree) tree = new TreeNode(val);
    else if (tree) {
      inserteTree(tree, val);
    }
  });

  return tree;
};

increasingBST(tree);
