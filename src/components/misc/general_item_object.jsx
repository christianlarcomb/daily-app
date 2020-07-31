import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

/* Temp Image as placement holder */
import BannerImgOne from '../../assets/imgs/explore/banner_image_1.png'

/* SVG Imports */
import {ReactComponent as CertificateSVG } from '../../assets/svgs/badges/certificate.svg';
import {ReactComponent as StarSVG } from '../../assets/svgs/products/star.svg';
import {render} from "react-dom";

const ItemStyling = styled.div`

      display: grid;
      height: 175px;
      grid-template-columns: 110px 1fr;
      grid-gap: 18px;
      min-width: 300px;
      
      &:hover { cursor: pointer }
      
      /* Image Section */
      & > div:nth-child(1)
      {
        background-color: #1e1e1e;
        border-radius: 20px;
        display: grid;
        place-content: center;
        position: relative;
        overflow: hidden;
        
        & > img
        {
          height: 175px;
        }
      }
      
      /* Content Section */
      & > div:nth-child(2)
      {
        display: grid;
        grid-template-rows: auto 2px 26px 1fr 20px 35px;
        grid-gap: 4px;
        
        /* Text */
        & > div:nth-child(1)
        {
          margin: auto 0;
        
          & > span
          {
            display: block;
            font-size: 14px;
            line-height: 1.3;
          }
        }
        
        /* Badge Container */
        & > div:nth-child(3)
        {
        
          /* Actual Badge Wrapper */
          & > div
          {
            background-color: #1e1e1e;
            border-radius: 30px;
            height: 100%;
            width: 102px;
            
            display: grid;
            grid-template-columns: 30px auto;
            
            font-size: 11px;
            
            /* Badge Icon */
            & > div:nth-child(1)
            {
              display: grid;
              place-content: center;
              & > svg { height: 14px}
            }
            
            /* Text Container */
            & > div:nth-child(2)
            {
              margin: auto 0;
              width: auto;
              & > span:nth-child(1) { color: white }
              & > span:nth-child(2) { color: #6ab26a }
            }
          }
        }
        
        /* Misc. Info Container */
        & > div:nth-child(5)
        {
          display: grid;
          grid-template-columns: auto auto auto;
          align-content: center;
          
          & > div { font-size: 13px; }
          
          & > div:nth-child(1) { color: #6ab26a; font-weight: 700; }
          & > div:nth-child(2) { font-weight: 700 }
        }
        
        /* Pricing Container */
        & > div:nth-child(6)
        {
          display: grid;
          grid-template-columns: auto auto auto 1fr;
          
          & > div:nth-child(1){ padding-right: 2px; font-size: 15px; color: gray; margin-top: 4px}
          & > div:nth-child(2){ padding-right: 2px; font-size: 20px;}
          & > div:nth-child(3){ padding-left: 2px; font-size: 12px; color: gray; margin-top: 9px}
        }
      }
`

const Ratings = styled.div`

  /* Ratings Bar */  
  position: absolute;
  border-radius: 30px;
  height: 26px;
  backdrop-filter: blur(20px);
  opacity: 90%;
  width: 100px;
  background-color: #1e1e1e;
  bottom: 5px;
  left: 5px;
  
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  padding: 0 10px;
  place-items: center;
  
  /* Generic Styling of Stars */
  & > svg 
  {
    height: 12px;
    width: 12px;
    opacity: 95%;
    position: relative;
    
  }
  
  & > svg:nth-child(1)
  {
    
  }
  
  & > svg:nth-of-type(2)
  {
  
  }
  
  & > svg:nth-of-type(3)
  {
  
  }
  
  & > svg:nth-of-type(4)
  {
  
  }
  
  & > svg:nth-of-type(5)
  {
  
  }
    
`

const OneStopOne = styled.stop`
  
`


// TODO: Finish styling the item objects
export default class GeneralItemObject extends React.Component
{

    constructor(props)
    {
        super(props);

        this.state =
        {
            starOne: 0,
            starTwo: 0,
            starThree: 0,
            starFour: 0,
            starFive: 0,
        }
    }

    /* Before the component mounts, calculate the stars percentages */
    componentWillMount()
    {
        /* Getting the rating passed to the ratings object */
        let rating = this.props.rating;

        /* Initializing the ratings array */
        let starValues = [];

        /* Looping through all stars and styling them. */
        for (let i = 0; i < 5; i++)
        {
            /* Defaulting to max value */
            let value_to_be_set = 100;

            /* Checking the rating and handling it accordingly */
            if (rating < 20) { value_to_be_set = (rating / 20) * 100; }
            if (rating <= 0) { value_to_be_set = 0; }

            /* Setting the array of values */
            starValues[i] = value_to_be_set;

            /* Decrementing to the next star */
            rating -= 20;
        }

        /* Setting the state */
        this.setState({
            starOne: starValues[0],
            starTwo: starValues[1],
            starThree: starValues[2],
            starFour: starValues[3],
            starFive: starValues[4]
        })
    }

