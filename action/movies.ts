"use server";

import { db } from "@/db";

export const getMovies = async ({ limit = 8 }: { limit?: number }) => {
  try {
    const parameters = new URLSearchParams();

    if (limit) {
      parameters.append("limit", limit.toString());
    }

    const moviesResponse = await fetch(
      `${process.env.API_BASE_URL}/v1/movies?${parameters.toString()}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
        cache: "no-store",
      },
    );

    if (!moviesResponse.ok) {
      throw new Error(
        `Failed to fetch movies, status code: ${moviesResponse.status}`,
      );
    }

    if (moviesResponse.status == 200) {
      return await moviesResponse.json();
    } else {
      console.error("Failed to fetch movies, status code:");
      return [];
    }
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};
