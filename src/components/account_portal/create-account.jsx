import React from 'react'
import styled from 'styled-components'
import '../../styles/portal_panels/create-account.css'
import '../../styles/global_styles/portal_shared.css'

/* Redux Elements */
import { userLoggedIn } from "../../redux/actions";
import store from "../../redux/store";

import axios from 'axios'
import ReCaptcha from 'react-google-recaptcha'

import { ReactComponent as AppleLogo } from "../../assets/svgs/apple-google-etc/apple-logo.svg";
import { ReactComponent as GoogleLogo } from "../../assets/svgs/apple-google-etc/google-logo.svg";

import { Link } from "react-router-dom";

import { notify } from "../Notifications";

import SuccessSvg from '../../assets/svgs/notifications/icons/success.svg'

const InfoSectionContainer = styled.div`
    display: grid;
    place-items: center;
    min-width: 800px;
    position: relative;
    height: 100vh;
    width: 100%;
`

const InfoSectionWrapper = styled.div`
    height: 100%;
    display: grid;
    place-items: center;
    grid-template-rows: 15% 70% 15%;
    min-width: 800px;
    width: 100%;
    position: relative;
`

const SubmitButton = styled.div`
    background-color: var(--primary-grn);
    border-style: none;
    color: white;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 8px;
    height: 60px;
    width: 100%;
    font-size: 17px;
    display: grid;
    place-items: center;
    grid-column: 1 / 3;
    
    &:hover
    {
      filter: brightness(90%);
      cursor: pointer;
    }
`

const FormContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(min-content, 250px));
    grid-auto-rows: max-content;
    place-content: center;
    row-gap: 20px;
    column-gap: 40px;
    min-height: 570px;
    
    & > h1
    {
      grid-column: 1 / 3;
      font-weight: 600;
    }
    
    & > a:nth-of-type(1)
    {
    background-color: black;
    }

    & > a:nth-of-type(2)
    {
        background-color: #4285F4;
    }
`

const FormWrapper = styled.div`

    grid-column: 1 / 3;
    display: grid;
    column-gap: 40px;
    row-gap: 20px;
    grid-template-columns: repeat(2, minmax(min-content, 250px));
   
    /* Styling Input Fields */
    & > div
    {
        display: grid;
        row-gap: 5px;
    }
    
    & > div:nth-of-type(3), & > div:nth-of-type(4)
    {
        grid-column: 1 / 3;
    }
    
    & > div:nth-of-type(5)
    {
        grid-column: 1 / 3;
        display: grid;
        grid-auto-flow: column;
        column-gap: 20px;
        align-items: center;
    }
    
    & > div > input
    {
      transition: background-color 0.12s ease, border 0.12s ease;
    }
    
    & > div:nth-child(1) > input:focus, 
    & > div:nth-child(2) > input:focus, 
    & > div:nth-child(3) > input:focus,
    & > div:nth-child(4) > input:focus
    {
        background-color: #E9F0ED;
        border-color: #A6C5BA;
        outline: none;
    }

    /* Styling Errors */
    & > div:nth-child(1) > input 
    {
        background-color: ${prop => prop.errorStates.name ? "#F2D5D5" : "#E9F0ED" };
        border-color: ${prop => prop.errorStates.name ? "red" : "#A6C5BA" };
    }
  
    & > div:nth-child(2) > input 
    {
    background-color: ${prop => prop.errorStates.username ? "#F2D5D5" : "#E9F0ED" };
        border-color: ${prop => prop.errorStates.username ? "red" : "#A6C5BA" };
    }
    
    & > div:nth-child(3) > input 
    {
    background-color: ${prop => prop.errorStates.email ? "#F2D5D5" : "#E9F0ED" };
        border-color: ${prop => prop.errorStates.email ? "red" : "#A6C5BA" };
    }
    
    & > div:nth-child(4) > input 
    {
    background-color: ${prop => prop.errorStates.password ? "#F2D5D5" : "#E9F0ED" };
        border-color: ${prop => prop.errorStates.password ? "red" : "#A6C5BA" };
    }
    
    & > div:nth-child(5) > input 
    {
    
    }
`

const ReCaptchaContainer = styled.div`

  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
  opacity: ${props => props.enabledState ? '100' : '0'};
  z-index: ${props => props.enabledState ? '3' : '0'};
  transition: opacity 0.15s ease;
  
  & > div:nth-child(1)
  {
  display: grid;
  place-items: center;
  height: 100%;
  }
  
  & > div:nth-child(1) > div:nth-child(1)
  {
    display: grid;
    grid-template-rows: 2fr 3fr;
    max-width: 400px;
    height: 150px;
    place-items: center;
  }
  
  & > div:nth-child(1) > div:nth-child(1) > span
  {
    font-size: 20px;
  }
