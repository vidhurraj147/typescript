var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var InheritencePerson = /** @class */ (function () {
    function InheritencePerson() {
    }
    InheritencePerson.prototype.greet = function () {
        console.log("This is from Inheritence Person");
    };
    return InheritencePerson;
}());
var ImplementedPerson = /** @class */ (function (_super) {
    __extends(ImplementedPerson, _super);
    function ImplementedPerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImplementedPerson.prototype.greet = function () {
        console.log("This is from ImplementedPerson");
    };
    ImplementedPerson.prototype.callSuperGreet = function () {
        _super.prototype.greet.call(this);
        this.greet();
    };
    return ImplementedPerson;
}(InheritencePerson));
var ip = new ImplementedPerson();
ip.greet();
ip.callSuperGreet();
