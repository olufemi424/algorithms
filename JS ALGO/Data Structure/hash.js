// Hashing is an important Data Structure which is designed to use a special function called the Hash function which is used to map a given value with a particular key for faster access of elements. The efficiency of mapping depends of the efficiency of the hash function used.

const hash = (string, max) => {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  return hash % max;
};

class HashTable {
  constructor() {
    this.storage = [];
    this.storageLimit = 10;
  }
  print() {
    console.log(this.storage);
  }

  add(key, value) {
    const index = hash(key, this.storageLimit);

    if (this.storage[index] === undefined) {
      this.storage[index] = [[key, value]];
    } else {
      let inserted = false;
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index][i][1] = value;
          inserted = true;
        }
      }

      if (inserted === false) {
        this.storage[index].push([key, value]);
      }
    }
  }

  remove(key) {
    const index = hash(key, this.storageLimit);
    if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
      delete this.storage[index][i];
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        delete this.storage[index][i];
      }
    }
  }

  lookup(key) {
    const index = hash(key, this.storageLimit);

    if (this.storage[index] === undefined) {
      return undefined;
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          return this.storage[index][i][1];
        }
      }
    }
  }
}

// console.log(hash("olufemi", 10));
// console.log(hash("beau", "person"));
// console.log(hash("fido", "dog"));

let ht = new HashTable();
ht.print();
ht.add("beau", "person");
ht.add("fido", "dog");
ht.add("rex", "dinosour");
ht.add("tux", "penguine");
ht.print();
console.log(ht.lookup("tux"));
