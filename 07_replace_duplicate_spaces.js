// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "statement      with    two spaces";
// Replace duplicate spaces with single space
// If string = "statement      with    two spaces"
// Then print "statement with two spaces"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let uniSpacedString = '';
const SPACE = ' ';

for (let index = 0; index < string.length - 1; index++) {
    if (string[index] === SPACE && string[index + 1] === SPACE) {
        continue;
    }
    uniSpacedString = uniSpacedString + string[index];
}

console.log(uniSpacedString);

// testcase:
//     "statement      with    two spaces" - > "statement with two spaces"
//     "     hi    hello     " -> " hi hello "
//     "        " - > " "
//     "" - > ""