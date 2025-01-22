const arr = [1, 2, 3, 5, 12];
// arr[99] = 0;
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// // Свойство length для массива равно индексу последнего элемента массива + 1
// console.log(arr.length);
// console.log(arr);

//Метод позволяет гибко перебрать все элементы внутри массива
// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// // Метод удаляет последний элемент массива
// arr.pop();

// // Метод добавляет элемент в конец массива
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// Метод для перебора содержимого (for * of *) работает только с массивоподобными сущностями (массив, строка, псевдомассив, map и set)
// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt('', '');

// Формирование массива на основании строк
const products = str.split(', ');

// Метод сортировки
products.sort();

// Преобразование массива в строку через разделитель
console.log(products.join(' || '));


// У псевдомассивов нет методов
