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

//seven(times(five())); // must return 35
function zero(operator) {
  return operator ? operator(0) : 0;
}

function one(operator) {
  return operator ? operator(1) : 1;
}

function two(operator) {
  return operator ? operator(2) : 2;
}

function three(operator) {
  return operator ? operator(3) : 3;
}

function four(operator) {
  return operator ? operator(4) : 4;
}

function five(operator) {
  return operator ? operator(5) : 5;
}

function six(operator) {
  return operator ? operator(6) : 6;
}

function seven(operator) {
  return operator ? operator(7) : 7;
}
function eight(operator) {
  return operator ? operator(8) : 8;
}

function nine(operator) {
  return operator ? operator(9) : 9;
}

function plus(rightVal) {
  return function(leftVal) {
    return leftVal + rightVal;
  }
}

function minus(rightVal) {
  return function(leftVal) {
    return leftVal - rightVal;
  }
}

function times(rightVal) {
  return function(leftVal) {
    return leftVal * rightVal;
  }
}

function dividedBy(rightVal) {
  return function(leftVal) {
    return leftVal / rightVal;
  }
}

//plan = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"] = ["WEST"]
//plan = ["NORTH","SOUTH","SOUTH","EAST","WEST","NORTH"] = []
//plan = ["NORTH", "WEST", "SOUTH", "EAST"] = ["NORTH", "WEST", "SOUTH", "EAST"]
function dirReduc(plan) {
  var opposite = {
    'NORTH': 'SOUTH', 
    'EAST': 'WEST', 
    'SOUTH': 'NORTH', 
    'WEST': 'EAST'
  };

  return plan.reduce(function(dirs, dir){ //dirs = new array, dir = item in array
      //if i - 1 in array equals the opposite of dir
      if (dirs[dirs.length - 1] === opposite[dir])
        //remove last item in array
        dirs.pop();
      else
        //add dir to end of array
        dirs.push(dir);
      //return array after each item is looped
      return dirs;
  }, []);
}

//find magnitude / length of a 2D, 3D, 4D... square
const magnitude = v => Math.sqrt(v.reduce((a,x) => a + x * x, 0))

//same as above
function magnitude(vector) {
  return Math.hypot(...vector);
}

//replace char with ( if char is unique, otherwise replace with )
function duplicateEncode(word){
   
  var unique='';
  word = word.toLowerCase();
  for(var i=0; i<word.length; i++){
      if(word.lastIndexOf(word[i]) == word.indexOf(word[i])){
          unique += '(';
      }
      else{
          unique += ')';
      }
  }
  return unique;

}

//same as above but with map
function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}

//replace WUB with words separated by spaces
//songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
// =>  WE ARE THE CHAMPIONS MY FRIEND
function songDecoder(song){
  return song.replace(/(WUB)+/g," ").trim() //trim to remove spaces at end /start of string
}

//find number of 1's in a number when converted to binary
countBits = n => n.toString(2).split('0').join('').length;

