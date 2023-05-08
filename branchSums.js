// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const tree = new BinaryTree(1);

tree.left = new BinaryTree(2);
tree.right = new BinaryTree(3);

tree.right.left = new BinaryTree(6);
tree.right.right = new BinaryTree(7);

tree.left.left = new BinaryTree(4);
tree.left.right = new BinaryTree(5);
tree.left.right.left = new BinaryTree(10);

tree.left.left.left = new BinaryTree(8);
tree.left.left.right = new BinaryTree(9);

function branchSums(root) {
  let total = [];
  function branchSumsHelp(root, sum = 0) {
    if (!root) {
      sum = 0;
      return 0;
    }

    if (!root.left && !root.right) {
      sum += root.value;
      total.push(sum);
      sum = 0;
      return;
    }
    sum += root.value;
    branchSumsHelp(root.left, sum);

    branchSumsHelp(root.right, sum);
  }

  branchSumsHelp(root);

  return total;
}

console.log(branchSums(tree));
