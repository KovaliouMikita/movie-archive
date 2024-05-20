import { useState } from "react";
import Button from "./Button";

interface SideBarProps {
  Change: (arg0: string) => void;
}
export default function SideBar({ Change }: SideBarProps) {
  const [active, SetActive] = useState("0");

  function handleClick(type: string) {
    SetActive(type);
  }

  return (
    <div className="SideBar">
      <div
        style={{
          width: "232px",
          height: "Hug (100px)px",
          gap: "16px",
          opacity: "0px",
        }}
      >
        <Button
          isActive={active === "1"}
          onClick={() => {
            handleClick("1");
            Change("Movie");
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
