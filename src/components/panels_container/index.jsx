import React from "react";
import styled from "styled-components";
import {Route} from "react-router-dom";

const PrimaryContainer = styled.div`
  display: grid;
  grid-template-columns: 75px 1fr;
  height: 100vh;
  min-height: 700px;
`

const PrimarySidebar = styled.div`
  display: grid;
  grid-template-rows: 85px 1fr 175px;
  background-color: #4285F4;
  
  & > div:nth-child(1)
  {
    background-color: #86CF86;
  }
  
  & > div:nth-child(2)
  {
    background-color: #5772A1;
  }
  
  & > div:nth-child(3)
  {
    background-color: #E6BD49;
  }
`
/* TODO: Complete necessary panels for back-end development */
function PanelsContainer()
{
    return(
        <>
            <PrimaryContainer>

                <PrimarySidebar>
                    <div></div>
                    <div></div>
                    <div></div>
                </PrimarySidebar>

                { /* Conditionally rendering the route specifically */ }

                <Route path="/panels/explore" exact component={''}/>
                <Route path="/panels/shop" exact component={''}/>
                <Route path="/panels/messenger" exact component={''}/>

            </PrimaryContainer>
        </>
    )
}

export default PanelsContainer