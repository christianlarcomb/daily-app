import React, {useState} from "react";
import styled from 'styled-components'
import {ReactComponent as DailyTextLogo} from "../../../assets/svgs/daily/daily_text.svg";
import { ReactComponent as SearchIcon }    from '../../../assets/svgs/ui/search.svg';


import UserOne from '../../../assets/imgs/sample_photos/14.jpg';

const PrimaryContainer = styled.div`
  display: grid;
  grid-template-columns: 270px 1fr;
`

const SelectionMenu = styled.div`
  display: grid;
  grid-template-rows: 70px 36px 20px auto;
  grid-gap: 6px;
  margin: 0 6px;
  
  /* Menu Title */
  & > div:nth-child(1)
  {
    font-size: 20px;
    font-weight: 500;
    margin: auto 0;
  }
  
  /* Filter Section */
  & > div:nth-child(3)
  {
    display: grid;
    grid-template-columns: 1fr 20px;
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
      grid-template-columns: 1fr 36px;
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

const SearchIconStyled = styled(SearchIcon)`
  stroke: #2c2f33;
  height: 16px;
  width: 16px;
`

const MessagesContainer = styled.div`
 
  
`

const ContentDivider = styled.div`
  background-color: #f2f2f2;
  display: grid;
  grid-template-columns: 1fr 315px;
  grid-gap: 20px;
`

const MessageScrollContainer = styled.div`
  display: grid;
  grid-template-rows: 40px 1fr;
  padding-left: 20px;
  
  /* Header Section */
  & > div:nth-child(1)
  {
    display: grid;
    grid-template-columns: auto auto 1fr;
    grid-gap: 8px;
    place-content: center;
    place-items: center;
    
    
    & > div:nth-child(1)
    {
      font-weight: 500;
    }
    
    /* Online Indicator */
    & > div:nth-child(2)
    {
      background-color: #6ab26a;
      height: 10px;
      width: 10px;
      border-radius: 100%;
    }
  }
 
`

const WidgetContainer = styled.div`
  
`

const IndividualMessage = styled.div`

    height: 48px;
    width: 100%;
    display: grid;
    grid-template-columns: 44px 1fr 24px;
    grid-gap: 6px;
    
    border-radius: 6px;
    margin-bottom: 6px;
    
    padding: 0 5px;
    
    /* Image Container */
    & > div:nth-child(1)
    {
      height: 36px;
      width: 36px;
      background-color: #f2f2f2;
      border-radius: 100%;
      margin: auto;
      overflow: hidden;
      display: grid;
      place-content: center;
      
      & > img:nth-child(1)
      {
        height: 46px;
      }
    }
    
    /* Text Container */
    & > div:nth-child(2)
    {
      display: grid;
      grid-template-rows: 1fr 1fr;
      
      & div:nth-child(1)
      {
        font-size: 14px;
        transform: translateY(8px);
      }
      & div:nth-child(2)
      {
        font-size: 13px;
        transform: translateY(-1px);
        color: grey;
      }
    }
    
    /* Verified Container */
    & > div:nth-child(3)
    {
      height: 14px;
      width: 14px;
      background-color: #6ab26a;
      margin: auto 0;
      
      border-radius: 100%;
    }
    
    &:hover
    { 
      background-color: #f2f2f2;
      cursor: pointer;
      transition: all ease-in-out 0.075s;
      
    }
`

function ChatPanel()
{

    {/* Powers the search functionality */}
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
        )
    }

    return(
        <PrimaryContainer>

            {/* Menu Section */}
            <SelectionMenu>

                {/* Title */}
                <div>Messages</div>

                {/* Search Container */}
                { SearchBarHeader() }

                {/* Filter Section */}
                <div>
                    <div></div>
                    <div></div>
                </div>

                {/* Messages Container */}
                <MessagesContainer>

                    {/* Individual Messages */}
                    <IndividualMessage>

                        {/* Profile Photo */}
                        <div>
                            <img src={UserOne} alt={'User Image'}/>
                        </div>

                        {/* User Text */}
                        <div>
                            <div>Richard Michael</div>
                            <div>@richardmichael</div>
                        </div>

                        {/* Verified Logo */}
                        <div>

                        </div>

                    </IndividualMessage>

                    {/* Individual Messages */}
                    <IndividualMessage>

                        {/* Profile Photo */}
                        <div>
                            <img src={UserOne} alt={'User Image'}/>
                        </div>

                        {/* User Text */}
                        <div>
                            <div>Richard Michael</div>
                            <div>@richardmichael</div>
                        </div>

                        {/* Verified Logo */}
                        <div>

                        </div>

                    </IndividualMessage>

                    {/* Individual Messages */}
                    <IndividualMessage>

                        {/* Profile Photo */}
                        <div>
                            <img src={UserOne} alt={'User Image'}/>
                        </div>

                        {/* User Text */}
                        <div>
                            <div>Richard Michael</div>
                            <div>@richardmichael</div>
                        </div>

                        {/* Verified Logo */}
                        <div>

                        </div>

                    </IndividualMessage>

                    {/* Individual Messages */}
                    <IndividualMessage>

                        {/* Profile Photo */}
                        <div>
                            <img src={UserOne} alt={'User Image'}/>
                        </div>

                        {/* User Text */}
                        <div>
                            <div>Richard Michael</div>
                            <div>@richardmichael</div>
                        </div>

                        {/* Verified Logo */}
                        <div>

                        </div>

                    </IndividualMessage>

                    {/* Individual Messages */}
                    <IndividualMessage>

                        {/* Profile Photo */}
                        <div>
                            <img src={UserOne} alt={'User Image'}/>
                        </div>

                        {/* User Text */}
                        <div>
                            <div>Richard Michael</div>
                            <div>@richardmichael</div>
                        </div>

                        {/* Verified Logo */}
                        <div>

                        </div>

                    </IndividualMessage>

                    {/* Individual Messages */}
                    <IndividualMessage>

                        {/* Profile Photo */}
                        <div>
                            <img src={UserOne} alt={'User Image'}/>
                        </div>

                        {/* User Text */}
                        <div>
                            <div>Richard Michael</div>
                            <div>@richardmichael</div>
                        </div>

                        {/* Verified Logo */}
                        <div>

                        </div>

                    </IndividualMessage>

                    {/* Individual Messages */}
                    <IndividualMessage>

                        {/* Profile Photo */}
                        <div>
                            <img src={UserOne} alt={'User Image'}/>
                        </div>

                        {/* User Text */}
                        <div>
                            <div>Richard Michael</div>
                            <div>@richardmichael</div>
                        </div>

                        {/* Verified Logo */}
                        <div>

                        </div>

                    </IndividualMessage>

                </MessagesContainer>

            </SelectionMenu>

            {/* Content Section */}
            <ContentDivider>

                {/* Displaying the Chat contents */}
                <MessageScrollContainer>
                    <div>

                        <div>@richardmichael</div>

                        {/* Online Indicator */}
                        <div></div>
                    </div>
                    <div>

                    </div>
                </MessageScrollContainer>

                {/*  */}
                <WidgetContainer>

                </WidgetContainer>

            </ContentDivider>

        </PrimaryContainer>
    )
}

export default ChatPanel