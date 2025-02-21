import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";

const Cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export default Cn;
