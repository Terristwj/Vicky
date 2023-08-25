import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Merger function for  Tailwind classes with clsx
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