//check if path will take 10 minutes (each path change = 1 minute) and changes back to original position
function isValidWalk(walk) {
  let position = [0, 0]; //[x, y]
  //must be 10 minutes
  if (walk.length === 10) {
    //find positions moved
    for (i = 0; i <= walk.length; i++) {
      if (walk[i] === "n") {
        position[1] = position[1] + 1;
      }
      if (walk[i] === "s") {
        position[1] = position[1] - 1;
      }
      if (walk[i] === "w") {
        position[0] = position[0] - 1;
      }
      if (walk[i] === "e") {
        position[0] = position[0] + 1;
      }
    }
    //must return to original position
    if (position[0] === 0 && position[1] === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

//same as above but with switch
function isValidWalk(walk) {
  var dx = 0
  var dy = 0
  var dt = walk.length
  
  for (var i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case 'n': dy--; break
      case 's': dy++; break
      case 'w': dx--; break
      case 'e': dx++; break
    }
  }
  
  return dt === 10 && dx === 0 && dy === 0
}

//find index in the alphabet of each letter in text
function alphabetPosition(text) {
  text = text.toLowerCase();
  text = text.replace((/[^A-Za-z]/g), "");
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let positions = [];
  for (i = 0; i < text.length; i++) {
    positions.push(alphabet.match(text[i]).index + 1)
  }
  return positions.join(" ")
}

//same as above but with charCodeAt to find value of char in alphabet and map
function alphabetPosition(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map( (c) => c.charCodeAt() - 64)
    .join(' ');
}

//check if order of parenthesis are valid
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
function validParentheses(parens) {
  let valid = 0;
  for (i = 0; i < parens.length; i++) {
    if (parens[0] === ")") {
      return false;
    }
    if (parens[parens.length - 1] === "(") {
      return false;
    }
    if (valid === -1) {
      return false;
    }
    if (parens[0] === "(") {
      if (parens[i] === "(") {
        valid = valid + 1;
      }
      if (parens[i] === ")") {
        valid = valid - 1;
      }
    }
  }
  if (valid === 0) return true
  if (valid !== 0) return false
}

//find sum of contiguous sequence
//maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
var maxSequence = function(arr){
  var min = 0, ans = 0, i, sum = 0;
  for (i = 0; i < arr.length; ++i) {
    sum += arr[i];
    min = Math.min(sum, min);
    ans = Math.max(ans, sum - min);
  }
  return ans;
}
//Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
//pigIt('Hello world !'); -> elloHay orldway !
function pigIt(str){
  let array = str.split(" ")
  let newString = "";
  for (i = 0; i < array.length; i++) {
    for (j = 0; j < array[i].length; j++) {
      if (j !== 0) {
        newString += array[i][j]; 
      }
      let specialCharCheck = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(array[i][j])
      if (i === array.length - 1 && specialCharCheck !== true) {
        if (j === array[i].length - 1) {
          newString += array[i][0] + "ay";
        }
      } else if (i === array.length - 1 && specialCharCheck === true) {
        newString += array[i][j];
      } else if (j === array[i].length - 1 && specialCharCheck !== true) {
        newString += array[i][0] + "ay ";
      } else if (j === array[i].length - 1 && specialCharCheck === true) {
        newString += array[i][j];
      }
    }
  }
  return newString;
}

//same as above but with .replace()
function pigIt(str) {
  return str.replace(/\w+/g, (w) => {
    return w.slice(1) + w[0] + 'ay';
  });
}

//takes an array and moves all of the zeros to the end, preserving the order of the other elements.
//moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
var moveZeros = function (arr) {
  let newArray = [];
  let zerosArray = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      newArray.push(arr[i])
    }
    if (arr[i] === 0) {
      zerosArray.push(arr[i])
    }
  }
  let ans = [].concat(newArray, zerosArray)
  return ans;
}

//same as above but with filter
var moveZeros = function (arr) {
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}

//(seconds) as input and returns the time in a human-readable format (HH:MM:SS)
//'99:59:59' = 'humanReadable(359999)'
function humanReadable(seconds) {
  let newSeconds = seconds % 60;
  let minutes = seconds / 60;
  let newMinutes = minutes % 60;
  let hours = minutes / 60;
  let secs = "";
  let mins = "";
  let hrs = "";
  
  if (newSeconds < 10) {
    secs += "0" + Math.trunc(newSeconds);
  } else if (newSeconds >= 10) {
    secs += Math.trunc(newSeconds);
  }
  if (newMinutes < 10) {
    mins += "0" + Math.trunc(newMinutes);
  } else if (newMinutes >= 10) {
    mins += Math.trunc(newMinutes);
  }
  if (hours < 10) {
    hrs += "0" + Math.trunc(hours);
  } else if (hours >= 10) {
    hrs += Math.trunc(hours)
  }
  return hrs + ":" + mins + ":" + secs;
}

