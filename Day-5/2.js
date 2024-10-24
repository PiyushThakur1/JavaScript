const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle' , 'Amazon'];
console.log(itCompanies);
console.log("no. of companies: " ,itCompanies.length);
console.log(itCompanies[0]);
console.log(itCompanies[Math.floor(itCompanies.length / 2)]);
console.log(itCompanies[itCompanies.length-1]);

console.log("Each Company:- ")
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());

let companiesString = itCompanies.join(', ');
console.log(companiesString + ' are big IT companies.');

let index=itCompanies.indexOf('Amazon')
if(index === -1){
    console.log("Amazon is not present in the array")
}else{
    console.log("Amazon is present in the array")
}

console.log(itCompanies.sort())
console.log(itCompanies.reverse())

console.log(itCompanies.slice(0,3))

console.log(itCompanies.slice(4,itCompanies.length))

console.log(itCompanies.slice(Math.floor(itCompanies.length / 2)))

let comp=itCompanies.reverse()
console.log(comp)
console.log(comp.shift())
console.log(comp.pop())
console.log(comp.splice())
