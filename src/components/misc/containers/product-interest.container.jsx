import React from 'react'
import styled from "styled-components";

/* Components */
import RatingsBarGraph from "../tiles/ratings_bar-graph.tile";
import ReviewScroll from "../tiles/review_scroll.tile";
import LocationTag from "../location_tag";

/* Photos */

import {ReactComponent as ChatBubblesSVG} from "../../../assets/svgs/ui/chat-bubbles.svg";
import StarRating from "../star_rating";
import {ReactComponent as WishlistSVG} from "../../../assets/svgs/products/wishlist.svg";
import {ReactComponent as HeartSVG} from "../../../assets/svgs/products/heart.svg";
import AwardTag from "../award_tag";
import PhotoScroll from "../tiles/photo_scroll.tile";

import SamplePhoto1 from "../../../assets/imgs/sample_photos/1.png";
import SamplePhoto2 from "../../../assets/imgs/sample_photos/2.jpg";
import SamplePhoto3 from "../../../assets/imgs/sample_photos/3.jpg";
import SamplePhoto4 from "../../../assets/imgs/sample_photos/4.jpg";
import SamplePhoto5 from "../../../assets/imgs/sample_photos/5.jpg";
import SamplePhoto6 from "../../../assets/imgs/sample_photos/6.jpg";
import SamplePhoto7 from "../../../assets/imgs/sample_photos/7.jpg";
import SamplePhoto14 from "../../../assets/imgs/sample_photos/14.jpg";
import SamplePhoto13 from "../../../assets/imgs/sample_photos/13.jpg";
import SamplePhoto12 from "../../../assets/imgs/sample_photos/12.jpg";
import SamplePhoto11 from "../../../assets/imgs/sample_photos/11.jpg";
import SamplePhoto8 from "../../../assets/imgs/sample_photos/8.jpg";
import SamplePhoto9 from "../../../assets/imgs/sample_photos/9.jpg";
import SamplePhoto10 from "../../../assets/imgs/sample_photos/10.jpg";

import ReviewsContainer from "./reviews.container";

import {ReactComponent as SafeSVG} from "../../../assets/svgs/disclaimers/safe-box.svg";
import {ReactComponent as ShippingSVG} from "../../../assets/svgs/disclaimers/box.svg";
import {ReactComponent as ConversationSVG} from "../../../assets/svgs/disclaimers/conversation.svg";

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
            grid-template-rows: 275px 215px 245px 575px 100px 5px;
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
              padding: 0 30px 30px 30px;
              
              /* Tile Label */
              & > div:nth-child(1)
              {
                display: grid;
                place-items: center;
                font-weight: 500;
                font-size: 17px;
              }
              
              & > div:nth-child(2)
              {
                font-size: 14px;
                
                & > h3
                {
                  font-weight: 500;
                }
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
              grid-template-columns: auto auto auto;
              margin: 0 auto;
              grid-gap: 30px;
              place-content: center;
              
              /* Individual Disclaimers */
              & > div
              {
                grid-template-columns: 25px auto;
                grid-gap: 10px;
                display: grid;
                place-items: center;
                font-size: 11px;
                color: #979797;
                
                /* Styling SVG container */
                & > div:nth-child(1)
                {
                  height: 25px;
                  width: 25px;
                }
              }
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

export default function ProductInterest(props)
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
                                        <h3>Welcome to our product page!</h3>

                                        Hopefully from the product pictures listed above you can see my dedication and care for my craft. Although my brands hours range from 8 to 12 plus hour days, I respond to inquiries, orders, you name it within an hour or 2. If it's not the automated response it will be me personally getting ready to produce the best product possible for you or your brand.
                                        <br/>
                                        <br/>
                                        <h3>Getting Started!</h3>

                                        I've listed off the configuration options on the right hand side and for anything that I may have missed or if their are any special requests, I've added an optional description box so I can review and possibly attempt your special request.
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
                                    <div>
                                        <div>
                                            <SafeSVG/>
                                        </div>
                                        <div>
                                            Secure transactions protected by the worlds leading cyber security technology.
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <ShippingSVG/>
                                        </div>
                                        <div>
                                            This service does not require shipping.
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <ConversationSVG/>
                                        </div>
                                        <div>
                                            Have a question? <br/> This brand has enabled instant messaging, try it out by pressing contact seller above.
                                        </div>
                                    </div>
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