//find sum of 2 numbers that equal to 10 with O(n)
// sum_pairs([11, 3, 7, 5],         10)
// #              ^--^      3 + 7 = 10
function sumPairs(ints, s){
  var seen = {}
  for (var i = 0; i < ints.length; ++i) {
    //if s - current int is found in seen and is equal to true
    //check to see if 3 is inside of seen by substracting 10 from 7
    if (seen[s - ints[i]]) {
      //return [10 - 7, 7]
       return [s - ints[i], ints[i]];
    } 
    //add int[i]: true to object seen on each int
    //on each ints
    seen[ints[i]] = true
  }
}

//order each number by the sum of each individual number together
//if the number equals the same as the next, order by 1 - 9 
//("2000 10003 1234000 44444444 9999 11 11 22 123"), "11 11 2000 10003 22 123 1234000 44444444 9999")
function orderWeight(strng) {
  const sum = (str) => { //splits "2000" and adds 2 0 0 0 together
    str.split('').reduce((sum,el)=>(sum+(+el)),0);
  }

  function comp(a,b) {
    //runs sum function on a and b
     let sumA = sum(a); //a = 2000
     let sumB = sum(b); //b === 10003
     //checks if the sum of 2000 and sum of 10003 equal to each other
     //if true, localCompare a and b to see which comes first
     //otherwise sort the biggest number first
     return sumA === sumB ? a.localeCompare(b) : sumA - sumB;
  };
  //comp function tells which numbers to sort in the string variable
  //using .sort(function (a, b) {})
  return strng.split(' ').sort(comp).join(' '); //sorts using the comp function
 }

 //convert rgb to hex
 //rgb(148, 0, 211) // returns 9400D3
 function rgb(r, g, b){
  let string = "";
  let rString = "";
  let gString = "";
  let bString = "";
  if (r.toString(16) <= '0') {
    rString += "00"
  } else if (r > 255) {
    rString += (255).toString(16);
  } else if (r.toString(16).length === 1) {
    rString += "0" + r.toString(16);
  } else {
    rString += r.toString(16);
  }
  
  if (g.toString(16) <= '0') {
    gString += "00"
  } else if (g > 255) {
    gString += (255).toString(16);
  } else if (g.toString(16).length === 1) {
    gString += "0" + g.toString(16);
  } else {
    gString += g.toString(16);
  }
  
  if (b.toString(16) <= '0') {
    bString += "00"
  } else if (b > 255) {
    bString += (255).toString(16);
  } else if (b.toString(16).length === 1) {
    bString += "0" + b.toString(16);
  } else {
    bString += b.toString(16);
  }
  string = rString + gString + bString;
  return string.toUpperCase();
}

//check if you can make the word given with the characters in a scrambled word
const scramble = (str1, str2) => {
  for (let i = 0; i < str2.length; i++) {
      //make regex searching for 1 single char in 'world'
      const char = new RegExp(str2[i], 'g');
      if (
          //if 'rkqodlw' does not contain the single char or
          !str1.match(char) ||
          //if the length of 'rkqodlw' matching with the char is not bigger or equal to 
          //the length of 'world' matching with the char
          !(str1.match(char).length >= str2.match(char).length)
      ) {
          return false;
      }
  }
  return true;
};

//replaces a letter with the letter 13 letters after it in the alphabet, ignore special characters
function rot13(message) {
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
  return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}

