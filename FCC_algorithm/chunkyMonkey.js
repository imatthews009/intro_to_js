// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.


function chunkArrayInGroups(arr, size) {

  array = [];
  // console.log(arr.length/size);
  for(var x = 0; x < arr.length; x+=size) {
    var slice = arr.slice(x,x+size);
    array.push(slice);
}
console.log(array);
return(array);
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
