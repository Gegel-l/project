"use strict"

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
  }
};

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
    const question_1 = prompt('Один из последних просмотренных фильмов?'),
          question_2 = prompt('На сколько оцените его?');
    
    if (question_1 != '' && question_2 != '' && question_1 != null && question_2 != null && question_1.length < 50) {
      personalMovieDB.movies[question_1] = question_2;
      console.log('Отлично');
    } else {
      console.log('Error!');
      i--;
    }
  };
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Вы классический зритель');
  } else if (personalMovieDB.count > 30) {
    console.log('Вы киноман') 
  } else {
    console.log('Произошла ошибка');
  };
};

detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
};

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
};

writeYourGenres();
