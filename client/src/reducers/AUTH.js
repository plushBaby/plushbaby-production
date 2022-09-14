import { AUTH, LOGOUT  } from '../constants/actionTypes';

const AUTHReducer = ( state = { AUTHData: null }, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('accountProfile', JSON.stringify({ ...action?.data }));
            return{ ...state, AUTHData: action?.data };
            
        case LOGOUT:
            localStorage.clear();
            return{ ...state, AUTHData: null };
    
        default:
            return state;
    }
};

export default AUTHReducer;