//FUNCTION PALINDROME
//FUNCTION PALINDROME

// function palindrome(str) {
//   //check for regex (regular explressions)
//   var reg = /[\W_]/g;
//   //check for regex, replace functions takes in two arguements, what you want to be replaced and what you are replacing with is the second
//   var noneRegStr = str.replace(reg, "");

//   //change to lowercase
//   var lowerStr = noneRegStr.toLowerCase();
//   //change the arraye to reverse
//   var reversed = lowerStr
//     .split("")
//     .reverse()
//     .join("");
//   //   check if the reversed macth the original
//   if (reversed === str) {
//     return true;
//   }
//   return false;
// }

// console.log(palindrome("YEY"));

// stack pallindrom

// const letters = [];
// let word = "racecar";
// let rword = "";

// //put letters of word into stack
// for (let i = 0; i < word.length; i++) {
//   letters.push(word[i]);
// }

// // pop letters of words in reverse order
// for (let i = 0; i < word.length; i++) {
//   rword += letters.pop();
// }

// if (rword === word) {
//   console.log(word + " is a palindrome.");
// } else {
//   console.log(word + " is not palindrome.");
// }
