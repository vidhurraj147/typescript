class  PersonReadOnly{
    readonly name: string;
    readonly desc = "ReadOnly Property added";

    constructor(name: string){
        this.name = name;
    }
}

var aPersonReadOnly = new PersonReadOnly("Added as constructor param");
console.log(aPersonReadOnly.name);
console.log(aPersonReadOnly.desc);