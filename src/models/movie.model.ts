export interface MovieModel {
  movieId: number,
  title: string,
  description: string,
  movieGenres: {
    genre: {
      name: string,
    }
  },
  runTime: number,
  director: {
    name: string,
  },
  movieActors: {
    actor: {
      name: string,
    }
  },
  createdAt: string,
  startDate: string,
  poster: string,
}
