import React, {useState, useRef, useEffect, useLayoutEffect} from 'react'
import styled from 'styled-components'

/* SVGs */
import { ReactComponent as NextArrowSVG } from '../../assets/svgs/scroll_components/next.svg';
import { ReactComponent as QuoteSVG } from '../../assets/svgs/scroll_components/quote-solid.svg';

const PrimaryContainer = styled.div`
  height: 100%;
  position: relative;
`

const ScrollContainer = styled.div`

  position: absolute;
  display: grid;
  grid-template-columns: 45px 1fr 45px;
  place-content: center;
  height: 100%;
  width: 100%;
  
  /* Button Styling */
  & > div:nth-child(1), & > div:nth-child(3)
  {
    height: 42px;
    width: 42px;
    background-color: #1e1e1e;
    border-radius: 100%;
    z-index: 10;
    display: grid;
    align-items: center;
    
    &:hover{ cursor: pointer }
    
    & > svg
    {
      height: 20px;
      width: 20px;
      fill: white;
    }
  }
  
  /* Rotating the svg for the left button */
  & > div:nth-child(1)
  {
    padding-left: 10px;
    & > svg:nth-child(1){ transform: rotate(180deg); }
  }
  
  & > div:nth-child(3)
  {
    padding-left: 12px;
  }
  
`

const ReviewContainer = styled.div`

  width: 100%;
  height: 100%;
  overflow: hidden;
  
  /* Limiting the photo container for appearances */
  display: grid;
  grid-template-columns: 20px 1fr 20px;
  
  /* Reviews Wrapper */
  & > div:nth-child(2)
  {
    width: 100%;
    height: 185px;  
    display: grid;
    grid-template-columns: repeat(${props => props.arraySize}, 1fr);
    overflow: hidden;
    border-radius: 25px;
    position: relative;
    
    /* INDIVIDUAL REVIEW */
    & > div
    {
      border-radius: 25px;
      width: 453px;
      height: 185px;
      overflow: hidden;
      display: grid;
      grid-template-columns: 1fr 184px 185px 1fr;
      grid-gap: 10px;
      
      /* Moves all of the containers giving the illusion of group movement */
      transform: translateX(${props => parseInt(props.position)}px);
      transition: all ease-in-out 0.15s;
      
      /* Styling the image alongside the rating */
      & > div:nth-child(2)
      {
        border-radius: 25px;
        background-color: #1e1e1e;
      }
      
      /* Review Passages / Text */
      & > div:nth-child(3)
      {
        display: grid;
        height: 185px;
        grid-template-rows: 1fr 16px 13px 6px 15px auto 15px 1fr;
        grid-gap: 2px;
        margin: 0 10px;
        
        /* User Text */
        & > div:nth-child(2) { font-weight: 500; font-size: 16px }
        & > div:nth-child(3) { font-weight: 500; font-size: 13px; color: #9B9B9B }
        
        /* Quote SVG Top */
        & > div:nth-child(5)
        {
          margin-right: auto;
          
          & > svg { height: 15px; width: 15px; fill: #9B9B9B}
        }
        
        /* Review Text */
        & > div:nth-child(6) 
        { 
          font-size: 14px;
          color: #9B9B9B;
        }
        
        /* Quote SVG Bottom */
        & > div:nth-child(7)
        {
          margin-left: auto;
          
          & > svg { height: 15px; width: 15px; transform: rotate(180deg); fill: #9B9B9B}
        }
        
      }
      
    }
  }
`

export default function ReviewScroll(props)
{

    /* Necessary Variables */
    let reviews = props.reviews
    let reviewsArrayLength = reviews.length
    let [reviewsIndex, setReviewsIndex] = useState(0)
    let [position, setPosition] = useState('')

    const handleLeftButtonPress = () =>
    {
        // Checking if their are more than 4 images (to enable the buttons...)
        if(reviewsArrayLength > 1)
        {
            /* If the front images index is greater than its starting position, go ahead */
            if(reviewsIndex > 0)
            {
                setReviewsIndex(reviewsIndex-=1)

                setPosition((reviewsIndex * -453).toString())
                //console.log('Current F.I.I:',frontImageIndex)
            }

            /* Animation Sequence */
            if (reviewsIndex === 0)
            {
                /* Displacement effect */
                setPosition('25')

                /* Resetting */
                setTimeout(() => {setPosition('0');}, 150)
            }

        }
    }

    const handleRightButtonPress = () =>
    {

        /*   */
        if((reviewsIndex + 1) < reviewsArrayLength)
        {
            setReviewsIndex(reviewsIndex+=1)
            setPosition((reviewsIndex * -453).toString())
            //console.log('Current F.I.I:',frontImageIndex)
        }

        /* If you reached the end of the line */
        else if (reviewsArrayLength === reviewsArrayLength)
        {

            /* Holding the previous position */
            let prevPosition = parseInt(position)

            /* Setting the bound position */
            setPosition((prevPosition - 25).toString())

            /* Resetting */
            setTimeout(() => {setPosition(prevPosition.toString());}, 150)

        }

    }

    return(
        <>
            <PrimaryContainer>

                <ScrollContainer>
                    {/* Button 1 */}
                    <div onClick={handleLeftButtonPress}>
                        <NextArrowSVG/>
                    </div>

                    {/* Gap */}
                    <div/>

                    {/* Button 2 */}
                    <div onClick={handleRightButtonPress}>
                        <NextArrowSVG/>
                    </div>

                </ScrollContainer>

                <ReviewContainer position={position} arraySize={reviewsArrayLength}>

                    <div/>

                    {/* Photo Wrapper */}
                    <div>
                        {/* Enumerating through each image and rendering them accordingly */}
                        {props.reviews.map((review) => (
                            <div>
                                <div/>

                                <div>

                                </div>

                                <div>
                                    <div/>
                                    <div>Michael Janlaeo</div>
                                    <div>@michaeljanlaeo</div>
                                    <div/>
                                    <div><QuoteSVG/></div>
                                    <div>This service was nothing but perfect. My business partner loves every single design that this team has produced! </div>
                                    <div><QuoteSVG/></div>
                                    <div/>
                                </div>

                                <div/>
                            </div>
                        ))}
                    </div>

                    <div/>
                </ReviewContainer>

            </PrimaryContainer>
        </>
    )
}