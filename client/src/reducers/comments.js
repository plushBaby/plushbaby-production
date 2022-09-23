import { COMMENT } from '../constants/actionTypes';

export default ( state = { comment: [] } , action ) => {
    switch (action.type) {

        case COMMENT:
            return { ...state, comment: action.payload };

        
    }
}