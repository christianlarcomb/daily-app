import React from 'react'
import styled from 'styled-components'

import '../../styles/portal_panels/login-account.css'
import '../../styles/global_styles/portal_shared.css'

import { ReactComponent as AppleLogo } from "../../assets/svgs/apple-logo.svg";
import { ReactComponent as GoogleLogo } from "../../assets/svgs/google-logo.svg";

import { Link } from "react-router-dom";

const LoginAccountContainer = styled.div`
  display: grid;
  place-items: center;
  grid-template-rows: 15% 70% 15%;
  min-width: 800px;
`

class LoginAccount extends React.Component
{

    constructor(props)
    {
        super(props);

        this.state = {  }

        this.nameRef = React.createRef();
        this.usernameRef = React.createRef();
        this.emailRef = React.createRef();
        this.passwordRef = React.createRef();
    }

    render()
    {
        return (
            <>
                <LoginAccountContainer>

                    <div id="sign-in-container">
                        <div id="sign-in-wrapper">
                            <p>
                                New to Daily?&nbsp;
                                <Link to="/account/create">Sign up</Link>
                            </p>
                        </div>
                    </div>

                    <div id="sign-in-form">

                        <h1>Sign in</h1>

                        <a className="platform-button" href="bepis.com">
                            <AppleLogo/>
                            <p>Sign in with Apple</p>
                        </a>

                        <a className="platform-button" href="bepis.com">
                            <GoogleLogo/>
                            <p>Sign in with Google</p>
                        </a>

                        <div className="or-divider">
                            <hr/>
                            Or
                            <hr/>
                        </div>

                        <form>
                            <div>
                                <label htmlFor="usernameoremail">Username or Email</label>
                                <input ref={this.usernameRef} type="text" id="usernameoremail"/>
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <input ref={this.passwordRef} type="password" id="password"/>
                            </div>
                            <button>Sign In</button>
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

                </LoginAccountContainer>
            </>
        )
    }
}

export default LoginAccount