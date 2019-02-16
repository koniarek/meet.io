import { combineReducers } from "redux";
import auth from "./auth";
import users from "./users";
import events from "./events";

const appReducer = combineReducers({
  auth,
  users,
  events,
    store
});

const rootReducer = (state, action, store) => {
  return appReducer(state, action, store);
};

export default rootReducer;
