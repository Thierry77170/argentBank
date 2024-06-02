import { userApi} from '../../api/user.api.js';

export const USER_DATA_REQUEST = 'USER_DATA_REQUEST';
export const USER_DATA_SUCCESS = 'USER_DATA_SUCCESS';
export const USER_DATA_FAILURE = 'USER_DATA_FAILURE';

export const userAction = (token) => async (dispatch) => {
  dispatch({ type: USER_DATA_REQUEST });
  try {
    const data = await userApi(token);
    if (data.status === 200) {
      dispatch({ type: USER_DATA_SUCCESS, payload: data});
      return data;
    } else {
      dispatch({ type: USER_DATA_FAILURE, payload: "Erreur lors de la récupération des données" });
      return { message: "Erreur lors de la récupération des données" };
    }
  } catch (error) {
    console.error(error);
  }
};


