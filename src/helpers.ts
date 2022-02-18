import { FetchedData, GameObject } from "./types";
export const customizer = (objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue);
  }
};
export const mapData: (data: FetchedData[]) => GameObject = (data) => {
  const mappedData = data.reduce((acc, game) => {
    return {
      ...acc,
      [game.id]: [game.lead],
    };
  }, {});
  return mappedData;
};
