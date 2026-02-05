class Animale {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Dog extends Animale {
  constructor(name, breed, age) {
    super(name, age); // Call parent constructor
    this.breed = breed;
  }
  eat() {
    console.log(`${this.name} is eating.`);
  }
  bark() {
    console.log(`${this.name} is barking.`);
  }
}

const dog1 = new Dog("coffee", "labrador");
console.log(dog1);
// output: Dog { name: 'coffee', breed: 'labrador' }

const dog2 = new Dog("poppy", "maltase", 3);
console.log(dog2);
// output : Dog {name:'poppy', breed:'maltase', age:3}

class Cat {
  constructor(name, color, age) {
    this.name = name;
    this.color = color;
    this.age = age;
  }
  eat() {
    console.log(`${this.name} is eating.`);
  }
  meow() {
    console.log(`${this.color} is meowing colors.`);
  }
}
const cat1 = new Cat("mimi", "white", 2);
console.log(cat1);
//output : Cat { name: 'mimi', color: 'white', age: 2 }
cat1.eat();
// output : mimi is eating.
cat1.meow();
//output : white is meowing colors

class Birds extends Animale {
  constructor(name, country, age) {
    super(name, age);
    this.country = country;
  }
  name() {
    console.log(`${this.name} is the name of the bird.`);
  }
  country() {
    console.log(`${this.country} is the country of the bird.`);
  }
}
const bird1 = new Birds("parrot", "india", 2);
console.log(bird1);
// output : Birds { name: 'parrot', country: 'india', age: 2 }
