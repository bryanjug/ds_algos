let string = "camelCasing";

function solution(string) {
  let array = string.split("");
  let newString = "";
  
  for (i = 0; i <= array.length; i++) {
    console.log(newString)
    if (i === 0) {
      newString = newString + array[i];
    } else if (i + 1 !== array.length) {
      if (array[i + 1] === array[i + 1].toUpperCase()) {
        newString = newString + array[i] + " ";
      }
    } else {
      newString = newString + array[i];
    }
  }
  return newString;
}

solution(string);