import { AsyncStorage } from 'react-native';

import { TOGGLE_LIKE, SAVE_LIKES } from "../actions/types";

const LIKES_KEY = "postDetails.likes";

interface IToggleLikeActionType { 
  type: typeof TOGGLE_LIKE;
  data: number;
}

interface ISaveLikesActionType { 
  type: typeof SAVE_LIKES;
  data: ILike[];
}

type LikesActionTypes = IToggleLikeActionType | ISaveLikesActionType;

const initialState = {
  arts: [],
  likes: [],
};

const artsReducer = (state = initialState, action: LikesActionTypes) => {
  switch (action.type) {
    case TOGGLE_LIKE:
      const modifiedObject = state.likes.find(
        (item: ILike) => item.index === action.data
      );
      const previousLikes = state.likes.filter(
        (item: ILike) => item.index !== action.data
      );
      const updatedLikes = [
        ...previousLikes,
        {
          // @ts-ignore
          like: !!modifiedObject ? !modifiedObject.like : true,
          index: action.data,
        },
      ];
      AsyncStorage.setItem(LIKES_KEY, JSON.stringify(updatedLikes));
      return {
        ...state,
        likes: updatedLikes,
      };
    case SAVE_LIKES:
      return {
        ...state,
        likes: action.data,
      };
    default:
      return state;
  }
};

export default artsReducer;
