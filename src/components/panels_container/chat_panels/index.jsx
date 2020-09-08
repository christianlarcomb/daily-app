import React, {useState, useEffect, useRef} from "react";
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
  grid-gap: 10px;
`

const MessagesContentContainer = styled.div`
  display: grid;
  grid-template-rows: 40px auto 50px;
  padding-left: 20px;
  position: relative;
  
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

const MessagesScrollContainer = styled.div`
   overflow-y: scroll;
   height: calc(100vh - 90px);
   position: relative;
   padding-right: 20px;
   min-width: 450px;
`

const MessageContext = styled.div`
   display: grid;
   grid-template-columns: 30px auto;
   grid-gap: 8px;
   padding: 12px 0;
   
   /* Image Section */
   & > div:nth-child(1)
   {
    background-color: #6ab26a;
    border-radius: 100%;
    height: 30px;
    width: 30px;
   }
   
   /* Text + Content Grid */
   & > div:nth-child(2)
   {
    display: grid;
    grid-template-rows: 15px auto auto;
    grid-gap: 2px;
    
    /* Name and timestamp */
    & > div:nth-child(1)
    {
      
      display: grid;
      grid-template-columns: auto auto 1fr;
      grid-gap: 10px;
      place-items: center;
      place-content: center;
    
      /* Name */
      & > div:nth-child(1)
      {
        font-weight: 500;
        font-size: 14px;
      }
      
      /* Timestamp */
      & > div:nth-child(2)
      {
        font-size: 12px;
        color: #9D9D9D;
      }
    }
    
    & > div:nth-child(2)
    {
      font-size: 14px;
    }
   }
   
`

const WidgetContainer = styled.div`
  
  margin: 0 10px;
  
  /* Default Styling */
  & > div { margin-top: 10px; }
  
  /* Time Widget */
  & > div:nth-child(1)
  {
    height: 165px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    
    /* Your Time-Zone */
    & > div:nth-child(1)
    {
      background: linear-gradient(#2D89FF, #65F1E7);
      border-radius: 18px;
    }
    
    /* Recipients Time-Zone */
    & > div:nth-child(2)
    {
      background: linear-gradient(#303E5E, #1E467A);
      border-radius: 18px;
    }
  }
  
  & > div:nth-child(2)
  {
    height: 165px;
    background-color: #2c2f33;
    border-radius: 18px;
  }
  
  & > div:nth-child(3)
  {
    
  }
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
    
    /* Online Indicator */
    & > div:nth-child(3)
    {
      height: 12px;
      width: 12px;
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

const MessageFiller = styled.div`
  margin: 8px;
`

const MessageInjector = styled.div`
  position: absolute;
  height: 50px;
  background-color: #f2f2f2;
  width: calc(100% - 40px);
  bottom: 0;
  margin-left: 20px;
  
  & > div:nth-child(1)
  {
    background-color: white;
    box-shadow: 0px 2px 2px rgba(0,0,0,0.2);
    border-radius: 6px;
    border-style: solid;
    border-width: 1px;
    border-color: #c8c8c8;
    height: 40px;
    transform: translateY(-4px);
  }
