const isSymmetricHelp = function (left, rigth) {
  if (!right && !left) return true;
  if (!left || !right) return false;

  if (left.val != rigth.left) return false;

  return (
    isSymmetricHelp(root.left, root.right) &&
    isSymmetricHelp(root.right, root.left)
  );
};

const isSymmetric = (root) => {
  if (!root) return true;
  return isSymmetricHelp(root.left, root.right);
};
