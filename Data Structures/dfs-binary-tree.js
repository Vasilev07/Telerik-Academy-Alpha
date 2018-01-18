class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinaryTree {
    constructor(root) {
        this.root = new Node(root);
    }

    get left() {
        return this._left;
    }

    get right() {
        return this._right;
    }

    toString() {
        const dfs = (currentValue) => {
            if (currentValue === null) {
                return;
            }
            console.log(currentValue.value);
            dfs(currentValue.left);
            dfs(currentValue.right);
        };
        dfs(this.root);
    }

    insert(...value) {
        value.forEach((el) => {
            this.dfs(el, this.root);
        });
    }

    find(searchedElement) {
        let found = false;
        const dfs = (node) => {
            if (node === null) {
                return;
            }

            if (node.value === searchedElement) {
                found = true;
            }
            dfs(node.left);
            dfs(node.right);
        };
        dfs(this.root);
        return found;
    }

    dfs(value, root) {
        if (root.value >= value) {
            if (root.left) {
                this.dfs(value, root.left);
            } else {
                root.left = new Node(value);
            }
        } else {
            if (root.right) {
                this.dfs(value, root.right);
            } else {
                root.right = new Node(value);
            }
        }
    }
}

const tree = new BinaryTree(10);
tree.insert(5, 12, 4, 3);
tree.toString();
module.exports = BinaryTree;