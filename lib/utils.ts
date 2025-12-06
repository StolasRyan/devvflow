import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getDeviconClassName =(techname: string)=>{
  const normalizeTechString = techname.replace(/[ .]/g, '').toLowerCase();

  const techMap: {[key: string]: string} = {
    javascript: "devicon-javascript-plain",
    react: "devicon-react-plain",
    typescript: "devicon-typescript-plain",
    redux: "devicon-redux-plain",
    nextjs: "devicon-nextjs-plain",
  }

  return techMap[normalizeTechString] ? `${techMap[normalizeTechString]} colored` : "devicon-devicon-plain"
}