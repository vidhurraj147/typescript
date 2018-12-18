class Person {
    firstName: string;
    lastName: string;
    age: number;
    // constructor(){
    //     this.firstName = "Added via constructor";
    //     this.lastName = "Added via constructor";
    // }
    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(){
        return this.firstName + " " + this.lastName;
    }
}

var aPerson = new Person("Parameterized_FirstName","Parameterized_LastName");
console.log(aPerson.getFullName());
console.log(aPerson.firstName);
aPerson.firstName = "FirstName";
aPerson.lastName = "LastName";
console.log(aPerson.firstName);
console.log(aPerson.getFullName());

// var bPerson : Person;
// bPerson = new Person();
// bPerson.firstName = "B FIRST NAME ADDED";
// bPerson.lastName = "B LAST NAME ADDED";