//t (maximum sum of distances, integer >= 0), k (number of towns to visit, k >= 1) and ls 
//(list of distances, all distances are positive or zero integers and this list has at least one element). 
//The function returns the "best" sum ie the biggest possible sum of k distances less than or equal to the given limit t, 
//if that sum exists, or otherwise nil, null, None
//Test.assertEquals(chooseBestSum(163, 3, [50, 55, 56, 57, 58])) = 163
function chooseBestSum(t, k, ls) {
  var biggestCount = 0;
  var recurseTowns = function(townsSoFar, lastIndex) {
    townsSoFar = townsSoFar || [];
    //base case
    if (townsSoFar.length === k) {
      var sumDistance = townsSoFar.reduce((a,b)=>a+b);
      
      if (sumDistance <= t && sumDistance > biggestCount) {
        biggestCount = sumDistance;
      }
      //stops for loop once townsSoFar.length = 3 (k)
      //save biggest count then lastIndex += 1
      //cancels .concat, then i + 1 in order to add next value to townsSoFar
      return; //EJECT
    }
    //recursive case
    //loop through ls.length and add to index
    //recursive for loop = nested for loop
    //one i = 5 recurseTowns runs
    //townsSoFar = [] once i <= 4
    //i at 0 = 0, then at i at 1 = 2 = [50, 55, 56] -> [50, 55, 57] -> [50, 55, 58]
    //at [50, 57, ], lastIndex is not reset because townsSoFar !== 3 -> no return present
    //lastindex = undefined + 1 === [55, 56, 57]...
    for (var i = lastIndex + 1 || 0; i < ls.length; i++) {
      recurseTowns(townsSoFar.concat(ls[i]), i);
    }
  }
  recurseTowns();
  
  return biggestCount || null;
}

//anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
//return an array of all the anagrams or an empty array if there are none.
//two words are anagrams of each other if they both contain the same letters
function anagrams(word, words) {
  word = word.split("").sort().join("");
  let wordsSorted = [];
  let matching = [];
  
  for (i = 0; i < words.length; i++) {
    wordsSorted.push(words[i].split("").sort().join(""))
  }
  
  for (i = 0; i < wordsSorted.length; i++) {
    if (wordsSorted[i].includes(word) && wordsSorted[i].length === word.length) {
      matching.push(words[i])
    }
  }
  
  return matching
}

//same as above but with filter
function anagrams(word, words) {
  word = word.split('').sort().join('');
  return words.filter(function(v) {return word == v.split('').sort().join('');});
}

//Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.
//array = [[1,2,3],
// [8,9,4],
// [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]
//image for better understanding http://www.haan.lu/files/2513/8347/2456/snail.png
function snail(array) {
  var result;
  //runs until all elements of array are removed
  while (array.length) {
    // Steal the first row. 
    //removes top row and adds to result
    result = (result ? result.concat(array.shift()) : array.shift());
    // Steal the right items. 
    //removes every last element from each row after the first (since it got removed) and adds to result
    for (var i = 0; i < array.length; i++)
      result.push(array[i].pop());
    // Steal the bottom row.
    //flip the bottom (last) row, remove the row, and add to result
    result = result.concat((array.pop() || []).reverse());
    // Steal the left items.
    //removes every first element of the rows and adds them to result
    for (var i = array.length - 1; i >= 0; i--)
      result.push(array[i].shift());
  }
  return result;
}

//takes a positive integer and returns the next bigger number that can be formed by rearranging its digits
//nextBigger(num: 2017) // returns 2071
function nextBigger(n){
// 123476543
// Find the position where a swap will actually increase the number (starting from the last digit)
// 1234|76543 (swapping 4(pivot) and 7 will definitely result in a bigger number)

// sort the suffix (the next bigger number has ascending digits in its suffix)
// 1234|34567

// find the first digit in the suffix that is bigger than our pivot: -> 5. swap with pivot
// 1235|34467
  var chars = n.toString().split('');
  var i = chars.length-1;
  //looping from back to front
  while(i > 0) {
    if (chars[i]>chars[i-1]) break;
    i--;
  }
  //checks if all numbers are the same
  if (i == 0) return -1;
  //sorts the start of i (the number bigger than the next) and the rest of the numbers
  //removes the num thats bigger than the next and nums behind from char
  var suf = chars.splice(i).sort();
  //grabs last number in chars
  var t = chars[chars.length-1];
  //loop through the numbers behind the larger number
  for (i = 0; i < suf.length; ++i) {
    // 1234|34567
    //if (5 (suf[i]) is bigger than 4 (t) -> break)
    if (suf[i] > t) break;
  }
  //4 (char[chars.length - 1]) = 5 (suf(i))
  chars[chars.length-1] = suf[i]
  //5 (suf[i]) = 4 (t)
  suf[i] = t;
  var res = chars.concat(suf);
  var num = parseInt(res.join(''));
  console.log("->" +num);
  return num;
}

