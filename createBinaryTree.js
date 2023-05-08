class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const createBinaryTree = (descriptions = [[]]) => {
  const hash = new Map();

  const allNodes = new Set();
  const childNodes = new Set();
  for (let index = 0; index < descriptions.length; index++) {
    const [parent, child, isLeft] = descriptions[index];
    let currentNode = hash.get(parent) || new TreeNode();
    currentNode.val = parent;
    allNodes.push(child);
    childNodes.push(parent);
    if (isLeft) {
      currentNode.left = hash.get(child) || new TreeNode(child);
      hash.set(child, currentNode.left);
    } else {
      currentNode.right = hash.get(child) || new TreeNode(child);
      hash.set(child, currentNode.right);
    }
    hash.set(parent, currentNode);
  }

  for (let node of childNodes) {
    allNodes.delete(node);
  }

  const rootNodeValue = Array.from(allNodes)[0];
  return hash.get(rootNodeValue);
};

createBinaryTree([
  [1, 2, 1],
  [2, 3, 0],
  [3, 4, 1],
]);
