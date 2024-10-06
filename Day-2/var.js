let string="30 Days Of JavaScript";
console.log(string);

console.log(string.replace('JavaScript,Python'));
// 30 Days Of JavaScript

console.log(string.replace('JavaScript','Python'));
//  30 Days Of Python

console.log(string.charAt(15));
//  S

console.log(string.charCodeAt(15));
//  83

console.log(string.indexOf(30));
//  0

console.log(string.indexOf("Days"));
//  3

console.log(string.indexOf("J"));
//  11


console.log(string.lastIndexOf("J"));
//  11

console.log(string.lastIndexOf("Java"));
//  11

let str='You cannot end a sentence with because because because is a conjunction';

console.log(str.indexOf("because"));
//  31

console.log(str.lastIndexOf("because"));
//47
1 
console.log(str.search("because"));Ś

//  31
let a='  30 days of python';

console.log(a.trim());
//  30 days of python

console.log(string.startsWith(30));
//  true

console.log(string.endsWith("Script"));
// VM1686:1 true

console.log(string.match('a'));
// VM1728:1 ['a', index: 4, input: '30 Days Of JavaScript', groups: undefined]


let b='30 Days of';

let c='JavaScript';

console.log(b.concat(' ',c));
// 30 Days of JavaScript

console.log(string.repeat(2));
//  30 Days Of JavaScript30 Days Of JavaScript


