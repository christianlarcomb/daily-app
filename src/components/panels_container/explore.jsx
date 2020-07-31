import React, { useState } from 'react'
import styled from 'styled-components'

import Tilt from 'react-tilt'

/* Misc. Items */
import GeneralItemObject from "../misc/general_item_object";

/* Vectors */
import { ReactComponent as DailyTextLogo } from '../../assets/svgs/daily/daily_text.svg';
import { ReactComponent as SearchIcon } from '../../assets/svgs/ui/search.svg';
import { ReactComponent as ClockIcon } from '../../assets/svgs/explore_header/clock.svg';
import { ReactComponent as FilterIcon } from '../../assets/svgs/explore_header/sort_vector.svg';

/* Images */
import BannerImgOne from '../../assets/imgs/explore/banner_image_1.png'
import BannerImgTwo from '../../assets/imgs/explore/banner_image_2.jpg'
import BannerImgThree from '../../assets/imgs/explore/banner_image_3.jpg'
import BannerImgFour from '../../assets/imgs/explore/banner_image_4.png'
import BannerImgFive from '../../assets/imgs/explore/banner_image_5.png'
import BannerImgSix from '../../assets/imgs/explore/banner_image_6.jpg'
import BannerImgSeven from '../../assets/imgs/explore/banner_image_7.jpg'

const FilterIconStyled = styled(FilterIcon)`
  height: 12px;
`

const ClockIconStyled = styled(ClockIcon)`
  height: 18px;
`

const SearchIconStyled = styled(SearchIcon)`
  stroke: #2c2f33;
  height: 16px;
  width: 16px;
`

const PrimaryContainer = styled.div`
  display: grid;
  grid-template-rows: 55px 1fr;
  position: relative;
  overflow-y: scroll;
`

const Header = styled.div`

  background-color: white;
  display: grid;
  grid-template-columns: 285px 1fr 285px;
  
  /* Dynamic Logo Section */
  & > div:nth-child(1)
  {
    margin: 16px 0 auto 0;
    & > svg
    {
      fill: ${props => props.theme.SiteVectorSvg};
      height: 32px;
    }
  }
  
  /* Search Bar Grid Container */
  & > div:nth-child(2)
  {
    align-items: center;
    display: flex;
    
    /* Search Bar Wrapper */
    & > div:nth-child(1)
    {
      margin: 0 auto;
      height: 36px;
      width:  100%;
      max-width: 646px;
      display: grid;
      grid-template-columns: 1fr 46px;
      background-color: #F2F2F2;
      border-radius: 8px;
      overflow: hidden;
      align-items: center;
      
      /* Search Input Tag */
      & > div:nth-child(1) > input
      {
        background-color: rgba(0,0,0,0);
        border-style: hidden;
        height: 30px;
        width: 100%;
        max-width: 600px;
        padding-left: 14px;
        font-size: 15px;
        
        &:focus{outline: none;}
      }
      /* Search Icon */
      & > div:nth-child(2)
      {
        display: grid;
        place-items: center;
      }
    }
  }
  
  /* Header Buttons Container */
  & > div:nth-child(3)
  {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-content: center;
    margin: 0 15px;
    grid-gap: 5px;
    
    /* Individual Button Wrapper Generic */
    & > div
    {
      display: grid;
      grid-template-columns: 22px 1fr;
      align-content: center;
      height: 40px;
      border-radius: 8px;
      padding: 0 8px;
      
      &:hover { background-color: #e7e7e7 }
      
      & > svg
      {
        margin: auto 0;
      }
      
      & > span
      {
        font-size: 14px;
        font-weight: 500;
        padding-left: 4px;
      }
    }
    
    /* Orders Button */
    & > div:nth-child(1)
    {
      
    }
    
    /* Filters Button */
    & > div:nth-child(1)
    {
      
    }
    
    /* Bag Button */
    & > div:nth-child(1)
    {
      
    }
  }
`

const ContentHolder = styled.div`
  width: 100%;
  & > div
  {
    width:      1005px;
    min-height: 1600px;
    margin:     0 auto;
  }
`

const FirstContainer = styled.div`

  display:  grid;
  height:   325px;
  grid-gap: 15px;
  margin-top: 25px;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
    
  /* Styling the entire tiles */                     
  & > div
  {
    border-radius: 20px;
    
    position: relative;
    display: grid;
    place-content: center;
    overflow: hidden;
    
    background-color: #F2F2F2;
    
    & > img
    {
      width: 325px;
    }
  }

`

