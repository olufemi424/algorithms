export const binarySearch = (array, elem) => {
    let start = 0; // start of the array
    let end = array.length - 1; // end of the array
    var middle = Math.floor(array.length / 2); // middle of the array

    while (array[middle] !== elem && start <= end) { // if start !== end [ while the array in the middle is not equal to the element
        // and also the start is less than or equal to the end] . => while we havent seen what we are looking for and also we havent looked
        // at all the element, keep looking

        // if the element is less than what we have in the middle of the array, set a new end to be middle - 1
        // otherwise (i.e if the element is greater than what we have at the middle of the arrat) set the start to the middle + 1
        if (elem > array[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }

        // if none of that happens, then our element must be in the middle
        middle = Math.floor((start + end) / 2)
            // console.log(start, middle, end)
    }

    // console.log(array[middle] === elem ? middle : -1);
    // check if the number at middle is exactly what we are looking for, then return the index of the number (middle) else return a  - 1
    return array[middle] === elem ? middle : -1;
}

binarySearch([2, 3, 4, 5, 7, 1, 43, 8, 6], 0)

// initial start, middle and end of the array, while the array at the middle index is not eqal to our number, start index is less than or equal to the end then, 
// if the element is greater than array at middle, end becomes the middle minus one 
// else start becomes middle plus 1; 
// else middle become the start of the end divided by 2