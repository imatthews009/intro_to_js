// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {
  // You can do this!
  var largestNumber = [0,0,0,0];
  for(var i = 0; i < arr.length; i++) {
    for(var j = 0; j < arr[i].length; j++) {
        if(arr[i][j] > largestNumber[i]) {
            largestNumber[i] = arr[i][j];
        }        
    }
  }
  console.log(largestNumber);  
  return largestNumber;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// function largestOfFour(arr) {
//    var largestNumber = 0;
//    for(var arrayIndex = 0; arrayIndex < arr.length; arrayIndex++) {
//     for(var subArrayIndex = 0; subArrayIndex < arr[arrayIndex].length; subArrayIndex++) {
//        if(arr[arrayIndex][subArrayIndex] > largestNumber) {         
//           largestNumber = arr[arrayIndex][subArrayIndex];
//         }
//     }
//  }
//  console.log(largestNumber);
//  return largestNumber;
// }
// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);