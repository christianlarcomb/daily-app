import React from "react";
import styled from "styled-components";
import {Route, Redirect} from "react-router-dom";
import ReactTooltip from "react-tooltip";
import ToggleButton from '../toggles/ToggleButton'

/* Logo SVG */
import { ReactComponent as MugLogoSvg } from '../../assets/svgs/daily/daily_mug.svg';

/* Menu Bar SVGs */
import { ReactComponent as ExploreSvg } from '../../assets/svgs/ui/explore.svg';
import { ReactComponent as PriceTagSvg } from '../../assets/svgs/ui/price-tag.svg';
import { ReactComponent as ChatSvg } from '../../assets/svgs/ui/chat-bubbles.svg';

/* Misc. bar SVGs */
import { ReactComponent as NotificationBellSvg } from '../../assets/svgs/ui/notification-bell.svg';
import { ReactComponent as SettingsSvg } from '../../assets/svgs/ui/settings-cog.svg';

/* Settings Menu Specific SVGs */
import { ReactComponent as FeedbackSvg } from '../../assets/svgs/ui/feedback.svg'
import { ReactComponent as DevelopersSvg } from '../../assets/svgs/ui/developer_icon.svg';
import { ReactComponent as HelpAndSupportSvg } from '../../assets/svgs/ui/help_and_support.svg'
import { ReactComponent as DarkModeSvg } from '../../assets/svgs/ui/dark_mode_moon.svg'
import { ReactComponent as LogoutSvg } from '../../assets/svgs/ui/logout_door.svg'


const StyledToolTip = styled(ReactTooltip)`
  background-color: ${props => props.theme.one} !important;
  opacity: 100 !important;
  border-radius: 8px !important;
  height: 40px !important;
  border-style: solid !important;
  border-width: 1.5px !important;
  border-color: ${props => props.theme.borderColor} !important;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
  font-size: 15px !important;
  color: ${props => props.theme.primaryText} !important;
  place-items: center !important;
  transition: opacity 0.05s ease !important;
`

const PrimaryContainer = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr;
  height: 100vh;
  min-height: 700px;
  background-color: ${props => props.theme.one};
`

const PrimarySidebar = styled.div`
  display: grid;
  grid-template-rows: 85px 1fr 150px 10px;
  width: 100%;
  position: relative;
  place-items: center;
  
  & > div:nth-child(1)
  {
    height: 46px;
    width: 46px;
    border-radius: 100%;
    display: grid;
    place-content: center;
    background-color: #6ab26a;
  }
  
  & > div:nth-child(1) > svg
  {
    height: 24px;
    width: 24px;
    fill: ${props => props.theme.one};
    padding-right: 3px;
  }
`

const MenuBarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  place-items: center;
`

const MenuBarWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  place-items: center;
  position: relative;
  height: 385px;
  width: 100%;
  
  /* Styling the parent containers */
  & > div
  {
    display: grid;
    grid-template-columns: 4px 1fr;
    height: 100%;
    width: 100%;
    margin: 0;
    position: relative;
    place-items: center;
  }
  
  /* Styling the clicked highlight */
  & > div > div:nth-child(1)
  {
    background-color: var(--primary-grn);
    height: 90%;
    width: 4px;
    border-radius: 0 4px 4px 0;
  }
  
  /* Styling the highlighted portion of the buttons */
  & > div > div:nth-child(2)
  {
    height: 90%;
    width: 90%;
    border-radius: 10px;
    display: grid;
    place-items: center;
    transition: background-color 0.05s ease;
  }
  
  & > div > div:nth-child(2):hover
  {
    background-color: ${props => props.theme.two};
    cursor: pointer;
  }
  
  & > div > div:nth-child(2) > svg { height: 26px; }
  
  /* Dynamic Global Light Animation */
  & > div > div:nth-child(1) 
  { transition: opacity 0.05s ease; }
  
  & > div > div:nth-child(2) > svg
  { transition: fill 0.05s ease; }
  
  /* Dynamic Elements Rendered by State */
  & > div:nth-child(1) > div:nth-child(1) 
  { 
    background-color: var(--primary-grn);
    opacity: ${props => props.selected.explore ? 100 : 0};
  }
  
  & > div:nth-child(1) > div:nth-child(2) > svg { fill: ${props => props.selected.explore ? '#6ab26a' : props.theme.menuBarHighlight}; }
  
  & > div:nth-child(2) > div:nth-child(1) {
    background-color: var(--primary-grn);
    opacity: ${props => props.selected.shop ? 100 : 0};
  }
  & > div:nth-child(2) > div:nth-child(2) > svg { fill: ${props => props.selected.shop ? '#6ab26a' : props.theme.menuBarHighlight}; }
  
  & > div:nth-child(3) > div:nth-child(1) {
    background-color: var(--primary-grn);
    opacity: ${props => props.selected.chat ? 100 : 0};
  }
  & > div:nth-child(3) > div:nth-child(2) > svg { fill: ${props => props.selected.chat ? '#6ab26a' : props.theme.menuBarHighlight}; }
