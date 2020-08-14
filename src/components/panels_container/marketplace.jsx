import React, {useState, useRef, useEffect} from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import StarRating from '../../components/misc/star_rating'

import Tilt from 'react-tilt'

/* Misc. Items */
import GeneralItemObject from "../misc/general_item_object";

/* Vectors */
import { ReactComponent as DailyTextLogo } from '../../assets/svgs/daily/daily_text.svg';
import { ReactComponent as SearchIcon }    from '../../assets/svgs/ui/search.svg';
import { ReactComponent as ClockIcon }     from '../../assets/svgs/explore_header/clock.svg';
import { ReactComponent as FilterIcon }    from '../../assets/svgs/explore_header/sort_vector.svg';
import { ReactComponent as WishlistSVG }   from '../../assets/svgs/products/wishlist.svg';
import { ReactComponent as HeartSVG }      from '../../assets/svgs/products/heart.svg';
import { ReactComponent as ChatBubblesSVG } from '../../assets/svgs/ui/chat-bubbles.svg';

/* Images */
import BannerImgOne from '../../assets/imgs/explore/banner_image_1.png'
import BannerImgTwo from '../../assets/imgs/explore/banner_image_2.jpg'
import BannerImgThree from '../../assets/imgs/explore/banner_image_3.jpg'
import BannerImgFour from '../../assets/imgs/explore/banner_image_4.png'
import BannerImgFive from '../../assets/imgs/explore/banner_image_5.png'
import BannerImgSix from '../../assets/imgs/explore/banner_image_6.jpg'
import BannerImgSeven from '../../assets/imgs/explore/banner_image_7.jpg'
import AwardTag from "../misc/award_tag";
import LocationTag from "../misc/location_tag";
import PhotoScroll from "../misc/tiles/photo_scroll.tile";
import ReviewScroll from "../misc/tiles/review_scroll.tile";
import RatingsBarGraph from "../misc/tiles/ratings_bar-graph.tile";
import ReviewsContainer from "../misc/containers/reviews.container";

/* SAMPLE PHOTOS */
/* TODO: Replace these with restAPI calls! */
import SamplePhoto1 from '../../assets/imgs/sample_photos/1.png'
import SamplePhoto2 from '../../assets/imgs/sample_photos/2.jpg'
import SamplePhoto3 from '../../assets/imgs/sample_photos/3.jpg'
import SamplePhoto4 from '../../assets/imgs/sample_photos/4.jpg'
import SamplePhoto5 from '../../assets/imgs/sample_photos/5.jpg'
import SamplePhoto6 from '../../assets/imgs/sample_photos/6.jpg'
import SamplePhoto7 from '../../assets/imgs/sample_photos/7.jpg'
import SamplePhoto8 from '../../assets/imgs/sample_photos/8.jpg'
import SamplePhoto9 from '../../assets/imgs/sample_photos/9.jpg'
import SamplePhoto10 from '../../assets/imgs/sample_photos/10.jpg'
import SamplePhoto11 from '../../assets/imgs/sample_photos/11.jpg'
import SamplePhoto12 from '../../assets/imgs/sample_photos/12.jpg'
import SamplePhoto13 from '../../assets/imgs/sample_photos/13.jpg'
import SamplePhoto14 from '../../assets/imgs/sample_photos/14.jpg'

/******* Marketplace Styling *******/
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
  
  // TODO: Figure out how to prevent scrolling for product page.
  overflow-y: scroll;
  
  overflow-x: hidden;
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

