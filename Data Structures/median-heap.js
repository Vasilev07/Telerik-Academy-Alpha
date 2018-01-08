const BinaryHeap = require('./binary-heap/binary-heap');

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

    getMedian() {
        if (this._maxBinHeap.length === this._minBinHeap.length) {
            const median = (this._maxBinHeap.length + this._minBinHeap.length) / 2;
            return median;
        } else if (this._maxBinHeap.length < this._minBinHeap.length) {
            return this._minBinHeap.getTop();
        } else {
            return this._maxBinHeap.getTop();
        }
    }
}

