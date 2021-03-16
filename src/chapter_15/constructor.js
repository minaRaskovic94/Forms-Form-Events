// constructor functions

function User(username, email) {
  this.username = username;
  this.email = email;
  // this.login = function () {
  //   console.log(`${this.username} has logged in`);
  // };  na ovaj nacin smo dodali metodu direktno unutar constructor-a, a ispod je to odradjeno dodavanjem na User prototype; prvim nacinom bi se metoda nalazilo direktno u objektu, a drugim nacinom postizemo da se metoda nalazi u okviru prototype-a
}

// ova f-ja iznad je ono sto se zapravo izvrsava "ispod" class-a, ovo se takodje nekada koristilo za kreiranje objekata pre pojave class-a

User.prototype.login = function () {
  console.log(`${this.username} has logged in`);
  return this;
};

User.prototype.logout = function () {
  console.log(`${this.username} has logged out`);
  return this;
};

function Admin(username, email, title) {
  User.call(this, username, email);
  this.title = title;
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function () {
  //delete an user
};

const userOne = new User("mario", "mario@gmail.com");
const userTwo = new User("luigi", "luigi@gmail.com");
const userThree = new Admin("shaun", "shaun@gmail.com", "black-belt");

console.log(userOne, userTwo, userThree);
userOne.login();
userOne.logout();
