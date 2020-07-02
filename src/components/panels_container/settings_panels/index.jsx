import React from 'react'
import styled from 'styled-components'
import {ReactComponent as FeedbackSvg} from "../../../assets/svgs/ui/feedback.svg";
import { Route } from 'react-router-dom'

const CoreGrid = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-columns: 1fr 325px 650px 1fr;
  
  {/* Menu Parent Div */}
  & > div:nth-child(2)
  {
    
  }
  
  /* Background Styling */
  & > div:nth-child(3),& > div:nth-child(4){ background-color: ${props => props.theme.two}; }
`

const StyledMenuItems = styled.div`

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
    & > div
    {
      display: grid;
      height: 54px;
      grid-template-columns: 34px 1fr;
      grid-gap: 12px;
      padding: 0 10px;
      
      &:hover
      {
        background-color: ${props => props.theme.buttonHover};
        cursor: pointer;
        border-radius: 12px;
        transition: background-color 0.05s ease;
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
            background-color: ${props => props.theme.menuIconBack};
            display: grid;
            place-items: center;
            
            & > svg
            {
              height: auto;
              width: 16px;
              fill: ${props => props.theme.menuIconSvg};
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
                    @user
                </h2>

                {/* Menu Button #1 */}
                <div>
                    {/* Icon Section */}
                    <div>
                        <div>
                            <FeedbackSvg/>
                        </div>
                    </div>

                    {/* Text Section */}
                    <div>
                        <span>Account</span>
                    </div>
                </div>

                {/* Menu Button #1 */}
                <div>
                    {/* Icon Section */}
                    <div>
                        <div>
                            <FeedbackSvg/>
                        </div>
                    </div>

                    {/* Text Section */}
                    <div>
                        <span>Privacy</span>
                    </div>
                </div>

                {/* Menu Button #1 */}
                <div>
                    {/* Icon Section */}
                    <div>
                        <div>
                            <FeedbackSvg/>
                        </div>
                    </div>

                    {/* Text Section */}
                    <div>
                        <span>Notifications</span>
                    </div>
                </div>

                {/* Menu Button #1 */}
                <div>
                    {/* Icon Section */}
                    <div>
                        <div>
                            <FeedbackSvg/>
                        </div>
                    </div>

                    {/* Text Section */}
                    <div>
                        <span>Content Preferences</span>
                    </div>
                </div>

                {/* Menu Button #1 */}
                <div>
                    {/* Icon Section */}
                    <div>
                        <div>
                            <FeedbackSvg/>
                        </div>
                    </div>

                    {/* Text Section */}
                    <div>
                        <span>Payments</span>
                    </div>
                </div>

                {/* General Subcategory */}
                <h2>
                    General
                </h2>

                {/* Menu Button #1 */}
                <div>
                    {/* Icon Section */}
                    <div>
                        <div>
                            <FeedbackSvg/>
                        </div>
                    </div>

                    {/* Text Section */}
                    <div>
                        <span>About</span>
                    </div>
                </div>

                {/* Menu Button #1 */}
                <div>
                    {/* Icon Section */}
                    <div>
                        <div>
                            <FeedbackSvg/>
                        </div>
                    </div>

                    {/* Text Section */}
                    <div>
                        <span>Language and Region</span>
                    </div>
                </div>

                {/* Menu Button #1 */}
                <div>
                    {/* Icon Section */}
                    <div>
                        <div>
                            <FeedbackSvg/>
                        </div>
                    </div>

                    {/* Text Section */}
                    <div>
                        <span>Location</span>
                    </div>
                </div>

                {/* Menu Button #1 */}
                <div>
                    {/* Icon Section */}
                    <div>
                        <div>
                            <FeedbackSvg/>
                        </div>
                    </div>

                    {/* Text Section */}
                    <div>
                        <span>Support</span>
                    </div>
                </div>

            </StyledMenuItems>

            {/* Preference Panels */}
            <div>
                <Route exact strict to={"/panels/settings/account"}/>
                <Route exact strict to={"/panels/settings/privacy"}/>
                <Route exact strict to={"/panels/settings/notifications"}/>
                <Route exact strict to={"/panels/settings/content-preferences"}/>
                <Route exact strict to={"/panels/settings/payments"}/>
                <Route exact strict to={"/panels/settings/about"}/>
                <Route exact strict to={"/panels/settings/language-and-region"}/>
                <Route exact strict to={"/panels/settings/location"}/>
                <Route exact strict to={"/panels/settings/support"}/>
            </div>

            {/* Filler #2 */}
            <div/>
        </CoreGrid>
    )

}

export default SettingsPanels