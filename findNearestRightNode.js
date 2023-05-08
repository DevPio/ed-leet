const findNearestRightNode = (root, u) => {
  const nodes = {};
  let levelNode;
  const findNearestRightNodeHelp = (root, level = 0) => {
    if (!root) return;
    findNearestRightNodeHelp(root.left, level + 1);
    findNearestRightNodeHelp(root.right, level + 1);

    if (!nodes[level]) nodes[level] = [];
    if (root === u) {
      levelNode = level;
    }
    nodes[level].push(root);
  };

  findNearestRightNodeHelp(root);

  const rightNode = nodes[levelNode].findIndex((node) => node === u);

  console.log(rightNode);
};
