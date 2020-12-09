export default class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }
  
  //creates key:value pair
  //key is the name of the node we are adding and value is an empty Set
  addNode(name) {
    this.adjacencyList.set(name, new Set());
  }

  hasNode(name) {
    return false;
  }

}