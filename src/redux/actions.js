import { USER_STATUS, DARK_MODE_TOGGLED } from './actionTypes'

export const userLoggedIn = (boolean) => ({
    type: USER_STATUS,
    payload: {
        isLoggedIn: boolean
    }
})

export const darkModeToggled = (boolean) => ({
    type: DARK_MODE_TOGGLED,
    payload: {
        darkModeToggled: boolean
    }
})