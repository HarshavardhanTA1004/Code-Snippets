// The variables x, y and z will take the values of the first, second, and third elements of the returned array.
function getEmployees() {
    return ['Rakesh', 'Sophie', 'Peter'];
 }
let [a, b, c] = getEmployees();

console.log(x); // 70
console.log(y); // 80
console.log(z); // 90


// If the getScores() function returns an array of two elements,
//  the third variable will be undefined, like this
function getNumbers() {
    return [70, 80];
 }
 
 let [x, y, z] = getNumbers();
 
 console.log(x); // 70
 console.log(y); // 80
 console.log(z); // undefined

//  It’s possible to take all remaining elements of an array and 
// put them in a new array by using the rest syntax (...):

function getCourtType() {
    return ['SupremeCourt', 'HighCourt', 'LowerCourt', 'ConsumerCourt'];
 }
let [court1, court2 ,...args] = getCourtType();  // ...args :Rest parameter concept is utilized.
console.log(court1); // SupremeCourt
console.log(court2); // HighCourt
console.log(args); // [LowerCourt, ConsumerCourt]

// Setting default values
function getItems() {
    return ['Mouse', 'Keyboard'];
}

let items = getItems();
let thirdItem = items[2] != undefined ? items[2] : 'No Items';

console.log(thirdItem); // No Items


// If the getItems() function doesn’t return an array and you expect an array, 
// the destructing assignment will result in an error. For example:
function getElements() {
    return null;
}

let [x = 1, y = 2] = getElements();
// Below mentioned error is displayed.
// Uncaught TypeError: getItems is not a function or its return value is not iterable


// A typical way to solve this is to fallback the returned value of the getElements() function to an empty array like this:
function getElementLists() {
    return null;
}

let [a = 10, b = 20] = getElementLists() || [];

console.log(a); // 10
console.log(b); // 20

// Nested array destructuring
function getProfile() {
    return [
        'John',
        'Peter',
        ['Redish', 'Greenish', 'Bluish']
    ];
}
let [
    firstName,
    lastName,
    [ color1, color2, color3]
] = getProfile();

console.log(color1, color2, color3); // Redish Greenish Bluish

// Array Destructuring Assignment Applications
//  Swapping variables
let a = 100, 
    b = 200;

[a, b] = [b, a];

console.log(a); // 200
console.log(b); // 100

// Functions that return multiple values
//  A function can return a value. However, you can return an array that contains multiple values

function calculate(a, b) {
    return [
        a + b,
        (a + b) / 2,
        a - b
    ]
}
let [sum, average, difference] = calculate(20, 10);
console.log(sum, average, difference); // 30, 15, 10