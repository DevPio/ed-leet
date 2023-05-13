var copyRandomBinaryTree = function (root) {
  const hash = new Map();

  const generateNode = (root) => {
    if (!root) return null;
    const node = new NodeCopy();
    node.left = generateNode(root.left);
    node.right = generateNode(root.right);

    node.val = root.val;

    node.random = node;

    hash.set(root, node);
    return node;
  };
  const mapToRandomNode = (root) => {
    if (!root) return;

    const newNode = hash.get(root);
    newNode.random = hash.get(root.random);
    mapToRandomNode(root.left);
    mapToRandomNode(root.right);
  };
  const node = generateNode(root);
  mapToRandomNode(root);
  return node;
};
