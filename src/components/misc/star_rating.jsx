import React from 'react'
import styled from 'styled-components'

/* TODO: Possibly optimize this? */
/* Generates ID's for each products individual stars... yikes. */
import { nanoid } from "nanoid";

const ProductRatings = styled.div`

  height: 100%;
  width: 100%;  
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  place-items: center;
  grid-gap: 1px;
  
  /* Generic Styling of Stars */
  & > svg 
  {
    height: 12px;
    width: 12px;
    opacity: 95%;
    position: relative;
  }
`

export default class StarRating extends React.Component
{

    constructor(props)
    {
        super(props);

        this.state =
        {
            starOne: 0,
            starTwo: 0,
            starThree: 0,
            starFour: 0,
            starFive: 0,

            starOneID: '',
            starTwoID: '',
            starThreeID: '',
            starFourID: '',
            starFiveID: ''
        }
    }

    /* Before the component mounts, calculate the stars percentages and set state */
    componentWillMount()
    {
        /* Getting the rating passed to the ratings object */
        let rating = this.props.rating

        /* Initializing the ratings array */
        let star_values = [];

        /* Product Rating Star Conversion */
        for (let i = 0; i < 5; i++)
        {
            /* Defaulting to max value */
            let product_value_to_be_set = 100;
            let brand_value_to_be_set = 100;

            /* Product Rating Checks */
            if (rating < 20) { product_value_to_be_set = (rating / 20) * 100; }
            if (rating <= 0) { product_value_to_be_set = 0; }

            /* Brand Rating Checks */
            if (rating < 20) { brand_value_to_be_set = (rating / 20) * 100; }
            if (rating <= 0) { brand_value_to_be_set = 0; }

            /* Setting the array of values */
            star_values[i] = product_value_to_be_set;

            /* Decrementing to the next star */
            rating -= 20;
        }

        let uniqueString = nanoid()
        let starOneID = uniqueString.slice(0,4)
        let starTwoID = uniqueString.slice(4,8)
        let starThreeID = uniqueString.slice(8,12)
        let starFourID = uniqueString.slice(12,16)
        let starFiveID = uniqueString.slice(16,20)

        /* Setting the state */
        this.setState({

            starOne: star_values[0],
            starTwo: star_values[1],
            starThree: star_values[2],
            starFour: star_values[3],
            starFive: star_values[4],

            starOneID: starOneID,
            starTwoID: starTwoID,
            starThreeID: starThreeID,
            starFourID: starFourID,
            starFiveID: starFiveID

        })
    }

    handleStarColor = () =>
    {
        try
        {
            return(this.props.options.primaryColor)
        } catch (e) {
            return '#FCC034'
        }
    }

