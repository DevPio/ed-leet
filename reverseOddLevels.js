class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const tree = new TreeNode(2);

tree.left = new TreeNode(3);
tree.left.left = new TreeNode(8);
tree.left.right = new TreeNode(13);

tree.right = new TreeNode(5);
tree.right.left = new TreeNode(21);
tree.right.right = new TreeNode(34);

const reverseOddLevels = (root, level = 0) => {
  if (!root) return null;
  if ((level + 1) % 2 !== 0) {
    let temp = root.left;
    root;
    root.left = reverseOddLevels(root.right, level + 1);
    root.right = reverseOddLevels(temp, level + 1);
  } else {
    root.left = reverseOddLevels(root.left, level + 1);
    root.right = reverseOddLevels(root.right, level + 1);
  }

  console.log(root);

  return root;
};

reverseOddLevels(tree);
console.log(tree);
