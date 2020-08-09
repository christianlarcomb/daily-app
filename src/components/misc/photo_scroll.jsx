import React, {useState} from 'react'
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
      
      transform: translateX(${props => props.position});
    }
  }
`

export default function PhotoScroll()
{

    let [position, setPosition] = useState(1)

    /* Checks the size of the photo array passed, and utilizes numerous comparators to handle accordingly */
    const handleButtonPress = (num) =>
    {
        
    }

    return(
        <>
            <PrimaryContainer>

                <ScrollContainer>
                    {/* Button 1 */}
                    <div onClick={handleButtonPress(-1)}>

                    </div>

                    {/* Gap */}
                    <div/>

                    {/* Button 2 */}
                    <div onClick={handleButtonPress(1)}>

                    </div>

                </ScrollContainer>


                <PhotoContainer position={position}>
                    <div/>

                    {/* Photo Wrapper */}
                    <div>
                        {/**/}
                        <div>

                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>

                    <div/>
                </PhotoContainer>

            </PrimaryContainer>
        </>
    )

}