    render()
    {
        return (
            <>

                {/* Ratings Container */}
                <ProductRatings>

                    <svg height="511pt"
                         viewBox="0 -10 511.99143 511"
                         width="511pt"
                         xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <linearGradient id={`starOne-${this.state.starOneID}`}>
                                <stop offset="0%" stopColor={this.handleStarColor()}/>
                                <stop offset={this.state.starOne + `%`} stopColor={this.handleStarColor()}/>
                                <stop offset={this.state.starOne + `%`} stopColor="rgba(0,0,0,0.5)"/>
                                <stop offset="100%" stopColor="rgba(0,0,0,0.5)"/>
                            </linearGradient>
                        </defs>

                        <path fill={`url(#starOne-${this.state.starOneID})`}
                              d="m510.652344 185.882812c-3.371094-10.367187-12.566406-17.707031-23.402344-18.6875l-147.796875-13.417968-58.410156-136.75c-4.3125-10.046875-14.125-16.53125-25.046875-16.53125s-20.738282 6.484375-25.023438 16.53125l-58.410156 136.75-147.820312 13.417968c-10.835938 1-20.011719 8.339844-23.402344 18.6875-3.371094 10.367188-.257813 21.738282 7.9375 28.925782l111.722656 97.964844-32.941406 145.085937c-2.410156 10.667969 1.730468 21.699219 10.582031 28.097656 4.757813 3.457031 10.347656 5.183594 15.957031 5.183594 4.820313 0 9.644532-1.28125 13.953125-3.859375l127.445313-76.203125 127.421875 76.203125c9.347656 5.585938 21.101562 5.074219 29.933593-1.324219 8.851563-6.398437 12.992188-17.429687 10.582032-28.097656l-32.941406-145.085937 111.722656-97.964844c8.191406-7.1875 11.308594-18.535156 7.9375-28.925782zm-252.203125 223.722657"
                        />

                    </svg>

                    <svg height="511pt"
                         viewBox="0 -10 511.99143 511"
                         width="511pt"
                         xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <linearGradient id={`starTwo-${this.state.starTwoID}`}>
                                <stop offset="0%" stopColor={this.handleStarColor()}/>
                                <stop offset={this.state.starTwo + `%`} stopColor={this.handleStarColor()}/>
                                <stop offset={this.state.starTwo + `%`} stopColor="rgba(0,0,0,0.5)"/>
                                <stop offset="100%" stopColor="rgba(0,0,0,0.5)"/>
                            </linearGradient>
                        </defs>

                        <path fill={`url(#starTwo-${this.state.starTwoID})`}
                              d="m510.652344 185.882812c-3.371094-10.367187-12.566406-17.707031-23.402344-18.6875l-147.796875-13.417968-58.410156-136.75c-4.3125-10.046875-14.125-16.53125-25.046875-16.53125s-20.738282 6.484375-25.023438 16.53125l-58.410156 136.75-147.820312 13.417968c-10.835938 1-20.011719 8.339844-23.402344 18.6875-3.371094 10.367188-.257813 21.738282 7.9375 28.925782l111.722656 97.964844-32.941406 145.085937c-2.410156 10.667969 1.730468 21.699219 10.582031 28.097656 4.757813 3.457031 10.347656 5.183594 15.957031 5.183594 4.820313 0 9.644532-1.28125 13.953125-3.859375l127.445313-76.203125 127.421875 76.203125c9.347656 5.585938 21.101562 5.074219 29.933593-1.324219 8.851563-6.398437 12.992188-17.429687 10.582032-28.097656l-32.941406-145.085937 111.722656-97.964844c8.191406-7.1875 11.308594-18.535156 7.9375-28.925782zm-252.203125 223.722657"/>

                    </svg>

                    <svg height="511pt"
                         viewBox="0 -10 511.99143 511"
                         width="511pt"
                         xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <linearGradient id={`starThree-${this.state.starThreeID}`}>
                                <stop offset="0%" stopColor={this.handleStarColor()}/>
                                <stop offset={this.state.starThree + `%`} stopColor={this.handleStarColor()}/>
                                <stop offset={this.state.starThree + `%`} stopColor="rgba(0,0,0,0.5)"/>
                                <stop offset="100%" stopColor="rgba(0,0,0,0.5)"/>
                            </linearGradient>
                        </defs>

                        <path fill={`url(#starThree-${this.state.starThreeID})`}
                              d="m510.652344 185.882812c-3.371094-10.367187-12.566406-17.707031-23.402344-18.6875l-147.796875-13.417968-58.410156-136.75c-4.3125-10.046875-14.125-16.53125-25.046875-16.53125s-20.738282 6.484375-25.023438 16.53125l-58.410156 136.75-147.820312 13.417968c-10.835938 1-20.011719 8.339844-23.402344 18.6875-3.371094 10.367188-.257813 21.738282 7.9375 28.925782l111.722656 97.964844-32.941406 145.085937c-2.410156 10.667969 1.730468 21.699219 10.582031 28.097656 4.757813 3.457031 10.347656 5.183594 15.957031 5.183594 4.820313 0 9.644532-1.28125 13.953125-3.859375l127.445313-76.203125 127.421875 76.203125c9.347656 5.585938 21.101562 5.074219 29.933593-1.324219 8.851563-6.398437 12.992188-17.429687 10.582032-28.097656l-32.941406-145.085937 111.722656-97.964844c8.191406-7.1875 11.308594-18.535156 7.9375-28.925782zm-252.203125 223.722657"/>

                    </svg>

                    <svg height="511pt"
                         viewBox="0 -10 511.99143 511"
                         width="511pt"
                         xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <linearGradient id={`starFour-${this.state.starFourID}`}>
                                <stop offset="0%" stopColor={this.handleStarColor()}/>
                                <stop offset={this.state.starFour + `%`} stopColor={this.handleStarColor()}/>
                                <stop offset={this.state.starFour + `%`} stopColor="rgba(0,0,0,0.5)"/>
                                <stop offset="100%" stopColor="rgba(0,0,0,0.5)"/>
                            </linearGradient>
                        </defs>

                        <path fill={`url(#starFour-${this.state.starFourID})`}
                              d="m510.652344 185.882812c-3.371094-10.367187-12.566406-17.707031-23.402344-18.6875l-147.796875-13.417968-58.410156-136.75c-4.3125-10.046875-14.125-16.53125-25.046875-16.53125s-20.738282 6.484375-25.023438 16.53125l-58.410156 136.75-147.820312 13.417968c-10.835938 1-20.011719 8.339844-23.402344 18.6875-3.371094 10.367188-.257813 21.738282 7.9375 28.925782l111.722656 97.964844-32.941406 145.085937c-2.410156 10.667969 1.730468 21.699219 10.582031 28.097656 4.757813 3.457031 10.347656 5.183594 15.957031 5.183594 4.820313 0 9.644532-1.28125 13.953125-3.859375l127.445313-76.203125 127.421875 76.203125c9.347656 5.585938 21.101562 5.074219 29.933593-1.324219 8.851563-6.398437 12.992188-17.429687 10.582032-28.097656l-32.941406-145.085937 111.722656-97.964844c8.191406-7.1875 11.308594-18.535156 7.9375-28.925782zm-252.203125 223.722657"/>

                    </svg>

                    <svg height="511pt"
                         viewBox="0 -10 511.99143 511"
                         width="511pt"
                         xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <linearGradient id={`starFive-${this.state.starFiveID}`}>
                                <stop offset="0%" stopColor={this.handleStarColor()}/>
                                <stop offset={this.state.starFive + `%`} stopColor={this.handleStarColor()}/>
                                <stop offset={this.state.starFive + `%`} stopColor="rgba(0,0,0,0.5)"/>
                                <stop offset="100%" stopColor="rgba(0,0,0,0.5)"/>
                            </linearGradient>
                        </defs>

                        <path fill={`url(#starFive-${this.state.starFiveID})`}
                              d="m510.652344 185.882812c-3.371094-10.367187-12.566406-17.707031-23.402344-18.6875l-147.796875-13.417968-58.410156-136.75c-4.3125-10.046875-14.125-16.53125-25.046875-16.53125s-20.738282 6.484375-25.023438 16.53125l-58.410156 136.75-147.820312 13.417968c-10.835938 1-20.011719 8.339844-23.402344 18.6875-3.371094 10.367188-.257813 21.738282 7.9375 28.925782l111.722656 97.964844-32.941406 145.085937c-2.410156 10.667969 1.730468 21.699219 10.582031 28.097656 4.757813 3.457031 10.347656 5.183594 15.957031 5.183594 4.820313 0 9.644532-1.28125 13.953125-3.859375l127.445313-76.203125 127.421875 76.203125c9.347656 5.585938 21.101562 5.074219 29.933593-1.324219 8.851563-6.398437 12.992188-17.429687 10.582032-28.097656l-32.941406-145.085937 111.722656-97.964844c8.191406-7.1875 11.308594-18.535156 7.9375-28.925782zm-252.203125 223.722657"/>

                    </svg>

                </ProductRatings>
            </>
        )
    }
}