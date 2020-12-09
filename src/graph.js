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

  removeNode(name) {
    if(this.adjacencyList.has(name)) {
      //get the node if it exists
      this.adjacencyList.get(name).forEach((edge) => {
        //delete each edge associated with that node
        this.adjacencyList.get(edge).delete(name);
      });
      //finally, delete the node itself
      this.adjacencyList.delete(name);
    }
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

  removeEdge(node1, node2) {
    this.adjacencyList.get(node1).delete(node2);
    this.adjacencyList.get(node2).delete(node1);
  }

}