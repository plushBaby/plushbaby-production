import {
  FETCH_ALL,
  FETCH_ONE,
  CREATE,
  UPDATE,
  DELETE,
  COMMENT,
  FETCH_MATCH,
} from "../constants/actionTypes";

export default (state = { listings: [] }, action) => {
  switch (action.type) {
    case FETCH_ONE:
      return { ...state, listing: action.payload };

    case FETCH_ALL:
      return state, action.payload;

    case CREATE:
      return { ...state, listings: action.payload };

    case UPDATE:
      return {
        ...state,
        listings: state.listings.map((listing) =>
          listing._id === action.payload._id ? action.payload : listing
        ),
      };

    case FETCH_MATCH:
      return {
        ...state,
        listings: state.listings.map((listing) =>
          listing.creator === action.payload._id ? action.payload : listing
        ),
      };

    case DELETE:
      return {
        ...state,
        listings: state.listings.filter(
          (listing) => listing._id !== action.payload
        ),
      };

    case COMMENT:
      return {
        ...state,
        listings: state.listings.map((listing) => {
          if (listing._id === action.payload) {
            return action.payload;
          }
          return listing;
        }),
      };

    default:
      return state;
  }
};


