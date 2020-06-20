import React from 'react';
import styled from "styled-components";
import { darkModeToggled, userLoggedIn } from "../../redux/actions";
import { useSelector } from "react-redux";
import store from "../../redux/store";

/* CSS Components */
const SwitchContainer = styled.div`
   height: 27px;
   width: 42px;
   position: relative;
   cursor: pointer;
`

const ButtonBack = styled.div`
    border-radius: 100px;
    height: 100%;
    width: 100%;
    background-color: ${props => props.toggled ? '#5A9B5A' : '#CDCDCD'};
    transition: background-color 0.1s ease;
`

const ButtonSwitch = styled.div`
    position: absolute;
    height: 25px;
    width: 25px;
    top: 1px;
    background-color: #fff;
    border-radius: 100px;
    left: ${props => props.toggled ? '16px' : '1px'};
    transition: left 0.1s ease;
`

/* Primary Function */
function ToggleButton()
{
    /* Getting state from redux */
    let toggled = useSelector(state => state.uiManager.ui.darkMode)
    console.log("Current:",toggled)

    return (
        <>
            <SwitchContainer onClick={() => { store.dispatch(darkModeToggled(!toggled)) }}>

                <ButtonSwitch toggled={toggled}/>
                <ButtonBack toggled={toggled}/>

            </SwitchContainer>
        </>
    );
}

export default ToggleButton;
