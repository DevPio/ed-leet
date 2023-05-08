var copyRandomBinaryTree = function (root) {
  if (!root) return null;
  const node = new NodeCopy();
  node.left = copyRandomBinaryTree(root.left);
  node.right = copyRandomBinaryTree(root.right);

  node.val = root.val;

  node.random = node;
  return node;
};
