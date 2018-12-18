var a: string;
var b: number;

var num1: number;
var num2: number;

function add(a1: number,b1: number,c = 0,d = 0, e: number = 0): number{
    return a1+b1+c;
}

console.log(add(1,2,3));
console.log(add(1,2));
