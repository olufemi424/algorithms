// function countUniqueValues(arr){
//   // add whatever parameters you deem necessary - good luck!
//   const map = {}
//   let count = 0
  
//   if (!arr.length) return count;
  
//   for(let i = 0; i < arr.length; i++) {
//       map[arr[i]] ? map[arr[i]] += 1 : map[arr[i]] = 1;
//   }

//   for(let key in map) {

//     // increase the count
//     count++;
//   }
//   return count
// }

function countUniqueValues(arr) {
    console.log(arr)
    if (!arr.length) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
            i++; // move i forward
          arr[i] = arr[j]; // replace the current i value with j value
      }
      // console.log(i, j)
    }
  
    return i + 1;
  }
  
  countUniqueValues([1,2,3,4,2,1,4,5,6,2,5,6,2,6,7,2])
  countUniqueValues([1,2,3,4,2,1,4,5,6,2,5,6,2,6,7,2].sort((a,b)=> a - b))
  
  // note: if the array is sorted, we want to used a map
  // we only want to store the count of the value and return the 
  // number of keys in our map, using for in loop.
  
  // if the array is sorted, we can use pointers and 
  // with which we can store the unique value in front of 
  // the array and track the index of the last unique value