// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = 'abcdefghi';
// Print the number of vowles in given string. Consider case sensitivity.
// If string = "abcdefghi" then output should be 3
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let noOfVowels = 0;

for (let index = 0; index < string.length; index++) {
    switch (string[index]) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
        case 'A':
        case 'E':
        case 'I':
        case 'O':
        case 'U':
            noOfVowels = noOfVowels + 1;
    }
}

console.log(noOfVowels);
