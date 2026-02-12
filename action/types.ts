export interface MovieData {
  id: number;
  title: string;
  genre: string;
  releaseyear: number;
  runtime: number;
  ratings: number;
}

export interface Allmoviedata {
  movies: MovieData[];
  success: boolean;
  message: string;
}
