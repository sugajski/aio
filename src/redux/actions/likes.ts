import { TOGGLE_LIKE, SAVE_LIKES } from "./types";

export const toggleLike = (index: number) => ({
  type: TOGGLE_LIKE,
  data: index,
});

export const saveLikes = (likes: ILike[]) => ({
  type: SAVE_LIKES,
  data: likes,
});
