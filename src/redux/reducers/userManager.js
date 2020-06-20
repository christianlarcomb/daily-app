import { USER_STATUS } from '../actionTypes'

const initialState = {
    account_status: {
        isLoggedIn: false,
        isBanned: false
    }
}

export default (state= initialState, action) => {

    switch(action.type)
    {
        case USER_STATUS:
            let { isLoggedIn } = action.payload
            return {
                ...state,
                account_status: {
                    isLoggedIn: isLoggedIn,
                    isBanned: initialState.account_status.isBanned
                }
            };
        default: return state;
    }
}