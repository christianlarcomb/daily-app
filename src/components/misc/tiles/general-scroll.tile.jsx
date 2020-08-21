import React, {useState, useRef, useEffect} from 'react'
import styled from 'styled-components'

/* SVGs */
import { ReactComponent as NextArrowSVG } from '../../../assets/svgs/scroll_components/next.svg';
import ChildComponentCheck from "../functions/child-componet-check";

const PrimaryContainer = styled.div`
  height: 100%;
  position: relative;
`

const ScrollContainer = styled.div`

  position: absolute;
  display: grid;
  grid-template-columns: 34px 1fr 34px;
  place-content: center;
  height: 100%;
  width: 100%;
  
  /* Button Styling */
  & > div:nth-child(1), & > div:nth-child(3)
  {
    height: 75px;
    width: 34px;
    background-color: #1e1e1e;
    z-index: 10;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr;
    
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

const ChildTagContainer = styled.div`

  width: 100%;
  height: ${props => props.options.height ? props.options.height : 275}px;
  overflow: hidden;
  
  /* Limiting the photo container for appearances */
  display: grid;
  grid-template-columns: 1fr;
  
  /* Photos Wrapper */
  & > div
  {
    width: 100%;
    height: 100%;  
    display: grid;
    grid-template-columns: repeat(${props => props.arraySize}, 1fr);
    grid-gap: 15px;
    overflow: hidden;
    
    /* Spacing issue is detected here... Fix it up! */
    border-radius: ${props => props.options.borderRadius ? props.options.borderRadius : 25}px;
    
    /* TRANSITION THESE ITEMS */
    /* Individual Photo Container */
    & > div
    {
      border-radius: ${props => props.options.borderRadius ? props.options.borderRadius : 25}px;
      background-color: #F2F2F2;
      width: ${props => props.dim}px;
      overflow: hidden;
      display: grid;
      margin: 0 auto;
      place-items: center;
      transform: translateX(${props => parseInt(props.position)}px);
      transition: all ease-in-out 0.15s;
      place-content: center;
      border-color: #D5D5D5;
      border-style: solid;
      border-width: 1px;
      
      & > img
      {
        height: 100%;
      }
    }
  }
`

export default function GeneralScroll(props)
{

    /* Defining Necessary Variables */
    let children = ChildComponentCheck(props),
        childrenAmount,
        primaryContainerRef = useRef(null)

    /* After the checks, set the length */
    childrenAmount = children.length

    console.log(childrenAmount)

    let [contentIndex, setContentIndex] = useState(0)
    let [position, setPosition] = useState('')
    let [imageWidth, setImageWidth] = useState(0)

    /* Handling the width of the frames */
    useEffect(() =>
    {
        if(primaryContainerRef)
        {
            let containerWidth = primaryContainerRef.current.clientWidth
            setImageWidth((containerWidth - ((props.options.tilesShown-1) * 15)) / props.options.tilesShown)
        }
    }, [primaryContainerRef])

    const handleLeftButtonPress = () =>
    {
        // Checking if their are more than 4 images (to enable the buttons...)
        if(childrenAmount> props.options.tilesShown)
        {
            /* If the front images index is greater than its starting position, go ahead */
            if(contentIndex > 0)
            {
                setContentIndex(contentIndex-=1)

                setPosition((contentIndex * -(imageWidth+15)).toString())
                //console.log('Current F.I.I:',frontImageIndex)

            /* Cool mini animation */
            }

            else if (contentIndex === 0)
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
        if(childrenAmount > props.options.tilesShown)
        {
            /* checking whether the length of the image array minus it's current position is  */
            if((contentIndex + props.options.tilesShown+1) <= childrenAmount)
            {
                setContentIndex(contentIndex+=1)
                setPosition((contentIndex * -(imageWidth+15)).toString())
            }

            /* If you reached the end of the line */
            else if (contentIndex+props.options.tilesShown === childrenAmount)
            {

                /* Holding the previous position */
                let finalPosition = (childrenAmount-props.options.tilesShown) * -(imageWidth+15)

                /* Setting the bound position */
                setPosition((finalPosition - 25).toString())

                /* Resetting */
                setTimeout(() => {setPosition(finalPosition.toString());}, 150)

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
            <PrimaryContainer
                ref={primaryContainerRef}
            >

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

                <ChildTagContainer
                    position={position}
                    arraySize={childrenAmount}
                    options={props.options}
                    dim={imageWidth}
                >

                    {/* Photo Wrapper */}
                    <div>
                        {/* Enumerating through each image and rendering them accordingly */}
                        {props.children}
                    </div>

                </ChildTagContainer>

            </PrimaryContainer>
        </>
    )
}