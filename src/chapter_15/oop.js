// const userOne = {
//   username: "ryu",
//   email: "ryu@gmail.com",
//   login() {
//     console.log("the user logged in");
//   },
//   logout() {
//     console.log("the user logged out");
//   },
// };

// console.log(userOne.email, userOne.username);
// userOne.login();

// const userTwo = {
//   username: "chun li",
//   email: "chun.li@gmail.com",
//   login() {
//     console.log("the user logged in");
//   },
//   logout() {
//     console.log("the user logged out");
//   },
// };

// console.log(userTwo.email, userTwo.username);
// userTwo.login();

// const userThree = new User("shaun@gmail.com", "shaun");

class User {
  constructor(username, email) {
    //set up properties
    this.username = username;
    this.email = email;
    this.score = 0;
  }
  login() {
    console.log(`${this.username} just logged in`);
    return this;
  }
  logout() {
    console.log(`${this.username} just logged out`);
    return this;
  }
  incScore() {
    this.score += 1; //ili samo this.score ++;
    console.log(`${this.username} has a score of ${this.score}`);
    return this;
  }
}

class Admin extends User {
  constructor(username, email, title) {
    super(username, email);
    this.title = title;
  }
  deleteUser(user) {
    users = users.filter((u) => {
      return u.username !== user.username;
    });
  }
}

//skraceno bi bilo: deleteUser(user) {
//  users = users.filter(u => u.username !== user.username);
// }

const userOne = new User("mario", "mario@gmail.com");
const userTwo = new User("luigi", "luigi@gmail.com");
const userThree = new Admin("shaun", "shaun@gmail.com", "black-belted ninja");

console.log(userOne, userTwo, userThree);

let users = [userOne, userTwo, userThree];
console.log(users);

userThree.deleteUser(userTwo);
console.log(users);

// the 'new' keyword
// 1 - it creates a new empty object {}
// 2 - it binds the value of 'this' to the new empty object
// 3 - it calls the constructor function to 'build' the object

userOne.login();
userTwo.login();
userOne.logout();
userTwo.logout();

// userOne.login().logout() - nije moguce jer kada se izvrsi prva metoda ne vraca se nikakav value, pa JS automatski tom return value-u dodeli da je undefined

userOne.incScore();
userOne.incScore();

userOne.login().incScore().incScore().logout();