`

const MiscBar = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  place-items: center;
  height: 100%;
  
  & > div
  {
    height: 42px;
    width: 42px;
    position: relative;
    
    & > div:nth-child(1)
    {
        background-color: var(--lgt-2);
        border-radius: 100%;
        height: 100%;
        width: 100%;
        display: grid;
        place-items: center;
        transition: background-color 0.05s ease;
    }
  }
  
  /* All wrappers have pointer cursor */
  & > div > div:nth-child(1):hover { cursor: pointer; }
  
  /* All wrappers svg have fill transitions */
  & > div > div > svg { transition: fill 0.05s ease; }
  
  /* Dynamic Rendering of Notification Button */
  & > div:nth-child(1) > div:nth-child(1)
  {
    background-color: ${props => props.selected.notifications ? '#6ab26a' : props.theme.two};
    
    & > svg 
    {
        transform: rotate(-16deg);
        fill: ${props => props.selected.notifications ? props.theme.one : props.theme.smlRoundedSvgPrimary};
    }
  }
  
  /* Dynamic Rendering of Settings Button */
  & > div:nth-child(2) > div:nth-child(1) 
  { 
    background-color: ${props => props.selected.settings_menu ? '#6ab26a' : props.theme.two};
    
    & > svg
    {
      fill: ${props => props.selected.settings_menu ? props.theme.one : props.theme.smlRoundedSvgPrimary}
    }
  }
  
  /* Dynamic Rendering of Profile Button */
  & > div:nth-child(3) > div:nth-child(1) 
  { 
    border-style: solid;
    border-color: ${props => props.selected.profile_menu ? '#6ab26a' : 'rgba(0,0,0,0)'};
    border-width: 2px;
    transition: border-color 0.05s ease
  }
  
  & > div > div > svg
  {
    fill: var(--lgt-3);
    height: 20px;
  }
`

const MiscBarMenu = styled.div`
    position: absolute              !important;
    bottom: 0                       !important;
    left: 60px                      !important;
    background-color: ${props => props.theme.one};
    min-height: 50px                !important;
    max-height: 550px               !important;
    border-color: ${props => props.theme.borderColor};
    border-radius: 18px             !important;
    border-style: solid             !important;
    border-width: 1.5px             !important;
    width: 325px                    !important;
    transition: opacity 0.05s ease  !important;
    padding: 0 6px                 !important;
    overflow-y: hidden;
    color: ${props => props.theme.primaryText};
    -webkit-filter: drop-shadow(0px 8px 6px rgba(0, 0, 0, 0.08));
            filter: drop-shadow(0px 8px 6px rgba(0, 0, 0, 0.08));
`

const NotificationMenu = styled(MiscBarMenu)`
    opacity: ${props => props.selected.notifications ? 100 : 0};
`

