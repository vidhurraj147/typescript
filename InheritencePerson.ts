class InheritencePerson{
    firstName: string;
    lastName: string;

    greet(){
        console.log("This is from Inheritence Person");
    }
}

class ImplementedPerson extends InheritencePerson {
    greet(){
        console.log("This is from ImplementedPerson");
    }

    callSuperGreet(){
        super.greet();
        this.greet();
    }
}

var ip = new ImplementedPerson();
ip.greet();
ip.callSuperGreet();