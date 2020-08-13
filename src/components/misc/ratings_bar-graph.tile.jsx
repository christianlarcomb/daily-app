import React from 'react'
import styled from 'styled-components'

const RatingsContainer = styled.div`
  background-color: #1e1e1e;
  height: 100%;
  position: relative;
  border-radius: 25px;
  display: grid;
  grid-template-rows: 36px 1fr;
  grid-gap: 6px;
  
  /* Floating Text */
  & > div:nth-child(1)
  {
    margin-top: auto;
    padding-left: 18px;
    color: white;
    font-weight: 400;
  }
  
  /* Bar Graph Container */
  & > div:nth-child(2)
  {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 5fr 1px 1fr;
    height: 100%;
    width: 100%;
    padding: 0 25px;
    
    /* Border */
    & > div:nth-child(6)
    {
      background-color: #444344;
      grid-column: 1 / 6;
    }
    
    /* General Bar Styling */
    & > div:nth-child(1),
    & > div:nth-child(2),
    & > div:nth-child(3),
    & > div:nth-child(4),
    & > div:nth-child(5)
    {
      width: 45px;
      margin: auto auto 0 auto;
      border-radius: 10px 10px 0 0;
    }
    
    /* Bar 1 */
    & > div:nth-child(1)
    {
      background: linear-gradient(#6BFF9D, #38EBAE);
      height: 100px;
    }
    
    /* Bar 2 */
    & > div:nth-child(2)
    {
      background: linear-gradient(#FFA66B, #EB3838);
      height: 27px;
    }
    
    /* Bar 3 */
    & > div:nth-child(3)
    {
      background: linear-gradient(#FFDD6B, #EB7938);
      height: 66px;
    }
    
    /* Bar 4 */
    & > div:nth-child(4)
    {
      background: linear-gradient(#6BF5FF, #38B6EB);
      height: 15px;
    }
    
    /* Bar 5 */
    & > div:nth-child(5)
    {
      background: linear-gradient(#AB6BFF, #3862EB);
      height: 39px;
    }
  }
`

export default function RatingsBarGraph(props)
{

    return(
        <>
            <RatingsContainer>

                {/* Floating Text */}
                <div>
                    Product Ratings
                </div>

                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>

                    {/* Divider */}
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                    <div/>

                    <div/>
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                </div>

            </RatingsContainer>
        </>
    )

}