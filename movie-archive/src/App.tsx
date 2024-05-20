import "./App.css";
import Rate from "./Component/Rate";
import Movie from "./Component/Movie";
import SideBar from "./Component/SideBar";

import { useState } from "react";

function App() {
  const [section, setSection] = useState("Movie");

  return (
    <div className="App">
      <SideBar Change={(current: string) => setSection(current)}></SideBar>
      {section === "Movie" && (
        <>
          <Movie></Movie>
        </>
      )}
      {section === "Rate" && <Rate></Rate>}
    </div>
  );
}

export default App;
