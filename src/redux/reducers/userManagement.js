import { USER_LOGIN, USER_LOGOUT } from '../actionTypes'

const initialState = {
    userLoggedIn: false
}

export default (state=initialState, action) => {
    switch(action.type)
    {
        case USER_LOGIN: return state.userLoggedIn = true;
        case USER_LOGOUT: return state.userLoggedIn = false;
    }
}