import { combineReducers } from "redux";
import listingsReducer from './Listings';
import AUTHReducer from "./AUTH";

export const reducers = combineReducers({ listingsReducer, AUTHReducer  });