"use strict"

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

let questions = 0;

while (questions < 2) {
  const question_1 = prompt('Один из последних просмотренных фильмов?'),
        question_2 = prompt('На сколько оцените его?');

  if (question_1 != null && question_2 != null && question_1 != '' && question_2 != '' && question_1.length < 50) {
    personalMovieDB.movies[question_1] = question_2;
    console.log('Done!');
  } else {
    console.log('Error!');
    i--;
  }
  questions++;
}

if (personalMovieDB.count < 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
  console.log('Вы киноман!');
} else {
  console.log('Произошла ошибка!');
}

console.log(personalMovieDB);