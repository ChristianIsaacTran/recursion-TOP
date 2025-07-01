/* eslint-disable no-magic-numbers */
// turned off eslinting for magic-numbers because I am defining beginning numbers in the array
import "./style.css";

/*
    doing fibonacci sequence first according to project directions
    write a function that does the fibonacci sequence ITERATIVELY 

    1. Accepts a given number into the function
    2. function returns an array with that number of the fibonacci sequence

    note: the fibonacci sequence is that every number is the sum of the last 2 numbers before it. 
    for example, for a fibonacci sequence of 6, its:
    [0, 1, 1, 2, 3, 5]

    0 : 0 + nothing = 0
    1 : 0 + 1 = 1
    1 : 0 + 1 = 1
    2 : 1 + 1 = 2
    3 : 1 + 2 = 3
    5 : 3 + 2 = 5

    and so on...
    every fibonacci sequence starts with 0 and 1 it seems.
*/

console.log(
    "-------------------THIS IS THE START OF FIBONACCI-------------------",
);
function fibs(num) {
    const fibSequence = [0, 1];

    // check if number given is either 0, or 1 because the fibonacci sequence always starts with 0 and 1. Return array if user wants fibonacci to index 0 or 1.
    // otherwise, go through loop
    if (num === 0 || num === 1) {
        // .slice(start, end) is exclusive, not including the end index so +1
        return fibSequence.slice(0, num + 1);
    }

    for (let i = 2; i <= num; i += 1) {
        // get the first previous number (operand 1)
        const firstPrevNum = fibSequence[i - 2];

        // get the second previous number (operand 2)
        const secondPrevNum = fibSequence[i - 1];

        // the next number is the sum of the previous two numbers
        // so operand1 + operand2 = next number in fib sequence
        fibSequence.push(firstPrevNum + secondPrevNum);
    }

    return fibSequence;
}

console.log(fibs(0));
console.log(fibs(1));
console.log(fibs(5));
console.log(fibs(10));
console.log(fibs(14));

// now do the example of fibonacci but with recursion
function fibsRec(num) {
    const fibSequence = [];

    for (let i = num; i >= 0; i -= 1) {
        fibSequence.push(calculateFibNum(i));
    }

    return fibSequence.reverse();
}

function calculateFibNum(num) {
    // base case because fib(0) = 0  and fib(1) = 1
    if (num === 0 || num === 1) {
        return num;
    }

    // keep recursing until we get the fib number
    return calculateFibNum(num - 1) + calculateFibNum(num - 2);
}

console.log(fibsRec(3));
console.log(fibsRec(0));
console.log(fibsRec(1));
console.log(fibsRec(5));
console.log(fibsRec(10));
console.log(fibsRec(14));

// alright, work on merge sort
/*
    1.function should take in an unsorted array
    2.function should return a sorted array after merge sort process
    using a recursive methodology

    merge sort: separating an unsorted array into smaller 
    arrays, then sorting them, then "merging" them into 
    one sorted array.

    pseudocode: 
    1. sort left side 
    2. sort right side 
    3. merge together (in a new array?)
*/
console.log(
    "-------------------THIS IS THE START OF MERGE SORT-------------------",
);

function mergeSort(unsortedArr) {
    // do the beginning split of the array to go through sort process
    const unsortedArrLength = unsortedArr.length;
    const leftArr = unsortedArr.slice(0, unsortedArrLength / 2);
    const rightArr = unsortedArr.slice(
        unsortedArrLength / 2,
        unsortedArrLength,
    );

    console.log("STARTING UNSORTED ARRAY: " + unsortedArr);
    console.log("Left Array (starting split): \n" + leftArr);
    console.log("Right Array (starting split): \n" + rightArr);

    // pass left and right halves into their recursive sorting
    const sortedArr = sort(leftArr, rightArr);

    return sortedArr;
}

function sort(leftArr, rightArr) {
    /*  if the given array is still not a single element array,
    then keep recursively splitting the array in half.

    if it IS a single element, it is ready to be merged with 
    merge() function. Send both arrays to be merged togther
    and return the merged array.
    */

    console.log("passed Left side Array (sort): " + leftArr);
    console.log("passed Right side Array (sort): " + rightArr);

    let newLeftArr_LEFT;
    let newRightArr_LEFT;

    let newLeftArr_RIGHT;
    let newRightArr_RIGHT;

    let mergedLeftArr;
    let mergedRightArr;

    // split if its not a single element array
    // 1. left side sorting and merging
    if (leftArr.length > 1) {
        newLeftArr_LEFT = leftArr.slice(0, leftArr.length / 2);
        newRightArr_LEFT = leftArr.slice(leftArr.length / 2, leftArr.length);
        mergedLeftArr = sort(newLeftArr_LEFT, newRightArr_LEFT);
    } else if(leftArr.length <= 1 && rightArr.length > 1) {
        mergedLeftArr = leftArr.slice();
    }
    else {
        console.log("LEFT SIDE MERGE RETURNED");
        return merge(leftArr, rightArr);
    }

    // 2. right side sorting and merging
    if (rightArr.length > 1) {
        newLeftArr_RIGHT = rightArr.slice(0, rightArr.length / 2);
        newRightArr_RIGHT = rightArr.slice(
            rightArr.length / 2,
            rightArr.length,
        );
        mergedRightArr = sort(newLeftArr_RIGHT, newRightArr_RIGHT);
    } else if(rightArr.length <= 1 && leftArr.length > 1) {
        mergedRightArr = rightArr.slice();
    } 
    else {
        console.log("RIGHT SIDE MERGE");
        return merge(leftArr, rightArr);
    }

    // 3. merge together
    return merge(mergedLeftArr, mergedRightArr);
}

/* 
given a left and right array, merge them together and return
a single SORTED new array.
*/
function merge(leftArr, rightArr) {
    const mergedArr = [];

    // copying array because .shift() changes the original array even through reference
    const tempLeftArr = leftArr.slice();
    const tempRightArr = rightArr.slice();

    console.log(tempLeftArr);
    console.log(tempRightArr);

    while (tempLeftArr.length !== 0 || tempRightArr.length !== 0) {
        const firstLeftNum = tempLeftArr[0];
        const firstRightNum = tempRightArr[0];

        // check if either array is undefined after loop
        if (firstLeftNum === undefined && firstRightNum !== undefined) {
            mergedArr.push(firstRightNum);
            tempRightArr.shift();
        } else if (firstLeftNum !== undefined && firstRightNum === undefined) {
            mergedArr.push(firstLeftNum);
            tempLeftArr.shift();
        } else if (firstLeftNum > firstRightNum) {
            // if numbers are NOT undefined, then compare them. Smaller number goes first
            mergedArr.push(firstRightNum);
            tempRightArr.shift();
        } else if (firstLeftNum < firstRightNum) {
            mergedArr.push(firstLeftNum);
            tempLeftArr.shift();
        } else if (firstLeftNum === firstRightNum) {
            // if the numbers found are the same, just push the left one by default
            mergedArr.push(firstLeftNum);
            tempLeftArr.shift();
        }
    }

    console.log("Merged Array: " + mergedArr);

    return mergedArr;
}
// console.log(mergeSort([3,5,6,7,8]));
// console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
// console.log(mergeSort([105, 79, 100, 110]));

console.log(mergeSort([3, 1, -1]));
