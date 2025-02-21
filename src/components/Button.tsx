import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";
import Cn from "./Cn";

type Tref = HTMLButtonElement;

type TVariant = "solid" | "ghost" | "outline";

type TButtonOptions = {
  variant: TVariant;
};

type TButton = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  TButtonOptions;

const Button = forwardRef<Tref, TButton>(
  ({ className, variant, children, ...rest }, ref) => {
    const getVariant = (variant: TVariant) => {
      switch (variant) {
        case "outline":
          return "btn-outline";
        case "ghost":
          return "btn-ghost";
        default:
          return "btn";
      }
    };
    return (
      <div>
        <button
          {...rest}
          ref={ref}
          className={Cn(getVariant(variant), className)}
        >
          {children}
        </button>
      </div>
    );
  }
);

export default Button;
