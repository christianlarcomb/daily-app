import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Badge = styled.div`

    background-color: #F2F2F2;
    border-radius: 5px;
    height: 26px;
    width: auto;
    display: grid;
    grid-template-columns: auto;
    font-size: 11px;
    
    /* Text Container */
    & > div:nth-child(1)
    {
      margin: auto 0;
      width: auto;
      padding: 0 12px;
      color: #1e1e1e;
    }
`

const TextLink = styled(Link)`

  font-weight: 700;
  text-decoration: none;
  color: #1e1e1e;
  
  &:link { color: #1e1e1e; cursor: pointer }
  &:hover { color: #4285F4; cursor: pointer; text-decoration: underline; }
`

export default function LocationTag(props)
{
    return (
        <>
            <Badge>
                <div>
                    {props.text.map(txt => (
                        <>
                            <TextLink>{txt}</TextLink>
                            { txt !== props.text[props.text.length-1] ? (<span> > </span>) : <></> }
                        </>
                    ))}
                </div>
            </Badge>
        </>
    )
}