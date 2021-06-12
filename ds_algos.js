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
//shouldve used repeat() for faster speed
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

//find multiples of 5 and 3
function solution(number){
    var sum = 0;
    
    for(var i = 1;i< number; i++){
      if(i % 3 == 0 || i % 5 == 0){
        sum += i
      }
    }
    return sum;
}

//(1, -2) = -2 + -1 + 0 + 1 = -2
function GetSum( a,b )
{
   if (a == b) return a;
   else if (a < b) return a + GetSum(a+1, b);
   else return a + GetSum(a-1,b);
}

//same as above but with arithmetic progression sum
const GetSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
}

//replace all upercase and lowercase vowels from string
function disemvowel(str) {
    str = str.replace(/([aeiouAEIOU])/g, "");  
    return str;
}

//return highest and lowest numbers in an array of strings
function highAndLow(numbers){
    let array = numbers.split(" ");
    let arrayNumbers = [];
    let low = 0;
    let high = 0;
    let highAndLow = "";
        
    for (i = 0; i < array.length; i++) {
      arrayNumbers.push(parseInt(array[i]));
    }
    
    high = Math.max(...arrayNumbers);
    low = Math.min(...arrayNumbers);
    highAndLow = `${high} ${low}`;
    return highAndLow;
}

function highAndLow(numbers){
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}

//find number in array that has an odd count
function findOdd(arr) {
  var result, num = 0;

  arr = arr.sort();
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i+1]) {
      num++;
    } else {
      num++;
      if (num % 2 != 0) {
        result = arr[i];
        break;
      }
    }
  }
  return result;
}

function squareDigits(num){
  let newNum = "";
  let array = ("" + num).split("");
  
  for (i = 0; i < array.length; i++) {
    newNum = newNum + "" + array[i] * array[i];
  }
  
  return parseInt(newNum);
}

//turn array of numbers into phone number string
function createPhoneNumber(numbers){
  let phoneNumber = "";
  
  for (i = 0; i < numbers.length; i++) {
    phoneNumber = phoneNumber + numbers[i];
    if (i === 0) {
      phoneNumber = "(" + phoneNumber;
    }
    if (i === 2) {
      phoneNumber = phoneNumber + ") ";
    }
    if (i === 5) {
      phoneNumber += "-";
    }
  }
  
  return phoneNumber;
}

//same as above but without loop
function createPhoneNumber(numbers){
  numbers = numbers.join('');
  return '(' + numbers.substring(0, 3) + ') ' 
      + numbers.substring(3, 6) 
      + '-' 
      + numbers.substring(6);
}

//recursive function -> 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
function digital_root(n){
  n = eval(n.toString().split('').join('+'));

  if (n > 9) {
    return digital_root(n);
  }

  return n;
}

//add a space infront of any capital letter
function solution(string) {
  //" $1" gets the first instance of the regex match and places a space infront of the character
  return(string.replace(/([A-Z])/g, ' $1'));
}

//same as above but using map
function solution(string) {
  string = string.split('').map(function (el) {
    if (el === el.toUpperCase()) {
      el = ' ' + el
    }
    return el
  })
  return string.join('')
}

//check if a number can be squared
var isSquare = function(n){
  if((Math.sqrt(n) % 1) == 0)
    return true;
  else
    return false;
}

//make a fibonacci series with a number -> 0,1,1,2,3,5,8,13...
//by adding the last 2 digits and placing the sum into the array
//then return the last 2 digits in the array when the multiplication
//of the 2 digits are higher or bigger than the number passed in
function productFib(prod){
  let array = [0, 1];
  
  for (i = 1; i <= prod; i++) {
    let num = array[i - 1] + array[i];
    
    if (array[i - 2] * array[i - 1] > prod) {
      return [array[i - 2], array[i - 1], false];

    } else if (array[i - 2] * array[i - 1] === prod) {
      return [array[i - 2], array[i - 1], true];

    } else {
      array.push(num);
    }
  }
}

//check count of h * bounce reaching window height
function bouncingBall(h,  bounce,  window) {
  let viewCount = -1;
  
  for (i = 0; i <= Infinity; i++) {
    if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
      if (h > window) {
        h = h * bounce;
        viewCount = viewCount + 2;
      }

      if (h <= window) {
        return viewCount;
      }
    } else {
      return -1;
    }
  }
}

//flip each word in a string that have 5 or more letters
function spinWords(string){
  let array = string.split(" ");
  let newString = "";
  let newArray = [];
  let word = "";
  
  if (array.length === 1 && array[0].length >= 5) {
    for (i = 0; i <= array[0].length; i++) {
      newString = newString + array[0].charAt(array[0].length - (i + 1))
    }
    return newString;
  }
  if (array.length > 1) {
    for (i = 0; i < array.length; i++) { //loop through array
      for (j = 0; j <= array[i].length; j++) { //loop through each character in array
        if (array[i].length >= 5) {
          word = word + array[i].charAt(array[i].length - j);
          
          if (word.length === array[i].length) {
            newArray.push(word);
            word = "";
          }
        }
        if (array[i].length < 5) {
          newArray.push(array[i]);
          break;
        }
      }
    }
  }
  return newArray.join(' ');
}

//same as above but with map
function spinWords(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}

//count the numbers that have been multiplied
//persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2 
function persistence(num) {
  var times = 0;
  
  num = num.toString();
  
  while (num.length > 1) {
    times++;
    num = num.split('').map(Number).reduce((a, b) => a * b).toString();
  }
  
  return times;
}

//find outlier from even and odd numbers in array
function findOutlier(integers){
  let oddCount = 0;
  let evenCount = 0;
  let evenNumbers = [];
  let oddNumbers = [];
  
  for (i = 0; i <= integers.length - 1; i++) {
    if (integers[i] % 2 === 0) {
      evenCount++;
      evenNumbers.push(integers[i]);
    } else {
      oddCount++;
      oddNumbers.push(integers[i]);
    }
  }
  
  if (evenCount > oddCount) {
    return oddNumbers[0];
  } else {
    return evenNumbers[0];
  }
}