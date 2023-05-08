const findDuplicateSubtrees = (root) => {
  const hash = new Map();
  let duplicates = [];
  const findDuplicateSubtreesHelp = (root) => {
    if (!root) return;
    findDuplicateSubtreesHelp(root.left);
    if (hash.has(JSON.stringify(root))) {
      duplicates.push(hash.get(JSON.stringify(root)), root);
    } else {
      hash.set(JSON.stringify(root), root);
    }
    findDuplicateSubtreesHelp(root.right);
  };

  findDuplicateSubtreesHelp(root);
  return duplicates;
};

Number.MAX_VALUE;
