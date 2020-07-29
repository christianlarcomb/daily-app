import React, { useState } from 'react'
import styled from 'styled-components'

/* Temp Image as placement holder */
import BannerImgOne from '../../assets/imgs/explore/banner_image_1.png'

/* SVG Imports */
import {ReactComponent as CertificateSVG } from '../../assets/svgs/badges/certificate.svg';
import {ReactComponent as StarSVG } from '../../assets/svgs/products/star.svg';

const ItemStyling = styled.div`

      display: grid;
      height: 175px;
      grid-template-columns: 110px 1fr;
      grid-gap: 18px;
      min-width: 300px;
      
      /* Image Section */
      & > div:nth-child(1)
      {
        background-color: #1e1e1e;
        border-radius: 20px;
        display: grid;
        place-content: center;
        position: relative;
        overflow: hidden;
        
        /* Ratings Bar */
        & > div:nth-of-type(1)
        {
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
          
          & > svg 
          {
            height: 12px;
            width: 12px;
            background-color: #1e1e1e;
            opacity: 95%;
            
          }
        }
        
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

// TODO: Finish styling the item objects
function GeneralItemObject(props)
{
    // TODO: Finishing implementing the rating system and star highlighting
    let [rating, setRating] = useState(0)
    
    return(
        <ItemStyling>
            {/* Images & Ratings */}
            <div>
                {/* Ratings Container */}
                <div>
                    <StarSVG>
                        {/* Highlighting */}
                        <div/>
                    </StarSVG>
                    <StarSVG>
                        {/* Highlighting */}
                        <div/>
                    </StarSVG>
                    <StarSVG>
                        {/* Highlighting */}
                        <div/>
                    </StarSVG>
                    <StarSVG>
                        {/* Highlighting */}
                        <div/>
                    </StarSVG>
                    <StarSVG>
                        {/* Highlighting */}
                        <div/>
                    </StarSVG>
                </div>
                <img src={BannerImgOne} alt='Placement Image'/>
            </div>

            {/* Content */}
            <div>
                {/* Item Message */}
                <div>
                    <span>
                        {props.title}
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
                    <div>{props.price}</div>
                    <div>per hour</div>
                </div>
            </div>
        </ItemStyling>
    )
}

export default GeneralItemObject