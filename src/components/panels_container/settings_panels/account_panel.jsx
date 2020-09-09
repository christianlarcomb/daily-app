import React from 'react'
import styled from 'styled-components'

import ImageOne from '../../../assets/imgs/sample_photos/2.jpg'
import ImageTwo from '../../../assets/imgs/sample_photos/10.jpg'

import { ReactComponent as EditVector} from '../../../assets/svgs/ui/edit_vector.svg';

const EditVectorStyled = styled(EditVector)`
  height: 10px;
  width:  10px;
`

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
    background-color: #EBEBEB;
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

/* Styling the individual widgets */
const ProfileWidget = styled.div`
  display: grid;
  place-items: center;
  position: relative;
  overflow: hidden;
  
  & > div:nth-child(1)
  {
    position: absolute;
    top: 10px;
    left: 12px;
    color: white;
    font-weight: 500;
    text-shadow: 0px 2px 4px rgba(0,0,0,0.6);
  }
  
  /* Button Container */
  & > div:nth-child(2)
  {
    position: absolute;
    bottom: 12px;
    left: 12px;
    background-color: #1E1E1F;
    height: 34px;
    width: 60px;
    border-radius: 8px;
    display: grid;
    place-content: center;
    
    /* Button Wrapper */
    & > div:nth-child(1)
    {
      display: grid;
      grid-template-columns: auto auto;
      place-items: center;
      grid-gap: 8px;
        
      & > div:nth-child(2)
      {
        color: white;
        font-size: 12px;
      }
    }
    
    &:hover
    {
      cursor: pointer;
    }
  }
  
  & > img { height: 100%; }
`

const BannerWidget = styled.div`
  display: grid;
  place-items: center;
  position: relative;
  overflow: hidden;
  
  & > div:nth-child(1)
  {
    position: absolute;
    top: 10px;
    left: 12px;
    color: white;
    font-weight: 500;
    text-shadow: 0px 2px 4px rgba(0,0,0,0.6);
  }
  
  /* Button Container */
  & > div:nth-child(2)
  {
    position: absolute;
    bottom: 12px;
    left: 12px;
    background-color: #1E1E1F;
    height: 34px;
    width: 60px;
    border-radius: 8px;
    display: grid;
    place-content: center;
    
    /* Button Wrapper */
    & > div:nth-child(1)
    {
      display: grid;
      grid-template-columns: auto auto;
      place-items: center;
      grid-gap: 8px;
        
      & > div:nth-child(2)
      {
        color: white;
        font-size: 12px;
      }
    }
    
    &:hover
    {
      cursor: pointer;
    }
  }
  
  & > img { width: 100%; }
`

const AccountDetailsWidget = styled.div`

`

const TwoFactAuthWidget = styled.div`

`
const TerminateAccountWidget = styled.div`

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
                    <ProfileWidget>
                        <div>
                            Profile Image
                        </div>

                        <div>
                            <div>
                                <EditVectorStyled/>
                                <div>Edit</div>
                            </div>
                        </div>

                        <img src={ImageOne} alt='' />
                    </ProfileWidget>
                    <BannerWidget>
                        <div>
                            Banner Image
                        </div>

                        <div>
                            <div>
                                <EditVectorStyled/>
                                <div>Edit</div>
                            </div>
                        </div>

                        <img src={ImageTwo} alt='' />
                    </BannerWidget>
                    <AccountDetailsWidget>

                    </AccountDetailsWidget>
                    <TwoFactAuthWidget>

                    </TwoFactAuthWidget>
                    <TerminateAccountWidget>

                    </TerminateAccountWidget>
                </AccountGrid>

                <br/>
            </AccountContainer>
        </>
    )
}

export default AccountPanel