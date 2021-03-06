export const actorsData = [
  "Уилл Смит",
  "Джейден Смит",
  "Роберт Дауни мл.",
  "Крис Эванс",
  "Марк Руффало",
  "Крис Хемсворт",
  "Милош Бикович",
  "Александра Бортич",
  "Иван Охлобыстин",
  "Патрик Уилсон",
  "Лин Шэй",
  "Роуз Бирн",
  "Риналь Мухаметов",
  "Ян Цапник",
];

export const genresData = [
  "драма",
  "биография",
  "фантастика",
  "боевик",
  "приключения",
  "комедия",
  "ужасы",
  "триллер",
  "мелодрама",
]

export let filmesData = [
  {
    id: 0,
    name: "В погоне за счастьем",
    image: "https://upload.wikimedia.org/wikipedia/ru/3/3e/Pursuit_happyness_poster.jpg",
    director: "Габриэле Муччино",
    genres: [genresData[0], genresData[1]],
    actors: [actorsData[0], actorsData[1]],
    publishYear: 2006,
  },
  {
    id: 1,
    name: "Мстители: Финал",
    image: "https://upload.wikimedia.org/wikipedia/ru/a/a4/The_Avengers_Endgame_Poster.jpg",
    director: "Джо Руссо",
    genres: [genresData[2], genresData[3], genresData[0], genresData[4]],
    actors: [actorsData[2], actorsData[3], actorsData[4], actorsData[5]],
    publishYear: 2019,
  },
  {
    id: 2,
    name: "Холоп",
    image: "https://upload.wikimedia.org/wikipedia/ru/d/d7/%D0%A5%D0%BE%D0%BB%D0%BE%D0%BF_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%29.jpg",
    director: "Клим Шипенко",
    genres: [genresData[5]],
    actors: [actorsData[6], actorsData[7], actorsData[8]],
    publishYear: 2019,
  },
  {
    id: 3,
    name: "Астрал",
    image: "https://upload.wikimedia.org/wikipedia/ru/thumb/6/61/Insidious_2011.jpg/200px-Insidious_2011.jpg",
    director: "Джеймс Ван",
    genres: [genresData[6], genresData[7]],
    actors: [actorsData[9], actorsData[10], actorsData[11]],
    publishYear: 2010,
  },
  {
    id: 4,
    name: "Временные трудности",
    image: "https://upload.wikimedia.org/wikipedia/ru/4/43/%D0%92%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5_%D1%82%D1%80%D1%83%D0%B4%D0%BD%D0%BE%D1%81%D1%82%D0%B8.jpg",
    director: "Михаил Расходников",
    genres: [genresData[0], genresData[8]],
    actors: [actorsData[12], actorsData[8], actorsData[13]],
    publishYear: 2018,
  },
];

export function addNewFilmToBd(film){
  filmesData = [
    ...filmesData,
    film
  ]
}