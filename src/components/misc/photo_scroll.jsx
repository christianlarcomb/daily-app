import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

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
    height: 45px;
    width: 45px;
    background-color: #1e1e1e;
    border-radius: 100%;
    z-index: 10;
    &:hover{ cursor: pointer }
  }
`

const PhotoContainer = styled.div`

  .animatedSlide
  {
    transition: all ease-in-out 0.075s;
  }

  width: 100%;
  height: 275px;
  overflow: hidden;
  
  /* Limiting the photo container for appearances */
  display: grid;
  grid-template-columns: 20px 1fr 20px;
  
  /* Photos Wrapper */
  & > div:nth-child(2)
  {
    width: 100%;
    height: 100%;  
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 15px;
    overflow: hidden;
    
    /* TRANSITION THESE ITEMS */
    /* Individual Photo Container */
    & > div
    {
      border-radius: 25px;
      background-color: lightgray;
      width: 185px;
      overflow: hidden;
      display: grid;
      margin: 0 auto;
      place-items: center;
      transform: translateX(${props => props.position}px);
    }
  }
`

export default function PhotoScroll(props)
{

    /* Necessary Variables */
    let images = props.images
    let [index, setIndex] = useState(0)
    let [position, setPosition] = useState(0)
    let [animated, setAnimated] = useState(false)

    /* Checks the size of the photo array passed, and utilizes numerous comparators to handle accordingly */
    const handleLeftButtonPress = () =>
    {

        /* If there exists more than 4 photos, let the buttons do something... */
        if(images.length > 4)
        {
            /* Showing the initial animation */
            setAnimated(true);

            /* Checking that when adding, it wont go over... If so, reset it */
            (index-1) < 0 ? setIndex(images.length-1) : setIndex(index-1);

            /* Pushing the images to the right */
            setPosition(200);

            /* Slight Delay to see the animation */
            setTimeout(() =>
            {

                /* Showing the initial animation */
                setAnimated(false);

                /* Resetting the images */
                setPosition(0);

            }, 75)

        }

    }

    /* Checks the size of the photo array passed, and utilizes numerous comparators to handle accordingly */
    const handleRightButtonPress = () =>
    {
        /* If there exists more than 4 photos, let the buttons do something... */
        if(images.length > 4)
        {
            /* Showing the initial animation */
            setAnimated(true);

            /* Checking that when adding, it wont go over... If so, reset it */
            (index+1) >= (images.length-1) ? setIndex(0) : setIndex(index+1);

            /* Pushing the images to the right */
            setPosition(-200);

            setTimeout(() =>
            {

                /* Showing the initial animation */
                setAnimated(false);

                /* Resetting the images */
                setPosition(0);

            }, 75)

        }

    }

    return(
        <>
            <PrimaryContainer>

                <ScrollContainer>
                    {/* Button 1 */}
                    <div onClick={handleLeftButtonPress}>

                    </div>

                    {/* Gap */}
                    <div/>

                    {/* Button 2 */}
                    <div onClick={handleRightButtonPress}>

                    </div>

                </ScrollContainer>


                <PhotoContainer position={position}>

                    <div/>

                    {/* Photo Wrapper */}
                    <div>
                        {/**/}
                        <div className={animated ? 'animatedSlide' : ''}>

                        </div>
                        <div className={animated ? 'animatedSlide' : ''}>

                        </div>
                        <div className={animated ? 'animatedSlide' : ''}>

                        </div>
                        <div className={animated ? 'animatedSlide' : ''}>

                        </div>
                    </div>

                    <div/>
                </PhotoContainer>

            </PrimaryContainer>
        </>
    )

}