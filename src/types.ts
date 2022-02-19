export interface Inner {
  lead: number;
}
export interface FetchedData {
  id: number;
  lead: number;
}
export interface GameObject {
  [key: number]: number[];
}

export interface Outer {
  [key: number]: Inner[];
}
