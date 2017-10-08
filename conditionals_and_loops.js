// RUBY CONDITIONALS
// if x > 50
//  puts "High number"
// elsif x < 25
//  puts "Low Number"
// elsif x == 32
//  puts "My favorite number"
// else
//  puts "Medium Number"
// end

// JS CONDITIONALS
// var x = 31;
// if (x > 50) {
//   console.log("High number");
// } else if (x < 25) {
//   console.log("Low number");
// } else if (x === 31) {
//   console.log("My favorite number");
// } else {
//   console.log("Medium number");
// }

//RUBY EQUALITY
// 5 == 5 //true
// 5 == "5" //false
// 5 != "5" //true

// JS EQUALITY
// console.log(5 == 5); //true
// console.log(5 == "5"); //true
// console.log(5 === "5"); //false
// console.log(5 !== "5"); //true
// console.log(5 != "5"); //false

// RUBY RANDOM NUMBER
// rand(1..10)

// JS RANDOM NUMBER
// console.log(Math.floor(Math.random()*10) + 1);

// RUBY WHILE LOOPS
// i = 0
// text = ""
// while i < 10
//  text = text + " the number is " + i
//  i += 1
// end
// puts text

// JS WHILE LOOPS
// var i = 0;
// var text = "";
// while (i < 10) {
//   text = text + " the number is " + i;
//   i++;
// }
// console.log(text);

// RUBY FOR LOOP
// for i in 0...10
//  puts i
// end

// JS FOR LOOP
// for (var i = 1; i < 20; i+=2) {
//   console.log(i);
// }

// IN ENGLISH
// for an arbritrary variable called i, set it to 1
// continue running the lop as long as i is less than 20
// each time the loop runs, increase i by 2

// RUBY EACH THROUGH
// words = ["apple", "banana", "carrot", "date", "fig"]
// words.each do |word|
//  puts word
// end

// JS EACH THROUGH
// var words = ["apple", "banana", "carrot", "date", "fig"];
// for (var i = 0; i < words.length; i++) {
//   console.log(words[i]);
// }

for (var i = 10; i > 0; i--) {
    console.log(i);
}
console.log('Blastoff!')

var numbers = [5, 23, 98, 234, 1, 0, 3, 177];
for (var i = 0; i < numbers.length; i ++) {
    console.log(numbers[i]);
}


var count = 0
for (var i = 0; i < numbers.length; i ++) {
    count += numbers[i];
}
console.log(count/numbers.length)


for (var i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else {
        console.log(i);
    }
}

var num_guess = Math.floor(Math.random()*100) + 1;
var guess = prompt('Guess a number 1-100');



