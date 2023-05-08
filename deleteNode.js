class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const tree = new TreeNode(5);

tree.left = new TreeNode(3);
tree.right = new TreeNode(6);

tree.left.left = new TreeNode(2);
tree.left.right = new TreeNode(4);

tree.right.right = new TreeNode(7);
var deleteNode = function (root, key) {
  if (!root) return null;
  if (key > root.val) {
    root.right = deleteNode(root.right, key);
    return root;
  } else if (key < root.val) {
    root.left = deleteNode(root.left, key);
    return root;
  } else {
    if (!root.left && !root.right) {
      return null;
    }

    if (!root.left) return root.right;
    if (!root.right) return root.left;

    let node = root.right;

    while (node.right != null) {
      node = node.left;
    }

    root.val = node.val;

    root.right = deleteNode(node.left, node.val);
    return root;
  }
};

deleteNode(tree, 5);

console.log(tree);
