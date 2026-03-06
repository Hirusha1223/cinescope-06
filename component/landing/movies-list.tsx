// Server componenet that display a list of movies
// Asynchronous function movies data {simulated here with a placeholder}

import { getMovies } from "@/action/movies";
import MovieCard from "@/component/landing/movie-card";

export default async function MoviesList() {
  const movies = await getMovies({ limit: 12 });
  // console.log(movies);
  if (!movies || movies.length === 0) {
    return <div className="text-center py-12">No movies available</div>;
  }
  return (
    <div className="space-y-6">
      {/* movies search filter */}
      <div className="w-full `h-30.5` bg-purple-400 rounded-lg ">hello</div>
      <div className="text-muted-foreground text-sm">
        showing {movies.length} of 10
      </div>
      <div className="text-center py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4  gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}
