// Promises help you naturally handle errors, and write cleaner code by not having callback parameters
// A promise represents the result of an asynchronous operation. A promise is in one of three different states: pending, fulfilled or rejected
// Once a promise is fulfilled or rejected, it is immutable (i.e. it can never change again)
// We use new Promise to construct the promise, the constructor is called immediately with two arguments - one that fulfils the promise and the other that rejects the promise
// promise.done allows us to wait for the promise to be fulfilled or rejected before doing something with it



//  To perform the following asynchronous operations in sequence:

// Get the Employee details from the database.
// Get the salary of the selected Employee.
// Calculate the salary from the Employee services.
// The following functions illustrate the three asynchronous operations:

function getEmployeeDetails(employeeId) {
    return new Promise((resolve, reject) => {
        console.log('Get the Employee details from the database.');
        setTimeout(() => {
            resolve({
                employeeId: employeeId,
                employeename: 'Suresh',
                employeeage: 30
            });
        }, 1000);
    })
}

function getSkillSets(employeee) {
    return new Promise((resolve, reject) => {
        console.log(`Get the skill set details of ${employeee.employeename} from the API.`);
        setTimeout(() => {
            resolve(['JAVA', 'Javascript', 'Python']);
        }, 3 * 1000);
    });
}

function getSalaryDetails(skills) {
    return new Promise((resolve, reject) => {
        console.log(`Calculate the salary for the skill sets ${skills}.`);
        setTimeout(() => {
            resolve(skills.length * 10000);
        }, 2 * 1000);
    });
}

getEmployeeDetails(119098)
    .then(getSkillSets)
    .then(getSalaryDetails)
    .then(console.log);  //Get the Employee details from the database.
                        // Get the services of Suresh from the API.
                        // Calculate the salary for the skill sets JAVA, Javascript, Python.
                        // 30000