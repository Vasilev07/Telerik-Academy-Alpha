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

const getDependencies = (pack, graph, visited, dependencies) => {
    visited.add(pack);
    dependencies.push(pack);

    const parents = graph.get(pack);
    if (parents) {
        parents.forEach((parent) => {
            if (!visited.has(parent)) {
                getDependencies(parent, graph, visited, dependencies);
            }
        });
    }
};

const m = +gets();
const graph = new Map();
for (let i = 0; i < m; i++) {
    const [child, parent] = gets().split(' ').map(Number);
    if (!graph.get(child)) {
        graph.set(child, []);
    }
    graph.get(child).push(parent);
}

const k = +gets();
for (let i = 0; i < k; i++) {
    const pack = +gets();
    const visited = new Set();
    const dependencies = [];
    getDependencies(pack, graph, visited, dependencies);
    print(dependencies.sort((a, b) => a - b).join(' '));
}