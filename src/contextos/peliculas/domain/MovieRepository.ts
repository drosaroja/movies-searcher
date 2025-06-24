import { Movie } from "./Movie"

export interface MovieRepository {
  loadAllMovies(): Movie[];  
  searchMovieByTitle(movies:Movie[], title:String): Movie[];
}
