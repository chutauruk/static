// // var names = ['ryu', 'crystal', 'mario']
// // console.log(names.length)
// // console.log(names.sort)
// // window.innerWidth
// // var name = 'mario'
// // name.length
// // var name2 = new String('ryu')

// // var userOne = {
// //     email: 'ryu@ninjas.com',
// //     name: 'Ryu',
// //     login(){
// //         console.log(this.email, 'has logged in');
// //     },
// //     logout(){
// //         console.log(this.email, 'has logged out');
// //     }
// // };

// // userOne.name = 'Ryu'
// // userOne['email']
// // var prop = 'name'
// // userOne[prop]
// // userOne.name
// // userOne.age = 25

// //  userOne.login();
// //  userOne.logout();

//  // prototype method vs. es6 class syntax (syntactic sugar)
// // var userFour = new user()

// // the 'new' keyword creates a new empty object, making 'this' refer to the new empty object, and calls the constructor method

// class User{
//     constructor(email, name){
//         this.email = email;
//         this.name = name;
//         this.score = 0;
//     }
//     login(){
//         console.log(this.email, 'just logged in');
//         return this;
//     }
//     logout(){
//         console.log(this.email, 'just logged out');
//         return this;
//     }
//     updateScore(){
//         this.score++;
//         console.log(this.email, 'score is now', this.score);
//         return this;
//     }
// }

// class Admin extends User {
//     deleteUser(user){
//         users = users.filter(u => {
//             return u.email != user.email;
//         })
//     }
// }

function User(email, name){
    this.email = email;
    this.name = email;
    this.online = false;
    this.login - function(){
        console.log(this.email, 'has logged in');
    }
}

User.prototype.login = function(){
    this.online = true;
    console.log(this.email, 'has logged in');
}

User.prototype.logout = function(){
    this.online = false;
    console.log(this.email, 'has logged in');
}

function Admin(...args){
    User.apply(this, args);
    this.role = "super admin"
}

Admin.prototype = Object.create(User.prototype)

Admin.prototype.deleteUser = function(u){
    users = users.filter(user => {
        return user.email != u.email;
});
};

var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('yoshi@mariokorp.com', 'Yoshi');
var admin = new Admin('shaun@ninjas.com', 'Shaun');

var users = [userOne, userTwo, Admin];

console.log(admin);
console.log(users);
admin.deleteUser(users[0]);
userTwo.login();

// userOne.login().updateScore().updateScore().logout();
// userTwo.logout();


// console.log(userOne);
// console.log(userTwo);

// var users = [userOne, userTwo, admin];
// admin.deleteUser(userOne);
// console.log(users);