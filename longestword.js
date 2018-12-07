// FINDING THE LONGEST WORD IN A STRING
// FINDING THE LONGEST WORD IN A STRING
var sentence = "the quick brown fox jumped over the lazy dog";

// function findLongestWord(str) {
//   return str.split(" ").sort(function(a, b) {
//     return b.length - a.length;
//   })[0];
//OR
//split the works
//   var wordArr = str.split(" ");
//   longestWord = 0;
//   loop thru the words for the longest
//   for (var i = 0; i < wordArr.length; i++) {
//     var wordLength = wordArr[i].length;

//     if (wordLength > longestWord) {
//       longestWord = wordLength;
//     }
//   }
//   return longestWord;
// }

function longestWord(sen) {
  //filter
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
  // console.log(wordArr);

  //sort by length
  const sorted = wordArr.sort((a, b) => b.length - a.length);
  // console.log(sorted);

  //if multiple words
  const longestWordArr = sorted.filter(
    word => word.length === sorted[0].length
  );

  // console.log(longestWordArr);
  //check if more than one work
  if (longestWordArr.length === 1) {
    return longestWordArr[0];
  } else {
    return longestWordArr;
  }
}

// console.log(longestWord("the quick brown fox jumped over the lazy dog ?"));
// console.log(longestWord("! i can say i am getting better by the day, yay!!!"));
