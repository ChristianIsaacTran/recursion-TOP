# This is part of the advanced javascript course where it is demonstrating recursion

1. Tasked with creating a function that will do the fibonacci sequence but recursively
2. Also recursively making the classic merge-sort

https://www.theodinproject.com/lessons/javascript-recursion

# Finished fibonacci:

Fibonacci is a sequence where every number is the sum of the past 
2 numbers before it, so in a recursive fashion I made 2 functions, 
fibsRec() to run the calculateFibNum function. fibsRec() is just a 
runner function that utilizes calculateFibNum() which actually does the 
recursion itself. calculateFibNum() takes in a given num parameter which 
represents the index of the fibonacci sequence we want to get/calculate 
recursively. The base case for fibonacci is when the number/index given 
is either 0 or 1 because index 0 and index 1 are always the starting numbers
in the fibonacci sequence so they would be either 0 or 1. Then, we can 
recursively call the number util we get to the base case of 0 or 1. We 
return the sum of the previous two fibonacci numbers recursively by passing 
the parameter (num - 1) (the first previous number) + (num - 2) (the second previous number) and so on. 

# Finished MergeSort:

So I took a very literal approach based on the pseudocode that was 
given in the CS50x lecture on the odin project, but it essentially said 
that the mergeSort algorithm is:

1. sort left side
2. sort right side
3. merge left and right AFTEr sorting them 

and they also said that the base case for the algorithm is when the array 
is of length 0 or 1, because a single element array is already considered 
"sorted" so no merging needed because its only one thing. When watching 
the examples, it looked like it recursively split up the left and right until 
it either got to the leaves or it got to an array/2 arrays that only had 
1 element in them, the tree's leaves as the CS50x class said. So
I split the unsorted array at the beginning and recursively 
solved the left side first, then the right side, while also keeping 
track of whether the left OR right side arrays NEED to be merged. 
They only need to be merged if they were split. After all the splitting 
and merging, it returns the mergedLeftArr and mergedRightArr respectively, 
then finally, merges THOSE arrays together to get our fully sorted 
array out of all that. I included a bunch of console.logs to 
show the step by step process on what my code is doing. Very happy with this 
one.

But yes, it keeps recursively going until it reaches either a split array 
that only has one element, or if it already CAME with only one element. 
If it was split, then merge. If not, then just skip the merge and 
assume that its sorted (since it only has one element in the array).

TL;DR : 
Go recursively if array needs to be "split"
Merge when given an array that can't be split or has only a single element 
    -> (merge) When merging, compare the two array's elements in order from 
    least to greatest, insert the lowest number between the two on loop into a new array until both arrays are empty, then return the new array.
    The CS50x class had a very good visual example on this process.

