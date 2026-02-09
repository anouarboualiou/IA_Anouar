 
export const MOVIES = [
  {
    id: "tt0133093",
    title: "The Matrix",
    year: 1999,
    director: "Hermanas Wachowski",
    poster: "/posters/the_matrix.jpg",
    synopsis:
      "Un programador de computadoras descubre que su vida es una elaborada farsa creada por máquinas inteligentes."
  },
  {
    id: "tt0816692",
    title: "Interstellar",
    year: 2014,
    director: "Christopher Nolan",
    poster: "/posters/interstellar.jpg",
    synopsis:
      "Un equipo de exploradores viaja a través de un agujero de gusano en un intento de asegurar la supervivencia de la humanidad."
  },
  {
    id: "tt0110912",
    title: "Pulp Fiction",
    year: 1994,
    director: "Quentin Tarantino",
    poster: "/posters/pulp_fiction.jpg",
    synopsis:
      "Las vidas de dos sicarios de la mafia, un boxeador, la esposa de un gángster y un par de ladrones de poca monta se entrelazan."
  },
  {
    id: "tt1375666",
    title: "Inception",
    year: 2010,
    director: "Christopher Nolan",
    poster: "/posters/inception.jpg",
    synopsis:
      "Un ladrón que roba secretos corporativos utilizando tecnología de compartir sueños tiene la tarea inversa de implantar una idea en la mente de un CEO."
  },
  {
    id: "tt0109830",
    title: "Forrest Gump",
    year: 1994,
    director: "Robert Zemeckis",
    poster: "/posters/forrest_gump.jpg",
    synopsis:
      "Las presidencias de Kennedy y Johnson, la Guerra de Vietnam, Watergate y otros eventos históricos se desarrollan a través de la perspectiva de un hombre de Alabama con un coeficiente intelectual bajo."
  },
  {
    id: "tt0266697",
    title: "Kill Bill: Vol. 1",
    year: 2003,
    director: "Quentin Tarantino",
    poster: "/posters/kill_bill_vol1.jpg",
    synopsis:
      "Después de despertar de un coma de cuatro años, una ex asesina busca venganza de su ex equipo de asesinato."
  },
  {
    id: "tt0434409",
    title: "V for Vendetta",
    year: 2005,
    director: "James McTeigue",
    poster: "/posters/v_for_vendetta.jpg",
    synopsis:
      "En una Gran Bretaña distópica, una joven es salvada por un misterioso justiciero conocido como 'V'."
  }
];

export const ACTORS = [
  {
    id: "nm0000206",
    name: "Keanu Reeves",
    birthYear: 1964,
    photo: "/photos/keanu_reeves.jpg",
    bio: "Actor canadiense conocido por Matrix y John Wick."
  },
  {
    id: "nm0005230",
    name: "Carrie-Anne Moss",
    birthYear: 1967,
    photo: "/photos/carrie_anne_moss.jpg",
    bio: "Actriz canadiense, famosa por Trinity en Matrix."
  },
  {
    id: "nm0000401",
    name: "Laurence Fishburne",
    birthYear: 1961,
    photo: "/photos/laurence_fishburne.jpg",
    bio: "Actor estadounidense, famoso por Matrix."
  },
  {
    id: "nm0000190",
    name: "Matthew McConaughey",
    birthYear: 1969,
    photo: "/photos/matthew_mcconaughey.jpg",
    bio: "Actor ganador del Oscar."
  },
  {
    id: "nm0000155",
    name: "Anne Hathaway",
    birthYear: 1982,
    photo: "/photos/anne_hathaway.jpg",
    bio: "Actriz estadounidense."
  },
  {
    id: "nm0000201",
    name: "Samuel L. Jackson",
    birthYear: 1948,
    photo: "/photos/samuel_l_jackson.jpg",
    bio: "Uno de los actores más prolíficos de Hollywood."
  },
  {
    id: "nm0000237",
    name: "John Travolta",
    birthYear: 1954,
    photo: "/photos/john_travolta.jpg",
    bio: "Actor icónico de los 90."
  },
  {
    id: "nm0000235",
    name: "Uma Thurman",
    birthYear: 1970,
    photo: "/photos/uma_thurman.jpg",
    bio: "Musa de Tarantino."
  },
  {
    id: "nm0000138",
    name: "Leonardo DiCaprio",
    birthYear: 1974,
    photo: "/photos/leonardo_dicaprio.jpg",
    bio: "Actor ganador del Oscar."
  },
  {
    id: "nm0000158",
    name: "Tom Hanks",
    birthYear: 1956,
    photo: "/photos/tom_hanks.jpg",
    bio: "Actor dos veces ganador del Oscar."
  },
  {
    id: "nm0000194",
    name: "Natalie Portman",
    birthYear: 1981,
    photo: "/photos/natalie_portman.jpg",
    bio: "Actriz ganadora del Oscar."
  }
];

export const ROLES = [
  { movieId: "tt0133093", actorId: "nm0000206", character: "Neo" },
  { movieId: "tt0133093", actorId: "nm0005230", character: "Trinity" },
  { movieId: "tt0133093", actorId: "nm0000401", character: "Morpheus" },

  { movieId: "tt0816692", actorId: "nm0000190", character: "Cooper" },
  { movieId: "tt0816692", actorId: "nm0000155", character: "Brand" },

  { movieId: "tt0110912", actorId: "nm0000237", character: "Vincent Vega" },
  { movieId: "tt0110912", actorId: "nm0000235", character: "Mia Wallace" },
  { movieId: "tt0110912", actorId: "nm0000201", character: "Jules Winnfield" },

  { movieId: "tt1375666", actorId: "nm0000138", character: "Dom Cobb" },
  { movieId: "tt1375666", actorId: "nm0000155", character: "Mal" },

  { movieId: "tt0109830", actorId: "nm0000158", character: "Forrest Gump" },

  { movieId: "tt0266697", actorId: "nm0000235", character: "Beatrix Kiddo" },
  { movieId: "tt0266697", actorId: "nm0000201", character: "Rufus" },

  { movieId: "tt0434409", actorId: "nm0000194", character: "Evey Hammond" },
  { movieId: "tt0434409", actorId: "nm0005230", character: "Valerie Page" }
];


export const getAllMovies = () => MOVIES;
export const getMovieById = (id) => MOVIES.find(m => m.id === id);

export const getAllActors = () => ACTORS;
export const getActorById = (id) => ACTORS.find(a => a.id === id);


export const getCastByMovieId = (movieId) => {
  return ROLES
    .filter(role => role.movieId === movieId)
    .map(role => {
      const actor = ACTORS.find(a => a.id === role.actorId);
      return { ...actor, character: role.character };
    });
};

export const getFilmographyByActorId = (actorId) => {
  return ROLES
    .filter(role => role.actorId === actorId)
    .map(role => MOVIES.find(m => m.id === role.movieId));
};
