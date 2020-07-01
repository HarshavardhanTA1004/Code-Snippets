// Merge objects using the spread operator (...)
// Below example  uses the spread operator (...) to merge the
//  person and job objects into the employee object

let person = {
    firstName: 'Harsha',
    lastName: 'Vardhan',
    age: 28,
    ssn: '123-456-2356'
};


let job = {
    jobTitle: 'JavaScript Developer',
    location: 'India'
};

let employee = {
    ...person,  // using the spread operator (...)
    ...job      //  using the spread operator (...)
};

console.log("Employee Details",employee);


// In the below example If objects have a property with the same name, 
// then the right-most object property overwrites the previous one

let jobDetails = {
    jobTitle: 'JavaScript Developer',
    country: 'USA'
};

let locationDetails = {
    city: 'Bengaluru',
    country: 'India'
};

let completeJobDetails = {
    ...jobDetails,
    ...locationDetails
};

console.log("complete Job Details",completeJobDetails);

// Merge objects using Object.assign() method
let employe = {
    firstName: 'Harsha',
    lastName: 'Vardhan',
    age: 28,
    ssn: '123-456-2356'
};


let job = {
    jobTitle: 'JavaScript Developer',
    country: 'India'
};


let employeeee = Object.assign(employe, job); //Object extensions - copy an object or merge objects.
console.log("Merge objects using Object.assign() method",employeeee);

// The Shallow Merge
// Both the spread operator ( ...) and Object.assign() method perform a shallow merge.
//  It means that if an object has a property that references to another object,
//  the property of the original object and result target object will reference the same object. 

let persons = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    ssn: '123-456-2356',
    contact: {
        phone: '408-989-8745',
        email: 'john.doe@example.com'
    }
};


let jobs = {
    jobTitle: 'JavaScript Developer',
    location: 'USA'
};

let employees = { ...persons,  ...jobs };

console.log(employees.contact === persons.contact);