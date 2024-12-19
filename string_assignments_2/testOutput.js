function greet(name) {
    console.log("Hello, " + name + "!");
}

function add(a, b) {
    return a+b;
}

function isEven(num) {
    return num%2===0;
}

function printEven(num) {
    console.log(num + " is even.");
}

function printOdd(num) {
    console.log(num + " is odd.");
}

function printNumbers(start, end) {
    for (let i = start; i <= end; i++) {
        if (isEven(i)) {
            printEven(i);
        } else {
            printOdd(i);
        }
    }
}


test();
console.log();
console.log("this line will come at last")


function test() {
    greet("world");
    const sum = add(5, 10);
    console.log("The sum is: " + sum);
    console.log("Is 7 even? " + isEven(7));
    printNumbers(1,5);
}

const person = "devdatta";
console.log(person);
function num(person) {
    return person;
}

console.log(num(" is a gambler"));