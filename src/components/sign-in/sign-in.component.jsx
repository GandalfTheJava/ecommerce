import React, { Component } from 'react';
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }
    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.email);
        console.log(this.state.password);
        this.setState({ email: "", password: "" })
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your Email and Password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        label="Email"
                        value={this.state.email}
                        autoComplete="off"
                        require="true"
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        type="password"
                        name="password"
                        label="Password"
                        value={this.state.password}
                        autoComplete="off"
                        require="true"
                        handleChange={this.handleChange}
                    />
                    <div className="buttons">
                        <CustomButton type="submit">Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google </CustomButton>
                    </div>
                </form>
            </div >);
    }
}

export default SignIn;