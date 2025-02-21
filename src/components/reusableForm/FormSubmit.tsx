import { useContext } from "react";
import Cn from "../../utils/Cn";
import { FormElementContext } from "./Form";
import Button from "../ui/Button";

export const FormSubmit = () => {
  const { double } = useContext(FormElementContext);
  return (
    <div
      className={Cn("items-center grid grid-cols-1 gap-5", {
        "md:grid-cols-2": double,
      })}
    >
      <div className="w-full max-w-md col-start-1 md:col-start-2 md:flex justify-end py-2">
        <Button className="w-full md:w-fit" type="submit">
          Submit
        </Button>
      </div>
    </div>
  );
};
