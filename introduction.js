//task no 01
// Given:
let a = 5;
let b = 10;

// TODO: Swap their values without hardcoding new numbers.
// After swap → a = 10, b = 5

// solve

let temp = a; 
    a    = b;
    b    = temp;


// Create two variables: length = 8, width = 6
// Find and print:
// Area = length * width
// Perimeter = 2 * (length + width)

let length = 8;
let width  = 6;

let Area = length * width;
let Perimeter = 2 * (length + width)

console.log(Area, Perimeter)


// Given: radius = 7
// Use const PI = 3.1416
// Calculate and print:
// Area = PI * radius^2
// Circumference = 2 * PI * radius 

const radius = 7;
const PI = 3.1416
let Area2 = PI * radius**2
let Circumference = 2 * PI * radius

console.log(Circumference)


// Create variables: firstName, lastName, country, age
// Print: "Hi, I'm [firstName] [lastName] from [country]. I'm [age] years old."
// (Use template literals, not + concatenation)


const firstName = "Rohim"
const lastName = "shek"
const Country = "Bangladesh"
const age = 60
const address = `Hi, I'm ${firstName} ${lastName} from ${Country}. I'm ${age} years old.`

console.log(address)



