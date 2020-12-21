let people = [
  {
    name: 'david',
    age: 23,
    hobbies: [
      { name: 'gaming', type: 'indoor' },
      { name: 'sleeping', type: 'outdoor' },
    ],
  },
  {
    name: 'jessica',
    age: 19,
  },
];

people.forEach((a) => (a.age += 1));
// let arr = people.map((a) => ({ name: a.name, hobbies: a.hobbies }));
// console.log(arr[0].hobbies);
console.log(people);
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const david = new Person('David', 20);
// const jessica = new Person('Jessica', 20);

//console.log([david, jessica]);

// newPeople = people.forEach((p) =>
//   console.log(`Person: name - ${p.name}, age - ${p.age}`)
// );

// newPeople = people.map((a) => {
//   return a.age + 1;
// });

// people = people.map((a) => {
//   // a.set('hobby', 'gaming');
//   return a;
// });

// people.forEach((person) => (person.age += 1));

// console.log(people);
