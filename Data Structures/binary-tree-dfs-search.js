class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(data) {
        const node = new BinaryTreeNode(data);
        this._root = node;
    }

    findElement(el) {
        let found = false;
        const dfSearch = (currentNode) => {
            if (!currentNode) {
                return;
            } else if (currentNode.value === el) {
                found = currentNode;
            }
            dfSearch(currentNode.left);
            dfSearch(currentNode.right);
        };
        dfSearch(this._root);
        return found;
    }

    findElementToInsert(valueToInsert, currentNode) {
        if (valueToInsert <= currentNode.value) {
            if (currentNode.left) {
                currentNode = currentNode.left;
                this.findElementToInsert(valueToInsert, currentNode);
            } else {
                currentNode.left = new BinaryTreeNode(valueToInsert);
            }
        } else {
            if (currentNode.right) {
                currentNode = currentNode.right;
                this.findElementToInsert(valueToInsert, currentNode);
            } else {
                currentNode.right = new BinaryTreeNode(valueToInsert);
            }
        }
    }

    attach(...el) {
        el.forEach((value) => {
            this.findElementToInsert(value, this._root);
        });
    }
}

const tree = new BinaryTree(10);
tree.attach(7, 20, 4, 8, 25, 19);
console.log(tree.findElement(67));