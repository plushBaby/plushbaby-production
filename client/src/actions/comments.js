import { COMMENT } from '../constants/actionTypes';
import * as api from '../api/api.js';

export const makeAComment = (id, comment) => async (dispatch) => {
    try {
      const { data } = await api.makeAComment(id, comment);
      dispatch({ type: COMMENT, payload: data });

    } catch (error) {
      console.log(error);
      console.log('Comment was not made');
    }
};