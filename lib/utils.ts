import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getImageUrl(person: { imageId: string }, size = "s") {
  return "https://i.imgur.com/" + person.imageId + size + ".jpg";
}
