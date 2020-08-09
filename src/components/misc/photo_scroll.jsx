import React from 'react'
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
  
  & > div:nth-child(1), & > div:nth-child(3)
  {
    height: 45px;
    width: 45px;
    background-color: #1e1e1e;
    border-radius: 100%;
  }
`

const PhotoContainer = styled.div`
  width: 100%;
  height: 275px;
  padding: 0 22px;
  overflow: hidden;
  
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 15px;
  
  & > div 
  {
    border-radius: 25px;
    background-color: lightgray;
    width: 185px;
    overflow: hidden;
    display: grid;
    place-items: center;
  }
`

export default function PhotoScroll()
{

    return(
        <>
            <PrimaryContainer>

                <ScrollContainer>
                    {/* Button 1 */}
                    <div>

                    </div>

                    {/* Gap */}
                    <div/>

                    {/* Button 2 */}
                    <div>

                    </div>

                </ScrollContainer>


                <PhotoContainer>
                    {/**/}
                    <div>

                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                </PhotoContainer>

            </PrimaryContainer>
        </>
    )

}