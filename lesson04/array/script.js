'use strict';

let options = {
    width: 1024,
    height: 1023,
    name: 'test'
};

console.log(options.name);

options.bool = false;
options.colors = {
    border: 'black',
    bg: 'red'
}

delete options.bool;

console.log(options)

for (let key in options) {
    console.log('Свойство ' + key + ' имеет значение ' + options[key]);
}

console.log(Object.keys(options).length);


//Array
let arr = [1, 2, 3, 4, 5];

arr.pop();
arr.push(8);
arr.shift();
arr.unshift(7);

console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

arr.forEach(function(item, i, mass) {
    console.log(i + ': ' + item + ' (массив: ' + mass + ')');
});

let mass = [1, 3, 5, 6, 7];

for (let key of mass) {
    console.log(key)
}