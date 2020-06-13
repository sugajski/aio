import { ADD_ARTS } from "./types";

export const addArts = (arts: IArt[]) => ({
  type: ADD_ARTS,
  data: arts,
});
