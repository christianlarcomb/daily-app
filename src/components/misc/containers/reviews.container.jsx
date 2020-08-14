import React from 'react'
import styled from 'styled-components'

/* SVGs */
import { ReactComponent as StarSVG } from '../../../assets/svgs/products/star.svg';

const CommentContainer = styled.div`

  overflow-y: scroll;
  height: 520px;
  width: 100%;
  
  /* Styling the comment container */
  & > div
  {
    height: auto;
    
    display: grid;
    grid-template-rows: 42px auto auto;
    grid-gap: 10px;
    margin: 0 40px;
    
    /* Image, Name/Tag, Rating Given */
    & > div:nth-child(1)
    {
      display: grid;
      grid-template-columns: 42px auto 10px 15px auto 1fr;
      grid-gap: 6px;
      
      /* Profile Picture Container */
      & > div:nth-child(1)
      {;
        background-color: #2c2f33;
        border-radius: 100%;
        display: grid;
        place-items: center;
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

                                    </div>

                                    {/* Brand Text */}
                                    <div>
                                        <div>Sarah Posh</div>
                                        <div>@sarahposh</div>
                                    </div>

                                    {/* Spacer */}
                                    <div/>

                                    {/* Star Vector */}
                                    <StarSVG/>

                                    {/* Amount of Stars */}
                                    <div>
                                        5 Stars
                                    </div>

                                    {/* Spacer */}
                                    <div/>
                                </div>
                                <div>
                                    Absolutely wonderful seller! They've made my companies 3D designs in
                                    about a day and they look wonderful! Check them out!
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