/******* Product Pages Styling *******/
const ProductContainer = styled.div`

  display: grid;
  grid-template-rows: 35px 1px 1fr;
  overflow: hidden;
  
  /* Information Center */
  & > div:nth-child(1)
  {
    display: grid;
    grid-template-columns: auto auto 1fr auto 20px;
    grid-gap: 15px;
    place-items: center;
    
    /* Making the Brand Tag and Price Boldened */
    & > div:nth-child(1), & > div:nth-child(4){ font-weight: 500; }
  }
  
  /* Divider */ 
  & > div:nth-child(2){ background-color: #D0D0D0; }
  
  /* Two main dividers */
  & > div:nth-child(3)
  {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 15px;
    
    /* Content Container */
    & > div:nth-child(1)
    {
      overflow-y: scroll;
      overflow-x: hidden;
      width: 850px;
      height: calc(100vh - 90px);
      margin: 0 auto;
    
        /* Content Wrapper */
        & > div
        {
          display:            grid;
          grid-template-rows: 5px 45px 40px 30px auto;
          grid-gap:           15px;
          width: 829px;
          margin: 0 auto;
          height: auto;
          
          /* Product Title */
          & > div:nth-child(2) 
          { 
            font-weight: 600;
            color: #1e1e1e;
          }
          
          /* Brand Contact Bar */
          & > div:nth-child(3)
          {
            display: grid;
            grid-template-columns: 40px auto 1fr 140px;
            grid-gap: 10px;
            height: 40px;
            
            /* Photo Container */
            & > div:nth-child(1)
            {
              display: grid;
              place-content: center;
              border-radius: 100%;
              background-color: #f2f2f2;
              overflow: hidden;
              
              /* Image Itself */
              & > img {height: 40px;}
            }
            
            /* Brand Text */
            & > div:nth-child(2)
            {
              display: grid;
              grid-template-rows: repeat(1fr, 2);
              place-content: center;
              
              & > div:nth-child(1)
              {
                font-size: 15px;
                font-weight: 500;
                color: #1e1e1e;
              }
              
              & > div:nth-child(2)
              {
                font-size: 13px;
                color: #AAAAAA;
              }
            }
            
            /* Contact Button */
            & > div:nth-child(4)
            {
              background-color: #1e1e1e;
              border-radius: 8px;
              margin: 1px 0;
              display: grid;
              grid-template-columns: 36px 1fr;
              
              /* SVG Container */
              & > div:nth-child(1)
              {
                margin: auto;
                height: 16px;
                padding-left: 8px;
                
                & > svg { height: 16px; width: 16px; fill: white}
              }
              
              /* Contact Text */
              & > div:nth-child(2)
              {
                margin: auto 0;
                padding-left: 4px;
                color: white;
                font-size: 14px;
              }
            }
          }
          
          /* Ratings, Statuses, Awards */
          & > div:nth-child(4)
          {
            display: grid;
            place-items: center;
            grid-template-columns: 25px auto 20px 20px auto 1fr;
            grid-gap: 8px;
            
            & > div:nth-child(1)
            {
              font-size: 15px;
              font-weight: 500;
            }
            
            & > div:nth-child(3),& > div:nth-child(4){ height: 16px }
            
            & > div > svg
            {
              fill: #1e1e1e;
              height: 16px;
            }
          }
          
          /* Tiles Grid */
          & > div:nth-child(5)
          {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 275px 215px 245px 575px 150px;
            grid-gap: 15px;
            
            /* Product Photo Scroll */
            & > div:nth-child(1){ grid-column: 1/3; }
            
            /* General Styling Tiles Backs */
            & > div:nth-child(4), & > div:nth-child(5), & > div:nth-child(6){ background-color: #F2F2F2; border-radius: 25px; overflow: hidden }
            
            /* Community Photo Scroll */
            & > div:nth-child(4)
            {
              grid-column: 1/3;
              display: grid;
              grid-template-rows: 55px 1fr;
              
              /* Tile Label */
              & > div:nth-child(1)
              {
                display: grid;
                place-items: center;
                font-weight: 500;
                font-size: 17px;
              }
              
              /* Scroll Container */
              & > div:nth-child(2)
              {
                margin: 0 10px;
              }
            }
            
            /* Product Description */
            & > div:nth-child(5)
            {
              display: grid;
              grid-template-rows: 55px 1fr;
              
              /* Tile Label */
              & > div:nth-child(1)
              {
                display: grid;
                place-items: center;
                font-weight: 500;
                font-size: 17px;
              }
            }
            
            /* Reviews */
            & > div:nth-child(6)
            {
              display: grid;
              grid-template-rows: 55px 1fr;
              
              /* Tile Label */
              & > div:nth-child(1)
              {
                display: grid;
                place-items: center;
                font-weight: 500;
                font-size: 17px;
              }
            }
            
            /* Disclaimer Grid */
            & > div:nth-child(7)
            {
              grid-column: 1/3;
              display: grid;
              grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
              background-color: #2c2f33;
            }
          }
        } 
    }
    
    /* Configuration Section */
    & > div:nth-child(2)
    {
      overflow-y: scroll;
      overflow-x: hidden;
    }
  }
`

