//'use strict'

function User(name , id) {
    this.name = name,
    this.id = id,
    this.human = true,
    this.hello = function() {
        console.log('Hello ' + this.name)
    }
}

User.prototype.exit = function(name) {
    console.log('Пользователь ' + this.name + ' ушел');
};

let ivan = new User('Ivan', 25),
    alex = new User('Alex', 20);

console.log(ivan);
console.log(alex)

console.log(ivan.hello())
console.log(alex.hello())

console.log(ivan.exit())
console.log(alex.exit())


//То же самое в синтаксисе ES6
// class User {
//     constructor(name, id) {
//         this.name = name,
//         this.id = id,
//         this.human = true;
//     }
//     hello() {
//         console.log(`Hello! ${this.name}`)
//     }
//     exit() {
//         console.log(`Пользователь ${this.name} ушел`)
//     }
// }

// let ivan = new User('Ivan', 23);
// let alex = new.User('Alex', 20);

// console.log(ivan);
// console.log(alex);

// ivan.hello();
// alex.hello();