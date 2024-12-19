// Do not rename string and charToFind, use them as input for your program.
// While testing we will change their values.
const string = 'adccdef';
const charToFind = 'e';
// Print the first index of the character in given string. Consider case sensitivity.
// If character not present in string print -1
// If string = "abccdef" and charToFind = "c", then output should be 2
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let index = 0;

while (string[index] !== charToFind && index < string.length) {
    index = index + 1;
}

const indexOfCharToFind = index === string.length ? -1 : index;
console.log(indexOfCharToFind);
                    
// testcases:
//     abccdef , c - > 2
//     abccdef , e - > 5
//     " ", e - > -1
//     abccdef , g -> -1
//     abccdef , a -> 0
//     abccdef , f -> 6