import { ReactNode } from "react";

export type TModal = {
  isOpen: boolean;
  onCLose: () => void;
  children: ReactNode;
};

export type TModalContext = {
  onCLose: () => void;
};

export type TCloseButton = {
  children?: ReactNode;
};

export type THeder = TCloseButton;
