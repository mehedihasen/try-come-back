

// Create variables for your name, age, and favorite food.
// Print: "My name is ___, I am ___ years old, and I love ___!"


const myName ="mehedi"
const myAge = 30;
const myFavoriteFood ="beef vuna"
let bio = `my name is  ${myName}, I am ${myAge} years old, and I love ${myFavoriteFood}!`
console.log(bio)



// Take two numbers (a, b) and show sum, difference, product, division.
// Example output: "Sum: 10, Difference: 4, Product: 21, Division: 2.33"

const a = 7;
const b = 3;

let sum = a + b;
let difference = a-b ;

// Ask for a number and print if it is even or odd.

const number = 10;
  if(number % 2 === 0){
      console.log('this is odd')
      }
      else{
          console.log('this is even')
      }



// Create an array of 7 days.
// Ask user for a number (1–7) and print the day name.

let weekaOfDays =['Satuerday', 'Sunday','Monday','Tuesday','Wednesday','Thursday','Firyday'];
weekaOfDays.map(x => console.log(x));



// Generate a random number between 1–10.
// Ask user to guess the number (use prompt).
// Tell them if they guessed right or wrong.

