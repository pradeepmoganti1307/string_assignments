// Do not rename string and charToFind, use them as input for your program.
// While testing we will change their values.
const string = 'cbcdef';
const charToFind = 'c';
// Print the first index of the character in given string. Consider case sensitivity.
// If character not present in string print -1
// If string = "abccdef" and charToFind = "c", then output should be 2
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

const noOfCharacters = string.length;
let firstIndex = -1;

for (let counterForCharacters = 0; counterForCharacters < noOfCharacters; counterForCharacters++) {
   firstIndex = ((charToFind === string[counterForCharacters]) ? counterForCharacters : -1); 
   counterForCharacters = ((firstIndex >= 0) ? noOfCharacters : counterForCharacters);
}

let sentence = "hi this is a sentence";
sentence = "hi this is a not a sentence";
console.log(sentence);
