class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const tree = new TreeNode(1);

tree.left = new TreeNode(1);
tree.left.left = new TreeNode(1);
tree.left.right = new TreeNode(1);

tree.right = new TreeNode(1);

const dfs = (root, set = new Set()) => {
  if (!root || set.size > 1) return;

  dfs(root.left, set);
  set.add(root.val);
  dfs(root.right, set);
};

const isUnivalTree = function (root) {
  let hashNodes = new Set();

  dfs(root, hashNodes);
  return hashNodes.size === 1;
};

isUnivalTree(tree);
