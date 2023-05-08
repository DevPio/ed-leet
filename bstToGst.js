class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const tree = new TreeNode(5);

tree.left = new TreeNode(3);
tree.right = new TreeNode(6);

tree.left.left = new TreeNode(2);
tree.left.right = new TreeNode(4);

tree.right.right = new TreeNode(7);

const getNodes = (root) => {
  const stack = [{ node: root }];
  const nodes = [];

  while (stack.length > 0) {
    const { node } = stack.pop();

    if (node === null) continue;

    nodes.push(node.val);

    stack.push({ node: node.left });
    stack.push({ node: node.right });
  }

  return nodes;
};

const bstToGst = function (root) {
  const nodes = getNodes(root);
  const bstToGstHelp = function (root) {
    if (!root) return;

    bstToGstHelp(root.left);
    root.val = nodes
      .filter((number) => number > root.val)
      .reduce((number, acc) => number + acc, 0);
    bstToGstHelp(root.right);

    return root;
  };

  return bstToGstHelp(root);
};
