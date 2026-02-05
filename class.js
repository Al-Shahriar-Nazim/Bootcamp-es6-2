/**
 * class -> template
 * object-oriented programming -> template-based programing;
 *
 */
class Player {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.location = "Bangladesh";
    console.log("Colling the constructor method", name);
  }
  goal() {
    console.log("Score a goal");
  }
  getTeamName() {
    return "Manchester United";
  }
}
// creating on object from the class
const playes1 = new Player("Ronaldo", 21);
playes1.goal();
console.log(playes1);
//output : Colling the constructor method Ronaldo
//output : Score a goal
// output : Player { name: 'Ronaldo', age: 21, location: 'Bangladesh' }

const playes2 = new Player("Messi", 22);
console.log(playes2);
//output : Player { name: 'Messi', age: 22, location: 'Bangladesh' }


console.log(playes1 instanceof Player);
// output : true