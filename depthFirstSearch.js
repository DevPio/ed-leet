const { graph } = require("./mockgraph");

class Node {
  constructor(name) {
    this.name = name;
    this.children = graph;
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    let nodes = [];

    nodes.push(this.name);

    nodes.push(...this.depthFirstSearchHelp(this.children));
    return nodes;
  }

  depthFirstSearchHelp(children) {
    let nodes = [];

    for (let index = 0; index < children.length; index++) {
      nodes.push(children[index].name);
      if (children[index].children.length > 0) {
        nodes.push(...this.depthFirstSearchHelp(children[index].children));
      }
    }

    return nodes;
  }
}

const node = new Node("A");

console.log(node.depthFirstSearch([]));
