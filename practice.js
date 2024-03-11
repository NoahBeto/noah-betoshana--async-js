// Synchronous programming refers to the traditional execution model where statements are executed one after the other in sequence.
// Each statement must be completed before the next one begins.
// Below is a synchronous program since the browser waits for one line to be completed before moving on
/**/
const name = "Miriam"; // Declares a string variable called name
const greeting = `Hello, my name is ${name}!`; // Declares a string variable called greeting, which uses the variable name
console.log(greeting); // Outputs the varaible greeting to the terminal/console
// Output: "Hello, my name is Miriam!"

//Below is also a synchronous program even though a separate function is called
/**/
function add() {
  console.log("Start of Operation");
  let result = 0;
  for (let i = 0; i < 5000000000; i++) {
    result += i;
  }
  console.log("Result:", result);
}
console.log("Program Start");
add();
console.log("Program End");

// A lengthy synchronous program can make the program unresponsive since the program is single-threaded.
// Single-threaded makes it so that the program can only execute one task at a time.
// If the program awaits the completion of a lengthy synchronous function, it is unable to handle any other events in the meantime.

// Asynchronous programming is the solution to this issue.
// Event handlers are a form of asynchronous programming where you provide a function, known as the event handler, to be executed not immediately, but rather whenever a specific event occurs.
// If we consider the event as the completion of an asynchronous operation, then this event can serve as a notification to the caller about the result of the asynchronous function call.

// Early asynchronous APIs, such as the XMLHttpRequest API for making HTTP requests in JavaScript, utilized events in a similar ways.
// Given that making HTTP requests can be time consuming, this API operates asynchronously, and you receive notifications about the progress and completion of a request by attaching event listeners to the XMLHttpRequest object.
// Check the index.html file to see a program that uses the XMLHttpRequest

// An event handler is a specific category of callback, which is essentially a function passed as an argument to another function.
// The expectation is that the callback will be invoked at the right moment.
// Callbacks were the primary method of implementing asynchronous functions in JavaScript.

// Code based on callbacks can become complex, particularly when the callback itself needs to invoke functions that require another callback.
// As a result, most modern asynchronous APIs don't use callbacks and instead use something called the Promise.