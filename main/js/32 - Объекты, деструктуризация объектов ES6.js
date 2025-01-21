// Объекты в JS - ассоциативные массивы

// Объекты - структуры котоые могут сохранять в себе любые типы данных в формате
// ключ: значение, которые также могут быть вложены (объекты в объекты), (массивы в массивы)
// и т.д.
// Чтобы их перебрать можно использовать конструкцию (for * in *)
// Для того чтобы объект умел что-то делать, внутрь него можно записывать функции и таким образом создавать методы объекта

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test');
    }
};

options.makeTest();

const {border, bg} = options.colors;
console.log(border);

// console.log(Object.keys(options).length);

// console.log(options['colors']['border']);

// console.log(options.name);

// delete options.name;

// console.log(options);

// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]){
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else{
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }

// console.log(counter);

