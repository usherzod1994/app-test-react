import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import Auth from "./auth/reducer";
const reducers = combineReducers({
    routing: routerReducer,
    auth: Auth
});

export default reducers;
