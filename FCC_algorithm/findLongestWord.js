// Return the length of the longest word in the provided sentence.
// Your response should be a number.


// function findLongestWord(str) {
//   var array = str.split(' ');
//   var longest = 0;
//   for(var i = 0; i < array.length; i++) {
//     if(array[i].length>longest) {
//       longest = array[i].length;
//     }
//   }
//   console.log(longest)
// }

// findLongestWord("The quick brown fox jumped over the lazy dog");


function findLongestWord(str) {
  var array = str.split(' ');
  var longestWord = array.reduce(function(a, b) {
    return a.length > b.length ? a : b;
    // if (a.length > b.length) {
    //   return a;
    //   console.log(a.length);
    // } else {
    //   return b;
    //   console.log(b.length);
    // }
  });
  console.log(longestWord);
  }

findLongestWord("The quick brown fox jumped over the lazy dog");

