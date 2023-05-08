class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const tree = new TreeNode(4);

tree.left = new TreeNode(8);
tree.right = new TreeNode(5);

tree.left.left = new TreeNode(0);
tree.left.right = new TreeNode(1);

tree.right.right = new TreeNode(6);

const averageOfSubtree = function (root) {
  let sum = 0;
  const stack = [{ node: root }];
  const averageOfSubtreeHelp = function (root) {
    if (!root) return 0;

    sum++;
    return (
      root.val +
      averageOfSubtreeHelp(root.left) +
      averageOfSubtreeHelp(root.right)
    );
  };
  while (stack.length > 0) {
    const { node } = stack.pop();

    if (!node) continue;

    const total = averageOfSubtreeHelp(node);
    if (node.val === Math.floor(total / sum)) return node.val;
    sum = 0;
    stack.push({ node: node.left });
    stack.push({ node: node.right });
  }
};

console.log(averageOfSubtree(tree));
