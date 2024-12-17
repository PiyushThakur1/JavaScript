let itemPrices=[250,645,300,900,50];

// let idx=0;
// for(let val of itemPrices){
//     console.log(`value at index ${idx} = ${val}`);
//     let offer=val/10;
//     itemPrices[idx]=itemPrices[idx]-offer;
//     console.log(`value after offer = ${itemPrices[idx]}`);
    
//     idx++;
// }

//for loop
for(let i=0;i<itemPrices.length;i++){
    let offer= itemPrices[i]/10;
    itemPrices[i]=itemPrices[i]-offer;
    
}
console.log(`value after offer = ${itemPrices}`);