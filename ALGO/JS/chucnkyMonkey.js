// function chunkArrayInGroup(arr, size) {
//   var groups = [];

//   // while the arr lengt is less greater than two
//   while (arr.length > 0) {
//     groups.push(arr.slice(0, size));
//     arr = arr.slice(size);
//   }
//   return groups;
// }

// // console.log(chunkArrayInGroup(["a", "b", "c", "d", "e", "f"], 4));

// // splice is cut the array off( change initial variable)

// const ade = ["a", "b", "c", "d", "e", "f"];

// console.log("splice: " + ade);
// console.log("splice: " + ade.splice(0, 2));
// console.log("return: " + ade);

// // slice is a copy of the Array
// const ade1 = ["a", "b", "c", "d", "e", "f"];
// console.log("slice: " + ade1);
// console.log("slice: " + ade1.slice(0, 2));
// console.log("return: " + ade1);
// ***********************************

const ade = ["a", "b", "c", "d", "e", "f", "g"];

function chunckedArray(arr, len) {
  // const chunckedArr = [];

  // let i = 0;
  // while (i < arr.length) {
  //   chunckedArr.push(arr.slice(i, i + len));

  //   i += len;
  // }
  // return chunckedArr;

  //OR
  const chunckedArr = [];

  arr.forEach(val => {
    const last = chunckedArr[chunckedArr.length - 1];
    if (!last || last.length === len) {
      chunckedArr.push([val]);
    } else {
      last.push(val);
    }
  });
  return chunckedArr;
}

// console.log(chunckedArray(ade, 2));
