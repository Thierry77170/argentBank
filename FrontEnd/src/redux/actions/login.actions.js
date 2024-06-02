import loginApi from '../../api/login.api.js';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';
export const SET_AUTHENTICATED = 'SET_AUTHENTICATED';
export const SET_TOKEN = 'SET_TOKEN';


export const loginAction = (credentials) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const token = await loginApi(credentials);
    if (token) {
      dispatch({ type: LOGIN_SUCCESS, payload: token });
      return token;
    } else {
      dispatch({ type: LOGIN_FAILURE, payload: "Invalid fields" });
      return { message: "invalid Fields" };
    }
  } catch (error) {
    console.error(error);
  }
};

export const logoutAction = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch({ type: LOGOUT });
};

export const setAuthenticated = (isAuthenticated) => ({
  type: SET_AUTHENTICATED,
  payload: isAuthenticated,
});

export const setToken = (token) => ({
  type: SET_TOKEN,
  payload: token,
});

