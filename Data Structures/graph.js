// this is adjacency matrix -> used only in complete or almost complete graph

class Graph1 {
    constructor() {
        this.matrix = [];
    }

    addEdge(x, y) {
        this.addDirectedEdge(x, y);
        this.addDirectedEdge(y, x);
    }

    addDirectedEdge(x, y) {
        if (typeof this.matrix[x] === 'undefined') {
            this.matrix[x] = [];
        }

        this.matrix[x][y] = true;
    }
}
// this is adjancency list -> most used way
class Graph2 {
    constructor() {
        this.vertices = [];
    }

    addEdge(x, y) {
        this.addDirectedEdge(x, y);
        this.addDirectedEdge(y, x);
    }

    addDirectedEdge(x, y) {
        if (typeof this.vertices[x] === 'undefined') {
            this.vertices[x] = [];
        }

        this.vertices[x].push(y);
    }
}

// set of edges -> not used at all

class Graph3 {
    constructor() {
        this.edges = [];
    }

    addEdge(x, y) {
        this.addDirectedEdge(x, y);
        this.addDirectedEdge(y, x);
    }

    addDirectedEdge(from, to) {
        this.edges.push({
            from,
            to,
        });
    }
}
const graph = new Graph2();
graph.addEdge('A', 'D');
graph.addEdge('A', 'E');
graph.addEdge('A', 'B');
graph.addEdge('B', 'D');
graph.addEdge('B', 'C');
console.log(graph);


