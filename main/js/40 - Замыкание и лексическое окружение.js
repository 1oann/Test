// let number = 5; debugger

// function logNumber() {
//     // let number = 4; debugger
//     console.log(number); debugger
// }

// number = 6;

// logNumber(); debugger

// number = 8;

// logNumber(); debugger


function createCounter() {
    let counter = 0;

    const myFunction = function() { debugger
        counter = counter + 1; debugger
        return counter;
    }

    return myFunction;
}
debugger
const increment = createCounter(); debugger
const c1 = increment(); debugger
const c2 = increment(); debugger
const c3 = increment(); debugger


console.log(c1, c2, c3);

// Лексическое окружение бывает внутренним и внешним
// Лексическое окружение есть у любого блока кода
// Замыкание это функция которая запоминает свои внешние переменные и может получить к ним доступ

{
    let msg = 'Hello';
}

console.log(msg);

for (let i = 1; i < 9; i++) {
    for(let j = 0; j < 9; j++) {
        let num = 3;
    }
    console.log(num);
}