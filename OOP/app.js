// object literal notation
const userOne = {
    username: 'ryu',
    email: 'ryu@karate.com',
    login(){
        console.log('user logged in');
    },
    logout(){
      console.log('user logged out');
    }
};


// Constructor function
// every object has a prototype
// prototypes contain all the methods for that object type

// function User(username, email) {
//     this.username = userName;
//     this.email = userEmail;
//     this.login = function(){
//         console.log(`${this.username} logged in`);
//     }
// }

// User.prototype.login = function() {}

// prototypal inheritance
// function Admin(username, email, password){
//     User.call(this, username, email);
//     this.password = password;
// }

// inherit methods
// Admin.prototype = Object.create(User.prototype);

// Classes

class User {
    constructor(userName, userEmail) {
        // set up properties
        this.username = userName;
        this.email = userEmail;
        this.score = 0;
    }
    login(){
        console.log(`${this.username} logged in`);
        return this; // returning this allows chaining
    }
    logout(){
        console.log(`${this.username} logged out`);
        return this;
    }
    incScore(increaseValue){
        this.score += increaseValue;
        console.log(`${this.username} has a score of ${this.score}`);
        return this;
    }
}

const userTwo = new User('tom', 'tom@tom.com');
userTwo.login().incScore(2).logout();
// new creates new objects
// binds value of 'this' to new object
// calls the constructor function to build the object

// Sub-Classes

class Admin extends User{
    constructor(username, email, score, password) {
        super(username, email, score);
        this.password = password;
    }
    deleteUser(userObject){
        const users = userObject.filter((u) => {
            return u.username !== this.username
        });
    }
}
