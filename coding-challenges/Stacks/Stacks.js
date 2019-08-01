class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  pop() {
    if (!this.head) return null;
    var removeNode = this.head;
    if (this.head == this.tail) {
      this.head = null;
      this.tail = null;
    }
    this.head = this.head.next;
    return removeNode.value;
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
  }
}

var s = new Stack();
s.push(3);
s.push(4);
s.push(5);
s.print();
s.pop();
