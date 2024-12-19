// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = 'multiple words';
// Print the no.of words in given string. Consider multiple spaces.
// If string = "multiple words" then output should be 2
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

const sentence = " " + string;
let totalWords = 0;

for (let index = 0; index < sentence.length - 1; index++) {
    if (sentence[index] === ' ' && sentence[index + 1] !== ' ') {
        totalWords = totalWords + 1;
    }
}

console.log(totalWords);

// testcases ->
//     "v s code means visual studio code" - > 7
//     "" - > 0
//     "      " - > 0
//     "  hi bro  " - > 2 