const SettingsMenu = styled(MiscBarMenu)`

    opacity: ${props => props.selected.settings_menu ? 100 : 0};
    
    /* Generalized */
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
    
    /* User + Login */
    & > div:nth-child(1)
    {
      height: 64px;
      margin: 5px 0;
      grid-template-columns: 48px 1fr;
      grid-gap: 10px;
      
      /* Image Box */
      & > div:nth-child(1) {
        display: grid;
        align-items: center;
        
        
        & > div:nth-child(1)
        {
            height: 48px;
            width: 100%;
            border-radius: 100%;
            overflow: hidden;
            
        }
      }
      
      /* Text Box */
      & > div:nth-child(2) {
        
      }
    }
    
    /* Feedback Item Margin */
    & > div:nth-child(3) { margin: 5px 0; }
    
    /* Settings Item Margin */
    & > div:nth-child(5) { margin-top: 5px; }
    
    /* Styling Dark Mode Toggle */
    & > div:nth-child(8) > div:nth-child(2)
    { 
      display: grid;
      grid-template-columns: 1fr 42px;
    }
    
    /* Styling Dark Mode Toggle */
    & > div:nth-child(8):hover 
    { 
      cursor: auto; 
      background-color: rgba(0,0,0,0); 
      transition: background-color 0.05s ease;
    }
    
    /* Disclaimer Styles */
    & > div:last-of-type
    {
      height: 42px;
      display: block !important;
      
      &:hover
      {
        background-color: rgba(0,0,0,0);
        cursor: auto;
      }
      
      & > span
      {
        display: block;
        height: auto;
        font-size: 12px;
        margin-top: 2px;
        color: #696969;
        
        & > a { cursor: pointer }
      }
    }
`

const MenuDivider = styled.div`
  width: auto !important;
  height: 1px !important;
  background-color: ${props => props.theme.borderColor} !important;
  border-radius: 100px !important;
  opacity: 1 !important;
  margin: 0 8px !important;
`

const ProfileMenu = styled(MiscBarMenu)`
    opacity: ${props => props.selected.profile_menu ? 100 : 0};
`

/* TODO: Complete the sidebar */
class PanelsContainer extends React.Component
{

    constructor(props) {
        super(props);

        this.state =
        {
            panel_selected:
            {
                explore: true,
                shop: false,
                chat: false
            },
            misc_selected:
                {
                    notifications: false,
                    settings_menu: false,
                    profile_menu: false
                }
        }
    }

