import { binarySearch } from './BinarySearch.js'
import { patternSearch } from './PatternSearch.js'
import { bubbleSort } from './BubbleSort.js'


// what is sorting ?
// Sorting is the process of rearranging the items in a collection (e.g. an array) so that the items are in some kind of order.
//  Exmaples
// Sorting numbers from smalest to largest
// Sorting names alphabetically 

// Sorting is an incredible common task, so its good to know how it works
// there are many differet ways to sort things, and different techniques have their own advantages and disadvantages

const sort = (arr) => {

    console.log(arr.sort())
    return arr.sort()
}

// sort([2, 6, 8, 3, 7, 5, 3, 8, 7, 3, 2, 7, 78, 8, 45, 57, 35, 6753, 46, ])

// binarySearch([2, 3, 4, 5, 7, 1, 43, 8, 6], 0)

// patternSearch("lorie, loled", "lol")

bubbleSort([1, 4, 63, 35, 25, 64, 667, 443, 24, 67, 23, 75])