class Graph {
  constructor(isDirected = false) {
    this.isDirected = isDirected;
    this.vertices = [];
    this.adjList = new Map();
  }

  addVertex(v) {
    if (this.vertices.includes(v)) return;

    this.vertices.push(v);
    this.adjList.set(v, []);
  }

  addEdge(v, w) {
    if (!this.adjList.has(v)) {
      this.addVertex(v);
    }

    if (!this.adjList.has(w)) {
      this.addVertex(w);
    }

    this.adjList.get(v).push(w);
    if (!this.isDirected) {
      this.adjList.get(w).push(v);
    }
  }

  getVertices() {
    return this.vertices;
  }

  getAdList() {
    return this.adjList;
  }

  toString() {
    let s = "";

    for (let i = 0; i < this.vertices.length; i++) {
      s += `${this.vertices[i]} => `;
      const neighbors = this.adjList.get(this.vertices[i]);
      for (let j = 0; j < neighbors.length; j++) {
        s += `${neighbors[j]}`;
      }

      s += "\n";
    }

    return s;
  }
}

const addGraph = (grid = [[]], i, j, graph) => {
  if (
    i < 0 ||
    j < 0 ||
    i >= grid.length ||
    j >= grid[i].length ||
    grid[i][j] === "0"
  ) {
    return;
  }

  grid[i][j] = "0";
  addGraph(grid, i, j + 1, graph);
  addGraph(grid, i, j - 1, graph);
  addGraph(grid, i + 1, j, graph);
  addGraph(grid, i - 1, j, graph);
};

const numIslands = function (grid = [[]]) {
  let graph = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        graph++;
        addGraph(grid, i, j);
      }
    }
  }

  return graph;
};

numIslands([["1", "0", "1", "1", "0", "1", "1"]]);
