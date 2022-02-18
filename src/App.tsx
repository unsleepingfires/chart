import { useEffect, useState } from "react";
import mergeWith from "lodash.mergewith";
import Chart from "./Chart";
import { FetchedData } from "./types";
import { mapData } from "./helpers";
const App = () => {
  const [games, setGames] = useState({});
  useEffect(() => {
    const fetchAndTransformData = async () => {
      const response = await fetch("http://localhost:3001/game");
      const data: FetchedData[] = await response.json();
      const mappedData = mapData(data);
      setGames((prevData) => {});
    };
    const intId = setInterval(() => {
      fetchAndTransformData();
    }, 1000);
    return () => clearInterval(intId);
  }, []);
  return (
    <div className="App">
      <Chart />
    </div>
  );
};

export default App;
