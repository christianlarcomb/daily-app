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

const PhotoContainer = styled.div`

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
    grid-template-columns: repeat(${props => props.arraySize}, 1fr);
    grid-gap: 15px;
    overflow: hidden;
    
    /* Spacing issue is detected here... Fix it up! */
    border-radius: 25px;
    
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
      transform: translateX(${props => parseInt(props.position)}px);
      transition: all ease-in-out 0.15s;
    }
  }
`

export default function PhotoScroll(props)
{

    /* Necessary Variables */
    let images = props.images
    let imagesArrayLength = images.length
    let [frontImageIndex, setFrontImageIndex] = useState(0)
    let [position, setPosition] = useState('')

    const handleLeftButtonPress = () =>
    {
        // Checking if their are more than 4 images (to enable the buttons...)
        if(imagesArrayLength > 4)
        {
            /* If the front images index is greater than its starting position, go ahead */
            if(frontImageIndex > 0)
            {
                setFrontImageIndex(frontImageIndex-=1)

                setPosition((frontImageIndex * -200).toString())
                //console.log('Current F.I.I:',frontImageIndex)

            /* Cool mini animation */
            }

            if (frontImageIndex === 0)
            {
                /* Displacement effect */
                setPosition('25')

                /* Resetting */
                setTimeout(() => {setPosition('0');}, 150)

            }

            /* INFINITE SCROLL SOLUTION - KEEP FOR POSSIBLE FEATURE / OPTION

            setAnimated(true);

            (index-1) < 0 ? setIndex(images.length-1) : setIndex(index-1);

            setPosition(200);

            setTimeout(() =>
            {
                setAnimated(false);
                setPosition(0);
            }, 75)

            */
        }
    }

    const handleRightButtonPress = () =>
    {
        // Checking if their are more than 4 images (to enable the buttons...)
        if(imagesArrayLength > 4)
        {
            /* checking whether the length of the image array minus it's current position is  */
            if((frontImageIndex + 5) <= imagesArrayLength)
            {
                setFrontImageIndex(frontImageIndex+=1)
                setPosition((frontImageIndex * -200).toString())
                //console.log('Current F.I.I:',frontImageIndex)
            }

            /* If you reached the end of the line */
            else if (frontImageIndex+4 === imagesArrayLength)
            {

                /* Holding the previous position */
                let prevPosition = parseInt(position)

                /* Setting the bound position */
                setPosition((prevPosition - 25).toString())

                /* Resetting */
                setTimeout(() => {setPosition(prevPosition.toString());}, 150)

            }

            /* INFINITE SCROLL SOLUTION - KEEP FOR POSSIBLE FEATURE / OPTION

            setAnimated(true);

            (index+1) >= (images.length-1) ? setIndex(0) : setIndex(index+1);

            setPosition(-200);

            setTimeout(() =>
            {
                setAnimated(false);
                setPosition(0);
            }, 75)
            */

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

                <PhotoContainer position={position} arraySize={imagesArrayLength}>

                    <div/>

                    {/* Photo Wrapper */}
                    <div>
                        {/* Enumerating through each image and rendering them accordingly */}
                        {props.images.map((img) => (
                            <div>

                            </div>
                        ))}
                    </div>

                    <div/>
                </PhotoContainer>

            </PrimaryContainer>
        </>
    )
}