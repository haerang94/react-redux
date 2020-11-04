import { combineReducers } from "redux";
import counter from "module/counter";
import todos from "module/todos";

const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
