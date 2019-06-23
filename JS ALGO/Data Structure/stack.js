const Stack = function() {
  this.count = 0;
  this.storage = {};

  // Adds a value onto the end of the stack
  this.push = function(value) {
    this.storage[this.count] = value;
    this.count++;
  };

  //remove and returns the value at the end of the stack
  this.pop = function() {
    if (this.count === 0) {
      return undefined;
    }

    this.count--; //zero indexed count
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  this.size = function() {
    return this.count;
  };

  this.peek = function() {
    return this.storage[this.count - 1];
  };
};

const a1 = new Stack();
a1.push("a");
a1.push("b");
a1.pop();
console.log(a1.size());
console.log(a1.peek());
console.log(a1);
