// Prototypal Inheritance
// myPerson --> Person.prototype --> Object.prototype --> null

class Person {  //A class is a type of function, but instead of using the keyword function to initiate it,
    //  we use the keyword class, and the properties are assigned inside a constructor() method.
    constructor(firstName, lastName, age, likes = []) {
        // The constructor method is special, it is where you initialize properties, it is called
        //  automatically when a class is initiated, and it has to have the exact name "constructor", 
        //  in fact, if you do not have a constructor method, JavaScript will add an invisible and empty 
        //  constructor method.
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })

        return bio
    }
    set fullName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes)
        this.position = position
    }
    getBio() {
        return `${this.fullName} is a ${this.position}.`
    }
    getYearsLeft() {
        return 65 - this.age
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, grade, likes) {
        super(firstName, lastName, age, likes)
        this.grade = grade
    }
    updateGrade(change) {
        this.grade += change
    }
    getBio() {
        const status = this.grade >= 70 ? 'passing' : 'failing'
        return `${this.firstName} is ${status} the class.`
    }
}

const me = new Employee('Suresh', 'Mead', 27, 'Developer', [])
me.fullName = 'Harsha Vardhan'
console.log(me.getBio())
