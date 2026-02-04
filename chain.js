const person = {
  name: "nazim khan",
  1: 40,
  age: "20",
  "home-address": "Feni",
  prof: "Dev",
  family: {
    title: "happy family",
    // mothers: {
    //   name: "nazmun Nahar",
    //   age: "35",
    // },
  },
};

console.log(person.family.mothers?.age)

//error take tekanor jonno optional chaining use kora hoi 
//output : undefined