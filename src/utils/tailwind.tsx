import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Merger function for  Tailwind classes with clsx
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 *  Usage:
 *  import { cn } from "../utils/tailwind";
 *  ...
 *  <div className={cn("text-center", "text-4xl", "font-bold")}>
 */
