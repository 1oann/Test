let num = 20;

function showFirstMessage(text) {
    console.log(text);
    // let num = 10;
    console.log(num);
} 

showFirstMessage('Hello World!');
console.log(num);

// Переменная созданная внутри функции - локальная
// Замыкание функции - сама функция вместе со всеми внешними переменными которые ей доступны

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(1, 9));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log('Hello');
};

logger();

const calc = (a, b) => { 
    return a + b;
    console.log()
};
