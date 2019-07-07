// left child: i * 2
// right child: i * 2 + 1
// parent: i/2

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  insert(num) {
    this.heap.push(num); //push into the heap
    if (this.heap.length > 2) {
      //more than one item
      let idx = this.heap.length - 1;

      //if last inserted item is less than its parent, move it up
      while (this.heap[idx] < this.heap[Math.floor(idx / 2)]) {
        // not root node
        if (idx >= 1) {
          //swap the array
          [this.heap[Math.floor(idx / 2)], this.heap[idx]] = [
            this.heap[idx],
            this.heap[Math.floor(idx / 2)]
          ];
          //if parent node is more than  the root node.
          if (Math.floor(idx / 2) > 1) {
            idx = Math.floor(idx / 2);
          } else {
            break;
          }
        }
      }
    }
  }

  remove() {
    let smallest = this.heap[1];
    if (this.heap.length > 2) {
      this.heap[1] = this.heap[this.heap.length - 1];
      this.heap.splice(this.heap.length - 1);

      if (this.heap.length === 3) {
        if (this.heap[1] > this.heap[2]) {
          [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
          return smallest;
        }
      }

      let i = 1,
        left = 2 * i,
        right = 2 * i + 1;

      while (
        this.heap[i] >= this.heap[left] ||
        this.heap[i] >= this.heap[right]
      ) {
        if (this.heap[left] < this.heap[right]) {
          [this.heap[i], this.heap[left]] = [this.heap[left], this.heap[i]];
          i = 2 * i;
        } else {
          [this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]];
          i = 2 * i + 1;
        }

        left = 2 * i;
        right = 2 * i + 1;

        if (this.heap[left] == undefined || this.heap[right] == undefined) {
          break;
        }
      }
    } else if (this.heap.length == 2) {
      this.heap.splice(1, 1);
    } else {
      return null;
    }

    return smallest;
  }

  sort() {
    let result = new Array();
    while (this.heap.length > 1) {
      result.push(this.remove());
    }

    return result;
  }
}

const minheap = new MinHeap();
minheap.insert(2);
minheap.insert(1);
minheap.insert(3);
minheap.insert(7);
minheap.insert(0);

minheap.remove();
minheap.remove();

console.log(minheap);
