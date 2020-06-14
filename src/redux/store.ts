import { createStore, combineReducers } from "redux";
import { artsReducer, likesReducer } from './reducers';

const rootReducer = combineReducers({
  arts: artsReducer,
  likes: likesReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
