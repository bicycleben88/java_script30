const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// is at least one person 19 or older?
const isAdult = people.some((person) => {
  const currentYear = new Date().getFullYear();
  const age = currentYear - person.year;
  return age > 18;
});
console.log(isAdult); // should be true

// is everyone 19 or older?
const allAdult = people.every(
  (person) => new Date().getFullYear() - person.year > 18
);
console.log(allAdult); // should be false

// find the comment with the ID of 823423
const comment = comments.find((comment) => comment.id === 823423);
console.log(comment); // should be { text: "Super good", id: 823423 }

// delete the comment with the ID of 823423
const index = comments.findIndex((comment) => comment.id === 823423);
const newComments = [
  ...comments.splice(0, index),
  ...comments.splice(index + 1),
];

console.table(newComments);
