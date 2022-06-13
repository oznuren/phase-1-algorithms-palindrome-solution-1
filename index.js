function isPalindrome(word) {
  const reversedWord = reverseString(word);
  return word === reversedWord;
}

function reverseString(word) {
  return word.split("").reverse().join("");
}

/* 
  Add your pseudocode here
  Input: string
  Output: boolean
  Steps to solve the problem:
  1. Reverse the string
  2. Compare the reversed string to the original string
  3. Return true if they are the same
  4. Return false if they are not the same
*/

/*
  Add written explanation of your solution here
  Implemented the given solution on canvas
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
