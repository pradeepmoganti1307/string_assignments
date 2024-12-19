// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "this is a statement";
const start = -3;
const end = 100;
// Print the substring from the given string using start index and end index.
// If string = "this is a statement", start = 3 and end = 9, then print "s is a "
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

// normal - string = "this is a statement"; const start = 3; const end = 9; substring = "s is a "
// fullLength -  string = "this is a statement"; const start = 0; const end = 18; substring = "this is a statement"
// empty - string = ""; const start = 1; const end = 8; substring = ""
// -ve to -ve - string = "hello good morning"; const start = -5; const end = -1; substring = ""
// -ve to +ve - string = "hello good morning"; const start = -5; const end = 100; substring = "hello good morning"

let substring = '';
const ZERO = 0;
const beginningOfString = start > -1 ? start : ZERO;
const endingOfString = end < string.length ? end : string.length - 1;

for (let index = beginningOfString; index <= endingOfString; index++) {
    substring = substring + string[index];
}

console.log(substring);