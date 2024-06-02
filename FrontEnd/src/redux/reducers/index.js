// On définit le réducteur racine qui combine les réducteurs individuels
import { combineReducers } from 'redux';
import { loginReducer } from './login.reducer.js';
import { userReducer } from './user.reducer.js';



// On combine les réducteurs individuels dans le réducteur racine
const rootReducer = combineReducers({
    login: loginReducer,
    user: userReducer,
    
});

export default rootReducer;