class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const tree = new TreeNode(10);

tree.left = new TreeNode(5);
tree.left.left = new TreeNode(3);
tree.left.right = new TreeNode(7);

tree.right = new TreeNode(15);

const rangeSumBST = (root, low, high) => {
  if (!root) return 0;

  if (root.val >= low && root.val <= high) {
    return (
      root.val +
      rangeSumBST(root.left, low, high) +
      rangeSumBST(root.right, low, high)
    );
  }

  return rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
};

console.log(rangeSumBST(tree, 7, 15));
