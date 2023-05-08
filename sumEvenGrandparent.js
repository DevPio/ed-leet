class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const tree = new TreeNode(6);

tree.left = new TreeNode(7);
tree.right = new TreeNode(8);

tree.left.left = new TreeNode(2);
tree.left.right = new TreeNode(7);

tree.left.left.left = new TreeNode(9);

tree.left.right.left = new TreeNode(1);
tree.left.right.right = new TreeNode(4);

tree.right.left = new TreeNode(1);
tree.right.right = new TreeNode(3);
tree.right.right.right = new TreeNode(5);
let pather = 0;
let currentRoot = null;

const sumEvenGrandparentHelp = function (root, before) {
  if (!root) return;
  sumEvenGrandparentHelp(root.left, root);

  sumEvenGrandparentHelp(root.right, root);
  root.parent = before;
};

const sumEvenGrandparent = (root) => {
  sumEvenGrandparentHelp(root);
  let sum = 0;
  const dfs = (root) => {
    if (!root) return;

    dfs(root.left);
    if (root.parent && root.parent.parent && root.parent.parent.val % 2 === 0) {
      sum += root.val;
    }
    dfs(root.right);
  };

  dfs(root);

  return sum;
};

sumEvenGrandparent(tree);
