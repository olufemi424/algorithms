// naive search
const naiveSearch = (long, short) => {
    let count = 0;

    // loop over the longer staring (because we want to be able to check )
    for (let i = 0; i < long.length; i++) {


        // the second loop (nested) will run its entire loop over the shorter string, which will give us the opportunity 
        // to compare each character of the short string with the next neighbors of the long string 
        for (let j = 0; j < short.length; j++) {

            // console.log(short[j], long[i + j])

            const currentLetterShort = short[j]; // current short letter
            const currentLetterLong = long[i + j]; // currennt lonng letter

            // if the current string of the inner loop is not equal to the next string in the long string, then break, cos they are not a match
            if (currentLetterShort !== currentLetterLong) {
                console.log('Break')
                break // break out of the inner look, out loop continues to the next index
            }

            // if we didnt break out of the loop and we are at the last index of the short string, that mean we must have found a match hurray! 
            // the we can increment count, we have found one
            if (j === short.length - 1) {
                console.log('found 1')
                count++
            }
        }
    }
    // console.log(count)
    return count;
}

naiveSearch("lorie, loled", "lol")