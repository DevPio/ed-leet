class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
//MY CODE
// function evaluateExpressionTree(tree) {
//   if (!tree) return -1;
//   if (tree.value === -1) {
//     return (
//       evaluateExpressionTree(tree.left) + evaluateExpressionTree(tree.right)
//     );
//   } else if (tree.value === -2) {
//     return (
//       evaluateExpressionTree(tree.left) - evaluateExpressionTree(tree.right)
//     );
//   } else if (tree.value === -3) {
//     return Math.trunc(
//       evaluateExpressionTree(tree.left) / evaluateExpressionTree(tree.right)
//     );
//   } else if (tree.value === -4) {
//     return (
//       evaluateExpressionTree(tree.left) * evaluateExpressionTree(tree.right)
//     );
//   }

//   return tree.value;
// }

const tree = new BinaryTree(-1);

tree.left = new BinaryTree(-2);
tree.right = new BinaryTree(-3);

tree.right.left = new BinaryTree(8);
tree.right.right = new BinaryTree(3);

tree.left.left = new BinaryTree(-4);
tree.left.right = new BinaryTree(2);

tree.left.left.left = new BinaryTree(2);
tree.left.left.right = new BinaryTree(3);

//SOLUTION CODE
const evaluateExpressionTree = (tree) => {
  if (tree.value >= 0) {
    return tree.value;
  }

  const leftValue = evaluateExpressionTree(tree.left);
  const rightValue = evaluateExpressionTree(tree.right);

  if (tree.value === -1) return leftValue + rightValue;
  if (tree.value === -2) return leftValue - rightValue;
  if (tree.value === -3) return Math.trunc(leftValue / rightValue);

  return leftValue * rightValue;
};

evaluateExpressionTree(tree);
