class Person {
    // firstName: string;
    // lastName: string;
    // age: number;
    // constructor(firstName: string, lastName: string){
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    // }

    // INSTEAD OF THE ABOVE WE CAN CODE IT IN ONE SINGLE LINE
    constructor(private firstName: string, private lastName: string){
    }

    // constructor(){
    //     this.firstName = "Added via constructor";
    //     this.lastName = "Added via constructor";
    // }
    
    getFullName(){
        return this.firstName + " " + this.lastName;
    }
}

var aPerson = new Person("Parameterized_FirstName","Parameterized_LastName");
console.log(aPerson.getFullName());
// console.log(aPerson.firstName);
// aPerson.firstName = "FirstName";
// aPerson.lastName = "LastName";
// console.log(aPerson.firstName);
console.log(aPerson.getFullName());

// var bPerson : Person;
// bPerson = new Person();
// bPerson.firstName = "B FIRST NAME ADDED";
// bPerson.lastName = "B LAST NAME ADDED";