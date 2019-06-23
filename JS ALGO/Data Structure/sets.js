function mySet() {
  //the collection will hold the set
  const collection = [];

  //this method will check for the presence of an element an return true or false
  this.has = function(element) {
    return collection.indexOf(element) !== -1;
  };
  //this method will return the values in the collection
  this.values = function() {
    return collection;
  };

  //this method will add values to the collection
  this.add = function(element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  //this method will remove value from the collection
  this.remove = function(element) {
    if (this.has(element)) {
      let index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  //this method will return the sice of the collection
  this.size = function() {
    return collection.length;
  };

  //this method will take one set and add it to another set, this will combine
  //sets and leave out the uplicates
  this.union = function(otherSet) {
    let unionSet = new mySet();
    let firstSet = this.values();
    let secondSet = otherSet.values();

    firstSet.forEach(function(e) {
      unionSet.add(e);
    });

    secondSet.forEach(function(e) {
      unionSet.add(e);
    });

    return unionSet();
  };

  //this method will return the intersection of two sets as a new set
  this.intersection = function(otherSet) {
    let intersectionSet = new mySet();
    let firstSet = this.values();

    firstSet.forEach(function(e) {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };

  //this method will return the difference of two sets as a new set
  this.difference = function(otherSet) {
    let differenceSet = new mySet();
    let firstSet = this.values();

    firstSet.forEach(function(e) {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  };

  this.subset = function(otherSet) {
    let firstSet = this.values();
    return firstSet.every(value => {
      return otherSet.has(value);
    });
  };
}

const a1 = new mySet();

console.log(a1);
console.log(a1.has(1));
console.log(a1.values());
console.log(a1.add(2));
console.log(a1.values());
