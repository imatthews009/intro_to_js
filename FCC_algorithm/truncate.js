// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

// Note that inserting the three dots to the end will add to the string length.

// However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.


function truncateString(str, num) {
  // Clear out that junk in your trunk
  if(str.length > 3) {
    if(str.length >= num && num <= 3) {
        sub3 = str.substring(0, num);
        sub3 += "...";
        console.log(sub3);
        return sub3;

    } else if(str.length <= num) {
        console.log(str);
        return str;
    } else {
        var sub = str.substring(0,num-3);
        sub += "...";
        console.log(sub);
        return sub;
    }
  } else {
    var sub2 = str.substring(0,num) 
    sub2 += "...";
    console.log(sub2);
    return sub2;
  }
}

truncateString("Absolu", 2);
