import { TOGGLE_LIGHTMODE, TOGGLE_DARKMODE } from '../actionTypes'

const initialState = {
    darkModeToggled: false
}

export default (state=initialState, action) => {
    switch(action.type)
    {
        case TOGGLE_DARKMODE: return state.darkModeToggled = true;
        case TOGGLE_LIGHTMODE: return state.darkModeToggled = false;
    }
}