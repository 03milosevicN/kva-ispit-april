import axios from 'axios';

/**
 * Initialize axios HTTP client.
 */
const instance = axios.create({
  baseURL: 'https://movie.pequla.com/api',
  headers: {
    Accept: 'application/json',
  },
  validateStatus (status: number) { return status === 200; }
});

export class MovieService {

  public movieData: any | null = null;
  public movieId: number;

  constructor(movieId: number) {
    this.movieId = movieId;
  }

  /**
   * @return get movie based on given JSON parameters.
   */
  static async getMovies() {
    return instance.request({
      url: '/movie',
      method: 'GET',
      params: {
        "title": "title",
        "description": "description",
        "runTime": "runTime",
        "director": "director",
        "movieActors": "movieActors",
        "createdAt": "createdAt",
        "startDate": "startDate",
        "poster": "poster"
      }
    });
  }


  /**
   * Gets movie based on its ID.
   * @param movieId id of movie to be fetched.
   */
  static async getMovieById(movieId: number) {
    return instance.get(`/movie/${movieId}`);
  }

}
