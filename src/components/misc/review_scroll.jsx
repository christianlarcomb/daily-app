import React, { useState } from 'react'
import styled from 'styled-components'

/* SVGs */
import { ReactComponent as NextArrowSVG } from '../../assets/svgs/image_scroll/next.svg';

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
    height: 100%;  
    display: grid;
    grid-template-columns: repeat(${props => props.arraySize}, 1fr);
    overflow: hidden;
    background-color: #e9f0ed;
    border-radius: 25px;
    
    /* TRANSITION THESE ITEMS */
    /* Individual Photo Container */
    & > div
    {
      border-radius: 25px;
      background-color: #2c2f33;
      
      width: 486px;
      overflow: hidden;
      display: grid;
      margin: 0 auto;
      place-items: center;
      transform: translateX(${props => parseInt(props.position)}px);
      transition: all ease-in-out 0.075s;
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

                setPosition((reviewsIndex * -486).toString())
                //console.log('Current F.I.I:',frontImageIndex)
            }

            /* Animation Sequence */
            if (reviewsIndex === 0)
            {
                /* Displacement effect */
                setPosition('25')

                /* Resetting */
                setTimeout(() => {setPosition('0');}, 75)
            }

        }
    }

    const handleRightButtonPress = () =>
    {

        /*   */
        if((reviewsIndex + 1) < reviewsArrayLength)
        {
            setReviewsIndex(reviewsIndex+=1)
            setPosition((reviewsIndex * -486).toString())
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
            setTimeout(() => {setPosition(prevPosition.toString());}, 75)

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

                            </div>
                        ))}
                    </div>

                    <div/>
                </ReviewContainer>

            </PrimaryContainer>
        </>
    )
}