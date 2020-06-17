import React from "react";
import styled from "styled-components";
import {Route, Redirect} from "react-router-dom";

import { ReactComponent as MugLogoSvg } from '../../assets/svgs/daily/daily_mug.svg';

import { ReactComponent as ExploreSvg } from '../../assets/svgs/menu_bar/explore.svg';
import { ReactComponent as PriceTagSvg } from '../../assets/svgs/menu_bar/price-tag.svg';
import { ReactComponent as ChatSvg } from '../../assets/svgs/menu_bar/chat-bubbles.svg';
import { ReactComponent as NotificationBellSvg } from '../../assets/svgs/menu_bar/notification-bell.svg';
import { ReactComponent as SettingsSvg } from '../../assets/svgs/menu_bar/settings-cog.svg';

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
    background-color: var(--lgt-2);
    border-radius: 100%;
    height: 42px;
    width: 42px;
    display: grid;
    place-items: center;
  }
  
  & > div:hover
  {
    transition: background-color 0.05s ease;
    background-color: #dfe6e3;
    cursor: pointer;
  }
  
  & > div:nth-child(1) > svg:nth-child(1)
  {
    transform: rotate(25deg);
  }
  
  & > div > svg
  {
    fill: var(--lgt-3);
    height: 20px;
  }
`

/* TODO: Complete necessary panels for back-end development */
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
            misc_enabled:
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

                    <PrimarySidebar>

                        <div>
                            <MugLogoSvg/>
                        </div>

                        <MenuBarContainer>
                            <MenuBarWrapper selected={this.state.panel_selected}>

                                {/* Explore Highlight */}

                                <div>
                                    <div/>

                                    <div onClick={() => {this.setState({panel_selected: {explore: true, shop: false, chat: false}})}}>

                                        { this.state.panel_selected.explore ? <Redirect to="/panels/explore"/> : <></> }
                                        <ExploreSvg/>
                                    </div>

                                </div>

                                {/* Shop Highlight */}
                                <div>
                                    <div/>

                                    <div onClick={() => {this.setState({panel_selected: {explore: false, shop: true, chat: false}})}}>

                                        { this.state.panel_selected.shop ? <Redirect to="/panels/shop"/> : <></> }
                                        <PriceTagSvg/>
                                    </div>
                                </div>

                                {/* Chat Highlight */}
                                <div>
                                    <div/>

                                    <div onClick={() => {this.setState({panel_selected: {explore: false, shop: false, chat: true}})}}>

                                        { this.state.panel_selected.chat ? <Redirect to="/panels/chat"/> : <></> }
                                        <ChatSvg/>
                                    </div>

                                </div>

                            </MenuBarWrapper>
                        </MenuBarContainer>

                        <MiscBar>
                            <div>
                                <NotificationBellSvg/>
                            </div>
                            <div>
                                <SettingsSvg/>
                            </div>
                            <div>

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