function formatDuration (seconds) {
  let minutes = seconds / 60;
  let hours = minutes / 60;
  let days = hours / 24;
  let years = days / 365;
  let yearsString = "";
  let daysString = "";
  let hoursString = "";
  let minutesString = "";
  let secondsString = "";
  let stringsArray = [];
  let message = "";
  //format times / dates
  if (seconds === 0) { return "now" }
  if (seconds >= 60) { seconds = seconds % 60 }
  if (minutes >= 60) { minutes = minutes % 60 }
  if (hours >= 24) { hours = hours % 24 }
  if (days >= 365) { days = days % 365 }
  let array = [Math.trunc(years), Math.trunc(days), Math.trunc(hours), Math.trunc(minutes), Math.trunc(seconds)];
  //set up format strings
  if (array[0] === 1) {
    yearsString += array[0] + " year"
    stringsArray.push(yearsString);
  } else if (array[0] > 1) {
    yearsString += array[0] + " years"
    stringsArray.push(yearsString);
  }
  if (array[1] === 1) {
    daysString += array[1] + " day"
    stringsArray.push(daysString);
  } else if (array[1] > 1) {
    daysString += array[1] + " days"
    stringsArray.push(daysString);
  }
  if (array[2] === 1) {
    hoursString += array[2] + " hour"
    stringsArray.push(hoursString);
  } else if (array[2] > 1) {
    hoursString += array[2] + " hours"
    stringsArray.push(hoursString);
  }
  if (array[3] === 1) {
    minutesString += array[3] + " minute"
    stringsArray.push(minutesString);
  } else if (array[3] > 1) {
    minutesString += array[3] + " minutes"
    stringsArray.push(minutesString);
  }
  if (array[4] === 1) {
    secondsString += array[4] + " second"
    stringsArray.push(secondsString);
  } else if (array[4] > 1) {
    secondsString += array[4] + " seconds"
    stringsArray.push(secondsString);
  }
  //include ands and commas
  for (i = 0; i < stringsArray.length; i++) {
    if (stringsArray.length === 1) {
      return yearsString + daysString + hoursString + minutesString + secondsString
    }
    if (stringsArray.length === 2) {
      if (i === 0) {
        message += stringsArray[i] + " and ";
      } else {
        message += stringsArray[i];
      }
    }
    if (stringsArray.length > 2) {
      if (i === stringsArray.length - 2) {
        message += stringsArray[i] + " and ";
      } else if (i === stringsArray.length - 1) {
        message += stringsArray[i];
      } else if (i < stringsArray.length) {
        message += stringsArray[i] + ", ";
      }
    }
  }
  return message;
}

//sudoku puzzle = return true if each 3x3 square in a 9x9 square has the numbers 1-9
//if the 3x3 square has a 0 or has
function validSolution(board){
  //function takes s (set) and returns true if s.size = 9 and doesnt have a 0
  var validSet = s => s.size == 9 && !s.has(0);
  //function takes i (loop iterator) and adds each row into a set (s)
  //Set() removes all duplicates
  //new Set() is the initial value
  var rowSet = i => board[i].reduce((s,v) => s.add(v), new Set());
  //function takes i (loop iterator) and adds each column into a set (s)
  var columnSet = i => board.reduce((s,v) => s.add(v[i]), new Set());
  //chops up the array by 3x3 blocks into a new Set, which is then checked for validity
  //takes in r (row) and c (column) and removed the elements after the 3rd element in the row
  //for each row, add the first 3 elements, make a new set and add to the set until
  //theres no more rows left (r row in total)
  var boxSet = ([r,c]) => board.slice(r,r+3).reduce((s,v) => v.slice(c,c+3).reduce((s,v) => s.add(v), s), new Set());
  //finds a starting position -> [0, 0], [0, 3], [0,6], [3,0]... [6,6]
  //i % 3 = 0, 1, 2, 0...
  var boxCorner = i => [Math.floor(i / 3) * 3,(i % 3) * 3];
  for (var i = 0; i < 9; i++)
    if ( !validSet(rowSet(i)) || !validSet(columnSet(i)) || !validSet(boxSet(boxCorner(i))) )
      return false;
  return true;
}

