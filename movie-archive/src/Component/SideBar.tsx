import { useState } from "react";
import Button from "./Button";
import { SideBarProps } from "./Interfaces";

export default function SideBar({ Change }: SideBarProps) {
  const [active, SetActive] = useState("1");

  function handleClick(type: string) {
    SetActive(type);
  }

  return (
    <div className="SideBar">
      <div className="SideBar_s">
        <Button
          isActive={active === "1"}
          onClick={() => {
            handleClick("1");
            Change("Movies");
          }}
        >
          Movies
        </Button>

        <Button
          isActive={active === "2"}
          onClick={() => {
            handleClick("2");
            Change("Rate");
          }}
        >
          Rated movies
        </Button>
      </div>
    </div>
  );
}
