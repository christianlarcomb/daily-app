import React from 'react'
import styled from "styled-components";

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
  align-items: center;
  grid-gap: 60px;
  
  & > div:nth-child(1)
  {
    font-size: 14px;
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

export default function AccountPrivacy()
{
    return(
        <CoreContainer>

            <br/>

            <PanelLabel>
                <div>
                    Your Activity
                </div>
            </PanelLabel>

            <SelectionContainer>
                <div>Who can see your job or item posts?</div>
                <SelectionBox>

                </SelectionBox>
            </SelectionContainer>

            <SelectionContainer>
                <div>Who can look you up using the email address you provided?</div>
                <SelectionBox>

                </SelectionBox>
            </SelectionContainer>

            <SelectionContainer>
                <div>Who can look you up using the phone number you provided?</div>
                <SelectionBox>

                </SelectionBox>
            </SelectionContainer>

            <SelectionContainer>
                <div>Who can look you up using the username you provided?</div>
                <SelectionBox>

                </SelectionBox>
            </SelectionContainer>

            <SelectionContainer>
                <div>Do you want search engines outside of Daily to link your profile?</div>
                <SelectionBox>

                </SelectionBox>
            </SelectionContainer>

            <br/>

            <PanelLabel>
                <div>
                    Account or Shop Access
                </div>
            </PanelLabel>

            <SelectionContainer>
                <div>Who can send you a friend request?</div>
                <SelectionBox></SelectionBox>
            </SelectionContainer>

            <SelectionContainer>
                <div>Who can follow you?</div>
                <SelectionBox></SelectionBox>
            </SelectionContainer>

            <SelectionContainer>
                <div>Who can follow your shop?</div>
                <SelectionBox></SelectionBox>
            </SelectionContainer>

        </CoreContainer>
    )
}