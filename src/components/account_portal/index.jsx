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
  background-color: #101010;
  height: 100vh;
`

const DarkOverlay = styled.div`
  
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
    width: 500px;
    border-radius: 25px;
  }
`

const CompanyLogoStyled = styled(CompanyLogo)`
  width: 90px;
  fill: white;
  position: absolute;
  bottom: 25px;
  left: 25px;
`

const ImageGrid = styled.div`
  display: grid;
  overflow: hidden;
  place-content: center;
  grid-template-rows: repeat(7, 200px);
  grid-template-columns: repeat(7, 200px);
  height: 100vh;
  width: 100vw;
  grid-gap: 20px;
  opacity: 15%;
  
  & > div
  {
    border-radius: 30px;
  }
  
  & > div:nth-child(4),
  & > div:nth-child(10),& > div:nth-child(11),& > div:nth-child(12),
  & > div:nth-child(16),& > div:nth-child(17),& > div:nth-child(18),& > div:nth-child(19),& > div:nth-child(20),
  & > div:nth-child(22),& > div:nth-child(23),& > div:nth-child(24),& > div:nth-child(26),& > div:nth-child(27),& > div:nth-child(28),
  & > div:nth-child(30),& > div:nth-child(31),& > div:nth-child(32),& > div:nth-child(33),& > div:nth-child(34),
  & > div:nth-child(38),& > div:nth-child(39),& > div:nth-child(40),
  & > div:nth-child(46)
  { background-color: white }
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

                    {/* Dark Overlay */}
                    <DarkOverlay/>

                    {/* Image Grid */}
                    <ImageGrid>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>

                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>

                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>

                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>

                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </ImageGrid>

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