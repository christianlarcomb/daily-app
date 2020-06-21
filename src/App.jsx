import React, {useEffect} from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import axios from 'axios'

import './styles/App.css';

import AccountPortal from './components/account_portal/'
import ErrorPages from "./components/error";
import Lander from './components/lander'
import PanelsContainer from './components/panels_container'
import {useSelector} from "react-redux";
import { ThemeProvider } from "styled-components";
import store from "./redux/store";
import {userLoggedIn} from "./redux/actions";

/* TODO: Implement a user-is-logged-in check and set the isLoggedIn state accordingly.
*   - Verifying the JWT stored in cookies also prevents dated or corrupted data from persisting. */

/* TODO: Find a way to get redux state with class components.
*   - I need a class to utilize the componentDidMount functions */

function App()
{
    /* Utilize this function to carry out necessary checks:
    * - Cookies add/update/refresh state
    */

    let toggled = useSelector(state => state.uiManager.ui.darkMode);

    const theme =
    {
        /* Primary Color Pallet */
        one: !toggled ?   '#fff': '#2c2f33',
        two: !toggled ?   '#e9f0ed': '#3e4a46',
        three: !toggled ? '#a6c5ba': '#69837b',

        /********** MENU THEMING **********/
        /* Menu Theming */
        primaryText:          !toggled ? '#2C2F33': '#fff',
        borderColor:          !toggled ? '#E8E8E8': '#3e4a46',
        buttonHover:          !toggled ? '#f5f5f5' : '#3e4a46',

        /* Menu Icon Theming */
        menuIconSvg:          !toggled ? '#676767' : '#D8D8D8',
        menuIconBack:         !toggled ? '#D8D8D8' : '#676767',

        /* Icon Theming */
        smlRoundedSvgPrimary: !toggled ? '#A6C5BA' : '#69837B',
        smlRoundedBtnBack:    !toggled ? '#E9F0ED' : '#3E4A46',

        /* Menu Highlights */
        menuBarHighlight:     !toggled ? '#a6c5ba' : '#69837b'
    }

    /* Runs when the component mounts */
    useEffect(() => {

        /* Begin managing the state of the browsers cookies */
        cookieManagement().then((e) => console.log(e))

    }, [])

    return (
        <ThemeProvider theme={theme}>
            <Switch>
                <Route path="/" exact component={Lander}/>
                <Route path="/account" component={AccountPortal}/>
                <Route path="/panels" component={PanelsContainer}/>

                {/*
                Default Error Page
                TODO: Implement Error Page with Specific Error ID's and Messages
                */}
                <Route component={ErrorPages}/>
            </Switch>
        </ThemeProvider>
    );

}

const cookieManagement = async () =>
{

    const hoursToSeconds = 3600;

    /* Checking and Verifying Users Refresh and Access Tokens */
    const cookies =
        document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .reduce((accumulator, [key, value]) => ({...accumulator, [key.trim()]: decodeURIComponent(value) }), {})

    /* If the cookies are not null, check them */
    if(cookies.jwtrt != null)
    {
        /* Attempting to retrieve and access token if the  */
        try {
            axios.get('localhost:8090/api/v1/authentication/gen/access-token', {
                headers:
                    {
                        authorization: `basic ${cookies.jwtrt}`
                    }
            })

            .then(res => {
                console.log(res)

                /* Create Account / Login Success and setting Redux state */
                store.dispatch(userLoggedIn(true))

                /* Storing Access and Refresh Java Web-Token in Cookies */
                document.cookie = `jwtat=${res.data['Daily Response'].access_token}; max-age=${2 * hoursToSeconds}`

                return {
                    'Daily Response': {
                        status: 200,
                        message: 'JWTRT found in cookies! Refresh token verified. User is logged in.'
                    }
                }
            })

            /* If something goes wrong with the post request */
            .catch(err => {
                console.log(err)

                return "Error"
            })
        } catch (e) {
            console.log("Error:",e)

            return "Error"
        }

    } else {

        return {
            'Daily Response': {
                status: 404,
                message: 'JWTRT not found in cookies! User is not logged in.'
            }
        }

    }

    console.log("Cookies:", cookies);
}

export default App;
