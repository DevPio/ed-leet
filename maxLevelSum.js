const maxLevelSum = (root) => {
  let levels = {};

  const maxLevelSumHelp = (root, level = 0) => {
    if (!root) return;

    maxLevelSumHelp(root.left, level + 1);
    maxLevelSumHelp(root.right, level + 1);
    if (!levels[level]) levels[level] = [];
    levels[level].push(root.val);
  };

  maxLevelSumHelp(root, 0);
  let min = {
    val: Number.MIN_VALUE,
    key: null,
  };
  Object.keys(levels).forEach((key) => {
    let sum = levels[key].reduce((acc, key) => acc + key);

    if (sum > min.val) {
      min = {
        val: sum,
        key,
      };
    }
  });

  return min.key;
};
