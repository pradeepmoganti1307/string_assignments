// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "    stone   ";
// Remove spaces at the start and end of the given string
// If string = " spaces at the start and the end "
// Then print "spaces at the start and the end"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let index = 0;

while (string[index] === ' ') {
    index = index + 1;
}

const intialCharPosition = index;
index = string.length - 1;

while (string[index] === ' ') {
    index = index - 1;
}

const finalCharPosition = index;
let trimmedString = '';

for (index = intialCharPosition; index <= finalCharPosition; index++) {
    trimmedString = trimmedString + string[index];
}

console.log(trimmedString);

// testcases ->
//     "     stone     " -> "stone"
//     "     stone     age    " -> "stone     age"
//     "          " -> ""
//     "" -> ""
//     "      stone" -> "stone"
//     "stone     " -> "stone"