import React, { Component } from "react";
import Forminput from "../forminput/Forminput";
import "./signin.style.scss";
import CustomButton from "../custombutton/CustomButton";
import { provider, auth } from "../../firebase-utils";

export class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }
  submitHandler = async e => {
    e.preventDefault();
    const {email , password} = this.state

    try{
        await auth.signInWithEmailAndPassword(email , password)
      this.setState({
        email: "",
        password: ""
      })
    } catch (error){
        console.log(error)
    }
  };

  changeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  signIn = () => {
    auth.signInWithPopup(provider).catch(error => alert(error.message));
  };
  render() {
    return (
      <div className="sign-in">
        <h2 className="title">Already have an account</h2>
        <span>Signin with your Email and Password</span>
        <form onSubmit={this.submitHandler}>
          <Forminput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.changeHandler}
            label="Email"
          />

          <Forminput
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.changeHandler}
            label="Password"
          />

          <div className='button'>
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={this.signIn} isGoogleSignin>
              {" "}
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default Signin;
