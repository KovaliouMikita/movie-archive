import { ButtonProps } from "./Interfaces";

export default function Button({ children, onClick, isActive }: ButtonProps) {
  return (
    <button
      className={isActive ? "Button active" : "Button "}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
