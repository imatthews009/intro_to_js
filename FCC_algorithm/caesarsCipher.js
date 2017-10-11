// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) { // LBH QVQ VG!
  // convert string into an array
  // get the code of each letter
  var array = str.split('');
  var array_numbers = []
  for(i=0;i<array.length;i++) {
    if(array[i].charCodeAt() < 65 || array[i].charCodeAt() > 90) {
      array_numbers.push(array[i]);
    } else if (array[i].charCodeAt() < 78) {
      array_numbers.push(String.fromCharCode(array[i].charCodeAt() + 13));
    } else {
        array_numbers.push(String.fromCharCode(array[i].charCodeAt() - 13));
    }
  }

  console.log(array_numbers.join(''));
  return(array_numbers.join(''));
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");

// console.log("A".charCodeAt());
// console.log(String.fromCharCode(65));

// console.log(65-90)
// console.log(1-26)
// 85 +5; 65+8