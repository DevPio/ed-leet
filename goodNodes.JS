class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const tree = new TreeNode(3);

tree.left = new TreeNode(1);
tree.right = new TreeNode(4);

tree.left.left = new TreeNode(3);
tree.right.left = new TreeNode(1);
tree.right.right = new TreeNode(5);

const goodNodes = (root) => {
  let counter = 0;

  if (root) counter++;

  const dfs = (root, curr = []) => {
    if (!root) {
      return;
    }

    dfs(root.left, [...curr, root.val]);

    dfs(root.right, [...curr, root.val]);

    if (curr.length === 0) return;

    let max = Math.max(...curr, root.val);
    console.log(max, root.val);
    if (max === root.val) counter++;

    return root.val;
  };

  console.log(dfs(root));

  return counter;
};
const secondTre = new TreeNode(9);

secondTre.left = new TreeNode(3);
secondTre.left.right = new TreeNode(6);
goodNodes(secondTre);
