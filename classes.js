var Person = /** @class */ (function () {
    // constructor(){
    //     this.firstName = "Added via constructor";
    //     this.lastName = "Added via constructor";
    // }
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Person;
}());
var aPerson = new Person("Parameterized_FirstName", "Parameterized_LastName");
console.log(aPerson.getFullName());
console.log(aPerson.firstName);
aPerson.firstName = "FIRSTNAME";
aPerson.lastName = "LASTNAME";
console.log(aPerson.firstName);
console.log(aPerson.getFullName());
// var bPerson : Person;
// bPerson = new Person();
// bPerson.firstName = "B FIRST NAME ADDED";
// bPerson.lastName = "B LAST NAME ADDED";
