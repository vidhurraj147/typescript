var Foo = /** @class */ (function () {
    function Foo() {
    }
    Foo.prototype.getFullName = function () {
        return this.firstName + " --- " + this.lastName;
    };
    return Foo;
}());
var aPersonInterface = new Foo();
var someObj = {
    firstName: "fn",
    lastName: "ln",
    getFullName: function () { return "added from someObj"; },
    age: 10
};
aPersonInterface = someObj;
