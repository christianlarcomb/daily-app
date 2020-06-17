import React from "react";
import styled from "styled-components";
import {Route, Redirect} from "react-router-dom";
import ReactTooltip from "react-tooltip";

/* SVGs */
import { ReactComponent as MugLogoSvg } from '../../assets/svgs/daily/daily_mug.svg';
import { ReactComponent as ExploreSvg } from '../../assets/svgs/menu_bar/explore.svg';
import { ReactComponent as PriceTagSvg } from '../../assets/svgs/menu_bar/price-tag.svg';
import { ReactComponent as ChatSvg } from '../../assets/svgs/menu_bar/chat-bubbles.svg';
import { ReactComponent as NotificationBellSvg } from '../../assets/svgs/menu_bar/notification-bell.svg';
import { ReactComponent as SettingsSvg } from '../../assets/svgs/menu_bar/settings-cog.svg';

const StyledToolTip = styled(ReactTooltip)`
  background-color: white !important;
  opacity: 100 !important;
  border-radius: 8px !important;
  height: 40px !important;
  border-style: solid !important;
  border-width: 1px !important;
  border-color: #d7dedb !important;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
  font-size: 15px !important;
  color: var(--drk-2) !important;
  place-items: center !important;
  transition: opacity 0.1s ease !important;
  #data-arrow-color
  {
    background-color: #2c2f33;
  }
`

const PrimaryContainer = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr;
  height: 100vh;
  min-height: 700px;
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
    fill: var(--lgt-1);
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
    background-color: var(--lgt-2);
    cursor: pointer;
  }
  
  & > div > div:nth-child(2) > svg
  {
    height: 26px;
    fill: var(--lgt-3);
  }
  
  /* Dynamic Global Light Animation */
  & > div > div:nth-child(1) 
  { transition: opacity 0.1s ease; }
  
  & > div > div:nth-child(2) > svg
  { transition: fill 0.1s ease; }
  
  /* Dynamic Elements Rendered by State */
  & > div:nth-child(1) > div:nth-child(1) 
  { 
    background-color: var(--primary-grn);
    opacity: ${props => props.selected.explore ? 100 : 0};
  }
  & > div:nth-child(1) > div:nth-child(2) > svg { fill: ${props => props.selected.explore ? '#6ab26a' : '#a6c5ba'}; }
  
  & > div:nth-child(2) > div:nth-child(1) {
    background-color: var(--primary-grn);
    opacity: ${props => props.selected.shop ? 100 : 0};
  }
  & > div:nth-child(2) > div:nth-child(2) > svg { fill: ${props => props.selected.shop ? '#6ab26a' : '#a6c5ba'}; }
  
  & > div:nth-child(3) > div:nth-child(1) {
    background-color: var(--primary-grn);
    opacity: ${props => props.selected.chat ? 100 : 0};
  }
  & > div:nth-child(3) > div:nth-child(2) > svg { fill: ${props => props.selected.chat ? '#6ab26a' : '#a6c5ba'}; }
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
    background-color: ${props => props.selected.notifications ? '#6ab26a' : '#e9f0ed'};
    
    & > svg 
    {
        transform: rotate(-16deg); 
        fill: ${props => props.selected.notifications ? '#fff' : '#a6c5ba'};
    }
  }
  
  /* Dynamic Rendering of Settings Button */
  
  & > div:nth-child(2) > div:nth-child(1) 
  { 
    background-color: ${props => props.selected.settings_menu ? '#6ab26a' : '#e9f0ed'};
    
    & > svg
    {
      fill: ${props => props.selected.settings_menu ? '#fff' : '#a6c5ba'}
    }
  }
  
  /* Dynamic Rendering of Profile Button */
  & > div:nth-child(3)  > div:nth-child(1) 
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
    background-color: white;
    min-height: 50px                !important;
    max-height: 550px               !important;
    border-color: #E8E8E8;
    border-radius: 18px             !important;
    border-style: solid             !important;
    border-width: 1.5px             !important;
    width: 300px                    !important;
    transition: opacity 0.05s ease  !important;
    overflow-y: hidden;
    -webkit-filter: drop-shadow(0px 12px 10px rgba(0, 0, 0, 0.05));
            filter: drop-shadow(0px 12px 10px rgba(0, 0, 0, 0.05));
`

const NotificationMenu = styled(MiscBarMenu)`
    opacity: ${props => props.selected.notifications ? 100 : 0};
`

const SettingsMenu = styled(MiscBarMenu)`

    opacity: ${props => props.selected.settings_menu ? 100 : 0};
    padding: 0 15px;
    
    /* User + Login */
    & > div
    {
      display: grid;
      height: 54px;
      grid-template-columns: 34px 1fr;
      grid-gap: 10px;
      
      /* Icon Box */
      & > div:nth-child(1) {
        display: grid;
        align-items: center;  
        
        & > div:nth-child(1)
        {
            height: 34px;
            width: 100%;
            border-radius: 100%;
            overflow: hidden;
            background-color: #D8D8D8;
        }
      }
      
      /* Text Box */
      & > div:nth-child(2) {
        
      }
    }
    
    /* Generalized Selections */
    & > div:nth-child(1)
    {
      display: grid;
      height: 64px;
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
    
    & > div:last-of-type
    {
      height: 40px;
      display: grid;
      place-items: center;
      grid-template-columns: 1fr;
      
      & > span
      {
        font-size: 12px;
        color: #b4bbb8;
        padding-bottom: 6px;
      }
    }
`

const MenuDivider = styled.div`
  width: 100% !important;
  height: 1px !important;
  background-color: #E8E8E8 !important;
  border-radius: 100px !important;
  opacity: 1 !important;
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
                                        <div>
                                            <div>

                                            </div>
                                        </div>
                                        <div>

                                        </div>
                                    </div>

                                    <MenuDivider/>

                                    <div>
                                        <div>
                                            <div>

                                            </div>
                                        </div>
                                        <div>

                                        </div>
                                    </div>

                                    <MenuDivider/>

                                    <div>
                                        <div>
                                            <div>

                                            </div>
                                        </div>
                                        <div>

                                        </div>
                                    </div>

                                    <div>
                                        <div>
                                            <div>

                                            </div>
                                        </div>
                                        <div>

                                        </div>
                                    </div>

                                    <div>
                                        <div>
                                            <div>

                                            </div>
                                        </div>
                                        <div>

                                        </div>
                                    </div>

                                    <div>
                                        <div>
                                            <div>

                                            </div>
                                        </div>
                                        <div>

                                        </div>
                                    </div>

                                    <div>
                                        <div>
                                            <div>

                                            </div>
                                        </div>
                                        <div>

                                        </div>
                                    </div>

                                    <div>
                                        <span>Privacy • Terms • Advertising • Ad Choices • Cookies • More | DailyApp © 2020</span>
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