// A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar spent over $50 in each transaction
// (e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points).
// Given a record of every transaction during a three month period, calculate the reward points earned for each customer per month and total.
// Make up a data set to best demonstrate your solution

// 2 points -> for every dollar over 100$
// 1 point -> for every dollar spent over $50
// three month period
// Given a record of every transaction during a three month period, calculate the reward points earned for each customer per month and total.

//userId: [transaction, transaction, transaction]
let month1 = {0: [120, 44, 64], 1: [120, 44, 64, 55, 209, 12]}; 
let month2 = {0: [120], 1: [120], 2: [32], 3: [138], 4: [120], 5: [120], 6: [32], 7: [138, 22, 55, 107]}; 
let month3 = {0: [151], 1: [124, 55, 33, 2], 2: [36, 77, 33], 3: [194], 4: [269, 302, 283, 111, 7], 5: [120], 6: [11], 7: [159], 8: [101]}; 

function pointsCalculator(month1, month2, month3) {
  let month1Totals = {};
  let month2Totals = {};
  let month3Totals = {};
  //calculate the reward points for each of the customer's transactions and the customer's monthly total
  //month 1
  console.log(Object.keys(month1))
  for (i = 0; i < Object.keys(month1).length; i++) {
    let total = 0;
    for (j = 0; j < month1[i].length; j++) {
      if (month1[i][j] <= 50) {
        if (month1Totals[i] === undefined) {
          month1Totals[i] = [0];
        } else {
          month1Totals[i].push(0);
        }
        total += month1Totals[i][j];
      }
      if (month1[i][j] > 50 && month1[i][j] <= 100) {
        if (month1Totals[i] === undefined) {
          month1Totals[i] = [month1[i][j] - 50];
        } else {
          month1Totals[i].push(month1[i][j] - 50);
        }
        total += month1Totals[i][j];
      }
      if (month1[i][j] > 100) {
        if (month1Totals[i] === undefined) {
          month1Totals[i] = [(2 * (month1[i][j] - 100)) + 50];
        } else {
          month1Totals[i].push((2 * (month1[i][j] - 100)) + 50);
        }
        total += month1Totals[i][j];
      }
      if (j === month1[i].length - 1) {
        month1Totals[i].push(total);
        total = 0;
      }
    }
  }
  //month 2
  for (i = 0; i < Object.keys(month2).length; i++) {
    let total = 0;
    for (j = 0; j < month2[i].length; j++) {
      if (month2[i][j] <= 50) {
        if (month2Totals[i] === undefined) {
          month2Totals[i] = [0];
        } else {
          month2Totals[i].push(0);
        }
        total += month2Totals[i][j];
      }
      if (month2[i][j] > 50 && month2[i][j] <= 100) {
        if (month2Totals[i] === undefined) {
          month2Totals[i] = [month2[i][j] - 50];
        } else {
          month2Totals[i].push(month2[i][j] - 50);
        }
        total += month2Totals[i][j];
      }
      if (month2[i][j] > 100) {
        if (month2Totals[i] === undefined) {
          month2Totals[i] = [(2 * (month2[i][j] - 100)) + 50];
        } else {
          month2Totals[i].push((2 * (month2[i][j] - 100)) + 50);
        }
        total += month2Totals[i][j];
      }
      if (j === month2[i].length - 1) {
        month2Totals[i].push(total);
        total = 0;
      }
    }
  }
  //month 3
  for (i = 0; i < Object.keys(month3).length; i++) {
    let total = 0;
    for (j = 0; j < month3[i].length; j++) {
      if (month3[i][j] <= 50) {
        if (month3Totals[i] === undefined) {
          month3Totals[i] = [0];
        } else {
          month3Totals[i].push(0);
        }
        total += month3Totals[i][j];
      }
      if (month3[i][j] > 50 && month3[i][j] <= 100) {
        if (month3Totals[i] === undefined) {
          month3Totals[i] = [month3[i][j] - 50];
        } else {
          month3Totals[i].push(month3[i][j] - 50);
        }
        total += month3Totals[i][j];
      }
      if (month3[i][j] > 100) {
        if (month3Totals[i] === undefined) {
          month3Totals[i] = [(2 * (month3[i][j] - 100)) + 50];
        } else {
          month3Totals[i].push((2 * (month3[i][j] - 100)) + 50);
        }
        total += month3Totals[i][j];
      }
      if (j === month3[i].length - 1) {
        month3Totals[i].push(total);
        total = 0;
      }
    }
  }
  console.log([month1Totals, month2Totals, month3Totals])
  //'0': [transactionPoints1, transactionPoints2, total], '1': [transactionPoints1, total], ...
  return [month1Totals, month2Totals, month3Totals];
}

