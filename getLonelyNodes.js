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
tree.left.right = new TreeNode(4);

const dfs = (root, twoNodes, nodes = []) => {
  if (!root) return;

  if (root.right && root.left) dfs(root.left, true, nodes);
  else dfs(root.left, false, nodes);

  if (!twoNodes) nodes.push(root.val);
  if (root.right && root.left) dfs(root.right, true, nodes);
  else dfs(root.right, false, nodes);
};

const getLonelyNodes = function (root) {
  let nodes = [];

  dfs(root, true, nodes);

  return nodes;
};
