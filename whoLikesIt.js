// You probably know the like system on FB, and other pages. Poeple can like the blog post and pictures and other items, we want to create the text that should be displayed next to such an item

function likes(names) {
  switch (names.length) {
    case 0:
      return "none one likes this";
    // break;
    case 1:
      return `${names[0]} likes this`;
    // break;

    case 2:
      return `${names[0]} and ${names[1]} likes this`;
    // break;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} likes this`;
    // break;
    default:
      return `${names[0]}, ${names[1]} and ${names.length - 2} likes this`;
  }
}

console.log(likes([]));
console.log(likes(["peter"]));
console.log(likes(["peter", "paul"]));
console.log(likes(["peter", "paul", "dre"]));
console.log(likes(["peter", "paul", "dre", "shola", "parker"]));
