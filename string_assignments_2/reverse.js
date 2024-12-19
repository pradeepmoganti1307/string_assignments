// Do not rename sentence, use it as input for your program.
// While testing we will change it's value.
const sentence = "     this is cool    ";
//  Reverse the sentence
// If sentence = "this is cool" then Output should be "cool is this"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let endOfWord = -1;
let startOfWord = -1;
let reversedString = '';
const SPACE = ' ';

for (let index = sentence.length - 1; index >= 0; index--) {
    if (sentence[index] !== SPACE && endOfWord === -1) {
        endOfWord = index;
        console.log(endOfWord);
    }
    if (sentence[index - 1] === SPACE && endOfWord !== -1) {
        startOfWord = index;
        console.log(startOfWord);
    }
    if (endOfWord > -1 && startOfWord > -1) {
        for (let newIndex = startOfWord; newIndex <= endOfWord; newIndex++) {
            reversedString = reversedString + sentence[newIndex];
        }
        endOfWord = -1;
        startOfWord = -1;
    }
    if (sentence[index] === SPACE) {
        reversedString = reversedString + SPACE;
    }
}

console.log(reversedString);