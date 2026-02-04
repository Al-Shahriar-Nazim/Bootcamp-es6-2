const numbers = [1, 2, 31, 41];
const getterThen10 = numbers.filter((x) => x > 10);
console.log(getterThen10);
//output :[31,41]
const oddNumber = numbers.filter((num) => num % 2 === 1);
console.log(oddNumber);
//output :[1,31,41]
