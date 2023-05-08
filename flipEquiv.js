const flipEquiv = (root1, root2) => {
  if (root1.val !== root2.val) return false;
  const help = (node1, node2) => {
    if (!node1 || !node2) return false;

    if (node1.val !== node2.val) return false;

    return help(node1.left, node2.right) && help(node1.right, node2.left);
  };

  return help(root1, root2);
};
