import {USER_DATA_REQUEST} from '../actions/user.actions.js'
import {USER_DATA_SUCCESS} from '../actions/user.actions.js'
import {USER_DATA_FAILURE} from '../actions/user.actions.js'

const initialState = {
    isLoading: false,
    userData: null,
    error: null,
  };
  
  export const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case USER_DATA_REQUEST:
      return { ...state, isLoading: true };
        case USER_DATA_SUCCESS:
            return { ...state, 
              isLoading: false, 
              userData: action.payload, 
            }
        case USER_DATA_FAILURE:
            return { ...state, 
              isLoading: false, 
              userData: action.payload, 
              error: action.error, 
            }
      default:
        return state;
    }
  };

  