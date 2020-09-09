//  QUESTION
//repeat a given dtring(first arguement) num times (sencond arguement). return an empty string is num is not a positive number

// function repearStringNumTimes(str, num) {
//   if (num < 0) return "";

//   return str.repeat(num);
// }

// console.log(repearStringNumTimes("abc", 3));

// function repearStringNumTimes(str, num) {
//   var final = "";
//   if (num < 0) return final;

//   for (var i = 0; i < num; i++) {
//     final += str;
//   }
//   return final;
// }

// console.log(repearStringNumTimes("abc", 3));

// function repearStringNumTimes(str, num) {
//   var final = "";
//   if (num < 0) return final;

//   for (var i = 0; i < num; i++) {
//     final += str;
//   }
//   return final;
// }

// console.log(repearStringNumTimes("abc", 3));

// function repearStringNumTimes(str, num) {
//   if (num < 0) return "";
//   if (num === 1) return str;

//   return str + repearStringNumTimes(str, num - 1);
//   s;
// }

// console.log(repearStringNumTimes("abc", 4));