const SecondContainer = styled.div`

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 32px 1fr;
  grid-gap: 25px;
  margin-top: 45px;
  height: 490px;
  
  & > span 
  {
    font-size: 24px;
    font-weight: 500;
  }
  
  /* Top Categories Section */
  & > div:nth-of-type(1)
  {
    display: grid;
    grid-gap: 15px;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: "dev  dev  dev"
                         "art  code code"
                         "home code code"
                         "fash fash food";

    & > div
    {
      border-radius: 20px;
      display: grid;
      place-content: center;
      
      & > span
      {
        font-size: 20px;
        color: white;
        font-weight: 500;
      }
    }

    #fse-11a
    {
      grid-area: dev;
      background-image: linear-gradient(#17ECA1, #00D5E6);
    }
    #fse-12a
    {
      grid-area: art;
      background-image: linear-gradient(#EF067A, #F2954E);
    }
    #fse-13a
    {
      grid-area: code;
      background-image: linear-gradient(#9826EF, #318CE7);
    }
    #fse-14a
    {
      grid-area: home;
      background-image: linear-gradient(#FFCB21, #43E3A8);
    }
    #fse-15a
    {
      grid-area: fash;
      background-image: linear-gradient(#2146FF, #26FF84);
    }
    #fse-16a
    {
      grid-area: food;
      background-image: linear-gradient(#FF9021, #B115D1);
    }
    
  }
  
  /* Trending & Recent Orders Section */
  & > div:nth-of-type(2), 
  & > div:nth-of-type(3)
  {
    display: grid;
    grid-template-rows: 3fr 3fr 1fr;
    grid-gap: 10px;
    
    /* Bottom Button */
    & > div:nth-child(3)
    {
      cursor: pointer;
      display: grid;
      place-items: center;
      font-size: 14px;
      color: white;
      margin-top: auto;
      width: 100%;
      height: 52px;
      background-color: #1e1e1e;
      border-radius: 10px;
    }
  }
`

const ThirdContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 32px 1fr 52px;
  grid-gap: 25px;
  margin-top: 45px;
  height: 490px;
  
  & > span 
  {
    font-size: 24px;
    font-weight: 500;
  }
  
  & > div:nth-of-type(1)
  {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 15px;
  }
  
  & > div:nth-of-type(2)
  { 
    cursor: pointer;
    display: grid;
    place-items: center;
    font-size: 14px;
    color: white;
    margin-top: auto;
    width: 100%;
    height: 52px;
    background-color: #1e1e1e;
    border-radius: 10px;
  }
