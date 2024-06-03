import { useState } from "react";
import Button from "./Button";

import SiteLogo from "./Svg/SiteLogo";
import { SideBarP } from "./Interfaces";

export default function SideBar({ Change }: SideBarP) {
  const [active, SetActive] = useState("1");

  function handleClick(type: string) {
    SetActive(type);
  }

  return (
    <>
      <div className="SideBar">
        <div className="SiteLogo">
          <SiteLogo />
          ArrowFlicks
        </div>
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
    </>
  );
}
