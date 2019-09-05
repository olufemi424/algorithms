
// return the value of any letter that comes after the the consecutive occurence of first and second letter - pretty easy


/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
    const textArray = text.split(' ');
    const result = [];
    for (let i = 0; i < textArray.length - 2; i++) {
        if (textArray[i] === first && textArray[i + 1] === second) result.push(textArray[i + 2]);
    }
    return result;
};



