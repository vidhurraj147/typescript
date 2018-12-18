"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var PersonExport_1 = require("./PersonExport");
var _ = __importStar(require("lodash"));
var pe = new PersonExport_1.PersonExport();
pe.firstName = "Rahul";
pe.lastName = "Kadgekar";
console.log(pe.firstName + ", " + pe.lastName);
console.log(pe);
var myArray = [4, 5, 8, 6, 3, 9, 8, 2];
console.log(_.reverse(myArray));
