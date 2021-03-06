// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2); // 100, 100
age = 200;
console.log(age, age2); // 200, 100

// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

// and we want to make a copy of it.
const team = players;
console.log(players); // ["Wes", "Sarah", "Ryan", "Poppy"]

// You might think we can just do something like this:
// team[3] = "Lux";
// however what happens when we update that array?
console.log(team); // [ 'Wes', 'Sarah', 'Ryan', 'Lux' ]
// now here is the problem!
console.log(players); // [ 'Wes', 'Sarah', 'Ryan', 'Lux' ]
// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way

// or create a new array and concat the old one in
const team2 = players.slice();
console.log(team2); // [ 'Wes', 'Sarah', 'Ryan', 'Poppy' ]
const team3 = [].concat(players);
console.log(team3); // [ 'Wes', 'Sarah', 'Ryan', 'Poppy' ]
const team5 = Array.from(players);
console.log(team5); // [ 'Wes', 'Sarah', 'Ryan', 'Poppy' ]

// or use the new ES6 Spread
const team4 = [...players];
console.log(team4); // [ 'Wes', 'Sarah', 'Ryan', 'Poppy' ]

// now when we update it, the original one isn't changed
team5[2] = "super man";
console.log(team5); // [ 'Wes', 'Sarah', 'super man', 'Poppy' ]
console.log(players); // [ 'Wes', 'Sarah', 'Ryan', 'Poppy' ]

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: "Wes Bos",
  age: 80,
};

// and think we make a copy:
const captain = person;
captain.age = 100;
console.log(person); // { name: 'Wes Bos', age: 100 }

// how do we take a copy instead?
const captain2 = Object.assign({}, person, { number: 100, age: 12 });
console.log(captain2); // { name: 'Wes Bos', age: 12, number: 100 }

// We will hopefully soon see the object ...spread

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const ben = {
  name: "bat man",
  age: 1,
  bikes: {
    road: "trek",
    mountain: "awesome",
  },
};

const rider = Object.assign({}, ben);
console.clear();
console.log(rider);
// {
//   name: 'bat man',
//   age: 1,
//   bikes: { road: 'trek', mountain: 'awesome' }
// }
