import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';


export const signin = ( signUpsignInFormData , navigate ) => async (dispatch) => {
    try {
      // log in the user
      // navigate back home using navigate navigate.push('/');
      const { data } = await api.signIn(signUpsignInFormData);
      dispatch({ type: AUTH , data });
      navigate('/');
      
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  export const signup = ( signUpsignInFormData, navigate ) => async (dispatch) => {
    try {
      // collect form data and create a new user account
      // navigate back home using navigate navigate.push('/');
      const { data } = await api.signUp(signUpsignInFormData);
      dispatch({ type: AUTH, data});
      navigate('/');

    } catch (error) {
      alert(error.response.data.message);
    }
  };
  