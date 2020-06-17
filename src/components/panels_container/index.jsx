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
    height: 80%;
    width: 100%;
    border-radius: 0 10px 10px 0;
    display: grid;
    place-content: center;
    background-color: #6ab26a;
  }
  
  & > div:nth-child(1) > svg
  {
    height: 28px;
    width: 28px;
    fill: var(--lgt-1);
    padding-right: 6px;
  }
`

const MenuBarFloat = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  place-items: center;
`

const MenuBar = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  place-items: center;
  position: relative;
  height: 385px;
  width: 100%;
  
  & > div 
  {
    height: 90%;
    width: 90%;
    border-radius: 10px;
    display: grid;
    place-items: center;
    transition: background-color 0.05s ease;
  }
  
  & > div:hover
  {
    background-color: var(--lgt-2);
    cursor: pointer;
  }
  
  & > div > svg
  {
    height: 26px;
    fill: var(--lgt-3);
  }
  
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
function PanelsContainer()
{
    return(
        <>
            <PrimaryContainer>

                <PrimarySidebar>

                    <div>
                        <MugLogoSvg/>
                    </div>

                    <MenuBarFloat>
                        <MenuBar>
                            <div onClick={() => { return <Redirect to="/panels/explore"/> }}>
                                <ExploreSvg/>
                            </div>
                            <div onClick={() => { return <Redirect to="/panels/shop"/> }}>
                                <PriceTagSvg/>
                            </div>
                            <div onClick={() => { return <Redirect to="/panels/chat"/> }}>
                                <ChatSvg/>
                            </div>
                        </MenuBar>
                    </MenuBarFloat>

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

export default PanelsContainer