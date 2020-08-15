import React, {useState, useRef, useEffect, useLayoutEffect} from 'react'
import styled from 'styled-components'

/* SVGs */
import { ReactComponent as NextArrowSVG } from '../../../assets/svgs/scroll_components/next.svg';
import { ReactComponent as QuoteSVG } from '../../../assets/svgs/scroll_components/quote-solid.svg';
import StarRating from "../star_rating";

const PrimaryContainer = styled.div`
  height: 100%;
  position: relative;
`

const ScrollContainer = styled.div`

  position: absolute;
  display: grid;
  grid-template-columns: 34px 1fr 34px;
  place-content: center;
  height: 215px;
  width: 100%;
  
  /* Button Styling */
  & > div:nth-child(1), & > div:nth-child(3)
  {
    height: 75px;
    width: 34px;
    background-color: #1e1e1e;
    border-radius: 100%;
    z-index: 10;
    display: grid;
    align-items: center;
    
    &:hover{ cursor: pointer }
    
    & > svg
    {
      height: 18px;
      width: 18px;
      fill: white;
    }
  }
  
  /* Left Button Styling */
  & > div:nth-child(1)
  {
    border-radius: 0 10px 10px 0;
    
    & > svg 
    { 
      transform: rotate(180deg);
      margin-left: 7px;
    }
  }
  
  /* Right Button Styling */
  & > div:nth-child(3) 
  {
    border-radius: 10px 0 0 10px;
    
    & > svg 
    { 
      margin-left: 9px;
    }
  }
  
`

const ReviewContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  
  /* Limiting the photo container for appearances */
  display: grid;
  grid-template-columns: 1fr;
  
  /* Reviews Wrapper */
  & > div:nth-child(1)
  {
    width: 100%;
    height: 215px;  
    display: grid;
    grid-template-columns: repeat(${props => props.arraySize}, 1fr);
    overflow: hidden;
    border-radius: 25px;
    position: relative;
    
    /* INDIVIDUAL REVIEW */
    & > div
    {
      border-radius: 25px;
      width: ${props => props.containerWidth}px;
      height: 215px;
      overflow: hidden;
      display: grid;
      grid-template-columns: 200px 207px;
      grid-template-rows: 215px;
      
      background-color: #F2F2F2;
      
      /* Moves all of the containers giving the illusion of group movement */
      transform: translateX(${props => parseInt(props.position)}px);
      transition: all ease-in-out 0.15s;
     
      /* Styling the image alongside the rating */
      & > div:nth-child(1)
      {
        display: grid;
        border-radius: 25px 0 0 25px;
        background-color: #1e1e1e;
        height: 215px;
        overflow: hidden;
        place-content: center;
        position: relative;
        
        /* Number + Stars */
        & > div:nth-child(1)
        {
          height: 100%;
          width: 100%;
          position: absolute;
          background-color: rgba(30,30,30,0.85);
          backdrop-filter: blur(20px) saturate(400%);
          
          display: grid;
          grid-gap: 10px;
          grid-template-rows: 22px 15px;
          place-content: center;
          
          & > div:nth-child(1)
          {
            margin: 0 auto;
            font-size: 22px;
            color: white;
          }
          
          & > div:nth-child(2)
          {
            width: 75px;
          }
        }
        
        /* Image Back */
        & > img { height: 215px; }
      }
      
      /* Review Passages / Text */
      & > div:nth-child(2)
      {
        display: grid;
        height: 185px;
        grid-template-rows: 1fr 16px 13px 6px 14px auto 14px 1fr;
        grid-gap: 2px;
        margin: auto 12px;
        width: 150px;
        
        /* User Text */
        & > div:nth-child(2) { font-weight: 500; font-size: 16px }
        & > div:nth-child(3) { font-weight: 500; font-size: 13px; color: #9B9B9B }
        
        /* Quote SVG Top */
        & > div:nth-child(5)
        {
          margin-right: auto;
          
          & > svg { height: 14px; width: 14px; fill: #9B9B9B}
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

    /*  */
    let primaryContainerRef = useRef(null)

    /* Necessary Variables */
    let reviews = props.reviews
    let reviewsArrayLength = reviews.length
    let [reviewsIndex, setReviewsIndex] = useState(0)
    let [position, setPosition] = useState('')
    let [containerWidth, setContainerWidth] = useState(0)

    /* Handling the width of the frames */
    useEffect(() => {
        if(primaryContainerRef)
        {
            let containerWidth = primaryContainerRef.current.clientWidth
            setContainerWidth(containerWidth)
        }
    }, [primaryContainerRef])

    const handleLeftButtonPress = () =>
    {
        // Checking if their are more than 4 images (to enable the buttons...)
        if(reviewsArrayLength > 1)
        {
            /* If the front images index is greater than its starting position, go ahead */
            if(reviewsIndex > 0)
            {
                setReviewsIndex(reviewsIndex-=1)
                setPosition((reviewsIndex * -containerWidth).toString())
                //console.log(containerWidth)
            }

            else if (reviewsIndex === 0)
            {
                /* Displacement effect */
                setPosition('25')

                /* Resetting */
                setTimeout(() => { setPosition('0') }, 150)
            }
        }
    }

    const handleRightButtonPress = () =>
    {

        /*   */
        if((reviewsIndex + 1) < reviewsArrayLength)
        {
            setReviewsIndex(reviewsIndex+=1)
            setPosition((reviewsIndex * -containerWidth).toString())
            //console.log('Current F.I.I:',frontImageIndex)
        }

        /* If you reached the end of the line */
        else if (reviewsArrayLength === reviewsArrayLength)
        {

            /* Holding the previous position */
            let finalPosition = (reviewsArrayLength-1) * -containerWidth

            /* Setting the bound position */
            setPosition((finalPosition-25).toString())

            /* Resetting */
            setTimeout(() => {setPosition(finalPosition.toString());}, 150)

        }

    }

    return(
        <>
            <PrimaryContainer ref={primaryContainerRef}>

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

                <ReviewContainer
                    position={position}
                    arraySize={reviewsArrayLength}
                    containerWidth={containerWidth}
                >

                    {/* Photo Wrapper */}
                    <div>
                        {/* Enumerating through each image and rendering them accordingly */}
                        {props.reviews.map(review => (
                            <div>

                                {/* Rating with Blurred Back */}
                                <div>

                                    {/* Data Grid */}
                                    <div>
                                        <div>{review.stars}</div>
                                        <div><StarRating rating={review.stars*20} options={{primaryColor: '#fff'}}/></div>
                                    </div>

                                    {/* Image Back */}
                                    <img src={review.profile_image}/>

                                </div>

                                {/* Comment Area */}
                                <div>
                                    <div/>
                                    <div>{review.name}</div>
                                    <div>{review.tag}</div>
                                    <div/>
                                    <div><QuoteSVG/></div>
                                    <div>{review.review}</div>
                                    <div><QuoteSVG/></div>
                                    <div/>
                                </div>

                            </div>
                        ))}
                    </div>

                </ReviewContainer>

            </PrimaryContainer>
        </>
    )
}