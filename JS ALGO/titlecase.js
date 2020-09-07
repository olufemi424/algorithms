// //TITLE CASE
// var word = "i am a little tea pot";
// function titleCase(str) {
//   //change setence to lowercase and also split them in an array
//   var words = str.toLowerCase().split(" ");

//   //loop
//   for (var i = 0; i < words.length; i++) {
//     //   select first letter of each work
//     //slice method cut off the first letter
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//   }
//   //   return joint string
//   return words.join(" ");
// }

//OR

// var word = "i am a little tea pot";
// function titleCase(str) {
//   var titled = str
//     .toLowerCase()
//     .split(" ")
//     .map(function(elem) {
//       return elem[0].toUpperCase() + elem.slice(1);
//     });
//   //   return joint string
//   return titled.join(" ");
// }

// console.log(titleCase(word));
