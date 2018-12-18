interface PersonInterface{
    firstName: string;
    lastName: string;
    getFullName(): string;
}

class Foo implements PersonInterface{
    firstName: string;
    lastName: string;
    getFullName(): string{
        return this.firstName + " --- " + this.lastName;
    }
}

let aPersonInterface: PersonInterface = new Foo();

let someObj = {
    firstName: "fn",
    lastName: "ln",
    getFullName: () => "added from someObj",
    age: 10
};

aPersonInterface = someObj;