`

function ChatPanel()
{

    let [messages, setMessages] = useState([
        {
            meta:
                {
                    epoch_timestamp: 49587358723,
                    geo_loc: null,
                    uuid: 324203948239,
                    host_uuid: 2493242432,
                    posters_name:
                        {
                            first: 'Richard',
                            last: 'Michael'
                        }
                },

            text: `Boop.`,

            image: '',

            update: {
                type: 'upgrade',
                data: {
                    from_val: 10.00,
                    to_val: 20.00,
                    from_tier: 1,
                    to_tier: 3
                }
            }
        },
        {
            meta:
                {
                    epoch_timestamp: 49587358723,
                    geo_loc: null,
                    uuid: 324203948239,
                    host_uuid: 2493242432,
                    posters_name:
                        {
                            first: 'Richard',
                            last: 'Michael'
                        }
                },

            text: `Good news! I've just finished up my order and you should be seeing it submitted here shortly. I know once payments go through their are updated tabs.`,

            image: undefined,

        },
        {
            meta:
                {
                    epoch_timestamp: 49587358723,
                    geo_loc: null,
                    uuid: 324203948239,
                    host_uuid: 2493242432,
                    posters_name:
                        {
                            first: 'Richard',
                            last: 'Michael'
                        }
                },

            text: `Good news! I've just finished up my order and you should be seeing it submitted here shortly. I know once payments go through their are updated tabs.`,

            image: undefined,

            update: {}
        },
        {
            meta:
                {
                    epoch_timestamp: 49587358723,
                    geo_loc: null,
                    uuid: 324203948239,
                    host_uuid: 2493242432,
                    posters_name:
                        {
                            first: 'Richard',
                            last: 'Michael'
                        }
                },

            text: `Good news! I've just finished up my order and you should be seeing it submitted here shortly. I know once payments go through their are updated tabs.`,

            image: undefined,

            update: {}
        },
        {
            meta:
                {
                    epoch_timestamp: 49587358723,
                    geo_loc: null,
                    uuid: 324203948239,
                    host_uuid: 2493242432,
                    posters_name:
                        {
                            first: 'Richard',
                            last: 'Michael'
                        }
                },

            text: `Good news! I've just finished up my order and you should be seeing it submitted here shortly. I know once payments go through their are updated tabs.`,

            image: undefined,

            update: {}
        },
        {
            meta:
                {
                    epoch_timestamp: 49587358723,
                    geo_loc: null,
                    uuid: 324203948239,
                    host_uuid: 2493242432,
                    posters_name:
                        {
                            first: 'Richard',
                            last: 'Michael'
                        }
                },

            text: `Good news! I've just finished up my order and you should be seeing it submitted here shortly. I know once payments go through their are updated tabs.`,

            image: undefined,

            update: {}
        },
        {
            meta:
                {
                    epoch_timestamp: 49587358723,
                    geo_loc: null,
                    uuid: 324203948239,
                    host_uuid: 2493242432,
                    posters_name:
                        {
                            first: 'Richard',
                            last: 'Michael'
                        }
                },

            text: `Good news! I've just finished up my order and you should be seeing it submitted here shortly. I know once payments go through their are updated tabs.`,

            image: undefined,

            update: {}
        },
        {
            meta:
                {
                    epoch_timestamp: 49587358723,
                    geo_loc: null,
                    uuid: 324203948239,
                    host_uuid: 2493242432,
                    posters_name:
                        {
                            first: 'Richard',
                            last: 'Michael'
                        }
                },

            text: `Good news! I've just finished up my order and you should be seeing it submitted here shortly. I know once payments go through their are updated tabs.`,

            image: undefined,

            update: {}
        },
        {
            meta:
                {
                    epoch_timestamp: 49587358723,
                    geo_loc: null,
                    uuid: 324203948239,
                    host_uuid: 2493242432,
                    posters_name:
                        {
                            first: 'Richard',
                            last: 'Michael'
                        }
                },

            text: `Good news! I've just finished up my order and you should be seeing it submitted here shortly. I know once payments go through their are updated tabs.`,

            image: undefined,

            update: {}
        },
        {
            meta:
                {
                    epoch_timestamp: 49587358723,
                    geo_loc: null,
                    uuid: 324203948239,
                    host_uuid: 2493242432,
                    posters_name:
                        {
                            first: 'Richard',
                            last: 'Michael'
                        }
                },

            text: `Good news! I've just finished up my order and you should be seeing it submitted here shortly. I know once payments go through their are updated tabs.`,

            image: undefined,

            update: {}
        },
        {
            meta:
                {
                    epoch_timestamp: 49587358723,
                    geo_loc: null,
                    uuid: 324203948239,
                    host_uuid: 2493242432,
                    posters_name:
                        {
                            first: 'Richard',
                            last: 'Michael'
                        }
                },

            text: `Good news! I've just finished up my order and you should be seeing it submitted here shortly. I know once payments go through their are updated tabs.`,

            image: undefined,

            update: {}
        },
        {
            meta:
                {
                    epoch_timestamp: 49587358723,
                    geo_loc: null,
                    uuid: 324203948239,
                    host_uuid: 2493242432,
                    posters_name:
                        {
                            first: 'Richard',
                            last: 'Michael'
                        }
                },

            text: `Good news! I've just finished up my order and you should be seeing it submitted here shortly. I know once payments go through their are updated tabs.`,

            image: undefined,

            update: {}
        },
        {
            meta:
                {
                    epoch_timestamp: 49587358723,
                    geo_loc: null,
                    uuid: 324203948239,
                    host_uuid: 2493242432,
                    posters_name:
                        {
                            first: 'Richard',
                            last: 'Michael'
                        }
                },

            text: `Good news! I've just finished up my order and you should be seeing it submitted here shortly. I know once payments go through their are updated tabs.`,

            image: undefined,

            update: {}
        },
        {
            meta:
                {
                    epoch_timestamp: 49587358723,
                    geo_loc: null,
                    uuid: 324203948239,
                    host_uuid: 2493242432,
                    posters_name:
                        {
                            first: 'Richard',
                            last: 'Michael'
                        }
                },

            text: `Good news! I've just finished up my order and you should be seeing it submitted here shortly. I know once payments go through their are updated tabs.`,

            image: undefined,

            update: {}
        },
        {
            meta:
                {
                    epoch_timestamp: 49587358723,
                    geo_loc: null,
                    uuid: 324203948239,
                    host_uuid: 2493242432,
                    posters_name:
                        {
                            first: 'Richard',
                            last: 'Michael'
                        }
                },

            text: `Good news! I've just finished up my order and you should be seeing it submitted here shortly. I know once payments go through their are updated tabs.`,

            image: undefined,

            update: {}
        },
        {
            meta:
                {
                    epoch_timestamp: 49587358723,
                    geo_loc: null,
                    uuid: 324203948239,
                    host_uuid: 2493242432,
                    posters_name:
                        {
                            first: 'Richard',
                            last: 'Michael'
                        }
                },

            text: `Good news! I've just finished up my order and you should be seeing it submitted here shortly. I know once payments go through their are updated tabs.`,

            image: undefined,

            update: {}
        },
        {
            meta:
                {
                    epoch_timestamp: 49587358723,
                    geo_loc: null,
                    uuid: 324203948239,
                    host_uuid: 2493242432,
                    posters_name:
                        {
                            first: 'Richard',
                            last: 'Michael'
                        }
                },

            text: `Good news! I've just finished up my order and you should be seeing it submitted here shortly. I know once payments go through their are updated tabs.`,

            image: undefined,

            update: {}
        },
        {
            meta:
                {
                    epoch_timestamp: 49587358723,
                    geo_loc: null,
                    uuid: 324203948239,
                    host_uuid: 2493242432,
                    posters_name:
                        {
                            first: 'Richard',
                            last: 'Michael'
                        }
                },

            text: `Good news! I've just finished up my order and you should be seeing it submitted here shortly. I know once payments go through their are updated tabs.`,

            image: undefined,

            update: {}
        },
        {
            meta:
                {
                    epoch_timestamp: 49587358723,
                    geo_loc: null,
                    uuid: 324203948239,
                    host_uuid: 2493242432,
                    posters_name:
                        {
                            first: 'Richard',
                            last: 'Michael'
                        }
                },

            text: `Good news! I've just finished up my order and you should be seeing it submitted here shortly. I know once payments go through their are updated tabs.`,

            image: undefined,

            update: {}
        },
        {
            meta:
                {
                    epoch_timestamp: 49587358723,
                    geo_loc: null,
                    uuid: 324203948239,
                    host_uuid: 2493242432,
                    posters_name:
                        {
                            first: 'Richard',
                            last: 'Michael'
                        }
                },

            text: `Boop.`,

            image: '',

            update: {
                type: 'upgrade',
                data: {
                    from_val: 10.00,
                    to_val: 20.00,
                    from_tier: 1,
                    to_tier: 3
                }
            }
        },
        {
            meta:
                {
                    epoch_timestamp: 49587358723,
                    geo_loc: null,
                    uuid: 324203948239,
                    host_uuid: 2493242432,
                    posters_name:
                        {
                            first: 'Richard',
                            last: 'Michael'
                        }
                },

            text: `Good news! I've just finished up my order and you should be seeing it submitted here shortly. I know once payments go through their are updated tabs.`,

            image: undefined,

        },
        {
            meta:
                {
                    epoch_timestamp: 49587358723,
                    geo_loc: null,
                    uuid: 324203948239,
                    host_uuid: 2493242432,
                    posters_name:
                        {
                            first: 'Richard',
                            last: 'Michael'
                        }
                },

            text: `Good news! I've just finished up my order and you should be seeing it submitted here shortly. I know once payments go through their are updated tabs.`,

            image: undefined,

            update: {}
        },
        {
            meta:
                {
                    epoch_timestamp: 49587358723,
                    geo_loc: null,
                    uuid: 324203948239,
                    host_uuid: 2493242432,
                    posters_name:
                        {
                            first: 'Richard',
                            last: 'Michael'
                        }
                },

            text: `Good news! I've just finished up my order and you should be seeing it submitted here shortly. I know once payments go through their are updated tabs.`,

            image: undefined,

            update: {}
        },
        {
            meta:
                {
                    epoch_timestamp: 49587358723,
                    geo_loc: null,
                    uuid: 324203948239,
                    host_uuid: 2493242432,
                    posters_name:
                        {
                            first: 'Richard',
                            last: 'Michael'
                        }
                },

            text: `Good news! I've just finished up my order and you should be seeing it submitted here shortly. I know once payments go through their are updated tabs.`,

            image: undefined,

            update: {}
        },
        {
            meta:
                {
                    epoch_timestamp: 49587358723,
                    geo_loc: null,
                    uuid: 324203948239,
                    host_uuid: 2493242432,
                    posters_name:
                        {
                            first: 'Richard',
                            last: 'Michael'
                        }
                },

            text: `Good news! I've just finished up my order and you should be seeing it submitted here shortly. I know once payments go through their are updated tabs.`,

            image: undefined,

            update: {}
        },
        {
            meta:
                {
                    epoch_timestamp: 49587358723,
                    geo_loc: null,
                    uuid: 324203948239,
                    host_uuid: 2493242432,
                    posters_name:
                        {
                            first: 'Richard',
                            last: 'Michael'
                        }
                },

            text: `Good news! I've just finished up my order and you should be seeing it submitted here shortly. I know once payments go through their are updated tabs.`,

            image: undefined,

            update: {}
        },
        {
            meta:
                {
                    epoch_timestamp: 49587358723,
                    geo_loc: null,
                    uuid: 324203948239,
                    host_uuid: 2493242432,
                    posters_name:
                        {
                            first: 'Richard',
                            last: 'Michael'
                        }
                },

            text: `Good news! I've just finished up my order and you should be seeing it submitted here shortly. I know once payments go through their are updated tabs.`,

            image: undefined,

            update: {}
        },
        {
            meta:
                {
                    epoch_timestamp: 49587358723,
                    geo_loc: null,
                    uuid: 324203948239,
                    host_uuid: 2493242432,
                    posters_name:
                        {
                            first: 'Richard',
                            last: 'Michael'
                        }
                },

            text: `Good news! I've just finished up my order and you should be seeing it submitted here shortly. I know once payments go through their are updated tabs.`,

            image: undefined,

            update: {}
        },
        {
            meta:
                {
                    epoch_timestamp: 49587358723,
                    geo_loc: null,
                    uuid: 324203948239,
                    host_uuid: 2493242432,
                    posters_name:
                        {
                            first: 'Richard',
                            last: 'Michael'
                        }
                },

            text: `Good news! I've just finished up my order and you should be seeing it submitted here shortly. I know once payments go through their are updated tabs.`,

            image: undefined,

            update: {}
        },
        {
            meta:
                {
                    epoch_timestamp: 49587358723,
                    geo_loc: null,
                    uuid: 324203948239,
                    host_uuid: 2493242432,
                    posters_name:
                        {
                            first: 'Richard',
                            last: 'Michael'
                        }
                },

            text: `Good news! I've just finished up my order and you should be seeing it submitted here shortly. I know once payments go through their are updated tabs.`,

            image: undefined,

            update: {}
        },
        {
            meta:
                {
                    epoch_timestamp: 49587358723,
                    geo_loc: null,
                    uuid: 324203948239,
                    host_uuid: 2493242432,
                    posters_name:
                        {
                            first: 'Richard',
                            last: 'Michael'
                        }
                },

            text: `Good news! I've just finished up my order and you should be seeing it submitted here shortly. I know once payments go through their are updated tabs.`,

            image: undefined,

            update: {}
        },
        {
            meta:
                {
                    epoch_timestamp: 49587358723,
                    geo_loc: null,
                    uuid: 324203948239,
                    host_uuid: 2493242432,
                    posters_name:
                        {
                            first: 'Richard',
                            last: 'Michael'
                        }
                },

            text: `Good news! I've just finished up my order and you should be seeing it submitted here shortly. I know once payments go through their are updated tabs.`,

            image: undefined,

            update: {}
        },
        {
            meta:
                {
                    epoch_timestamp: 49587358723,
                    geo_loc: null,
                    uuid: 324203948239,
                    host_uuid: 2493242432,
                    posters_name:
                        {
                            first: 'Richard',
                            last: 'Michael'
                        }
                },

            text: `Good news! I've just finished up my order and you should be seeing it submitted here shortly. I know once payments go through their are updated tabs.`,

            image: undefined,

            update: {}
        },
        {
            meta:
                {
                    epoch_timestamp: 49587358723,
                    geo_loc: null,
                    uuid: 324203948239,
                    host_uuid: 2493242432,
                    posters_name:
                        {
                            first: 'Richard',
                            last: 'Michael'
                        }
                },

            text: `Good news! I've just finished up my order and you should be seeing it submitted here shortly. I know once payments go through their are updated tabs.`,

            image: undefined,

            update: {}
        },
        {
            meta:
                {
                    epoch_timestamp: 49587358723,
                    geo_loc: null,
                    uuid: 324203948239,
                    host_uuid: 2493242432,
                    posters_name:
                        {
                            first: 'Richard',
                            last: 'Michael'
                        }
                },

            text: `Good news! I've just finished up my order and you should be seeing it submitted here shortly. I know once payments go through their are updated tabs.`,

            image: undefined,

            update: {}
        },
        {
            meta:
                {
                    epoch_timestamp: 49587358723,
                    geo_loc: null,
                    uuid: 324203948239,
                    host_uuid: 2493242432,
                    posters_name:
                        {
                            first: 'Richard',
                            last: 'Michael'
                        }
                },

            text: `Good news! I've just finished up my order and you should be seeing it submitted here shortly. I know once payments go through their are updated tabs.`,

            image: undefined,

            update: {}
        },
        {
            meta:
                {
                    epoch_timestamp: 49587358723,
                    geo_loc: null,
                    uuid: 324203948239,
                    host_uuid: 2493242432,
                    posters_name:
                        {
                            first: 'Richard',
                            last: 'Michael'
                        }
                },

            text: `Good news! I've just finished up my order and you should be seeing it submitted here shortly. I know once payments go through their are updated tabs.`,

            image: undefined,

            update: {}
        },
        {
            meta:
                {
                    epoch_timestamp: 49587358723,
                    geo_loc: null,
                    uuid: 324203948239,
                    host_uuid: 2493242432,
                    posters_name:
                        {
                            first: 'Richard',
                            last: 'Michael'
                        }
                },

            text: `Good news! I've just finished up my order and you should be seeing it submitted here shortly. I know once payments go through their are updated tabs.`,

            image: undefined,

            update: {}
        },
    ])
    const MessageFillerRef = React.createRef()

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

    const DisplayMessages = messages.map(message =>
    {
        const posters_name = message.meta.posters_name.first + ' ' + message.meta.posters_name.last
        const timestamp = message.meta.epoch_timestamp
        const message_text = message.text

        return(
            <>
                <MessageContext>
                    {/* Image Container */}
                    <div></div>

                    {/* Text Container */}
                    <div>
                        {/* Name & Timestamp */}
                        <div>
                            <div>{posters_name}</div>
                            <div>{timestamp}</div>
                        </div>

                        {/* Text */}
                        <div>{message_text}</div>

                        {/* Images & Other Content */}
                        <div></div>
                    </div>
                </MessageContext>
            </>
        )
    })

    /* First time the component renders, go to the bottom */
    useEffect(() => {

        if(MessageFillerRef != null)
            MessageFillerRef.current.scrollIntoView()

    }, [MessageFillerRef])

    return(
        <PrimaryContainer>

            {/* Menu Section */}
            <SelectionMenu>

                {/* Title */}
                <div>Chat</div>

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
                <MessagesContentContainer>

                    {/* Who | Online | Buttons */}
                    <div>
                        <div>@richardmichael</div>

                        {/* Online Indicator */}
                        <div></div>
                    </div>

                    {/* Message Content Grid */}
                    <MessagesScrollContainer>

                        {/* Rendering the list of messages */}
                        { DisplayMessages }

                        <MessageFiller ref={MessageFillerRef}/>

                    </MessagesScrollContainer>

                    <MessageInjector>
                        <div></div>
                    </MessageInjector>

                </MessagesContentContainer>

                {/* Shows all enabled widgets */}
                <WidgetContainer>

                    {/* Time Zones */}
                    <div>
                        <div></div>
                        <div></div>
                    </div>

                    {/* Recipients Shop Availability */}
                    <div></div>

                    {/* Time Zones */}
                    <div></div>
                </WidgetContainer>

            </ContentDivider>

        </PrimaryContainer>
    )
}

export default ChatPanel