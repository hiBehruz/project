// const storeName = "beeki";

// const storeDescription = {
//   budget: 1000,
//   employees: ["Alex", "John", "David"],
//   products: {
//     soup: 20,
//     water: 5,
//   },
//   open: true,
// };

// const user = "Behruz";

// alert(`Salom, ${User}`);

// let incr = 10,
//     decr = 10;

//     console.log(incr++);
//     console.log(decr--);

/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

// const num = 50;

// if (num < 49) {
//   console.log('Error');
// } else if (num > 100) {
//   console.log('ok!');
// } else {
//   console.log('Ok!');
// }
// num === 50 ? console.log('ok!') : console.log('Error');

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

// let num = 50;

// while (num <= 55) {
//   console.log(num);
//   num++;
// }

// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {
//     for (let j = 0; j < i; j++) {
//         result += "*";
//     }

//     result += "\n";
// }

// console.log(result);

// for (let i = 0; i < 2; i++) {
//   const a = prompt('Один из после
// дних просмотренных фильмов?', '');
//   const b = prompt('На сколько оцените его?', '');
//   if (a !== null && b !== null && a !== '' && b !== '') {
//     personalMovieDB.movies[a] = b;
//     console.log('Done');
//   } else {
//     i--;
//   }
// }

// if (personalMovieDB.count < 5) {
//   console.log('Kam serial ko’ripsiz');
// } else if (personalMovieDB.count >= 5 && personalMovieDB.count < 10) {
//   console.log('Siz classik tamoshabin ekansiz');
// } else if (personalMovieDB.count >= 10) {
//   console.log('Siz zvezda ekansiz');
// }

// console.log(personalMovieDB);

// function showHelloUser(name) {
//   const age = 18;
//   console.log(`Hello ${name}! He ${age} years old`);
// }

// showHelloUser('Shox');

// function calculate(a, b) {
//   return a + b;
// }

// const firstCalc1 = calculate(1, 8);
// const secondCalc1 = calculate(1, 9);
// console.log(secondCalc1 + 15);
// console.log(firstCalc1 + 20);

// String methods

// String methods

// let text = 'Hello World'
// const password = '        dawdwa         '

// // Lenght is property
// console.log('Uzunligi:', text.length)

// // Methods
// console.log('#1. Aniq positsiyadagi indexdagi xarf:', text.charAt(2))
// console.log('#2. Aniq positsiyadagi indexdagi xarf:', text[1])
// console.log('Xarflarni kotta registerda qilish:', text.toUpperCase())
// console.log('Xarflarni kichik registerda qilish:', text.toLowerCase())
// console.log('#1. Matni bosh va oxiridan kesish:', text.slice(0, -4))
// console.log('#2. Matni bosh va oxiridan kesish:', text.substring(0, 2))
// console.log("Ikki tarafdan bo'sh space olib tashlash", password.trim())
// console.log('Boshidan space olib tashlash', password.trimStart())
// console.log('Oxiridan space olib tashlash', password.trimEnd())

// console.log(text)

// // Number methods

// const number = 12.6
// const width = '240.42px'

// console.log('Eng yaqin sonni oladi:', Math.round(number))
// console.log('Sonnu butun qilib beradi:', Math.floor(number))
// console.log(
// 	"String ma'lumot turidan butun sonni qaytarib beradi:",
// 	parseInt(width)
// )
// console.log("String ma'lumot turidan son qilib beradi", parseFloat(width))

// console.log(number)

// const usdCurr = 12500;
// const eurCurr = 13000;

// function convert(amount, curr) {
//     console.log(amount * curr)
// }

// convert(100, usdCurr);
// convert(500, eurCurr);

// function sayHello(name) {
//   return `Привет, ${name}!`;
// }

// sayHello('Alex');

// function returnNeighboringNumbers(num) {
//     return [num - 1, num, num + 1];
// }

// returnNeighboringNumbers(5);

'use strict';

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('done');
    } else {
      console.log('error');
      i--;
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
  } else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
  } else {
    console.log('Произошла ошибка');
  }
}

detectPersonalLevel();

function showMyDB() {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}
