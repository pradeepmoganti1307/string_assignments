// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "hellollo";
const subString = "ll";
// Print the count of occurences of a substring in the given string
// If string = "duplicate substring statement" and subString = "ate", then print 2
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let countOfOccurences = 0;
let subIndex = 0;
let index = 0;

while (index < string.length) {
    if (string[index] === subString[subIndex]) {
        if (subIndex === subString.length - 1) {
            countOfOccurences = countOfOccurences + 1;
            index = index - subString.length + 2;
            subIndex = 0;
            continue;
        }
        subIndex++;
    }
    index++;
}

console.log(countOfOccurences);
