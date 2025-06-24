import { MovieRepository } from "../domain/MovieRepository";
import { Movie } from "../domain/Movie";
import fs from "fs";
import path from "path";

export class JsonMovieRepository implements MovieRepository {
  
loadAllMovies(): Movie[] {
  const filePath = path.resolve(__dirname, '../data/movies.json');
  const rawData = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(rawData);
  return data.map((p: any) => new Movie(p.id, p.title));
}
 
 searchMovieByTitle(movies: Movie[], title: string): Movie[] {
  return movies.filter(movie => movie.title.toLowerCase() === title.toLowerCase());
}
 
}