`

const CaptchaProtection = styled.div`
    display: grid;
    grid-template-columns: minmax(100px, 450px);
    place-items: center;
    justify-content: center;
    text-align: center;
    font-size: 14px;
    
    & > a
    {
      color: blue;    
    }
`

const SwitchPanelContainer = styled.div`

    position: relative;
    width: 100%;
    height: 100%;
    
    & > div 
    {
      position: absolute;
      top: 16px;
      right: 16px;
      
        & > a 
        {
          text-decoration: none;
        }
    
    }
    
`

class SignupSection extends React.Component
{

    constructor(props)
    {
        super(props);

        this.state =
        {
            renderCaptcha: true,

            captcha: {
                enabled: false,
                failed: false
            },

            values: {
                name: '',
                username: '',
                email: '',
                password: '',
                checkbox: false
            },

            errorChecks: {
                name: false ,
                username: false,
                email: false,
                password: false,
                checkbox: false
            }
        }
    }

    handleInput = (event) =>
    {
        const target = event.target;
        const targetName = target.name;

        /* Logically Updating State */
        targetName === 'checkbox' ? this.setState({
            values:
            {
                name: this.state.values.name,
                username: this.state.values.username,
                email: this.state.values.email,
                password: this.state.values.password,
                checkbox: !this.state.values.checkbox
            }
        }) : this.setState({
            values:
            {
                name: targetName.toString()     === "name" ? target.value : this.state.values.name,
                username: targetName.toString() === "username" ? target.value : this.state.values.username,
                email: targetName.toString()    === "email" ? target.value : this.state.values.email,
                password: targetName.toString() === "password" ? target.value : this.state.values.password,
                checkbox: this.state.values.checkbox
            }
        });
    }

    handleCreateAccount = () => { this.errorChecking() }

    errorChecking = () =>
    {
        const objects = this.state.values;

        let nameCheck     = null
        let usernameCheck = null
        let emailCheck    = null
        let passwordCheck = null
        let checkboxCheck = null

        /* Error Checking Inputs */
        for (let [key, value] of Object.entries(objects))
        {
            if      (key === "name")     { nameCheck     = value === "" }
            else if (key === "username") { usernameCheck = value === "" }
            else if (key === "email")    { emailCheck    = value === "" }
            else if (key === "password") { passwordCheck = value === "" }
            else if (key === "checkbox") { checkboxCheck = value === false }
        }

        /* After setting state, call error prevention function */
        this.setState({
            errorChecks: {
                name:     nameCheck,
                username: usernameCheck,
                email:    emailCheck,
                password: passwordCheck,
                checkbox: checkboxCheck
            }
        }, this.errorPrevention)
    }

    errorPrevention = () =>
    {
        const { name, username, email, password, checkbox } = this.state.errorChecks
        const errorVals = [ name, username, email, password, checkbox ]

        let errorFound = false
        errorVals.map(errorVal => { if(errorVal){ errorFound = true }})

        /* No Errors Found? Continue function flow */
        if(!errorFound)
        {
            this.setState({
                captcha: { enabled: true, failed: false }
            })
        } else {
            /* DEBUG: Checking if input error prevention is working */
            //console.log("A required input has been left unfulfilled!")
        }
    }

    captchaSuccess = value =>
    {

        /* TODAY'S TO-DO LIST */
        /* TODO: Implement live username check either with socket or requests */

        /* DEBUG: Checking if the debug value is working */
        //console.log("Token Value:", value)

        this.setState( { renderCaptcha: false })

        /* Requesting to create a user... It will either approved or ignored */
        try {

            axios.post('http://localhost:8080/api/v1/users/create',
                {
                    email: this.state.values.email,
                    name: this.state.values.name,
                    username: this.state.values.username,
                    password: this.state.values.password
                },
                {
                    headers:
                        {
                            authorization: `basic ${value}`
                        }
                })

                /* Upon Request Success */
                .then(res =>
                {
                    /* Intentional Secret Welcome Message */
                    console.log('Account Creation Success! Welcome!')

                    /* Getting Tokens from Request */
                    const accessToken = res.data['Daily Response'].access_token
                    const refreshToken = res.data['Daily Response'].refresh_token

                    /* Second Multipliers */
                    const hourMultiplier =      60 * 60 * 1000;
                    const dayMultiplier  = 24 * 60 * 60 * 1000;

                    const refreshExpiresIn = new Date(Date.now() + 30 * dayMultiplier)
                    const accessExpiresIn  = new Date(Date.now() + 2 * hourMultiplier)

                    console.log("Access Token Cookies:",accessToken)

                    /* COOKIE STORAGE FOR NUMEROUS DATA POINTS */
                    /* Storing Access and Refresh Java Web-Token in Cookies */
                    document.cookie = `jwtat=${accessToken}; expires=${accessExpiresIn.toUTCString()}; path=/`
                    document.cookie = `jwtrt=${refreshToken}; expires=${refreshExpiresIn.toUTCString()}; path=/`

                    /* Create Account / Login Success and setting Redux state */
                    store.dispatch(userLoggedIn(true))

                    /* Notification for successful login */
                    notify('Welcome back!','', SuccessSvg)
                })

                /* Upon Request Error */
                .catch(error =>
                {
                    if (error.response) {
                        // The request was made and the server responded with a status code
                        // that falls out of the range of 2xx
                        console.log(error.response.data)
                        console.log(error.response.status)
                        console.log(error.response.headers)
                    } else if (error.request) {
                        // The request was made but no response was received
                        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                        // http.ClientRequest in node.js
                        console.log(error.request);
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        console.log('Error', error.message);
                    }
                    console.log(error.config);
                });

        } catch (e)
        {
            console.log("Client-Server Async Request Error:", e)
        }

    }


    render()
    {

        return (
            <>

                <InfoSectionContainer>

                    <ReCaptchaContainer enabledState={this.state.captcha.enabled}>
                        <div>
                            <div>

                                { this.state.renderCaptcha ?
                                    <>
                                        <span>One more thing...</span>
                                        <ReCaptcha
                                            sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY_V2}
                                            onChange={this.captchaSuccess}
                                            onError={() => this.setState({
                                                captcha: {
                                                    enabled: false,
                                                    failed: true
                                                }})}
                                            onExpired={() => console.log('Google reCAPTCHA expired... Try again.')}
                                        />
                                    </> :
                                <></>
                                }
                            </div>
                        </div>
                    </ReCaptchaContainer>

                    <InfoSectionWrapper>

                        <SwitchPanelContainer>
                            <div>
                                <p>
                                    Already a member?&nbsp;
                                    <Link to="/account/login">Sign in</Link>
                                </p>
                            </div>
                        </SwitchPanelContainer>

                        <FormContainer>

                            <h1>Sign up</h1>

                            <a className="platform-button" href="/">
                                <AppleLogo/>
                                <p>Sign up with Apple</p>
                            </a>

                            <a className="platform-button" href="/">
                                <GoogleLogo/>
                                <p>Sign up with Google</p>
                            </a>

                            <div className="or-divider">
                                <hr/>
                                    Or
                                <hr/>
                            </div>

                            <FormWrapper id="df7f-2fj2" errorStates={this.state.errorChecks}>

                                <div>
                                    <label>Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="full-name"
                                        value={this.state.values.name}
                                        onChange={this.handleInput}
                                    />
                                </div>
                                <div>
                                    <label>Username</label>
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        value={this.state.values.username}
                                        onChange={this.handleInput}/>
                                </div>
                                <div>
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={this.state.values.email}
                                        onChange={this.handleInput}
                                    />
                                </div>
                                <div>
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        value={this.state.values.password}
                                        onChange={this.handleInput}
                                    />
                                </div>
                                <div>
                                    <input
                                        name="checkbox"
                                        type="checkbox"
                                        value={this.state.values.checkbox}
                                        onChange={this.handleInput}
                                    />
                                    <label htmlFor="checkbox">Creating an account means you are okay with our Terms of Service, Privacy Policy, and our default Notification Settings policies.</label>
                                </div>

                                <SubmitButton onClick={this.handleCreateAccount}>Create Account</SubmitButton>


                            </FormWrapper>

                        </FormContainer>

                        {/* TODO: Fix this text section to have proper links */}
                        <CaptchaProtection>
                            <p>
                                This site is protected by reCAPTCHA and the Google&nbsp;
                                <a href="https://google.com/">Privacy Policy</a>&nbsp;
                                and&nbsp;
                                <a href="https://google.com/">Terms of Service</a>&nbsp;
                                apply.
                            </p>
                        </CaptchaProtection>

                    </InfoSectionWrapper>

                </InfoSectionContainer>
            </>
        )
    }
}

export default SignupSection