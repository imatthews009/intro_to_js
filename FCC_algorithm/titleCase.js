// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
  // each word in array
  var array = str.toLowerCase().split(" ");
  
  // capitalize first letter
  for(i=0; i<array.length;i++) {
    var letters = array[i].split('');
    letters[0] = letters[0].toUpperCase();
    array[i] = letters.join('')
  }
  console.log(array.join(" "));
  // join with a space
}

titleCase("I'm a little tea pot");