import { ADD_ARTS } from "../actions/types";

interface IAddArtsActionType { 
  type: typeof ADD_ARTS;
  data: IArt[];
}

type ArtsActionTypes = IAddArtsActionType;

const initialState = {
  arts: [],
  likes: [],
};

const artsReducer = (state = initialState, action: ArtsActionTypes) => {
  switch (action.type) {
    case ADD_ARTS:
      return {
        ...state,
        arts: action.data,
      }; 
    default:
      return state;
  }
};

export default artsReducer;
