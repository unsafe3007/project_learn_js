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
//----------------------------------------------------------------------------
// let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?')
// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// let question1_1 = prompt('Один из последних просмотренных фильмов?')
// let question1_2 = prompt('На сколько оцените его?')
// let question2_1 = prompt('Один из последних просмотренных фильмов?')
// let question2_2 = prompt('На сколько оцените его?')
// personalMovieDB.movies[question1_1] = question1_2
// personalMovieDB.movies[question2_1] = question2_2
// console.log(personalMovieDB);
//----------------------------------------------------------------------------

// const num = 50
// switch (num) {
//     case 49:
//         console.log('wrong');
//         break;
//     case 100:
//         console.log('wrong');
//         break
//     default:
//         console.log('hmmmmm');
//         break
// }

// while (num <= 55) {
//     console.log(num);
//     num++;
// };

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i <= 8; i++) {
//     console.log(num);
//     num++
// }

// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3;j++) {
//         console.log(j);
//     }
// }

// let result = '';
// const len = 7;

// for (let i = 1; i<len; i++) {
//     for (j = 0; j < i; j++) {
//         result+='*'
//     }
//     result+='\n'
// }

// console.log(result);

// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3;j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k ===2) continue first;
//             console.log(`Third level: ${k}`);
//         }
//     }
// }

// for (let i = 5; i <= 10; i++) {
//     console.log(i);
// }

// for (let i = 20; i >= 10; i--) {
//     console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// let n = 16;
// let i = 2;
// while (i <= n) {
//     i++
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?')
// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for (let i = 0; i < 2; i++) {
//     let question1 = prompt('Один из последних просмотренных фильмов?')
//     let question2 = prompt('На сколько оцените его?')
//     if (question1 != null && question2 != null && question1 != '' && question2 != '' && question1.length <= 50) {
//         personalMovieDB.movies[question1_1] = question1_2
//     } else {
//         i--;
//     }
// }

// if (personalMovieDB.count < 10) {
//     console.log("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("Вы классический зритель");
// } else if (personalMovieDB.count >= 30) {
//     console.log("Вы киноман");
// } else {
//     console.log("Произошла ошибка");
// }

// console.log(personalMovieDB);

// function showFirstMessage(text) {
//     console.log(text);
// }

// showFirstMessage('Hello World');

// function calc(a, b) {
//     return a + b;
// }

// let logger = function() {
//     console.log('Hello');
// };

// let calc = (a, b) => {
//     return a + b
// };

// function convert(amount) {
//     console.log(28 * amount);
// }

// convert(500)
let numberOfFilms;




function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
  }
}


start();


const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};






function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    let question1 = prompt("Один из последних просмотренных фильмов?");
    let question2 = prompt("На сколько оцените его?");
    if (question1 != null && question2 != null && question1 != "" && question2 != "" && question1.length <= 50) {
      personalMovieDB.movies[question1] = question2;
    } else {
      i--;
    }
  }
}


rememberMyFilms();

function detextPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.length < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}

detextPersonalLevel();

function showMyDb() {
  if (personalMovieDB.privat != true) {
    console.log(personalMovieDB);
  }
}

showMyDb();


function writeYourGenres() {
    for (let i = 1; i <=3; i++) { 
      personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres()