//check if second string is an anagram of the first string
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