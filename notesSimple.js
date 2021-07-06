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
let array1 = [1,2,1];
let array2 = [1,9];

//O(n^2)
//indexOf, find = for loop
function same(array1, array2) {
    let count = 0;

    if (array1.length !== array2.length) console.log(false);

    for (i = 0; i < array1.length; i++) {
        let comparison = array2.find(element => element === array1[i] * array1[i])

        if (comparison) {
            count += 1;
            array2.splice(array2.indexOf(comparison), 1)
        }
    }
    if (count === array1.length) {
        console.log(true);
    } else {
        console.log(false);
    }
}

same(array1, array2);

//refactored, O(n^2)
//indexOf = for loop
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }
        console.log(arr2);
        arr2.splice(correctIndex,1)
    }
    return true;
}

same([1,2,3,2], [9,1,4,4])

//refactored, O(n)
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

same([1,2,3,2,5], [9,1,4,4,11])

//check if second string is an anagram of the first string
//O(n)
let anagram1 = "anagram";
let anagram2 = "nagaram";

function validAnagram(anagram1, anagram2) {
    if (anagram1.length !== anagram2.length) console.log("false");
    let counts1 = {};
    let counts2 = {};
    for (i = 0; i < anagram1.length; i++) {
        if (!counts1[anagram1[i]]) {
            counts1[anagram1[i]] = 1;
        } else {
            counts1[anagram1[i]] = ++counts1[anagram1[i]]
        }
    }
    for (i = 0; i < anagram2.length; i++) {
        if (!counts2[anagram2[i]]) {
            counts2[anagram2[i]] = 1;
        } else {
            counts2[anagram2[i]] = ++counts2[anagram2[i]]
        }
    }
    for (i = 0; i < Object.keys(counts1).length; i++) {
        if (!(Object.keys(counts1)[i] in counts2)) {
            console.log("false")
        }
        if (counts1[anagram1[i]] !== counts2[anagram1[i]]) {
            console.log("false");
        }
    }
    return true;
}

validAnagram(anagram1, anagram2);

