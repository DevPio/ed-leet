const findBottomLeftValue = (root) => {
  let node = {};

  let maxLevel = null;
  const findBottomLeftValueHelp = (root, level = 0, isLeft) => {
    if (!root) return;
    findBottomLeftValueHelp(root.left, level + 1, true);
    findBottomLeftValueHelp(root.right, level + 1, false);

    maxLevel = Math.max(maxLevel, level);
    if (!node[level]) node[level] = [];
    node[level].push({
      val: root.val,
      isLeft,
    });
  };

  findBottomLeftValueHelp(root, 0);
  console.log(node[maxLevel]);

  if (node[maxLevel].length === 1) {
    return node[maxLevel][0].val;
  }

  const find = node[maxLevel][0];

  return find.val;
};
