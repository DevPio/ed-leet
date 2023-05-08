class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
//=============== OLHAR A RESOLUCAO SEU MERDA
const tree = new TreeNode(4);

tree.left = new TreeNode(2);
tree.right = new TreeNode(7);
tree.right.right = new TreeNode(9);
tree.left.left = new TreeNode(3);
tree.left.right = new TreeNode(5);

const findTilt = function (root) {
  const dfs = (root, items = []) => {
    if (!root) return;

    dfs(root.left, items);
    dfs(root.right, items);

    return items.reduce((acc, number) => acc + number, 0);
  };

  const stack = [{ node: root }];
  let sum = 0;
  while (stack.length > 0) {
    const { node } = stack.pop();

    if (!node) continue;

    let left = dfs(node.left);
    let right = dfs(node.right);

    sum += Math.abs(left - right);

    stack.push({ node: node.left });
    stack.push({ node: node.right });
  }

  console.log(sum);
};

console.log(findTilt(tree));
