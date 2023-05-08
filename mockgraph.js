const graph = [
  {
    children: [
      {
        children: [],
        name: "E",
      },
      {
        children: [
          {
            children: [],
            name: "I",
          },
          {
            children: [],
            name: "J",
          },
        ],
        name: "F",
      },
    ],
    name: "B",
  },
  {
    children: [],
    name: "C",
  },
  {
    children: [
      {
        children: [
          {
            children: [],
            name: "K",
          },
        ],
        name: "G",
      },
      {
        children: [],
        name: "H",
      },
    ],
    name: "D",
  },
];

module.exports = { graph };
