class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const tree = new TreeNode(1);
tree.left = new TreeNode(0);
tree.right = new TreeNode(1);
tree.left.right = new TreeNode(1);
tree.left.left = new TreeNode(0);

tree.right.right = new TreeNode(1);
tree.right.left = new TreeNode(0);

const dfs = (root, string = "") => {
  let items = [];
  if (!root) {
    return;
  }

  string += root.val;

  if (!root.left && !root.right) {
    return [string];
  }
  if (root.left) {
    items.push(...dfs(root.left, string));
  } else {
    if (root.left) items.push(dfs(root.left, string));
  }

  if (root.right) {
    items.push(...dfs(root.right, string));
  } else {
    if (root.right) items.push(dfs(root.right, string));
  }

  return items;
};

const sumRootToLeaf = (root) => {
  return [...dfs(root)]
    .map((number) => parseInt(number, 2))
    .reduce((acc, number) => acc + number, 0);
};
const t = new TreeNode(1);
t.left = new TreeNode(1);
console.log(sumRootToLeaf(tree));
console.log(sumRootToLeaf(new TreeNode(0)));
console.log(sumRootToLeaf(t));
