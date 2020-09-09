import React from 'react'
import styled from 'styled-components'
import { Route, Link, Switch } from 'react-router-dom'

/* SVG Imports */
import { ReactComponent as AccountSvg }             from "../../../assets/svgs/settings_menu/Account.svg";
import { ReactComponent as PrivacySvg }             from "../../../assets/svgs/settings_menu/Privacy.svg";
import { ReactComponent as NotificationsSvg }       from "../../../assets/svgs/settings_menu/Notifications.svg";
import { ReactComponent as ContentsPreferencesSvg } from "../../../assets/svgs/settings_menu/Content Preferences.svg";
import { ReactComponent as PaymentsSvg }            from "../../../assets/svgs/settings_menu/Payments.svg";
import { ReactComponent as AboutSvg }               from "../../../assets/svgs/settings_menu/About.svg";
import { ReactComponent as LanguageAndRegionSvg }   from "../../../assets/svgs/settings_menu/Language and Region.svg";
import { ReactComponent as LocationSvg }            from "../../../assets/svgs/settings_menu/Location.svg";
import { ReactComponent as SupportSvg }             from "../../../assets/svgs/settings_menu/Support.svg";
import AccountPanel from "./account_panel";

const CoreGrid = styled.div`

  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-columns: 20% 300px 1fr;
  
`

const PanelsContainer = styled.div`
  overflow-y: scroll;
  background-color: #F2F2F2;
`

const StyledMenuItems = styled.div`

  /* 
   * Colors:
   * #726F79
   * #D7D4E5
   * #9090A4
   */

    padding: 0 10px;
    color: ${props => props.theme.primaryText};
  
    & > h1 
    {
        display: grid;
        align-content: center; 
        font-size: 26px;
        margin: 35px 0 30px 0;
        padding: 0 10px;
    }
    
    & > h2
    {
        display: grid;
        align-content: center;
        font-size: 22px;
        font-weight: 500;
        margin: 20px 0 8px 0;
        padding: 0 10px;
    }

    /* Menu button */
    & > div, & > a
    {
      display: grid;
      height: 54px;
      grid-template-columns: 34px 1fr;
      grid-gap: 12px;
      padding: 0 10px;
      text-decoration: none;
      color: ${props => props.theme.primaryText};
      
      &:hover
      {
        background-color: ${props => props.theme.buttonHover};
        cursor: pointer;
        border-radius: 12px;
        transition: background-color 0.05s ease;
        filter: brightness(1);
        text-decoration: none;
      }
      
      /* Icon Box */
      & > div:nth-child(1) {
      
        display: grid;
        align-items: center;  
        
        /* SVG Wrapper */
        & > div:nth-child(1)
        {
            height: 32px;
            width: 32px;
            border-radius: 100%;
            overflow: hidden;
            
            display: grid;
            place-items: center;
            
            & > svg
            {
              height: auto;
              width: 24px;
            }
        }
      }
      
      /* Text Box */
      & > div:nth-child(2) 
      {
        display: grid;
        align-items: center;
        height: 36px;
        align-self: center;
        
        & > span:nth-child(1) 
        {
        font-size: 16px;
        font-weight: 500;
        }
        
        & > span:nth-child(2) 
        {
        font-size: 12px;
        }
        
        & > div
        {
          
        }
      }
    }
`

/* Parent Container for the Settings */
function SettingsPanels()
{

    return(
        <CoreGrid>

            {/* Filler #1 */}
            <div/>

            {/* Menu Options */}
            <StyledMenuItems>

                {/* Settings Title */}
                <h1>
                    Settings
                </h1>

                {/* User Subcategory */}
                <h2>
                    @{window.localStorage.getItem('username')}
                </h2>

                {/* Menu Button #1 */}
                <Link to='/app/settings/account'>
                    {/* Icon Section */}
                    <div>
                        <div>
                            <AccountSvg/>
                        </div>
                    </div>

                    {/* Text Section */}
                    <div>
                        <span>Account</span>
                    </div>
                </Link>

                {/* Menu Button #2 */}
                <Link to='/app/settings/privacy'>
                    {/* Icon Section */}
                    <div>
                        <div>
                            <PrivacySvg/>
                        </div>
                    </div>

                    {/* Text Section */}
                    <div>
                        <span>Privacy</span>
                    </div>
                </Link>

                {/* Menu Button #3 */}
                <Link to='/app/settings/notifications'>
                    {/* Icon Section */}
                    <div>
                        <div>
                            <NotificationsSvg/>
                        </div>
                    </div>

                    {/* Text Section */}
                    <div>
                        <span>Notifications</span>
                    </div>
                </Link>

                {/* Menu Button #4 */}
                <Link to='/app/settings/content-preferences'>
                    {/* Icon Section */}
                    <div>
                        <div>
                            <ContentsPreferencesSvg/>
                        </div>
                    </div>

                    {/* Text Section */}
                    <div>
                        <span>Content Preferences</span>
                    </div>
                </Link>

                {/* Menu Button #5 */}
                <Link to='/app/settings/payments'>
                    {/* Icon Section */}
                    <div>
                        <div>
                            <PaymentsSvg/>
                        </div>
                    </div>

                    {/* Text Section */}
                    <div>
                        <span>Payments</span>
                    </div>
                </Link>

                {/* General Subcategory */}
                <h2>
                    General
                </h2>

                {/* Menu Button #6 */}
                <Link to='/app/settings/about'>
                    {/* Icon Section */}
                    <div>
                        <div>
                            <AboutSvg/>
                        </div>
                    </div>

                    {/* Text Section */}
                    <div>
                        <span>About</span>
                    </div>
                </Link>

                {/* Menu Button #7 */}
                <Link to='/app/settings/language-and-region'>
                    {/* Icon Section */}
                    <div>
                        <div>
                            <LanguageAndRegionSvg/>
                        </div>
                    </div>

                    {/* Text Section */}
                    <div>
                        <span>Language and Region</span>
                    </div>
                </Link>

                {/* Menu Button #8 */}
                <Link to='/app/settings/location'>
                    {/* Icon Section */}
                    <div>
                        <div>
                            <LocationSvg/>
                        </div>
                    </div>

                    {/* Text Section */}
                    <div>
                        <span>Location</span>
                    </div>
                </Link>

                {/* Menu Button #9 */}
                <Link to='/app/settings/support'>
                    {/* Icon Section */}
                    <div>
                        <div>
                            <SupportSvg/>
                        </div>
                    </div>

                    {/* Text Section */}
                    <div>
                        <span>Support</span>
                    </div>
                </Link>

            </StyledMenuItems>

            {/* Preference Panels */}
            <PanelsContainer>
                <Switch>
                    <Route path="/app/settings/account" exact component={AccountPanel}/>
                    <Route exact strict path={"/app/settings/privacy"}/>
                    <Route exact strict path={"/app/settings/notifications"}/>
                    <Route exact strict path={"/app/settings/content-preferences"}/>
                    <Route exact strict path={"/app/settings/payments"}/>
                    <Route exact strict path={"/app/settings/about"}/>
                    <Route exact strict path={"/app/settings/language-and-region"}/>
                    <Route exact strict path={"/app/settings/location"}/>
                    <Route exact strict path={"/app/settings/support"}/>
                </Switch>
            </PanelsContainer>

        </CoreGrid>
    )

}

export default SettingsPanels