    /* Returned JSX */
    render()
    {
        return (
            <ItemStyling>

                {/* Images & Ratings */}
                <div>

                    {/* Ratings Container */}
                    <Ratings>

                        <svg height="511pt"
                             viewBox="0 -10 511.99143 511"
                             width="511pt"
                             xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <linearGradient id="starOne">
                                    <stop offset="0%" stopColor="#FCC034"/>
                                    <stop offset={this.state.starOne + `%`} stopColor="#FCC034"/>
                                    <stop offset={this.state.starOne + `%`} stopColor="rgba(0,0,0,0.5)"/>
                                    <stop offset="100%" stopColor="rgba(0,0,0,0.5)"/>
                                </linearGradient>
                            </defs>

                            <path fill="url(#starOne)"
                                  d="m510.652344 185.882812c-3.371094-10.367187-12.566406-17.707031-23.402344-18.6875l-147.796875-13.417968-58.410156-136.75c-4.3125-10.046875-14.125-16.53125-25.046875-16.53125s-20.738282 6.484375-25.023438 16.53125l-58.410156 136.75-147.820312 13.417968c-10.835938 1-20.011719 8.339844-23.402344 18.6875-3.371094 10.367188-.257813 21.738282 7.9375 28.925782l111.722656 97.964844-32.941406 145.085937c-2.410156 10.667969 1.730468 21.699219 10.582031 28.097656 4.757813 3.457031 10.347656 5.183594 15.957031 5.183594 4.820313 0 9.644532-1.28125 13.953125-3.859375l127.445313-76.203125 127.421875 76.203125c9.347656 5.585938 21.101562 5.074219 29.933593-1.324219 8.851563-6.398437 12.992188-17.429687 10.582032-28.097656l-32.941406-145.085937 111.722656-97.964844c8.191406-7.1875 11.308594-18.535156 7.9375-28.925782zm-252.203125 223.722657"
                            />

                        </svg>

                        <svg height="511pt"
                             viewBox="0 -10 511.99143 511"
                             width="511pt"
                             xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <linearGradient id="starTwo">
                                    <stop offset="0%" stopColor="#FCC034"/>
                                    <stop offset={this.state.starTwo + `%`} stopColor="#FCC034"/>
                                    <stop offset={this.state.starTwo + `%`} stopColor="rgba(0,0,0,0.5)"/>
                                    <stop offset="100%" stopColor="rgba(0,0,0,0.5)"/>
                                </linearGradient>
                            </defs>

                            <path fill="url(#starTwo)"
                                  d="m510.652344 185.882812c-3.371094-10.367187-12.566406-17.707031-23.402344-18.6875l-147.796875-13.417968-58.410156-136.75c-4.3125-10.046875-14.125-16.53125-25.046875-16.53125s-20.738282 6.484375-25.023438 16.53125l-58.410156 136.75-147.820312 13.417968c-10.835938 1-20.011719 8.339844-23.402344 18.6875-3.371094 10.367188-.257813 21.738282 7.9375 28.925782l111.722656 97.964844-32.941406 145.085937c-2.410156 10.667969 1.730468 21.699219 10.582031 28.097656 4.757813 3.457031 10.347656 5.183594 15.957031 5.183594 4.820313 0 9.644532-1.28125 13.953125-3.859375l127.445313-76.203125 127.421875 76.203125c9.347656 5.585938 21.101562 5.074219 29.933593-1.324219 8.851563-6.398437 12.992188-17.429687 10.582032-28.097656l-32.941406-145.085937 111.722656-97.964844c8.191406-7.1875 11.308594-18.535156 7.9375-28.925782zm-252.203125 223.722657"/>

                        </svg>

                        <svg height="511pt"
                             viewBox="0 -10 511.99143 511"
                             width="511pt"
                             xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <linearGradient id="starThree">
                                    <stop offset="0%" stopColor="#FCC034"/>
                                    <stop offset={this.state.starThree + `%`} stopColor="#FCC034"/>
                                    <stop offset={this.state.starThree + `%`} stopColor="rgba(0,0,0,0.5)"/>
                                    <stop offset="100%" stopColor="rgba(0,0,0,0.5)"/>
                                </linearGradient>
                            </defs>

                            <path fill="url(#starThree)"
                                  d="m510.652344 185.882812c-3.371094-10.367187-12.566406-17.707031-23.402344-18.6875l-147.796875-13.417968-58.410156-136.75c-4.3125-10.046875-14.125-16.53125-25.046875-16.53125s-20.738282 6.484375-25.023438 16.53125l-58.410156 136.75-147.820312 13.417968c-10.835938 1-20.011719 8.339844-23.402344 18.6875-3.371094 10.367188-.257813 21.738282 7.9375 28.925782l111.722656 97.964844-32.941406 145.085937c-2.410156 10.667969 1.730468 21.699219 10.582031 28.097656 4.757813 3.457031 10.347656 5.183594 15.957031 5.183594 4.820313 0 9.644532-1.28125 13.953125-3.859375l127.445313-76.203125 127.421875 76.203125c9.347656 5.585938 21.101562 5.074219 29.933593-1.324219 8.851563-6.398437 12.992188-17.429687 10.582032-28.097656l-32.941406-145.085937 111.722656-97.964844c8.191406-7.1875 11.308594-18.535156 7.9375-28.925782zm-252.203125 223.722657"/>

                        </svg>

                        <svg height="511pt"
                             viewBox="0 -10 511.99143 511"
                             width="511pt"
                             xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <linearGradient id="starFour">
                                    <stop offset="0%" stopColor="#FCC034"/>
                                    <stop offset={this.state.starFour + `%`} stopColor="#FCC034"/>
                                    <stop offset={this.state.starFour + `%`} stopColor="rgba(0,0,0,0.5)"/>
                                    <stop offset="100%" stopColor="rgba(0,0,0,0.5)"/>
                                </linearGradient>
                            </defs>

                            <path fill="url(#starFour)"
                                  d="m510.652344 185.882812c-3.371094-10.367187-12.566406-17.707031-23.402344-18.6875l-147.796875-13.417968-58.410156-136.75c-4.3125-10.046875-14.125-16.53125-25.046875-16.53125s-20.738282 6.484375-25.023438 16.53125l-58.410156 136.75-147.820312 13.417968c-10.835938 1-20.011719 8.339844-23.402344 18.6875-3.371094 10.367188-.257813 21.738282 7.9375 28.925782l111.722656 97.964844-32.941406 145.085937c-2.410156 10.667969 1.730468 21.699219 10.582031 28.097656 4.757813 3.457031 10.347656 5.183594 15.957031 5.183594 4.820313 0 9.644532-1.28125 13.953125-3.859375l127.445313-76.203125 127.421875 76.203125c9.347656 5.585938 21.101562 5.074219 29.933593-1.324219 8.851563-6.398437 12.992188-17.429687 10.582032-28.097656l-32.941406-145.085937 111.722656-97.964844c8.191406-7.1875 11.308594-18.535156 7.9375-28.925782zm-252.203125 223.722657"/>

                        </svg>

                        <svg height="511pt"
                             viewBox="0 -10 511.99143 511"
                             width="511pt"
                             xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <linearGradient id="starFive">
                                    <stop offset="0%" stopColor="#FCC034"/>
                                    <stop offset={this.state.starFive + `%`} stopColor="#FCC034"/>
                                    <stop offset={this.state.starFive + `%`} stopColor="rgba(0,0,0,0.5)"/>
                                    <stop offset="100%" stopColor="rgba(0,0,0,0.5)"/>
                                </linearGradient>
                            </defs>

                            <path fill="url(#starFive)"
                                  d="m510.652344 185.882812c-3.371094-10.367187-12.566406-17.707031-23.402344-18.6875l-147.796875-13.417968-58.410156-136.75c-4.3125-10.046875-14.125-16.53125-25.046875-16.53125s-20.738282 6.484375-25.023438 16.53125l-58.410156 136.75-147.820312 13.417968c-10.835938 1-20.011719 8.339844-23.402344 18.6875-3.371094 10.367188-.257813 21.738282 7.9375 28.925782l111.722656 97.964844-32.941406 145.085937c-2.410156 10.667969 1.730468 21.699219 10.582031 28.097656 4.757813 3.457031 10.347656 5.183594 15.957031 5.183594 4.820313 0 9.644532-1.28125 13.953125-3.859375l127.445313-76.203125 127.421875 76.203125c9.347656 5.585938 21.101562 5.074219 29.933593-1.324219 8.851563-6.398437 12.992188-17.429687 10.582032-28.097656l-32.941406-145.085937 111.722656-97.964844c8.191406-7.1875 11.308594-18.535156 7.9375-28.925782zm-252.203125 223.722657"/>

                        </svg>

                    </Ratings>

                    <img src={BannerImgOne} alt='Placement Image'/>
                </div>

                {/* Content */}
                <div>
                    {/* Item Message */}
                    <div>
                    <span>
                        {this.props.title}
                    </span>
                    </div>

                    {/* Spacer */}
                    <div/>

                    {/* Badges Container */}
                    <div>
                        {/* Badge 1 */}
                        <div>
                            <div>
                                <CertificateSVG/>
                            </div>
                            <div>
                                <span>Daily</span>&nbsp;<span>Choice</span>
                            </div>
                        </div>
                    </div>

                    {/* Spacer */}
                    <div/>

                    {/* Misc. Info */}
                    <div>
                        <div>Select</div>
                        <div>No Fee</div>
                        <div>Mon, Jul 10</div>
                    </div>

                    {/* Pricing */}
                    <div>
                        <div>$</div>
                        <div>{this.props.price}</div>
                        <div>per hour</div>
                    </div>
                </div>
            </ItemStyling>
        )
    }
}