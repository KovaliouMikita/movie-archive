import { useState } from "react";
import Button from "./Button";

interface SideBarProps {
  Change: (arg0: string) => void;
}
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
          Movie
        </Button>

        <br></br>
        <Button
          isActive={active === "2"}
          onClick={() => {
            handleClick("2");
            Change("Rate");
          }}
        >
          Rated Movie
        </Button>
      </div>
    </div>
  );
}
