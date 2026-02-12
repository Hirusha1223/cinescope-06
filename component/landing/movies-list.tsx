// Server componenet that display a list of movies
// Asynchronous function movies data {simulated here with a placeholder}

import { getMovies } from "@/action/movies";
import MovieCard from "@/component/landing/movie-card";

export default async function MoviesList() {
  const Movies = await getMovies();

  if (!Movies || Movies.length == 0) {
    return (
      <div className="text-red-500 text-center py-12">No movies available</div>
    );
  }
  return (
    <div className="text-center py-12">
      <div className="grid grid-cols-4 gap-6">
        {Movies.map((Movies) => (
          <MovieCard key={Movies.id} />
        ))}
      </div>
    </div>
  );
}
