import { combineReducers } from "redux";
import { circleReducer } from "./circleReducer";

export const rootReducer = combineReducers({
    circleReducer,
})