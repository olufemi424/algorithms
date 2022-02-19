const binarySearch = (array, elem) => {
    let start = 0;
    let end = array.length - 1;
    var middle = Math.floor(array.length / 2);

    while (array[middle] !== elem && start <= end) { // if start !== end

        if (elem > array[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }

        middle = Math.floor((start + end) / 2)
        console.log(start, middle, end)
    }

    console.log(array[middle] === elem ? middle : -1);
    return array[middle] === elem ? middle : -1;
}

binarySearch([2, 3, 4, 5, 7, 1, 43, 8, 6], 0)

// initial start, middle and end of the array, while the array at the middle index is not eqal to our number, start index is less than or equal to the end then, 
// if the element is greater than array at middle, end becomes the middle minus one 
// else start becomes middle plus 1; 
// else middle become the start of the end divided by 2