// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

function palindrome(str) {
  var array_reverse = str.replace(/[^0-9a-z]/gi, '').split('').reverse().join('').toLowerCase();
  var array = str.replace(/[^0-9a-z]/gi, '').split('').join('').toLowerCase();
  console.log(array, array_reverse);
  

  if (array === array_reverse) {
    return true;
  } else {
    return false;
  }
}



palindrome("A man, a plan, a canal. Panama");

