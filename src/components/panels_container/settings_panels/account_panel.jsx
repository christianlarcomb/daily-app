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
  grid-template-rows: 173px auto 600px;
  grid-gap: 15px;
  height: auto;
  width: 550px;
  
  & > div
  {
    border-radius: 20px;
    background-color: #EBEBEB;
    position: relative;
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

const GeneralEditableWidget = styled.div`
  display: grid;
  place-items: center;
  position: relative;
  overflow: hidden;
  
  /* Title Container */
  & > div:nth-child(1)
  {
    position: absolute;
    top: 10px;
    left: 12px;
    color: #121212;
    font-weight: 500;
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
    border-radius: 10px;
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
  
  /* Content Container */
  & > div:nth-child(3)
  {
    padding: 35px 0 55px 0;
    height: 100%;
    width: 100%;
  }
  
  & > img { height: 100%; }
`

const GeneralUnEditableWidget = styled.div`
  display: grid;
  place-items: center;
  position: relative;
  overflow: hidden;
  
  /* Title Container */
  & > div:nth-child(1)
  {
    position: absolute;
    top: 10px;
    left: 12px;
    color: #121212;
    font-weight: 500;
  }
  
  /* Content Container */
  & > div:nth-child(2)
  {
    padding-top: 35px;
    height: 100%;
    width: 100%;
  }
`

/* Styling the individual widgets */
const ProfileWidget = styled(GeneralEditableWidget)`
  & > div:nth-child(1)
  {
    color: white;
    text-shadow: 0px 2px 4px rgba(0,0,0,0.6);
  }
`

const BannerWidget = styled(GeneralEditableWidget)`
  & > div:nth-child(1)
  {
    color: white;
    text-shadow: 0px 2px 4px rgba(0,0,0,0.6);
  }
  
  & > img { width: 100%; }
`
// This is a comment....
const AccountIDWidget = styled(GeneralEditableWidget)`
  & > div:nth-child(3) > div:nth-child(1)
  {
      padding: 12px;
      display: grid;
      grid-template-rows: repeat(6, 1fr);
      grid-gap: 15px;
      height: 100%;
      width: 100%;
      
      /* First Row */
      & > div:nth-child(1),
      & > div:nth-child(3),
      & > div:nth-child(4),
      & > div:nth-child(5),
      & > div:nth-child(6)
      {
        display: grid;
        grid-template-rows: repeat(2, 1fr);
        font-size: 14px;
        
        & > div:nth-child(1)
        {
          font-weight: 500;
        }
      }
      
      /* Second Row */
      & > div:nth-child(2)
      {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 10px;
        
        & > div
        {
          display: grid;
          grid-template-rows: repeat(2, 1fr);
          
          font-size: 14px;
          
          & > div:nth-child(1)
          {
            font-weight: 500;
          }
        }
      }
  }
`

const TwoFactAuthWidget = styled(GeneralUnEditableWidget)`
  background-color: #121212 !important;
  
  /* Styling the Text */
  & > div:nth-child(1){ color: white }
  
  /* Contents */
  & > div:nth-child(2)
  {
    display: grid;
    grid-template-rows: 1fr 2px 1fr;
    grid-gap: 30px;
    
    & > div:nth-child(2)
    {
      background-color: #242424;
      border-radius: 10px;
      margin: 0 30px;
    }
  }
`

const TerminateAccountWidget = styled(GeneralUnEditableWidget)`
  
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

                    <AccountIDWidget>
                        {/* Name */}
                        <div>
                            Account ID
                        </div>

                        {/* Edit Button */}
                        <div>
                            <div>
                                <EditVectorStyled/>
                                <div>Edit</div>
                            </div>
                        </div>

                        {/* Widget Contents */}
                        <div>
                            <div>
                                <div>
                                    <div>Email</div>
                                    <div>christianlarcomb@gmail.com</div>
                                </div>

                                <div>
                                    <div>
                                        <div>First Name</div>
                                        <div>Christian</div>
                                    </div>
                                    <div>
                                        <div>Middle Name</div>
                                        <div>Chase</div>
                                    </div>
                                    <div>
                                        <div>Last Name</div>
                                        <div>Larcomb</div>
                                    </div>
                                </div>

                                <div>
                                    <div>Username</div>
                                    <div>clarcomb</div>
                                </div>

                                <div>
                                    <div>Password</div>
                                    <div>lololololol</div>
                                </div>

                                <div>
                                    <div>Birthday</div>
                                    <div>August 5th, 1997</div>
                                </div>

                                <div>
                                    <div>Gender</div>
                                    <div>Male</div>
                                </div>
                            </div>
                        </div>
                    </AccountIDWidget>

                    <TwoFactAuthWidget>
                        <div>
                            Two-Factor Authentication
                        </div>

                        <div>
                            <div>

                            </div>

                            <div/>

                            <div>

                            </div>
                        </div>
                    </TwoFactAuthWidget>

                    <TerminateAccountWidget>
                        <div>Advanced</div>
                        <div></div>
                    </TerminateAccountWidget>
                </AccountGrid>

                <br/>
            </AccountContainer>
        </>
    )
}

export default AccountPanel