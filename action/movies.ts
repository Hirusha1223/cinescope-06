"use server";

import type { Allmoviedata } from "@/action/types"; // adjust the import path as needed

export async function getMovies() {
  try {
    const response = await fetch(`${process.env.API_BASE_URL}/v1/movies`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const { movies }: Allmoviedata = await response.json();

    return movies;
  } catch (error) {
    console.error("Error fetching movies", error);
    return [];
  }
}
