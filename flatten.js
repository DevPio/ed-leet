class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const tree = new TreeNode(1);

tree.left = new TreeNode(2);

tree.left.left = new TreeNode(3);

tree.left.right = new TreeNode(4);

tree.right = new TreeNode(5);

tree.right.right = new TreeNode(6);

const dfs = (root, cb) => {
  if (!root) return;

  cb(root.val);
  dfs(root.left, cb);

  dfs(root.right, cb);
};

const flatten = (root) => {
  let currentRoot = root;

  let items = [];

  dfs(root, (val) => items.push(val));

  root.left = null;
  root.right = null;

  for (let index = 1; index < items.length; index++) {
    if (!currentRoot.right) {
      currentRoot.right = new TreeNode(items[index]);
      currentRoot = currentRoot.right;
    }
  }
};

flatten(tree);
