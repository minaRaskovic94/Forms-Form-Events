const scores = [10, 30, 15, 25, 50, 40, 5];

// const filteredScores = scores.filter(score => {
//   return score > 20;
// });

// console.log(filteredScores);

const users = [
  {name: 'shaun', premium: true},
  {name: 'yoshi', premium: false},
  {name: 'mario', premium: false},
  {name: 'chun-li', premium: true},
];

// Moj nacin sa return i sa === true
// const premiumUsers = users.filter(user => {
//   return user.premium === true;
// })


// Kako je on uradio
const premiumUsers = users.filter(user => user.premium)

console.log(premiumUsers);