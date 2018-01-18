const Stack = require('../Data Structures/stack');

const depthFirstSearch = (root, matches) => {
    const nodeStack = new Stack();
    const found = (node) => {
        if (node === null) {
            return false;
        }
        if (!node.visited) {
            node.visited = true;
            nodeStack.push(node);
        }

        return matches(node.data);
    }

    if (found(root)) {
        return true;
    }

    while (!nodeStack.isEmpty()) {
        const node = nodeStack.pop();

        if (found(node.left)) {
            return true;
        }
        if (found(node.right)) {
            return true;
        }
    }

    return false;
};

module.exports = depthFirstSearch;
