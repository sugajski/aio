import { createStore, combineReducers } from "redux";
import { artsReducer } from './reducers';

const rootReducer = combineReducers({
  arts: artsReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
