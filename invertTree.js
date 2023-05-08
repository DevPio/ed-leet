class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const tree = new TreeNode(4);
tree.left = new TreeNode(2);
tree.right = new TreeNode(7);
tree.left.right = new TreeNode(3);
tree.left.left = new TreeNode(1);

tree.right.right = new TreeNode(9);
tree.right.left = new TreeNode(6);

const invertTree = function (root) {
  if (!root) return null;

  let left = invertTree(root.right);
  let right = invertTree(root.left);

  root.left = left;
  root.right = right;

  return root;
};

console.log(invertTree(tree));
