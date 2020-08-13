import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

/* SVGs Imported */
import {ReactComponent as StarSVG } from '../../assets/svgs/products/star.svg';

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
    padding: 0 35px 6px 35px;
    
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
      width: 44px;
      margin: auto auto 0 auto;
      border-radius: 10px 10px 0 0;
      
      display: grid;
      place-content: center;
      
      font-size: 14px;
      font-weight: 500;
    }
    
    /* Bar 1 */
    & > div:nth-child(1)
    {
      background: linear-gradient(#6BFF9D, #38EBAE);
      height: ${props => props.percentages[0]}%;
    }
    
    /* Bar 2 */
    & > div:nth-child(2)
    {
      background: linear-gradient(#FFA66B, #EB3838);
      height: ${props => props.percentages[1]}%;
    }
    
    /* Bar 3 */
    & > div:nth-child(3)
    {
      background: linear-gradient(#FFDD6B, #EB7938);
      height: ${props => props.percentages[2]}%;
    }
    
    /* Bar 4 */
    & > div:nth-child(4)
    {
      background: linear-gradient(#6BF5FF, #38B6EB);
      height: ${props => props.percentages[3]}%;
    }
    
    /* Bar 5 */
    & > div:nth-child(5)
    {
      background: linear-gradient(#AB6BFF, #3862EB);
      height: ${props => props.percentages[4]}%;
    }
    
    & > div:nth-child(7),
    & > div:nth-child(8),
    & > div:nth-child(9),
    & > div:nth-child(10),
    & > div:nth-child(11)
    {
      display: grid;
      grid-template-columns: 1fr auto 20px 1fr;
      place-items: center;
      fill: white;
      color: white;
      
      /* Text */
      & > span
      {
        font-size: 12px;
      }
      
      & > svg
      {
        height: 10px;
        width: 10px;
      }
    }
    
  }
`

export default function RatingsBarGraph(props)
{

    let [starPercentages, setStarPercentages] = useState([])

    /* Doing some calculations */
    useEffect(() => {

        let amt_star_ratings = props.ratings
        let perc_ratings = []

        /*  */
        let stars_sum = amt_star_ratings.reduce((a,b) => a+b, 0)

        /* Getting the percentages for each rating */
        amt_star_ratings.map((amt, i) => perc_ratings[i] = Math.floor((amt/stars_sum) * 100))

        /* Setting the state with the percentages */
        setStarPercentages(perc_ratings)

    }, [])


    const handlePercRender = () =>
    {

    }

    return(
        <>
            <RatingsContainer percentages={starPercentages}>

                {/* Floating Text */}
                <div>
                    Product Ratings
                </div>

                <div>

                    { starPercentages.map(val => (
                      <div>
                          {val >= 10 ? `${val}%` : ''}
                      </div>
                    ))}

                    {/* Divider */}
                    <div/>

                    {/* Stars */}
                    <div>
                        <div/>
                        <span>5</span>
                        <StarSVG/>
                        <div/>
                    </div>
                    <div>
                        <div/>
                        <span>4</span>
                        <StarSVG/>
                        <div/>
                    </div>
                    <div>
                        <div/>
                        <span>3</span>
                        <StarSVG/>
                        <div/>
                    </div>
                    <div>
                        <div/>
                        <span>2</span>
                        <StarSVG/>
                        <div/>
                    </div>
                    <div>
                        <div/>
                        <span>1</span>
                        <StarSVG/>
                        <div/>
                    </div>
                </div>

            </RatingsContainer>
        </>
    )

}