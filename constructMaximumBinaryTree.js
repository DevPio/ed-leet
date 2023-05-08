class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const constructMaximumBinaryTree = function (nums = []) {
  if (nums.length === 0) return;

  const max = Math.max(...nums);
  const node = new TreeNode(max);

  const index = nums.indexOf(max);

  const left = nums.filter((number, indexNumber) => indexNumber < index);
  const right = nums.filter((number, indexNumber) => indexNumber > index);

  node.left = constructMaximumBinaryTree(left);
  node.right = constructMaximumBinaryTree(right);

  return node;
};

const tree = constructMaximumBinaryTree([3, 2, 1, 6, 0, 5]);

console.log(tree);
