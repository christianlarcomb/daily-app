import { DARK_MODE_TOGGLED } from '../actionTypes'

const initialState = {
    ui: {
        darkMode: false
    }
}

export default (state= initialState, action) => {

    switch(action.type){

        case DARK_MODE_TOGGLED:
            const { darkModeToggled } = action.payload;
            return {
                ...state,
                ui: {
                    darkMode: darkModeToggled
                }
            };

        default: return state;

    }
}