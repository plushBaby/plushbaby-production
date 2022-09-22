import { combineReducers } from "redux";
import listings from "./Listings";
import AUTHReducer from "./AUTH";

export const reducers = combineReducers({ listings, AUTHReducer });
