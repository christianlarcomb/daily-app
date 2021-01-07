import React from 'react'
import styled from 'styled-components'

import ImageOne from '../../../assets/imgs/sample_photos/2.jpg'
import ImageTwo from '../../../assets/imgs/sample_photos/10.jpg'

import { ReactComponent as EditVector} from '../../../assets/svgs/ui/edit_vector.svg'
import { ReactComponent as SuccessVector } from '../../../assets/svgs/settings_menu/misc/2fa_check.svg'
import { ReactComponent as HashtagVector } from '../../../assets/svgs/settings_menu/misc/hashtag.svg'

/* Styling SVGs */
const EditVectorStyled = styled(EditVector)`
  height: 10px;
  width:  10px;
`

const SuccessVectorStyled = styled(SuccessVector)`
    height: 55px;
`

const HashtagVectorStyled = styled(HashtagVector)`
    height: 20px;
    width: 20px;
`

/* Styling the Containers */
const CoreContainer = styled.div`
  padding-left: 15px;
`

const AccountGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 173px auto 610px;
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
    font-size: 18px;
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
    top: 12px;
    left: 14px;
    color: #121212;
    font-weight: 500;
  }
  
  /* Button Container */
  & > div:nth-child(2)
  {
    position: absolute;
    bottom: 14px;
    left: 14px;
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
    padding: 40px 0 55px 0;
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
    top: 12px;
    left: 14px;
    color: #121212;
    font-weight: 500;
  }
  
  /* Content Container */
  & > div:nth-child(2)
  {
    height: 100%;
    width: 100%;
    padding: 40px 14px 14px 14px;
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

const AccountIDWidget = styled(GeneralEditableWidget)`
  & > div:nth-child(3) > div:nth-child(1)
  {
      padding: 14px;
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
  background-color: #212121 !important;
  
  /* Styling the Text */
  & > div:nth-child(1){ color: white }
  
  /* Contents */
  & > div:nth-child(2)
  {
    display: grid;
    grid-template-rows: 1fr 2px 200px;
    grid-gap: 20px;

    /* Top */
    & > div:nth-child(1)
    {
      //background-color: #242424;
      display: grid;
      grid-gap: 25px;
      grid-template-rows: 80px auto 46px;
      margin: 10px 0;
      
      /* Logo Section */
      & > div:nth-child(1)
      {
        display: grid;
        grid-gap: 5px;
        grid-template-rows: 1fr 18px;
        color: #00FF6F;
        place-content: center;
        place-items: center;
        align-items: center;
        align-content: center;
        font-size: small;
      }
      
      /* Checkbox Section */
      & > div:nth-child(2)
      {
        display: grid;
        grid-template-rows: 1fr 1fr 1fr;
        grid-gap: 14px;
        
        // Individual Check
        & > div
        {
          display: grid;
          width: 273px;
          grid-template-columns: 33px 225px;
          align-content: center;
          grid-gap: 7px;
          margin: 0 auto;
          
          // Check
          & > div:nth-child(1)
          {
            background-color: #00FF6F;
            border-radius: 100%;
            height: 27px;
            width: 27px;
            margin-right: auto;
          }
          
          // Text
          & > div:nth-child(2)
          {
            margin-top: 3px;
            color: #d5d5d5;
            font-size: 14px;
          }
        }
      }
      
      /* Options Buttons Container */
      & > div:nth-child(3)
      {
        display: grid;
        grid-gap: 15px;
        grid-template-columns: 1fr 1fr;
        width: 273px;
        margin: 0 auto;
        
        /* Text Container General */
        & > div
        {
          display: grid;
          place-items: center;
          
          /* Text Wrapper */
          & > div
          {
            color: white;
            font-size: 12px;
            width: 80px;
            text-align: center;
          }
        }
        
        & > div:hover
        {
          cursor: pointer;
        }
        
        /* Individual Button General */
        & > div:nth-child(1)
        {
          background-color: #2C2C2C;
          border-radius: 10px;
        }

        /* Individual Button General */
        & > div:nth-child(2)
        {
          background-color: #F14F4F;
          border-radius: 8px;
        }
      }
    }
    
    /* Divider */
    & > div:nth-child(2)
    {
      background-color: #2D2D2D;
      border-radius: 10px;
      margin: 0 30px;
    }

    /* Bottom */
    & > div:nth-child(3) 
    {
      display: grid;
      grid-gap: 20px;
      grid-template-rows: 60px auto 46px;
      padding-bottom: 10px;
      
      /* Information Section */
      & > div:nth-child(1)
      {
        width: 273px;
        display: grid;
        grid-gap: 4px;
        margin: 0 auto;
        
        /* Title */
        & > div:nth-child(1)
        {
          color: white;
          font-size: 14px;
          text-align: center;
        }
        
        /* Paragraphs */
        & > div:nth-child(2)
        {
          color: #b5b5b5;
          font-size: 12px;
          text-align: center;
        }
      }
      
      /* Number Section */
      & > div:nth-child(2)
      {
        display: grid;
        grid-template-rows: 1fr 20px;
        
        /* hashtag w/ number */
        & > div:nth-child(1)
        {
          display: grid;
          grid-template-columns: auto auto;
          grid-gap: 10px;
          margin: 0 auto;
          place-content: center;
          
          /* SVG Container */
          & > div:nth-child(1)
          {
            margin-top: 2px;
            height: 20px;
            width: 20px;
          }
          
          /* Number Container */
          & > div:nth-child(2)
          {
            color: white;
            font-size: 17px;
          }
        }
        
        /* Text */
        & > div:nth-child(2)
        {
          color: white;
          font-size: 13px;
          height: auto;
          text-align: center;
        }
      }
      
      /* Options Buttons Container */
      & > div:nth-child(3)
      {
        display: grid;
        grid-gap: 15px;
        grid-template-columns: 1fr 1fr;
        width: 273px;
        margin: 0 auto;

        /* Text Container General */
        & > div
        {
          display: grid;
          place-items: center;

          /* Text Wrapper */
          & > div
          {
            font-size: 12px;
            width: 80px;
            text-align: center;
          }
        }

        & > div:hover
        {
          cursor: pointer;
        }

        /* Individual Button */
        & > div:nth-child(1)
        {
          background-color: #00FF6F;
          border-radius: 10px;
          
          & > div
          {
            color: #2c2f33;
          }
        }

        /* Individual Button */
        & > div:nth-child(2)
        {
          background-color: #2C2C2C;
          border-radius: 8px;

          & > div
          {
            color: white;
          }
        }
      }
    }
  }
`

const TerminateAccountWidget = styled(GeneralUnEditableWidget)`
  & > div:nth-child(2)
  {
    display: grid;
    grid-template-rows: auto auto auto;
    grid-gap: 6px;
    
    /* First passage */
    & > div:nth-child(1)
    {
      display: grid;
      grid-template-rows: 20px auto;
      grid-gap: 5px;
      margin: auto 0;
      
      /* Title */
      & > div:nth-child(1)
      {
        font-size: 14px;
      }
      
      & > div:nth-child(2)
      {
        font-size: 12px;
      }
    }

    /* First passage */
    & > div:nth-child(2)
    {
      display: grid;
      grid-template-rows: 20px auto;
      grid-gap: 5px;
      margin: auto 0;

      /* Title */
      & > div:nth-child(1)
      {
        font-size: 14px;
      }

      /* Restrictions */
      & > ul
      {
        font-size: 12px;
      }
    }
  }
`

export default function AccountPanel()
{
    return(
        <>
            <CoreContainer>

                <br/>

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

                        <div>Two-Factor Authentication</div>

                        <div>
                            {/* Top */}
                            <div>
                                {/* Logo w/ Text */}
                                <div>
                                    <SuccessVectorStyled/>
                                    <div>2FA Enabled</div>
                                </div>

                                {/* 2FA CheckList */}
                                <div>
                                    <div>
                                        <div></div>
                                        <div>Increased account security.</div>
                                    </div>
                                    <div>
                                        <div></div>
                                        <div>Prevent suspicious logins.</div>
                                    </div>
                                    <div>
                                        <div></div>
                                        <div>Define account-accessible devices.</div>
                                    </div>
                                </div>

                                {/* Button Selections */}
                                <div>
                                    <div>
                                        <div>View Backup Codes</div>
                                    </div>
                                    <div>
                                        <div>Remove 2FA</div>
                                    </div>
                                </div>
                            </div>

                            {/* Divider */}
                            <div/>

                            {/* Bottom */}
                            <div>
                                {/* SMSA Information */}
                                <div>
                                    <div>
                                        SMS Backup Authentication
                                    </div>
                                    <div>
                                        Add a phone as a backup Two-Factor Authentication method in case you lose your authentication app or backup codes.
                                    </div>
                                </div>

                                {/* SMSA Credentials */}
                                <div>
                                    {/* Hashtag and number */}
                                    <div>
                                        <div>
                                            <HashtagVectorStyled/>
                                        </div>
                                        <div>1 (330) 235-3955</div>
                                    </div>

                                    {/* Current number */}
                                    <div>
                                        Current Number
                                    </div>
                                </div>

                                {/* SMSA Buttons */}
                                <div>
                                    <div>
                                        <div>Enabled SMSA</div>
                                    </div>
                                    <div>
                                        <div>Change Number</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TwoFactAuthWidget>

                    <TerminateAccountWidget>
                        <div>Advanced</div>
                        <div>
                            <div>
                                <div>
                                    DELETING ACCOUNT
                                </div>
                                <div>
                                    Under the circumstances listed below, you may not delete or suspend your account on our platform. This is
                                    important to ensure our users do not abuse our platform and take advantage of unknowing individuals.
                                    Furthermore, it is critical that our users maintain responsibility for their actions. By implementing these
                                    restrictions, we encourage people to remain in good faith and have a sense of integrity.
                                </div>
                            </div>
                            <div>
                                <div>RESTRICTIONS</div>
                                <ul>
                                    <li>You have an order pending.</li>
                                    <li>You have a payment pending.</li>
                                    <li>Your account is banned.</li>
                                    <li>Your account is suspended.</li>
                                    <li>Your account has overwhelmingly customer verified negative reviews.</li>
                                    <li>Your account is under review due to suspicious activity.</li>
                                </ul>
                            </div>
                            <div></div>
                        </div>
                    </TerminateAccountWidget>

                </AccountGrid>

                <br/>
            </CoreContainer>
        </>
    )
}