class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const insert = (node, newNode) => {
  if (!node) return;

  if (newNode.val > node.val) {
    if (!node.right) {
      return (node.right = newNode);
    }

    return insert(node.right, newNode);
  }

  if (newNode.val < node.val) {
    if (!node.left) {
      return (node.left = newNode);
    }

    return insert(node.left, newNode);
  }
};

const buildTree = function (preorder = [], inorder = []) {
  let node;

  preorder.forEach((val) => {
    if (!node) {
      node = new TreeNode(val);
    } else {
      insert(node, new TreeNode(val));
    }
  });

  return node;
};

buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);
