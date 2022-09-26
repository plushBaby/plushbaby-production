import {
  FETCH_ALL,
  CREATE,
  FETCH_ONE,
  UPDATE,
  END_LOADING,
  DELETE,
  COMMENT,
} from "../constants/actionTypes";
import * as api from "../api/api.js";

export const fetchOneListing = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchOneListing(id);
    dispatch({ type: FETCH_ONE, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchAllListings = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAllListings();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createAListing = (listing) => async (dispatch) => {
  try {
    const { data } = await api.createAListing(listing);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateListing = (id, listing) => async (dispatch) => {
  try {
    const { data } = await api.updateListing(id, listing);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteListing = (id) => async (dispatch) => {
  try {
    await api.deleteListing(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const commentListing = (value, id) => async (dispatch) => {
  try {
    const { data } = await api.commentListing(value, id);
    dispatch({ type: COMMENT, payload: data });
  } catch (error) {
    console.log(error);
  }
};
