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