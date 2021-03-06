// const BinaryHeap = require('./binary-heap');
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
    'ADD 5',
    'ADD 1',
    'FIND',
    'ADD 2',
    'FIND',
    'ADD 3',
    'ADD 1',
    'FIND',
    'ADD 3',
    'FIND',
    'EXIT',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
class BinaryHeap {
    constructor(cmpFunc) {
        this._heap = [];
        this._heap.push(null);
        this._cmpFunc = cmpFunc || ((x, y) => x < y);
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
            while (index > 1 && this._cmpFunc(value, this._heap[Math.trunc(index / 2)])) {
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
            // while we have right alone child element
            while (index * 2 + 1 < this._heap.length) {
                // get smaller element of left and right parents
                const smallerChildIndex = this._cmpFunc(this._heap[index * 2], this._heap[index * 2 + 1]) ?
                    index * 2 : index * 2 + 1;
                if (this._cmpFunc(this._heap[smallerChildIndex], value)) {
                    this._heap[index] = this._heap[smallerChildIndex];
                    index = smallerChildIndex;
                } else {
                    break;
                }
            }
        }
        // if we have only left element which is alone
        if (index * 2 < this._heap.length) {
            const smallerChildIndex = index * 2;
            if (this._cmpFunc(this._heap[smallerChildIndex], value)) {
                this._heap[index] = this._heap[smallerChildIndex];
                index = smallerChildIndex;
            }
        }
        this._heap[index] = value;
    }
}

class MedianHeap {
    constructor() {
        this._minBinHeap = new BinaryHeap((x, y) => x < y);
        this._maxBinHeap = new BinaryHeap((x, y) => x > y);
    }

    isEmpty() {
        return this._minBinHeap.isEmpty() && this._maxBinHeap.isEmpty();
    }

    insert(value) {
        if (this.isEmpty()) {
            this._minBinHeap.insert(value);
        } else {
            if (value <= this.getMedian()) {
                this._maxBinHeap.insert(value);
            } else {
                this._minBinHeap.insert(value);
            }
        }
        this.returnBalance();
    }

    returnBalance() {
        if (Math.abs(this._maxBinHeap.length - this._minBinHeap.length > 1)) {
            this._minBinHeap.insert(this._minBinHeap.getTop());
            this._maxBinHeap.removeTop();
        } else {
            this._maxBinHeap.insert(this._minBinHeap.getTop());
            this._minBinHeap.removeTop();
        }
    }

    getMeddian() {
        if (this._minHeap.length === this._maxHeap.length) {
            return (this._minHeap.getTop() + this._maxHeap.getTop()) / 2;
        } else if (this._maxHeap.length > this._minHeap.length) {
            return this._maxHeap.getTop();
        }
        return this._minHeap.getTop();
    }
}

const medianHeap = new MedianHeap();
const result = [];
while (true) {
    const currentCommand = gets().split(' ');
    if (currentCommand[0] === 'ADD') {
        const x = currentCommand[1];
        medianHeap.insert(+x);
    } else if (currentCommand[0] === 'FIND') {
        result.push(medianHeap.getMeddian());
    } else {
        break;
    }
}
print(result);