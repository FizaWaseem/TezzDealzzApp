import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import compareSlice from "./compareSlice";

const rootReducer = combineReducers({
  auth: authSlice,
  compare: compareSlice,
});

export default rootReducer;
