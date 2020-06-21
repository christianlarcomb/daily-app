import React from 'react'
import styled from 'styled-components'

import { useSelector } from "react-redux";

import '../../styles/global_styles/portal_shared.css'

import CreateAccount from "./create-account";
import LoginAccount from "./login-account";

import { ReactComponent as CompanyLogo } from "../../assets/svgs/daily/daily_full.svg";

/* React Router Dom */
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom'

const PrimaryContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  height: 100vh;
`

const ImagePanel = styled.div`
  display: grid;
`

const SidePanelContent = styled.div`
    display: grid;
    grid-auto-rows: max-content;
    grid-auto-columns: auto;
    padding-top: 50px;
    padding-left: 30px;
    padding-right: 30px;
    row-gap: 15px;
    color: white;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    z-index: 2;
    
    & > svg { height: 42px; fill: white }
    & > h1 { font-size: 2.5em }
`

function AccountPortal()
{

    /* Getting isLoggedIn state from redux */
    let isLoggedIn = useSelector(state => state.userManager.account_status.isLoggedIn)

    return (
        <>
            {/* Redirect the user to the panels if they're logged in */}
            { isLoggedIn ? <Redirect exact strict to="/panels/explore"/> : <></>  }

            <PrimaryContainer>

                <ImagePanel>

                    <SidePanelContent>

                        <CompanyLogo/>
                        <h1>It's a lifestyle.</h1>

                    </SidePanelContent>

                    <div id="side-panel-color"/>

                    <div id="side-panel-image"/>

                </ImagePanel>

                { /* Conditionally rendering the route specifically */ }
                <Route path="/account/create" exact component={CreateAccount}/>
                <Route path="/account/login" exact component={LoginAccount}/>

            </PrimaryContainer>
        </>
    )

}

export default AccountPortal