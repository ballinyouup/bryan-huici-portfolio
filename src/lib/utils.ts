import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function wait(ms: number) {
  if (process.env.LOADING_STATES === "true") {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}