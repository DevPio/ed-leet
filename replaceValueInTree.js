class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const tree = new TreeNode(5);

tree.left = new TreeNode(4);
tree.right = new TreeNode(9);

tree.left.left = new TreeNode(1);
tree.left.right = new TreeNode(10);

tree.right.right = new TreeNode(7);
const replaceValueInTree = (root) => {
  const levesNodes = {};

  const helper = (root, level = 0, parent = {}) => {
    if (!root) return;
    const node = { val: root.val, parent };
    helper(root.left, level + 1, root);
    helper(root.right, level + 1, root);

    if (!levesNodes[level]) levesNodes[level] = [];
    levesNodes[level].push({
      val: root.val,
      before: before.val,
    });
  };

  const replace = (root, level = 0) => {
    if (!root) return;

    replace(root.left, level + 1);
    replace(root.right, level + 1);

    let value = root.val;
    const find = levesNodes[level].find(
      (curentRoot) => curentRoot.val === value
    );
    const sum = levesNodes[level].reduce((acc, currentRoot) => {
      if (currentRoot.val !== value && currentRoot.before !== find.before)
        return acc + currentRoot.val;

      return acc;
    }, 0);
    root.val = sum;
  };

  helper(root);
  replace(root);

  return root;
};

replaceValueInTree(tree);
