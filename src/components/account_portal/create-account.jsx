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

const SubmitButton = styled.div`
    background-color: #6AB26A;
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

const FormWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(min-content, 300px));
    grid-auto-rows: max-content;
    place-content: center;
    row-gap: 20px;
    column-gap: 40px;
    
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
    
    & > form
    {
        grid-column: 1 / 3;
        display: grid;
        column-gap: 40px;
        row-gap: 20px;
        grid-template-columns: repeat(2, minmax(min-content, 300px));
    }
    
    & > form > div
    {
        display: grid;
        row-gap: 5px;
    }
    
    & > form > div:nth-of-type(3), & > form > div:nth-of-type(4)
    {
        grid-column: 1 / 3;
    }
    
    & > form > div:nth-of-type(5)
    {
        grid-column: 1 / 3;
        display: grid;
        grid-auto-flow: column;
        column-gap: 20px;
        align-items: center;
    }
`

class SignupSection extends React.Component
{

    constructor(props)
    {
        super(props);

        this.state =
        {
            values: {
                name: '',
                username: '',
                email: '',
                password: '',
                checkbox: false
            },

            errorChecks: {
                name: false,
                username: false,
                email: false,
                password: false,
                checkbox: false
            }
        }

        this.nameRef = React.createRef();
        this.usernameRef = React.createRef();
        this.emailRef = React.createRef();
        this.passwordRef = React.createRef();
        this.checkboxRef = React.createRef();
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

    inputValidation = () =>
    {

    }

    handleCreateAccount = () =>
    {



        /* TODO: Utilize this debug */
        [this.state.values].map(item => {
            console.log(item)
        })
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

                    <FormWrapper>

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
                                <label ref={this.nameRef}>Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="full-name"
                                    value={this.state.values.name}
                                    onChange={this.handleInput}
                                />
                            </div>
                            <div>
                                <label ref={this.usernameRef}>Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    value={this.state.values.username}
                                    onChange={this.handleInput}/>
                            </div>
                            <div>
                                <label ref={this.emailRef}>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={this.state.values.email}
                                    onChange={this.handleInput}
                                />
                            </div>
                            <div>
                                <label ref={this.passwordRef}>Password</label>
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
                                    ref={this.checkboxRef}
                                    name="checkbox"
                                    type="checkbox"
                                    value={this.state.values.checkbox}
                                    onChange={this.handleInput}
                                />
                                <label htmlFor="checkbox">Creating an account means you are okay with our Terms of Service, Privacy Policy, and our default Notification Settings policies.</label>
                            </div>

                            <SubmitButton onClick={this.handleCreateAccount}>Create Account</SubmitButton>
                        </form>

                    </FormWrapper>

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