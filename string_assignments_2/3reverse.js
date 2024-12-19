// Do not rename sentence, use it as input for your program.
// While testing we will change it's value.
const sentence = "this is cool";
//  Reverse the sentence
// If sentence = "this is cool" then Output should be "cool is this"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

const SPACE = " ";
let reversedSentence = '';
let word = '';

for (let index = 0; index < sentence.length; index++) {
    const isSpace = sentence[index] === SPACE;
    reversedSentence = (isSpace ? SPACE + word : "") + reversedSentence;
    word = (isSpace ? "" : word + sentence[index]);
}

reversedSentence = word + reversedSentence;
console.log(reversedSentence); 
