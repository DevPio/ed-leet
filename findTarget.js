const dfs = (currentRoot, cb) => {
  if (!currentRoot) return;
  dfs(currentRoot.left, cb);
  cb(currentRoot.val);
  dfs(currentRoot.right, cb);
};

const findTarget = (root, k) => {
  let counter = 0;
  dfs(root, (val) => {
    dfs(root, (subval) => {
      if (val + subval === k) counter++;
    });
  });

  return counter > 2;
};
