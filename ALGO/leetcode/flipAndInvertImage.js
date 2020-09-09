// 832. Flipping an Image

// Given a binary matrix A, we want to flip the image horizontally, then invert it, and return the resulting image.

// To flip an image horizontally means that each row of the image is reversed.  For example, flipping [1, 1, 0] horizontally results in [0, 1, 1].

// To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0. For example, inverting [0, 1, 1] results in [1, 0, 0].

const flipAndInvertImage = function(A) {
  let newMatrix = [];

  //iterate thru matrix
  for (let i = 0; i < A.length; i++) {
    //take each image
    let image = A[i];

    //reverse image
    image.reverse();

    //iterate thru image
    let newImage = image.map(pixel => {
      if (pixel === 1) {
        return 0;
      } else {
        return 1;
      }
    });

    newMatrix.push(newImage);
  }

  return newMatrix;
};

console.log(
  flipAndInvertImage([[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]])
);
