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
    if(this.adjacencyList.get(name)) {
      return true;
    }
    return false;
  }

  createEdge(node1, node2) {
    let set1 = this.adjacencyList.get(node1);
    let set2 = this.adjacencyList.get(node2);
    set1.add(node2);
    set2.add(node1);
  }

  hasEdge(node1, node2) {
    if(this.adjacencyList.get(node1).has(node2)) {
      return true;
    }
    return false;
  }

}