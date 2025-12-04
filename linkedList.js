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

  // removes the last element from the list
  pop() {
    if (this.#size === 1) {
      this.#head = null;
      this.#tail = null;
      this.#size = 0;
    } else if (this.#size > 0) {
      let currentNode = this.#head;

      while (currentNode.next !== this.#tail) {
        currentNode = currentNode.next;
      }

      currentNode.next = null;
      this.#tail = currentNode;
      this.#size--;
    } else {
      throw new Error("The list is empty");
    }
  }

  // returns true if the passed in value is in the list and otherwise returns false
  contains(value) {
    if (this.#size === 0) return false;

    let currentNode = this.#head;

    while (currentNode) {
      if (currentNode.data === value) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }

    return false;
  }

  // returns the index of the node containing value, or null if not found
  find(value) {
    if (this.#size === 0) return null;

    let index = 0;
    let currentNode = this.#head;

    while (currentNode) {
      if (currentNode.data === value) {
        return index;
      } else {
        currentNode = currentNode.next;
        index++;
      }
    }

    return null;
  }

  // represents your LinkedList objects as strings, so you can print them out and preview them in the console
  // The format should be: ( value ) -> ( value ) -> ( value ) -> null
  toString() {
    if (this.#size === 0) return null;

    let currentNode = this.#head;
    let arr = [];

    while (currentNode) {
      arr.push(`( ${currentNode.data} )`);
      currentNode = currentNode.next;
    }

    arr.push(null);
    const str = arr.join(" -> ");
    console.log(str);
    return str;
  }

  // inserts a new node with the provided value at the given index
  insertAt(value, index) {
    if (index < 0 || index > this.#size) return null;

    if (index === 0) {
      this.prepend(value);
      return;
    }

    if (index === this.#size) {
      this.append(value);
      return;
    }

    let currentNode = this.#head;

    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next;
    }

    const newNode = new Node(value, currentNode.next);
    currentNode.next = newNode;

    this.#size++;
  }

  // removes the node at the given index
  removeAt(index) {
    if (this.#size === 0 || index > this.#size) return null;
    this.size--;
  }
}

class Node {
  constructor(data = null, next = null) {
    this.data = data;
    this.next = next;
  }
}
