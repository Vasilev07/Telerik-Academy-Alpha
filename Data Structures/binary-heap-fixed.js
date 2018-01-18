class BinaryHeap {
    constructor(cmpFunc) {
        this._heap = [];
        this._heap.push(null);
        this._cmpFunc = cmpFunc || ((x, y) => x > y);
    }

    getTop() {
        return this._heap[1];
    }

    get length() {
        return this._heap.length - 1;
    }

    isEmpty() {
        return this._heap.length === 1;
    }

    insert(...value) {
        // we do this if we have to push whole array , not only 1 element
        if (value.length === 1) {
            this._heap.push(value[0]);
            let index = this._heap.length - 1;
            // use swapping
            // check if we need to swap smaller current element to it's parent with comaring them
            while (index > 1 && this._cmpFunc(value[0], this._heap[Math.trunc(index / 2)])) {
                // this is swapping
                // [this._heap[index], this._heap[index / 2]] = [this._heap[index / 2], this._heap[index]];
                // index = Math.trunc(index / 2);
                // current element = his parent if he is smaller than the parent
                this._heap[index] = this._heap[Math.trunc(index / 2)];
                // change the index to it's parent
                index = Math.trunc(index / 2);
            }
            // set current element to the value we get from input
            this._heap[index] = value[0];
        } else {
            value.forEach((x) => this.insert(x));
        }
    }

    removeTop() {
        // pop the last element
        const value = this._heap.pop();
        let index = 1;
        if (!this.isEmpty()) {
            while (index * 2 + 1 < this._heap.length) {
                // get smaller element of left and right parents
                const biggerChildIndex = this._cmpFunc(this._heap[index * 2], this._heap[index * 2 + 1]) ?
                    index * 2 : index * 2 + 1;
                this._heap[index] = this._heap[biggerChildIndex];
                index = biggerChildIndex;
            }
        }
        // if we have left and right
        this._heap[index] = value;
    }
}

const heap = new BinaryHeap((a, b) => a > b);
heap.insert(3);
heap.insert(7);
heap.insert(8);
heap.insert(2);
heap.insert(1);
heap.insert(6);
heap.removeTop();
heap.removeTop();
heap.insert(4);
heap.removeTop();
console.log(heap);


// const dfs = (currentNode) => {

// };

// arr.forEach((x) => {
//     heap.insert(x);
//     console.log(heap.getTop());
// });
// heap.insert(...arr);
// console.log(heap);
// const arr2 = [];
// for (let i = 0; !heap.isEmpty(); i++) {
//     arr2.push(heap.getTop());
//     heap.removeTop();
// }
// console.log(arr2);
// console.log(heap);