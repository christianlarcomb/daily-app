import React, {useEffect, useState} from 'react'
import styled from "styled-components";

const CalendarContainer = styled.div`
  
  display: grid;
  grid-template-rows: 25px auto;
  grid-gap: 10px;
  z-index: 5;
  transition: all ease-in-out 0.5s;
  
  {/* Month Selector */}
  & > div:nth-child(1)
  {
    display: grid;
    grid-template-columns: 25px 1fr 25px;
    height: 25px;
    width: 210px;
    place-content: center;
    place-items: center;
    
    /* Month Text */
    & > div:nth-child(2)
    {
      padding-bottom: 3px;
    }
    
    /* Month Selectors */
    & > div:nth-child(1), & > div:nth-child(3)
    {
      border-radius: 5px;
      height: 25px;
      background-color: #1e1e1e;
      width: 100%;
    }
  }
  
  {/* Day Selector */}
  & > div:nth-child(2)
  {
     height: 100%;
     width: 100%;
     display: grid;
     grid-template-columns: repeat(7, 30px);
     grid-template-rows: repeat(6, 30px);
  }
`

const NonSelectableCalendarDates = styled.div`
  border-radius: 100%;
  place-items: center;
  place-content: center;
  display: grid;
  color: #e2e2e2;
`

const SelectableCalendarDates = styled.div`

  border-radius: 100%;
  cursor: pointer;
  place-items: center;
  place-content: center;
  display: grid;
  
  &:hover
  {
    background-color: #33d56e;
    color: white;
    transition: background-color ease-in-out 0.05s, color ease-in-out 0.05s;
  }
`

export default function CalendarSelector()
{

    /* Necessary Month Data */
    const months =
    [
        { name: 'January',   startingNumber: 29, startingIndex: 3, totalDays: 31 },
        { name: 'February',  startingNumber: 26, startingIndex: 6, totalDays: 29 },
        { name: 'March',     startingNumber: 1,  startingIndex: 0, totalDays: 31 },
        { name: 'April',     startingNumber: 29, startingIndex: 3, totalDays: 30 },
        { name: 'May',       startingNumber: 26, startingIndex: 5, totalDays: 31 },
        { name: 'June',      startingNumber: 31, startingIndex: 1, totalDays: 30 },
        { name: 'July',      startingNumber: 28, startingIndex: 3, totalDays: 31 },
        { name: 'August',    startingNumber: 26, startingIndex: 6, totalDays: 31 },
        { name: 'September', startingNumber: 30, startingIndex: 2, totalDays: 30 },
        { name: 'October',   startingNumber: 27, startingIndex: 4, totalDays: 31 },
        { name: 'November',  startingNumber: 1,  startingIndex: 0, totalDays: 30 },
        { name: 'December',  startingNumber: 29, startingIndex: 2, totalDays: 31 }
    ]

    let [monthIndex, setMonthIndex] = useState(0)
    let [daysToRender, setDaysToRender] = useState([])

    useEffect( () => {

        setDaysToRender([])

        let firstHalfRender = true
        let secondHalfRender = false
        let thirdHalfRender = false

        /* Looping the calendar size index */
        for(let i = 0, x = months[monthIndex].startingNumber; i <= 41; i++, x++)
        {

            /* The final day of the previous, current, and next month which is determined but boolean logic */
            if(firstHalfRender)
            {
                /*  */
                if(x > months[monthIndex > 0 ? monthIndex-1 : 11].totalDays || x === i+1)                                              // Is the displayed day greater than the previous months maximum day or is x equal to the first index plus 1
                {
                    x = 1
                    firstHalfRender = false
                    secondHalfRender = true
                }
            }
            if(secondHalfRender)
            {
                if(x > months[monthIndex].totalDays)                                                                                   // Is the displayed day greater than the current months max day
                {
                    x = 1
                    secondHalfRender = false
                    thirdHalfRender = true
                }
            }
            if(thirdHalfRender)
            {
                if(x > months[monthIndex < 11 ? monthIndex + 1 : 0].totalDays)                                                         // Is the displayed day greater than the next months max day
                    x = 1
            }

            /* If the index is within the range of the monthIndex selected */
            if (i >= months[monthIndex].startingIndex && i <= months[monthIndex].startingIndex + (months[monthIndex].totalDays - 1))
            {
                setDaysToRender(prevState => [...prevState, <SelectableCalendarDates>{x}</SelectableCalendarDates>])
            } else {
                setDaysToRender(prevState => [...prevState, <NonSelectableCalendarDates>{x}</NonSelectableCalendarDates>])
            }
        }

    }, [monthIndex])

    const handleLeftButton = () =>
    {
        if(monthIndex > 0)
            setMonthIndex(monthIndex-1)
    }

    const handleRightButton = () =>
    {
        if(monthIndex < 11)
            setMonthIndex(monthIndex+1)
    }

    return(
        <CalendarContainer>
            {/* Month Selector */}
            <div>
                <div onClick={handleLeftButton}>

                </div>

                <div>{months[monthIndex].name}</div>

                <div onClick={handleRightButton}>

                </div>
            </div>

            {/* Day Selector */}
            <div>
                {daysToRender}
            </div>
        </CalendarContainer>
    )
}