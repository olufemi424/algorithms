//RETURN LARGEST NUMBER IN ARRAY
// var arrSet = [
//   [4, 5, 1, 2],
//   [13, 27, 18, 26],
//   [32, 35, 37, 39],
//   [1000, 1001, 857, 1]
// ];

// function largestNum(arr) {
//   // init larget array
//   var maxes = [];
//   //loop
//   for (var i = 0; i < arr.length; i++) {
//     var currentMax = 0;
//     for (var j = 0; j < arr[i].length; j++) {
//       currentElement = arr[i][j];
//       if (currentElement >= currentMax) {
//         currentMax = arr[i][j];
//       }
//     }
//     maxes.push(currentMax);
//   }
//   return maxes;
// }

// OR

// function largestNum(arr) {
//   // init larget array
//   var maxes = [0, 0, 0, 0];
//   //loop
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr[i].length; j++) {
//       currentElement = arr[i][j];
//       if (currentElement >= maxes[i]) {
//         maxes[i] = currentElement;
//       }
//     }
//   }
//   return maxes;
// }

// console.log(largestNum(arrSet));
