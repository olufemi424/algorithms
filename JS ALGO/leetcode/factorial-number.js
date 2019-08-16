//FUNCTION FACTORIAL A NUMBER
//FUNCTION FACTORIAL A NUMBER

function factorialNumber(num) {
  // set the first number to 1, cos anything multiply by 1 is 1;
  var result = 1;
  //   loop thru the number
  for (var i = 1; i <= num; i++) {
    //   multiply each by i each time looping thru
    result = result * i;
  }
  return result;
}

// console.log(factorialNumber(8));

// const fac = num => {
//   let result = 1;

//   if (num <= 0) {
//     return (result = 0);
//   }

//   for (let i = 1; i <= num; i++) {
//     result *= i;
//   }

//   return result;
// };

// console.log(fac(4));
