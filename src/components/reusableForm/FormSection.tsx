import { useContext } from "react";
import Cn from "../../utils/Cn";
import { FormElementContext } from "./Form";

export const FormSection = ({ children }) => {
  const { double } = useContext(FormElementContext);
  return (
    <div
      className={Cn("items-center grid grid-cols-1 gap-5", {
        "md:grid-cols-2": double,
      })}
    >
      {children}
    </div>
  );
};
