// function mutation(arr) {
//   word1 = arr[0].toLowerCase()
//   word2 = arr[1].toLowerCase()
//   var word2_array = [];
//   for(var j = 0; j < word2.length; j++) {
//     if(word2_array.indexOf(word2[j]) < 0) {
//       word2_array.push(word2[j]);
//     }
//   }

//   count = 0;
//   for(var i = 0; i < word2_array.length; i++)  {
//     if(word1.includes(word2_array[i])) {
//       count++;
//     }
//   } 
//   console.log(count);
//   if(count === word2_array.length) {
//     console.log("true");
//     return true;
//   } else {
//     console.log("false");
//     return false;
//   }
// }
function mutation(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  for (i=0;i<test.length;i++) {
    if (target.indexOf(test[i]) === -1)
      return false;
  }
  return true;
 }


console.log(mutation(["hello", "heo"]));