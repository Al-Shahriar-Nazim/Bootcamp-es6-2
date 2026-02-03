const person ={
    name:"nazim khan",
    1:40,
    age:'20',
    'home-address':"Feni",
    prof:"Dev"
}

console.log(person)

//===========dot notation (function access)==========
const yourName = person.name;
console.log(yourName)
//output : nazim khan

//===========bracket notation=========================
/**way-01 */
const one = person["1"]
console.log(one)
//40
/**way-02*/
console.log(person['home-address'])
//output : Feni
//way-03
for(const key  in student){
    const values = student[key]
   
}