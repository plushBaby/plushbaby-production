import { FETCH_ALL, FETCH_ONE, CREATE} from '../constants/actionTypes';

export default ( state = { listings: [] } , action ) => {
    switch (action.type) {

        case FETCH_ONE:
            return { ...state, listing: action.payload };

        case FETCH_ALL:
            return state, action.payload ;

        case CREATE:
            return { ...state, listings: action.payload };

        default:
            return state;
    }
}