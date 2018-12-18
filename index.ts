import {PersonExport} from './PersonExport';
import * as _ from 'lodash';

var pe = new  PersonExport();
pe.firstName = "Rahul";
pe.lastName = "Kadgekar";
console.log(pe.firstName +", "+pe.lastName);
console.log(pe);

var myArray = [4,5,8,6,3,9,8,2];
console.log(_.reverse(myArray));