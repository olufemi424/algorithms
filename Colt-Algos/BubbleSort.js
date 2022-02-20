export const bubbleSort = (arr) => {
    console.log(arr);

    // start looping from the back (which helps us keep track of the length of unswapped items)
    //  by the end of the first iteration, we will have the biggest item at the back, there is no need to 
    // compare or swap that.
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log('For every item from the back', arr)

        //  inner loop to check for every unswaped items, leaving the last of the previous loop
        //  we want to be able to compare current and the next item in the loop
        for (let j = 0; j <= i - 1; j++) {

            console.log('we want to compare in pairs of two', arr[j], arr[j + 1])

            // if we find an element that is not in the right order, we swap them
            if (arr[j] > arr[j + 1]) {

                console.log('if they match', arr[j], arr[j + 1], 'sawp');
                // easy swap function
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]

            }

        }
    }
    console.log(arr)
    return arr;
}

// Optimized
export const bubbleSort = (arr) => {
        console.log(arr);

        let noSwaps;

        // start looping from the back (which helps us keep track of the length of unswapped items)
        //  by the end of the first iteration, we will have the biggest item at the back, there is no need to 
        // compare or swap that.
        for (let i = arr.length - 1; i >= 0; i--) {
            console.log('For every item from the back', arr)

            noSwaps = true; // need to break out of the inner look if there is no swap

            //  inner loop to check for every unswaped items, leaving the last of the previous loop
            //  we want to be able to compare current and the next item in the loop
            for (let j = 0; j <= i - 1; j++) {

                console.log('we want to compare in pairs of two', arr[j], arr[j + 1])

                // if we find an element that is not in the right order, we swap them
                if (arr[j] > arr[j + 1]) {

                    console.log('if they match', arr[j], arr[j + 1], 'sawp');
                    // easy swap function
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]

                    noSwaps = false;
                }

                if (noSwaps) break;
            }
        }
        console.log(arr)
        return arr;
    }
    // bubbleSort([1, 4, 63, 35, 25, 64, 667, 443, 24, 67, 23, 75])