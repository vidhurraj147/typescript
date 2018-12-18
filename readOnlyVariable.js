var PersonReadOnly = /** @class */ (function () {
    function PersonReadOnly(name) {
        this.desc = "ReadOnly Property added";
        this.name = name;
    }
    return PersonReadOnly;
}());
var aPersonReadOnly = new PersonReadOnly("Added as constructor param");
console.log(aPersonReadOnly.name);
console.log(aPersonReadOnly.desc);
