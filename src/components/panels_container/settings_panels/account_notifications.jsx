import React from "react";
import styled from "styled-components";

import ToggleButtonGeneral from "../../misc/toggles/ToggleButton-General";

const CoreContainer = styled.div`
  width: 550px;
  padding-left: 15px;
`

const PanelLabel = styled.div`
  margin: 20px 0;
  width: 550px;

  & > div:nth-child(1)
  {
    font-weight: 600;
    color: #121212;
    font-size: 18px;
  }
`

const SelectionContainer = styled.div`
  margin: 20px 0;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 60px;
  
  & > div:nth-child(1)
  {
    display: grid;
    grid-gap: 2px;
    color: #616161;
    
    & > div:nth-child(1)
    {
      font-size: 16px;
      font-weight: 500;
    }

    & > div:nth-child(2)
    {
      font-size: 14px;
    }
  }
`

const SelectionBox = styled.div`
  width: 80px;
  background-color: #2c2f33;
  height: 36px;
  border-radius: 8px;
  
  &:hover
  {
    cursor: pointer;
  }
`

export default function AccountNotifications()
{
    return(
        <>
            <CoreContainer>

                <br/>

                <PanelLabel>
                    <div>
                        Notification Settings
                    </div>
                </PanelLabel>

                <SelectionContainer>

                    <div>
                        <div>Enable Desktop Notifications</div>
                        <div>
                            If you're interested in only specific event notifications, inside the event will be
                            a notification toggle. Once toggled on, it will notify you as configured below.
                        </div>
                    </div>

                    <ToggleButtonGeneral/>

                </SelectionContainer>
                <SelectionContainer>

                    <div>
                        <div>Enable Taskbar Updates</div>
                        <div>
                            Changes the color of the application on the taskbar once an event is live.
                        </div>
                    </div>

                    <ToggleButtonGeneral/>

                </SelectionContainer>
                <SelectionContainer>

                    <div>
                        <div>Enable Notification Badges</div>
                        <div>
                            Displays a red badge over the notification menu on the sidebar.
                        </div>
                    </div>

                    <ToggleButtonGeneral/>

                </SelectionContainer>

                <br/>

                <PanelLabel>
                    <div>
                        Notification Preferences
                    </div>
                </PanelLabel>

                <SelectionContainer>

                    <div>
                        <div>Messages</div>
                        <div>
                            Get notified when you or your shop receives a message.
                        </div>
                    </div>

                    <ToggleButtonGeneral/>

                </SelectionContainer>
                <SelectionContainer>

                    <div>
                        <div>Item or Service Sales</div>
                        <div>
                            Get notified when you or your shop sells an item or service.
                        </div>
                    </div>

                    <ToggleButtonGeneral/>

                </SelectionContainer>
                <SelectionContainer>

                    <div>
                        <div>Sales Records</div>
                        <div>
                            When you or your shop hits a sales record.
                        </div>
                    </div>

                    <ToggleButtonGeneral/>

                </SelectionContainer>
                <SelectionContainer>

                    <div>
                        <div>Order Due Date</div>
                        <div>
                            Get notified when you or your shop has an upcoming due date.
                        </div>
                    </div>

                    <ToggleButtonGeneral/>

                </SelectionContainer>
                <SelectionContainer>

                    <div>
                        <div>New Follower</div>
                        <div>
                            Get notified when you or your shop has a new follower.
                        </div>
                    </div>

                    <ToggleButtonGeneral/>

                </SelectionContainer>
                <SelectionContainer>

                    <div>
                        <div>New Subscriber</div>
                        <div>
                            Get notified when you or your shop has a new subscriber.
                        </div>
                    </div>

                    <ToggleButtonGeneral/>

                </SelectionContainer>
                <SelectionContainer>

                    <div>
                        <div>Events</div>
                        <div>
                            Get notified for an event that you follow goes live.
                        </div>
                    </div>

                    <ToggleButtonGeneral/>

                </SelectionContainer>
                <SelectionContainer>

                    <div>
                        <div>New Item or Services</div>
                        <div>
                            Get notified when a person or shop you follow releases a new product or service.
                        </div>
                    </div>

                    <ToggleButtonGeneral/>

                </SelectionContainer>
            </CoreContainer>
        </>
    )
}