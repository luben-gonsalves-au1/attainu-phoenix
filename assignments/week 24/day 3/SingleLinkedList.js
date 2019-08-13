class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  prepend(val) {
    let newNode = new Node(val)
    if(!this.head) {
        this.head = newNode;
        this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  append(val) {
    let newNode = new Node(val)
    if(!this.tail) {
        this.head = newNode;
        this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  search(val) {
    if(!this.head) return null;
    let current = this.head
    while(current) {
      if(current.value == val) {
        return current.value;
      }
      current = current.next;
    }
      return null; 
  }

  print() {
    let arr = [];
    let current = this.head
    while(current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr)
  }
}

var list = new SingleLinkedList()
list.append(2);
list.append(3);
list.append(7);
list.print();

list.prepend(9);
list.prepend(13);
list.print();

list.search(2);