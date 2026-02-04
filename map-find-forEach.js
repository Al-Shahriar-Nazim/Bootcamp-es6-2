const students = [
  { id: 1, name: "nazim", marks: 60 },
  { id: 2, name: "jamal", marks: 90 },
  { id: 3, name: "mojumder", marks: 93 },
  { id: 4, name: "sdem", marks: 50 },
];

const name = students.map((student) => student.name);
console.log(name);
// output : [ 'nazim', 'jamal', 'mojumder', 'sdem' ]

const goodStudents = students.filter((student) => student.marks > 80);
console.log(goodStudents);
/**
 * [
  { id: 2, name: 'jamal', marks: 90 },
  { id: 3, name: 'mojumder', marks: 93 }
]
 */
