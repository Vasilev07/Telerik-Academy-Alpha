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
    '6',
    '4 8',
    '5 3',
    '2 1',
    '5 1',
    '5 8',
    '3 2',
    '4',
    '5',
    '2',
    '8',
    '1',
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

    addEdge(x, y) {
        this.vertices[x].push(y);
    }

    installPack(packages) {
        let set = new Set();

        set.add(packages);
        if (this.vertices[packages]) {
            this.vertices[packages].forEach((element) => {
                set.add(element);
                if (typeof this.vertices[element] !== 'undefined' && this.vertices[element].length > 0) {
                    set.add(this.vertices[element][0]);
                }
            });
        }
        return set;
    }
}
const nodes = gets().split(' ').map(Number);
const graph = new Graph(nodes);
for (let i = 0; i < nodes; i++) {
    const [x, y] = gets().split(' ').map(Number);
    graph.addEdge(x, y);
}
const packages = +gets();
for (let i = 0; i < packages; i++) {
    const line = +gets();
    print([...graph.installPack(line)].sort().join(' '));
}