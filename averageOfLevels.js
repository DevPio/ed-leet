class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const tree = new TreeNode(3);

tree.left = new TreeNode(9);
tree.right = new TreeNode(20);
tree.right.left = new TreeNode(15);
tree.right.right = new TreeNode(7);

const average = (nums = []) => {
  return nums.reduce((acc, number) => acc + number) / nums.length;
};

const averageOfLevels = function (root) {
  let levels = {};

  const averageOfLevelsHelp = (root, level = 0) => {
    if (!root) return;

    averageOfLevelsHelp(root.left, level + 1);
    averageOfLevelsHelp(root.right, level + 1);

    if (!levels[level]) levels[level] = [];

    levels[level].push(root.val);
  };

  averageOfLevelsHelp(root);

  let results = [];

  Object.keys(levels).forEach((key) => results.push(average(levels[key])));

  return results;
};

console.log(averageOfLevels(tree));
