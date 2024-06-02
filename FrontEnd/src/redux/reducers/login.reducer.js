import {LOGIN_REQUEST} from '../actions/login.actions.js'
import {LOGIN_SUCCESS} from '../actions/login.actions.js'
import {LOGIN_FAILURE} from '../actions/login.actions.js'
import {LOGOUT} from '../actions/login.actions.js'
import {SET_AUTHENTICATED} from '../actions/login.actions.js'
import {SET_TOKEN} from '../actions/login.actions.js'


const initialState = {
  isLoading: false,
  isAuthenticated: false,
  token: null,
  error: null,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case LOGIN_SUCCESS:
      return { ...state, isLoading: false, isAuthenticated: true, error: null, token: action.payload };
    case LOGIN_FAILURE:
      return { ...state, isLoading: false, isAuthenticated: false, error: action.payload };
    case LOGOUT:
      return { ...state, isAuthenticated: false, token: null };
    case SET_AUTHENTICATED:
      return { ...state, isAuthenticated: action.payload };
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};

