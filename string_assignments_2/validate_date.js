// const format = 'yyyy-mm-dd';
// const date = '10000-11-10';

// Validate the given date against the format string

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

// const date = "01-12-2001" , format = "dd-mm-yyyy";
// const date = "29-02-2000" , format = "dd-mm-yyyy";
// const date = "2000-02-29" , format = "yyyy-mm-dd";
// const date = "2001-02-29" , format = "yyyy-mm-dd";
// const date = "30-13-2007" , format = "yyyy-mm-dd";
// const date = "13-30-2007" , format = "mm-dd-yyyy";
 const date = "02-29-2000" , format = "mm-dd-yyyy";
// const date = "00-00-0000" , format = "dd-mm-yyyy";


// 333-333333-22212

let isYear = false;
let isMonth = false;
let isOnlyDate = false;
let isDate = "invalid";
let year = "";
let month = "";
let onlyDate = "";
let validFormat = false;

const JAN = 1;
const FEB = 2;
const MAR = 3;
const MAY = 5;
const JUL = 7;
const AUG = 8;
const OCT = 10;
const DEC = 12;

if (format === 'yyyy-mm-dd') {
    year = +(date[0] + date[1] + date[2] + date[3]);
    month = +(date[5] + date[6]);
    onlyDate = +(date[8] + date[9]);
    if (date[4] === '-' && date[7] === '-' && date.length === 10) {
        validFormat = true;
    }
}

if (format === 'mm-dd-yyyy') {
    month = +(date[0] + date[1]);
    onlyDate = +(date[3] + date[4]);
    year = +(date[6] + date[7] + date[8] + date[9]);
    if (date[2] === '-' && date[5] === '-' && date.length === 10) {
        validFormat = true;
    }
}

if (format === 'dd-mm-yyyy') {
    onlyDate = +(date[0] + date[1]);
    month = +(date[3] + date[4]);
    year = +(date[6] + date[7] + date[8] + date[9]);
    if (date[2] === '-' && date[5] === '-' && date.length === 10) {
        validFormat = true;
    }
}


if (year > 0) {
    isYear = true;
}

if (month > 0 && month < 13) {
    isMonth = true;
}

const is31DaysmonthSet1 = month === JAN || month === MAY || month === JUL;
const is31DaysmonthSet2 = month === AUG || month === OCT || month === DEC;
const is31DaysmonthSet3 = month === MAR;

if (is31DaysmonthSet1 || is31DaysmonthSet2 || is31DaysmonthSet3) {
    if (onlyDate <= 31) {
        isOnlyDate = true;
    }
} else {
    if (onlyDate <= 30) {
        isOnlyDate = true;
    }
}

const isDividedBy4 = year % 4 === 0;
const isDividedBy100 = year % 100 === 0;
const isDividedBy400 = year % 400 === 0;
const isLeap = isDividedBy400 || (isDividedBy4 && !isDividedBy100);

if (month === FEB) {
    const febDays = isLeap ? 29 : 28;
    if (onlyDate > febDays) {
        isOnlyDate = false;
    }
}


if (isYear && isMonth && isOnlyDate && validFormat) {
    isDate = "valid";
}

console.log(isDate);
