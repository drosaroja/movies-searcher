import { Movie } from "../domain/Movie";
import { MovieRepository } from "../domain/MovieRepository";

export class MovieService {
  constructor(private movieRepository: MovieRepository) {}

  loadAllMovies(): Movie[] {
    return this.movieRepository.loadAllMovies();
  }
  

 
  searchMoviesByTilulo(movies:Movie[], title:string ):Movie[] {   
     return this.movieRepository.searchMovieByTitle(movies, title);
  }

}