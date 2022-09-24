import { AUTH } from "../constants/actionTypes";
import * as api from "../api/api.js";

export const signin = (signUpsignInFormData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(signUpsignInFormData);
    dispatch({ type: AUTH, data });
    navigate("/");
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const signup = (signUpsignInFormData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(signUpsignInFormData);
    dispatch({ type: AUTH, data });
    navigate("/");
  } catch (error) {
    alert(error.response.data.message);
  }
};
