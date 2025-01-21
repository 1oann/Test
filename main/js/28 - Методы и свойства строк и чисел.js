const str = 'test';
const arr = [1, 2, 4];

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

const fruit = 'Some fruit';

console.log(fruit.indexOf('fruit'));

const logg = 'Hello world';

console.log(logg.slice(6, 11));

// Не поддерживает отрицательные значения (отрицаетельное значение = 0), первое значение может быть больше второго
console.log(logg.substring(6, 11));

// В параметрах указывается откуда и сколько символов нужно вырезать
console.log(logg.substr(6, 5));


const num = 12.5;

// Округление до ближайшего целого
console.log(Math.round(num));

const test = '12.0px';

// Переводит числа из строк в целые числа
console.log(parseInt(test));

// Переводит дробные числа из строк в дробные числа
console.log(parseFloat(test));
