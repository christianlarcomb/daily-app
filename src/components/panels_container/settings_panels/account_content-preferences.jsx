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

export default function AccountContentPreferences()
{
    return(
        <>
            <CoreContainer>

                <br/>

                <PanelLabel>
                    <div>
                        Content Preferences
                    </div>
                </PanelLabel>

                <SelectionContainer>

                    <div>
                        <div>Add here.</div>
                        <div>
                            Add here.
                        </div>
                    </div>

                    <ToggleButtonGeneral/>

                </SelectionContainer>
                <SelectionContainer>

                    <div>
                        <div>Add here.</div>
                        <div>
                            Add here.
                        </div>
                    </div>

                    <ToggleButtonGeneral/>

                </SelectionContainer>

            </CoreContainer>
        </>
    )
}