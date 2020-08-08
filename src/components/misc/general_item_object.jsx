import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import StarRating from "./star_rating";

/* SVG Imports */
import {ReactComponent as CertificateSVG } from '../../assets/svgs/badges/certificate.svg';
import {ReactComponent as ReportSVG} from '../../assets/svgs/products/cancel.svg';
import {ReactComponent as WishlistSVG} from '../../assets/svgs/products/wishlist.svg';
import {ReactComponent as HeartSVG} from '../../assets/svgs/products/heart.svg';
import {ReactComponent as ViewItemSVG} from '../../assets/svgs/products/send.svg';


const StyledLinkButtons = styled(Link)`

    &:link{ text-decoration: none }
    &:visited{ text-decoration: none }
    &:hover{ text-decoration: none }
    &:active{ text-decoration: none }
    
    /* Styling the SVGs */
    & > div > svg
    {
      height: 14px;
      fill: #9C9C9C;
    }
    
    & > div > svg:hover { fill: white; }
    
    & > div
    {
      display: grid;
      grid-template-columns: 20px auto;
      grid-gap: 2px;
      place-items: center;
      font-size: 10px;
      color: #9c9c9c;
    }
    
    & > div:hover
    {
        cursor: pointer;
        & > svg { fill: white; }
        & > div { color: white; }
    }
`

const ItemStyling = styled.div`

  display: grid;
  height: 175px;
  grid-template-columns: 110px 1fr;
  grid-gap: 18px;
  min-width: 300px;
  position: relative;
  
  & > div:nth-child(1):hover
  {
    opacity: 100%;
  }
  
  /* Image Section */
  & > div:nth-child(2)
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
    
    /* Star Rating Container */
    & > div:nth-child(1)
    {
      padding: 0 10px;
      height: 30px;
      width: calc(100% - 10px);
      position: absolute;
      bottom: 5px;
      left: 5px;
      backdrop-filter: blur(20px) saturate(300%);
      background-color: rgba(0,0,0,0.8);
      border-radius: 50px;
    }
  }
  
  /* Content Section */
  & > div:nth-child(3)
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

const Overlay = styled.div`

  position: absolute;
  width: 100%;
  height: 175px;
  background-color: rgba(0,0,0,0.8);
  backdrop-filter: blur(30px) saturate(400%);
  z-index: 20;
  border-radius: 20px;
  /* Change this to work on the panels */
  opacity: 0;
  transition: opacity ease-in-out 0.05s;
  display: grid;
  
  grid-template-rows: 1fr 45px 16px 15px 7px 16px 16px 12px 7px 22px 1fr;
  
  /* General styles */
  & > div
  {
    color:white;
  }
  
  /* Styling the brand logo */
  & > div:nth-child(2)
  {
    height: 42px;
    width: 42px;
    background-color: white;
    margin: auto auto;
    border-radius: 15px;
    display: grid;
    place-content: center;
    overflow: hidden;
    
    & > img { height: 42px; }
  }
  
  /* Brand Name */
  & > div:nth-child(3)
  {
    font-size: 13px;
    padding-top: 2px;
    text-align: center;
  }
  
  /* Brand Tag */
  & > div:nth-child(4)
  {
    color: gray;
    font-size: 12px;
    text-align: center;
  }
  
  /* Ratings Text */
  & > div:nth-child(6)
  {
    font-size: 12px;
    text-align: center;
    font-weight: 500;
  }
  
  /* Company Ratings Container Styling */
  & > div:nth-child(7)
  {
    margin: 0 auto;
    width: 76px;
  }
  
  /* Reviews Text */
  & > div:nth-child(8)
  {
    font-size: 10px;
    text-align: center;
  }
  
  /* Buttons */
  & > div:nth-child(10)
  {
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: 22px;
    font-size: 11px;
    grid-gap: 15px;
    place-items: center;
    width: 245px;
    margin: 0 auto;
  }
