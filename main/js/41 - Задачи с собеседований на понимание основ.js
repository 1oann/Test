// 1
// let x = 5; 
// alert( x++ );

// 2
// [ ] + false - null + true 

// При работе с пустым массивом в таких операциях, он будет приведен к строковому типу данных
// console.log(typeof([] + false)); // 'false'
// console.log([] + false - null + true); // NaN

// 3
// let y = 1; 
// let x = y = 2; 
// alert(x);

// 4
// console.log([] + 1 + 2); // '12'

// 5
// У строк также есть индексы
// alert("1"[0]);

// 6
// Оператор И (&&) всегда останавливает на лжи
// console.log(2 && 1 && null && 0 && undefined);

// 7
// Два знака НЕ (!!) превращают следующее  за ними выражение в boolean
// console.log(!!( 1 && 2 ) == (1 && 2));

// 8
// Оператор ИЛИ (||) всегда останавливает на правде
//          3    3
// alert(null || 2 && 3 || 4); // 3

// 9
// const a = [1, 2, 3]; 
// const b = [1, 2, 3]; 

// console.log(a == b); // false

// 10
// alert( +"Infinity" ); // Infinity - Number
// alert(typeof(+"Infinity"));

// 11
// Строки сравниваются по-символьно
// console.log("Ёжик" > "яблоко"); // false

// 12
// console.log(0 || "" || 2 || undefined || true || falsе); // 2