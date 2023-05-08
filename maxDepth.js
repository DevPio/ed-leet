const mock = {
  val: 1,
  children: [
    { val: 2, children: [] },
    {
      val: 3,
      children: [
        { val: 6, children: [] },
        {
          val: 7,
          children: [{ val: 11, children: [{ val: 14, children: [] }] }],
        },
      ],
    },
    { val: 4, children: [{ val: 8, children: [{ val: 12, children: [] }] }] },
    {
      val: 5,
      children: [
        { val: 9, children: [{ val: 13, children: [] }] },
        { val: 10, children: [] },
      ],
    },
  ],
};

const maxDepth = function (root) {
  if (!root) return 0;

  let height = 1;
  const childrens = root.children;

  for (let index = 0; index < childrens.length; index++) {}

  return height;
};

console.log(maxDepth(mock));
