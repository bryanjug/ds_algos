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

//number even or odd?
function even_or_odd(number) {
    if (number % 2 === 0) {
      return "Even";
    }
    if (number % 1 === 0) {
      return "Odd";
    }
}

//add all positive numbers
function positiveSum(arr) {
    var sum = 0;
    
    for (i = 0; i <= arr.length; i++) {
      if (arr[i] >= 0) {
        sum = sum + arr[i]; 
      }
    }
    return sum;
}

//order words by the number inside of them
function order(words){
    var re = /\D/g;
    
    var array = words.split(' ');
    array.sort(function(a, b) {
          return (parseInt(a.replace(re, ""), 10) - parseInt(b.replace(re, ""), 10));
    });
    
    return array.join(' ');
}

//order words by the number inside of them
function order(words){
    var array = words.split(' ');
    var sortedArray = [];
    
    //loop through each array item
    for(i = 0; i <= array.length; i++) { //"Thi1s is2 3a T4est"
      //loop through each array item
      for(j = 0; j < array.length; j++) { //"Thi1s is2 3a T4est"
        //if this looped array item's index of the first loop >= 0
  
        if(array[j].indexOf(i) >= 0) { 
          //add to new array with the looped array item
          sortedArray.push(array[j]);
        }
      }
    }
    //turn array into string
    return sortedArray.join(' ');
}

//shows number of likes on a post
function likes(names) {
    let message = "";
    
    if (names.length === 0) {
      message = "no one likes this";
    }
    if (names.length === 1) {
      message = names[0] + " likes this";
    }
    if (names.length === 2) {
      message = names[0] + " and " + names[1] + " like this";
    }
    if (names.length === 3) {
      message = names[0] + ", " + names[1] + " and " + names[2] + " like this";
    }
    if (names.length >= 4) {
      message = names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
    }
    
    return message;
}

//uppercase first letter of each word
String.prototype.toJadenCase = function () {
    let notCased = this.valueOf();
    let array = notCased.split(' ');
    let newArray = [];
    
    for (i = 0; i <= array.length; i++) {
      let newString = array[i].replace(array[i].charAt(0), array[i].charAt(0).toUpperCase());
  
      newArray.push(newString);
      console.log(newArray)
    }
    let cased = newArray.join(' ')
    return cased;
};

//get count of vowels
function getCount(str) {
    var vowelsCount = 0;
    
    for (i = 0; i <= str.length; i++) {
      if (str.charAt(i) === "a" || str.charAt(i) === "e" ||
         str.charAt(i) === "i" || str.charAt(i) === "o" ||
         str.charAt(i) === "u") {
        vowelsCount = vowelsCount + 1;
    }
}

return vowelsCount;

//accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
function accum(s) {
    let newString = "";
    let repeatedLetter = "";
    
    for (i = 0; i <= s.length; i++) {
      if (i === 0) {
        newString = s.charAt(i) + "-";
      } else {
        for (j = 0; j < i; j++) {
          repeatedLetter += s.charAt(i).toLowerCase();
        }
        if (i < s.length - 1 && i !== 0) {
          newString += s.charAt(i).toUpperCase() + repeatedLetter + "-";
        }
        if (i === s.length - 1) {
          newString += s.charAt(i).toUpperCase() + repeatedLetter;
        }
        repeatedLetter = "";
      }
    }
    return newString;
}