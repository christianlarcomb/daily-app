import React, {useState, useRef, useEffect} from 'react'
import styled from 'styled-components'

/* SVGs */
import { ReactComponent as NextArrowSVG } from '../../../assets/svgs/scroll_components/next.svg';

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

const PhotoContainer = styled.div`

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
    border-radius: 25px;
    
    /* TRANSITION THESE ITEMS */
    /* Individual Photo Container */
    & > div
    {
      border-radius: 25px;
      background-color: #d5d5d5;
      width: ${props => props.dim}px;
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

    let primaryContainerRef = useRef(null)

    /* Necessary Variables */
    let images = props.images
    let imagesArrayLength = images.length
    let [frontImageIndex, setFrontImageIndex] = useState(0)
    let [position, setPosition] = useState('')
    let [imageWidth, setImageWidth] = useState(0)

    /* Handling the width of the frames */
    useEffect(() => {
        if(primaryContainerRef)
        {
            let containerWidth = primaryContainerRef.current.clientWidth
            setImageWidth((containerWidth - ((props.options.tilesShown-1) * 15)) / props.options.tilesShown)
        }
    }, [primaryContainerRef])

    const handleLeftButtonPress = () =>
    {
        // Checking if their are more than 4 images (to enable the buttons...)
        if(imagesArrayLength > props.options.tilesShown)
        {
            /* If the front images index is greater than its starting position, go ahead */
            if(frontImageIndex > 0)
            {
                setFrontImageIndex(frontImageIndex-=1)

                setPosition((frontImageIndex * -(imageWidth+15)).toString())
                //console.log('Current F.I.I:',frontImageIndex)

            /* Cool mini animation */
            }

            else if (frontImageIndex === 0)
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
        if(imagesArrayLength > props.options.tilesShown)
        {
            /* checking whether the length of the image array minus it's current position is  */
            if((frontImageIndex + props.options.tilesShown+1) <= imagesArrayLength)
            {
                setFrontImageIndex(frontImageIndex+=1)
                setPosition((frontImageIndex * -(imageWidth+15)).toString())
            }

            /* If you reached the end of the line */
            else if (frontImageIndex+props.options.tilesShown === imagesArrayLength)
            {

                /* Holding the previous position */
                let finalPosition = (imagesArrayLength-props.options.tilesShown) * -(imageWidth+15)

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

                <PhotoContainer
                    position={position}
                    arraySize={imagesArrayLength}
                    options={props.options}
                    dim={imageWidth}
                >

                    {/* Photo Wrapper */}
                    <div>
                        {/* Enumerating through each image and rendering them accordingly */}
                        {props.images.map((img) => (
                            <div>

                            </div>
                        ))}
                    </div>

                </PhotoContainer>

            </PrimaryContainer>
        </>
    )
}