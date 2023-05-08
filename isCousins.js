class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.left.right = new TreeNode(4);
tree.right = new TreeNode(3);
tree.right.right = new TreeNode(5);

const t2 = new TreeNode(1);
t2.left = new TreeNode(2);
t2.left.right = new TreeNode(4);
t2.right = new TreeNode(3);

const dfs = (root, element, counter = 0, arr = [], val) => {
  if (!root) return 0;

  counter = counter + 1;

  if (root.val === element) {
    arr.push(val);
    return counter;
  }

  return Math.max(
    dfs(root.right, element, counter, arr, root.val),
    dfs(root.left, element, counter, arr, root.val)
  );
};

const isCousins = (root, x, y) => {
  let a = [];
  let b = [];
  if (dfs(root, x, 0, a) != dfs(root, y, 0, b)) {
    return false;
  }

  return a[0] != b[0];
};

//isCousins(tree, 5, 4);
console.log(isCousins(t2, 2, 3));