pointsCalculator(month1, month2, month3);

// ┌───┬───┬───┐
// │ 1 │ 2 │ 3 │
// ├───┼───┼───┤
// │ 4 │ 5 │ 6 │
// ├───┼───┼───┤
// │ 7 │ 8 │ 9 │
// └───┼───┼───┘
//     │ 0 │
//     └───┘
//"8": ["5", "7", "8", "9", "0"],
// "11": ["11", "22", "44", "12", "21", "14", "41", "24", "42"],
// instead of the 1 it could also be the 2 or 4. And instead of the 5 it could also be the 2, 4, 6 or 8.
function getPINs(observed) {
  let test = "369";
  test.split('') //seperate into array
  //map through each element and return with array
  .map( t => ({ //[ '2', '3', '6' ], [ '3', '5', '6', '9' ], [ '6', '8', '9' ]
    '0': [ '0', '8' ],
    '1': [ '1', '2', '4' ],
    '2': [ '1', '2', '3', '5' ],
    '3': [ '2', '3', '6' ],
    '4': [ '1', '4', '5', '7' ],
    '5': [ '2', '4', '5', '6', '8' ],
    '6': [ '3', '5', '6', '9' ],
    '7': [ '4', '7', '8' ],
    '8': [ '5', '7', '8', '9', '0' ],
    '9': [ '6', '8', '9' ]
  }[t]))
  .reduce((previous, current)=> //for each array in array, pre=['2','3','6'], cur=['3','5','6','9']
    [].concat.apply( //adds to an array
      [], previous.map( //map for each element in ['2','3','6'], if no element provided, return []
        t => current.map( //map for each element in ['3','5','6','9'], t = previous.map element
          //g = current.map element
          //add the previous.map and current.map elements and concat to array
          g => t + g
        ) 
      )
    )
  )
}

//returns the sum of a sequence of integers.
//If begin value is greater than the end, function should returns 0
// sequenceSum(2,2,2) === 2
// sequenceSum(2,6,2) === 12 // 2 + 4 + 6
// sequenceSum(1,5,1) === 15 // 1 + 2 + 3 + 4 + 5
// sequenceSum(1,5,3) === 5 // 1 + 4
const sequenceSum = (begin, end, step) => {
  if (begin > end) {
    return 0;
  }
  return begin + sequenceSum(begin + step, end, step);
};