const rightSideView = (root) => {
  if (!root) return [];
  let nodes = {
    left: [],
    right: [],
  };

  const dfs = (root, arr = []) => {
    if (!root) return [];

    dfs(root.left, arr);
    dfs(root.right, arr);
    arr.push(root.val);

    return arr;
  };

  let result = [];
  nodes.left = dfs(root.left);
  nodes.right = dfs(root.right);
  result.push(root.val);
  if (nodes.left.length === nodes.right.length)
    return [...result, ...nodes.right.sort((a, b) => a - b)];

  if (nodes.right.length === 0)
    return [...result, ...nodes.left.sort((a, b) => a - b)];

  if (nodes.left.length === 0)
    return [...result, ...nodes.right.sort((a, b) => a - b)];
  console.log(nodes.left);
  console.log(nodes.right);
  result = [
    ...result,
    ...nodes.right.sort((a, b) => a - b),
    ...nodes.left.filter(
      (number) => number > nodes.right[nodes.right.length - 1]
    ),
  ];

  return result;
};
