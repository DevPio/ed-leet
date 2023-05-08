class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const tree = new TreeNode(1);

tree.left = new TreeNode(2);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);
tree.left.left.left = new TreeNode(7);

tree.right = new TreeNode(3);

tree.right.right = new TreeNode(6);
tree.right.right.right = new TreeNode(8);

var deepestLeavesSum = function (root) {
  let nodes = {};

  const dfs = (root, level = 0) => {
    if (!root) return;
    dfs(root.left, level + 1);
    dfs(root.right, level + 1);

    if (!root.left && !root.right) {
      if (!nodes[level]) {
        nodes[level] = [];
      }

      nodes[level].push(root.val);
    }
  };
  dfs(root);

  let max = Math.max(...Object.keys(nodes));

  return nodes[max].reduce((acc, number) => acc + number, 0);
};

console.log(deepestLeavesSum(tree));
