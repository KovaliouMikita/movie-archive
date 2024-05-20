import "./App.css";
import Rate from "./Component/Rate";
import Movie from "./Component/Movie";
import SideBar from "./Component/SideBar";
import { Url } from "./assets/key";

import { useEffect, useState } from "react";

function App() {
  const [section, setSection] = useState("Movie");
  const [dataM, setDataM] = useState([]);

  async function dataFetch(): Promise<any> {
    let response: any = await fetch(Url);
    let data: any = await response.json();
    setDataM(data.results);
  }
  useEffect(() => {
    dataFetch();
  }, []);

  console.log(dataM);
  return (
    <div className="App">
      <SideBar Change={(current: string) => setSection(current)}></SideBar>
      {section === "Movie" && (
        <>
          <Movie data={dataM}></Movie>
        </>
      )}
      {section === "Rate" && <Rate></Rate>}
    </div>
  );
}

export default App;
