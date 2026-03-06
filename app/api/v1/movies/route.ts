import { NextResponse } from "next/server";
import { db } from "@/db";

//Get/api/v1/movies
export const GET = async (request: Request) => {
  try {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get("limit") || "50";
    const movies = await db
      .collection("movies")
      .find()
      // .sort({ metacritic: -1 })
      .limit(parseInt(limit))
      .sort({ released: -1 })
      .toArray()
      .catch((error) => {
        console.error("Error fetching movies from database:", error);
        throw new Error("Failed to fetch movies from database");
      });
    return NextResponse.json(movies);
  } catch (error) {
    console.error("Error fetching movies:", error);
    return NextResponse.json(
      { error: "Failed to fetch movies" },
      { status: 500 },
    );
  }
};
