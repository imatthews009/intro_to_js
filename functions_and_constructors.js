// RUBY METHOD
 // def say_hello
 //  puts "hello"
 // end
 // say_hello
 // JS FUNCTION
 // function sayHello() {
 //   console.log("hello");
 // }
 // sayHello();
 // RUBY METHOD W/ PARAMETERS
 // def add_two_numbers(num_one, num_two)
 //  num_one + num_two
 // end
 // puts add_two_numbers(1,50)
 // JS FUNCTIONS W/ PARAMETERS
 // function addTwoNumbers(numOne, numTwo) {
 //   return numOne + numTwo;
 // }
 // console.log(addTwoNumbers(1, 50));
 // RUBY SCOPE
 // x = "hello"
 // def do_something
 //  x = "Zebra"
 // end
 // puts do_something
 // puts x #OUTPUTS ZEBRA
 // JS SCOPE
 // var x = "hello";
 // function doSomething() {
 //   var x = "Zebra";
 // }
 // doSomething();
 // console.log(x); //"hello"
 // JS CLASSIC DEF OF A FUNCTION
 // function cool() {
 //   console.log("A variable can contain a function!");
 // }
 // cool();
 // console.log(typeof cool);
 // JS FIRST CLASS CITIZEN FUNCTION
 // var cool = function() {
 //   console.log("A variable can contain a function!");
 // }
 // cool();
 // console.log(typeof cool);
 // Functions can therefore also be one of the properties of an object
 // var car = {
 //   model: "Buick",
 //   year: "2000",
 //   miles: 40000,
 //   printMessage: function() {
 //     // console.log("THIS IS: "+ this);
 //     return this.model + " has done " + this.miles + " miles.";
 //   }
 // }
 // console.log(car['model']);
 // console.log(car.year);
 // console.log(car.printMessage());
 // console.log(car.printMessage);
 // RUBY CLASS
 // class Car
 // attr_accessor :model, :year, :miles
 // def initialize(model, year, miles)
 //  @model = model
 //  @year = year
 //  @miles = miles
 // end
 //
 // def print_message
 //  puts "#{model} has done #{miles} miles."
 // end
 // end
 // civic = Car.new("Civic", 2009, 80000)
 // puts civic
 // puts civic.year
 // puts civic.print_message
 // JS CONSTRUCTOR (closest thing to Ruby Classes)


 // function Car(model, year, miles) {
 //   this.model = model;
 //   this.year = year;
 //   this.miles = miles;
 //   this.printMessage = function() {
 //     return this.model + " has done " + this.miles + " miles."
 //   }
 // }
 // var civic = new Car("Civic", 2009, 80000);
 // var buick = new Car("Buick", 2000, 40000);
 // console.log(typeof civic);
 // console.log(civic);
 // console.log(civic.year);
 // console.log(civic.printMessage());


//  function sum(a,b) {
//     console.log(a+b);
//  }
//  sum(1,5);

//  function average(array) {
//     var array_sum = 0
//     for(var i = 0; i < array.length; i++) {
//         array_sum += array[i];
//     }
//     console.log(array_sum/array.length)
//  }
// average([2,3,5,6,3]);


// var book = {
//     title: 'Count of Monte Cristo',
//     author: 'Alexandres Dumas?',
//     isbn: 501,
//     pages: 1000,
//     year: 1845,
//     printDetail: function() {
//     console.log(this.title + " " + this.author + " " + this.isbn + " " + this.pages + " " + this.year);
//     }
// }
// book.printDetail();

function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  var sum = 0
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  // Only change code above this line
  console.log(product);
}

// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);



