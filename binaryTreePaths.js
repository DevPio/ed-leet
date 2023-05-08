class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.right = new TreeNode(5);

const binaryTreePaths = (root, string = "", array = []) => {
  if (!root) return;

  if (!root.left && !root.right) {
    string += `${root.val}`;
  } else {
    string += `${root.val}->`;
  }
  binaryTreePaths(root.left, string, array);

  if (!root.left && !root.right) {
    array.push(string);
    string = "";
  }
  binaryTreePaths(root.right, string, array);

  return array;
};

console.log(binaryTreePaths(tree));
console.log(binaryTreePaths(new TreeNode(1)));
