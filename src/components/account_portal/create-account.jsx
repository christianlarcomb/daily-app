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

import { notify } from "../misc/Notifications";

import SuccessSvg from '../../assets/svgs/notifications/icons/success.svg'

const CreateAccountContainer = styled.div`
    display: grid;
    place-items: center;
    position: relative;
    padding: 30px 30px;
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
    display: ${props => props.enabledState ? 'none' : 'grid'};
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: max-content;
    place-content: center;
    row-gap: 20px;
    column-gap: 40px;
    z-index: 4;
    /* Signup Text & Change Panels */
    & > div:nth-child(1)
    {
      grid-column: 1 / 3;
      display: grid;
      grid-template-columns: 1fr 1fr;
      
      /* Signup Text */
      & > div:nth-child(1)
      {
        font-weight: 600;
        font-size: 26px;
      }
      
      & > div:nth-child(2)
      {
        margin: auto 0;
        text-align: right;
      }
    }
    
    & > a:nth-child(2), & > a:nth-child(3)
    {
      width: auto;
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: max-content;
      column-gap: 15px;
      place-content: center;
      font-family: Helvetica, Arial, sans-serif;
      border-radius: 8px;
      font-size: 16px;
      place-items: center;
      text-decoration: none;
      color: white;
      height: 50px;
      background-color: black;
      
      & > svg
      {
        height: 16px;
      }
    }
    
    /* Or Divider */
    & > div:nth-child(4)
    {
      display: grid;
      grid-column: 1 / 3;
      grid-auto-flow: column;
      place-items: center;
      grid-template-columns: 1fr 50px 1fr;
      color: #A6C5BA;
      font-weight: 600;
      
      & > div:nth-child(1), & > div:nth-child(3)
      {
        height: 1px;
        width: 100%;
        background-color: #2c2f33; 
      }
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
    
    grid-template-columns: 1fr 1fr;
    column-gap: 40px;
    row-gap: 20px;
    
    /* Styling Input Fields */
    & > div
    {
        display: grid;
        row-gap: 5px;
    }
    
    /* Email and Password */
    & > div:nth-of-type(3), & > div:nth-of-type(4) { grid-column: 1 / 3; }
    
    /* Checkbox */
    & > div:nth-of-type(5)
    {
        grid-column: 1 / 3;
        display: grid;
        grid-auto-flow: column;
        column-gap: 20px;
        align-items: center;
        
        & > div:nth-child(2)
        {
          font-size: 14px;
        }
    }
    
    & > div:nth-child(7){ grid-column: 1/3; }
    
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

  width: 100%;
  height: 100%;
  background-color: white;
  opacity: ${props => props.enabledState ? '100' : '0'};
  z-index: ${props => props.enabledState ? '3' : '0'};
  transition: opacity 0.15s ease;
  display: ${props => props.enabledState ? 'inline' : 'none'};
  
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
    font-size: 13px;
    
    & > a
    {
      color: blue;    
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

    handleCaptchaExpiration

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
                    const accessToken =  res.data['Daily Response'].tokens.access_token
                    const refreshToken = res.data['Daily Response'].tokens.refresh_token
                    const uuid =         res.data['Daily Response'].credentials.uuid

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

                    /* Local Storing Credentials */
                    window.localStorage.setItem('uuid', uuid)
                    window.localStorage.setItem('name', this.state.values.name)
                    window.localStorage.setItem('username', this.state.values.username)

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
                <CreateAccountContainer>

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

                    <FormContainer enabledState={this.state.captcha.enabled}>

                            {/* Sign up message and panel change link */}
                            <div>
                                <div>Sign up</div>

                                <div>
                                    <p>
                                        Already a member?&nbsp;
                                        <Link to="/account/login">Sign in</Link>
                                    </p>
                                </div>
                            </div>

                            <a href="/">
                                <AppleLogo/>
                                <p>Sign up with Apple</p>
                            </a>

                            <a href="/">
                                <GoogleLogo/>
                                <p>Sign up with Google</p>
                            </a>

                            {/* Or Divider */}
                            <div>
                                <div/>
                                <div>or</div>
                                <div/>
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
                                        onChange={this.handleInput}
                                    />
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
                                    <div>Creating an account means you are okay with our Terms of Service, Privacy Policy, and our default Notification Settings policies.</div>
                                </div>

                                <SubmitButton onClick={this.handleCreateAccount}>Create Account</SubmitButton>

                                <CaptchaProtection>
                                    <p>
                                        This site is protected by reCAPTCHA and the Google&nbsp;
                                        <a href="https://google.com/">Privacy Policy</a>&nbsp;
                                        and&nbsp;
                                        <a href="https://google.com/">Terms of Service</a>&nbsp;
                                        apply.
                                    </p>
                                </CaptchaProtection>

                            </FormWrapper>

                        </FormContainer>

                </CreateAccountContainer>
            </>
        )
    }

}

export default SignupSection