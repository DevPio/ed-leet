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

const secondTree = new TreeNode(1);

secondTree.left = new TreeNode(2);
secondTree.right = new TreeNode(3);
secondTree.left.right = new TreeNode(4);

const tree2str = (root, repeat = 0) => {
  let string = "";
  if (!root) {
    return "";
  }

  if (root.left && root.right) {
    string += `${root.val}(${tree2str(root.left)})${tree2str(root.right)}`;
  }

  if (!root.left && !root.right) {
    return `(${root.val})`;
  }

  if (root.left && !root.right) {
    return `${root.val}${tree2str(root.left)}${tree2str(root.right)}`;
  }

  if (!root.left && root.right) {
    return `${root.val}(${tree2str(root.left)})${tree2str(root.right)}`;
  }

  return string;
};

//console.log(tree2str(tree));
console.log(tree2str(secondTree));
