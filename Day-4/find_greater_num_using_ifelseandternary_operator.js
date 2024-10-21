let a = prompt("Enter the first number:");
let b = prompt("Enter the second number:");
if (a>b) {
    console.log(`${a} is greater than ${b}`);
}
else{
    console.log(`${b} is greater than ${a}`);

}
console.log(a > b ? 
`${a} is greater than ${b}`
: `${b} is greater than ${a}`);
