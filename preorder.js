const preorder = function (root) {
  let items = [];

  items.push(root.val);

  if (root.children.length === 0) return root.val;
  for (let index = 0; index < root.children.length; index++) {
    let element = root.children[index];
    const currentItems = preorder(element);
    if (Array.isArray(currentItems)) {
      items.push(...preorder(element));
    } else {
      items.push(preorder(element));
    }
  }
  return items;
};

console.log(
  preorder({
    val: 1,
    children: [
      {
        val: 3,
        children: [
          { val: 5, children: [] },
          { val: 6, children: [] },
        ],
      },
      { val: 2, children: [] },
      { val: 4, children: [] },
    ],
  })
);
