"use strict";

var fs = require("fs");

class Heap {
  constructor(compare) {
    this.array = [];
    this.compare = compare;
  }

  add(item) {
    this.array.push(item);
    this.heapifyUp();
  }

  find(item) {
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] === item) {
        return i;
      }
    }
    return -1;
  }

  remove(item) {
    let itemIndex = this.find(item);

    if (itemIndex == -1) return null;

    if (itemIndex == this.array.length - 1) return this.array.pop();

    this.array[itemIndex] = this.array.pop();
    let parent = this.getParent(itemIndex);

    if (
      this.hasLeftChild(itemIndex) ||
      (!parent && parent < this.array[itemIndex])
    ) {
      this.heapifyDown(itemIndex);
    } else {
      this.heapifyUp(itemIndex);
    }
  }

  heapifyDown(index = 0) {
    while (this.hasLeftChild(index)) {
      let smallestIndex = this.getLeftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        this.compare(this.getRightChild(index), this.getLeftChild(index))
      ) {
        smallestIndex = this.getRightChildIndex(index);
      }

      if (this.compare(this.array[index], this.array[smallestIndex])) {
        break;
      } else {
        this.swap(index, smallestIndex);
      }
      index = smallestIndex;
    }
  }

  heapifyUp(index) {
    let currentIndex = index || this.array.length - 1;

    while (
      this.hasParent(currentIndex) &&
      this.compare(this.array[currentIndex], this.getParent(currentIndex))
    ) {
      this.swap(currentIndex, this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }
  }

  getLeftChildIndex(parentIdx) {
    return 2 * parentIdx + 1;
  }

  getRightChildIndex(parentIdx) {
    return 2 * parentIdx + 2;
  }

  getParentIndex(childIdx) {
    return Math.floor((childIdx - 1) / 2);
  }

  getLeftChild(parentIdx) {
    return this.array[this.getLeftChildIndex(parentIdx)];
  }

  getRightChild(parentIdx) {
    return this.array[this.getRightChildIndex(parentIdx)];
  }

  getParent(childIdx) {
    return this.array[this.getParentIndex(childIdx)];
  }

  hasLeftChild(parentIdx) {
    return this.getLeftChildIndex(parentIdx) < this.array.length;
  }

  hasRightChild(parentIdx) {
    return this.getRightChildIndex(parentIdx) < this.array.length;
  }

  hasParent(childIdx) {
    return this.getParentIndex(childIdx) >= 0;
  }

  swap(indexOne, indexTwo) {
    var temp = this.array[indexOne];
    this.array[indexOne] = this.array[indexTwo];
    this.array[indexTwo] = temp;
  }

  print() {
    console.log(this.array);
  }
}

class PriorityQueue extends Heap {
  constructor() {
    let compare = function(firstValue, SecondValue) {
      return this.priorities[firstValue] > this.priorities[SecondValue];
    };
    super(compare);
    this.priorities = {};
  }

  add(item, priority = 100) {
    this.priorities[item] = priority;
    super.add(item);
  }

  changePriority(item, priority) {
    super.remove(item);
    this.add(item, priority);
  }

  remove(item) {
    super.remove(item);
    delete this.priorities[item];
  }
}

function csvRead(file) {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) throw err;
    var array = data.split("\n");
    var mheap = new PriorityQueue();
    for (let i = 0; i < array.length; i++) {
      var key = array[i].split(",")[0];
      var value = array[i].split(",")[1];
      mheap.add(key, value);
    }
    console.log(mheap.print());
  });
}

csvRead("data.csv");