function useQuery() { return new URLSearchParams(useLocation().search) }

function MarketplacePanel()
{
    /* Getting the url parameters */
    let query = useQuery()
    let puid = query.get('puid')

    let [productView, setProductView] = useState(false)

    /* Getting url location */
    let location = useLocation()

    /**/
    useEffect(() =>
    {
        /* Debugging to see where the search is located */
        location.search !== '' ? setProductView(true) : setProductView(false)
    }, [location])

    /* List of functions which render specific pseudo-components */
    const MarketplaceContents = () =>
    {
        return (
            <ContentHolder>
                <div>
                    {/* Marking Materials */}
                    <FirstContainer>

                        {/* TODO: Try to finish implementing tilt for fun; remove dep. if it's not needed */}
                        <Tilt options={{max: 20, scale: 1.01, reverse: true}} style={{height: 155, width: 325}}>

                        </Tilt>

                        <Tilt options={{max: 20, scale: 1.01, reverse: true}} style={{height: 155, width: 325}}>
                            <img alt='' src={BannerImgOne}/>
                        </Tilt>

                        <Tilt options={{max: 20, scale: 1.01, reverse: true}} style={{height: 155, width: 325}}>
                            <img alt='' src={BannerImgTwo}/>
                        </Tilt>

                        <Tilt options={{max: 20, scale: 1.01, reverse: true}} style={{height: 155, width: 325}}>
                            <img alt='' src={BannerImgThree}/>
                        </Tilt>

                        <Tilt options={{max: 20, scale: 1.01, reverse: true}} style={{height: 155, width: 325}}>
                            <img alt='' src={BannerImgFour}/>
                        </Tilt>

                        <Tilt options={{max: 20, scale: 1.01, reverse: true}} style={{height: 155, width: 325}}>
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
                                images={[BannerImgOne, BannerImgTwo]}
                                badge={2}
                                product_rating={100}
                                price={25.99}
                                currency='USD'
                                rate='per hour'
                                select={true}
                                shipping='1-day'
                                fee={true}
                                puid={4383413481324}

                                brand_uuid={239487234823}
                                brand_name={'United Cleaning Services'}
                                brand_tag={'unitedcleaningservices'}
                                brand_review_count={2362}
                                brand_rating={80}
                            />

                            <GeneralItemObject
                                title='Handcrafted wooden models designed exactly as requested.'
                                images={[BannerImgTwo, BannerImgOne]}
                                badge={2}
                                product_rating={100}
                                price={35.99}
                                currency='USD'
                                rate='per order'
                                select={true}
                                shipping='3-day'
                                fee={true}
                                puid={1461715742434}

                                brand_uuid={239487234823}
                                brand_name={'3D Design Marketplace'}
                                brand_tag={'3ddesignmp'}
                                brand_review_count={1124}
                                brand_rating={90}
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
                                images={[BannerImgThree, BannerImgTwo]}
                                badge={1}
                                product_rating={83}
                                price={50}
                                currency='USD'
                                rate='per piece'
                                select={true}
                                shipping='1-day'
                                fee={false}
                                puid={2346234623462}

                                brand_uuid={654618913654}
                                brand_name={'Cosmos'}
                                brand_tag={'cosmos'}
                                brand_review_count={98}
                                brand_rating={100}
                            />

                            <GeneralItemObject
                                title='Handcrafted wooden models designed exactly as requested.'
                                images={[BannerImgFour, BannerImgThree]}
                                badge={1}
                                product_rating={82}
                                price={28}
                                currency='USD'
                                rate='per hour'
                                select={true}
                                shipping='1-day'
                                fee={true}
                                puid={1463414611346}

                                brand_uuid={654618913654}
                                brand_name={''}
                                brand_tag={''}
                                brand_review_count={''}
                                brand_rating={15}
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
                                images={[BannerImgFive, BannerImgFour]}
                                badge={1}
                                product_rating={96}
                                price={12}
                                currency='USD'
                                rate='per hour'
                                select={true}
                                shipping='same-day'
                                fee={false}
                                puid={2346234613414}

                                brand_uuid={654618913654}
                                brand_name={'Wholefoods Marketplace'}
                                brand_tag={'wholefoods'}
                                brand_review_count={165486}
                                brand_rating={100}
                            />
                            <GeneralItemObject
                                title='Affordable cleaning services services offering in the New Jersey area. Ideal for busy bees and stores!'
                                images={[BannerImgSix, BannerImgFive]}
                                badge={0}
                                product_rating={89}
                                price={5}
                                currency='USD'
                                rate='per piece'
                                select={true}
                                shipping='2-day'
                                fee={false}
                                puid={2346234423623}

                                brand_uuid={87651945461}
                                brand_name={''}
                                brand_tag={''}
                                brand_review_count={6542}
                                brand_rating={95}
                            />
                            <GeneralItemObject
                                title='Affordable cleaning services services offering in the New Jersey area. Ideal for busy bees and stores!'
                                images={[BannerImgSeven, BannerImgFive]}
                                badge={1}
                                product_rating={95}
                                price={30}
                                currency='USD'
                                rate='per order'
                                select={true}
                                shipping='same-day'
                                fee={true}
                                puid={23462442452345}

                                brand_uuid={87651945461}
                                brand_name={''}
                                brand_tag={''}
                                brand_review_count={6542}
                                brand_rating={95}
                            />
                            <GeneralItemObject
                                title='Affordable cleaning services services offering in the New Jersey area. Ideal for busy bees and stores!'
                                images=''
                                badge={0}
                                product_rating={93}
                                price={45.25}
                                currency='USD'
                                rate='per hour'
                                select={true}
                                shipping='1-day'
                                fee={true}
                                puid={346456846456}

                                brand_uuid={654618913654}
                                brand_name={''}
                                brand_tag={''}
                                brand_review_count={''}
                                brand_rating={0}
                            />
                            <GeneralItemObject
                                title='Affordable cleaning services services offering in the New Jersey area. Ideal for busy bees and stores!'
                                images=''
                                badge={2}
                                product_rating={81}
                                price={13}
                                currency='USD'
                                rate='per hour'
                                select={true}
                                shipping='5+ days'
                                fee={true}
                                puid={846756634534}

                                brand_uuid={654618913654}
                                brand_name={''}
                                brand_tag={''}
                                brand_review_count={''}
                                brand_rating={0}
                            />
                            <GeneralItemObject
                                title='Affordable cleaning services services offering in the New Jersey area. Ideal for busy bees and stores!'
                                images=''
                                badge={1}
                                product_rating={86}
                                price={10}
                                currency='USD'
                                rate='per hour'
                                select={true}
                                shipping='1-day'
                                fee={true}
                                puid={23463462346}

                                brand_uuid={654618913654}
                                brand_name={'Minedesigns'}
                                brand_tag={'minedesigns'}
                                brand_review_count={105}
                                brand_rating={96}
                            />
                        </div>

                        {/* Button */}
                        <div>
                            Explore
                        </div>

                    </ThirdContainer>
                </div>
            </ContentHolder>
        )
    }

    const SearchBarHeader = () =>
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

            if (target.value === '') {
                setInput('Search')
            }
        }

        return(
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
        )
    }

    /* Determines whether to render marketplace or product */
    const RenderSwitch = () =>
    {
        /* If a product puid is not provided, load the marketplace */
        if (puid === null) {
            /* Primary Marketplace */
            //setProductViewed(false)
            return (MarketplaceContents())
        } else {
            /* Product Panel */
            //setProductViewed(true)
            return (ProductContents())
        }
    }

    /* The products content needs to overflow to be hidden so I can make the
    * configuration options scrollable... */
    const ProductContents = () =>
    {
        return (
            <>
                <ProductContainer>

                    {/* Mini Information Bar */}
                    <div>
                        {/* Brand @ Handle */}
                        <div>
                            @heehee
                        </div>

                        {/* Related Tags */}
                        <div>
                            <LocationTag text={['3D','Fashion','Affordable']}/>
                        </div>

                        <div/>

                        {/**/}
                        <div>
                            From $25.00/hr. or $99/wk.
                        </div>

                        <div/>
                    </div>

                    {/* Divider */}
                    <div/>

                    {/* Content Container Divider */}
                    <div>

                        {/* Content Container */}
                        <div>

                            {/* Content Wrapper */}
                            <div>

                                {/* Top Spacer */}
                                <div/>

                                {/* Product Title */}
                                <div>
                                    Request epic 3D designs and our team will get them out to you within a week. We will provide sketches either same-or-next day! Message us if you have any questions.
                                </div>

                                {/* Brand & Contact */}
                                <div>
                                    {/* Brand Photo */}
                                    <div>
                                        <img src={SamplePhoto14} alt='Brand Photo'/>
                                    </div>

                                    {/* Brand Tag and Name */}
                                    <div>
                                        <div>
                                            HooHooFarms
                                        </div>
                                        <div>
                                            View brand profile
                                        </div>
                                    </div>

                                    {/* Spacer */}
                                    <div/>

                                    {/* Button */}
                                    <div>
                                        <div>
                                            <ChatBubblesSVG/>
                                        </div>
                                        <div>
                                            Contact Seller
                                        </div>
                                    </div>
                                </div>

                                {/* Ratings, Like, Wishlist, Awards */}
                                <div>
                                    {/* Product Rating */}
                                    <div>
                                        4.8
                                    </div>

                                    {/* Product Rating */}
                                    <div>
                                        <StarRating rating={95}/>
                                    </div>

                                    {/* Add to wishlist */}
                                    <div>
                                        <WishlistSVG/>
                                    </div>

                                    {/* Add to liked */}
                                    <div>
                                        <HeartSVG/>
                                    </div>

                                    {/* Awards */}
                                    <div>
                                        <AwardTag badge={1} />
                                    </div>
                                </div>

                                {/* TILE CONTAINER */}
                                <div>
                                    {/* Product Images Scroll */}
                                    <PhotoScroll
                                        images={[SamplePhoto1,SamplePhoto2,SamplePhoto3,SamplePhoto4,SamplePhoto5,SamplePhoto6,SamplePhoto7]}
                                        options={{
                                            height: 275,
                                            tilesShown: 4
                                        }}
                                    />

                                    {/* Product Ratings Tile */}
                                    <RatingsBarGraph ratings={[46,28,4,12,1]}/>

                                    {/* Featured Reviews Scroll */}
                                    <ReviewScroll reviews={[
                                        {
                                            name: 'Mick Nano',
                                            tag: 'mikenano224',
                                            stars: 5,
                                            review: 'One of the best brands on Daily. Wonderful people.',
                                            profile_image: SamplePhoto14
                                        },
                                        {
                                            name: 'Rochel Danni',
                                            tag: 'rgirllovesyou',
                                            stars: 4,
                                            review: `I can't express enough how fantastic Mara and Michael are!!! Excellent!`,
                                            profile_image: SamplePhoto13
                                        },
                                        {
                                            name: 'Mick Thomson',
                                            tag: 'numseven',
                                            stars: 3,
                                            review: 'One of the best brands on the market. Thank you.',
                                            profile_image: SamplePhoto12
                                        },
                                        {
                                            name: 'Danni California',
                                            tag: 'dcali',
                                            stars: 2,
                                            review: 'One word. Amazing. I wish I could give more than 5 stars.',
                                            profile_image: SamplePhoto11
                                        }
                                    ]} />

                                    {/* Community Photos */}
                                    <div>
                                        <div>Community Photos</div>

                                        <div>
                                            <PhotoScroll
                                                images={[SamplePhoto8,SamplePhoto9,SamplePhoto10,SamplePhoto11,SamplePhoto12,SamplePhoto13,SamplePhoto14]}
                                                options={{
                                                    height: 180,
                                                    width: 300,
                                                    tilesShown: 5
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Product Description */}
                                    <div>
                                        <div>Product Description</div>

                                        <div>

                                        </div>
                                    </div>

                                    {/* Full Reviews */}
                                    <div>
                                        <div>Reviews</div>

                                        {/* Reviews Scroll Container */}
                                        <div>
                                            <ReviewsContainer reviews={[
                                                {
                                                    name: 'Mick Nano',
                                                    tag: 'mikenano224',
                                                    profile_image: SamplePhoto14,
                                                    stars: 5,
                                                    review: 'Absolutely wonderful seller! They\'ve made my companies 3D designs in\n' +
                                                        'about a day and they look wonderful! Check them out!',
                                                    images: []
                                                },
                                                {
                                                    name: 'Rachel Touly',
                                                    tag: 'rachelgirl4232',
                                                    profile_image: SamplePhoto13,
                                                    stars: 4,
                                                    review: 'This team responded to my questions within an hour and proved to be\n' +
                                                        'one of the best experiences I\'ve had on this platform. Wonderful!',
                                                    images: []
                                                },
                                                {
                                                    name: 'John McNiel',
                                                    tag: 'jboy33',
                                                    profile_image: SamplePhoto12,
                                                    stars: 5,
                                                    review: 'Absolutely wonderful seller! They\'ve made my companies 3D designs in\n' +
                                                        'about a day and they look wonderful! Check them out!',
                                                    images: []
                                                },
                                                {
                                                    name: 'Sal Gomez',
                                                    tag: 'happymez',
                                                    profile_image: SamplePhoto11,
                                                    stars: 5,
                                                    review: 'Epic epic epic.',
                                                    images: []
                                                },
                                                {
                                                    name: 'Rick Gerviaz',
                                                    tag: 'rickboytheman',
                                                    profile_image: SamplePhoto10,
                                                    stars: 5,
                                                    review: 'Thank you!! My company is super happy with your guys work!',
                                                    images: []
                                                },
                                                {
                                                    name: 'Mike Ike',
                                                    tag: 'mikeandike',
                                                    profile_image: SamplePhoto9,
                                                    stars: 5,
                                                    review: 'noice',
                                                    images: []
                                                }
                                                ]}
                                            />
                                        </div>
                                    </div>

                                    {/* Disclaimer Grid */}
                                    <div>
                                        <div>test</div>
                                        <div>tst</div>
                                        <div>test</div>

                                    </div>
                                </div>

                            </div>
                        </div>


                        {/* Configuration Settings */}
                        <div>

                        </div>
                    </div>

                </ProductContainer>
            </>
        )
    }

    /* Primary return statement for functional component */
    return(
        <PrimaryContainer style={{overflowY: productView ? 'hidden' : 'scroll'}}>

        {/* Header Containing Search & Other Functions */}
        {SearchBarHeader()}

        {/* Primary Marketplace */}
        {RenderSwitch()}

        </PrimaryContainer>
    )

}

export default MarketplacePanel