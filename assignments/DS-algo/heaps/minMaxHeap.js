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
      if (this.array[i] == item) {
        return i;
      }
    }
    return -1;
  }

  remove(item) {
    let indexToRemove = this.find(item);

    if (indexToRemove === -1) return null;

    if (indexToRemove == this.array.length - 1) {
      return this.array.pop();
    }
    this.array[indexToRemove] = this.array.pop();

    let parent = this.getParent(indexToRemove);

    if (
      this.hasLeftChild(indexToRemove) &&
      (!parent || this.compare(parent, this.array[indexToRemove]))
    ) {
      this.heapifyDown(indexToRemove);
    } else {
      this.heapifyUp(indexToRemove);
    }
  }

  heapifyUp(index) {
    let currentIndex = index || this.array.length - 1;
    while (
      this.hasParent(currentIndex) &&
      //   !this.compare(this.getParent(currentIndex), this.array[currentIndex])
      this.compare(this.array[currentIndex], this.getParent(currentIndex))
    ) {
      this.swap(this.getParentIndex(currentIndex), currentIndex);
      currentIndex = this.getParentIndex(currentIndex);
    }
  }

  heapifyDown(index = 0) {
    let currentIndex = index;
    while (this.hasLeftChild(currentIndex)) {
      let smallestChildIndex = this.getLeftChildIndex(currentIndex);
      if (
        this.hasRightChild(currentIndex) &&
        this.compare(
          this.getRightChild(currentIndex),
          this.getLeftChild(currentIndex)
        )
      ) {
        smallestChildIndex = this.getRightChildIndex(currentIndex);
      }

      if (
        this.compare(this.array[currentIndex], this.array[smallestChildIndex])
      ) {
        break;
      } else {
        this.swap(currentIndex, smallestChildIndex);
      }
      currentIndex = smallestChildIndex;
    }
  }

  //utility functions
  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }
  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }
  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  getLeftChild(parentIndex) {
    return this.array[this.getLeftChildIndex(parentIndex)];
  }
  getRightChild(parentIndex) {
    return this.array[this.getRightChildIndex(parentIndex)];
  }
  getParent(childIndex) {
    return this.array[this.getParentIndex(childIndex)];
  }

  hasLeftChild(parentIndex) {
    return this.getLeftChildIndex(parentIndex) < this.array.length;
  }

  hasRightChild(parentIndex) {
    return this.getRightChildIndex(parentIndex) < this.array.length;
  }

  hasParent(childIndex) {
    return this.getParentIndex(childIndex) >= 0;
  }

  swap(indexOne, indexTwo) {
    let temp = this.array[indexOne];
    this.array[indexOne] = this.array[indexTwo];
    this.array[indexTwo] = temp;
  }

  print() {
    console.log(this.array);
  }
}

class MinHeap extends Heap {
  constructor() {
    let compare = function(firstValue, secondValue) {
      return firstValue < secondValue;
    };
    super(compare);
  }
}

class MaxHeap extends Heap {
  constructor() {
    let compare = function(firstValue, secondValue) {
      return firstValue > secondValue;
    };
    super(compare);
  }
}

let minHeap = new MinHeap();
minHeap.add(9);
minHeap.add(2);
minHeap.add(0);
minHeap.add(1);
minHeap.add(2);
minHeap.add(4);
minHeap.add(8);

// heap.remove(2);
minHeap.print();

// let maxHeap = new MaxHeap();
// maxHeap.add(9);
// maxHeap.add(2);
// maxHeap.add(0);
// maxHeap.add(1);
// maxHeap.add(2);
// maxHeap.add(4);
// maxHeap.add(8);

// maxHeap.remove(2);
// maxHeap.print();
