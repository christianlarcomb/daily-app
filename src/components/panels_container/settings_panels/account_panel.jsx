import React from 'react'
import styled from 'styled-components'

const AccountContainer = styled.div`
  padding-left: 15px;
`

const AccountGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 173px 400px 600px;
  grid-gap: 15px;
  height: auto;
  width: 550px;
  
  & > div
  {
    border-radius: 20px;
    background-color: #2c2f33;
  }
  
  & > div:nth-child(2)
  {
    grid-column: 2/4;
  }
  
  & > div:nth-child(3)
  {
    grid-column: 1/4;
    grid-row: 2;
  }
  
  & > div:nth-child(4)
  {
    grid-column: 1/3;
    grid-row: 3;
  }
`

const PanelLabel = styled.div`
  margin: 20px 0;
  width: 550px;
  
  & > div:nth-child(1)
  {
    font-weight: 600;
    color: #121212;
  }
`

function AccountPanel()
{
    return(
        <>
            <AccountContainer>
                <PanelLabel>
                    <div>
                        My Account
                    </div>
                </PanelLabel>

                <AccountGrid>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </AccountGrid>

                <br/>
            </AccountContainer>
        </>
    )
}

export default AccountPanel