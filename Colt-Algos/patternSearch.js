// naive search
const naiveSearch = (long, short) => {
    let count = 0;

    // count over the longer string in the outer loop
    for (let i = 0; i < long.length; i++) {


        // nested loop, loop over the short string
        for (let j = 0; j < short.length; j++) {

            console.log(short[j], long[i + j])

            // inside the nested loop, check if the current item in short string at index j, is not equal to the item in 
            // long string at the index i + j
            if (short[j] !== long[i + j]) {
                console.log('Break')
                break // break out of the inner look, out loop continues to the next index
            }

            // if we could make it to the end of the short string and we didnt hit the break, we must have found a series of string that matchedsss
            if (j === short.length - 1) {
                console.log('found 1')
                count++
            }
        }
    }
    console.log(count)
    return count;
}


naiveSearch("lorie, loled", "lol")