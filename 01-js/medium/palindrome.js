/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  newStr = str
  .toLowerCase() 
  .trim() 
  .replace(/[^a-zA-Z0-9]/g, "") 
  
  let str2 = "";
  let k=0;
 
    for (let i = newStr.length - 1; i>=0; i--){
      str2+=newStr[i];
  }
  if (newStr==str2){
    return true;
  }
  else{
    return false;
  }
  
  
}

module.exports = isPalindrome;
