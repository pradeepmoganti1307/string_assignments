// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "statement with spaces";
// Replace all spaces with underscore "_"
// If string = "statement with spaces"
// Then print "statement_with_spaces"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let underscoredString = '';

for (let index = 0; index < string.length; index++) {
    const stringChar = string[index] === ' ' ? '_' : string[index];
    underscoredString = underscoredString + stringChar;
}

console.log(underscoredString);

// testcases ->
//     "Most of the birds can fly" -> "Most_of_the_birds_can_fly"
//     "      " -> "______"
//     "   hi   " -> "___hi___"
//     "" -> ""