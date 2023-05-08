const insertIntoBST = function (root, val) {
  const inserNode = (root, val) => {
    if (val > root.val) {
      if (root.right === null) {
        const node = new TreeNode(val);
        return (root.right = node);
      } else {
        return inserNode(root.right, val);
      }
    } else {
      if (root.left === null) {
        const node = new TreeNode(val);
        return (root.left = node);
      } else {
        return inserNode(root.left, val);
      }
    }
  };

  inserNode(root, val);

  return root;
};
