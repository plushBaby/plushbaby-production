import { FETCH_ALL, CREATE, FETCH_ONE } from '../constants/actionTypes';
import * as api from '../api/api.js';

export const fetchOneListing = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchOneListing(id);
    dispatch({ type: FETCH_ONE, payload: data });

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
      console.log("NEW LISTING WAS CREATED")


    } catch (error) {
      console.log(error);
      console.log('new listing was not created');
    }
};
