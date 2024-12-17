let stdMarks =[85,97,44,37,76,60];
let sum=0;
for(let i=0;i<6;i++){
    sum+=stdMarks[i];
}
console.log("sum of students marks :- ", sum);

console.log("Average of students marks :-", sum/stdMarks.length);

//using for of
let sum1=0;
for(let val of stdMarks){
    sum1+=val;
}
console.log("sum of students marks :- ", sum1);
let avg = sum/stdMarks.length;
console.log(`Average of students marks :- ${avg}`);
