// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries) {
//     console.log('Я сыт!');
// }

// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'sadasdadasdasd');


// if (hamburger === 3 && cola === 1 && fries) {
//     console.log('Все сыты!');
// } else {
//     console.log('Мы уходим!');
// }

// Всегда false: 0, NaN, null, undefind, "" <- пустая строка

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets ) {
    console.log('Все довольны!');
} else {
    console.log('Мы уходим!');
}

console.log(hamburger || cola || fries);

let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport);

// Оператор "Не"
console.log(!0);



//_____

console.log( NaN || 2 || undefined ); // 2


console.log( NaN && 2 && undefined ); // NaN


console.log( 1 && 2 && 3 ); // 3


console.log( !1 && 2 || !3 ); // false (!1)


console.log( 25 || null && !3 ); // 25


console.log( NaN || null || !3 || undefined || 5); // 5


console.log( NaN || null && !3 && undefined || 5); // 5


console.log( 5 === 5 && 3 > 1 || 5); // true (3 > 1)


//_____

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;


if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!')
}

//_____

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger || cola || fries === 3 || nuggets) {
   console.log('Done!')
}

console.log(hamburger || cola || fries === 3 || nuggets);

//_____

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
}
