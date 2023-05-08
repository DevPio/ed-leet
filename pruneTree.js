class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const tree = new TreeNode(1);

tree.right = new TreeNode(0);
tree.right.left = new TreeNode(0);
tree.right.right = new TreeNode(1);

const pruneTree = (root) => {
  if (!root) return null;

  root.left = pruneTree(root.left);
  root.right = pruneTree(root.right);

  if (!root.val && !root.left && !root.right) return null;

  if (!root.val && root.left && root.right && !root.left.val && !root.right.val)
    return root;

  return root;
};

pruneTree(tree);
console.log(tree);
