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
  height: 100vh;
`

const BackdropPanel = styled.div`
  position: relative;
  display: grid;
  background-color: #2c2f33;
  height: 100vh;
  
  & > div:nth-child(2)
  {
    background-color: rgba(0,0,0,0.2);
  }
`

const PortalBackdropContainer = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 5;
  
  display: grid;
  place-content: center;
  
  /* Wrapper */
  & > div
  {
    background-color: white;
    height: auto;
    width: 525px;
    border-radius: 25px;
  }
`

const CompanyLogoStyled = styled(CompanyLogo)`
  width: 90px;
  fill: white;
  position: absolute;
  bottom: 15px;
  left: 15px;
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

                <BackdropPanel>

                    <CompanyLogoStyled/>

                    <div/>

                </BackdropPanel>


                { /* Conditionally rendering the route specifically */ }
                <PortalBackdropContainer>
                    <div>
                        <Switch>
                            <Route path="/account/create" exact component={CreateAccount}/>
                            <Route path="/account/login" exact  component={LoginAccount}/>
                        </Switch>
                    </div>
                </PortalBackdropContainer>

            </PrimaryContainer>
        </>
    )

}

export default AccountPortal