// To convert an object to an array you use one of three methods: 
// Object.keys(), Object.values(), and Object.entries().

const employee = {
    firstName: 'Harsha',
    lastName: 'Vardhan'
};

// To convert property’s names of the employee object to an array, you use the Object.keys() method.

const propertyNames = Object.keys(employee);
console.log(propertyNames);  //[ 'firstName', 'lastName' ]

// To convert property’s values of the employee object to an array, you use the Object.values() method.
const propertyValues = Object.values(employee);
console.log(propertyValues); // [ 'Harsha', 'Vardhan' ]


// To convert property’s entries of the employee object to an array, you use the Object.entries() method.
const entries = Object.entries(employee);
console.log(entries); // [ [ 'firstName', 'Harsha' ], [ 'lastName', 'Vardhan' ] ]