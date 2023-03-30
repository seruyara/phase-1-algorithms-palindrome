function reverseString(word) {
  // create an array from the input string
  const wordArray = word.split("");
  // reverse the array
  const reversedWordArray = wordArray.reverse();
  // create a string from the reversed array
  const reversedWord = reversedWordArray.join("");
  // return the reversed string
  return reversedWord;
}

function isPalindrome(word) {
  // reverse the input string
  const reversedWord = reverseString(word);
  // compare the reversed string to the input
  return word === reversedWord;
}


/* 
  Add your pseudocode here
  reverse the input string

if the reversed string is the same as the input
  return true
else
  return false
*/
/*
  Add written explanation of your solution here
  this code is supossed to take in a string and reverse it if the string reads the same way backwards as fowrard
  it should return true and if it doesnt return the same it should tell us false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("boy"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("mom"));
}

console.log("")

module.exports = isPalindrome;
