import React, { Component } from "react";
import Forminput from "../forminput/Forminput";
import './signin.style.scss'
import CustomButton from "../custombutton/CustomButton";

export class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }
  submitHandler = e => {
    e.preventDefault();
  };

  changeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className='sign-in'>
        <h2 className='title'>Already have an account</h2>
        <span>Signin with your Email and Password</span>
        <form onSubmit={this.submitHandler}>
          <Forminput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.changeHandler}
            label="Email"
            required
          />

          <Forminput
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.changeHandler}
            label="Password"
            required
          />
          <CustomButton type='submit'>
              Sign In
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default Signin;
