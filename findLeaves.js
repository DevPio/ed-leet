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

tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);

const deleteSheet = (root, childrens) => {
  if (!root) return root;

  if (!root.left && !root.right) {
    childrens.push(root.val);
    return null;
  }
  root.left = deleteSheet(root.left, childrens);
  root.right = deleteSheet(root.right, childrens);

  return root;
};

const findLeaves = (root = new TreeNode()) => {
  let node = root;
  let results = [];
  let childrens = [];
  while (node != null) {
    node = deleteSheet(root, childrens);

    results.push(childrens);
    childrens = [];
  }

  return results;
};
const secondTree = new TreeNode(1);

secondTree.left = new TreeNode(2);
findLeaves(tree);
