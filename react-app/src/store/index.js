import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import session from "./session";
import { categoryReducer } from "./categoryReducer";
import { taskReducer } from "./taskReducer"
import { checkInReducer } from "./checkInReducer";

//! gotta put it here to have the next state populated
const rootReducer = combineReducers({
  session,
  categoryReducer,
  taskReducer,
  checkInReducer
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
