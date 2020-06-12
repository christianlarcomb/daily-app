import React from 'react'
import styled from 'styled-components'
import '../../styles/portal_panels/create-account.css'
import '../../styles/global_styles/portal_shared.css'

import { ReactComponent as AppleLogo } from "../../assets/svgs/apple-logo.svg";
import { ReactComponent as GoogleLogo } from "../../assets/svgs/google-logo.svg";

import { Link } from "react-router-dom";

const SignupSectionContainer = styled.div`
  display: grid;
  place-items: center;
  grid-template-rows: 15% 70% 15%;
  min-width: 800px;
`

class SignupSection extends React.Component
{

    constructor(props)
    {
        super(props);

        this.state = {  }

        this.nameRef = React.createRef();
        this.usernameRef = React.createRef();
        this.emailRef = React.createRef();
        this.passwordRef = React.createRef();
        this.checkboxRef = React.createRef();
    }

    render()
    {
        return (
            <>
                <SignupSectionContainer>

                    <div id="sign-in-container">
                        <div id="sign-in-wrapper">
                            <p>
                                Already a member?&nbsp;
                                <Link to="/account/login">Sign in</Link>
                            </p>
                        </div>
                    </div>

                    <div id="sign-up-form">

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

                        <form>

                            <div>
                                <label ref={this.nameRef} htmlFor="full-name">Full Name</label>
                                <input type="text" id="full-name"/>
                            </div>
                            <div>
                                <label ref={this.usernameRef} htmlFor="username">Username</label>
                                <input type="text" id="username"/>
                            </div>
                            <div>
                                <label ref={this.emailRef} htmlFor="email">Email</label>
                                <input type="email" id="email"/>
                            </div>
                            <div>
                                <label ref={this.passwordRef} htmlFor="password">Password</label>
                                <input type="password" id="password"/>
                            </div>
                            <div>
                                <input ref={this.checkboxRef} type="checkbox"/>
                                <label htmlFor="checkbox">Creating an account means you are okay with our Terms of Service, Privacy Policy, and our default Notification Settings.</label>
                            </div>

                            <button>Create Account</button>

                        </form>

                    </div>

                    <div id="captcha-protection">
                        <p>
                            This site is protected by reCAPTCHA and the Google&nbsp;
                            <a href="">Privacy Policy</a>&nbsp;
                            and&nbsp;
                            <a href="https://google.com/">Terms of Service</a>&nbsp;
                            apply.
                        </p>
                    </div>

                </SignupSectionContainer>
            </>
        )
    }
}

export default SignupSection