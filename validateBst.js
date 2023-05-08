class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
const bst = new BST(10);

bst.left = new BST(5);

bst.left.left = new BST(2);
bst.left.right = new BST(5);

bst.left.left.left = new BST(1);

bst.right = new BST(15);

bst.right.left = new BST(13);
bst.right.right = new BST(22);

bst.right.left.right = new BST(14);

function validateBst(tree) {
  const stack = [{ node: tree, left: false }];

  let d = {
    left: [],
    right: [],
  };
  let history = [];
  while (stack.length > 0) {
    const { node, left } = stack.pop();

    if (node === null) continue;

    if (node.left && node.left.value > node.value) return false;
    if (node.right && node.right.value < node.value && !left) return false;

    if (
      history.includes(node.value) &&
      history[history.length - 1] !== node.value
    ) {
      return false;
    }
    history.push(node.value);
    stack.push({ node: node.left, left: true });
    stack.push({ node: node.right, left: false });
  }

  return true;
}

console.log(validateBst(bst));
