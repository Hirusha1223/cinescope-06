import { Button } from "@/component/ui/button";
import MoviesList from "./movies-list";
export default function FeaturedMovies() {
  return (
    <section
      id="featured-movies"
      className="container px-4 py-12 md:px-6 w-full"
    >
      {/* // {heading area} */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          {/* heading and description */}
          <h2 className="text-3xl font-bold tracking-tight">Featured Movies</h2>
          <p className="text-muted-foreground">
            Explore the latest and greatest movies that are making movies in the
            cinema world
          </p>
        </div>

        <Button variant="outline">View all</Button>
      </div>

      {/* {movie search filter} */}

      <MoviesList />
    </section>
  );
}
