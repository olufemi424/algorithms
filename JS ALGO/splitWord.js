// const paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.";

// const banned = ["hit", "hi"];

// const mostCommon = (paragraph, banned) => {
//   //get the array
//   const paragraphArray = paragraph
//     .replace(/[\. ,:-]+/g, " ")
//     .trim()
//     .split(" ");

//   let bannedCount = 0;
//   let itemCount = 0;
//   let result = "";
//   let bannedItem = null;

//   //   while (result !== bannedItem) {
//   //loop thru the banned
//   for (let i = 0; i < banned.length; i++) {
//     //  access to banned
//     bannedItem = banned[i].toLowerCase();

//     for (let i = 0; i < paragraphArray.length; i++) {
//       // console.log(bannedItem);
//       // console.log(paragraphArray[i]);
//       if (paragraphArray[i].toLowerCase() === bannedItem) {
//         bannedCount++;
//       }

//
//         const filterRecurrence = paragraphArray.filter(
//           item => item.toLowerCase() === paragraphArray[j].toLowerCase()
//         );

//         if (filterRecurrence.length >= itemCount) {
//           itemCount = filterRecurrence.length;
//         }

//         if (filterRecurrence.length === itemCount) {
//           result = paragraphArray[j];

//           // if (result !== bannedItem) {
//           //   console.log(result, bannedItem);
//           // }
//         }
//       }
//     }
//     //  }
//   }

//   // console.log(bannedCount);
//   // console.log(itemCount);
//   // console.log(result);
// };

// mostCommon(paragraph, banned);
// hashmap
// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4,
//   e: 5,
//   f: 6
// };

//array
// for (let i in obj) {
//   console.log(i, obj[i]);
// }

//object
// for (let prop in obj) {
//   console.log(prop);
// }

// const sortColors = nums => {
//   let output = [];
//   const red = nums.filter(num => num === 0).length;
//   const white = nums.filter(num => num === 1).length;
//   const blue = nums.filter(num => num === 2).length;

//   console.log(red, white, blue);

//   let colors = {
//     red: red,
//     white: white,
//     blue: blue
//   };

//   for (color in colors) {
//     for (let i = 1; i <= colors[color]; i++) {
//       // console.log(color, i);
//       if (color === "red") {
//         output.push(0);
//       } else if (color === "white") {
//         output.push(1);
//       } else {
//         output.push(2);
//       }
//     }
//   }
//   console.log(output);
// };

// sortColors([2, 0, 2, 1, 1, 0, 2, 2, 1, 2, 2]);
// const num = "1432219";
// const k = 3;
// let newNum, indexNom;
// var removeKdigits = function(num, k) {
//   newNum = num.split("");
//   indexNom = newNum.indexOf("3");

//   console.log(
//     indexNom,
//     newNum[indexNom - 1],
//     newNum[indexNom],
//     newNum[indexNom + 1]
//   );
// };

// removeKdigits(num, k);

// const fibonacciRecursiveArray = function(num, cache = [0, 1]) {
//   if (num === 0) return 0;
//   if (num === 1) return 1;
//   else if (num <= cache.length) {
//     console.log(cache);
//     //return index number one less because a fibonacci call returns a sum of the previous two elements
//     return cache[num - 1];
//   } else {
//     let temp =
//       fibonacciRecursiveArray(num - 1, cache) +
//       fibonacciRecursiveArray(num - 2, cache);
//     cache.push(temp);
//     return temp;
//   }
// };
// console.log(fibonacciRecursiveArray(10));

// function fibonacciRecursiveObjDefault(num, cache = {}) {
//   //base case as normal
//   if (num === 0) return 0;
//   else if (num === 1) return 1;
//   if (cache[num]) return cache[num]; //retrieve cached data if exists
//   let output =
//     fibonacciRecursiveObjDefault(num - 1, cache) +
//     fibonacciRecursiveObjDefault(num - 2, cache); //recursive call as normal
//   cache[num] = output; //store output into the cache for future use

//   return output;
// }

// console.log(fibonacciRecursiveObjDefault(10));

for (let i = 2; i <= 5; i++) {
  console.log(i);
}
