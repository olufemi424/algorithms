//FUNCTION REVERSED STRING

// function reverseString(str) {
//   //split seperate string and turn it into an array. it pass in an arguement of either an empty space or a space
//   var strArr = str.split("");

//   //reverse absolutely reverse the string in an array backwards
//   var reverseStr = strArr.reverse();

//   //convert back to string with the method join, also takes an arguenent of either an empty space or a space
//   var joinStrr = reverseStr.join("");

//   return joinStrr;
//   //OR
//   //return srt.split('').reverse().join('');
// }

// console.log(reverseString("hello"));

//FUNCTION REVERSED STRING TRADITIONAL
// function reverseString(str) {
//   var final = "";
//   for (var i = str.length - 1; i >= 0; i--) {
//     final += str[i];
//   }
//   return final;
// }

// console.log(reverseString("hello"));
