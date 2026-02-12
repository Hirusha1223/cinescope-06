import { Stats } from "fs";
import { NextResponse } from "next/server";
//todo call with database
import { Movies } from "@/lib/data";
import { title } from "process";

// http://localhost:3000/api/v1/movies(get request)
export async function GET() {
  try{
    return NextResponse.json({
    message: "Hi how are you",
    Stats: "Success",
    field: "Okay",
    movies: Movies,
  });
  } catch (error) {
    console.error("Error fetching movies", error);
    return NextResponse.json(
      {
        message: "Server Error",
        success: false,
        movies: [],
      },
      { status: 500 },
    );
  }
  
}

export async function POST(request: Request) {
  try {
    const Hero = request.json();
    const { title, director, year, genre, runtime, ratings } = await Hero;

    if (!title || !director || !year) {
      return NextResponse.json(
        {
          message:
            "need title, director, year, genre, runtime, and ratings - all are required",
          success: false,
        },
        { status: 400 },
      );
    }

    const newMovies = {
      id: Math.max(...Movies.map((m) => m.id), 0) + 1,
      title: title,
      genre: genre,
      releaseyear: year,
      runtime: runtime,
      ratings: ratings,
      director: director,
    };

    Movies.push(newMovies);

    return NextResponse.json(
      {
        message: "Success full send",
        success: true,
        data: newMovies,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error adding movie", error);
    return NextResponse.json(
      {
        message: "Server Error",
        success: false,
        movies: [],
      },
      { status: 500 },
    );
  }
}
