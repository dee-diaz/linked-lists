class LinkedList {
  #head;
  #tail;
  #size;
  constructor() {
    this.#head = null;
    this.#tail = null;
    this.#size = 0;
  }

  // adds a new node containing value to the end of the list
  append(value) {
    const newNode = new Node(value);

    if (this.#size === 0) {
      this.#head = newNode;
      this.#tail = newNode;
    } else {
      this.#tail.next = newNode;
      this.#tail = newNode;
    }

    this.#size++;
  }

  // adds a new node containing value to the start of the list
  prepend(value) {
    const newNode = new Node(value, this.#head);

    if (this.#size === 0) {
      this.#tail = newNode;
    }

    this.#head = newNode;
    this.#size++;
  }

  // returns the total number of nodes in the list
  size() {
    return this.#size;
  }

  // returns the first node in the list
  head() {
    return this.#head;
  }

  // returns the last node in the list
  tail() {
    return this.#tail;
  }

  // returns the node at the given index
  at(index) {
    if (index >= this.#size)
      throw new Error("The index is out of the list range");

    let currentNode = this.#head;

    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  pop() {}

  contains(value) {}

  find(value) {}

  toString() {}

  insertAt(value, index) {}

  removeAt(index) {}
}

class Node {
  constructor(data = null, next = null) {
    this.data = data;
    this.next = next;
  }
}
