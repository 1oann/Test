let a = 5,
    b = a;

b = b + 5;

// Примитивные типы данных (строки, числа, логические значения) передаются по значению
// console.log(b);
// console.log(a);

// Объекты передаются по ссылке
const obj = {
    a: 5,
    b: 1
};

// const copy = obj; // Ссылка

// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;

newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);


// Есть глубокие и поверхностные копии объектов


const add = {
    d: 17,
    e: 20,
};

const clone = Object.assign({}, add);

// console.log(add);
// console.log(clone);


const oldArray = ['a', 'b', 'c'];

// Метод для копии массива
const newArray = oldArray.slice();

newArray[1] = 'asdadadadas'

// console.log(newArray);
// console.log(oldArray);

// Spread оператор
const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ['a', 'b'];

const newAarray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...internet};

console.log(newObj);