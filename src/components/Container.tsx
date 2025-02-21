import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="h-full max-w-[1200px] mx-auto">{children}</div>;
};

export default Container;
