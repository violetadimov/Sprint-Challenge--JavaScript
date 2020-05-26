// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
    console.log(external);
    const internal = "Hello! I'm inside myFunction!";

    function nestedFunction() {
        console.log(internal);
    };
    nestedFunction();
}
myFunction();

// Explanation: 

// variable internal is a variable is located inside my
// function which is the enclosing
// function of nested
// function.
// therefore, nested
// function can access any variable in the outer
// function scope and its own as well /

/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
// `summation(4)` should return 10 because 1+2+3+4 is 10. */
var counter = 0;

var summation = function(a) {
    return counter += 1;
}
console.log(summation(4));