import React from 'react';
import styled from 'styled-components'
import ee from 'event-emitter'

/* Exit Icons */
import { ReactComponent as ExitIcon } from '../../assets/svgs/notifications/exit/cross.svg';

/* Reg Icons */
import AlertDefaultIcon   from '../../assets/svgs/notifications/icons/warning.svg';

const Container = styled.div`

    background-color: ${props => props.theme.one};
    
    color: ${props => props.theme.primaryText};
    position: fixed;
    bottom: ${props => props.toggled ? '16' : '-160'}px;
    opacity: ${props => props.toggled ? '100' : '0'};
    right: 16px;
    z-index: 999;
    transition: bottom 0.25s ease, opacity 0.25s ease;
    width: 350px;
    
    border-radius: 10px;
    border-color: ${props => props.theme.borderColor};
    border-width: 1.5px;
    border-style: solid;
    
    -webkit-filter: drop-shadow(0px 4px 1px rgba(0, 0, 0, 0.04));
            filter: drop-shadow(0px 4px 1px rgba(0, 0, 0, 0.04));
    
    display: grid;
    grid-template-rows: 50px 1fr;

`;

const Header = styled.div`

    display: grid;
    grid-template-columns: 50px 1fr 50px;
    align-items: center;
    font-size: 20px;
    
    /**/
    & > svg:nth-of-type(1)
    {
    height: auto;
    width: 26px; 
    margin: 0 auto; 
    align-self: center;
    }
    
    & > span:nth-of-type(1)
    {
      font-size: 16px;
    }
    
`;

const Message = styled.span`
    font-size: 18px;
    margin: 0 12px;
    opacity: 80%;
    padding-bottom: ${props => props.msgAvailable ? '12px' : '0px'};
`;

const NotifExitBtn = styled.div`
    height: 28px;
    width: 28px;
    background-color: rgba(200, 200 ,200, 0.4);
    border-radius: 100%;
    margin: 0 auto;
    display: grid;
    place-items: center;
    cursor: pointer;
`;

const ExitIconStyled = styled(ExitIcon)`
    height:  14px; 
    width:   14px; 
    fill:    white; 
    opacity: 60%;
`

const NotifIconStyled = styled.div`

  display: grid;
  place-items: center;

    & > img {
      height: auto;
      width: 28px;
    }
`

const emitter = new ee();

export const notify = (title, msg, icon) =>
{
    emitter.emit('notification', title, msg, icon)
}

export default class Notifications extends React.Component
{

    constructor(props)
    {
        super(props);

        this.state = {

            toggled: false,

            contents:
                {
                    title: '',
                    msg: null,
                    icon: AlertDefaultIcon
                }

        }

        this.timeout = null;

        emitter.on('notification', (type, msg, icon) => {
            this.onShow(type, msg, icon)
        })
    }

    /* Determines how the showing of the notification functions: prevents looping or spammed notifications */
    onShow = (title, msg, icon) =>
    {
        if(this.timeout)
        {

            clearTimeout(this.timeout);

            this.setState({
                toggled: false
            }, () => {
                this.timeout = setTimeout(() => {
                    this.showNotification(title, msg, icon)
                }, 250)
            })

        } else {
            this.showNotification(title, msg, icon)
        }
    }

    /* Sets the state of the notification and displays it: Implements a timeout */
    showNotification = (title, msg, icon) =>
    {

        /* If msg is set, set it, otherwise default to empty string */
        const setMsg = msg || ''
        const setIcon = icon || AlertDefaultIcon

        console.log(setIcon)

        this.setState({

            toggled: true,

            contents:
                {
                    title: title,
                    msg: setMsg,
                    icon: setIcon
                }

        }, () => {
            this.timeout = setTimeout(() => {
                this.setState({ toggled: false })
            }, 5000)
        })
    }

    /* Renders the notification on the DOM */
    render()
    {

        return(
            <Container toggled={this.state.toggled}>

                <Header>

                    {/* Check if the option is null, set it */}
                    <NotifIconStyled>
                        <img alt="Icon" src={this.state.contents.icon}/>
                    </NotifIconStyled>

                    <span>{this.state.contents.title}</span>

                    <NotifExitBtn onClick={() => this.setState({ toggled: false })}>
                        <ExitIconStyled/>
                    </NotifExitBtn>
                </Header>

                <Message msgAvailable={this.state.contents.msg !== ""}>{this.state.contents.msg}</Message>

            </Container>
        );
    }

}