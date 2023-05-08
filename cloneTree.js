const mock = {
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
};

class Node {
  constructor(val, children) {
    this.val = val === undefined ? 0 : val;
    this.children = children === undefined ? [] : children;
  }
}
const cloneTree = function (root) {
  if (!root) return;
  const node = new Node(root.val);

  const children = root.children;

  for (let index = 0; index < children.length; index++) {
    if (children[index].children.length > 0) {
      node.children.push(cloneTree(children[index]));
    } else {
      node.children.push(new Node(children[index].val));
    }
  }

  return node;
};

console.log(cloneTree(mock));
