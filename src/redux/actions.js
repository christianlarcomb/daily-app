import { USER_LOGIN, USER_LOGOUT, TOGGLE_LIGHTMODE, TOGGLE_DARKMODE } from './actionTypes'

export const userLogin = () =>
{
    return
    {
        type: USER_LOGIN
    }
}

export const userLogout = () =>
{
    return
    {
        type: USER_LOGOUT
    }
}

export const toggleDarkmode = () =>
{
    return
    {
        type: TOGGLE_DARKMODE
    }
}

export const toggleLightmode = () =>
{
    return
    {
        type: TOGGLE_LIGHTMODE
    }
}