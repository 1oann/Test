// При использовании метода на строке, она превращается в объект

let str = 'some';
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));

console.dir([1, 2, 3]);


const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
};

const jonh = Object.create(soldier); // Создание прототипа

// const jonh = {
//     health: 100
// };

// jonh.__proto__ = soldier;

// Object.setPrototypeOf(jonh, soldier); // Установка прототипа

console.log(jonh.sayHello);