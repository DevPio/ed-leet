const secondReference = {
  val: 4,
  children: [
    { val: 7, children: [] },
    { val: 8, children: [] },
  ],
};

const firstReference = {
  val: 1,
  children: [
    {
      val: 2,
      children: [secondReference, { val: 5, children: [] }],
    },
    { val: 3, children: [{ val: 6, children: [] }] },
  ],
};

const tree = firstReference;

const moveSubTree = (root, p, q) => {
  let reference;
  let isDelete = false;
  const deleteNode = (root, findNode) => {
    const find = root.children.find((node) => p == node);
    if (root === q && find) {
      isDelete = true;
      return root;
    }
    if (root === findNode) {
      reference = root;
      delete root;

      return null;
    }

    for (let index = 0; index < root.children.length; index++) {
      const element = root.children[index];

      if (root.children[index].children.length > 0) {
        root.children[index] = deleteNode(element, findNode);

        root.children = root.children.filter(Boolean);
      }

      if (root.children[index] === findNode) {
        reference = root;
        delete root;

        return null;
      }
    }

    return root;
  };

  const moveNode = (root, node, childrenItem) => {
    if (root === node) {
      root.children.push(childrenItem);

      return;
    }

    for (let index = 0; index < root.children.length; index++) {
      const element = root.children[index];

      if (root.children[index].children.length > 0) {
        moveNode(element, node, childrenItem);
      }

      if (root.children[index] === node) {
        element.children.push(childrenItem);
      }
    }
  };
  deleteNode(root, p);

  moveNode(root, q, reference);

  return root;
};

moveSubTree(tree, secondReference, firstReference);

let i = {
  val: 1,
  children: [
    {
      val: 2,
      children: [
        {
          val: 4,
          children: [
            { val: 7, children: [] },
            { val: 8, children: [] },
          ],
        },
        { val: 5, children: [] },
      ],
    },
    { val: 3, children: [{ val: 6, children: [] }] },
  ],
};
