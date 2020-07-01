// Multiple ways to remove duplicates from an array by using the ARROW Function approach.

let states = ['Andra', 'Karnataka', 'Andra', 'Kerala', 'Bengaluru'];

let uniqueStatess = states.filter((c, index) => {   // using arrow function
    return states.indexOf(c) === index;
});

console.log("Removes the duplicate states",uniqueStatess);



// To find the duplicate values, you just need to reverse the condition:
let statess = ['Andra', 'Karnataka', 'Andra', 'Kerala', 'Bengaluru'];

let uniqueStates = statess.filter((c, index) => {   // using arrow function
    return statess.indexOf(c) === index;
});

console.log("Display the duplicate states",uniqueStates);



// The following snippet shows how to sort employees by first names in descending order case
let employees = [
    {
        firstName: 'Mahesh',
        lastName: 'Das',
        age: 27,
        joinedDate: 'December 15, 2017'
    },

    {
        firstName: 'Rohith',
        lastName: 'Sharma',
        age: 25,
        joinedDate: 'January 15, 2019'
    },

    {
        firstName: 'Ajay',
        lastName: 'Kumar',
        age: 30,
        joinedDate: 'February 15, 2011'
    }
];

//First, convert the names of employees to lowercase.
// Second, compare names and return -1, 1 and 0, depending on the string comparison.
employees.sort((a, b) => {
    let firstComparsion = a.firstName.toLowerCase(),
        secondComparsion = b.firstName.toLowerCase();

    if (firstComparsion < secondComparsion) {
        return -1;
    }
    if (firstComparsion > secondComparsion) {
        return 1;
    }
    return 0;
});


employees.forEach((e) => {
    console.log(`${e.firstName} ${e.lastName}`);
});