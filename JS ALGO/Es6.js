// var numArray = [];
// for (var i = 0; i < 3; i++) {
//   numArray.push(i);
// }
// console.log(numArray);
// // returns [0, 1, 2]
// console.log(i);
// // returns 3

// VAR AND LET COMPARISM
// var printNumTwo;
// for (var i = 0; i < 3; i++) {
//   if (i === 2) {
//     printNumTwo = function() {
//       return i;
//     };
//   }
// }
// console.log(printNumTwo());
// // returns 3

// ("use strict");
// // let printNumTwo;
// for (let i = 0; i < 3; i++) {
//   if (i === 2) {
//     printNumTwo = function() {
//       return i;
//     };
//   }
// }
// console.log(printNumTwo());
// // returns 2
// console.log(i);
// // returns "i is not defined"

//BLOCK SCOPE AND FUNCTION SCOPE
// function checkScope() {
//   "use strict";
//   let i = "function scope";
//   if (true) {
//     let i = "block scope";
//     console.log("Block scope i is: ", i);
//   }
//   console.log("Function scope i is: ", i);
//   return i;
// }

// checkScope();

// function printManyTimes(str) {
//   "use strict";

//   // change code below this line

//   const SENSTENCE = str + " is cool!";
//   for (let i = 0; i < str.length; i += 2) {
//     console.log(SENSTENCE);
//   }

//   // change code above this line
// }
// printManyTimes("freeCodeCamp");

//ARROW FUNCTION
// const magic = () => new Date();

// console.log(magic());

// const myConcat = function(arr1, arr2) {
//   "use strict";
//   return arr1.concat(arr2);
// };

// const myConcat = (arr1, arr2) => arr1.concat(arr2);
// // test your code
// console.log(myConcat([1, 2], [3, 4, 5]));

// const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
// const squareList = arr => {
//   let squaredIntegers = arr.filter(arr => arr > 0 && arr % 1 == 0);
//   squaredIntegers.forEach(
//     (element, index, array) => (array[index] = element * element)
//   );

//   return squaredIntegers;
// };
// const squaredIntegers = squareList(realNumberArray);
// console.log(squaredIntegers);

//OR

// const squareList = arr => {
//   const squaredIntegers = arr
//     .filter(num => num > 0 && num % parseInt(num) === 0)
//     .map(num => Math.pow(num, 2));
//   return squaredIntegers;
// };

// // test your code
// const squaredIntegers = squareList(realNumberArray);
// console.log(squaredIntegers);

// Set Default Parameters for Your Functions

// const increment = (function() {
//   return function increment(number = 1, value = 2) {
//     return number + value;
//   };
// })();
// console.log(increment(5, 2)); // returns 7
// console.log(increment(5)); // returns 6

// Use the Rest Operator with Function Parameters
// const sum = (function() {
//   "use strict";
//   return function sum(...args) {
//     // const args = [x, y, z];
//     return args.reduce((a, b) => a + b, 0);
//   };
// })();
// console.log(sum(1, 2, 3)); // 6

// const euros = [29.76, 41.85, 46.5];

// const sum = euros.reduce((total, amount) => total + amount);

// console.log(sum);

// const fruitBasket = [
//   "banana",
//   "cherry",
//   "orange",
//   "apple",
//   "cherry",
//   "orange",
//   "apple",
//   "banana",
//   "cherry",
//   "orange",
//   "fig"
// ];
// const count = fruitBasket.reduce((tally, fruit) => {
//   tally[fruit] = (tally[fruit] || 0) + 1;
//   return tally;
// }, {});

// console.log(count);

// // ?list
// fruitBasket.reduce((tally, fruit) => {
//   tally[fruit] = 1;
//   return tally;
// }, {});

//DESTRUCTURING
