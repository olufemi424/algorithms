// var count = 0;

// function cc(card) {
//   // Only change code below this line
//   var bet = 0;
//   switch (card) {
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//       count++;
//       break;
//     case 7:
//     case 8:
//     case 9:
//       count += 0;
//       break;
//     case 10:
//     case "J":
//     case "Q":
//     case "K":
//     case "A":
//       count--;
//       break;
//   }
//   return count =;
// }

// return "change me";
// // Only change code above this line

// console.log(cc(5));

// Setup
// var collection = {
//   "2548": {
//     album: "Slippery When Wet",
//     artist: "Bon Jovi",
//     tracks: ["Let It Rock", "You Give Love a Bad Name"]
//   },
//   "2468": {
//     album: "1999",
//     artist: "Prince",
//     tracks: ["1999", "Little Red Corvette"]
//   },
//   "1245": {
//     artist: "Robert Palmer",
//     tracks: []
//   },
//   "5439": {
//     album: "ABBA Gold"
//   }
// };
// // Keep a copy of the collection for tests
// var collectionCopy = JSON.parse(JSON.stringify(collection));
// console.log(collectionCopy);
// // Only change code below this line

// function updateRecords(id, prop, value) {
//   if (collection[id][prop] === "tracks" && collection[id][prop][value] !== "") {
//     if (collection[id][prop]) {
//       collection[id][prop].push(value);
//     } else {
//       collection[id][prop] = [value];
//     }
//   } else if (value !== "") {
//     collection[id][prop] = value;
//   } else {
//     delete collection[id][prop];
//   }
//   return collection;
// }

// // // Alter values below to test your code
// console.log(updateRecords(5439, "artist", "ABBA"));

// var ourArray = [];
// var i = 0;
// while (i <= 4) {
//   ourArray.push(i);
//   i++;
// }

// console.log(ourArray);

// var myArray = [];

// // Only change code below this line.

// for (var i = 1; i < 10; i++) {
//   if (i % 2 == 0) {
//     myArray.push(i);
//   }
// }

// console.log(myArray);

// var myArray = [];

// // Only change code below this line.
// for (var i = 9; i > 1; i -= 2) {
//   myArray.push(i);
// }
// console.log(myArray);

// var arr = [[1, 2], [3, 4], [5, 6]];
// for (var i = 0; i < arr.length; i++) {
//   for (var j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }

//multiply all number in a nested array
// function multiplyAll(arr) {
//   var product = 1;
//   // Only change code below this line
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr[i].length; j++) {
//       product *= arr[i][j];
//     }
//   }
//   // Only change code above this line
//   console.log(product);
// }

// // Modify values below to test your code
// multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

// var ourArray = [];
// var i = 0;
// do {
//   ourArray.push(i);
//   i++;
// } while (i < 5);

// console.log(ourArray);

//ranges
// var max = 9;
// var min = 3;
// var num = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(num);

// //convers string to an integer
// var a = parseInt("1127.0");
// console.log(a);

// //converts binary
// function convertToInteger(str) {
//   var a = parseInt(str, 2);
//   console.log(a);
// }

// convertToInteger("11111111");

// function checkSign(num) {
//   return num > 0 ? 1 : num < 0 ? -1 : 0;
// }

// console.log(checkSign(0));
