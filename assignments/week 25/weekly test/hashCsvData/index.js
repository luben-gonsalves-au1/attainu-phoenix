"use strict";

var fs = require("fs");

class Node {
  constructor(value, data = null) {
    this.value = value;
    this.next = null;
    this.data = data;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  push(val, data) {
    var newNode = new Node(val, data);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return this;
  }

  search(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  delete(valueToDelete) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === valueToDelete) {
      this.head = this.head.next;
      return;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === valueToDelete) {
        currentNode.next = currentNode.next.next;
        break;
      }
      currentNode = currentNode.next;
    }
    if (this.tail.value === valueToDelete) {
      this.tail = currentNode;
    }
  }

  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(`${current.value} -> ${current.data}`);
      current = current.next;
    }
    console.log(arr);
  }
}

class Hastable {
  constructor(size) {
    this.size = size;
    this.array = [];
    for (let i = 0; i < this.size; i++) {
      this.array.push(new SinglyLinkedList());
    }
  }

  hash(key) {
    let sum = 0;
    Array.from(key).forEach(char => (sum += char.charCodeAt(0)));
    return sum % this.size;
  }

  getList(key) {
    let hashId = this.hash(key);
    return this.array[hashId];
  }

  set(key, value) {
    let linkedList = this.getList(key);

    let node = linkedList.search(key);

    if (node) {
      node.data = value;
    } else {
      linkedList.push(key, value);
    }
  }

  get(key) {
    let linkedList = this.getList(key);

    let node = linkedList.search(key);
    console.log(node.data);

    if (node) {
      return node.data;
    } else {
      return null;
    }
  }

  delete(key) {
    let linkedList = this.getList(key);
    linkedList.delete(key);
  }

  print() {
    this.array.forEach(a => a.print());
  }
}

function csvRead(file) {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) throw err;
    var array = data.split("\n");
    var h = new Hastable(array.length);
    for (let i = 0; i < array.length; i++) {
      var key = array[i].split(",")[0];
      var value = array[i].split(",")[1];
      h.set(key, value);
    }
    console.log(h.print());
  });
}

csvRead("data.csv");
