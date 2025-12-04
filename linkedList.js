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

  size() {
    console.log(this.#size);
    return this.#size;
  }

  head() {}

  tail() {}

  at(index) {}

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
