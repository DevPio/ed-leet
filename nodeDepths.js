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

tree.left.left.left = new BinaryTree(8);
tree.left.left.right = new BinaryTree(9);
let items = [];
// function nodeDepths(root, value = 0) {
//   if (!root) return 0;

//   return (
//     nodeDepths(root.left, value + 1) + value + nodeDepths(root.right, value + 1)
//   );
// }

function nodeDepths(root) {
  let sumDepths = 0;
  const stack = [{ node: root, depth: 0 }];

  while (stack.length > 0) {
    const { node, depth } = stack.pop();

    if (node === null) continue;
    sumDepths += depth;
    stack.push({ node: node.left, depth: depth + 1 });
    stack.push({ node: node.right, depth: depth + 1 });
  }

  return sumDepths;
}

console.log(nodeDepths(tree));

//console.log(items.sort((a, b) => a - b));
