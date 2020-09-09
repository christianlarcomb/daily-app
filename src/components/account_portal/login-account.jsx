import React from 'react'
import styled from 'styled-components'

import '../../styles/portal_panels/login-account.css'
import '../../styles/global_styles/portal_shared.css'

import { ReactComponent as AppleLogo } from "../../assets/svgs/apple-google-etc/apple-logo.svg";
import { ReactComponent as GoogleLogo } from "../../assets/svgs/apple-google-etc/google-logo.svg";

import { Link } from "react-router-dom";
import ReCaptcha from "react-google-recaptcha";
import axios from "axios";
import store from "../../redux/store";
import {userLoggedIn} from "../../redux/actions";

const LoginAccountContainer = styled.div`
  display: grid;
  place-items: center;
  position: relative;
  padding: 30px 30px;
`

const ReCaptchaContainer = styled.div`
  background-color: white;
  display: ${props => props.enabledState ? 'inline' : 'none'};
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
    place-content: center;
    row-gap: 20px;
    column-gap: 40px;
    
    /* Sign In Text & Change Panels */
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
    
    & > a:nth-of-type(1) { background-color: black; }
  
    & > a:nth-of-type(2) { background-color: #4285F4; }
`

const FormWrapper = styled.div`

    grid-column: 1 / 3;
    display: grid;
    column-gap: 40px;
    row-gap: 30px;
    grid-template-rows: 1fr 1fr 1fr;

    & > div
    {
        display: grid;
        row-gap: 5px;
        grid-column: 1 / 3;
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
        background-color: ${prop => prop.errorStates.email ? "#F2D5D5" : "#E9F0ED" };
        border-color: ${prop => prop.errorStates.email ? "red" : "#A6C5BA" };
    }
  
    & > div:nth-child(2) > input 
    {
    background-color: ${prop => prop.errorStates.password ? "#F2D5D5" : "#E9F0ED" };
        border-color: ${prop => prop.errorStates.password ? "red" : "#A6C5BA" };
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

/* TODO: Fix the styling of the links on the page -> Remove the underline. */
class LoginAccount extends React.Component
{

    constructor(props)
    {
        super(props);

        this.state = {
            renderCaptcha: true,

            captcha: {
                enabled: false,
                failed: false
            },

            values: {
                email: '',
                password: ''
            },

            errorChecks: {
                email: false,
                password: false
            }
        }

    }

    handleSignIn = () => { this.errorChecking() }

    errorChecking = () =>
    {
        const objects = this.state.values

        let email          = null
        let passwordCheck  = null

        /* Error Checking Inputs */
        for (let [key, value] of Object.entries(objects))
        {
            if      (key === "email") { email = value === "" }
            else if (key === "password") { passwordCheck = value === "" }
        }

        /* After setting state, call error prevention function */
        this.setState({
            errorChecks: {
                emailOrUsername: email,
                password: passwordCheck
            }
        }, this.errorPrevention)
    }

    errorPrevention = () =>
    {
        const { email, password } = this.state.errorChecks
        const errorVals = [ email, password ]

        let errorFound = false
        errorVals.map(errorVal => { if(errorVal){ errorFound = true }})

        /* No Errors Found? Continue function flow */
        if(!errorFound)
        {
            this.setState({
                captcha: { enabled: true, failed: false }
            })
        }
    }

    handleInput = (event) =>
    {
        const target = event.target;
        const targetName = target.name;

        /* Logically Updating State */
        this.setState({
            values:
                {
                    email: targetName.toString() === "email" ? target.value : this.state.values.email,
                    password: targetName.toString() === "password" ? target.value : this.state.values.password
                }
        });
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

            axios.post('http://localhost:8090/api/v1/users/login',
                {
                    email: this.state.values.email,
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
                    //console.log('Login Success! Welcome!')

                    /* Getting Tokens from Request */
                    const accessToken = res.data['Daily Response'].tokens.access_token
                    const refreshToken = res.data['Daily Response'].tokens.refresh_token
                    const username = res.data['Daily Response'].credentials.username
                    const name = res.data['Daily Response'].credentials.name
                    const uuid = res.data['Daily Response'].credentials.uuid


                    /* Second Multipliers */
                    const hourMultiplier =      60 * 60 * 1000;
                    const dayMultiplier  = 24 * 60 * 60 * 1000;

                    const refreshExpiresIn = new Date(Date.now() + 30 * dayMultiplier)
                    const accessExpiresIn  = new Date(Date.now() + 2 * hourMultiplier)

                    /* Debugging */
                    //console.log("Access Token Cookies:", accessToken)

                    /* COOKIE STORAGE FOR NUMEROUS DATA POINTS */
                    /* Storing Access and Refresh Java Web-Token in Cookies */
                    document.cookie = `jwtat=${accessToken}; expires=${accessExpiresIn.toUTCString()}; path=/`
                    document.cookie = `jwtrt=${refreshToken}; expires=${refreshExpiresIn.toUTCString()}; path=/`

                    /* Local Storing User's Username, Email, Name, UUID */
                    window.localStorage.setItem('uuid', uuid)
                    window.localStorage.setItem('name', name)
                    window.localStorage.setItem('username', username)

                    /* Create Account / Login Success and setting Redux state */
                    store.dispatch(userLoggedIn(true))

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
        {/* TODO: Convert to using styled components and the logic from create-account. */}
        return (
            <>

                <LoginAccountContainer>

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

                        <div>
                            <div>Sign in</div>

                            <div>
                                <p>
                                    New to Daily?&nbsp;
                                    <Link to="/account/create">Sign up</Link>
                                </p>
                            </div>
                        </div>

                        {/* Implement the sign in with Apple and Sign in with Google feature */}
                        <a className="platform-button" href="bepis.com">
                            <AppleLogo/>
                            <p>Sign in with Apple</p>
                        </a>

                        <a className="platform-button" href="bepis.com">
                            <GoogleLogo/>
                            <p>Sign in with Google</p>
                        </a>

                        {/* Or Divider */}
                        <div>
                            <div/>
                            <div>or</div>
                            <div/>
                        </div>

                        <FormWrapper errorStates={this.state.errorChecks}>
                            <div>
                                <label>Email</label>
                                <input
                                    type="text"
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

                            <SubmitButton onClick={this.handleSignIn}>Sign In</SubmitButton>

                            <CaptchaProtection>
                                <p>
                                    This site is protected by reCAPTCHA and the Google&nbsp;
                                    <a href="">Privacy Policy</a>&nbsp;
                                    and&nbsp;
                                    <a href="https://google.com/">Terms of Service</a>&nbsp;
                                    apply.
                                </p>
                            </CaptchaProtection>

                        </FormWrapper>

                    </FormContainer>

                </LoginAccountContainer>
            </>
        )
    }
}

export default LoginAccount