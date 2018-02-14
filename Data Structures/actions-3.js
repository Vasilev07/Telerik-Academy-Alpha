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
    '5 5',
    '0 3',
    '2 1',
    '1 4',
    '1 3',
    '4 3',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

class Graph {
    constructor(node) {
        this.vertices = [];
        this.countActions = {};
        for (let i = 0; i < node; i++) {
            this.vertices[i] = [];
            this.countActions[i] = 0;
        }
    }
    addEdge(x, y) {
        this.vertices[x].push(y);
        this.countActions[y] += 1;
    }

    sortGraph() {
        const holder = [];
        const result = [];
        let current;

        for (const action in this.countActions) {
            if (this.countActions[action] === 0) {
                holder.push(+action);
            }
        }

        while (holder.length > 0) {
            holder.sort((a, b) => b - a);
            current = holder.pop();
            result.push(current);
            this.vertices[current].forEach((e) => {
                this.countActions[e] -= 1;
                if (this.countActions[e] === 0) {
                    holder.push(e);
                }
            });
            this.vertices[current] = [];
        }
        return result;
    }
}
const [nodes, edges] = gets().split(' ').map(Number);
const graph = new Graph(nodes);
for (let i = 0; i < edges; i++) {
    const [x, y] = gets().split(' ').map(Number);
    graph.addEdge(x, y);
}
print(graph.sortGraph().join('\n'));