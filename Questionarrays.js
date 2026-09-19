//  Q1) for a given array with marks of student -> [90,76,89,54,78];
// find the average marks of class

let MARKS=[90,76,89,54,78];
let sum=0;
for(let val of MARKS){
    sum=sum+val;
}
let avg=sum/MARKS.length;
console.log(`The avg of class is ${avg}`);

//    Q2) For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
// All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

let prices=[40,80,120,160,200];
for(i=0;i<prices.length;i++){
  let offer=prices[i]/10;
   prices[i]=prices[i]-offer;

}l
console.log(prices);