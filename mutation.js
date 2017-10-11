// Write a function called `mutation`, which will accept two strings as a parameter and return true if all the letters from the second string are contained within the first string, and false otherwise.

function mutation(word1, word2) {
  word1 = word1.toLowerCase()
  word2 = word2.toLowerCase()
  var word2_array = [];
  for(var j = 0; j < word2.length; j++) {
    if(word2_array.indexOf(word2[j]) < 0) {
      word2_array.push(word2[j]);
    }
  }

  count = 0;
  for(var i = 0; i < word2_array.length; i++)  {
    if(word1.includes(word2_array[i])) {
      count++;
    }
  } 
  console.log(count);
  if(count === word2_array.length) {
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }
}
mutation("burly", "Ruby");    // true
mutation("burly", "python");  // false```


