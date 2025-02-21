import { MouseEvent, createContext, useContext, useRef } from "react";

import { createPortal } from "react-dom";

import Cn from "./Cn";
import { TCloseButton, THeder, TModal, TModalContext } from "./types";

const modalContext = createContext<TModalContext | null>(null);

const Modal = ({ isOpen, onCLose, children }: TModal) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleCloseModal = (e: MouseEvent) => {
    if (!containerRef.current?.contains(e.target as Node)) {
      onCLose();
    }
  };

  return createPortal(
    <modalContext.Provider value={{ onCLose }}>
      <div
        className={Cn(
          "flex justify-center items-center fixed inset-0 bg-gray-500/70 invisible z-[999]",
          {
            visible: isOpen,
          }
        )}
        onClick={handleCloseModal}
      >
        <div
          ref={containerRef}
          className="bg-white w-full max-w-sm p-6 rounded-md"
        >
          <h1>{children}</h1>
        </div>
      </div>
    </modalContext.Provider>,
    document.getElementById("portal") as Element
  );
};

const CloseButton = ({ children }: TCloseButton) => {
  const { onCLose } = useContext(modalContext) as TModalContext;
  return (
    <button onClick={onCLose}>
      {children ? (
        children
      ) : (
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="w-6 h-6 bg-red-500 rounded-sm text-white p-0.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      )}
    </button>
  );
};

const Heder = ({ children }: THeder) => {
  return <div>{children}</div>;
};

Modal.CloseButton = CloseButton;
Modal.Heder = Heder;

export default Modal;
