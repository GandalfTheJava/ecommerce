import React, { Component } from 'react';
import "./sign-in.styles.scss";
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
                    <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        autoComplete="off"
                        require="true"
                        onChange={this.handleChange}
                    />
                    <label>Email</label>
                    <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        autoComplete="off"
                        require="true"
                        onChange={this.handleChange}
                    />
                    <label>Password</label>

                    <input type="submit" value="Submit Form" />
                </form>
            </div>);
    }
}

export default SignIn;