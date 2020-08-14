import React from 'react'
import styled from 'styled-components'

/* SVGs */
import { ReactComponent as StarSVG } from '../../../assets/svgs/products/star.svg';

const CommentContainer = styled.div`

  overflow-y: scroll;
  height: 520px;
  width: 100%;
  
  /* Styling the reviews container */
  & > div
  {
    height: auto;
    
    display: grid;
    grid-template-rows: 40px auto auto;
    grid-gap: 10px;
    margin: 0 30px;
    
    /* Image, Name/Tag, Rating Given */
    & > div:nth-child(1)
    {
      display: grid;
      grid-template-columns: 40px auto 2px 15px auto 1fr;
      grid-gap: 6px;
      
      /* Profile Picture Container */
      & > div:nth-child(1)
      {
        background-color: #2c2f33;
        border-radius: 100%;
        display: grid;
        place-items: center;
        overflow: hidden;
        
        & > img 
        {
          height: 40px;
        }
      }
      
      /* Name / Tag - Grid */
      & > div:nth-child(2)
      {
        display: grid;
        grid-template-rows: 1fr 1fr;
        
        /* Name */
        & > div:nth-child(1)
        {
          font-size: 14px;
          margin-top: auto;
          transform: translateY(1px);
        }
        /* Tag */
        & > div:nth-child(2)
        {
          font-size: 13px;
          margin-bottom: auto;
          color: #AAAAAA;
          transform: translateY(-1px);
        }
      }
      
      /* Styling the star */
      & > svg
      {
        height: 12px;
        width: 12px;
        margin: auto;
      }
      
      /* Star Rating in Text */
      & > div:nth-child(5)
      {
        display: grid;
        align-content: center;
        font-size: 13px;
      }
    }
    
    /* Text Description */
    & > div:nth-child(2)
    {
      font-size: 13px;
    }
  }
`

const NoCommentContainer = styled.div`
  display: grid;
  place-items: center;
`

export default function ReviewsContainer(props)
{

    /*  */
    let reviewObjects = props.reviews

    return(
        <>
            { reviewObjects ?
                <CommentContainer>
                    {reviewObjects.map(review => (
                        <>
                            <div>
                                <div>
                                    {/* Image */}
                                    <div>
                                        <img src={review.profile_image} alt='Profile Image'/>
                                    </div>

                                    {/* Brand Text */}
                                    <div>
                                        <div>{review.name}</div>
                                        <div>@{review.tag}</div>
                                    </div>

                                    {/* Spacer */}
                                    <div/>

                                    {/* Star Vector */}
                                    <StarSVG/>

                                    {/* Amount of Stars */}
                                    <div>
                                        {review.stars} Stars
                                    </div>

                                    {/* Spacer */}
                                    <div/>
                                </div>
                                <div>
                                    {review.review}
                                </div>
                                <div>

                                </div>
                            </div>
                            <br/>
                        </>
                    ))}
                </CommentContainer>
                :
                <NoCommentContainer>

                </NoCommentContainer>
            }
        </>
    )
}