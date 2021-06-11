let string = "This is a test";

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
      console.log(array[i])
      for (j = 0; j < array[i].length; j++) { //loop through each character in array
        if (array[i].length >= 5) {
          word = word + array[i].charAt(array[i].length - j);
          
          if (word.length === array[i].length) {
            newArray.push(word);
            word = "";
          }
        }
        if (array[i].length < 5) {
          newArray.push(array[i]);
        }
      }
    }
  }
  console.log(newArray.join(' '))
  return newArray.join(' ');
}

spinWords(string);