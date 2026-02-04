const numbers = [2, 3, 4, 5];
const double = [];
for (const num of numbers) {
  const result = num * 2;
  double.push(result);
}
console.log(double);
// output : [4,6,8,10]



const numbers2 = [3, 2, 1];
const doubleIt = (x) => x * 2;
const double2 = numbers2.map(doubleIt);
console.log(double2);
//output:[6,4,2]



const number3 = [4, 5, 3];
const double3 = number3.map((x) => x * 2);
console.log(double3);
//output :[8,10,6]


const friendsName = ["Nazim", "javvvary", "shofik"];
const namesLength = friendsName.map((name) => name.length);
const firstLetter = friendsName.map(name=>name[0]);
const upperFirstLetter = friendsName.map(name=>name[0].toUpperCase())
console.log(namesLength);
//output : [ 5, 8, 6 ]
console.log(firstLetter)
//output: ['N','j','s']
console.log(upperFirstLetter)
//output :['N','J','S']


const numbers4 = [3,2,4];
const result = numbers4.map(num=>{
    console.log(num)
})
/**
 * output:
 * 3
 * 2
 * 4
 */
