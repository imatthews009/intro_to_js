// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.


// function bouncer(arr) {

//    function truthy(value) {
//    return value;
//    }

//    var filtered = arr.filter(truthy);
//    return filtered;
//  }

// function bouncer(arr) {
//   return arr.filter(Boolean);
// }
function bouncer(arr) {
 //Only return values that evaluate as true inside the array.
  return arr.filter(function(value){
    if (value){
      return (value);
    }
  });
}


console.log(bouncer([7, "ate", "", false, 9]));