    render()
    {
        return(
            <>

                <PrimaryContainer>

                    {/* Contains all misc. menus */}

                    <PrimarySidebar>

                        <div>
                            <MugLogoSvg/>
                        </div>

                        <MenuBarContainer>
                            <MenuBarWrapper selected={this.state.panel_selected}>

                                {/* Explore Highlight */}
                                <div>
                                    {/* Highlight Bar */}
                                    <div/>

                                    <div data-tip data-for="explore" onClick={() => {this.setState({panel_selected: {explore: true, shop: false, chat: false}})}}>

                                        { this.state.panel_selected.explore ? <Redirect to="/panels/explore"/> : <></> }
                                        <ExploreSvg/>
                                    </div>

                                    <StyledToolTip id="explore" type="light" place="right" effect="solid" arrowColor="transparent">Explore</StyledToolTip>

                                </div>

                                {/* Shop Highlight */}
                                <div>
                                    {/* Highlight Bar */}
                                    <div/>

                                    <div data-tip data-for="shop" onClick={() => {this.setState({panel_selected: {explore: false, shop: true, chat: false}})}}>

                                        { this.state.panel_selected.shop ? <Redirect to="/panels/shop"/> : <></> }
                                        <PriceTagSvg/>
                                    </div>

                                    <StyledToolTip id="shop" type="light" place="right" effect="solid" arrowColor="transparent">Shop</StyledToolTip>

                                </div>

                                {/* Chat Highlight */}
                                <div>
                                    {/* Highlight Bar */}
                                    <div/>

                                    <div data-tip data-for="chat" onClick={() => {this.setState({panel_selected: {explore: false, shop: false, chat: true}})}}>

                                        { this.state.panel_selected.chat ? <Redirect to="/panels/chat"/> : <></> }
                                        <ChatSvg/>
                                    </div>

                                    <StyledToolTip id="chat" type="light" place="right" effect="solid" arrowColor="transparent">Chat</StyledToolTip>

                                </div>

                            </MenuBarWrapper>
                        </MenuBarContainer>

                        <MiscBar selected={this.state.misc_selected}>

                            {/* Notification Button Container */}
                            <div>

                                {/* Notification Button Wrapper */}
                                <div onClick={() => this.setState({ misc_selected: { notifications: !this.state.misc_selected.notifications, settings_menu: false, profile_menu: false } })}>
                                    <NotificationBellSvg/>
                                </div>

                                <NotificationMenu selected={this.state.misc_selected}>

                                </NotificationMenu>
                            </div>

                            {/* Settings Button Container */}
                            <div>
                                <div onClick={() => this.setState({ misc_selected: { notifications: false, settings_menu: !this.state.misc_selected.settings_menu, profile_menu: false } })}>
                                    <SettingsSvg/>
                                </div>

                                <SettingsMenu selected={this.state.misc_selected}>

                                    {/* User or Login Section */}
                                    <div>
                                        {/* Image Section */}
                                        <div>
                                            <div>

                                            </div>
                                        </div>

                                        {/* Text Section */}
                                        <div>
                                            <span>Christian Larcomb</span>
                                            <span>View user profile.</span>
                                        </div>
                                    </div>

                                    <MenuDivider/>

                                    <div>
                                        {/* Icon Section */}
                                        <div>
                                            <div>
                                                <FeedbackSvg/>
                                            </div>
                                        </div>

                                        {/* Text Section */}
                                        <div>
                                            <span>Provide Feedback</span>
                                            <span>Help us make our app even better!</span>
                                        </div>
                                    </div>

                                    <MenuDivider/>

                                    <div>
                                        {/* Icon Section */}
                                        <div>
                                            <div>
                                                <SettingsSvg/>
                                            </div>
                                        </div>

                                        {/* Text Section */}
                                        <div>
                                            <span>Settings</span>
                                        </div>
                                    </div>

                                    <div>
                                        {/* Icon Section */}
                                        <div>
                                            <div>
                                                <DevelopersSvg/>
                                            </div>
                                        </div>

                                        {/* Text Section */}
                                        <div>
                                            <span>Developers</span>
                                        </div>
                                    </div>

                                    <div>
                                        {/* Icon Section */}
                                        <div>
                                            <div>
                                                <HelpAndSupportSvg/>
                                            </div>
                                        </div>

                                        {/* Text Section */}
                                        <div>
                                            <span>Help & Support</span>
                                        </div>
                                    </div>

                                    <div>
                                        {/* Icon Section */}
                                        <div>
                                            <div>
                                                <DarkModeSvg/>
                                            </div>
                                        </div>

                                        {/* Text Section */}
                                        <div>
                                            <span>
                                                Dark Mode
                                            </span>

                                            <ToggleButton/>
                                        </div>
                                    </div>

                                    <div>
                                        {/* Icon Section */}
                                        <div>
                                            <div>
                                                <LogoutSvg/>
                                            </div>
                                        </div>

                                        {/* Text Section */}
                                        <div>
                                            <span>Logout</span>
                                        </div>
                                    </div>

                                    <div>
                                        <span><a>Privacy</a> • <a>Terms</a> • <a>Advertising</a> • <a>Ad Choices</a> • <a>Cookies</a> <br/>DailyApp © 2020</span>
                                    </div>

                                </SettingsMenu>
                            </div>

                            {/* Profile Button Container */}
                            <div>

                                <div onClick={() => this.setState({ misc_selected: { notifications: false, settings_menu: false, profile_menu: !this.state.misc_selected.profile_menu } })}>
                                </div>

                                <ProfileMenu selected={this.state.misc_selected}/>

                            </div>

                        </MiscBar>

                    </PrimarySidebar>

                    { /* Conditionally rendering the route specifically */ }


                    <Route path="/panels/explore" exact component={''}/>
                    <Route path="/panels/shop" exact component={''}/>
                    <Route path="/panels/messenger" exact component={''}/>

                </PrimaryContainer>
            </>
        )
    }


}

export default PanelsContainer