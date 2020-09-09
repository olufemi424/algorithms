//swap function
function swap(arr, firstIndex, secondIndex) {
  let temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
}

const bubbleSort = function(arr) {
  const len = arr.length;
  let i, j, stop;

  for (i = 0; i < len; i++) {
    for (j = 0; j < len - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
};

var randomArray = [2, 4, 6, 5, 6, 2, 1, 5, 6, 3, 2, 5, 3];
console.log(bubbleSort(randomArray));