`

function ExplorePanel()
{

    let [input, setInput] = useState('Search')

    const handleInput = (event) =>
    {
        const target = event.target;
        setInput(target.value)
    }

    const handleFocus = (e) =>
    {
        let target = e.target

        if(target.value === 'Search')
        {
            setInput('')
        }
    }

    const handleBlur= (e) =>
    {
        let target = e.target

        if(target.value === '')
        {
            setInput('Search')
        }
    }

    return(
        <PrimaryContainer>

            {/* Responsible for the navigation of the marketplace page */}
            <Header>
                {/* Logo Container */}
                <div>
                    <DailyTextLogo/>
                </div>

                {/* Search Container */}
                <div>
                    <div>
                        {/* Search Container */}
                        <div>
                            <input
                                name='searchbar'
                                onChange={(e) => handleInput(e)}
                                value={input}
                                onFocus={e => handleFocus(e)}
                                onBlur={e => handleBlur(e)}
                                maxLength={120}
                            />
                        </div>
                        {/* Search Icon Container */}
                        <div>
                            <SearchIconStyled/>
                        </div>
                    </div>
                </div>

                {/* Buttons Container */}
                <div>

                    {/* Individual Button Wrappers */}
                    <div>
                        <ClockIconStyled/>
                        <span>
                            Orders
                        </span>
                    </div>

                    <div>
                        <FilterIconStyled/>
                        <span>
                            Filters
                        </span>
                    </div>

                    <div>
                        <div>

                        </div>
                        <span>
                            Bag
                        </span>
                    </div>
                </div>
            </Header>

            <ContentHolder>
                <div>
                    {/* Marking Materials */}
                    <FirstContainer>

                        {/* TODO: Try to finish implementing tilt for fun; remove dep. if it's not needed */}
                        <Tilt options={{ max : 20, scale: 1.01, reverse: true }} style={{ height: 155, width: 325 }}>

                        </Tilt>

                        <Tilt options={{ max : 20, scale: 1.01, reverse: true }} style={{ height: 155, width: 325 }}>
                            <img alt='' src={BannerImgOne}/>
                        </Tilt>

                        <Tilt options={{ max : 20, scale: 1.01, reverse: true }} style={{ height: 155, width: 325 }}>
                            <img alt='' src={BannerImgTwo}/>
                        </Tilt>

                        <Tilt options={{ max : 20, scale: 1.01, reverse: true }} style={{ height: 155, width: 325 }}>
                            <img alt='' src={BannerImgThree}/>
                        </Tilt>

                        <Tilt options={{ max : 20, scale: 1.01, reverse: true }} style={{ height: 155, width: 325 }}>
                            <img alt='' src={BannerImgFour}/>
                        </Tilt>

                        <Tilt options={{ max : 20, scale: 1.01, reverse: true }} style={{ height: 155, width: 325 }}>
                            <img alt='' src={BannerImgFive}/>
                        </Tilt>

                    </FirstContainer>

                    {/* Primary Catalogs */}
                    <SecondContainer>

                        <span>Top Categories</span>
                        <span>Trending</span>
                        <span>Recent Orders</span>

                        {/* Top Categories Container */}
                        <div>
                            <div id='fse-11a'>
                                <span>Development</span>
                            </div>
                            <div id='fse-12a'>
                                <span>Art</span>
                            </div>
                            <div id='fse-13a'>
                                <span>Code</span>
                            </div>
                            <div id='fse-14a'>
                                <span>Home</span>
                            </div>
                            <div id='fse-15a'>
                                <span>Fashion</span>
                            </div>
                            <div id='fse-16a'>
                                <span>Food</span>
                            </div>
                        </div>

                        {/* Trending Container */}
                        <div>

                            <GeneralItemObject
                                title='Affordable cleaning services services offering in the New Jersey area. Ideal for busy bees and stores!'
                                images=''
                                badges=''
                                rating={30}
                                price={25.99}
                                currency=''
                                rate=''
                                select_featured=''
                                shipping=''
                                badges=''
                            />

                            <GeneralItemObject
                                title='Handcrafted wooden models designed exactly as requested.'
                                images=''
                                badges=''
                                rating=''
                                price={32}
                                currency=''
                                rate=''
                                select_featured=''
                                shipping=''
                                badges=''
                            />

                            {/* Button */}
                            <div>
                                Explore
                            </div>
                        </div>

                        {/* Recent Orders Container */}
                        <div>

                            <GeneralItemObject
                                title={`Custom 3D printed objects exactly how you'd like. Try it and if don't like we'll refund.`}
                                images=''
                                badges=''
                                rating={22}
                                price={100}
                                currency=''
                                rate=''
                                select_featured=''
                                shipping=''
                                badges=''
                            />

                            <GeneralItemObject
                                title='Handcrafted wooden models designed exactly as requested.'
                                images=''
                                badges=''
                                rating={22}
                                price={12}
                                currency=''
                                rate=''
                                select_featured=''
                                shipping=''
                                badges=''
                            />

                            {/* Button */}
                            <div>
                                Explore
                            </div>
                        </div>

                    </SecondContainer>

                    {/* Secondary Catalogs */}
                    <ThirdContainer>

                        <span>Recommended</span>

                        {/* Content */}
                        <div>
                            <GeneralItemObject
                                title='Affordable cleaning services services offering in the New Jersey area. Ideal for busy bees and stores!'
                                images=''
                                badges=''
                                rating={22}
                                price={25.99}
                                currency=''
                                rate=''
                                select_featured=''
                                shipping=''
                                badges=''
                            />
                            <GeneralItemObject
                                title='Affordable cleaning services services offering in the New Jersey area. Ideal for busy bees and stores!'
                                images=''
                                badges=''
                                rating={22}
                                price={25.99}
                                currency=''
                                rate=''
                                select_featured=''
                                shipping=''
                                badges=''
                            />
                            <GeneralItemObject
                                title='Affordable cleaning services services offering in the New Jersey area. Ideal for busy bees and stores!'
                                images=''
                                badges=''
                                rating={22}
                                price={25.99}
                                currency=''
                                rate=''
                                select_featured=''
                                shipping=''
                                badges=''
                            />
                            <GeneralItemObject
                                title='Affordable cleaning services services offering in the New Jersey area. Ideal for busy bees and stores!'
                                images=''
                                badges=''
                                rating={22}
                                price={25.99}
                                currency=''
                                rate=''
                                select_featured=''
                                shipping=''
                                badges=''
                            />
                            <GeneralItemObject
                                title='Affordable cleaning services services offering in the New Jersey area. Ideal for busy bees and stores!'
                                images=''
                                badges=''
                                rating={22}
                                price={25.99}
                                currency=''
                                rate=''
                                select_featured=''
                                shipping=''
                                badges=''
                            />
                            <GeneralItemObject
                                title='Affordable cleaning services services offering in the New Jersey area. Ideal for busy bees and stores!'
                                images=''
                                badges=''
                                rating={22}
                                price={25.99}
                                currency=''
                                rate=''
                                select_featured=''
                                shipping=''
                                badges=''
                            />
                        </div>

                        {/* Button */}
                        <div>
                            Explore
                        </div>

                    </ThirdContainer>
                </div>
            </ContentHolder>

        </PrimaryContainer>
    )
}

export default ExplorePanel