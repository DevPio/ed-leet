class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const tree = new TreeNode(4);

tree.left = new TreeNode(2);
tree.right = new TreeNode(6);

tree.left.left = new TreeNode(1);
tree.left.right = new TreeNode(3);

tree.right.right = new TreeNode(7);
tree.right.left = new TreeNode(5);

const splitBST = function (root, target) {
  if (!root) return [null, null];
  else if (root.val <= target) {
    let bsn = splitBST(root.right, target);
    root.right = bsn[0];
    bsn[0] = root;
    return bsn;
  } else {
    let bsn = splitBST(root.left, target);
    root.left = bsn[1];
    bsn[1] = root;
    return bsn;
  }
};

console.log(splitBST(tree, 2));
