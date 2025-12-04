class LinkedList {
  #head;
  #tail;
  #size;
  constructor() {
    this.#head = null;
    this.#tail = null;
    this.#size = 0;
  }

  append(value) {}

  prepend(value) {}

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
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
