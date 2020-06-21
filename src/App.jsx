import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import './styles/App.css';

import AccountPortal from './components/account_portal/'
import ErrorPages from "./components/error";
import Lander from './components/lander'
import PanelsContainer from './components/panels_container'
import {useSelector} from "react-redux";
import { ThemeProvider } from "styled-components";

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
        one: !toggled ?   '#fff': '#2c2f33',
        two: !toggled ?   '#e9f0ed': '#3e4a46',
        three: !toggled ? '#a6c5ba': '#69837b',

        primaryText: !toggled ? '#2C2F33': '#fff',
        borderColor: !toggled ? '#E8E8E8': '#3e4a46',
        buttonHover: !toggled ? '#f5f5f5' : '#3e4a46',

        smlRoundedSvgPrimary: !toggled ? '#A6C5BA' : '#69837B',
        smlRoundedBtnBack: !toggled ?    '#E9F0ED' : '#3E4A46',

        menuBarHighlight: !toggled ?     '#a6c5ba' : '#69837b'
    }

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

export default App;
