// write a function that takes in an array of numbers and return the largest num

// wtite a fucntion that takes in an array of numbers and return the smallest num

function findMax(arrNums) {
  let max = arrNums[0];
  for (let num of arrNums) {
    if (num >= max) {
      max = num;
    }
  }

  return max;
}

// console.log(findMax([77, -5, 2, 89, 44, 37]));
// console.log(findMax([-77, -5, 2, -89, -44, -37]));
