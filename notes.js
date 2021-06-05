//time complexity: amount of time used
//slower - add up to first
//O(n)
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
      total += i;
    }
    return total;
}
console.log(addUpTo(30000))
// var t1 = performance.now();
// addUpTo(1000000000);
// var t2 = performance.now();
// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

//faster - add up to second
//O(1)
function addUpTo(n) {
    return n * (n + 1) / 2;
}
console.log(addUpTo(30000))

//https://rithmschool.github.io/function-timer-demo/
//tests big O notation

//count up and down
//O(n)
function countUpAndDown(n) {
    console.log("Going up!");
    for (var i = 0; i < n; i++) {
      console.log(i);
    }
    console.log("At the top!\nGoing down...");
    for (var j = n - 1; j >= 0; j--) {
      console.log(j);
    }
    console.log("Back down. Bye!");
}

//print all pairs
//O(n^2)
function printAllPairs(n) {
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n; j++) {
        console.log(i, j);
      }
    }
}
//O(n) = O(2n) or O(n + 10)
//O(1) = O(500)
//O(n^2) = O(13n^2) or O(n^2 + 5n + 8)
//O(n^3) = O(n^2 + n^3)

//O(n)
function logAtLeast5(n) {
    for (var i = 1; i <= Math.max(5, n); i++) {
        console.log(i);
    }
}

//O(1) 
//because it went from O(n) to O(1) and stayed constant
function logAtMost5(n) {
    for (var i = 1; i <= Math.min(5, n); i++) {
        console.log(i);
    }
}

//time complexity

//SLOW
//O(n^2)
//O(nlog n)
//O(n)
//O(log n)
//O(1)
//FAST

//space complexity: amount of memory used

//most primitives (booleans, numbers, undefined, null) are constant space
//strings require O(n) space (where n is the string length)
//reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

//O(1) space
function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

//O(n) space
function double(arr) {
    let newArr = []; //n numbers
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
    }
    return newArr; //n numbers
}

//O(1) space
function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}

//O(n)
function subtotals(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
}

//analyzing performance of arrays and objects
let instructor = {
    firstName: "Kelly",
    isInstructor: true,
    favoriteNumbers: [1,2,3,4]
} //unordered key value pair


//When to use objects
//When you don't need order
//When you need fast access / insertion and removal

//Big O of Objects
// Insertion -   O(1)
// Removal -   O(1)
// Searching -   O(N)
// Access -   O(1)

// Object.keys -   O(N)
// Object.values -   O(N)
// Object.entries -   O(N)
// hasOwnProperty -   O(1)

//What is the big O for adding a key and value into an object?
//O(1)

//array:
//let names = ["Michael", "Melissa", "Andrea"];

//unordered key value pair:
//let values = [true, {}, [], 2, "awesome"];

//Big O of Arrays:
// Insertion -   It depends....
// Removal -   It depends....
// Searching -   O(N)
// Access -   O(1)

//adding elements to the beginning of an array is costly
//changes all indexes

// push -   O(1)
// pop -   O(1)
// shift -   O(N)
// unshift -   O(N)
// concat -   O(N)
// slice -   O(N)
// splice -   O(N)
// sort -   O(N * log N)
// forEach/map/filter/reduce/etc. -   O(N)

//frequency counter pattern
//SLOW
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

//FAST
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
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
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

//given two strings, write a function to determine if the second 
//string is an anagram of the first. (word, phrase, or name formed 
//by rearranging the letters of another) 

function validAnagram(arr1, arr2){
    if (arr1.length !== arr2.length) {
        return false;
    }
    
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for (let key in frequencyCounter1) {
        if(frequencyCounter2[key] !== frequencyCounter1[key]) {
            return false;
        }
    }

    return true;
}

validAnagram('qwerty', 'ytrewq');

//same anagram as above
function validAnagram(first, second) {
    if (first.length !== second.length) {
      return false;
    }
  
    const lookup = {};
  
    for (let i = 0; i < first.length; i++) {
      let letter = first[i];
      // if letter exists, increment, otherwise set to 1
      lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup)
  
    for (let i = 0; i < second.length; i++) {
      let letter = second[i];
      // can't find letter or letter is zero then it's not an anagram
      if (!lookup[letter]) {
        return false;
      } else {
        lookup[letter] -= 1;
      }
    }
  
    return true;
  }
  
  // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
  validAnagram('anagrams', 'nagaramm')

function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    
    var i = 0;
    
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
countUniqueValues([1,2,2,5,7,7,99])

//n^2 TOO SLOW
function maxSubarraySum(arr, num) {
    if ( num > arr.length){
      return null;
    }
    var max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i ++){
      temp = 0;
      for (let j = 0; j < num; j++){
        temp += arr[i + j];
      }
      if (temp > max) {
        max = temp;
      }
    }
    return max;
}
  
maxSubarraySum([2,6,9,2,1,8,5,6,3],3)
  
//O(N)
function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
      maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        //subtracts the element on the left and adds the one on the
        //right in order to subtract the last maximum from the new max
        //in order to find the TRUE max
      tempSum = tempSum - arr[i - num] + arr[i]; 
      maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3],3)

//linear search O(n)
//binary search O(log n) - divide array up

//time: O(n) 
//frequency counter - given 2 positive integers, find out if the
//two numbers have the same frequency of digits
function sameFrequency(first, second){
    first = first.toString();
    second = second.toString();
    
    if (first.length != second.length) {
        return false;
    }

    const lookup = {};

    for (let i = 0; i < first.length; i++) {
        let number = first[i];
        // if number exists, increment, otherwise set to 1
        lookup[number] ? lookup[number] += 1 : lookup[number] = 1;
    }
    console.log(lookup)

    for (let i = 0; i < second.length; i++) {
        let number = second[i];
        // can't find letter or letter is zero then it's not an anagram
        if (!lookup[number]) {
          return false;
        } else {
          lookup[number] -= 1;
        }
      }
    
      return true;
}

//accepts variable number of arguments
//checks if duplicates are among arguments passed in
//solve using frequency counter pattern or multiple pointers pattern

//areThereDuplicates Solution (Frequency Counter)
//time: O(nlogn)
//space: o(1)
function areThereDuplicates() {
    let collection = {}

    for(let val in arguments){
      collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }

    for(let key in collection){
      if(collection[key] > 1) return true
    }

    return false;
}

//areThereDuplicates Solution (Multiple Pointers) 
//doesnt work??
function areThereDuplicates(...args) {
    // Two pointers
    args.sort((a,b) => a > b);
    
    let start = 0;
    let next = 1;

    while(next < args.length){
      if(args[start] === args[next]){
          return true
      }
      
      start++
      next++
    }
    return false
}

//time: o(n)
//space: o(1)
function averagePair(arr,avg){
    //check if array is empty
    if(arr.length === 0 ) {
        console.log(false)
        return false;
    }
    
     //create 2 ppointers
    let left = 0;
    let right = arr.length-1;

    //loop through the array
    while(left < right){
        //write condition to check avg
       let math = (arr[left]+arr[right])/2;
       
        if( math === avg) {
            console.log(true);
            return true;
        }
        else if(math > avg){
            right--;
        }
        else
         left++;
    }
    
    console.log(false);
    return false;
}

