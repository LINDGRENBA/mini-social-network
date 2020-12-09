import Graph from './../src/graph.js';

describe('Graph', () => {
  
  let graph = new Graph();

  //resets graph after each test
  afterEach(() => {
    graph = new Graph();
  });

  test('should correctly instantiate a graph', () => {
    expect(graph.adjacencyList.size).toEqual(0);
  });

  // node tests
  test('should add a new node', () => {
    graph.addNode("Jasmine");
    expect(graph.adjacencyList.get("Jasmine").size).toEqual(0);
  });

  test('should return false if the node does not exist in the adjacency list', () => {
    expect(graph.hasNode("Ada")).toEqual(false);
  });

  test('should return true if the node does exist in the adjacency list', () => {
    graph.addNode("Jasmine");
    expect(graph.hasNode("Jasmine")).toEqual(true);
  });

  test('should delete a node and all of its adjacent nodes', () => {
    graph.addNode("Jasmine");
    graph.addNode("Ada");
    graph.addNode("Lydia");
    graph.createEdge("Jasmine", "Ada");
    graph.createEdge("Lydia", "Ada");
    graph.removeNode("Ada");
    expect(graph.hasNode("Ada")).toEqual(false);
    expect(graph.hasEdge("Jasmine", "Ada")).toEqual(false);
    expect(graph.hasEdge("Lydia", "Ada")).toEqual(false);
  })

  //edge tests
  test('should return true if edge is successfull added to two nodes', () => {
    graph.addNode("Jasmine");
    graph.addNode("Ada");
    graph.createEdge("Jasmine", "Ada");
    expect(graph.hasEdge("Jasmine", "Ada")).toEqual(true);
  }); //the graph is undirected so both "Jasmine", "Ada" and the reverse should return true

  test('should return false if edge does not exist in a graph', () => {
    graph.addNode("Jasmine");
    graph.addNode("Ada");
    expect(graph.hasEdge("Jasmine", "Ada")).toEqual(false);
  });

  test('should remove an edge between two nodes', () => {
    graph.addNode("Jasmine");
    graph.addNode("Ada");
    graph.createEdge("Jasmine", "Ada");
    graph.removeEdge("Jasmine", "Ada");
    expect(graph.hasEdge("Jasmine", "Ada")).toEqual(false);
  });

});