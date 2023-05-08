class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
///============================= REVISAR E TENTAR NOVAMENTE ========================
const tree = new TreeNode(3);

tree.left = new TreeNode(9);
tree.right = new TreeNode(20);
tree.right.left = new TreeNode(15);
tree.right.right = new TreeNode(7);

// const secondTree = new TreeNode(1);
// secondTree.right = new TreeNode(2);

// const Tree = new TreeNode(1);
// Tree.left = new TreeNode(2);
// Tree.right = new TreeNode(3);

// Tree.left.left = new TreeNode(4);
// Tree.right.right = new TreeNode(5);
let items = [];

const levelOrder = function (root) {
  let d = {};
  let zig = false;
  const helper = function (root, level = 0) {
    if (!root) return;

    helper(root.left, level + 1);
    helper(root.right, level + 1);

    if (!d[level]) {
      d[level] = [];
    }

    if (zig) {
      d[level].unshift(root.val);
    } else {
      d[level].push(root.val);
    }

    zig = !zig;
  };

  helper(root);
  let items = [];
  Object.keys(d).forEach((n) => items.push(d[n]));

  return items;
};

const secondTree = new TreeNode(1);

secondTree.left = new TreeNode(2);
secondTree.right = new TreeNode(3);
secondTree.right.left = new TreeNode(6);

secondTree.left.left = new TreeNode(4);

secondTree.right.right = new TreeNode(5);
secondTree.right.right.left = new TreeNode(7);
secondTree.right.right.right = new TreeNode(8);
//levelOrder(secondTree);

let test = new TreeNode(1);
test.left = new TreeNode(2);
console.log(levelOrder(secondTree));

const dfs = (root, cb) => {
  if (!root) return;

  dfs(root.left, cb);

  dfs(root.right, cb);
  cb(root.val);
};

dfs(secondTree, console.log);
