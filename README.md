# Linked List

A singly linked list implementation in JavaScript with private internal state and a full set of operations.

## Features

- O(1) append and prepend via tracked `head` and `tail` references
- Index-based access, insertion, and removal
- Value search with both boolean and index variants
- Clean string representation for console debugging
- Fully encapsulated internals using private class fields (`#`)

## Usage

```js
import LinkedList from './linkedList.js';

const list = new LinkedList();

list.append('dog');
list.append('cat');
list.prepend('fish');

console.log(list.toString());
// ( fish ) -> ( dog ) -> ( cat ) -> null

list.contains('cat');   // true
list.find('dog');       // 1
list.at(0).data;        // 'fish'

list.insertAt('bird', 2);
list.removeAt(0);
list.pop();

list.size();            // 2
```

## API

| Method | Description |
|---|---|
| `append(value)` | Adds a node to the end — O(1) |
| `prepend(value)` | Adds a node to the start — O(1) |
| `at(index)` | Returns the node at the given index; throws if out of range |
| `contains(value)` | Returns `true` if the value exists in the list |
| `find(value)` | Returns the index of the first matching node, or `null` |
| `insertAt(value, index)` | Inserts a node at the given index |
| `removeAt(index)` | Removes the node at the given index |
| `pop()` | Removes the last node; throws if the list is empty |
| `size()` | Returns the number of nodes |
| `head()` | Returns the first node |
| `tail()` | Returns the last node |
| `toString()` | Returns `( value ) -> ( value ) -> null`; `null` if empty |

## Implementation Notes

**Head and tail tracking** — both references are kept up to date on every mutation. `append` is O(1) as a result; no traversal needed.

**`at(index)`** — traverses from the head, O(n). Used internally by `insertAt` and `removeAt` to find the predecessor node.

**`pop()`** — traverses to find the second-to-last node to update `#tail`. This is O(n) — an inherent limitation of singly linked lists without a back-pointer.

**`insertAt` / `removeAt`** — both delegate to edge cases first (index 0 → `prepend`/head removal, index = size → `append`/`pop`), then handle the middle case by rewiring `next` pointers.

**Encapsulation** — `#head`, `#tail`, and `#size` are private class fields. All state changes go through the public interface.

## Complexity

| Operation | Time |
|---|---|
| `append`, `prepend` | O(1) |
| `at`, `find`, `contains`, `pop` | O(n) |
| `insertAt`, `removeAt` | O(n) |
| `size`, `head`, `tail` | O(1) |

## Concepts Practiced

- Singly linked list structure and pointer manipulation
- Private class fields (`#`) and encapsulation
- Edge case handling (empty list, head/tail operations, single-node list)
- O(1) vs O(n) tradeoffs in linear data structures
