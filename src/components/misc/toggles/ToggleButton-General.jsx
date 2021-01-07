import React, {useState} from 'react';
import styled from "styled-components";

/* Redux Elements */
import { darkModeToggled } from "../../../redux/actions";
import { useSelector } from "react-redux";
import store from "../../../redux/store";

/* Reg Icons */
import SuccessIcon from '../../../assets/svgs/notifications/icons/success.svg';

import { notify } from "../Notifications";

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
function ToggleButtonGeneral()
{
    /* Getting state from redux */
    let [toggled, setToggled] = useState(false)

    return (
        <>
            <SwitchContainer onClick={() => {

                /* Changing the state */
                setToggled(state => !state)

                /* Assuming the above line changes the state correctly, store it in local storage. */
                //window.localStorage.setItem('dark_mode', `${!toggled}`)

                /* Sending notification! */
                //let response = toggled ? "Disabled" : "Enabled"
                //notify(`Dark Mode ${response}!`, '', SuccessIcon)
            }}>

                <ButtonSwitch toggled={toggled}/>
                <ButtonBack toggled={toggled}/>

            </SwitchContainer>
        </>
    );
}

export default ToggleButtonGeneral;
