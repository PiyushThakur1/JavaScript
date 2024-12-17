// // let sum=0;
// // for(let i=1;i<=5;i++){
// //     sum=sum+i;
// // }
// // console.log("sum:-", sum);

// let sum = 0;
// let i = 1;
// while (i <= 5) {
//     sum = sum + i;
//     i++;
// }
// console.log("sum:-", sum);
 
// //for-of loop used for string arrays
// let str="APmasefrse";
// let size=0;
// for(let i of str){
//     console.log("i =",i);
//     size++;
// }
// console.log("String Size =", size);

// //for-in loop used for objects and arrays
// let std={
//     name:"rahu",
//     cgpa:8.8,
//     isPass:true,

// };
// for (const key in std) {
//     console.log("key = ", key, " value =", std[key]);
// }

// for(let num=0;num<=100;num++){
//     console.log("num = ",num);
    
// }
// for(let num=0;num<=100;num++){
//     if(num%2===0){
//         console.log(num);
        
//     }
    
// }

//guess the number

// let gameNum = 24;
// let userNumber=prompt("Enter the random number : ");
// while(userNumber !=gameNum){
//     userNumber=prompt("you have entered wrong number. guess again : ");
// }
// console.log("Congratulations,you have guessed it!");


// template literals
// let sentence=`spacial string`;
// console.log(sentence);


// Qs1
let fullName=prompt("Enter your full name without spaces : ");

let userName="@" + fullName + fullName.length;
console.log(userName);
