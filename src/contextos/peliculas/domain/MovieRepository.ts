import { Movie } from "./Movie"

export interface MovieRepository {
  loadAllMovies(): Movie[];
  searchMovieByTitle(title:String): Movie[];
}
