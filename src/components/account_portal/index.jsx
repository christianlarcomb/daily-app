import React from 'react'
import styled from 'styled-components'

import '../../styles/global_styles/portal_shared.css'

import CreateAccount from "./create-account";
import LoginAccount from "./login-account";

import { ReactComponent as CompanyLogo } from "../../assets/svgs/company-logo.svg";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
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
    
    & > svg { height: 45px }
    & > h1 { font-size: 2.5em }
`

class AccountPortal extends React.Component
{

    render()
    {
        return (
            <>
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
}

export default AccountPortal