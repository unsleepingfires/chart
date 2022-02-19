import { FetchedData, GameObject } from "./types";
export const customizer = (objValue: number[], srcValue: number[]) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue);
  }
};
export const mapData: (data: FetchedData[]) => GameObject = (data) => {
  const mappedData = data.reduce((acc, game) => {
    return {
      ...acc,
      [game.id]: [{ lead: game.lead }],
    };
  }, {});
  return mappedData;
};
