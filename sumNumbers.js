class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const tree = new TreeNode(1);

tree.left = new TreeNode(2);
tree.right = new TreeNode(3);

var sumNumbers = function (root) {
  const dfs = (root, curr = []) => {
    if (!root) {
      return root;
    }

    if (!root.left && !root.right) {
      return Number([...curr, root.val].join(""));
    }

    return (
      dfs(root.right, [...curr, root.val]) + dfs(root.left, [...curr, root.val])
    );
  };

  return dfs(root);
};

const secondeTree = new TreeNode(0);
secondeTree.left = new TreeNode(1);

console.log(sumNumbers(secondeTree));