`

export default class GeneralItemObject extends React.Component
{

    handleBadge = () =>
    {
        /* Daily Choice */
        if(this.props.badge === 1)
        {
            return(
                <div>
                    <div>
                        <CertificateSVG/>
                    </div>
                    <div>
                        <span>Daily</span>&nbsp;<span>Choice</span>
                    </div>
                </div>
            )

        /* Top Rated */
        } else if(this.props.badge === 2)
        {
            return(
                <div>
                    <div>
                        <CertificateSVG/>
                    </div>
                    <div>
                        <span>Top</span>&nbsp;<span>Rated</span>
                    </div>
                </div>
            )
        }
    }

    handleSelect = () =>
    {
        if(this.props.select === true)
        {
            return(
                <div>Select</div>
            )
        } else {
            return(
                <div/>
            )
        }
    }

    handleReviews = () =>
    {
        let reviewCount = this.props.brand_review_count
        let reviewCountString = reviewCount.toString()
        let slices = [];

        let completedString = '';

        let sliceCount = 0;
        /* Handles slicing the numbers */
        for(let i = reviewCountString.length; i > 0; i -= 3)
        {
            /* Trying to store the slices in reverse order */
            try
            {
                slices[sliceCount] = reviewCountString.substring(i-3, i)
            } catch (e)
            {
                console.log('Slice of 3 too large')

                try
                {
                    slices[sliceCount] = reviewCountString.substring(i-2, i)
                } catch (e)
                {
                    console.log('Slice of 2 too large')

                    try
                    {
                        slices[sliceCount] = reviewCountString.substring(i-1, i)
                    } catch (e)
                    {
                        slices[sliceCount] = reviewCountString.substring(i, i)
                        console.log('Slice of 1 too large?? What do??')
                    }
                }
            }

            //console.log(sliceCount)
            sliceCount++;
        }

        /* Creating the string */
        for(let i = slices.length; i > 0; i--) { completedString += slices[i-1] + (i-1 !== 0 ? "," : "") }

        return completedString
    }

    /* Returned JSX */
    render()
    {
        return (

            <>
                <ItemStyling>

                    {/* Overlay */}
                    <Overlay>
                        {/* Spacer */}
                        <div/>

                        {/* Icon */}
                        <div>
                            <img src={this.props.images[1]} alt='Placement Image'/>
                        </div>

                        {/* Brand Name */}
                        <div>
                            {this.props.brand_name}
                        </div>

                        {/* Brand Tag */}
                        <div>
                            @{this.props.brand_tag}
                        </div>

                        {/* Spacer */}
                        <div/>

                        {/* Ratings Text */}
                        <div>
                            Ratings
                        </div>

                        {/* Ratings Stars */}
                        <div>
                            {/* Ratings Container */}
                            <StarRating rating={this.props.brand_rating}/>
                        </div>

                        {/* Reviews Text */}
                        <div>
                            {this.handleReviews()} Brand Reviews
                        </div>

                        {/* Spacer */}
                        <div/>

                        {/* Buttons */}
                        {/* TODO: Need to implement Links to direct traffic to individual  */}
                        <div>

                            <StyledLinkButtons to={''}>
                                <div>
                                    <ReportSVG/>
                                    <div>Report</div>
                                </div>
                            </StyledLinkButtons>

                            <StyledLinkButtons to={''}>
                                <div>
                                    <WishlistSVG/>
                                    <div>Wishlist</div>
                                </div>
                            </StyledLinkButtons>

                            <StyledLinkButtons to={''}>
                                <div>
                                    <HeartSVG/>
                                    <div>Like</div>
                                </div>
                            </StyledLinkButtons>

                            <StyledLinkButtons to={location => `${location.pathname}?puid=${this.props.puid}`}>
                                <div>
                                    <ViewItemSVG/>
                                    <div>View</div>
                                </div>
                            </StyledLinkButtons>

                        </div>

                        {/* Spacer */}
                        <div/>

                    </Overlay>

                    {/* Images & Ratings */}
                    <div>

                        {/* Star Ratings Container */}
                        <div>
                            <StarRating rating={this.props.product_rating}/>
                        </div>

                        {/* Images for the items */}
                        <img src={this.props.images[0]} alt='Placement Image'/>
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
                            {/* Rendering the badges */}
                            { this.handleBadge() }
                        </div>

                        {/* Spacer */}
                        <div/>

                        {/* Misc. Info */}
                        <div>
                            { this.handleSelect() }
                            <div>{ this.props.fee ? "" : "No Fee"}</div>
                            <div>{this.props.shipping}</div>
                        </div>

                        {/* Pricing */}
                        <div>
                            <div>$</div>
                            <div>{this.props.price}</div>
                            <div>{this.props.rate}</div>
                        </div>
                    </div>
                </ItemStyling>
            </>
        )
    }
}