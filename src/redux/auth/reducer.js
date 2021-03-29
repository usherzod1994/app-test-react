import {AUTH_USER, UPDATE_STATE} from "./actionType";

const INIT_STATE = {
    authUser: {
        phoneNumber: '+998',
        password: '',
        isRemember: false,
    },
    is_guest: false,
    isModalShow: false
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case UPDATE_STATE: {
            return {
                ...state,
                ...action.payload
            }
        }
        case AUTH_USER: {
            return {
                ...state,
                authUser:action.payload
            }
        }
        default:
            return state;
    }
}