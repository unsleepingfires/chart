import { useEffect, useState } from "react";
import mergeWith from "lodash.mergewith";
import Chart from "./Chart";
import { FetchedData, Inner, Outer } from "./types";
import { customizer, mapData } from "./helpers";
import { produce } from "immer";
const App = () => {
  const [games, setGames] = useState<Outer>({});
  useEffect(() => {
    const fetchAndTransformData = async () => {
      const response = await fetch("http://localhost:3001/game");
      const data: FetchedData[] = await response.json();
      const mappedData = mapData(data);
      setGames((prevGames) => {
        const nextGames = produce(prevGames, (draft) => {
          const newGames = mergeWith(draft, mappedData, customizer);
          return newGames;
        });
        return nextGames;
      });
    };
    const intId = setInterval(() => {
      fetchAndTransformData();
    }, 1000);
    return () => clearInterval(intId);
  }, []);
  const gameList = Object.entries(games).map((game) => (
    <Chart game={game[1]} key={game[0]} />
  ));

  return <div className="App">{gameList}</div>;
};

export default App;
