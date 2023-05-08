class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const tree = new TreeNode(2);
tree.left = new TreeNode(1);
tree.right = new TreeNode(3);
tree.right.right = new TreeNode(1);
tree.right.left = new TreeNode(0);

const evaluateTree = function (root) {
  if (!root) return;
  if (root.val === 2) {
    return evaluateTree(root.left) || evaluateTree(root.right);
  }

  if (root.val === 3) {
    return evaluateTree(root.left) && evaluateTree(root.right);
  }
  if (root.val === 1) return true;
  if (root.val === 0) return false;
};

console.log(evaluateTree(tree));
console.log(evaluateTree(new TreeNode(0)));
