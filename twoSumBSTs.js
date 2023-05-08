const twoSumBSTs = (root1, root2, target) => {
  const stack = [];
  const dfs = (root, type) => {
    if (!root) return;
    dfs(root.left);
    stack.push({
      val: root.val,
      type,
    });
    dfs(root.right);
  };

  dfs(root1, 1);
  dfs(root2, 2);

  stack.sort((a, b) => a.val - b.val);

  let firstPointer = 0;
  let lastPointer = stack.length - 1;

  while (firstPointer < lastPointer) {
    const targetSum = stack[firstPointer].val + stack[lastPointer].val;

    if (
      targetSum === target &&
      stack[firstPointer].type != stack[lastPointer].type
    )
      return true;

    if (targetSum < target) {
      firstPointer++;
    } else {
      lastPointer--;
    }
  }

  return false;
};
