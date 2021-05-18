import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/button.component";

// import google auth
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
} from "./sign-in.styles";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userInfo, setInfo] = useState({ email: "", password: "" });

  const { email, password } = userInfo;

  const handleSubmit = async (event) => {
    // prevent a refresh
    event.preventDefault();
    emailSignInStart(email, password);
  };

  // pull values
  const handleChange = (event) => {
    const { value, name } = event.target;

    // spread in all userInfo & just get the values we need
    setInfo({ ...userInfo, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="email"
          handleChange={handleChange}
          value={email}
          required
        />
        <FormInput
          name="password"
          type="password"
          handleChange={handleChange}
          value={password}
          label="password"
          required
        />
        <ButtonsBarContainer>
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  // get email & password
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
