import React, { useState } from 'react'
import styled from 'styled-components'

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
  grid-template-areas: "a b b c d e"
                       "a f g g d h";
                       
  & > div 
  {
    border-radius: 20px;
    
    position: relative;
    display: grid;
    place-content: center;
    overflow: hidden;
    
    background-color: #1E1E1F;
  }

  #fsd-11a 
  {
    grid-area: a;
    
    width: 155px;
    height: 325px;
  }

  #fsd-12a 
  {
    grid-area: b;
    
    width: 325px;
    height: 155px;
    
    & > img { width: 325px; }
  }

  #fsd-13a 
  {
    grid-area: c;
    
    width: 155px;
    height: 155px;
    
    & > img { height: 155px; }
  }
  
  #fsd-14a 
  {
    grid-area: d;
    
    width: 155px;
    height: 325px;
    
    & > img { height: 325px; }
  }
  
  #fsd-15a 
  {
    grid-area: e;
    
    width: 155px;
    height: 155px;
    
    & > img { height: 155px; }
  }
  
  #fsd-16a 
  {
    grid-area: f;
    
    width: 155px;
    height: 155px;
    
    & > img { height: 155px; }
  }
  
  #fsd-17a 
  {
    grid-area: g;
    
    width: 325px;
    height: 155px;
    
    & > img { width: 325px; }
  }
  
  #fsd-18a 
  {
    grid-area: h;
    
    width: 155px;
    height: 155px;
    
    & > img { height: 155px; }
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
  
  /* Trending Section */
  & > div:nth-of-type(2)
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
  
  /* Recent Orders Section */
  & > div:nth-of-type(3)
  {
    background-color: darkolivegreen;
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

    const handleFocus = (e) => {
        let target = e.target

        if(target.value === 'Search')
        {
            setInput('')
        }
    }

    const handleBlur= (e) => {
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
                    <FirstContainer>
                        <div id='fsd-11a'>

                        </div>
                        <div id='fsd-12a'>
                            <img alt='' src={BannerImgOne}/>
                        </div>
                        <div id='fsd-13a'>
                            <img alt='' src={BannerImgTwo}/>
                        </div>
                        <div id='fsd-14a'>
                            <img alt='' src={BannerImgThree}/>
                        </div>
                        <div id='fsd-15a'>
                            <img alt='' src={BannerImgFour}/>
                        </div>
                        <div id='fsd-16a'>
                            <img alt='' src={BannerImgFive}/>
                        </div>
                        <div id='fsd-17a'>
                            <img alt='' src={BannerImgSix}/>
                        </div>
                        <div id='fsd-18a'>
                            <img alt='' src={BannerImgSeven}/>
                        </div>
                    </FirstContainer>

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
                                rating=''
                                price=''
                                currency=''
                                rate=''
                                select_featured=''
                                shipping=''
                                badges=''
                            />

                            <GeneralItemObject
                                title='Handcrafted wooden models designed exactly as requested.'
                            />

                            {/* Button */}
                            <div>
                                Explore
                            </div>
                        </div>

                        {/* Recent Orders Container */}
                        <div>

                        </div>

                    </SecondContainer>
                </div>
            </ContentHolder>

        </PrimaryContainer>
    )
}

export default ExplorePanel