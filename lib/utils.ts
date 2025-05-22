import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const slugify = (text: string) => {
  return text
    .toString()
    .normalize("NFD") // Normalize the string to decomposed form
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics (accents)
    .toLowerCase() // Convert to lowercase
    .trim() // Trim whitespace from both ends
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[^\w-]+/g, "") // Remove all non-word chars except hyphens
    .replace(/--+/g, "-"); // Replace multiple hyphens with a single hyphen
};
