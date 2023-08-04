import { combineReducers } from "redux";
import news from "./news.js";
import errors from "./errors.js";

const reducer = combineReducers({
  news,
  errors,
});

export default reducer;
