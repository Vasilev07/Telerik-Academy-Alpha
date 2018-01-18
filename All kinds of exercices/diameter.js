/* global Set */
const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = [
    '5',
    '3 4 3',
    '0 3 4',
    '0 2 6',
    '1 4 9',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

class Graph {
    constructor(node) {
        this.vertices = [];
        for (let i = 0; i < node; i++) {
            this.vertices[i] = [];
        }
    }

    addEdge(x, y, weight) {
        this.vertices[x].push({
            value: y,
            weight,
        });
        this.vertices[y].push({
            value: x,
            weight,
        });
    }

    getResult() {
        const used = new Set();
        let currentDistance = 0;
        let maxDistance = Number.MIN_SAFE_INTEGER;
        let nextVertex;
        const dfs = (vertex) => {
            used.add(vertex);
            this.vertices[vertex].forEach((element) => {
                if (used.has(element.value)) {
                    return;
                }
                currentDistance += element.weight;
                if (currentDistance > maxDistance) {
                    maxDistance = currentDistance;
                    nextVertex = element.value;
                }
                dfs(element.value);
                currentDistance -= element.weight;
            });
        };
        dfs(0);
        currentDistance = 0;
        used.clear();
        dfs(nextVertex);
        return maxDistance;
    }
}

const node = +gets();
const graph = new Graph(node);
for (let i = 0; i < node - 1; i++) {
    const [x, y, z] = gets().split(' ').map(Number);
    graph.addEdge(x, y, z);
}
print(graph.vertices);
