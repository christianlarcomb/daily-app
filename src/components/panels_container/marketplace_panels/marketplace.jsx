import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import Tilt from 'react-tilt'

/* Components */
import GeneralItemObject from "../../misc/general_item_object";
import ProductInterest from "./product-interest.container";

/* Vectors */
import { ReactComponent as DailyTextLogo } from '../../../assets/svgs/daily/daily_text.svg';
import { ReactComponent as SearchIcon }    from '../../../assets/svgs/ui/search.svg';
import { ReactComponent as ClockIcon }     from '../../../assets/svgs/explore_header/clock.svg';
import { ReactComponent as FilterIcon }    from '../../../assets/svgs/explore_header/sort_vector.svg';

/* Images */
import BannerImgOne from '../../../assets/imgs/explore/banner_image_1.png'
import BannerImgTwo from '../../../assets/imgs/explore/banner_image_2.jpg'
import BannerImgThree from '../../../assets/imgs/explore/banner_image_3.jpg'
import BannerImgFour from '../../../assets/imgs/explore/banner_image_4.png'
import BannerImgFive from '../../../assets/imgs/explore/banner_image_5.png'
import BannerImgSix from '../../../assets/imgs/explore/banner_image_6.jpg'
import BannerImgSeven from '../../../assets/imgs/explore/banner_image_7.jpg'


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
  overflow-y: hidden;
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

const SearchBar = styled.div`
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
                <SearchBar>
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
                </SearchBar>

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

    /* Primary return statement for functional component */
    return(
        <PrimaryContainer style={{overflowY: productView ? 'hidden' : 'scroll'}}>

            {/* Header Containing Search & Other Functions */}
            {SearchBarHeader()}

            {/* Primary Marketplace */}
            {puid === null ? MarketplaceContents() : <ProductInterest/>}

        </PrimaryContainer>
    )

}

export default MarketplacePanel