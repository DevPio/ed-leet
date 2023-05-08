class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const tree = new TreeNode(5);

tree.left = new TreeNode(2);
tree.right = new TreeNode(-3);

var findFrequentTreeSum = function (root) {
  const hash = new Map();
  let max = null;
  const findFrequentTreeSumHelp = (root, items = []) => {
    if (!root) return 0;

    findFrequentTreeSumHelp(root.left, items);
    findFrequentTreeSumHelp(root.right, items);

    items.push(root.val);

    return items.reduce((acc, item) => acc + item, 0);
  };

  const dfs = (root) => {
    if (!root) return;

    dfs(root.left);
    dfs(root.right);
    const sum = findFrequentTreeSumHelp(root);

    if (!hash.has(sum)) {
      hash.set(sum, 1);
    } else {
      let number = hash.get(sum);
      max = Math.max(max, number + 1);
      hash.set(sum, number + 1);
    }
  };

  dfs(root);
  if (!max) max = 1;

  let sum = [...hash.entries()]
    .filter(([key, value]) => value === max)
    .map(([key, value]) => key);
  return sum;
};
