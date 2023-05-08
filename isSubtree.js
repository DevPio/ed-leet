class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const tree = new TreeNode(3);
tree.left = new TreeNode(4);
tree.right = new TreeNode(5);
tree.left.right = new TreeNode(2);
tree.left.left = new TreeNode(1);
//tree.left.left.left = new TreeNode(0);

const sub = new TreeNode(4);
sub.left = new TreeNode(1);
sub.right = new TreeNode(2);

const verify = (root, subRoot) => {
  if (!root && !subRoot) return true;

  if (root && subRoot && root.val != subRoot.val) return false;
  if (root && subRoot && root.val === subRoot.val) {
    return verify(root.left, subRoot.left) && verify(root.right, subRoot.right);
  }

  return true;
};

const isSubtree = (root, subRoot) => {
  if (!root) return;

  if (root.val === subRoot.val) {
    if (!subRoot.left && !subRoot.right) return true;
    const v = verify(root, subRoot);
    if (!v) {
      return !!(
        isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
      );
    }

    return v;
  }

  return !!(isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot));
};
const s = new TreeNode(1);
s.left = new TreeNode(1);
console.log(isSubtree(s, new TreeNode(1)));

[
  1,
  null,
  1,
  null,
  1,
  null,
  1,
  null,
  1,
  null,
  1,
  null,
  1,
  null,
  1,
  null,
  1,
  null,
  1,
  null,
  1,
  2,
];
