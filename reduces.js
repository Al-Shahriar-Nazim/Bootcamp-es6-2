const numbers = [3,2,1];
let sum = 0;
for(const num of numbers){
    sum = sum + num;

}
console.log(sum);
//output : 6

const numbers2 = [3,2,1];
const total = numbers2.reduce((acc,curr)=>acc+curr,0);
console.log(total)
//output : 6

const cart =[
    {name:"laptop",price:30000},
    {name:"phone",price:20000},
    {name:"tablet",price:15000}
]
const totalPrices = cart.reduce((acc,curr)=>acc+curr.price,0);
console.log(totalPrices);
//output : 65000

const words = ["hello","world","this","is","reduce"];
const sentence = words.reduce((acc,curr)=>acc+" "+curr);
console.log(sentence);
//output : hello world this is reduce

