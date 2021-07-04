//SLOWEST TO FASTEST
//O(n^2)
//O(n log n)
//O(n)
//O(log n)
//O(1)

//TIME COMPLEXITY
//math => /,*,+,- => single operations
//for loop on each number => n additions, n assignments
//5n + 2 = n
//linear = n, quadratic = n^2, constant = 1
//always 3 opperations = O(1)
//multiple of n operations = O(n)
//nested loop = O(n^2)
//variable assignment, math, accessing element in array (index) or object (key) = O(1)

//SPACE COMPLEXITY
//booleans, numbers, undefined, null = O(1)
//strings = O(n) where n is length
//arrays and objects (keys) = O(n) where n is length

//LOGARITHMS
//log2(8) = 3 or 2^3 = 8
//3 = how many times we can divide 8 by 2
//searching (time), sorting (time), recursion (space)

//OBJECTS
//insertion, removal, access = O(1)
//searching = O(n)
//Object.keys, Object.values, Object.entries = O(n)
//hasOwnProperty = O(1)

//ARRAYS
//insertion, removal (push, pop) => last element = O(1), 1st element = O(n)
//searching = O(n)
//access = O(1)
//concat, slice, splice = O(n)
//sort = O(n * log n)
//forEach, map, filter, reduce = O(n)

//ALGORITHMS AND PROBLEM SOLVING PATTERNS
//UNDERSTAND THE PROBLEM
//Can I restate the problem in my own words?
//What are the inputs and outputs?
//Do I have enough information to solve?
//How should I label the important parts of data that are a part of the problem?

//EXPLORE EXAMPLES
//Start with simple examples
//progress to complex examples
//explore examples with empty inputs
//explore examples with invalid inputs

//BREAK IT DOWN
//write out steps => highlights problems

//SOLVE / SIMPLIFY
//solve, if you cant, solve a simpler problem
//find difficulty and temporarily ignore it
//write a simplified solution
//incorporate difficulty back in

//LOOK BACK AND REFACTOR
//can you check the result?
//can you solve it differently?
//can you understand it at a glance?
//can you use the result / method for another problem?
//can you improve the performance?
//can you think of other ways to refactor?
//how have others solved the problem?

//MASTER PROBLEM SOLVING PATTERNS
//frequency pattern
//multiple pointers
//sliding window
//divide and conquer
//dynamic programming
//greedy algorithms
//backtracking

//find if second object contains squared values in first object
//same([1,2,3], [4,1,9]) = true
//same([1,2,1], [1,9]) = false
//same([1,2,1], [4,4,1]) = false
let array1 = [1, 2, 1];
let array2 = [4, 4, 1];

function same(array1, array2) {
    
}

same(array1, array2);