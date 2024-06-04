import { ButtonP } from "./Interfaces";

export default function Button({ children, onClick, isActive }: ButtonP) {
  return (
    <button className={isActive ? "Button active" : "Button "} onClick={onClick}>
      {children}
    </button>
  );
}
