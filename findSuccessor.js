class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

const tree = new BinaryTree(1);

tree.left = new BinaryTree(2);
tree.right = new BinaryTree(3);

tree.left.left = new BinaryTree(4);
tree.left.right = new BinaryTree(5);

tree.left.left.left = new BinaryTree(6);

function findSuccessor(tree, node) {
  // Write your code here.
  let i = [];
  function findSuccessorHelper(tree, node) {
    if (!tree) return;

    findSuccessorHelper(tree.left, node, false);
    i.push(tree.value);
    findSuccessorHelper(tree.right, node, false);

    return null;
  }

  findSuccessorHelper(tree, node, false);
  const findIndex = i.findIndex((item) => (item.value = node.value));

  return i[findIndex + 1];
}

console.log(findSuccessor(tree, tree.left.right));
