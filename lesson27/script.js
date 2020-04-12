'use strict';

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum()); 
// }

// showThis(4, 5);
// showThis(5, 5);

// let obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// }
// obj.sum()



// let user = {
//     name: 'John'
// };

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + ' ' + surname);
// }

// console.log(sayName.call(user, 'Smit'));
// console.log(sayName.apply(user, ['Snow']));

// function count(number) {
//     return this * number;
// }

// let double = count.bind(2);

// console.log(double(3));
// console.log(double(10));


let btn = document.querySelector("button");

btn.addEventListener('click', function() {
    console.log(this);
    this.style.backgroundColor = 'red';
    function showThis() {
        console.log(this);
    }
    showThis();
});

let age = document.getElementById('age');
function showUser(surname, name) {
    alert('Пользователь ' + surname + " " + name + ", его возраст " + this.value);
};
showUser.call(age, "VasiliY" , "Pupkin");



//
// 1) Просто вызов функции - window/undefined
// 2) Метод объекта - this = объекта
// 3) Котструктор (new) - this = новый создынный объект
// 4) Указания конкретного контекста - call, apply, bind
//