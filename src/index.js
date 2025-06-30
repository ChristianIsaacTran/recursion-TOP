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
    
}