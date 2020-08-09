import React from 'react'
import styled from 'styled-components'

/* SVG Imports */
import {ReactComponent as CertificateSVG } from '../../assets/svgs/badges/certificate.svg';


const Badge = styled.div`
    
    background-color: #1e1e1e;
    border-radius: 30px;
    height: 100%;
    width: auto;
    display: grid;
    grid-template-columns: 30px auto;
    font-size: 11px;
    
    /* Badge Icon */
    & > div:nth-child(1)
    {
      display: grid;
      place-content: center;
      & > svg { height: 14px}
    }
    
    /* Text Container */
    & > div:nth-child(2)
    {
      margin: auto 0;
      width: auto;
      padding-right: 12px;
      & > span:nth-child(1) { color: white }
      & > span:nth-child(2) { color: #6ab26a }
    }
      
`

export default function AwardTag(props)
{

    const handleBadge = () =>
    {
        /* Daily Choice */
        if(props.badge === 1)
        {
            return(
                <Badge>
                    <div>
                        <CertificateSVG/>
                    </div>
                    <div>
                        <span>Daily</span>&nbsp;<span>Choice</span>
                    </div>
                </Badge>
            )

        /* Top Rated */
        } else if(props.badge === 2)
        {
            return(
                <Badge>
                    <div>
                        <CertificateSVG/>
                    </div>
                    <div>
                        <span>Top</span>&nbsp;<span>Rated</span>
                    </div>
                </Badge>
            )
        } else {
            return(<></>)
        }
    }

    return (
        <>
            {handleBadge()}
        </>
    )

}