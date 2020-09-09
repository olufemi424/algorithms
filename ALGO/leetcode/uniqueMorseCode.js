//[0 -25]
const codes = [
  ".-",
  "-...",
  "-.-.",
  "-..",
  ".",
  "..-.",
  "--.",
  "....",
  "..",
  ".---",
  "-.-",
  ".-..",
  "--",
  "-.",
  "---",
  ".--.",
  "--.-",
  ".-.",
  "...",
  "-",
  "..-",
  "...-",
  ".--",
  "-..-",
  "-.--",
  "--.."
];

//convert each work to morse code
const wordToMorse = function(word) {
  const result = [];

  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    const code = codes[char.charCodeAt() - 97];
    result.push(code);
  }
  return result.join("");
};

/**
 * @param {string[]} words
 * @return {number}
 */
const uniqueMorseRepresentations = function(words) {
  let count = 0;
  const structure = {};

  words.forEach(word => {
    //convert to morse
    const morse = wordToMorse(word);
    //check if morse already exist
    //  hash for fast access

    if (!structure[morse]) {
      count += 1;
      structure[morse] = true;
    }
  });
  console.log(count);
  return count;
};

uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]);
