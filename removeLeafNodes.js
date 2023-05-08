const remove = (root, target) => {
  if (!root) return null;

  if (root.val === target && !root.left && !root.right) return null;
  root.left = remove(root.left, target);
  root.right = remove(root.right, target);

  return root;
};

const exist = (root, target) => {
  if (!root) return false;

  if (root.val === target && !root.left && !root.right) {
    return true;
  }

  return exist(root.left, target) || exist(root.right, target);
};

var removeLeafNodes = function (root, target) {
  let isNode = exist(root, target);
  while (isNode) {
    remove(root, target);
    isNode = exist(root, target);
  }

  return root;
};
